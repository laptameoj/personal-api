const mainCtrl = require('./mainCtrl');

module.exports = app => {
  app.get( '/api/users', mainCtrl.getName );
  app.get( '/api/users', mainCtrl.getName );
  app.get( '/api/users', mainCtrl.getName );
  app.get( '/api/users', mainCtrl.getName );

}
