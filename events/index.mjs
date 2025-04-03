import { EventEmitter } from 'events'
const myEmitter = new EventEmitter()
const timeoutListenerFn = (secondsQty) => {
  console.log(`timeout ${secondsQty} seconds`)
}
myEmitter.on('timeout', timeoutListenerFn)

setTimeout(() => {
  myEmitter.emit('timeout', 1)
}, 1000)
setTimeout(() => {
  myEmitter.emit('timeout', 2)
}, 2000)

myEmitter.once('singleEvent', (seconsQty) => {
  console.log(`singleEvent ${seconsQty} mSeconds`)
})

setTimeout(() => {
  myEmitter.emit('singleEvent', 200)
}, 200)
setTimeout(() => {
  myEmitter.emit('singleEvent', 1500)
}, 1500)

setTimeout(() => {
  myEmitter.off('timeout', timeoutListenerFn)
}, 3000)
setTimeout(() => {
  myEmitter.emit('timeout', 4)
}, 4000)
