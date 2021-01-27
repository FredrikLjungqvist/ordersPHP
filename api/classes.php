<?php
class Product {
    function __construct(/* $id*/$name, $price, $weight) {
        /* $this->id = $id; */
        $this->name = $name;
        $this->price = $price;
        $this->weight = $weight;
    }
} 

/* class Orderitem{
    function __construct($productId, $quantity) {
        $this->productId = $productId;
        $this->quantity = $quantity;    
    }

    public $product;
    public $quantity;
}

class Order{
    function __construct($orderItems) {
        $this->orderItems = $orderItems;
    }
} */






?>