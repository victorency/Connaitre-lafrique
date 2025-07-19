document.querySelector(".hero button").addEventListener("click", function() {
    alert("Welcome to Connaître l’Afrique! New destinations coming soon.");
});

const posts = document.querySelectorAll(".post h3");
posts.forEach((post) => {
    post.addEventListener("click", () => {
        alert(`You clicked on: ${post.textContent}`);
    });
});
// ✅ Auto-sliding carousel for posts
const postsContainer = document.querySelector(".posts");
let scrollAmount = 0;

setInterval(() => {
    if (postsContainer.scrollLeft + postsContainer.clientWidth >= postsContainer.scrollWidth) {
        // Go back to start when at the end
        postsContainer.scrollTo({ left: 0, behavior: "smooth" });
        scrollAmount = 0;
    } else {
        // Slide to the next part
        scrollAmount += 320; // adjust based on post width
        postsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
}, 3000); // change every 3 seconds
// ✅ Contact form simulation (no backend yet)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("formResponse").textContent = 
        `Thank you, ${name}! I’ll get back to you at ${email} soon.`;

    this.reset();
});