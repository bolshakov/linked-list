list = new LinkedList(1, 2, 3, '42')

assert = function(predicate) { 
    if (!predicate) {
      throw new Error('assertion error');
  }
}
assertNot = function(predicate) { 
    !assert(predicate);
}

assert(list.add(4) === undefined)
assert(list.add(5) === undefined)
assert(list.includes(5))
assert(list.includes(4))
assert(list.includes(1))
assert(list.includes(1))
assert(list.includes(2))
assert(list.includes('42'))
assertNot(list.includes(42))
assertNot(list.includes(7))
assertNot(list.includes(undefined))
assertNot(list.includes('text'))
