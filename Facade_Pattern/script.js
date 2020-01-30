function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUsersPosts(userId) {
    return getFetch(`https://jsonplaceholder.typicode.com/posts`, {
        userId: userId
    })
}

getUsers().then(users => {
    users.forEach(user => {
        getUsersPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

function getFetch(url, params = {}) {
    const QueryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    return fetch(`${url}?${QueryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}