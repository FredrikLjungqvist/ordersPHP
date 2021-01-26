<?php
class Product{
    function __construct($name, $price, $weight) {
        $this->name = $name;
        $this->price = $price;
        $this->weight = $weight;
    }
   
}
//senast tillagt
for ($i = 0; $i < $cart; $i++) {
    $rawData = file_get_contents("https://randomuser.me/api/");
    
    $name = json_decode($rawData)->results[0]->name->first;
    $apaInstance = new Product($name, "./apor/bild" . $imageCount . ".jpg", $price); 

    $imageCount = incrementImageCount($imageCount);

    array_push($animalArray, $apaInstance);
}

$array = [[name:olle, price:20, weight:100]
name: peter, price: 30 weight: 200

]



?>