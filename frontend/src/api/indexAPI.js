import axios from '../../axios_config';

export const getIndex = () => {
    return axios.get('HomeRoute.php')
    .then(function (response) {
        return(response.status);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const postIndex = (name) => {
    return axios.post('HomeRoute.php', {name: name})
    .then(function(response) {
        return(response.data)
    })
    .catch(function(error) {
        console.log(error);
    });
}