function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
function CheckIsIE()
{
	if (navigator.appName.toUpperCase() == 'MICROSOFT INTERNET EXPLORER') { return true;}
		else { return false; }
}
function PrintThisPage()
{
	if (CheckIsIE() == true)
	{
		document.Workspace.focus();
		document.Workspace.print();
	}
	else
	{
		window.frames['Workspace'].focus();
		window.frames['Workspace'].print();
	}
}