async function getData() {
    let data = []
    await $.ajax({
        type: "get",
        url: "https://restcountries.eu/rest/v2/all",
        success(response) {
            Object.assign(data,response)
        },
        error(error) {
            console.log(error)
        }
    })
    return data
}