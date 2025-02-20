<script lang="ts">
	import SignUpCard from '$features/auth/sign-up-card.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let { form, enhance } = superForm(data.form);
</script>

<svelte:head>
	<title>Jira Clone - Sign up</title>
</svelte:head>

<SignUpCard {form} {enhance} />
