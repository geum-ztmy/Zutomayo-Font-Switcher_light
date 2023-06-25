chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'showContent') {
        ChangeFont();
    }
});

function ChangeFont() {
    const fontFace = new FontFace('ztmy_font', `url(${chrome.runtime.getURL('ZTMY_MOJI-R.otf')})`);
    document.fonts.add(fontFace);

    const elements = document.querySelectorAll('body *');
    for (let element of elements) {
        if (element.children.length === 0 && element.textContent.trim() !== '') {
            element.style.fontFamily = 'ztmy_font';
        }
    }
}