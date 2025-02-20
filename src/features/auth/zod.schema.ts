import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1)
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
	name: z.string().trim().min(1, 'required'),
	email: z.string().email(),
	password: z.string().min(8, 'minimum of 8 characters required')
});

export type RegisterSchema = z.infer<typeof registerSchema>;
