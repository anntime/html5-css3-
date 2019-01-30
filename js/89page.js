var person1 = {
	toLocaleString:function(){
		return  "123";
	},
	toString:function(){
		return "456";
	}
};
var person2 = {
	toLocaleString:function(){
		return "789"
	},
	toString:function(){
		return "000"
    }
};
var people = [person1,person2];
alert(people);
alert(people.toString());
alert(people.toLocaleString());
 

