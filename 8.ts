const context = {
  app: 3
}
const app = (context.app = {})

console.log(context)
console.log(app)
