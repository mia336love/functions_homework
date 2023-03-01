for (let i = 1; i <= 100; i++) {
  //console.log(i);
  if (1 <= i && i <= 17) {
    console.log(i, "ребенок");
  }
  if (18 <= i && i <= 30) {
    console.log(i, "молодой");
  }
  if (30 <= i && i <= 55) {
    console.log(i, "взрослый");
  } else if (i > 55) {
    console.log(i, "старый");
  }
}
