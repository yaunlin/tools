//原生js仿照jq方法
//封装Ajax
/* function ajax(obj){
  //指定提交方式的默认值ֵ
  obj.type = obj.type || "get";
  //设置是否异步，默认为true(异步)
  obj.async = obj.async || true;
  //设置数据的默认值ֵ
  obj.data = obj.data || null;
  if (window.XMLHttpRequest){
    //非ie
    var ajax = new XMLHttpRequest();
  }else{
    //ie
    var ajax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //区分get和post
  if (obj.type == "post"){
    ajax.open(obj.type,obj.url,obj.async);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = toData(obj.data);
    ajax.send(data);
  }else{
    //get test.php?xx=xx&aa=xx
    var url = obj.url+"?"+toData(obj.data);
    ajax.open(obj.type,url,obj.async);
    ajax.send();
  }
 
  ajax.onreadystatechange = function (){
    if (ajax.readyState == 4){
        if (ajax.status>=200&&ajax.status<300 || ajax.status==304){
          if (obj.success){
            obj.success(ajax.responseText);
          }
        }else{
          if (obj.error){
            obj.error(ajax.status);
          }
        }
      }
   }  
}*/

//判断arr是否为一个数组，返回一个bool值ֵ
    function isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }
//判断value是否为一个原生函数，返回一个bool值
    function isFunction(value){
    	  return Object.prototype.toString.call(value) === '[object Function]';
    }
//判断value是否为一个正则，返回一个bool值
    function isRegExp(value){
    	  return Object.prototype.toString.call(value) === '[object RegExp]';
    }    
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
    function cloneObject(obj) {
     // Handle the 3 simple types, and null or undefined,number,string,boolean
    if (obj == null || typeof obj != "object") return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array[1,2,3,4,5] length=5
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0; i < obj.length; i++) {
            copy[i] = cloneObject(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = cloneObject(obj[attr]);
            }
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
    }



// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组

    function uniqArray(arr) {
        //var arr=[1,2,3,4,5,4,3,2];
        var arr2=[];
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<arr2.length;j++){
              if(arr[i]==arr[j]){
              break;
              }
            }
        if(j==arr2.length){
            arr2.push(arr[i]);
        }

        }
    return(arr2);
    }






// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 本例使用正则表达式
    function trim(str){
        return str.replace(/^[" "||"��"]*/,"").replace(/[" "|"��"]*$/, "");
    }




// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
// 其中fn函数可以接受两个参数：item和index
    function output(item, index) {

        console.log(index + ': ' + item)

    }
    function each(arr,output){
        for(var i=0;i<arr.length;i++){

            var item=arr[i];
            var index=i;
            output(item,index);
        }

    }
    //写在原型方法里
    Object.prototype.each=function(output){
        for(var i=0;i<this.length;i++){

            var item=this[i];
            var index=i;
            output(item,index);
        }

    }



// 判断是否为邮箱地址ַ
    function isEmail(emailStr){
        var reg=/^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/;
        var result=reg.test(emailStr);
        if(result){
            alert("ok");
        }else{
            alert("error");
    }

    }



// 判断是否为手机号 /^1[0-9]{10}/
    function isMobilePhone(phone){
        var reg=/^1\d{10}$/;
        if(reg.test(phone)){
            alert('ok');
        }else{
            alert('error');
        }
    }




//获取element相对于浏览器窗口的位置，返回一个对象{x, y}
        function getPosition(element){
            var offsety=0;
            offsety+=element.offsetTop;
            var offsetx=0;
            offsetx+=element.offsetLeft;
            if(element.offsetParent!=null){
                getPosition(element.offsetParent);
            }
            return {Left:offsetx,Top:offsety};
        }


      //项目常见函数封装，基于Jquery

/* 
* DIV或元素居中 
* @return 
*/  
jQuery.fn.mCenterDiv = function () {  
    this.css("position", "absolute");  
    this.css("border", "1px solid #ccc");  
    this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");  
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");  
    this.show(100);  
    return this;  
};  


/* 
* 兼容IE火狐等浏览器的自动跳转 
* @param url 跳转网址 
* @return 
*/  
jQuery.mAutoNav = function (url) {  
    if ($.browser.msie) {  
        var referLink = document.createElement('a');  
        referLink.href = url;  
        document.body.appendChild(referLink);  
        referLink.click();  
    } else {  
        location.href = url;  
    }  
};  
  

/* 
* Table表格奇偶行设置颜色及移动鼠标行变色 
* @param table 表格ID 
* @return 
*/  
jQuery.mTableHover = function (table) {  
    $("#" + table).each(function () {  
        var o = $(this);  
        //����ż���к���������ɫ  
        o.find("tr:even").css("background-color", "#EFF3FB");  
        o.find("tr:odd").css("background-color", "#FFFFFF");  
        //����ƶ����б�ɫhover�÷��ؼ�  
        o.find("tr:not(:first)").hover(function () {  
            $(this).attr("bColor", $(this).css("background-color")).css("background-color", "#E0E0E0");  
        }, function () {  
            $(this).css("background-color", $(this).attr("bColor"));  
        });  
    });  
};  


/** 
* ajax post提交 
* @param url 
* @param param 
* @param datat 为html,json,text 
* @param callback 回调函数 function callBack(data) 
* @return 
*/  
jQuery.mJqAjax = function (url, param, datat, callback) {  
    $.ajax({  
        type: "post",  
        url: url,  
        data: param,  
        dataType: datat,  
        success: callback,  
        error: function () { }  
    });  
};  



          //window对象
       //简单跳转
    function gotoPage(url){
       
           window.location = url;
 
    }
   //对location用法的升级，为单个页面转递参数
    function goto_catalog(iCat){
           if(iCat<=0){
             top.location = "../index.aspx";//top出去

          } else{
              window.location = "../newsCat.aspx?catid = "+iCat;
                   
          }
         
 
     }

        // 回到首页
      
          function gohome() {  
          top.location = "/index.aspx";  
            }

// 作用域安全的构造函数更改前,
// 先确认this对象是正确类型的实列,如果不是则创建新的实列并返回
  
  function Person(name,age,job){
  	if(this instanceof Person){
  		this.name=name;
  		this.age=age;
  		this.job=job;
  	}else{
  		return new Person(name,age,job);
  	}
  }

