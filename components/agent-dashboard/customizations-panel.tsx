import { BookIcon, DatasetIcon } from "./icons";

function Toggle({ checked }: { checked: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`relative h-[18px] w-9 rounded-full transition-colors ${
        checked ? "bg-[#0e6ff9]" : "bg-[#d9d9d9]"
      }`}
    >
      <span
        className={`absolute top-0.5 size-3.5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-[19px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export function CustomizationsPanel({
  instructions,
}: {
  instructions: string;
}) {
  return (
    <div className="relative h-full pt-5">
      <div className="absolute left-5 top-0 z-10 inline-flex rounded-lg bg-[#ececec] p-0.5">
        <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-[14px] leading-[18px] text-black">
          <BookIcon />
          Customizations
        </div>
        <div className="flex items-center px-4 py-2">
          <DatasetIcon />
        </div>
      </div>

      <section className="flex h-full flex-col overflow-hidden rounded-lg bg-white px-5 pb-5 pt-12 shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[14px] leading-[18px] text-[#2d2d2d]">
            CUSTOM INSTRUCTIONS
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[-0.11px] text-[#666]">
              show changes since last save
            </span>
            <Toggle checked />
          </div>
        </div>

        <p className="mb-3 text-[14px] leading-[1.5] tracking-[-0.154px] text-[#2d2d2d]">
          Tell the agent about your business background, and the special
          requirements on the data.
        </p>

        <div className="relative mb-4 flex-1 min-h-[120px]">
          <div className="h-full rounded-lg bg-[#f5f5f5]" />
          <span className="absolute bottom-2 right-3 text-[12px] leading-4 text-[#727679]">
            0/500
          </span>
        </div>

        <p className="mb-3 text-[14px] leading-[1.5] tracking-[-0.154px] text-[#2d2d2d]">
          Specify the format and tone of the agent responses.
        </p>

        <div className="relative flex-1 min-h-[120px]">
          <textarea
            readOnly
            value={instructions}
            className="h-full w-full resize-none rounded-lg bg-[#f5f5f5] p-4 text-[14px] leading-[1.5] tracking-[-0.154px] text-[#464646] outline-none"
          />
          <span className="absolute bottom-2 right-3 text-[12px] leading-4 text-[#727679]">
            0/500
          </span>
        </div>
      </section>
    </div>
  );
}
