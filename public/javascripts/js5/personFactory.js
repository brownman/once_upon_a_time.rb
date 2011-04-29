 var personFactory = function(name, age) {
var privateVar = 7;
return {
toString: function() {
return name + " is " + age * privateVar / privateVar + " years old.";
}
};
};

            
