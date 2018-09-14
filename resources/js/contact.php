<?php
$url = 'http://admin.aasane-byggsenter.no/api/sendmail';
$data = $_POST;
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ),
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

header("Location: http://localhost:63342/ssenter-master/index.html");
die();
