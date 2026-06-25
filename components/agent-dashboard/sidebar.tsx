import { AllIcon, ChevronDown, GroupsIcon, RobotIcon } from "./icons";

export function Sidebar() {
  return (
    <aside className="flex w-[240px] shrink-0 flex-col bg-white pt-3 shadow-[1px_0_2px_rgba(0,0,0,0.1)]">
      <div className="px-5 py-2.5">
        <div className="ml-auto flex w-fit gap-0.5">
          <div className="h-4 w-[23px] rounded-sm border border-[#313131]" />
          <div className="-ml-3 h-4 w-[17px] rounded-sm border border-[#313131] bg-white" />
        </div>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-between px-5 py-2.5 text-left"
      >
        <span className="flex items-center gap-2 text-[14px] leading-[18px] text-[#29313b]">
          <GroupsIcon />
          Saved Versions
        </span>
        <ChevronDown />
      </button>

      <div className="px-[43px] pb-1">
        <p className="text-[14px] leading-[18px] text-[#29313b]">
          Baseline Agent | Active
        </p>
        <p className="text-[11px] leading-[18px] text-[#8b8b92]">(saved 1d ago)</p>
      </div>

      <div className="px-[43px] pb-3">
        <p className="text-[14px] leading-[18px] text-[#29313b]">
          Baseline Agent V2
        </p>
        <p className="text-[11px] leading-[18px] text-[#8b8b92]">(saved 3d ago)</p>
      </div>

      <div className="flex items-center gap-2 bg-[#e9f2fe] px-5 py-2.5">
        <AllIcon />
        <span className="text-[14px] leading-[18px] text-[#29313b]">
          Compare Versions
        </span>
      </div>

      <button
        type="button"
        className="flex items-center gap-2 px-5 py-2.5 text-left text-[14px] leading-[18px] text-[#29313b]"
      >
        <RobotIcon />
        View Live Agent
      </button>
    </aside>
  );
}
