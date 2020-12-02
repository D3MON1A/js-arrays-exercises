function _lyricsGenerator(param){
      let string = "";
        for (let x =0; x < param.length; x++){
          if (param[x] === 0){
            string += "Boom "
          }
          else if (param[x] === 1){
            string += "Drop the base "
            if (param[x-1] === 1 && param[x-2] === 1){
              string += '!!!Break the base!!! '
            }
          }
        }
      return string
    }

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))