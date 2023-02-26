module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {

          "primary": "#1c1917",

          "secondary": "#FF7A00",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
    base: true,
  },
};

