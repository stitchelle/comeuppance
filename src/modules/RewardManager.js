const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/rewards/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/rewards`).then(result => result.json())
  }
}