new Vue({
  el:'#events',
  //在data属性中我们定义和网页交互的数据
  data:{
    event:{name:'',description:'',date:''},
    events:[]
  },
  //应用加载时会执行ready属性中的函数
  ready:function() {
    //初始化数据
    this.fetchEvents();
  },
  //定义了在这个应用中需要使用的方法
  methods:{
    fetchEvents:function() {
      var events = [{
        id:1,
        name:'开会',
        description:'上午9点在21层大会议室',
        date:'2016-09-12'
      },{
        id:2,
        name:'购物',
        description:'买个充电宝',
        date:'2016-09-12'
      },{
        id:3,
        name:'打游戏',
        description:'和朋友开黑',
        date:'2016-09-15'
      }];
      //$set是Vue提供的一个向数组插入数据的方法，在执行它的时候还会刷新视图
      this.$set('events',events);
    },
    addEvent:function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = {name:'',description:'',date:''};
      }
    },
    deleteEvent:function(index) {
      if(confirm('Are you sure you want to delete this event?')) {
        this.events.$remove(index);
      }
    }
  }
})
