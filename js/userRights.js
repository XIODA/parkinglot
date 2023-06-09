// 跟使用者要位置
function successGPS(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    center = [lat, lng];
    // 接著寫確認了座標後要執行的事
  };
  function errorGPS() {
    window.alert('無法判斷您的所在位置，無法使用此功能。預設地點將為 台北市動物園');
    // 接著寫使用者「封鎖」位置資訊請求後要執行的事
  }
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successGPS, errorGPS);
  } else {
    window.alert('您的裝置不具備GPS，無法使用此功能');
    // 接著寫使用者裝置不支援位置資訊時要執行的事
  }