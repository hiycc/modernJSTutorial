describe("pow", function() {

  describe("raise x to power 3", function() {
    //用for循环生成测试
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3`, function() {
        assert.equal(pow(x, 3), expected);
      })
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  })

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("raises to n-th power", function() {
    assert.equal(pow(3, 4), 81);
  });

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

  
});


