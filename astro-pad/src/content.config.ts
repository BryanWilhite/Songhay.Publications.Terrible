import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import csvStringForFeeds from '../../obv/splash-research-studio-feeds.csv?raw'
import csvStringForProducts from '../../obv/splash-products.csv?raw'
import csvStringForTools from '../../obv/splash-research-3rd-party-tools.csv?raw'
import { csvParse } from 'd3-dsv'

const products = defineCollection({
    loader: () => {
        const rows = csvParse(csvStringForProducts)

        return rows.map((row, i) =>({
            id: `${i}`,
            ...row
        }))
    },
    schema: z.object({
        name: z.string(),
        uri: z.string(),
        description: z.string()
    })
})

const tools = defineCollection({
    loader: () => {
        const rows = csvParse(csvStringForTools)

        return rows.map((row, i) =>({
            id: `${i}`,
            ...row
        }))
    },
    schema: z.object({
        title: z.string(),
        uri: z.string(),
        svgKey: z.string()
    })
})

const feeds = defineCollection({
    loader: () => {
        const rows = csvParse(csvStringForFeeds)

        return rows.map((row, i) =>({
            id: `${i}`,
            ...row
        }))
    },
    schema: z.object({
        enabled: z.stringbool(),
        name: z.string(),
        sourceUri: z.string(),
        snapshotUri: z.string()
    })
})

export const collections = { feeds, products, tools }
