<script lang="ts">
	import { page } from '$app/stores';

	$: slug = $page.url.pathname.replace('/blog', '');
	export let data;
</script>

<div>
	<pre>{JSON.stringify(data.metadata, null, 2)}</pre>
	<svelte:component this={data.component} />
</div>
