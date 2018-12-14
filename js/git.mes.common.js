var git = {
    //true表示格式正确
    checkEmail: function(str) {
        if (str.match(/[A-Za-z0-9_-]+[@](\S*)(net|com|cn|org|cc|tv|[0-9]{1,3})(\S*)/g) == null) {
            return false;
        } else {
            return true;
        }
    },
    //true表示格式正确
    checkMobilePhone: function(str) {
        if (str.match(/^(?:13\d|15[0-9]|18[0123456789])-?\d{5}(\d{3}|\*{3})$/) == null) {
            return false;
        } else {
            return true;
        }
    },
    //true表示为数字
    checkNum: function(str) {
        if (str.match(/\D/) == null) {
            return false;
        } else {
            return true;
        }
    },
    //true表示为小数
    checkDecimal: function(str) {
        if (str.match(/^-?\d+(\.\d+)?$/g) == null) {
            return false;
        } else {
            return true;
        }
    },
    //true表示正整数
    checkRate: function(str) {
        if (str.match(/^[1-9]+[0-9]*]*$/) == null) {
            return false;
        } else {
            return true;
        }
    },
    //判断数字长度
    checkNumLenght: function(str, a, b) {
        if (parseInt(a) <= $.trim(str).length <= parseInt(b)) {
            return false;
        } else {
            return true;
        }
    },
    //判断数字大小
    checkNumBig: function(str, b) {
        if (parseInt(str) < (parseInt(b) + 1)) {
            return false;
        } else {
            return true;
        }
    },
    //true表示为小数
    checkInteger: function(str) {
        if (str.match(/^[-+]?\d*$/) == null) {
            return false;
        } else {
            return true;
        }
    },
    //true表示为全部为字符 不包含汉字
    checkStr: function(str) {
        if (/[^\x00-\xff]/g.test(str)) {
            return false;
        } else {
            return true;
        }
    },
    //true表示包含汉字
    checkChinese: function(str) {
        if (escape(str).indexOf("%u") != -1) {
            return true;
        } else {
            return false;
        }
    },
    //true表示格式正确
    checkTelephone: function(str) {
        if (str.match(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/) == null) {
            return false;
        } else {
            return true;
        }
    },
    //true表示格式正确 检查输入的身份证号是否正确
    checkCard: function(str) {
        //15位数身份证正则表达式
        var arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        //18位数身份证正则表达式
        var arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
        if (str.match(arg1) == null && str.match(arg2) == null) {
            return false;
        } else {
            return true;
        }
    },
    //检查输入的IP地址是否正确 true表示格式正确
    checkIP: function(str) {
        var arg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        if (str.match(arg) == null) {
            return false;
        } else {
            return true;
        }
    },
    //检查输入的URL地址是否正确 true表示格式正确
    checkURL: function(str) {
        //if (str.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i) == null) {
        if (str.match(/(http[s]?|ftp):\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/) == null) {
            return false
        } else {
            return true;
        }
    },
    //检查字符串是否为空
    IsEmpty: function(str) {
        if (str == undefined || str == "") {
            return true;
        } else {
            return false;
        }
    },
    //域名验证
    IsURL: function(URL) {
        var str = URL;
        var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        var objExp = new RegExp(Expression);
        if (objExp.test(str) == true) {
            return true;
        } else {
            return false;
        }
    },
    //true只有数字和字母和下划线
    IsNumOrLet: function(parVal) {
        if (parVal.match(/[^a-zA-Z0-9_]+/)) {
            return true;
        } else {
            return false;
        }
    },
    //验证Money，true表示正确
    checkMoney: function(str) {
        if (str.match(/^[0-9][\d]{0,11}([\.][\d]{0,4})?$/)) {
            return true;
        } else {
            return false;
        }
    },
    //true表示开始时间大于或等于结束时间
    CompareTime: function(stime, etime) {
        var starttimes = stime.split('-');
        var endtimes = etime.split('-');
        var starttimeTemp = starttimes[0] + '/' + starttimes[1] + '/' + starttimes[2];
        var endtimesTemp = endtimes[0] + '/' + endtimes[1] + '/' + endtimes[2];
        if (Date.parse(new Date(starttimeTemp)) > Date.parse(new Date(endtimesTemp)) || Date.parse(new Date(starttimeTemp)) == Date.parse(new Date(endtimesTemp))) {
            return true;
        }
    },
    //true表示开始时间大于或等于结束时间,只有年月日
    checkCompareTime: function(stime, etime) {
        var starttimes = stime.split('-');
        var endtimes = etime.split('-');
        var starttimeTemp = starttimes[0] + '/' + starttimes[1] + '/' + starttimes[2];
        var endtimesTemp = endtimes[0] + '/' + endtimes[1] + '/' + endtimes[2];
        if (Date.parse(new Date(starttimeTemp)) > Date.parse(new Date(endtimesTemp))) {
            return true;
        }
    },
    Escape: function(value) {
        if (value != undefined) {
            return escape(value);
        }
        return undefined;
    },
    UnEscape: function(value) {
        if (value != undefined) {
            return unescape(value);
        }
        return undefined;
    },
    //.net Json后的日期转换
    JsonToDateTime: function(jsonDate, format) {

        /**
         *YYYY: 年份 2012
         *YY: 年份 12
         *
         *MM:月份 01 02 03 ... 11
         *M:月份 1,2,3,...11
         *
         *DD:日期 两位
         *D: 日期 一位
         *
         *HH: 时 两位 H 一位
         *mm: 分钟 两位 m 一位
         *ss: 秒 两位 s 一位
         *SS: 毫秒 多位SSSS毫秒
         **/
        if (jsonDate == undefined || moment(jsonDate).format("YYYY-MM-DD") == "0001-01-01") {
            return "";
        }
        if (git.IsEmpty(format)) {
            var value = moment(jsonDate).format("YYYY-MM-DD");
            return value;
        } else {
            return moment(jsonDate).format(format);
        }
    },
    //获得访问的路径/Home/Index
    GetPath: function() {
        return window.location.pathname;
    },
    //获得
    GetUrl: function() {
        return window.location.href;
    },
    //获得访问协议 http https
    GetProtocol: function() {
        return window.location.protocol;
    },
    //获取域名
    GetDomain: function() {
        return document.domain;
    },
    //获得端口
    GetPort: function() {
        return window.location.port;
    },
    GetArgs: function() {
        var args = {};
        var query = location.search.substring(1);
        var pairs = query.split("&");
        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');
            if (pos == -1) {
                continue;
            } else {
                var argname = pairs[i].substring(0, pos);
                var value = pairs[i].substring(pos + 1);
                value = decodeURIComponent(value);
                args[argname] = value;
            }
        }
        return args;
    },
    Trim: function(value) {
        if (value == undefined || value == "") {
            return value;
        }
        value = value.replace(/[ ]/g, "");
        return value;
    },
    LTrim: function(value) {
        if (value == undefined || value == "") {
            return value;
        }
        value = value.replace(/(^\s*)/g, "");
        return value;
    },
    RTrim: function(value) {
        if (value == undefined || value == "") {
            return value;
        }
        value = value.replace(/(\s*$)/g, "");
        return value;
    },
    ToDecimal: function(x, y) {
        y = git.IsEmptyNum(y);
        var f_x = parseFloat(x);
        if (isNaN(f_x)) {
            return false;
        }
        var f_x = Math.round(x * 100000) / 100000;
        var s_x = f_x.toString();


        if (s_x.indexOf(".") > 0) {
            var numStr = s_x.substring(0, s_x.indexOf('.') + 1);
            var str = s_x.substring(s_x.indexOf('.') + 1);
            if (str.length >= y) {
                str = str.substring(0, y);
            } else {
                var index = str.length;
                while (index < y) {
                    str = str + '0';
                    index++;
                }
            }
            s_x = numStr + str;
        } else {
            if (y > 0) {
                s_x = s_x + '.';
            }

            var index = 0;
            while (index < y) {
                s_x = s_x + '0';
                index++;
            }
        }
        return s_x;
    },
    /**
     * 千分位转换
     * [toThousands description]
     * @param  {[type]} val [description]
     * @return {[type]}     [description]
     */
    ToThousands: function(num) {
        var num = (num || 0).toString();
        var Suffix = '';
        if (num.indexOf('.') > 0) {
            Suffix = num.substring(num.indexOf('.'));
            num = num.substring(0, num.indexOf('.'));
        }
        var result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        result = result + Suffix;
        return result;
    },
    /**
     * 如果为空或者字符串,默认值转换
     * [IsEmptyNum description]
     * @param {[type]} num [description]
     */
    IsEmptyNum: function(num, defaultValue) {
        if (git.IsEmpty(defaultValue) || isNaN(defaultValue)) {
            defaultValue = 0;
        }
        var result = defaultValue;
        if (!git.IsEmpty(num) && !isNaN(num)) {
            result = num;
        }
        return result;
    },
    GetEnumDesc: function(item, value) {
        if (item != undefined) {
            var returnValue = "";
            for (var i = 0; i < item.length; i++) {
                var json = item[i];
                if (json.Value == value) {
                    returnValue = json.Description;
                    break;
                }
            }
            return returnValue;
        }
        return "";
    },
    //截取字符串
    GetStrSub: function(str, lth) {
        var resultStr = "";
        if (str == undefined || str == "") {
            resultStr = "";
        } else {
            if (str.length > lth) {
                resultStr = str.substring(0, lth) + '...';
            } else {
                resultStr = str;
            }
        }
        return resultStr;
    },
    /**
     * 异步请求封装
     * [gitAjax description]
     * @return {[type]} [description]
     */
    gitAjax:function(option){
        option.data=option.data==undefined ? {}:option.data;
        option.type=option.type==undefined ? "get":option.type;
        mui.ajax(option.url,{
            data:option.data,
            dataType:'json',
            type:option.type,
            success:function(result){
                if(option.success!=undefined){
                    option.success(result);
                }
            },
            error:function(xhr,type,errorThrown){
                if(option.error!=undefined){
                    option.error(xhr,type,errorThrown);
                }
            }
        });
    },
    AddCache:function(Key,Value){
        if(!git.IsEmpty(Key) && !git.IsEmpty(Value)){
            //localStorage.setItem(Key, Value);
            plus.storage.setItem(Key, Value);
            return true;
        }
        return false;
    },
    GetCache:function(Key){
        if(!git.IsEmpty(Key)){
            //var result = localStorage.getItem(Key);
            var result = plus.storage.getItem(Key);
            return result;
        }
        return false;
    },
    RemoveCache:function(Key){
        if(!git.IsEmpty(Key)){
            //localStorage.removeItem(Key);　　
            plus.storage.removeItem(Key);　　
            return true;
        }
        return false;
    },
    ClearCache:function(){
        //localStorage.clear();
        plus.storage.clear();
        return true;
    },
    AddObjectCache:function(Key,param){
        if(git.IsEmpty(Key)){
            return false;
        }
        if(param==undefined){
            return false;
        }
        var value=JSON.stringify(param);
        return git.AddCache(Key,value);
    },
    GetObjectCache:function(Key){
        
        if(git.IsEmpty(Key)){
            return false;
        }
        var source=git.GetCache(Key);
        if(!git.IsEmpty(source)){
            var result=JSON.parse(source);
            return result;
        }
        return undefined;
    },
    PlayerError:function(){
        var player = plus.audio.createPlayer("/images/scan_error.wav"); 
        var num = player.getDuration();
        player.play();
    },
    PlayerSuccess:function(){
        var player = plus.audio.createPlayer("/images/scan_success.wav"); 
        var num = player.getDuration();
        player.play();
    }
};


var win_height=window.innerHeight;
var openSoftKeyboard = function() {
    if(mui.os.ios){
        var webView = plus.webview.currentWebview().nativeInstanceObject();
        webView.plusCallMethod({
            "setKeyboardDisplayRequiresUserAction": false
        });
    }else{
        var webview = plus.android.currentWebview();
        plus.android.importClass(webview);
        webview.requestFocus();
        var Context = plus.android.importClass("android.content.Context");
        var InputMethodManager = plus.android.importClass("android.view.inputmethod.InputMethodManager");
        var main = plus.android.runtimeMainActivity();
        var imm = main.getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.toggleSoftInput(0, InputMethodManager.SHOW_FORCED);
    }
}

function closeKeyBoard(){
    var current_height=window.innerHeight
    var InputMethodManager = plus.android.importClass("android.view.inputmethod.InputMethodManager");
    var Context = plus.android.importClass("android.content.Context");
    var main = plus.android.runtimeMainActivity();
    if(win_height>current_height){
        var imm = main.getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.toggleSoftInput(0, InputMethodManager.HIDE_NOT_ALWAYS); 
    }
}


function SetUserInfo(){
    var User=git.GetObjectCache(CacheKey.LoginUser);
    var html='';
    if(User!=undefined){
        html+="用户:"+User.UserName;
    }

    var ServerName=git.GetCache(CacheKey.ServerName);
    if(!git.IsEmpty(ServerName)){
        html+="&nbsp;&nbsp;服务:"+ServerName;
    }
    document.getElementById("btnUserInfo").innerHTML=html;
}

