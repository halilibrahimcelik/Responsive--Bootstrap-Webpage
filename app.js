const fullStackBtn = document.querySelector(".fullStackBtn");
const dataScience = document.querySelector(".dataScience");
const devOps = document.querySelector(".devOps");

const dsImagesRow = document.querySelector(".dsImages");
const fsImagesRow = document.querySelector(".fsImages");
const opsImageRow = document.querySelector(".opsImages");
let isVisible = false;

fullStackBtn.addEventListener("click", () => {
  fsLightboxInstances["gallery"].open(1);
  if (!isVisible) {
    isVisible = true;
    dsImagesRow.classList.add("active-visible");
    opsImageRow.classList.add("active-visible");
    fsImagesRow.classList.remove("active-visible");
  } else {
    isVisible = false;
    opsImageRow.classList.add("active-visible");
    dsImagesRow.classList.add("active-visible");
    fsImagesRow.classList.remove("active-visible");
  }
  console.log(isVisible);
});

dataScience.addEventListener("click", () => {
  let visible = false;
  fsLightboxInstances["gallery"].open(0);
  if (!visible) {
    visible = true;
    dsImagesRow.classList.remove("active-visible");
    opsImageRow.classList.add("active-visible");
    fsImagesRow.classList.add("active-visible");
  } else {
    visible = false;
    fsImagesRow.classList.add("active-visible");
    opsImageRow.classList.add("active-visible");
    dsImagesRow.classList.remove("active-visible");
  }

  console.log(visible);
});
devOps.addEventListener("click", () => {
  fsLightboxInstances["gallery"].open(0);

  let visibility = false;

  if (!visibility) {
    visibility = true;
    opsImageRow.classList.remove("active-visible");
    fsImagesRow.classList.add("active-visible");
    dsImagesRow.classList.add("active-visible");
  } else {
    visibility = false;
    opsImageRow.classList.remove("active-visible");
    fsImagesRow.classList.add("active-visible");
    dsImagesRow.classList.add("active-visible");
  }
  console.log(visibility);
});

console.log(isVisible);

// class Map {
//   constructor() {
//     this.coordinates = {
//       lat: 39.897174,
//       lng: 32.771146,
//     };

//     this.render();
//   }

//   render() {
//     if (!google) {
//       alert("Could not load maps library, please try again later");
//       return;
//     }

//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: this.coordinates,
//       zoom: 16,
//     });

//     new google.maps.Marker({
//       position: this.coordinates,
//       map: map,
//     });
//   }
// }

// new Map();
