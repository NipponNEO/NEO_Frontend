import "./App.css";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Routing from "./Routing/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </>
  );
}

export default App;
