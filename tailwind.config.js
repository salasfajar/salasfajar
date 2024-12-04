module.exports = {
  content: ["./*.html", "./css/*.css"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#9333EA",
        accent: "#F59E0B",
        neutral: "#374151",
        light: "#F3F4F6",
        dark: "#1F2937",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        heading: ["Poppins", "Helvetica", "sans-serif"],
      },
      animation: {
        fade: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
