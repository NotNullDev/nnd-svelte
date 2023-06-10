<script lang="ts">
	export let data;
</script>

<div class="max-w-4xl dark:prose-invert prose mx-auto">
	<svelte:component this={data.component} />
</div>
