"use strict";

console.log("Loading activities.js");

const activityDetailRow = document.getElementById("activityDetailRow");
const paymentDetailRow = document.getElementById("paymentDetailRow");
const activitySelectionRow = document.getElementById("activitySelectionRow");

const categorySelect = document.getElementById("categorySelect");
const activitySelect = document.getElementById("activitySelect");

const activityName = document.getElementById("activityName");
const activityId = document.getElementById("activityId");
const activityDesc = document.getElementById("activityDesc");
const activityLocation = document.getElementById("activityLocation");
const activityPrice = document.getElementById("activityPrice");

window.onload = function () {

    categorySelect.onchange = onCategorySelectChange;
    activitySelect.onchange = onActivitySelectChange;

    hideActivitySelect();
    hideActivityDetail();

};

function onCategorySelectChange() {
    let currentCategory = categorySelect.value;

    if (currentCategory == "") {
        hideActivitySelect();
    }
    else {
        console.log(`The ${currentCategory} value has been selected for Category.`)

        populateActivitySelect(activities, currentCategory);

        showActivitySelect();

    }

    hideActivityDetail();

}

// function getActivitiesInCategory(fullListOfActivities, category) {
//     let result = [];

//     for (let thisActivity of fullListOfActivities) {
//         if (thisActivity.category == category) {
//             result.push(thisActivity)
//         }
//     }

//     return result;
// }

function populateActivitySelect(fullListOfActivities, selectedCategory) {

    activitySelect.innerHTML = "";

    let initialOption = new Option("Please select your activity!", "");
    activitySelect.appendChild(initialOption);

    //let activitiesIsCategory = getActivitiesInCategory
    //(fullListOfActivities, selectedCategory);
   
    let activitiesInCategory = activities.filter(activity => activity.category == selectedCategory);


    activitiesInCategory.forEach( (activity) => {
        let theOption = new Option(activity.name, activity.id);
        activitySelect.appendChild(theOption);
    })

//     for (let thisActivity of activitiesInCategory) {
//         let theOption = new Option(thisActivity.name, thisActivity.id);
//         activitySelect.appendChild(theOption);
//         console.log("The new option has been added to the dropdown")
//     }

 }


function onActivitySelectChange() {

    let selectedActivityId = activitySelect.value;

    if (selectedActivityId == "") {
        hideActivityDetail();

    }
    else {

       // let selectedActivity = getActivityById(selectedActivityId);
        
       let selectedActivity = activities.find( activity => activity.id == selectedActivityId);

       //let selectedActivity2 = activities.find(function(activity){
       // return activity.id == selectedActivityId;
       //});


        activityName.innerHTML = selectedActivity.name;
        activityId.innerHTML = selectedActivity.id;
        activityDesc.innerHTML = selectedActivity.description;
        activityLocation.innerHTML = selectedActivity.location;
        activityPrice.innerHTML = selectedActivity.price;

        showActivityDetail();

        if (selectedActivity.price > 0) {
            showCheckout();
        }
        else {
            hideCheckout();
        }

    }

}

// function getActivityById(id) {
//     for (let i = 0; i < activities.length; i++) {
//         let thisActivity = activities[i];
//         if (thisActivity.id == id) {
//             return thisActivity;
//         }
//     }
// }




function hideActivityDetail() {
    activityDetailRow.style.display = 'none';
    hideCheckout();
}

function showActivityDetail() {
    activityDetailRow.style.display = 'block';
}


function hideCheckout() {
    paymentDetailRow.style.display = 'none';
}

function showCheckout() {
    paymentDetailRow.style.display = 'block';
}

function hideActivitySelect() {
    activitySelectionRow.style.display = "none";
}

function showActivitySelect() {
    activitySelectionRow.style.display = "block";
}