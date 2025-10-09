exports.login = async (req, res) =>{
    // recebe email e senha do Front
    const {email, password} = req.body;

    return res.status(200).json({
    message: 'Login recebido com Sucesso:'
})
}
exports.forgotPassword = async(req, res)=>{
    //logica de recuperação de senha
    return res.status(501).send('Funcionalidade ainda n implementada')
}

