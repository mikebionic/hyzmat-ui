const me_toaster = ({
	title = "",
	message = "",
	color = "primary",
	placementFrom = "bottom",
	placementAlign = "right",
	icon = "fa fa-bell",
}) => {
	var content = {
		message: message,
		title: title,
		icon: icon.length > 0 ? icon : "none",
	};
	// content.url = 'index.html';
	// content.target = '_blank';

	$.notify(content, {
		type: color,
		placement: {
			from: placementFrom,
			align: placementAlign,
		},
		// withProgressbar:1,
		time: 1000,
		delay: 3000,
	});
};

const messages = [
	{
		message: "Güneş - köne güzer | Ulanyjy928 tapyp ulgama ýükledi.",
		color: "success",
	},
	{
		message:
			"Nurly99 | 2024-nji ýylda çykan hindi filmleri gözleýärin, bar bolsa paýlaşyň!",
		color: "primary",
	},
	{
		message: "Soňky 2024 astronomiýa bilen baglanyşykly kitaplar gerek.",
		color: "warning",
	},
	{
		message: "himiki reaksiýalary geçirip boljak programma tapyp beräýiň.",
		color: "warning",
	},
	{
		message:
			"2000-2010 aralykdaky Ewropa bilen baglanyşykly materiallaryň ýygyndysyny ýükläp beräýiň.",
		color: "warning",
	},
	{
		message: "Atabaý Çarygulyýewyň ähli aýdymlarynyň kolleksiýasy kimde bardy.",
		color: "warning",
	},
	{
		message:
			"daşary ýurt dillerini çalt owrenip boljak materiallar kimde ba bolsa aýdyň.",
		color: "warning",
	},
	{
		message: "Pubg soňky obnowleniýasy gerek.",
		color: "warning",
	},
	{
		message: "motiwasiýa bilen baglanyşykly kitaplar, sroçno.",
		color: "warning",
	},
	{
		message:
			"grantist.com saýtyndaky granty bary bolan uniwersitetlaň spisogyny tapyp bolarmyka.",
		color: "warning",
	},
	{
		message: "2024 triller kinolar bar, kime gerek bolsa ýüz tutup bilýa.",
		color: "primary",
	},
	{
		message: "2 günden täze tik tok wideolar taýýyn bolýa.",
		color: "primary",
	},
	{
		message: "Egor kridiň aýdymlarynyň ählisi mende bar.",
		color: "primary",
	},
	{
		message:
			"motiwasiýa bilen baglanyşykly kitaplar alyndy, arkaýýyn habarlaşaýyň.",
		color: "success",
	},
	{
		message: "himiki reaksiýalary geçirip boljak programma 1günden alynýa.",
		color: "success",
	},
	{
		message: "Pubg soňky obnowleniýa alyndy, kime gerek",
		color: "success",
	},
	{
		message: "moý lyubimyý milliarder köne kino gerek, hiç ýerden tapamok.",
		color: "warning",
	},
	{
		message: "çagamyň nirdedigini bilmek üçin gps programma kimde bar?.",
		color: "warning",
	},
	{
		message: "3D MAX okuw sapaklary lisenziýa bilen.",
		color: "success",
	},
	{
		message: "Atabaý Çarygulyýewyň klipleryna çenli ýygyndysy jemlendi.",
		color: "success",
	},
	{
		message: "GTA 5 kodlary bar",
		color: "primary",
	},
	{
		message: "Rossiýadaky 2024 kwota tabşyryp boljak uniwersitetlaň spisogy.",
		color: "primary",
	},
	{
		message: "Hindi kinolaryň toplumy jemlendi, arkaýyn habarlaşaýyň.",
		color: "success",
	},
	{
		message: "matematikany çalt owredip biljek ýideo urok gerek!.",
		color: "warning",
	},
];

const shuffle = (array) => {
	return array.sort(() => Math.random() - 0.5);
};

var t = 2000;
shuffle(messages).map((m, idx) => {
	setTimeout(() => {
		me_toaster(m);
	}, t + idx ** 2 * 1000 + Math.random() * 1000);
	t += Math.random(1000, 2000);
});

setTimeout(() => {}, 800);
$(".nav-link").click(function (e) {
	console.log("cliccccckkk");
	if ($(this).parent().find(".collapse").hasClass("show")) {
		$(this).parent().removeClass("submenu");
	} else {
		$(this).parent().addClass("submenu");
	}
});

// const selectMenu = (name) => {
// 	const tabpane = document.querySelector(".tab-pane");
// 	tabpane.classList.remove("active");
// 	tabpane.classList.remove("show");

// 	console.log(`#${name}`);
// 	tabpane.classList.add("active");
// 	document.querySelector(`#${name}`).classList.add("active");
// 	document.querySelector(`#${name}`).classList.add("show");
// 	setTimeout(() => {}, 500);
// };

// $("body").delegate(".selectArticle", "click", function (e) {
// 	d = article_list[$(this).attr("article_idx")];
// 	// console.log(d);
// 	openModal_dat(d);
// });
