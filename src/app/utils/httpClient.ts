const baseUrl = 'http://localhost:3000/api';
class HttpClient {

    async get(api: string, token?: string): Promise<any> {
        return fetch(`${baseUrl}/${api}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(res => res.json());
    }

    async post(api: string, body: any, token?: string): Promise<any> {
        return fetch(`${baseUrl}/${api}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => res.json());
    }

    async put(api: string, body: any, token?: string): Promise<any> {
        return fetch(`${baseUrl}/${api}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => res.json());
    }

    async delete(api: string, token?: string): Promise<any> {
        return fetch(`${baseUrl}/${api}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => res.json());
    }
}

export const httpClient = new HttpClient();