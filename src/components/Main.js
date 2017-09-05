require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';

//获取图片相关的数据  我把sass那种配置都不要了 有可能会有问题 不如不要 json-loader配置了一下
var imageData = require('../data/imageData.json');
//转换字符串为真实地址 利用图片名将信息转成图片URL的路径信息
imageData = (function genImageURL(imageDataArr){
  for(var i=0,j=imageDataArr.length;i<j;i++){
      var singleImageData = imageDataArr[i];

      singleImageData.imageURL = require('../images/'+
          singleImageData.fileName);

      imageDataArr[i] = singleImageData;//赋值回去覆盖
  }
  return imageDataArr;
})(imageData);
//调用这个函数  因为只用一次 可以写匿名函数自调
// imageData = genImageURL(imageData);

class AppComponent extends React.Component {
  render() {
    // var styleObj = {
    //     fontSize : '25px',
    //     color : 'blue'
    // }
    return (
      <div className="stage">
          <div className="img-sec">

          </div>
          <nav className="controller-nav">

          </nav>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
