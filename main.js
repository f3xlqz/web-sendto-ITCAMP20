document.addEventListener("DOMContentLoaded", function() {
  const changeColorButton = document.getElementById("changeColorButton");
  const toggleVisibilityButton = document.getElementById("toggleVisibilityButton");
  const displayTextButton = document.getElementById("displayTextButton");
  const resetColorButton = document.getElementById("resetColorButton");
  const clearTextButton = document.getElementById("clearTextButton");
  const displayText = document.getElementById("displayText");

  // Function to change background color
  changeColorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
  });

  // Function to toggle visibility
  toggleVisibilityButton.addEventListener("click", function() {
    if (displayText.style.display === "none") {
      displayText.style.display = "block";
    } else {
      displayText.style.display = "none";
    }
  });

  // Function to display text
  displayTextButton.addEventListener("click", function() {
    const text = prompt("กรอกข้อความที่อยากให้เเสดงบนหน้าจอ (บอกรัก ITCAMP สิ)");
    if (text !== null) {
      displayText.textContent = text;
    }
  });

  // Function to reset background color
  resetColorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "";
  });

  // Function to clear displayed text
  clearTextButton.addEventListener("click", function() {
    const confirmClear = confirm("ลบข้อความบนหน้าจอ (ไม่รัก ITCAMP เเล้วหรอ TT)");
    if (confirmClear) {
      displayText.textContent = "";
      displayText.style.display = "none"; // element เมื่อลบข้อความ
    }
  });

  // Helper function to generate random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
