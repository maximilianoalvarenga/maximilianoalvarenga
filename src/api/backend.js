const USER = 'https://maximiliano-backend.herokuapp.com/portfolio/contato';

export const postContato = async() => {
    try {
      const data = await fetch(USER);
      // const dataJSON = await data.json();
      return data;
    } catch (error) {
      console.log(error)
    }
  }