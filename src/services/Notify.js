import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const ContactError = () => {
  toast.error('Erro ao enviar mensagem, tente novamente!', {
    position: toast.POSITION.TOP_RIGHT,
    theme: 'colored',
  });
}

export const ContactSucess = () => {
  toast.success('Mensagem enviada com sucesso!!', {
    position: toast.POSITION.TOP_RIGHT,
    theme: 'colored',
    autoClose: 2000
  });
}