import { message, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$features/auth/zod.schema';

export const load = (async () => {
	return { form: await superValidate(zod(loginSchema)) };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(loginSchema));
		return message(form, 'Login form submitted');
	}
} satisfies Actions;
