module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },

      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          secondary: 'var(--color-text-secondary)',
          'text-button': 'var(--color-text-button)',
          'text-button-flat': 'var(--color-text-button-flat)',
        }
      },

      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-flat': 'var(--color-button-flat)',
          'button-flat-hover': 'var(--color-button-flat-hover)',
        }
      },

      borderColor: {
        skin: {
          'button-fill': 'var(--color-button-border)',
          'button-flat': 'var(--color-button-flat-border)',
        }
      }
    },
  },
  plugins: [],
}
