/* Exercise 9.8 - Form Validation */
function init() {
    document.getElementById('sampleForm').addEventListener('submit', checkForEmptyFields);
}
window.addEventListener('load',init);

function checkForEmptyFields(e) {
    var errorArea = document.getElementById('errors');
    errorArea.className = 'hidden';
    var cssSelector = 'input[type=text],input[type=password]';
    var fields = document.querySelectorAll(cssSelector);
    var fieldList = [];
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value === null || fields[i].value.trim() === '') {
            e.preventDefault();
            fieldList.push(fields[i]);
        }
    }
    if (fieldList.length > 0) {
        var msg = "The following fields can't be empty: ";
        for (var j = 0; j < fieldList.length; j++) {
            msg += fieldList[j].id + (j === fieldList.length - 1 ? '' : ', ');
        }
        errorArea.textContent = msg;
        errorArea.className = 'visible';
    }
}
