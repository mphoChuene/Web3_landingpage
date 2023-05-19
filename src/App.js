import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner />
    </div>
  );
}

export default App;
