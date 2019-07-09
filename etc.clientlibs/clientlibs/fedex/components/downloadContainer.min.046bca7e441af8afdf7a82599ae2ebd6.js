$(document).ready(function(){var a=$(".fxg__download-container-check-tags").attr("id");
var d=false;
var c={};
if(a!=null&&a!=undefined){c=JSON.parse(a)
}var b;
for(i=0;
i<c.length;
i++){var g=c[i].languageTitle;
$(".fxg-download-container-listItems").append($("<li tabindex = '0'></li>").attr("value",g).attr("aria-label",g).text(g))
}if($(".fxg__download-container-standard-tab").attr("id")&&$(".fxg__download-container-advanced-tab").attr("id")){$(".fxg_download-container-tab-one").addClass("active")
}else{if($(".fxg__download-container-standard-tab").attr("id")&&!$(".fxg__download-container-advanced-tab").attr("id")){$(".fxg_download-container-tab-one").addClass("active");
$(".fxg__download_all-tabs-to-dropdown").css("display","none");
$(".fxg__download_all-tabs-to-hide").css("display","block")
}else{if(!$(".fxg__download-container-standard-tab").attr("id")&&$(".fxg__download-container-advanced-tab").attr("id")){$(".fxg_download-container-tab-two").addClass("active");
$(".fxg__download_all-tabs-to-dropdown").css("display","none");
$(".fxg__download_all-tabs-to-hide").css("display","block")
}}}if($(".fxg__download-all-check-mobile-port").attr("id")=="on"){$(".downloadContainer").addClass("download-all-mobile-display-none")
}if($(".fxg__download-all-check-desktop-port").attr("id")=="on"){$(".downloadContainer").addClass("download-all-desktop-display-none")
}if($(".fxg__download-all-check-tablet-port").attr("id")=="on"){$(".downloadContainer").addClass("download-all-tablet-display-none")
}$(".fxg-download-container__button-submit-lead").click(function(n){if($(this).parents(".fxg-download-all-submit-button-col").siblings(".fxg-download-container-dropdown").find("p.fxg-download-container__selected-item").text().length<=1&&!d){$(this).parents(".fxg-download-all-submit-button-col").siblings(".fxg__download-container-validation-row").find(".fxg__download-container-validation").html("<p>Please select the type of file or checkbox</p>");
$(".fxg-download-container__button-select").focus()
}else{if($(this).parents(".fxg-download-all-submit-button-col").siblings(".fxg-download-container-dropdown").find("p.fxg-download-container__selected-item").text().length>1){for(i=0;
i<c.length;
i++){c[i].languageTitle;
var m=$(this).parents(".fxg-download-all-submit-button-col").siblings(".fxg-download-container-dropdown").find("p.fxg-download-container__selected-item").text();
if(c[i].languageTitle==m){var l=c[i].languageName
}}$(this).parents("#atag").removeAttr("href");
if($(".fxg_download-container-tab-one").hasClass("active")){b=$(this).parents(".fxg__download-container-containerin-row").siblings(".fxg__download-downloadallpath").attr("id")
}if($(".fxg_download-container-tab-two").hasClass("active")){b=$(this).parents(".fxg__download-container-containerin-row").siblings(".fxg__download-downloadallpathadv").attr("id")
}var k=b.substr(0,b.lastIndexOf("."));
var h=b.substr(b.lastIndexOf("."),b.length);
var j=k+"_"+l+h;
$(this).parents("#downloadAll_atag").attr("href",j);
$(this).parents(".fxg-download-all-submit-button-col").siblings(".fxg__download-container-validation-row").find(".fxg__download-container-validation").html(" ")
}if(d){var o=$(".fxg__download-container_pdfpath").attr("id");
window.open(o,"_blank")
}}});
$(".fxg-download-container__button-submit-lead").keydown(function(h){if(h.which==13){$(".fxg-download-container__button-submit-lead").click();
$(this).parents("#downloadAll_atag").removeAttr("href")
}});
var e=[];
var f=[];
$(".fxg-download-tabs ul li").click(function(){if(!$(this).hasClass("active")){$(this).siblings(".active").removeClass("active");
$(this).addClass("active")
}});
$(".fxg__download-all-input-checkbox").click(function(){d=!d;
if(d){$(".fxg__download-container-validation").html("")
}});
$(".fxg__download-all-input-checkbox").siblings("span").on("keydown",function(h){if(h.keyCode==13){d=!d;
if(d){$(".fxg__download-container-validation").html("")
}}});
if($(".fxg_download-container-tab-one").hasClass("active")){$("div.fxg_download-container-diplay-one").addClass("fxg_download-container-diplay").removeClass("fxg_download-container-no-diplay");
$("div.fxg_download-container-diplay-two").removeClass("fxg_download-container-diplay").addClass("fxg_download-container-no-diplay")
}if($(".fxg_download-container-tab-two").hasClass("active")){$("div.fxg_download-container-diplay-two").addClass("fxg_download-container-diplay").removeClass("fxg_download-container-no-diplay");
$("div.fxg_download-container-diplay-one").removeClass("fxg_download-container-diplay").addClass("fxg_download-container-no-diplay")
}$(".fxg_download-container-tab-click li").click(function(){if($(this).hasClass("fxg_download-container-tab-one")){$(".fxg_download-container-services").addClass("active");
$(".fxg_download-container-advanced").removeClass("active");
$(".fxg-download-container__default-tab").html($(this).text());
$(".fxg_download-container-tab-one-mobile").css("display","none");
$(".fxg_download-container-tab-two-mobile").css("display","block");
$("div.fxg_download-container-diplay-one").addClass("fxg_download-container-diplay").removeClass("fxg_download-container-no-diplay");
$("div.fxg_download-container-diplay-two").removeClass("fxg_download-container-diplay").addClass("fxg_download-container-no-diplay")
}if($(this).hasClass("fxg_download-container-tab-two")){$(".fxg_download-container-services").removeClass("active");
$(".fxg_download-container-advanced").addClass("active");
$(".fxg-download-container__default-tab").html($(this).text());
$(".fxg_download-container-tab-two-mobile").css("display","none");
$(".fxg_download-container-tab-one-mobile").css("display","block");
$("div.fxg_download-container-diplay-two").addClass("fxg_download-container-diplay").removeClass("fxg_download-container-no-diplay");
$("div.fxg_download-container-diplay-one").removeClass("fxg_download-container-diplay").addClass("fxg_download-container-no-diplay")
}});
$(".fxg-download-container__button-select").on("click",function(h){h.stopPropagation();
$(".fxg-download-container-listItems li").removeClass("fxg-download-container-lists-focus");
$("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$("button.fxg-download-container__button-select").removeClass("fxg-download-container__violet-border");
$(this).addClass("fxg-download-container__violet-border");
if($(this).siblings(".display-dropdown-webTolead").length==0){$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-close");
$(this).siblings().addClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-open");
$(this).siblings("ul").focus()
}else{$("button.fxg-download-container__button-select").removeClass("fxg-download-container__violet-border");
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close")
}});
$(".fxg-download-container__button-select").on("keydown",function(h){if(h.which==13){h.preventDefault();
h.stopPropagation();
$(".fxg-download-container-listItems li").removeClass("fxg-download-container-lists-focus");
$("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$("button.fxg-download-container__button-select").removeClass("fxg-download-container__violet-border");
$(this).addClass("fxg-download-container__violet-border");
if($(this).siblings(".display-dropdown-webTolead").length==0){$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-close");
$(this).siblings().addClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-open");
$(this).siblings("ul").focus()
}else{$("button.fxg-download-container__button-select").removeClass("fxg-download-container__violet-border");
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close")
}}else{if(h.keyCode==9){$("button.fxg-download-container__button-select").removeClass("fxg-download-container__violet-border");
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close")
}}});
$(".fxg-download-container-listItems li").on("click",function(){$(this).parents(".fxg-download-container-dropdown").siblings(".fxg__download-container-validation-row").find(".fxg__download-container-validation").html("");
$(this).parents("ul").siblings().find(".fxg-download-container__selected-item").html($(this).text());
$(this).parents("ul").siblings().find(".fxg-download-container__default-item").removeClass("fxg-download-container__default-item").addClass("fxg-download-container__squeezed-item");
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close")
});
$(".fxg-download-container-listItems li").on("keydown",function(h){if(h.which==13){$(this).parents(".fxg-download-container-dropdown").siblings(".fxg__download-container-validation-row").find(".fxg__download-container-validation").html("");
$(this).parents("ul").siblings().find(".fxg-download-container__selected-item").html($(this).text());
$(this).parents("ul").siblings().find(".fxg-download-container__default-item").removeClass("fxg-download-container__default-item").addClass("fxg-download-container__squeezed-item");
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close");
$("button.fxg-download-container__button-select").removeClass("fxg-download-container__violet-border")
}});
$(".fxg-download-container__tab-lisitems li").on("click",function(){$(this).parents("ul").siblings().find(".fxg-download-container__default-item").html($(this).text());
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).css("display","none");
$(this).siblings().css("display","block");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close")
});
$(".fxg-download-container__tab-lisitems li").on("keydown",function(h){if(h.which==13){$(this).parents("ul").siblings().find(".fxg-download-container__default-item").html($(this).text());
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close")
}});
$("ul.fxg-download-container-listItems, ul.fxg-download-container__tab-lisitems").on("keydown",function(h){h.preventDefault();
f.push(h.timeStamp);
if((h.timeStamp-f[0])<=650){e.push(h.key);
$(this).find("li").each(function(){var l=$(this).text().match(/[A-Za-z0-9]/g).join("");
var k=e.join("");
if(k.toUpperCase()==l.slice(0,e.length).toUpperCase()&&h.keyCode!=32){$(this).focus();
return false
}})
}if((h.timeStamp-f[0])>=650){var j=h.key;
f=[];
e=[];
f.push(h.timeStamp);
e.push(h.key);
$(this).find("li").each(function(){var k=$(this).text().match(/[A-Za-z0-9]/g).join("");
if(j.toUpperCase()==k[0].toUpperCase()){$(this).focus();
return false
}})
}if(h.keyCode==40){h.preventDefault();
$(this).children().first().focus()
}else{if(h.keyCode==9){h.preventDefault();
$("button.fxg-download-container__button-select").removeClass("fxg-download-container__violet-border");
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).siblings().find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).siblings().find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close");
if($(this).hasClass("fxg-download-container__r-lisitems")){$(".fxg-download-container__label-meter input").focus()
}else{if($(this).hasClass("fxg-download-container__nes-lisitems")){$(".fxg-download-container__button-submit-lead").focus()
}}}else{if(h.keyCode==13){$("button.fxg-download-container__button-select").removeClass("fxg-download-container__violet-border");
$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).siblings().find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).siblings().find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close");
if($(this).hasClass("fxg-download-container__r-lisitems")){$(".fxg-download-container__label-meter input").focus()
}else{if($(this).hasClass("fxg-download-container__nes-lisitems")){$(".fxg-download-container__button-submit-lead").focus()
}}}}}});
$("ul.fxg-download-container-listItems li,ul.fxg-download-container__tab-lisitems li").on("focus",function(){$(this).addClass("fxg-download-container-lists-focus").siblings().removeClass("fxg-download-container-lists-focus")
}).on("keydown",function(h){if(h.keyCode==40){$(this).next().focus();
return false
}else{if(h.keyCode==38){$(this).prev().focus();
return false
}}});
$("ul.fxg-download-container-listItems li,ul.fxg-download-container__tab-lisitems li").on("keydown",function(h){if(h.keyCode==9){$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).parent("ul").siblings().find("span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close")
}});
$(".checkmark").on("keypress",function(h){if(h.keyCode==13){$(".checkmark").click()
}});
$(document).click(function(){$(".fxg-download-container-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("button.fxg-download-container__button-select span.fxg-download-container__carot-icon").removeClass("fxg-download-container_carot-icon-open");
$(this).find("button.fxg-download-container__button-select span.fxg-download-container__carot-icon").addClass("fxg-download-container_carot-icon-close")
})
});
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
;
var saveAs=saveAs||(function(h){if(typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return
}var t=h.document,n=function(){return h.URL||h.webkitURL||h
},p=t.createElementNS("http://www.w3.org/1999/xhtml","a"),f="download" in p,l=function(v){var u=new MouseEvent("click");
v.dispatchEvent(u)
},b=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),q=h.webkitRequestFileSystem,r=h.requestFileSystem||q||h.mozRequestFileSystem,o=function(u){(h.setImmediate||h.setTimeout)(function(){throw u
},0)
},c="application/octet-stream",m=0,j=1000*40,k=function(v){var u=function(){if(typeof v==="string"){n().revokeObjectURL(v)
}else{v.remove()
}};
setTimeout(u,j)
},s=function(v,u,y){u=[].concat(u);
var x=u.length;
while(x--){var z=v["on"+u[x]];
if(typeof z==="function"){try{z.call(v,y||v)
}catch(w){o(w)
}}}},g=function(u){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)){return new Blob(["\ufeff",u],{type:u.type})
}return u
},e=function(u,v,w){if(!w){u=g(u)
}var x=this,D=u.type,G=false,z,y,C=function(){s(x,"writestart progress write writeend".split(" "))
},F=function(){if(y&&b&&typeof FileReader!=="undefined"){var H=new FileReader();
H.onloadend=function(){var J=H.result;
y.location.href="data:attachment/file"+J.slice(J.search(/[,;]/));
x.readyState=x.DONE;
C()
};
H.readAsDataURL(u);
x.readyState=x.INIT;
return
}if(G||!z){z=n().createObjectURL(u)
}if(y){y.location.href=z
}else{var I=h.open(z,"_blank");
if(I===undefined&&b){h.location.href=z
}}x.readyState=x.DONE;
C();
k(z)
},B=function(H){return function(){if(x.readyState!==x.DONE){return H.apply(this,arguments)
}}
},A={create:true,exclusive:false},E;
x.readyState=x.INIT;
if(!v){v="download"
}if(f){z=n().createObjectURL(u);
setTimeout(function(){p.href=z;
p.download=v;
l(p);
C();
k(z);
x.readyState=x.DONE
});
return
}if(h.chrome&&D&&D!==c){E=u.slice||u.webkitSlice;
u=E.call(u,0,u.size,c);
G=true
}if(q&&v!=="download"){v+=".download"
}if(D===c||q){y=h
}if(!r){F();
return
}m+=u.size;
r(h.TEMPORARY,m,B(function(H){H.root.getDirectory("saved",A,B(function(I){var J=function(){I.getFile(v,A,B(function(K){K.createWriter(B(function(L){L.onwriteend=function(M){y.location.href=K.toURL();
x.readyState=x.DONE;
s(x,"writeend",M);
k(K)
};
L.onerror=function(){var M=L.error;
if(M.code!==M.ABORT_ERR){F()
}};
"writestart progress write abort".split(" ").forEach(function(M){L["on"+M]=x["on"+M]
});
L.write(u);
x.abort=function(){L.abort();
x.readyState=x.DONE
};
x.readyState=x.WRITING
}),F)
}),F)
};
I.getFile(v,{create:false},B(function(K){K.remove();
J()
}),B(function(K){if(K.code===K.NOT_FOUND_ERR){J()
}else{F()
}}))
}),F)
}),F)
},d=e.prototype,a=function(v,w,u){return new e(v,w,u)
};
if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(v,w,u){if(!u){v=g(v)
}return navigator.msSaveOrOpenBlob(v,w||"download")
}
}d.abort=function(){var u=this;
u.readyState=u.DONE;
s(u,"abort")
};
d.readyState=d.INIT=0;
d.WRITING=1;
d.DONE=2;
d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null;
return a
}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content));
if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs
}else{if((typeof define!=="undefined"&&define!==null)&&(define.amd!==null)){define([],function(){return saveAs
})
}};