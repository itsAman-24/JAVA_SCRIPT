<?php
    if(isset($_POST["s1"]))
    {
        $n=$_POST["rname"];   
        $e=$_POST["remail"];
        $p=$_POST["rphone"];
        $pw=$_POST["rpswd"];
        $a=$_POST["raddress"];
        
        require_once("db.php");

        $conn=mysqli_connect(host, un, password, db) or die("error in connection".mysqli_connect_error());
        $q="insert into register(name, email, phone, password, address)values('$n','$e','$p','$pw','$a')";
        mysqli_query($conn, $q) or die("error in query".mysqli_error($conn));
        header("location:signin.php");
        mysqli_close($conn);   
    }

?>


<html>
    <head>
        <title></title>
    </head>
    <body>
        <h2>Sign Up Form</h2>
        <form method="post" enctype="multipart/form-data">
            <label for="rname">Complete name</label>
            <input type="text" name="rname" required><br>
            
            <label for="remail">Email address</label>
            <input type="email" name="remail" required><br>
           
            <label for="rphone">Phone number</label>                                 
            <input type="text" name="rphone" required><br>
            
            <label for="pswd">Password</label>                    
            <input type="password" name="rpswd" required><br>
           
            <label for="address">Address</label>                   
            <textarea name="raddress" required></textarea><br>

            <label for="ui">Upload Image</label>    
            <input type="file" name="image" required><br>
                            
            <input type="submit" name="s1" value="Sign UP">               
        </form>  

        <?php
            if(isset($_POST['s1'])){
                $err=$_FILES["image"]["error"];
                if($err==0){
                    $tmpn=$_FILES["image"]["tmp_name"];
                    $fn=$_FILES["image"]["name"];
                    move_uploaded_file($tmpn,"img/$fn");
                    $msg="success";
                    echo $msg;
                }
                else if($err==4){
                    $msg="Please Choose file";
                    echo $msg;
                }
                else{
                    $msg="Error in uploading file";
                    echo $msg;
                }
            }
        ?>
    </body>
</html>