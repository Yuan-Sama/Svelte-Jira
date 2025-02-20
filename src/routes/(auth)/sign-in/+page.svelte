<script lang="ts">
	import SignInCard from '$features/auth/sign-in-card.svelte';
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let { form, enhance } = superForm(data.form);
</script>

<svelte:head>
	<title>Jira Clone - Sign in</title>
</svelte:head>

<SignInCard {form} {enhance} />
