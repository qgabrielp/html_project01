<?php
include('connect.php');
// mysql 디비서버로 연결
$sql = 'insert into log values(:id,:pass,:name)';
// 가상의 아이디,패스,네임을 삽입
$stmt = $conn->prepare($sql);
// 가상의 것을 진짜로 넘기기위한 준비

$id=$_GET['id'];
$pass=$_GET['pass'];
$name=$_GET['name'];
// 넘어온 값을 각 변수로 저장

$stmt->bindValue(':id',$id);
// 가짜 아이디를 진짜 아이디로 바꾸어 줌 - 최고의 보안
$stmt->bindValue(':pass',$pass);
// 가짜 패스를 진짜 패스로 바꾸어 줌 - 최고의 보안
$stmt->bindValue(':name',$name);
// 가짜 네임를 진짜 네임로 바꾸어 줌 - 최고의 보안

$stmt->execute();
// 위의 바인딩을 최종 실행하시오



?>
<script>
location.href="login.html";
</script>