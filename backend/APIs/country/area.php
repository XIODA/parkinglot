<?php
include('../../../configure.php');
$link = new PDO('mysql:host='.$hostname.';dbname='.$database.';charset=utf8',$username,$password);

$dropdown = "";
if(isset($_POST['dropdown'])){
    $dropdown = $_POST['dropdown'];
}
// echo $dropdown_area;

$query = 'SELECT * FROM `parkinglot`.`country` WHERE `parkinglot_id` = :pid';
// $query = 'SELECT * FROM `parkinglot`.`country`';
$smt = $link->prepare($query);
$smt ->bindValue(':pid' , $dropdown); 
$smt ->execute();
$result = $smt ->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);


?>