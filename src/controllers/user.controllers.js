import { createUser, createAluno, createInstrutor, createPagamento, createFrequencia, createPlanoTreino, createAlunoPlanoTreino} from "../repositorys/user.repository";

export const createUserController = async (req, res) => {
    try {
        const usuario = await createUser(req.body);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createAlunoController = async (req, res) => {
    try {
        const aluno = await createAluno(req.body);
        res.status(200).json(aluno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createInstrutorController = async (req, res) => {
    try {
        const instrutor = await createInstrutor(req.body);
        res.status(200).json(instrutor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createPagamentoController = async (req, res) => {
    try {
        const pagamento = await createPagamento(req.body);
        res.status(200).json(pagamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createFrequenciaController = async (req, res) => {
    try {
        const frequencia = await createFrequencia(req.body);
        res.status(200).json(frequencia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createPlanoTreinoController = async (req, res) => {
    try {
        const planoTreino = await createPlanoTreino(req.body);
        res.status(200).json(planoTreino);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createAlunoPlanoTreinoController = async (req, res) => {
    try {
        const alunoPlanoTreino = await createAlunoPlanoTreino(req.body);
        res.status(200).json(alunoPlanoTreino);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};