const Helper = {
    isParent: function (sessionStorage) {
        let Parent = JSON.parse(sessionStorage.getItem("credentials"))
        return (
            Parent.isParent
        )
    }
}
export default Helper