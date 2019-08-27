// function abhinav(...a) {
//   console.log("Abhinav", this);
// }

// abhinav();

// abhinav("Hello", "Spice", "Pintu");
// let himanshu = () => {
//   console.log("Himanshu", this);
// };

// himanshu();

// let pintu = function() {
//   console.log("Himanshu");
// };

// console.log("A");
// console.log("B");
// console.log("C");
// setTimeout(() => {
//   console.log("D");
// }, 0);
// for (let i = 0; i < 10000; i++) {
//   console.log(i);
//   if (i == 10) {
//     setTimeout(() => {
//       console.log("D");
//     }, 0);
//   }
// }

// function callback(test) {
//   setTimeout(() => {
//     test("Hey", { him: "test", rc: "", rs: "s" });
//   }, 1000);
// }

// callback((...a) => {
//   console.log("1 Sec", a);
// });

// function abhinav(a) {
//   console.log("First", a);
//   return function(b) {
//     console.log("Second", a + b);
//     return function(c) {
//       console.log("Final", a + b + c);
//     };
//   };
// }

// let first = abhinav(1);
// let second = first(1);
// second(1);

// abhinav(1)(2)(6);

// function pintu(a) {
//   return {
//     test: function(b) {
//       console.log("Test", a + b);
//     }
//   };
// }

// pintu(1).test(1);

// let a = [1, 2, 3, 4];

// forEach

// a.forEach((x, i) => {
//   console.log(x, i);
// });

// map

// let b = a.map((x, i) => {
//   console.log(x, i);
//   return x == 2;
// });

// console.log(b);

// filter

// let b = a.filter((x, i) => {
//   return x == 2;
// });

// console.log(b);

// reduce

// let b = a.reduce((x, y, i) => {
//   return x + y;
// }, 1);

// console.log(b);

// let names = ["Priya", "Himanshu", "Abhinav"];
// Output
// [{name: 'Priya', job: 'SE'},{name: 'Himanshu', job: 'SE'},{name: 'Abhinav', job: 'SE'}]
// Input [1,2,[2,4,[5,7],[9,0]],8,5,[6,1]]
// Output Sum
// const a = {
//   id: 1,
//   name: "Ankit",
//   jobType: "SE",
//   test: function() {
//     console.log("Test", this);
//   }
// };

// let descriptor = Object.getOwnPropertyDescriptor(a, "id");

// console.log(JSON.stringify(descriptor, null, 2));

// a.id = 2;

// a.id;

// a["test"]();

// delete a.id;

// console.log(Object.entries(a));

// let b = { ...a }; // Object.assign({}, a);

// b.test = 2;

// console.log(a, b);

// let x = [1, 2, 4, 3];
// let y = [...x];

// y.push(5);

// console.log(x, y);

// let { id, name } = a;

// console.log(id, name);

// id = 4;

// console.log(a);

// let [k, l, h, v] = x;

// console.log(k, l, h, v);

// Input
// [
//   { name: 'Test', completed: true },
//   { name: 'Test1', completed: true },
//   { name: 'Test2', completed: false },
//   { name: 'Test3', completed: true },
//   { name: 'Test4', completed: true },
//   { name: 'Test', completed: true },
//   { name: 'Test4', completed: false },
//   { name: 'Test', completed: true },
//   { name: 'Test', completed: false },
//   { name: 'Test5', completed: true },
//   { name: 'Test', completed: false },
//   { name: 'Test', completed: true }
// ]
// Output -
// {
//   all: 4,
//   new: 6,
//   completed: 2
// }

// function A(test) {
//   this.test = test;
// }

// class B {
//   constructor(test) {
//     this.test = test;
//   }
// }

// let aObj = new A("A");

// let bObj = new B("B");

// console.log(aObj, bObj);

// function X(test) {
//   let _test = test;
//   return { test: _test };
// }

// class Y {
//   // _test;
//   static createObject(test) {
//     let _test = test;
//     return { _test };
//   }
// }

// let xObj = X(1);
// let yObj = Y.createObject(2);
// let zObj = Y.createObject(1);

// console.log(xObj, yObj, zObj);

// class Spice {
//   // static instance = null;
//   constructor(test) {
//     if (Spice.instance) {
//       return Spice.instance;
//     } else {
//       Spice.instance = this;
//     }
//     this.data = test;
//   }
// }

// let spiceObj1 = new Spice(1);
// let spiceObj2 = new Spice(2);

// console.log(spiceObj1, spiceObj2);

// let test = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve("Hello");
//     } else {
//       reject("By");
//     }
//   }, 1000);
// });

// test
//   .then(rslt => {
//     console.log("Resolve", rslt);
//   })
//   .catch(rslt => {
//     console.log("Reject", rslt);
//   });

function work() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve("Work Done");
      } else {
        reject("Need More Time");
      }
    }, 1000);
  });
}

function call(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(result + " Hello");
      } else {
        reject("Bye");
      }
    }, 500);
  });
}

// work()
//   .then(rslt => call(rslt))
//   .then(rslt => {
//     console.log(rslt);
//   });

// Promise.race([work(), call()]).then(rslt => {
//   console.log(rslt);
// });

// let resolve = Promise.resolve();

(async () => {
  try {
    let workResult = await work();
    console.log(workResult);
    console.log(await call(workResult));
  } catch (err) {
    console.log(err);
  }
})();
