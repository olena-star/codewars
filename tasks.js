// task1

// function doubleInteger(i) {
 
//     return i * 2;
//   } 
//   let result = doubleInteger(5);
//   console.log(result)

// task2
// function otherAngle(a, b) {
//     return 180-(a+b);
//   }

https://www.codewars.com/kata/5648b12ce68d9daa6b000099
https://www.codewars.com/kata/5aa736a455f906981800360d/
https://www.codewars.com/kata/5ab6538b379d20ad880000ab
https://www.codewars.com/kata/55f73be6e12baaa5900000d4
https://www.codewars.com/kata/57f6ad55cca6e045d200062
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
11 task https://www.codewars.com/kata/573f5c61e7752709df0005d2

12 task https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

13 task https://www.codewars.com/kata/576bb71bbbcf0951d5000044

14 task https://www.codewars.com/kata/5715eaedb436cf5606000381

// task3
// function countSheep (num) {
//     const arr = [];
//     for (i = 1; i <= num; i++) {
//       arr.push(i + " sheep...");
//     }
//     return arr.join('');
//   }
// let result = countSheep(7)
// console.log(result);
task4 

function setAlarm(employed, vacation) {
    return employed && !vacation;
}
console.log(setAlarm(true, false));


task  5
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

task 6

function feast(beast, dish) {
    const beastFirst = beast[0];
        const beastLast = beast[beast.length - 1];
        const dishFirst = dish[0];
        const dishLast = dish[dish.length - 1];
    
    
        return beastFirst === dishFirst && beastLast === dishLast;
    }
    console.log(feast("browb beab", "beeb bteb"));

    task 7

    const areaOrPerimeter = function(l , w) {
        if (l === w){
          return l*w;
          
        }else{
          return 2* (l+w);
        }
      };
      console.log(areaOrPerimeter(3, 3))

      task 8

      function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
        return laLigaGoals+ copaDelReyGoals +championsLeagueGoals;
      }
      let totalGoals = goals(6,8,9);
      console.log(totalGoals);

      task 9 

      function squareOrSquareRoot(array) {
        const resultArray = array.map(number => {
             const squareRoot = Math.sqrt(number);
             return Number.isInteger(squareRoot) ? squareRoot : number * number;
         });
       
       return resultArray;
       
     }
     const array =[5,9,1,0];
     const liebeArr = squareOrSquareRoot(array);
     console.log(liebeArr);

     task 10 

     function abbrevName(name){

        let nameArray = name.split(" ");
        return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
      }

      console.log(abbrevName("Olena Liebe")); 

     task 11

     function mergeArrays(a, b) {
 
        const mergedArray = Array.from(new Set([...a, ...b]));
    
        mergedArray.sort((a, b) => a - b);
    
        return mergedArray;
    }


task 12
    function sumArrays(arr1, arr2) {
   

  
        let totalSum = 0;
    
        for (let i = 0; i < arr1.length; i++) {
            totalSum += arr1[i] + arr2[i];
        }
    
        return totalSum;
    }
    
    const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = sumArrays(arr1, arr2);
console.log(result);

task 13 
function countPositivesSumNegatives(input) {
  
    if (!input || input.length === 0) {
        return [];
    }

    let countPositives = 0;
    let sumNegatives = 0;

    for (let number of input) {
        if (number > 0) {
            countPositives++;
        } else if (number < 0) {
            sumNegatives += number;
        }
    }

    return [countPositives, sumNegatives];
}


task 14

function sumOfPositives(numbers) {
    if (!numbers || numbers.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let number of numbers) {
        if (number > 0) {
            sum += number;
        }
    }

    return sum;
}


const array = [1, -4, 7, 12];
const result = sumOfPositives(array);
console.log(result); 