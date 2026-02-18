"use client";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("json", json);

interface JsonEditorProps {
  input: string;
  output: string;
  onInputChange: (value: string) => void;
  isDark: boolean;
}

export default function JsonEditor({
  input,
  output,
  onInputChange,
  isDark,
}: JsonEditorProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Input
        </label>
        <textarea
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder='Paste your JSON here...\n\n{\n  "example": "value"\n}'
          className="flex-1 min-h-[400px] p-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Output
        </label>
        <div className="flex-1 min-h-[400px] rounded-lg border border-slate-300 dark:border-slate-600 overflow-auto">
          {output ? (
            <SyntaxHighlighter
              language="json"
              style={isDark ? atomOneDark : atomOneLight}
              customStyle={{
                margin: 0,
                padding: "1rem",
                minHeight: "100%",
                fontSize: "0.875rem",
                background: isDark ? "#1e293b" : "#ffffff",
              }}
            >
              {output}
            </SyntaxHighlighter>
          ) : (
            <div className="p-4 text-slate-400 dark:text-slate-500 font-mono text-sm">
              Formatted JSON will appear here...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
