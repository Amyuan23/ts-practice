#!/usr/bin/env ts-node
let isDone: boolean = false
let createdByBoolean: boolean = Boolean(0)

let decLiteral: number = 6
let notANumber: number = NaN
let infinityNumber: number = Infinity

let myName: string = 'Tom'

let unusable: void = undefined

let anyThing: any = 'll'
// 在任意值上访问任何属性，调用任何方法都可以


// undefined 和 null 是所有类型的子类型

/**
 * 类型推论
 */
let myFavoriteNumber = 'seven'
// 相当于
let myFavoriteNumber2: string = 'seven'

let myFavoriteNumber3: string | number;
myFavoriteNumber3 = 'seven';
myFavoriteNumber3 = 7;

interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci2: Array<number> = [1, 1, 2, 3, 5]

// 可选参数必须接在必需参数后面
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}

// TypeScript 会将添加了默认值的参数识别为可选参数,此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName2(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 断言
// 将一个联合类型的变量指定为一个更加具体的类型,需要在还不知道是什么类型的时候使用该类型的方法
function getLength(something: string | number): number {
  if ((<string>something).length) {
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}
console.log(anyThing.length)