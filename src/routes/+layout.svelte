<script lang="ts">
	import { page } from '$app/stores';
	import { appConfig } from '$lib/config';
	import HamburgerMenu from '$lib/icons/hamburger-menu.svg';
	import { Drawer, Toast, drawerStore } from '@skeletonlabs/skeleton';

	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import { clsx } from 'clsx';
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen scroll-smooth">
	<header class="p-4 mx-auto flex justify-between shadow w-full fixed top-0 left-0 z-[1001]">
		<div class="w-[93px] flex items-center md:hidden">
			<button
				on:click={() => {
					drawerStore.open();
				}}
			>
				<img
					src={HamburgerMenu}
					alt="hamburger menu"
					class="btn btn-sm text-white fill-white stroke-white"
				>
			</button>
		</div>
		<a
			href="/"
			class={clsx(
				'uppercase sm:text-xl font-bold italic bg-gradient-to-br from-indigo-800 to-orange-700 bg-clip-text text-opacity-0 text-transparent',
				'dark:from-indigo-600 dark:to-orange-500',
				'btn'
			)}>NotNullDev</a
		>
		<div class="flex gap-4">
			<nav class={clsx('flex gap-1', 'max-md:hidden')}>
				<a
					class={clsx('btn', {
						'underline underline-offset-4 text-primary-400-500-token': $page.url.pathname === '/'
					})}
					href="/">Home</a
				>
				<a
					class={clsx('btn', {
						'underline underline-offset-4 text-primary-400-500-token':
							$page.url.pathname === '/contact'
					})}
					href="/contact">Contact</a
				>
			</nav>
			<div class="flex gap-1 items-center justify-center h-full p-1">
				<a href="https://github.com/notnulldev" target="_blank" rel="noopener"
					><svg
						viewBox="0 0 24 24"
						width="24"
						height="32"
						xmlns="http://www.w3.org/2000/svg"
						class="ml-6 cursor-pointer hover:scale-125 hover:invert transition-all duration-500 fill-current"
						><g
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
							/></g
						></svg
					></a
				>
				<div class="ml-1 border-r border-r-pink-800 h-4" />
				<a href="https://www.linkedin.com/in/notnulldev" target="_blank" rel="noopener"
					><svg
						width="24"
						height="32"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						class="cursor-pointer hover:scale-125 transition-all duration-500 fill-current"
						><rect x="2" y="2" width="28" height="28" rx="14" fill="none" /><path
							d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
							fill="white"
						/><path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white" /><path
							d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
							fill="white"
						/></svg
					></a
				>
			</div>
		</div>
	</header>
	<div class="flex-1 flex flex-col">
		<slot />
	</div>
	<footer class="p-8 text-center mt-5">
		&copy; {new Date().getFullYear()}
		{appConfig.pageTitle} | All rights reserved.
	</footer>
</div>
<Drawer bgDrawer="bg-slate-900 opacity-90">
	<nav class={clsx('flex gap-1 flex-col h-full w-full items-center justify-center')}>
		<a
			class={clsx('btn text-4xl', {
				'underline underline-offset-4 text-primary-400-500-token': $page.url.pathname === '/'
			})}
			on:click={() => drawerStore.close()}
			href="/">Home</a
		>
		<a
			class={clsx('btn text-4xl', {
				'underline underline-offset-4 text-primary-400-500-token': $page.url.pathname === '/contact'
			})}
			on:click={() => drawerStore.close()}
			href="/contact">Contact</a
		>
	</nav>
</Drawer>
<Toast />
