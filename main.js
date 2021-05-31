$(function () {
  $(window).scroll(function () {
      $('#interval').text('スクロール値：' + $(this).scrollTop());
      var top = $(this).scrollTop();
      if (top >= 0 && top < 55) {
          $("img#hg").removeClass().addClass('hg0');
          $("img#macbook").removeClass().addClass('mc0');
          // $(".bars").removeClass('bars1').addClass('bars0');
      }
      if (top >= 55 && top < 110) {
          $("img#hg").removeClass().addClass('hg1');
          $("img#macbook").removeClass().addClass('mc1');
          // $(".bars").removeClass('bars0').addClass('bars1');
      }
      if (top >= 110 && top < 165) {
          $("img#hg").removeClass().addClass('hg2');
          $("img#macbook").removeClass().addClass('mc2');
      }
      if (top < 110) {
        $(".scroll").removeClass('scroll1').addClass('scroll0');
      }
      if (top >= 110){
        $(".scroll").removeClass('scroll0').addClass('scroll1');
      }
      if (top >= 165 && top < 220) {
          $("img#hg").removeClass().addClass('hg3');
          $("img#macbook").removeClass().addClass('mc3');
      }
      if (top >= 220 && top < 275) {
          $("img#macbook").removeClass().addClass('mc4');
      }
      if (top < 275) {
        $(".facebook").removeClass('fb1').addClass('fb0');
        $(".twitter").removeClass('tw1').addClass('tw0');
        $(".instagram").removeClass('in1').addClass('in0');
        $(".c_txt").removeClass('tx1').addClass('tx0');
      }
      if (top >= 275){
        $("img#hg").removeClass().addClass('hg3');
        $(".facebook").removeClass('fb0').addClass('fb1');
        $(".twitter").removeClass('tw0').addClass('tw1');
        $(".instagram").removeClass('in0').addClass('in1');
        $(".c_txt").removeClass('tx0').addClass('tx1');
      }
      if (top >= 275) {
        $("img#macbook").removeClass().addClass('mc4');
      }
      //for ms
      // if (top < 700 || top > 1000){
      //   $(".ms_1").removeClass('ms1').addClass('ms0');
      // }
      // if (top >= 700 && top <= 1000){
      //   $(".ms_1").removeClass('ms0').addClass('ms1');
      // }
      if (top < 1300 || top > 1600){
        $(".ms_1").removeClass('ms1').addClass('ms0');
      }
      if (top >= 1300 && top <= 1600){
        $(".ms_1").removeClass('ms0').addClass('ms1');
      }
      if (top < 1900 || top > 2200){
        $(".ms_2").removeClass('ms1').addClass('ms0');
      }
      if (top >= 1900 && top <= 2200){
        $(".ms_2").removeClass('ms0').addClass('ms1');
      }
      if (top < 2500 || top > 2800){
        $(".ms_3").removeClass('ms1').addClass('ms0');
      }
      if (top >= 2500 && top <= 2800){
        $(".ms_3").removeClass('ms0').addClass('ms1');
      }
      if (top < 3100 || top > 3400){
        $(".ms_4").removeClass('ms1').addClass('ms0');
      }
      if (top >= 3100 && top <= 3400){
        $(".ms_4").removeClass('ms0').addClass('ms1');
      }
      if (top < 3700 || top > 4000){
        $(".ms_5").removeClass('ms1').addClass('ms0');
      }
      if (top >= 3700 && top <= 4000){
        $(".ms_5").removeClass('ms0').addClass('ms1');
      }
      if (top < 4300 || top > 4600){
        $(".ms_6").removeClass('ms1').addClass('ms0');
      }
      if (top >= 4300 && top <= 4600){
        $(".ms_6").removeClass('ms0').addClass('ms1');
      }
      if (top < 4900 || top > 5200){
        $(".ms_7").removeClass('ms1').addClass('ms0');
      }
      if (top >= 4900 && top <= 5200){
        $(".ms_7").removeClass('ms0').addClass('ms1');
      }
      if (top < 5500 || top > 5800){
        $(".ms_8").removeClass('ms1').addClass('ms0');
      }
      if (top >= 5500 && top <= 5800){
        $(".ms_8").removeClass('ms0').addClass('ms1');
      }

  });
});
