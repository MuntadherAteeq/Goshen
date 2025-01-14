import Background from "@/Components/Background";
import { render } from "solid-js/web";
import "virtual:uno.css";
import "@/global.css";

render(() => <App />, document.getElementById("root")!);

function App() {
  return (
    <Background>
      <h1>Hello world</h1>
    </Background>
  );
}
