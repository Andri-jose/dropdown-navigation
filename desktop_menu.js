// features menu
const features = document.getElementById("featuresNav")
features.addEventListener("click", btnClick)
function btnClick() {
    let contentDesktopFeatures = document.createElement("div");
    contentDesktopFeatures.innerHTML = `
                        <ul class="contentFeaturesNav d-flex flex-column justify-content-center">
                            <li><span class="icon"><img src="images/icon-todo.svg"></span>Todo List</li>
                            <li><span class="icon"><img src="images/icon-calendar.svg"></span>Calendar</li>
                            <li><span class="icon"><img src="images/icon-reminders.svg"></span>Reminders</li>
                            <li><span class="icon"><img src="images/icon-planning.svg"></span>Planning</li>
                        </ul>`;
                    
    features.appendChild(contentDesktopFeatures);
    const arrowFeaturesDesk = document.getElementById("arrowdownDesk");
    arrowFeaturesDesk.classList.toggle("arrowdownHideDesk");
    const arrowUpDesk = document.querySelector(".arrowChangeDesk");
    arrowUpDesk.classList.toggle("arrowUpDesk");
    const dropdown = document.querySelector(".contentFeaturesNav");
    dropdown.classList.toggle("contentFeaturesNav-active");

}

// company menu
const company = document.getElementById("companyNav")
company.addEventListener("click", btnCompanyDeskClick)
function btnCompanyDeskClick() {
    let contentDesktopCompany = document.createElement("div");
    contentDesktopCompany.innerHTML = `
                            <ul class="contentCompanyNav d-flex flex-column justify-content-center">
                                <li>History</li>
                                <li>Our Team</li>
                                <li>Blog</li>
                            </ul>`;
                    
    company.appendChild(contentDesktopCompany);
    // to hide down arrow 
    const arrowCompanyDesk = document.getElementById("arrowdownDeskCompany");
    arrowCompanyDesk.classList.toggle("arrowHideCompanyDesk");
    // to show up arrow 
    const showUpArrrow = document.querySelector(".arrowChangeCompanyDesk");
    showUpArrrow.classList.toggle("arrowUpCompanyDesk");
    // show and hide dropdown
    const dropdownCompany = document.querySelector(".contentCompanyNav");
    dropdownCompany.classList.toggle("contentCompanyNav-active");

}
