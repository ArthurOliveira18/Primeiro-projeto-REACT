const TemplateExpressions = () =>{
    
    let nome = "Meu nome"
    let aluno = {
        nome : "Pedrinho do grau",
        turma : "d",
        ano: "3"
    }

    return(
        <div>
            <h1>Olá {nome} </h1>
            <h2>O aluno {aluno.nome} está no {aluno.ano}°, na turma {aluno.turma}</h2>
        </div>
    )

    
}

export default TemplateExpressions