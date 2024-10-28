import HttpClient from "../http.service";

export const SetupHttpClient = new HttpClient({
    baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL
})