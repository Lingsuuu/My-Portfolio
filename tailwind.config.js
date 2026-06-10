/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4A15A",
        "soft-black": "#050505",
        "glass-dark": "rgba(255, 255, 255, 0.08)",
      },
      boxShadow: {
        glow: "0 25px 80px rgba(212, 161, 90, 0.18)",
      },
      backgroundImage: {
        "radial-gold":
          "radial-gradient(circle at top, rgba(212, 161, 90, 0.18), transparent 38%)",
      },
    },
  },
  plugins: [],
};
