<?php
include('../../../configure.php');
$link = new PDO('mysql:host='.$hostname.';dbname='.$database.';charset=utf8',$username,$password);

$dropdown_area = "";
if(isset($_POST['dropdown_area'])){
    $dropdown_area = $_POST['dropdown_area'];
}
// echo $dropdown_area;

$query = 'SELECT * FROM `parkinglot`.`country`';
$smt = $link->prepare($query);
$smt ->execute();
$result = $smt ->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);


?>