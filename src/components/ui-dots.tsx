interface UiDotsProps {
  cellSize?: number;
  dotSize?: number;
  color?: string;
  className?: string;
}

export function UiDots({
  cellSize = 40, // distância entre os pontos
  dotSize = 2, // tamanho do ponto
  color = "255,255,255,0.2",
  className,
}: UiDotsProps) {
  return (
    <div
      className={`absolute inset-0 -z-10 w-full h-full ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(${color}) ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        backgroundPosition: "center center",
      }}
    />
  );
}
