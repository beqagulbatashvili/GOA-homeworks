// 1)
async function fetchUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(user => {
        console.log(user.name);
    });
}

fetchUserData();

// 2)
async function fetchWithErrorHandling() {
    try {
        const response = await fetch("https://invalid-api-link.com/data");

        if (!response.ok) {
        throw new Error(response.status);
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error("Error");
    }
}

fetchWithErrorHandling();


// 3)
async function fetchWithRetry(url, retries = 3) {
    for (let i = 1; i <= retries; i++) {
        try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Bad response");
        const data = await response.json();
        console.log(data);
        return data;
        } catch (error) {
        console.warn(`Attempt ${i} failed.`);
        if (i === retries) {
            throw new Error("failed");
        }
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts");


// 4)
async function sequentialRequests() {
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postResponse.json();
    
    const firstPost = posts[0];
    console.log(firstPost.title);

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${firstPost.userId}`);
    const user = await userResponse.json();
    
    console.log(user.name);
}

sequentialRequests();
