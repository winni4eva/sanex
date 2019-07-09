function setTooltipPositionFilter(){var d=$(".fxg-content-page");
var b=$(window).width()<768;
var c,a;
if($(".demo-text-filter .fxg-tooltip__content").hasClass("fxg-tooltip__content--open")){c=true
}if($(".demo-text-mobile-filter .fxg-tooltip__content").hasClass("fxg-tooltip__content--open")){a=true
}$(".fxg-tooltip").each(function(){var e=$(this);
var f=$(this).find(".fxg-tooltip__content");
if(d.height()+f.outerHeight()<e.position().top){f.css("top",-f.outerHeight()-10)
}if(b){if(c=true){$(".demo-text-filter").find(".fxg-tooltip__icon").removeClass("fxg-tooltip__icon--close");
$(".demo-text-filter .fxg-tooltip__content").removeClass("fxg-tooltip__content--open")
}if(!f.hasClass("fxg-tooltip__content--large")){f.css("left",-$(this).position().left+15);
f.css("width",$(window).width()-100)
}}else{if(a=true){$(".demo-text-mobile-filter").find(".fxg-tooltip__icon").removeClass("fxg-tooltip__icon--close");
$(".demo-text-mobile-filter .fxg-tooltip__content").removeClass("fxg-tooltip__content--open")
}f.css("top","31");
f.removeAttr("style")
}})
}$(document).ready(function(){$(window).on("resize",setTooltipPositionFilter).trigger("resize");
var c=$(window).width()<768;
var i=$(".fxg-tooltip");
i.find(".fxg-tooltip__icon").on("click",function(){var a=$(this);
var s=a.parent().find(".fxg-tooltip__content");
a.toggleClass("fxg-tooltip__icon--close");
s.toggleClass("fxg-tooltip__content--open");
i.find(".fxg-tooltip__content").not(s).removeClass("fxg-tooltip__content--open").parent().find(".fxg-tooltip__icon").removeClass("fxg-tooltip__icon--close")
});
$(document).on("mousedown",function(a){var s=$(a.target);
if(!s.hasClass("fxg-tooltip__icon")&&!s.hasClass("fxg-tooltip__content")&&!s.parents(".fxg-tooltip__content").hasClass("fxg-tooltip__content")){i.find(".fxg-tooltip__content").removeClass("fxg-tooltip__content--open");
i.find(".fxg-tooltip__icon").removeClass("fxg-tooltip__icon--close")
}});
$(".fxg-tooltip__close").on("click",function(){i.find(".fxg-tooltip__content").removeClass("fxg-tooltip__content--open");
i.find(".fxg-tooltip__icon").removeClass("fxg-tooltip__icon--close");
$(this).parent(".fxg-tooltip__content").removeClass("fxg-tooltip__content--open");
$(this).parent(".fxg-tooltip__content").removeClass("fxg-tooltip__icon--close");
$("body").css({overflow:"auto"})
});
$(".fxg-tooltip__close").on("keydown",function(a){if(a.which==13){i.find(".fxg-tooltip__content").removeClass("fxg-tooltip__content--open");
i.find(".fxg-tooltip__icon").removeClass("fxg-tooltip__icon--close");
$(this).parent(".fxg-tooltip__content").removeClass("fxg-tooltip__content--open");
$(this).parent(".fxg-tooltip__content").removeClass("fxg-tooltip__icon--close");
$("body").css({overflow:"auto"})
}});
$(".fxg-tooltip__paragraph").on("keydown",function(a){if($(this).is(":last-child")&&(a.which==9)){$(".fxg-tooltip__close").click()
}});
$(".demo-text-mobile-filter .fxg-tooltip__icon").on("keydown",function(a){if(a.which==13){$(this).click();
$(this).parent().siblings(".fxg-tooltip__content").find(".fxg-tooltip__close").focus()
}});
$(".demo-text-filter .fxg-tooltip__icon").on("keydown",function(a){if(a.which==13){$(this).click()
}});
$(".demo-text-mobile-filter .fxg-tooltip__icon").on("click",function(a){$(".fxg-tooltip__icon").parent().siblings(".fxg-tooltip__content").toggleClass("fxg-tooltip__content--open");
$(".fxg-tooltip__content").css({position:"fixed","z-index":"1"});
$(".fxg-tooltip__icon").parent().closest(".fxg-tooltip__content--large").css({width:"calc(100vw) !important"});
$("body").css({overflow:"hidden"});
$(this).parent().siblings(".fxg-tooltip__content").find(".fxg-tooltip__close").focus()
});
var l="";
var d="";
var m=[];
var q=[];
if($(".fxg__filter-type").attr("id")=="true"){$(".fxg__filter-type-check").each(function(){$(this).parents(".tagD").removeClass("fxg__filter_component-container").addClass("fxg__filter_component-container-Checkbox");
$(this).siblings(".fxg__filter-pillbutton-model").first().addClass("fxg__filter-pillbutton-model-none");
$(this).siblings(".fxg__filter-checkbox-model").first().addClass("fxg__filter-checkbox-model-display");
var t=$(this).prev(".fxg__filter-checkbox-json").first().attr("id");
if(t){var a=JSON.parse(t);
var s;
for(s=0;
s<a.tagdetails.length;
s++){$(this).siblings(".fxg__filter-checkbox-model").first().find("ul.filter-menu-lists-checkbox").append('<li tabindex = "0" class="drop-option fxg_checkbox-list fxg-checbox-displayed-lis"  value='+a.tagdetails[s].tagid+' aria-label="'+a.tagdetails[s].title+" press space bar to slect "+a.tagdetails[s].title+' and its children"><label class="checkbox-inline"><input class="fxg__filter-parent-input-checkbox" type="checkbox" value="companies"><span class="checkmark_download fxg__filter-parent_checkbox-span" tabindex="0" value='+a.tagdetails[s].tagid+' aria-label="'+a.tagdetails[s].title+" press space bar to slect "+a.tagdetails[s].title+' and its children"></span></label><div class="parent-li-item-div"><div class="fxg__filter-checkbox-ulText">'+a.tagdetails[s].title+'</div><div class="fxg__filter-checkbox-plus"><svg width="18px" height="18px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --><title>Group</title><desc>Created with Sketch.</desc><defs></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Compatible3Desktop" transform="translate(-895.000000, -589.000000)" stroke="#4D148C"><g id="Group" transform="translate(896.000000, 590.000000)"><g id="QuestionMarkIcon-Copy-2"><path d="M9,18 C4.029408,18 0,13.970592 0,9 C0,4.029408 4.029408,0 9,0 C13.970592,0 18,4.029408 18,9 C18,13.970592 13.970592,18 9,18 Z" id="Fill-1"></path> </g><path d="M5.3590262,5.14959589 L13.0729184,12.5281014" id="Line" stroke-linecap="square" transform="translate(9.215972, 8.838849) rotate(45.000000) translate(-9.215972, -8.838849) "></path><path d="M13.0729184,5.14959589 L5.3590262,12.5281014" id="Line-Copy" stroke-linecap="square" transform="translate(9.215972, 8.838849) rotate(45.000000) translate(-9.215972, -8.838849) "></path></g></g></g></svg></div><div class="fxg__filter-checkbox-minus"><svg width="18px" height="18px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --> <title>Group</title><desc>Created with Sketch.</desc><defs></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Compatible3Desktop" transform="translate(-895.000000, -268.000000)" stroke="#4D148C"><g id="Group" transform="translate(896.000000, 269.000000)"><g id="QuestionMarkIcon-Copy-2"><path d="M9,18 C4.029408,18 0,13.970592 0,9 C0,4.029408 4.029408,0 9,0 C13.970592,0 18,4.029408 18,9 C18,13.970592 13.970592,18 9,18 Z" id="Fill-1"></path></g><path d="M13.0729184,5.14959589 L5.3590262,12.5281014" id="Line-Copy" stroke-linecap="square" transform="translate(9.215972, 8.838849) rotate(45.000000) translate(-9.215972, -8.838849) "></path></g></g></g></svg></div></div></li>');
if(a.tagdetails[s].chidTagsDetails.length>0){$(this).siblings(".fxg__filter-checkbox-model").first().find("ul.filter-menu-lists-checkbox").find("li.fxg_checkbox-list").each(function(){if($(this).index()==s){$(this).append('<ul class="fxg_checkbox-list-sub-ul"></ul>');
for(var u=0;
u<a.tagdetails[s].chidTagsDetails.length;
u++){$(this).find("ul.fxg_checkbox-list-sub-ul").append('<li tabindex = "0" class="fxg_checkbox-list-sub-li" value='+a.tagdetails[s].chidTagsDetails[u].childTagid+' aria-label="'+a.tagdetails[s].chidTagsDetails[u].childTitle+" press space bar to select "+a.tagdetails[s].chidTagsDetails[u].childTitle+'"><label class="checkbox-inline fxg__filter-subLi-checkbox"><input class="fxg__filter-children-input-checkbox" type="checkbox" value="amazon"><span class="checkmark_download fxg__filter-children_checkbox-span" tabindex="0" value='+a.tagdetails[s].chidTagsDetails[u].childTagid+' aria-label="'+a.tagdetails[s].chidTagsDetails[u].childTitle+" press space bar to select "+a.tagdetails[s].chidTagsDetails[u].childTitle+'"></span></label><div class="children-li-item-div">'+a.tagdetails[s].chidTagsDetails[u].childTitle+"</div></li>")
}}})
}if(a.tagdetails[s].chidTagsDetails.length==0){$(this).siblings(".fxg__filter-checkbox-model").first().find("ul.filter-menu-lists-checkbox > li:last-child").find(".fxg__filter-checkbox-plus").html("");
$(this).siblings(".fxg__filter-checkbox-model").first().find("ul.filter-menu-lists-checkbox > li:last-child").find(".fxg__filter-checkbox-minus").html("");
$(this).siblings(".fxg__filter-checkbox-model").first().find("ul.filter-menu-lists-checkbox > li:last-child").find("span.fxg__filter-parent_checkbox-span").attr("aria-label",a.tagdetails[s].title+" press space bar to slect "+a.tagdetails[s].title)
}}}})
}$(".parent-li-item-div").click(function(){$(this).siblings("ul.fxg_checkbox-list-sub-ul").toggleClass("fxg_checkbox-list-sub-ul-display");
$(this).siblings("ul.fxg_checkbox-list-sub-ul").find("li.fxg_checkbox-list-sub-li").each(function(){$(this).toggleClass("fxg-checbox-displayed-lis")
});
$(this).parents("ul.filter-menu-lists-checkbox").find("li.fxg-checbox-displayed-lis").each(function(a){$(this).attr("id",a)
});
$(this).find(".fxg__filter-checkbox-plus").toggleClass("fxg__filter-hide-plus");
$(this).find(".fxg__filter-checkbox-minus").toggleClass("fxg__filter-display-minus")
});
$(".fxg_checkbox-list").keydown(function(a){if(a.which==13){$(this).find("ul.fxg_checkbox-list-sub-ul").toggleClass("fxg_checkbox-list-sub-ul-display");
$(this).find("ul.fxg_checkbox-list-sub-ul").find("li.fxg_checkbox-list-sub-li").each(function(){$(this).toggleClass("fxg-checbox-displayed-lis")
});
$(this).parents("ul.filter-menu-lists-checkbox").find("li.fxg-checbox-displayed-lis").each(function(s){$(this).attr("id",s)
});
$(this).find(".fxg__filter-checkbox-plus").toggleClass("fxg__filter-hide-plus");
$(this).find(".fxg__filter-checkbox-minus").toggleClass("fxg__filter-display-minus")
}});
var f=false;
var r=0;
var g=0;
$(".fxg__filter-parent_checkbox-span").click(function(){$(this).toggleClass("fxg__filter-parent_checkbox-span-clicked");
if(!$(this).hasClass("fxg__filter-parent_checkbox-span-clicked")){var s=$(this).attr("value");
q.splice(q.indexOf(s),1);
if(f){f=false;
$(this).parents("li").find("ul.fxg_checkbox-list-sub-ul").children("li").each(function(){if($(this).find(".fxg__filter-children_checkbox-span").hasClass("fxg__filter-children_checkbox-span-clicked")){$(this).find(".fxg__filter-children_checkbox-span").click();
if(q.indexOf($(this).attr("value"))!=-1){var t=$(this).attr("value");
q.splice(q.indexOf(t),1)
}}})
}}else{if($(this).hasClass("fxg__filter-parent_checkbox-span-clicked")){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".selectedPara").html("");
q.push($(this).attr("value"));
$(this).parents("li").find("ul.fxg_checkbox-list-sub-ul").children("li").each(function(){if(!$(this).find(".fxg__filter-children_checkbox-span").hasClass("fxg__filter-children_checkbox-span-clicked")){$(this).find(".fxg__filter-children_checkbox-span").click();
if(q.indexOf($(this).attr("value"))==-1){q.push($(this).attr("value"))
}}})
}}var a=0;
$(this).parents("ul.filter-menu-lists-checkbox").find(".fxg__filter-parent_checkbox-span-clicked").each(function(){a++
});
$(this).parents("ul.filter-menu-lists-checkbox").find(".fxg__filter-children_checkbox-span-clicked").each(function(){a++
});
if(a>0){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".defaultPara").removeClass("defaultPara").addClass("fxg__filter-checkbox__squeezedPara");
$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".fxg_-filter-carot-div").addClass("carot-checkbox-selection-div");
if(a==1){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".selectedCatPara").html(a+" Service Selected")
}else{if(a>1){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".selectedCatPara").html(a+" Services Selected")
}}}else{if(a==0){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".fxg__filter-checkbox__squeezedPara").removeClass("fxg__filter-checkbox__squeezedPara").addClass("defaultPara");
$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".selectedCatPara").html("");
$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".fxg_-filter-carot-div").removeClass("carot-checkbox-selection-div")
}}d=q.toString();
n(d)
});
$(".fxg__filter-children_checkbox-span").click(function(){$(this).toggleClass("fxg__filter-children_checkbox-span-clicked");
if($(this).hasClass("fxg__filter-children_checkbox-span-clicked")){var t=0;
var u=0;
$(this).parents("li.fxg_checkbox-list").find(".fxg__filter-children_checkbox-span").each(function(){t++;
if($(this).hasClass("fxg__filter-children_checkbox-span-clicked")){u++
}});
if(u==t){f=true;
if(!$(this).parents("li.fxg_checkbox-list").find(".fxg__filter-parent_checkbox-span").hasClass("fxg__filter-parent_checkbox-span-clicked")){$(this).parents("li.fxg_checkbox-list").find(".fxg__filter-parent_checkbox-span").click()
}}if(q.indexOf($(this).attr("value"))==-1){q.push($(this).attr("value"))
}}else{if(!$(this).hasClass("fxg__filter-children_checkbox-span-clicked")){f=false;
var s=$(this).attr("value");
q.splice(q.indexOf(s),1);
if($(this).parents("li.fxg_checkbox-list").find(".fxg__filter-parent_checkbox-span").hasClass("fxg__filter-parent_checkbox-span-clicked")){$(this).parents("li.fxg_checkbox-list").find(".fxg__filter-parent_checkbox-span").click()
}}}var a=0;
$(this).parents("ul.filter-menu-lists-checkbox").find(".fxg__filter-parent_checkbox-span-clicked").each(function(){a++
});
$(this).parents("ul.filter-menu-lists-checkbox").find(".fxg__filter-children_checkbox-span-clicked").each(function(){a++
});
if(a>0){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".defaultPara").removeClass("defaultPara").addClass("fxg__filter-checkbox__squeezedPara");
$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".fxg_-filter-carot-div").addClass("carot-checkbox-selection-div");
if(a==1){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".selectedCatPara").html(a+" Service Selected")
}else{if(a>1){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".selectedCatPara").html(a+" Services Selected")
}}}else{if(a==0){$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".fxg__filter-checkbox__squeezedPara").removeClass("fxg__filter-checkbox__squeezedPara").addClass("defaultPara");
$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".selectedCatPara").html("");
$(this).parents("ul.filter-menu-lists-checkbox").siblings("button.fxg__filter-checkbox_model-select").find(".fxg_-filter-carot-div").removeClass("carot-checkbox-selection-div")
}}d=q.toString();
n(d)
});
$("ul.filter-menu-lists-checkbox li.fxg_checkbox-list").keydown(function(a){if(a.which==32&&$(this).hasClass("fxg_checkbox-list")){a.preventDefault();
$(this).find("span.fxg__filter-parent_checkbox-span").click();
return false
}});
$("li.fxg_checkbox-list-sub-li").keydown(function(a){if(a.which==32){a.preventDefault();
$(this).find("span.fxg__filter-children_checkbox-span").click();
return false
}});
$(".new-select-imp-filter").each(function(){if($(this).siblings("ul").children("li").attr("value")&&$(this).siblings("ul").children("li").attr("value").indexOf("categories")!=-1){$(this).addClass("defaultButtonfilter")
}});
$(".label1").on("focus",function(){$(".filter-select_imp ul").removeClass("display-dropdown-filter")
});
$(".fxg__filter_pill-background svg").on("focus",function(){$(".filter-select_imp ul").removeClass("display-dropdown-filter")
});
var e;
$(".filter-select_imp button").click(function(a){a.stopPropagation();
$(this).siblings("ul.filter-menu-lists-checkbox").find("li.fxg-checbox-displayed-lis").each(function(s){$(this).attr("id",s)
});
e=0;
$(".fxg_checkbox-list").removeClass("filter-lists-focus");
$("li.fxg_checkbox-list-sub-li").removeClass("filter-lists-focus");
$(".drop-menu-item-filter").removeClass("filter-lists-focus");
$("span.carot-check-filter").removeClass("filter_carot-icon-open");
if($(this).siblings(".display-dropdown-filter").length==0){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).find("span").removeClass("filter_carot-icon-close");
$(this).siblings("ul").addClass("display-dropdown-filter");
$(this).find("span").addClass("filter_carot-icon-open");
$(this).siblings("ul").focus()
}else{$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).find("span").removeClass("filter_carot-icon-open");
$(this).find("span").addClass("filter_carot-icon-close")
}});
$(".filter-select_imp button").on("keydown",function(a){if(a.which==13){e=0;
event.preventDefault();
event.stopPropagation();
$(this).siblings("ul.filter-menu-lists-checkbox").find("li.fxg-checbox-displayed-lis").each(function(s){$(this).attr("id",s)
});
$(".fxg_checkbox-list").removeClass("filter-lists-focus");
$("li.fxg_checkbox-list-sub-li").removeClass("filter-lists-focus");
$(".drop-menu-item-filter").removeClass("filter-lists-focus");
if($(this).siblings(".display-dropdown-filter").length==0){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).find("span").removeClass("filter_carot-icon-close");
$(this).siblings("ul").addClass("display-dropdown-filter");
$(this).find("span").addClass("filter_carot-icon-open");
$(this).siblings("ul").focus()
}else{$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).find("span").removeClass("filter_carot-icon-open");
$(this).find("span").addClass("filter_carot-icon-close")
}}else{if(a.keyCode==9){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).find("span").removeClass("filter_carot-icon-open");
$(this).find("span").addClass("filter_carot-icon-close")
}}});
$(".new-select-imp-filter").on("keydown",function(a){});
$("ul.filter-menu-lists-checkbox").on("keydown",function(a){if(a.keyCode==40){a.preventDefault();
$(this).children().first().focus()
}else{if(a.keyCode==9){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).siblings().find("span").removeClass("filter_carot-icon-open");
$(this).siblings().find("span").addClass("filter_carot-icon-close")
}}});
$("ul.filter-menu-lists").on("keydown",function(a){if(a.keyCode==40){a.preventDefault();
$(this).children().first().focus()
}else{if(a.keyCode==9){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).siblings().find("span").removeClass("filter_carot-icon-open");
$(this).siblings().find("span").addClass("filter_carot-icon-close")
}}});
$("li.drop-menu-item-filter").on("focus",function(){$(this).addClass("filter-lists-focus").siblings().removeClass("filter-lists-focus")
}).on("keydown",function(a){if(a.keyCode==40){$(this).next().focus();
return false
}else{if(a.keyCode==38){$(this).prev().focus();
return false
}}});
$("li.fxg-checbox-displayed-lis").on("focus",function(){}).on("keydown",function(s){if(s.keyCode==40){var a=0;
$(this).parents("ul.filter-menu-lists-checkbox").find("li.fxg-checbox-displayed-lis").each(function(t){a++
});
if(e<(a)-1){e++
}$(this).parents("ul.filter-menu-lists-checkbox").find("li.fxg-checbox-displayed-lis").each(function(){if($(this).attr("id")==e){$(this).focus()
}});
return false
}else{if(s.keyCode==38){if(e>0){e--
}$(this).parents("ul.filter-menu-lists-checkbox").find("li.fxg-checbox-displayed-lis").each(function(){if($(this).attr("id")==e){$(this).focus()
}});
return false
}}return false
});
$("li").on("keydown",function(a){if(a.keyCode==9){$(this).parents(".tagD").siblings(".fxg__filter-results-in-pills").focus();
$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).parent("ul").siblings().find("span").removeClass("filter_carot-icon-open");
$(this).parent("ul").siblings().find("span").addClass("filter_carot-icon-close")
}});
$(".filter-select_imp ul > li:last-child").keydown(function(a){if(a.which==9){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).find("span").removeClass("filter_carot-icon-open");
$(this).find("span").addClass("filter_carot-icon-close")
}});
$(".shipping a").click(function(){var a=$(".shipping").attr("id");
window.open(FDX.contextPath+a+".html","_blank")
});
$(document).click(function(){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).find("span").removeClass("filter_carot-icon-open");
$(this).find("span").addClass("filter_carot-icon-close")
});
$(".filter-menu-lists-checkbox").click(function(a){a.stopPropagation()
});
var p;
var b;
var k={};
var j=[];
var o=$(".search-path-filter").attr("id");
$(".drop-menu-item-filter").click(function h(s){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).parent("ul").siblings().find("span").removeClass("filter_carot-icon-open");
$(this).parent("ul").siblings().find("span").addClass("filter_carot-icon-close");
b=$(this).parents("ul").siblings().attr("id");
if($(this).attr("value").indexOf("categories")!=-1){$(this).parents("ul").siblings().find(".selectedPara").html($(this).text());
$(this).parents("ul").siblings().find(".defaultPara").removeClass("defaultPara").addClass("squeezedPara");
var A=$(this).attr("value");
for(var x=0;
x<m.length;
x++){if(m[x].indexOf("categories")!=-1){l=l.replace(m[x]+",","");
m.splice(x,1)
}}if(A.indexOf(":")>0){l=l+A+","
}m.push($(this).attr("value"))
}else{if($("#selected_"+$(this).parents("ul").siblings().attr("id")).is(":empty")){var A=$(this).attr("value");
if(A.indexOf(":")>0){l=l+A+","
}var a=$(this).text();
var v=a.length;
var y=$(this).text();
var w="<span class='text-width-check'>"+y+"</span>";
var u=$(".text-width-check").width();
$("#selected_"+$(this).parents("ul").siblings().attr("id")).append('<span class="calculate-text-length" hidden>'+$(this).text()+"</span>");
var B=((v-(4))+73+$("#selected_"+$(this).parents("ul").siblings().attr("id")).find("span.calculate-text-length").width());
$("span.calculate-text-length").remove();
$("#selected_"+$(this).parents("ul").siblings().attr("id")).append('<div  class="delete_align help01" id="'+$(this).attr("value")+'"><div class="fxg__filter_pill-background"><svg aria-label= "'+$(this).text()+'" preserveAspectRatio = "none"  focusable = "true" tabindex= 0  width='+B+' height="46px" viewBox="0 0 255 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect id="path-1" x="855" y="405" width="250" height="46" rx="23"></rect></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Buttons" transform="translate(-855.000000, -405.000000)"><g id="Rectangle-616-Copy-3"><use fill="#F2F2F2" fill-rule="evenodd" xlink:href="#path-1"></use><rect stroke="#F2F2F2" fill="#F2F2F2" stroke-width="1.5" x="855.75" y="405.75" width="250" height="44.5" rx="22.25"></rect></g></g></g></svg></div><div class="fxg__filter-pill-text-remove"><div class="fxg__filter-pill-text-div"><span class="fxg__filter-pill-text">'+$(this).text()+'</span></div><span class= "fxg__filter-closebutton"><svg  aria-label= "remove '+$(this).text()+'" focusable = "true" tabindex = 0 class="negative-icon" width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Sketch.</desc><defs></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="System-Notification---Gray" transform="translate(-1123.000000, -25.000000)" stroke="#333333"><g id="Line-+-Line-Copy-15" transform="translate(1132.000000, 34.000000)" stroke-linecap="square" stroke-width="1.5"><path d="M0.25,0.0606107726 L10.8566017,10.2060559" id="Line"></path><path d="M10.8566017,0.0606107726 L0.25,10.2060559" id="Line-Copy"></path></g><circle  id="Oval-125-Copy-6" cx="1137" cy="39" r="13"></circle></g></g></svg></div></div>');
m.push($(this).attr("value"))
}else{var t=$(this).text();
var z=0;
$("#selected_"+$(this).parents("ul").siblings().attr("id")).each(function(){$(".delete_align").each(function(){});
var C=$(this).find(".delete_align").text().split(" ");
var D=$(this).find(".delete_align").text().search(t);
if(D!=-1){z=1
}});
if(z==0){var A=$(this).attr("value");
if(A.indexOf(":")>0){l=l+A+","
}var a=$(this).text();
var v=a.length;
$("#selected_"+$(this).parents("ul").siblings().attr("id")).append('<span class="calculate-text-length" hidden>'+$(this).text()+"</span>");
var B=((v-(4))+73+$("#selected_"+$(this).parents("ul").siblings().attr("id")).find("span.calculate-text-length").width());
$("span.calculate-text-length").remove();
$("span.calculate-text-length").remove();
$("#selected_"+$(this).parents("ul").siblings().attr("id")).append('<div  class="delete_align help01" id="'+$(this).attr("value")+'"><div class="fxg__filter_pill-background"><svg aria-label= "'+$(this).text()+'" preserveAspectRatio = "none" focusable = "true" tabindex= 0  width='+B+' height="46px" viewBox="0 0 255 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect id="path-1" x="855" y="405" width="250" height="46" rx="23"></rect></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Buttons" transform="translate(-855.000000, -405.000000)"><g id="Rectangle-616-Copy-3"><use fill="#F2F2F2" fill-rule="evenodd" xlink:href="#path-1"></use><rect stroke="#F2F2F2" fill="#F2F2F2" stroke-width="1.5" x="855.75" y="405.75" width="250" height="44.5" rx="22.25"></rect></g></g></g></svg></div><div class="fxg__filter-pill-text-remove"><div class="fxg__filter-pill-text-div"><span class="fxg__filter-pill-text">'+$(this).text()+'</span></div><span class= "fxg__filter-closebutton"><svg aria-label= "remove '+$(this).text()+'" focusable = "true" tabindex = 0 class="negative-icon" width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Sketch.</desc><defs></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="System-Notification---Gray" transform="translate(-1123.000000, -25.000000)" stroke="#333333"><g id="Line-+-Line-Copy-15" transform="translate(1132.000000, 34.000000)" stroke-linecap="square" stroke-width="1.5"><path d="M0.25,0.0606107726 L10.8566017,10.2060559" id="Line"></path><path d="M10.8566017,0.0606107726 L0.25,10.2060559" id="Line-Copy"></path></g><circle  id="Oval-125-Copy-6" cx="1137" cy="39" r="13"></circle></g></g></svg></div></div>');
m.push($(this).attr("value"))
}}}p=$(this).attr("value");
n(l)
});
$(".drop-menu-item-filter").on("keydown",function(w){if(w.which==13){$(".filter-select_imp ul").removeClass("display-dropdown-filter");
$(this).parent("ul").siblings().find("span").removeClass("filter_carot-icon-open");
$(this).parent("ul").siblings().find("span").addClass("filter_carot-icon-close");
b=$(this).parents("ul").siblings().attr("id");
if($(this).attr("value").indexOf("categories")!=-1){$(this).parents("ul").siblings().find(".selectedPara").html($(this).text());
$(this).parents("ul").siblings().find(".defaultPara").removeClass("defaultPara").addClass("squeezedPara");
var y=$(this).attr("value");
for(var t=0;
t<m.length;
t++){if(m[t].indexOf("categories")!=-1){l=l.replace(m[t]+",","");
m.splice(t,1)
}}if(y.indexOf(":")>0){l=l+y+","
}m.push($(this).attr("value"))
}else{if($("#selected_"+$(this).parents("ul").siblings().attr("id")).is(":empty")){var y=$(this).attr("value");
if(y.indexOf(":")>0){l=l+y+","
}var x=$(this).text();
var u=x.length;
$("#selected_"+$(this).parents("ul").siblings().attr("id")).append('<span class="calculate-text-length" hidden>'+$(this).text()+"</span>");
var s=((u-(4))+73+$("#selected_"+$(this).parents("ul").siblings().attr("id")).find("span.calculate-text-length").width());
$("span.calculate-text-length").remove();
$("span.calculate-text-length").remove();
$("#selected_"+$(this).parents("ul").siblings().attr("id")).append('<div  class="delete_align help01" id="'+$(this).attr("value")+'"><div class="fxg__filter_pill-background"><svg aria-label= "'+$(this).text()+'" preserveAspectRatio = "none" focusable = "true" tabindex= 0  width='+s+' height="46px" viewBox="0 0 255 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect id="path-1" x="855" y="405" width="250" height="46" rx="23"></rect></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Buttons" transform="translate(-855.000000, -405.000000)"><g id="Rectangle-616-Copy-3"><use fill="#F2F2F2" fill-rule="evenodd" xlink:href="#path-1"></use><rect stroke="#F2F2F2" fill="#F2F2F2" stroke-width="1.5" x="855.75" y="405.75" width="250" height="44.5" rx="22.25"></rect></g></g></g></svg></div><div class="fxg__filter-pill-text-remove"><div class="fxg__filter-pill-text-div"><span class="fxg__filter-pill-text">'+$(this).text()+'</span></div><span class= "fxg__filter-closebutton"><svg aria-label= "remove '+$(this).text()+'" focusable = "true" tabindex = 0 class="negative-icon" width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Sketch.</desc><defs></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="System-Notification---Gray" transform="translate(-1123.000000, -25.000000)" stroke="#333333"><g id="Line-+-Line-Copy-15" transform="translate(1132.000000, 34.000000)" stroke-linecap="square" stroke-width="1.5"><path d="M0.25,0.0606107726 L10.8566017,10.2060559" id="Line"></path><path d="M10.8566017,0.0606107726 L0.25,10.2060559" id="Line-Copy"></path></g><circle  id="Oval-125-Copy-6" cx="1137" cy="39" r="13"></circle></g></g></svg></div></div>');
m.push($(this).attr("value"))
}else{var a=$(this).text();
var v=0;
$("#selected_"+$(this).parents("ul").siblings().attr("id")).each(function(){$(".delete_align").each(function(){});
var z=$(this).find(".delete_align").text().split(" ");
var A=$(this).find(".delete_align").text().search(a);
if(A!=-1){v=1
}});
if(v==0){var y=$(this).attr("value");
if(y.indexOf(":")>0){l=l+y+","
}var x=$(this).text();
var u=x.length;
$("#selected_"+$(this).parents("ul").siblings().attr("id")).append('<span class="calculate-text-length" hidden>'+$(this).text()+"</span>");
var s=((u-(4))+73+$("#selected_"+$(this).parents("ul").siblings().attr("id")).find("span.calculate-text-length").width());
$("span.calculate-text-length").remove();
$("span.calculate-text-length").remove();
$("#selected_"+$(this).parents("ul").siblings().attr("id")).append('<div  class="delete_align help01" id="'+$(this).attr("value")+'"><div class="fxg__filter_pill-background"><svg aria-label= "'+$(this).text()+'" preserveAspectRatio = "none" focusable = "true" tabindex= 0  width='+s+' height="46px" viewBox="0 0 255 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect id="path-1" x="855" y="405" width="250" height="46" rx="23"></rect></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Buttons" transform="translate(-855.000000, -405.000000)"><g id="Rectangle-616-Copy-3"><use fill="#F2F2F2" fill-rule="evenodd" xlink:href="#path-1"></use><rect stroke="#F2F2F2" fill="#F2F2F2" stroke-width="1.5" x="855.75" y="405.75" width="250" height="44.5" rx="22.25"></rect></g></g></g></svg></div><div class="fxg__filter-pill-text-remove"><div class="fxg__filter-pill-text-div"><span class="fxg__filter-pill-text">'+$(this).text()+'</span></div><span class= "fxg__filter-closebutton"><svg aria-label= "remove '+$(this).text()+'" focusable = "true" tabindex = 0 class="negative-icon" width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Sketch.</desc><defs></defs><g id="Style" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="System-Notification---Gray" transform="translate(-1123.000000, -25.000000)" stroke="#333333"><g id="Line-+-Line-Copy-15" transform="translate(1132.000000, 34.000000)" stroke-linecap="square" stroke-width="1.5"><path d="M0.25,0.0606107726 L10.8566017,10.2060559" id="Line"></path><path d="M10.8566017,0.0606107726 L0.25,10.2060559" id="Line-Copy"></path></g><circle  id="Oval-125-Copy-6" cx="1137" cy="39" r="13"></circle></g></g></svg></div></div>');
m.push($(this).attr("value"))
}}}p=$(this).attr("value");
n(l)
}});
$(".main__tag__container ").on("click",".negative-icon",function(){var a=$(this).closest(".delete_align").attr("id");
m.splice(m.indexOf(a),1);
$(this).closest(".delete_align").remove();
if(m.length){l=m.toString()+","
}else{l=m.toString()
}n(l)
});
$(".main__tag__container").on("keydown",".negative-icon",function(s){if(s.which==13){var a=$(this).closest(".delete_align").attr("id");
m.splice(m.indexOf(a),1);
$(this).closest(".delete_align").parent().focus();
$(this).closest(".delete_align").remove();
if(m.length){l=m.toString()+","
}else{l=m.toString()
}n(l)
}});
function n(s){$.ajax({type:"GET",url:"/etc/services/gettagjson",data:{tagID:s,searchPath:o},traditional:true,contentType:"application/json",dataType:"text",success:function(y){$(".lstEntitlements").html("");
$(".provider-count").html("");
$(".fxg__filter-zero-results").html("");
var D=$.parseJSON(y);
var z=0;
var w=0;
var x;
var v;
var A;
var t;
var B=[];
var C=[];
if(Object.keys(D).length==0&&s.length>0){$(".fxg__filter-zero-results").html("<span style='color:red'>Your search did not match any available solutions, please adjust your search criteria and try again.</span>")
}var a=false;
var u=false;
$("button.fxg__filter-no_checkbox_model-select").each(function(){if(!($(this).hasClass("defaultButtonfilter"))){if(!$("#selected_"+$(this).attr("id")).is(":empty")){a=true
}}if(($(this).hasClass("defaultButtonfilter"))){if(($(this).find(".selectedPara").is(":empty"))){u=true
}}});
if(!a&&u&&$(".fxg__filter-type").attr("id")!="true"){$(".fxg__filter-zero-results").html("")
}$(".fxg__filter_pill-background").each(function(){$("svg",this).width(($(this).siblings().find(".fxg__filter-pill-text").width()+73))
});
$.each(D,function(E,F){if(E=="Diamond"){adiamondProvidersF=F;
B[0]=adiamondProvidersF
}else{if(E=="Platinum"){bplatinumProvidersF=F;
B[1]=bplatinumProvidersF
}else{if(E=="Gold"){cgoldProvidersF=F;
B[2]=cgoldProvidersF
}else{if(E=="more"){dmoreProvidersF=F;
B[3]=dmoreProvidersF
}else{$(".provider-count").append("<span class='count-span' tabindex = 0 aria-label="+F+">"+F+"</span>")
}}}}});
B.map(function(E){var F=["Solution of the Year","Diamond Solutions","Platinum Solutions","Community Solutions"];
if(E.length){$(".lstEntitlements").append("<div class='filter_provider_"+w+" subDiv'></div>");
$(".filter_provider_"+w).append("<h3 class='result_diamond'> "+F[B.indexOf(E)]+" </h3>");
E.map(function(G){$(".filter_provider_"+w).append("<div class='resultTags_"+z+" col-md-4 col-sm-6 col-lg-4 col-xs-12 subblock'></div>");
$(".resultTags_"+z).append("<img class='provider-thumbnail' src="+FDX.contextPath+G.topicThumbnail+" alt='Provider Image' ><h3 class='provider-title'>"+G.topicTitle+"</h3><p class='provider-des block_txt'>"+G.topicSynopsis+"</p><a class='see_details' target='_blank' href='"+FDX.contextPath+G.path+".html'>SEE DETAILS</a>");
z++
});
$(".filter_provider_"+w).append("<hr class='horzion container'>");
w++
}})
},error:function(a){console.log("Error in fetching the data !!!")
}})
}});