const ComFilho = ({mensagem, enviarMensagemParaOPai}) => {
    
    //let {mensagem} = props

    return (
        <>
            <h2>Mensagem do pai: {mensagem}</h2>
            <button
                onClick={
                    () => {
                        enviarMensagemParaOPai("Rabela baitola!")
                    }
                }
            >
                Enviar mensagem para o pai!
            </button>
        </>
    )
}

export default ComFilho