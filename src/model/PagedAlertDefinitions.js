(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './AlertDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./AlertDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.AlertingWebApi) {
      root.AlertingWebApi = {};
    }
    factory(root.AlertingWebApi, root.AlertingWebApi.ApiClient, root.AlertingWebApi.AlertDefinition);
  }
}(this, function(module, ApiClient, AlertDefinition) {
  'use strict';
  
  
  var PagedAlertDefinitions = function PagedAlertDefinitions() { 
    
    /**
     * datatype: [AlertDefinition]
     **/
    this['content'] = [];
    
    /**
     * is this last page
     * datatype: Boolean
     **/
    this['last'] = null;
    
    /**
     * datatype: Number
     **/
    this['totalPages'] = null;
    
    /**
     * datatype: Number
     **/
    this['totalElements'] = null;
    
    /**
     * datatype: String
     **/
    this['sort'] = null;
    
    /**
     * is this first page
     * datatype: Boolean
     **/
    this['first'] = null;
    
    /**
     * datatype: Number
     **/
    this['numberOfElements'] = null;
    
    /**
     * size per page
     * datatype: Number
     **/
    this['size'] = null;
    
    /**
     * page number
     * datatype: Number
     **/
    this['number'] = null;
    
  };

  PagedAlertDefinitions.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PagedAlertDefinitions();
    
    if (data['content']) {
      _this['content'] = ApiClient.convertToType(data['content'], [AlertDefinition]);
    }
    
    if (data['last']) {
      _this['last'] = ApiClient.convertToType(data['last'], 'Boolean');
    }
    
    if (data['totalPages']) {
      _this['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
    }
    
    if (data['totalElements']) {
      _this['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
    }
    
    if (data['sort']) {
      _this['sort'] = ApiClient.convertToType(data['sort'], 'String');
    }
    
    if (data['first']) {
      _this['first'] = ApiClient.convertToType(data['first'], 'Boolean');
    }
    
    if (data['numberOfElements']) {
      _this['numberOfElements'] = ApiClient.convertToType(data['numberOfElements'], 'Number');
    }
    
    if (data['size']) {
      _this['size'] = ApiClient.convertToType(data['size'], 'Number');
    }
    
    if (data['number']) {
      _this['number'] = ApiClient.convertToType(data['number'], 'Number');
    }
    
    return _this;
  }

  
  
  /**
   * @return {[AlertDefinition]}
   **/
  PagedAlertDefinitions.prototype.getContent = function() {
    return this['content'];
  }

  /**
   * @param {[AlertDefinition]} content
   **/
  PagedAlertDefinitions.prototype.setContent = function(content) {
    this['content'] = content;
  }
  
  /**
   * get is this last page
   * @return {Boolean}
   **/
  PagedAlertDefinitions.prototype.getLast = function() {
    return this['last'];
  }

  /**
   * set is this last page
   * @param {Boolean} last
   **/
  PagedAlertDefinitions.prototype.setLast = function(last) {
    this['last'] = last;
  }
  
  /**
   * @return {Number}
   **/
  PagedAlertDefinitions.prototype.getTotalPages = function() {
    return this['totalPages'];
  }

  /**
   * @param {Number} totalPages
   **/
  PagedAlertDefinitions.prototype.setTotalPages = function(totalPages) {
    this['totalPages'] = totalPages;
  }
  
  /**
   * @return {Number}
   **/
  PagedAlertDefinitions.prototype.getTotalElements = function() {
    return this['totalElements'];
  }

  /**
   * @param {Number} totalElements
   **/
  PagedAlertDefinitions.prototype.setTotalElements = function(totalElements) {
    this['totalElements'] = totalElements;
  }
  
  /**
   * @return {String}
   **/
  PagedAlertDefinitions.prototype.getSort = function() {
    return this['sort'];
  }

  /**
   * @param {String} sort
   **/
  PagedAlertDefinitions.prototype.setSort = function(sort) {
    this['sort'] = sort;
  }
  
  /**
   * get is this first page
   * @return {Boolean}
   **/
  PagedAlertDefinitions.prototype.getFirst = function() {
    return this['first'];
  }

  /**
   * set is this first page
   * @param {Boolean} first
   **/
  PagedAlertDefinitions.prototype.setFirst = function(first) {
    this['first'] = first;
  }
  
  /**
   * @return {Number}
   **/
  PagedAlertDefinitions.prototype.getNumberOfElements = function() {
    return this['numberOfElements'];
  }

  /**
   * @param {Number} numberOfElements
   **/
  PagedAlertDefinitions.prototype.setNumberOfElements = function(numberOfElements) {
    this['numberOfElements'] = numberOfElements;
  }
  
  /**
   * get size per page
   * @return {Number}
   **/
  PagedAlertDefinitions.prototype.getSize = function() {
    return this['size'];
  }

  /**
   * set size per page
   * @param {Number} size
   **/
  PagedAlertDefinitions.prototype.setSize = function(size) {
    this['size'] = size;
  }
  
  /**
   * get page number
   * @return {Number}
   **/
  PagedAlertDefinitions.prototype.getNumber = function() {
    return this['number'];
  }

  /**
   * set page number
   * @param {Number} number
   **/
  PagedAlertDefinitions.prototype.setNumber = function(number) {
    this['number'] = number;
  }
  
  

  PagedAlertDefinitions.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.PagedAlertDefinitions = PagedAlertDefinitions;
  }

  return PagedAlertDefinitions;
  
  
}));
