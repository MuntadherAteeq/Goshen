import { createSignal, Show } from "solid-js";
import wallpaper from "@Assets/10070-fhd.mp4";

export default function Background(props: any) {
  return (
    <div class="pos-relative bg-gray-8 w-screen h-screen overflow-hidden">
      <VideoWallpaper src={wallpaper} />
      <div class="pos-absolute h-full w-full">{props.children}</div>
    </div>
  );
}

export const VideoWallpaper = (props: any) => {
  const [show, setShow] = createSignal(false);

  const handlePlay = (
    e: Event & {
      currentTarget: HTMLVideoElement;
    }
  ) => {
    if (
      e.currentTarget.currentTime >= Math.ceil(e.currentTarget.duration / 2)
    ) {
      setShow(true);
    }
  };
  const HandleVideoLoaded = (
    e: Event & {
      currentTarget: HTMLVideoElement;
    }
  ) => {
    e.currentTarget.style.animation = `fadeLoop ${e.currentTarget.duration}s infinite`;
  };

  const HandleVideoTimeUpdate = (
    e: Event & {
      currentTarget: HTMLVideoElement;
    }
  ) => {
    let Video = e.currentTarget;
    if (Video.currentTime >= Math.ceil(Video.duration / 2)) {
      Video.style.display = "block";
    } else {
      Video.style.display = "hidden";
    }
  };
  return (
    <div class="pos-absolute grid place-items-center h-64 w-full h-full">
      <video
        autoplay
        loop
        muted
        controls={false}
        src={props.src}
        disablepictureinpicture
        class="col-start-1 row-start-1 w-full h-full object-cover"
        onTimeUpdate={handlePlay}
      />
      <Show when={show()}>
        <video
          autoplay
          loop
          muted
          controls={false}
          src={props.src}
          disablepictureinpicture
          class=" col-start-1 row-start-1 w-full h-full  object-cover"
          onloadedmetadata={HandleVideoLoaded}
          onTimeUpdate={HandleVideoTimeUpdate}
        />
      </Show>
    </div>
  );
};
