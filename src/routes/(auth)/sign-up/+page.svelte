<script lang="ts">
	import SignUpCard from '$features/auth/sign-up-card.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Jira Clone - Sign up</title>
</svelte:head>

<SignUpCard />
