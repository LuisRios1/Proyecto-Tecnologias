<?php
    $conexion = new mysqli("localhost","root","","galeria");

/*
$nombre = $_POST['Titulo'];
$descripcion = $_POST['descripcion'];
$Imagen = addslashes(file_get_contents($_FILES['Imagen']['tmp_name']));

$query = "INSERT INTO galeria(Titulo, Descripcion, Imagen) VALUES('$nombre','$descripcion','$Imagen')";
$resultado = $conexion->query($query);
*/

$rodrigo = "SELECT * FROM galeria";
$imagenes = $conexion->query($rodrigo);
while($row = $imagenes->fetch_assoc()){
    $Titulo = $row['Titulo'];
    $desc = $row['Descripcion'];
    $img = base64_encode($row['Imagen']);
if(!empty($Titulo))
{
    $jsonprub[]=array('Titulo'=> $Titulo,'img'=> $img,'descripcion'=> $desc);
}
}

$json_string = json_encode($jsonprub);
echo $json_string;

?>