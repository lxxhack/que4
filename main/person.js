// Write your code here
module.exports = Person;
function Person(name,age)
{
  this.name=name;
  this.age=age;
  this.introduce=function()
  {
    conlog("My name is ",name,". I am ",age," years old.");
  }
}
