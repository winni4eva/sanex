if(!FDX){var FDX={}
}FDX.SHIPPINGROUTING={isSecure:false,wifmUrlPath:"",magsUrlPath:"",mBoxId:"",clientId:"",fclaPagePath:"",loginCheck:"",loginData:"",url:"",defaultAccount:"",loginData2:"",authCallResult:"",userCheck:false,setSecureClientId:function(a){FDX.SHIPPINGROUTING.isSecure=a
},setPaths:function(e,a,c,b,d){FDX.SHIPPINGROUTING.wifmUrlPath=e;
FDX.SHIPPINGROUTING.magsUrlPath=a;
FDX.SHIPPINGROUTING.mBoxId=c;
FDX.SHIPPINGROUTING.fclaPagePath=b;
FDX.SHIPPINGROUTING.clientId=d
},valShippingAccount:function(d){var a='{"userName":"","password":""}';
var c=JSON.parse(a);
c.userName=d.user;
c.password=d.pwd;
a=JSON.stringify(c);
var c=JSON.parse(a);
if(localStorage.getItem("loginDataStorage")==null){FDX.CLIENTLOGIN.getOAuthToken()
}var e=JSON.parse(localStorage.getItem("loginDataStorage"));
var b=new Date(Date.parse(e.tokenExpireTime));
if(Date.now()>b.getTime()){console.log("*** Shipping login inside condition check");
FDX.SHIPPINGROUTING.loginCheck=true;
FDX.CLIENTLOGIN.getOAuthToken()
}$.ajax({type:"POST",url:"https://"+FDX.SESSION.apiURL+"/user/v2/login/validate",xhrFields:{withCredentials:true},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e.token,"X-locale":"en_US","X-loggedin":"true","X-version":"1.0","X-clientid":FDX.SHIPPINGROUTING.clientId},data:a,dataType:"json",success:function(f){window.history.pushState({url:""+window.location.href+""},"",window.location.href);
FDX.SHIPPINGROUTING.evlUrl(f)
},error:function(i,g,j){var l=JSON.parse(i.responseText).errors[0].code;
if(l=="LOGIN.INCOMPLETE.USER"){window.history.pushState({url:""+window.location.href+""},"",window.location.href);
window.open(FDX.SHIPPINGROUTING.fclaPagePath,"_self","",true)
}else{if(l=="LOGIN.UNSUCCESSFULTYPE.ERROR"&&i.responseJSON.errors&&i.responseJSON.errors.length>0&&i.responseJSON.errors[0].message){FDX.LOGIN.loginFailedMessage=decodeURIComponent(escape(i.responseJSON.errors[0].message));
FDX.LOGIN.showErrorMessage();
FDX.SESSION.setTargetRedirectAuth(false)
}else{if(l==="1000"&&i.responseJSON.errors&&i.responseJSON.errors.length>0&&i.responseJSON.errors[0].message){var m=i.responseJSON.errors[0].message;
var h=window.location.origin+FDX.contextPath;
var f="/"+FDX.DATALAYER.page.pageInfo.locale.replace("_","-")+"/";
var k=h+f+"customer-support.html";
m=i.responseJSON.errors[0].message.replace("{0}",k);
m=i.responseJSON.errors[0].message.replace("{1}","customer-support");
m=i.responseJSON.errors[0].message.replace("{2}","_self");
FDX.LOGIN.loginFailedMessage=decodeURIComponent(escape(m));
FDX.LOGIN.showErrorMessage();
FDX.SESSION.setTargetRedirectAuth(false)
}else{if(typeof(l)!==undefined&&l!==null&&i.responseJSON.errors&&i.responseJSON.errors.length>0&&i.responseJSON.errors[0].message){FDX.LOGIN.loginFailedMessage=decodeURIComponent(escape(i.responseJSON.errors[0].message));
FDX.LOGIN.showErrorMessage();
FDX.SESSION.setAuthenticated(false)
}else{FDX.LOGIN.loginFailedMessage="Sorry. Something went wrong. Please re-enter your user name and password to try again.";
FDX.LOGIN.showErrorMessage();
FDX.SESSION.setAuthenticated(false)
}}}}}})
},doAPIShipingUserisLoggedIn:function(a){var b=JSON.parse(localStorage.getItem("loginDataStorage"));
$.ajax({type:"GET",url:"https://"+FDX.SESSION.apiURL+"/user/v2/login",xhrFields:{withCredentials:true},cache:false,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b.token,"X-locale":"en_US","X-loggedin":"true","X-version":"1.0","X-clientid":"LSHP"},success:function(d){FDX.CLIENTLOGIN.isLoggedInResponse=d;
FDX.CLIENTLOGIN.userLoggedIn=FDX.CLIENTLOGIN.isLoggedInResponse.output.userLoggedIn;
if(FDX.CLIENTLOGIN.userLoggedIn){$(".fxg-user-options__option.fxg-user-options__sign-in").addClass("fxg-dropdown__item--open");
window.history.pushState({url:""+window.location.href+""},"",window.location.href);
FDX.SHIPPINGROUTING.evlUrl(d)
}else{FDX.SESSION.setTargetRedirectAuth(false);
FDX.SESSION.setUserModel(null);
FDX.SESSION.userAuthenticated=false;
FDX.SESSION.destroyLogedInState();
var c=new Date();
uuid={UUID:FDX.SESSION.getUUID()};
eventData={eventData:uuid,eventAction:"State Verification Anonymous",type:"authentication",effect:"Indication anonymous state notification on page load",timestamp:c.toUTCString()};
FDX.DATALAYER.event.push(eventData)
}},error:function(d,c,e){FDX.SESSION.setTargetRedirectAuth(false);
window.history.pushState({url:""+window.location.href+""},"",window.location.href);
window.open(FDX.SHIPPINGROUTING.fclaPagePath,"_self","",true)
}})
},evlUrl:function(msg){FDX.SHIPPINGROUTING.loginData2=msg;
FDX.SHIPPINGROUTING.isManaged=FDX.SHIPPINGROUTING.loginData2.output.userProfile.isManaged;
FDX.SHIPPINGROUTING.defaultAccount=FDX.SHIPPINGROUTING.loginData2.output.userProfile.defaultAccount;
FDX.SESSION.setTargetRedirectAuth(true);
FDX.UTILNAV.showShippingContactName(FDX.SHIPPINGROUTING.loginData2.output.userProfile.registeredContactAndAddress.contact.personName.firstName);
localStorage.setItem("targetUserAuthenticated",true);
FDX.LOGINCONTAINER.hideContainer();
FDX.UTILNAV.showAuthenticatedState();
FDX.DROPDOWN.closeAllDropdowns();
FDX.SHIPPINGROUTING.identifyUserLink();
setTimeout(function(){if(FDX.SHIPPINGROUTING.url!=""&&FDX.SHIPPINGROUTING.isSecure){try{eval("window.open(FDX.SHIPPINGROUTING.url,'_self','',true)")
}catch(e){}FDX.SHIPPINGROUTING.url=""
}else{if(FDX.LOGIN.loginResourceFun!=""){try{eval(FDX.LOGIN.loginResourceFun)
}catch(e){}FDX.LOGIN.loginResourceFun=""
}}},2000)
},identifyUserLink:function(){if(typeof(FDX.SHIPPINGROUTING.defaultAccount)==="undefined"){FDX.SHIPPINGROUTING.url=FDX.SHIPPINGROUTING.fclaPagePath
}if(FDX.SHIPPINGROUTING.defaultAccount!=""&&typeof(FDX.SHIPPINGROUTING.defaultAccount)!="undefined"&&FDX.SHIPPINGROUTING.isManaged){FDX.SHIPPINGROUTING.url=FDX.SHIPPINGROUTING.wifmUrlPath
}if(FDX.SHIPPINGROUTING.defaultAccount!=""&&typeof(FDX.SHIPPINGROUTING.defaultAccount)!="undefined"&&!FDX.SHIPPINGROUTING.isManaged){if(FDX.SHIPPINGROUTING.mBoxId){FDX.SHIPPINGROUTING.doMboxAPICall(FDX.SHIPPINGROUTING.mBoxId)
}setTimeout(function(){var a=localStorage.getItem("magsUserCheck");
if(a=="true"){FDX.SHIPPINGROUTING.url=FDX.SHIPPINGROUTING.wifmUrlPath
}else{if(a=="false"){FDX.SHIPPINGROUTING.url=FDX.SHIPPINGROUTING.magsUrlPath
}else{if(a=="default"){FDX.SHIPPINGROUTING.url=FDX.SHIPPINGROUTING.wifmUrlPath
}}}},1000)
}sessionStorage.setItem("targetRediretUrl",FDX.SHIPPINGROUTING.url)
},getValue:function(b,a){var d;
var c=a.length;
d=b.substring(b.indexOf(a)+c);
d=d.substring(d.indexOf("|")+1);
d=d.substring(d,d.indexOf("|"));
return d
},getSessionValue:function(b,c){var d;
if(b.indexOf(c)>=0){var a=c.length;
d=b.substring(b.indexOf(c)+a);
d=d.substring(d,d.indexOf("#"))
}return d
},doMboxAPICall:function(c){var f=FDX.SESSION.getCookie("AMCV_1E22171B520E93BF0A490D44%40AdobeOrg");
var g="";
var l="";
var a="api-mbox";
var d="12345abcde";
var j="";
var k="";
var b="4ba065c0-6b92-13a5-ccc8-2b8cfb21abda";
var i=FDX.SESSION.getCookie("mbox");
var h;
var e;
if(f){f=unescape(f);
g=FDX.SHIPPINGROUTING.getValue(f,"MCMID");
l=g;
j=FDX.SHIPPINGROUTING.getValue(f,"MCAAMB");
k=FDX.SHIPPINGROUTING.getValue(f,"MCAAMLH")
}if(i){e=FDX.SHIPPINGROUTING.getSessionValue(i,"session#");
h=FDX.SHIPPINGROUTING.getSessionValue(i,"PC#")
}if((typeof(e)==="undefined")||c==""||(typeof(h)==="undefined")){FDX.SHIPPINGROUTING.userCheck=false;
localStorage.setItem("magsUserCheck",FDX.SHIPPINGROUTING.userCheck)
}$.ajax("https://fedex.tt.omtrdc.net/rest/v1/mbox/"+e+"?client=fedex",{type:"POST",data:JSON.stringify({mbox:c,tntId:h,marketingCloudVisitorId:g,thirdPartyId:d,mboxParameters:{mboxMCGVID:l,mboxAAMB:j,mboxMCGLH:k,at_property:b}}),headers:{"Content-Type":"application/json","cache-control":"no-cache"},dataType:"json",async:true,crossDomain:true,processData:false,success:function(m){console.log(m);
if(typeof(m.content)==undefined){FDX.SHIPPINGROUTING.userCheck="default";
localStorage.setItem("magsUserCheck",FDX.SHIPPINGROUTING.userCheck)
}if(typeof(m.content)!==undefined&&m.content=="MAGS"){FDX.SHIPPINGROUTING.userCheck="true";
localStorage.setItem("magsUserCheck",FDX.SHIPPINGROUTING.userCheck)
}if(typeof(m.content)!==undefined&&m.content==""){FDX.SHIPPINGROUTING.userCheck="false";
localStorage.setItem("magsUserCheck",FDX.SHIPPINGROUTING.userCheck)
}},error:function(o,m,n){console.log("Exception",m,n);
FDX.SHIPPINGROUTING.userCheck="default";
localStorage.setItem("magsUserCheck",FDX.SHIPPINGROUTING.userCheck)
}})
}};
$(document).ready(function(){});