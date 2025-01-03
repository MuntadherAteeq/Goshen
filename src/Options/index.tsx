import "../global.css";
import { render } from "solid-js/web";
import "virtual:uno.css";

render(() => <Options />, document.getElementById("root")!);

function Options() {
  return (
    <>
      <h1>New Hello</h1>
    </>
  );
}
