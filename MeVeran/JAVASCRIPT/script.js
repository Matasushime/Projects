const menu = document.querySelector('#navbar_mobile');
const menuLinks = document.querySelector('.navbar_menu');
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
;

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "flex";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "flex";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "flex";
  current++;
}
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

const images = document.querySelectorAll(".slide img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
    });
});
//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector(".main").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};

let map;
async function initMap(){

  const position = { lat: -34.60403067084755, lng: -58.390182179163496 };
  
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(
    document.getElementById('map'),
    {
      zoom: 16,
      center: position,
      mapId: '9eaeba9504439254',
    }
  );
  
var adress = {lat: -34.60978198603641, lng: -58.38326233205024 };

const controlButton = document.getElementById("adress-1");

controlButton.addEventListener('click', () => {
  map.setCenter(adress);
});

const marker = new AdvancedMarkerElement({
      
    map: map,
    position: position,
    title: 'Teatro'
  });
const marker2 = new AdvancedMarkerElement({
      
    map: map,
    position: adress,
    title: 'Me Veran'
  });
}

initMap();

function openTab(evt, tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
