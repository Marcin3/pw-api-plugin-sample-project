import { test as base } from 'pw-api-plugin';
import {StartPage} from "./startPage";
import {PostsApi} from "./postsApi";

type MyFixtures = {
    startPage: StartPage;
    postsApi: PostsApi
};

export const test = base.extend<MyFixtures>({
    startPage: async ({page}, use) => {
        await use(new StartPage(page))
    },

    postsApi: async ({request}, use) => {
        await use(new PostsApi(request))
    }

});
export { expect } from '@playwright/test';
export { pwApi } from 'pw-api-plugin';