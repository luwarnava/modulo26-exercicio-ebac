function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 9.2 },
    { nome: "Pedro", nota: 7.8 },
    { nome: "Ana", nota: 6.9 },
    { nome: "Lucas", nota: 8.0 },
    { nome: "Carla", nota: 5.4 },
    { nome: "Rafaela", nota: 3.9 }
];

const aprovados = filtrarAprovados(alunos);
console.log(aprovados);
