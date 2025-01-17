import Background from "@/Components/Background";
import { render } from "solid-js/web";
import "virtual:uno.css";
import "@/global.css";
import { Clock } from "@/Components/Clock";

render(() => <App />, document.getElementById("root")!);

function App() {
  return (
    <Background>
      <Clock />
    </Background>
  );
}
