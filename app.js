const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Light"

    }

})

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    } 
    else {
    toTop.classList.remove("active");
    }
})

function imagechangé(){ let imagechanger = document.getElementById("TBL").src="img/poutine.jpg"}

function imagedebase(){ let imageoriginale = document.getElementById("TBL").src="img/TBL.jpg"}

function calcul(){
    var points = 0;
    var date_reponse = document.getElementById('naissance').value;
    var arpanet_reponse = document.getElementById('id_arpanet').value;
    var lieu_reponse = document.querySelector('input[name="lieu"]:checked').value;
    var cofondateur_reponse = document.getElementById('id_cofondateur').value;
    var os_reponse = document.getElementById('id_os').value;
    var w3c_reponse = document.getElementById('id_w3c').value;
    if (date_reponse == '1955-06-06'){
        points+=1;
        document.getElementById('naissance_reponse').textContent ="Vous avez trouvé la bonne réponse !";
        document.getElementById('naissance_reponse').style.color = "green";
    }
    else{
        document.getElementById("naissance_reponse").textContent="Vous n'avez pas la bonne réponse !";
        document.getElementById("naissance_reponse").style.color = "red";

    }
    if (arpanet_reponse == 'Premier réseau à transfert de paquets'){
        points+=1;
        document.getElementById('arpanet_reponse').textContent ="Vous avez trouvé la bonne réponse !";
        document.getElementById('arpanet_reponse').style.color = "green";

    }
    else{
        document.getElementById("arpanet_reponse").textContent="Vous n'avez pas la bonne réponse !";
        document.getElementById("arpanet_reponse").style.color = "red";

    }
    if (lieu_reponse == 'C'){
        points+=1;
        document.getElementById("radio_reponse").innerText="Vous avez trouvé la bonne réponse !";
        document.getElementById('radio_reponse').style.color = "green";
    }
    else{
        document.getElementById("radio_reponse").textContent= "Vous n'avez pas la bonne réponse !";
        document.getElementById("radio_reponse").style.color = "red";

    }
    if (cofondateur_reponse == 'RC'){
        points+=1;
        document.getElementById("cofondateur_reponse").innerText="Vous avez trouvé la bonne réponse !";
        document.getElementById('cofondateur_reponse').style.color = "green";
    }
    else{
        document.getElementById("cofondateur_reponse").textContent= "Vous n'avez pas la bonne réponse !";
        document.getElementById("cofondateur_reponse").style.color = "red";

    }
    if (os_reponse == 'N'){
        points+=1;
        document.getElementById("os_reponse").innerText="Vous avez trouvé la bonne réponse !";
        document.getElementById('os_reponse').style.color = "green";
    }
    else{
        document.getElementById("os_reponse").textContent= "Vous n'avez pas la bonne réponse !";
        document.getElementById("os_reponse").style.color = "red";

    }
    if (w3c_reponse == 'Après avoir quitté le CERN'){
        points+=1;
        document.getElementById("w3c_reponse").innerText="Vous avez trouvé la bonne réponse !";
        document.getElementById('w3c_reponse').style.color = "green";
    }
    else{
        document.getElementById("w3c_reponse").textContent= "Vous n'avez pas la bonne réponse !";
        document.getElementById("w3c_reponse").style.color = "red";

    }
    document.getElementById("id_points").textContent="Vous avez : " + points + "/6 !"
    if (points > 4){
        document.getElementById("id_points").style.color = "green"
    }
    else if (points <= 2){
        document.getElementById("id_points").style.color = "red"
    }
    else if (points <= 4){
        document.getElementById("id_points").style.color = "orange"
    }
}