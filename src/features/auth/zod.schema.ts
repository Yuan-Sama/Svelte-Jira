import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email().default(''),
	password: z.string().min(1, 'Password is required').default('')
});

export type LoginSchema = z.infer<typeof loginSchema>;
