const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
    let currentIndex = 0;
    const nameDisplay = document.getElementById('nameDisplay');

    // Function to update the displayed name
    function updateName() {
      nameDisplay.textContent = names[currentIndex];
    }

    // Function to show the next name
    function showNext() {
      currentIndex = (currentIndex + 1) % names.length;
      updateName();
    }

    // Function to show the previous name
    function showPrevious() {
      currentIndex = (currentIndex - 1 + names.length) % names.length;
      updateName();
    }

    // Display the initial name upon loading the page
    window.onload = function () {
      updateName();
    };