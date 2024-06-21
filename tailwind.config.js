/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'pushkin': "url('/public/pushkin1.png')",
      },
      aspectRatio: {
        '9/16': '9 / 16',
        '4291/4435': '4291 / 4435',
      },
      fontFamily: {
        unb: ["Unbounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
