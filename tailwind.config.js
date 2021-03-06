module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            sm: "640px",

            md: "1000px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
