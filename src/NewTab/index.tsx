import Background from "@/Components/Background";
import { render } from "solid-js/web";
import "virtual:uno.css";
import "@/global.css";
import { Clock_Widget } from "@/Components/Clock_Widget";

render(() => <App />, document.getElementById("root")!);

function App() {
  return (
    <Background>
      <Clock_Widget />
    </Background>
  );
}
