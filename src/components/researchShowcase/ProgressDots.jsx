function ProgressDots({ total, current }) {
  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-full transition-all ${
            current === index
              ? "bg-blue-600 w-8"
              : "bg-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

export default ProgressDots;