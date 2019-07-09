$(document).ready(function(){$(".search_items").load(function(){});
var h=[];
var e={Provider_Details:{Gold:[{name:"Test_page",path:"/content/fedex-com/global/en_us/Test_page",topicThumbnail:"/content/dam/fedex-com/compatibles/CSSProvider_abol_logo.jpg",topicTitle:"iABOL",topicSynopsis:"A highly configurable, easy scalable and multi-marketplace integration platform that makes shipping easy, the iABOL web-based shipping software is gea"},{name:"Test_page",path:"/content/fedex-com/sites/us/en_us/Test_page",topicThumbnail:"/content/dam/fedex-com/compatibles/CSSProvider_abol_logo.jpg",topicTitle:"iABOL",topicSynopsis:"A highly configurable, easy scalable and multi-marketplace integration platform that makes shipping easy, the iABOL web-based shipping software is gea"}],"More Providers":[{name:"Test Compatible",path:"/content/fedex-com/global/en_us/Test_Compatible",topicThumbnail:"/content/dam/fedex-com/compatibles/CSPProvider_213x120_0052_53_shipworks.jpg",topicTitle:"Ship Works",topicSynopsis:"ShipWorks is a fast, reliable shipping software that makes it easy to manage and ship orders for multiple sales channels all from one simple interface"},{name:"Test Compatible",path:"/content/fedex-com/sites/us/en_us/Test_Compatible",topicThumbnail:"/content/dam/fedex-com/compatibles/CSPProvider_213x120_0052_53_shipworks.jpg",topicTitle:"Ship Works",topicSynopsis:"ShipWorks is a fast, reliable shipping software that makes it easy to manage and ship orders for multiple sales channels all from one simple interface"}],Platinum:[{name:"Logistyx TME",path:"/content/fedex-com/sites/us/en_us/Providers_Sample/LogistyxTME",topicThumbnail:"/content/dam/fedex-com/compatibles/Logistyx_logo_PMS.jpg",topicTitle:"Logistyx TME",topicSynopsis:"A FedExÂ® Compatible Platinum Solution\r\nA comprehensive enterprise platform that helps some of the largest worldwide commerce/distribution companies s"},{name:"InfoShip",path:"/content/fedex-com/sites/us/en_us/Providers_Sample/InfoShip",topicThumbnail:"/content/dam/fedex-com/compatibles/CLS_logo_213x120.jpg",topicTitle:"InfoShip",topicSynopsis:"A FedExÂ® Compatible Platinum Solution\r\n\r\nAn automated multi-carrier shipping system for medium to high volume shippers, InfoShip is easy to use and Wind"}],Diamond:[{name:"CalcPakÂ®",path:"/content/fedex-com/sites/us/en_us/Providers_Sample/CalcPak",topicThumbnail:"/content/dam/fedex-com/compatibles/CSPProvider_213x120_0055_56_ARTraffic.jpg",topicTitle:"CalcPakÂ®",topicSynopsis:"A FedExÂ® Compatible  Solution\r\n\r\n\r\nA comprehensive multi-shipper system, CalcPakÂ® offers streamlined rating, routing and EDI-compatible audit and payment"},{name:"NetSuite",path:"/content/fedex-com/sites/us/en_us/Providers_Sample/NetSuite",topicThumbnail:"/content/dam/fedex-com/compatibles/CSPProvider_213x120_0049_50_Netsuite.jpg",topicTitle:"NetSuite",topicSynopsis:"A FedExÂ® Compatible Platinum Solution\r\n\r\nA powerful cloud solution for entire businesses, NetSuite delivers accounting and Enterprise Resource Planning"}]}};
var b=$("#resultsDiv").val();
var a="";
var f=$("#resultsDiv").attr("value");
var i=($("#searchPath").attr("value"));
$.ajax({url:FDX.contextPath+"/etc/services/compatibleSearch",data:{limit:f,searchPath:i},type:"GET",success:function(j){a=j;
c(a)
},error:function(k,l,j){}});
var g=[];
var d={"Platinum Solutions":0,"Diamond Solutions":0,"Solution of the Year":0,"Community Solutions":0};
function c(l){var n=[];
var m=[];
var k=[];
var o=[];
var j;
if(typeof(l)==="string"){j=$.parseJSON(l)
}else{j=l
}$.each(j,function(p,q){$.each(q,function(r,s){$.each(s,function(t,v){var u={};
u.label=v.name;
u.path=v.path;
u.category=r;
u.topic_thumbnail=v.topicThumbnail;
u.topic_title=v.topicTitle;
u.topic_synopsis=v.topicSynopsis;
switch(r){case"Gold":u.category="Platinum Solutions";
k.push(u);
break;
case"Platinum":u.category="Diamond Solutions";
m.push(u);
break;
case"Diamond":u.category="Solution of the Year";
n.push(u);
break;
case"More Providers":u.category="Community Solutions";
o.push(u);
break
}})
})
});
g.push.apply(g,n);
g.push.apply(g,m);
g.push.apply(g,k);
g.push.apply(g,o)
}$.widget("custom.catcomplete",$.ui.autocomplete,{_create:function(){this._super();
this.widget().menu("option","items","> :not(.ui-autocomplete-category)")
},_renderMenu:function(l,k){var m=$("#fdx_compatibleDropdown");
m.append(l);
$("#fdx_compatibleDropdown").attr("tabindex","-1");
h=[];
h=k;
var n=this,j="";
d={"Platinum Solutions":0,"Diamond Solutions":0,"Solution of the Year":0,"Community Solutions":0};
$.each(k,function(p,q){var o;
if(q.category!=j){l.append("<li class='ui-autocomplete-category' alt='"+q.category+"'>"+q.category+"</li>");
j=q.category
}var r=$("."+q.category);
if(b==0||d[q.category]<b){d[q.category]=d[q.category]+1;
o=n._renderItemData(l,q);
$(o["0"].childNodes["0"]).remove();
$(o["0"]).append('<a href="'+FDX.contextPath+q.path+'.html" target="_blank">'+q.label+"</a>");
if(q.category){o.attr("aria-label",q.category+" : "+q.label);
o.attr("class",q.category);
o.attr("alt",q.category+" "+q.label);
o.attr("class","search_item")
}}})
}});
$("#searchbox_id").focus(function(){$(".fdx_compatible_searchFilter").click()
});
$(".fdx_compatible_searchFilter").catcomplete({delay:0,source:g,minLength:0}).select(function(j){j.preventDefault();
$(this).catcomplete("search")
}).focus(function(j){j.preventDefault();
$(this).catcomplete("search")
});
$(".fdx_compatible_searchFilter").on("keypress",function(r){d={"Platinum Solutions":0,"Diamond Solutions":0,"Solution of the Year":0,"Community Solutions":0};
var u=r.which;
$("#ui-id-1").css({height:"auto"});
if(u==13){r.preventDefault();
$(".lstEntitlements").html("");
$(".provider-count").html("");
populated_value=$(".fdx_compatible_searchFilter").val();
if(populated_value!==""){new_selected={};
new_selected=_.find(h,function(k){return k.value===populated_value
});
if(typeof new_selected!=="undefined"){h=[];
h=new_selected;
url=new_selected.path;
window.open(FDX.contextPath+url+".html","_blank");
return true
}}nobj={};
$.each(h,function(k,v){nobj[v.category]=[]
});
$.each(h,function(k,v){nobj[v.category].push(v)
});
var t=nobj;
var o=0;
var m=0;
var n;
var l;
var p;
var j;
var q=[];
var s=[];
$.each(t,function(k,v){if(k=="Diamond"){adiamondProvidersF=v;
q[0]=adiamondProvidersF
}else{if(k=="Platinum"){bplatinumProvidersF=v;
q[1]=bplatinumProvidersF
}else{if(k=="Gold"){cgoldProvidersF=v;
q[2]=cgoldProvidersF
}else{if(k=="More-Providers"){dmoreProvidersF=v;
q[3]=dmoreProvidersF
}}}}});
q.map(function(k){var v=["Diamond","Platinum","Gold","More-Providers"];
if(k.length){$(".lstEntitlements").append("<div class='filter_provider_"+m+" subDiv'></div>");
$(".filter_provider_"+m).append("<h3 class='Certified-"+v[q.indexOf(k)]+"-Providers headers' alt='Certified "+v[q.indexOf(k)]+" Providers'>Certified "+v[q.indexOf(k)]+" Providers</h3>");
k.map(function(w){$(".filter_provider_"+m).append("<div class='resultTags_"+o+" col-md-3 subblock'></div>");
$(".resultTags_"+o).append("<img class='provider-thumbnail' src="+FDX.contextPath+w.topic_thumbnail+" alt='"+w.topic_title+"' ><h3 class='provider-title' alt='"+w.topic_title+"'>"+w.topic_title+"</h3><p class='provider-des block_txt'>"+w.topic_synopsis+"</p><a class='see_details' target='_blank' href='"+FDX.contextPath+w.path+".html'>SEE DETAILS</a>");
o++
});
$(".filter_provider_"+m).append("<hr class='horzion container'>");
m++
}})
}});
$(".search_item").children().delegate("keypress",function(k){var j=k.which;
if(j==13){window.open(k.children()[0]["href"],"_blank")
}});
$("#compatible_cross").click(function(){$(".fdx_compatible_searchFilter").val("");
$(".lstEntitlements").html("");
$(".provider-count").html("")
});
$("#compatible_cross").keypress(function(j){if(j.which==13){$("#compatible_cross").click()
}});
$(".enclosure").focusout(function(){})
});
function clearfunction(){document.getElementById("searchbox_id").value=""
};