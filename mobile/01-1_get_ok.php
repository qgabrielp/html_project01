<!DOCTYPE html >
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
	<meta charset="UTF-8">
		
	<title> 모바일테스트  </title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--
	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="css/main.css" />
-->
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css" />
	
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<!--	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>-->
<!--   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>-->
<!--
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="js/prefixfree.min.js"></script>
	<script type="text/javascript" src="js/custom.js"></script>
-->
    <script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
    
    <script>
        <?
        $now = date("Y-m-d H:i:s", mktime());
        $number = $_GET['number'];
        if(!@number){
            $number = 1;
        }
        
        ?>
    </script>
	
	<style>
        
    </style>
    
</head>
<body>
<div data-role="page">
    <div data-role="header" data-position="fixed">
        <h1>GET방식 페이지 이동</h1>
    </div>
    <div data-role="content">
        <p>현재 시각: <?=$now?></p>
        <p>number = <?=$number?></p>
    </div>
</div>
</body>
</html>















