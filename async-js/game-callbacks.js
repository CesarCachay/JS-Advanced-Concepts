el.addEventListener("click", submitForm);

movePlayer(100, "Left", function() {
  movePlayer(400, "Left", function() {
    movePlayer(10, "Right", function() {
      movePlayer(330, "Left", function() {});
    });
  });
});

// This is another way to do the same like above

movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));
