import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baggageAllowance = z.object({
  pieces: z.number().optional(),
  weight: z.string().optional(),
  size: z.string().optional(),
  notes: z.string().optional(),
});

const airlines = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/airlines' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    iata: z.string().optional(),
    country: z.string(),
    region: z.enum(['North America', 'Europe', 'Asia', 'Middle East', 'Africa', 'South America', 'Oceania']),
    alliance: z.enum(['Star Alliance', 'Oneworld', 'SkyTeam', 'Independent']).default('Independent'),
    website: z.string().url().optional(),
    logo: z.string().optional(),
    carryOn: z.object({
      size: z.string(),
      weight: z.string(),
      personalItem: z.string().optional(),
      notes: z.string().optional(),
    }),
    checked: z.object({
      economy: baggageAllowance,
      premiumEconomy: baggageAllowance.optional(),
      business: baggageAllowance.optional(),
      firstClass: baggageAllowance.optional(),
    }),
    fees: z.object({
      firstBag: z.string(),
      secondBag: z.string().optional(),
      overweight: z.string().optional(),
    }).optional(),
    specialBaggage: z.object({
      sports: z.string().optional(),
      musical: z.string().optional(),
      medical: z.string().optional(),
    }).optional(),
    batteryRules: z.object({
      lithiumIon: z.string(),
      spareBatteries: z.string(),
      powerBankLimit: z.string(),
      laptops: z.string().optional(),
    }),
    restrictedItems: z.array(z.string()),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    sourceUrl: z.string().url(),
    lastUpdated: z.string(),
  }),
});

const items = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/items' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum([
      'electronics', 'batteries', 'liquids', 'sharp-objects',
      'sports', 'medical', 'food', 'clothing', 'tools', 'misc'
    ]),
    description: z.string(),
    carryOnAllowed: z.union([z.boolean(), z.literal('conditional')]),
    checkedAllowed: z.union([z.boolean(), z.literal('conditional')]),
    tsaGuideline: z.string(),
    iataGuideline: z.string().optional(),
    capacityLimit: z.string().optional(),
    restrictions: z.array(z.string()),
    airlineRules: z.array(z.object({
      airlineSlug: z.string(),
      airlineName: z.string(),
      carryOn: z.union([z.boolean(), z.literal('conditional')]),
      checked: z.union([z.boolean(), z.literal('conditional')]),
      notes: z.string().optional(),
    })).optional(),
    relatedItems: z.array(z.string()).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    lastUpdated: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default('FlightBaggageRules Team'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    minuteRead: z.number().optional(),
  }),
});

export const collections = { airlines, items, blog };
