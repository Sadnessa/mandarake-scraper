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
      // backgroundOpacity: ['active'],

      textColor: {
        skin: {
          'text-button-flat': 'var(--color-text-button-flat)',
        },

        mode: {
          base: 'var(--color-text-base)',
          secondary: 'var(--color-text-secondary)',
          'text-button': 'var(--color-text-button)',
        }
      },

      backgroundColor: {
        skin: {
          'button-flat': 'var(--color-button-flat)',
          fill: ({ opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-fill), ${opacityValue})`
            }
            return `rgb(var(--color-fill))`
          },
        },

        mode: {
          card: 'var(--color-card)',
          bg: 'var(--color-bg)',
          input: 'var(--color-input)',
        }
      },

      borderColor: {
        skin: {
          'button-fill': 'var(--color-button-border)',
          'button-flat': 'var(--color-button-flat-border)',
        }
      },

      outlineColor: {
        skin: {
          'line': 'var(--color-outline)'
        }
      }
    },
  },
  plugins: [],
}
