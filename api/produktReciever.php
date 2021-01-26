<?php
echo json_encode("test");
try {
    
    if($_SERVER["REQUEST_METHOD"]==="POST"){
    echo json_encode("kom inte till post_date");
    
        if(isset($_POST["date"])){
            
            
            $date = $_POST["date"];
            echo json_encode(true);

            
            
            
            
            
            
        }else{
            echo "fail";
            exit;
        } 
    }


    

} catch (Exception $error) {
    echo json_encode("fel i catch");

    
}

?>

