const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];


function alunosAprov(arr, media) {
    aprovados = []

    for (let i = 0; i < arr.length; i++) {
        
        let {nota, nome} = arr[i]

        if(nota >= media) {
            aprovados.push(nome)
        }
        
    }
    return aprovados
}


console.log(alunosAprov(alunos, 6))