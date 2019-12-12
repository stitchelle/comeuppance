const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/punishments/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/punishments`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/punishments/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newPunishment) {
    return fetch(`${remoteURL}/punishments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPunishment)
    }).then(data => data.json())
}
}