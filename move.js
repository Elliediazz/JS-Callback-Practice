function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    ////////////////// Moving with consle /////////////////////
    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        setInterval (function(){

            if (direction === 'west'){
            x = x - 1
            }
            if (direction === 'north'){
            y = y + 1
            }
            if (direction === 'east'){
            x = x + 1
            }
            if (direction === 'south'){
            y = y - 1
            }

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }, 1)      //** can also place setInterval (moveCharacter, 1) instead

        //////////////////// Added to move with keys /////////////////////
        document.addEventListener('keydown', function(e){      
            if (e.repeat) return;

            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            
            callback(direction)
        })

        /////////// Added to stop the character from moving ///////////////
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }
    
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}