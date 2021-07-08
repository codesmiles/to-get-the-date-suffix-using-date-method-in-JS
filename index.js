function actualDate(dt)
  {
    return dt.getDate()+(dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th'))); 
  }

dt = new Date();
console.log(actualDate(dt));


/*This is how the main concept works without the time function check below */

let d = 2;

if( d % 10 === 1 && d !== 11){
	d = d + "st";
}
else if( d % 10 === 2 && d !== 12){
	d = d + "nd";
}
else if( d % 10 === 3 && d !== 13){
	d = d + "rd";
}
else{
	d = d + "th";
}
console.log(d);