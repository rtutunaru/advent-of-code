const testInput = [
    [7, 9],
    [15, 40],
    [30, 200]
]

const input = [
    [35, 213],
    [69, 1168],
    [68, 1086],
    [87, 1248]
]

const results = input
    .map(value => {
        const time = value[0];
        const record = value[1];
        const better = []
        for(let i = 0; i <= time; i++) {
            let speed = i;
            let remainingTime = time - i;
            let distance = speed * remainingTime;
            better.push(distance)
        }
        return better.filter(result => result > record).length
    })
    .reduce(
        (multiply, current) => multiply * current, 1
    )

console.log(results)
