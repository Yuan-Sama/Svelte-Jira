<script lang="ts">
	import Logo from '$assets/logo.svg';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { Button } from '$components/ui/button';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<main class="bg-neutral-100 min-h-screen">
	<div class="mx-auto max-w-screen-2xl p-4">
		<nav class="flex justify-between items-center">
			<img src={Logo} alt="Logo" width="152" height="56" />
			<Button variant="secondary">Sign up</Button>
		</nav>
	</div>
	<div class="flex flex-col items-center justify-center pt-4 md:pt-14">
		{@render children()}
	</div>
</main>
