import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = '/portfolio/';
const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPagesBuild ? githubPagesBase : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    cssCodeSplit: true,
  },
  assetsInclude: ['**/*.md'],
});
