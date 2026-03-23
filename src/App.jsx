import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./components/router/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
