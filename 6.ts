//TODO: 实现一个对象，数组的合集，交集，差集库,对象数组的对应库，vue3 hooks

// let h: Array<Array<string>> = [['1']]

//  null undefined string number boolean Object symbol
// ts 的类型以上7种 + any + void + 枚举值 + never

enum Gender {
  Man = 'man',
  Woman = 'woman'
}

enum Gender2 {
  Man = 6,
  Woman
}

// console.log(Gender['man']) // 枚举值是字符串的话无法反向映射
console.log(Gender2[6])

// 断言

interface Person5 {
  name: string
  age?: number
  add(a: number, b: number): number
}

let tom: Person5 = {
  name: 'Tom',
  age: 25,
  add(a, b) {
    return a + b
  }
}

console.log(tom.add(1, 2))

function add<T>(a: T, b: T): Array<T> {
  return [a, b]
}
console.log(add(1, 2))

function n1() {
  console.log(this)
  function n2() {
    console.log(this)
  }
  n2()
}
n1.call(3)

// 类型兼容
interface X1 {
  name: String
}

let a8 = { name: 'oo', x: 'ppp' }
let a5: X1 = a8
console.log(a5)
