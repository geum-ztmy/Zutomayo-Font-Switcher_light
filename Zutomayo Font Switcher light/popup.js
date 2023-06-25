document.getElementById('showContent').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'showContent' });
    });
});

document.getElementById('doNothing').addEventListener('click', () => {
    window.close();
});
