export function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      aria-hidden
    >
      <path d="M1 1L4.5 4L8 1" stroke="#29313B" strokeWidth="1.2" />
    </svg>
  );
}

export function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      aria-hidden
    >
      <path d="M1 1L6 6L1 11" stroke="#29313B" strokeWidth="1.2" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M1 1L13 13M13 1L1 13"
        stroke="#29313B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UndoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 2L2 6L6 10"
        stroke="#29313B"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6H10C12.2 6 14 7.8 14 10"
        stroke="#29313B"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ResetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M13.5 8A5.5 5.5 0 1 1 8 2.5"
        stroke="#29313B"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M8 1V4H11"
        stroke="#29313B"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SaveIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 3H13L15 5V15H3V3Z"
        stroke="#29313B"
        strokeWidth="1.2"
      />
      <path d="M6 3V7H12V3" stroke="#29313B" strokeWidth="1.2" />
      <path d="M6 11H12" stroke="#29313B" strokeWidth="1.2" />
    </svg>
  );
}

export function GroupsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      aria-hidden
    >
      <circle cx="4" cy="4" r="2" stroke="#29313B" strokeWidth="1" />
      <circle cx="11" cy="4" r="2" stroke="#29313B" strokeWidth="1" />
      <circle cx="7.5" cy="10" r="2" stroke="#29313B" strokeWidth="1" />
    </svg>
  );
}

export function AllIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      aria-hidden
    >
      <rect x="1" y="1" width="5" height="5" rx="0.5" stroke="#29313B" />
      <rect x="9" y="1" width="5" height="5" rx="0.5" stroke="#29313B" />
      <rect x="1" y="8" width="5" height="5" rx="0.5" stroke="#29313B" />
      <rect x="9" y="8" width="5" height="5" rx="0.5" stroke="#29313B" />
    </svg>
  );
}

export function RobotIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      aria-hidden
    >
      <rect
        x="1"
        y="4"
        width="13"
        height="10"
        rx="2"
        stroke="#29313B"
        strokeWidth="1"
      />
      <rect x="4" y="7" width="3" height="3" rx="0.5" fill="#29313B" />
      <rect x="8" y="7" width="3" height="3" rx="0.5" fill="#29313B" />
      <path d="M7.5 1V4" stroke="#29313B" strokeWidth="1" />
      <circle cx="7.5" cy="1" r="1" fill="#29313B" />
    </svg>
  );
}

export function SuggestionsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
    >
      <circle cx="14" cy="14" r="13" fill="#E9F2FE" />
      <path
        d="M14 7C10.1 7 7 9.7 7 13.2C7 15.1 7.9 16.7 9.3 17.7L8.5 21L12.1 19.2C12.7 19.3 13.3 19.4 14 19.4C17.9 19.4 21 16.7 21 13.2C21 9.7 17.9 7 14 7Z"
        fill="#0E6FF9"
      />
    </svg>
  );
}

export function AiIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <circle cx="9" cy="9" r="7" stroke="#464651" strokeWidth="1.2" />
      <path
        d="M6 9H12M9 6V12"
        stroke="#464651"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 2H7V12H2V2Z"
        stroke="#29313B"
        strokeWidth="1"
      />
      <path
        d="M7 2H12V12H7"
        stroke="#29313B"
        strokeWidth="1"
      />
    </svg>
  );
}

export function DatasetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <ellipse cx="7" cy="4" rx="5" ry="2" stroke="#29313B" strokeWidth="1" />
      <path
        d="M2 4V10C2 11.1 4.2 12 7 12C9.8 12 12 11.1 12 10V4"
        stroke="#29313B"
        strokeWidth="1"
      />
      <path d="M2 7C2 8.1 4.2 9 7 9C9.8 9 12 8.1 12 7" stroke="#29313B" strokeWidth="1" />
    </svg>
  );
}
