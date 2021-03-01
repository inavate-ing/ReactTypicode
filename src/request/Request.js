import axios from "./Axios";

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('/users')
            .then(({data}) => {
                resolve(data );
            }).catch(err => {
            console.error(err);
            reject("No Users Found")
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
                reject("No User Found")
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
                reject("No Post Found")
            })

    })
}

export const getAlbumByID = (albumID) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/albums/${albumID}`)
            .then(({data}) => {
                resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject("No Album Found")
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
                reject("No Albums Found")
            })

    })
}

export const getPhotoByAlbum = (albumID) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/albums/${albumID}/photos`)
            .then(({data}) => {
                resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject("No Photos Found")
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
                reject("No Post Found")
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
                reject("No Todo Found")
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
                reject("No Comment Found")
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
                reject("Something went wrong")
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
                reject("Something went wrong")
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
                reject("Something went wrong")
            })

    })
}


export const deletePostByID = (postId) => {
    return new Promise((resolve,reject) => {
        axios
            .delete(`/posts/${postId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                resolve()
            }).catch((err) => {
                reject("something went wrong")
        })

    })
}

export const editTodoByID = (todoId, completed) => {
    return new Promise((resolve, reject) => {
        axios
            .patch(`/todos/${todoId}`,{completed})
            .then(res => {
                resolve(res.data);
            }).catch( () => {
                reject("Something went wrong")
        })

    })
}




