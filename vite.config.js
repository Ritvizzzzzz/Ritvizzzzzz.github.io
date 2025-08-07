import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Add this 'base' property
  base: '/your-repo-name/',
  plugins: [react()],
});
