import Button from "./components/button";

function App() {
  return (
    <div className="flex gap-3 px-2 py-2">
      <Button>AGENDAR</Button>
      <Button disabled>AGENDAR</Button>
    </div>
  );
}

export default App;
