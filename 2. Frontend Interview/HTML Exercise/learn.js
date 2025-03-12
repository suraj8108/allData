console.log("Learning");

const getRollNo = () => {
  setTimeout(() => {
    const rollNo = [10, 20, 30, 60];
    console.log(rollNo);
    setTimeout(
      () => {
        students = {
          10: {
            Name: "Suraj",
          },
        };
        console.log(students[rollNo[0]].Name);
      },
      2000,
      rollNo
    );
  }, 2000);
};

getRollNo();

// learn async and await
const pob1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise function called");
    resolve("OK");
  }, 2000);
});

const getData = async () => {
  console.log("Start with the hitting promise calls");
  await pob1;
  return 10;
};

getData().then((data) => {
  console.log(data);
});
