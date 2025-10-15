const form = document.getElementById("userform");

form.addEventListener("submit", function(event){
    event.preventDefault(); // prevent form reloading

    const username = document.getElementById("username").Value;
    const email = document.getElementById("email").value;

    console.log("Username: " + username);
    console.log("Email: " + email);

    // simple validation
    if (username === "" || email === ""){
        alert("please fill in all fields!")
        return;
    }
    if (!email.includes("@")){
        alert("please enter a valid email!");
        return;
    }
    alert ("form submitted successfully!");
    form.reaet(); //clear form fields
})