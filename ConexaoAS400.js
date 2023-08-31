const config = {
    host: host-database,
    user: 'user-database',
    password: 'password-database',
  };
  
  // instalar lib abaixo
  // npm i node-jt400

  // Criando uma pool de conexões com o banco de dados
  const dbPool = require('node-jt400').pool(config);
  
  // Função para executar a consulta
  function executarConsulta() {
    // Consulta SQL
    const sqlQuery = "select current date from sysibm.sysdummy1";
    //const params = [3074];
  
    // Executando a consulta usando a pool de conexões
    dbPool
      .query(sqlQuery/*, params*/)
      .then(result => {
        console.log('Resultado da consulta:');
        console.log(result);
  
        /*/ Extraindo os valores do resultado
        if (result.length > 0) {
          const field1 = result[0].FIELD1;
          console.log('Valor do field1:', field1);
        }*/

        
      dbPool.close();
      })
      .catch(error => {
        console.error('Erro ao executar a consulta:');
        console.error(error);
      });
  }
  
  // Chamando a função para executar a consulta
  executarConsulta();
  
