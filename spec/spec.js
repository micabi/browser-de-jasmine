describe("関数addのテスト", function(){
  it("1 + 1 = 2", function(){
    expect(add(1,1)).toBe(2);
  });
  it("2 + 3 = 5", function(){
    expect(add(2,3)).toBe(5);
  });
});

describe("関数minusのテスト", function(){
  it("1 - 1 = 0", function(){
    expect(minus(1,1)).toBe(0);
  });
  it("2 - 3 = -1", function(){
    expect(minus(2,3)).toBe(-1);
  });
  it("5 - 4 = 1", function(){
    expect(minus(5,4)).toEqual(1);
  });
});