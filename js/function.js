// داله عرص الصور
$(document).ready(function(){
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		auto: true,
	});
	
	$('.menu-togglr').on('click',function(){
    $('#mainav').slideToggle('fast');
    $(this).toggleClass('active');
  });

});

function footer(){
    var conec='<pre><p> <i class="far fa-building" style="font-size:20px"></i> '+myData.conect.place+'</p><p><i class="	fas fa-phone" style="font-size:20px"></i> '+myData.conect.phone+'</p><p><i class="fab fa-whatsapp" style="font-size:20px"></i> '+myData.conect.whats+'</p><p><i class="fab fa-telegram-plane" style="font-size:20px"></i> '+myData.conect.telgram+'</p></pre>';
    document.getElementById("conect").innerHTML=conec;
    var rial='<pre><p>أسعار الصرف مقابل الريال اليمني</p>$ دولار امريكي      <b>'+myData.exchange.dollar+'</b> ريال يمني </pre><pre>RS ريال سعودي       <b>'+myData.exchange.SR+'</b> ريال يمني </pre>';
    document.getElementById('exchange').innerHTML=rial;
}
// داله الاقسام
function data(){
    // var dep='';
    // for (var i = 0; i < myData.departement.length; i++)
    // {
    //     var name=myData.departement[i]
    //     dep+='<a href="#">'+name+'</a>';
    //     if(i<myData.departement.length-1)
    //     dep+='<hr>';
    // }
    // document.getElementById('dep').innerHTML =dep;
    var diss = '';
    diss += '<div class="w3-third">';
    diss += '<div class="w3-container">';
    diss += '<img src="' + laptop.device[laptop.device.length-1].img + '"alt="Person" style="width:100%">';
    diss += '<h3 class="name">' + laptop.device[laptop.device.length-1].name + '</h3>';
    diss += '<p class="cred price">السعر : ' + laptop.device[laptop.device.length-1].price + '</p>';
    diss += '<button class="w3-btn-block bgblack">معرفة المزيد + </button>'
    diss += '<button class="w3-btn-block bgred">إضافة إلى السلة + </button></div></div>';

    diss += '<div class="w3-third">';
    diss += '<div class="w3-container">';
    diss += '<img src="' + computer.device[computer.device.length-1].img + '"alt="Person" style="width:100%">';
    diss += '<h3 class="name">' + computer.device[computer.device.length-1].name + '</h3>';
    diss += '<p class="cred price">السعر : ' + computer.device[computer.device.length-1].price + '</p>';
    diss += '<button class="w3-btn-block bgblack">معرفة المزيد + </button>'
    diss += '<button class="w3-btn-block bgred">إضافة إلى السلة + </button></div></div>';
    
    diss += '<div class="w3-third">';
    diss += '<div class="w3-container">';
    diss += '<img src="' + modem.device[modem.device.length-1].img + '"alt="Person" style="width:100%">';
    diss += '<h3 class="name">' + modem.device[modem.device.length-1].name + '</h3>';
    diss += '<p class="cred price">السعر : ' + modem.device[modem.device.length-1].price + '</p>';
    diss += '<button class="w3-btn-block bgblack">معرفة المزيد + </button>'
    diss += '<button class="w3-btn-block bgred">إضافة إلى السلة + </button></div></div>';

    diss += '<div class="w3-third">';
    diss += '<div class="w3-container">';
    diss += '<img src="' + proj.device[proj.device.length-1].img + '"alt="Person" style="width:100%">';
    diss += '<h3 class="name">' + proj.device[proj.device.length-1].name + '</h3>';
    diss += '<p class="cred price">السعر : ' + proj.device[proj.device.length-1].price + '</p>';
    diss += '<button class="w3-btn-block bgblack">معرفة المزيد + </button>'
    diss += '<button class="w3-btn-block bgred">إضافة إلى السلة + </button></div></div>';

    diss += '<div class="w3-third">';
    diss += '<div class="w3-container">';
    diss += '<img src="' + camera.device[camera.device.length-1].img + '"alt="Person" style="width:100%">';
    diss += '<h3 class="name">' + camera.device[camera.device.length-1].name + '</h3>';
    diss += '<p class="cred price">السعر : ' + camera.device[camera.device.length-1].price + '</p>';
    diss += '<button class="w3-btn-block bgblack">معرفة المزيد + </button>'
    diss += '<button class="w3-btn-block bgred">إضافة إلى السلة + </button></div></div>';

    diss += '<div class="w3-third">';
    diss += '<div class="w3-container">';
    diss += '<img src="' + bags.device[bags.device.length-1].img + '"alt="Person" style="width:100%">';
    diss += '<h3 class="name">' + bags.device[bags.device.length-1].name + '</h3>';
    diss += '<p class="cred price">السعر : ' + bags.device[bags.device.length-1].price + '</p>';
    diss += '<button class="w3-btn-block bgblack">معرفة المزيد + </button>'
    diss += '<button class="w3-btn-block bgred">إضافة إلى السلة + </button></div></div>';

    diss += '<div class="w3-third">';
    diss += '<div class="w3-container">';
    diss += '<img src="' + games.device[games.device.length-1].img + '"alt="Person" style="width:100%">';
    diss += '<h3 class="name">' + games.device[games.device.length-1].name + '</h3>';
    diss += '<p class="cred price">السعر : ' + games.device[games.device.length-1].price + '</p>';
    diss += '<button class="w3-btn-block bgblack">معرفة المزيد + </button>'
    diss += '<button class="w3-btn-block bgred">إضافة إلى السلة + </button></div></div>';

    diss += '<div class="w3-third">';
    diss += '<div class="w3-container">';
    diss += '<img src="' + printer.device[printer.device.length-1].img + '"alt="Person" style="width:100%">';
    diss += '<h3 class="name">' + printer.device[printer.device.length-1].name + '</h3>';
    diss += '<p class="cred price">السعر : ' + printer.device[printer.device.length-1].price + '</p>';
    diss += '<button class="w3-btn-block bgblack">معرفة المزيد + </button>'
    diss += '<button class="w3-btn-block bgred">إضافة إلى السلة + </button></div></div>';

    document.getElementById('lab').innerHTML = diss;
}
// دالة عرض الناف عند الضغط على الزر الذي يظهر عندما تكون الشاشة صغيره
function display(){
    document.getElementById("navres").style.display="block";
}

function device(data)
{
    var labtop = '';
        for (var i = 0; i < data.device.length; i++) {
            var name = data.device[i].name;
            var img = data.device[i].img;
            var pric = data.device[i].price;
             labtop += '<div class="w3-third">';
             
             labtop += '<div class="w3-container">';
             
             labtop += '<img src="' + img + '"alt="Person" style="width:200px;">';
             labtop += '<h3 class="name">' + name + '</h3>';
             labtop += '<p class="cred price">السعر : ' + pric + '</p>';
             labtop += '<button class="w3-btn-block bgblack" name="but'+i+'">معرفة المزيد + </button>'
             labtop += '<button class="w3-btn-block bgred" name="but'+i+'">إضافة إلى السلة + </button></div></div>';
        document.getElementById('lap').innerHTML = labtop;
    }    
}
