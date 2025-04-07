import {BASE_URL_FAKE_STORE} from "../constants/urls.ts";

class Api {
    private base_url_store: string;

    constructor() {
        this.base_url_store = BASE_URL_FAKE_STORE;
    }

    async getAll(endpoint: string): Promise<any[]> {
        const response = await fetch(`${this.base_url_store}/${endpoint}`);
        const data = await response.json();
        return data;
    }
}

// singleton
const api = new Api();
export default api;
