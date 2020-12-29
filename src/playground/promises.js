const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('this is my rejected data');

  }, 2000);
});

try {
  data = await promise;
  console.log(data);
} catch (err) {
  console.log(err);
}
