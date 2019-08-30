window.onload = function() {
    const imgSrc = new Array('img/daikichi.png','img/chuukichi.png','img/kichi.png','img/kyou.png','img/daikyou.png');
    const resetSrc = 'img/omikuji.png';

    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const omikujiImg = document.getElementById('omikuji-img');

    startBtn.onclick = function() {
        const random = Math.floor(Math.random() * imgSrc.length);
        omikujiImg.src = imgSrc[random];

        if(random == 1){
            alert('いい1日になりそうだ！');
        }
   }
    resetBtn.onclick = function() {
      　 omikujiImg.src = resetSrc;
   }
}
