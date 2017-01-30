//1.

function stringy(length){
	var str = ""					//define an empty string variable

	for (i = 1; i<=length; i++) {

		if (i % 2 == 0) {			//checks the value of i up to the 	
			str += 0				//argument of the length of the string
		} else {					//to see if it is evenly divisible by two
			str += 1				//and then concatenates a 1 or 0 to the string
		}							//according to the result
		
	}

	console.log(str)				//logs the result
}

//2. 

function reversal(numb){

	var str = numb.toString()				//converts the input number into a string of values
											//and then splits it into an array with one character
	var arr = str.split("")					//in each index. Then it reverses the index. Defines a
											//blank array.
	var spl = arr.reverse()					//
											//Changes each index value and changes it to an int
	var arrayInt = []						//and then adds it onto the end of the array.

	for (i = 0; i < spl.length; i++) {
		var integr = parseInt(spl[i])
		arrayInt.push(integr)

	}

	console.log(arrayInt)

}

function reversal2(numb) {

	var k = 0
	var arrayJ = []
	i = 0

	while(Math.pow(10,i) < numb){				//Calculates the length of the number input as the original argument.
		i++										//
		k++										//Finds remainder of original number / 10 and puts it into the array.
	}											//Then subtracts that amount from the original number and divides by 10.
												//It repeats that function for the length of the number. It effectives 
	console.log(k)								//pares off each number from right to left.
												//
	x = numb									//

	for(i = 1; i <= k; i++){

		var j = x % 10

		arrayJ.push(j)

		x = x - j
		x = x / 10

	}
 console.log(arrayJ)

}

//3.

function foo(){

	var fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]		//Takes Fib sequence as an array

	for (i = 0; i < (fib.length - 1); i++){										//Logs each number into the console in order as 'fib[i] + fib[i+1] = fib[i + 2]'

		console.log(fib[i] + " + " + fib[i+1] + " = " + (fib[i] + fib[i+1]))
	}
}

function foo2(lowerBound, upperBound){

	var x = lowerBound								//Takes lower and upper bounds as arguments. Lower bound should be zero for this excercize.
	var y = lowerBound + 1							//Calculates and logs each step of the fib sequence until the sum is greater than the upper bound.
	var z = null

	for(i = 0; i <= upperBound; i){
		console.log(x + " + " + y + " = " + (x+y))
		z = x + y
		x = y
		y = z
		i = z
	}

}

//4.

function checkCoupon(dateString, expDate, email){				//checkCoupon object
	this.dateString = new Date(dateString)
	this.expDate = new Date(expDate)
	this.email = email
	var that = this;

	this.checkDate = function(){
		if (Date.parse(dateString) <= Date.parse(expDate)) {
			return true											//Uses the Date.parse function to compare the expiration date to the 
		} else {												//input current date.
			alert("This coupon is expired!")
			return false
		}
	}

	this.checkEmail = function() {
		this.emailArr = this.email.split("@")
		this.emailArr1 = this.emailArr[0]				//splits the email up into sections with "@", ".", the first character as dividers. 
		
		

		var first = this.emailArr1.split("")
		//second = emailArr3.split("")
		//third = emailArr4.split("")

		var firstChar = first[0]

		if (this.emailArr.length != 2) {
			alert("The email address must contain an '@' symbol!")	//A series of checks for the checkpoints above. Throws an alert if the email is invalid in some way.
			return false
		}
		this.emailArr2 = this.emailArr[1].split(".")

		if (this.emailArr2.length != 2) {							//check that there are at least two word characters on either side of the period.
			alert("A valid email address must have a '.' after the '@'!")
			return false
		}
		this.emailArr3 = this.emailArr2[0]
		this.emailArr4 = this.emailArr2[1]

		if (!isNaN(firstChar)) {								//Makes sure email doesn't start with a number.
			alert("A valid email cannot start with a number!")
			return false

		} else {
			valid1 = /[a-z0-9_]+/i
			valid2 = /[a-z0-9_-]+/i

			if (this.emailArr1.match(valid1) && this.emailArr3.match(valid2) && this.emailArr4.match(valid1)) { //Takes the remaining pieces of the email address 																								
				return true																						//and checks to make sure it only uses acceptible characters.

			} else {																							//From http://regexr.com/
				alert("This email contains invalid characters!")
				return false

			}	
		}
	}
	this.check = function() {								//Simply run checkCoupon.check() to go through the whole process.
		if (this.checkDate() && this.checkEmail()) {
			alert("Your coupon was accepted!")
		}
	}

}
