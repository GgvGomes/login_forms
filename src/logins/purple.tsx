import { Form } from "../form/from";

import '../styles/purple.scss'

export function Purple(){
    return(
        <Form 
            className="purple"
            user={{
                label: 'Email',
                inverted: true,
                // placeholder:'Email'
            }}
            password={{
                label: 'Senha',
                inverted: true,
                // placeholder:'Senha'
            }}
            title="Administrativo"
        />
    )
}