$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  lazyLoad: true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      768:{
          items:2,
          nav:false
      },
      1200:{
          items:3,
          nav:true,
      }
  }
})



const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-sub'
  })