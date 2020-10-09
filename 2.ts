// 函数及函数重载

// 1.规范函数传入参数个数，类型。以及返回值类型
function add(a: number, b: number): number {
  return a + b
}

console.log(add(1, 2))
// console.log(add(1, '2'))
// console.log(add(1))

// 2.函数重载, 只能是
function add2(a: number, b: number): number
function add2(a: string, b: string): number
function add2(a: any, b: any): any {
  return a + b
}
console.log(add2(1, 2))
// console.log(add2('1', '2'))
// console.log(add2(true, true))

// 数组
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3] // 范型写法

function sort(a: number[]): number[] {
  return [1]
}

console.log(sort([8]))

// 元祖

let x: [string, number]

// x = [1, 1]
