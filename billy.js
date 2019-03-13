var billyTabs = document.querySelectorAll('tab.billy');
var billyContentContainer = document.querySelector('.izzyshipwrap.billy content');
var billyContent = document.querySelector('.izzyshipwrap.billy home');

billyContentContainer.innerHTML = billyContent.outerHTML;

for (var i = 0; i < billyTabs.length; i++) {
  billyTabs[i].addEventListener('click', function(e) {
    billyTabChange(e.target);
  });
}

function billyTabChange(tab) {
  var active = "home";
  var url = document.querySelector('.izzyshipwrap.billy url span');

  for (var i = 0; i < billyTabs.length; i++) {
    billyTabs[i].classList.remove("active");
  }

  tab.classList.add("active");
  active = tab.innerHTML;
  url.innerHTML = active;
  billyContent = document.querySelector('.izzyshipwrap.billy ' + active);

  billyContentContainer.innerHTML = billyContent.outerHTML;
}
