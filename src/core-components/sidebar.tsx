import Button from "../components/button";
import Select from "../components/select";
import Text from "../components/text";
import TextInput from "../components/text-input";
import TimeSelect from "../components/time-select";
import AppName from "./app-name";
import Title from "./title";

export default function SideBar() {
  function handleSaveAppointment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
            <Select />
          </div>
          <TimeSelect name="time" />
          <div className="flex flex-col gap-2">
            <Text variant="body-md-bold" className="text-gray-200">
              Cliente
            </Text>
            <TextInput
              className="w-full"
              placeholder="Digite o nome do cliente"
            />
          </div>
          <Button type="submit">AGENDAR</Button>
        </form>
      </div>
    </>
  );
}
