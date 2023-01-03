import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { icons } from 'react-icons';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), react - icons()],
	build: {
		rollupOptions: {},
	},
});
