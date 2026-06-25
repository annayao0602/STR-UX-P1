import type { QuestionRow } from "@/app/data/questions";

function StatusDot({ correct }: { correct: boolean }) {
  return (
    <span
      className={`mt-1.5 inline-block size-2 shrink-0 rounded-full ${
        correct ? "bg-[#c3cd3a]" : "bg-[#e55353]"
      }`}
      aria-hidden
    />
  );
}

export function QuestionPanel({ questions }: { questions: QuestionRow[] }) {
  return (
    <section className="overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-[#e5e5e5] px-8 py-4">
        <h2 className="text-center text-[16px] leading-[18px] text-[#2d2d2d]">
          QUESTIONS
        </h2>
        <h2 className="text-center text-[16px] leading-[18px] text-[#2d2d2d]">
          Agent Answer
        </h2>
        <h2 className="text-center text-[16px] leading-[18px] text-[#2d2d2d]">
          Expected Answer
        </h2>
      </div>

      <div className="max-h-[420px] overflow-y-auto">
        {questions.map((row, index) => (
          <div
            key={row.id}
            className={`grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] gap-4 px-8 py-4 ${
              index < questions.length - 1 ? "border-b border-[#ececec]" : ""
            }`}
          >
            <div className="flex gap-2">
              <StatusDot correct={row.correct} />
              <p className="text-[14px] leading-[1.5] tracking-[-0.154px] text-[#2d2d2d]">
                Q{row.id}. {row.question}
              </p>
            </div>
            <p className="text-[14px] leading-[1.5] tracking-[-0.154px] text-[#2d2d2d]">
              {row.agentAnswer}
            </p>
            <p className="text-[14px] leading-[1.5] tracking-[-0.154px] text-[#2d2d2d]">
              {row.expectedAnswer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
