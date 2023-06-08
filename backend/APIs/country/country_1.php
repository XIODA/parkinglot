<?php
include('../../../configure.php');
$link = new PDO('mysql:host='.$hostname.';dbname='.$database.';charset=utf8',$username,$password);

$dropdown = "";
if(isset($_POST['dropdown'])){
    $dropdown = $_POST['dropdown'];
}
// echo $dropdown_country;

$query_1 = 'SELECT * FROM `parkinglot`.`parkinglot` WHERE `id` = :si   ';
$smt_1 = $link->prepare($query_1);
$smt_1 -> bindValue(':si',$dropdown);
$smt_1 ->execute();
// echo $query;

$result_1 = $smt_1 ->fetchAll(PDO::FETCH_ASSOC);
// print_r($result);
echo json_encode($result_1);

?>