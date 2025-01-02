import "../global.css";
import { render } from "solid-js/web";

render(() => <Options />, document.getElementById("root")!);

function Options(props: any) {
  return (
    <>
      <h1>New Hello</h1>
    </>
  );
}
