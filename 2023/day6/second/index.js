const testInput = [71530, 940200];
const input = [35696887, 213116810861248];

const time = input[0];
const record = input[1];
const better = []
for(let i = 0; i <= time; i++) {
    let speed = i;
    let remainingTime = time - i;
    let distance = speed * remainingTime;
    better.push(distance)
}
const results = better.filter(result => result > record).length

console.log(results)