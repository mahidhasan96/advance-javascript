const students = [
    {id: 54, name: "mahidhasan" },
    {id: 53, name: " jamal uddin"},
    {id: 52, name: " kamal uddin"},
    {id: 51, name: " foyez uddin"},
];
const names = students.map(s => s.name);
const id = students.map(s => s.id)
const bigger = students.filter(s => s.id > 52)
const bigger1 = students.find( s => s.id > 51)
console.log(bigger1);