function toggle(...words) {
  const arr = [...words];
  let idx = 0;
  return function () {
    return idx < arr.length ? console.log(arr[idx++]) : console.log(arr[0]);
  };
}

var hello = toggle('hello');
var onOff = toggle('on', 'off');
var speed = toggle('slow', 'medium', 'fast');

hello();
hello();

onOff();
onOff();
onOff();

speed();
speed();
speed();
speed();
