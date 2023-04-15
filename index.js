const inquirer = require("inquirer");
const fs = require("fs");


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
    console.log("Writing [" + data + "] to file [" + fileName + "]")

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successful! You have generated a logo SVG!");
    });
}

//init function
async function init() {
    console.log('start init');
    var svgString = "";
    var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);

    //User Input: Text

    var user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        console.log("Invalid answer, Please enter 1-3 characters");

        return;
    }

    console.log("User text: [" + user_text + "]");

    //User input: Font color
    user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");

    //User Input: Shape Color
    user_shape_color = answers.shape;
    console.log("User shape color: [" + user_shape_color + "]");

    //User Input: Shape type
    user_shape_type = answers["shape-type"];
    console.log("User entered shape type = [" + user_shape_type + "]");

    //User shape inputs- this is to make sure the user selects the designated shape listed and is given a result/display of what has been chosen

    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected Square shape");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected Circle Shape")
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User selected Triangle Shape")
    }
    else {
        console.log("Invalid shape, please select from the listed shapes");
    }
    user_shape.setColor(user_shape_color);

    // Create a new SVG instance and add the shape and text elements

    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    //Prints the shape to log
    console.log("Displaying shape: \n\n" + svgString);

    console.log("Logo Generator Complete!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString);
}
init()


