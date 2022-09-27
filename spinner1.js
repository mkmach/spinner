setTimeout(() => {
  process.stdout.write('hello from spinner1.js... \rheyyy\n');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r| 1');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ 2');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- 3');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\ 4'); 
}, 700);