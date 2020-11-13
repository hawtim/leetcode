var Queue = require('./数据结构/Queue.js')

function hotPotato(elementList, num) {
  const queue = new Queue()
  const elimitatedList = []
  for (let i = 0; i < elementList.length; i++) {
    // 将每个孩子都入队列
    queue.enqueue(elementList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }
}

const names = ['xxx', 'ddsds', '11232', 'dddd']
const result = hotPotato(names, 7)
result.eliminated.forEach(name => {
  console.log(name)
})

console.log('winner', `${result.winner}`)