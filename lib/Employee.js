class Square {
    constructor(textColor, shapeColor, text) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.text = text;
      }

    

    render(){
        return  `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" x="125" y="125" fill="${this.shapeColor}" /><text x="140" y="105" fill="${this.textColor}">${this.text}</text></svg>`  
    }
}



class Triangle {
    constructor(textColor, shapeColor, text) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.text = text;
      }

      render(){
        return  `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,150 20,150"  fill="${this.shapeColor}"  /><text x="140" y="105" fill="${this.textColor}">${this.text}</text></svg>`
      }
}

class Employee {
    constructor(textColor, shapeColor, text) {
      this.textColor = textColor;
      this.shapeColor = shapeColor;
      this.text = text;
    }

    render(){

        
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="50" fill="${this.shapeColor}" /><text x="140" y="105" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

  module.exports = {Circle, Triangle, Square}