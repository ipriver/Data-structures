function MyException(message) {
   this.message = message;
   this.name = 'MyException';
}

function Stack(maxLength=0) {
  if (typeof maxLength != 'number' || maxLength < 0) throw new MyException('Incorrect length!');
  this.stack = [];
  this.maxLength = maxLength;

  this.add = function(obj) {
    if (this.stack.length < maxLength) {
    this.stack.push(obj);
    } else {
      console.log('Stack is full now');
    }
    return this;
  };
  this.removeElement = function() {
    this.stack.pop(this.stack.length-1);
    return this;
  };
  this.clear = function() {
    this.stack.length = 0;
    return this;
  }
  return this;
}

module.exports = {
  Stack: Stack,
  MyException: MyException
}