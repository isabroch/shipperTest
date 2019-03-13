var blakeTabs = document.querySelectorAll('tab.blake');
var blakeContentContainer = document.querySelector('.izzyshipwrap.blake content');
var blakeContent = document.querySelector('.izzyshipwrap.blake home');

blakeContentContainer.innerHTML = blakeContent.outerHTML;

for (var i = 0; i < blakeTabs.length; i++) {
  blakeTabs[i].addEventListener('click', function(e) {
    blakeTabChange(e.target);
  });
}

function blakeTabChange(tab) {
  var active = "home";
  var url = document.querySelector('.izzyshipwrap.blake url span');

  for (var i = 0; i < blakeTabs.length; i++) {
    blakeTabs[i].classList.remove("active");
  }

  tab.classList.add("active");
  active = tab.innerHTML;
  url.innerHTML = active;
  blakeContent = document.querySelector('.izzyshipwrap.blake ' + active);

  blakeContentContainer.innerHTML = blakeContent.outerHTML;
}
