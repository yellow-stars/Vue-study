# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## ref属性
   1.被用来给元素或子组件注册引用信息（id的替代者）
   2.应用再html标签尚获取的是真实dom元素，应用在组件标签上是组件实例对象（vc）
   3.使用方式：打标识:<h1 ref="xxx">...</h1>
   获取：this.$refs.xxx

## 配置项
      功能：让组件接受外部传过来的数据
        （1）.传递数据
            <Demo name="xxx"></Demo>
         (2).接收数据
               第一种方式（只接收）
               props：['xxx']
               第二种方式(限制类型)：
                props: {
                  name:String
                }
               第三种方式（限制类型、限制必要性、指定默认值）：
                 props：{
                  name：{
                     type：String，类型
                     required：true 必要性
                     default:'xx' 默认值
                  }
                 }
      
      备注：props是只读的，Vue底层会检测你对Props的修改，如果进行了修改，就会发出警告，
      若业务需求确实需要修改，那么请复制props的内容到data种一份，然后去修改data种的数据

## minix(混入)
     功能：可以把多个组件共用的配置提取成一个混入对象
     使用方式：
        第一步定义混合，例如：
        {
         data(){....}
         methods{....}
         .....
        }
        第二步使用混入，例如：
        (1).全局混入：Vue.mixin(xxxx)
        (2).局部混入：mixin：['xxx']

## 插件 
    功能：用于增强Vue
    本质：包含install方法的一个对象， Install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
      对象.install = function(Vue,options){
         //1.添加全局过滤器
         Vue.filter(...)

         //2.添加全局指令
         Vue.directive(...)

         //3.配置全局混入
         Vue.mixin(...)

         //4.添加实例方法
         Vue.prototype.$myMethod = function(){...}
         Vue.prototype.$myProperty = xxxx
      }
      使用插件：Vue.ues()

##  总结TodoList案例
   1.组件化编码流程
   （1）.拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
   （2）.实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
      1）一个组件在用：放在组件自身即可。
      2）一些组件再用：放在他们共同的父组件上（状态提升）
   （3）实现交互:从绑定事件开始。
   2.props使用于：
     （1）父组件==》子组件 通信
     （2）子组件 ==》父组件  通信（要求先给子一个函数）
   3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不能修改的
   4.props传过来的若是对象类型的值，修改对象种的属性时Vue不会报错，但不推荐这样做。

## WebStorage
1.存储内容大写一般支持5mb左右
2.浏览器通过Window.sessionStorage 和Window.localStorage属性来实现本地存储机制。
3.相关API:
  1.XXXXStorage.setItem('key','value');
    该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

  2.xxxxStorage.getItem('person');
  该方法接受一个键名作为参数，返回键名对应的值
  
  3.xxxxStorage.removeItem('key');
  该方法接受一个键名作为参数，并把该键名从存储种删除

  5.xxxxStorage.clear();
  该方法会清空存储中的所有数据

  4.备注：
    1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。
    2.LocalStorage存储的内容需要手动清除才会消失
    3.xxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getitem的返回值是null
    JSON.parse(null)的结果依然是null

   
##组件的自定义事件
1.一种组件通信的方式，适用于 子组件===》父组件
2.使用场景：A是父组件，B是子组件，B想传给A数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
3.绑定自定义事件L:
         第一种方式在父组件中：<Demo @atguigu="test"/>或 <Demo v-on:atguigu="test"/>
         第二种方式，在父组件中：
                mounted(){
                  this.$refs.xxx.$on('atguigu',this.test)
                }
         若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法
4.触发自定义事件：this.$emit('atguigu',数据)
5.解绑自定义事件：this.$off('atguigu')
6.组件上也可以绑定原生DOM事件，需要使用native修饰符
7.注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出现问题


### 全局事件总线（GlobalEventBus）
  1.一种组件通信的方式，适用于任意组件间通信
  2.安装全局事件总线：
  new Vue({
    ...
    beforeCreate(){
      Vue.prototype.$bus=this //安装全局事件总线，$bus就是当前应用的vm
    }
    .....
  })
  3.使用事件总线：
          1.接受数据：A组件想接受数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
          methods(){
            demo(data){
              ......
            }
            .....
            mounted(){
              this.$bus.$on('xxx',this.demo)
            }
          }
          2.提供数据this.$bus.$emit('xxxx',数据)
        
  4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。

  ##消息订阅与发布（publish）
  1.一种组件间通信的方式，适用于任意组件间通信
  2.使用步骤
      1.安装pubsub： npm i pubsub-js
      2.引入： import pubsub from 'pubsub-js'
      3.接收数据：A组件接受数据，则在A组件中订阅消息，订阅的回调留在A组件自身。
         methods(){
          demo(data){
            .....
          }
          ....
          mounted(){
            this.pid = pubsub.subscribe('xxx',this.demo)//订阅消息
          }
         }
      
      4.提供数据：pubsub.publish('xxx',数据)
      5.最好在beforeDestroy钩子中，用PubSub.unsubscribe(pid)去取消订阅。