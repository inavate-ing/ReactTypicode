import axios from "./Axios";

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('/users')
            .then(({data}) => {
                resolve(data || ["No Users Found"]);
            }).catch(err => {
            console.error(err);
            reject(["Something went wrong"])
        })
    })
}
export const getUserByID = (userID) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/users/${userID}`)
            .then(({data}) => {
                resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}



export const getPostByID = (postID) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/posts/${postID}`)
            .then(({data}) => {
                resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}

export const getAlbumByUser = (userID) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/users/${userID}/albums`)
            .then(({data}) => {
                resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}

export const getPostsByUser = (userID) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/users/${userID}/posts`)
            .then(({data}) => {
                resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}

export const getTodosByUser = (userID) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/users/${userID}/todos`)
            .then(({data}) => {
                resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}

export const getCommentsByPost = (postId) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/comments?postId=${postId}`)
            .then(({data}) => {
                resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}


export const addNewUser = (user) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`/users`,user)
            .then((data) => {
                resolve(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}

export const addNewPost = (post) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`/posts`,post)
            .then((data) => {
                resolve(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}

export const addNewTodo = (todo) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`/todos`,todo)
            .then((data) => {
                resolve(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}


export const deletePostByID = (postId) => {
    return new Promise(() => {
        axios
            .delete(`/posts/${postId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    })
}


export const editTodo = (todoId, todo) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`/todos/${todoId}`,todo)
            .then((data) => {
                resolve(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
                reject(["Something went wrong"])
            })

    })
}



