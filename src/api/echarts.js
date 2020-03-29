import request from '@/utils/request'
// 主页工序对比echarts
export function comparison () {
  return request({
    url: '/project/info/get_list',
    method: 'post',
    data: {
      cycZq: '1'
    }
  })
}
