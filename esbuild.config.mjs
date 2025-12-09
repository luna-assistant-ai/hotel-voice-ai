import { build } from 'esbuild';

await build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  format: 'esm',
  outfile: 'public/bundle.js',
  sourcemap: true,
  target: ['es2020'],
  platform: 'browser',
});
