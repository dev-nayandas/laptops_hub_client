import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="mx-w-[1440px] mx-auto bg-gradient-to-r from-cyan-500 to-blue-500">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
