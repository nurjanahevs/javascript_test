// Expected Result : 
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.


const source = [
  {
    id: "1",
    data: {
        first_name: "Rian",
        last_name: "Nugraha"
    },
    school: {
      id: "1",
      data: "PLMK-JKT"
    },
  },
  {
    id: "2",
    full_name: "Ari Santoso",
    school: {
      id: "1",
      short_name: "GRSR",
      data: "JKT"
    },
  },
  {
    id: "3",
    data: {
      first_name: "Rahman",
      last_name: "Sunggara"
  },
  school: {
      id: "1",
      short_name: "GELM",
      data: "JKT"
    },
  },
  {
      id: "4",
      data: {
          first_name: "Rian",
          last_name: "Nugraha"
      },
      school: {
          id: "2",
          data: "PLMK-BDG"
      },
  },
]
// const newData = JSON.parse(source);
// const result = newData.map(item => ({ id: item.id, name: `${item.first_name} ${item.last_name}`, school_name:`${item.data}` }));
// console.log(result,'ini change data')

const data_specific = source.map(e => {
  const name = source.concat
  return {
   name: e('data.first_name' + 'data.last_name') || e.data.full_name,
   school_name: e.data
  }
})
console.log(data_specific,'console specific')

const dataAsJson = `[
  {
    "lastname": "Stark",
    "firstname": "Tony",
    "id": 1
  },
  {
    "lastname": "Parker",
    "firstname": "Peter",
    "id": 2
  },
  {
    "lastname": "Rogers",
    "firstname": "Steve",
    "id": 3
  }
]`;

const data = JSON.parse(source);

const changedData = data.map(item => ({  id: item.id, name: `${item.data.first_name} ${item.data.last_name} || ${item.data.full_name}`, school_name:`${item.school.id} ${item.school.short_name} || ${school.data}` }));

console.log(changedData);
