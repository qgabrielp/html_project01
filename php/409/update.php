<?php
include("connect.php");
$sql ="select * from log where id=:id";
$stmt =$conn->prepare($sql);
$id =$_GET['id'];
$stmt->bindValue(':id',$id);
$stmt->execute();
$row=$stmt->fetch(PDO::FETCH_ASSOC);


//$sql ="update log set name=:name where id=:id";
//$stmt =$conn->prepare($sql);


?>
<form action="up.php" method="get">
    아이디: <?php echo $row['id']; ?><br><br>
    <input type="password" name="pass" value="<?php echo $row['pass']; ?>"><br><br>
    <input type="text" name="name" value="<?php echo $row['name']; ?>"><br><br>
    <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
    <input type="submit" value="수정하기"> &nbsp;&nbsp;&nbsp;
    <input type="reset" value="취소하기">
</form>