window.addEventListener("load", initSite)

function initSite(){
    renderProducts()
    makeshopbtn()
}
//Hej hej

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
            
            
        } 
        
    
       
}

function makeshopbtn() {
    

    let shopBtn = document.createElement("button");
    shopBtn.innerText = "slutför köp" 
    shopBtn.addEventListener("click", shopButton);
    document.getElementById("app").appendChild(shopBtn)
    
}



function createOrderItem() {
    
}
let cartlist = []

async function shopButton() {
    const bodytest = new FormData()
    bodytest.set("cartItems", JSON.stringify(cartlist))
    console.log(bodytest)  
    console.log(cartlist) 
    /* let body = JSON.stringify(cartlist)
    console.log(body)  */
    let sentorder = await makeRequest("./api/orderReciever.php", "POST", bodytest)
    
    console.log(sentorder, JSON.parse(sentorder))
    let render = document.getElementById("app")
    JSON.parse(sentorder).forEach(order => {
        console.log(order, typeof(order))
        let orderItem = document.createElement("div")
        orderItem.innerHTML = order.name + order.price;
        render.append(orderItem)
    });

    
    
        
   
    
    

   

    /*  // Default options are marked with *
    const response = await fetch("./api/orderReciever.php", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      body: body // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects  */
  
  
  
  
    
}



function addToCart(response, i){
    
    let foundIndex = cartlist.findIndex((cartItem)=>{
        return cartItem.product.id == response[i].id
    })

    cartlist:ID = response:ID 
    om dom är lika, cartlist quantitiy +1

    if(!cartlist){
       cartlist=[] 
        cartlist.push({
            product: response[i],
            quantity: 1
        })}else{
            cartlist.push({
                product: response[i],
                quantity: 1})
        } 
        
        return cartlist
    
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