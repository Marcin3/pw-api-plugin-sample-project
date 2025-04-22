import { Locator, Page } from "@playwright/test";

export class StartPage {
    private readonly guideButton: Locator;
    private readonly sponsorThisProjectButton: Locator;

    constructor(private readonly page: Page) {
        this.guideButton = this.page.getByRole('link', { name: 'Guide', exact: true });
        this.sponsorThisProjectButton = this.page.getByRole('link', { name: 'Sponsor this project', exact: true });
    }

    async clickOnGuideButton() {
        await this.guideButton.click();
    }

    async clickOnSponsorThisProjectButton() {
        await this.sponsorThisProjectButton.click();
    }

}
