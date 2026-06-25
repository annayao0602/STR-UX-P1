import { customInstructions, questions } from "@/app/data/questions";
import { CustomizationsPanel } from "./customizations-panel";
import { QuestionPanel } from "./question-panel";
import { RecommendationsPanel } from "./recommendations-panel";
import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";

export function AgentDashboard() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#fafafa]">
      <Toolbar />

      <div className="flex min-h-0 flex-1">
        <Sidebar />

        <main className="flex min-w-0 flex-1 flex-col gap-4 overflow-y-auto px-6 py-4">
          <p className="text-center text-[14px] leading-[18px] text-[#2d2d2d]">
            LAST RUN 6/14/26 3:59PM{" "}
            <span className="text-[#9f9f9f]">(3d ago)</span>
          </p>

          <QuestionPanel questions={questions} />
          <CustomizationsPanel instructions={customInstructions} />
        </main>

        <RecommendationsPanel />
      </div>
    </div>
  );
}
