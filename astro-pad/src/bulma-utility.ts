export class BulmaUtility {
    static initializeBulma(): void {
        const isActiveCssClass = 'is-active'

        const nav = document.querySelector('.navbar') as HTMLElement
        const burger = nav.querySelector('.navbar-burger') as HTMLAnchorElement
        const navMenu = nav.querySelector('.navbar-menu') as HTMLDivElement

        if (!nav || !burger || !navMenu) {
            console.error('BulmaUtility: could not find nav menu elements!',
                { nav, burger, navMenu})

            return
        }

        burger?.addEventListener('click', () => {
            burger.classList.toggle(isActiveCssClass)
            navMenu?.classList.toggle(isActiveCssClass)
        });
    }
}
