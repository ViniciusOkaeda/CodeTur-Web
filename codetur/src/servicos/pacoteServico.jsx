import http from '../utils/http-axios';

const listar = () => {
    return http.get('package', {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-codetur')}`
        }
    });
}

const cadastrar = dados => {
    return http.post('package', JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-codetur')}`
        }
    });
}

const alterar = dados => {
    return http.put(`package/${dados.id}`, JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-codetur')}`
        }
    });
}

const alterarStatus = dados => {
    return http.put(`package/${dados.id}/status`, JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-codetur')}`
        }
    });
}

const buscarPorId = id => {
    return http.get(`package/${id}`, {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-codetur')}`
        }
    });
}

export default {
    listar,
    cadastrar,
    buscarPorId,
    alterar,
    alterarStatus
}
