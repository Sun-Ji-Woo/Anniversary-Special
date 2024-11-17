// JavaScript logic to manage the steps
const app = document.getElementById('app');

// Step 1: Welcome interface
function step1() {
    app.innerHTML = `
        <h1>Welcome, Jinty Baruah Gogoi.</h1>
        <p>Hope you have a warm time here!</p>
        <button onclick="step2()">Next</button>
    `;
}

// Step 2: Ask for dad's name
function step2() {
    app.innerHTML = `
        <h1>May I know who is your special somebody tonight?</h1>
        <input type="text" id="nameInput" placeholder="Enter dad's full name">
        <button onclick="validateName()">Submit</button>
        <p id="hint" style="color: red; display: none;">Your son here, just correctly insert dad's full name.</p>
    `;
}

// Validate the name
function validateName() {
    const input = document.getElementById('nameInput').value.trim().toLowerCase();
    if (input === "santanu" || input === "santanu gogoi") {
        step3();
    } else {
        const hint = document.getElementById('hint');
        hint.style.display = "block";
    }
}

// Step 3: Blog message
function step3() {
    app.innerHTML = `
        <h1>Hm, interesting!</h1>
        <p>Well then, I won't disturb you more, good luck with your date! Oh, by the way, your son had dropped the following message. Click next to view it.</p>
        <button onclick="step4()">Next</button>
    `;
}

// Step 4: Final message
function step4() {
    app.innerHTML = `
        <h1>Happy Anniversary!</h1>
        <p>Happy anniversary to both of you. I don't have gifts so instead I did the household chores like washing today's clothes, bringing in the already hanged clothes from outside and not dirtying the kitchen (the kitchen part wasn't really necessary I guess.. hehe).</p>
        <p>Have a good time together and probably bring in some gifts along too (like some snacks) if the trip was good enough (like you rate it 3 at least out of 5). Good day!</p>
    `;
}

// Start the game
step1();
