"use client";

interface GMATScoreSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  color?: string;
}

export default function GMATScoreSlider({
  value,
  onChange,
  min = 205,
  max = 805,
  color = "#2463eb",
}: GMATScoreSliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="kawaii-range"
        style={
          {
            "--base": color,
          } as React.CSSProperties
        }
      />
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>{min}</span>
        <span className="text-lg font-bold text-gray-900">{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
