// 1)
const getFootballData = async () => {
    const response = await fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal");
    const data = await response.json();
    console.log(data);
};

getFootballData();


// 2)
const getRandomPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
        const randomNumber = Math.random()
        if (randomNumber < 0.5) {
            resolve("success")
        } else {
            reject("fail")
        }
        }, 2000)
    })

const handlePromise = async () => {
    await getRandomPromise()
        .then(result => console.log(result))
        .catch(error => console.log(error))
}

handlePromise()


// 3)
const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData()
