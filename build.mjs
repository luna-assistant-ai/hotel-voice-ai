import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'public/bundle.js',
  platform: 'browser',
  format: 'iife',
  target: 'es2020',
  sourcemap: true,
  loader: {
    '.ts': 'ts'
  },
  define: {
    'import.meta.env': 'undefined'
  },
  logLevel: 'info'
});

console.log('✅ Bundle built successfully: public/bundle.js');
