$(document).ready(function(){var e=$(document).width();
var s=false;
var d=window.location.href;
var m="";
var j="";
var r=$("#placeholdername").val();
var a=$("#errortext").val();
$(".email_add").val("");
$("input.email_add").focus(function(){$(this).addClass("fxg__email-input-padding")
});
$("input.email_add").blur(function(){if($(this).val()==""){$(this).removeClass("fxg__email-input-padding")
}});
$(".fxg__email-check-mobile-port").each(function(){if($(this).attr("id")=="on"){$(this).parents(".fxg__email-datatest").siblings("div.email").addClass("email-mobile-display-none")
}});
$(".fxg__email-check-desktop-port").each(function(){if($(this).attr("id")=="on"){$(this).parents(".fxg__email-datatest").siblings("div.email").addClass("email-desktop-display-none")
}});
$(".fxg__email-check-tablet-port").each(function(){if($(this).attr("id")=="on"){$(this).parents(".fxg__email-datatest").siblings("div.email").addClass("email-tablet-display-none")
}});
$(".email_add").on("focus",function(){$(this).siblings("span.squeezeSpan").show();
$(this).parent().removeClass("fxg-email-red-border");
$(this).parents(".fxg__scubscribe-header-row").find("input.email_add").removeClass("textcolor");
$(this).parents(".fxg__scubscribe-header-row").find("input.email_add").removeClass("placeholdertext");
$(this).parents(".fxg__scubscribe-header-row").find("span.squeezeSpan").removeClass("placeholdertext");
$(this).parent().addClass("fxg-email-violet-border");
m=$(this).parents(".fxg__scubscribe-header-row").find("#error");
$(this).attr("placeholder","");
$(this).parents(".fxg__email_component-container-small").find("#spanDiv").css("height","0px");
$(this).parents(".fxg__email_component-container-small").find("#subfieldDiv").css("margin-bottom","5px");
m.hide()
});
$(".email_add").on("keydown",function(){$(this).siblings("span.squeezeSpan").show();
$(this).parent().removeClass("fxg-email-red-border");
$(this).parents(".fxg__scubscribe-header-row").find("input.email_add").removeClass("textcolor");
$(this).parents(".fxg__scubscribe-header-row").find("input.email_add").removeClass("placeholdertext");
$(this).parents(".fxg__scubscribe-header-row").find("span.squeezeSpan").removeClass("placeholdertext");
$(this).parent().addClass("fxg-email-violet-border");
m=$(this).parents(".fxg__scubscribe-header-row").find("#error");
$(this).attr("placeholder","");
$(this).parents(".fxg__email_component-container-small").find("#spanDiv").css("height","0px");
$(this).parents(".fxg__email_component-container-small").find("#subfieldDiv").css("margin-bottom","5px");
m.hide()
});
$(".email_add").on("blur",function(v){r=$(this).siblings("span.squeezeSpan").text();
var u=$(this).val();
if(u==""){$(this).siblings("span.squeezeSpan").hide();
$(this).attr("placeholder",r)
}else{$(this).siblings("span.squeezeSpan").show()
}$(this).parent().removeClass("fxg-email-red-border");
$(this).parents(".fxg__scubscribe-header-row").find("input.email_add").removeClass("textcolor");
$(this).parents(".fxg__scubscribe-header-row").find("input.email_add").removeClass("placeholdertext");
$(this).parents(".fxg__scubscribe-header-row").find("span.squeezeSpan").removeClass("placeholdertext");
$(this).parent().removeClass("fxg-email-violet-border");
m=$(this).parents(".fxg__scubscribe-header-row").find("#error");
$(this).parents(".fxg__email_component-container-small").find("#spanDiv").css("height","0px");
$(this).parents(".fxg__email_component-container-small").find("#subfieldDiv").css("margin-bottom","5px");
m.hide()
});
var t=$(".email_subscription").closest(".col-sm-6");
if(t.length>0){q(t,".col-sm-6",$(this))
}var h=$(".email_subscription").closest(".col-sm-10");
if(h.length>0){q(h,".col-sm-10",$(this))
}var n=$(".email_subscription").closest(".col-sm-8");
if(n.length>0){q(n,".col-sm-8",$(this))
}var b=$(".email_subscription").closest(".col-sm-9");
if(b.length>0){q(b,".col-sm-9",$(this))
}var i=$(".email_subscription").closest(".col-sm-2");
if(i.length>0){l(i)
}var c=$(".email_subscription").closest(".col-sm-3");
if(c.length>0){l(c)
}var g=$(".email_subscription").closest(".col-sm-4");
if(g.length>0){l(g)
}if(d.indexOf("/aeme_")>-1){j=d.substring(d.indexOf("/aeme_"),d.indexOf("/aeme_")+8)
}if(d.indexOf("?e=")>-1){s=true;
var o=window.location.href.substring(d.indexOf("?e=")+3,d.length);
$(".email_add").val(o);
f(o)
}$("button#subscribebutton").click(function(){var x=$(this).parents(".fxg__scubscribe-header-row").find(".email_add").val();
m=$(this).parents(".fxg__scubscribe-header-row").find("#error");
var A=$("#success-path").val();
$(this).parents(".fxg__scubscribe-header-row").find("label.fdx-email").removeClass("fxg-email-violet-border");
var z=window.FDX.DATALAYER.page.pageInfo.locale;
var y=z.split("_");
var B=y[0];
var v=y[1];
if(A.match("^/content")){A=j+A+".html"
}var w="";
var u=f(x);
if(u){w="";
w=A+"?E="+x+"&C="+v+"&L="+B;
window.open(w,"_self")
}else{$(this).parents(".fxg__scubscribe-header-row").find("label.fdx-email").addClass("fxg-email-red-border");
$(this).parents(".fxg__scubscribe-header-row").find("input.email_add").addClass("textcolor");
$(this).parents(".fxg__scubscribe-header-row").find("input.email_add").addClass("placeholdertext");
$(this).parents(".fxg__scubscribe-header-row").find("span.squeezeSpan").addClass("placeholdertext");
$(this).parents(".fxg__email_component-container-small").find("#spanDiv").css("height","15px");
$(this).parents(".fxg__email_component-container-small").find("#subfieldDiv").css("margin-bottom","0px")
}});
function k(u){var w="";
var z=false;
var x=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
var v=/^([a-z\d+]+(\b[a-z\d!#$%&'.*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
if(v.test(u)){if($.inArray(u[(u.indexOf("@")-1)],("['.','-']"))==-1){if($.inArray(u[u.length-1],["-"])==-1){if(u.length<=320){var y=u.split("@");
if(y[1].length<=64){z=true
}else{w="Domain charcter length exceeds"
}}else{w="Length of the email ID"
}}else{w='Email ID cannot end with hyphen "-"'
}}else{w='Email ID cannot have occurences like ".@" , "-@"'
}}else{w="Invalid Input"
}if(w!=""){m.show()
}return z
}function f(w){var y="";
var z=false;
var u=/^(?![.!@#$%&'*\[\]*\/\\=?^`{|}~-])+(?!.*?\.\.)(?:[a-zA-Z0-9!.#$&'\[\]*\/\\+=?^_`{|}~-]{0,63})([^-@])@(?=.{1,255}$)(?!\d+$)[a-zA-Z0-9](?:[a-zA-Z0-9-._]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9_])?)*$/;
var x=/[\.](?=@)/;
var v=/[a-zA-Z]/;
var A=w.slice(w.indexOf("@")+1,w.length);
if(w){if(!u.test(w)||x.test(w)||!v.test(A)||A.indexOf(".")==-1){y="Email Id provided is in-valid";
z=false
}else{z=true
}}else{y="Email Id cannot blank or empty.";
z=false
}if(y!=""){m.show()
}return z
}function p(w){var v=w+"=";
var y=decodeURIComponent(document.cookie);
var u=y.split(";");
for(var x=0;
x<u.length;
x++){var z=u[x];
while(z.charAt(0)==" "){z=z.substring(1)
}if(z.indexOf(v)==0){return z.substring(v.length,z.length)
}}return""
}function q(w,v){var u=$(w).find(".email_subscription").find(".email");
u.addClass("fxg__email_component-container-medium");
$(".fxg__email_component-container-medium").find("label.fdx-email").css("width","237px");
$(".fxg__email_component-container-medium").find(".innerDiv").removeAttr("style");
$(".fxg__email_component-container-medium").find(".innerDiv").css("width","237px");
$(".fxg__email_component-container-medium").find(".innerDiv").css("margin-left","auto");
$(".fxg__email_component-container-medium").find("#outerDiv").removeAttr("style");
$(".fxg__email_component-container-medium").find("#outerDiv").css("width","180px");
$(".fxg__email_component-container-medium").find("#outerDiv").css("margin-right","auto");
$(".fxg__email_component-container-medium").find("input#subscribebutton").css("width","180px");
$(".fxg__email_component-container-medium").find(".innerDiv").css("height","60px");
$(".fxg__email_component-container-medium").find(".innerDiv").css("margin-right","-12.5px");
$(".fxg__email_component-container-medium").find("#spanDiv").removeAttr("style");
$(".fxg__email_component-container-medium").find("#spanDiv").css("width","237px");
$(".fxg__email_component-container-medium").find("#spanDiv").css("height","15px");
$(".fxg__email_component-container-medium").find("#spanDiv").css("text-align","left");
$(".fxg__email_component-container-medium").find("#spanDiv").css("margin-left","auto");
$(".fxg__email_component-container-medium").find("#spanDiv").css("margin-right","-12.5px");
$(".fxg__email_component-container-medium").find("#outerDiv").css("margin-left","-12.5px");
$(w).find(".email_subscription").find(".container").css("width","100%");
u.find(".fxg__scubscribe-header-row").css("width","100%");
if(v==".col-sm-6"){u.find("#subfieldDiv").removeClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
u.find("#subfieldDiv").addClass("fxg-email-col-6 col-lg-7 col-md-7 col-sm-12 col-xs-12");
u.find("#subbuttonDiv").removeClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
u.find("#subbuttonDiv").addClass("fxg-email-col-6-button col-lg-5 col-md-5 col-sm-12 col-xs-12")
}else{u.find("#subfieldDiv").removeClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
u.find("#subfieldDiv").addClass("col-lg-7 col-md-7 col-sm-7 col-xs-12");
u.find("#subbuttonDiv").removeClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
u.find("#subbuttonDiv").addClass("col-lg-5 col-md-5 col-sm-5 col-xs-12")
}}function l(v){var u=$(v).find(".email_subscription").find(".email");
u.addClass("fxg__email_component-container-small");
$(".fxg__email_component-container-small").find("label.fdx-email").css("width","210px");
$(".fxg__email_component-container-small").find("input#subscribebutton").css("width","210px");
$(".fxg__email_component-container-small").find(".innerDiv").removeAttr("style");
$(".fxg__email_component-container-small").find(".innerDiv").css("width","210px");
$(".fxg__email_component-container-small").find(".innerDiv").css("margin","auto");
$(".fxg__email_component-container-small").find("#outerDiv").removeAttr("style");
$(".fxg__email_component-container-small").find("#outerDiv").css("width","210px");
$(".fxg__email_component-container-small").find("#outerDiv").css("margin","auto");
$(".fxg__email_component-container-small").find(".innerDiv").css("height","60px");
$(".fxg__email_component-container-small").find("#subfieldDiv").css("margin-bottom","5px");
$(".fxg__email_component-container-small").find("#subbuttonDiv").css("margin-bottom","5px");
$(".fxg__email_component-container-small").find("#spanDiv").removeAttr("style");
$(".fxg__email_component-container-small").find("#spanDiv").css("width","210px");
$(".fxg__email_component-container-small").find("#spanDiv").css("text-align","left");
$(".fxg__email_component-container-small").find("#spanDiv").css("height","0px");
$(".fxg__email_component-container-small").find("#spanDiv").css("margin","auto");
u.find("#subfieldDiv").addClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
u.find("#subfieldDiv").removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-6");
u.find("#subbuttonDiv").addClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
u.find("#subbuttonDiv").removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-6");
$(v).find(".email_subscription").find(".container").css("width","100%");
u.find(".fxg__scubscribe-header-row").css("width","100%")
}});