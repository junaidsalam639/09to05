import { BrowserRouter } from "react-router"
import AppRoutes from "./routes/route";


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
