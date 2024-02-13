const yesButton = document.getElementById("yes");
    const image = document.getElementById("image");
    const title = document.getElementById("title");
    const container = document.getElementById("button-container");
    let count = 0;
    yesButton.addEventListener("click", () => {
            // Change the image source to the new image
        //image.src = "./img/smile.png"; // Set the new image source here
        img.src ="https://i.imgur.com/dbGDbcR.mp4";
        title.textContent = "YAYY! ❤️❤️❤️"
        container.style.display = "none";
    });
    const noButton = document.getElementById("no");
    noButton.addEventListener("click", () => {
        count += 1;
        if (count === 1) {
           image.src = "./img/denial.jpg";
           title.textContent = "Are you sure you don't want to date me? 🥺";      
           yesButton.innerHTML = "I want to";
           noButton.innerHTML = "I am sure";
        }
        else if (count === 2) {
            image.src = "./img/frustration.jpg";
            title.textContent = "Are you REALLY sure you don't want to date me?";
            yesButton.va = "I changed my mind";
            noButton.innerHTML = "I am certain";
        }
        else if (count > 2) {
            image.src = "./img/damn.gif";
            title.textContent = "Damn, alright then. Have a nice day.";
            container.style.display = "none";

        }
    });
