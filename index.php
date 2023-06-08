<!DOCTYPE html>
<html lang="en">

<head>
<script src="./js/country.js"></script>
    <meta charset="utf-8">
    <title>停車場即時資訊</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free HTML Templates" name="keywords">
    <meta content="Free HTML Templates" name="description">



    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@500;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

    <style>
        body {
            margin: 0;
        }

        .text_top {
            height: 20px;
        }

        .text_title {
            height: 70px;
            font-size: 50px;
            padding-top: px;
            padding-left: 50px;
            background-color: black;
            color: white;
        }

        .select_county {
            margin-left: 55px;
            margin-top: 50px;
        }
        .map{
            margin-left: 55px;
            margin-top: 15px;
        }
    </style>
</head>
<form action="" method="post">
    <div class="text_top"> </div>
    <div class="text_title">
        <div id="text_title"></div>
    </div>
    <span class="select_county">縣市:</span>
    <select id="dropdown" value="" class="select_title" onchange="select_country()">
        <option>請選擇縣市</option>
        <option>請選擇縣市</option>
    </select>
</form>
<form>
    <span class="select_county">行政區:</span>
    <select id="area_dropdown" class="select_title" onchange="select_area()">
        <option>請選擇區域</option>

    </select>
</form>
<form action="" method="post">
    <input type="button" value="地圖" class="map">
    <input type="button" value="資料" class="map">
</form>




<!-- JavaScript -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>

<script src="./js/lib/jquery.js"></script>
</body>

</html>