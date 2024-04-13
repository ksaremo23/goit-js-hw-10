// 1. Set BASE_URL to the base endpoint of The Cat API
// 2. Set API_KEY to the provided API key for authorized access

// 3. Define function fetchBreeds
//     3.1 Make a GET request to "{BASE_URL}/breeds" with the API key appended as a query parameter
//     3.2 Upon receiving the response, check if the response status is not OK
//         - If not OK, throw an error with the response status
//         - If OK, parse the response body as JSON and return it

// 4. Define function fetchCatByBreed with parameter breedId
//     4.1 Make a GET request to "{BASE_URL}/images/search" with the API key and breed_ids as query parameters, where breed_ids is set to breedId
//     4.2 Upon receiving the response, check if the response status is not OK
//         - If not OK, throw an error with the response status
//         - If OK, parse the response body as JSON and return it

// 5. Export both fetchBreeds and fetchCatByBreed functions for external use

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_BaUcfmMrbtLye4wK92nrR149ZZ1tYnxfB5UaoYN8LxJYtXd2Nh3syuTYousk1MCy';

export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });
}

export function fetchCatByBreed(breedId) {
    return fetch(
        `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
    ).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });
}