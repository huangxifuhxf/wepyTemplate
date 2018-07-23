// 引入请求封装函数  那边是匿名导出不用{}
import wxRequest from '../utils/wxRequest'
// 引入常量库
import appCONST from '../utils/appCONST'

wxRequest.requestData.baseUrl = appCONST.HTTP_BASE_URL + 'api/public/v1/'

// 请求轮播图数据
const getSwiperData = params => {
  return wxRequest.requestData('home/swiperdata', params).then(res => res)
};

export default {
  getSwiperData
}
