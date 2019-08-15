function Letter (guessed, letter){

    this.guessed = false;
    this.letter = letter;
    this.display = function(){
        if(this.guessed){
            return this.letter;
        }
        return ' - ';
    }
    this.checkFunction = function(guessedLetter){
        if(guessedLetter===this.letter && this.guessed){
            this.guessed=true;
return true;
        }
        return false;
    }
}

module.export = Letter;