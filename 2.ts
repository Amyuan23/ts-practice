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
