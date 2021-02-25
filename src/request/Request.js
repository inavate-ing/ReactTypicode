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





