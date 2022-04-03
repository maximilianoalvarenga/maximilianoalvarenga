import * as API from './backend';

export const postNewContato = async() => {
    const response = await API.postContato();
    return response;
};