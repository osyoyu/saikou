iken = function() {
  $.ajax({
    url: "/iken",
  success: function(data) {
    $("#ikencount").text(data);
    ihousounds4.pause();
    ihousounds5.pause();
    ihousounds2[n++].play();
    if (n === 30) { n = 0; }
  }
  });
}
emo = function() {
  $.ajax({
    url: "/emo",
  success: function(data) {
    $("#emocount").text(data);
    ihousounds4.pause();
    ihousounds5.pause();
    ihousounds3[n++].play();
    if (n === 30) { n = 0; }
  }
  });
}
itf  = function() {
  $.ajax({
    url: "/itf",
  success: function(data) {
    $("#itfcount").text(data);
    ihousounds4.play();
  }
  });
}
watc = function() {
  $.ajax({
    url: "/watc",
  success: function(data) {
    $("#watccount").text(data);
    ihousounds5.play();
  }
  });
}
update_values = function(data) {
  data = JSON.parse(data);
  console.log(data);
  $("#ihoucount").text(data.ihou);
  $("#ikencount").text(data.iken);
  $("#emocount").text(data.emo);
  $("#itfcount").text(data.itf);
  $("#watccount").text(data.watc);
  return;
}
w = function() {
  $.ajax({
    url: "/values",
    success: function(data) {
      update_values(data);
    }
  });
  setTimeout(function() { w(); }, 1000);
}

ihousounds = new Array(30);
for (var i = 0; i < 30; i++) {
  ihousounds[i] = new Audio("/iho_normal.mp3");
}

ihousounds2 = new Array(30);
for (var i = 0; i < 30; i++) {
  ihousounds2[i] = new Audio("/saiko.mp3");
}

ihousounds3 = new Array(30);
for (var i = 0; i < 30; i++) {
  ihousounds3[i] = new Audio("/emoi.mp3");
}

ihousounds4 = new Audio("/ITF.mp3");
ihousounds5 = new Audio("/we-are-the-champion.mp3");

var n = 0;

w();
