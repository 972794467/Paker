

function translate(){
    var value = sessionStorage.getItem("language");
    if(value==="1"){
        sessionStorage.setItem("language", "0"); 
    }else{
        sessionStorage.setItem("language", "1");
    }
    window.location.reload();//刷新当前页面.
}

function translateToChinese()
{
    sessionStorage.setItem("language", "1");
    window.location.reload();//刷新当前页面.
}

function translateToEnglish()
{
    sessionStorage.setItem("language", "0");
    window.location.reload();//刷新当前页面.
}