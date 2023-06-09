var map = L.map('map'); //標記為木柵動物園
map.setView([24.9988806, 121.5727678], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18, //地圖規模
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//2d
function twoD() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18, //地圖規模
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
//3d
function threeD() {
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18, //地圖規模
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
//Stamen.TonerLite
function Sta(){
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}).addTo(map);
}

var marker = L.marker([24.9988806, 121.5727678]).addTo(map); //標記符號

//增加圓形標記
var circle = L.circle([24.9988806, 121.5727678], {
    color: 'black',
    fillColor: 'white',
    fillOpacity: 0.6,
    radius: 300

}).addTo(map);

marker.bindPopup("<b>這裡是木柵</b><br>動物園.").openPopup();
circle.bindPopup("木柵附近商圈");

