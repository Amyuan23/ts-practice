// #!/usr/bin/env ts-node

// 1.接口, 规定一个对象必须有哪些属性
interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = { firstName: 'Jane', lastName: 'User' } // 多了可以，少了不行
// let user = { firstName: 'Jane', lastName: 'User', k: 'k' }
// let user = { firstName: 'Jane' }
console.log(greeter(user))

// 2. 类
class Student {
  fullName: string
  constructor(public firstName, public middleInitial, public lastName) {
    // public 的作用是 给class公用属性
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

interface Person2 {
  firstName: string
  lastName: string
}

function greeter2(person: Person2) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user2 = new Student('Jane', 'M.', 'User')
console.log(user2)
console.log(greeter2(user2))

// 3.枚举
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
