interface InitialsAvatarProps {
  name: string;
  className?: string;
}

const PALETTE = [
  ["#fef3c7", "#92400e"],
  ["#dbeafe", "#1e3a8a"],
  ["#dcfce7", "#14532d"],
  ["#fce7f3", "#831843"],
  ["#ede9fe", "#4c1d95"],
  ["#ffedd5", "#7c2d12"],
  ["#cffafe", "#155e75"],
  ["#fee2e2", "#7f1d1d"],
];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function initials(name: string): string {
  const words = name.replace(/[^\p{L}\p{N}\s]/gu, " ").trim().split(/\s+/);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function InitialsAvatar({ name, className }: InitialsAvatarProps) {
  const [bg, fg] = PALETTE[hash(name) % PALETTE.length];
  const text = initials(name);
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden
      className={className}
      role="img"
    >
      <title>{name}</title>
      <rect width="40" height="40" rx="20" fill={bg} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="16"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="600"
        fill={fg}
      >
        {text}
      </text>
    </svg>
  );
}
