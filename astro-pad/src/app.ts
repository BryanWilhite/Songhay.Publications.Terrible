export class App {
    static CompanyName: string = 'Songhay System'

    static Title: string = 'In Our Terribleness'

    static TitleParts: { Prefix: string, Stem: string, Suffix: string } =
    {
        Prefix: 'In',
        Stem: 'Our',
        Suffix: 'Terribleness'
    }
}

export enum AppIndexSections {
    bad = 'bad',
    superBad = 'superbad',
    terrible = 'terrible'
}

export const appIndexSectionMap = new Map([
    [AppIndexSections.bad, AppIndexSections.bad],
    [AppIndexSections.superBad, AppIndexSections.superBad],
    [AppIndexSections.terrible, AppIndexSections.terrible],
])
