import Webcam from "react-webcam";
import { Camera } from "lucide-react";
import CountdownOverlay from "./CountdownOverlay";
import FilterSelector from "./FilterSelector";

export default function CameraPanel({
  webcamRef, filter, setFilter, delay, setDelay,
  countDown, flash, isCapturing, capture, retake, onDownload,
}) {
  return (
    <div className="bg-white border border-grey-300 rounded-[30px] p-8 w-[650px] shadow-lg">
      {/* TOP OPTIONS */}
      <div className="flex justify-between mb-5">
        <div className="flex gap-3">
          <select className="border rounded-xl px-4 py-2">
            <option>4 Photos</option>
          </select>
          <select
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            className="border rounded-xl px-4 py-2"
          >
            <option value={3}>3s Delay</option>
            <option value={5}>5s Delay</option>
            <option value={10}>10s Delay</option>
          </select>
        </div>
        <button
          onClick={onDownload}
          className="border border-pink-400 text-pink-500 px-4 py-2 rounded-xl font-semibold"
        >
          ⬇
        </button>
      </div>

      {/* WEBCAM */}
      <div className="overflow-hidden rounded-[20px] relative">
        <CountdownOverlay countDown={countDown} flash={flash} />
        <Webcam
          style={{ filter }}
          className="w-full rounded-[20px]"
          ref={webcamRef}
          screenshotFormat="image/png"
          mirrored={true}
          videoConstraints={{ width: 1280, height: 720, facingMode: "user" }}
        />
      </div>

      <FilterSelector filter={filter} setFilter={setFilter} />

      {/* BUTTONS */}
      <button
        onClick={capture}
        disabled={isCapturing}
        className={`mt-8 w-full transition-all text-white py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2
          ${isCapturing ? "bg-pink-300 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600"}`}
      >
        <Camera size={22} /> Start Capture
      </button>
      <button
        onClick={retake}
        className="mt-4 w-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all py-4 rounded-full text-lg font-semibold"
      >
        Retake Photos
      </button>
    </div>
  );
}