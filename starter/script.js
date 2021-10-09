/*let js = 'amazing';
console.log(40+30-20+10);

//variable
//variable lekhar niom holo prothom word er protho okkhor choto hater r second word er prothom okkhor boro hater.

let firstName ="Sultan";
let lastName ="Nadim";
console.log(firstName,lastName);

//=====Data type=====
//1.number,2.string,3.boolean,4.undefine,5.null

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof 100);
console.log(typeof javascriptIsFun);
console.log(typeof "sultan");
console.log(typeof false);

javascriptIsFun ="yes";
console.log(typeof javascriptIsFun);

let sultan;
console.log(typeof sultan);

//======oparetor=====

//mathmatical oparetor
const now = 2021;
const ageSultan = now - 1992;
const ageAntor = now - 2002;

console.log(ageSultan,ageAntor);
console.log(ageSultan / 2,ageAntor * 2, 2**3);
//2**3 means 2 two the power 3. 2*2*2=8

//assainment operator

let x =10+5;
x +=10;// x = x+10 =25
x *=4;// x = x*4 =100
x++;// x = x + 1 = 101;
x--;// x = x - 1 =100
console.log(x);

//compareson oparetor

console.log(ageSultan > ageAntor);


//====avarage===

const now = 2021;
const ageSultan = now - 1992;
const ageAntor = now - 2002;
const ageAverage = (ageSultan + ageAntor) / 2;
console.log(ageSultan,ageAntor,ageAverage);

//===challange one====
const massMark = 78;
const heightMark = 1.69;
const massJone = 92;
const heightJone = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJone = massJone / (heightJone * heightJone);
const markHigherBMI = BMIMark > BMIJone;
console.log(BMIMark,BMIJone,markHigherBMI);

//=====tamplate string=====

const firstName = "Sultan";
const job = "Teacher";
const birthDate = 1992;
const currentYear = 2021;

const sultan = ` My name is ${firstName} i am a ${currentYear - birthDate} year old ${job}. `;
console.log(sultan);

//multipale line string tamplate

console.log(`write
multipale
line`);

//=====driving license====

const age =17;

if(age >= 18){
	console.log('Congratulation Sultan you are able to get driving license');
}else{
	const yearLeft = 18 - age;
	console.log(`You are ${yearLeft} years left to get driving license.`);
}


//=====challange two====

const massMark = 78;
const heightMark = 1.69;
const massJone = 92;
const heightJone = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJone = massJone / (heightJone * heightJone);
const markHigherBMI = BMIMark > BMIJone;

if(markHigherBMI){
	console.log('Mark BMI is heigher than Jon');
}

if(markHigherBMI){
	console.log(`Marks BMI (${BMIMark}) is heigher than Jone BMI (${BMIJone}) .`);
}

//====type conversition(convert string to number and number to string)=====


const birthYear = "1992";
console.log(birthYear + 20);
console.log(Number(birthYear)+20);

const myName = "sultan";
console.log(Number(myName));

const presentDate = 2021;
console.log(String(2021));

//====type coercion(auto convert number to string and string to number..only(-)make number and (+)make string)=====

console.log('my age is '+ 29 + ' and i am a student');
console.log('10'-2);
console.log(10-5+"5");
console.log(10-5+15);

//===5 folsy value .. 0,'',undefined,null,NaN

console.log(Boolean (0));
console.log(Boolean (undefined));
console.log(Boolean (''));
console.log(Boolean (null));
console.log(Boolean (NaN));

const money = 0;

if(money){
	console.log('dont spend all money');
}else{
	console.log('you should get a job');
}

//====equality oparetor(=== both value need to same number or same string)(== need value same..number or string not matter)=====


const age ="18";

if(age == 18) console.log('congrats you are adult!');
if(age !== 18) console.log(' you are not adult!');


const favourite = Number(prompt('What is your favourite number?'));

console.log(favourite);
console.log(typeof favourite );

if(favourite === 23){
	console.log('great 23 is a good number');
}else if(favourite === 20){
	console.log('great 20 is also a good number');
}else{
	console.log('number is not 23 or 20');
}

if(favourite !==23)console.log('why not 23?')


//====logical boolean operator(&& and || or ! not)=====


const hasDrivingLiciense = true;
const hasGoodVision = true;

if(hasDrivingLiciense && hasGoodVision){
	console.log('sultan can drive');
}else{
	console.log('someone else should drive');
}

if(hasDrivingLiciense || hasGoodVision){
	console.log('sultan can drive');
}else{
	console.log('someone else should drive');
}

const isTried = true;

if(hasDrivingLiciense && hasGoodVision && !isTried){
	console.log('sultan can drive');
}else{
	console.log('someone else should drive');
}


//=====switch case statements=====

const day = 'thusday';

switch(day){
	case 'saturday':
	case 'sunday':
		console.log('week start');
	break;
	case 'moneday':
	case 'tuesday':
		console.log('i am going to school');
	break;
	case 'wednesday':
	case 'thusday':
		console.log('i am writing code');
	break;
	case 'friday':
		console.log('enjoy the weekend');
	break;
	default:
	console.log('there is no valid date');
}

//====coditional(teynary) operator ======


const age = 29;

age >= 20 ? console.log('you can drink wine!'):console.log('you need to drink water');

const drink = age >= 20 ? 'drink wine': 'drink water';
console.log(drink);
console.log(`i would like to ${age >= 20 ? 'drink wine': 'drink water'}`);*/



//=====challange 4 =====

const bill = 430;
const tip = bill >=50 && bill<=300? bill*.15:bill*.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill+tip}`);






















