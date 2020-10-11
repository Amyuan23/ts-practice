#!/usr/bin/env ts-node

// mac 添加执行权限
// chmod +x ./4.ts
console.log(process.argv)
let a: number = parseInt(process.argv[2])
let b: number = parseInt(process.argv[3])

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log('出错了')
  process.exit(0) // 退出
}
console.log(a + b)
process.exit(1)

// process.argv
