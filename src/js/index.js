$(document).ready(function(){
	// console.log($('.banner_box').width());
	// console.log($(document).find('.yourName').width());
	// console.log($(document).find('.yourName').width());



	// test
	var arr = [1,2,3,4,23,53];





	// console.log(Math.max.apply(null,arr));

	var reg = /^1[3,5,7,8]{1}[0-9]{9}$/;
	var str = "25455556666";
 


	/*function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}*/


	function setCookie(cname,cvalue,exdays){
		var d = new Date();
		d.setTime(d.getTime() + getSec(exdays));
		var expires = "expires=" + d.toGMTString(); 
		document.cookie =cname + "=" + escape(cvalue) + ";" + expires;
	};
	 

	/*function getCookie(name){
		var a = document.cookie.split(';');
		for(var i = 0; i<a.length;i++){
			var name = name.strim();
			if(a[i].indexOf(name)){
				return a[i].split('=')[1];
			}else {
				return "";
			}
		} 
	};*/

	function getCookie(name){
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)){
			return unescape(arr[2]);
		} 
		else {
			return null;
		}
	};


	function delCookie(name){
		var exp = new Date();
		exp.setTime(exp.getTime() - 1000000000);
		var cval = getCookie(name);
		if(cval !== null){
			document.cookie = name + "=" + cval + "expires=" + exp.toGMTString();
		}
	};

	function getSec(str){

		var str1 = str.substring(1,str.length)*1;
		var str2 = str.substr(0,1);
		if(str2 == "s"){
			return str1*1000;
		}else if(str2 == "h"){
			return str1*60*60*1000;
		}else if(str2 == "d"){
			return str1*24*60*60*1000;
		};
	}


	setCookie('name','zhou','s60');
	console.log(getCookie('name'))
	delCookie('name');
	console.log(document.cookie)
	// console.log(getCookie(name))
    // 字符串所有的方法练习
	/*var str = "123491871";
	var str2 = str.replace(12,"woshi")
	console.log(str2);
	console.log(str.indexOf(1));
	console.log(str.lastIndexOf(1))
	var reg = new RegExp("918");
	var str3 = str.search(1)
	console.log(str3)
	console.log(str.split(""))
	console.log(str.slice(5,9))
	console.log(str.substr(5,4))
	console.log(str.substring(5,9))
	console.log(str2.substr(0,4).toUpperCase());
	console.log(str2.substring(0,3))*/

    



  // if(navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition(function(position){
  //     $('#data').html("latitude:" + position.coords.latitude + "<br>longitude:" + position.coords.longitude);
  //   });
  // };





	 
});