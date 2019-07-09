$(document).ready(function() {
    var isIE = /*@cc_on!@*/false || !!document.documentMode || navigator.userAgent.indexOf('MSIE')!==-1;
    var ieVersion;
    if (navigator.userAgent.search("MSIE") >= 0){
        var iePosition = navigator.userAgent.search("MSIE") + 5;
        var ieEnd = navigator.userAgent.search("; Windows");
        ieVersion = navigator.userAgent.substring(iePosition, ieEnd);
	}
	if(isIE && (parseInt(ieVersion) >= 9 || ieVersion === undefined)) { 
		$('#nina-fedex .nw_TitleBar').attr("style","height:50px !important;");
        $('.nw_UserSubmit').attr("style", "padding-top:17px !important; height:50px !important; right:30px !important;");
        $('#nina-fedex .nw_UserInputContainer').attr("style","height:50px !important; width:78.5% !important;");
        $('#nina-fedex .nw_Conversation').attr("style","height:157px !important;");
        $('#nina-fedex .nw_ConversationText').attr("style","text-align:left !important;");
	}
});
