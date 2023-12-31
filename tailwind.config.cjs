/** @type {import('tailwindcss').Config} */
module.exports = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts,svx}',
		'./content/**/*.{html,js,svelte,ts,svx}',
		// 2. Append the path for the Skeleton NPM package and files:
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('path').join(
			require.resolve('@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts,svx}'
		)
	],
	theme: {
		extend: {}
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};
