const fs = require('fs');
const { start } = require('repl');

                    //  [ 0,  1,   2,  3,   4,  5,  6,   7,  8,    9,  10,  11]
const musicalAlphabet = ['C','Db','D','Eb','E','F','Gb','G','Ab', 'A','Bb','B'];
const ionianSteps = [2,2,1,2,2,2,1];

// MODES
//G Ionian =>          ['G','A','B', 'C','D','E','Gb', 'G']
const ionianModeFormula = ['1','2','3','4','5','6','7'];
const aeolianModeFormula = ['1','2','b3','4','5','b6','b7'];
const bluesModeFormula = ['1','b3','4','b5','5','b7'];
const diminishedScaleFormula = ['1','2','b3','4','b5','b6','6','7'];
const dorianModeFormula = ['1','2','b3','4','5','6','b7'];
const harmonicMinorScaleFormula = ['1','2','b3','4','5','b6','7'];
const jazzOrMelodicMinorScaleFormula = ['1','2','b3','4','5','6','7'];
const locrianModeFormula = ['1','b2','b3','4','b5','b6','b7'];
const lydianModeFormula = ['1','2','3','#4','5','6','7'];
const majorPentatonicScaleFormula = ['1','2','3','5','6'];
const minorPentatonicScaleFormula = ['1','b3','4','5','b7'];
const mixolydianModeFormula = ['1','2','3','4','5','6','b7'];
const naturalMinorScaleFormula = ['1','2','b3','4','5','b6','b7'];
const phyrigianModeFormula = ['1','b2','b3','4','5','b6','7'];
const phyrigianDominantModeFormula = ['1','b2','3','4','b6','b7'];
const prometheusScaleFormula = ['1','2','3','#4','6','b7'];
const rockPentatonicScaleFormula = ['1','b3','4','#5','b7'];

// CHORDS

// Major
const majorChordFormula = ['1', '3', '5'];

// Minor
const minorChordFormula = ['1', 'b3', '5'];

// 7th
const seventhChordFormula = ['1', '3', '5', 'b7'];

// Major 7th
const majorSeventhChordFormula = ['1', '3', '5', '7'];

// Minor 7th
const minorSeventhChordFormula = ['1', 'b3', '5', 'b7'];

// 6th
const sixthChordFormula = ['1', '3', '5', '6'];

// Minor 6th
const minorSixthChordFormula = ['1', 'b3', '5', '6'];

// Diminished
const diminishedChordFormula = ['1', 'b3', 'b5'];

// Diminished 7th
// [1, b3, b5, bb7]
const diminishedSeventhChordFormula = ['1', 'b3', 'b5', '6'];

// Half diminished 7th Also called minor 7thb5
const minorSeventhFlatFifthChordFormula = ['1', 'b3', 'b5', 'b7'];

// Augmented
const augmentedChordFormula = ['1', '3', '#5'];

// 7th #5
const seventhSharpFifthChordFormula = ['1', '3', '#5', 'b7'];

// 9th
const ninthChordFormula = ['1', '3', '5', 'b7', '9'];

// 7th #9
const seventhSharpNinthChordFormula = ['1', '3', '5', 'b7', '#9'];

// Major 9th
const majorNinthChordFormula = ['1', '3', '5', '7', '9'];

// Added 9th
const addedNinthChordFormula = ['1', '3', '5', '9'];

// Minor 9th
const minorNinthChordFormula = ['1', 'b3', '5', 'b7', '9'];

// Minor add 9th
const minorAddNinthChordFormula = ['1', 'b3', '5', '9'];

// 11th
// [1, (3), 5, b7, 9, 11]
const eleventhChordFormula = ['1', '3', '5', 'b7', '9', '11'];

// Minor 11th
const minorEleventhChordFormula = ['1', 'b3', '5', 'b7', '9', '11'];

// 7th #11
const seventhSharpEleventhChordFormula = ['1', '3', '5', 'b7', '#11'];

// Major 7th #11
const majorSeventhEleventhChordFormula = ['1', '3', '5', '7', '9', '#11'];

// 13th
// [1, 3, 5, b7, 9, (11), 13]
const thirteenthChordFormula = ['1', '3', '5', 'b7', '9', '11', '13'];

// Major 13th
// [1, 3, 5, 7, 9, (11), 13]
const majorThirteenthChordFormula = ['1', '3', '5', '7', '9', '11', '13'];

// Minor 13th
const minorThirteenthChordFormula = ['1', 'b3', '5', 'b7', '9', '11', '13'];

// Suspended 4th (sus, sus4)
const susFourChordFormula = ['1', '4', '5'];

// Suspended 2nd (sus2)
const susTwoChordFormula = ['1', '2', '5'];

// 5th (power chord)
const fifthChordFormula = ['1', '5'];

let allFormulas = [
    [ionianModeFormula, 'Ionian Mode'],
    [aeolianModeFormula,'Aeolian Mode'],
    [bluesModeFormula,'Blues Scale'],
    [diminishedScaleFormula,'Diminished Scale'],
    [dorianModeFormula,'Dorian Mode'],
    [harmonicMinorScaleFormula,'Harmonic Minor Scale'],
    [jazzOrMelodicMinorScaleFormula,'Meloodic Minior Scale'],
    [locrianModeFormula,'Locrian Mode'],
    [lydianModeFormula,'Lydian Mode'],
    [majorPentatonicScaleFormula,'Major Pentatonic Scale'],
    [minorPentatonicScaleFormula, 'Minor Pentatonic Scale'],
    [mixolydianModeFormula, 'Mixolydian Scale'],
    [naturalMinorScaleFormula,'Natural Minor Scale'],
    [phyrigianModeFormula,'Phyrigian Mode'],
    [phyrigianDominantModeFormula, 'Phyrigian Dominant Mode'],
    [prometheusScaleFormula,'Prometheus Scale'],
    [rockPentatonicScaleFormula,'Rock Pentatonic Scale'],
    [majorChordFormula,'Major Chord'],
    [minorChordFormula,'Minor Chord'],
    [seventhChordFormula,'7 Chord'],
    [majorSeventhChordFormula,'M7 Chord'],
    [minorSeventhChordFormula,'m7 Chord'],
    [sixthChordFormula,'6 Chord'],
    [minorSixthChordFormula,'m6 Chord'],
    [diminishedChordFormula,'dim Chord'],
    [diminishedSeventhChordFormula,'dim 7th Chord'],
    [minorSeventhFlatFifthChordFormula,'m7b5 Chord'],
    [augmentedChordFormula,'+ Chord'],
    [seventhSharpFifthChordFormula,'7#5 Chord'],
    [ninthChordFormula,'9 Chord'],
    [seventhSharpNinthChordFormula,'7# 9 Chrod'],
    [majorNinthChordFormula,'M9 Chord'],
    [addedNinthChordFormula,'add9 Chord'],
    [minorNinthChordFormula,'m9 Chord'],
    [minorAddNinthChordFormula,'m add9 Chord'],
    [eleventhChordFormula,'11 Chord'],
    [minorEleventhChordFormula,'m11 Chord'],
    [seventhSharpEleventhChordFormula,'7# 11 Chord'],
    [majorSeventhEleventhChordFormula,'M7 11 Chord'],
    [thirteenthChordFormula,'13 Chord'],
    [majorThirteenthChordFormula,'M13 Chord'],
    [minorThirteenthChordFormula,'m13Chord'],
    [susFourChordFormula,'sus4 Chord'],
    [susTwoChordFormula,'sus2 Chord'],
    [fifthChordFormula,'5 Chord']
];

// returns the notes of the ionian mode of the starting note
function findIonianModeForStartingNote(startingNote){
    let startIndex = musicalAlphabet.indexOf(startingNote);
    let lengthOfTHeMusicalAlphabet = musicalAlphabet.length; // 11
    let currentIndex = startIndex;
    let notes = [startingNote];

    for(let x = 0; x < ionianSteps.length; x++){

        if( (currentIndex + ionianSteps[x]) > (lengthOfTHeMusicalAlphabet - 1) ){

            currentIndex = (currentIndex + ionianSteps[x]) - lengthOfTHeMusicalAlphabet;

        } else {

            currentIndex = currentIndex + ionianSteps[x];

        }

        notes.push(musicalAlphabet[currentIndex]);

    }

    return notes;

}



// returns the notes of a mode or chord 
function findTheModeOrChord(startingNote, formulaArray){
    let notes = [startingNote];
    let ionianModeOfStartingNote = findIonianModeForStartingNote(startingNote);
    // console.log(`ionianModeOfStartingNote => ${ionianModeOfStartingNote}\n`);
    let shiftedIonianModeOfStartingNote = Array.from(ionianModeOfStartingNote);
    shiftedIonianModeOfStartingNote.shift();
    // console.log(`shiftedIonianModeOfStartingNote => ${shiftedIonianModeOfStartingNote}\n`);
    // console.log(`ionianModeOfStartingNote => ${ionianModeOfStartingNote}\n`);
    ionianModeOfStartingNote = ionianModeOfStartingNote.concat(shiftedIonianModeOfStartingNote);
    // console.log(`ionianModeOfStartingNote concated => ${ionianModeOfStartingNote}\n`);
    // console.log(`formulaArray => ${formulaArray}\n`);

    // iterate over the formulaArray
    for(let x = 0; x < formulaArray.length; x++){
        // console.log(`notes => ${notes}\n`);
        if(x > 0){

            // for each index get the length of the string
            if( formulaArray[x].includes('b') || formulaArray[x].includes('#') ){ // has a flat or sharp

                let initialTargetNote;

                if( formulaArray[x].length === 3 ){ // #11, #13
                    // console.log(`parseInt((formulaArray[x].substring(1, 2)) - 1) => ${parseInt((formulaArray[x].substring(1, 2)) - 1)}\n`);
                    initialTargetNote = ionianModeOfStartingNote[parseInt((formulaArray[x].substring(1, 2)) - 1)];

                } else if( formulaArray[x].length === 2 ){ // b5
                    // console.log(`parseInt((formulaArray[x].substring(1)) - 1) => ${parseInt((formulaArray[x].substring(1)) - 1)}\n`);
                    initialTargetNote = ionianModeOfStartingNote[parseInt((formulaArray[x].substring(1)) - 1)];
                }
                
                // console.log(`initialTargetNote => ${initialTargetNote}\n`);

                let musicalAlphabetTargetIndex;

                if( formulaArray[x].includes('b') ){

                    if((musicalAlphabet.indexOf(initialTargetNote) - 1) < 0){

                        musicalAlphabetTargetIndex = musicalAlphabet.length - 1;

                    } else {

                        musicalAlphabetTargetIndex = musicalAlphabet.indexOf(initialTargetNote) - 1;

                    }

                    notes.push( musicalAlphabet[musicalAlphabetTargetIndex] );

                } else if( formulaArray[x].includes('#') ){

                    if( (musicalAlphabet.indexOf(initialTargetNote) + 1) > (musicalAlphabet.length - 1) ){
                        musicalAlphabetTargetIndex = (musicalAlphabet.indexOf(initialTargetNote) + 1) - (musicalAlphabet.length - 1);
                    } else {
                        musicalAlphabetTargetIndex = musicalAlphabet.indexOf(initialTargetNote) + 1;
                    }

                    notes.push( musicalAlphabet[musicalAlphabetTargetIndex] );

                }

            } else {

                let initialTargetNote = ionianModeOfStartingNote[parseInt((formulaArray[x]) - 1)];
                let musicalAlphabetTargetIndex = musicalAlphabet.indexOf(initialTargetNote);
                notes.push( musicalAlphabet[musicalAlphabetTargetIndex] );

            }

        }

    }

    return notes;

}


function getAllScalesAndChords(input){ // input => musicalAlphabet

    
    let resultsArray = [];

    for(let x = 0; x < input.length; x++){

        
        

        for(let y = 0; y < allFormulas.length; y++){

            let outputObject = {};
            outputObject.startingNote = input[x];
            outputObject.name = allFormulas[y][1];
            outputObject.formula = allFormulas[y][0].join();
            outputObject.notes = findTheModeOrChord(input[x], allFormulas[y][0]);
            resultsArray.push(outputObject);

        }

    }

    return resultsArray;

}

console.log(JSON.stringify(getAllScalesAndChords(musicalAlphabet)));
