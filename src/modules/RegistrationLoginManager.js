const remoteURL = "http://localhost:5002"

export default {
    searchUser(email){
        return fetch(`${remoteURL}/users?q=${email}`)
        .then(data => data.json());
      },
      postNewUser(newUser) {
        return fetch(`${remoteURL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        }).then(data => data.json())
      },
      getRegisteredUser(email) {
        return fetch(`${remoteURL}/users?email=${email}`)
          .then(data => data.json())
      }
    }