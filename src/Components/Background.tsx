import { createSignal, Show } from "solid-js";
import wallpaper from "@Assets/10070-fhd.mp4";

export default function Background(props: any) {
  return (
    <div class="animate-fade-in  pos-relative bg-gray-8 w-screen h-screen overflow-hidden">
      <VideoWallpaper src={wallpaper} />
      <div class=" pos-absolute h-full w-full">{props.children}</div>
    </div>
  );
}

export const VideoWallpaper = (props: any) => {
  function HandleAnimation(event: Event) {
    const video = event.currentTarget as HTMLVideoElement;
    if (false) {
      
    }
  }

  return (
    <div class=" pos-absolute grid place-items-center h-64 w-full h-full ">
      <video
        autoplay
        loop
        muted
        controls={false}
        src={props.src}
        disablepictureinpicture
        class=" animate-fade-in col-start-1 row-start-1 w-full h-full object-cover"
      />
      <video
        autoplay
        loop
        muted
        controls={false}
        src={props.src}
        disablepictureinpicture
        class=" col-start-1 row-start-1 w-full h-full  object-cover opacity-0 animate-fade-in animate-forwards "
        onTimeUpdate={HandleAnimation}
      />
    </div>
  );
};
