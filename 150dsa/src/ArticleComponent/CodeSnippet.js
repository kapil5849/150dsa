import React, { useRef } from 'react';
import './ArticleComponentCSS/CodeSnippet.css';

const CodeSnippet = ({ code }) => {
  const codeRef = useRef(null);

  const copyCodeToClipboard = () => {
    const el = codeRef.current;
    if (!el) return;

    el.select();
    document.execCommand('copy');
  };

  return (
    <div className="code-snippet-container">
      <div className="code-snippet-header">
        <h4 className="code-snippet-title">cpp Code Snippet</h4>
        <button className="copy-button" onClick={copyCodeToClipboard}>
          Copy
        </button>
      </div>
      <div className="code-snippet-body">
        <div className="macbook-container">
          <div className="macbook-screen">
            <textarea
              ref={codeRef}
              className="code-snippet-code"
              value={code}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
