var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value // Update the current slider value (each time you drag the slider handle) 
slider.oninput = function () {
    output.innerHTML = slider.value;
    information = slider.value;
    chrome.tabs.executeScript(null, {
        code: 'var config = "' + information + '";'
    }, function () {
        chrome.tabs.executeScript(null, { code: 'document.getElementsByTagName("video")[0].playbackRate=config' });
    });
}
