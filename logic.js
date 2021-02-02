window.addEventListener("load", initSite)

function initSite(){
    renderProducts()
    makeshopbtn()
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
            
            let name = document.createElement("h3")
            name.innerText = response[i].name

            let price = document.createElement("h4");
            price.innerText= response[i].price

            let weight = document.createElement("p")
            weight.innerText=response[i].weight



            /* renderContainer.innerHTML += "<br>" + response[i].name + "<br>" + response[i].price +  "<br>" +  response[i].weight + "<br>"  */
            renderContainer.append(name, price, weight, button);
            console.log("ordning product")
            
        } 
        
    
       
}

function makeshopbtn() {
    

    let shopBtn = document.createElement("button");
    shopBtn.innerText = "slutför köp" 
    shopBtn.addEventListener("click", shopButton);
    document.getElementById("app").appendChild(shopBtn)
    console.log("ordning2")
}



function createOrderItem() {
    
}


async function shopButton() {
    let body = json.stringifiy(cartlist)
    console.log(body)

    let cartItems = await makeRequest("./api/orderReciever.php", "POST", body)
    console.log(cartItems)
    
}


let cartlist = []
function addToCart(response, i){
    
    if(cartlist){
        
        cartlist.push(response[i]);
        console.log(cartlist + "exist")
        return cartlist
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