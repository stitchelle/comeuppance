const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/pointsHistory/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/pointsHistory`).then(result => result.json())
    },
    getAllForUser(id) {
        return fetch(`${remoteURL}/pointsHistory?userId=${id}`).then(result => result.json())
    },
    getCurrentForUser(id) {
        return fetch(`${remoteURL}/pointsHistory?userId=${id}`).then(result => result.json())
            .then(data => {
                let currentDate = new Date()
                let currentPoints = data.filter(point => {
                    let pointDate = new Date(point.timestamp)
                    return currentDate.getMonth() === pointDate.getMonth() && currentDate.getFullYear() === pointDate.getFullYear()
                })
                return currentPoints
            })
    },
    getPreviousForUser(id) {
        return fetch(`${remoteURL}/pointsHistory?userId=${id}`).then(result => result.json())
            .then(data => {
                let previousDate = new Date()
                let previousPoints = data.filter(point => {
                    let pointDate = new Date(point.timestamp)
                    return previousDate.getMonth()-1 === pointDate.getMonth() && previousDate.getFullYear() === pointDate.getFullYear()
                })
                return previousPoints
            })
    },
    post(newPointReason) {
        return fetch(`${remoteURL}/pointsHistory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPointReason)
        }).then(data => data.json())
    }
}