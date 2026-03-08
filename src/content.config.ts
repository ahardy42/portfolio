import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const sideQuests = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/side-quests' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		status: z
			.enum(['in-progress', 'completed', 'on-hold'])
			.default('in-progress'),
		link: z.string().optional(),
		linkText: z.string().optional(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		imageCaption: z.string().optional(),
	}),
})

export const collections = { 'side-quests': sideQuests }
