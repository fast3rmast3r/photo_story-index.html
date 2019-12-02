var click_on_me = document.getElementById('click_on_me');

click_on_me.onclick = function() {
 var x = Math.floor(Math.random() * 400);
 var y = Math.floor(Math.random() * 400);
 click_on_me.style.top = x + 'px';
 click_on_me.style.left = y + 'px';
};
