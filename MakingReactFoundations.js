// FILTER MAP DESTRUCTING SPREAD OPERATOR!



let arr=[1,2,3,4,5];
const ans = arr.filter(elem =>elem>2)


//Filter
console.log("filter ans: " , ans);


//Map
const ans2 = arr.map(each=> each*5)
console.log("Map ans ", ans2)


// Spread Op
var arr2 = [...arr];
arr.pop();
console.log(arr);
console.log(arr2)

// destructuring

var ob ={ 
    name:"Harsh",
    age:12,
    email:"lakslkassh@gmail.com",
    obj2:{
        age2:50,
        rashi:"karak",
    }
}

let{rashi}=ob.obj2;
console.log(rashi);


// destructure in array

let arr5 =[function a(){},50,"chahcha","ramu", function b(){}];
const [,sec,,fourth] = arr5;

console.log(sec,fourth);
