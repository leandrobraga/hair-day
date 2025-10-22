import Button from "../components/button";
import Select from "../components/select";
import Text from "../components/text";
import TextInput from "../components/text-input";
import TimeSelect from "../components/time-select";
import AppName from "../core-components/app-name";
import Title from "../core-components/title";

export default function LayoutMain() {
  return (
    <div className="grid grid-rows-[30%_1fr] md:grid-cols-[30%_1fr] h-screen gap-2 relative">
      <div className="absolute top-1 left-1 z-50">
        <AppName />
      </div>
      <div className="flex flex-col gap-4 m-2 md:m-5 bg-gray-700 md:h-[97vh] rounded-lg p-10 pt-15">
        <Title
          title="Agende um atendimento"
          subtitle="Selecione data, horário e informe o nome do cliente para criar o agendamento"
        />
        <form className="flex flex-col gap-5">
          <div>
            <Text variant="body-md-bold" className="text-gray-200">
              Data
            </Text>
            <Select />
          </div>

          <div className="flex flex-col gap-2">
            <Text variant="body-md-bold" className="text-gray-200">
              Horários
            </Text>
            <Text variant="body-sm-regular" className="text-gray-200">
              Manhã
            </Text>
            <TimeSelect
              name="morning"
              values={["09:00", "10:00", "11:00", "12:00"]}
            />
            <Text variant="body-sm-regular" className="text-gray-200">
              Tarde
            </Text>
            <TimeSelect
              name="morning"
              className="flex"
              values={["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]}
            />
            <Text variant="body-sm-regular" className="text-gray-200">
              Noite
            </Text>
            <TimeSelect name="morning" values={["19:00", "20:00", "21:00"]} />
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="body-md-bold" className="text-gray-200">
              Cliente
            </Text>
            <TextInput
              className="w-full"
              placeholder="Digite o nome do cliente"
            />
          </div>
          <Button>AGENDAR</Button>
        </form>
      </div>
      <div className="flex flex-col gap-4 m-2 md:m-5 p-36 pt-15">
        <div className="flex items-center justify-between gap-5">
          <Title
            title="Sua agenda"
            subtitle="Consulte os seus cortes de cabelo agendado por dia"
          />
          <Select />
        </div>
      </div>
    </div>
  );
}
