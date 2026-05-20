import { useRef, useState } from "react";

export function usePhotoCapture(filter, delay) {
  const webcamRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [countDown, setCountdown] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [flash, setFlash] = useState(false);

  const capture = async () => {
    if (isCapturing) return;
    setIsCapturing(true);

    let takenPhotos = [];

    for (let i = 0; i < 4; i++) {
      let timer = delay;
      setCountdown(timer);

      await new Promise((resolve) => {
        const interval = setInterval(() => {
          timer--;
          if (timer > 0) {
            setCountdown(timer);
          } else {
            clearInterval(interval);
            setCountdown(null);

            setFlash(true);
            setTimeout(() => setFlash(false), 150);

            const imgSrc = webcamRef.current?.getScreenshot();
            if (!imgSrc) return resolve();

            const img = new Image();
            img.src = imgSrc;
            img.onload = () => {
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.filter = filter;
              ctx.drawImage(img, 0, 0);
              takenPhotos.push(canvas.toDataURL("image/png"));
              setPhotos([...takenPhotos]);
              resolve();
            };
            img.onerror = resolve;
          }
        }, 1000);
      });

      await new Promise((r) => setTimeout(r, 800));
    }

    setIsCapturing(false);
  };

  const retake = () => setPhotos([]);

  return { webcamRef, photos, countDown, isCapturing, flash, capture, retake };
}