import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon-stars.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import BinIcon from "../assets/icons/trash.svg?react";
import { getAppointmentsByDayParts } from "../helpers/utils";
import { type Appointment, APPOINTMENT_KEY } from "../models/appointment";
import Icon from "./icon";
import Text from "./text";
import useAppointment from "../hooks/use-appointment";
import ButtonIcon from "./button-icon";

interface ScheduleProps {
  filterDay: string;
}

export default function Schedule({ filterDay }: ScheduleProps) {
  const [morning, setMorning] = useState<Array<Appointment>>([]);
  const [afternoon, setAfternoon] = useState<Array<Appointment>>([]);
  const [night, setNight] = useState<Array<Appointment>>([]);
  const [appointments] = useLocalStorage<Appointment[]>(APPOINTMENT_KEY, []);
  const { deleteAppointment } = useAppointment();

  useEffect(() => {
    const [m, a, n] = getAppointmentsByDayParts(appointments, filterDay);
    setMorning(m);
    setAfternoon(a);
    setNight(n);
  }, [appointments, filterDay]);

  return (
    <div>
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
      <div className="flex flex-col gap-4 p-4 border-1 border-gray-600 rounded-b-lg">
        {morning.length === 0 ? (
          <div className="flex justify-between">
            <Text className="text-gray-200" variant="body-md-regular">
              Sem agedamentos para esse período
            </Text>
          </div>
        ) : (
          morning.map((appointment, index) => {
            return (
              <div
                key={`${appointment.time}-${index}`}
                className="flex justify-between"
              >
                <div className="flex gap-5">
                  <Text className="text-gray-200" variant="body-md-bold">
                    {appointment.time}
                  </Text>
                  <Text className="text-gray-200" variant="body-md-regular">
                    {appointment.clientName}
                  </Text>
                </div>
                <ButtonIcon
                  onClick={() => deleteAppointment(appointment.id)}
                  icon={BinIcon}
                  className="text-yellow-dark w-5 h-5"
                />
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-between items-center border-1 border-gray-600 rounded-t-lg h-11">
        <div className="flex gap-2 pl-4">
          <Icon className="text-yellow-dark h-5 w-5" svg={CloudSunIcon} />
          <Text className="text-gray-300" variant="body-sm-regular">
            Tarde
          </Text>
        </div>
        <div className="pr-4">
          <Text className="text-gray-300" variant="body-sm-regular">
            13h-18h
          </Text>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 border-1 border-gray-600 rounded-b-lg">
        {afternoon.length === 0 ? (
          <div className="flex justify-between">
            <Text className="text-gray-200" variant="body-md-regular">
              Sem agedamentos para esse período
            </Text>
          </div>
        ) : (
          afternoon.map((appointment, index) => {
            return (
              <div
                key={`${appointment.time}-${index}`}
                className="flex justify-between"
              >
                <div className="flex gap-5">
                  <Text className="text-gray-200" variant="body-md-bold">
                    {appointment.time}
                  </Text>
                  <Text className="text-gray-200" variant="body-md-regular">
                    {appointment.clientName}
                  </Text>
                </div>
                <ButtonIcon
                  onClick={() => deleteAppointment(appointment.id)}
                  icon={BinIcon}
                  className="text-yellow-dark w-5 h-5"
                />
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-between items-center border-1 border-gray-600 rounded-t-lg h-11">
        <div className="flex gap-2 pl-4">
          <Icon className="text-yellow-dark h-5 w-5" svg={MoonIcon} />
          <Text className="text-gray-300" variant="body-sm-regular">
            Noite
          </Text>
        </div>
        <div className="pr-4">
          <Text className="text-gray-300" variant="body-sm-regular">
            19-21h
          </Text>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 border-1 border-gray-600 rounded-b-lg">
        {night.length === 0 ? (
          <div className="flex justify-between">
            <Text className="text-gray-200" variant="body-md-regular">
              Sem agedamentos para esse período
            </Text>
          </div>
        ) : (
          night.map((appointment, index) => {
            return (
              <div
                key={`${appointment.time}-${index}`}
                className="flex justify-between"
              >
                <div className="flex gap-5">
                  <Text className="text-gray-200" variant="body-md-bold">
                    {appointment.time}
                  </Text>
                  <Text className="text-gray-200" variant="body-md-regular">
                    {appointment.clientName}
                  </Text>
                </div>
                <ButtonIcon
                  onClick={() => deleteAppointment(appointment.id)}
                  icon={BinIcon}
                  className="text-yellow-dark w-5 h-5"
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
