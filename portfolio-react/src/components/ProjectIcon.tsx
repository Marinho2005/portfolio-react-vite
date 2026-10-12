interface ProjectIconProps {
  name: string
}

export function ProjectIcon({ name }: ProjectIconProps) {
  if (name === 'knight') return <span className="knight" aria-hidden="true">♞</span>
  if (name === 'pokeball') return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h6m6 0h6" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
  if (name === 'bulb') return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 18h6M10 22h4M8.2 14.5A7 7 0 1 1 15.8 14.5C14.7 15.3 14 16.5 14 18h-4c0-1.5-.7-2.7-1.8-3.5Z" />
    </svg>
  )
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h3l1.5-2h7L17 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}