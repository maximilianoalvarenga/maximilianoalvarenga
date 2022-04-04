import * as API from './backend';

export const postNewContato = async(dados) => {
    const { nome, email, telefone, assunto, mensagem } = dados;
    const _data = { 
        nome,
        email,
        telefone,
        assunto,
        mensagem,
    };
    const requestOptions = {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(_data)
    };

    const response = await API.postContato(requestOptions);
    return response;
};