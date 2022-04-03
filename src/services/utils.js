const defaultUser = 'Maximiliano Alvarenga';

export const setTitlePage = (path) => {
    switch (path) {
        case '/':
            return `${defaultUser}`;
        case '/sobre':
            return `${defaultUser} | Sobre`;
        case '/contato':
            return `${defaultUser} | Contato`;
        case '/portfolio':
            return `${defaultUser} | Portfolio`;
        default:
            break;
    }
}