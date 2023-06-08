window.onload = function () {
var dropdown = document.getElementById('dropdown');
var text_title = document.getElementById('text_title');
var index = dropdown.selectedIndex;
// console.log(index);


// var datas = {
//     "dropdown_country": index,
// }
// console.log(datas);



$.ajax({
    type: 'POST',
    url: './backend/APIs/country/country.php',
    dataType: 'JSON',
    success: function (response) {

        // console.log(response );
        var text = '<div id="parkinglot_taiwan">全台の停車場</div>'
        var country_1 = '<option value="-1">請選擇縣市</option>';
        // console.log(country_1);

        for (var i = 0; i < response.length; i++) {
            country_1 = country_1 + '<option value="' + response[i].id + '">' + response[i].country + '</option>';
            // console.log(country_1);

            // console.log(text);
            // text = text + '<div style="display:none">' + response[i].country + 'の停車場</div>';
            
        }

        dropdown.innerHTML = country_1;
       
            text_title.innerHTML = text;
            // console.log(dropdown);
        
    }

})


}

function select_country(){

var dropdown = document.getElementById('dropdown');
var parkinglot_taiwan = document.getElementById('parkinglot_taiwan');
// var textContent = parkinglot_taiwan.textContent; //取得
var index = dropdown.selectedIndex;
// console.log(index_1);
var datas = {
    "dropdown": index,
}
console.log(parkinglot_taiwan);

// return;
$.ajax({
    type: 'POST',
    url: './backend/APIs/country/country_1.php',
    data: datas,
    dataType: 'JSON',
    success: function (response_2) {
        // var country_2 = '<option>請選擇區域</option>';
        console.log(response_2);
        // console.log(response_2);
        for (var j = 0; j < response_2.length; j++) {
            // console.log(response_2);
            parkinglot_taiwan.innerHTML  = response_2[j].country+ 'の停車場';
        }
        


    }


})

//行政區
var area_dropdown = document.getElementById('area_dropdown');
var index_1 = area_dropdown.selectedIndex;
var datas_1 = {
    "dropdown_area": index_1,
}
console.log(datas_1);
$.ajax({
    type: 'POST',
    url: './backend/APIs/country/area.php',
    data: datas_1,
    dataType: 'JSON',
    success: function (response_1) {
        var country_2 = '<option>請選擇區域</option>';
        for (var j = 0; j < response_1.length; j++) {
            country_2 = country_2 + '<option value="' + response_1[j].parkinglot_id + '">' + response_1[j].country_area + '</option>';
            // console.log(country_2);
        }
        area_dropdown.innerHTML = country_2;


    }


})

}
