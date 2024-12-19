import { prisma } from "../services/prisma";

// Criação de um Usuário
export const createUser = async (data) => {
    const usuario = await prisma.usuario.create({
        data: {
            nome: data.nome, 
            email: data.email, 
            senha: data.senha, 
            tipo: data.tipo,
        }
    });
    return usuario;
};

// Criação de um Aluno
export const createAluno = async (data) => {
    const aluno = await prisma.aluno.create({
        data: {
            usuarioId: data.usuarioId, 
            objetivos: data.objetivos, 
            idade: data.idade,         
            planoAtual: data.planoAtual 
        }
    });
    return aluno;
};

export const createInstrutor = async (data) => {
    const instrutor = await prisma.instrutor.create({
        data: {
            usuarioId: data.usuarioId, 
            especialidade: data.especialidade,
        }
    });
    return instrutor;
};

// Criação de um Pagamento
export const createPagamento = async (data) => {
    const pagamento = await prisma.pagamento.create({
        data: {
            alunoId: data.alunoId,       // ID do aluno
            valor: data.valor,           // Valor do pagamento
            dataPagamento: data.dataPagamento // Data do pagamento
        }
    });
    return pagamento;
};

// Criação de uma Frequência
export const createFrequencia = async (data) => {
    const frequencia = await prisma.frequencia.create({
        data: {
            alunoId: data.alunoId,         // ID do aluno
            dataPresenca: data.dataPresenca // Data de presença
        }
    });
    return frequencia;
};

// Criação de um Plano de Treino
export const createPlanoTreino = async (data) => {
    const planoTreino = await prisma.planoTreino.create({
        data: {
            nome: data.nome,             // Nome do plano de treino
            descricao: data.descricao,   // Descrição do plano
            dataCriacao: data.dataCriacao // Data de criação do plano
        }
    });
    return planoTreino;
};

// Relacionamento entre Aluno e PlanoTreino
export const createAlunoPlanoTreino = async (data) => {
    const alunoPlanoTreino = await prisma.alunoPlanoTreino.create({
        data: {
            alunoId: data.alunoId,       // ID do aluno
            planoTreinoId: data.planoTreinoId // ID do plano de treino
        }
    });
    return alunoPlanoTreino;
};