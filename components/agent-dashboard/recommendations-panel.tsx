import { AiIcon, ChevronRight, SuggestionsIcon } from "./icons";

function RecommendationCard({
  prefix,
  highlight,
}: {
  prefix: string;
  highlight: string;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-lg bg-[#f4f7fa] px-5 py-4 text-left shadow-[0_1px_1px_rgba(41,49,59,0.12)]"
    >
      <p className="text-[14px] leading-[26px] text-[#181825]">
        {prefix}{" "}
        <span className="font-medium text-[#0e6ff9]">{highlight}</span>
      </p>
      <ChevronRight className="shrink-0" />
    </button>
  );
}

export function RecommendationsPanel() {
  return (
    <aside className="flex w-[379px] shrink-0 flex-col bg-white shadow-[-1px_0_2px_rgba(0,0,0,0.1)]">
      <div className="relative bg-[#ececec] px-1 py-1">
        <div className="flex items-center">
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-3 py-2">
            <SuggestionsIcon className="size-7" />
            <span className="text-[16px] leading-5 text-[#464651]">
              Recommendations
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-2 py-2">
            <AiIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-[17px] pt-5">
        <section className="mb-6">
          <h2 className="mb-3 text-[16px] font-bold leading-5 text-black">
            AI SUMMARY
          </h2>

          <div className="mb-2 flex items-center gap-2">
            <p className="text-[16px] leading-5 text-black">
              7/10 questions correct
            </p>
            <span className="rounded-lg bg-[#cdf8c1] px-2 py-0.5 text-[10px] leading-5 text-[#3a7d3e]">
              +1 question
            </span>
          </div>

          <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-[#d9d9d9]">
            <div className="h-full w-[70%] rounded-full bg-[#c3cd3a]" />
          </div>

          <div className="rounded-lg bg-[#f8f9fa] p-3">
            <p className="text-[14px] leading-5 text-black">
              Agent accuracy drops on complex queries due to calculation
              omissions, such as ignoring shipping fees, and semantic category
              confusion. Furthermore, the agent struggles significantly with
              output consistency, frequently returning casual shorthand or
              unformatted values instead of adhering to strict reporting
              standards.
            </p>
            <button
              type="button"
              className="mt-3 text-[11px] leading-5 text-[#4147d5]"
            >
              Hide Summary
            </button>
          </div>
        </section>

        <hr className="mb-5 border-[#e5e5e5]" />

        <section className="flex flex-1 flex-col gap-3">
          <h2 className="text-[16px] font-bold leading-[26px] text-black">
            RECOMMENDATIONS
          </h2>
          <p className="text-[14px] leading-5 text-black">
            Click below to expand and see actions.
          </p>

          <RecommendationCard prefix="Fix" highlight="Agent Tone" />
          <RecommendationCard prefix="Format" highlight="Monetary Responses" />
        </section>
      </div>

      <div className="p-7 pt-4">
        <button
          type="button"
          className="h-[34px] w-full rounded-md bg-[#0e6ff9] text-[16px] font-bold leading-[22px] text-white"
        >
          Apply All
        </button>
      </div>
    </aside>
  );
}
