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
  
  
  var AlertUser = function AlertUser(name, groups) { 
    
    /**
     * datatype: String
     **/
    this['id'] = null;
    
    /**
     * Name of group Account
     * datatype: String
     * required
     **/
    this['name'] = name;
    
    /**
     * datatype: [String]
     * required
     **/
    this['groups'] = groups;
    
    /**
     * Email of the account
     * datatype: String
     **/
    this['email'] = null;
    
    /**
     * Account phone
     * datatype: String
     **/
    this['phone'] = null;
    
    /**
     * Twitter account username
     * datatype: String
     **/
    this['twitter'] = null;
    
    /**
     * Facebook account username
     * datatype: String
     **/
    this['facebook'] = null;
    
  };

  AlertUser.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new AlertUser();
    
    if (data['id']) {
      _this['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    
    if (data['name']) {
      _this['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    
    if (data['groups']) {
      _this['groups'] = ApiClient.convertToType(data['groups'], ['String']);
    }
    
    if (data['email']) {
      _this['email'] = ApiClient.convertToType(data['email'], 'String');
    }
    
    if (data['phone']) {
      _this['phone'] = ApiClient.convertToType(data['phone'], 'String');
    }
    
    if (data['twitter']) {
      _this['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
    }
    
    if (data['facebook']) {
      _this['facebook'] = ApiClient.convertToType(data['facebook'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  AlertUser.prototype.getId = function() {
    return this['id'];
  }

  /**
   * @param {String} id
   **/
  AlertUser.prototype.setId = function(id) {
    this['id'] = id;
  }
  
  /**
   * get Name of group Account
   * @return {String}
   **/
  AlertUser.prototype.getName = function() {
    return this['name'];
  }

  /**
   * set Name of group Account
   * @param {String} name
   **/
  AlertUser.prototype.setName = function(name) {
    this['name'] = name;
  }
  
  /**
   * @return {[String]}
   **/
  AlertUser.prototype.getGroups = function() {
    return this['groups'];
  }

  /**
   * @param {[String]} groups
   **/
  AlertUser.prototype.setGroups = function(groups) {
    this['groups'] = groups;
  }
  
  /**
   * get Email of the account
   * @return {String}
   **/
  AlertUser.prototype.getEmail = function() {
    return this['email'];
  }

  /**
   * set Email of the account
   * @param {String} email
   **/
  AlertUser.prototype.setEmail = function(email) {
    this['email'] = email;
  }
  
  /**
   * get Account phone
   * @return {String}
   **/
  AlertUser.prototype.getPhone = function() {
    return this['phone'];
  }

  /**
   * set Account phone
   * @param {String} phone
   **/
  AlertUser.prototype.setPhone = function(phone) {
    this['phone'] = phone;
  }
  
  /**
   * get Twitter account username
   * @return {String}
   **/
  AlertUser.prototype.getTwitter = function() {
    return this['twitter'];
  }

  /**
   * set Twitter account username
   * @param {String} twitter
   **/
  AlertUser.prototype.setTwitter = function(twitter) {
    this['twitter'] = twitter;
  }
  
  /**
   * get Facebook account username
   * @return {String}
   **/
  AlertUser.prototype.getFacebook = function() {
    return this['facebook'];
  }

  /**
   * set Facebook account username
   * @param {String} facebook
   **/
  AlertUser.prototype.setFacebook = function(facebook) {
    this['facebook'] = facebook;
  }
  
  

  AlertUser.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.AlertUser = AlertUser;
  }

  return AlertUser;
  
  
}));
