import { useEffect, useState } from "react";
import Text from "../components/text";
import { getAppointmentsByDayParts } from "../helpers/utils";
import useAppointment from "../hooks/use-appointment";
import type { Appointment } from "../models/appointment";

interface TimeSelectProps
  extends Omit<React.ComponentProps<"input">, "type" | "disabled"> {
  name: string;
  filterDay: string;
}
const timeGroups = [
  { title: "Manhã", times: ["09:00", "10:00", "11:00", "12:00"] },
  {
    title: "Tarde",
    times: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  },
  { title: "Noite", times: ["19:00", "20:00", "21:00"] },
];

export default function TimeSelect({
  name,
  filterDay,
  ...props
}: TimeSelectProps) {
  const { appointments } = useAppointment();
  const [appointmentsbyDay, setAppointmentsbyDay] = useState<
    Array<Appointment>
  >([]);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    const [m, a, n] = getAppointmentsByDayParts(appointments, filterDay);
    setAppointmentsbyDay([...m, ...a, ...n]);
  }, [appointments, filterDay]);
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
              {timeGroup.times.map((time, index) => {
                let disabled = false;
                if (appointmentsbyDay.some((a) => a.time === time)) {
                  disabled = true;
                }

                return (
                  <label key={`${time}-${index}`} className="cursor-pointer">
                    <input
                      {...props}
                      checked={selected === time}
                      type="radio"
                      name={name}
                      disabled={disabled}
                      value={time}
                      className="hidden peer"
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <div
                      className={disabled ? "timeSelectDisabled" : "timeSelect"}
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
