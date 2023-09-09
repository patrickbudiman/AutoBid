import { getTokenWorkaround } from "@/app/actions/authActions";

const baseUrl = 'http://localhost:6001/'; //gateway url
const baseUrlAuction = 'http://localhost:7001/api/';
const baseUrlSearch = 'http://localhost:7002/api/';

async function getAuction(url: string) {
    const requestOptions = {
        method: 'GET',
        headers: await getHeaders()
    }

    const response = await fetch(baseUrlAuction + url, requestOptions);
    return await handleResponse(response);
}

async function get(url: string) {
    const requestOptions = {
        method: 'GET',
        headers: await getHeaders()
    }

    const response = await fetch(baseUrlSearch + url, requestOptions);
    return await handleResponse(response);
}

async function post(url: string, body: {}) {
    const requestOptions = {
        method: 'POST',
        headers: await getHeaders(),
        body: JSON.stringify(body)
    }
    const response = await fetch(baseUrlAuction + url, requestOptions);
    return await handleResponse(response);
}

async function put(url: string, body: {}) {
    const requestOptions = {
        method: 'PUT',
        headers: await getHeaders(),
        body: JSON.stringify(body)
    }
    const response = await fetch(baseUrlAuction + url, requestOptions);
    return await handleResponse(response);
}

async function del(url: string) {
    const requestOptions = {
        method: 'DELETE',
        headers: await getHeaders()
    }
    const response = await fetch(baseUrlAuction + url, requestOptions);
    return await handleResponse(response);
}

async function getHeaders() {
    const token = await getTokenWorkaround();
    const headers = { 'Content-type': 'application/json' } as any;
    if (token) {
        headers.Authorization = 'Bearer ' + token.access_token
    }
    return headers;
}

async function handleResponse(response: Response) {
    const text = await response.text();
    // const data = text && JSON.parse(text);
    let data;
    try {
        data = JSON.parse(text);
    } catch (error) {   
        data = text;
    }

    if (response.ok) {
        return data || response.statusText;
    } else {
        const error = {
            status: response.status, //status code
            message: typeof data === 'string' && data.length > 0 ? data : response.statusText
        }
        return { error };
    }
}

export const fetchWrapper = {
    getAuction,
    get,
    post,
    put,
    del
}

