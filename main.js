
//prototype calling function
function extend(Parent,Child){
    Child.prototype=Object.create(Parent.prototype)
    Child.prototype.constructor=Child
}
//function for draw method
function calculation(target){
    target.prototype.draw=function(){
        console.log('Drawing')
    }
}
//inheritance and polymorphism in JS
function Shape(color){
    this.color = color
}
Shape.prototype.common=function(){
    console.log('I am common Method');
}

function Square(width,color){
    this.width=width
    Shape.call(this,color)
}
extend(Shape,Square)

Square.prototype.common=function(){
    console.log('I am calling from Square and I have overRidding');
}

calculation(Square)
var shape=new Shape('yellow')
var sqr1=new Square(15,'green')

var Circle=function(radius,color){
    this.radius=radius
    Shape.call(this,color)
}
extend(Shape,Circle)
//common() Function overRidding here
Circle.prototype.common=function(){
    //if we need to call previous common method
    // Shape.prototype.common.call(this)
    console.log('I am calling from Circle and I have overRidding')
       
}
calculation(Circle)
var circle=new Circle(10,'red')

var shapes=[sqr1,circle,shape]
for(var i of shapes){
    i.common()
}