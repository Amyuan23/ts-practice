let map = new Map()
let john = { name: 'John' }

map.set('1', 'str1') // a string key
map.set(1, 'num1') // a numeric key
map.set(true, 'bool1') // a boolean key
map.set(john, 123) // a object key

console.log(map.get(1)) // 'num1'
console.log(map.get('1')) // 'str1'
console.log(map.get(true)) // 'bool1'
console.log(map.get(john)) // 123
console.log(map.size) // 4

console.log(map.values())
