const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const bodyImage = document.querySelector("body");
const langEn = document.querySelectorAll('[lang="en"]');
const langJp = document.querySelectorAll('[lang="jp"]');
const langEs = document.querySelectorAll('[lang="es"]');
const langFr = document.querySelectorAll('[lang="fr"]');
let weatherIcon = document.querySelector("#weatherIcon");
let windSpeed = document.querySelector("#windSpeed");
let humidity = document.querySelector(".humidity");
let weather = document.querySelector(".weather");
let desc = document.querySelector(".desc");
API = "7b8085c2e5f6b84e27d16fa26c487a51";
// Put in my own API key

("use strict");

// For multilanguage functionality
let currentLang = "en";

// Applying weather data
const setWeatherDetails = data => {
  desc.innerHTML = data.weather[0].description;
  weather.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed}km/h`;
  console.log(data.weather[0].main);
  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src =
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png";
      bodyImage.style.backgroundImage = `url(https://images.unsplash.com/photo-1534088568595-a066f410bcda)`;
      if (currentLang === "jp") {
        desc.innerHTML = "曇り";
      } else if (currentLang === "es") {
        desc.innerHTML = "nublado";
      } else if (currentLang === "fr") {
        desc.innerHTML = "nuageux";
      }
      break;
    case "Clear":
      weatherIcon.src =
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png";
      bodyImage.style.backgroundImage = `url(https://images.unsplash.com/photo-1622278647429-71bc97e904e8)`;
      if (currentLang === "jp") {
        desc.innerHTML = "晴れ";
      } else if (currentLang === "es") {
        desc.innerHTML = "despejado";
      } else if (currentLang === "fr") {
        desc.innerHTML = "clair";
      }
      break;
    case "Rain":
      weatherIcon.src =
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png";
      bodyImage.style.backgroundImage = `url(https://images.unsplash.com/photo-1428592953211-077101b2021b)`;
      if (currentLang === "jp") {
        desc.innerHTML = "雨";
      } else if (currentLang === "es") {
        desc.innerHTML = "lluvioso";
      } else if (currentLang === "fr") {
        desc.innerHTML = "pluvieux";
      }
      break;
    case "Mist":
      weatherIcon.src =
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpL23l0t1U_ibWi01TFcHMF6J_t-9Ada5PavGlwG4M_mKIcx0pV1md9SN9ip1d84NaVowml5Do16XO3nsuttnM2-Ov05d-wCjEYjdzaOYfKvijw8k6Hfj9pOiPyEZTp2W20EPbTeONTgJE2Rdxs4KZUfg6f2PmbMF1094NcqJ7DwSFUQwYiRmVCNvuA/s320/mist.png";
      bodyImage.style.backgroundImage = `url(https://images.unsplash.com/photo-1518730447886-19383ad35395)`;
      if (currentLang === "jp") {
        desc.innerHTML = "霧";
      } else if (currentLang === "es") {
        desc.innerHTML = "brumoso";
      } else if (currentLang === "fr") {
        desc.innerHTML = "brumeux";
      }
      break;
    case "Snow":
      weatherIcon.src =
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-P3iT_uQK95qFY4h7QGdEtbRc1aVQo9BZy0ZWyPBvCNrP-4wnRStw0xYj9e4xa4ZlYISeNZqVJ33UP4YukR4jBennDD_obIN4QxYNZHdzG_z6_MNL2U08wMXwdFhtfvitW5LGiHgrwMJFC8QJFqbSO3woGSBqOdagGxaEQ20_S31Gc-GYL4vYzPzaPw/s320/snow.png";
      bodyImage.style.backgroundImage = `url(https://images.unsplash.com/photo-1491002052546-bf38f186af56)`;
      if (currentLang === "jp") {
        desc.innerHTML = "雪";
      } else if (currentLang === "es") {
        desc.innerHTML = "nevado";
      } else if (currentLang === "fr") {
        desc.innerHTML = "enneigé";
      }
      break;
    case "Haze":
      weatherIcon.src =
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjld66Ia5g_hpBn3Impi3zzOBHqWkjQInGLxTb2uXksuCsrkQU8HjlVyLobEJEGg8fRSIxeFzldGEHUmWcaiZBwAcRy4dGDpFX1BjTSB56qmBjW5tEW3RSC9_mCuLU_a8RuXchxGY7Oc8HLLl-IfaDW19Z0ZJJfNae9tECXRIyEu7rmJ3da08z8cI-phw/s320/haze.png";
      bodyImage.style.backgroundImage = `url(https://images.unsplash.com/photo-1569142916960-885f868d6123)`;
      if (currentLang === "jp") {
        desc.innerHTML = "霞み";
      } else if (currentLang === "es") {
        desc.innerHTML = "brumoso";
      } else if (currentLang === "fr") {
        desc.innerHTML = "brumeux";
      }
      break;
    case "Drizzle":
      weatherIcon.src =
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png";
      bodyImage.style.backgroundImage = `url(https://images.unsplash.com/photo-1503429134808-fdf0cd4e1bfa)`;
      if (currentLang === "jp") {
        desc.innerHTML = "霧雨";
      } else if (currentLang === "es") {
        desc.innerHTML = "llovizna";
      } else if (currentLang === "fr") {
        desc.innerHTML = "bruine";
      }
      break;
  }
};

// Fetching weather data from Open Weather Map
const callAPI = id => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${id}`
  )
    .then(response => {
      // indicates whether response is successful; status code 200-299
      if (!response.ok) {
        alert("Something went wrong!");
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setWeatherDetails(data);
    })
    .catch(error => console.log(error));
};

searchButton.addEventListener("click", e => {
  if (searchInput.value == "") {
    alert("Please enter city name.");
  } else {
    callAPI(API);
  }
});

searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchButton.click();
  }
});

searchButton.click();

// Switch languages
const changeLang = num => {
  const hideLangs = (langSet, value, ln) => {
    langEn.forEach(item => {
      item.classList.add("hidden");
    });
    langJp.forEach(item => {
      item.classList.add("hidden");
    });
    langEs.forEach(item => {
      item.classList.add("hidden");
    });
    langFr.forEach(item => {
      item.classList.add("hidden");
    });
    langSet.forEach(item => {
      item.classList.remove("hidden");
    });
    searchInput.setAttribute("value", value);
    currentLang = ln;
    searchButton.click();
  };
  switch (num) {
    case 1:
      hideLangs(langEn, "New York", "en");
      break;
    case 2:
      hideLangs(langJp, "東京", "jp");
      break;
    case 3:
      hideLangs(langEs, "Madrid", "es");
      break;
    case 4:
      hideLangs(langFr, "Paris", "fr");
      break;
  }
};
