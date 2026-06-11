const title = document.querySelector(".box p");
const content = document.querySelector(".box");
const BTN = document.querySelectorAll("section button");

BTN.forEach(button => {
    button.addEventListener("click", function() {
        const text = this.textContent;
        
        if (text === "القبلة") {
            title.textContent = "القبلة";
            content.innerHTML = "<div class='box'></div>";
        }
        else if (text === "مواقيت الصلاة") {
            title.textContent = "مواقيت الصلاة";
            content.innerHTML = "<div class='box'></div>";
        }
        else if (text === "دروس") {
            title.textContent = "الدروس";
            content.innerHTML = "<div class='box'></div>";
        }
        else if (text === "الأحاديث") {
            title.textContent = "الأحاديث";
            content.innerHTML = "<div class='box'></div>";
        }
        else if (text === "القرآن الكريم") {
            title.textContent = "القرآن الكريم";
            content.innerHTML = "<div class='box'></div>";
        }
        else if (text === "أذكار يومية") {
            title.textContent = "الأذكار";
            content.innerHTML = "<div class='box'></div>";
        }
    });
});