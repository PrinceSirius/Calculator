// required abilities of a calculator:
// accept user inputs of number, operator, and another number
// should accept decimal numbers
// store inputs 
// recognize inputs and perform calculations
// return a result


// Optional features
// Should accept  longer arithmetic operations.
// display all input as it is being entered
// store previous total as start of the next operation
// clear button should clear all entries
// should prevent invalid inputs (operators next to each other, two decimal points)
// should be able to perform operations on negative numbers


const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if(!target.matches('button')) {
        return;
    } else {
        calculator.parseInput(value)
        //pass to parse method
        console.log(value)
    }
})

const calculator = {
    displayText: '0',
    PrevTotal: null,

    parseInput(value) {
        

        switch (value){
            case '=' :
                this.calcAnswer(this.displayText)
                break;
                case 'AC':
                    this.clearAll()
                    break;
                    case '.':
                        if(this.displayText == 0 ){
                           this.addText('0.')
                        } else {
                            this.addText(value)
                        }
                        default:
                            this.addText(value)
                            break;
                        
                    }
        
    },
    addText(value) {

        if (this.displayText === '0'){
            this.displayText = ''
        } else if (this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null 
        }
         if( isNaN(+(value)) && isNaN(+(this.displayText))){
             if(isNaN(this.displayText.slice(-1))){
                 return;
             }
             
         }
         this.displayText += value
         this.outPutText(this.displayText)
    },

    outPutText(text){
        document.querySelector(".calculator-screen").value = text
    },

    calcAnswer(equation){
        let result = Function("return " + equation)()
        this.outPutText(result)

  },

  clearAll(){
      this.displayText = '0',
      this.prevTotal = null,
      this.outPutText(this.displayText)

  }
    
}


