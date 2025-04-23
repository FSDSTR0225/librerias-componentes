import { CiAirportSign1 } from "react-icons/ci";
import { Button } from "./components/Button";

function App() {
  const number = 100; // This can be changed to 2 or 3 to test different styles
  return (
    <section>
      <h1 className={`${number === 100 ? "text-beli-100" : "text-beli-500"}`}>
        Welcome to the React App
      </h1>
      <p id="test" className="paragraph font-extralight">
        This is a simple React application.
      </p>
      <Button
        className="btn-primary"
        icon={<CiAirportSign1 size={30} color="white" />}
      >
        Text
      </Button>
    </section>
  );
}

export default App;
