(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ExtendTokenDefinition', '../model/Error', '../model/TokenTransfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExtendTokenDefinition'), require('../model/Error'), require('../model/TokenTransfer'));
  } else {
    // Browser globals (root is window)
    if (!root.AlertingWebApi) {
      root.AlertingWebApi = {};
    }
    root.AlertingWebApi.ApplicationApi = factory(root.AlertingWebApi.ApiClient, root.AlertingWebApi.ExtendTokenDefinition, root.AlertingWebApi.Error, root.AlertingWebApi.TokenTransfer);
  }
}(this, function(ApiClient, ExtendTokenDefinition, Error, TokenTransfer) {
  'use strict';

  var ApplicationApi = function ApplicationApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Extend API call token
     * Extend API call token by providing AppKey and AppSecret. User should create new Application via GUI and use AppSecret and AppKey to extend token. Each call to extend token will extend it for 24 hours. It is possible to get longer Token by generating via GUI
     * @param {ExtendTokenDefinition}  appDefinition 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: TokenTransfer
     */
    self.extendToken = function(appDefinition, callback) {
      var postBody = appDefinition;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TokenTransfer;

      return this.apiClient.callApi(
        '/token/extend/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    
  };

  return ApplicationApi;
}));
