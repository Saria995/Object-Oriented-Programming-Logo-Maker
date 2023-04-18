const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Defines a SVG Class that has a constructor with three methods for rendering

class Svg{
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    }
    render(){
        return `<scg version= "1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

//Array of questions user will be prompted

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to 3 characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (hexadecimal number may also be used):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (hexadecimal number may also be used): ",
    },
    {
        type: "list",
        name: "shape-type",
        message: "Choose a shape type you would like:",
        choices: ["Circle", "Square", "Triangle"],
    },
];

//Function to write data to file

function writeToFile(fileName, data) {
    console.log(`Writing [${data}] to file [${fileName}]`);

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Successful! You have generated a logo SVG!");
    });
}

//init function
async function init() {
    console.log('start init');
    let svgString = "";
    let svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);

    //User Input: Text

    const userText = answers.text;
    if (userText.length < 1 || userText.length > 3) {
        console.log("Invalid answer, Please enter 1-3 characters");
        return;
    } 

    console.log(`User text: [${userText}]`);

    //User input: Font color
    user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");

    //User Input: Shape Color
    const userFontColor = answers["text-color"];
    console.log(`User font color: [${userFontColor}]`);

    //User Input: Shape type
    const userShapeColor = answers["shape-color"];
    console.log(`User shape color: [${userShapeColor}]`);
    //User shape inputs- this is to make sure the user selects the designated shape listed and is given a result/display of what has been chosen
   
    const userShapeType = answers["shape-type"].toLowerCase();
    console.log(`User entered shape type = [${userShapeType}]`);

    let userShape;
     if (userShapeType === "square") {
        userShape = new Square();
        console.log("User selected Square shape");
    } else if (userShapeType === "circle") {
        userShape = new Circle();
        console.log("User selected Circle Shape");
    } else if (userShapeType === "triangle") {
        userShape = new Triangle();
        console.log("User selected Triangle Shape");
    } else {
        console.log("Invalid shape. Please select from the listed shapes.");
        return;
    
    }
  
  userShape.setColor(userShapeColor);

    // Create a new SVG instance and add the shape and text elements

    const svg = new Svg();
    svg.setTextElement(userText, userFontColor);
    svg.setShapeElement(userShape);
    svgString = svg.render();

    //Prints the shape to log
    console.log("Displaying shape: \n\n" + svgString);

    console.log("Logo Generator Complete!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString);

}
init()


