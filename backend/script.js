document.getElementById("studentForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const location = document.getElementById("location").value;

    const studentData = {
        name,
        mobile,
        location
    };

    try {

        const response = await fetch('http://localhost:5001/addStudent', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(studentData)
        });

        const result = await response.text();

        document.getElementById("message").innerHTML = result;

        document.getElementById("studentForm").reset();

    } catch (error) {

        console.log(error);

        document.getElementById("message").innerHTML =
            "Error adding student";
    }
});