const group = [
  { name: "Irina", score: 0, date: "2022-10-11" },
  { name: "Vasily", score: 0, date: "2022-10-10" },
  { name: "David", score: 0, date: "2022-10-11" },
  { name: "Kristina", score: 0, date: "2022-10-12" },
  { name: "Varvara", score: 0, date: "2022-10-01" },
  { name: "Tanya", score: 0, date: "2022-10-11" },
];
function getTopStudent(group) {
  let topStudent;
  let bestScore = 0;
  let bestDate = new Date(0);
  group.forEach((student) => {
    if (student.score > bestScore) {
      bestScore = student.score;
      bestDate = new Date(student.date);
      topStudent = student.name;
    } else if (student.score == bestScore) {
      if (new Date(student.date) < bestDate) {
        bestDate = new Date(student.date);
        topStudent = student.name;
      }
    }
  });

  //console.log(`Top student is ${topStudent}`);
  return topStudent;
}
getTopStudent(group);

module.exports = getTopStudent;
