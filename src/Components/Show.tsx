import { Accessor, createEffect, createSignal, on, onCleanup } from "solid-js";
import { Show as See } from "solid-js";

type ShowProps = {
  when: Accessor<boolean>;
  fallback?: any;
  children: any;
  duration?: number;
};

const Show = (props: ShowProps) => {
  const [show, setShow] = createSignal(props.when());
  let timerHandle: any;
  createEffect(
    on(props.when, (s) => {
      clearTimeout(timerHandle);
      timerHandle = setTimeout(() => {
        setShow(s);
      }, props.duration);
    })
  );
  onCleanup(() => {
    clearTimeout(timerHandle);
  });

  return (
    <See when={show()} fallback={props.fallback}>
      <div
        style={{
          transition: `opacity ${props.duration}ms ease-in-out`,
          opacity: props.when() ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </See>
  );
};

export default Show;
