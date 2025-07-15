//your JS code here. If required.
// Get all three squares
const squares = document.querySelectorAll('.square');

// Add event listeners to each square
squares.forEach((square) => {
  square.addEventListener('mouseenter', () => {
    squares.forEach((other) => {
      if (other !== square) {
        other.style.backgroundColor = '#6F4E37'; // Coffee
      }
    });
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach((other) => {
      other.style.backgroundColor = '#E6E6FA'; // Lavender
    });
  });
});

