(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PagedAlertUsers', '../model/Error', '../model/AlertUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PagedAlertUsers'), require('../model/Error'), require('../model/AlertUser'));
  } else {
    // Browser globals (root is window)
    if (!root.AlertingWebApi) {
      root.AlertingWebApi = {};
    }
    root.AlertingWebApi.UserApi = factory(root.AlertingWebApi.ApiClient, root.AlertingWebApi.PagedAlertUsers, root.AlertingWebApi.Error, root.AlertingWebApi.AlertUser);
  }
}(this, function(ApiClient, PagedAlertUsers, Error, AlertUser) {
  'use strict';

  var UserApi = function UserApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get Alert User
     * Gets &#39;AlertUser&#39; objects.\n##### Optional parameters\n`page`, `size`, `sort` allows paging over items
     * @param {Number}  page Paging number (current page number).
     * @param {Number}  size 
     * @param {String}  sort 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PagedAlertUsers
     */
    self.getAlertUsers = function(page, size, sort, callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
        'page': page,
        'size': size,
        'sort': sort
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PagedAlertUsers;

      return this.apiClient.callApi(
        '/alertuser', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Create Alert User
     * Create new Alert User object
     * @param {AlertUser}  alertUser 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AlertUser
     */
    self.createAlertUser = function(alertUser, callback) {
      var postBody = alertUser;
      
      // verify the required parameter 'alertUser' is set
      if (alertUser == null) {
        throw "Missing the required parameter 'alertUser' when calling createAlertUser";
      }
      

      
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
      var returnType = AlertUser;

      return this.apiClient.callApi(
        '/alertuser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Get Count of Alert Users
     * Get total count of Alert Users
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: 'Number'
     */
    self.getAlertUserCount = function(callback) {
      var postBody = null;
      

      
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
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/alertuser/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Get Alert User
     * Get single definition by Id
     * @param {String}  id 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AlertUser
     */
    self.getAlertUser = function(id, callback) {
      var postBody = null;
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling getAlertUser";
      }
      

      
      var pathParams = {
        'id': id
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
      var returnType = AlertUser;

      return this.apiClient.callApi(
        '/alertuser/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Update Alert User
     * Update single Alert User item
     * @param {String}  id 
     * @param {AlertUser}  alertUser 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AlertUser
     */
    self.updateAlertUser = function(id, alertUser, callback) {
      var postBody = alertUser;
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling updateAlertUser";
      }
      

      
      var pathParams = {
        'id': id
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
      var returnType = AlertUser;

      return this.apiClient.callApi(
        '/alertuser/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Delete Alert User
     * Delete single Alert User item
     * @param {String}  id 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: 'String'
     */
    self.deleteAlertUser = function(id, callback) {
      var postBody = null;
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling deleteAlertUser";
      }
      

      
      var pathParams = {
        'id': id
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/alertuser/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    
  };

  return UserApi;
}));
