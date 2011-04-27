
describe("CreditCard", function () {  
  it("cleans the number by removing spaces and dashes", function() {  
    expect(CreditCard.cleanNumber("123 4-5")).toEqual("12345");  
  });  
    
  it("validates based on mod 10", function () {  
    expect(CreditCard.validNumber("4111 1111 1111-1111")).toBeTruthy();  
    expect(CreditCard.validNumber("4111 1111 1111-1121")).toBeFalsy();  
  });  
}); 

