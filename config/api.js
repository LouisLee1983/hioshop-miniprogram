// const ApiRoot = 'http://hengqin168.com';
const ApiRoot = 'http://101.33.255.58';
// API路径前缀
const ApiRootPath = '/api/';
const ApiRootUrl = ApiRoot + '/api/'

// 封装云托管请求方法
const callCloudContainer = (path, data = '', method = 'GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: ApiRoot + path,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      timeout: 10000, // 设置超时时间
      enableHttp2: true, // 启用 HTTP/2
      enableQuic: true, // 启用 QUIC
      success: function(res) {
        console.log(path);
        console.log(res);
        resolve(res);
      },
      fail: function(err) {
        console.error('Request failed:', {
          url: ApiRoot + path,
          error: err
        });
        reject(err);
      }
    });
  });
};

module.exports = {
  // 封装的请求方法
  request: callCloudContainer,
  ApiRootUrl: ApiRootUrl,
  
  // API路径配置
  IndexUrl: ApiRootPath + 'index/appInfo',
  AuthLoginByWeixin: ApiRootPath + 'auth/loginByWeixin',  //微信登录
  CatalogList: ApiRootPath + 'catalog/index', //分类目录全部分类数据接口
  CatalogCurrent: ApiRootPath + 'catalog/current', //分类目录当前分类数据接口
  GetCurrentList: ApiRootPath + 'catalog/currentlist',
  // 购物车
  CartAdd: ApiRootPath + 'cart/add', // 添加商品到购物车
  CartList: ApiRootPath + 'cart/index', //获取购物车的数据
  CartUpdate: ApiRootPath + 'cart/update', // 更新购物车的商品
  CartDelete: ApiRootPath + 'cart/delete', // 删除购物车的商品
  CartChecked: ApiRootPath + 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: ApiRootPath + 'cart/goodsCount', // 获取购物车商品件数
  CartCheckout: ApiRootPath + 'cart/checkout', // 下单前信息确认
  // 商品
  GoodsCount: ApiRootPath + 'goods/count', //统计商品总数
  GoodsDetail: ApiRootPath + 'goods/detail', //获得商品的详情
  GoodsList: ApiRootPath + 'goods/list', //获得商品列表
  GoodsShare: ApiRootPath + 'goods/goodsShare', //获得商品的详情
  SaveUserId: ApiRootPath + 'goods/saveUserId',
  // 收货地址
  AddressDetail: ApiRootPath + 'address/addressDetail', //收货地址详情
  DeleteAddress: ApiRootPath + 'address/deleteAddress', //保存收货地址
  SaveAddress: ApiRootPath + 'address/saveAddress', //保存收货地址
  GetAddresses: ApiRootPath + 'address/getAddresses',
  RegionList: ApiRootPath + 'region/list', //获取区域列表
  PayPrepayId: ApiRootPath + 'pay/preWeixinPay', //获取微信统一下单prepay_id
  OrderSubmit: ApiRootPath + 'order/submit', // 提交订单
  OrderList: ApiRootPath + 'order/list', //订单列表
  OrderDetail: ApiRootPath + 'order/detail', //订单详情
  OrderDelete: ApiRootPath + 'order/delete', //订单删除
  OrderCancel: ApiRootPath + 'order/cancel', //取消订单
  OrderConfirm: ApiRootPath + 'order/confirm', //物流详情
  OrderCount: ApiRootPath + 'order/count', // 获取订单数
  OrderCountInfo: ApiRootPath + 'order/orderCount', // 我的页面获取订单数状态
  OrderExpressInfo: ApiRootPath + 'order/express', //物流信息
  OrderGoods: ApiRootPath + 'order/orderGoods', // 获取checkout页面的商品列表
  // 足迹
  FootprintList: ApiRootPath + 'footprint/list', //足迹列表
  FootprintDelete: ApiRootPath + 'footprint/delete', //删除足迹
  // 搜索
  SearchIndex: ApiRootPath + 'search/index', //搜索页面数据
  SearchHelper: ApiRootPath + 'search/helper', //搜索帮助
  SearchClearHistory: ApiRootPath + 'search/clearHistory', //搜索帮助
  ShowSettings: ApiRootPath + 'settings/showSettings',
  SaveSettings: ApiRootPath + 'settings/save',
  SettingsDetail: ApiRootPath + 'settings/userDetail',
  UploadAvatar: ApiRootPath + 'upload/uploadAvatar',
  GetBase64: ApiRootPath + 'qrcode/getBase64', //获取商品详情二维码
};
