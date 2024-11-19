/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#aaecd3",
            },
            fontFamily: {
                tictacxo: ["Sour Gummy", "sans-serif"],
                title: ["Bagel Fat One", "system-ui"]
            },
        },
    },
    plugins: [],
};
