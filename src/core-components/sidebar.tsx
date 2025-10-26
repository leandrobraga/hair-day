import { format } from "date-fns";
import { useState } from "react";
import Button from "../components/button";
import Select from "../components/select";
import Text from "../components/text";
import TextInput from "../components/text-input";
import TimeSelect from "../components/time-select";
import useAppointment from "../hooks/use-appointment";
import type { Appointment } from "../models/appointment";
import AppName from "./app-name";
import Title from "./title";

const today = format(new Date(), "dd/MM/yyyy");

export default function SideBar() {
  const [selectedDay, setSelectedDay] = useState(today);
  const { isSubmitting, saveAppointment } = useAppointment();
  function handleSaveAppointment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const appointment: Appointment = {
      id: crypto.randomUUID(),
      clientName: data.clientName as string,
      date: data.date as string,
      time: data.time as string,
    };
    saveAppointment(appointment);
    e.currentTarget.reset();
  }

  return (
    <>
      <div className="absolute top-1 left-1 z-50">
        <AppName />
      </div>
      <div className="flex flex-col gap-4 m-2 md:m-5 bg-gray-700 md:h-[97vh] rounded-lg p-10 pt-15">
        <Title
          title="Agende um atendimento"
          subtitle="Selecione data, horário e informe o nome do cliente para criar o agendamento"
        />
        <form onSubmit={handleSaveAppointment} className="flex flex-col gap-5">
          <div>
            <Text variant="body-md-bold" className="text-gray-200">
              Data
            </Text>
            <Select
              name="date"
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          </div>
          <TimeSelect name="time" />
          <div className="flex flex-col gap-2">
            <Text variant="body-md-bold" className="text-gray-200">
              Cliente
            </Text>
            <TextInput
              name="clientName"
              className="w-full"
              placeholder="Digite o nome do cliente"
            />
          </div>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "AGUARDE..." : "AGENDAR"}
          </Button>
        </form>
      </div>
    </>
  );
}
