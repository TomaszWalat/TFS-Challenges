const apiURL = "https://www.purgomalum.com/service/json?text=";

function censorProfanity_old(whisper) {

    let request = apiURL + whisper;

    fetch(request)
        .then((response) => response.json())
        .then((data) => {
            console.log("response data : ", data);

            //return data;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

async function censorProfanity(whisper) {
    let request = apiURL + whisper;

    try {
        const response = await fetch(request);

        if(!response.ok) {
            throw new Error(`Response error: ${response.status}`);
        }

        const result = await response.json();

        console.log("response data : ", result);

        return result;

    } catch (error) {
        console.error(error.message);
    }
}
