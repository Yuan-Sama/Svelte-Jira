import { message, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { registerSchema } from '$features/auth/zod.schema';

export const load = (async () => {
	return { form: await superValidate(zod(registerSchema)) };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(registerSchema));
		return message(form, 'register form submitted');
	}
} satisfies Actions;
