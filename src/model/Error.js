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
  
  
  var Error = function Error() { 
    
    /**
     * datatype: Date
     **/
    this['timestamp'] = null;
    
    /**
     * datatype: Integer
     **/
    this['status'] = null;
    
    /**
     * datatype: String
     **/
    this['message'] = null;
    
    /**
     * datatype: String
     **/
    this['error'] = null;
    
    /**
     * datatype: String
     **/
    this['exception'] = null;
    
    /**
     * datatype: String
     **/
    this['path'] = null;
    
    /**
     * datatype: String
     **/
    this['userMessage'] = null;
    
  };

  Error.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new Error();
    
    if (data['timestamp']) {
      _this['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
    }
    
    if (data['status']) {
      _this['status'] = ApiClient.convertToType(data['status'], 'Integer');
    }
    
    if (data['message']) {
      _this['message'] = ApiClient.convertToType(data['message'], 'String');
    }
    
    if (data['error']) {
      _this['error'] = ApiClient.convertToType(data['error'], 'String');
    }
    
    if (data['exception']) {
      _this['exception'] = ApiClient.convertToType(data['exception'], 'String');
    }
    
    if (data['path']) {
      _this['path'] = ApiClient.convertToType(data['path'], 'String');
    }
    
    if (data['userMessage']) {
      _this['userMessage'] = ApiClient.convertToType(data['userMessage'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {Date}
   **/
  Error.prototype.getTimestamp = function() {
    return this['timestamp'];
  }

  /**
   * @param {Date} timestamp
   **/
  Error.prototype.setTimestamp = function(timestamp) {
    this['timestamp'] = timestamp;
  }
  
  /**
   * @return {Integer}
   **/
  Error.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * @param {Integer} status
   **/
  Error.prototype.setStatus = function(status) {
    this['status'] = status;
  }
  
  /**
   * @return {String}
   **/
  Error.prototype.getMessage = function() {
    return this['message'];
  }

  /**
   * @param {String} message
   **/
  Error.prototype.setMessage = function(message) {
    this['message'] = message;
  }
  
  /**
   * @return {String}
   **/
  Error.prototype.getError = function() {
    return this['error'];
  }

  /**
   * @param {String} error
   **/
  Error.prototype.setError = function(error) {
    this['error'] = error;
  }
  
  /**
   * @return {String}
   **/
  Error.prototype.getException = function() {
    return this['exception'];
  }

  /**
   * @param {String} exception
   **/
  Error.prototype.setException = function(exception) {
    this['exception'] = exception;
  }
  
  /**
   * @return {String}
   **/
  Error.prototype.getPath = function() {
    return this['path'];
  }

  /**
   * @param {String} path
   **/
  Error.prototype.setPath = function(path) {
    this['path'] = path;
  }
  
  /**
   * @return {String}
   **/
  Error.prototype.getUserMessage = function() {
    return this['userMessage'];
  }

  /**
   * @param {String} userMessage
   **/
  Error.prototype.setUserMessage = function(userMessage) {
    this['userMessage'] = userMessage;
  }
  
  

  Error.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.Error = Error;
  }

  return Error;
  
  
}));
