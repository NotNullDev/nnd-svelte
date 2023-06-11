<script lang="ts">
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

	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let firstSection: HTMLElement;
	let ready = false;

	let scrollY: number;
	let innerHeight: number;

	$: heroScrollPercentage = scrollY / innerHeight;
	$: noneScrollPercentage = (() => {
		let relativeScroll = scrollY - innerHeight / 10;
		if (relativeScroll < 0) return 0;

		return 2 * (relativeScroll / innerHeight);
	})();
	let headerHeight: number = 78;

	function updateHeaderHeight() {
		const header = document.querySelector('header');
		if (!header) return;
		headerHeight = Number(getComputedStyle(header).height.replace('px', ''));

		firstSection.style.height = `${window.innerHeight - headerHeight}px`;
	}

	onMount(() => {
		updateHeaderHeight();
		ready = true;
	});
</script>

<svelte:window on:resize={updateHeaderHeight} bind:scrollY bind:innerHeight />
<div>
	<section
		class={clsx(`flex flex-row-reverse items-center h-screen transition-none`, '')}
		bind:this={firstSection}
	>
		<div class="flex-[2] flex items-center flex-col">
			{#if ready}
				<div class="text-8xl" in:fly|local={{ opacity: 0, delay: 0, duration: 500, y: -40 }}>
					Hi
				</div>
			{/if}
			{#if ready}
				<div
					class="text-8xl text-center"
					in:fly|local={{ opacity: 0, delay: 700, duration: 500, x: -40 }}
				>
					I am NotNullDev
				</div>
			{/if}
			<ul class="my-5 flex gap-1">
				{#if ready}
					<div
						class={clsx('badge variant-filled')}
						style={`
                    transform: rotate(${-Math.floor(160 * heroScrollPercentage)}deg) scale(${
							1 - heroScrollPercentage
						});
                    transform-origin: bottom left;
                    opacity: ${1 - heroScrollPercentage};
            `}
						in:fade|local={{ delay: 600, duration: 500 }}
					>
						Software developer
					</div>
				{/if}
				{#if ready}
					<div
						class={clsx('badge variant-filled')}
						style={`
                        rotate: ${Math.floor(160 * heroScrollPercentage)}deg;
                        opacity: ${1 - heroScrollPercentage};
                    `}
						in:fade|local={{ delay: 800, duration: 500 }}
					>
						Gym enthusiast
					</div>
				{/if}
				{#if ready}
					<div
						class={clsx('badge variant-filled')}
						style={`
                transform: rotate(${-Math.floor(160 * heroScrollPercentage)}deg) scale(${
							1 - heroScrollPercentage
						});
                transform-origin: bottom right;
                opacity: ${1 - heroScrollPercentage};
            `}
						in:fade|local={{ delay: 1000, duration: 500 }}
					>
						IT enjoyer
					</div>
				{/if}
			</ul>
		</div>
		<div class="flex-1 flex items-center justify-center p-8 max-[1200px]:hidden">
			{#if ready}
				<img
					src="https://cdn.notnulldev.com/hero-image.webp"
					width="300px"
					height="300px"
					alt="hero"
					in:fade
					class="flex-[1] opacity-80"
					style={`
                    transform: rotate(${-Math.floor(160 * heroScrollPercentage)}deg) scale(${
						1 - heroScrollPercentage
					});
                    transform-origin: bottom left;
                    opacity: ${1 - heroScrollPercentage};
                `}
				/>
			{/if}
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
			<div class="flex flex-nowrap">
				<div
					style={`
                display: inline-block;
                opacity: ${1 - noneScrollPercentage};
            `}
				>
					n
				</div>
				<div
					style={`
                transform: translateX(${-Math.floor(16 * noneScrollPercentage)}px);
            `}
				>
					one
				</div>
			</div>
		</div>
		<!-- <div class="mt-5 text-slate-400">
			In IT, to be good at something you need to know what are alternative ways of doing things and
			use knowledge from another topics to choose the best option for your problem.
		</div> -->
		<div class="flex flex-wrap justify-center gap-32 w-full mt-12">
			<!-- infra -->
			<section class="flex flex-col gap-6">
				<h2 class="text-4xl">Infrastructure</h2>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">docker</div>
					<img class="h-12" src={Docker} alt="docker" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">kubernetes</div>
					<img class="h-12" src={K8s} alt="kubernetes" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">cloudflare</div>
					<img class="h-6" src={Cloudflare} alt="cloudflare" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">google cloud</div>
					<img class="h-12" src={Gcp} alt="google cloud" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">microsoft azure</div>
					<img class="h-12" src={Azure} alt="microsoft azure" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">linux</div>
					<img class="h-12" src={Linux} alt="linux" />
				</div>
			</section>
			<section class="flex flex-col gap-6">
				<h2 class="text-4xl">Languages and frameworks</h2>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">next js</div>
					<img class="h-12" src={NextJs} alt="next js" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">go</div>
					<img class="h-6" src={Golang} alt="go" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">java</div>
					<img class="h-12" src={Java} alt="java" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">svelte</div>
					<img class="h-12" src={SvelteIcon} alt="svelte" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">typescript</div>
					<img class="h-12" src={Ts} alt="typescript" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">spring</div>
					<img class="h-12" src={Spring} alt="spring" />
				</div>
				<div class="flex gap-24 items-center justify-between">
					<div class="capitalize font-bold text-xl">postgres</div>
					<img class="h-12" src={Postgres} alt="postgres" />
				</div>
			</section>
		</div>
	</section>
	<section class="flex flex-col min-h-[120vh]">
		<h2 class="text-6xl my-24 w-full text-center">Recent Projects</h2>
		<!-- projects group -->
		<div class="p-16 flex justify-center gap-10 max-[900px]:flex-col max-[900px]:items-center">
			<!-- single card -->
			<div
				class={clsx(
					'flex flex-col w-[360px] h-[420px] rounded-xl hover:shadow-xl hover:shadow-indigo-600 group hover:scale-105 duration-300',
					'shadow-sm shadow-slate-950 '
				)}
			>
				<div class="rounded-t-xl">
					<img
						width="380px"
						height="200px"
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
						width="380px"
						height="200px"
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
							href="https://e-com.notnulldev.com"
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
