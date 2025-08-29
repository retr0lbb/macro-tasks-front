interface UiGridProps {
  cellSize?: number
  color?: string
  className?: string
}

export function UiGrid({
  cellSize = 40,
  color = "255,255,255,0.05",
  className
}: UiGridProps) {
  return (
    <div
      className={`absolute inset-0 -z-10 w-full h-full ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(${color}) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(${color}) 1px, transparent 1px)
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`
      }}
    />
  )
}
