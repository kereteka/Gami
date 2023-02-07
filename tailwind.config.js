/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          gray: {
            400: "#94A3B8",
            700: "#334155",
            800: "#1E293B",
          },
        },
        true: {
          gray: {
            900: "#171717",
          },
        },
        cool: {
          gray: {
            100: "#F3F4F6",
            800: "#1F2937",
          },
        },
      },
      backgroundImage: {
        gs: "url('../src/assets/GALATASARAY_3D-F3.png')",
      },
    },
  },
  plugins: [],
};
