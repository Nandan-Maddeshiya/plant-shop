import React from "react";

function Button({
  children,
  variant = "outline",
  type = "button",
  className = "",
}) {
  const base = "rounded-lg font-inter font-semibold";

  const styles = {
    outline:
      "border-2 border-white text-white px-6 py-2",
    solid:
      "px-4 py-2 bg-white/60 text-black font-semibold rounded-md ",

    cart: "p-3 border-2 border-white rounded-lg"
  };

  return (
    <button
      type={type}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
