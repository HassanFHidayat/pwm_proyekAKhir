function getElement(id) {
    return document.getElementById(id);
}

//membuat variabel Date
var d = new Date
//mendapatkan tahun sekarang dengan method date
var y = d.getFullYear();
//mendapatkan bulan sekarang dengan method date
var m = d.getMonth();

//mengubah bulan yang berformat (0-11) menjadi nama bulan dalam string
var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
getElement("header").innerHTML = "Jadwal Shalat Bulan " + bulan[m] + " " + y;

//mengambil data dari api dan menampilkannya ke file jadwal.html dalam bentuk tabel
fetch('https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/yogyakarta/' + y + '/' + '0' + (m + 1) + '.json')
    .then(res => res.json())
    .then((res) => {
        for (var i = 0; i < res.length; i++) {
            getElement('in').innerHTML += "<tr><td>" + res[i].tanggal + "</td>" + "<td>" + res[i].imsyak + "</td>" + "<td>" + res[i].shubuh + "</td>" + "<td>" + res[i].dzuhur + "</td>" + "<td>" + res[i].ashr + "</td>" + "<td>" + res[i].magrib + "</td>" + "<td>" + res[i].isya + "</td></tr>";
        }
    });