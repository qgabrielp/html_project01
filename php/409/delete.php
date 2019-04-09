<?php
include("connect.php");
$sql="delete from log where id=:id";
$stmt=$conn->prepare($sql);

$id= $_GET['id'];
$stmt->bindValue(':id',$id);
$stmt->execute();

?>
<script>
location.href="logselect.php";
</script>