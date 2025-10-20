import Button from "./components/button";
import TextInput from "./components/text-input";

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
    </div>
  );
}

export default App;
