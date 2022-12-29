import db from '../utils/sqlite3.js';
import { v4 as uuidv4 } from 'uuid';

export function createUser(req, res) {
  const { name, birth, genre, image, email, phone, rg, cpf, cns } = req.body;
  try {
    const error = 'name, birth, genre, image, email, phone, rg, cpf, cns'.split(', ')
    .find((item) => !req.body[item] );

    if (error) {
      return res.status(400).json({
        message: "Dados fora do padrão",
        error
      });
    }
    // salvar dados ...
    const id = uuidv4();
    const stmt = db.prepare(`INSERT INTO user VALUES (${Array(10).fill('?').join(',')})`);
    stmt.run(id, name, birth, genre, image, email, phone, rg, cpf, cns);
    stmt.finalize();

    return res.status(201).json({
      message: "Usuário cadastrado"
    });
  } catch (error) {
    res.status(500).json({
      message: "Falha interna"
    });
  }
}

export function showUser(req, res) {
  const { id } = req.params; // Parametro recebido pela URL (id do usuário)
  try {
    if (!id) {
      return res.status(400).json({
        message: "Dados fora do padrão"
      });
    }

    // pesquisar dados ...
    const dadosUsuario = {};
    return res.status(200).json({
      dadosUsuario
    });
  } catch (error) {
    res.status(500).json({
      message: "Falha interna"
    });
  }
}

export function editUser(req, res) {
  const { id } = req.params;
  const { username, password } = req.body;
  try {
    if (!id || !username || !password) {
      return res.status(400).json({
        message: "Dados fora do padrão"
      });
    }

    // editar dados ...
    return res.status(202).json({
      message: "Usuário editado"
    });
  } catch (error) {
    res.status(500).json({
      message: "Falha interna"
    });
  }
}

export function deleteUser(req, res) {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        message: "Id fora do padrão"
      });
    }

    // apagar usuario ...
    return res.status(202).json({
      message: "Usuário delete"
    });
  } catch (error) {
    res.status(500).json({
      message: "Falha interna"
    });
  }
}
