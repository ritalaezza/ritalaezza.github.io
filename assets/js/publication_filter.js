// Get the directory path of the JavaScript file
const scriptUrl = document.currentScript.src;
const scriptPath = new URL(scriptUrl).pathname;
const scriptDirectory = scriptPath.substring(0, scriptPath.lastIndexOf('/'));


document.addEventListener('DOMContentLoaded', function() {

    // Get references to the checkboxes
    var checkboxes = [
    document.getElementById("theses"),
    document.getElementById("journals"),
    document.getElementById("conferences"),
    document.getElementById("workshops")];

    // Add event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        var lastUncheckedCheckbox = null;

        // All checkboxes are checked at start
        var num_unchecked = 0;

        // Loop through all the checkboxes
        checkboxes.forEach(function(checkbox) {
        if (!checkbox.checked) {
            num_unchecked = num_unchecked + 1;
        }
        else {
            lastUncheckedCheckbox = checkbox;
        }
        });
        
        console.log(num_unchecked); 
        if (num_unchecked == 3) {
            console.log("Last unchecked:" + lastUncheckedCheckbox.id); 
            // Disable the last unchecked checkbox
            checkboxes.forEach(function(checkbox) {
            checkbox.disabled = checkbox === lastUncheckedCheckbox;
            });
        }
        else {
            // Reenable the last unchecked checkbox
            checkboxes.forEach(function(checkbox) {
                if (checkbox.disabled) {
                    checkbox.disabled = false;
                } 
                });
        }
    });
    });


    // Process each text file for the corresponding checkbox
    processTextFile(scriptDirectory + '/filter/theses.txt', 0);
    processTextFile(scriptDirectory + '/filter/journals.txt', 1);
    processTextFile(scriptDirectory + '/filter/conferences.txt', 2);
    processTextFile(scriptDirectory + '/filter/workshops.txt', 3);
    
    // Function to fetch and process each text file
    function processTextFile(file, checkboxIndex) {
        fetch(file)
        .then(response => response.text())
        .then(idsText => {
            // Split the text into an array of IDs
            var idList = idsText.split('\n');
    
            // Get references to the content elements based on the IDs
            var contentElements = idList.map(id => document.getElementById(id));
    
            // Get the corresponding checkbox based on the checkboxIndex
            var checkbox = checkboxes[checkboxIndex];
    
            // Add event listener to the checkbox
            checkbox.addEventListener("change", function () {
                updateContentVisibility(contentElements, checkbox);                
            });
        });
    }
  
    // Function to update content visibility based on checkbox state
    function updateContentVisibility(contentElements, checkbox) {
        var isChecked = checkbox.checked;
        contentElements.forEach(function (contentElement) {
        contentElement.style.display = isChecked ? "block" : "none";
        });
    }
  
});