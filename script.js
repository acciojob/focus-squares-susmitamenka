//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll('.square');

// Define color constants
const LAVENDER = '#E6E6FA';
const COFFEE = '#6F4E37';

// Loop over each square
squares.forEach((square) => {
  // When mouse hovers on one square
  square.addEventListener('mouseover', () => {
    squares.forEach((other) => {
      if (other !== square) {
        other.style.backgroundColor = COFFEE;
      }
    });
  });

  // When mouse leaves the square
  square.addEventListener('mouseout', () => {
    squares.forEach((s) => {
      s.style.backgroundColor = LAVENDER;
    });
  });
});
