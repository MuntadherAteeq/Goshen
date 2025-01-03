import "../global.css";
import { render } from "solid-js/web";

render(() => <Popup />, document.getElementById("root")!);

function Popup() {
  return (
    <>
      <h1>New Hello</h1>
    </>
  );
}
