<?php
include("connect.php");
$sql="insert into sindo values(:id, :pass, :name, :photo, :dg)";
$stmt=$conn->prepare($sql);

// $_FILES['photo']['name'];
// $_FILES['photo']['tmp_name'];
// $_FILES['photo']['size'];
// $_FILES['photo']['type'];
// $_FILES['photo']['error'];

$photo='img/'.$_FILES['photo']['name'];
move_uploaded_file($_FILES['photo']['tmp_name'],$photo);
// img/아래에 그림파일을 탑재

$stmt->bindValue(':id',$_POST['id']);
$stmt->bindValue(':pass',$_POST['pass1']);
$stmt->bindValue(':name',$_POST['name']);
$stmt->bindValue(':photo',$photo);
$stmt->bindValue(':dg',$_POST['dg']);

$stmt->execute();
?>

<script>
location.href="ok.php";
</script>