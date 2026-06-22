let internships =
    JSON.parse(localStorage.getItem("internships")) || [];

function saveData() {
    localStorage.setItem(
        "internships",
        JSON.stringify(internships)
    );
}

function addInternship() {

    let student =
        document.getElementById("studentName").value;

    let department =
        document.getElementById("department").value;

    let company =
        document.getElementById("companyName").value;

    let role =
        document.getElementById("role").value;

    let status =
        document.getElementById("status").value;

    if (student === "" || company === "" || role === "") {
        alert("Please fill all fields");
        return;
    }

    internships.push({
        student,
        department,
        company,
        role,
        status
    });

    saveData();
    renderTable();

    document.getElementById("studentName").value = "";
    document.getElementById("department").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("role").value = "";
}

function deleteInternship(index) {
    internships.splice(index, 1);
    saveData();
    renderTable();
}

function renderTable() {

    let table =
        document.getElementById("internshipTable");

    table.innerHTML = "";

    internships.forEach((item, index) => {

        table.innerHTML += `
        <tr>
            <td>${item.student}</td>
            <td>${item.department}</td>
            <td>${item.company}</td>
            <td>${item.role}</td>
            <td>${item.status}</td>
            <td>
                <button
                class="delete-btn"
                onclick="deleteInternship(${index})">
                Delete
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById(
        "totalInternships"
    ).innerText = internships.length;
}

renderTable();
