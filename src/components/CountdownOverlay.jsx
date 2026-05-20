export default function CountdownOverlay({ countDown, flash }) {
  return (
    <>
      {flash && (
        <div className="absolute inset-0 bg-white z-20 animate-[flash_0.25s_ease-out]" />
      )}
      {countDown && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <h1 className="text-white text-8xl font-bold animate-pulse">
            {countDown}
          </h1>
        </div>
      )}
    </>
  );
}