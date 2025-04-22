import { test as base } from 'pw-api-plugin';
import {StartPage} from "./startPage";

type MyFixtures = {
    startPage: StartPage;
};

export const test = base.extend<MyFixtures>({
    startPage: async ({page}, use) => {
        await use(new StartPage(page))
    },

});
export { expect } from '@playwright/test';
export { pwApi } from 'pw-api-plugin';