
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Waib Tecnologias' })
};

exports.teste = function(req, res){
  res.render('teste', { title: 'Oi Finalmente Neh' });
};

exports.testes = function(req, res){
  res.render('testes', { title: 'Oi Finalmente' });
};