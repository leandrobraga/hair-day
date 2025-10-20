import { useState } from "react";

interface TimeSelectProps extends Omit<React.ComponentProps<"input">, "type"> {
  name: string;
  values: string[];
}

export default function TimeSelect({ name, values }: TimeSelectProps) {
  const [selected, setSelected] = useState("");
  return (
    <div className="flex gap-4">
      {values.map((value, index) => {
        return (
          <label key={`${index}-${value}`} className="cursor-pointer">
            <input
              checked={selected === value}
              type="radio"
              name={name}
              value={value}
              className="hidden peer"
              onChange={(e) => setSelected(e.target.value)}
            />
            <div
              className="
              w-20 h-10 flex items-center justify-center rounded-xl
              bg-gray-600 border-1 border-gray-400
              hover:bg-gray-500 hover:border-gray-500 hover:border-0
              transition"
            >
              <span className="text-gray-200">{value}</span>
            </div>
          </label>
        );
      })}
    </div>
  );
}
