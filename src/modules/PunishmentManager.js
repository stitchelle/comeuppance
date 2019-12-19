const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/comeuppances/${id}`).then(result => result.json())
  },
  getAll(id) {
    return fetch(`${remoteURL}/comeuppances?comeuppanceType=2&userId=${id}&_sort=pointId&_order=ascd&_expand=point`).then(result => result.json())
  },
  getAllByPoints(id,pointId) {
    return fetch(`${remoteURL}/comeuppances?comeuppanceType=2&userId=${id}&_sort=pointId&_order=ascd&_expand=point&pointId=${pointId}`).then(result => result.json())
},
  delete(id) {
    return fetch(`${remoteURL}/comeuppances/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newPunishment) {
    return fetch(`${remoteURL}/comeuppances`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPunishment)
    }).then(data => data.json())
  },
  update(editedPunishment) {
    return fetch(`${remoteURL}/comeuppances/${editedPunishment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPunishment)
    }).then(data => data.json());
  }
}