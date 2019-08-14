function check() {
  button = document.getElementById("btnId");
  objFile = document.getElementById("fileId");
  if (objFile.value === "") {
    alert("不能空");
  }
  var files = objFile.files; //获取到文件列表
  console.log(files);
  if (files.length === 0) {
    alert("请选择文件");
  } else {
    valuePos = objFile.value; //存下此次提交的文件名
    var reader = new FileReader(); //新建一个FileReader
    reader.readAsText(files[0], "UTF-8"); //读取文件
    reader.onload = function (evt) {
      console.log(evt.target);
      //读取完文件之后会回来这里
      fileString = evt.target.result; // 读取文件内容（全局）
      //设置定时器时刻检测是否用户未下载又重新提交一次不一样的文件；
      setInterval(function () {
        if (objFile.value !== valuePos) {
          button.innerHTML = "提交";
          button.onclick = function () {
            check();
            valuePos = objFile.value; //存下此次提交的文件名,
          };
        }
      }, 30);
      change();
    };
  }
}
function change() {
  var nameReg = /\w+\./gi;
  name = valuePos.match(nameReg);
  result = [
    "<!DOCTYPE html>",
    '<html lang="en">',
    "<head>",
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '    <meta http-equiv="X-UA-Compatible" content="ie=edge">',
    "    <title>"
  ].join("");
  result += name + "html" + "</title>";
  ///css
  result += "<style>div{width: 50%;margin: auto;}img{max-width:100%}</style>";
  var chImg = /(!\[[\S| ]+\])(\()([\S| ]+)(\))/gi;
  fileString = fileString.replace(chImg, '<img src="$3">'); //图片-
  var chA = /(##\s+\[)([\S| ]+)(\]\()(\S+)\)/gi;
  fileString = fileString.replace(/#(?=\S+\))/g, '%23'); //先将链接中的#转化为%23；
  fileString = fileString.replace(chA, '<h2><a href="$4">$2</a></h2>'); //标题超链接
  fileString = fileString.replace(/(\[)([\S| ]+)(\]\()(\S+)\)/g, "<a href='$4'>$2</a>"); //非标题超链接
  fileString = fileString.replace(/[\n|\r]+/g, "</br>"); //空格
  result += "<body><div>"; //div居中宽50%；
  result += fileString;
  result += "</div></body>";
  //布局收尾
  button.innerHTML = "下载HTML";
  button.onclick = function () {
    download();
  };
}
function download() {
  var a = document.createElement("a");
  a.download = name + "html";
  result += "</html>";
  a.href = "data:text/txt;charset=utf-8," + result;
  a.textContent = "download";
  a.click();
  button = document.getElementById("btnId");
  button.innerHTML = "提交";
  button.onclick = function () {
    check();
  };
}