(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './AlertItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./AlertItem'));
  } else {
    // Browser globals (root is window)
    if (!root.AlertingWebApi) {
      root.AlertingWebApi = {};
    }
    factory(root.AlertingWebApi, root.AlertingWebApi.ApiClient, root.AlertingWebApi.AlertItem);
  }
}(this, function(module, ApiClient, AlertItem) {
  'use strict';
  
  
  var PagedAlertItems = function PagedAlertItems() { 
    
    /**
     * datatype: [AlertItem]
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

  PagedAlertItems.constructFromObject = function(data) {
    if (!data) {
      return null;
    }
    var _this = new PagedAlertItems();
    
    if (data['content']) {
      _this['content'] = ApiClient.convertToType(data['content'], [AlertItem]);
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
   * @return {[AlertItem]}
   **/
  PagedAlertItems.prototype.getContent = function() {
    return this['content'];
  }

  /**
   * @param {[AlertItem]} content
   **/
  PagedAlertItems.prototype.setContent = function(content) {
    this['content'] = content;
  }
  
  /**
   * get is this last page
   * @return {Boolean}
   **/
  PagedAlertItems.prototype.getLast = function() {
    return this['last'];
  }

  /**
   * set is this last page
   * @param {Boolean} last
   **/
  PagedAlertItems.prototype.setLast = function(last) {
    this['last'] = last;
  }
  
  /**
   * @return {Number}
   **/
  PagedAlertItems.prototype.getTotalPages = function() {
    return this['totalPages'];
  }

  /**
   * @param {Number} totalPages
   **/
  PagedAlertItems.prototype.setTotalPages = function(totalPages) {
    this['totalPages'] = totalPages;
  }
  
  /**
   * @return {Number}
   **/
  PagedAlertItems.prototype.getTotalElements = function() {
    return this['totalElements'];
  }

  /**
   * @param {Number} totalElements
   **/
  PagedAlertItems.prototype.setTotalElements = function(totalElements) {
    this['totalElements'] = totalElements;
  }
  
  /**
   * @return {String}
   **/
  PagedAlertItems.prototype.getSort = function() {
    return this['sort'];
  }

  /**
   * @param {String} sort
   **/
  PagedAlertItems.prototype.setSort = function(sort) {
    this['sort'] = sort;
  }
  
  /**
   * get is this first page
   * @return {Boolean}
   **/
  PagedAlertItems.prototype.getFirst = function() {
    return this['first'];
  }

  /**
   * set is this first page
   * @param {Boolean} first
   **/
  PagedAlertItems.prototype.setFirst = function(first) {
    this['first'] = first;
  }
  
  /**
   * @return {Number}
   **/
  PagedAlertItems.prototype.getNumberOfElements = function() {
    return this['numberOfElements'];
  }

  /**
   * @param {Number} numberOfElements
   **/
  PagedAlertItems.prototype.setNumberOfElements = function(numberOfElements) {
    this['numberOfElements'] = numberOfElements;
  }
  
  /**
   * get size per page
   * @return {Number}
   **/
  PagedAlertItems.prototype.getSize = function() {
    return this['size'];
  }

  /**
   * set size per page
   * @param {Number} size
   **/
  PagedAlertItems.prototype.setSize = function(size) {
    this['size'] = size;
  }
  
  /**
   * get page number
   * @return {Number}
   **/
  PagedAlertItems.prototype.getNumber = function() {
    return this['number'];
  }

  /**
   * set page number
   * @param {Number} number
   **/
  PagedAlertItems.prototype.setNumber = function(number) {
    this['number'] = number;
  }
  
  

  PagedAlertItems.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  

  if (module) {
    module.PagedAlertItems = PagedAlertItems;
  }

  return PagedAlertItems;
  
  
}));
