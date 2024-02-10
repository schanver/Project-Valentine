const yesButton = document.getElementById("yes");
        const image = document.getElementById("image");
        const title = document.getElementById("title");
        let count = 0;
        yesButton.addEventListener("click", () => {
            // Change the image source to the new image
            image.src = "./smile.png"; // Set the new image source here
            title.textContent = "YAYY! ❤️❤️❤️"
        });
        const noButton = document.getElementById("no");
        noButton.addEventListener("click", () => {
            count += 1;
            if (count > 1) {
                
            }
        });