import {APIRequestContext} from "@playwright/test";

export class PostsApi {

    constructor(private readonly request: APIRequestContext) {

    }

    async returnStorageState() {
        return this.request.storageState();
    }
}
