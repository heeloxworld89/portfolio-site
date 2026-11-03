import { useState } from "react";

/* A Loom embed pulls in tens of megabytes of player script the moment it
   mounts, even with loading="lazy" once it nears the viewport. This shows a
   static placeholder and mounts the real iframe only when the reader asks for
   the video, then autoplays it so one click is enough. */
export default function VideoFacade({ src, title, label }: { src: string; title: string; label: string }) {
  const [on, setOn] = useState(false);
  if (on) {
    const url = src + (src.includes("?") ? "&" : "?") + "autoplay=1";
    return <iframe src={url} title={title} allow="autoplay; fullscreen" allowFullScreen />;
  }
  return (
    <button type="button" className="vf" onClick={() => setOn(true)} aria-label={`Play video: ${title}`}>
      <span className="vf-play" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22"><path d="M7 4.5v13l11-6.5z" fill="currentColor" /></svg>
      </span>
      <span className="vf-t">{title}</span>
      <span className="vf-k">{label}</span>
    </button>
  );
}
