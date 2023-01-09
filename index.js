var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.addEventListener("wheel", function (e) {
  if (e.deltaY < 0) {
    slider.valueAsNumber += 0.1;
    output.innerHTML = slider.value;
    information = slider.value;
    chrome.tabs.executeScript(null, {
      code: 'var config = "' + information + '";'
    }, function () {
      chrome.tabs.executeScript(null, { code: 'document.getElementsByTagName("video")[0].playbackRate=config' });
    });
  } else {
    slider.value -= 0.1;
    output.innerHTML = slider.value;
    information = slider.value;
    chrome.tabs.executeScript(null, {
      code: 'var config = "' + information + '";'
    }, function () {
      chrome.tabs.executeScript(null, { code: 'document.getElementsByTagName("video")[0].playbackRate=config' });
    });
  }
  e.preventDefault();
  e.stopPropagation();
})
slider.oninput = function () {
  output.innerHTML = slider.value;
  information = slider.value;
  chrome.tabs.executeScript(null, {
    code: 'var config = "' + information + '";'
  }, function () {
    chrome.tabs.executeScript(null, { code: 'document.getElementsByTagName("video")[0].playbackRate=config' });
  });
}
