import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

import { config } from 'dotenv';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    env: { ...config({ path: './.env' }).parsed },
  },
  plugins: [
    // This is required to build the test files with SWC
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
      module: { type: 'es6' },
    }),
  ],
});
