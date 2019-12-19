const remoteURL = "http://localhost:5002"


export default {
    get(id) {
        return fetch(`${remoteURL}/comeuppances/${id}`).then(result => result.json())
    },
    getAll(id) {
        return fetch(`${remoteURL}/comeuppances?comeuppanceType=1&userId=${id}&_sort=pointId&_order=ascd&_expand=point`).then(result => result.json())
    },
    getAllByPoints(id,pointId) {
        return fetch(`${remoteURL}/comeuppances?comeuppanceType=1&userId=${id}&_sort=pointId&_order=ascd&_expand=point&pointId=${pointId}`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/comeuppances/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    post(newReward) {
        return fetch(`${remoteURL}/comeuppances`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReward)
        }).then(data => data.json())
    },
    update(editedReward) {
        return fetch(`${remoteURL}/comeuppances/${editedReward.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedReward)
        }).then(data => data.json());
      }
}