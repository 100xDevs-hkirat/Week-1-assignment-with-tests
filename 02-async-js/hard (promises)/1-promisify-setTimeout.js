/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, n * 1000)
  })
}

const TIME_IN_SECONDS = 5

const resolvesInFiveSecs = wait(TIME_IN_SECONDS)

console.log(`Starting in ${TIME_IN_SECONDS} secs...`)

resolvesInFiveSecs.then(() => {
  console.log(`completed in ${TIME_IN_SECONDS} secs`)
})
