// 暗くて読めない画面を修正するコード
(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* 全体の文字色を白く強制する */
        #undiscord, #undiscord * {
            color: #ffffff !important;
            text-shadow: 1px 1px 2px black; /* 文字が読みやすいように影をつける */
        }
        
        /* 入力欄（IDなどを入れる場所）は白背景・黒文字にする */
        #undiscord input[type="text"], 
        #undiscord input[type="search"], 
        #undiscord input[type="number"] {
            color: #000000 !important;
            background-color: #ffffff !important;
            border: 2px solid #ccc !important;
        }

        /* リンクの色を明るい水色にする */
        #undiscord a {
            color: #00b0f4 !important;
        }
    `;
    document.body.appendChild(style);
})();
