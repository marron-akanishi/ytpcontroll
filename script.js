chrome.commands.onCommand.addListener(function(command){
    if(command == "play-pause"){
        chrome.tabs.query( {url: "https://www.youtube.com/watch?*"}, function(tabs){
            chrome.tabs.executeScript(tabs[0].id,{code: 'document.getElementsByClassName("ytp-play-button")[0].click()'})
        })
    }
    if(command == "prev"){
        chrome.tabs.query( {url: "https://www.youtube.com/watch?*list=*"}, function(tabs){
            chrome.tabs.executeScript(tabs[0].id,{code: 'document.getElementsByClassName("ytp-prev-button")[0].click()'})
        })
    }
    if(command == "next"){
        chrome.tabs.query( {url: "https://www.youtube.com/watch?*list=*"}, function(tabs){
            chrome.tabs.executeScript(tabs[0].id,{code: 'document.getElementsByClassName("ytp-next-button")[0].click()'})
        })
    }
})