//1.

function stringy(length){
	var str = ""
	var num = "1"

	for (i = 1; i<=length; i++) {

		if (i % 2 == 0) {
			str += 0
		} else {
			str += 1
		}
		
	}

	console.log(str)
}

//2. 

function reversal(numb){

	var str = numb.toString()

	var arr = str.split("")

	var spl = arr.reverse()

	var arrayInt = []

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

	while(Math.pow(10,i) < numb){
		i++
		k++
	}

	console.log(k)
	
	x = numb

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

	var fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]

	for (i = 0; i < (fib.length - 1); i++){

		console.log(fib[i] + " + " + fib[i+1] + " = " + (fib[i] + fib[i+1]))
	}
}
