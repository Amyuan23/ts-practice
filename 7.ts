// 高级类型

interface A {
  name: string
}

interface B {
  age: number
}

interface C extends A {}

// 类型且运算
const c: A & B = {
  name: 'ooo',
  age: 99
  // x: 'll'
}

// 类型或运算, 满足A类型，或B类型，或者二者都有也不影响
const d: A | B = {
  name: 'oo'
  // age: 9
}

// 字面量类型 非常好用，可选项
interface D {
  name: 'ppp' | 'kkk'
}

const e: D = {
  name: 'ppp'
  // name: 'ooo'
}

// this 的类型可以自动判断