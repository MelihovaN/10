const getTopStudent = require("./index");

let groups = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

//console.log(getTopStudent(group));

describe("Finding top student", () => {
  test("Sould return correct name according to the score and date", () => {
    const result = "Ivan";
    expect(getTopStudent(groups[0])).toBe(result);
  });

  test("Sould return correct name according to the score and date", () => {
    expect(getTopStudent(groups[1])).toBe("Marina");
  });

  test("Sould return correct name according to the score and date", () => {
    const result = undefined;
    expect(getTopStudent(groups[2])).toBe(result);
  });
});

// describe("Finding top student", () => {
//   it.each([
//     [groups[0], "Ivan"],
//     [groups[1], "Marina"],
//     [groups[2], undefined],
//   ])("Testing arrays, results", (a, result) => {
//     expect(getTopStudent(a)).toBe(result);
//   });
// });
