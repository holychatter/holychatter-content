<?php

include 'uploadInit.php';
header('Access-Control-Allow-Origin: '.$mainServerOrigin);

//move the file from temp name to local folder using $output name
if (move_uploaded_file($input, $output)) {
  echo("Uploaded");
  file_get_contents($mainServerOrigin."/asr-api?language=en&path=".$uploadPath."&filename=".$filename);
} else {
  echo("Not uploaded");
}

?>


