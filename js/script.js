const $time = document.querySelector("time");
const $paragraph = document.querySelector("p");
const $input = document.querySelector("input");

const INITIAL_TIME = 30

const TEXT = "It holds us like a phantom The touch is like a breeze It shines its understanding See the moon smiling Open on all channels Ready to receive And we're not at the mercy Of your shimmers or spells Your shimmers or spells We are of the earth To her we do return The future is inside us It's not somewhere else It's not somewhere else";

let words = [];
let currentTime = INITIAL_TIME;

initGame()
initEvents()

function initGame() {
    words = TEXT.split(" ").splice(0, 32);
    currentTime = INITIAL_TIME;

    $time.textContent = currentTime;

    $paragraph.innerHTML = words.map((word, index) => {
        const letters = word.split("");

        return `<x-word>
            ${letters
            .map(letter => `<x-letter>${letter}</x-letter>`)
            .join("")
            }
        </x-word>
        `;
    }).join(" ");

    const intervalId = setInterval(() => {
        currentTime--;
        $time.textContent = currentTime;
        
        if (currentTime === 0) {
            clearInterval(intervalId);
            alert("Time's up!");
            initGame();
        }
    
    }, 1000)
}
function initEvents() { }