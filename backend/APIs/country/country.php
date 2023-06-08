<?php
include('../../../configure.php');
$link = new PDO('mysql:host='.$hostname.';dbname='.$database.';charset=utf8',$username,$password);

$dropdown_country = "";
if(isset($_POST['dropdown_country'])){
    $dropdown_country = $_POST['dropdown_country'];
}
// echo $dropdown_country;

$query = 'SELECT * FROM `parkinglot`.`parkinglot`  ';
$smt = $link->prepare($query);
// $smt -> bindValue(':country',$dropdown_country);
$smt ->execute();
// echo $query;

$result = $smt ->fetchAll(PDO::FETCH_ASSOC);
// print_r($result);
echo json_encode($result);


?>