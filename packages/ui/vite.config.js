// packages/UI/vite.config.js
export default {
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/index.js', // Adjust the path accordingly
      },
    },
  },
};
