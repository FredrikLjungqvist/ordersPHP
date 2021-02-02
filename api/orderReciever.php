

<?php
//Last step in the process of order

session_start();
require("./productList.php");


if($_SERVER["REQUEST_METHOD"]==="POST"){
    if(isset($_POST["cartItems"])){

   /*  $cartItems = $_POST["cartItems"];

    $orderItems = [];

    foreach($cartItems as $cartItem) {

        array_push($orderItems, new OrderItem($cartItem["productId"], $cartItem["quantity"]));

         foreach($allProducts as $product) {
            if($cartItem->id == $product["id"]) {
                
            }
        } 

    } */

    $orderList = $_POST["cartItems"];
    echo json_encode(unserialize($_POST["cartItems"]));

    /* $orderList = unserialize($_SESSION["orderList"]);
    array_push($orderList, new Order($orderItems));
    $_SESSION["orderList"] = serialize($orderList);
    echo json_encode($orderList) */


    /* $_POST["cartItems"][0]["productId"];
    $_POST["cartItems"][0]["quantity"]; */


    }
} 


?>