const baseUrl = 'http://localhost:3000/api';
class HttpClient {

    async get(api: string): Promise<any> {
        return fetch(`${baseUrl}/${api}`)
            .then(res => res.json());
    }

    async post(api: string, body: any): Promise<any> {
        return fetch(`${baseUrl}/${api}`, {
            method: "POST",
            body: JSON.stringify(body),
        }).then(res => res.json());
    }

}

export const httpClient = new HttpClient();