score_cnt = 0;
cross = true;
fg = 1;
audio = new Audio('music1.mp3');
audiogo = new Audio('over.mp3');
setTimeout(() => {
    audio.play();
}, 400);
document.onkeydown = function (a) {
    // console.log("this is the key ",a.keyCode);
    if (a.keyCode == 38 && fg == 1) {
        // console.log("the upper key is being printed");

        hero = document.querySelector('.hero');
        hero.classList.add('animatehero');
        setTimeout(() => {
            hero.classList.remove('animatehero');
        }, 700);
    }
    if (a.keyCode == 39 && fg == 1) {
        // console.log("the upper key is being printed");

        hero = document.querySelector('.hero');
        herox = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.left = herox + 52 + "px";
    }

    if (a.keyCode == 37 && fg == 1) {
        // console.log("the upper key is being printed");

        hero = document.querySelector('.hero');
        herox = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.left = (herox - 52) + "px";
    }

    if (fg == 0) {
        hero = document.querySelector('.hero');
        // hero.style.bottom = '-120px'
        // hero.style.transform = 'rotate(-65deg)';
        // hero.style.left = 0;
    }
}

setInterval(() => {
    hero = document.querySelector('.hero');
    gameover = document.querySelector('.over');
    villain = document.querySelector('.villain');

    hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'));

    vx = parseInt(window.getComputedStyle(villain, null).getPropertyValue('left'));
    vy = parseInt(window.getComputedStyle(villain, null).getPropertyValue('top'));

    offsetX = Math.abs(hx - vx);
    offsetY = Math.abs(hy - vy);
    // console.log(offsetX,offsetY);
    if (offsetX < 45 && offsetY < 52) {
        gameover.innerHTML = "Game Over <br> Press F5 (Reload) to Play Again";
        villain.classList.remove('animatevillain');
        audio.pause();
        audiogo.play();
        hero.style.left = 0;
        hero.style.transform = 'rotate(-125deg)';
        // hero.style.bottom = '-200px';
        // hero.style.visibility = 'hidden';
        scoreup(score_cnt - 1);
        fg = 0;
    }
    else if (offsetX < 145 && cross) {
        score_cnt += 1;
        // console.log(score_cnt);
        scoreup(score_cnt);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(villain, null).getPropertyValue('animation-duration'));

            //we put timeout so that there is less schock

            if (aniDur >= 2.1) {
                newDur = aniDur - 0.1;
                villain.style.animationDuration = newDur + 's';
                console.log(newDur);
            }

            else if (score_cnt == 20) {
                newDur = aniDur - 0.3;
                villain.style.animationDuration = newDur + 's';
                console.log(newDur);
            }

            else if (score_cnt == 30){
                newDur = aniDur - 0.3;
                villain.style.animationDuration = newDur + 's';
                console.log(newDur);
            }

            else if (score_cnt == 40) {
                newDur = aniDur - 0.1;
                villain.style.animationDuration = newDur + 's';
                console.log(newDur);
            }
            else if (score_cnt == 50) {
                newDur = aniDur - 0.1;
                villain.style.animationDuration = newDur + 's';
                console.log(newDur);
            }
            else if (score_cnt == 60) {
                newDur = aniDur - 0.1;
                villain.style.animationDuration = newDur + 's';
                console.log(newDur);
            }
        }, 500);
    }

}, 10);

function scoreup(score_cnt) {
    score.innerHTML = "Your Score: " + score_cnt;
}