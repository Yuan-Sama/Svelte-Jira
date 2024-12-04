<script>
	let count = $state(0);

	let double = $derived(count * 2);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={() => (count += 1)}>+1</button>

<div>
	<h1>{count}</h1>
	<h2>{double}</h2>
</div>
