import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import guanliliuy from '@/views/modules/guanliliuy/list'
    import news from '@/views/modules/news/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yishengYuyue from '@/views/modules/yishengYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhishi from '@/views/modules/zhishi/list'
    import zhishiCollection from '@/views/modules/zhishiCollection/list'
    import zhishiLiuyan from '@/views/modules/zhishiLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryBinghuan from '@/views/modules/dictionaryBinghuan/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGaofengxian from '@/views/modules/dictionaryGaofengxian/list'
    import dictionaryKeshou from '@/views/modules/dictionaryKeshou/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryWuaichu from '@/views/modules/dictionaryWuaichu/list'
    import dictionaryYisheng from '@/views/modules/dictionaryYisheng/list'
    import dictionaryYishengYuyueYesno from '@/views/modules/dictionaryYishengYuyueYesno/list'
    import dictionaryZhishi from '@/views/modules/dictionaryZhishi/list'
    import dictionaryZhishiCollection from '@/views/modules/dictionaryZhishiCollection/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBinghuan',
        name: '是否接触病患',
        component: dictionaryBinghuan
    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGaofengxian',
        name: '是否出入高风险区域',
        component: dictionaryGaofengxian
    }
    ,{
        path: '/dictionaryKeshou',
        name: '有无咳嗽',
        component: dictionaryKeshou
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryWuaichu',
        name: '有无外出',
        component: dictionaryWuaichu
    }
    ,{
        path: '/dictionaryYisheng',
        name: '科室',
        component: dictionaryYisheng
    }
    ,{
        path: '/dictionaryYishengYuyueYesno',
        name: '报名状态',
        component: dictionaryYishengYuyueYesno
    }
    ,{
        path: '/dictionaryZhishi',
        name: '知识类型',
        component: dictionaryZhishi
    }
    ,{
        path: '/dictionaryZhishiCollection',
        name: '收藏表类型',
        component: dictionaryZhishiCollection
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chat',
        name: '客服聊天',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/guanliliuy',
        name: '每日体温',
        component: guanliliuy
      }
    ,{
        path: '/news',
        name: '公告资讯',
        component: news
      }
    ,{
        path: '/yisheng',
        name: '医生',
        component: yisheng
      }
    ,{
        path: '/yishengYuyue',
        name: '医生报名',
        component: yishengYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhishi',
        name: '健康小知识',
        component: zhishi
      }
    ,{
        path: '/zhishiCollection',
        name: '知识收藏',
        component: zhishiCollection
      }
    ,{
        path: '/zhishiLiuyan',
        name: '知识留言',
        component: zhishiLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
