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
  
  
  var NewAlertItem = function NewAlertItem(topicName) { 
    
    /**
     * Name of the topic to send Alert Item and run Alert Definition(s) defined for the topic
     * datatype: String
     * required
     **/
    this['topicName'] = topicName;
    
    /**
     * It will be used as title for the Alert Item. If not provided we'll try to resolve it from Payload field (if title, name or summary exists in payload)
     * datatype: String
     **/
    this['summary'] = null;
    
    /**
     * Target Date that will be used to calcuate schedule info. If Alert Definition contains
     * datatype: Date
     **/
    this['deadline'] = null;
    
    /**
     * Object payload contains any kind of data prepared by client that will be rendered against Template in message (subject and/or body).| Payload field can contain Alert Defintion to override existing, but there needs to be one Alert Definition defined for specified TopicName.
     * datatype: {String: Object}
     **/
    this['payload'] = {};
    
  };

  NewAlertItem.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new NewAlertItem();
    
    if (data['topicName']) {
      _this['topicName'] = ApiClient.convertToType(data['topicName'], 'String');
    }
    
    if (data['summary']) {
      _this['summary'] = ApiClient.convertToType(data['summary'], 'String');
    }
    
    if (data['deadline']) {
      _this['deadline'] = ApiClient.convertToType(data['deadline'], 'Date');
    }
    
    if (data['payload']) {
      _this['payload'] = ApiClient.convertToType(data['payload'], {'String': Object});
    }
    
    return _this;
  }

  
  
  /**
   * get Name of the topic to send Alert Item and run Alert Definition(s) defined for the topic
   * @return {String}
   **/
  NewAlertItem.prototype.getTopicName = function() {
    return this['topicName'];
  }

  /**
   * set Name of the topic to send Alert Item and run Alert Definition(s) defined for the topic
   * @param {String} topicName
   **/
  NewAlertItem.prototype.setTopicName = function(topicName) {
    this['topicName'] = topicName;
  }
  
  /**
   * get It will be used as title for the Alert Item. If not provided we'll try to resolve it from Payload field (if title, name or summary exists in payload)
   * @return {String}
   **/
  NewAlertItem.prototype.getSummary = function() {
    return this['summary'];
  }

  /**
   * set It will be used as title for the Alert Item. If not provided we'll try to resolve it from Payload field (if title, name or summary exists in payload)
   * @param {String} summary
   **/
  NewAlertItem.prototype.setSummary = function(summary) {
    this['summary'] = summary;
  }
  
  /**
   * get Target Date that will be used to calcuate schedule info. If Alert Definition contains
   * @return {Date}
   **/
  NewAlertItem.prototype.getDeadline = function() {
    return this['deadline'];
  }

  /**
   * set Target Date that will be used to calcuate schedule info. If Alert Definition contains
   * @param {Date} deadline
   **/
  NewAlertItem.prototype.setDeadline = function(deadline) {
    this['deadline'] = deadline;
  }
  
  /**
   * get Object payload contains any kind of data prepared by client that will be rendered against Template in message (subject and/or body).| Payload field can contain Alert Defintion to override existing, but there needs to be one Alert Definition defined for specified TopicName.
   * @return {{String: Object}}
   **/
  NewAlertItem.prototype.getPayload = function() {
    return this['payload'];
  }

  /**
   * set Object payload contains any kind of data prepared by client that will be rendered against Template in message (subject and/or body).| Payload field can contain Alert Defintion to override existing, but there needs to be one Alert Definition defined for specified TopicName.
   * @param {{String: Object}} payload
   **/
  NewAlertItem.prototype.setPayload = function(payload) {
    this['payload'] = payload;
  }
  
  

  NewAlertItem.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.NewAlertItem = NewAlertItem;
  }

  return NewAlertItem;
  
  
}));
