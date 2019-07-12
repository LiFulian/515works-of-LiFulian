  //获取元素样式，并设置
  function getStyle(obj, attr, value) {
      if (arguments.length == 2) {
          if (obj.currentStyle) {
              return obj.currentStyle[attr];
          } else {
              return getComputedStyle(obj, false)[attr];
          }
      } else if (arguments.length == 3) {
          obj.style[attr] = value;
      }
  }
  //运动框架  透明度 + 颜色 + 基本
  //sp为速度，建议1～10；或1～5，（有李福连所加）
  function lflMove(obj, json,sp, fn) {
      sp = sp || 5;
      clearInterval(obj.timer);

      obj.timer = setInterval(function() {
          var bStop = true;
          for (var name in json) {
              var iCur = 0;

              if (name == "opacity") { //若name为opacity时
                  iCur = parseInt(parseFloat(getStyle(obj, name)) * 100);
                  var iSpeed = (json[name] * 100 - iCur) / sp;
                  iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                  obj.style.opacity = (iCur + iSpeed) / 100;
                  obj.style.filter = "alpha(opacity:" + iCur + iSpeed + ")";
              } else if (name == "background") { //若name为background时（该部分代码 网上搜到）
                  //获取颜色的三元素 str = rgb(r,g,b)
                  function getColor(str) { //获取到背景色的三元素，进行拆分
                      var s = str.substring(4, str.length - 1);
                      var arr = s.split(",");
                      var r = parseInt(arr[0]);
                      var g = parseInt(arr[1]);
                      var b = parseInt(arr[2]);
                      return {
                          red: r,
                          green: g,
                          blue: b
                      };
                  }
                  iCur = getStyle(obj, "background-color"); //当前背景色
                  var newStr = json[name];
                  var arr = []; //定义一个数组，用来存放新的三元素的值
                  var newJson = {}; //将设置的背景色写成一个json，并与getColor相对应
                  newJson.red = getColor(newStr).red;
                  newJson.green = getColor(newStr).green;
                  newJson.blue = getColor(newStr).blue;

                  for (var name in newJson) { //newJson中循环，得到最新的三元素
                      var cur = parseInt(getColor(iCur)[name]);
                      var iSpeed = (newJson[name] - cur) / sp;
                      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                      var tmp = cur + iSpeed;
                      arr.push(tmp);
                  }
                  obj.style.background = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
              } else if (name == "color") { //若color时（该部分代码由李福连 对比background部分所加）
                  //获取颜色的三元素 str = rgb(r,g,b)
                  function getColor(str) { //获取到背景色的三元素，进行拆分
                      var s = str.substring(4, str.length - 1);
                      var arr = s.split(",");
                      var r = parseInt(arr[0]);
                      var g = parseInt(arr[1]);
                      var b = parseInt(arr[2]);
                      return {
                          red: r,
                          green: g,
                          blue: b
                      };
                  }
                  iCur = getStyle(obj, "color"); //当前背景色
                  var newStr = json[name];
                  var arr = []; //定义一个数组，用来存放新的三元素的值
                  var newJson = {}; //将设置的背景色写成一个json，并与getColor相对应
                  newJson.red = getColor(newStr).red;
                  newJson.green = getColor(newStr).green;
                  newJson.blue = getColor(newStr).blue;

                  for (var name in newJson) { //newJson中循环，得到最新的三元素
                      var cur = parseInt(getColor(iCur)[name]);
                      var iSpeed = (newJson[name] - cur) / sp;
                      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                      var tmp = cur + iSpeed;
                      arr.push(tmp);
                  }
                  obj.style.color = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
              } else { //name为width height...
                  iCur = parseInt(getStyle(obj, name));
                  var iSpeed = (json[name] - iCur) / sp;
                  iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                  obj.style[name] = iCur + iSpeed + "px";
              }
              if (iCur != json[name]) bStop = false;
          }
          if (bStop) {
              clearInterval(obj.timer);
              if (fn) fn();
          }
      }, 30)
  }