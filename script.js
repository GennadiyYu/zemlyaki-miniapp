
window.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  if (logo) {
    logo.animate(
      [
        { opacity: 0, transform: "scale(0.5)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      {
        duration: 1200,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }
});
