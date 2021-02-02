<?php




require("./productList.php");

try {
    
    if($_SERVER["REQUEST_METHOD"]==="GET"){
        
        
                    
       

        if(!isset($_GET["response"])){
            
         
         
                   
        
        
        
            
            echo json_encode($allProducts);
            exit; 
        
        }else{
            echo json_encode("fail");
            exit;
        } 

    }
    
} catch (Exception $error) {
    echo json_encode("fel i catch");
    exit;

    
} 

    

   
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

