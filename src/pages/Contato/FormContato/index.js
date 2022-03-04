import { useEffect, useState } from "react";
import { Button, Container } from "./style";

const FormContato = () => {
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

    const validaDados = () =>{
        const regexEmail = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

        if(!regexEmail.test(formData.email)) {
            setFormData((old) => {
                return {...old, email: ''}
            });
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
                    />
                </label>
                <label>
                    <span>E-MAIL (*)</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </label>
                <label>
                    <span>TELEFONE (*)</span>
                    <input
                        type="tel"
                        name="telefone"
                        onChange={handleChange}
                        value={formData.telefone}
                        maxlength="15"
                        placeholder="(99) 99999-9999"
                    />
                </label>
                <label>
                    <span>ASSUNTO (*)</span>
                    <input
                        type="text"
                        name="assunto"
                        onChange={handleChange}
                        value={formData.assunto}
                    />
                </label>
            </div>
            <div id="textarea">
                <label>
                    <span>MENSAGEM (*)</span>
                    <textarea
                        name="mensagem"
                        onChange={handleChange}
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