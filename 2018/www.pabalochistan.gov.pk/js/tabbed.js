var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var xmlHttp;
	function createXMLHttpRequest() {
		if (window.ActiveXObject) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if (window.XMLHttpRequest) {
			xmlHttp = new XMLHttpRequest();
		}
	}
	function getData(dataFile) {
		createXMLHttpRequest();
		xmlHttp.onreadystatechange = handleStateChange;
		xmlHttp.open("GET", dataFile, true);
		xmlHttp.send(null);
	}
	function handleStateChange() {
		if(xmlHttp.readyState == 4) {
			if(xmlHttp.status == 200) {
				document.getElementById("tabContainer").innerHTML=xmlHttp.responseText;
			}
		}
	}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
function changeClassDefault(class_name){
	document.getElementById(class_name).className='onfocusColor'
}
function changeClass(class_name1,class_name2,class_name3,class_name4){
	document.getElementById(class_name1).className='tabLinks'
	document.getElementById(class_name2).className='tabLinks'
	document.getElementById(class_name3).className='tabLinks'
	document.getElementById(class_name4).className='tabLinks'
}

}
