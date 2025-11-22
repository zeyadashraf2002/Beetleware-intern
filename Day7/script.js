//async / await

async function getData() {
  console.log("Start");
  await new Promise(res => setTimeout(res, 1000));
  console.log("End");
}
// getData();


//fetch بيرجع Promise
async function loadUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
// loadUsers();


// try / catch / finally مع Async/Await

async function loadData() {
  try {
    console.log("Fetching...");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("Done", data);

  } catch (err) {
    console.log("Error:", err);

  } finally {
    console.log("Finished");
  }
}
// loadData()


// AbortController – إلغاء fetch (Timeout / Cancel)


async function loadData() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal
    });

    const data = await res.json();
    console.log("Success:", data);

  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Request timed out");
    } else {
      console.log("Error:", err);
    }

  } finally {
    clearTimeout(timeout);
  }
}

// loadData();



// Retry with Backoff strategy

async function fetchWithRetry(url, retries = 3, backoff = 500) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Status " + res.status);

    return await res.json();

  } catch (err) {
    if (retries === 0) throw err;

    console.log("Retrying in", backoff, "ms");
    await new Promise(res => setTimeout(res, backoff));

    return fetchWithRetry(url, retries - 1, backoff * 2); // Backoff ×2
  }
}

// fetchWithRetry("https://jsonplaceholder.typicode.com/users")
//   .then(console.log)
//   .catch(console.error);



//Minimal Retry/Backoff

async function apiCall(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Bad Status");
      return await res.json();

    } catch (err) {
      if (attempt === 3) throw err;
      await new Promise(res => setTimeout(res, 500 * attempt));
    }
  }
}
apiCall("https://jsonplaceholder.typicode.com/users")