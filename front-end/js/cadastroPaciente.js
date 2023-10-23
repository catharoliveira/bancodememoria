const cadastrarPaciente = document.getElementById('cadastro_pac')

let formData = new FormData();

cadastrarPaciente.addEventListener('submit', event => {
        event.preventDefault()
        let formData = new FormData(cadastrarPaciente)
        const data = Object.fromEntries(formData)

  

        var id = "id" + Math.random().toString(16).slice(2)
        var mysql = require('mysql');

        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "1997",
          database: "todolist"
        });
        
        con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          var sql = "INSERT INTO paciente (codigo_pac, nome_pac, data_nasc_pac, cpf_pac, email_pac, celular_pac, endereco_pac, sexo_pac) VALUES ('"+ id +"','"+data.nome_pac+"','"+data_nasc_pac+"','"+data.cpf_pac +"','"+data.email_pac+"','"+data.celular_pac+"','"+data.endereco+"','"+data.sexo_pac +"')";
          con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
        });

    })
