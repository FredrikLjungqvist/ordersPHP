

async function setDate() {

const dateToSave = [{name: "olle", age: 15, happy: "yes"} ,{name: "lisa", age: 89, happy: "old and happy"}, "anna", "peter"]
   
    const body = new FormData()
    body.set("date", dateToSave)
    console.log(dateToSave)


    const setDate = await makeRequest("./api/produktReciever.php", "POST", body)
    console.log(setDate)
    

}

async function makeRequest(path, method, body) {
    try{
        const response = await fetch(path, {method, body})
        
        return response.json()
       

    }catch(err){
        console.error(err)
    }
}