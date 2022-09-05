// var x ='I am fayaz "Nasrati"'
// console.log(x)


var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var stringone= 'Startupistan Is The Best Place For Learning Web Devolopment'
var stringtwo = 'I love Coding'
console.log(stringone.charAt(23))



// console.log(stringone.charCodeAt(0))

// console.log(stringone.concat(stringtwo,alpha))


console.log(alpha.concat(" ",stringone, "  ",stringtwo))
// console.log(alpha.endsWith('YZ'))
// console.log(alpha.endsWith('Y'))
console.log(String.fromCharCode(73,32,76,79,86,69,32,89,79,85))

console.log(stringtwo.includes('love'))
console.log(stringone.indexOf('for'))
console.log(stringone.lastIndexOf('is'))
// console.log(stringone.match('is'))


console.log(stringtwo.replace('love' , 'hate'))

console.log(stringone.startsWith('Startupistan'))

console.log(stringone.toUpperCase())
console.log(stringone.toLowerCase())
console.log(alpha.length)

var y = alpha.trim()
console.log(y)
console.log(alpha.split(''))





function toUp(){
    var name = document.querySelector('input').value;
    document.write(name.toUpperCase())
}



// var x = 123

// console.log(typeof(x))

// var xx = x.toString()
// console.log(typeof(xx))


// var alj = xx +x;
// console.log(alj)

// var alj2 = x +xx;
// console.log(alj2)


// var u = 123;
// var uu = u.toString();
// var add = u +uu;
// console.log(uu)



// let a = 9.6543;
// console.log(a.toFixed(0));



// var c = '120.22';
// console.log(typeof(c))

// var d = Number(c)
// console.log(typeof(d))





// var jo = 'john'
// console.log(typeof(jo))

// var hn= Number(jo)
// console.log(typeof(hn))





var f = '123'
console.log(typeof(f))
var ff = parseInt(f)
console.log(typeof(ff))

var g = '-10'
console.log(typeof(g))
var gg = parseInt(g)
console.log(typeof(gg))

var k = '-10.33'
console.log(typeof(k))
var kk = parseInt()
console.log(typeof(kk))





console.log(parseFloat("10"))
console.log(parseFloat("10.33"))
console.log(parseFloat("10 20 30"))
console.log(parseFloat("10 years"))
console.log(parseFloat("years 10"))




    const car = ['Rolls Royce', 'BMW', 'Mercedes-Benz', 'Toyota']
    const model = ['Royal', 'Feitsa', 'Compressor', 'Land-Cruiser']
    const year = ['2016','2017','2019','2018']
    console.log(car.concat(model), (year))




    const fruits = ["Banana","Orange","Apple","Mango"]
    fruits.splice(2, 0, "Lemon", "Kiwi")
    document.write(fruits)



    


    






























// console.log(alpha.length)

// console.log(alpha.slice(1,6))
// console.log(alpha.substring(6))
// console.log(alpha.substr(1,10))
