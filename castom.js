// GUB Queue Management System

const queue = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const purpose = document.getElementById("purpose").value;

    if (name === "" || purpose === "") {
        displayOutput("Please fill name and purpose.");
        return;
    }

    queue.push({ name, purpose });
    displayOutput(`${name} is added to the queue for ${purpose}.`);

    document.getElementById("name").value = "";                 // reset empty value 
    document.getElementById("purpose").value = "";
}

function serveStudent() {
    if (queue.length === 0) {
        displayOutput("No students in the queue.");
        return;
    }

    const student = queue.shift();
    displayOutput(`Served: ${student.name} for ${student.purpose}.`);
}

function viewQueue() {
    if (queue.length === 0) {
        displayOutput(" queue  empty.");
        return;
    }

    let output = "Queue:<br>";
    queue.forEach((student, index) => {
         output += `${index + 1}. ${student.name} is wating for  ${student.purpose}<br>`;
    });
    displayOutput(output);
}

function countStudents() {
    displayOutput(`Total Students in Line: ${queue.length}`);
}

function displayOutput(message) {
    document.getElementById("output").innerHTML = message;
}

// Event Listeners
document.getElementById("addStudent").addEventListener("click", addStudent);
document.getElementById("serveStudent").addEventListener("click", serveStudent);
document.getElementById("viewQueue").addEventListener("click", viewQueue);
document.getElementById("countStudents").addEventListener("click", countStudents);
