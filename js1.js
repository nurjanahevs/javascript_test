// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result=[[], []];

number.map(x => {
   if(x % 2 === 0)
      result[1].push(x);
   else
      result[0].push(x);
});
console.log(result,'console result');

