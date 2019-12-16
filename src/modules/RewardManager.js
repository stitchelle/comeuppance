const remoteURL = "http://localhost:5002"


export default {
    get(id) {
        return fetch(`${remoteURL}/comeuppance/${id}`).then(result => result.json())
    },
    getAll(id) {
        return fetch(`${remoteURL}/comeuppance?comeuppanceType=1&userId=${id}&_sort=points&_order=ascd`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/comeuppance/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    post(newReward) {
        return fetch(`${remoteURL}/comeuppance`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReward)
        }).then(data => data.json())
    },
    update(editedReward) {
        return fetch(`${remoteURL}/comeuppance/${editedReward.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedReward)
        }).then(data => data.json());
      }
}