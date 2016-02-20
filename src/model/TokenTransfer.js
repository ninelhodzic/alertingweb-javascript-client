(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlertingWebApi) {
      root.AlertingWebApi = {};
    }
    factory(root.AlertingWebApi, root.AlertingWebApi.ApiClient);
  }
}(this, function(module, ApiClient) {
  'use strict';
  
  
  var TokenTransfer = function TokenTransfer() { 
    
    /**
     * datatype: String
     **/
    this['token'] = null;
    
    /**
     * datatype: Date
     **/
    this['nextExpirationDate'] = null;
    
  };

  TokenTransfer.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new TokenTransfer();
    
    if (data['token']) {
      _this['token'] = ApiClient.convertToType(data['token'], 'String');
    }
    
    if (data['nextExpirationDate']) {
      _this['nextExpirationDate'] = ApiClient.convertToType(data['nextExpirationDate'], 'Date');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  TokenTransfer.prototype.getToken = function() {
    return this['token'];
  }

  /**
   * @param {String} token
   **/
  TokenTransfer.prototype.setToken = function(token) {
    this['token'] = token;
  }
  
  /**
   * @return {Date}
   **/
  TokenTransfer.prototype.getNextExpirationDate = function() {
    return this['nextExpirationDate'];
  }

  /**
   * @param {Date} nextExpirationDate
   **/
  TokenTransfer.prototype.setNextExpirationDate = function(nextExpirationDate) {
    this['nextExpirationDate'] = nextExpirationDate;
  }
  
  

  TokenTransfer.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.TokenTransfer = TokenTransfer;
  }

  return TokenTransfer;
  
  
}));
