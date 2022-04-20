
let floorsBuildings = [
    3,
    7,
    8,
    3,
    6,
    1
]

// exo2.js

const buildingsWithView = (floorsBuildings) => {
    let totalBuildingsForCash = 1;
    for (var firstBuilding = 0; firstBuilding < floorsBuildings.length; firstBuilding++) {
        for (var buildingCompared = firstBuilding + 1; buildingCompared < firstBuilding + 2; buildingCompared++) {
            if (floorsBuildings[firstBuilding] > floorsBuildings[buildingCompared]) {
                totalBuildingsForCash++;
            }
            
        }
    }
    return totalBuildingsForCash;
}

console.log(buildingsWithView(floorsBuildings));

// exo4.js

const buildingsWithViewOneLine = (floorsBuildings) => {
    var totalBuildingsForCash = 1;
    for (var firstBuilding = 0; firstBuilding < floorsBuildings.length; firstBuilding++) {
      if(floorsBuildings[firstBuilding]>floorsBuildings[firstBuilding+1]){
        totalBuildingsForCash++;
      }
    }
    return totalBuildingsForCash;
}

console.log(buildingsWithViewOneLine(floorsBuildings));