<?php
include("connect.php");
$sql ="select * from sindo where id=:id";
$stmt =$conn->prepare($sql);
//$id=$_GET['id'];
$stmt->bindValue(':id',$_GET['id']);
$stmt->execute();

$row=$stmt->fetch(PDO::FETCH_ASSOC);
if($row){
    echo "이미 있는 아이디입니다.";
}else{
    echo "사용 가능한 아이디입니다.";
}
?>
<br>
<a href="javascript:void(0);" onclick="window.close();">닫기</a>