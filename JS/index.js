
var spv = 0;


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grid: {
      columns:5,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 1,

      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,

      }
    }

  });


  function main() {
    document.getElementById("frenchButton").addEventListener("click", function(event){
      event.preventDefault();
      document.getElementById("projetEtudes").innerHTML = "Projets d'études"
      document.getElementById("projetPerso").innerHTML = "Projets personnels"
      document.getElementById("bienvenue").innerHTML = "Bienvenue"
      document.getElementById("mainDescription").innerHTML = `Bonjour et bienvenue sur mon site. 
      Vous trouverez ici une partie de mon travail. <br>
      N'hésitez pas à <a href="#contact">me contacter</a> et bonne visite !`
      document.getElementById("titreEtudes").innerHTML = "Mes projets d'études"
      document.getElementById("titrePerso").innerHTML = "Mes projets personnels"
      document.getElementById("descriptionLaChouetteAgence").innerHTML = "Mission de réaménagement du site (principalement Front) pour amélioration SEO, performance et accéssibilité."
      document.getElementById("descriptionOrinoco").innerHTML = "Mission de mise en place Front-end en fonction de l'API Rest sur un site"
      document.getElementById("descriptionReservia").innerHTML = "Mission de mise en place Front-end pour un site de reservation de logement sur base Maquette"
      document.getElementById("descriptionHotTakes").innerHTML = "Mission de mise en place Back-end sur site de notation de sauces piquantes"
      document.getElementById("descriptionGroupomania").innerHTML = "Mission Full-stack de messagerie d'entreprise"
      document.getElementById("descriptionNoiroroo").innerHTML = "Site de Jeu de Rôle papier réalisé en googlesite"
      
    })
    document.getElementById("englishButton").addEventListener("click", function(event){
      event.preventDefault();
      document.getElementById("projetEtudes").innerHTML = "Study Projects"
      document.getElementById("projetPerso").innerHTML = "Personal Projects"
      document.getElementById("bienvenue").innerHTML = "Welcome"
      document.getElementById("mainDescription").innerHTML = `Welcome to my portfolio page.<br>
      Don't hesitate to <a href="#contact">contact</a> and enjoy your browsing!`
      document.getElementById("titreEtudes").innerHTML = "Study projects"
      document.getElementById("titrePerso").innerHTML = "Personal Projects"
      document.getElementById("descriptionLaChouetteAgence").innerHTML = "- Mission for SEO improvement, performance and accessibility."
      document.getElementById("descriptionOrinoco").innerHTML = "Front-end mission using API Rest"
      document.getElementById("descriptionReservia").innerHTML = "Front-end mission and maquette for vacation reservation"
      document.getElementById("descriptionHotTakes").innerHTML = "Back-end mission on sauce reviewing website"
      document.getElementById("descriptionGroupomania").innerHTML = "Full-stack mission for a buisness's social network"
      document.getElementById("descriptionNoiroroo").innerHTML = "Rulebook for homemade roleplaying game - Googlesite"
    });
  }

  main()

  