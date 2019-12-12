const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/punishments/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/punishments`).then(result => result.json())
  }
}