function moveCommand(answer) {
  let whatHappens;
  switch (answer) {
    case "forward":
      whatHappens = "You will find a forest";
      break;
    case "back":
      whatHappens = "You will encounter a tiger, run!";
      break;
    case "left":
      whatHappens = "You finally get home, this is the answer!";
      break;
    case "right":
      whatHappens = "You will find a river";
      break;
    default:
      // return "Enter a valid direction!";
      whatHappens = "Enter a valid direction!";
  }
  return whatHappens;
}
