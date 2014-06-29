module.exports = function(app){
	var UsuarioController = {
		index: function(req, res){
			res.render("usuarios/index");
		}

	}
	return UsuarioController;
}