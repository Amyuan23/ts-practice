// 族谱

class Person {
  public children: Person[] = []
  constructor(public name: string) {}
  sayHello() {
    console.log('大家好，我是' + this.name)
  }
  addChild(child: Person) {
    this.children.push(child)
  }
  introduceFamliy(n?: number): void {
    n = n || 0
    console.log(createTabs(n) + this.name)
    this.children.forEach((item) => {
      item.introduceFamliy(n + 1)
    })
  }
}

function createTabs(n: number): string {
  return '--'.repeat(n)
}

const papa = new Person('爸爸')
const son = new Person('儿子')
const son2 = new Person('儿子2')
const son3 = new Person('孙子1')
const son4 = new Person('孙子2')
papa.addChild(son)
papa.addChild(son2)
son.addChild(son3)
son2.addChild(son4)
papa.introduceFamliy()
son.introduceFamliy()
