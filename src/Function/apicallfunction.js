import apipath from "../Components/env"

async function apicallfunction(path, extra = {}) {
    console.log(path)
    var response = await fetch(apipath.nodeapipath + path, extra)
    var result = await response.json()
    console.log(result)
    return result
}

export default apicallfunction 