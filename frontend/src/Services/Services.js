import axios from 'axios';

export const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:5000/product")
            .then((result) => {
                resolve(result.data); // Resolve only the data property
            })
            .catch((error) => {
                reject(error); // Reject with the error object
            });
    });
};

