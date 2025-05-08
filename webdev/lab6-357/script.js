function getCarData() {
  const id = document.getElementById("car_id").value.trim();

  if (!id) {
    alert("Please enter a car ID");
    return;
  }

  // JS fetch API to get data from API
  const url = `https://api.sheety.co/4f0db0dbf0cd7f378814e431c13edef6/carRentalDb/cars/${id}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Car not found.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const carImgUrl = data.car.imageurl;
      document.getElementById("search_btn").removeAttribute("disabled");
      document.getElementById("search_btn").innerHTML =
        '<i class="fa-solid fa-spinner fa-spin-plus"></i> Search...';
      document.getElementById("car_info").removeAttribute("hidden");

      // Display car data in the HTML
      document
        .getElementById("car_img")
        .setAttribute(
          "src",
          carImgUrl ||
            "https://th.bing.com/th/id/OIP.8EfSYdRfiea6CSCosnMufAHaEK?cb=iwc1&rs=1&pid=ImgDetMain"
        );
      document.getElementById("car_name").textContent = `Car Name: ${
        data.car.name || "N/A"
      }`;
      document.getElementById("car_brand").textContent = `Car Brand: ${
        data.car.brand || "N/A"
      }`;
      document.getElementById("car_color").textContent = `Car Color: ${
        data.car.color || "N/A"
      }`;
    })
    .catch((error) => {
      alert(error.message);
      // Clear data if not found
      document.getElementById("car_img").src = "";
      document.getElementById("car_name").textContent = "Car Name: N/A";
      document.getElementById("car_brand").textContent = "Car Brand: N/A";
      document.getElementById("car_color").textContent = "Car Color: N/A";
    });
}

function addCar() {
  // Get values from input fields
  const nameField = document.getElementById("name");
  const brandField = document.getElementById("brand");
  const colorField = document.getElementById("color");
  const imgurlField = document.getElementById("imgurl");

  // Ensure all fields exist
  if (!nameField || !brandField || !colorField || !imgurlField) {
    console.error("One or more input fields are missing in the DOM.");
    return;
  }

  const name = nameField.value.trim();
  const brand = brandField.value.trim();
  const color = colorField.value.trim();
  const imageurl = imgurlField.value.trim();

  // Validate input fields
  if (!name || !brand || !color) {
    alert("Please fill in all fields.");
    return;
  }

  // Add the data to the API
  const url =
    "https://api.sheety.co/4f0db0dbf0cd7f378814e431c13edef6/carRentalDb/cars";
  const carData = {
    car: {
      name: name,
      brand: brand,
      color: color,
      imageurl: imageurl,
    },
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add car.");
      }
      return response.json();
    })
    .then((data) => {
      alert("Car added successfully!");
      console.log(data);

      // Clear input fields
      nameField.value = "";
      brandField.value = "";
      colorField.value = "";
      imgurlField.value = "";
    })
    .catch((error) => {
      alert(error.message);
    });
}
