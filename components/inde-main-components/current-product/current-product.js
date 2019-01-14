// components/current-product/current-product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentProduct_data:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    send_choosed(e){
      console.log(e);
      let choosed_name = e.target.dataset.choosed_name;
      let choosed = 'true';
      let choosed_data={
        choosed_name,
        choosed
      }
      console.log(choosed_data);
      this.triggerEvent('choosedEvent', choosed_data);
    }
  }
})
