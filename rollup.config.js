import babel from 'rollup-plugin-babel';
import svelte from 'rollup-plugin-svelte';

export default {
  entry: './src/index.js',
  dest: 'dist/main.js',
  format: 'cjs',
  plugins: [
    babel({
      include: ['./src/**/*.js'],
      exclude: 'node_modules/**'
    }),
    svelte({
      // By default, all .html and .svelte files are compiled
      extensions: ['.html'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: './src/components/**.html',
    }),
  ],
};