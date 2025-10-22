import MoonIcon from "../assets/icons/moon-stars.svg?react";
import Button from "../components/button";
import Icon from "../components/icon";
import TextInput from "../components/text-input";
import TimeSelect from "../components/time-select";

export default function Components() {
  return (
    <div className="fex flex-col space-y-5">
      <div className="flex gap-3 px-2 py-2">
        <Button>AGENDAR</Button>
        <Button disabled>AGENDAR</Button>
      </div>
      <div className="flex gap-3 px-2 py-2">
        <TextInput placeholder="Nome do cliente" />
      </div>
      <div>
        <TimeSelect name="morning" values={["09:00", "10:00", "11:00"]} />
      </div>
      <div>
        <Icon className="h-10 w-10 text-yellow" svg={MoonIcon} />
      </div>
    </div>
  );
}
