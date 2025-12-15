// script.js
console.log("Emi Birthday Arcade loaded");

// ====================== HERO DATA (Overwatch roster) ======================
// Assets (Vorschlag):
// - Hero Bild:   assets/images/heroes/<id>.png
// - Voice Line: assets/audio/voicelines/<id>.mp3  (optional, kann fehlen -> wird einfach nicht gespielt)

const HEROES = {
  Tank: [
    { id: "dva", name: "D.Va", role: "Tank", voice: "assets/audio/voicelines/dva.mp3", img: "assets/images/heroes/dva.png", pickText: "Emi, du bist eine D.Va 💗" },
    { id: "doomfist", name: "Doomfist", role: "Tank", voice: "assets/audio/voicelines/doomfist.mp3", img: "assets/images/heroes/doomfist.png", pickText: "Emi, punch sie alle weg! 💗" },
    { id: "hazard", name: "Hazard", role: "Tank", voice: "assets/audio/voicelines/hazard.mp3", img: "assets/images/heroes/hazard.png", pickText: "Emi, du dürftest mich jederzeit spiken 🫢" },
    { id: "junker-queen", name: "Junker Queen", role: "Tank", voice: "assets/audio/voicelines/junker-queen.mp3", img: "assets/images/heroes/junker-queen.png", pickText: "Emi, du bist nicht nur irl eine Queen, sondern jetzt auch ingame 👑" },
    { id: "mauga", name: "Mauga", role: "Tank", voice: "assets/audio/voicelines/mauga.mp3", img: "assets/images/heroes/mauga.png", pickText: "Was sucht Maui hier?" },
    { id: "orisa", name: "Orisa", role: "Tank", voice: "assets/audio/voicelines/orisa.mp3", img: "assets/images/heroes/orisa.png", pickText: "Emi, bei dir überhitzt nicht die Waffe, sondern deine Gegner, weil du zu hot bist 🥵" },
    { id: "ramattra", name: "Ramattra", role: "Tank", voice: "assets/audio/voicelines/ramattra.mp3", img: "assets/images/heroes/ramattra.png", pickText: "Emi, bei dir würde ich selbst bei der Ulti an deiner Seite bleiben 😎" },
    { id: "reinhardt", name: "Reinhardt", role: "Tank", voice: "assets/audio/voicelines/reinhardt.mp3", img: "assets/images/heroes/reinhardt.png", pickText: "Einmal von Emi's Reinhardt an die Wand gepinnt werden 😔 " },
    { id: "roadhog", name: "Roadhog", role: "Tank", voice: "assets/audio/voicelines/roadhog.mp3", img: "assets/images/heroes/roadhog.png", pickText: "Emi, Are you a Roadhog main? Because I am hooked!🪝" },
    { id: "sigma", name: "Sigma", role: "Tank", voice: "assets/audio/voicelines/sigma.mp3", img: "assets/images/heroes/sigma.png", pickText: "Sigma, Sigma, boy, Sigma-boy - Sigma-boy" },
    { id: "winston", name: "Winston", role: "Tank", voice: "assets/audio/voicelines/winston.mp3", img: "assets/images/heroes/winston.png", pickText: "Winton 🦍, Winton 🦍, Winton 🦍" },
    { id: "wrecking-ball", name: "Wrecking Ball", role: "Tank", voice: "assets/audio/voicelines/wrecking-ball.mp3", img: "assets/images/heroes/wrecking-ball.png", pickText: "I CAME IN LIKE A WREEEECKING BAAAALL 🐹" },
    { id: "zarya", name: "Zarya", role: "Tank", voice: "assets/audio/voicelines/zarya.mp3", img: "assets/images/heroes/zarya.png", pickText: "Emi, mainst du Zarya? Das erklärt deine unglaubliche Anziehungskraft 😏" },
  ],

  Damage: [
    { id: "ashe", name: "Ashe", role: "Damage", voice: "assets/audio/voicelines/ashe.mp3", img: "assets/images/heroes/ashe.png", pickText: "BOOOOOOOOOOOOOOOOOOOOOOOOOB" },
    { id: "bastion", name: "Bastion", role: "Damage", voice: "assets/audio/voicelines/bastion.mp3", img: "assets/images/heroes/bastion.png", pickText: "BEEP-BOOP, I SENSED A BEAUTY 🤖" },
    { id: "cassidy", name: "Cassidy", role: "Damage", voice: "assets/audio/voicelines/cassidy.mp3", img: "assets/images/heroes/cassidy.png", pickText: "(*Cowboy-stimme*) Are you from Tennessee? Because you're the only ten I see 🤠? (eww)" },
    { id: "echo", name: "Echo", role: "Damage", voice: "assets/audio/voicelines/echo.mp3", img: "assets/images/heroes/echo.png", pickText: "Emi, Echo kann einiges kopieren, aber niemals deine cuteness ✨" },
    { id: "freja", name: "Freja", role: "Damage", voice: "assets/audio/voicelines/freja.mp3", img: "assets/images/heroes/freja.png", pickText: "AYOOO, BONDAGE ULT HERO???? 🪢" },
    { id: "genji", name: "Genji", role: "Damage", voice: "assets/audio/voicelines/genji.mp3", img: "assets/images/heroes/genji.png", pickText: "Der eine Japaner 🗡️" },
    { id: "hanzo", name: "Hanzo", role: "Damage", voice: "assets/audio/voicelines/hanzo.mp3", img: "assets/images/heroes/hanzo.png", pickText: "Der andere Japaner 🎯" },
    { id: "junkrat", name: "Junkrat", role: "Damage", voice: "assets/audio/voicelines/junkrat.mp3", img: "assets/images/heroes/junkrat.png", pickText: "Is your name Junkrat? Because you’ve blown me away with your charm 💥" },
    { id: "mei", name: "Mei", role: "Damage", voice: "assets/audio/voicelines/mei.mp3", img: "assets/images/heroes/mei.png", pickText: "Emi, du bist aMMMEEEEEEEEIIIIIIIIIzing ❄️" },
    { id: "pharah", name: "Pharah", role: "Damage", voice: "assets/audio/voicelines/pharah.mp3", img: "assets/images/heroes/pharah.png", pickText: "Natürlich schießt die Araberin mit Explosiv-Raketen. Nice Cliche Blizzard 🤪" },
    { id: "reaper", name: "Reaper", role: "Damage", voice: "assets/audio/voicelines/reaper.mp3", img: "assets/images/heroes/reaper.png", pickText: "Press R to win" },
    { id: "sojourn", name: "Sojourn", role: "Damage", voice: "assets/audio/voicelines/sojourn.mp3", img: "assets/images/heroes/sojourn.png", pickText: "Keine Ahnung, Sojourn halt. Die mit der Railgun. Man könnte jetzt irgendeinen cleveren Wortwitz über Laden, Entladen oder‚ gerailt werden machen, aber das wäre extrem unangenehm für alle Beteiligten. Deshalb steht hier stattdessen dieser viel zu lange Text, der nichts aussagt, außer dass Sojourn existiert, eine Railgun hat und Dinge sehr präzise verschwinden lässt" },
    { id: "soldier-76", name: "Soldier: 76", role: "Damage", voice: "assets/audio/voicelines/soldier-76.mp3", img: "assets/images/heroes/soldier-76.png", pickText: " I wouldn't mind being in your sight - Six Seven (Wow der war ja gar nicht vorrausschaubar)" },
    { id: "sombra", name: "Sombra", role: "Damage", voice: "assets/audio/voicelines/sombra.mp3", img: "assets/images/heroes/sombra.png", pickText: "Emi, du dürftest mich jederzeit hacken 🥸" },
    { id: "symmetra", name: "Symmetra", role: "Damage", voice: "assets/audio/voicelines/symmetra.mp3", img: "assets/images/heroes/symmetra.png", pickText: "Emi, mainst du Symmetra? Denn du bist die perfekte Symmetrie aus Schönheit und Verstand 🌹 (Sei ehrlich der war Stark 👀)." },
    { id: "torbjorn", name: "Torbjörn", role: "Damage", voice: "assets/audio/voicelines/torbjorn.mp3", img: "assets/images/heroes/torbjorn.png", pickText: "Daddy 🔧" },
    { id: "tracer", name: "Tracer", role: "Damage", voice: "assets/audio/voicelines/tracer.mp3", img: "assets/images/heroes/tracer.png", pickText: "I am already Tracer ⏱️" },
    { id: "vendetta", name: "Vendetta", role: "Damage", voice: "assets/audio/voicelines/vendetta.mp3", img: "assets/images/heroes/vendetta.png", pickText: "Genji in gut 🥸" },
    { id: "venture", name: "Venture", role: "Damage", voice: "assets/audio/voicelines/venture.mp3", img: "assets/images/heroes/venture.png", pickText: "Maulwurf-Simulator" },
    { id: "widowmaker", name: "Widowmaker", role: "Damage", voice: "assets/audio/voicelines/widowmaker.mp3", img: "assets/images/heroes/widowmaker.png", pickText: "I am already Widowmaker 🕷️" },
  ],

  Support: [
    { id: "ana", name: "Ana", role: "Support", voice: "assets/audio/voicelines/ana.mp3", img: "assets/images/heroes/ana.png", pickText: "Emi, mit dir wirds nie langweilig, selbst Ana hätte keine Chance, mich einzuschläfern 😌💗" },
    { id: "baptiste", name: "Baptiste", role: "Support", voice: "assets/audio/voicelines/baptiste.mp3", img: "assets/images/heroes/baptiste.png", pickText: "Emi, selbst das Lebenserhaltungsfeld hilft nicht gegen deinen Skill, sie fallen trotdem alle um ✨" },
    { id: "brigitte", name: "Brigitte", role: "Support", voice: "assets/audio/voicelines/brigitte.mp3", img: "assets/images/heroes/brigitte.png", pickText: "Emi, Roses are red, violets are blue, I’ll be your shield if you’ll be mine too 💗" },
    { id: "illari", name: "Illari", role: "Support", voice: "assets/audio/voicelines/illari.mp3", img: "assets/images/heroes/illari.png", pickText: "Emi, du strahlst mehr als Illari's Ult ☀️" },
    { id: "juno", name: "Juno", role: "Support", voice: "assets/audio/voicelines/juno.mp3", img: "assets/images/heroes/juno.png", pickText: "Emi, mit dir fühlt sich alles schwerelos an 💗" },
    { id: "kiriko", name: "Kiriko", role: "Support", voice: "assets/audio/voicelines/kiriko.mp3", img: "assets/images/heroes/kiriko.png", pickText: "Emi, nicht nur dein Cosplay sondern auch dein Aim slayyyyed 💅💗" },
    { id: "lifeweaver", name: "Lifeweaver", role: "Support", voice: "assets/audio/voicelines/lifeweaver.mp3", img: "assets/images/heroes/lifeweaver.png", pickText: "Emi, I wouldn't mind getting pulled to you (respectfully)  🌸" },
    { id: "lucio", name: "Lúcio", role: "Support", voice: "assets/audio/voicelines/lucio.mp3", img: "assets/images/heroes/lucio.png", pickText: "Emi, Zeit die Ukulele auszupacken 🎶" },
    { id: "mercy", name: "Mercy", role: "Support", voice: "assets/audio/voicelines/mercy.mp3", img: "assets/images/heroes/mercy.png", pickText: "be my pocket Mercy UwU 👉👈💗" },
    { id: "moira", name: "Moira", role: "Support", voice: "assets/audio/voicelines/moira.mp3", img: "assets/images/ui/bah.png", pickText: "eww" },
    { id: "wuyang", name: "Wuyang", role: "Support", voice: "assets/audio/voicelines/wuyang.mp3", img: "assets/images/heroes/wuyang.png", pickText: "Emi, mit dir an meiner Seite fließt der Fight einfach in die richtige Richtung (Checkst du? Wegen Wasser undso HAHAHA lustig 🤪)" },
    { id: "zenyatta", name: "Zenyatta", role: "Support", voice: "assets/audio/voicelines/zenyatta.mp3", img: "assets/images/heroes/zenyatta.png", pickText: "Tritt mich 🦶" },
  ],
};

// ================= INTRO / SZENEN =================

const scenes = document.querySelectorAll(".intro-scene");
let currentScene = 0;

function showScene(index) {
  scenes.forEach((scene, i) => {
    scene.style.display = i === index ? "flex" : "none";
  });
}

// Start bei Szene 0
showScene(currentScene);

const introSection = document.getElementById("intro");
const introTheme = document.getElementById("intro-theme");
const alarmSound = document.getElementById("alarm-sound");

// ✅ FIX: Outro/Ending Musik (HTML hat bei dir boot-melody)
const endingMusic =
  document.getElementById("boot-melody") || document.getElementById("ending-music");

// Setze globale Lautstärke direkt
if (introTheme) introTheme.volume = 0.25;

/* =========================================================
   ✅ NEU HINZUGEFÜGT: Sanfter Fade von Intro → Main (nur JS, kein CSS nötig)
   - injiziert Fallback-CSS für #intro Fade
   - endIntro() blendet Intro weich aus und erst danach display:none
========================================================= */

function ensureIntroFadeStyles() {
  if (document.getElementById("intro-fade-style")) return;

  const style = document.createElement("style");
  style.id = "intro-fade-style";
  style.textContent = `
    #intro {
      opacity: 1;
      transition: opacity 1200ms ease;
      will-change: opacity;
    }
    #intro.intro-fading-out {
      opacity: 0;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
}

ensureIntroFadeStyles();

/* ========================================================= */

// ================== INTRO END / SKIP ==================

function endIntro() {
  // Stop Intro Theme
  if (introTheme) {
    introTheme.pause();
    introTheme.currentTime = 0;
  }

  // Stop Alarm
  if (alarmSound) {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }

  // Stop Ending Music
  if (endingMusic) {
    endingMusic.pause();
    endingMusic.currentTime = 0;
  }

  const intro = document.getElementById("intro");
  if (intro) {
    // ✅ Fade-Out statt sofort weg
    intro.classList.add("intro-fading-out");

    // nach Fade dann wirklich entfernen
    setTimeout(() => {
      intro.style.display = "none";
    }, 1200);
  }

  document.body.classList.remove("intro-active");
  window.scrollTo(0, 0);

  stopMicListening();
  stopMoiraAnimation();
}

const skipBtn = document.getElementById("skip-intro");
if (skipBtn) skipBtn.addEventListener("click", () => endIntro());

// ================== FLOATING BUTTON ==================

const floatingButton = document.getElementById("floating-button");
const floatingPanel = document.getElementById("floating-panel");

if (floatingButton && floatingPanel) {
  floatingButton.addEventListener("click", () => {
    floatingPanel.classList.toggle("hidden");
  });
}

// ================== SECRET CODE LOGIK ==================

const SECRET_CODE = "17122002";
let enteredCode = "";

const codeDisplay = document.getElementById("code-display");
const codeMessage = document.getElementById("code-message");
const codePanel = document.querySelector(".code-panel");

const errorBeep = document.getElementById("error-beep");
const successSound = document.getElementById("success-sound");
const keyClickSound = document.getElementById("key-click");

if (keyClickSound) keyClickSound.volume = 0.5;

function updateCodeDisplay() {
  if (!codeDisplay) return;
  codeDisplay.textContent = enteredCode.length === 0 ? "••••••••" : enteredCode;
}

function playSound(audioElement, volume = null) {
  if (!audioElement) return;
  if (volume !== null) audioElement.volume = volume;
  audioElement.currentTime = 0;
  audioElement.play().catch(() => {});
}

function playKeyClick() {
  playSound(keyClickSound);
}

function setCodeMessage(text, isError = false) {
  if (!codeMessage) return;
  codeMessage.textContent = text;
  codeMessage.style.color = isError ? "#ff5252" : "#a5d6a7";
}

function goToScene1() {
  currentScene = 1;
  showScene(currentScene);

  if (introTheme) {
    introTheme.volume = 0.25;
    introTheme.currentTime = 1;
    introTheme.play().catch(() => {});
  }

  startScene1();
}

function checkCode() {
  if (enteredCode.length === 0) {
    setCodeMessage("Gib zuerst den vollständigen Code ein.", true);
    playSound(errorBeep);
    return;
  }

  if (enteredCode === SECRET_CODE) {
    setCodeMessage("Eintritt gewährt. Willkommen, Emi.", false);
    playSound(successSound);

    if (introSection) introSection.classList.add("bubbles-active");

    setTimeout(() => goToScene1(), 800);
  } else {
    setCodeMessage("Buuuuh. Falscher Code.", true);
    playSound(errorBeep);

    if (codePanel) {
      codePanel.classList.add("error");
      setTimeout(() => codePanel.classList.remove("error"), 250);
    }

    enteredCode = "";
    updateCodeDisplay();
  }
}

const keypadKeys = document.querySelectorAll(".keypad-key");
keypadKeys.forEach((key) => {
  const digit = key.getAttribute("data-digit");

  key.addEventListener("mousedown", () => key.classList.add("pressed"));
  ["mouseup", "mouseleave"].forEach((ev) =>
    key.addEventListener(ev, () => key.classList.remove("pressed"))
  );

  if (digit !== null) {
    key.addEventListener("click", () => {
      if (enteredCode.length < SECRET_CODE.length) {
        enteredCode += digit;
        updateCodeDisplay();
        setCodeMessage("");
        playKeyClick();
      }
    });
  }
});

const deleteButton = document.getElementById("code-delete");
const enterButton = document.getElementById("code-enter");

if (deleteButton) {
  deleteButton.addEventListener("click", () => {
    if (enteredCode.length > 0) {
      enteredCode = enteredCode.slice(0, -1);
      updateCodeDisplay();
      setCodeMessage("");
    }
    playKeyClick();
  });
}

if (enterButton) enterButton.addEventListener("click", () => checkCode());

updateCodeDisplay();

// =================== SZENE 1 – MAGIC PANEL ===================

let scene1Timeout = null;
const SCENE1_DURATION = 4000;

function startScene1() {
  if (scene1Timeout) clearTimeout(scene1Timeout);
  scene1Timeout = setTimeout(() => goToCakeScene(), SCENE1_DURATION);
}

// =================== SZENE 2 – KUCHEN ===================

function goToCakeScene() {
  currentScene = 2;
  showScene(currentScene);
}

const micButton = document.getElementById("mic-button");
const continueButton = document.getElementById("continue-button");
const blowPopup = document.getElementById("blow-popup");
const successPopup = document.getElementById("success-popup");

const flameEl = document.querySelector("#intro-cake .flame");
const candleEl = document.querySelector("#intro-cake .candle");

let audioContext = null;
let analyser = null;
let micStream = null;
let dataArray = null;
let blowAnimationFrame = null;

let blowStage = 1;
const WEAK_THRESHOLD = 50;
const STRONG_THRESHOLD = 60;

/* =========================================================
   ✅ FIX: Skip Button in der Kuchen-Szene (sichtbar)
   - Button wird automatisch erstellt, falls nicht vorhanden
   - Wichtig: #intro-cake wird zum position-context (position:relative),
     damit absolute Positionierung NICHT außerhalb landet.
========================================================= */

function ensureCakeSkipButton() {
  const cakeScene = document.getElementById("intro-cake");
  if (!cakeScene) return null;

  // ✅ FIX: Damit absolute children (Skip) korrekt relativ zur Szene liegen
  if (!cakeScene.style.position) cakeScene.style.position = "relative";
  // optional: falls was clipped (sicher)
  if (!cakeScene.style.overflow) cakeScene.style.overflow = "visible";

  let btn = document.getElementById("skip-blow");
  if (btn) return btn;

  btn = document.createElement("button");
  btn.id = "skip-blow";
  btn.type = "button";
  btn.textContent = "Skip (ohne Mikro) →";
  btn.setAttribute("aria-label", "Kuchen Szene überspringen (ohne Mikro)");
  btn.classList.add("cake-skip");

  // ✅ FIX: Immer sichtbar im Viewport-Bereich der Szene
  btn.style.position = "absolute";
  btn.style.right = "32px";
  btn.style.bottom = "32px";
  btn.style.zIndex = "999";

  // Styling (fallback, falls CSS mal nicht lädt)
  btn.style.padding = "12px 18px";
  btn.style.borderRadius = "999px";
  btn.style.border = "1px dashed rgba(255,255,255,0.5)";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "14px";
  btn.style.fontWeight = "800";
  btn.style.background = "rgba(255,255,255,0.10)";
  btn.style.color = "rgba(255,255,255,0.92)";
  btn.style.boxShadow = "0 0 18px rgba(0,0,0,0.55)";
  btn.style.backdropFilter = "blur(8px)";
  btn.style.transition = "all 0.2s ease";

  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.04)";
    btn.style.background = "rgba(255,255,255,0.16)";
    btn.style.borderColor = "rgba(255,255,255,0.9)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.background = "rgba(255,255,255,0.10)";
    btn.style.borderColor = "rgba(255,255,255,0.5)";
  });

  cakeScene.appendChild(btn);
  return btn;
}

function forceCakeSuccessFlow() {
  // so tun als wäre stark gepustet worden
  extinguishCandle();
  spawnSmokePuffs();
  stopMicListening();

  if (micButton) {
    micButton.textContent = "Kerzen gelöscht 🎂";
    micButton.disabled = true;
  }

  if (continueButton) continueButton.classList.remove("hidden");
  showSuccessPopup();
}

// Button erstellen + Listener setzen
const cakeSkipBtn = ensureCakeSkipButton();
if (cakeSkipBtn) {
  cakeSkipBtn.addEventListener("click", () => {
    forceCakeSuccessFlow();
  });
}

/* ========================================================= */

if (micButton && flameEl && candleEl) {
  micButton.addEventListener("click", () => {
    micButton.disabled = true;
    micButton.textContent =
      blowStage === 1 ? "🎤 Puste die Kerzen aus!" : "🎤 Jetzt richtig pusten!";
    startMicListening();
  });
}

function startMicListening() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showBlowPopup("Dein Browser unterstützt leider kein Mikrofon 😭");
    if (micButton) {
      micButton.disabled = false;
      micButton.textContent = "🎤 Mikro aktivieren";
    }
    return;
  }

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      micStream = stream;

      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);

      analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;

      const bufferLength = analyser.fftSize;
      dataArray = new Uint8Array(bufferLength);

      source.connect(analyser);

      detectBlowLoop();
    })
    .catch((err) => {
      console.error("Mic error:", err);
      if (micButton) {
        micButton.disabled = false;
        micButton.textContent = "🎤 Mikro aktivieren";
      }
      showBlowPopup("Mikrofonzugriff wurde blockiert 😅");
    });
}

function detectBlowLoop() {
  if (!analyser || !dataArray) return;

  analyser.getByteTimeDomainData(dataArray);

  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) {
    const v = dataArray[i] - 128;
    sum += Math.abs(v);
  }

  const avg = sum / dataArray.length;

  if (blowStage === 1 && avg > WEAK_THRESHOLD) {
    showBlowPopup(
      "Das war schon ganz gut, aber du musst noch ein bisschen stärker pusten! 🫧✨"
    );
    stopMicListening();

    if (micButton) {
      micButton.disabled = false;
      micButton.textContent = "🎤 Nochmal pusten";
    }
    blowStage = 2;
    return;
  }

  if (blowStage === 2 && avg > STRONG_THRESHOLD) {
    extinguishCandle();
    spawnSmokePuffs();
    stopMicListening();

    if (micButton) {
      micButton.textContent = "Kerzen gelöscht 🎂";
      micButton.disabled = true;
    }

    if (continueButton) continueButton.classList.remove("hidden");
    showSuccessPopup();
    return;
  }

  blowAnimationFrame = requestAnimationFrame(detectBlowLoop);
}

function stopMicListening() {
  if (blowAnimationFrame) {
    cancelAnimationFrame(blowAnimationFrame);
    blowAnimationFrame = null;
  }

  if (micStream) {
    micStream.getTracks().forEach((t) => t.stop());
    micStream = null;
  }

  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
}

function showBlowPopup(text) {
  if (!blowPopup) return;
  blowPopup.textContent = text;
  blowPopup.classList.add("show");
  setTimeout(() => blowPopup.classList.remove("show"), 3500);
}

function showSuccessPopup() {
  if (!successPopup) return;
  successPopup.classList.add("show");
}

function extinguishCandle() {
  if (!flameEl) return;
  flameEl.style.animation = "none";
  flameEl.style.opacity = "0";
  flameEl.style.boxShadow = "none";
}

function spawnSmokePuffs() {
  if (!candleEl) return;

  for (let i = 0; i < 4; i++) {
    const smoke = document.createElement("div");
    smoke.classList.add("smoke");
    smoke.style.left = "50%";
    smoke.style.marginLeft = Math.random() * 10 - 5 + "px";
    smoke.style.animationDelay = i * 0.2 + "s";

    candleEl.appendChild(smoke);
    setTimeout(() => smoke.remove(), 2000);
  }
}

if (continueButton) {
  continueButton.addEventListener("click", () => {
    continueButton.disabled = true;
    continueButton.textContent = "Lädt...";
    setTimeout(() => startAlarmScene(), 600);
  });
}

// ====================== SZENE 3 – ALARM / VS ======================

const acceptChallengeBtn = document.getElementById("accept-challenge");

function startAlarmScene() {
  stopMicListening();

  currentScene = 3;
  showScene(currentScene);

  if (alarmSound) {
    alarmSound.volume = 0.4;
    alarmSound.currentTime = 0;
    alarmSound.play().catch(() => {});
  }
}

if (acceptChallengeBtn)
  acceptChallengeBtn.addEventListener("click", () => startMinigameScene());

// ====================== SZENE 4 – KUNAI MINIGAME ======================

const minigameScene = document.getElementById("intro-minigame");
const kunaiField = document.getElementById("kunai-field");
const kunaiCrosshair = document.getElementById("kunai-crosshair");
const kirikoPlayer = document.getElementById("kiriko-player");
const moiraEnemy = document.getElementById("moira-enemy");
const kunaiMessage = document.getElementById("kunai-message");
const retryButton = document.getElementById("kunai-retry");
const giveupButton = document.getElementById("kunai-giveup");
const hitSound = document.getElementById("hit-sound");
if (hitSound) hitSound.volume = 0.6;

const hitCountEl = document.getElementById("hit-count");
const hitNeededEl = document.getElementById("hit-needed");
const missCountEl = document.getElementById("miss-count");
const shotCountEl = document.getElementById("shot-count");
const shotMaxEl = document.getElementById("shot-max");

const MAX_MISSES = 3;
const NEEDED_HITS = 5;
const MAX_SHOTS = 7;

// Feeling
const MOIRA_SPEED_PX_PER_S = 1400;
const KUNAI_SPEED_PX_PER_S = 3000;
const KUNAI_MAX_LIFETIME_MS = 1400;

if (hitNeededEl) hitNeededEl.textContent = String(NEEDED_HITS);
if (shotMaxEl) shotMaxEl.textContent = String(MAX_SHOTS);

let hitCount = 0;
let missCount = 0;
let shotCount = 0;

let throwInProgress = false;
let gameOver = false;

let moiraDirection = 1;
let moiraAnimFrame = null;
let moiraLastTimestamp = null;

let crosshairX = null;
let crosshairY = null;

// Lose Overlay unten links im Spielfeld
let loseOverlayEl = null;

function clearLoseOverlay() {
  if (loseOverlayEl && loseOverlayEl.parentNode) loseOverlayEl.remove();
  loseOverlayEl = null;
}

function showLoseOverlay(text) {
  if (!kunaiField) return;
  clearLoseOverlay();
  const el = document.createElement("div");
  el.className = "kunai-lose-overlay";
  el.textContent = text;
  kunaiField.appendChild(el);
  loseOverlayEl = el;
}

// ---------- Moira Bewegung ----------
function startMoiraAnimation() {
  if (!moiraEnemy || !kunaiField) return;

  moiraEnemy.style.top = "50%";
  moiraEnemy.style.transform = "translateY(-50%)";

  moiraDirection = 1;
  moiraLastTimestamp = null;

  function step(timestamp) {
    if (!moiraEnemy || !kunaiField) return;

    if (!minigameScene || minigameScene.style.display === "none") {
      moiraAnimFrame = requestAnimationFrame(step);
      return;
    }

    if (!moiraLastTimestamp) moiraLastTimestamp = timestamp;
    const dt = (timestamp - moiraLastTimestamp) / 1000;
    moiraLastTimestamp = timestamp;

    const fieldRect = kunaiField.getBoundingClientRect();
    const moiraRect = moiraEnemy.getBoundingClientRect();

    let currentTop = parseFloat(
      moiraEnemy.dataset.top || (fieldRect.height - moiraRect.height) / 2
    );

    currentTop += moiraDirection * MOIRA_SPEED_PX_PER_S * dt;

    const minTop = 20;
    const maxTop = fieldRect.height - moiraRect.height - 20;

    if (currentTop < minTop) {
      currentTop = minTop;
      moiraDirection = 1;
    } else if (currentTop > maxTop) {
      currentTop = maxTop;
      moiraDirection = -1;
    }

    moiraEnemy.style.top = currentTop + "px";
    moiraEnemy.style.transform = "";
    moiraEnemy.dataset.top = String(currentTop);

    moiraAnimFrame = requestAnimationFrame(step);
  }

  if (moiraAnimFrame) cancelAnimationFrame(moiraAnimFrame);
  moiraAnimFrame = requestAnimationFrame(step);
}

function stopMoiraAnimation() {
  if (moiraAnimFrame) {
    cancelAnimationFrame(moiraAnimFrame);
    moiraAnimFrame = null;
  }
}

// ---------- Crosshair ----------
function moveCrosshair(x, y) {
  if (!kunaiCrosshair || !kunaiField) return;
  const size = 32;
  kunaiCrosshair.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
}

function onKunaiMouseMove(ev) {
  if (!kunaiField) return;

  const rect = kunaiField.getBoundingClientRect();
  let x = ev.clientX - rect.left;
  let y = ev.clientY - rect.top;

  x = Math.max(0, Math.min(rect.width, x));
  y = Math.max(0, Math.min(rect.height, y));

  crosshairX = x;
  crosshairY = y;

  moveCrosshair(x, y);
}

function onKunaiMouseLeave() {
  crosshairX = null;
  crosshairY = null;

  if (kunaiCrosshair) kunaiCrosshair.style.transform = "translate(-9999px, -9999px)";
}

// ---------- Hitbox ----------
function getMoiraHitboxInFieldCoords() {
  if (!kunaiField || !moiraEnemy) return null;

  const fieldRect = kunaiField.getBoundingClientRect();
  const moiraRect = moiraEnemy.getBoundingClientRect();

  const padX = moiraRect.width * 0.04;
  const padY = moiraRect.height * 0.04;

  const x1 = moiraRect.left - fieldRect.left + padX;
  const y1 = moiraRect.top - fieldRect.top + padY;
  const x2 = moiraRect.right - fieldRect.left - padX;
  const y2 = moiraRect.bottom - fieldRect.top - padY;

  return { x1, y1, x2, y2 };
}

function pointInBox(px, py, box) {
  return px >= box.x1 && px <= box.x2 && py >= box.y1 && py <= box.y2;
}

// ---------- State ----------
function resetMinigame() {
  clearLoseOverlay();

  if (kunaiMessage) kunaiMessage.classList.remove("hidden");

  hitCount = 0;
  missCount = 0;
  shotCount = 0;

  throwInProgress = false;
  gameOver = false;

  if (hitCountEl) hitCountEl.textContent = "0";
  if (missCountEl) missCountEl.textContent = "0";
  if (shotCountEl) shotCountEl.textContent = "0";

  if (kunaiMessage) {
    kunaiMessage.textContent = "Klicke ins Spielfeld, um ein Kunai zu werfen!";
    kunaiMessage.classList.remove("success", "fail");
  }

  if (retryButton) retryButton.classList.add("hidden");

  if (giveupButton) {
    giveupButton.textContent = "Aufgeben";
    giveupButton.classList.remove("hidden");
  }

  crosshairX = null;
  crosshairY = null;

  if (kunaiCrosshair) kunaiCrosshair.style.transform = "translate(-9999px, -9999px)";

  startMoiraAnimation();
}

function startMinigameScene() {
  if (!minigameScene) return;

  stopMicListening();

  if (alarmSound) {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }

  const index = Array.from(scenes).indexOf(minigameScene);
  if (index !== -1) {
    currentScene = index;
    showScene(currentScene);
  }

  resetMinigame();
}

function updateStatsAndCheckState(hit) {
  if (hit) {
    hitCount++;
    if (hitCountEl) hitCountEl.textContent = String(hitCount);
  } else {
    missCount++;
    if (missCountEl) missCountEl.textContent = String(missCount);
  }

  shotCount++;
  if (shotCountEl) shotCountEl.textContent = String(shotCount);

  if (hitCount >= NEEDED_HITS) return handleMinigameWin();
  if (missCount >= MAX_MISSES) return handleMinigameLose();
  if (shotCount >= MAX_SHOTS) return handleMinigameLose();
}

function handleMinigameWin() {
  gameOver = true;
  throwInProgress = false;

  clearLoseOverlay();

  if (kunaiMessage) {
    kunaiMessage.textContent =
      "Nice! Du hast Moira besiegt! 🎉 Hol dir jetzt deine Geschenke!";
    kunaiMessage.classList.remove("fail");
    kunaiMessage.classList.add("success");
  }

  if (retryButton) retryButton.classList.add("hidden");

  if (giveupButton) {
    giveupButton.textContent = "🎁 Weiter zu den Geschenken";
    giveupButton.classList.remove("hidden");
  }
}

function handleMinigameLose() {
  gameOver = true;
  throwInProgress = false;

  if (kunaiMessage) kunaiMessage.classList.add("hidden");

  showLoseOverlay("Oh nein, Moira ist entkommen… 💔");

  if (retryButton) retryButton.classList.remove("hidden");
}

function finishMinigame() {
  stopMoiraAnimation();
  goToGiftsScene();
}

function goToGiftsScene() {
  const giftsScene = document.getElementById("intro-gifts");
  if (!giftsScene) return endIntro();

  const index = Array.from(scenes).indexOf(giftsScene);
  if (index === -1) return endIntro();

  currentScene = index;
  showScene(currentScene);

  resetGiftsScene();
}

// ---------- Kunai Flight ----------
function createKunaiElement(startX, startY, angleDeg) {
  const kunai = document.createElement("img");
  kunai.src = "assets/images/ui/Kunai.png";
  kunai.classList.add("kunai-projectile");
  kunai.style.transition = "none";
  kunai.style.position = "absolute";
  kunai.style.left = `${startX}px`;
  kunai.style.top = `${startY}px`;
  kunai.style.transform = `rotate(${angleDeg}deg)`;
  return kunai;
}

function removeKunai(el) {
  if (!el) return;
  if (el.parentNode) el.remove();
}

function onKunaiFieldClick(ev) {
  if (!kunaiField || !kirikoPlayer) return;
  if (throwInProgress || gameOver) return;

  const fieldRect = kunaiField.getBoundingClientRect();

  if (crosshairX === null || crosshairY === null) {
    crosshairX = ev.clientX - fieldRect.left;
    crosshairY = ev.clientY - fieldRect.top;
    moveCrosshair(crosshairX, crosshairY);
  }

  const targetX = crosshairX;
  const targetY = crosshairY;

  const kirikoRect = kirikoPlayer.getBoundingClientRect();
  const startX = kirikoRect.right - fieldRect.left - 20;
  const startY = kirikoRect.top - fieldRect.top + kirikoRect.height * 0.35;

  const dx = targetX - startX;
  const dy = targetY - startY;

  const len = Math.hypot(dx, dy) || 1;
  const nx = dx / len;
  const ny = dy / len;

  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  const kunai = createKunaiElement(startX, startY, angle);
  kunaiField.appendChild(kunai);

  throwInProgress = true;

  let x = startX;
  let y = startY;

  let startTime = null;
  let lastTime = null;

  function step(ts) {
    if (!startTime) {
      startTime = ts;
      lastTime = ts;
    }

    const aliveMs = ts - startTime;
    const dt = (ts - lastTime) / 1000;
    lastTime = ts;

    x += nx * KUNAI_SPEED_PX_PER_S * dt;
    y += ny * KUNAI_SPEED_PX_PER_S * dt;

    kunai.style.left = `${x}px`;
    kunai.style.top = `${y}px`;

    const out =
      x < -80 ||
      y < -80 ||
      x > fieldRect.width + 80 ||
      y > fieldRect.height + 80 ||
      aliveMs > KUNAI_MAX_LIFETIME_MS;

    const hb = getMoiraHitboxInFieldCoords();
    const hit = hb ? pointInBox(x, y, hb) : false;

    if (hit) {
      if (hitSound) {
        hitSound.currentTime = 0;
        hitSound.play().catch(() => {});
      }

      removeKunai(kunai);
      updateStatsAndCheckState(true);
      throwInProgress = false;
      return;
    }

    if (out) {
      removeKunai(kunai);
      updateStatsAndCheckState(false);
      throwInProgress = false;
      return;
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

if (kunaiField) {
  kunaiField.addEventListener("click", onKunaiFieldClick);
  kunaiField.addEventListener("mousemove", onKunaiMouseMove);
  kunaiField.addEventListener("mouseleave", onKunaiMouseLeave);
}

if (retryButton) retryButton.addEventListener("click", () => resetMinigame());
if (giveupButton) giveupButton.addEventListener("click", () => finishMinigame());

// ====================== SZENE 5 – GESCHENKE (MODAL) ======================

const giftOverlay = document.getElementById("gift-overlay");
const giftCloseBtn = document.getElementById("gift-close");
const giftModalTitle = document.getElementById("gift-modal-title");
const giftModalBody = document.getElementById("gift-modal-body");

const giftBtnCard = document.getElementById("gift-card");
const giftBtnFlowers = document.getElementById("gift-flowers");

/* =========================================================
   ✅ NEW: 4. Geschenk (PNG "fragen") als drittes Geschenk
   - erwartet HTML ID: gift-questions
   - Bild im Modal: assets/images/ui/fragen.png
========================================================= */
const giftBtnQuestions = document.getElementById("gift-questions");
/* ========================================================= */

const giftBtnSteam = document.getElementById("gift-steam");

const giftBtnMail = document.getElementById("gift-mail");


// ✅ FIX: NUR EINMAL deklarieren (du hattest es doppelt)
const giftsContinueBtn = document.getElementById("gifts-continue");

const giftMagicSound = document.getElementById("gift-magic-sound");

function openGiftModal() {
  if (!giftOverlay) return;

  playSound(giftMagicSound, 0.55);

  const header = document.querySelector(".gift-modal-header");
  if (giftModalTitle) giftModalTitle.textContent = "";
  if (header) header.classList.add("hidden");

  giftOverlay.classList.remove("hidden");
}

function stopAllVideosInModal() {
  if (!giftModalBody) return;
  const vids = giftModalBody.querySelectorAll("video");
  vids.forEach((v) => {
    try {
      v.pause();
      v.currentTime = 0;
    } catch (_) {}
  });
}

function closeGiftModal() {
  if (!giftOverlay) return;
  stopAllVideosInModal();
  if (giftModalBody) giftModalBody.innerHTML = "";
  giftOverlay.classList.add("hidden");

  const header = document.querySelector(".gift-modal-header");
  if (header) header.classList.remove("hidden");
}

if (giftCloseBtn) giftCloseBtn.addEventListener("click", () => closeGiftModal());

if (giftOverlay) {
  giftOverlay.addEventListener("click", (e) => {
    if (e.target === giftOverlay) closeGiftModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (giftOverlay && !giftOverlay.classList.contains("hidden")) closeGiftModal();
  }
});

function renderCardGift() {
  if (!giftModalBody) return;

  const cardImg = "assets/images/ui/card.png";

  giftModalBody.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap:16px; width:100%;">
      <div id="flip-wrap" style="position:relative; width:min(520px, 92%); perspective: 1200px;">
        <div id="heart-layer" style="pointer-events:none; position:absolute; inset:-30px; overflow:visible; z-index:10;"></div>

        <div
          id="flip-card"
          style="position:relative; width:100%; border-radius:22px; transform-style:preserve-3d; transition: transform 520ms cubic-bezier(.2,.9,.2,1); cursor:pointer;"
          aria-label="Grußkarte öffnen"
          tabindex="0"
        >
          <div style="position:relative; backface-visibility:hidden; -webkit-backface-visibility:hidden; border-radius:22px; overflow:hidden; box-shadow:0 18px 40px rgba(0,0,0,0.55); background: rgba(0,0,0,0.25);">
            <img src="${cardImg}" alt="Grußkarte" style="width:100%; display:block; user-select:none; animation: cardFlyIn 0.6s ease-out;" />
          </div>

          <div style="position:absolute; inset:0; transform: rotateY(180deg); backface-visibility:hidden; -webkit-backface-visibility:hidden; border-radius:22px; overflow:hidden; box-shadow:0 18px 40px rgba(0,0,0,0.55); background: rgba(0,0,0,0.55); border:1px solid rgba(255,200,230,0.28); display:flex; flex-direction:column;">
            <div style="padding:14px 16px 10px; font-weight:800; color:#ffeaf6; border-bottom:1px solid rgba(255,200,230,0.18); display:flex; align-items:center; justify-content:space-between; gap:12px;">
              <span>Für Emi 💖</span>
              <span style="font-size:12px; opacity:0.85;">(Klick zum Schließen)</span>
            </div>

            <div id="gift-card-text" style="padding:16px 18px; overflow-y:auto; max-height: 320px; color:#ffeaf6; line-height:1.6; font-size:16px; background: rgba(0,0,0,0.45); border: 2px solid rgba(255, 210, 235, 0.55); border-radius: 16px; box-shadow: inset 0 0 0 2px rgba(0,0,0,0.25); scrollbar-width:thin; scrollbar-color:rgba(255,200,230,0.7) rgba(0,0,0,0.25);">
              <p style="margin:0 0 12px;">Heyyy Emi,</p>
              <p style="margin:0 0 12px;">ich hoffe du hast einen tollen Geburtstag und eine super Feier!</p>
              <p style="margin:0 0 12px;">
                Ich wollte dir etwas schenken, das bleibt.<br>
                Etwas, das du dir anschauen kannst, wann immer du magst und vor allem wenn du dich schlecht fühlst, damit du weißt, dass du genug für jemanden und ganz bestimmt kein Fehler bist.<br>
                (Und ich wollte nicht akward nach deiner Adresse fragen wie ein Creep um dir was zuzuschicken xD)
              </p>
              <p style="margin:0 0 12px;">
                Du bist ein Mensch mit einer besonderen Art.<br>
                Leise, ruhig und süß, aber stark.<br>
                Lieb, großherzig und zuverlässig, aber ehrlich.
              </p>
              <p style="margin:0 0 12px;">
                Ich hoffe, dieses Lebensjahr bringt dir mehr Freude,<br>
                und weniger Dinge, die sich schwer anfühlen.<br>
                Mehr Lächeln, die bleiben,<br>
                und weniger Gedanken, die dich runterziehen.
              </p>
              <p style="margin:0 0 12px;">Danke, dass es dich gibt.<br>Und danke, dass du so bist, wie du bist.</p>
              <p style="margin:0 0 10px;"><strong>Ich hab dich echt gern ♥</strong></p>
              <p style="margin:0;"><strong>Happy Birthday 🎊🎉</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>
      @keyframes cardFlyIn { from { transform: translateY(-40px) scale(0.95); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
      #gift-card-text::-webkit-scrollbar { width: 10px; }
      #gift-card-text::-webkit-scrollbar-track { background: rgba(0,0,0,0.25); border-radius: 999px; }
      #gift-card-text::-webkit-scrollbar-thumb { background: rgba(255,200,230,0.7); border-radius: 999px; }
      @keyframes heartPop { 0% { transform: translate(var(--x), var(--y)) scale(0.6); opacity: 0; } 15% { opacity: 1; } 100% { transform: translate(calc(var(--x) + var(--dx)), calc(var(--y) + var(--dy))) scale(1.25); opacity: 0; } }
    </style>
  `;

  const flipCard = document.getElementById("flip-card");
  const heartLayer = document.getElementById("heart-layer");

  let isOpen = false;
  let spawnedThisOpen = false;

  function spawnHearts() {
    if (!heartLayer) return;
    const count = 18;
    for (let i = 0; i < count; i++) {
      const h = document.createElement("div");
      h.textContent = "❤";
      h.style.position = "absolute";
      h.style.left = "50%";
      h.style.top = "45%";
      h.style.fontSize = 14 + Math.random() * 18 + "px";
      h.style.color = "rgba(255, 165, 210, 0.95)";
      h.style.textShadow = "0 0 14px rgba(255,150,200,0.9)";
      h.style.willChange = "transform, opacity";
      h.style.setProperty("--x", Math.random() * 30 - 15 + "px");
      h.style.setProperty("--y", Math.random() * 20 - 10 + "px");
      h.style.setProperty("--dx", Math.random() * 220 - 110 + "px");
      h.style.setProperty("--dy", -140 - Math.random() * 160 + "px");
      h.style.animation = `heartPop ${700 + Math.random() * 500}ms ease-out forwards`;
      h.style.opacity = "0";
      heartLayer.appendChild(h);
      setTimeout(() => h.remove(), 1400);
    }
  }

  function toggleFlip() {
    if (!flipCard) return;
    isOpen = !isOpen;
    flipCard.style.transform = isOpen ? "rotateY(180deg)" : "rotateY(0deg)";
    if (isOpen && !spawnedThisOpen) {
      spawnedThisOpen = true;
      spawnHearts();
    }
    if (!isOpen) spawnedThisOpen = false;
  }

  if (flipCard) {
    flipCard.addEventListener("click", toggleFlip);
    flipCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    });
  }
}

function renderFlowersGift() {
  if (!giftModalBody) return;

  giftModalBody.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap:14px; width:100%; max-width:1100px;">
      <div
        style="
          width:100%;
          padding:14px 18px;
          border-radius:16px;
          background: rgba(0,0,0,0.45);
          border: 2px solid rgba(255, 210, 235, 0.55);
          color:#ffeaf6;
          text-align:center;
          font-size:16px;
          line-height:1.5;
          box-shadow: inset 0 0 0 2px rgba(0,0,0,0.25);
        "
      >
        Hier eine Blume, weil ich dir gerade keine echten geben kann ♥
      </div>

      <video
        controls
        autoplay
        playsinline
        preload="metadata"
        style="
          width:100%;
          max-height:64vh;
          border-radius:16px;
          background: rgba(0,0,0,0.25);
          object-fit: contain;
        "
      >
        <source src="assets/Video/flowers.mp4" type="video/mp4" />
        Dein Browser kann das Video leider nicht abspielen.
      </video>
    </div>
  `;
}

/* =========================================================
   ✅ NEW: PNG Geschenk "fragen"
========================================================= */
function renderQuestionsGift() {
  if (!giftModalBody) return;

  const imgSrc = "assets/images/ui/fragen.png";

  giftModalBody.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap:14px; width:100%; max-width:1100px;">
      <img
        src="${imgSrc}"
        alt="Fragen"
        style="
          width:100%;
          max-height:72vh;
          object-fit: contain;
          border-radius:16px;
          background: rgba(0,0,0,0.25);
        "
      />
    </div>
  `;
}
/* ========================================================= */

function renderSteamGift() {
  if (!giftModalBody) return;

  const key = "7T44NQ9WYT3ETSKKMDK2"; // TODO: echten EA App Key einsetzen

  giftModalBody.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap:14px; width:100%;">

      <div style="font-weight:900; font-size:18px;">🎮 EA App Key</div>

      <div
        class="ea-key blurred"
        id="ea-key"
        style="
          cursor:pointer;
          font-size:20px;
          letter-spacing:2px;
          padding:12px 18px;
          border-radius:12px;
          background: rgba(0,0,0,0.45);
          border: 2px solid rgba(255,255,255,0.25);
          color:#ffeaf6;
        "
      >
        ${key}
      </div>

      <div
        style="
          margin-top:6px;
          font-size:14px;
          line-height:1.5;
          text-align:center;
          opacity:0.9;
          color:#ffeaf6;
        "
      >
        EA App runterladen (falls du das noch nicht hast)<br>
        ➜ <strong>Bibliothek</strong><br>
        ➜ <strong>Code einlösen</strong>
      </div>

    </div>
  `;

  const keyEl = giftModalBody.querySelector("#ea-key");
  if (keyEl) {
    keyEl.addEventListener("click", () => {
      keyEl.classList.toggle("blurred");
    });
  }
}

function renderMailGift() {
  if (!giftModalBody) return;

  giftModalBody.innerHTML = `
    <div
      style="
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        min-height:200px;
        font-size:22px;
        font-weight:800;
        color:#ffeaf6;
        text-align:center;
      "
    >
      Check deine E-Mails 🤭
    </div>
  `;
}



if (giftBtnCard) {
  giftBtnCard.addEventListener("click", () => {
    openGiftModal();
    renderCardGift();
  });
}

if (giftBtnFlowers) {
  giftBtnFlowers.addEventListener("click", () => {
    openGiftModal();
    renderFlowersGift();
  });
}

/* =========================================================
   ✅ NEW: Button Listener für "fragen" (3. Geschenk)
========================================================= */
if (giftBtnQuestions) {
  giftBtnQuestions.addEventListener("click", () => {
    openGiftModal();
    renderQuestionsGift();
  });
}
/* ========================================================= */

if (giftBtnSteam) {
  giftBtnSteam.addEventListener("click", () => {
    openGiftModal();
    renderSteamGift();
  });
}

if (giftBtnMail) {
  giftBtnMail.addEventListener("click", () => {
    openGiftModal();
    renderMailGift();
  });
}


function resetGiftsScene() {
  closeGiftModal();
  if (giftBtnCard) giftBtnCard.disabled = false;
  if (giftBtnFlowers) giftBtnFlowers.disabled = false;
  if (giftBtnQuestions) giftBtnQuestions.disabled = false;
  if (giftBtnSteam) giftBtnSteam.disabled = false;
  if (giftBtnMail) giftBtnMail.disabled = false;

}

// ====================== SZENE 6 – ENDING / SYSTEM BOOT ======================

const endingScene = document.getElementById("intro-ending");
const bootTextEl = document.getElementById("boot-text");

const BOOT_LINES = [
  "INITIALIZING OVERWATCH BIRTHDAY PROTOCOL...",
  "LOADING USER: EMILIE...",
  "SCANNING BIRTHDAY SIGNATURE...",
  "VERIFYING AGENT STATUS...",
  "ALL SYSTEMS ONLINE.",
  "WELCOME TO YOUR BIRTHDAY ARCADE, AGENT EMI.",
];

let bootTimers = [];

function clearBootTimers() {
  bootTimers.forEach((t) => clearTimeout(t));
  bootTimers = [];
}

function typeBootLines(lines, onDone) {
  if (!bootTextEl) return;
  clearBootTimers();
  bootTextEl.textContent = "";

  let li = 0;
  let ci = 0;

  function tick() {
    if (!bootTextEl) return;

    const line = lines[li] || "";
    bootTextEl.textContent =
      lines.slice(0, li).join("\n") + (li > 0 ? "\n" : "") + line.slice(0, ci);

    ci++;

    if (ci > line.length) {
      li++;
      ci = 0;

      if (li >= lines.length) {
        bootTextEl.textContent = lines.join("\n");
        if (onDone) onDone();
        return;
      }

      bootTimers.push(setTimeout(tick, 420));
      return;
    }

    bootTimers.push(setTimeout(tick, 22));
  }

  tick();
}

function ensureEndingButton() {
  if (!endingScene) return null;

  let btn = document.getElementById("ending-continue");
  if (btn) return btn;

  btn = document.createElement("button");
  btn.id = "ending-continue";
  btn.textContent = "Weiter zum Hauptfeature";

  btn.style.marginTop = "22px";
  btn.style.padding = "14px 22px";
  btn.style.borderRadius = "999px";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  btn.style.fontWeight = "800";
  btn.style.fontSize = "16px";
  btn.style.background = "linear-gradient(135deg, #b8ffb8, #4ce88a)";
  btn.style.color = "#04301a";
  btn.style.boxShadow = "0 0 22px rgba(120,255,180,0.9)";

  btn.addEventListener("click", () => {
    endIntro();
  });

  const container = endingScene.querySelector(".boot-container") || endingScene;
  container.appendChild(btn);

  return btn;
}

function startEndingScene() {
  if (!endingScene) {
    endIntro();
    return;
  }

  if (introTheme) {
    introTheme.pause();
    introTheme.currentTime = 0;
  }
  if (alarmSound) {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }

  const idx = Array.from(scenes).indexOf(endingScene);
  if (idx !== -1) {
    currentScene = idx;
    showScene(currentScene);
  }

  if (endingMusic) {
    endingMusic.volume = 0.35;
    endingMusic.currentTime = 0;
    endingMusic.play().catch(() => {});
  }

  typeBootLines(BOOT_LINES, () => {
    const btn = ensureEndingButton();
    if (btn) btn.style.display = "inline-block";
  });
}

if (giftsContinueBtn) {
  giftsContinueBtn.textContent = "Boot Overwatch Protocol";

  giftsContinueBtn.addEventListener("click", () => {
    startEndingScene();
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("#ending-continue");
  if (!btn) return;

  console.log("Ending continue clicked → endIntro()");
  endIntro();
});

/* =========================================================
   HERO PICKER – ROLLEN & GRID (BASIS)
========================================================= */

let currentRole = null;
let selectedHeroes = new Set();

// DOM
const roleButtons = document.querySelectorAll(".role-btn");
const heroGrid = document.getElementById("hero-grid");
const selectAllBtn = document.getElementById("select-all-heroes");
const deselectAllBtn = document.getElementById("deselect-all-heroes");
const randomHeroBtn = document.getElementById("random-hero-btn");

// ---------- Rollen wechseln ----------
roleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const role = btn.dataset.role;
    if (!role || !HEROES[role]) return;

    roleButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    currentRole = role;
    selectedHeroes.clear();

    renderHeroGrid(role);
    updateBulkButtons();
  });
});

// ---------- Hero Grid rendern ----------
function renderHeroGrid(role) {
  if (!heroGrid) return;

  heroGrid.innerHTML = "";

  HEROES[role].forEach((hero) => {
    const card = document.createElement("button");
    card.className = "hero-card";
    card.dataset.heroId = hero.id;

    card.innerHTML = `
      <img src="${hero.img}" alt="${hero.name}" />
      <span class="hero-name">${hero.name}</span>
    `;

    card.addEventListener("click", () => {
      toggleHeroSelection(hero.id, card);
    });

    heroGrid.appendChild(card);
  });
}

// ---------- Hero auswählen / abwählen ----------
function toggleHeroSelection(heroId, cardEl) {
  if (selectedHeroes.has(heroId)) {
    selectedHeroes.delete(heroId);
    cardEl.classList.remove("selected");
  } else {
    selectedHeroes.add(heroId);
    cardEl.classList.add("selected");
  }

  updateBulkButtons();
}

// ---------- Alle auswählen ----------
if (selectAllBtn) {
  selectAllBtn.addEventListener("click", () => {
    if (!currentRole) return;

    selectedHeroes.clear();

    HEROES[currentRole].forEach((hero) => {
      selectedHeroes.add(hero.id);
    });

    document.querySelectorAll(".hero-card").forEach((card) => {
      card.classList.add("selected");
    });

    updateBulkButtons();
  });
}

// ---------- Alle abwählen ----------
if (deselectAllBtn) {
  deselectAllBtn.addEventListener("click", () => {
    selectedHeroes.clear();

    document.querySelectorAll(".hero-card").forEach((card) => {
      card.classList.remove("selected");
    });

    updateBulkButtons();
  });
}

// ---------- Buttons aktiv / deaktiv ----------
function updateBulkButtons() {
  const hasRole = !!currentRole;
  const hasSelection = selectedHeroes.size > 0;

  if (selectAllBtn) selectAllBtn.disabled = !hasRole;
  if (deselectAllBtn) deselectAllBtn.disabled = !hasSelection;
  if (randomHeroBtn) randomHeroBtn.disabled = !hasSelection;
}

/* =========================================================
   HERO PICK – MODAL (DEINE HTML IDs) + SHUFFLE ANIMATION
========================================================= */

// Modal DOM (deine HTML)
const heroPickOverlay = document.getElementById("hero-pick-overlay");
const heroPickModal = heroPickOverlay?.querySelector(".hero-pick-modal") || null;
const heroPickClose = document.getElementById("hero-pick-close");
const heroPickImage = document.getElementById("hero-pick-image");
const heroPickLine = document.getElementById("hero-pick-line");
const heroPickPlayVoice = document.getElementById("hero-pick-playvoice");
const heroPickAgain = document.getElementById("hero-pick-again");

// optional shuffle sound
const shuffleTick = document.getElementById("shuffle-tick");

// Ergebnisbox unten (wird NICHT mehr genutzt, bleibt aber safe)
const heroResultBox = document.getElementById("hero-result");
const resultHeroImage = document.getElementById("result-hero-image");
const resultHeroText = document.getElementById("result-hero-text");

// Audio Handling (nur 1 Voice zur Zeit)
let currentVoiceAudio = null;

function stopCurrentVoice() {
  if (currentVoiceAudio) {
    try {
      currentVoiceAudio.pause();
      currentVoiceAudio.currentTime = 0;
    } catch (_) {}
    currentVoiceAudio = null;
  }
}

function playVoiceLine(src) {
  if (!src) return;
  stopCurrentVoice();

  try {
    const a = new Audio(src);

    a.volume = 0.5;

    if (src.includes("wrecking-ball")) a.volume = 0.1;
    if (src.includes("vendetta")) a.volume = 0.3;
    if (src.includes("venture")) a.volume = 0.3;

    a.play().catch(() => {});
    currentVoiceAudio = a;
  } catch (_) {}
}

// Helper
function getHeroById(role, id) {
  const list = HEROES?.[role] || [];
  return list.find((h) => h.id === id) || null;
}

function getSelectedHeroesForCurrentRole() {
  if (!currentRole) return [];
  return Array.from(selectedHeroes)
    .map((id) => getHeroById(currentRole, id))
    .filter(Boolean);
}

function animatePickedCard(heroId) {
  const card = document.querySelector(`.hero-card[data-hero-id="${heroId}"]`);
  if (!card) return;

  card.classList.remove("picked");
  void card.offsetWidth;
  card.classList.add("picked");

  setTimeout(() => card.classList.remove("picked"), 650);
}

// Modal open/close
let lastPickedHero = null;

function openHeroPickModal(hero) {
  if (!heroPickOverlay) return;

  lastPickedHero = hero;

  if (heroPickImage) {
    heroPickImage.src = hero.img || "";
    heroPickImage.alt = hero.name || "Hero";
  }

  if (heroPickLine) {
    heroPickLine.textContent = hero.pickText || `Emi, heute carryst du mit ${hero.name} 💗`;
  }

  // Unteres Ergebnis ausblenden
  if (heroResultBox) heroResultBox.classList.add("hidden");

  heroPickOverlay.classList.remove("hidden");
  heroPickOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (heroPickModal && heroPickModal.focus) heroPickModal.focus();

  // ✅ Voice automatisch beim Pick
  if (hero.voice) playVoiceLine(hero.voice);
}

function closeHeroPickModal() {
  if (!heroPickOverlay) return;

  heroPickOverlay.classList.add("hidden");
  heroPickOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  stopCurrentVoice();
}

if (heroPickClose) heroPickClose.addEventListener("click", closeHeroPickModal);

if (heroPickOverlay) {
  heroPickOverlay.addEventListener("click", (e) => {
    if (e.target === heroPickOverlay) closeHeroPickModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (heroPickOverlay && !heroPickOverlay.classList.contains("hidden")) closeHeroPickModal();
  }
});

// Modal Buttons
if (heroPickPlayVoice) {
  heroPickPlayVoice.addEventListener("click", () => {
    if (lastPickedHero?.voice) playVoiceLine(lastPickedHero.voice);
  });
}

if (heroPickAgain) {
  heroPickAgain.addEventListener("click", () => {
    closeHeroPickModal();
    startShufflePick();
  });
}

// ===== Shuffle Animation =====
let shuffleTimer = null;
let shuffleRunning = false;

function pickRandomHeroFromPool(pool) {
  if (!pool || pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function safeTickSound() {
  if (!shuffleTick) return;
  shuffleTick.currentTime = 0;
  shuffleTick.volume = 0.5;
  shuffleTick.play().catch(() => {});
}

function startShufflePick() {
  if (shuffleRunning) return;
  if (!currentRole) return;

  const pool = getSelectedHeroesForCurrentRole();
  if (pool.length === 0) return;

  shuffleRunning = true;

  // Button sperren während Shuffle
  if (randomHeroBtn) {
    randomHeroBtn.disabled = true;
    randomHeroBtn.textContent = "🎲 Shuffling...";
  }

  // wenn Modal offen war → zu
  if (heroPickOverlay && !heroPickOverlay.classList.contains("hidden")) closeHeroPickModal();

  const totalMs = 1100; // Gesamtdauer Shuffle
  const intervalMs = 80; // Tick-Speed
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;

    const preview = pickRandomHeroFromPool(pool);
    if (preview) {
      animatePickedCard(preview.id);
      safeTickSound();
    }

    if (elapsed >= totalMs) {
      // Final pick
      const finalHero = pickRandomHeroFromPool(pool);

      shuffleRunning = false;

      // Button wieder aktiv
      if (randomHeroBtn) {
        randomHeroBtn.disabled = false; // wird gleich durch updateBulkButtons korrekt gesetzt
        randomHeroBtn.textContent = "🎲 Random Hero picken";
      }
      updateBulkButtons();

      if (finalHero) {
        animatePickedCard(finalHero.id);
        openHeroPickModal(finalHero);
      }
      return;
    }

    shuffleTimer = setTimeout(() => requestAnimationFrame(step), intervalMs);
  }

  requestAnimationFrame(step);
}

// Random Button
if (randomHeroBtn) {
  randomHeroBtn.addEventListener("click", () => {
    startShufflePick();
  });
}
