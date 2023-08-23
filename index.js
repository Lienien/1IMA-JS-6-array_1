// oppgave 1
// var oppg1 = ['a', 'b', 'c', 'e', 'f']
// console.log(oppg1[0])


// oppgave 2
// var oppg2 = ['a', 'b', 'c', 'e', 'f', "sigurd", "EKte Andreas"]
// var x = oppg2.length -1;
// console.log(x);
// console.log(oppg2[x]);

// oppgave 3
// var oppg3 = ['3', '66', '45']
// function sum(oppg3) {
//     return Number(oppg3[0])+Number(oppg3[1])+Number(oppg3[2])
// }

// console.log(sum(oppg3))

// function produkt(oppg3) {
//     return Number(oppg3[0])*Number(oppg3[1])*Number(oppg3[2])
// }

// console.log(produkt(oppg3))

// oppgave 4

var list1=[1,2,3,4,5]
var list2=[0,1,2,3,4]
var result=[]

for (var i=0; i < list1.length; i++) {
    result.push(list1[i]+list2[i]);
}

console.log(result)
