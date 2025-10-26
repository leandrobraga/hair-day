import CalendarIcon from "../assets/icons/calendar-blank.svg?react";
import { getDaysOfCurrentMonth } from "../helpers/utils";
import Icon from "./icon";

const DAY_OF_MONTH = getDaysOfCurrentMonth();

interface SelectDayProps extends React.ComponentProps<"select"> {
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectDay({
  selectedDay,
  setSelectedDay,
  ...props
}: SelectDayProps) {
  return (
    <div className="relative ">
      <Icon
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow bg-gray-700"
        svg={CalendarIcon}
      />
      <select
        {...props}
        value={selectedDay}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedDay(e.target.value)
        }
        className="
        text-gray-200 border-1 w-full  border-gray-400 rounded-lg py-2 pl-10
        focus:outline-none focus:ring-2  focus:ring-yellow-dark"
      >
        {DAY_OF_MONTH.map((day, index) => (
          <option
            key={`${day}-${index}`}
            value={day}
            className="bg-gray-400 text-gray-800"
          >
            {day}
          </option>
        ))}
      </select>
    </div>
  );
}
