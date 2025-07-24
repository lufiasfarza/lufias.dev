import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // atau '/nama-repo/' kalau host di github.io/nama-repo
  plugins: [react()],
});