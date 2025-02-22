import Background from "@/Components/Background";
import { render } from "solid-js/web";
import "@/global.css";
import { Clock_Widget } from "@/Components/Clock_Widget";
import $ from "jquery";
(window as any).$ = $;

render(() => <App />, document.getElementById("root")!);

function App() {
  return (
    <Background>
      <Clock_Widget />
    </Background>
  );
}
