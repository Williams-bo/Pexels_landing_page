module.exports = {
  purge: {
    theme: {},
    variants: {},
    plugins: [],
    purge: {
      content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-pattern":
          "url('https://images.pexels.com/photos/105813/pexels-photo-105813.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.85&h=500&sharp=20&w=3000')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
