const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: ['./graphql/ts-resolvers/**/*.ts'], // Note: Adjust if using glob patterns
  outdir: './graphql/js-resolvers/',
  platform: 'node',
  format: 'esm',
  bundle: true, // Optional: Bundles the files together
  sourcemap: false, // Set to true if you need sourcemaps
}).then(() => {
  console.log('Build completed successfully!');
}).catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
