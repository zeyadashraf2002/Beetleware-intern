export class HttpClient {
async request(url, { method = "GET", body, headers = {}, timeout = 5000 } = {}) {
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), timeout);


const options = {
method,
headers: {
"Content-Type": "application/json",
...headers,
},
signal: controller.signal,
};


if (body) options.body = JSON.stringify(body);


try {
const res = await fetch(url, options);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
return await res.json();
} finally {
clearTimeout(timer);
}
}


get(url, opts) {
return this.request(url, { method: "GET", ...opts });
}


post(url, body, opts) {
return this.request(url, { method: "POST", body, ...opts });
}


delete(url, opts) {
return this.request(url, { method: "DELETE", ...opts });
}
}