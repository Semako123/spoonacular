import "./App.css";
import { Home, Random, Categories, Cuisine } from "./containers";


function App() {
  return (
    <div className="App">
      <Home />
      <Categories />
      <Cuisine />
      <Random />
    </div>
  );
}

export default App;
