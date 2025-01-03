import { createSignal } from "solid-js";
import { render } from "solid-js/web";
import "virtual:uno.css";

const [count, setCount] = createSignal(0);

render(() => <NewTab />, document.getElementById("root")!);

function NewTab() {
  return (
    <div class="p-4 bg-gray-100">
      <h1 class="text-2xl font-bold text-red-500">Hello, SolidJS!</h1>
      <p class="mt-2 p-4">You clicked {count()} times</p>
      <div class=" i-tabler-apple-filled text-5xl text-red-4" />
      <i class="i-mdi-home"></i>
      <button
        class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count() + 1)}
      >
        Click me
      </button>
    </div>
  );
}
