function GetTime() {
  var now = new Date(); // Anlık saati alıyoruz.
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  var day = now.getDate();
  var month = now.getMonth() + 1; // Javascript ayı array gibi 0'dan başlatıyor.
  var year = now.getFullYear();

  hour < 10
    ? (document.getElementById("hour").innerHTML = "0" + hour)
    : (document.getElementById("hour").innerHTML = hour);

  minute < 10
    ? (document.getElementById("minute").innerHTML = "0" + minute)
    : (document.getElementById("minute").innerHTML = minute);
  second < 10
    ? (document.getElementById("second").innerHTML = "0" + second)
    : (document.getElementById("second").innerHTML = second);

  document.getElementById("date").innerHTML = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(now);
}

setInterval(function () {
  GetTime();
}, 1000);


function updateBackgroundColor(hour) {
    if (hour >= 6 && hour < 12) {
      document.body.style.background = "linear-gradient(to right, #ff9a9e, #fecfef)"; // Sabah
    } else if (hour >= 12 && hour < 18) {
      document.body.style.background = "linear-gradient(to right, #00c6ff, #0072ff)"; // Öğlen
    } else {
      document.body.style.background = "linear-gradient(to right, #2c3e50, #4ca1af)"; // Akşam
    }
  }
  
  setInterval(function() {
    var now = new Date();
    GetTime();
    updateBackgroundColor(now.getHours());
  }, 1000);
  