import CalendarIcon from "../assets/icons/calendar-blank.svg?react";
import Icon from "./icon";

export default function Select() {
  return (
    <div className="relative ">
      <Icon
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow bg-gray-700"
        svg={CalendarIcon}
      />
      <select className="text-gray-200 border-1 w-full  border-gray-400 rounded-lg py-2 pl-10  focus:outline-none focus:ring-2  focus:ring-yellow-dark">
        <option className="bg-gray-400 text-gray-800">21/10/2025</option>
        <option className="bg-gray-400 text-gray-800">22/10/2025</option>
      </select>
    </div>
  );
}
