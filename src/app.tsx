import { Provider } from "react-redux";

import { Player } from "./components/player";
import { store } from "./store";

export function App() {

  return (
    <Provider store={store}>
      <Player />
    </Provider>
  )
}

