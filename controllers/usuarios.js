module.exports = function(app){

	var Usuario = app.models.usuarios;

	var UsuarioController = {
		index: function(req,res){
			Usuario.find(function(err, data){
				if (err){
					console.log(err);
				}
				res.render("usuarios/index", {lista: data});
			});
		},

		cadastro: function(req, res){

		},

		lista:function(req, res){
			Usuario.find(function(err, user){
				if(err){
					console.log('Erro ao buscar USuarios'+err);
				}else{
					res.json(user);
				}				
			});
		},

		create: function(req,res){
			res.render("usuarios/create");
		},

		insert: function(req,res){
			var model = new Usuario(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}
				//req.flash('info','Usuário cadastrado com sucesso!');
				res.redirect('/usuarios');
			});
		},

		edit: function(req,res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						res.render('usuarios/edit', {value: data});
				}
			});
		},

		update: function(req,res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						var model   = data;
						model.nome  = req.body.nome;
						model.login = req.body.login;
						model.save(function(err){
							if(err){
								console.log(err);
							}else{
								req.flash('info', 'Usuário atualizado com sucesso!');
							  res.redirect('/usuarios');
							}
						});
				}
			});
		},

		show: function(req,res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						res.render('usuarios/show', {value: data});
				}
			});
		},

		remove: function(req,res){
			Usuario.remove({_id: req.params.id}, function(err){
				if (err){
					console.log(err);
				}else{
					req.flash('info', 'Usuário excluído com sucesso!');
					res.redirect('/usuarios');
				}
			});
		}
	}

	return UsuarioController;
}