const remoteURL = "http://localhost:5002"

export default {
    post(newKid) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newKid)
        }).then(data => data.json())
    }, 
    get(id) {
        return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
    },
    getKid(kid) {
        return fetch(`${remoteURL}/relationships/${kid}?_expand=user`).then(result => result.json())
    },
    getAll() {
        const userId = JSON.parse(localStorage.getItem("credentials"))
        return fetch(`${remoteURL}/users?userId=${userId.id}&`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/users/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    update(editedKid,id) {
        return fetch(`${remoteURL}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedKid)
        }).then(data => data.json());
    },
    postRelationship(newRelationship) {
        return fetch(`${remoteURL}/relationships`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRelationship)
        }).then(data => data.json())
    },
    getAllRelationsips() {
        const userId = JSON.parse(localStorage.getItem("credentials"))
        return fetch(`${remoteURL}/relationships?parentId=${userId.id}&_expand=user`).then(result => result.json())
    }
    //   http://localhost:5002/relationships?parentId=1&&_expand=user
}