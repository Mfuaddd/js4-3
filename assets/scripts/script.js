
// function myInclude(text,searched,index = 0) {
//     let temp
//     for (let i = index; i < text.length; i++) {
//         temp=""
//         if (text[i] === searched[0]) {
//             for (let j = i; j < i+searched.length; j++){
//                 temp+=text[j]
//             }
//         }
//         if(temp === searched){
//             return i
//         }
//     }
//     return -1
// }
// let soz = "salri arif"
// console.log(myInclude(soz,"rif"));

// function task12(text) {
//     text = text.toString()
//     const arr =[]
//     for (let i = 0; i < text.length; i++) {
//         arr.push(text[i])
//     }
//     return arr
// }

// console.log(task12("123321"));

// function task13(text) {
//     text = text.toString()
//     let max = +text[0]
//     for (let i = 1; i < text.length; i++) {
//         if (+text[i]>max){
//             max = +text[i]
//         }
//     }
//     return max
// }

// console.log(task13("123321"));

// function task14(text) {
//     text = text.toString()
//     let min = +text[0]
//     for (let i = 1; i < text.length; i++) {
//         if (+text[i]<min){
//             min = +text[i]
//         }
//     }
//     return min
// }
// console.log(task14("123321"));

// function task15(text) {
//     text = text.toString()
//     let sum = 0
//     let mult= 1
//     for (let i = 0; i < text.length; i++) {
//         sum+=+text[i]
//         mult*=+text[i]
//     }
//     const arr =[sum,mult,(sum/text.length)]
//     return arr
// }
// console.log(task15("123321"));

// function task16(text) {
//     text = parseInt(text)
//     const arr = []
//     for (let i = 1; i < text; i++) {
//         if(!(text%i)){
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(task16("234"));

// function task17(text) {
//     text = parseInt(text)
//     let count = 0
//     for (let i = 1; i < text; i++) {
//         if(!(text%i)){
//             count++
//         }
//     }
//     return count
// }
// console.log(task17("234"));

// function task18(text) {
//     text = parseInt(text)
//     let sum = 0
//     let mult= 1
//     for (let i = 1; i < text; i++) {
//         if(!(text%i)){
//             sum+=i
//             mult*=i
//         }
//     }

//     return [sum,mult]
// }
// console.log(task18("125"));

// function task20(text) {
//     text = parseInt(text)
//     let isPrime = true
//     for (let i = 2; i < text; i++) {
//         if(!(text%i)){
//             isPrime=false
//         }
//     }

//     return isPrime
// }
// console.log(task20("14"));

// function task21(start,end) {
//     start = parseInt(start)
//     end = parseInt(end)
//     let isPrime 
//     const arr = []
//     for (let i = start; i < end; i++) {
//         isPrime = true
//         for (let j = 2; j < i; j++) {
//             if(!(i%j)){
//                 isPrime=false
//             }
//         }
//         if (isPrime) {
//             arr.push(i)
//         }
//     }

//     return arr
// }
// console.log(task21(0,20));

// function task22(text) {
//     text = text.toString()
//     let isPoli
//     for (let i = 0; i < text.length; i++) {
//         isPoli = true
//         if(!(text[i] === text[text.length-i-1])){
//             isPoli = false
//         }
//     }
//     return isPoli
// }
// console.log(task22("sal"));

// function task23(start,end) {
//     start = parseInt(start)
//     end = parseInt(end)
//     let temp
//     let isPoli
//     const arr = []
//     for (let i = start; i < end; i++) {
//         temp = i.toString()
//         isPoli = true
//         for (let j = 0; j < temp.length; j++) {
//             if(!(temp[j] === temp[temp.length-j-1])){
//                 isPoli = false
//             }
//         }
//         if (isPoli) {
//             arr.push(i)
//         }
//     }

//     return arr
// }
// console.log(task23(10,33));


// function task2(start,end) {
//     start = parseInt(start)
//     end = parseInt(end)
//     let temp
//     let isPoli
//     const arr = []
//     for (let i = start; i < end; i++) {
//         temp = i.toString()
//         isPoli = true
//         for (let j = 0; j < temp.length; j++) {
//             if(!(temp[j] === temp[temp.length-j-1])){
//                 isPoli = false
//             }
//         }
//         if (isPoli) {
//             arr.push(i)
//         }
//     }

//     return arr
// }
// console.log(task23(10,33));


