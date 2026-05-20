import { useRef, useState } from "react";
import domtoimage from "dom-to-image-more";

export default function PhotoStrip({ photos }) {
  const stripRef = useRef(null);
  const [isDownload, setIsDownload] = useState(false);

  const downloadStrip = async () => {
    try {
      setIsDownload(true);
      await new Promise((r) => setTimeout(r, 100));
      const node = stripRef.current;
      const dataUrl = await domtoimage.toPng(node, {
        bgcolor: "#fce7f3",
        width: node.scrollWidth,
        height: node.scrollHeight,
        style: { transform: "none", margin: "0", outline: "none", border: "none", boxShadow: "none" },
        filter: (domNode) => {
          if (domNode.style) {
            domNode.style.outline = "none";
            domNode.style.border = "none";
            domNode.style.boxShadow = "none";
          }
          return true;
        },
      });
      const link = document.createElement("a");
      link.download = "cute-photobooth-strip.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setIsDownload(false);
    }
  };

  return { stripRef, isDownload, downloadStrip, StripUI: (
    <div
      ref={stripRef}
      className="bg-pink-100 p-5 rounded-[10px] w-[250px] overflow-hidden"
      style={{
        transform: isDownload ? "none" : "rotate(6deg)",
        boxShadow: isDownload ? "none" : "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        outline: "none",
        border: "none",
      }}
    >
      <div className="flex flex-col gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt=""
            style={{ outline: "none", border: "none", boxShadow: "none", display: "block", borderRadius: "6px" }}
            className="w-full h-[140px] object-cover"
          />
        ))}
        {[...Array(4 - photos.length)].map((_, index) => (
          <div key={index} className="h-[140px] bg-white/50 rounded-md border-2 border-dashed border-pink-300" />
        ))}
      </div>
      <p className="text-center mt-4 text-gray-500 font-bold">Photo Booth 🎀</p>
    </div>
  )};
}