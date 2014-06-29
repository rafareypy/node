module.exports = function(app){
	var usuarios = app.controllers.usuarios;
	app.get("/usuarios", usuarios.index);
}