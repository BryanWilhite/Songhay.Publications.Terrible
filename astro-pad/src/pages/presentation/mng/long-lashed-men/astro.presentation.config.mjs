import { fontProviders } from 'astro/config';

export const presentationMncLashedMenConfig = {
    fonts: [{
        provider: fontProviders.local(),
        name: 'Harting',
        cssVariable: '--font-harting',
        options: {
            variants: [{
                src: ['./src/pages/presentation/mng/long-lashed-men/assets/Harting_plain-webfont.woff'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    }]
};
