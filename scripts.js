// Lista de estudantes
studentList = [
  {
    name: "Renato",
    firstTestGrade: 9,
    secundTestGrade:9.5,
  },
  {
    name: "Renata",
    firstTestGrade: 5,
    secundTestGrade:4.5,
  },
  {
    name: "Gustavo",
    firstTestGrade: 7.5,
    secundTestGrade:6.5,
  },
  {
    name: "Leonardo",
    firstTestGrade: 6.5,
    secundTestGrade:7,
  },
]

// Função para mostrar se o aluno passou e retornar a mensagem correta 
function printStudent (studentGrade) {
let avarege = ((studentGrade.firstTestGrade + studentGrade.secundTestGrade) / 2).toFixed(1) // Variável que mostra o valor da média do aluno
if (avarege < 7) { //Se média menor que 7 retornar mensagem de reprovado
  return`
A média do(a) aluno(a) ${studentGrade.name} é de: ${avarege}
Não foi dessa vez, ${studentGrade.name}! Tente navamente!`
} else { // Se falso que média menor que 7, retornar mensagem de aprovado
  return `
  A média do(a) aluno(a) ${studentGrade.name} é de: ${avarege}
  Parabéns, ${studentGrade.name}! Você foi aprovado(a) no concurso!`
}
}

// for of para imprimir em tela a informação de cada estudante
for (let student of studentList) {
  let studentMessege = printStudent(student)
  alert(studentMessege)
}