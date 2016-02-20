(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './SendMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./SendMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.AlertingWebApi) {
      root.AlertingWebApi = {};
    }
    factory(root.AlertingWebApi, root.AlertingWebApi.ApiClient, root.AlertingWebApi.SendMetadata);
  }
}(this, function(module, ApiClient, SendMetadata) {
  'use strict';
  
  
  var AlertSchedule = function AlertSchedule(alertSubjectTemplate) { 
    
    /**
     * Type of Schedule - could be 'after' or 'before'
     * datatype: ScheduleTypeEnum
     **/
    this['scheduleType'] = null;
    
    /**
     * Value in seconds related to 'Schedule Type' - '0' means to run imediatelly
     * datatype: Number
     **/
    this['scheduleTypeValue'] = null;
    
    /**
     * If defined this fieldName will be used for scheduling (as Target date). It should be provided within Payload in AlertItem. Default value is \"deadline\" that should be provided with Alert Item
     * datatype: String
     **/
    this['scheduleTypeField'] = null;
    
    /**
     * Template of the subject message. In case od EMAIL protocol it will be used as email subject, for SMS it will be used as message. Value will be rendered using defined Template engine and provided Alert Item values
     * datatype: String
     * required
     **/
    this['alertSubjectTemplate'] = alertSubjectTemplate;
    
    /**
     * Template of the message body. It will not be used in SMS messages. Value will be rendered using defined Template engine and provided Alert Item values
     * datatype: String
     **/
    this['alertBodyTemplate'] = null;
    
    /**
     * datatype: AlertTemplateEngineEnum
     **/
    this['alertTemplateEngine'] = null;
    
    /**
     * datatype: [SendMetadata]
     **/
    this['sendTo'] = [];
    
  };

  AlertSchedule.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new AlertSchedule();
    
    if (data['scheduleType']) {
      _this['scheduleType'] = ApiClient.convertToType(data['scheduleType'], 'String');
    }
    
    if (data['scheduleTypeValue']) {
      _this['scheduleTypeValue'] = ApiClient.convertToType(data['scheduleTypeValue'], 'Number');
    }
    
    if (data['scheduleTypeField']) {
      _this['scheduleTypeField'] = ApiClient.convertToType(data['scheduleTypeField'], 'String');
    }
    
    if (data['alertSubjectTemplate']) {
      _this['alertSubjectTemplate'] = ApiClient.convertToType(data['alertSubjectTemplate'], 'String');
    }
    
    if (data['alertBodyTemplate']) {
      _this['alertBodyTemplate'] = ApiClient.convertToType(data['alertBodyTemplate'], 'String');
    }
    
    if (data['alertTemplateEngine']) {
      _this['alertTemplateEngine'] = ApiClient.convertToType(data['alertTemplateEngine'], 'String');
    }
    
    if (data['sendTo']) {
      _this['sendTo'] = ApiClient.convertToType(data['sendTo'], [SendMetadata]);
    }
    
    return _this;
  }

  
  
  /**
   * get Type of Schedule - could be 'after' or 'before'
   * @return {ScheduleTypeEnum}
   **/
  AlertSchedule.prototype.getScheduleType = function() {
    return this['scheduleType'];
  }

  /**
   * set Type of Schedule - could be 'after' or 'before'
   * @param {ScheduleTypeEnum} scheduleType
   **/
  AlertSchedule.prototype.setScheduleType = function(scheduleType) {
    this['scheduleType'] = scheduleType;
  }
  
  /**
   * get Value in seconds related to 'Schedule Type' - '0' means to run imediatelly
   * @return {Number}
   **/
  AlertSchedule.prototype.getScheduleTypeValue = function() {
    return this['scheduleTypeValue'];
  }

  /**
   * set Value in seconds related to 'Schedule Type' - '0' means to run imediatelly
   * @param {Number} scheduleTypeValue
   **/
  AlertSchedule.prototype.setScheduleTypeValue = function(scheduleTypeValue) {
    this['scheduleTypeValue'] = scheduleTypeValue;
  }
  
  /**
   * get If defined this fieldName will be used for scheduling (as Target date). It should be provided within Payload in AlertItem. Default value is \"deadline\" that should be provided with Alert Item
   * @return {String}
   **/
  AlertSchedule.prototype.getScheduleTypeField = function() {
    return this['scheduleTypeField'];
  }

  /**
   * set If defined this fieldName will be used for scheduling (as Target date). It should be provided within Payload in AlertItem. Default value is \"deadline\" that should be provided with Alert Item
   * @param {String} scheduleTypeField
   **/
  AlertSchedule.prototype.setScheduleTypeField = function(scheduleTypeField) {
    this['scheduleTypeField'] = scheduleTypeField;
  }
  
  /**
   * get Template of the subject message. In case od EMAIL protocol it will be used as email subject, for SMS it will be used as message. Value will be rendered using defined Template engine and provided Alert Item values
   * @return {String}
   **/
  AlertSchedule.prototype.getAlertSubjectTemplate = function() {
    return this['alertSubjectTemplate'];
  }

  /**
   * set Template of the subject message. In case od EMAIL protocol it will be used as email subject, for SMS it will be used as message. Value will be rendered using defined Template engine and provided Alert Item values
   * @param {String} alertSubjectTemplate
   **/
  AlertSchedule.prototype.setAlertSubjectTemplate = function(alertSubjectTemplate) {
    this['alertSubjectTemplate'] = alertSubjectTemplate;
  }
  
  /**
   * get Template of the message body. It will not be used in SMS messages. Value will be rendered using defined Template engine and provided Alert Item values
   * @return {String}
   **/
  AlertSchedule.prototype.getAlertBodyTemplate = function() {
    return this['alertBodyTemplate'];
  }

  /**
   * set Template of the message body. It will not be used in SMS messages. Value will be rendered using defined Template engine and provided Alert Item values
   * @param {String} alertBodyTemplate
   **/
  AlertSchedule.prototype.setAlertBodyTemplate = function(alertBodyTemplate) {
    this['alertBodyTemplate'] = alertBodyTemplate;
  }
  
  /**
   * @return {AlertTemplateEngineEnum}
   **/
  AlertSchedule.prototype.getAlertTemplateEngine = function() {
    return this['alertTemplateEngine'];
  }

  /**
   * @param {AlertTemplateEngineEnum} alertTemplateEngine
   **/
  AlertSchedule.prototype.setAlertTemplateEngine = function(alertTemplateEngine) {
    this['alertTemplateEngine'] = alertTemplateEngine;
  }
  
  /**
   * @return {[SendMetadata]}
   **/
  AlertSchedule.prototype.getSendTo = function() {
    return this['sendTo'];
  }

  /**
   * @param {[SendMetadata]} sendTo
   **/
  AlertSchedule.prototype.setSendTo = function(sendTo) {
    this['sendTo'] = sendTo;
  }
  
  

  AlertSchedule.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  var ScheduleTypeEnum = {

	  /**
	   * @const
	   */
	  BEFORE: "BEFORE",
	  
	  /**
	   * @const
	   */
	  AFTER: "AFTER"
  };

  AlertSchedule.ScheduleTypeEnum = ScheduleTypeEnum;
var AlertTemplateEngineEnum = {

	  /**
	   * @const
	   */
	  HANDLERBARS: "HANDLERBARS"
  };

  AlertSchedule.AlertTemplateEngineEnum = AlertTemplateEngineEnum;


  if (module) {
    module.AlertSchedule = AlertSchedule;
  }

  return AlertSchedule;
  
  
}));
