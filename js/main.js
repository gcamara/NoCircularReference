(function() {

 var app = angular.module('app', []);
 app.factory('logApi', ['fileManager', LogApi]);
 
 function LogApi(fileManager) {
 		var self = this;
    
    self.processLog = function(logs) {
    	var ret = fileManager.upload(logs).then(function(msg) {
       	 return { type: 'success', msg: msg };
      }, function(error) {
      	return { type: 'error', msg: error };
      });
 			return ret;
    }
    
    return self;
 }
 
 app.factory('fileManager', ['$q', FileManager]);
 
 function FileManager($q) {
 	var self = this;

  self.upload = function(dados) {
  	return $q(function(resolve, reject) {
  		if (dados) {
        dados && resolve
      	resolve('Uploaded successfully!');
      } else {
      	reject('Failed to upload =(');
      }
  });
  } 
  return self;
 }
 
  app.controller('MainController', ['logApi', MainController])
 
 function MainController(logApi) {
 		var self = this;
    self.logs = '';
    self.resultado = '';
    self.log = function() {
    	logApi.processLog(self.logs).then(function(value) { self.resultado = value });
    }
 }
})();