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
  
  
  var NewAlertUser = function NewAlertUser(name, groups) { 
    
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

  NewAlertUser.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new NewAlertUser();
    
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
   * get Name of group Account
   * @return {String}
   **/
  NewAlertUser.prototype.getName = function() {
    return this['name'];
  }

  /**
   * set Name of group Account
   * @param {String} name
   **/
  NewAlertUser.prototype.setName = function(name) {
    this['name'] = name;
  }
  
  /**
   * @return {[String]}
   **/
  NewAlertUser.prototype.getGroups = function() {
    return this['groups'];
  }

  /**
   * @param {[String]} groups
   **/
  NewAlertUser.prototype.setGroups = function(groups) {
    this['groups'] = groups;
  }
  
  /**
   * get Email of the account
   * @return {String}
   **/
  NewAlertUser.prototype.getEmail = function() {
    return this['email'];
  }

  /**
   * set Email of the account
   * @param {String} email
   **/
  NewAlertUser.prototype.setEmail = function(email) {
    this['email'] = email;
  }
  
  /**
   * get Account phone
   * @return {String}
   **/
  NewAlertUser.prototype.getPhone = function() {
    return this['phone'];
  }

  /**
   * set Account phone
   * @param {String} phone
   **/
  NewAlertUser.prototype.setPhone = function(phone) {
    this['phone'] = phone;
  }
  
  /**
   * get Twitter account username
   * @return {String}
   **/
  NewAlertUser.prototype.getTwitter = function() {
    return this['twitter'];
  }

  /**
   * set Twitter account username
   * @param {String} twitter
   **/
  NewAlertUser.prototype.setTwitter = function(twitter) {
    this['twitter'] = twitter;
  }
  
  /**
   * get Facebook account username
   * @return {String}
   **/
  NewAlertUser.prototype.getFacebook = function() {
    return this['facebook'];
  }

  /**
   * set Facebook account username
   * @param {String} facebook
   **/
  NewAlertUser.prototype.setFacebook = function(facebook) {
    this['facebook'] = facebook;
  }
  
  

  NewAlertUser.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.NewAlertUser = NewAlertUser;
  }

  return NewAlertUser;
  
  
}));
