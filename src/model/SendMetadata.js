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
  
  
  var SendMetadata = function SendMetadata(receiverValue) { 
    
    /**
     * Type of receiver such as Emails, Phones, Group, ExternalAPI
     * datatype: ReceiverTypeEnum
     **/
    this['receiverType'] = null;
    
    /**
     * Value of receivers such as comma separated list of emails, sms numbers, groups, externalApi url
     * datatype: String
     * required
     **/
    this['receiverValue'] = receiverValue;
    
    /**
     * Used with EMAIL protocol
     * datatype: String
     **/
    this['receiverCcValue'] = null;
    
    /**
     * Used with EMAIL protocol
     * datatype: String
     **/
    this['receiverBccValue'] = null;
    
    /**
     * Protocol of sending - related to receiver Type. Can be email, sms, externalApi
     * datatype: AlertProtocolEnum
     **/
    this['alertProtocol'] = null;
    
  };

  SendMetadata.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new SendMetadata();
    
    if (data['receiverType']) {
      _this['receiverType'] = ApiClient.convertToType(data['receiverType'], 'String');
    }
    
    if (data['receiverValue']) {
      _this['receiverValue'] = ApiClient.convertToType(data['receiverValue'], 'String');
    }
    
    if (data['receiverCcValue']) {
      _this['receiverCcValue'] = ApiClient.convertToType(data['receiverCcValue'], 'String');
    }
    
    if (data['receiverBccValue']) {
      _this['receiverBccValue'] = ApiClient.convertToType(data['receiverBccValue'], 'String');
    }
    
    if (data['alertProtocol']) {
      _this['alertProtocol'] = ApiClient.convertToType(data['alertProtocol'], 'String');
    }
    
    return _this;
  }

  
  
  /**
   * get Type of receiver such as Emails, Phones, Group, ExternalAPI
   * @return {ReceiverTypeEnum}
   **/
  SendMetadata.prototype.getReceiverType = function() {
    return this['receiverType'];
  }

  /**
   * set Type of receiver such as Emails, Phones, Group, ExternalAPI
   * @param {ReceiverTypeEnum} receiverType
   **/
  SendMetadata.prototype.setReceiverType = function(receiverType) {
    this['receiverType'] = receiverType;
  }
  
  /**
   * get Value of receivers such as comma separated list of emails, sms numbers, groups, externalApi url
   * @return {String}
   **/
  SendMetadata.prototype.getReceiverValue = function() {
    return this['receiverValue'];
  }

  /**
   * set Value of receivers such as comma separated list of emails, sms numbers, groups, externalApi url
   * @param {String} receiverValue
   **/
  SendMetadata.prototype.setReceiverValue = function(receiverValue) {
    this['receiverValue'] = receiverValue;
  }
  
  /**
   * get Used with EMAIL protocol
   * @return {String}
   **/
  SendMetadata.prototype.getReceiverCcValue = function() {
    return this['receiverCcValue'];
  }

  /**
   * set Used with EMAIL protocol
   * @param {String} receiverCcValue
   **/
  SendMetadata.prototype.setReceiverCcValue = function(receiverCcValue) {
    this['receiverCcValue'] = receiverCcValue;
  }
  
  /**
   * get Used with EMAIL protocol
   * @return {String}
   **/
  SendMetadata.prototype.getReceiverBccValue = function() {
    return this['receiverBccValue'];
  }

  /**
   * set Used with EMAIL protocol
   * @param {String} receiverBccValue
   **/
  SendMetadata.prototype.setReceiverBccValue = function(receiverBccValue) {
    this['receiverBccValue'] = receiverBccValue;
  }
  
  /**
   * get Protocol of sending - related to receiver Type. Can be email, sms, externalApi
   * @return {AlertProtocolEnum}
   **/
  SendMetadata.prototype.getAlertProtocol = function() {
    return this['alertProtocol'];
  }

  /**
   * set Protocol of sending - related to receiver Type. Can be email, sms, externalApi
   * @param {AlertProtocolEnum} alertProtocol
   **/
  SendMetadata.prototype.setAlertProtocol = function(alertProtocol) {
    this['alertProtocol'] = alertProtocol;
  }
  
  

  SendMetadata.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  var ReceiverTypeEnum = {

	  /**
	   * @const
	   */
	  EMAILS: "EMAILS",
	  
	  /**
	   * @const
	   */
	  PHONES: "PHONES",
	  
	  /**
	   * @const
	   */
	  GROUP: "GROUP",
	  
	  /**
	   * @const
	   */
	  EXTERNAL: "EXTERNAL"
  };

  SendMetadata.ReceiverTypeEnum = ReceiverTypeEnum;
var AlertProtocolEnum = {

	  /**
	   * @const
	   */
	  EMAIL: "EMAIL",
	  
	  /**
	   * @const
	   */
	  SMS: "SMS",
	  
	  /**
	   * @const
	   */
	  EXTERNAL: "EXTERNAL"
  };

  SendMetadata.AlertProtocolEnum = AlertProtocolEnum;


  if (module) {
    module.SendMetadata = SendMetadata;
  }

  return SendMetadata;
  
  
}));
