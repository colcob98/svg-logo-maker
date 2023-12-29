class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="40" y="40" width="150" height="150" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="115, 25 195, 160 35, 160" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="120" r="100" fill="${this.color}" />`;
  }
}

module.exports = {
  Square,
  Triangle,
  Circle,
};
