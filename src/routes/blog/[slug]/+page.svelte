<script lang="ts">
	export let data;
</script>

<div>
	<pre>{JSON.stringify(data.metadata, null, 2)}</pre>
	<svelte:component this={data.component} />
</div>
