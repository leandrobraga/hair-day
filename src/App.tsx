import Button from "./components/button";
import TextInput from "./components/text-input";
import TimeSelect from "./components/time-select";

function App() {
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
    </div>
  );
}

export default App;
