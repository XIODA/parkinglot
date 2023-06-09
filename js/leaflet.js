var map = L.map('map').setView([24.9988806, 121.5727678], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15, //地圖規模
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([24.9988806, 121.5727678]).addTo(map); //標記符號