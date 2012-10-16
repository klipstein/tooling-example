define(['./module1', './module2'], function(mod1, mod2) {
  window.mod1 = mod1;
  window.mod2 = mod2;
  function square(a) {
    return a*a;
  }
  window.myVal = square(mod1.add(5, 10));
});
