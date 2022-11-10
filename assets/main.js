var app = new Vue({
  el: '#root',
  data: {
    message: 'Hello beauty', 
    img: './assets/img/IMG_0007.jpg',
    showImage: 'imageSee',
  },
  methods: {
    showImg: function(){
      if(this.showImage == 'imageSee'){
        return this.showImage = 'imageHide';
      }else {
        return this.showImage = 'imageSee';
      }
    }
  }
});
