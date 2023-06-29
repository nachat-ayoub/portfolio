import { marked } from 'marked';
import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';

interface IProps {
  repoOwner: string;
  repoName: string;
}

const ReadmePreview: React.FC<IProps> = ({ repoOwner, repoName }) => {
  const [readmeContent, setReadmeContent] = useState('');

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/readme`
        );
        const data = await response.json();

        // Get the content of the README.md file
        const readmeContentBase64 = data.content;
        const decodedContent = atob(readmeContentBase64);
        const markdownContent = decodeURIComponent(decodedContent);

        // Convert the Markdown content to HTML
        const htmlContent = DOMPurify.sanitize(marked(markdownContent));
        setReadmeContent(htmlContent);
      } catch (_error: any) {
        setError(_error);
        console.error('Error fetching README.md', _error);
      }
    };

    fetchReadme();
  }, [repoOwner, repoName]);

  return error ? (
    <div>{error}</div>
  ) : (
    <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
  );
};

export default ReadmePreview;
