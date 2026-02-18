interface ActionButtonsProps {
  onFormat: () => void;
  onMinify: () => void;
  onCopy: () => void;
  onClear: () => void;
  copied: boolean;
  hasOutput: boolean;
}

export default function ActionButtons({
  onFormat,
  onMinify,
  onCopy,
  onClear,
  copied,
  hasOutput,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={onFormat}
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
      >
        Format
      </button>
      <button
        onClick={onMinify}
        className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-700 text-white font-medium transition-colors"
      >
        Minify
      </button>
      <button
        onClick={onCopy}
        disabled={!hasOutput}
        className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <button
        onClick={onClear}
        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
      >
        Clear
      </button>
    </div>
  );
}
