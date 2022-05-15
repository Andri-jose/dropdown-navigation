let button = document.querySelector(".menu")
button.addEventListener("click", answerClick)
function answerClick() {
	const menu = document.getElementById("top_container");
    let features = document.createElement("div");
    features.classList.add("menu_container");
    features.innerHTML = `  <div class="imgClose"><img id="hello" src="images/icon-close-menu.svg"></div>
                        <div class="">
                            <ul class="featuresJs d-flex flex-column align-items-start justify-content-evenly">
                                <li id="btnFeatures">Features<span id="arrowdownMobil"><img src="images/icon-arrow-down.svg"></span><span class="arrowChange"><img src="images/icon-arrow-up.svg"></span></li>
                                <li id="btnCompany">Company<span id="arrowdownMobilCompany"><img src="images/icon-arrow-down.svg"></span><span class="arrowChangeCompany"><img src="images/icon-arrow-up.svg"></span></li>
                                <li>Careers</li>
                                <li>About</li>
                            </ul>
                            <ul class="loginJs">
                                <li class="">Login</li>
                                <li class="registerJs mt-2">Register</li>
                            </ul>
                        </div>`;
    menu.appendChild(features); 
    const body = document.querySelector(".container");
    body.classList.add("container-active");
    const main = document.getElementById("main_section");
    main.classList.add("main-active");

    let x = document.querySelector(".imgClose")
    x.addEventListener("click", xClick)
    function xClick() {
        features.remove();
        body.classList.remove("container-active");
        main.classList.remove("main-active");
    }
    // features btn on menu
    let btnFeatures = document.getElementById("btnFeatures")
    btnFeatures.addEventListener("click", btnClick)
    function btnClick() {
        let contentFeatures = document.createElement("div");
        contentFeatures.innerHTML = `
                            <ul class="contentFeaturesJs d-flex flex-column justify-content-evenly">
                                <li><span class="icon"><img src="images/icon-todo.svg"></span>Todo List</li>
                                <li><span class="icon"><img src="images/icon-calendar.svg"></span>Calendar</li>
                                <li><span class="icon"><img src="images/icon-reminders.svg"></span>Reminders</li>
                                <li><span class="icon"><img src="images/icon-planning.svg"></span>Planning</li>
                            </ul>`;
                        
        btnFeatures.appendChild(contentFeatures);
        btnFeatures.classList.add("changeFeatures");
        const arrowFeatures = document.getElementById("arrowdownMobil");
        arrowFeatures.classList.toggle("arrowdownHide");
        const arrowUp = document.querySelector(".arrowChange");
        arrowUp.classList.toggle("arrowUp");
        const dropdown = document.querySelector(".contentFeaturesJs");
        dropdown.classList.toggle("contentFeaturesJs-active");
  
    }

    // Company btn on menu
    let btnCompany = document.getElementById("btnCompany")
    btnCompany.addEventListener("click", btnCompanyClick)
    function btnCompanyClick() {
        let contentCompany = document.createElement("div");
        contentCompany.innerHTML = `
                            <ul class="contentCompanyJs d-flex flex-column justify-content-evenly">
                                <li>History</li>
                                <li>Our Team</li>
                                <li>Blog</li>
                            </ul>`;
                        
        btnCompany.appendChild(contentCompany);
        btnCompany.classList.add("changeCompany");
        // show and hide dropdown
        const dropdownCompany = document.querySelector(".contentCompanyJs");
        dropdownCompany.classList.toggle("contentCompanyJs-active");
        // to hide down arrow 
        const arrowCompany = document.getElementById("arrowdownMobilCompany");
        arrowCompany.classList.toggle("arrowdownHide");
        // to show up arrow 
        const arrowUpCompany = document.querySelector(".arrowChangeCompany");
        arrowUpCompany.classList.toggle("arrowUpCompany");
}

}





// console.log(button)  



   // const dropdownFeatures = document.querySelector(".dropdownFeatures");
        // dropdownFeatures.classList.toggle("changeFeatures-active");
        // btnFeatures.classList.toggle("changeFeatures-active");
        // const spaceFeatures = document.querySelector(".featuresJs");
        // spaceFeatures.classList.add("spaceAll");
        // spaceFeatures.classList.toggle("spaceAll-active");


              // contentFeatures.remove();
        // spaceFeatures.classList.add("spaceFix");