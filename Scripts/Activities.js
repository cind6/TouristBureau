"use strict";


let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine-Tastings", "Other"];

let activities = [
   {
        category: "Adventures", 
        id: "A101", 
        name: "Valley Hot Air Balloons", 
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.", 
        location: "121 S. Main Street",
        price: 265.00 
   },
   {
        category: "Adventures", 
        id: "A102", 
        name: "River Runners: Float Trip", 
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.", 
        location: "145 FM 103",
        price: 65.00 
    },
    {
        category: "Adventures", 
        id: "A103", 
        name: "River Runners: Ride the Rapids", 
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!", 
        location: "145 FM 103",
        price: 145.00 
    },     
    {
        category: "Arts & Crafts", 
        id: "AC101", 
        name: "Painting with a Twist : Oils", 
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },
    {
        category: "Arts & Crafts", 
        id: "AC102", 
        name: "Painting with a Twist : Watercolor", 
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },   
    {
        category: "Museums", 
        id: "M101", 
        name: "Bravings Airship Museum", 
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.", 
        location: "101 Airfield Drive",
        price: 10.00
    },   
    {
        category: "Museums", 
        id: "M102", 
        name: "Forks and Spoons Museum", 
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!", 
        location: "1056 Lost Knives Court",
        price: 3.00
    },  
    {
        category: "Museums", 
        id: "M103", 
        name: "Steenges Computing Museum", 
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.", 
        location: "103 Technology Way",
        price: 0.00 
    },  
    {
        category: "Wine-Tastings", 
        id: "WT-101", 
        name: "Hastings Winery Tours and Tastings", 
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.", 
        location: "10987 FM 1187",
        price: 12.00 
    },   
    {
        category: "Wine-Tastings", 
        id: "WT-102", 
        name: "Lone Oak Winery", 
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.", 
        location: "121 Burleson Court",
        price: 0.00 
    },   
    {
        category: "Other", 
        id: "OTH101", 
        name: "Fire Department: Ride Along", 
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!", 
        location: "10 Redline Drive",
        price: 25.00 
    },   
    {
        category: "Other", 
        id: "OTH102", 
        name: "Homes For Our Neighbors", 
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!", 
        location: "Call (555) 555-5555",
        price: 0.00 
    }
];

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

        //populate Activity List with only activities that belong to this Category.
        populateActivitySelect(activities, currentCategory);

        //Display the Activity Selection area so that an activity can be selected.
        showActivitySelect();

    }

    hideActivityDetail();



}


function populateActivitySelect(fullListOfActivities, selectedCategory) {
  

    activitySelect.options.length = 0;
    let initialOption = new Option("Please select your activity!", "");
    activitySelect.appendChild(initialOption);

    
    for (let i = 0; i < fullListOfActivities.length; i++) {
        let thisActivity = fullListOfActivities[i];

        if (thisActivity.category == selectedCategory) {
            let theOption = new Option(thisActivity.name, thisActivity.id);
            activitySelect.appendChild(theOption);
            console.log("The new option has been added to the dropdown")
        }

    }

}


function getActivitiesInCategory(fullListOfActivities, category){
    let result = [];

    // todo to the work here to build out result with only the activities that are of the correct category:


//this is the solution without using an index.
    for(let thisActivity of fullListOfActivities){
   
    if (thisActivity.category == category) {
      result.push(thisActivity)
    }
  }


    return result;
}

function onActivitySelectChange() {
    // populate all of the fields in the activity detail area with values that pertain
    // to the selected activity

    // get the id of the selected activity:

    let selectedActivityId = activitySelect.value;

    if (selectedActivityId == "") {
        hideActivityDetail();
        hideCheckout();
    }
    else {

        let selectedActivity = getActivityById(selectedActivityId);

        activityName.innerHTML = selectedActivity.name;
        activityId.innerHTML = selectedActivity.id;
        activityDesc.innerHTML = selectedActivity.description;
        activityLocation.innerHTML = selectedActivity.location;
        activityPrice.innerHTML = selectedActivity.price;



        // Display the activity detail row
        showActivityDetail();

        if (selectedActivity.price > 0) {
            showCheckout();
        }
        else {
            hideCheckout();
        }

    }

}

function getActivityById(id) {
    for (let i = 0; i < activities.length; i++) {
        let thisActivity = activities[i];
        if (thisActivity.id == id) {
            return thisActivity
        }

    }
}


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