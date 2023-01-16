/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        full: "100% 100%",
      },
      colors: {
        p: {
          green: "#38D605",
          red: "#E60404",
          blue: "#0D0FBA",
        },
      },
      backgroundImage: {
        svg: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c279 C 96%2c312.4 288%2c450.8 480%2c446 C 672%2c441.2 768%2c263.6 960%2c255 C 1152%2c246.4 1344%2c373.4 1440%2c403L1440 560L0 560z' fill='rgba(13%2c 15%2c 186%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
        svgl: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c279 C 96%2c312.4 288%2c450.8 480%2c446 C 672%2c441.2 768%2c263.6 960%2c255 C 1152%2c246.4 1344%2c373.4 1440%2c403L1440 560L0 560z' fill='rgba(15%2c 23%2c 42%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
      },
    },
  },
  plugins: [],
};
