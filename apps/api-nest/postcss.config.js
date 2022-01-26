module.exports = {
  plugins: {
    tailwindcss: {
      config: 'apps/api-nest/tailwind.config.js',
      input: 'apps/api-nest/src/assets/styles.css',
      output: 'dist/apps/api-nest/styles2.css',
    },
    autoprefixer: {},
  },
};
