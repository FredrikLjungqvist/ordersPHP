<?php


/* require("./classes.php"); */
require("./orderReciever.php");
require("./productList.php");

try {
    
    if($_SERVER["REQUEST_METHOD"]==="GET"){
        
        /* echo json_encode("hej"); */
                    
       

        if(!isset($_GET["response"])){
            
                   
                    echo json_encode(unserialize($_GET["response"]));
                    exit;                   
                    

                    /* $Response = $_GET["response"];
                    echo json_encode($_GET);
                    exit; */
                    /* return $Response; */
        
        }else{
            echo json_encode("fail");
            exit;
        } 

    }
    
} catch (Exception $error) {
    echo json_encode("fel i catch");
    exit;

    
} 

/*  Replaced by productList.API
    $productArray=
    [
        ["name"=> "IphoneX", "price" => 8900, "weight" => 5000],
        ["name"=> "Samsung S21", "price" => 13990, "weight" => 6000],
        ["name"=> "Galaxy Fold", "price" => 22495, "weight" => 8000],
        ["name"=> "Nokia 2110", "price" => 700, "weight" => 2000],
        ["name"=> "Samsung Master Phone", "price" => 3899, "weight" => 3500],
        ["name"=> "OnePlus", "price" => 2350, "weight" => 1999],
        ["name"=> "Motorola oldOne", "price" => 499, "weight" => 1500],
       
    ]; */

   
/*     function loopArray($array, $i){
        
    $testArray = [];
    for ($i = 0; $i < count($array); $i++) {
        
        $id = $array[$i]["id"];
        $name = $array[$i]["name"];
        $price = $array[$i]["price"];
        $weight = $array[$i]["weight"];

        $productInstance = new Product($id, $name, $weight , $price); 
        
        /* echo $name.$price.$weight.$productInstance; */
        
    
  /*      array_push($testArray, $productInstance);
       
     
        
        }
        foreach($_SESSION["productArray"] as $product){
            echo $product->name. " ".$product->price." ".$product->weight."<br><br>";
        }


    }  */

    
?>

