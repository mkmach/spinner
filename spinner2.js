const animationArray = ['|', '/', '-', '\\','|', '/', '-', '\\']
let delay = 0

for (let position of animationArray) {
  setTimeout( () => {
    process.stdout.write(`\r${position}   `)
  }, delay += 500)
}

