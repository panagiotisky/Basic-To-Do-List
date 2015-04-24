var theList = document.getElementById('the-list');
document.getElementById('save').addEventListener('click', function(e) {
  e.preventDefault();
  localStorage.setItem('toDoList', theList.innerHTML);
});
document.getElementById('clear').addEventListener('click', function(e) {
  e.preventDefault();
  localStorage.clear();
  location.reload();
});

function loadList() {
  if ( localStorage.getItem('toDoList') ) {
    theList.innerHTML = localStorage.getItem('toDoList');
  }
}

loadList();
