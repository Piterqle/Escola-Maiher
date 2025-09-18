const { insert, select } = require('../database')


const cadastro = async (req, res) => {
    console.log('Requisição de cadastro recebida:', req.body);
    try {
        const { nome, email, senha, data_nascimento }  = req.body;
        if (nome == '' || email == '' || senha == '' || data_nascimento == '') {
            return res.status(500).json({
                type: 'erro',
                messagem: "Campos Inválidos"
            })
        };
        const alreadyUser = await select('Pessoas', ['*'], 'WHERE email = ?', [email])
        if (alreadyUser.length > 0) {
            return res.status(200).json({
                type: 'error',
                messagem: 'Email já cadastrado'
            })
        }
        const newIdUser = await select('Pessoas', ['id'], 'ORDER BY id DESC LIMIT 1', [])
        await insert('Pessoas', ['nome', 'email', 'senha', 'data_nascimento', 'cargo'], [nome, email, senha, data_nascimento, true])
        res.status(200).json({
            type: 'sucess',
            messagem: "Cadastrado com Sucesso",
            id: newIdUser[0].id + 1
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            type: 'erro',
            messagem: "Erro no Servidor"
        })
    }
}

const login = async (req, res) => {
    try {
        const { matricula, senha } = req.body

        if (!matricula || !senha) {
            return res.status(500).json({
                type: 'erro',
                messagem: 'Preencha os campos'
            })
        }
        const User = await select('Pessoas', 'where id = ?', [matricula])
        if (User.length > 0) {
            return res.status(200).json({
                type: 'sucess',
                messagem: 'Bem-vindo',
                data: User[0]
            })
        }
        return res.status(404).json({
            type: 'erro',
            messagem: 'Usuário não Cadastrado'
        })
    } catch (error) {
        return res.status(500).json({ type: 'erro', messagem: 'Error no Servidor' })
    }
}

const auth = async (req, res) => {
    const { id } = req.body

    const userAuth = await select('Pessoas', 'WHERE id = ?', [parseInt(id)])

    if (userAuth.length > 0) {
        return res.status(200).json({
            type: 'sucess',
            nome: userAuth[0].nome,
            email: userAuth[0].email,
            data: userAuth[0].data_nascimento,
            cargo: userAuth[0].cargo,
        })
    }
    res.status(200).json({ type: 'erro' })
}


module.exports = {
    cadastro,
    login,
    auth
}