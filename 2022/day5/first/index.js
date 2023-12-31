// Input:
const input = [
    ["R", "P", "C", "D", "B", "G"],
    ["H", "V", "G"],
    ["N", "S", "Q", "D", "J", "P", "M"],
    ["P", "S", "L", "G", "D", "C", "N", "M"],
    ["J", "B", "N", "C", "P", "F", "L", "S"],
    ["Q", "B", "D", "Z", "V", "G", "T", "S"],
    ["B", "Z", "M", "H", "F", "T", "Q"],
    ["C", "M", "D", "B", "F"],
    ["F", "C", "Q", "G"]
]

const rules =[
    "move 1 from 7 to 4",
    "move 3 from 4 to 7",
    "move 4 from 3 to 4",
    "move 5 from 6 to 9",
    "move 1 from 8 to 1",
    "move 2 from 3 to 2",
    "move 3 from 4 to 6",
    "move 1 from 3 to 6",
    "move 9 from 7 to 1",
    "move 1 from 2 to 4",
    "move 3 from 4 to 9",
    "move 4 from 9 to 8",
    "move 6 from 8 to 2",
    "move 1 from 8 to 6",
    "move 1 from 4 to 1",
    "move 11 from 1 to 7",
    "move 1 from 4 to 7",
    "move 7 from 2 to 5",
    "move 5 from 6 to 3",
    "move 2 from 4 to 3",
    "move 2 from 5 to 9",
    "move 1 from 8 to 6",
    "move 3 from 1 to 5",
    "move 2 from 6 to 9",
    "move 1 from 4 to 8",
    "move 2 from 2 to 1",
    "move 7 from 5 to 9",
    "move 6 from 3 to 6",
    "move 1 from 2 to 5",
    "move 1 from 3 to 8",
    "move 12 from 7 to 3",
    "move 1 from 1 to 8",
    "move 2 from 1 to 9",
    "move 20 from 9 to 5",
    "move 1 from 1 to 7",
    "move 5 from 5 to 3",
    "move 1 from 8 to 7",
    "move 2 from 8 to 3",
    "move 2 from 6 to 5",
    "move 1 from 6 to 4",
    "move 18 from 3 to 2",
    "move 1 from 4 to 2",
    "move 1 from 7 to 9",
    "move 1 from 1 to 9",
    "move 1 from 6 to 1",
    "move 8 from 5 to 2",
    "move 1 from 1 to 6",
    "move 19 from 5 to 2",
    "move 5 from 2 to 6",
    "move 2 from 9 to 7",
    "move 20 from 2 to 1",
    "move 1 from 9 to 4",
    "move 8 from 6 to 2",
    "move 5 from 1 to 3",
    "move 27 from 2 to 1",
    "move 34 from 1 to 7",
    "move 1 from 2 to 6",
    "move 2 from 3 to 1",
    "move 1 from 4 to 9",
    "move 1 from 2 to 6",
    "move 2 from 1 to 7",
    "move 1 from 6 to 7",
    "move 1 from 9 to 3",
    "move 2 from 6 to 3",
    "move 1 from 6 to 4",
    "move 5 from 3 to 4",
    "move 5 from 4 to 2",
    "move 4 from 1 to 4",
    "move 4 from 1 to 4",
    "move 2 from 3 to 6",
    "move 1 from 6 to 9",
    "move 25 from 7 to 5",
    "move 1 from 6 to 4",
    "move 17 from 5 to 2",
    "move 14 from 7 to 6",
    "move 1 from 7 to 3",
    "move 1 from 9 to 3",
    "move 10 from 2 to 3",
    "move 2 from 2 to 9",
    "move 12 from 3 to 5",
    "move 18 from 5 to 8",
    "move 1 from 4 to 2",
    "move 5 from 2 to 1",
    "move 1 from 5 to 3",
    "move 3 from 2 to 1",
    "move 1 from 2 to 7",
    "move 2 from 2 to 6",
    "move 9 from 6 to 7",
    "move 16 from 8 to 2",
    "move 6 from 7 to 3",
    "move 2 from 8 to 9",
    "move 1 from 1 to 8",
    "move 16 from 2 to 6",
    "move 1 from 8 to 3",
    "move 2 from 1 to 2",
    "move 1 from 9 to 3",
    "move 7 from 4 to 1",
    "move 7 from 3 to 7",
    "move 9 from 7 to 8",
    "move 1 from 5 to 6",
    "move 2 from 9 to 7",
    "move 1 from 9 to 5",
    "move 11 from 6 to 8",
    "move 1 from 3 to 1",
    "move 1 from 4 to 2",
    "move 2 from 8 to 5",
    "move 3 from 5 to 8",
    "move 2 from 1 to 9",
    "move 5 from 1 to 4",
    "move 3 from 4 to 1",
    "move 1 from 3 to 2",
    "move 3 from 2 to 1",
    "move 1 from 9 to 1",
    "move 1 from 2 to 5",
    "move 2 from 4 to 7",
    "move 20 from 8 to 5",
    "move 1 from 9 to 7",
    "move 11 from 6 to 1",
    "move 17 from 1 to 5",
    "move 1 from 8 to 2",
    "move 7 from 5 to 8",
    "move 1 from 4 to 5",
    "move 2 from 1 to 2",
    "move 2 from 8 to 4",
    "move 4 from 7 to 6",
    "move 2 from 6 to 8",
    "move 2 from 1 to 2",
    "move 1 from 1 to 4",
    "move 4 from 8 to 9",
    "move 2 from 1 to 9",
    "move 3 from 8 to 1",
    "move 25 from 5 to 2",
    "move 23 from 2 to 1",
    "move 1 from 7 to 1",
    "move 6 from 9 to 8",
    "move 6 from 8 to 3",
    "move 3 from 6 to 2",
    "move 10 from 1 to 2",
    "move 1 from 6 to 3",
    "move 2 from 3 to 6",
    "move 2 from 3 to 2",
    "move 2 from 6 to 8",
    "move 1 from 4 to 6",
    "move 14 from 1 to 9",
    "move 2 from 3 to 4",
    "move 14 from 2 to 4",
    "move 1 from 6 to 9",
    "move 17 from 4 to 3",
    "move 1 from 8 to 6",
    "move 2 from 7 to 2",
    "move 1 from 4 to 2",
    "move 1 from 5 to 9",
    "move 9 from 2 to 4",
    "move 17 from 3 to 7",
    "move 3 from 4 to 2",
    "move 1 from 8 to 3",
    "move 4 from 5 to 7",
    "move 1 from 3 to 6",
    "move 1 from 4 to 5",
    "move 14 from 7 to 9",
    "move 2 from 1 to 9",
    "move 3 from 2 to 1",
    "move 1 from 2 to 5",
    "move 1 from 3 to 7",
    "move 4 from 1 to 2",
    "move 2 from 6 to 7",
    "move 3 from 9 to 8",
    "move 4 from 2 to 4",
    "move 17 from 9 to 7",
    "move 1 from 2 to 8",
    "move 8 from 9 to 6",
    "move 1 from 8 to 2",
    "move 19 from 7 to 9",
    "move 9 from 4 to 2",
    "move 5 from 7 to 3",
    "move 3 from 5 to 9",
    "move 6 from 2 to 5",
    "move 1 from 9 to 4",
    "move 3 from 2 to 9",
    "move 25 from 9 to 5",
    "move 1 from 3 to 6",
    "move 2 from 5 to 8",
    "move 6 from 6 to 7",
    "move 1 from 3 to 4",
    "move 2 from 3 to 4",
    "move 1 from 8 to 2",
    "move 2 from 2 to 9",
    "move 2 from 8 to 3",
    "move 5 from 7 to 6",
    "move 3 from 7 to 9",
    "move 7 from 5 to 8",
    "move 2 from 3 to 5",
    "move 1 from 3 to 5",
    "move 1 from 6 to 2",
    "move 6 from 9 to 5",
    "move 1 from 9 to 2",
    "move 1 from 6 to 9",
    "move 2 from 5 to 6",
    "move 2 from 9 to 8",
    "move 11 from 8 to 1",
    "move 2 from 5 to 9",
    "move 3 from 6 to 5",
    "move 1 from 4 to 7",
    "move 5 from 5 to 7",
    "move 1 from 4 to 8",
    "move 7 from 7 to 2",
    "move 12 from 5 to 2",
    "move 10 from 1 to 8",
    "move 1 from 9 to 6",
    "move 3 from 8 to 1",
    "move 1 from 1 to 6",
    "move 10 from 2 to 3",
    "move 8 from 8 to 7",
    "move 1 from 9 to 8",
    "move 2 from 3 to 5",
    "move 14 from 5 to 8",
    "move 1 from 3 to 2",
    "move 3 from 8 to 1",
    "move 3 from 8 to 4",
    "move 3 from 2 to 4",
    "move 5 from 6 to 4",
    "move 8 from 7 to 9",
    "move 6 from 8 to 7",
    "move 1 from 5 to 7",
    "move 6 from 2 to 9",
    "move 4 from 4 to 6",
    "move 4 from 4 to 9",
    "move 3 from 9 to 3",
    "move 1 from 8 to 6",
    "move 1 from 5 to 6",
    "move 2 from 7 to 2",
    "move 1 from 3 to 4",
    "move 3 from 4 to 1",
    "move 3 from 4 to 3",
    "move 5 from 6 to 4",
    "move 4 from 3 to 8",
    "move 1 from 6 to 4",
    "move 8 from 3 to 2",
    "move 2 from 8 to 5",
    "move 11 from 9 to 7",
    "move 9 from 1 to 9",
    "move 2 from 7 to 3",
    "move 1 from 6 to 8",
    "move 1 from 6 to 5",
    "move 5 from 9 to 8",
    "move 3 from 9 to 7",
    "move 2 from 9 to 1",
    "move 2 from 3 to 7",
    "move 12 from 7 to 1",
    "move 2 from 8 to 9",
    "move 5 from 4 to 5",
    "move 4 from 9 to 4",
    "move 1 from 1 to 3",
    "move 7 from 1 to 3",
    "move 7 from 5 to 6",
    "move 1 from 9 to 1",
    "move 1 from 5 to 1",
    "move 5 from 7 to 8",
    "move 4 from 6 to 7",
    "move 5 from 1 to 8",
    "move 1 from 4 to 3",
    "move 12 from 8 to 7",
    "move 2 from 2 to 4",
    "move 2 from 8 to 9",
    "move 3 from 8 to 2",
    "move 2 from 6 to 7",
    "move 4 from 7 to 8",
    "move 1 from 6 to 8",
    "move 4 from 3 to 2",
    "move 15 from 7 to 8",
    "move 1 from 7 to 6",
    "move 3 from 3 to 5",
    "move 2 from 3 to 4",
    "move 5 from 2 to 5",
    "move 3 from 1 to 5",
    "move 4 from 5 to 6",
    "move 4 from 5 to 9",
    "move 1 from 5 to 7",
    "move 4 from 9 to 4",
    "move 2 from 2 to 9",
    "move 2 from 5 to 2",
    "move 2 from 2 to 1",
    "move 3 from 4 to 9",
    "move 2 from 9 to 4",
    "move 2 from 8 to 5",
    "move 2 from 5 to 2",
    "move 8 from 2 to 4",
    "move 2 from 1 to 3",
    "move 2 from 3 to 5",
    "move 3 from 6 to 9",
    "move 2 from 6 to 1",
    "move 2 from 1 to 4",
    "move 1 from 2 to 4",
    "move 1 from 5 to 7",
    "move 2 from 2 to 7",
    "move 18 from 4 to 2",
    "move 1 from 5 to 9",
    "move 2 from 7 to 9",
    "move 18 from 8 to 4",
    "move 1 from 7 to 8",
    "move 22 from 4 to 8",
    "move 6 from 2 to 6",
    "move 3 from 6 to 8",
    "move 3 from 6 to 4",
    "move 3 from 4 to 7",
    "move 3 from 7 to 1",
    "move 14 from 2 to 3",
    "move 10 from 3 to 2",
    "move 27 from 8 to 1",
    "move 1 from 7 to 6",
    "move 1 from 3 to 7",
    "move 2 from 2 to 8",
    "move 2 from 9 to 8",
    "move 18 from 1 to 4",
    "move 6 from 1 to 5",
    "move 10 from 4 to 7",
    "move 1 from 3 to 7",
    "move 4 from 7 to 2",
    "move 3 from 9 to 7",
    "move 1 from 6 to 5",
    "move 1 from 2 to 7",
    "move 2 from 5 to 6",
    "move 2 from 6 to 5",
    "move 3 from 5 to 1",
    "move 6 from 1 to 3",
    "move 4 from 5 to 9",
    "move 11 from 2 to 9",
    "move 2 from 1 to 6",
    "move 3 from 4 to 6",
    "move 5 from 7 to 3",
    "move 2 from 6 to 1",
    "move 2 from 1 to 5",
    "move 1 from 8 to 2",
    "move 1 from 1 to 8",
    "move 1 from 6 to 4",
    "move 2 from 4 to 5",
    "move 4 from 5 to 9",
    "move 11 from 3 to 6",
    "move 1 from 3 to 6",
    "move 8 from 6 to 5",
    "move 1 from 3 to 5",
    "move 4 from 4 to 8",
    "move 21 from 9 to 6",
    "move 2 from 9 to 5",
    "move 1 from 9 to 3",
    "move 1 from 2 to 6",
    "move 7 from 8 to 6",
    "move 12 from 6 to 5",
    "move 1 from 8 to 2",
    "move 10 from 6 to 7",
    "move 15 from 7 to 2",
    "move 2 from 7 to 3",
    "move 13 from 6 to 8",
    "move 9 from 5 to 1",
    "move 12 from 5 to 3",
    "move 1 from 2 to 3",
    "move 1 from 9 to 7",
    "move 9 from 3 to 4",
    "move 3 from 4 to 6",
    "move 1 from 7 to 6",
    "move 6 from 4 to 1",
    "move 2 from 5 to 2",
    "move 6 from 1 to 8",
    "move 9 from 8 to 6",
    "move 7 from 3 to 2",
    "move 1 from 2 to 9",
    "move 9 from 6 to 1",
    "move 13 from 1 to 7",
    "move 4 from 8 to 5",
    "move 2 from 7 to 1",
    "move 3 from 6 to 4",
    "move 3 from 5 to 8",
    "move 3 from 2 to 6",
    "move 1 from 5 to 3",
    "move 1 from 3 to 4",
    "move 1 from 9 to 8",
    "move 3 from 8 to 7",
    "move 12 from 2 to 9",
    "move 10 from 7 to 4",
    "move 5 from 8 to 4",
    "move 1 from 8 to 5",
    "move 11 from 4 to 7",
    "move 8 from 9 to 7",
    "move 1 from 6 to 2",
    "move 8 from 2 to 6",
    "move 1 from 5 to 8",
    "move 4 from 1 to 5",
    "move 4 from 9 to 6",
    "move 3 from 1 to 3",
    "move 2 from 8 to 4",
    "move 1 from 7 to 6",
    "move 1 from 2 to 7",
    "move 2 from 3 to 7",
    "move 4 from 4 to 9",
    "move 11 from 6 to 9",
    "move 10 from 7 to 8",
    "move 1 from 3 to 4",
    "move 1 from 6 to 4",
    "move 4 from 5 to 7",
    "move 6 from 7 to 4",
    "move 1 from 8 to 7",
    "move 4 from 6 to 7",
    "move 12 from 4 to 8",
    "move 12 from 8 to 1",
    "move 1 from 8 to 2",
    "move 10 from 1 to 7",
    "move 2 from 4 to 1",
    "move 8 from 8 to 3",
    "move 4 from 1 to 6",
    "move 8 from 7 to 6",
    "move 2 from 6 to 5",
    "move 2 from 5 to 2",
    "move 13 from 9 to 3",
    "move 3 from 2 to 5",
    "move 8 from 3 to 4",
    "move 7 from 6 to 7",
    "move 1 from 9 to 2",
    "move 1 from 9 to 1",
    "move 2 from 6 to 4",
    "move 3 from 4 to 8",
    "move 1 from 1 to 7",
    "move 4 from 4 to 6",
    "move 3 from 8 to 7",
    "move 1 from 2 to 9",
    "move 1 from 5 to 2",
    "move 1 from 2 to 5",
    "move 2 from 4 to 5",
    "move 1 from 7 to 2",
    "move 13 from 3 to 4",
    "move 7 from 4 to 3",
    "move 4 from 5 to 9",
    "move 1 from 4 to 7",
    "move 5 from 6 to 3",
    "move 3 from 9 to 7",
    "move 10 from 7 to 8",
    "move 3 from 4 to 8",
    "move 1 from 5 to 4",
    "move 2 from 3 to 1",
    "move 3 from 7 to 4",
    "move 4 from 8 to 6",
    "move 2 from 9 to 3",
    "move 2 from 4 to 5",
    "move 4 from 4 to 3",
    "move 8 from 8 to 3",
    "move 3 from 6 to 8",
    "move 1 from 2 to 6",
    "move 5 from 7 to 9",
    "move 1 from 4 to 3",
    "move 3 from 7 to 5",
    "move 3 from 8 to 4",
    "move 7 from 7 to 5",
    "move 3 from 7 to 8",
    "move 1 from 9 to 8",
    "move 3 from 4 to 1",
    "move 1 from 5 to 8",
    "move 3 from 7 to 1",
    "move 6 from 8 to 3",
    "move 3 from 9 to 5",
    "move 2 from 6 to 5",
    "move 2 from 1 to 6",
    "move 16 from 3 to 8",
    "move 4 from 5 to 8",
    "move 4 from 3 to 8",
    "move 1 from 9 to 5",
    "move 1 from 6 to 5",
    "move 3 from 3 to 7",
    "move 6 from 1 to 6",
    "move 1 from 5 to 4",
    "move 3 from 5 to 2",
    "move 2 from 7 to 4",
    "move 1 from 2 to 8",
    "move 6 from 8 to 1",
    "move 2 from 4 to 5",
    "move 2 from 2 to 3",
    "move 7 from 8 to 7",
    "move 1 from 4 to 6",
    "move 3 from 6 to 4",
    "move 3 from 4 to 9",
    "move 3 from 6 to 3",
    "move 11 from 8 to 6",
    "move 12 from 5 to 4",
    "move 5 from 6 to 1",
    "move 9 from 3 to 2",
    "move 7 from 6 to 1",
    "move 7 from 7 to 8",
    "move 5 from 8 to 3",
    "move 2 from 3 to 6",
    "move 2 from 8 to 1",
    "move 1 from 7 to 2",
    "move 7 from 3 to 8",
    "move 1 from 9 to 1",
    "move 14 from 1 to 3",
    "move 9 from 2 to 8",
    "move 11 from 3 to 4",
    "move 22 from 4 to 1",
    "move 2 from 3 to 1",
    "move 16 from 8 to 4",
    "move 1 from 9 to 2",
    "move 3 from 6 to 9",
    "move 3 from 9 to 5",
    "move 1 from 2 to 6",
    "move 1 from 5 to 7",
]

const testInput = [
    ["Z", "N"],
    ["M", "C", "D"],
    ["P"]
]

// Convert rules:
const testRules = [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
]

const convertRules = rules.map(rule => {
    const to = Number(rule.split(' to ')[1]) - 1; // JS is 0 based;
    const from = Number(rule.split(' to ')[0].split(' from ')[1]) - 1; // JS is 0 based;
    const howMany = Number(rule.split(' to ')[0].split(' from ')[0].split('move ')[1]);
    return [howMany, from, to]
})

convertRules.forEach(
    rule => {
        for(let i = 0; i < rule[0]; i++) {
            input[rule[2]].push(input[rule[1]].pop())
        }
    }
)

const result = input.map(arr => arr.pop()).join('')

console.log(result)

