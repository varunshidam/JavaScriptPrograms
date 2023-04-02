const users = [
  { name: "King", value: 21 },
  { name: "raj", value: 37 },
  { name: "Aana", value: 45 },
  { name: "Bob", value: -12 },
  { name: "Jim", value: 13 },
  { name: "Doll", value: 37 },
];
const sortedusers = users.sort(function (a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(sortedusers);
