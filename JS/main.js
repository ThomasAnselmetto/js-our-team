// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//     MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

//     MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card / schede

/****************************************************
  *                                                  *
  *                       INIZIO ESERCIZIO           *
  *                                                  *    
  * **************************************************

// Creare l’array di oggetti con le informazioni fornite.
*/


const workersCards = document.querySelector(".carta");

const lavoratori = [

    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "./img/wayne-barnett-founder-ceo.jpg",

    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "./img/angela-caroll-chief-editor.jpg",

    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "./img/walter-gordon-office-manager.jpg",

    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "./img/angela-lopez-social-media-manager.jpg",

    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "./img/scott-estrada-developer.jpg",

    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "./img/barbara-ramos-graphic-designer.jpg",

    }

]




// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
let lavoratore = 0;

for (let lavoratore in lavoratori) {
    console.log(lavoratori[lavoratore]);


    workersCards.innerHTML +=
        `
    <div class="card" style="width: 18rem;">
        <img src="./img/wayne-barnett-founder-ceo.jpg" alt="wayne-barnett" class="card-img-top" alt="...">
            <div class="card-body">

                <p class="card-text">
                nome:${lavoratori.nome[lavoratore]}
                ruolo:${lavoratori.ruolo[lavoratore]}
                </p>
            </div>
    </div>
`
