
(function(){
  function applyTheme(t){
    document.documentElement.classList.toggle('dark-mode', t==='dark');
    document.body && document.body.classList.toggle('dark-mode', t==='dark');
  }
  var saved = localStorage.getItem('tx-theme');
  if(!saved){ saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'; }
  applyTheme(saved);
  window.txToggleTheme = function(){
    var cur = localStorage.getItem('tx-theme') || saved;
    var next = cur==='dark' ? 'light' : 'dark';
    localStorage.setItem('tx-theme', next);
    applyTheme(next);
    var btn = document.getElementById('txThemeBtn');
    if(btn) btn.textContent = next==='dark' ? '\u2600\ufe0f' : '\ud83c\udf19';
  };
  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('txThemeBtn');
    if(btn){
      var cur = localStorage.getItem('tx-theme') || saved;
      btn.textContent = cur==='dark' ? '\u2600\ufe0f' : '\ud83c\udf19';
    }
  });
  if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('/sw.js').catch(function(){});
    });
  }
})();
