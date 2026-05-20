# 📸 Cute Photobooth

A fun, aesthetic browser-based photo booth app built with React. Take a 4-shot photo strip with filters, countdown timer, and download it as a PNG — just like a real photo booth!

![Photo Booth Preview](<img src="https://github.com/Dishitha0607/PhotoBooth/blob/8a734a66ca75e1fa19d88a73c671e9e9932a9c37/photos/Screenshot%202026-05-20%20160228.png" />)
![After Downloading Preview](https://github.com/Dishitha0607/PhotoBooth/blob/32b8aa1df5df2be9b482c43a5f9c282396bbc031/photos/Screenshot%202026-05-20%20160247.png)

---

## ✨ Features

- 📷 **4-shot strip** — automatically captures 4 photos in sequence
- ⏱️ **Countdown timer** — 3s, 5s, or 10s delay between shots
- 🎨 **Filters** — Normal, B&W, Vintage, Warm, Dreamy
- ⚡ **Flash effect** — subtle flash animation on each capture
- 💾 **Download strip** — saves your photo strip as a PNG
- 🎀 **Cute UI** — pink aesthetic with a tilted strip preview

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [react-webcam](https://github.com/mozmorris/react-webcam)
- [dom-to-image-more](https://github.com/1904labs/dom-to-image-more)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A browser with webcam access

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/cute-photobooth.git
cd cute-photobooth

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser and allow camera access.

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Root component, wires everything together
├── components/
│   ├── CameraPanel.jsx      # Webcam view, controls, and capture button
│   ├── PhotoStrip.jsx       # Strip preview and download logic
│   ├── FilterSelector.jsx   # Filter buttons
│   └── CountdownOverlay.jsx # Countdown + flash overlay
└── hooks/
    └── usePhotoCapture.js   # All capture state and logic
```

---

## 🎮 How to Use

1. **Choose your settings** — pick a countdown delay from the dropdown
2. **Select a filter** — click any filter button below the webcam
3. **Hit Start Capture** — the app will count down and take 4 photos automatically
4. **Preview your strip** — photos appear on the right panel in real time
5. **Download** — click the ⬇ button to save your strip as a PNG
6. **Retake** — not happy? Hit Retake Photos and go again

---

## 🙏 Acknowledgements

- Inspired by real-life photo booth machines
- Built with ♡ using React + Tailwind
