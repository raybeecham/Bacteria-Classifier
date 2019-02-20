var $ = function(id) {
    return document.getElementById(id);

};
var counter = 0;
var FN;
var LN;
var arrayOfBacteria = [];
var errorMessage = "";


function bacteriaCount() {
    document.getElementById("count").innerHTML = counter;
};

function addBacteria() {
    commonName = $("commonN").value;
    speciesName = $("species").value;
    genusName = $("genus").value;
    domainName = $("domain").value;
    shapeType = $("shape").value;
    
    
    if (commonName == "") {
        errorMessage = "A common name is required";
        $("commonN").focus();
    }
    else if (commonName == arrayOfBacteria) {
        errorMessage = "Duplicate names, try again";
        $("commonN").focus();
    }
    if (errorMessage == "") {
        arrayOfBacteria[counter] = {"common" : commonName, "species" : speciesName, "genus" : genusName, "domain" : domainName, "shape" : shapeType};
        counter++;
        console.log(arrayOfBacteria);
    }
    else {
        alert(errorMessage);
    }
    
    
};

function showBacteria () {
    for (var counter = 0; counter < arrayOfBacteria.length; counter++) { alert(arrayOfBacteria[counter].common + " is the common name | the species name is " + arrayOfBacteria[counter].species + " | and the genus name is " + arrayOfBacteria[counter].genus + " | and this bacteria belongs to the domain of " + arrayOfBacteria[counter].domain + " | with the shape of " + arrayOfBacteria[counter].shape);
    }
}





