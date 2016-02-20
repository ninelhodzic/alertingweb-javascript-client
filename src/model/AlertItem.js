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
  
  
  var AlertItem = function AlertItem(topicName) { 
    
    /**
     * datatype: String
     **/
    this['id'] = null;
    
    /**
     * Name of the topic to send Alert Item and run Alert Definition(s) defined for the topic
     * datatype: String
     * required
     **/
    this['topicName'] = topicName;
    
    /**
     * Each Alert Item request will have assigned stream Id that will uniquely identify the Alert Item
     * datatype: String
     **/
    this['alertStreamId'] = null;
    
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
    
    /**
     * Created when new item submitted
     * datatype: Date
     **/
    this['createdAt'] = null;
    
    /**
     * Handled by the system. No need to be provided
     * datatype: StatusEnum
     **/
    this['status'] = null;
    
    /**
     * Application id for reference - it is related to AppKey/AppSecret/appToken that is used during the execution and used additional Application configuration - No need to be provided - handled by the system
     * datatype: String
     **/
    this['applicationId'] = null;
    
  };

  AlertItem.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new AlertItem();
    
    if (data['id']) {
      _this['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    
    if (data['topicName']) {
      _this['topicName'] = ApiClient.convertToType(data['topicName'], 'String');
    }
    
    if (data['alertStreamId']) {
      _this['alertStreamId'] = ApiClient.convertToType(data['alertStreamId'], 'String');
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
    
    if (data['createdAt']) {
      _this['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
    }
    
    if (data['status']) {
      _this['status'] = ApiClient.convertToType(data['status'], 'String');
    }
    
    if (data['applicationId']) {
      _this['applicationId'] = ApiClient.convertToType(data['applicationId'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * @return {String}
   **/
  AlertItem.prototype.getId = function() {
    return this['id'];
  }

  /**
   * @param {String} id
   **/
  AlertItem.prototype.setId = function(id) {
    this['id'] = id;
  }
  
  /**
   * get Name of the topic to send Alert Item and run Alert Definition(s) defined for the topic
   * @return {String}
   **/
  AlertItem.prototype.getTopicName = function() {
    return this['topicName'];
  }

  /**
   * set Name of the topic to send Alert Item and run Alert Definition(s) defined for the topic
   * @param {String} topicName
   **/
  AlertItem.prototype.setTopicName = function(topicName) {
    this['topicName'] = topicName;
  }
  
  /**
   * get Each Alert Item request will have assigned stream Id that will uniquely identify the Alert Item
   * @return {String}
   **/
  AlertItem.prototype.getAlertStreamId = function() {
    return this['alertStreamId'];
  }

  /**
   * set Each Alert Item request will have assigned stream Id that will uniquely identify the Alert Item
   * @param {String} alertStreamId
   **/
  AlertItem.prototype.setAlertStreamId = function(alertStreamId) {
    this['alertStreamId'] = alertStreamId;
  }
  
  /**
   * get It will be used as title for the Alert Item. If not provided we'll try to resolve it from Payload field (if title, name or summary exists in payload)
   * @return {String}
   **/
  AlertItem.prototype.getSummary = function() {
    return this['summary'];
  }

  /**
   * set It will be used as title for the Alert Item. If not provided we'll try to resolve it from Payload field (if title, name or summary exists in payload)
   * @param {String} summary
   **/
  AlertItem.prototype.setSummary = function(summary) {
    this['summary'] = summary;
  }
  
  /**
   * get Target Date that will be used to calcuate schedule info. If Alert Definition contains
   * @return {Date}
   **/
  AlertItem.prototype.getDeadline = function() {
    return this['deadline'];
  }

  /**
   * set Target Date that will be used to calcuate schedule info. If Alert Definition contains
   * @param {Date} deadline
   **/
  AlertItem.prototype.setDeadline = function(deadline) {
    this['deadline'] = deadline;
  }
  
  /**
   * get Object payload contains any kind of data prepared by client that will be rendered against Template in message (subject and/or body).| Payload field can contain Alert Defintion to override existing, but there needs to be one Alert Definition defined for specified TopicName.
   * @return {{String: Object}}
   **/
  AlertItem.prototype.getPayload = function() {
    return this['payload'];
  }

  /**
   * set Object payload contains any kind of data prepared by client that will be rendered against Template in message (subject and/or body).| Payload field can contain Alert Defintion to override existing, but there needs to be one Alert Definition defined for specified TopicName.
   * @param {{String: Object}} payload
   **/
  AlertItem.prototype.setPayload = function(payload) {
    this['payload'] = payload;
  }
  
  /**
   * get Created when new item submitted
   * @return {Date}
   **/
  AlertItem.prototype.getCreatedAt = function() {
    return this['createdAt'];
  }

  /**
   * set Created when new item submitted
   * @param {Date} createdAt
   **/
  AlertItem.prototype.setCreatedAt = function(createdAt) {
    this['createdAt'] = createdAt;
  }
  
  /**
   * get Handled by the system. No need to be provided
   * @return {StatusEnum}
   **/
  AlertItem.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * set Handled by the system. No need to be provided
   * @param {StatusEnum} status
   **/
  AlertItem.prototype.setStatus = function(status) {
    this['status'] = status;
  }
  
  /**
   * get Application id for reference - it is related to AppKey/AppSecret/appToken that is used during the execution and used additional Application configuration - No need to be provided - handled by the system
   * @return {String}
   **/
  AlertItem.prototype.getApplicationId = function() {
    return this['applicationId'];
  }

  /**
   * set Application id for reference - it is related to AppKey/AppSecret/appToken that is used during the execution and used additional Application configuration - No need to be provided - handled by the system
   * @param {String} applicationId
   **/
  AlertItem.prototype.setApplicationId = function(applicationId) {
    this['applicationId'] = applicationId;
  }
  
  

  AlertItem.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  var StatusEnum = {

	  /**
	   * @const
	   */
	  NEW: "NEW",
	  
	  /**
	   * @const
	   */
	  WIP: "WIP",
	  
	  /**
	   * @const
	   */
	  SCHEDULED: "SCHEDULED",
	  
	  /**
	   * @const
	   */
	  SEND_TO_EXECUTION: "SEND_TO_EXECUTION",
	  
	  /**
	   * @const
	   */
	  ERROR: "ERROR",
	  
	  /**
	   * @const
	   */
	  COMPLETED: "COMPLETED"
  };

  AlertItem.StatusEnum = StatusEnum;


  if (module) {
    module.AlertItem = AlertItem;
  }

  return AlertItem;
  
  
}));
