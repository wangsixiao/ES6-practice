// var a=1,b=2,c=3;
// var [a,...c] = [11,22,33];
// console.log("a:"+a);
// console.log("b:"+b);
// console.log("c:"+c);

//对象解构赋值
var obj = {
	arr:[
		"hello",
		{
			name:"wsx"
		}
	]
}

let {arr:[hl,{name}]} = obj;
console.log(hl + " " + name);
//方法
let {floor,pow} = Math;
let [a,b] = [2,3];
console.log(floor(a)); //2
console.log(pow(a,b)); //8
//其他
var obj = {
	// a:11,
	b:21
}
function test({a=10,b}){
	console.log(a + " " + b);
}
test(obj);
//字符串
console.log('hello'.indexOf("he") !== -1);
console.log('hello'.includes("he"));
console.log('hello'.repeat(3));//重复3次 starsWith endsWith 以什么字母开始结束

//创建标签
let title = "hello world"
let tpl = `
<div>
	<p>${title + `<span>${'you are stuiped'}</span>`}</p>
</div>`;
console.log(tpl);
//新添加的数据类型
//Symbol、undefined、null、Number、boolean、string、object、
let name1 = Symbol();
{
	var person = {};
	person.name1 = "wang";
	// person[name1] = "wang";
	console.log(person.name1);
}
{
	let name1 = Symbol();
	person[name1] = "xiao";
	console.log(person[name1]);
}
console.log(person.name1);
//
var user = {
	full_name:function(){
		return this.fname + " " + this.lname;
	}
}
user.fname = "Bob";
user.lname = "hello";
console.log(user.full_name());

//proxy
var user1 = new Proxy({},{
	get:function(obj,prop){
		switch(prop){
			case "full_name":
				return obj.fname + " " + obj.lname;
		}
	}
})
user1.fname = "wang";
user1.lname = "xiao";
console.log(user1.full_name);