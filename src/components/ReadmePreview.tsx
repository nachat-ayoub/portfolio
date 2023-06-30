import MarkdownPreview from '@uiw/react-markdown-preview';
import React, { useEffect, useState } from 'react';

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
        const data = await response.json();

        // Get the content of the README.md file
        const readmeContentBase64 = data.content;
        const decodedContent = atob(readmeContentBase64);
        const markdownContent = decodeURIComponent(decodedContent);

        // Convert the Markdown content to HTML
        // const htmlContent = DOMPurify.sanitize(marked.parse(markdownContent));
        // setReadmeContent(htmlContent);
        setReadmeContent(markdownContent);
      } catch (_error: any) {
        setError(_error);
        console.error('Error fetching README.md', _error);
      }
    };

    fetchReadme();
  }, [repoUrl]);

  return (
    <div data-color-mode={mode} className='w-full'>
      {error ? <div>{error}</div> : <MarkdownPreview source={readmeContent} />}
    </div>
  );
};

export default ReadmePreview;
