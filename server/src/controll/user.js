export function createUser(req, res) {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({
        message: "Dados fora do padrão"
      });
    }

    // salvar dados ...
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
