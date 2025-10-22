import { useState } from "react";
import Text from "../components/text";

interface TimeSelectProps
  extends Omit<React.ComponentProps<"input">, "type" | "disabled"> {
  name: string;
}
const timeGroups = [
  { title: "Manhã", times: ["09:00", "10:00", "11:00", "12:00"] },
  {
    title: "Tarde",
    times: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  },
  { title: "Noite", times: ["19:00", "20:00", "21:00"] },
];

export default function TimeSelect({ name, ...props }: TimeSelectProps) {
  const [selected, setSelected] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-md-bold" className="text-gray-200">
        Horários
      </Text>
      {timeGroups.map((timeGroup, index) => {
        return (
          <div key={`${timeGroup.title}-${index}`}>
            <Text variant="body-sm-regular" className="text-gray-200">
              {timeGroup.title}
            </Text>
            <div className="flex flex-wrap gap-4">
              {timeGroup.times.map((time) => {
                return (
                  <label className="cursor-pointer">
                    <input
                      {...props}
                      checked={selected === time}
                      type="radio"
                      name={name}
                      value={time}
                      className="hidden peer"
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <div
                      className="
                        w-20 h-10 flex items-center justify-center rounded-xl
                        bg-gray-600 border-1 border-gray-400
                        text-gray-200
                        hover:bg-gray-500 hover:border-gray-500 hover:border-0
                        peer-checked:border-yellow-dark  peer-checked:bg-gray-600 peer-checked:border-2 peer-checked:text-yellow
                        transition"
                    >
                      <span>{time}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
