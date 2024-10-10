let login_data = JSON.parse(localStorage.getItem("loginData"));

function nav() {
  if (login_data != null) {
    return `
        <div id="nav">
        <a href="../index.html">Home</a>
        <a href="../HTML/Electronic.html">Elelctric</a>
        <a href="../HTML/Jwellery.html">Jwellery</a>
        <div id="nav2">
         <a href="../HTML/cart.html">Cart</a>
        <a href="#">Hello, ${login_data.name}</a>
        <button id = "logout_btn">Logout</button>
        </div>
        `;
  } else {
    return `
       <div id="nav">
        <a href="../index.html">Home</a>
        <a href="../HTML/Electronic.html">Ele</a>
        <a href="../HTML/Jwellery.html">Jwel</a>
        <div id="nav2">
        <a href="../HTML/login.html">Login/signup</a>
        </div>
    `;
  }
}


 let logout_btn = document.getElementById('logout_btn');
  console.log(logout_btn)
// logout_btn.addEventListener('click', logout);
// function logout() {
//   localStorage.removeItem("loginData");
//   window.location.href = "../HTML/index.html";
// }

// export default nav;
