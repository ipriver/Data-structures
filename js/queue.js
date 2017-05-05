function MyException(message) {
   this.message = message;
   this.name = 'MyException';
}

function Queue(maxLength=0) {
  if (typeof maxLength != 'number' || maxLength < 0) throw new MyException('Incorrect length!');
  this.queue = [];
  this.maxLength = maxLength;

  this.add = function(obj) {
    if (this.queue.length < this.maxLength) {
      this.queue.push(obj);
    } else {
      console.log('Queue is full now');
      //throw new MyException('Queue is full now');
    }
  }
  this.remove = function() {
    this.queue.pop(0);
  }
  this.clean = function() {
    this.queue.length = 0;
  };
};


module.exports = {
  Queue: Queue,
  MyException: MyException
}