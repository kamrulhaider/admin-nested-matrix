import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routers from "./routers/Routers";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";

if (import.meta.env.PROD === true) {
  disableReactDevTools();
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster />
        <Routers />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
