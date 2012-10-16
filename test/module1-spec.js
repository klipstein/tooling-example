require(['../src/module1'], function(mod1) {

  describe('add', function() {
    it('should add two values', function() {
      expect(mod1.add(1,2)).toBe(3);
    });
    it('should substract value b from a', function() {
      expect(mod1.sub(1,2)).toBe(-1);
    });
  });

});
