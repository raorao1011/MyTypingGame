"use strict";

{
    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0]; //ランダムな位置から一個削除
        // spliceの返り値は一個でも配列になるから添え字で0を加える
        target.textContent = word;
        loc = 0;
    }

    const words = [
        "red",
        "blue",
        "pink",
    ];
    let word;
    let loc = 0;
    let startTime;
    let isPlaying = false; //play中かどうか、ゲーム中にクリックして最初に戻らないように

    const target = document.getElementById("target");

    document.addEventListener("click", () => {
        if (isPlaying === true) {
            retrun;
        }
        isPlaying = true;
        startTime = Date.now();
        setWord();
    });

    document.addEventListener("keydown", e => {
        if (e.key !== word[loc]) {
            return;
        };

        loc++;

        //1: _ed
        //2: __d
        //3: ___
        target.textContent = "_".repeat(loc) + word.substring(loc);

        if (loc === word.length) {
            if (words.length === 0) {
                const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                const result = document.getElementById("result");
                result.textContent = `Finished! ${elapsedTime} seconds`;
                return;
            }
            setWord();
        }
    });
}