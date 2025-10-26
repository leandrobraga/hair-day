import { format } from "date-fns";
import { useState } from "react";
import Schedule from "../components/schedule";
import Select from "../components/select";
import Title from "./title";

const today = format(new Date(), "dd/MM/yyyy");

export default function SideSchedule() {
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <>
      <div className="flex flex-col gap-4 m-2 md:m-5 p-36 pt-15">
        <div className="flex items-center justify-between gap-5">
          <Title
            title="Sua agenda"
            subtitle="Consulte os seus cortes de cabelo agendado por dia"
          />
          <Select selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        </div>
        <Schedule filterDay={selectedDay} />
      </div>
    </>
  );
}
