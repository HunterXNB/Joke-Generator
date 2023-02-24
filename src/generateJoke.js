import axios from "axios"
function generateJoke() {
    const config = {
        headers: {
            accept: 'application/json'
        }
    }

    axios.get("https://raw.githubusercontent.com/HunterXNB/Joke-Generator/main/data/data.md", config).then(res => {
        axios.get(res.data, config).then(res => {
            document.getElementById("joke").innerHTML = res.data.joke
        })

    })
}
export default generateJoke
