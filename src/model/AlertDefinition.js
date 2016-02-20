(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './AlertSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./AlertSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.AlertingWebApi) {
      root.AlertingWebApi = {};
    }
    factory(root.AlertingWebApi, root.AlertingWebApi.ApiClient, root.AlertingWebApi.AlertSchedule);
  }
}(this, function(module, ApiClient, AlertSchedule) {
  'use strict';
  
  
  var AlertDefinition = function AlertDefinition(name, topicName) { 
    
    /**
     * Unique id of the Alert definition created by the system
     * datatype: String
     **/
    this['id'] = null;
    
    /**
     * Name of the Alert definition
     * datatype: String
     * required
     **/
    this['name'] = name;
    
    /**
     * Description of the Alert definition
     * datatype: String
     **/
    this['description'] = null;
    
    /**
     * Name of the topic or namespace Alert Item to be sent and processed
     * datatype: String
     * required
     **/
    this['topicName'] = topicName;
    
    /**
     * datatype: [AlertSchedule]
     **/
    this['schedules'] = [];
    
  };

  AlertDefinition.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new AlertDefinition();
    
    if (data['id']) {
      _this['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    
    if (data['name']) {
      _this['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    
    if (data['description']) {
      _this['description'] = ApiClient.convertToType(data['description'], 'String');
    }
    
    if (data['topicName']) {
      _this['topicName'] = ApiClient.convertToType(data['topicName'], 'String');
    }
    
    if (data['schedules']) {
      _this['schedules'] = ApiClient.convertToType(data['schedules'], [AlertSchedule]);
    }
    
    return _this;
  }

  
  
  /**
   * get Unique id of the Alert definition created by the system
   * @return {String}
   **/
  AlertDefinition.prototype.getId = function() {
    return this['id'];
  }

  /**
   * set Unique id of the Alert definition created by the system
   * @param {String} id
   **/
  AlertDefinition.prototype.setId = function(id) {
    this['id'] = id;
  }
  
  /**
   * get Name of the Alert definition
   * @return {String}
   **/
  AlertDefinition.prototype.getName = function() {
    return this['name'];
  }

  /**
   * set Name of the Alert definition
   * @param {String} name
   **/
  AlertDefinition.prototype.setName = function(name) {
    this['name'] = name;
  }
  
  /**
   * get Description of the Alert definition
   * @return {String}
   **/
  AlertDefinition.prototype.getDescription = function() {
    return this['description'];
  }

  /**
   * set Description of the Alert definition
   * @param {String} description
   **/
  AlertDefinition.prototype.setDescription = function(description) {
    this['description'] = description;
  }
  
  /**
   * get Name of the topic or namespace Alert Item to be sent and processed
   * @return {String}
   **/
  AlertDefinition.prototype.getTopicName = function() {
    return this['topicName'];
  }

  /**
   * set Name of the topic or namespace Alert Item to be sent and processed
   * @param {String} topicName
   **/
  AlertDefinition.prototype.setTopicName = function(topicName) {
    this['topicName'] = topicName;
  }
  
  /**
   * @return {[AlertSchedule]}
   **/
  AlertDefinition.prototype.getSchedules = function() {
    return this['schedules'];
  }

  /**
   * @param {[AlertSchedule]} schedules
   **/
  AlertDefinition.prototype.setSchedules = function(schedules) {
    this['schedules'] = schedules;
  }
  
  

  AlertDefinition.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.AlertDefinition = AlertDefinition;
  }

  return AlertDefinition;
  
  
}));
