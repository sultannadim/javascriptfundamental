'use strict';

/*let hasDrivingLicense = false;
const passTest = true;

if(passTest) hasDrivingLicense = true;
if(hasDrivingLicense) console.log('great you can drive');

// ====function====

function names(){
    console.log('my name is sultan nadim');
}
//finction calling
names();

function fruiteProcessor(apple , orange){
    const juice =`juice with ${apple} apple and ${orange} orange.`;
    return juice;
}

const makeJuice = fruiteProcessor(5,4);
const makeJuice2 = fruiteProcessor(3,6);

console.log(makeJuice);
console.log(makeJuice2);

// ====function declaration and expression=====

// function declararion

function calage(birthyear){
    return 2021-birthyear;
}
const age1 = calage(1991);
// console.log(age1);

// function expression 

const calage1 = function(birthyear){
    return 2021-birthyear;
}
const age2 = calage1(2002);
console.log(age1,age2);

// ====arrow function=====

const colage3= birthyear=> 2021-birthyear;
const age3 = colage3(1992);
console.log(age3);

// complex

const calage4=(birthyear,firstName)=>{
    const age4=2021-birthyear;
    const retairment=65-age4;
    return `${firstName} retairment age left ${retairment}`;
}
console.log(calage4(1992,'sultan'));
console.log(calage4(2002,'antor'));

// =====function call in another function====

function cutPiceses (fruite){
    return fruite * 4;
}
function fruiteProcessor(apple,orange){
    const applePiceses = cutPiceses(apple);
    const orangePiceses = cutPiceses(orange);
    const juice = `Apple juice made by ${applePiceses} piceses of apple and Orange juice is made by ${orangePiceses} piceses of orange. `
    return juice;
}
console.log(fruiteProcessor(3,4));

// ====retairment age by expression====

const calAge = function(birthyear){
    return 2021-birthyear;
}

const retairmentAge = function(year,firstName){
    const age = calAge(year);
    const retairment =65 - age;
    if(retairment > 0){
        console.log(`${firstName} retairment year left ${retairment}`)
        return retairment;
    }else{
        console.log(`${firstName} has already retired!!!`)
        return -1;
    }
}

console.log(retairmentAge(1992,'sultan'));
console.log(retairmentAge(1950,'alamgir'));


// ======Array======

const friends = ['Ali','Babu','Shojib'];
console.log(friends);
console.log(friends[2]);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 2])

const calAge = function(birthyear){
    return 2021-birthyear;
}
const years = [1992,1995,2002];
console.log(calAge(years[0]));
console.log(calAge(years[1]));
console.log(calAge(years[years.length-1]));


// ====array build in function=====

const friends = ['Ali','Babu','Shojib'];


// add new array Last
friends.push('polash');
console.log(friends);
// add new array first
friends.unshift('sumim');
console.log(friends);

// remove array from last 
friends.pop();
console.log(friends);
// remove array from first
friends.shift();
console.log(friends);

console.log(friends.indexOf('Shojib'));
console.log(friends.includes('Ali'));

// =====object data stracture=====

const sultanArray = [
    'sultan',
    'nadim',
    2021-1992,
    'student',
    ['shojib','babu','ali']
]

// object 

const sultan = {
    firstName: 'sultan',
    lastName: 'nadim',
    age:2021-1992,
    job:'student',
    friends:['shojib','babu','ali']
}
console.log(sultan.firstName);
console.log(sultan['lastName']);

const nameKey = 'Name';

const fullName1 = sultan['first' + nameKey];
const fullName2 = sultan['last' + nameKey];

console.log(fullName1,fullName2);

const question = prompt('what you want to know about sultan? firstName, lastName, age, job.please input your query');

if(sultan[question]){
    console.log(sultan[question]);
}else{
    console.log('wrong input!! please input from firstName, lastName, age, job.')
}

sultan.postCode = 3850,
sultan['twitter'] = '@sultannadim_sn'

console.log(sultan);




const sultan = {
    firstName: 'sultan',
    lastName: 'nadim',
    birtYear:1992,
    job:'student',
    drivingLicense: false,
    calAge: function(){
        return 2021-this.birtYear
    },
    canDrive: function(){
        return `${this.firstName} is ${this.calAge()}-year old and he has ${this.drivingLicense ? 'a' : 'no'} driving license.`
    }
}
//object er vitore function nile setake method bole...

console.log(sultan.calAge());
console.log(sultan['calAge']());

console.log(sultan.canDrive());

// ====cosing challange====

const sultan = {
    fullName: 'sultan nadim',
    mass:75,
    height:1.6,
    calBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const antor = {
    fullName: 'sultan najim',
    mass:50,
    height:1.7,
    calBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

sultan.calBMI();
antor.calBMI();
console.log(sultan.bmi,antor.bmi);



// ======LOOF======

for(let rep = 1; rep <=10 ; rep++){
    console.log(`I earn the amount of ${rep} Taka.`);
}

const sultan = [
    'sultan',
    'nadim',
    2021-1992,
    'student',
    ['shojib','babu','ali'],
    true
]
const type = [];

for(let i = 0; i<sultan.length; i++){
    console.log(sultan[i], typeof sultan[i]);

    //fill empty array
    // type[i] = typeof sultan[i];
    type.push(typeof sultan[i]);
}
console.log(type);

const year = [1992,1995,2002];
const age = [];

for( let i = 0; i<year.length; i++){
    age.push(2021-year[i]);
}
console.log(age);

for(let i =0;i<sultan.length;i++){
    if(typeof sultan[i] !== 'string')continue;
    console.log(sultan[i]);
}

for(let i =0;i<sultan.length;i++){
    if(typeof sultan[i] === 'number')break;
    console.log(sultan[i]);
}


//=====backword loop printing=====

const sultan = [
    'sultan',
    'nadim',
    2021-1992,
    'student',
    ['shojib','babu','ali'],
    true
]

for(let i = sultan.length - 1; i >= 0; i--){
    console.log(i , sultan[i])
}

// loop inside loop

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`exercise list ${exercise}`);
    for(let gim = 1; gim < 5; gim++){
        console.log(`exercise ${exercise} : weight lifting ${gim}`)
    }
}

// ===========while loop==============

let rep = 1;
while(rep <=10){
    console.log(`I jump for ${rep} tiem`);
    rep++;
}

//random while loop

let dice =Math.trunc(Math.random()*6) + 1;

while(dice !== 6){
    console.log(`random number ${dice}`);
    dice =Math.trunc(Math.random()*6) + 1;
    if(dice === 6)console.log(`random number is now finish!!!`)
}*/


//=====final codig challange======

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    return sum / arr.length;
}
const sultan = [100,100,100,100,100]

console.log(calcAverage([6,10,20]));
console.log(calcAverage(sultan));