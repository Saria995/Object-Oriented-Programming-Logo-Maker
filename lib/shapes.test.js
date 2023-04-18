const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  it('should set the color correctly', () => {
    const circle = new Circle('red');
    expect(circle.color).toEqual('red');
    circle.setColor('blue');
    expect(circle.color).toEqual('blue');
  });

  it('should render an SVG circle with the correct properties', () => {
    const circle = new Circle('green');
    expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" fill="green">');
  });
});

describe('Square', () => {
  it('should set the color correctly', () => {
    const square = new Square('red');
    expect(square.color).toEqual('red');
    square.setColor('blue');
    expect(square.color).toEqual('blue');
  });

  it('should render an SVG square with the correct properties', () => {
    const square = new Square('green');
    expect(square.render()).toEqual('<rect x="50" y="50" height="200" width="200" fill="green">');
  });
});

describe('Triangle', () => {
  it('should set the color correctly', () => {
    const triangle = new Triangle('red');
    expect(triangle.color).toEqual('red');
    triangle.setColor('blue');
    expect(triangle.color).toEqual('blue');
  });

  it('should render an SVG triangle with the correct properties', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toEqual('<polygon points="100,10 40,198 190,78" height="100%" width="100%" fill="green">');
  });
});