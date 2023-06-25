chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'showContent') {
        ChangeFont();
    } else if (msg.action === 'doNothing') {
        doNothing();
    }
});


function ChangeFont() {
    try {
        const fontFace = new FontFace('ztmy_font', `url(${chrome.runtime.getURL('ZTMY_MOJI-R.otf')})`);
        document.fonts.add(fontFace);
    } catch (error) {
        window.alert("フォントがフォルダの中にあるか確認してみてください。それでもエラーが出るようでしたら教えてください。")
        console.log(error)
    }


    const elements = document.querySelectorAll('body *');
    for (let element of elements) {
        if (element.children.length === 0 && element.textContent.trim() !== '') {
            element.style.fontFamily = 'ztmy_font';
        }
    }
}

//意味のないコード
function doNothing() {
    const elements = document.querySelectorAll('body *');
    for (let element of elements) {
        if (element.children.length === 0 && element.textContent.trim() !== '') {
            element.style.fontFamily = '';
        }
    }
}