const USER = 'https://maximiliano-backend.herokuapp.com/portfolio/contato';

export const postContato = async(requestOptions) => {
    try {
      const data = await fetch(USER, requestOptions);
      const dataJSON = await data.json();
      return dataJSON;
    } catch (error) {
      console.log(error)
    }
  }