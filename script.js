'use strict';

let func = function (i) {
    if (typeof i !== 'string') {
        alert("нестрока");
    };

    if (i.length > 30) {
       console.log( i.trim().substring(0, 30) + `...`);
    } else {
        console.log(i.trim());
    }

};

func( "55555555555555555555555555555555555555555555555555555555555555555555555555555");