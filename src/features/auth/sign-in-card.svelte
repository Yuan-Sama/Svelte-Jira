<script lang="ts">
	import GoogleIcon from '$assets/google.svg';
	import GithubIcon from '$assets/github.svg';
	import DottedSeparator from '$components/dotted-separator.svelte';
	import { Button } from '$components/ui/button';
	import * as Card from '$components/ui/card';
	import { Input } from '$components/ui/input';
	import type { SuperFormData, SuperFormEvents } from 'sveltekit-superforms/client';
	import type { LoginSchema } from './zod.schema';
	import { enhance as kitEnhance } from '$app/forms';

	let {
		form,
		enhance
	}: {
		form: SuperFormData<LoginSchema>;
		enhance: (
			el: HTMLFormElement,
			events?: SuperFormEvents<LoginSchema, any> | undefined
		) => ReturnType<typeof kitEnhance>;
	} = $props();
</script>

<Card.Root class="w-full h-full md:w-[487px] border-none shadow-none">
	<Card.Header class="flex items-center justify-center text-center p-7">
		<Card.Title class="text-2xl">Welcome back!</Card.Title>
	</Card.Header>
	<div class="px-7">
		<DottedSeparator />
	</div>
	<Card.Content class="p-7">
		<form method="POST" class="space-y-4" use:enhance>
			<Input
				required
				type="email"
				name="email"
				bind:value={$form.email}
				placeholder="Enter email address"
				disabled={false}
			/>
			<Input
				required
				type="password"
				name="password"
				bind:value={$form.password}
				placeholder="Enter password"
				disabled={false}
				minlength={8}
				maxlength={256}
			/>
			<Button disabled={false} size="lg" class="w-full" type="submit">Login</Button>
		</form>
	</Card.Content>
	<div class="px-7">
		<DottedSeparator />
	</div>
	<Card.Content class="p-7 flex flex-col gap-y-4">
		<Button variant="secondary" size="lg" class="w-full" disabled={false}
			><img src={GoogleIcon} alt="Google Logo" class="mr-2 size-5" />Login with Google</Button
		>
		<Button variant="secondary" size="lg" class="w-full" disabled={false}
			><img src={GithubIcon} alt="Google Logo" class="mr-2 size-5" />Login with Github</Button
		>
	</Card.Content>
</Card.Root>
