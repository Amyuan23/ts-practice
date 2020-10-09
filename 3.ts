// marry
enum Gender {
  Male = '男',
  Female = '女'
}

interface Person {
  gender: Gender
}

function merry(a: Person, b: Person): [Person, Person] {
  if (a.gender !== b.gender) {
    console.log(a.gender)
    return [a, b]
  } else {
    throw new Error('不能结婚')
  }
}

const A = { gender: Gender.Female }
const B = { gender: Gender.Male }

console.log(merry(A, B))
