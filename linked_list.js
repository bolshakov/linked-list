list = new LinkedList()

assert = function(predicate) { 
    if (!predicate) {
      throw new Error('assertion error');
  }
}
assertNot = function(predicate) { 
    assert(!predicate);
}

list.add(1);
list.add(3);
assert(list.inclutes(3));
assert(list.inclutes(1));
assertNot(list.inclutes(2));
