<?php

$mainServerOrigin = 'http://127.0.0.1:8080';
$uploadPath = '/home/jocelyn/asr/upload';


$input = $_FILES['audio_data']['tmp_name'];
$filename = $_FILES['audio_data']['name'];
$output = $uploadPath.'/'.$filename;

?>


