dmx.config({
  "areadocliente": {
    "repeat_inauguracao": {
      "meta": [
        {
          "type": "text",
          "name": "id_inauguracao"
        },
        {
          "type": "text",
          "name": "nome_loja"
        },
        {
          "type": "text",
          "name": "cidade"
        },
        {
          "type": "text",
          "name": "uf"
        },
        {
          "type": "text",
          "name": "endereco_completo"
        },
        {
          "type": "text",
          "name": "complemento"
        },
        {
          "type": "text",
          "name": "cep"
        },
        {
          "type": "text",
          "name": "cod_filial"
        },
        {
          "type": "datetime",
          "name": "data_inicio"
        },
        {
          "type": "datetime",
          "name": "data_fim"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "number",
          "name": "total_senhas"
        },
        {
          "type": "number",
          "name": "regional"
        },
        {
          "type": "text",
          "name": "bairro"
        },
        {
          "name": "produto",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "id_inaug_produto"
            },
            {
              "type": "datetime",
              "name": "created_at_inaug_produto"
            },
            {
              "type": "number",
              "name": "produto_inaug_id"
            },
            {
              "type": "number",
              "name": "inauguracao_id"
            },
            {
              "type": "number",
              "name": "unidades_disponiveis"
            },
            {
              "type": "number",
              "name": "limite_por_pessoa"
            },
            {
              "type": "number",
              "name": "quantidade_consumida"
            },
            {
              "type": "text",
              "name": "status"
            },
            {
              "type": "number",
              "name": "valor"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_inauguracao": {
      "meta": [
        {
          "type": "text",
          "name": "id_inauguracao"
        },
        {
          "type": "text",
          "name": "nome_loja"
        },
        {
          "type": "text",
          "name": "cidade"
        },
        {
          "type": "text",
          "name": "uf"
        },
        {
          "type": "text",
          "name": "endereco_completo"
        },
        {
          "type": "text",
          "name": "complemento"
        },
        {
          "type": "text",
          "name": "cep"
        },
        {
          "type": "text",
          "name": "cod_filial"
        },
        {
          "type": "datetime",
          "name": "data_inicio"
        },
        {
          "type": "datetime",
          "name": "data_fim"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "number",
          "name": "total_senhas"
        },
        {
          "type": "number",
          "name": "regional"
        },
        {
          "type": "text",
          "name": "bairro"
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "text",
          "name": "id_inaug_produto"
        },
        {
          "type": "number",
          "name": "produto_inaug_id"
        },
        {
          "type": "number",
          "name": "inauguracao_id"
        },
        {
          "type": "number",
          "name": "unidades_disponiveis"
        },
        {
          "type": "number",
          "name": "limite_por_pessoa"
        },
        {
          "type": "number",
          "name": "valor"
        },
        {
          "type": "number",
          "name": "quantidade_consumida"
        },
        {
          "type": "text",
          "name": "nome_produto"
        },
        {
          "type": "text",
          "name": "url_imagens"
        }
      ],
      "outputType": "array"
    }
  }
});
