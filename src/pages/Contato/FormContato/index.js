import { useEffect, useState, useCallback } from "react";
import { Button, Container } from "./style";
import * as API_UTIL from  '../../../api/backendUtils';
import { useNavigate } from 'react-router-dom';
import { ContactError, ContactSucess } from "../../../services/Notify";

const FormContato = () => {
    const navigate = useNavigate();
    const [btnInativo, setBtnInativo] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        const auxName = name;
        
        if(name === 'telefone') {
            value = value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3');
        }
        setFormData((old) => {
            return {...old, [auxName]: value}
        });
    }

    const enviaMensagem = useCallback(async() => {
        const teste = await API_UTIL.postNewContato(formData);
        if(teste.msg !== undefined && teste.msg.includes('OK')){
            ContactSucess();

            navigate('/');
        }else {
            ContactError();
        }
    }, []);

    const validaDados = () =>{
        const regexEmail = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

        if(!regexEmail.test(formData.email)) {
            setFormData((old) => {
                return {...old, email: ''}
            });
        } else {
            enviaMensagem();
        }
    }
    
    useEffect(() =>{
        const values = Object.values(formData);
        let count = 0;

        for (const iterator of values) {
            if (iterator) {
                count += 1;
            }
        }
        if (count === values.length) {
            setBtnInativo(false);
        }else {
            setBtnInativo(true);
        }
    },[formData])

    return (
        <Container>
            <div id="inputs">
                <label>
                    <span>SEU NOME (*)</span>
                    <input
                        type="text"
                        name="nome"
                        onChange={handleChange}
                        value={formData.nome}
                        placeholder='Digite aqui'
                    />
                </label>
                <label>
                    <span>E-MAIL (*)</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder='email@exemplo.com'
                    />
                </label>
                <label id='telefone'>
                    <span>TELEFONE (*)</span>
                    <input
                        type="tel"
                        name="telefone"
                        onChange={handleChange}
                        value={formData.telefone}
                        maxlength="15"
                        placeholder="(__) _____-____"
                    />
                </label>
                <label>
                    <span>ASSUNTO (*)</span>
                    <input
                        type="text"
                        name="assunto"
                        onChange={handleChange}
                        value={formData.assunto}
                        placeholder='Digite aqui'
                    />
                </label>
            </div>
            <div id="textarea">
                <label>
                    <span>MENSAGEM (*)</span>
                    <textarea
                        name="mensagem"
                        onChange={handleChange}
                        placeholder='Escreva aqui a sua mensagem'
                    >
                        {formData.mensagem}
                    </textarea>
                </label>
            </div>
            
            <div id='btn-submit'>
                <Button
                    type="button"
                    disabled={btnInativo}
                    onClick={validaDados}
                >
                    Enviar
                </Button>
            </div>
        </Container>
    );
}

export default FormContato;