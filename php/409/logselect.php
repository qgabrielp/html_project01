<style>
    table{
        border-collapse: collapse;
    }
    td{
        height: 60px;
        border: 1px solid red;
    }
    td:nth-child(1){
        width: 100px;
        text-align: center;
    }
    td:nth-child(2){
        width: 200px;
    }
    td:nth-child(3){
        width: 300px;
    }
</style>


<?php
include('connect.php');
$sql="select *from log";
$stmt=$conn->prepare($sql);
$stmt->execute();
echo "<h1> 회원목록 </h1>";
echo "<table>";
while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
    
    echo "<tr>";
    
    echo "<td><a href=read.php?id=".$row['id'].">".$row['id']."</a></td><td><a href=read.php?id=".$row['id'].">".$row['pass']."</a></td><td>".$row['name']."</td>";
    
    echo "</tr>";
}
echo "</table>";

?>