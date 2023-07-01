import MarkdownPreview from '@uiw/react-markdown-preview';
import React, { useEffect, useState } from 'react';
import emojiRemarkPlugin from 'remark-emoji';

interface IReadmePreviewProps {
  repoUrl: string;
  mode?: 'light' | 'dark';
}

const ReadmePreview: React.FC<IReadmePreviewProps> = ({
  repoUrl,
  mode = 'light',
}) => {
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const extractRepoInfo = (
      url: string
    ): {
      repoOwner: string;
      repoName: string;
    } => {
      const regex = /github\.com\/([^/]+)\/([^/]+)(\/|$)/;
      const matches = url.match(regex);

      if (matches && matches.length === 4) {
        const repoOwner = matches[1];
        const repoName = matches[2];
        return { repoOwner, repoName };
      }
      return { repoOwner: '', repoName: '' };

      // TODO: Throw an error :
    };

    const fetchReadme = async () => {
      try {
        const { repoOwner, repoName } = extractRepoInfo(repoUrl);

        console.log({
          repoOwner,
          repoName,
          url: `https://api.github.com/repos/${repoOwner}/${repoName}/readme`,
        });

        const response = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/readme`
        );

        if (response.status === 200) {
          const data = await response.json();

          // Get the content of the README.md file
          const readmeContentBase64 = data.content;
          const decodedContent = atob(readmeContentBase64);
          const decodedArray = Uint8Array.from(decodedContent, (c) =>
            c.charCodeAt(0)
          ); // Convert decoded content to Uint8Array

          // Get the default branch name from the URL
          const branchName = new URL(data.url).searchParams.get('ref');

          let markdownContent = new TextDecoder('utf-8').decode(decodedArray);

          // For HTML img tags
          markdownContent = markdownContent.replace(
            /(<img\s+src=")([^"\s]+)"/g,
            (_, prefix, imagePath) => {
              const isRelative =
                !imagePath.startsWith('http') && !imagePath.startsWith('/');

              const imageUrl = isRelative
                ? `${repoUrl}/blob/${branchName}/${imagePath.replace(
                    /^\//,
                    ''
                  )}?raw=true`
                : imagePath;

              // const imageUrl = isRelative ? `/assetREADME.md/${imagePath}` : imagePath;
              return `${prefix}${imageUrl}"`;
            }
          );

          // For Markdown image syntax
          markdownContent = markdownContent.replace(
            /(\[.*?\]\()([^"\s]+)(\))/g,
            (_, prefix, imagePath) => {
              const isRelative =
                !imagePath.startsWith('http') && !imagePath.startsWith('/');

              const imageUrl = isRelative
                ? `${repoUrl}/blob/${branchName}/${imagePath.replace(
                    /^\//,
                    ''
                  )}?raw=true`
                : imagePath;

              // const imageUrl = isRelative
              //   ? `/assetREADME.md/${imagePath}`
              //   : imagePath;
              return `${prefix}${imageUrl}`;
            }
          );

          console.log(markdownContent);

          setReadmeContent(markdownContent);
        } else {
          setError(
            'This Project README.md does not exists, or someting went wrong.'
          );
        }
      } catch (_error) {
        console.log(_error);
      }
    };

    fetchReadme();
  }, [repoUrl]);

  return (
    <div className='w-full'>
      {error !== null ? (
        <div>{error}</div>
      ) : (
        <MarkdownPreview
          className='MarkdownPreview bg-inherit'
          source={readmeContent}
          remarkPlugins={[emojiRemarkPlugin]}
          wrapperElement={{
            'data-color-mode': mode,
          }}
        />
      )}
    </div>
  );
};

export default ReadmePreview;
