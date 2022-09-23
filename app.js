const allSpeakers = document.querySelector(".speakers");
const menuIcon = document.querySelector(".menu");
const phoneMenuList = document.querySelector(".menu-sec");
const allCloseMenu = document.querySelectorAll(".links");


menuIcon.addEventListener("click", (e) =>{
  // e.preventDefault()
  if(e.target.classList.contains("menu")){
      console.log(true)
      //  phoneMenuList.style.display = "none";
       phoneMenuList.style.display = "flex";
       menuIcon.style.display = "none"
  }
})

phoneMenuList.addEventListener("click", (e)=>{
  // e.preventDefault()
  let clicked = e.target.classList.contains("links");
  if(clicked){
    phoneMenuList.style.display = "none";
     menuIcon.style.display = "flex";
  }
})






const guests = [
  {
  Name: "Dr. Alexander T. Simpson Jr.",
  Title: "Alexander T. Simpson Jr., Associate Professor, directs the Bellarmine Handbell ensemble, teaches Music Literature.",
  Desciption: "Dr. Simpson received his undergraduate degree from Dartmouth College, his M.M. from Converse College, and his Ph.D. from the University of Kentucky. Simpson has accompanied for the Kentucky Opera, the Charleston Opera Company.",
  Img: "./images/simpson-at.jpg",
  Alt: "simpson-at.jpg"
},

{
  Name: "Yvonne Chaka Chaka",
  Title: "South African Music Chairman's Award",
  Desciption: "Yvonne Chaka Chaka is a South African singer, songwriter, actress, entrepreneur, humanitarian and teacher. Dubbed the 'Princess of Africa', Chaka Chaka has been at the forefront of South African popular music for 35 years.",
  Img: "./images/jugde-HYS.M-Kutty1.jpg",
  Alt: "jugde-HYS.M-Kutty1.jpg"
},

{
  Name: "Angélique Kidjo",
  Title: "Grammy Award for Best Global Music Album.",
  Desciption: "Angélique Kpasseloko Hinto Hounsinou Kandjo Manta Zogbin Kidjo, known as Angélique Kidjo, is a five-time Grammy Award winning Beninese singer-songwriter, actress, and activist who is noted for her diverse musical influences.",
  Img: "./images/microphone-mum1.jpg",
  Alt: "images/microphone-mum1.jpg"
},

{
  Name: "Ba Cissoko",
  Title: "Play the traditional Kora harp.",
  Desciption: "Ba Cissoko is a Guinean world music band featuring five members, two of whom play the traditional Kora harp. Two band members play percussion instruments and one plays bass. The sound of the band has been described as 'West Africa meets Jimi Hendrix'.",
  Img: "./images/micro-guiter1.jpg",
  Alt: "micro-guiter1.jpg"
},

{
  Name: "Youssou N'Dour",
  Title: "Former Minister of Tourism of Senegal & MTV Europe Music Award for Best Song",
  Desciption: "Youssou N'Dour is a Senegalese singer, songwriter, musician, composer, occasional actor, businessman, and politician. In 2004, Rolling Stone magazine described him as, 'perhaps the most famous singer alive' in Senegal and much of Africa.",
  Img: "./images/guiter-guy1.jpeg",
  Alt: "guiter-guy1.jpeg"
},

{
  Name: "Salif Keita",
  Title: "Salif Keïta is a Malian singer-songwriter, referred to as the 'Golden Voice of Africa'",
  Desciption: "Salif Keita, from Mali, is one of the most influential musicians on the African continent. Known as the “Golden Voice of Africa”, Mr. Keita was born with albinism. In 2005, he founded the Salif Keita Global Foundation to raise awareness of the condition.",
  Img: "./images/ba-sissico.jpg",
  Alt: "ba-sissico.jpg"
}
];

function renderSpeakers(){
  let speakerCarry = "";
  for(let i = 0;i < guests.length;i++){
    speakerCarry += `
  <li class="guest">
    <img src="${guests[i].Img}" alt="${guests[i].Alt}">
    <section>
      <h3>
      ${guests[i].Name}
      </h3>
      <p class="p1"> 
      ${guests[i].Title}
      </p>
      <p class="p2">
      ${guests[i].Desciption}
      </p>
    </section>
  </li>`;
  }

  allSpeakers.innerHTML = speakerCarry;
}

renderSpeakers();
