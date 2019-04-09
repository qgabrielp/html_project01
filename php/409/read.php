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
include("connect.php");
$sql="select *from log where id=:id";
$stmt= $conn->prepare($sql);

$id=$_GET['id'];
$stmt->bindValue(':id',$id);
$stmt->execute();

$row=$stmt->fetch(PDO::FETCH_ASSOC);

?>
<h2><?php echo $row['name']; ?> 의 회원정보</h2>
<table>
    <tr>
        <td>아이디</td>
        <td>패스워드</td>
        <td>이름</td>
    </tr>
    <tr>
        <td><?php echo $row['id']; ?></td>
        <td><?php echo $row['pass']; ?></td>
        <td><?php echo $row['name']; ?></td>
    </tr>
</table>
<a href="logselect.php">[ 목록보기 ]</a>&nbsp;&nbsp;
<a href="update.php?id=<?php echo $row['id']?>">[ 수정 ]</a>&nbsp;&nbsp;
<a href="delete.php?id=<?php echo $row['id']?>">[ 삭제 ]</a>&nbsp;&nbsp;


