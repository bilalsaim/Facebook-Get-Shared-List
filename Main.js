var isimler = [];
var linkler = [];

function islem(){
	var repost = document.getElementById("repost_view_dialog");
	var a = repost.getElementsByClassName("fwb")

	for(var i=0;i<a.length;i++)
	{
		c = a[i].getElementsByTagName("a");
		var disim = c[0].innerHTML;
		var dlink = c[0].href;
		//Sayfanızın görünen adını Yazılım Geliştiricileri yazan yerle değiştirmelisiniz
		if( disim != "Yazılım Geliştiricileri")
		{	
			//Birden fazla paylaşanları listeye birden fazla eklememek için facebook linki listeye eklenmişmi diye kontrol ediliyor
			if(diziKontrol(dlink))
			{
				isimler.push(disim);
				linkler.push(dlink);
			}
		}
	}
	
	//İsim yazdırma kısmı +"<br>" kısmı alt satıra geçmesi için
	document.write("İsimler<br>");
	for(var i=0;i<isimler.length;i++)
	{
		var sira = (i+1).toString();
		document.write(sira+"-) "+ isimler[i] +"<br>");
		//console.log(sira+"-) "+ isimler[i] +"<br>");
	}
	//Link yazdırma kısmı
	document.write("<br><br>Linkler<br>");
	for(var i=0;i<isimler.length;i++)
	{
		var sira = (i+1).toString();
		document.write(sira+"-) "+ linkler[i] +"<br>");
		//console.log(sira+"-) "+ linkler[i] +"<br>");
	}
}

function diziKontrol(deger){
	for(var i=0;i<linkler.length;i++)
	{
		if(deger === linkler[i])
		{
			//console.log("true");
			return false;
		}
	}
	return true;
}

var say = 0;
var bekleme = 0;
var enAltaIn= function(){
	var repost = document.getElementById("repost_view_dialog");
	var a = repost.getElementsByClassName("fwb");
	var yeni = a.length;
	console.log(a.lenght);
	try{
		var b = document.getElementById("pagelet_scrolling_pager");
		var c = b.getElementsByTagName("a");
		c[0].click();
	}
	catch(err){
		//console.log(err.message);
	}

	if(yeni == say)
	{
		bekleme += 1;
		//Bekleme süresi 10 saniye 
		if(bekleme == 6)
		{
			clearInterval(yenile);
			islem();
		}
	}
	else
	{
		bekleme = 0;
		say = yeni;
	}

	window.scrollTo(0,repost.scrollHeight);
}

var yenile = setInterval(enAltaIn,2000);