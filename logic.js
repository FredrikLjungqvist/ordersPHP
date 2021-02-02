window.addEventListener("load", initSite)

function initSite(){
    renderProducts()
}


//Save cart to API reciever POST
async function saveCart() {

const dateToSave = cart
   
    const body = new FormData()
    body.set("date", dateToSave)
    console.log(dateToSave) 


    const setDate = await makeRequest("./api/produktReciever.php", "GET")
    console.log(setDate)
    

}


//Function to read and render product list GET
 async function renderProducts() {
    let response = await makeRequest("./api/produktReciever.php", "GET")
    /* console.log(response) */

    let renderContainer = document.getElementById("renderContainer")
    for (let i =0; i< response.length; i++)
        {
            
            let button = document.createElement("button");
            button.id="addButton"
            button.innerText =  "Lägg till i kundvagnen";
            button.addEventListener("click", function() {addToCart(response, i)}); 
            
            renderContainer.innerHTML += "<br>" + response[i].name + "<br>" + response[i].price +  "<br>" +  response[i].weight + "<br>" 
            renderContainer.appendChild(button)
            console.log(response[i])
            
        } 
     

}

function addToCart(response, i){
    let cartlist
    if(cartlist){
        
        cartlist.push(response[i]);
        console.log(cartlist + "exist")
        
    }else{
        cartlist = []
        cartlist.push(response[i]);
        
        console.log(cartlist + "new")
        
    }
}


var cart = [
    {
        productId: 2,
        quantity: 4
    }, {
        productId: 5,
        quantity: 1
    }
]

// Function to Create or Read data
async function makeRequest(path, method, body) {
    try{
        const response = await fetch(path, {method, body})
        
        return response.json()
       

    }catch(err){
        console.error(err)
    }
} 