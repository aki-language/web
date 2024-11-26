import React, { useState } from 'react';
import Layout from '@theme/Layout';
import CodeEditor from '@monaco-editor/react';

export default function Playground(): JSX.Element {
  const [code, setCode] = useState('// Write your Aki code here\n');
  const [output, setOutput] = useState('');

  const executeCode = async () => {
    try {
      // TBD
      setOutput('Code execution result will appear here');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <Layout
      title="Playground"
      description="Try Aki programming language online">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6">
            <div className="playground-editor-container">
              <CodeEditor
                height="500px"
                defaultLanguage="javascript" // TBD
                value={code}
                onChange={(value) => setCode(value)}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  automaticLayout: true,
                }}
              />
            </div>
            <button
              className="button button--primary margin-top--md"
              onClick={executeCode}>
              Run Code
            </button>
          </div>
          <div className="col col--6">
            <div className="playground-output">
              <h3>Output</h3>
              <pre>{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
