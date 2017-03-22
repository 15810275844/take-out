import Vue from 'vue'
import App from './App'
import router from './router'

//mint 组件库
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

// mint ui 部分组件引用
import { Swipe, SwipeItem } from 'mint-ui';

//自定义CSS
import './commons/less/style.less';


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})