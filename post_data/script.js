// post data to api

let data = {
    title: "foo",
    body: "bar",
    userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((res) => console.log(res))