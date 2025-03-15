
import React from 'react';
import { Check, X, FileCode } from 'lucide-react';

interface CodeSnippetProps {
  fileName: string;
  language: string;
  beforeCode: string;
  afterCode: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ fileName, language, beforeCode, afterCode }) => {
  return (
    <div className="code-snippet shadow-lg rounded-lg overflow-hidden border border-brand-blue/10">
      <div className="code-header">
        <div className="file-name flex items-center gap-2">
          <FileCode className="h-4 w-4 text-brand-light" />
          <span>{fileName}</span>
        </div>
        <div className="buttons">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 divide-x divide-brand-blue/20">
        <div className="bg-[#1E293B] p-5">
          <div className="flex items-center gap-2 mb-3 text-red-400">
            <X className="h-4 w-4" />
            <span className="text-xs uppercase font-semibold">Before</span>
          </div>
          <pre className="text-sm">
            {beforeCode.split('\n').map((line, index) => (
              <div key={`before-${index}`} className="code-line before">
                {line}
              </div>
            ))}
          </pre>
        </div>
        
        <div className="bg-[#1E293B] p-5">
          <div className="flex items-center gap-2 mb-3 text-green-400">
            <Check className="h-4 w-4" />
            <span className="text-xs uppercase font-semibold">After</span>
          </div>
          <pre className="text-sm">
            {afterCode.split('\n').map((line, index) => (
              <div key={`after-${index}`} className="code-line after">
                {line}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
