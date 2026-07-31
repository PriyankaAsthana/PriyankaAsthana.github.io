function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  const base =
    "inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl whitespace-nowrap text-[14px] font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1",

    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1",

    ghost:
      "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-1",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      style={{
        padding: "16px 30px",
      }}
    >
      {children}
    </a>
  );
}

export default Button;