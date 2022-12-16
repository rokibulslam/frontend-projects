import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Routes from "./routes/Routes";

function App() {

  return (
    <div className="App">
      <RouterProvider router={ Routes} />
    </div>
  );
}

export default App;
