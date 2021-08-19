async function gitHubUser() {
    let userForm = document.forms["form"];
    let userName = userForm.elements['user_input'].value; 
    // console.log(userName);
    let response = await fetch("https://api.github.com/users/" + userName);
    let coderData = await response.json();
    // console.log(coderData);
    let userImage = document.getElementById("image");
    // console.log(userImage);
    let userInfo = document.getElementById("info");
    // console.log(userInfo);
    userImage.innerHTML = "<img src='" + coderData['avatar_url'] + "' alt='github avatar'>";
    userInfo.innerHTML = "<div class='d-flex flex row'>Username: " + coderData['login'] + "</div> <div class='d-flex flex row'>Public Repos:" + coderData['public_repos'] + "</div> <div class='d-flex flex row'>URL:" + coderData['html_url'] + "</div>";
}