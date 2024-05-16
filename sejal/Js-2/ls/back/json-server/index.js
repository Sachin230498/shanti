let url = "http://localhost:3000/posts";

let x = fetch(url)
  //console.log(x);
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
      appendData(data);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });

//we need to append the data
let main = document.getElementById("main");

function appendData(data) {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "container");

    let img = document.createElement("img");
    img.src = el.image;

    let h3 = document.createElement("h3");
    h3.innerText = el.price;

    let p = document.createElement("p");
    p.innerText = el.description;

    let h2 = document.createElement("h2");
    h2.innerText = el.title;

    let iid = document.createElement("p");
    iid.innerText = el.id;

     let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.style.backgroundColor ="red"
     deleteBtn.addEventListener("click", () => {
deleteItem(el.id); // Call deleteItem function passing the ID
     });

     div.append(img, h2, h3, p,iid, deleteBtn);
     main.append(div);
  });
}

//delete reuest
async function deleteItem(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("Resource deleted successfully");
    // Optionally, you can update the UI or display a success message to the user
  } catch (error) {
    console.error("Error deleting resource:", error);
    // Optionally, you can display an error message to the user
  }
}


//Post the data


async function adddata() {
    const id = document.getElementById("id").value;
  const img = document.getElementById("img").value;
  const title = document.getElementById("title").value;
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value;

  const data = {
    id:id ,// You may want to generate a unique ID here
    title: title,
    price: price,
    description: description,
    image: img,
  };

 

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Data posted successfully:", responseData);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}


//updating data
async function updateData() {
    
    
    const id = document.getElementById("updateId").value;
    const img = document.getElementById("updateImg").value;
    const title = document.getElementById("updateTitle").value;
    const price = parseFloat(document.getElementById("updatePrice").value);
    const description = document.getElementById("updateDescription").value;

    const updatedData = {
      id: parseInt(id), // Assuming the ID is a number
      title: title,
      price: price,
      description: description,
      image: img,
    };

  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT", // Or 'PATCH' depending on your API's requirements
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Data updated successfully:", responseData);
  } catch (error) {
    console.error("Error updating data:", error);
    throw error; // Propagate the error so it can be caught by the calling function
  }
}

async function updateResource() {
  const id = document.getElementById("updateId").value;
  const img = document.getElementById("updateImg").value;
  const title = document.getElementById("updateTitle").value;
  const price = parseFloat(document.getElementById("updatePrice").value);
  const description = document.getElementById("updateDescription").value;

  const updatedData = {
    id: parseInt(id), // Assuming the ID is a number
    title: title,
    price: price,
    description: description,
    image: img,
  };

  try {
    await updateData(id, updatedData); // Call the updateData function
    console.log("Resource updated successfully");
    // Optionally, you can update the UI or display a success message to the user
  } catch (error) {
    console.error("Error updating resource:", error);
    // Optionally, you can display an error message to the user
  }
}



const uniqueID = Date.now().toString(36) + Math.random().toString(36).slice(2);

console.log(uniqueID);

