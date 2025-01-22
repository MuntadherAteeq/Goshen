import { GDate } from "@/Models/Date";
import { createMemo, createSignal, onCleanup } from "solid-js";

export const Clock_Widget = () => {
  const [time, setTime] = createSignal(new GDate());

  $();

  const interval = setInterval(() => {
    setTime(new GDate());
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });

  const formattedTime = createMemo(() => {
    const date = time();
    return date.formatDate("hh:mm");
  });

  const formattedDate = createMemo(() => {
    const date = time();
    return date.formatDate("DDD, MMM DD");
  });

  return (
    <div class="glass flex flex-row-reverse items-center select-none text-white m-2  p-2 pos-absolute top-0 right-0 rounded-lg ">
      <div class=" flex flex-col items-center p-4 py-2 hover:bg-white/20 bg-white/0 transition-all rounded-md">
        <div class=" flex justify-center items-center h-20px text-xl mb-6px manrope font-500">
          {formattedTime()}
        </div>
        <div class=" flex justify-center items-center h-14px opacity-75 text-sm inter">
          {formattedDate()}
        </div>
      </div>
      {/* <hr class=" w-0 opacity-40 h-4 mx-1"></hr> */}
    </div>
  );
};
