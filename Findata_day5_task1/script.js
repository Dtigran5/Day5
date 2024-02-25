// Tab content stored in JavaScript objects
var tabContent = {
    tab1: "Content for Tab 1",
    tab2: "Content for Tab 2",
    tab3: "Content for Tab 3"
  };
  
  // Function to handle tab click event
  function handleTabClick(event) {
    var tabId = event.target.id;
    var content = tabContent[tabId];
    document.getElementById("tabContent").textContent = content;
  }
  
  // Add event listeners to tab buttons
  var tabButtons = document.querySelectorAll(".tabButton");
  tabButtons.forEach(function(button) {
    button.addEventListener("click", handleTabClick);
  });
  