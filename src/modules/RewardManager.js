const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/rewards/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/rewards`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/rewards/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    post(newReward) {
        return fetch(`${remoteURL}/rewards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReward)
        }).then(data => data.json())
    },
    update(editedReward) {
        return fetch(`${remoteURL}/rewards/${editedReward.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedReward)
        }).then(data => data.json());
      }
}