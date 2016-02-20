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
  
  
  var ExtendTokenDefinition = function ExtendTokenDefinition(appKey, appSecret) { 
    
    /**
     * datatype: String
     * required
     **/
    this['appKey'] = appKey;
    
    /**
     * datatype: String
     * required
     **/
    this['appSecret'] = appSecret;
    
  };

  ExtendTokenDefinition.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new ExtendTokenDefinition();
    
    if (data['appKey']) {
      _this['appKey'] = ApiClient.convertToType(data['appKey'], 'String');
    }
    
    if (data['appSecret']) {
      _this['appSecret'] = ApiClient.convertToType(data['appSecret'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  ExtendTokenDefinition.prototype.getAppKey = function() {
    return this['appKey'];
  }

  /**
   * @param {String} appKey
   **/
  ExtendTokenDefinition.prototype.setAppKey = function(appKey) {
    this['appKey'] = appKey;
  }
  
  /**
   * @return {String}
   **/
  ExtendTokenDefinition.prototype.getAppSecret = function() {
    return this['appSecret'];
  }

  /**
   * @param {String} appSecret
   **/
  ExtendTokenDefinition.prototype.setAppSecret = function(appSecret) {
    this['appSecret'] = appSecret;
  }
  
  

  ExtendTokenDefinition.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.ExtendTokenDefinition = ExtendTokenDefinition;
  }

  return ExtendTokenDefinition;
  
  
}));
