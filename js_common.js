//**************************************************//
//* MabiSkillSkin Common JavaScript                *//
//*  Update: 2015/05/29 03:49                      *//
//**************************************************//

//**************************************************************************************************
// 著作権、バージョン情報（変更、削除を禁止します）

var MabiSkillVer	= "2.31.04";
var MabiSkillDate	= "2015/05/29";
var MabiSkillUrl	= "http://blog.wolfs.jp/";

var files_version_a	= new Array();
var files_version_b	= new Array();
var files_version_c	= new Array();


files_version_a["js_common"]		= 20150529.000;

files_version_b["html_main"]		= 20150220.000;
files_version_b["html_main_old"]	= 20150210.000;
files_version_b["html_reg"]		    = 20150210.000;
files_version_b["html_edit"]		    = 20150210.000;
files_version_b["html_skill"]		    = 20150210.001;
files_version_b["html_pet"]		    = 20150210.000;
files_version_b["js_common"]		= 20150529.000;
files_version_b["js_config"]		    = 20150210.000;
files_version_b["js_database"]		= 20150529.000;
files_version_b["js_jquery"]		    = 20100806.003;
files_version_b["js_scroll"]	    	= 20100910.004;

files_version_c["html_main"]		= "temp_main.html";
files_version_c["html_main_old"]	= "temp_main_old.html";
files_version_c["html_reg"]		= "temp_reg.html";
files_version_c["html_edit"]		= "temp_edit.html";
files_version_c["html_skill"]		= "skill_input.html";
files_version_c["html_pet"]		= "pet_input.html";
files_version_c["js_common"]		= "js_common.js";
files_version_c["js_config"]		= "js_config.js";
files_version_c["js_database"]		= "js_database.js";
files_version_c["js_jquery"]		= "js_jquery.js";
files_version_c["js_scroll"]		= "js_scroll.js";

//****************************************************************************************************//

var LoadFlg			= 0;
var CompatibilityFlg		= 1;
var UnixDate			= parseInt((new Date/1000));
var OldCharaViewColor		= new Array("#95cae8","#ffa7c2");
var ListPushFlag		= new Array(false,false);
var NowMousePos			= new Array(0,0);
var UserCharaData		= new Array();
var UserUA			= navigator.userAgent;
var UserBrowser			= new Array();
var NowUserID			= 0;
var IEorGK			= (document.all)?1:0;
var DebugMode			= 0;
var KanaConvertFlg		= 1;
var SkillListMode		= 0;
var offsetX			= 0;
var offsetY			= 0;
var NowPegeID;

// Left intact out of respect for original authors
var MabiSkillThanks		= "Special Thanks*o(＊^▽^＊)oあはー*恵雫*アレックス*L12*サブのサブのサブ*光風霽月ギルド*ワタナベ、タナカ(笑)*Axe*えん*CJ？ごろう*万象*ドット*エーベル";

addElement({preset:"link/css", href:RGTSkinDir+"/css_common.css?v="+MabiSkillVer});
addElement({preset:"script", src:RGTSkinDir+"/js_config.js?v="+MabiSkillVer});

wait("config_loaded", function() {
	// 互換用
	if(CompatibilityFlg){
		if(typeof jsPageScroll == "undefined"){
			jsPageScroll = 0;
			chrome_wheel_speed = 0.834;
			ie_wheel_speed = 0.625;
			ff_wheel_speed = 13;
		}
		if(typeof CharaViewTransparent == "undefined") CharaViewTransparent = 0;
		if(typeof VersionCheckFlg == "undefined") VersionCheckFlg = 0;
		if(typeof AchievementMode == "undefined") AchievementMode = 0;
	}

	addElement({preset:"script", charset:"utf-8", src:RGTSkinDir+"/js_database.js?v="+MabiSkillVer});
	if(NowPegeID=="reg" || NowPegeID=="edit"){
		if(jsPageScroll){
			wait("jquery_loaded", function() {
				addElement({preset:"script", src:RGTSkinDir+"/js_scroll.js?v="+MabiSkillVer});
			});
		}
	}
});

var input_sprite			= new Array();
input_sprite["input-base"]		= new Array("490", "743", "399", "512");
input_sprite["base-0"]			= new Array("910", "5", "540", "330");
input_sprite["base-1"]			= new Array("910", "335", "540", "330");
input_sprite["base-name-0"]		= new Array("783", "550", "122", "15");
input_sprite["base-name-1"]		= new Array("783", "570", "122", "15");
input_sprite["base-old-0"]		= new Array("910", "670", "500", "290");
input_sprite["base-old-1"]		= new Array("910", "965", "500", "290");
input_sprite["base-old-top-0"]		= new Array("1415", "685", "10", "22");
input_sprite["base-old-top-1"]		= new Array("1427", "685", "10", "22");
input_sprite["base-old-bot-0"]		= new Array("1415", "714", "10", "20");
input_sprite["base-old-bot-1"]		= new Array("1427", "714", "10", "20");
input_sprite["base-old-dot-0"]		= new Array("1415", "670", "10", "10");
input_sprite["base-old-dot-1"]		= new Array("1427", "670", "10", "10");
input_sprite["rankico-1"]		= new Array("249", "717", "7", "9");
input_sprite["rankico-2"]		= new Array("257", "717", "7", "9");
input_sprite["rankico-3"]		= new Array("265", "717", "7", "9");
input_sprite["base"]			= new Array("5", "5", "530", "550");
input_sprite["base_wtext"]		= new Array("565", "531", "150", "28");
input_sprite["close-1"]			= new Array("227", "717", "8", "8");
input_sprite["close-2"]			= new Array("236", "717", "8", "8");
input_sprite["btn01-1"]			= new Array("10", "623", "70", "24");
input_sprite["btn01-2"]			= new Array("81", "623", "70", "24");
input_sprite["btn01-3"]			= new Array("152", "623", "70", "24");
input_sprite["btn02-1"]			= new Array("10", "652", "70", "24");
input_sprite["btn02-2"]			= new Array("81", "652", "70", "24");
input_sprite["btn02-3"]			= new Array("152", "652", "70", "24");
input_sprite["btn03-1"]			= new Array("10", "681", "70", "24");
input_sprite["btn03-2"]			= new Array("81", "681", "70", "24");
input_sprite["btn03-3"]			= new Array("152", "681", "70", "24");
input_sprite["btn04-1"]			= new Array("10", "710", "70", "19");
input_sprite["btn04-2"]			= new Array("81", "710", "70", "19");
input_sprite["btn04-3"]			= new Array("152", "710", "70", "19");
input_sprite["btn05-1"]			= new Array("227", "734", "70", "24");
input_sprite["btn05-2"]			= new Array("298", "734", "70", "24");
input_sprite["btn05-3"]			= new Array("369", "734", "70", "24");
input_sprite["btn06-1"]			= new Array("227", "763", "70", "24");
input_sprite["btn06-2"]			= new Array("298", "763", "70", "24");
input_sprite["btn06-3"]			= new Array("369", "763", "70", "24");
input_sprite["skill_base"]		= new Array("227", "623", "160", "34");
input_sprite["skillinfo_base"]		= new Array("540", "5", "360", "300");
input_sprite["skilllist_base"]		= new Array("540", "310", "365", "217");
input_sprite["skilllist_tab1"]		= new Array("10", "565", "43", "16");
input_sprite["skilllist_tab2"]		= new Array("54", "565", "43", "16");
input_sprite["skilllist_tab3"]		= new Array("98", "565", "43", "16");
input_sprite["skilllist_tab4"]		= new Array("142", "565", "54", "16");
input_sprite["skilllist_tab5"]		= new Array("197", "565", "58", "16");
input_sprite["skilllist_tab6"]		= new Array("256", "565", "58", "16");
input_sprite["skilllist_tab7"]		= new Array("315", "565", "48", "16");
input_sprite["skilllist_tab8"]		= new Array("364", "565", "48", "16");
input_sprite["skilllist_tab9"]		= new Array("413", "565", "53", "16");
input_sprite["skilllist_tab10"]		= new Array("516", "565", "48", "16");
input_sprite["skilllist_tab11"]		= new Array("467", "565", "48", "16");
input_sprite["skilllist_tabb1"]		= new Array("10", "586", "43", "16");
input_sprite["skilllist_tabb2"]		= new Array("54", "586", "43", "16");
input_sprite["skilllist_tabb3"]		= new Array("98", "586", "43", "16");
input_sprite["skilllist_tabb4"]		= new Array("142", "586", "54", "16");
input_sprite["skilllist_tabb5"]		= new Array("197", "586", "58", "16");
input_sprite["skilllist_tabb6"]		= new Array("256", "586", "58", "16");
input_sprite["skilllist_tabb7"]		= new Array("315", "586", "48", "16");
input_sprite["skilllist_tabb8"]		= new Array("364", "586", "48", "16");
input_sprite["skilllist_tabb9"]		= new Array("413", "586", "53", "16");
input_sprite["skilllist_tabb10"]	= new Array("516", "586", "48", "16");
input_sprite["skilllist_tabb11"]	= new Array("467", "586", "48", "16");
input_sprite["skilllist_btn01-1"]	= new Array("317", "829", "50", "14");
input_sprite["skilllist_btn01-2"]	= new Array("368", "829", "50", "14");
input_sprite["skilllist_btn01-3"]	= new Array("420", "829", "50", "14");
input_sprite["achievementlist_tab1"]	= new Array("422", "612", "43", "16");
input_sprite["achievementlist_tab2"]	= new Array("466", "612", "43", "16");
input_sprite["achievementlist_tab3"]	= new Array("510", "612", "43", "16");
input_sprite["achievementlist_tab4"]	= new Array("554", "612", "54", "16");
input_sprite["achievementlist_tab5"]	= new Array("609", "612", "54", "16");
input_sprite["achievementlist_tab6"]	= new Array("664", "612", "49", "16");
input_sprite["achievementlist_tab7"]	= new Array("714", "612", "43", "16");
input_sprite["achievementlist_tabb1"]	= new Array("422", "633", "43", "16");
input_sprite["achievementlist_tabb2"]	= new Array("466", "633", "43", "16");
input_sprite["achievementlist_tabb3"]	= new Array("510", "633", "43", "16");
input_sprite["achievementlist_tabb4"]	= new Array("554", "633", "54", "16");
input_sprite["achievementlist_tabb5"]	= new Array("609", "633", "54", "16");
input_sprite["achievementlist_tabb6"]	= new Array("664", "633", "49", "16");
input_sprite["achievementlist_tabb7"]	= new Array("714", "633", "43", "16");
input_sprite["achievement_icon"]	= new Array("540", "531", "20", "24");
input_sprite["achievement_btn01-1"]	= new Array("163", "829", "50", "14");
input_sprite["achievement_btn01-2"]	= new Array("214", "829", "50", "14");
input_sprite["achievement_btn01-3"]	= new Array("266", "829", "50", "14");
input_sprite["petinput_base"]		= new Array("10", "848", "429", "446");
input_sprite["petinput_form"]		= new Array("443", "1322", "393", "185");
input_sprite["petinput_list"]		= new Array("227", "662", "190", "50");
input_sprite["petinput_gentei"]		= new Array("544", "662", "16", "50");
input_sprite["petinput_form_title-1"]	= new Array("443", "1299", "75", "21");
input_sprite["petinput_form_title-2"]	= new Array("519", "1299", "75", "21");
input_sprite["petinput_form_title-3"]	= new Array("595", "1299", "75", "21");
input_sprite["petinput_btn01-1"]	= new Array("10", "734", "70", "19");
input_sprite["petinput_btn01-2"]	= new Array("81", "734", "70", "19");
input_sprite["petinput_btn01-3"]	= new Array("152", "734", "70", "19");
input_sprite["petinput_btn02-1"]	= new Array("10", "758", "70", "19");
input_sprite["petinput_btn02-2"]	= new Array("81", "758", "70", "19");
input_sprite["petinput_btn02-3"]	= new Array("152", "758", "70", "19");
input_sprite["petinput_btn03-1"]	= new Array("10", "782", "70", "19");
input_sprite["petinput_btn03-2"]	= new Array("81", "782", "70", "19");
input_sprite["petinput_btn03-3"]	= new Array("152", "782", "70", "19");
input_sprite["petinput_btn04-1"]	= new Array("10", "806", "70", "19");
input_sprite["petinput_btn04-2"]	= new Array("81", "806", "70", "19");
input_sprite["petinput_btn04-3"]	= new Array("152", "806", "70", "19");
input_sprite["petinput_tab0"]		= new Array("0", "0", "117", "16");
input_sprite["petinput_tab1"]		= new Array("422", "654", "117", "16");
input_sprite["petinput_tab2"]		= new Array("422", "675", "117", "16");
input_sprite["petinput_tab3"]		= new Array("422", "696", "117", "16");
input_sprite["petlist_base"]		= new Array("10", "1299", "429", "208");
input_sprite["petlist_btn01-1"]		= new Array("10", "829", "50", "14");
input_sprite["petlist_btn01-2"]		= new Array("61", "829", "50", "14");
input_sprite["petlist_btn01-3"]		= new Array("112", "829", "50", "14");
input_sprite["about_base"]		= new Array("841", "1307", "300", "200");
input_sprite["y"]			= new Array("231", "607", "11", "11");
input_sprite["z"]			= new Array("218", "607", "11", "11");
input_sprite["f"]			= new Array("205", "607", "11", "11");
input_sprite["e"]			= new Array("192", "607", "11", "11");
input_sprite["d"]			= new Array("179", "607", "11", "11");
input_sprite["c"]			= new Array("166", "607", "11", "11");
input_sprite["b"]			= new Array("153", "607", "11", "11");
input_sprite["a"]			= new Array("140", "607", "11", "11");
input_sprite["9"]			= new Array("127", "607", "11", "11");
input_sprite["8"]			= new Array("114", "607", "11", "11");
input_sprite["7"]			= new Array("101", "607", "11", "11");
input_sprite["6"]			= new Array("88", "607", "11", "11");
input_sprite["5"]			= new Array("75", "607", "11", "11");
input_sprite["4"]			= new Array("62", "607", "11", "11");
input_sprite["3"]			= new Array("49", "607", "11", "11");
input_sprite["2"]			= new Array("36", "607", "11", "11");
input_sprite["1"]			= new Array("23", "607", "11", "11");
input_sprite["0"]			= new Array("10", "607", "11", "11");
input_sprite["-1"]			= new Array("244", "607", "23", "13");
input_sprite["-2"]			= new Array("269", "607", "23", "13");
input_sprite["-3"]			= new Array("294", "607", "23", "13");

if(UserUA.indexOf("MSIE") != -1){
	if(UserUA.indexOf("Sleipnir") != -1){
		UserBrowserName = new Array("ie","sl");
	}else{
		UserBrowserName = new Array("ie","ie");
	}
}else if(UserUA.indexOf("Firefox") != -1){
	UserBrowserName = new Array("ff","mz");
}else if(UserUA.indexOf("AppleWebKit") != -1){
	if(UserUA.indexOf("Chrome") != -1){
		UserBrowserName = new Array("gc","wk");
	}else if(UserUA.indexOf("Safari") != -1){
		UserBrowserName = new Array("sf","wk");
	}else{
		UserBrowserName = new Array("wk","wk");
	}
}else if(UserUA.indexOf("Opera") != -1){
	UserBrowserName = new Array("op","op");
}else{
	UserBrowserName = new Array("unknown","unknown");
}

UserBrowser = new Array(UserBrowserName,window.opera?(opera.version().replace(/\d$/,"")-0):(/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(UserUA)||[,0])[1]);

BrowserTemp = UserBrowser[1].split(".");
if(BrowserTemp[1]){
	//UserBrowser[1] = BrowserTemp[0];
}

//****************************************************************************************************//
// Common functions

window.onerror = function(str1,str2,str3){
	var str1,str2,str3;
	str1 = "JavaScript Error\n\nMes: "+str1+"\nFile: "+str2+"\nLine: "+str3;
	if(DebugMode){
		if(confirm(str1+"\n\nJavaScript Would you like to continue running this script?")){
			return true;
		}else{
			return false;
		}
	}else{
		if(ScriptErrorReport) alert(str1); 
		return true;
	}
}

addEvent(window,"load",function(){
	wait("config_loaded", function() {
		//styleChanger({className:".Sprite_AchievementIcon", style:{backgroundImage:"'url(\"./imgs/icon_achievement.png?v="+MabiSkillVer+"\")'"}});
		//styleChanger({className:".Sprite_SkillIcon", style:{backgroundImage:"'url(\"./imgs/icon_skill.png?v="+MabiSkillVer+"\")'"}});
		//styleChanger({className:".Sprite_PetIcon", style:{backgroundImage:"'url(\"./imgs/icon_pet.png?v="+MabiSkillVer+"\")'"}});
		//styleChanger({className:".Sprite_UIInput", style:{backgroundImage:"'url(\"./imgs/ui_input.png?v="+MabiSkillVer+"\")'"}});

		wait("database_loaded", function() {
			LoadFlg = 1;
			WriteCommonDHTML();
			if(VersionCheckFlg) MSSVersionCheck();

			if(NowPegeID=="main" || NowPegeID=="main_old"){
				MabiSkillInit();
				CharacterInit();
			}
			if(NowPegeID=="skill"){
				PageLoaded();
			}
			if(NowPegeID=="pet"){
				PageLoaded();
			}
			if(NowPegeID=="reg"){
				UserPageLoaded();
			}
			if(NowPegeID=="edit"){
				EditPageLoaded();
			}

			//addEvent(document,"keydown",UsrKeyPressEvent);
			if(IEorGK) addEvent(document,"help",function(){return false});
		});
	});
});

function MSSVersionCheck(){
	checkngflg=0;
	checkngfile="";
	for(vc in files_version_a){
		if(NowPegeID=="main") files_version_a["html_main"] = file_version;
		if(NowPegeID=="main_old") files_version_a["html_main_old"] = file_version;
		if(NowPegeID=="skill") files_version_a["html_skill"] = file_version;
		if(NowPegeID=="pet") files_version_a["html_pet"] = file_version;
		if(NowPegeID=="reg") files_version_a["html_reg"] = file_version;
		if(NowPegeID=="edit") files_version_a["html_edit"] = file_version;

		if(files_version_a[vc]<files_version_b[vc]){
			checkngflg++;
			checkngfile+="\n　"+files_version_c[vc];
		}
		if(files_version_a[vc]>files_version_b[vc]){
			checkngflg++;
			checkngfile="\n　"+files_version_c["js_common"];
		}
	}
	if(checkngflg) alert("Did not match the version of the file that is uploaded.\nYou may experience problems with different versions.\n\nPlease upload the file again.\n\nTarget File（"+checkngflg+"）"+checkngfile);
}

function Objects(mode,target,element,str){
	var mode,target,element,str;

	if(mode==1){
		if(IEorGK){
			eval("document.all(\""+target+"\")."+element+"=\""+str+"\";");
		}else{
			eval("document.getElementById(\""+target+"\")."+element+"=\""+str+"\";");
		}
		return false;
	}else if(mode==2){
		str = str.split("*");
		if(IEorGK){
			eval("document.all(\""+target+"\")."+element+"=new Option(\""+str[0]+"\", \""+str[1]+"\");");
		}else{
			eval("document.getElementById(\""+target+"\")."+element+"=new Option(\""+str[0]+"\", \""+str[1]+"\");");
		}
		return false;
	}else if(mode==3){
		newelement	= document.createElement("div");
		newelement.id	= target;
		document.getElementsByTagName("body").item(0).appendChild(newelement);
		if(element&&str){
			Objects(1,target,element,str);
		}
	}else if(mode==4){
		if(IEorGK){
			if(eval("document.all(\""+target+"\");")){
				return true;
			}else{
				return false;
			}
		}else{
			if(eval("document.getElementById(\""+target+"\");")){
				return true;
			}else{
				return false;
			}
		}
	}else{
		if(IEorGK){
			return eval("document.all(\""+target+"\")."+element+";");
		}else{
			tmp = eval("document.getElementById(\""+target+"\")."+element+";");
			if(str){
				return tmp.replace(str,"");
			}else{
				return tmp;
			}
		}
	}
}

function addElement(obj){
	if(obj&&(obj.element||obj.preset)){
		if(obj.preset){
			if(obj.preset=="script"){
				obj.element = "script";
				obj.type = "text/javascript";
				if(!obj.charset) obj.charset = "shift_jis";
			}else if(obj.preset=="link/css"){
				obj.element = "link";
				obj.type = "text/css";
				obj.rel = "stylesheet";
				obj.media = "all";
			}else if(obj.preset=="style"){
				obj.element = "style";
				obj.type = "text/css";
				obj.media = "all";
			}else{
				return false;
			}
		}
		element = document.createElement(obj.element);
		for(o in obj) element[o] = obj[o];
		if(!obj.base) obj.base = "head";
		objHtml = document.getElementsByTagName(obj.base).item(0);
		if(obj.TextNode) objHtml.appendChild(document.createTextNode(obj.TextNode));
		objHtml.appendChild(element);
	}
}

function styleChanger(sobj){
	if(sobj&&sobj.className&&sobj.style){
		stylesheet = new Object();
		stylesheet.styleSheets = document.styleSheets[0];

		if(IEorGK){
			stylesheet.startCount = 0;
			stylesheet.Rules = stylesheet.styleSheets.rules;
			stylesheet.RulesLength = stylesheet.styleSheets.rules.length;
		}else{
			stylesheet.startCount = 1;
			stylesheet.Rules = stylesheet.styleSheets.cssRules;
			stylesheet.RulesLength = stylesheet.styleSheets.cssRules.length;
		}

		for(ss=stylesheet.startCount;ss<stylesheet.RulesLength;ss++){
			if(stylesheet.Rules[ss].selectorText.toLowerCase() == sobj.className.toLowerCase()){
				for(s in sobj.style) eval("stylesheet.Rules["+ss+"].style."+s+"="+sobj.style[s]+";");
			}
		}
	}
}

function addEvent(elm,listener,fn){
	try{
		elm.addEventListener(listener,fn,false);
	}catch(e){
		elm.attachEvent("on"+listener,fn);
	}
}

function wait(a,func){
	var check = 0;
	try{
		eval("check = " + a);
	}catch(e){
	}
	if(check){
		func()
	}else{
		var f = function(){wait(a,func)};
		setTimeout(f,100);
	}
}

function GetWindowOffset(mode){
	if(mode=="x"){
		if(document.documentElement && document.documentElement.scrollLeft){
			return document.documentElement.scrollLeft;
		}else if(document.body && document.body.scrollLeft){
			return document.body.scrollLeft;
		}
	}
	if(mode=="y"){
		if(document.documentElement && document.documentElement.scrollTop){
			return document.documentElement.scrollTop;
		}else if(document.body && document.body.scrollTop){
			return document.body.scrollTop;
		}
	}
}

function GetBrowserSize(){
	if(window.innerWidth){
		bsizew = window.innerWidth;
		bsizeh = window.innerHeight;
	}else if(document.documentElement&&document.documentElement.clientWidth!=0){
		bsizew = document.documentElement.clientWidth;
		bsizeh = document.documentElement.clientHeight;
	}else if(document.body){
		bsizew = document.body.clientWidth;
		bsizeh = document.body.clientHeight;
	}else{
		bsizew = 0;
		bsizeh = 0;
	}
	return new Array(bsizew,bsizeh);
}

function GetKeyCode(e){
	if(IEorGK){
		return event.keyCode;
	}else{
		return (e.keyCode!=0)?e.keyCode:e.charCode;
	}
}

function UsrKeyPressEvent(e){
	UsrKeyStop	= 0;
	UsrKeyCode	= GetKeyCode(e);
	UsrKey		= new Array(UsrKeyCode,String.fromCharCode(UsrKeyCode));

	if(UsrKey[1].search(/[A-Z]/i) != -1){
		UsrKey[1] = UsrKey[1].toLowerCase();
	}

	if(UsrKey[0]=="112" || ((UserBrowser[0][1]=="sl"||UserBrowser[0][0]=="op")&&UsrKey[0]=="110")){
		UsrKeyStop = 1;
		MabiSkill_About(1);
	}

	if(UsrKeyStop){
		if(UserBrowser[0][0]!="ie") window.stop();
		return false;
	}
}

function WriteInnerHTML(str,target){
	var str,target;

	if(IEorGK){
		document.all(target).innerHTML = str;
	}else{
		document.getElementById(target).innerHTML = str;
	}
}

function EscapeStr(str,mode){
	if(mode){
		return encodeURIComponent(str);
	}else{
		return decodeURIComponent(str);
	}
}

function AdvertisementDisabled(){
	NowPageURL = document.location.href;

	if(NowPageURL.indexOf(".infoseek.")!=-1){
		if(Objects(4,"flashad")){
			Objects(1,"flashad","width","1");
			Objects(1,"flashad","height","1");
		}
		if(Objects(4,"isweb-lite-common-header")){
			Objects(1,"isweb-lite-common-header","style.display","none");
		}
		if(Objects(4,"isweb-lite-adbanner")){
			Objects(1,"isweb-lite-adbanner","style.display","none");
		}
	}
}

function SkillInfoCloseButton(mode){
	if(mode==1) Objects(1,"mabiskill_skillinfo_close","style.backgroundPosition","-"+input_sprite['btn04-1'][0]+"px -"+input_sprite['btn04-1'][1]+"px");
	if(mode==2) Objects(1,"mabiskill_skillinfo_close","style.backgroundPosition","-"+input_sprite['btn04-2'][0]+"px -"+input_sprite['btn04-2'][1]+"px");
	if(mode==3) Objects(1,"mabiskill_skillinfo_close","style.backgroundPosition","-"+input_sprite['btn04-3'][0]+"px -"+input_sprite['btn04-3'][1]+"px");
}

function SkillInfo(id,mode){
	var id,mode,SkillIconPosition,skRank,skillinfo;

	if(!SkillInfoWindowFlg||!LoadFlg) return false;

	SkillID = id.split(":");
	// English pls -Aska-
	//SkillInfoData = new Array(mss_skill[SkillID[0]].name.ja, mss_skill[SkillID[0]].name.en, mss_skill[SkillID[0]].text);
	SkillInfoData = new Array(mss_skill[SkillID[0]].name.en, mss_skill[SkillID[0]].name.en, mss_skill[SkillID[0]].text);
	if(mode){
		skRank=SkillID[1];
		if(skRank=="x"){ SkillInfoText1="";SkillInfoText2=""; }
		if(skRank=="z"){ SkillInfoText1="Training";SkillInfoText2="Novice"; }
		if(skRank=="f"){ SkillInfoText1="F";SkillInfoText2="F"; }
		if(skRank=="e"){ SkillInfoText1="E";SkillInfoText2="E"; }
		if(skRank=="d"){ SkillInfoText1="D";SkillInfoText2="D"; }
		if(skRank=="c"){ SkillInfoText1="C";SkillInfoText2="C"; }
		if(skRank=="b"){ SkillInfoText1="B";SkillInfoText2="B"; }
		if(skRank=="a"){ SkillInfoText1="A";SkillInfoText2="A"; }
		if(skRank=="9"){ SkillInfoText1="The Ninth";SkillInfoText2="9"; }
		if(skRank=="8"){ SkillInfoText1="The Eighth";SkillInfoText2="8"; }
		if(skRank=="7"){ SkillInfoText1="The Seventh";SkillInfoText2="7"; }
		if(skRank=="6"){ SkillInfoText1="The Sixth";SkillInfoText2="6"; }
		if(skRank=="5"){ SkillInfoText1="The Fifth";SkillInfoText2="5"; }
		if(skRank=="4"){ SkillInfoText1="The Fourth";SkillInfoText2="4"; }
		if(skRank=="3"){ SkillInfoText1="The Third";SkillInfoText2="3"; }
		if(skRank=="2"){ SkillInfoText1="The Second";SkillInfoText2="2"; }
		if(skRank=="1"){ SkillInfoText1="The First";SkillInfoText2="1"; }
		if(skRank=="0"){ SkillInfoText1="The Master";SkillInfoText2="Master"; }
		if(skRank=="-1"){ SkillInfoText1="The 1st Dan";SkillInfoText2="1st Dan"; }
		if(skRank=="-2"){ SkillInfoText1="The 2nd Dan";SkillInfoText2="2nd Dan"; }
		if(skRank=="-3"){ SkillInfoText1="The 3rd Dan";SkillInfoText2="3rd Dan"; }

		if(skRank=="y"){
			SkillInfoText1 = SkillInfoData[1];
			SkillInfoText2 = SkillInfoData[0];
			SkillInfoText3 = SkillInfoData[2];
		}else{
			//Formatting for NA Server, commenting out JPN Format  -Aska-
			//SkillInfoText1 = SkillInfoText1+" Rank "+SkillInfoData[1];
			SkillInfoText1 = "Rank "+SkillInfoText2+" "+SkillInfoData[1];
			SkillInfoText2 = "Rank "+SkillInfoText2+" "+SkillInfoData[0];
			SkillInfoText3 = SkillInfoData[2];
		}

		if(IEorGK){
			SkillInfoPosX = event.clientX+document.documentElement.scrollLeft-180;
			SkillInfoPosY = event.clientY+document.documentElement.scrollTop-150;
		}else{
			if(UserBrowser[0].indexOf("wk") != -1){
				SkillInfoPosX = NowMousePos[0]+document.documentElement.scrollLeft-180;
				SkillInfoPosY = NowMousePos[1]+document.documentElement.scrollTop-150;
			}else{
				SkillInfoPosX = NowMousePos[0]+document.body.scrollLeft-180;
				SkillInfoPosY = NowMousePos[1]+document.body.scrollTop-150;
			}
		}
		SkillInfoPosition = new Array(SkillInfoPosX,SkillInfoPosY);
	}else{
		SkillInfoText1 = SkillInfoData[1];
		SkillInfoText2 = SkillInfoData[0];
		SkillInfoText3 = SkillInfoData[2];

		SkillInfoPosition = new Array(85,125);
	}

	if(IEorGK){
		Objects(1,"mabiskill_skillinfo","style.posLeft",SkillInfoPosition[0]);
		Objects(1,"mabiskill_skillinfo","style.posTop",SkillInfoPosition[1]);
	}else{
		Objects(1,"mabiskill_skillinfo","style.left",SkillInfoPosition[0]+"px");
		Objects(1,"mabiskill_skillinfo","style.top",SkillInfoPosition[1]+"px");
	}

	SkillIconPosition = mss_skill[SkillID[0]].pos.split(":");
	Objects(1,"mabiskill_skillinfo_icon","style.backgroundPosition","-"+SkillIconPosition[0]+"px -"+SkillIconPosition[1]+"px");
    // Original lines -Aska-
	//WriteInnerHTML(SkillInfoText1,"mabiskill_skillinfo_text1");
	//WriteInnerHTML(SkillInfoText2,"mabiskill_skillinfo_text2");
	
	//Testing text swap  -Aska-
	WriteInnerHTML(SkillInfoText1,"mabiskill_skillinfo_text2");
	//WriteInnerHTML(SkillInfoText2,"mabiskill_skillinfo_text1");
	WriteInnerHTML(SkillInfoText3.replace(/\*/g,"<br\/>"),"mabiskill_skillinfo_text3");

	Objects(1,"mabiskill_skillinfo","style.display","block");
}

function WriteCommonDHTML(){
	Objects(3,"SkillPop","style.display","none");
	Objects(1,"SkillPop","style.position","absolute");
	Objects(1,"SkillPop","style.zIndex","12");
	Objects(1,"SkillPop","style.textAlign","center");

	Objects(3,"mabiskill_commondhtml","style.display","none");
}

function MabiSkill_About(mode){
	if(mode=="1"){
		about_html		= "";
		MabiSkillThanks		= MabiSkillThanks.replace(/\*/g,"<br\/>　");
		MabiSkillAboutVer	= new String(files_version_b["js_database"]).split(".")[1];

		if(MabiSkillAboutVer.length<3) MabiSkillAboutVer = MabiSkillAboutVer+"0";

		about_html += "<div id=\"mabiskill_about_base\" class=\"Sprite_UIInput opacity\"  style=\"display:block;z-index:11;color:#ffffff;font-size:10px;position:absolute;top:0px;left:0px;width:300px;height:200px;background-position:-841px -1307px;\">\n";
		about_html += "	<div id=\"mabiskill_about_close\" class=\"Sprite_UIInput\" style=\"position:absolute;width:70px;height:19px;top:171px;left:221px;cursor:pointer;background-position:-10px -710px;\" onmouseover=\"MabiSkill_About(3)\" onmouseout=\"MabiSkill_About(2)\" onmousedown=\"MabiSkill_About(4)\" onmouseup=\"MabiSkill_About(2)\" onclick=\"MabiSkill_About(5)\"></div>\n";
		about_html += "	<div id=\"mabiskill_about_text1\" style=\"position:absolute;top:40px;left:106px;cursor:default;\">"+MabiSkillVer+" ("+MabiSkillDate+")</div>\n";
		about_html += "	<div id=\"mabiskill_about_text1\" style=\"position:absolute;top:52px;left:106px;cursor:default;\">"+MabiSkillAboutVer+"</div>\n";
		about_html += "	<div id=\"mabiskill_about_text3\" style=\"position:absolute;top:69px;left:106px;cursor:default;\">MabiSkillSkin Development Team</div>\n"; //変更禁止
		about_html += "	<div id=\"mabiskill_about_text4\" style=\"position:absolute;top:81px;left:106px;cursor:default;\">"+MabiSkillUrl+"</div>\n";
		about_html += "	<div id=\"mabiskill_about_text5\" style=\"position:absolute;width:270px;height:60px;top:100px;left:15px;overflow-x:hidden;overflow-y:scroll;cursor:default;\">"+MabiSkillThanks+"</div>\n";
		about_html += "</div>\n";

		BrowserSize		= GetBrowserSize();
		MabiSkillAboutPos	= new Array((BrowserSize[0]-300)/2,(BrowserSize[1]-200)/2);

		WriteInnerHTML(about_html,"mabiskill_commondhtml");
		if(IEorGK){
			Objects(1,"mabiskill_about_base","style.posLeft",document.documentElement.scrollLeft+MabiSkillAboutPos[0]);
			Objects(1,"mabiskill_about_base","style.posTop",document.documentElement.scrollTop+MabiSkillAboutPos[1]);
		}else{
			if(UserBrowser[0].indexOf("wk") != -1){
				AboutPopPosX = document.documentElement.scrollLeft+MabiSkillAboutPos[0];
				AboutPopPosY = document.documentElement.scrollTop+MabiSkillAboutPos[1];
			}else{
				AboutPopPosX = document.documentElement.scrollLeft+MabiSkillAboutPos[0];
				AboutPopPosY = document.documentElement.scrollTop+MabiSkillAboutPos[1];
			}
			Objects(1,"mabiskill_about_base","style.left",AboutPopPosX+"px");
			Objects(1,"mabiskill_about_base","style.top",AboutPopPosY+"px");
		}
		Objects(1,"mabiskill_commondhtml","style.display","block");
	}
	if(mode=="2"){
		//SkillPopUp(0);
		Objects(1,"mabiskill_about_close","style.backgroundPosition","-"+input_sprite['btn04-1'][0]+"px -"+input_sprite['btn04-1'][1]+"px");
	}
	if(mode=="3"){
		//SkillPopUp(3,"The Window is Closed");
		Objects(1,"mabiskill_about_close","style.backgroundPosition","-"+input_sprite['btn04-2'][0]+"px -"+input_sprite['btn04-2'][1]+"px");
	}
	if(mode=="4"){
		Objects(1,"mabiskill_about_close","style.backgroundPosition","-"+input_sprite['btn04-3'][0]+"px -"+input_sprite['btn04-3'][1]+"px");
	}
	if(mode=="5"){
		//SkillPopUp(0);
		Objects(1,"mabiskill_commondhtml","style.display","none");
		WriteInnerHTML("","mabiskill_commondhtml");
	}
}

//****************************************************************************************************//
// Main Page

function SkillPopUp(mode,str,rank){
	var mode,str,rank,SkillName,PopSize,PopHtml;

	if(MabiSkillCheck()){ mode=0; }
	if(!LoadFlg) return false;

	if(mode == 0){
		WriteInnerHTML("","SkillPop");
		Objects(1,"SkillPop","style.display","none");
		if(IEorGK){
			Objects(1,"SkillPop","style.posLeft",0);
			Objects(1,"SkillPop","style.posTop",0);
		}else{
			Objects(1,"SkillPop","style.left","0px");
			Objects(1,"SkillPop","style.top","0px");
		}
	}
	if(mode == 1){
		rank = rank.toUpperCase();
		if((rank!="0")&&(rank!="Z")&&(rank!="Y")&&(rank.search(/\-[0-9]/i))&&(rank!="X")){ rank="Rank "+rank; }//" / Rank "+rank; }
		if(rank=="0"){ rank="Master"; }  //{ rank=" / Master"; }
		if(rank=="Z"){ rank="Novice"; }  //{ rank=" / Novice"; }
		// Original line
		// if(rank.search(/\-[0-9]/i) != -1){ rank=" / "+rank.substring(1,rank.length)+"Dan"; }
		// Edited Line for DAN ranks -ASKA-
		if(rank.search(/\-[0-9]/i) != -1){ rank="Dan "+rank.substring(1,rank.length)+" "; }
		if(rank=="X" || rank=="Y"){ rank=""; }

		// English Skill name on mouseover skillicon hover
		SkillName	= rank+" "+mss_skill[str].name.en;
		PopSize		= Jstrlen(SkillName,0,0);
		PopHtml		= "<div style=\"position:absolute;font-size:12px;padding:2px;width:"+((PopSize*6)+6)+"px;\" class=\"MabiSkill_PopMessage opacity\">"+SkillName+"</div>";

		WriteInnerHTML(PopHtml,"SkillPop");
		if(IEorGK){
			Objects(1,"SkillPop","style.posLeft",event.clientX+document.documentElement.scrollLeft-10);
			Objects(1,"SkillPop","style.posTop",event.clientY+document.documentElement.scrollTop+20);
		}else{
			if(UserBrowser[0].indexOf("wk") != -1){
				SkillPopPosX = NowMousePos[0]+document.documentElement.scrollLeft-10;
				SkillPopPosY = NowMousePos[1]+document.documentElement.scrollTop+20;
			}else{
				SkillPopPosX = NowMousePos[0]+document.body.scrollLeft-10;
				SkillPopPosY = NowMousePos[1]+document.body.scrollTop+20;
			}
			Objects(1,"SkillPop","style.left",SkillPopPosX+"px");
			Objects(1,"SkillPop","style.top",SkillPopPosY+"px");
		}
		Objects(1,"SkillPop","style.display","block");
	}
	if(mode == 2){
		AchievementName	= mss_achievement[str].name+" / "+mss_achievement[str].point+"point";
		PopSize		= Jstrlen(AchievementName,0,0);
		PopHtml		= "<div style=\"position:absolute;font-size:12px;padding:2px;width:"+((PopSize*6)+6)+"px;\" class=\"MabiSkill_PopMessage opacity\">"+AchievementName+"</div>";

		WriteInnerHTML(PopHtml,"SkillPop");
		if(IEorGK){
			Objects(1,"SkillPop","style.posLeft",event.clientX+document.documentElement.scrollLeft-10);
			Objects(1,"SkillPop","style.posTop",event.clientY+document.documentElement.scrollTop+20);
		}else{
			if(UserBrowser[0].indexOf("wk") != -1){
				SkillPopPosX = NowMousePos[0]+document.documentElement.scrollLeft-10;
				SkillPopPosY = NowMousePos[1]+document.documentElement.scrollTop+20;
			}else{
				SkillPopPosX = NowMousePos[0]+document.body.scrollLeft-10;
				SkillPopPosY = NowMousePos[1]+document.body.scrollTop+20;
			}
			Objects(1,"SkillPop","style.left",SkillPopPosX+"px");
			Objects(1,"SkillPop","style.top",SkillPopPosY+"px");
		}
		Objects(1,"SkillPop","style.display","block");
	}
	if(mode == 3){
		PopSize	= Jstrlen(str,0,0);
		str = str.replace(/\*/g,"<br\/>");
		PopHtml	= "<div style=\"position:absolute;z-index:3;font-size:12px;padding:2px;width:"+((PopSize*6)+6)+"px;\" class=\"MabiSkill_PopMessage opacity\">"+str+"</div>";

		WriteInnerHTML(PopHtml,"SkillPop");
		if(IEorGK){
			Objects(1,"SkillPop","style.posLeft",event.clientX+document.documentElement.scrollLeft-10);
			Objects(1,"SkillPop","style.posTop",event.clientY+document.documentElement.scrollTop+20);
		}else{
			if(UserBrowser[0].indexOf("wk") != -1){
				SkillPopPosX = NowMousePos[0]+document.documentElement.scrollLeft-10;
				SkillPopPosY = NowMousePos[1]+document.documentElement.scrollTop+20;
			}else{
				SkillPopPosX = NowMousePos[0]+document.body.scrollLeft-10;
				SkillPopPosY = NowMousePos[1]+document.body.scrollTop+20;
			}
			Objects(1,"SkillPop","style.left",SkillPopPosX+"px");
			Objects(1,"SkillPop","style.top",SkillPopPosY+"px");
		}
		Objects(1,"SkillPop","style.display","block");
	}
}

function SkillListTabChange(ch){
	var ch,TabPosition,SkillListView,SkillListTabIndex;

	SkillListTabIndex = new Array(0,11,10,9,8,7,6,5,4,3,2,1);

	if(SkillListMode){
		if(ch>7) return false;
		TabSpriteName = "achievementlist";
	}else{
		TabSpriteName = "skilllist";
	}

	if(ch=="01"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab1"],input_sprite[TabSpriteName+"_tabb1"]);
		SkillListView	= new Array(0,1,0,0,0,0,0,0,0,0,0,0);
	}
	if(ch=="02"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab2"],input_sprite[TabSpriteName+"_tabb2"]);
		SkillListView	= new Array(0,0,1,0,0,0,0,0,0,0,0,0);
	}
	if(ch=="03"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab3"],input_sprite[TabSpriteName+"_tabb3"]);
		SkillListView	= new Array(0,0,0,1,0,0,0,0,0,0,0,0);
	}
	if(ch=="04"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab4"],input_sprite[TabSpriteName+"_tabb4"]);
		SkillListView	= new Array(0,0,0,0,1,0,0,0,0,0,0,0);
	}
	if(ch=="05"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab5"],input_sprite[TabSpriteName+"_tabb5"]);
		SkillListView	= new Array(0,0,0,0,0,1,0,0,0,0,0,0);
	}
	if(ch=="06"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab6"],input_sprite[TabSpriteName+"_tabb6"]);
		SkillListView	= new Array(0,0,0,0,0,0,1,0,0,0,0,0);
	}
	if(ch=="07"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab7"],input_sprite[TabSpriteName+"_tabb7"]);
		SkillListView	= new Array(0,0,0,0,0,0,0,1,0,0,0,0);
	}
	if(ch=="08"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab8"],input_sprite[TabSpriteName+"_tabb8"]);
		SkillListView	= new Array(0,0,0,0,0,0,0,0,1,0,0,0);
	}
	if(ch=="09"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab9"],input_sprite[TabSpriteName+"_tabb9"]);
		SkillListView	= new Array(0,0,0,0,0,0,0,0,0,1,0,0);
	}
	if(ch=="10"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab10"],input_sprite[TabSpriteName+"_tabb10"]);
		SkillListView	= new Array(0,0,0,0,0,0,0,0,0,0,1,0);
	}
	if(ch=="11"){
		TabPosition	= new Array(input_sprite[TabSpriteName+"_tab11"],input_sprite[TabSpriteName+"_tabb11"]);
		SkillListView	= new Array(0,0,0,0,0,0,0,0,0,0,0,1);
	}
	for(i=0;i<SkillListView.length;i++){
		if(i<=9){
			ls = "0"+i;
		}else{
			ls = i;
		}
		if(SkillListView[i]==1){
			SkillListDisplayMode = "block";
			Objects(1,"mabiskill_view_tab"+ch,"style.zIndex",11);
			Objects(1,"mabiskill_view_tab"+ch,"style.backgroundPosition","-"+TabPosition[0][0]+"px -"+TabPosition[0][1]+"px");
		}else{
			SkillListDisplayMode = "none";
			if(Objects(4,"mabiskill_view_tab"+ls)){
				Objects(1,"mabiskill_view_tab"+ls,"style.zIndex",SkillListTabIndex[i]);
				Objects(1,"mabiskill_view_tab"+ls,"style.backgroundPosition","-"+input_sprite[TabSpriteName+"_tabb"+i][0]+"px -"+input_sprite[TabSpriteName+"_tabb"+i][1]+"px");
			}
		}
		Objects(1,"mabiskill_view_skilllist"+ls,"style.display",SkillListDisplayMode);
	}
}

function GenerateSkillListIconTable(skset,skx,sky){
	skid = skset.split(":");
	// Experiment ASKA!
	  SkillNameView = new Array(mss_skill[skid[0]].name.en,mss_skill[skid[0]].name.en);
	//SkillNameView = new Array(mss_skill[skid[0]].name.en,mss_skill[skid[0]].name.ja);

	if(Jstrlen(SkillNameView[0])>=23) SkillNameView[0] = SkillNameView[0].substring(0,20)+"...";

	if(IEorGK){
		// Original Sizes -Aska-
		//SkillNameFontSize = new Array("10px","10px");
		//SkillNamePosition = new Array("top:3px;left:42px;","top:17px;left:42px;");
		
		SkillNameFontSize = new Array("10px","12px");
		SkillNamePosition = new Array("top:3px;left:42px;","top:13px;left:42px;");

		if(Jstrlen(SkillNameView[1])>=22) SkillNameView[1] = ConvertKana(SkillNameView[1],1);
	}else{
		// Original Font Size of Skill Text Labels -Aska-
		// SkillNameFontSize = new Array("10px","11px");
		SkillNameFontSize = new Array("10px","12px");
		// Original Positioning of Skill Text labels -Aska -
		// SkillNamePosition = new Array("top:3px;left:42px;","top:18px;left:42px;");
		SkillNamePosition = new Array("top:3px;left:42px;","top:13px;left:42px;");

		if(Jstrlen(SkillNameView[1])>=20) SkillNameView[1] = ConvertKana(SkillNameView[1],1);
	}

	SkillIconPosition = mss_skill[skid[0]].pos.split(":");
	sklist ="<div id=\"mabiskill_view_skilllen_"+skid[0]+"\" class=\"Sprite_UIInput font2\" onmouseover=\"SkillPopUp(1,'"+skid[0]+"','"+skid[1]+"');\" onmouseout=\"SkillPopUp(0);\" onclick=\"SkillInfo('"+skset+"',1);SkillPopUp(0);\" style=\"cursor:pointer;position:absolute;top:"+skx+"px;left:"+sky+"px;width:160px;height:34px;background-position:-227px -623px;\">\n";
	sklist+="<div id=\"mabiskill_view_listicon_"+skid[0]+"\" class=\"Sprite_SkillIcon\" style=\"position:absolute;top:2px;left:2px;width:30px;height:30px;background-position:-"+SkillIconPosition[0]+"px -"+SkillIconPosition[1]+"px;\"></div>\n";
	sklist+="<div id=\"mabiskill_view_listricon_"+skid[0]+"\" class=\"Sprite_UIInput opacity85\" style=\"position:absolute;left:2px;top:2px;width:"+input_sprite[skid[1]][2]+"px;height:"+input_sprite[skid[1]][3]+"px;background-position:-"+input_sprite[skid[1]][0]+"px -"+input_sprite[skid[1]][1]+"px;\"></div>\n";
	// Removed Redundant small text -Aska-
	//sklist+="<div id=\"mabiskill_view_listmes1_"+skid[0]+"\" style=\"cursor:pointer;position:absolute;"+SkillNamePosition[0]+"font-size:"+SkillNameFontSize[0]+";\">"+SkillNameView[0]+"</div>\n";
	  sklist+="<div id=\"mabiskill_view_listmes2_"+skid[0]+"\" style=\"cursor:pointer;position:absolute;"+SkillNamePosition[1]+"font-size:"+SkillNameFontSize[1]+";\">"+SkillNameView[1]+"</div>\n</div>\n";
	return sklist;
}

function GenerateSkillList(id,mode){
	var sklist01=sklist02=sklist03=sklist04=sklist05=sklist06=sklist07=sklist08=sklist09=sklist10=sklist11=sklist12="";
	var sktab="";
	var sktab_info=new Array(0,0,0);

	if(!LoadFlg) return false;

	NowUserID	= id;
	CharaData	= GetCharacter(NowUserID);
	inname		= CharaData[5];
	inskills	= CharaData[1];
	inachievements	= CharaData[3];
	inpets		= CharaData[4];

	if(!mode){
		UserListClose(0);
		SkillListMode = 0;
	}

	if(MabiSkillCheck()||inskills=="!allskill!"){ inskills=""; }
	if(!mode){
		if(!inskills && !inpets && !inachievements){
			alert(inname+"'s data has not been registered. ");
			return false;
		}
		if(!inskills && inpets && !inachievements){
			alert("Only "+inname+"'s pets are registered.\nPet List Generated. ");
			GenerateUserPetList();
			return false;
		}
		if(!inskills && !inpets && inachievements){
			alert("Only "+inname+"'s Journal is registered.\nJournal List Generated. ");
			SkillListMode = 1;
			GenerateAchievementList(NowUserID,1);
			return false;
		}
		if(!inskills && (inachievements && inpets)){
			alert("Only"+inname+"'s skills are not registered.\nJournal & Pet List Generated.");
			SkillListMode = 1;
			if(IEorGK){
				Objects(1,"mabiskill_view_skillpet","style.posLeft",306);
				Objects(1,"mabiskill_view_skillpet","style.posTop",17);
			}else{
				Objects(1,"mabiskill_view_skillpet","style.left","306px");
				Objects(1,"mabiskill_view_skillpet","style.top","17px");
			}
			Objects(1,"mabiskill_view_skillpet","style.display","block");
			GenerateAchievementList(NowUserID,2);
			return false;
		}
		if(!inachievements || !AchievementMode){
			if(IEorGK){
				Objects(1,"mabiskill_view_skillpet","style.posLeft",306);
				Objects(1,"mabiskill_view_skillpet","style.posTop",17);
			}else{
				Objects(1,"mabiskill_view_skillpet","style.left","306px");
				Objects(1,"mabiskill_view_skillpet","style.top","17px");
			}
			Objects(1,"mabiskill_view_skillmain","style.display","none");
			Objects(1,"mabiskill_view_skillachievement","style.display","none");
		}else{
			if(IEorGK){
				Objects(1,"mabiskill_view_skillpet","style.posLeft",251);
				Objects(1,"mabiskill_view_skillpet","style.posTop",17);
			}else{
				Objects(1,"mabiskill_view_skillpet","style.left","251px");
				Objects(1,"mabiskill_view_skillpet","style.top","17px");
			}
			Objects(1,"mabiskill_view_skillmain","style.display","none");
			Objects(1,"mabiskill_view_skillachievement","style.display","block");
		}
		if(inskills){
			if(!inpets){
				Objects(1,"mabiskill_view_skillpet","style.display","none");
			}else{
				Objects(1,"mabiskill_view_skillpet","style.display","block");
			}
		}
	}

	var v=new Array(1,162,323);
	var sklx=new Array(0,-34,-34,-34,-34,-34,-34,-34,-34,-34,-34,-34,0);
	var skly=new Array(0,1,1,1,1,1,1,1,1,1,1,1,0);
	var sklc=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);
	var sktb=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);

	skillidflg = 0;
	skills = inskills.split("/");

	for(s in skills){
		SkillSplit = skills[s].split(":");

		if(typeof mss_skill[SkillSplit[0]] == "undefined"){
			skillidflg = 1;
			break;
		}

		if(mss_skill[SkillSplit[0]].cat==1){
			if((sklc[1]%2)==0){
				sklx[1]=sklx[1]+37;
				skly[1]=3;
			}
			if(!sklc[1]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb1"][2];
				sktab+="<div id=\"mabiskill_view_tab01\" onclick=\"SkillListTabChange('01')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb1"][2]+"px;height:"+input_sprite["skilllist_tabb1"][3]+"px;background-position:-"+input_sprite["skilllist_tabb1"][0]+"px -"+input_sprite["skilllist_tabb1"][1]+"px;z-index:11;\"></div>";
				sktb[1]=1;
			}
			sklist01+=GenerateSkillListIconTable(skills[s],sklx[1],skly[1]);
			skly[1]=skly[1]+161;
			sklc[1]++;
		}
		if(mss_skill[SkillSplit[0]].cat==2){
			if((sklc[2]%2)==0){
				sklx[2]=sklx[2]+37;
				skly[2]=3;
			}
			if(!sklc[2]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb2"][2];
				sktab+="<div id=\"mabiskill_view_tab02\" onclick=\"SkillListTabChange('02')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb2"][2]+"px;height:"+input_sprite["skilllist_tabb2"][3]+"px;background-position:-"+input_sprite["skilllist_tabb2"][0]+"px -"+input_sprite["skilllist_tabb2"][1]+"px;z-index:10;\"></div>";
				sktb[2]=1;
			}
			sklist02+=GenerateSkillListIconTable(skills[s],sklx[2],skly[2]);
			skly[2]=skly[2]+161;
			sklc[2]++;
		}
		if(mss_skill[SkillSplit[0]].cat==3){
			if((sklc[3]%2)==0){
				sklx[3]=sklx[3]+37;
				skly[3]=3;
			}
			if(!sklc[3]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb3"][2];
				sktab+="<div id=\"mabiskill_view_tab03\" onclick=\"SkillListTabChange('03')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb3"][2]+"px;height:"+input_sprite["skilllist_tabb3"][3]+"px;background-position:-"+input_sprite["skilllist_tabb3"][0]+"px -"+input_sprite["skilllist_tabb3"][1]+"px;z-index:9;\"></div>";
				sktb[3]=1;
			}
			sklist03+=GenerateSkillListIconTable(skills[s],sklx[3],skly[3]);
			skly[3]=skly[3]+161;
			sklc[3]++;
		}
		if(mss_skill[SkillSplit[0]].cat==4){
			if((sklc[4]%2)==0){
				sklx[4]=sklx[4]+37;
				skly[4]=3;
			}
			if(!sklc[4]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb4"][2];
				sktab+="<div id=\"mabiskill_view_tab04\" onclick=\"SkillListTabChange('04')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb4"][2]+"px;height:"+input_sprite["skilllist_tabb4"][3]+"px;background-position:-"+input_sprite["skilllist_tabb4"][0]+"px -"+input_sprite["skilllist_tabb4"][1]+"px;z-index:8;\"></div>";
				sktb[4]=1;
			}
			sklist04+=GenerateSkillListIconTable(skills[s],sklx[4],skly[4]);
			skly[4]=skly[4]+161;
			sklc[4]++;
		}
		if(mss_skill[SkillSplit[0]].cat==5 && CharaData[7]=="Human"){
			if((sklc[5]%2)==0){
				sklx[5]=sklx[5]+37;
				skly[5]=3;
			}
			if(!sklc[5]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb5"][2];
				sktab+="<div id=\"mabiskill_view_tab05\" onclick=\"SkillListTabChange('05')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb5"][2]+"px;height:"+input_sprite["skilllist_tabb5"][3]+"px;background-position:-"+input_sprite["skilllist_tabb5"][0]+"px -"+input_sprite["skilllist_tabb5"][1]+"px;z-index:7;\"></div>";
				sktb[5]=1;
			}
			sklist05+=GenerateSkillListIconTable(skills[s],sklx[5],skly[5]);
			skly[5]=skly[5]+161;
			sklc[5]++;
		}
		if(mss_skill[SkillSplit[0]].cat==6 && CharaData[7]=="Human" && !sklc[5]){
			if((sklc[6]%2)==0){
				sklx[6]=sklx[6]+37;
				skly[6]=3;
			}
			if(!sklc[6]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb6"][2];
				sktab+="<div id=\"mabiskill_view_tab06\" onclick=\"SkillListTabChange('06')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb6"][2]+"px;height:"+input_sprite["skilllist_tabb6"][3]+"px;background-position:-"+input_sprite["skilllist_tabb6"][0]+"px -"+input_sprite["skilllist_tabb6"][1]+"px;z-index:6;\"></div>";
				sktb[6]=1;
			}
			sklist06+=GenerateSkillListIconTable(skills[s],sklx[6],skly[6]);
			skly[6]=skly[6]+161;
			sklc[6]++;
		}
		if(mss_skill[SkillSplit[0]].cat==7 && CharaData[7]=="Elf"){
			if((sklc[7]%2)==0){
				sklx[7]=sklx[7]+37;
				skly[7]=3;
			}
			if(!sklc[7]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb7"][2];
				sktab+="<div id=\"mabiskill_view_tab07\" onclick=\"SkillListTabChange('07')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb7"][2]+"px;height:"+input_sprite["skilllist_tabb7"][3]+"px;background-position:-"+input_sprite["skilllist_tabb7"][0]+"px -"+input_sprite["skilllist_tabb7"][1]+"px;z-index:5;\"></div>";
				sktb[7]=1;
			}
			sklist07+=GenerateSkillListIconTable(skills[s],sklx[7],skly[7]);
			skly[7]=skly[7]+161;
			sklc[7]++;
		}
		if(mss_skill[SkillSplit[0]].cat==8 && CharaData[7]=="Giant"){
			if((sklc[8]%2)==0){
				sklx[8]=sklx[8]+37;
				skly[8]=3;
			}
			if(!sklc[8]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb8"][2];
				sktab+="<div id=\"mabiskill_view_tab08\" onclick=\"SkillListTabChange('08')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb8"][2]+"px;height:"+input_sprite["skilllist_tabb8"][3]+"px;background-position:-"+input_sprite["skilllist_tabb8"][0]+"px -"+input_sprite["skilllist_tabb8"][1]+"px;z-index:4;\"></div>";
				sktb[8]=1;
			}
			sklist08+=GenerateSkillListIconTable(skills[s],sklx[8],skly[8]);
			skly[8]=skly[8]+161;
			sklc[8]++;
		}
		if(mss_skill[SkillSplit[0]].cat==9){
			if((sklc[9]%2)==0){
				sklx[9]=sklx[9]+37;
				skly[9]=3;
			}
			if(!sklc[9]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb9"][2];
				sktab+="<div id=\"mabiskill_view_tab09\" onclick=\"SkillListTabChange('09')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb9"][2]+"px;height:"+input_sprite["skilllist_tabb9"][3]+"px;background-position:-"+input_sprite["skilllist_tabb9"][0]+"px -"+input_sprite["skilllist_tabb9"][1]+"px;z-index:3;\"></div>";
				sktb[9]=1;
			}
			sklist09+=GenerateSkillListIconTable(skills[s],sklx[9],skly[9]);
			skly[9]=skly[9]+161;
			sklc[9]++;
		}
		if(mss_skill[SkillSplit[0]].cat==10){
			if((sklc[10]%2)==0){
				sklx[10]=sklx[10]+37;
				skly[10]=3;
			}
			if(!sklc[10]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb10"][2];
				sktab+="<div id=\"mabiskill_view_tab10\" onclick=\"SkillListTabChange('10')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb10"][2]+"px;height:"+input_sprite["skilllist_tabb10"][3]+"px;background-position:-"+input_sprite["skilllist_tabb10"][0]+"px -"+input_sprite["skilllist_tabb10"][1]+"px;z-index:2;\"></div>";
				sktb[10]=1;
			}
			sklist10+=GenerateSkillListIconTable(skills[s],sklx[10],skly[10]);
			skly[10]=skly[10]+161;
			sklc[10]++;
		}
		if(mss_skill[SkillSplit[0]].cat==11){
			if((sklc[11]%2)==0){
				sklx[11]=sklx[11]+37;
				skly[11]=3;
			}
			if(!sklc[11]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["skilllist_tabb11"][2];
				sktab+="<div id=\"mabiskill_view_tab11\" onclick=\"SkillListTabChange('11')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["skilllist_tabb11"][2]+"px;height:"+input_sprite["skilllist_tabb11"][3]+"px;background-position:-"+input_sprite["skilllist_tabb11"][0]+"px -"+input_sprite["skilllist_tabb11"][1]+"px;z-index:1;\"></div>";
				sktb[11]=1;
			}
			sklist11+=GenerateSkillListIconTable(skills[s],sklx[11],skly[11]);
			skly[11]=skly[11]+161;
			sklc[11]++;
		}
	}

	if(skillidflg){
		alert(inname+"As for Skills register"+mss_skill["er00001"].text+"\nSkills cannot be displayed.");
	}else{
		WriteInnerHTML(sktab,"mabiskill_view_tab");
		WriteInnerHTML(sklist01,"mabiskill_view_skilllist01");
		WriteInnerHTML(sklist02,"mabiskill_view_skilllist02");
		WriteInnerHTML(sklist03,"mabiskill_view_skilllist03");
		WriteInnerHTML(sklist04,"mabiskill_view_skilllist04");
		WriteInnerHTML(sklist05,"mabiskill_view_skilllist05");
		WriteInnerHTML(sklist06,"mabiskill_view_skilllist06");
		WriteInnerHTML(sklist07,"mabiskill_view_skilllist07");
		WriteInnerHTML(sklist08,"mabiskill_view_skilllist08");
		WriteInnerHTML(sklist09,"mabiskill_view_skilllist09");
		WriteInnerHTML(sklist10,"mabiskill_view_skilllist10");
		WriteInnerHTML(sklist11,"mabiskill_view_skilllist11");
		WriteInnerHTML(inname+" -Registered Skill Summary-","mabiskill_view_skilluser");

		if(!mode){
			if(IEorGK){
				Objects(1,"SkillList","style.posLeft",event.clientX+document.documentElement.scrollLeft-175);
				Objects(1,"SkillList","style.posTop",event.clientY+document.documentElement.scrollTop-20);
			}else{
				if(UserBrowser[0].indexOf("wk") != -1){
					SkillListPosX = NowMousePos[0]+document.documentElement.scrollLeft-175;
					SkillListPosY = NowMousePos[1]+document.documentElement.scrollTop-20;
				}else{
					SkillListPosX = NowMousePos[0]+document.body.scrollLeft-175;
					SkillListPosY = NowMousePos[1]+document.body.scrollTop-20;
				}
				Objects(1,"SkillList","style.left",SkillListPosX+"px");
				Objects(1,"SkillList","style.top",SkillListPosY+"px");
			}
		}

		for(i=0;i<sktb.length;i++){
			if(sktb[i]==1){
				if(i<=9){
					dch = "0"+i;
				}else{
					dch = i;
				}
				SkillListTabChange(dch);
				break;
			}
		}

		Objects(1,"SkillList","style.display","block");
	}
}

function GenerateAchievementListIconTable(skid,skx,sky){
	if(IEorGK){
		AchievementNameFontSize = "10px";
		AchievementNamePosition = "top:5px;left:42px;";
	}else{
		AchievementNameFontSize = "10px";
		AchievementNamePosition = "top:4px;left:42px;";
	}

	AchievementNameView = mss_achievement[skid].name;
	if(Jstrlen(AchievementNameView)>=22) AchievementNameView = ConvertKana(AchievementNameView,1);

	AchievementIconPosition = mss_achievement[skid].pos.split(":");
	sklist ="<div id=\"mabiskill_view_skilllen_"+skid+"\" class=\"Sprite_UIInput font2\" onmouseover=\"SkillPopUp(2,'"+skid+"');\" onmouseout=\"SkillPopUp(0);\" style=\"cursor:pointer;position:absolute;top:"+skx+"px;left:"+sky+"px;width:160px;height:34px;background-position:-227px -623px;\">\n";
	sklist+="<div id=\"mabiskill_view_listicon_"+skid+"\" class=\"Sprite_AchievementIcon\" style=\"position:absolute;top:2px;left:2px;width:30px;height:30px;background-position:-"+AchievementIconPosition[0]+"px -"+AchievementIconPosition[1]+"px;\"></div>\n";
	sklist+="<div id=\"mabiskill_view_listmes1_"+skid+"\" style=\"cursor:pointer;position:absolute;"+AchievementNamePosition+"font-size:"+AchievementNameFontSize+";\">"+AchievementNameView+"</div>\n</div>\n";
	return sklist;
}

function GenerateAchievementList(id,mode){
	var sklist01=sklist02=sklist03=sklist04=sklist05=sklist06=sklist07="";
	var sktab="";
	var sktab_info=new Array(0,0,0);

	if(!LoadFlg) return false;

	NowUserID	= id;
	CharaData	= GetCharacter(NowUserID);
	inname		= CharaData[5];
	inskills	= CharaData[1];
	inachievements	= CharaData[3];
	inpets		= CharaData[4];

	//UserListClose(0);

	var v=new Array(1,162,323);
	var sklx=new Array(0,-34,-34,-34,-34,-34,-34,-34,-34,-34,-34,-34,0);
	var skly=new Array(0,1,1,1,1,1,1,1,1,1,1,1,0);
	var sklc=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);
	var sktb=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);

	achievementidflg = 0;
	achievements = inachievements.split("/");

	for(s in achievements){
		if(typeof mss_achievement[achievements[s]] == "undefined"){
			achievementidflg = 1;
			break;
		}

		if(mss_achievement[achievements[s]].cat==1){
			if((sklc[1]%2)==0){
				sklx[1]=sklx[1]+37;
				skly[1]=3;
			}
			if(!sklc[1]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["achievementlist_tabb1"][2];
				sktab+="<div id=\"mabiskill_view_tab01\" onclick=\"SkillListTabChange('01')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["achievementlist_tabb1"][2]+"px;height:"+input_sprite["achievementlist_tabb1"][3]+"px;background-position:-"+input_sprite["achievementlist_tabb1"][0]+"px -"+input_sprite["achievementlist_tabb1"][1]+"px;z-index:11;\"></div>";
				sktb[1]=1;
			}
			sklist01+=GenerateAchievementListIconTable(achievements[s],sklx[1],skly[1]);
			skly[1]=skly[1]+161;
			sklc[1]++;
		}
		if(mss_achievement[achievements[s]].cat==2){
			if((sklc[2]%2)==0){
				sklx[2]=sklx[2]+37;
				skly[2]=3;
			}
			if(!sklc[2]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["achievementlist_tabb2"][2];
				sktab+="<div id=\"mabiskill_view_tab02\" onclick=\"SkillListTabChange('02')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["achievementlist_tabb2"][2]+"px;height:"+input_sprite["achievementlist_tabb2"][3]+"px;background-position:-"+input_sprite["achievementlist_tabb2"][0]+"px -"+input_sprite["achievementlist_tabb2"][1]+"px;z-index:10;\"></div>";
				sktb[2]=1;
			}
			sklist02+=GenerateAchievementListIconTable(achievements[s],sklx[2],skly[2]);
			skly[2]=skly[2]+161;
			sklc[2]++;
		}
		if(mss_achievement[achievements[s]].cat==3){
			if((sklc[3]%2)==0){
				sklx[3]=sklx[3]+37;
				skly[3]=3;
			}
			if(!sklc[3]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["achievementlist_tabb3"][2];
				sktab+="<div id=\"mabiskill_view_tab03\" onclick=\"SkillListTabChange('03')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["achievementlist_tabb3"][2]+"px;height:"+input_sprite["achievementlist_tabb3"][3]+"px;background-position:-"+input_sprite["achievementlist_tabb3"][0]+"px -"+input_sprite["achievementlist_tabb3"][1]+"px;z-index:9;\"></div>";
				sktb[3]=1;
			}
			sklist03+=GenerateAchievementListIconTable(achievements[s],sklx[3],skly[3]);
			skly[3]=skly[3]+161;
			sklc[3]++;
		}
		if(mss_achievement[achievements[s]].cat==4){
			if((sklc[4]%2)==0){
				sklx[4]=sklx[4]+37;
				skly[4]=3;
			}
			if(!sklc[4]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["achievementlist_tabb4"][2];
				sktab+="<div id=\"mabiskill_view_tab04\" onclick=\"SkillListTabChange('04')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["achievementlist_tabb4"][2]+"px;height:"+input_sprite["achievementlist_tabb4"][3]+"px;background-position:-"+input_sprite["achievementlist_tabb4"][0]+"px -"+input_sprite["achievementlist_tabb4"][1]+"px;z-index:8;\"></div>";
				sktb[4]=1;
			}
			sklist04+=GenerateAchievementListIconTable(achievements[s],sklx[4],skly[4]);
			skly[4]=skly[4]+161;
			sklc[4]++;
		}
		if(mss_achievement[achievements[s]].cat==5){
			if((sklc[5]%2)==0){
				sklx[5]=sklx[5]+37;
				skly[5]=3;
			}
			if(!sklc[5]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["achievementlist_tabb5"][2];
				sktab+="<div id=\"mabiskill_view_tab05\" onclick=\"SkillListTabChange('05')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["achievementlist_tabb5"][2]+"px;height:"+input_sprite["achievementlist_tabb5"][3]+"px;background-position:-"+input_sprite["achievementlist_tabb5"][0]+"px -"+input_sprite["achievementlist_tabb5"][1]+"px;z-index:7;\"></div>";
				sktb[5]=1;
			}
			sklist05+=GenerateAchievementListIconTable(achievements[s],sklx[5],skly[5]);
			skly[5]=skly[5]+161;
			sklc[5]++;
		}
		if(mss_achievement[achievements[s]].cat==6){
			if((sklc[6]%2)==0){
				sklx[6]=sklx[6]+37;
				skly[6]=3;
			}
			if(!sklc[6]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["achievementlist_tabb6"][2];
				sktab+="<div id=\"mabiskill_view_tab06\" onclick=\"SkillListTabChange('06')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["achievementlist_tabb6"][2]+"px;height:"+input_sprite["achievementlist_tabb6"][3]+"px;background-position:-"+input_sprite["achievementlist_tabb6"][0]+"px -"+input_sprite["achievementlist_tabb6"][1]+"px;z-index:6;\"></div>";
				sktb[6]=1;
			}
			sklist06+=GenerateAchievementListIconTable(achievements[s],sklx[6],skly[6]);
			skly[6]=skly[6]+161;
			sklc[6]++;
		}
		if(mss_achievement[achievements[s]].cat==7){
			if((sklc[7]%2)==0){
				sklx[7]=sklx[7]+37;
				skly[7]=3;
			}
			if(!sklc[7]){
				if(sktab) sktab_info[0]=(parseInt(sktab_info[0])+parseInt(sktab_info[1])-6);
				sktab_info[1]=input_sprite["achievementlist_tabb7"][2];
				sktab+="<div id=\"mabiskill_view_tab07\" onclick=\"SkillListTabChange('07')\" class=\"Sprite_UIInput\" style=\"cursor:pointer;position:absolute;left:"+sktab_info[0]+"px;top:0px;width:"+input_sprite["achievementlist_tabb7"][2]+"px;height:"+input_sprite["achievementlist_tabb7"][3]+"px;background-position:-"+input_sprite["achievementlist_tabb7"][0]+"px -"+input_sprite["achievementlist_tabb7"][1]+"px;z-index:5;\"></div>";
				sktb[7]=1;
			}
			sklist07+=GenerateAchievementListIconTable(achievements[s],sklx[7],skly[7]);
			skly[7]=skly[7]+161;
			sklc[7]++;
		}
	}

	if(achievementidflg){
		alert(inname+"As for Journal registration, MabiSkillSkin ID not defined.\nCannot show Journal List.");
	}else{
		WriteInnerHTML(sktab,"mabiskill_view_tab");
		WriteInnerHTML(sklist01,"mabiskill_view_skilllist01");
		WriteInnerHTML(sklist02,"mabiskill_view_skilllist02");
		WriteInnerHTML(sklist03,"mabiskill_view_skilllist03");
		WriteInnerHTML(sklist04,"mabiskill_view_skilllist04");
		WriteInnerHTML(sklist05,"mabiskill_view_skilllist05");
		WriteInnerHTML(sklist06,"mabiskill_view_skilllist06");
		WriteInnerHTML(sklist07,"mabiskill_view_skilllist07");
		WriteInnerHTML(inname+" -List of Registered Journal-","mabiskill_view_skilluser");

		if(mode){
			if(IEorGK){
				Objects(1,"SkillList","style.posLeft",event.clientX+document.documentElement.scrollLeft-175);
				Objects(1,"SkillList","style.posTop",event.clientY+document.documentElement.scrollTop-20);
			}else{
				if(UserBrowser[0].indexOf("wk") != -1){
					SkillListPosX = NowMousePos[0]+document.documentElement.scrollLeft-175;
					SkillListPosY = NowMousePos[1]+document.documentElement.scrollTop-20;
				}else{
					SkillListPosX = NowMousePos[0]+document.body.scrollLeft-175;
					SkillListPosY = NowMousePos[1]+document.body.scrollTop-20;
				}
				Objects(1,"SkillList","style.left",SkillListPosX+"px");
				Objects(1,"SkillList","style.top",SkillListPosY+"px");
			}
			if(mode!=2) Objects(1,"mabiskill_view_skillpet","style.display","none");
			Objects(1,"mabiskill_view_skillmain","style.display","none");
			Objects(1,"mabiskill_view_skillachievement","style.display","none");
		}

		for(i=0;i<sktb.length;i++){
			if(sktb[i]==1){
				if(i<=9){
					dch = "0"+i;
				}else{
					dch = i;
				}
				SkillListTabChange(dch);
				break;
			}
		}

		Objects(1,"SkillList","style.display","block");
	}
}

function GenerateMiniSkillList(id,skills){
	var id,skills,skillhtml,SkillSplit,skill;

	if(MabiSkillCheck()||skills=="!skill!") skills="";

	skillidflg=0;
	skillhtml="";
	if(skills==""){
		IconPosition = mss_skill["sk00000"].pos.split(":");
		// Changed Skillnames to English, while registering Skills
		skillhtml+="<div class=\"Sprite_SkillIcon\" id=\"mabiskill_psksk00000-x\" onmouseover=\"SkillPopUp(3,'"+mss_skill["sk00000"].name.en+"');\" onmouseout=\"SkillPopUp(0);\" style=\"cursor:pointer;position:absolute;left:1px;top:2px;width:30px;height:30px;background-position:-"+IconPosition[0]+"px -"+IconPosition[1]+"px;\"></div>\n";
	}else{
		SkillSplit = skills.split("/");
		for(i in SkillSplit){
			skill = SkillSplit[i].split(":");
			if(typeof mss_skill[skill[0]] == "undefined"){
				skillidflg=1;
				IconPosition = mss_skill["er00001"].pos.split(":");
				skillhtml+="<div class=\"Sprite_SkillIcon\" id=\"mabiskill_psker00001-x\" onmouseover=\"SkillPopUp(3,'"+mss_skill["er00001"].name.en+"');\" onmouseout=\"SkillPopUp(0);\" style=\"cursor:pointer;position:absolute;left:1px;top:2px;width:30px;height:30px;background-position:-"+IconPosition[0]+"px -"+IconPosition[1]+"px;\"></div>\n";
			}
			if(!skillidflg){
				IconPosition = mss_skill[skill[0]].pos.split(":");
				skillhtml+="<span onclick=\"SkillInfo('"+skill[0]+":"+skill[1]+"',1);\" onmouseover=\"SkillPopUp(1,'"+skill[0]+"','"+skill[1]+"')\" onmouseout=\"SkillPopUp(0)\" style=\"cursor:pointer;\">\n";
				skillhtml+="<div class=\"Sprite_SkillIcon\" id=\"mabiskill_psk"+skill[0]+"-"+skill[1]+"\" style=\"position:absolute;left:"+(i*32+1)+"px;top:2px;width:30px;height:30px;background-position:-"+IconPosition[0]+"px -"+IconPosition[1]+"px;\"></div>\n";
				skillhtml+="<div class=\"Sprite_UIInput opacity85\" id=\"mabiskill_psr"+skill[0]+"-"+skill[1]+"\" style=\"position:absolute;cursor:pointer;left:"+(i*32)+"px;top:0px;width:"+input_sprite[skill[1]][2]+"px;height:"+input_sprite[skill[1]][3]+"px;background-position:-"+input_sprite[skill[1]][0]+"px -"+input_sprite[skill[1]][1]+"px;\"></div>\n";
				skillhtml+="</span>\n";
			}
		}
	}

	WriteInnerHTML(skillhtml,"member"+id+"_skill");
}

function GenerateUserPetList(){
	CharaData	= GetCharacter(NowUserID);
	inname		= CharaData[5];
	inpets		= CharaData[4];

	if(!inpets){
		alert("Pets are not registered.");
		return false;
	}

	UserRegedPetData = "";
	T01=inpets.split("/");
	petx=-50;
	pety=3;
	petc=0;
	for(i in T01){
		if(i>0){
			T02=T01[i].split(":");
			if((petc%2)==0){
				petx=petx+53;
				pety=3;
			}
			UserRegedPetData+=GenerateUserPetIconTable(T02[0],T02[1],T02[2],new Array(petx,pety));
			pety=pety+193;
			petc++;
		}
	}
	if(Objects(0,"SkillList","style.display","")=="none"){
		mabipetlist_addposy = -20;
	}else{
		mabipetlist_addposy = +10;
	}

	WriteInnerHTML(UserRegedPetData,"mabipetlist_list");
	WriteInnerHTML(inname+" -List of registered pets-","petlist_user");
	if(IEorGK){
		Objects(1,"mabipetlist_base","style.posLeft",event.clientX+document.documentElement.scrollLeft-214);
		Objects(1,"mabipetlist_base","style.posTop",event.clientY+document.documentElement.scrollTop+mabipetlist_addposy);
	}else{
		if(UserBrowser[0].indexOf("wk") != -1){
			mabipetlistPosX = NowMousePos[0]+document.documentElement.scrollLeft-214;
			mabipetlistPosY = NowMousePos[1]+document.documentElement.scrollTop+mabipetlist_addposy;
		}else{
			mabipetlistPosX = NowMousePos[0]+document.body.scrollLeft-214;
			mabipetlistPosY = NowMousePos[1]+document.body.scrollTop+mabipetlist_addposy;
		}
		Objects(1,"mabipetlist_base","style.left",mabipetlistPosX+"px");
		Objects(1,"mabipetlist_base","style.top",mabipetlistPosY+"px");
	}
	Objects(1,"mabipetlist_base","style.display","block");
	return false;
}

function GenerateUserPetIconTable(petno,petid,petname,tbstr){
	if(IEorGK){
		PetTextFontSize = new Array("10px", "10px");
		PetTextPosition = new Array("top:10px;left:86px;", "top:29px;left:86px;");
	}else{
		PetTextFontSize = new Array("10px", "10px");
		PetTextPosition = new Array("top:8px;left:86px;", "top:27px;left:86px;");
	}

	if(petid.length==6) petid = "p"+petid;

	PetIconPosition = mss_pet[petid].pos.split(":");
	petrace = mss_pet[petid].name;
	if(Jstrlen(petrace)>=22) petrace = ConvertKana(petrace,1);

	petlist ="<div id=\"mabipet_pettb_"+petno+"\" class=\"Sprite_UIInput\" style=\"color:#ffffff;position:absolute;top:"+tbstr[0]+"px;left:"+tbstr[1]+"px;width:190px;height:50px;background-position:-227px -662px;\">\n";
	petlist+="<div id=\"mabipet_pettb_icon_"+petno+"\" class=\"Sprite_PetIcon\" style=\"position:absolute;top:2px;left:2px;width:46px;height:46px;background-position:-"+PetIconPosition[0]+"px -"+PetIconPosition[1]+"px;\"></div>\n";
	petlist+="<div id=\"mabipet_pettb_txt1_"+petno+"\" style=\"cursor:default;position:absolute;"+PetTextPosition[0]+"font-size:"+PetTextFontSize[0]+";\">"+EscapeStr(petname,0)+"</div>\n";
	petlist+="<div id=\"mabipet_pettb_txt2_"+petno+"\" style=\"cursor:default;position:absolute;"+PetTextPosition[1]+"font-size:"+PetTextFontSize[1]+"\">"+petrace+"</div>\n";
	petlist+="</div>\n";
	return petlist;
}

function UserListClose(ch){
	if(ch==0){
		Objects(1,"mabiskill_view_skillpet","style.display","none");
		Objects(1,"SkillList","style.display","none");
		Objects(1,"SkillList","style.top","100px");
		Objects(1,"SkillList","style.left","100px");
		WriteInnerHTML("","mabiskill_view_tab");
		UserListClose(1);
	}
	if(ch==1){
		Objects(1,"mabipetlist_base","style.display","none");
		WriteInnerHTML("","mabipetlist_list");
	}
	SkillPopUp(0);
}

function UserListCloseButton(ch,mode){
	if(ch==0){
		CloseButtonID	= "mabiskill_view_skillclose";
		CloseButtonPop	= "Closing the Skills List";
	}
	if(ch==1){
		CloseButtonID = "mabipetlist_close";
		CloseButtonPop	= "Closing the Pet List";
	}

	if(mode){
		Objects(1,CloseButtonID,"style.backgroundPosition","-"+input_sprite['close-2'][0]+"px -"+input_sprite['close-2'][1]+"px");
		SkillPopUp(3,CloseButtonPop);
	}else{
		Objects(1,CloseButtonID,"style.backgroundPosition","-"+input_sprite['close-1'][0]+"px -"+input_sprite['close-1'][1]+"px");
		SkillPopUp(0);
	}
}

function SkillListChangeButton(ch,mode){
	if(ch==1){
		ButtonTarget = "mabiskill_view_skillpet";
		ButtonSprite = "petlist_btn01";
		ButtonPopText = "Pet registration List";
	}
	if(ch==2){
		ButtonTarget = "mabiskill_view_skillmain";
		ButtonSprite = "skilllist_btn01";
		ButtonPopText = "Skill List";
	}
	if(ch==3){
		ButtonTarget = "mabiskill_view_skillachievement";
		ButtonSprite = "achievement_btn01";
		ButtonPopText = "Journal List";
	}

	if(mode==1){
		Objects(1,ButtonTarget,"style.backgroundPosition","-"+input_sprite[ButtonSprite+'-1'][0]+"px -"+input_sprite[ButtonSprite+'-1'][1]+"px");
		SkillPopUp(0);
	}
	if(mode==2){
		Objects(1,ButtonTarget,"style.backgroundPosition","-"+input_sprite[ButtonSprite+'-2'][0]+"px -"+input_sprite[ButtonSprite+'-2'][1]+"px");
		SkillPopUp(3,ButtonPopText);
	}
	if(mode==3){
		Objects(1,ButtonTarget,"style.backgroundPosition","-"+input_sprite[ButtonSprite+'-3'][0]+"px -"+input_sprite[ButtonSprite+'-3'][1]+"px");
		SkillPopUp(0);
	}
}

function SkillListModeChange(mode){
	if(mode){
		SkillListMode = 1;
		Objects(1,"mabiskill_view_windowicon","style.display","block");
		Objects(1,"mabiskill_view_skillmain","style.display","block");
		Objects(1,"mabiskill_view_skillachievement","style.display","none");
		GenerateAchievementList(NowUserID,0);
	}else{
		SkillListMode = 0;
		Objects(1,"mabiskill_view_windowicon","style.display","none");
		Objects(1,"mabiskill_view_skillmain","style.display","none");
		Objects(1,"mabiskill_view_skillachievement","style.display","block");
		GenerateSkillList(NowUserID,1);
	}
}

function UserListDown(e){
	if(IEorGK){
		offsetX = event.offsetX+2;
		offsetY = event.offsetY+2;
   	}else{
		if(ListPushFlag[0]){
			PosTargetTableID = "SkillList";
		}else if(ListPushFlag[1]){
			PosTargetTableID = "mabipetlist_base";
		}else{
			PosTargetTableID = "SkillList";
		}
		offsetX = e.pageX-Objects(0,PosTargetTableID,"style.left","px");
		offsetY = e.pageY-Objects(0,PosTargetTableID,"style.top","px");
	}
	return false;
}

function UserListMove(ch){
	if(ch==0) ListPushFlag[0] = true;
	if(ch==1) ListPushFlag[1] = true;
	return false;
}

function UserListMoving(e){
	if(ListPushFlag[0] || ListPushFlag[1]){
		if(ListPushFlag[0]){
			PosTargetTableID = "SkillList";
		}else if(ListPushFlag[1]){
			PosTargetTableID = "mabipetlist_base";
		}
		if(IEorGK){
			Objects(1,PosTargetTableID,"style.posLeft",(event.clientX - offsetX + document.documentElement.scrollLeft));
			Objects(1,PosTargetTableID,"style.posTop",(event.clientY - offsetY + document.documentElement.scrollTop));
		}else{
			window.getSelection().removeAllRanges();
			Objects(1,PosTargetTableID,"style.left",(e.pageX - offsetX)+"px");
			Objects(1,PosTargetTableID,"style.top",(e.pageY - offsetY)+"px");
		}
	}else{
		if(IEorGK){
			NowMousePos[0] = event.x;
			NowMousePos[1] = event.y;
		}else{
			NowMousePos[0] = e.pageX;
			NowMousePos[1] = e.pageY;
		}
	}
	return false;
}

function UserListMouseUp(e){
	ListPushFlag[0] = false;
	ListPushFlag[1] = false;
	return false;
}

function AddCharacter(arr){
	UserCharaDataCount = UserCharaData.length;
	if(UserCharaDataCount) UserCharaDataCount = UserCharaDataCount+1
	else UserCharaDataCount = 0;
	UserCharaData[UserCharaDataCount] = arr;
}

function GetCharacter(id){
	for(g in UserCharaData) if(UserCharaData[g][0]==id) return UserCharaData[g];
	return false;
}

function CharacterInit(){
	for(c in UserCharaData){
		if(UserCharaData[c][6]=="Female") sex = 1;
		else sex = 0;

		if(UserCharaData[c][8]=="GuildMaster"){
			rank = 1;
			rank_name = "Leader";
		}else if(UserCharaData[c][8]=="SubMaster"){
			rank = 2;
			rank_name = "Officer";
		}else{
			rank = 3;
			rank_name = "Member";
		}

		if(UserCharaData[c][9]=="Hide") name_view = 1;
		else name_view = 0;

		Objects(1,"mabiskill_view_rank_uid"+UserCharaData[c][0]+"","title",rank_name);

		if(CharaViewMode){
			Objects(1,"mabiskill_view_base_uid"+UserCharaData[c][0]+"","style.backgroundPosition","-"+input_sprite['base-old-'+sex][0]+"px -"+input_sprite['base-old-'+sex][1]+"px");
			Objects(1,"mabiskill_view_rank_uid"+UserCharaData[c][0]+"","style.backgroundPosition","-"+input_sprite['rankico-'+rank][0]+"px -"+input_sprite['rankico-'+rank][1]+"px");
			Objects(1,"mabiskill_view_position_uid"+UserCharaData[c][0]+"","style.backgroundColor",OldCharaViewColor[sex]);
			Objects(1,"mabiskill_view_read_uid"+UserCharaData[c][0]+"","style.backgroundColor",OldCharaViewColor[sex]);
			Objects(1,"mabiskill_view_frametop_img_uid"+UserCharaData[c][0]+"","style.backgroundPosition","-"+input_sprite['base-old-top-'+sex][0]+"px -"+input_sprite['base-old-top-'+sex][1]+"px");
			Objects(1,"mabiskill_view_framebottom_img_uid"+UserCharaData[c][0]+"","style.backgroundPosition","-"+input_sprite['base-old-bot-'+sex][0]+"px -"+input_sprite['base-old-bot-'+sex][1]+"px");
		}else{
			Objects(1,"mabiskill_view_flame_uid"+UserCharaData[c][0]+"","style.backgroundPosition","-"+input_sprite['base-'+sex][0]+"px -"+input_sprite['base-'+sex][1]+"px");
			Objects(1,"mabiskill_view_rank_uid"+UserCharaData[c][0]+"","style.backgroundPosition","-"+input_sprite['rankico-'+rank][0]+"px -"+input_sprite['rankico-'+rank][1]+"px");
			Objects(1,"mabiskill_view_name_uid"+UserCharaData[c][0]+"","style.backgroundPosition","-"+input_sprite['base-name-'+sex][0]+"px -"+input_sprite['base-name-'+sex][1]+"px");
			if(name_view) Objects(1,"mabiskill_view_name_uid"+UserCharaData[c][0]+"","style.display","none");
			if(CharaViewTransparent) Objects(1,"mabiskill_view_back_uid"+UserCharaData[c][0]+"","style.display","block");
		}
		if(!PetMode) Objects(1,"mabiskill_view_skillpet","style.display","none");

		GenerateMiniSkillList(UserCharaData[c][0],UserCharaData[c][2]);

		Objects(1,"mabiskill_loading_uid"+UserCharaData[c][0]+"","style.display","none");
	}
}

//****************************************************************************************************//
// Resist and Edit Page

function InputFormFocus(str){
	if(Objects(0,str,"value","") == "---") Objects(1,str,"value","");
}

function ChangeRankSelectBox(){
	FormRankBox	= Objects(0,"mabiskill_form_rank","value","");
	FormPosition	= Objects(0,"mabiskill_form_position","value","");

	if(!FormPosition || FormPosition=="GuildMaster" || FormPosition=="SubMaster" || FormPosition=="GuildMember"){
		if(FormRankBox=="GuildMaster") Objects(1,"mabiskill_form_position","value","GuildMaster");
		if(FormRankBox=="SubMaster") Objects(1,"mabiskill_form_position","value","SubMaster");
		if(FormRankBox=="Member") Objects(1,"mabiskill_form_position","value","GuildMember");
	}
}

function OpenSkillWindow(path){
	skillWin = window.open(path,"SkillInputWindow","scrollbars=1,status=1,width=550,height=555");
}
function OpenPetWindow(path){
	petWin = window.open(path,"PetInputWindow","scrollbars=1,status=1,width=449,height=446");
}

function ChangeWindowMode(mode,ch){
	if(mode=="0") WindowButtonID = new Array("skill_window_button1","skill_window_button2");
	if(mode=="1") WindowButtonID = new Array("pet_window_button1","pet_window_button2");

	if(ch){
		Objects(1,WindowButtonID[0],"style.display","none");
		Objects(1,WindowButtonID[1],"style.display","block");
	}else{
		Objects(1,WindowButtonID[0],"style.display","block");
		Objects(1,WindowButtonID[1],"style.display","none");
	}
}

function UserSaveedDataCount(){
	UsrSkillData1		= Objects(0,"allskill","value","");
	UsrSkillData2		= Objects(0,"skill","value","");
	UsrAchievementData	= Objects(0,"achievement","value","");
	UsrPetData		= Objects(0,"pet","value","");

	if(UsrSkillData1==""){
		SaveSkillCount1=0;
	}else{
		SaveSkillCount1=UsrSkillData1.split("/").length;
	}
	if(UsrSkillData2==""){
		SaveSkillCount2=0;
	}else{
		SaveSkillCount2=UsrSkillData2.split("/").length;
	}
	if(UsrAchievementData==""){
		SaveAchievementCount=0;
	}else{
		SaveAchievementCount=UsrAchievementData.split("/").length;
	}
	if(UsrPetData==""){
		SavePetCount=0;
	}else{
		SavePetCount=UsrPetData.split("/").length-1;
	}

	WriteInnerHTML(SaveSkillCount1+"","count_allskill");
	WriteInnerHTML(SaveSkillCount2+"","count_skill");
	WriteInnerHTML(SaveAchievementCount+"","count_achievement");
	WriteInnerHTML(SavePetCount+"","count_pet");
}

function UserPageLoaded(){
	UserSaveedDataCount();

	if(DefaultWindowMode){
		ChangeWindowMode(0,1);
		Objects(1,"skill_window_mode1","checked","true");
	}else{
		ChangeWindowMode(0,0);
		Objects(1,"skill_window_mode0","checked","true");
	}

	if(PetMode){
		if(PetDefaultWindowMode){
			ChangeWindowMode(1,1);
			Objects(1,"pet_window_mode1","checked","true");
		}else{
			ChangeWindowMode(1,0);
			Objects(1,"pet_window_mode0","checked","true");
		}
	}else{
		Objects(1,"MabiSkill_form_pet1","style.display","none");
		Objects(1,"MabiSkill_form_pet2","style.display","none");
	}

	if(CharaViewMode){
		Objects(1,"MabiSkill_form_nameview1","style.display","none");
		Objects(1,"MabiSkill_form_nameview2","style.display","none");
	}

	if(jsPageScroll){
		wait("jquery_loaded", function() {
			wait("mabiskillform_scroll_onload", function() {
				mabiskillform_scroll_onload();
			});
		});
	}
}


function EditPageLoaded(){
	UserPageLoaded();

	MaxLen("position",	18,	"GuildMember");
	MaxLen("nickname",	44,	"---");
	MaxLen("lv",		8,	"---");
	MaxLen("exp_lv",	8,	"---");
	MaxLen("lovetitle",	44,	"---");
	MaxLen("logintime",	44,	"---");
	MaxLen("appear",	44,	"---");
	MaxLen("appeal",	44,	"---");
}

//****************************************************************************************************//
// SkillInput Page

// n/a

//****************************************************************************************************//
// 変更禁止 [Don't delete & edit.]

function MabiSkillCheck(){
	if(!MabiSkillVer && !MabiSkillUrl && MabiSkillUrl=="http://blog.wolfs.jp/") return true;
	else return false;
}
function MabiSkillInit(){
	if(!MabiSkillCheck()){
		cFlg = 0;
		if(Objects(4,"MabiSkill_Copyright")){
			cFlg = 1;
		}/*else{
			divs = document.getElementsByTagName("div");
			for(i=40;i<divs.length-1;i++) if(divs[i].className=="MabiSkill_Copyright"){ cFlg=1;break; }
		}*/

		if(cFlg){
			addEvent(document,"mousedown",UserListDown);
			addEvent(document,"mouseup",UserListMouseUp);
			addEvent(document,"mousemove",UserListMoving);
		  //WriteInnerHTML("MabiSkillSkin Ver "+MabiSkillVer,"MabiSkill_CopyrightLink");
		  	WriteInnerHTML("MabiSkillSkin Ver 2.30.19","MabiSkill_CopyrightLink");
			WriteInnerHTML("MabiSkillSkin CUSTOM Ver."+MabiSkillVer,"updaters");
			
		}else{
			document.write("<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;\">\n");
			document.write("Copyright area not found.\n");
			document.write("</div>\n");
		}
	}
}

//****************************************************************************************************//

function MaxLen(T01,T02,T04){
	var T03;
	T03=Objects(0,"mabiskill_form_"+T01,"value","");
	if((T03 == "")&&(T04!="")){
		Objects(1,"mabiskill_form_"+T01,"value",T04);
	} else {
		Objects(1,"mabiskill_form_"+T01,"value",JStrLeft(T03,T02));
	}
	return false;
}

function MaxBox(T01,T02,T03){
	var T04;
	T04=Objects(0,"mabiskill_form_"+T01,"value","");
	boxStr = JStrBox(T04,T02,T03);
	boxStr = boxStr.replace("\r","\\r");
	boxStr = boxStr.replace("\n","\\n");
	Objects(1,"mabiskill_form_"+T01,"value",boxStr);
	return false;
}

function Jstrlen(str,len,i){
	len = 0;
	str = escape(str);

	if(str.search(/\*/i) != -1){
		strs = str.split("*");
		strLength = 0;
		for(n in strs){
			if(strLength <= strs[n].length){
				strLength = strs[n].length+"."+n;
			}
		}
		str = strs[strLength.split(".")[1]];
	}

	for (i = 0; i < str.length; i++, len++) {
		if (str.charAt(i) == "%") {
		if (str.charAt(++i) == "u") {
			i += 3;
			len++;
			}
		i++;
		}
	}
	return len;
}

function JStrLeft(str,len){
	var i,T01,T02,T03,TStr;
	T01=0;
	TStr="";
	str = escape(str);
	for (i = 0; i < str.length; i++,T01++) {
		T02=str.charAt(i);
		T03="";
		if(T02 == "%"){
			T03=str.charAt(++i);
			if(T03=="u") {
				T03=T03+str.charAt(++i);
				T03=T03+str.charAt(++i);
				T03=T03+str.charAt(++i);
				T01++;
				};
			T03=T03+str.charAt(++i);
			};
		if(T01< len){TStr=TStr+T02+T03;}
		if(T01>=len){break;}
		};
	return unescape(TStr);
}

function JStrBox(str,len,line){
	var i,T01,T02,T03,T04,T05,TStr;
	T01=0;
	T02=0;
	TStr="";
	str = escape(str);
	T03="";
	for (i = 0; i < str.length; i++,T01++) {
		T04=str.charAt(i);
		T05=0;
		if(T04 == "%"){
			T04+=str.charAt(++i);
			if(T04=="%u") {
				T04+=str.charAt(++i);
				T04+=str.charAt(++i);
				T04+=str.charAt(++i);
				T01++;
				T05=1;
				};
			T04+=str.charAt(++i);
			};
		if((T03 == "%0D")&&(T04 == "%0A")){
			T02++;
			T01=-1;
			}else{
				if((T01 >=len)&&(T04!="%0D")){
					T02++;
					T01=T05;
					//T04="%0D%0A"+T04;	//自動改行するときは、この行を有効に
				}}
		if( T02>= line){break;}
		TStr+=T04;
		T03=T04;
		}
	return unescape(TStr);
}

function ConvertKana(str,mode){
	var str,mode;

	if(!KanaConvertFlg){ return str; }

	if(mode){
		return str.toHankakuCase();
	}else{
		return str.toZenkakuCase();
	}

	return str;
}

//****************************************************************************************************//
// kanaxs Library (MabiSkill Custom)

String.prototype.toKatakanaCase = function(){
	var i, c, a = [];
	for(i=this.length-1;0<=i;i--){
		c = this.charCodeAt(i);
		a[i] = (0x3041 <= c && c <= 0x3096) ? c + 0x0060 : c;
	};
	return String.fromCharCode.apply(null, a);
};
String.prototype.toHirakanaCase = function(){
	var i, c, a = [];
	for(i=this.length-1;0<=i;i--){
		c = this.charCodeAt(i);
		a[i] = (0x30A1 <= c && c <= 0x30F6) ? c - 0x0060 : c;
	};
	return String.fromCharCode.apply(null, a);
};
String.prototype.toZenkakuCase = function(){
	var i, f, c, m, a = [];
	m ={
		0xFF6F:0x30C3, 0x0020:0x3000,
		0xFF67:0x30A1, 0xFF68:0x30A3, 0xFF69:0x30A5, 0xFF6A:0x30A7, 0xFF6B:0x30A9,
		0xFF70:0x30FC, 0xFF71:0x30A2, 0xFF72:0x30A4, 0xFF73:0x30A6, 0xFF74:0x30A8,
		0xFF75:0x30AA, 0xFF76:0x30AB, 0xFF77:0x30AD, 0xFF78:0x30AF, 0xFF79:0x30B1,
		0xFF7A:0x30B3, 0xFF7B:0x30B5, 0xFF7C:0x30B7, 0xFF7D:0x30B9, 0xFF7E:0x30BB,
		0xFF7F:0x30BD, 0xFF80:0x30BF, 0xFF81:0x30C1, 0xFF82:0x30C4, 0xFF83:0x30C6,
		0xFF84:0x30C8, 0xFF85:0x30CA, 0xFF86:0x30CB, 0xFF87:0x30CC, 0xFF88:0x30CD,
		0xFF89:0x30CE, 0xFF8A:0x30CF, 0xFF8B:0x30D2, 0xFF8C:0x30D5, 0xFF8D:0x30D8,
		0xFF8E:0x30DB, 0xFF8F:0x30DE, 0xFF90:0x30DF, 0xFF91:0x30E0, 0xFF92:0x30E1,
		0xFF93:0x30E2, 0xFF94:0x30E4, 0xFF95:0x30E6, 0xFF95:0x30E8, 0xFF97:0x30E9,
		0xFF98:0x30EA, 0xFF99:0x30EB, 0xFF9A:0x30EC, 0xFF9B:0x30ED, 0xFF9C:0x30EF,
		0xFF66:0x30F2, 0xFF9D:0x30F3, 0x0030:0x3000, 0xFF9E:0x309B, 0xFF9F:0x309C
	};
	for(i=0,f=this.length;i<f;i++){
		c = this.charCodeAt(i);
		switch(true){
			case (c in m):
				a.push(m[c]);
				break;
			case (0xFF21 <= c && c <= 0xFF5E):
				a.push(c + 0xFEE0);
				break;
			default:
				a.push(c);
				break;
		};
	};
	return String.fromCharCode.apply(null, a);
};
String.prototype.toHankakuCase = function(){
	var i, f, c, m, a = [];
	m ={
		0x30C3:0xFF6F,
		0x30A1:0xFF67, 0x30A3:0xFF68, 0x30A5:0xFF69, 0x30A7:0xFF6A, 0x30A9:0xFF6B,
		0x30FC:0xFF70, 0x30A2:0xFF71, 0x30A4:0xFF72, 0x30A6:0xFF73, 0x30A8:0xFF74,
		0x30AA:0xFF75, 0x30AB:0xFF76, 0x30AD:0xFF77, 0x30AF:0xFF78, 0x30B1:0xFF79,
		0x30B3:0xFF7A, 0x30B5:0xFF7B, 0x30B7:0xFF7C, 0x30B9:0xFF7D, 0x30BB:0xFF7E,
		0x30BD:0xFF7F, 0x30BF:0xFF80, 0x30C1:0xFF81, 0x30C4:0xFF82, 0x30C6:0xFF83,
		0x30C8:0xFF84, 0x30CA:0xFF85, 0x30CB:0xFF86, 0x30CC:0xFF87, 0x30CD:0xFF88,
		0x30CE:0xFF89, 0x30CF:0xFF8A, 0x30D2:0xFF8B, 0x30D5:0xFF8C, 0x30D8:0xFF8D,
		0x30DB:0xFF8E, 0x30DE:0xFF8F, 0x30DF:0xFF90, 0x30E0:0xFF91, 0x30E1:0xFF92,
		0x30E2:0xFF93, 0x30E4:0xFF94, 0x30E6:0xFF95, 0x30E8:0xFF95, 0x30E9:0xFF97,
		0x30EA:0xFF98, 0x30EB:0xFF99, 0x30EC:0xFF9A, 0x30ED:0xFF9B, 0x30EF:0xFF9C,
		0x30F2:0xFF66, 0x30F3:0xFF9D, 0x3000:0x0020
	};
	for(i=0,f=this.length;i<f;i++){
		c = this.charCodeAt(i);
		switch(true){
			case (c in m):
				a.push(m[c]);
				break;
			case (0xFF21 <= c && c <= 0xFF5E):
				a.push(c - 0xFEE0);
				break;
			case (0x30AB <= c && c <= 0x30C9):
				a.push(m[c-1], 0xFF9E);
				break;
			case (0x30CF <= c && c <= 0x30DD):
				a.push(m[c-c%3], [0xFF9E,0xFF9F][c%3-1]);
				break;
			default:
				a.push(c);
				break;
		};
	};
	return String.fromCharCode.apply(null, a);
};
