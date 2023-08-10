const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Sélection d'éléments HTML : 
const arrow_left = document.querySelector(".arrow_left"); //arrow_left représente la flèche gauche.
const arrow_right = document.querySelector(".arrow_right");// arrow_right représentent la flèche droite.
const nbSlides = slides.length; // nombre total de diapositives ( slides)

const bannerImage = document.querySelector(".banner-img"); // Représente l'image affichée dans le slider. 
bannerImage.src = "./assets/images/slideshow/" + slides[0].image;// chemin de l'image

const paraf = document.querySelector("#banner p");//paraf : Représente le paragraphe qui affiche le texte de la diapositive. 
paraf.innerHTML = slides[0].tagLine;

let dots = document.querySelector(".dots"); //dots : Représente le conteneur pour les bullet points.

for (let i = 0; i < nbSlides; i++) {
	let div = document.createElement("div"); 
	dots.appendChild(div); 
	div.classList.add("dot");	
}
//Initialisation de l'affichage : 

//L'image et le texte de la première diapositive sont affichés au chargement de la page. 

//Des éléments <div> (bullet points) sont créés et ajoutés au conteneur dots, un pour chaque diapositive.

dotNb = document.querySelectorAll(".dot");
dotNb[0].classList.add("dot_selected");	

arrow_left.addEventListener("click", clickleft);
arrow_right.addEventListener("click", clickright);


//Gestion des événements : Les fonctions clicleft() et clicright() sont appelées lorsque les flèches gauche et droite sont cliquées respectivement. 
//Les deux fonctions font essentiellement la même chose : elles gèrent le changement d'image et de texte, ainsi que la mise en évidence du bullet point actif. 
function clickright() {
	index = 0;
	for (let i = 0; i < nbSlides; i++) {
		test = dotNb[i].classList;
		if (test.contains("dot_selected")) {index=i;};	
	}
	dotNb[index].classList.remove("dot_selected");//Elle supprime la classe "dot_selected" du bullet point actif et passe au suivant (ou revient au début si on est à la fin).
	if (index==3) { index=0; } else { index++;};
	dotNb[index].classList.add("dot_selected");
	bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
	paraf.innerHTML = slides[index].tagLine;//L'image et le texte sont mis à jour avec ceux de la nouvelle diapositive. 
};
//Elle trouve l'indice du bullet point actif (celui avec la classe "dot_selected"). 

function clickleft() {          
	indice = 0;
	for (let i = 0; i < nbSlides; i++) {
		test = dotNb[i].classList;
		if (test.contains("dot_selected")) {indice=i;};	
		//Elle trouve l'indice du bullet point actif (celui avec la classe "dot_selected").
	}
	console.log (index);
	dotNb[index].classList.remove("dot_selected");//Elle supprime la classe "dot_selected" du bullet point actif et passe au précédent (ou revient à la fin si on est au début). 
	if (index==0) { index=3; } else { index--;};
	dotNb[index].classList.add("dot_selected");	
	bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
	paraf.innerHTML = slides[index].tagLine;
	//L'image et le texte sont mis à jour avec ceux de la nouvelle diapositive. 
};