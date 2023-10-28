<script lang="ts">
	import { browser } from '$app/environment';
	import Cloudflare from '$lib/icons/cloudflare.svg';
	import Docker from '$lib/icons/docker-icon.svg';
	import Golang from '$lib/icons/go.svg';
	import Gcp from '$lib/icons/google-cloud.svg';
	import Java from '$lib/icons/java.svg';
	import K8s from '$lib/icons/kubernetes.svg';
	import Linux from '$lib/icons/linux-tux.svg';
	import Azure from '$lib/icons/microsoft-azure.svg';
	import NextJs from '$lib/icons/nextjs-icon.svg';
	import Postgres from '$lib/icons/postgresql.svg';
	import Spring from '$lib/icons/spring-icon.svg';
	import SvelteIcon from '$lib/icons/svelte-icon.svg';
	import Ts from '$lib/icons/typescript-icon.svg';

	import { beforeNavigate } from '$app/navigation';
	import clsx from 'clsx';
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let firstSection: HTMLElement;
	let ready = false;

	function updateHeroCssVariables(scrollY: number, innerWindowHeight: number) {
		let heroScrollPercentage = scrollY / innerWindowHeight;
		let badgeRotationDeg = `${heroScrollPercentage * 160}deg`;

		const rootStyle = document.documentElement.style;

		rootStyle.setProperty('--badgeRotationDeg', badgeRotationDeg);
		rootStyle.setProperty('--heroScrollPercentage', heroScrollPercentage.toString());
	}

	let observer: IntersectionObserver;
	let noneContainer: HTMLElement;
	let nElement: HTMLElement;
	let oneElement: HTMLElement;

	function updateCSSVariables() {
		if (!nElement) return;

		const { width, height } = nElement.getBoundingClientRect();
		const rootStyle = document.documentElement.style;

		rootStyle.setProperty('--one-width', `${width}px`);
		rootStyle.setProperty('--n-height', `${height}px`);
	}

	const observerCallback: IntersectionObserverCallback = (entries, observer) => {
		const isNoneVisible = !!entries.at(0)?.isIntersecting;

		if (isNoneVisible) {
			if (nElement.classList.contains('n-in') || oneElement.classList.contains('one-in')) {
				return;
			}

			nElement.classList.add('n-in');
			oneElement.classList.add('one-in');
		} else {
			nElement.classList.remove('n-in');
			oneElement.classList.remove('one-in');
		}
	};

	onMount(() => {
		observer = new IntersectionObserver(observerCallback, { threshold: 1 });

		ready = true;
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});

	beforeNavigate(() => {
		updateHeroCssVariables(0, 1);
	});

	$: {
		if (browser && noneContainer && observer) {
			updateCSSVariables();
			observer.observe(noneContainer);
		}
	}
</script>

<svelte:window
	on:resize={() => {
		updateCSSVariables();
	}}
	on:scroll={() => {
		updateHeroCssVariables(scrollY, window.innerHeight);
	}}
/>

{#if ready || !browser}
	<div>
		<section
			class={clsx(
				`flex flex-row-reverse items-center h-screen transition-none overflow-hidden z-0`
			)}
			bind:this={firstSection}
		>
			<div class="flex-[2] flex items-center flex-col">
				<div
					class="text-5xl md:text-8xl"
					in:fly|local={{ opacity: 0, delay: 0, duration: 500, y: -40 }}
				>
					Hi
				</div>
				<div
					class="text-5xl md:text-8xl my-4 text-center"
					in:fly|local={{ opacity: 0, delay: 700, duration: 500, x: -40 }}
				>
					I am NotNullDev
				</div>
				<ul class="my-5 flex gap-1">
					<div
						id="left-badge"
						class={clsx('badge variant-filled')}
						in:fade|local={{ delay: 600, duration: 500 }}
					>
						Software developer
					</div>
					<div
						class={clsx('badge variant-filled')}
						id="middle-badge"
						in:fade|local={{ delay: 800, duration: 500 }}
					>
						Gym enthusiast
					</div>
					<div
						id="right-badge"
						class={clsx('badge variant-filled')}
						in:fade|local={{ delay: 1000, duration: 500 }}
					>
						IT enjoyer
					</div>
				</ul>
			</div>
			<div class="flex-1 flex items-center justify-center p-8 max-[1200px]:hidden">
				<img
					src="https://cdn.notnulldev.com/hero-image.webp"
					width="300"
					height="300"
					alt="hero"
					in:fade
					id="hero-image"
					class="flex-[1] opacity-80"
				/>
			</div>
		</section>

		<section class="flex flex-col items-center min-h-[100vh]">
			<div>I aim to be</div>
			<div class="text-6xl flex gap-3 flex-wrap items-center justify-center">
				<div>Jack</div>
				<div>of</div>
				<div>all</div>
				<div>trades</div>
				<div>master</div>
				<div>of</div>
				<div class="flex flex-nowrap" bind:this={noneContainer}>
					{#if ready}
						<div bind:this={nElement}>n</div>
					{/if}
					<div bind:this={oneElement}>one</div>
				</div>
			</div>

			<div class="flex flex-wrap justify-center gap-32 w-full mt-12">
				<!-- infra -->
				<section class="flex flex-col gap-6 p-8 text-center">
					<h2 class="text-4xl mt-8">Infrastructure</h2>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">docker</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={Docker} alt="Docker" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">kubernetes</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={K8s} alt="Kubernetes" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">cloudflare</div>
						<img
							loading="lazy"
							fetchpriority="high"
							class="h-6"
							src={Cloudflare}
							alt="CloudFlare"
						/>
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">google cloud</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={Gcp} alt="Google cloud" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">microsoft azure</div>
						<img
							loading="lazy"
							fetchpriority="high"
							class="h-12"
							src={Azure}
							alt="Microsoft Azure"
						/>
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">linux</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={Linux} alt="Linux" />
					</div>
				</section>
				<section class="flex flex-col gap-6 p-8 text-center">
					<h2 class="text-4xl mt-8">Languages and frameworks</h2>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">next js</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={NextJs} alt="Next.js" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">go</div>
						<img loading="lazy" fetchpriority="high" class="h-6" src={Golang} alt="Go" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">java</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={Java} alt="Java" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">svelte</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={SvelteIcon} alt="Svelte" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">typescript</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={Ts} alt="TypeScript" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">spring</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={Spring} alt="Spring" />
					</div>
					<div class="flex gap-24 flex-row-reverse items-center justify-between">
						<div class="capitalize font-bold text-xl">postgres</div>
						<img loading="lazy" fetchpriority="high" class="h-12" src={Postgres} alt="PostgreSQL" />
					</div>
				</section>
			</div>
		</section>
		<section class="flex flex-col min-h-[120vh]">
			<h2 class="text-6xl my-24 w-full text-center">Recent Projects</h2>
			<!-- projects group -->
			<div class="p-1 flex justify-center gap-10 max-[900px]:flex-col max-[900px]:items-center">
				<!-- single card -->
				<div
					class={clsx(
						'flex flex-col w-[360px] h-[420px] rounded-xl hover:shadow-xl hover:shadow-indigo-600 group hover:scale-105 duration-300',
						'shadow-sm shadow-slate-950 '
					)}
				>
					<div class="rounded-t-xl">
						<img
							width="380"
							height="200"
							fetchpriority="low"
							loading="lazy"
							src="https://cdn.notnulldev.com/daxer.webp"
							alt="e-commerce application"
							class="object-cover object-left-top rounded-t-xl min-h-[200px] max-h-[200px]"
						/>
					</div>
					<div class="w-full p-6 flex flex-col flex-1">
						<div class="flex-1">
							<h2 class="font-bold text-xl">Local business</h2>
							<div class="my-5 text-sm text-slate-400">Website for local business</div>
						</div>
						<div class="w-full flex justify-end group-hover:animate-pulse">
							<a
								href="https://daxer.notnulldev.com"
								class="btn variant-filled-primary group-hover:animate-bounce">Visit</a
							>
						</div>
					</div>
				</div>
				<!-- single card -->
				<div
					class={clsx(
						'flex flex-col w-[360px] h-[420px] rounded-xl hover:shadow-xl hover:shadow-indigo-600 group hover:scale-105 duration-300',
						'shadow-sm shadow-slate-950 '
					)}
				>
					<div class="rounded-t-xl">
						<img
							width="380"
							height="200"
							loading="lazy"
							fetchpriority="low"
							src="https://cdn.notnulldev.com/e-com.webp"
							alt="e-commerce application"
							class="object-cover object-left-top rounded-t-xl min-h-[200px] max-h-[200px]"
						/>
					</div>
					<div class="w-full p-6 flex flex-col flex-1">
						<div class="flex-1">
							<h2 class="font-bold text-xl">E-commerce</h2>
							<div class="my-5 text-sm text-slate-400">
								Simple e-commerce site built with Next.js, prisma, trpc, tailwind, nextauth, stripe
								and daisyui.
							</div>
						</div>
						<div class="w-full flex justify-end group-hover:animate-pulse">
							<a
								href="https://e-com-nnd.fly.dev"
								class="btn variant-filled-primary group-hover:animate-bounce">Visit</a
							>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- <section>
		<h2 class="text-2xl">Recent Posts</h2>
	</section> -->
	</div>
{/if}

<style>
	@keyframes -global-n-in {
		0% {
		}

		100% {
			opacity: 0;
			transform: translateY(calc(var(--n-height) * -1));
		}
	}

	@keyframes -global-one-in {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(calc(var(--one-width) * -1));
		}
	}

	:global(.n-in) {
		animation-name: n-in;
		animation-duration: 2s;
		animation-fill-mode: forwards;
		animation-delay: 250ms;
		animation-timing-function: ease-out;
	}

	:global(.one-in) {
		animation-name: one-in;
		animation-duration: 2s;
		animation-fill-mode: forwards;
		animation-delay: 250ms;
	}

	#left-badge {
		transform: rotate(calc(var(--badgeRotationDeg) * -1))
			scale(calc(1 - var(--heroScrollPercentage)));
		transform-origin: bottom left;
		opacity: calc(1 - var(--heroScrollPercentage));
	}

	#middle-badge {
		transform: rotate(calc(var(--badgeRotationDeg))) scale(calc(1 - var(--heroScrollPercentage)));
		opacity: calc(1 - var(--heroScrollPercentage));
	}

	#right-badge {
		transform: rotate(calc(var(--badgeRotationDeg) * -1))
			scale(calc(1 - var(--heroScrollPercentage)));
		transform-origin: bottom right;
		opacity: calc(1 - var(--heroScrollPercentage));
	}

	#hero-image {
		transform: rotate(calc(var(--badgeRotationDeg) * -1))
			scale(calc(1 - var(--heroScrollPercentage)));
		transform-origin: bottom left;
		opacity: calc(1 - var(--heroScrollPercentage));
	}
</style>
