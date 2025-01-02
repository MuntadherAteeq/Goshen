import { createSignal } from "solid-js";
import "../global.css";
import { render } from "solid-js/web";

const [count, setCount] = createSignal(0);

const NewTab = (props: any) => {
  return (
    <div class="p-4 bg-gray-100">
      <h1 class="text-2xl font-bold">Hello, SolidJS!</h1>
      <p class="mt-2">You clicked {count()} times</p>
      <button
        class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count() + 1)}
      >
        Click me
      </button>
    </div>
  );
};

render(() => <NewTab />, document.getElementById("root")!);
