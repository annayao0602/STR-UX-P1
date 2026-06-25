export type QuestionRow = {
  id: number;
  question: string;
  agentAnswer: string;
  expectedAnswer: string;
  correct: boolean;
};

export const questions: QuestionRow[] = [
  {
    id: 1,
    question: "What was the total revenue generated from Order #105?",
    agentAnswer: "$50.00",
    expectedAnswer: "$55.00 (Includes $5 shipping fee)",
    correct: false,
  },
  {
    id: 2,
    question: "How many items are currently stocked in the Texas warehouse?",
    agentAnswer: "45 units in tx.",
    expectedAnswer: "45 units.",
    correct: true,
  },
  {
    id: 3,
    question: "How many Shirts did we sell yesterday?",
    agentAnswer: "120 shirts.",
    expectedAnswer: "40 shirts.",
    correct: false,
  },
  {
    id: 4,
    question: "What is our standard return policy for damaged items?",
    agentAnswer: "30 days full refund w/ receipt",
    expectedAnswer: "30-day full refund with receipt.",
    correct: true,
  },
  {
    id: 5,
    question: "Who is the primary customer listed on Order #106?",
    agentAnswer: "jane doe",
    expectedAnswer: "Jane Doe.",
    correct: true,
  },
  {
    id: 6,
    question: "What is the average customer review score for Winter Jackets?",
    agentAnswer: "4.8/5",
    expectedAnswer: "4.8 out of 5 stars.",
    correct: true,
  },
  {
    id: 7,
    question: "What is the most expensive item currently in the catalog?",
    agentAnswer: "The leather jacket ($199)",
    expectedAnswer: "Leather Jacket ($199.00).",
    correct: true,
  },
  {
    id: 8,
    question: "Was Order #107 shipped on time?",
    agentAnswer: "yes, shipped on 10/12.",
    expectedAnswer: "Yes, shipped on October 12th.",
    correct: true,
  },
  {
    id: 9,
    question: "What is the inventory count for SKU-4421?",
    agentAnswer: "12 units",
    expectedAnswer: "12 units",
    correct: true,
  },
  {
    id: 10,
    question: "What was the refund amount for Order #98?",
    agentAnswer: "$45",
    expectedAnswer: "$45.00",
    correct: false,
  },
];

export const customInstructions = `Multi-Currency Environment: Our transaction tables contain multi-currency data (primarily USD, EUR and CHF). Never assume a default currency of USD. Always check the currency_code column and calculate exchange conversions dynamically when aggregating totals.

Wholesale vs. Retail Isolation: Distinguish strictly between B2B wholesale restocking (stored in vendor_invoices or supplier_ledgers) and B2C retail sales (stored in retail_transactions).`;
