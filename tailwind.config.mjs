/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#0B1D26',
				accent: '#fbd784',
			},
			backgroundImage: {
				'hero-pattern':
					"linear-gradient(to top, rgba(11, 29, 38, 1), rgba(11, 29, 38, 0.1)), url('https://images.unsplash.com/photo-1593887937265-2a09787dcc19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
			},
		},
	},
	plugins: ['prettier-plugin-tailwind', 'tailwindcss-animated'],
};
