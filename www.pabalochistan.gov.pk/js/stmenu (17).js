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

/*=======Ver: 7.3.70330========*/
/*DHTMLMenu, (c) 2007, SourceTec Software Co.,LTD  -  www.sothink.com*/
if(typeof st_js=="undefined")
{
	STM_FILTER=1;
	STM_SCROLL=1;
	STM_SLIP=1;
	STM_RTL=0;
	STM_AHCM=0;
	STM_SMSC=1;
	STM_BIMG=1;
	STM_ILOC=0;
	STM_ILINK=0;
	stHAL=["left","center","right"];
	stVAL=["top","middle","bottom"];
	stREP=["no-repeat","repeat-x","repeat-y","repeat"];
	stBDS=["none","solid","double","dotted","dashed","groove","ridge","outset","inset"];
	stENTS=["onmouseover","onmouseout","onclick","onmousedown","onmouseup","onfocus","onblur","onkeydown","onkeyup"];
	st_ld=[];	
	st_lded=0;
	st_ck=[];
	st_ms=[];
	st_imgs=[];
	st_funs=0;
	st_path=stgfd(location.href);
	st_nav=stnav();
	st_cm=st_cp=st_ci= st_tid=0;

	if(!Array.prototype.push)Array.prototype.push=function(){var l=this.length;for(var i=0;i<arguments.length;i++)this[l++]=arguments[i];};
	if(!Array.prototype.pop)Array.prototype.pop=function(){if(this.length){var o=this[this.length-1];this.length--;return o}};
	st_css=0;
	stCSS=
	{
		tb:"width:auto;height:auto;border-style:none;background-color:transparent;background-image:none;",
		tr:"width:auto;height:auto;border-style:none;background-color:transparent;background-image:none;",
		td:"height:auto;border-style:none;background-color:transparent;background-image:none;",
		dv:"margin:0px;padding:0px;background-color:transparent;background-image:none;",
		a:"border-style:none;margin:0px;padding:0px;background-color:transparent;background-image:none;"
	}
	if(document.getElementsByTagName?document.getElementsByTagName("body").length:document.all.tags("body").length)st_css=1;
	else document.write(stStyle());
	st_js=1;
}
function stm_bm(a){var jsp,sc,jsr;if(document.getElementsByTagName)sc=document.getElementsByTagName("script");	else if(document.all.tags)sc=document.all.tags("script");for(var j=0;j<sc.length;j++){jsr=sc[j].src;if(jsr&&jsr.indexOf("stmenu.js")!=-1){jsp=jsr.substring(0,jsr.indexOf("stmenu.js"));break;}}var ip=a[2]?a[2].charAt(a[2].length-1)!="/"?a[2]+"/":a[2]:"",lp=a[15]?a[15].charAt(a[15].length-1)!="/"?a[15]+"/":a[15]:"",jp=a[23]?a[23].charAt(a[23].length-1)!="/"?a[23]+"/":a[23]:"",n=st_ms.length,m;if(typeof jsp!="undefined")jp=jsp;st_cm=st_ms[n]=m={typ:a[4],	id:n,	nam:a[0],ids:a[0]+n,ps:[],x:a[5],y:a[6],hal:a[7],	wid:a[16],	bnk:stbuf(ip+a[3]),usrE:[],cfrm:0,cfsh:1,	tfrn:"",sfrn:"",cfX:0,cfY:0,cfD:0,sc:[0,0],sp:0,deSV:a[9],deSH:a[10],hdp:a[19],deHd:a[19]?a[11]:3000,hdS:a[12],hdO:a[13],hdI:a[14],		hdT:[],lits:a[17],	lnks:[],	litl:a[20],rtl:a[18],imgP:ip,jsP:jp,lnkP:lp,cks:a[8]};m.cur=[stisF(a[21])?"url("+stgPth(3,a[21])+"),auto":a[21],stisF(a[22])?"url("+stgPth(3,a[22])+"),auto":a[22]];if(m.hdS&&(!st_nav.typ&&st_nav.os!="mac"||st_nav.nam=="konqueror"))m.hdT.push("select");if(m.hdI&&(!st_nav.typ&&st_nav.ver<5.5||st_nav.nam=="opera"||st_nav.nam=="konqueror")) m.hdT.push("iframe");	if(m.hdO)	m.hdT.push("object","embed","applet");if(m.lits&1){var li=[];if(m.lits&128)li[0]=1;if(m.lits&64)if(m.rtl)li[6]=1;else li[3]=1;if(m.lits&256)if(m.rtl)li[3]=1;	else li[6]=1;if(m.lits&8)li[9]=1;if(m.lits&16)li[12]=1;if(m.lits&32)li[18]=1;if(m.lits&2)li[21]=1;if(m.lits&4)li[24]=1,li[27]=1;m.hili=stDtB(li);}}
function stm_bp(l,a){var m=st_cm,p,i=st_cp?st_ci:0,j=m.ps.length,st=!j&&!m.typ,tp=stDtB([a[0]]),pd;switch(a[1]){case 1:pd=4;break;case 2:pd=7;break;case 3:pd=1;break;case 4:pd=13;}st_cp=m.ps[j]=p={is:[],typ:tp,		id:j,ids:m.ids+"p"+j,	dir:pd,wid:0,hei:0,		offX:a[2],offY:a[3],mar:a[4],pad:a[5],lms:m.rtl?a[7]:a[6],rms:m.rtl?a[6]:a[7],	bgC:a[17],bgI:stgPth(0,a[18]),bgR:a[19],bd:a[20],bdW:a[21],bdC:a[22],zid:i?i.parP.zid+i.id+5:1000,isSt:st,isSh:0,isOV:0,parI:i,mid:m.id,frm:0,hal:st?m.hal:0,opc:a[8],	shad:a[14],stre:st_nav.typ?0:a[15],sdC:a[16],	efsp:a[13],sc:[0,0],dec:[stgPth(0,a[23]?a[23]:""),stgPth(0,a[30]?a[30]:""),stgPth(0,a[37]?a[37]:""),stgPth(0,a[44]?a[44]:"")],decH:[a[24]?a[24]:0,a[31]?a[31]:0,a[38]?a[38]:0,a[45]?a[45]:0],decW:[a[25]?a[25]:0,a[32]?a[32]:0,a[39]?a[39]:0,a[46]?a[46]:0],decB:[a[26]?a[26]:0,a[33]?a[33]:0,a[40]?a[40]:0,a[47]?a[47]:0],decBC:[a[27]?a[27]:"",a[34]?a[34]:"",a[41]?a[41]:"",a[48]?a[48]:""],decBI:[stgPth(0,a[28]?a[28]:""),stgPth(0,a[35]?a[35]:""),stgPth(0,a[42]?a[42]:""),stgPth(0,a[49]?a[49]:"")],decBR:[a[29]?a[29]:0,a[36]?a[36]:0,a[43]?a[43]:0,a[50]?a[50]:0],cor:[stgPth(0,a[51]?a[51]:""),stgPth(0,a[52]?a[52]:""),stgPth(0,a[53]?a[53]:""),stgPth(0,a[54]?a[54]:"")],args:a };p.onmouseover="stpov";p.onmouseout="stpou";p.lock=i?((m.cks&1)?1:0):0;p.eff=[stgEff(a[9],a[10],a[13],1,p.isSt),stgEff(a[11],a[12],a[13],2,p.isSt)];if(p.eff[0]||p.eff[1]) m.ieff=1;if(st&&!a[0]) p.wid=m.wid;if(i) i.subP=p;eval(l+"=p");}
function stm_bpx(l,r,a){var p=eval(r);stm_bp(l,(a.length?a.concat(p.args.slice(a.length)):p.args));}
function stm_ai(l,a){var m=st_cm,p=st_cp,v=p.typ&1,j=p.is.length,typ=stDtB([a[0]==6?2:a[0],0,m.rtl,a[0]==6?1:0]),i;if(a[0]==6)i=stItem([typ,p.ids+"sp"+j,"",(v?"100%":a[1]),(v?a[1]:"100%"),"",a[3],"",a[4],a[5],0,"","","","","","",0,0,0,"","",0,0,0,1,1,a[2],"","","","","",0,0,"","","","","","",0,0,0,"","",1,0,0]);else{var lw=v?p.lms:m.rtl?(a[18]+2*a[20]):(a[13]+2*a[15]),rw=v?p.rms:m.rtl?(a[13]+2*a[15]):(a[18]+2*a[20]);i=stItem([typ,p.ids+"i"+j,"",arguments[2]?arguments[2]:"100%",arguments[3]?arguments[3]:"100%",a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],m.rtl?a[16]:a[11],m.rtl?a[17]:a[12],m.rtl?a[18]:a[13],m.rtl?a[19]:a[14],m.rtl?a[20]:a[15],m.rtl?a[11]:a[16],m.rtl?a[12]:a[17],m.rtl?a[13]:a[18],m.rtl?a[14]:a[19],m.rtl?a[15]:a[20],a[21],a[22],a[24]?"transparent":a[23],a[26]?"transparent":a[25],a[27],a[28],a[29],a[30],a[31],a[32],a[33],a[34],a[35],a[36],a[37],a[38],a[39],a[40],p.pad,m.cur[0],m.cur[1],1,lw,rw]);if((!i.icoW||!i.icoH)&&lw&&v) {i.icoW=lw,i.icoH=-1,i.ico=["",""]};if((!i.arrW||!i.arrH)&&rw&&v) {i.arrW=rw,i.arrH=-1,i.arr=["",""]};i.isOv=0;}st_ci=p.is[j]=i;i.mid=m.id;i.pid=p.id;	i.id=j;i.parP=p;	if(a[0]!=6){	i.tid=0;	i.subP=0;i.lock=(m.cks&1)?!(m.cks&2):0;i.onmouseover="stiov";i.onmouseout="stiou";i.onclick="stick";i.ovst=153391689;i.oust=0;stLnks(i);}i.args=a;eval(l+"=i");}
function stm_aix(l,r,a){var i=eval(r),wd=arguments.length>3?arguments[3]:0,ht=arguments.length>4?arguments[4]:0;stm_ai(l,(a.length?a.concat(i.args.slice(a.length)):i.args),wd,ht)}
function stm_ep(){var m=st_cm,p=st_cp;st_ci=p.parI;if(st_ci) st_cp=st_ci.parP;else st_cp=0;	if(!p.is.length){var i=p.parI;if(m.rtl){i.ico=["",""];i.icoW=0;i.icoH=0;i.icoB=0;}else{i.arr=["",""];i.arrW=0;i.arrH=0;i.arrB=0;}	i.subP=0;m.ps.pop();}		}
function stm_sc(n,a){if(!STM_SCROLL)return;	var m=st_cm,e;for(var j=1;j<m.ps.length;j++){var p=m.ps[j];	if(p.typ&2) e=1;if((p.typ&1)==n){	p.scsp=100;p.typ|=2;p.sc[0]=stItem([2,p.ids+"sc0","","100%","100%","",a[10],a[11],a[12],a[13],a[14],"","","","","","",0,0,0,a[2],a[3],0,0,0,1,1,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],"","","","",0,0,0,"hand","",1,0,0]);p.sc[0].typ=p.sc[0].typ|16;p.sc[0].onmouseover="stsov";p.sc[0].onmouseout="stsou";p.sc[0].onmousedown="stsdn";p.sc[0].onmouseup="stsdu";p.sc[0].sid=0;p.sc[0].parP=p;p.sc[0].mid=p.mid;p.sc[0].pid=p.id;p.sc[1]=stItem([2,p.ids+"sc1","","100%","100%","",a[16],a[15],a[17],a[18],a[19],"","","","","","",0,0,0,a[2],a[3],0,0,0,1,1,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],"","","","",0,0,0,"hand","",1,0,0,0]);p.sc[1].typ=p.sc[1].typ|16;p.sc[1].onmouseover="stsov";p.sc[1].onmouseout="stsou";p.sc[1].onmousedown="stsdn";p.sc[1].onmouseup="stsdu";p.sc[1].sid=1;p.sc[1].pid=p.id;p.sc[1].mid=p.mid;p.sc[1].parP=p;p.scD=a[20]?a[21]:0;}}	if(!e)staddE(0,"stsSc",m);if(!(st_funs&64))document.write(stgJs(m.jsP+"stscroll.js",1)),st_funs|=64;}
function stm_cf(a){var m=st_cm;m.cfD=a[0];m.cfX=a[1];m.cfY=a[2];m.cfrm=1;m.tfrn=a[3];m.sfrn=a[4];m.cfsh=a[5];}
function stm_em(){var m=st_cm;st_cp=st_ci=0;if(!m.ps.length){st_ms.pop(),	st_cm=st_ms[st_ms.length-1];return;}for(var j=0;j<st_cm.ps.length;j++){var p=st_cm.ps[j];p.args=null;for(var k=0;k<st_cm.ps[j].is.length;k++)p.is[k].args=null;}stCreate();}
function stcklo(p){var m=st_ms[p.mid];for(var j=0;j<m.ps.length;j++){if(j) m.ps[j].lock=1;if(!(m.cks&2))for(var k=0;k<m.ps[j].is.length;k++)m.ps[j].is[k].lock=1;}m.ckd=0;}
function stItem(a){var i={typ:a[0],				ids:a[1],		nam:a[2],wid:a[3],hei:a[4],txt:a[0]&1?a[5]:stHTML(a[5]),	img:[stgPth(0,a[6]),stgPth(0,a[7])],imgW:a[8],imgH:a[9],imgB:a[10],	lnk:stabsL(stgPth(2,a[11])),tar:a[12]?a[12]:"_self",	stus:a[13],tip:stHTML(a[14],1),ico:[stgPth(0,a[15]),stgPth(0,a[16])],icoW:a[17],icoH:a[18],icoB:a[19],arr:[stgPth(0,a[20]),stgPth(0,a[21])],arrW:a[22],arrH:a[23],arrB:a[24],thal:a[25],tval:a[26],bgC:[a[27],a[28]],bgI:[stgPth(0,a[29]),stgPth(0,a[30])],bgR:[a[31],a[32]],bd:a[33],bdW:a[34],bdC:[a[35],a[36]],colr:[a[37],a[38]],fnt:[a[39],a[40]],dec:[a[41],a[42]],pad:a[43],cur:[a[44],a[45]],hal:a[46],	lw:a[47],rw:a[48],stat:0,disable:true };if(!i.bgI[0]&&i.bgI[1]) i.bgI[0]=st_cm.bnk;if(!i.bgI[1]&&i.bgI[0]) i.bgI[1]=st_cm.bnk;return i;}
function stnav(){var _n=navigator,_u=_n.userAgent,_a=_n.appName,_p=_n.platform,n,v,p;if(/(Opera)[ \/]([\d\.]+)/.test(_u)||/(Netscape)\d*\/([\d\.]+)/.test(_u)||/(MSIE) ([\d\.]+)/.test(_u)||/(Safari)\/([\d\.]+)/.test(_u)||/(Konqueror)\/([\d\.]+)/.test(_u)||/(Gecko)\/(\d+)/.test(_u)){n=RegExp.$1.toLowerCase();v=RegExp.$2;}else if(_a=="Netscape"&&_n.appVersion.charAt(0)=="4"){n="netscape4";v=_n.appVersion;}else{n="unknow";v=0;}if(n=="netscape")switch(_a){case "Microsoft Internet Explorer":n="msie";v=/(MSIE) ([\d\.]+)/.exec(_u)[2];				break;case "Netscape":n="gecko";v=/(Gecko)\/(\d+)/.exec(_u)[2];}v=parseFloat(v);if(/^(Win)/.test(_p)||/^(Mac)/.test(_p)||/^(SunOS)/.test(_p)||/^(Linux)/.test(_p)||/^(Unix)/.test(_p))p=RegExp.$1.toLowerCase();else p=_p;if(n=="msie"&&v>=4){if(v<5||p=="mac")STM_SCROLL=0;t=0;}else if(n=="opera"&&v>=7||n=="safari"&&v>=1){if(n!="opera"||v<9)STM_SCROLL=0;STM_FILTER=0;t=1;}else if(n=="konqueror"&&v>=3){STM_FILTER=0;STM_SLIP=0;STM_SCROLL=0;t=1;}else if(n=="gecko"&&v>=20020529){STM_FILTER=0;if(v<20040804)STM_SCROLL=0;t=1;}else t=4;return {os:p,nam:n,ver:v,typ:t}}
function stckpg(){if(!st_ck.length) return;for(var j=0;j<st_ck.length;j++){if(!(st_ck[j][2]%st_ck[j][1])){st_ck[j][2]=1;st_ck[j][0]();}else st_ck[j][2]++;}st_tid=setTimeout("stckpg()",25);}
function stisF(s){var re=/\w+\.\w+$/;return re.exec(s)}
function stgJs(s,f){return "<script type='text/javascript' language='javascript1.2' src='"+s+"'"+(f?" DEFER":"")+"></script>"}
function stCreate(){var m=st_cm,d=document;if(m.eslip)steslip();if(m.ieff)stflt();var f=(st_funs&2)||(st_funs&4);switch(st_nav.typ){case 0:if(!(st_funs&2)){d.write(stgJs(m.jsP+"stie.js"));st_funs|=2;}break;case 1:if(!(st_funs&4)){d.write(stgJs(m.jsP+"stdom.js"));st_funs|=4;}}if((st_funs&512)&&f)	stshow();else {d.write(stgJs(m.jsP+"stinit.js"));	st_funs|=512;}}
function stDtB(a){var b=0;for(var j=0;j<a.length;j++)if(a[j])	b+=a[j]*Math.pow(2,j);return b;}
function stgPth(f,s){if(!s) return s;switch(f){case 0:	s=stabs(s)?s:st_cm.imgP+s;stbuf(s);break;case 1:s=stabs(s)?s:st_cm.jsP+s;break;case 2:s=stabs(s)?s:st_cm.lnkP+s;if(!s.toLowerCase().indexOf("javascript:"))s+=";void(0)";break;case 3:s=stabs(s)?s:st_cm.imgP+s;break;}return s;}
function stLnks(i){var m=st_ms[i.mid];if(!i.lnk)	 return;for(var j=0;j<m.lnks.length;j++)if(m.lnks[j].url==i.lnk&&m.lnks[j].tar==i.tar){m.lnks[j].dat.push(i);break;}if(j==m.lnks.length) m.lnks.push({url:i.lnk,tar:i.tar,dat:[i]})}
function stHTML(s,f){if(!s) return "";var re;re=/&/g;s=s.replace(re,"&amp;");if(!f){	re=/ /g;s=s.replace(re,"&nbsp;");}re=/</g;s=s.replace(re,"&lt;");re=/>/g;s=s.replace(re,"&gt;");re=/\r\n/g;s=s.replace(re,"<br>");re=/\"/g;s=s.replace(re,"&quot;");return s;}
function stabs(s){var t=s.toLowerCase();return  t=="@"||!t||!t.indexOf("#")||!t.indexOf("?")||t.indexOf(":")==1&&t.charCodeAt()>="a"&&t.charCodeAt()<="z"||!t.indexOf("http:")||!t.indexOf("https:")||!t.indexOf("file:")||!t.indexOf("ftp:")||!t.indexOf("/")||!t.indexOf("javascript:")||!t.indexOf("mailto:")||!t.indexOf("about:")||!t.indexOf("gopher:")||!t.indexOf("news:")||!t.indexOf("telnet:")||!t.indexOf("wais:")||!t.indexOf("rtsp:")||!t.indexOf("mms:")||!t.indexOf("outlook:");}
function stbuf(s){if(s&&STM_BIMG){for(var j=0;j<st_imgs.length;j++)if(st_imgs[j].src==s) return s;var i=new Image();i.src=s;st_imgs.push({src:s,img:i});	}return s;}
function stEffect(s,h){var p=st_cp,n=s.substring(10,s.length-2);if(n=="slip"&&STM_SLIP){if(typeof p.efft=="undefined") p.efft=0;p.effn="slip";p.efft|=h;st_cm.eslip=1;}}
function stsetld(){	if(st_nav.typ==4) return;var m=st_cm,f1=f2=1;if(!window.onload||onload.toString()!=stload.toString()){if(typeof(window.onload)=="function") st_ld.push(onload);window.onload=stload;}if(m.hdT.length&&!(st_funs&16)){st_ld.push(sthdw);document.write(stgJs(m.jsP+"stwinels.js",1));st_funs|=16;}	if(m.lits&1&&!(st_funs&128)){st_ck.push([sthl,40,40]);st_ld.push(sthi);document.write(stgJs(m.jsP+"sthilight.js",1));st_funs|=128;}if(m.cks&1) staddE(6,"stcklo",m);if((isNaN(m.x)||isNaN(m.y))&&!(st_funs&8)){if((st_nav.os=="mac"&&!st_nav.typ)||!STM_SMSC)st_ck.push([stssc,20,1]);else st_ck.push([stssc,1,1]);st_funs|=8;}if(!(st_funs&1024)){st_ld.push(stckpg);st_funs|=1024;}}
function stgMe(n){for(var j=0;j<st_ms.length;j++)if(st_ms[j].nam==n) return st_ms[j];return false;}
function stload(){if(st_lded)return;for(var j=0;j<st_ld.length;j++)st_ld[j]();for(var j=0;j<st_ms.length;j++)if(st_ms[j].myload)	st_ms[j].myload();st_lded=1;}
function staddE(i,f,m){if(!m.usrE[i])m.usrE[i]=[];m.usrE[i].push(f);}
function stusrE(i,o,m){var r=1;if(m.usrE[i]){for(var j=0;j<m.usrE[i].length;j++)if(window[m.usrE[i][j]]&&!eval(m.usrE[i][j]+"(o)")) r=0; }return r;}
function sthdw(){for(var j=0;j<st_ms.length;j++){var m=st_ms[j];if(m.hdT.length){staddE(1,"sthdWels",m);staddE(3,"stshWels",m);}	}}
function stgtfrm(m){if(!m.cfrm)	return window;var a=m.tfrn.split("."),w;if(m.sfrn)	w="parent";else w="window";for(var j=0;j<a.length;++j){w+="."+a[j];if(typeof(eval(w))=="undefined")return window;}return eval(w);}
function stgsfrm(m){var s="",a=m.sfrn?("parent."+m.tfrn).split("."):m.tfrn.split("."),n=[],f=0;for(var j=0;j<a.length;j++){s+=a[j];if(a[j]!="parent"){if(a[j]=="window") continue;if(!f){if(n.length) n[n.length-1]="parent";f=1;}n.push("parent");}else n.push(eval(s).name);s+=".";}	s="";for(var j=n.length-2;j>=0;j--)s+=n[j]+".";if(m.sfrn) s+=m.sfrn+".";else s+="parent.";m.sfrp=s;return s;}
function sthl(){if(typeof(stisL)=="undefined") return;for(var k=0;k<st_ms.length;k++){	var m=st_ms[k];if(!(m.lits&1)||m.isOv) continue;var w=stgtfrm(m),ip=new Array(m.ps.length),ii=new Array(m.ps.length),f=0,i,t,is,sn=0,pp,ex,li=m.hili,mck=m.ckhd;for(var j=0;j<m.lnks.length;j++){is=m.lnks[j].dat;if(stisL(m.lnks[j].url,m.lnks[j].tar,0,w)){	for( var l=is.length-1;l>=0;l--){				i=is[l];	if(!i.ishl||mck){ex=i.pid?stckL(i,w):stckL(i);if(m.lits&0x01000000){	if(ex){i._anchor.href="#";i._anchor.target="_self";i._layer.style.cursor=!m.cur[0].indexOf("url(")&&!st_nav.typ&&st_nav.ver<6||m.cur[0]=="hand"&&st_nav.typ==1&&st_nav.nam!="opera"?"":m.cur[0];}		i.blnk=i.lnk;i.lnk="@";}		f=1;}else{do{if(typeof ii[i.pid]=="undefined")ii[i.pid]=[];ii[i.pid][i.id]=1;i=i.parP.parI;	}while(i&&(m.lits&0x04000000));continue;}pp=[];t=0;do{					if(m.lits&0x08000000)pp.push(i.parP);if(!t||m.lits&0x04000000){					if(ex&&!i.isOv){var los=i.lock;i.lock=0;stcIt(i,li);i.lock=los;}i.stat=i.oust=li;i.ishl=1;	if(typeof ii[i.pid]=="undefined")ii[i.pid]=[];ii[i.pid][i.id]=1;}t=1;i=i.parP.parI;	if(!i)break;ex=i.pid?stckL(i,w):stckL(i);}while(m.lits&0x04000000||m.lits&0x08000000);if(m.lits&0x10000000)sn=Math.max(pp.length-m.litl,0);for(var q=pp.length-1;q>=sn;q--){				clearTimeout(pp[q].tid);if(!pp[q].isSh){var los=pp[q].lock;pp[q].lock=0;stshP(pp[q]);pp[q].lock=los;}ip[pp[q].id]=1;}}}}if(f)for(var j=0;j<m.lnks.length;j++){is=m.lnks[j].dat;for(var l=0;l<is.length;l++){i=is[l];if(i.ishl&&(!ii[i.pid]||!ii[i.pid][i.id])) {							ex=i.pid?stckL(i,w):stckL(i);pp=[];if((m.lits&0x01000000)&&i.blnk){i.lnk=i.blnk;i.blnk="";if(ex){i._anchor.href=i.lnk;i._anchor.target=i.tar;i._layer.style.cursor=!m.cur[1].indexOf("url(")&&!st_nav.typ&&st_nav.ver<6||m.cur[1]=="hand"&&st_nav.typ==1&&st_nav.nam!="opera"?"":m.cur[1];}}t=0;do{if(ii[i.pid]&&ii[i.pid][i.id])break;if(!t||m.lits&0x04000000){					if(ex&&!i.isOv){var los=i.lock;i.lock=0;stcIt(i,0);i.lock=los;}i.stat=i.oust=0;i.ishl=0;}if((m.lits&0x08000000)&&!ip[i.pid]&&i.parP.isSh){var los=i.parP.lock;i.parP.lock=0;sthdP(i.parP);i.parP.lock=los;}t=1;if(!(i=i.parP.parI)) break;ex=i.pid?stckL(i,w):stckL(i);}while(m.lits&0x04000000||m.lits&0x08000000);}}}}}
function stflt(){	var m=st_cm;staddE(0,"stfltshB",m);staddE(1,"stfltshE",m);staddE(2,"stflthdB",m);staddE(3,"stflthdE",m);if(!(st_funs&256)){document.write(stgJs(m.jsP+"stfilter.js"));st_funs|=256;}}
function steslip(){var m=st_cm;staddE(0,"stslsh",m);staddE(2,"stslhd",m);if(!(st_funs&32)){document.write(stgJs(m.jsP+"stslip.js",1));st_funs|=32;}}
function stssc(){if(typeof(stmvto)=='undefined'||!st_lded) return;for(var j=0;j<st_ms.length;j++){var m=st_ms[j];if(!isNaN(m.x)&&!isNaN(m.y))	continue;var p=m.ps[0],rc=p._rc,xy=[eval(m.x),eval(m.y)];if(typeof(p.scxs)=='undefined')p.scxs=0;if(typeof(p.scys)=='undefined')p.scys=0;var dx=xy[0]-rc[0],dy=xy[1]-rc[1];if(dx||dy){	p.scxs=stgsp(p.scxs,Math.abs(dx));p.scys=stgsp(p.scys,Math.abs(dy));var x=dx>0?rc[0]+p.scxs:rc[0]-p.scxs,y=dy>0?rc[1]+p.scys:rc[1]-p.scys;stmvto([x,y],p)}}}
function stgsp(sp,d){var i=0,s=5;if(d<s) return d;return Math.floor(Math.sqrt(2*d*s));}
function sthi(){for(var j=0;j<st_ms.length;j++)if(st_ms[j].lits&0x08000000)staddE(6,"stshlp",st_ms[j]);}
function stgfd(s){var ts=s.toLowerCase();if(!ts.indexOf("//")||!ts.indexOf("file:/")||!ts.indexOf("http://")||!ts.indexOf("https://"))return s.substr(0,s.lastIndexOf("/")+1);else return "";}
function stabsL(s){if(!s) return s;var re,t;if(s.charAt(0)=="/"){re=/(file:\/{2,}[^\/]+\/|http:\/\/[^\/]+\/|https:\/\/[^\/]+\/)/;if(re.exec(st_path)) s=RegExp.$1+s.substr(1);}else if(!stabs(s))s=st_path.substr(0,st_path.lastIndexOf("/")+1)+s;else return s;while(s.indexOf("/./")>0)s=s.replace("/./","/");while((t=s.indexOf("/../"))>0){var p1,p2;p1=s.substr(0,t);p2=s.substr(t).replace("/../","");p1=p1.substr(0,p1.lastIndexOf("/")+1);s=p1+p2;}return s;}
function stStyle(){var s="<style>",t;for (t in stCSS )	s+=".stc"+t+"{"+stCSS[t]+"}\n";return s+="</style>";}
function stgCss(t,f,c){var s="";if(!f){if(stCSS[t]) s=" class='stc"+t+"'";if(c) s+=" style=\""+c+"\"";}else{if(!c&&stCSS[t])s=" style='"+stCSS[t]+"'";else if(stCSS[t]){s=" style=\"";var a=ststo(c),b=ststo(stCSS[t]);for(var i in b)	if(typeof a[i]=="undefined") a[i]=b[i];s+=stots(a);s+="\"";}}return s;}
function ststo(s){var o={},a,re=/\s*([\w\-_]+)\s*:\s*([:_\w#%\- .\"\',\(\)\-\/\\=\|]+)\s*(;|$)/,ra;a=s.split(";");	for(var i=0;i<a.length;i++){ra=re.exec(a[i]);if(ra)o[ra[1]]=ra[2];}return o;}
function stots(a){var s="";for(var i in a) s+=i+":"+a[i]+";";return s;}
function stgEnt(o){var s="",f="", m=st_ms[o.mid];if(o.frm)	f=m.sfrp?m.sfrp:stgsfrm(m);for(var j=0;j<stENTS.length;j++)if(o[stENTS[j]]) s+=stENTS[j]+"=\""+f+"stsEnt(event,this,"+j+",'st_ms["+o.mid+"]"+(typeof(o.pid)=="undefined"?".ps["+o.id+"]":((o.typ&17)/8==2?".ps["+o.pid+"].sc["+o.sid+"]":".ps["+o.pid+"].is["+o.id+"]"))+"')\" ";return s;}
function stgClk(i){var s="",f="", m=st_ms[i.mid];if(i.frm)	f=m.sfrp?m.sfrp:stgsfrm(m); s+="onclick=\"return "+f+"st_ms["+i.mid+"].ps["+i.pid+"].is["+i.id+"]"+".disable\" ";return s;}
function stgEff(f,i,s,h,st){if(!f.indexOf("stEffect")){if(!st)stEffect(f,h);return "";}if(f=="normal"||!STM_FILTER) return "";return st_nav.ver<5.5?(!st||st_nav.ver>=5)&&i<24&&i>=0?"revealTrans(Transition="+i+",Duration="+((110-s)/100)+")":"":f;}


}
/*
     FILE ARCHIVED ON 17:34:41 Oct 03, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:43:22 Jul 11, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 213.279
  exclusion.robots: 0.105
  exclusion.robots.policy: 0.095
  RedisCDXSource: 1.316
  esindex: 0.011
  LoadShardBlock: 191.885 (3)
  PetaboxLoader3.datanode: 201.183 (4)
  CDXLines.iter: 16.969 (3)
  load_resource: 225.013
  PetaboxLoader3.resolve: 198.327
*/