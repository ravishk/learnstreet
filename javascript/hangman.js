//INITIALIZING THE GAME DISPLAY
function getDisplay(word)
{   
    // REPLACE THIS CODE WITH YOUR getDisplay() METHOD
     var disp='';
    for(var i=0; i < word.length; i++){ 
        disp=disp+'-';
    }
    return disp;
}

//FIND THE LETTER IS IN WORDS   
function isLetterInWord(word,letter)
{
    // REPLACE THIS CODE WITH YOUR isLetterInWord() METHOD
     if (word == null){ 
    return; 
    }
    else{
    if(word.search(letter)!=-1){
        return true;
    }
    else{
        return false;
    }
    }
}

//SETTING GAME DISPLAY IF THE LETTER EXIST
function getLetter(word,letter,display)
{
        if (word == null){ 
    return; 
    }
    else{
    while(word.search(letter)!=-1){
        var index=word.search(letter);
        display = display.substr(0, index) + letter + display.substr(index + 1);
        word = word.substr(0, index) + '-' + word.substr(index + 1);
    }
    return display;
}

}

/*  
    *RETURN 'finished' if game has finished 
    *RETURN 'lose' if game has lossed 
    *RETURN 'continue' if it is not finished
*/
function isFinished(word,display,left)
{
    // REPLACE THIS CODE WITH YOUR isFinished() METHOD
        if(left!=0){
        if(word==display){
            return 'finished';
        }
        else{
            return 'continue';
        }
    }
    else{
        return 'lose';
    }
}
