<?
	header('Content-Type: text/html; charset=utf-8');
	$user_id = $_POST['user_id'];
	$user_pw = $_POST['user_pw'];
	$email = $_POST['email'];
	$age = $_POST['age'];
	$phoneno = $_POST['phoneno'];
	$blog = $_POST['blog'];
	$sex = $_POST['sex'];
	$hobby = implode("/", $_POST['hobby']);
?>
<div data-role="page">
	<div data-role="header" data-position="fixed">
		<h1>회원가입 결과</h1>
		<a data-rel="back" data-icon="back">뒤로</a>
	</div>
	<div data-role="content">
		<ul data-role="listview" data-inset="true" data-theme="d">
			<li>이름: <?=$user_id?></li>
			<li>비밀번호: <?=$user_pw?></li>
			<li>이메일: <?=$email?></li>
			<li>나이: <?=$age?></li>
			<li>전화번호: <?=$phoneno?></li>
			<li>블로그: <?=$blog?></li>
			<li>성별: <?=$sex?></li>
			<li>취미: <?=$hobby?></li>
		</ul>
	</div>
</div>
