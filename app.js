/**
 * app.js — Flashcard UI logic
 */

(function () {
  "use strict";

  let deck = [...CARDS];
  let currentIndex = 0;
  let isFlipped = false;

  const flashcard = document.getElementById("flashcard");
  const cardTopic = document.getElementById("cardTopic");
  const cardQuestion = document.getElementById("cardQuestion");
  const cardAnswer = document.getElementById("cardAnswer");
  const cardCode = document.getElementById("cardCode");
  const cardCounter = document.getElementById("cardCounter");
  const progressFill = document.getElementById("progressFill");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const resetBtn = document.getElementById("resetBtn");
  const dotNav = document.getElementById("dotNav");

  function render() {
    const card = deck[currentIndex];

    // Content
    cardTopic.textContent = card.topic;
    cardQuestion.textContent = card.question;
    cardAnswer.innerHTML = card.answer;

    if (card.code) {
      cardCode.textContent = card.code;
      cardCode.parentElement.style.display = "block";
      highlightCode(cardCode);
    } else {
      cardCode.parentElement.style.display = "none";
    }

    // Counter + progress
    cardCounter.textContent = `Card ${currentIndex + 1} / ${deck.length}`;
    const pct = ((currentIndex + 1) / deck.length) * 100;
    progressFill.style.width = `${pct}%`;

    // Nav buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === deck.length - 1;

    // Dot nav
    renderDots();

    // Ensure front is showing when card changes
    if (isFlipped) unflip();
  }

  function renderDots() {
    dotNav.innerHTML = "";
    deck.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "dot" + (i === currentIndex ? " dot-active" : "");
      dot.setAttribute("role", "listitem");
      dot.setAttribute("aria-label", `Go to card ${i + 1}`);
      dot.addEventListener("click", () => {
        currentIndex = i;
        render();
      });
      dotNav.appendChild(dot);
    });
  }

  function flip() {
    isFlipped = true;
    flashcard.classList.add("flipped");
    flashcard.setAttribute("aria-label", "Flashcard — answer visible. Press Enter or Space to flip back.");
  }

  function unflip() {
    isFlipped = false;
    flashcard.classList.remove("flipped");
    flashcard.setAttribute("aria-label", "Flashcard — press Enter or Space to flip");
  }

  function toggleFlip() {
    isFlipped ? unflip() : flip();
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /** Very lightweight syntax highlighting — no external deps */
  function highlightCode(el) {
    const raw = el.textContent;
    const escaped = raw
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const highlighted = escaped
      // strings (single, double, template)
      .replace(/(`[^`]*`|'[^']*'|"[^"]*")/g, '<span class="hl-string">$1</span>')
      // comments
      .replace(/(\/\/[^\n]*)/g, '<span class="hl-comment">$1</span>')
      // keywords
      .replace(
        /\b(const|let|var|function|return|if|else|for|while|new|this|true|false|null|undefined|typeof|import|export|class|extends|async|await)\b/g,
        '<span class="hl-keyword">$1</span>'
      )
      // numbers
      .replace(/\b(\d+)\b/g, '<span class="hl-number">$1</span>');

    el.innerHTML = highlighted;
  }

  // Event listeners
  flashcard.addEventListener("click", toggleFlip);
  flashcard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) { currentIndex--; render(); }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < deck.length - 1) { currentIndex++; render(); }
  });

  shuffleBtn.addEventListener("click", () => {
    deck = shuffle([...CARDS]);
    currentIndex = 0;
    render();
  });

  resetBtn.addEventListener("click", () => {
    deck = [...CARDS];
    currentIndex = 0;
    render();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.target === flashcard) return; // handled above
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (currentIndex < deck.length - 1) { currentIndex++; render(); }
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      if (currentIndex > 0) { currentIndex--; render(); }
    }
  });

  // Init
  render();
})();
