
let login_data = JSON.parse(localStorage.getItem("loginData"));

function nav() {
 
  if (login_data != null) {
    return `
        <div id="nav">
        <a href="../HTML/index.html">Home</a>
        <a href="../HTML/Electronic.html">Elelctric</a>
        <a href="../HTML/Jwellery.html">Jwellery</a>
        <div id="nav2">
         <a href="../HTML/cart.html">Cart</a>
        <a href="#">Hello, ${login_data.name}</a>
        <a href="../HTML/logout.html">Logout</a>
        </div>
        `;
  }
  else {
    return `
       <div id="nav">
        <a href="../HTML/index.html">Home</a>
        <a href="../HTML/Electronic.html">Elelctric</a>
        <a href="../HTML/Jwellery.html">Jwellery</a>
        <div id="nav2">
        <a href="../HTML/login.html">Login/signup</a>
        </div>
    `;
  }

}


export default nav;

