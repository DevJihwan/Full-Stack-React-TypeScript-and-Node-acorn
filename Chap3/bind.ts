class A {
  name: string = "A";
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = "B";
  go() {
    console.log(this.name);
  }
}

const aa = new A();
aa.go();

const bb = new B();
bb.go = bb.go.bind(aa);
bb.go();
