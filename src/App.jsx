import Webcam from "react-webcam";
import { Camera } from "lucide-react";
import { useRef, useState } from "react";

export default function App() {
  const webcamRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [countDown, setCountdown] = useState(null);

  // fillters
  const [filter, setFilter] = useState("none");

  // camera delay
  const [delay, setDelay] = useState(3);

  const takePhoto = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.filter = filter;
      ctx.drawImage(img, 0, 0);
      const filteredImage = canvas.toDataURL("image/png");

      if (photos.length < 4) {
        setPhotos([...photos, filteredImage]);
      }
    };
  };

  const capture = () => {
    let timer = delay;

    setCountdown(timer);

    const interval = setInterval(() => {
      timer--;

      if (timer > 0) {
        setCountdown(timer);
      } else {
        clearInterval(interval);

        setCountdown(null);

        takePhoto();
      }
    }, 1000);
  };

  return (
    <>
      <div className="min-h-screen bg-[#fff7fb] flex items-center justify-center p-10">
        <div className="flex gap-10 items-center">
          {/* LEFT-PANEL */}
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
              <button className="border border-pink-400 text-pink-500 px-4 py-2 rounded-xl font-semibold">
                Upload Photo
              </button>
            </div>

            {/* WEBCAM SECTION */}
            <div className="overflow-hidden rounded-[20px] relative">
              {countDown && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                  <h1 className="text-white text-8xl font-bold animate-pulse">
                    {countDown}
                  </h1>
                </div>
              )}
              <Webcam
                style={{ filter: filter }}
                className="w-full rounded-[20px]"
                ref={webcamRef}
                screenshotFormat="image/png"
                mirrored={true}
              />
            </div>

            {/* FILTERS */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 mb-4">Choose a fliter..</p>

              <div className="flex gap-3 justify-center flex wrap">
                <button
                  onClick={() => setFilter("none")}
                  className="px-5 py-2 border rounded-full bg-pink-500 text-white"
                >
                  Nomal
                </button>
                <button
                  onClick={() => setFilter("grayscale(100%)")}
                  className="px-5 py-2 border rounded-full "
                >
                  BW
                </button>
                <button
                  onClick={() => setFilter("sepia(80%)")}
                  className="px-5 py-2 border rounded-full "
                >
                  Vintage
                </button>
                <button
                  onClick={() => setFilter("contrast(110%) saturate(130%)")}
                  className="px-5 py-2 border rounded-full "
                >
                  Warm
                </button>
                <button
                  onClick={() => setFilter("brightness(110%) blur(1px)")}
                  className="px-5 py-2 border rounded-full "
                >
                  Dreamy
                </button>
              </div>
            </div>

            {/* CAPTURE BUTTON */}
            <button
              onClick={capture}
              className="mt-8 w-full bg-pink-500 hover:bg-pink-600 transition-all text-white py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Camera size={22} />
              Start Capture
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="rotate-6 bg-pink-100 p-5 rounded-[10px] shadow-2xl w-[250px]">
            <div className="flex flex-col gap-4">
              {photos.map((photo, index) => (
                <img key={index} src={photo} alt="" className="rounded-md" />
              ))}

              {/* EMPTY SLOTS */}
              {[...Array(4 - photos.length)].map((_, index) => (
                <div
                  key={index}
                  className="h-[140px] bg-white/50 rounded-md border-3 border-dashed border-pink-300"
                />
              ))}
            </div>
            <p className="text-center mt-4 text-gray-500 font-bold title">
              Photo Booth 🎀
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
