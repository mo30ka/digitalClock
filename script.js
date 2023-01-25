'use strict'
const startTime = performance.now(); // 開始時間(処理時間計測用)

const clock = function(){
  const nowTime = new Date();// 現在の日時・時刻の情報を取得
  //1桁の場合先頭に0をつける関数
  const zero = function(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }
  let year = zero(nowTime.getFullYear());  // 年を取得
  let month = zero(nowTime.getMonth() + 1);  // 月を取得(0-11までの整数値) 
  let date = zero(nowTime.getDate());  // 日を取得
  // 曜日を取得
  let dayNum = nowTime.getDay();
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = weekday[dayNum];

  let hour = zero(nowTime.getHours());  // 時を取得
  let min = zero(nowTime.getMinutes()); // 分を取得
  let sec = zero(nowTime.getSeconds()); // 秒を取得

  // 日付・時刻の文字列を作成
  let today = `${year}/${month}/${date} ${day}`;
  let time = `${hour}:${min}:${sec}`;

  // 文字列を出力
  document.getElementById("clock-date").innerText = today;
  document.getElementById("clock-time").innerText = time;
};

setInterval(clock, 1000);// 1秒ごとにclock関数を呼び出す

const endTime = performance.now(); // 終了時間(処理時間計測用)
console.log(endTime - startTime); // 何ミリ秒かかったかを表示する


