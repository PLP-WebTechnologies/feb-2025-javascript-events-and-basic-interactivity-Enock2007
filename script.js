// Button Click Count
let clickCount = 0;
document.getElementById('myButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').innerText = clickCount;
    alert("Button clicked " + clickCount + " times");
});

// Button for Color/Text Change
document.getElementById('colorButton').addEventListener('click', function() {
    this.style.backgroundColor = '#4CAF50';
    this.innerText = "Clicked!";
});

// Keypress Detection
document.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        alert("Enter key pressed!");
    }
});

// Double-click and Long Press Events
let pressTimer;
document.getElementById('myButton').addEventListener('dblclick', function() {
    alert("Double-clicked! Secret action activated!");
});

document.getElementById('myButton').addEventListener('mousedown', function() {
    pressTimer = setTimeout(function() {
        alert("Long press detected!");
    }, 1000);
});
document.getElementById('myButton').addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
});

// Slideshow Logic
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}
showSlides();

// Tabs Functionality
function openTab(evt, tabName) {
    let i, tabContent, tabs;
    tabContent = document.querySelectorAll('.tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active');
    }

    tabs = document.querySelectorAll('.tab');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.className += " active";
}

// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email");
        return false;
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
}

// Real-time Password Feedback
document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let feedback = document.getElementById("passwordFeedback");
    if (password.length >= 8) {
        feedback.innerHTML = "Password is strong!";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "Password must be at least 8 characters.";
        feedback.style.color = "red";
    }
});

// Image Modal Functions
function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
