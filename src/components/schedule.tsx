import SunIcon from "../assets/icons/sun.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import { type Appointment } from "../models/appointment";
import Icon from "./icon";
import Text from "./text";

interface ScheduleProps {
  appointments: Appointment[];
}

export default function Schedule({ appointments }: ScheduleProps) {
  return (
    <>
      {appointments.map((appointment) => {
        return (
          <>
            <div className="flex justify-between items-center border-1 border-gray-600 rounded-t-lg h-11">
              <div className="flex gap-2 pl-4">
                <Icon className="text-yellow-dark h-5 w-5" svg={SunIcon} />
                <Text className="text-gray-300" variant="body-sm-regular">
                  Manhã
                </Text>
              </div>
              <div className="pr-4">
                <Text className="text-gray-300" variant="body-sm-regular">
                  09h-12h
                </Text>
              </div>
            </div>
            <div className="flex justify-between items-center gap-3 p-4 border-1 border-gray-600 rounded-b-lg">
              <div className="flex gap-5">
                <Text className="text-gray-200" variant="body-md-bold">
                  {appointment.time}
                </Text>
                <Text className="text-gray-200" variant="body-md-regular">
                  {appointment.date}
                </Text>
              </div>
              <Icon svg={TrashIcon} className="text-yellow-dark w-5 h-5" />
            </div>
          </>
        );
      })}
    </>
  );
}
