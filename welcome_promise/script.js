new Promise((resolve) => {
        setTimeout(() => {
            document.body.innerHTML += `<div>Welcome User</div>`;
            resolve()
        }, 2000);
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.body.innerHTML += `<div><img style="width:200px" src="1.jpg"></div>`;
                resolve()
            }, 2000);
        })
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.body.innerHTML += `<div>Thanks User</div>`;
                resolve()
            }, 2000);
        })
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                open("https://www.google.com/");
                resolve()
            }, 2000);
        })
    })