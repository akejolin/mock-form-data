document.body.onload = function() {
  chrome.storage.sync.get("email", function(items) {
    if (!chrome.runtime.error) {
      items.email ? document.getElementById("email").value = items.email : null;
    }
  });
  chrome.storage.sync.get("runInProd", function(items) {
    if (!chrome.runtime.error) {
      items.runInProd ? document.getElementById("runInProd").checked = items.runInProd : null;
    }
  });
}

document.getElementById("set").onclick = function() {
  const email = document.getElementById("email").value;
  const runInProd = document.getElementById("runInProd").checked;
  chrome.storage.sync.set({ 
    "email" : email,
   }, function() {});
   chrome.storage.sync.set({ 
    "runInProd" : runInProd,
   }, function() {});
}
