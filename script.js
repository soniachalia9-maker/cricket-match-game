let score = 0;
let wickets = 0;
let balls = 0;
const maxBalls = 12; // 2 overs
let gameOver = false;

function playShot(run) {

    // Stop game if over
    if (gameOver) return;

    balls++;

    let outcome = Math.random();
    let message = "";

    // 20% chance of wicket
    if (outcome < 0.2) {
        wickets++;
        message = "❌ Wicket!";
    } else {
        score += run;
        message = `🏏 You scored ${run} run(s)`;
    }

    updateUI();

    // Show ball result
    document.getElementById("result").innerText = message;

    // Check game over
    if (balls >= maxBalls || wickets >= 3) {
        gameOver = true;

        setTimeout(() => {
            document.getElementById("result").innerText =
                `🏁 Game Over! Final Score: ${score}`;
        }, 500);
    }
}

function updateUI() {
    document.getElementById("score").innerText = score;
    document.getElementById("wickets").innerText = wickets;
    document.getElementById("balls").innerText = balls;
}

// 🔄 Restart Game Function
function resetGame() {
    score = 0;
    wickets = 0;
    balls = 0;
    gameOver = false;

    updateUI();
    document.getElementById("result").innerText = "Game Restarted! 🎮";
}