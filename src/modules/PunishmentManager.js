const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/comeuppance/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/comeuppance?comeuppanceType=2`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/comeuppance/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newPunishment) {
    return fetch(`${remoteURL}/comeuppance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPunishment)
    }).then(data => data.json())
  },
  update(editedPunishment) {
    return fetch(`${remoteURL}/comeuppance/${editedPunishment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPunishment)
    }).then(data => data.json());
  }
}