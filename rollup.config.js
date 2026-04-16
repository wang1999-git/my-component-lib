import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.esm.js', format: 'es' },
    { file: 'dist/index.cjs.js', format: 'cjs', exports: 'named' }
  ],
  plugins: [
    vue(),
    postcss(),
    typescript({
      check: false,
      tsconfigOverride: {
        compilerOptions: { declaration: true }
      }
    })
  ],
  external: ['vue']
};
