$(document).ready(function () {
    init()

})

const vacationArr = JSON.parse(localStorage.getItem("vacationArr")) || []

function init() {
    draw(vacationArr)
    const button = $("#create-btn")
    button.click(function () {
        const vacationDescription = $("#vacationDescription")
        const vacationImage = $("#vacationImage")
        const vacation = {
            description: vacationDescription.val(),
            img: vacationImage.val()


        }

        if (vacationDescription.val().trim() === "" || vacationImage.val().trim() === "") {
            alert("Please provide both a description and an image");
            return;
        }

        vacationArr.push(vacation)
        localStorage.setItem("vacationArr", JSON.stringify(vacationArr))
        draw(vacationArr)
        vacationDescription.val('');
        vacationImage.val('');
    })


    $("#vacation-list").sortable();


}


function draw(vacationArr) {
    const uiVacation = vacationArr.map(vacation => getVacationUI(vacation));
    const vacationList = $("#vacation-list")
    vacationList.empty()
    vacationList.append(...uiVacation)

}

function getVacationUI(vacationData) {
    const vacationContainerDiv = document.createElement("div");
    vacationContainerDiv.classList.add = "vacation-card";
    const vacationDes = document.createElement("h2");
    vacationDes.innerText = vacationData.description;
    const vacationImg = document.createElement("img")
    vacationImg.src = vacationData?.img


    vacationContainerDiv.append(vacationDes, vacationImg);
    return vacationContainerDiv





}


