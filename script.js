document.addEventListener("DOMContentLoaded", function () {
    const particleContainer = document.getElementById("particle-container");

    // Function to create a particle
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Set the initial position at the bottom
        particle.style.bottom = "0";

        // Set a random X position
        const xPos = Math.random() * window.innerWidth;
        particle.style.left = `${xPos}px`;

        particleContainer.appendChild(particle);

        // Remove the particle after animation completes
        particle.addEventListener("animationend", function () {
            particle.remove();
        });
    }

    // Function to generate particles
    function generateParticles() {
        const numberOfParticles = 50; // Adjust the number of particles

        for (let i = 0; i < numberOfParticles; i++) {
            createParticle();
        }
    }

    generateParticles();
});
