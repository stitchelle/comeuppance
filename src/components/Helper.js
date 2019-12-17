pickRandom = (comeuppance) => {
    let randomValue = comeuppance[Math.floor(Math.random() * comeuppance.length)];
    alert(`YOU GOT: ${randomValue.name}`)
}
// comeuppance is a variable saying if its reward or punishment
isParent = () => {
    let Parent = JSON.parse(sessionStorage.getItem("credentials"))
    console.log("RewardList: Render", Parent.isParent);
        return(
            Parent.isParent
        )
}