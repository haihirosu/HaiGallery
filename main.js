$(function () {
  $(window).scroll(function () {
      // $('#interval').text('スクロール値：' + $(this).scrollTop());
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
  });
});




// $(window).scroll(function() {
//     tpx = $(this).scrollTop();
//     $("#pixcel").text(tpx);
//     // $("img.hg").css({
//     //     'opacity':funcCSS
//     // });

//     // function funcCSS(tpx){
//     //     return 0.5 - tpx/100;
//     // }
//   });

  // $(function () {
  //   $('div.line').each(function () {
  //     var $win = $(window),
  //         $winH = $win.height(),
  //         $connect = $(this),
  //         position = $connect.offset().top,
  //         current = 0,
  //         scroll;
  //     $win.on('load scroll', function () {
  //       scroll = $win.scrollTop();
  //       current = (1 - (position - scroll) / $winH) * 2 * 100;
  //       if (current > 99.9) {
  //         current = 100;
  //       }
  //       if (scroll > position - $winH) {
  //         $connect.css({width: current + '%'});
  //       }
  //     });
  //   });
  // });
// $(function(){
//   var $win = $(window),
//       $winH = $win.height(),
//       $connect = $('img.hg'),
//       position = $connect.offset().top,
//       current = 0,
//       scroll;
//   $win.on('load scroll', function(){
//     scroll = $win.scrollTop();

//   })
// })

