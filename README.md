# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



#config 里面的index文件可以修改自动弹出浏览器  11-26
autoOpenBrowser: true,

#引用阿里矢量图标 iconfont  在首页引用css ，在dom上调用类名即可
index.html  添加
<link rel="stylesheet" href="http://at.alicdn.com/t/font_2232287_1iplx2a8093.css"></link>
当项目图标发生变化时，要重新生成地址引用

#cssreset文件，在cssreset.com 获取  ； 还可以使用nomalize.css 等第三方css库让浏览器统一  （bootstrap就是用的这个） 11-27
项目开始前引入

#fastclick 解决移动端双击3毫秒 延时

#router/inidex.js 里面用
redirect: '/home' 来设置默认首页路径
mode: 'history' 来去掉默认的 # 键

# $route 当前页面 路由对象
# $router 设置路由跳转

#postman  来测试api手册是否可行
注意 api 的  方法 和 参数类型


# 封装ajax 接口请求函数 vue 用axios 发送请求
# axios 返回 promise

# api
ajax.js  封装ajax
index.js  配置api 接口函数

#git 管理项目
1. git init  生成本地仓库(初始化仓库)
2. git add .   添加文件到暂存区
3. git commit -m "message" 将暂存区内容添加到仓库中 message = 描述信息 “init myproject”
4. git remote add origin https://github.com/alenchome/my-project.git 关联命令
5. git push origin master 提交代码

# vuex  1.解决不同组件的数据共享 2.组件里面的数据持久化
# 组件通过dispatch调用action，action通过commit来触发mutation，mutation来负责修改state，state修改后去重新渲染受影响的dom。
1. 新建vuex 文件夹
2. 新建store.js , 引入vue 和 vuex ,并且使用vuex
3. 创建store ，store 是核心
  const store = new Vuex.Store({

  })
4. state 定义状态 ； 放数据 ，主运用于存储数据 是一个对象
  state: {
    count: 0
  }
5. mutations 定义方法； 里面放的是方法 改变state里面的数据
  mutations: {
    increment(state){   //操作state 里面的数据count 自加
      state.count++
    }
  }
6. 在其他组件里面显示 数据
  import store form './vuex/store/store.js'      //引入state

  export default {
    store                                        // 实例中注册 store
  }

 7. 在组件中使用state 里面的数据  ,通过store.state 获取状态对象
  {{this.$store.state.count}}

 8. 在组件中改变state 里面的数据 ,通过 store.mutations 来触发改变状态
  store 里面的状态是响应式的，当前组件改变状态后，其他组件调用的状态（state）改变
  export default {
    store,
    method: {
      this.$store.commit('increment')    //当前组件 可以使用 increment 函数来改变 state 里面的数据了
    }
  }

9. getter 相当于sate 的计算属性，当state里面的状态发生改变时触发
  getters: {
  }
  getter 会暴露 为store.getters 对象； 因此可以以属性的形式访问这些值
  this.$store.getters.donesonthing

10. action 类似于mutation  action 函数接收一个与store 实例具有相同方法和属性的 context 对象
  actions: {
    increament (context) {
      context.commit ('increment')
    }
  }
  实例中触发 是以store.dispatch('increment') 方法来触发
  action 里面可以执行异步请求

11. 建议使用 映射关系
  mapState > computed
  mapMutationns > methods
  mapActions > methsods
  mapGetters > computed

  state 是核心不推荐从store 中取值，建议将store.state 中的属性映射到computed
    import {mapState} from  'vuex'  //引入
    computed: {
      ...mapstates(['address','shops'])  // 可映射多个属性 方便书写
    }

  mutations 使用 $store.commit 来触发
    <button @click="$store.commit('add',5)">a+5</button>  //不建议直接调用触发
    import {mapMutations} from  'vuex'  //引入
    methods: {
      ...mapmutations(['getaddress','add'])      //将store.mutations映射到methods
    }

   推荐actions去触发mutation
   使用 $store.dispatch 来触发actions
    <button @click="$store.dispatch('addA',5)">a+5</button>
    import {mapActions} from 'vuex';
    methods:{
      ...mapAtions(['addA'])   //将store.actions映射到methods
    }

    import {mapGetters} from 'vuex';
    computed: {
      ...mapgetters(['geta','getb'])
    }


12. 模板中数据的来源， data ，props， computed
计算属性 computed 中的数据来源 data ，props ,state ,getter 