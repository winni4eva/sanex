$(document).ready(function(){var d=$(".fxg__download-check-tags").attr("id");
var g;
var a=false;
var b={};
if(d!=null&&d!=undefined){b=JSON.parse(d)
}var c=[];
var f=[];
for(i=0;
i<b.length;
i++){var e=b[i].languageTitle;
$(".fxg-download-accordion_body-listItems").append($("<li tabindex = '0'></li>").attr("value",e).attr("aria-label",e).text(e))
}$(".fxg-download-drop_body__button-submit-lead").click(function(){if($(this).parents(".fxg-download-submit-button-col").siblings(".fxg-download-accordion_body-dropdown").find("p.fxg-download-drop_body__selected-item").text().length<=1&&!$(this).hasClass("fxg__button-pdf-download-validated")){$(this).parents(".fxg__download-dropdown-button-row").next(".fxg__download-validation-text-row").find(".fxg__download-validation-text").first().html("<p>Please select the type of file or checkbox</p>");
$(this).parents(".fxg__download-dropdown-button-row").find(".fxg-download-drop_body__button-select").focus()
}else{if($(this).parents(".fxg-download-submit-button-col").siblings(".fxg-download-accordion_body-dropdown").find("p.fxg-download-drop_body__selected-item").text().length>1){for(i=0;
i<b.length;
i++){b[i].languageTitle;
var n=$(this).parents(".fxg-download-submit-button-col").siblings(".fxg-download-accordion_body-dropdown").find("p.fxg-download-drop_body__selected-item").text();
if(b[i].languageTitle==n){var m=b[i].languageName
}}g=$(this).parents(".fxg__download-dropdown-button-row").prev(".fxg__download-accordian-header-row").first().find(".fxg__download-redirect-filepath").attr("id");
var l=g.substr(0,g.lastIndexOf("."));
var j=g.substr(g.lastIndexOf("."),g.length);
var k=l+"_"+m+j;
$(this).parents("#atag").attr("href",k)
}$(this).parents(".fxg__download-dropdown-button-row").next(".fxg__download-validation-text-row").find(".fxg__download-validation-text").first().html(" ");
if($(this).hasClass("fxg__button-pdf-download-validated")){var h=$(this).parents(".fxg__download-dropdown-button-row").prev(".fxg__download-accordian-header-row").first().find(".fxg__download-redirect-pdfFilePath").attr("id");
window.open(h,"_blank")
}}});
$(".fxg__download-file-wsdl").click(function(){g=$(this).parents(".fxg__download-options-heading").siblings(".fxg__download-redirect-wsdlFilePath").attr("id");
$(this).attr("href",g)
});
$(".fxg__download-file-xsd").click(function(){g=$(this).parents(".fxg__download-options-heading").siblings(".fxg__download-redirect-xsdFilePath").attr("id");
window.location.href=g
});
$(".fxg__download-input-checkbox").click(function(){a=!a;
$(this).parents(".fxg__download-dropdown-button-row").find(".fxg-download-drop_body__button-submit-lead").toggleClass("fxg__button-pdf-download-validated");
$(this).parents(".fxg__download-dropdown-button-row").next(".fxg__download-validation-text-row").first().find(".fxg__download-validation-text").html("")
});
$(".fxg-download-drop_body__button-select").on("click",function(h){h.stopPropagation();
$(".fxg-download-accordion_body-listItems li").removeClass("fxg-download-drop_body-lists-focus");
$("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$("button.fxg-download-drop_body__button-select").removeClass("fxg-download-drop_body__violet-border");
$(this).addClass("fxg-download-drop_body__violet-border");
if($(this).siblings(".display-dropdown-webTolead").length==0){$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-close");
$(this).siblings().addClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-open");
$(this).siblings("ul").focus()
}else{$("button.fxg-download-drop_body__button-select").removeClass("fxg-download-drop_body__violet-border");
$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close")
}});
$(".fxg-download-drop_body__button-select").on("keydown",function(h){if(h.which==13){h.preventDefault();
h.stopPropagation();
$(".fxg-download-accordion_body-listItems li").removeClass("fxg-download-drop_body-lists-focus");
$("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$("button.fxg-download-drop_body__button-select").removeClass("fxg-download-drop_body__violet-border");
$(this).addClass("fxg-download-drop_body__violet-border");
if($(this).siblings(".display-dropdown-webTolead").length==0){$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-close");
$(this).siblings().addClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-open");
$(this).siblings("ul").focus()
}else{$("button.fxg-download-drop_body__button-select").removeClass("fxg-download-drop_body__violet-border");
$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close")
}}else{if(h.keyCode==9){$("button.fxg-download-drop_body__button-select").removeClass("fxg-download-drop_body__violet-border");
$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close")
}}});
$(".fxg-download-accordion_body-listItems li").on("click",function(){$(this).parents(".fxg__download-dropdown-button-row").next(".fxg__download-validation-text-row").first().find(".fxg__download-validation-text").html("");
$(this).parents("ul").siblings().find(".fxg-download-drop_body__selected-item").html($(this).text());
$(this).parents("ul").siblings().find(".fxg-download-drop_body__default-item").removeClass("fxg-download-drop_body__default-item").addClass("fxg-download-drop_body__squeezed-item");
$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).parent("ul").siblings().find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).parent("ul").siblings().find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close")
});
$(".fxg-download-accordion_body-listItems li").on("keydown",function(h){if(h.which==13){$(this).parents(".fxg__download-dropdown-button-row").next(".fxg__download-validation-text-row").first().find(".fxg__download-validation-text").html("");
$(this).parents("ul").siblings().find(".fxg-download-drop_body__selected-item").html($(this).text());
$(this).parents("ul").siblings().find(".fxg-download-drop_body__default-item").removeClass("fxg-download-drop_body__default-item").addClass("fxg-download-drop_body__squeezed-item");
$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).parent("ul").siblings().find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).parent("ul").siblings().find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close");
$("button.fxg-download-drop_body__button-select").removeClass("fxg-download-drop_body__violet-border")
}});
$("ul.fxg-download-accordion_body-listItems").on("keydown",function(h){h.preventDefault();
f.push(h.timeStamp);
if((h.timeStamp-f[0])<=650){c.push(h.key);
$(this).find("li").each(function(){var l=$(this).text().match(/[A-Za-z0-9]/g).join("");
var k=c.join("");
if(k.toUpperCase()==l.slice(0,c.length).toUpperCase()&&h.keyCode!=32){$(this).focus();
return false
}})
}if((h.timeStamp-f[0])>=650){var j=h.key;
f=[];
c=[];
f.push(h.timeStamp);
c.push(h.key);
$(this).find("li").each(function(){var k=$(this).text().match(/[A-Za-z0-9]/g).join("");
if(j.toUpperCase()==k[0].toUpperCase()){$(this).focus();
return false
}})
}if(h.keyCode==40){h.preventDefault();
$(this).children().first().focus()
}else{if(h.keyCode==9){h.preventDefault();
$("button.fxg-download-drop_body__button-select").removeClass("fxg-download-drop_body__violet-border");
$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).siblings().find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).siblings().find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close");
if($(this).hasClass("fxg-download-drop_body__r-lisitems")){$(".fxg-download-drop_body__label-meter input").focus()
}else{if($(this).hasClass("fxg-download-drop_body__nes-lisitems")){$(".fxg-download-drop_body__button-submit-lead").focus()
}}}else{if(h.keyCode==13){$("button.fxg-download-drop_body__button-select").removeClass("fxg-download-drop_body__violet-border");
$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).siblings().find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).siblings().find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close");
if($(this).hasClass("fxg-download-drop_body__r-lisitems")){$(".fxg-download-drop_body__label-meter input").focus()
}else{if($(this).hasClass("fxg-download-drop_body__nes-lisitems")){$(".fxg-download-drop_body__button-submit-lead").focus()
}}}}}});
$("ul.fxg-download-accordion_body-listItems li").on("focus",function(){$(this).addClass("fxg-download-drop_body-lists-focus").siblings().removeClass("fxg-download-drop_body-lists-focus")
}).on("keydown",function(h){if(h.keyCode==40){$(this).next().focus();
return false
}else{if(h.keyCode==38){$(this).prev().focus();
return false
}}});
$("ul.fxg-download-accordion_body-listItems li").on("keydown",function(h){if(h.keyCode==9){$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).parent("ul").siblings().find("span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).parent("ul").siblings().find("span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close")
}});
$(".checkmark_download").on("keypress",function(h){if(h.keyCode==13){$(".checkmark_download").click()
}});
$(document).click(function(){$(".fxg-download-accordion_body-dropdown ul").removeClass("display-dropdown-webTolead");
$(this).find("button.fxg-download-drop_body__button-select span.fxg-download-drop_body__carot-icon").removeClass("fxg-download-drop_body_carot-icon-open");
$(this).find("button.fxg-download-drop_body__button-select span.fxg-download-drop_body__carot-icon").addClass("fxg-download-drop_body_carot-icon-close")
});
$("button.fxg_download-accordion-button").click(function(){$(this).children("span.fxg-download-accordion__carot-icon").toggleClass("fxg-download-accordion_carot-icon-open");
if($(this).siblings(".fxg__download__accordion-panel").hasClass("fxg__download__accordion-panel-display")){$(this).siblings(".fxg__download__accordion-panel").addClass("fxg__download__accordion-panel-no-display").removeClass("fxg__download__accordion-panel-display")
}else{$(this).siblings(".fxg__download__accordion-panel").addClass("fxg__download__accordion-panel-display").removeClass("fxg__download__accordion-panel-no-display")
}})
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