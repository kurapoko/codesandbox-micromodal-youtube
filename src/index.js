import MicroModal from "micromodal";

// var player;
// var is_yt_ready = false;
// let do_play = false;
// const w = 900;
// const h = 600;
// const tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// var onPlayerReady = function (e) {
//   is_yt_ready = true;
// };
// const onPlayerStateChange = function (e) {
//   if (e.data == YT.PlayerState.ENDED) {
//   } else if (e.data == YT.PlayerState.PLAYING) {
//   } else if (e.data == YT.PlayerState.PAUSED) {
//   } else if (e.data == YT.PlayerState.BUFFERING) {
//   } else if (e.data == YT.PlayerState.CUED) {
//     if (do_play) {
//       do_play = false;
//       document.querySelector(".c-modal-movie-content").style.visibility =
//         "visible";
//       e.target.playVideo();
//     }
//   } else {
//   }
// };

// onPlayerReady();
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// window.onYouTubeIframeAPIReady = function () {
//   player = new YT.Player("modal_yt_player", {
//     width: w,
//     height: h,
//     playerVars: { autoplay: 1 },
//     videoId: "M7lc1UVf-VE",
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     }
//   });
// };

// MicroModal.show("modal-movie", {
//   onShow: function (modal, trig, eve) {
//     document.querySelector(".c-modal-movie-content").style.visibility =
//       "hidden";

//     if (!is_yt_ready) {
//       MicroModal.close("modal-movie");
//       return;
//     }
//     do_play = true;
//   }
//   onClose: function (modal, trig, eve) {
//     if (is_yt_ready) {
//       player.stopVideo();
//       eve.stopPropagation();
//     }
//   }
// });

setTimeout(function () {
  MicroModal.show("modal-movie", {
    onShow: function (modal) {}
  });
}, 5000);
