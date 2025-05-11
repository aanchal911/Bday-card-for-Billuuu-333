function openCard() {
    const envelope = document.getElementById("envelope");
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");
    // const envelopeBox = document.getElementById("envelopeBox"); // No longer hiding this
    const birthdayCake = document.getElementById("birthdayCake"); // Get the cake
    const hbdPopup = document.getElementById("hbdShaunakPopup"); // Get the HBD popup
    const openBtn = document.getElementById("openBtn"); // Get the button
  
    // Animate flap (if using actual CSS flap)
    if (flap) {
      flap.style.transform = "rotateX(-180deg)";
    }
  
    // Show message after delay
    setTimeout(() => {
      if(envelope) envelope.style.display = "none"; // Hide the envelope image part
      if(openBtn) openBtn.style.display = "none"; // Hide the button
      
      letter.style.display = "block"; // Show letter
      
      if (birthdayCake) {
        birthdayCake.style.display = "block"; // Show cake container
        setTimeout(() => { // Add a slight delay for the animation to be noticeable
          birthdayCake.classList.add("animate");
        }, 100); // 100ms delay

        // Show HBD popup after cake animation (approx 0.8s for cake + 0.1s delay)
        setTimeout(() => {
          if (hbdPopup) {
            hbdPopup.style.display = "block";
            // hbdPopup.classList.add("popup-animate"); // Animation is handled by CSS @keyframes

            // Hide the popup after a few seconds (e.g., 3 seconds)
            setTimeout(() => {
              hbdPopup.style.display = "none";
            }, 3000); // Popup visible for 3 seconds
          }
        }, 900); // Show popup 900ms after letter (100ms cake delay + 800ms cake animation)
      }
      startHeartRain();
    }, 1000); // This is the delay for showing letter and cake

  }
  
  function startHeartRain() {
    const heartContainer = document.querySelector(".hearts");
  
    for (let i = 0; i < 80; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 5 + "s";
      heartContainer.appendChild(heart);
    }
  }
  
  