function getElement(id) {
    return document.getElementById(id);
}

var d = new Date
var y = d.getFullYear();
var m = d.getMonth();

var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
getElement("header").innerHTML = "Jadwal Shalat Bulan " + bulan[m] + " " + y;

fetch('https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/yogyakarta/' + y + '/' + '0' + (m + 1) + '.json')
    .then(res => res.json())
    .then((res) => {
        for (var i = 0; i < res.length; i++) {
            getElement('in').innerHTML += "<tr><td>" + res[i].tanggal + "</td>" + "<td>" + res[i].imsyak + "</td>" + "<td>" + res[i].shubuh + "</td>" + "<td>" + res[i].dzuhur + "</td>" + "<td>" + res[i].ashr + "</td>" + "<td>" + res[i].magrib + "</td>" + "<td>" + res[i].isya + "</td></tr>";
        }
    });