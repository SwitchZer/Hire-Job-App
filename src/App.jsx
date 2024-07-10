import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRouter from "./configs/router";

function App() {
  return (
    <>
      <MainRouter />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
