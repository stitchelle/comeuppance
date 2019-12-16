const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/pointsId/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/pointsId`).then(result => result.json())
  }
}