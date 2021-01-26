<?php
session_start();

try {
    
    if($_SERVER["REQUEST_METHOD"]==="POST"){
    
    
        if(isset($_POST["date"])){
           
            
            $date = $_POST["date"];
            
            
            $_SESSION["date"] = $date;
            echo json_encode($_SESSION);

            exit;
            
            
            
            
            
        }else{
            echo "fail";
            exit;
        } 
    }


    

} catch (Exception $error) {
    echo json_encode("fel i catch");

    
}

?>

