import { createSignal, Show } from "solid-js";
import { render } from "solid-js/web";
import "virtual:uno.css";

render(() => <NewTab />, document.getElementById("root")!);

function NewTab() {
  const [toggle, setToggle] = createSignal(false);
  const counter = <Counter />;
  return (
    <div>
      <button onClick={() => setToggle(!toggle())}>
        {toggle() ? "Hide" : "Show"}
      </button>
      <div>
        <div>
          <div>
            <Show when={!toggle()}>{counter}</Show>
          </div>
        </div>
      </div>
      <h1>
        <div>
          Solid js <i class="i-devicon-solidjs w-l h-l"></i>
        </div>
        <div>
          Svelte <i class="i-devicon-svelte w-l h-l"></i>
        </div>
        <div>
          React <i class="i-devicon-react w-l h-l"></i>
        </div>
      </h1>
      <Show when={toggle()}>{counter}</Show>
    </div>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <button onClick={() => setCount(count() + 1)}>
        Click me : {count()}
      </button>
    </div>
  );
}
