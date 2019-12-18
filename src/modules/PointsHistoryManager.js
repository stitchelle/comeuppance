const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/pointsHistory/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/pointsHistory`).then(result => result.json())
    },
    post(newPointReason) {
        return fetch(`${remoteURL}/pointsHistory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPointReason)
        }).then(data => data.json())
    }
}