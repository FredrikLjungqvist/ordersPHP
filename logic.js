

async function setDate() {

const dateToSave = document.getElementById("input").value
   
    const body = new FormData()
    body.set("date", dateToSave)
    console.log(dateToSave)


    const setDate = await makeRequest("./api/produktReciever.php", "POST", body)
    console.log(setDate)
    

}


/*let test = 20
sendData()

async function sendData() {
    

    const body = JSON.stringify(test)
    
    console.log(body)
    let request = await makeRequest("./api/produktReciever.php", "POST", body)
    console.log(request)


}*/

async function makeRequest(path, method, body) {
    try{
        const response = await fetch(path, {method, body})
        console.log(response)
        return response
        

    }catch(err){
        console.error(err)
    }
}