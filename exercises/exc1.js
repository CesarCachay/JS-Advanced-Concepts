const list = new Array(6000).join("1.1").split(".");

function removeItemsFormList() {
  var item = list.pop();

  if (item > 1) {
    removeItemsFormList();
  }
}

removeItemsFormList();
