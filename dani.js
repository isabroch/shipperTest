var daniTabs = document.querySelectorAll('tab.dani');
var daniContentContainer = document.querySelector('.izzyshipwrap.dani content');
var daniContent = document.querySelector('.izzyshipwrap.dani home');

daniContentContainer.innerHTML = daniContent.outerHTML;

for (var i = 0; i < daniTabs.length; i++) {
  daniTabs[i].addEventListener('click', function(e) {
    daniTabChange(e.target);
  });
}

function daniTabChange(tab) {
  var active = "home";
  var url = document.querySelector('.izzyshipwrap.dani url span');

  for (var i = 0; i < daniTabs.length; i++) {
    daniTabs[i].classList.remove("active");
  }

  tab.classList.add("active");
  active = tab.innerHTML;
  url.innerHTML = active;
  daniContent = document.querySelector('.izzyshipwrap.dani ' + active);

  daniContentContainer.innerHTML = daniContent.outerHTML;
}
