const fan = document.querySelector('.blades');
const btn = document.querySelectorAll('.btn');
const startButton = document.querySelector('.btn-4');
const offButton = document.querySelector('.btn-0');

// Start button functionality
startButton.addEventListener('click', startFan);

// OFF button functionality
offButton.addEventListener('click', () => {
    active(offButton);
    speed(0);
});

// Speed control buttons functionality
btn.forEach(btn => {
    // Check if the button is not the start or OFF button
    if (btn !== startButton && btn !== offButton) {
        btn.addEventListener('click', () => {
            let nav = btn.getAttribute('data-nav');
            active(btn);
            if (nav == 1) speed(0.2); // Speed for button "1"
            else if (nav == 2) speed(0.05); // Speed for button "2" (slower)
            else if (nav == 3) speed(0.01); // Speed for button "3" (faster)
        });
    }
});

// Function to remove 'active' class from all buttons and add it to the clicked button
function active(element) {
    btn.forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}

// Function to adjust fan speed based on the value provided
function speed(value) {
    fan.style.animationDuration = `${value}s`;
}

// Function to start the fan movement
function startFan() {
    active(startButton);
    speed(1); // Adjust the speed as needed
}
