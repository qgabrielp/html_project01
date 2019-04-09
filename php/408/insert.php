<?php
include("connect.php");

$sql="insert into hak (id, pass, name) values(:id, :pass, :name)";
$stmt=$conn->prepare($sql);

$id=$_GET['id'];
$pass=$_GET['pass'];
$name=$_GET['name'];

$stmt->bindValue(':id',$id);
$stmt->bindValue(':pass',$pass);
$stmt->bindValue(':name',$name);

$stmt->execute();
?>
<script>
location.href="form.html";
</script>