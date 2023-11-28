/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.js', './**/*.html'],
    theme: {
        screens: {
            desktop: '1440px',
        },
        colors: {
            dark_cyan: 'hsl(158, 36%, 37%)',
            very_dark_cyan: 'hsl(149, 44%, 20%)',
            cream: 'hsl(30, 38%, 92%)',
            very_dark_blue: 'hsl(212, 21%, 14%)',
            dark_grayish_blue: 'hsl(228, 12%, 48%)',
            white: 'hsl(0, 0%, 100%)',
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            fraunces: ['Fraunces', 'serif'],
        },
        fontSize: {
            body: '14px',
        },
        extend: {},
    },
    plugins: [],
};
