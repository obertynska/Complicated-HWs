'use strict';

var lang = 'ru';

let weekRu = "понедельник, вторник, среда, четверг, пятница, субота, воскресенье";
let weekEn = "monday, tuesday, wednesday, thursday, friday, saturday, sunday";

//1
//a

if (lang == "ru"){
    console.log(weekRu);
} else {
    console.log(weekEn);
}

//b

switch (lang) {
    case 'ru':
        console.log(weekRu);
        break;
    case 'en':
        console.log(weekEn);
        break;
}


//c


const ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'субота', 'воскресенье'];

const en = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function show (lang) {
    const arr = [['ru', ru], ['en', en]];
    console.log( Object.fromEntries(arr)[lang] );
}

show(lang);


//2
let namePerson = 'Maksim';

let resultName = (namePerson === 'Artem') ? 'director':
    (namePerson === 'Maksim') ? 'teacher' :
        'student';

console.log(resultName);