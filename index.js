function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget() {
  var nested = document.querySelector('div#nested div.target')
  return nested;
}

function increaseRankBy(n) {
  // increases rank in all of the .ranked-list items with n
  const items = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < items.length; i++) {
    items[i].innerHTML = parseInt(items[i].innerHTML) + n;
  }
}

function deepestChild() {
  var elements = document.querySelectorAll('#grand-node div');
  var deepest = elements[elements.length - 1];
  return deepest;
}
