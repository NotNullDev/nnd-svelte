<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let firstSection: HTMLElement;
	let ready = false;

	let scrollY: number;
	let innerHeight: number;

	$: heroScrollPercentage = scrollY / innerHeight;
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
		class={`flex flex-row-reverse items-center h-screen transition-none`}
		bind:this={firstSection}
	>
		<div class="flex-[2] flex items-center flex-col">
			{#if ready}
				<div class="text-6xl" in:fly|local={{ opacity: 0, delay: 0, duration: 500, y: -40 }}>
					Hi
				</div>
			{/if}
			{#if ready}
				<div class="text-6xl" in:fly|local={{ opacity: 0, delay: 700, duration: 500, x: -40 }}>
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
		<div class="flex-1 flex items-center justify-center p-8">
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
	<section class="flex flex-col items-center min-h-[200vh]">
		<div>I aim to be</div>
		<div class="text-6xl">
			Jack of all trades master of <s id="none-n">n</s>one
		</div>
		<div class="mt-5 text-slate-400">
			In IT, to be good at something you need to know what are alternative ways of doing things and
			use knowledge from another topics to choose the best option for your problem.
		</div>
	</section>
</div>
