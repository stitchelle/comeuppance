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
    }
}