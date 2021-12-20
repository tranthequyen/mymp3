
const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector(".play-forward")
const prevBtn = document.querySelector(".play-back")
let isPlaying = true;
let indexSong=0;
const musics= ["3107_2_duongg_x_na_u_x_w_n_official_mv_8206447241466940560.mp3"
,"BuocQuaNhau-Vu-7120388.mp3"
,"ChungTaCuaHienTaiBeat-SonTungMTP-6919087.mp3" 
,"em_nhu_la_dai_duong_xanh_ngat_slowed_n_reverb_5628959357258430518.mp3"
, "hanh_phuc_bo_roi_em_ngo_quyen_linh_anh_nhu_guc_nga_o_noi_tan_cung_dau_don_-6405350274100759233.mp3"
,"MaiMaiKhongPhaiAnhLofiVersion2-ThanhBinh-6919183.mp3"
, "SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3"
,"thang_dien_justatee_x_phuong_ly_slowed_4110387233402211647.mp3"
, "TuTam-NguyenTranTrungQuan-6131334.mp3"];
playBtn.addEventListener("click", playPause);
song.setAttribute("src", `./music/${musics[indexSong]}` );

nextBtn.addEventListener("click", function(){
    changeSong(1)
})
prevBtn.addEventListener("click", function(){
    changeSong(-1)
})
function changeSong(dir){
    if (dir === 1){
        //next song
        indexSong++;
        if(indexSong >= musics.length){
            indexSong=0;
        }
        isPlaying= true;
    }else if (dir=== -1){
        // prev song
        indexSong--;
        if(indexSong < 0){
            indexSong= musics.length - 1;
        }
        isPlaying= true;
    }
    song.setAttribute("src", `./music/${musics[indexSong]}` );
    playPause();
}
function playPause() {
    if (isPlaying) {
      song.play();  
      playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
      isPlaying = false;
    } else {
      song.pause();
      playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
      isPlaying = true;
      
    }
  }



