//const shapes = require("./index.js")
//Defines the shape class which has the color constructor and sets the color value
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }

//Defines a Circle class that extends Shape and renders an SVG circle with properties
class Circle extends Shape {
    render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
  }

//Defines a Square class that extends Shape and renders SCG Square with properties
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
    }
}

//Defines a traingle class that extends Shape and renders the SCG triangle with properties
class Triangle extends Shape {
    render() {
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
  }

module.exports = { Circle, Square, Triangle }