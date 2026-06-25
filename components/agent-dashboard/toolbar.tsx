import Image from "next/image";
import {
  ChevronDown,
  CloseIcon,
  ResetIcon,
  SaveIcon,
  UndoIcon,
} from "./icons";

export function Toolbar() {
  return (
    <header className="flex h-[46px] shrink-0 items-center justify-between bg-white px-[18px] shadow-[0_2px_4px_rgba(0,0,0,0.14)]">
      <div className="flex items-center gap-3">
        <div className="relative size-8 overflow-hidden rounded-full">
          <Image
            src="/app-icon.png"
            alt="App icon"
            width={32}
            height={32}
            className="size-8"
            priority
          />
        </div>
      </div>

      <h1 className="absolute left-1/2 -translate-x-1/2 text-[18px] leading-5 text-[#29313b]">
        Baseline Agent | Active
      </h1>

      <div className="flex items-center gap-3">
        <span className="text-[13px] text-[rgba(41,49,59,0.4)]">( Modified)</span>

        <div className="flex items-center gap-3">
          <button type="button" className="flex items-center gap-1.5" aria-label="Undo">
            <UndoIcon />
            <span className="flex h-[26px] w-3 items-center justify-center rounded-r-md bg-[rgba(153,180,208,0.1)]">
              <ChevronDown className="rotate-[-90deg]" />
            </span>
          </button>
          <button type="button" className="rotate-180" aria-label="Redo">
            <UndoIcon />
          </button>
        </div>

        <button type="button" className="p-1" aria-label="Reset">
          <ResetIcon />
        </button>

        <button
          type="button"
          className="flex h-[26px] items-center rounded-md border border-transparent"
          aria-label="Save"
        >
          <span className="flex items-center px-1.5 py-1">
            <SaveIcon />
          </span>
          <span className="flex h-[26px] w-3 items-center justify-center rounded-r-md px-2">
            <ChevronDown className="rotate-[-90deg]" />
          </span>
        </button>

        <button
          type="button"
          className="h-[26px] min-w-[60px] rounded-md bg-[#0e6ff9] px-3 text-[14px] leading-4 text-white"
        >
          Run Agent
        </button>

        <button
          type="button"
          className="h-[26px] min-w-[60px] rounded-md bg-[#181825] px-3 text-[14px] leading-4 text-white"
        >
          Publish
        </button>

        <button type="button" className="p-1" aria-label="Close">
          <CloseIcon />
        </button>
      </div>
    </header>
  );
}
