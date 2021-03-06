const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/history/${id}`).then(result => result.json())
  },
  getAll(id) {
    return fetch(`${remoteURL}/history?userId=${id}&_expand=comeuppance&_expand=point&_sort=comeuppanceType`).then(result => result.json())
  },
  post(newHistory) {
    return fetch(`${remoteURL}/history`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newHistory)
    }).then(data => data.json())
},
update(completedChecked,id) {
    return fetch(`${remoteURL}/history/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedChecked)
    }).then(data => data.json());
}
}