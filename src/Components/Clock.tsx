import { createMemo, createSignal, onCleanup } from "solid-js";

export const Clock = () => {
  const [time, setTime] = createSignal(new Date());

  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });

  const formattedTime = createMemo(() => {
    const isS = false;
    const isM = false;
    const isH = false;
    const isA = false;
    const date = time();
    const hours = date.getHours() % 12 || 12;
    const minutes = ":" + date.getMinutes().toString().padStart(2, "0");
    const seconds = isS
      ? ":" + date.getSeconds().toString().padStart(2, "0")
      : "";
    const a = isA ? (hours >= 12 ? "PM" : "AM") : "";
    return `${hours}${minutes}${seconds} ${a}`;
  });

  const formattedDate = createMemo(() => {
    const date = time();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  });

  const DayOfWeek = createMemo(() => {
    const date = time();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  });

  return (
    <div class="glass text-white m-2  p-2 pos-absolute top-0 right-0 rounded-lg ">
      <div class=" flex flex-col items-center p-4 py-2 hover:bg-white/20 bg-white/0 transition-all rounded-md">
        <div class=" flex justify-center items-center h-20px text-2xl mb-6px manrope font-500">
          {formattedTime()}
        </div>
        <div class=" flex justify-center items-center h-14px opacity-75 text-sm inter">
          {DayOfWeek()} {formattedDate()}
          {/* using filter return the array without tha last element */}
          {/* {time()
            .toDateString()
            .split(" ")
            .filter((_, i, a) => i < a.length - 1)
            .join(" ")} */}
        </div>
      </div>
    </div>
  );
};
