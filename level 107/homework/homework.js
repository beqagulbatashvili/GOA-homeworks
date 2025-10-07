// 3)

function randomDelay() {
  return Math.floor(Math.random() * 1500) + 500;
}

// 1)
const planetData = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.3) {
        resolve({ name: "Earth", size: "12,742 km", distance: "149.6 million km" });
        } else {
        reject("Planet data failed to load");
        }
    }, randomDelay());
});

// 2) 
const satelliteData = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.3) {
        resolve({ moons: 1 });
        } else {
        reject("Satellite data failed to load");
        }
    }, randomDelay());
    });

// 3) 
const explorationData = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.3) {
        resolve({ missions: ["Apollo 11", "Artemis I", "Voyager 1"] });
        } else {
        reject("Exploration data failed to load");
        }
    }, randomDelay());
    });


    planetData
    .then((data) => console.log("Planet data loaded:", data))
    .catch((err) => console.log(err));

    satelliteData
    .then((data) => console.log("Satellite data loaded:", data))
    .catch((err) => console.log(err));

    explorationData
    .then((data) => console.log("Exploration data loaded:", data))
    .catch((err) => console.log(err));


Promise.all([planetData, satelliteData, explorationData])
    .then((results) => {
        const [planet, satellite, exploration] = results;
        const report = { ...planet, ...satellite, ...exploration };
        console.log("Combined Planet Report:", report);
    })
    .catch((error) => {
        console.log("Could not generate full report.");
        console.log("Reason:", error);
    });
