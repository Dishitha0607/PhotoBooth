import { useState } from "react";
import { usePhotoCapture } from "./hooks/usePhotoCapture";
import CameraPanel from "./components/CameraPanel";
import PhotoStrip from "./components/PhotoStrip";

export default function App() {
  const [filter, setFilter] = useState("none");
  const [delay, setDelay] = useState(3);

  const { webcamRef, photos, countDown, isCapturing, flash, capture, retake } =
    usePhotoCapture(filter, delay);

  // PhotoStrip exposes downloadStrip via render pattern or ref — see note above
  const { stripRef, isDownload, downloadStrip, StripUI } = PhotoStrip({ photos });

  return (
    <div className="min-h-screen bg-[#fff7fb] flex items-center justify-center p-10">
      <div className="flex gap-10 items-center">
        <CameraPanel
          webcamRef={webcamRef}
          filter={filter} setFilter={setFilter}
          delay={delay} setDelay={setDelay}
          countDown={countDown} flash={flash}
          isCapturing={isCapturing}
          capture={capture} retake={retake}
          onDownload={downloadStrip}
        />
        {StripUI}
      </div>
    </div>
  );
}