const bubble = document.querySelector('body');
let lastBubbleTime = 0; // Track the last bubble creation time

bubble.addEventListener("mousemove", (event) => {
    const currentTime = Date.now();
    
    // Only create a bubble if at least 100ms have passed
    if (currentTime - lastBubbleTime >40) {
        lastBubbleTime = currentTime; // Update the last bubble time
        const xnumber = event.clientX; 
        const ynumber = event.clientY; 
        const img = document.createElement("span");

        // Set the position of the bubble
        img.style.left = xnumber + "px";
        img.style.top = ynumber + "px";

        // Generate random size for the bubble
        const size = Math.random() * 100 + 40; // Random size between 50px and 150px
        img.style.width = size + "px";
        img.style.height = size + "px";

        // Append the bubble to the body
        bubble.appendChild(img);

        // Remove bubble after animation completes
        setTimeout(() => {
            img.remove();
        }, 6000); // Match with the animation duration
    }
});