import "./App.css";
import One from "./props/One";
import Second from "./props/Second";
import Third from "./props/Third";
import Fourth from "./props/Fourth";

function App() {
  return (
    <div className="container">
      <One name="Rahul" />
      <Second name="Bhanu" />
      <Third name="venkateshWarlu" />
      <Fourth name="Vimala" />
    </div>
  );
}

export default App;
