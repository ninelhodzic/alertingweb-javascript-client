(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PagedAlertDefinitions', '../model/Error', '../model/AlertDefinition', '../model/PagedAlertItems', '../model/AlertItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PagedAlertDefinitions'), require('../model/Error'), require('../model/AlertDefinition'), require('../model/PagedAlertItems'), require('../model/AlertItem'));
  } else {
    // Browser globals (root is window)
    if (!root.AlertingWebApi) {
      root.AlertingWebApi = {};
    }
    root.AlertingWebApi.AlertApi = factory(root.AlertingWebApi.ApiClient, root.AlertingWebApi.PagedAlertDefinitions, root.AlertingWebApi.Error, root.AlertingWebApi.AlertDefinition, root.AlertingWebApi.PagedAlertItems, root.AlertingWebApi.AlertItem);
  }
}(this, function(ApiClient, PagedAlertDefinitions, Error, AlertDefinition, PagedAlertItems, AlertItem) {
  'use strict';

  var AlertApi = function AlertApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * Get Alert Definitions
     * Gets &#39;AlertDefinition&#39; objects.\n##### Optional parameters\n`page`, `size`, `sort` allows paging over items
     * @param {Number}  page Paging number (current page number).
     * @param {Number}  size 
     * @param {String}  sort 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PagedAlertDefinitions
     */
    self.getAlertDefinitions = function(page, size, sort, callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
        'page': page,
        'size': size,
        'sort': sort
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PagedAlertDefinitions;

      return this.apiClient.callApi(
        '/alertdefinition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Create Alert Definition
     * Create new Alert Definition object
     * @param {AlertDefinition}  alertDefinition 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AlertDefinition
     */
    self.createAlertDefinition = function(alertDefinition, callback) {
      var postBody = alertDefinition;
      
      // verify the required parameter 'alertDefinition' is set
      if (alertDefinition == null) {
        throw "Missing the required parameter 'alertDefinition' when calling createAlertDefinition";
      }
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AlertDefinition;

      return this.apiClient.callApi(
        '/alertdefinition', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Get Count of Alert Definitions
     * Get total count of Alert definitions
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: 'Number'
     */
    self.getAlertDefinitionCount = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/alertdefinition/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Get Alert Definition
     * Get single definition by Id
     * @param {String}  alertDefinitionId 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AlertDefinition
     */
    self.getAlertDefinition = function(alertDefinitionId, callback) {
      var postBody = null;
      
      // verify the required parameter 'alertDefinitionId' is set
      if (alertDefinitionId == null) {
        throw "Missing the required parameter 'alertDefinitionId' when calling getAlertDefinition";
      }
      

      
      var pathParams = {
        'alertDefinitionId': alertDefinitionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AlertDefinition;

      return this.apiClient.callApi(
        '/alertdefinition/{alertDefinitionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Update Alert Definition
     * Update single Alert Definition item
     * @param {String}  alertDefinitionId 
     * @param {AlertDefinition}  alertDefinition 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AlertDefinition
     */
    self.updateAlertDefinition = function(alertDefinitionId, alertDefinition, callback) {
      var postBody = alertDefinition;
      
      // verify the required parameter 'alertDefinitionId' is set
      if (alertDefinitionId == null) {
        throw "Missing the required parameter 'alertDefinitionId' when calling updateAlertDefinition";
      }
      
      // verify the required parameter 'alertDefinition' is set
      if (alertDefinition == null) {
        throw "Missing the required parameter 'alertDefinition' when calling updateAlertDefinition";
      }
      

      
      var pathParams = {
        'alertDefinitionId': alertDefinitionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AlertDefinition;

      return this.apiClient.callApi(
        '/alertdefinition/{alertDefinitionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Delete Alert Definition
     * Delete single Alert Definition item
     * @param {String}  alertDefinitionId 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: 'String'
     */
    self.deleteAlertDefinition = function(alertDefinitionId, callback) {
      var postBody = null;
      
      // verify the required parameter 'alertDefinitionId' is set
      if (alertDefinitionId == null) {
        throw "Missing the required parameter 'alertDefinitionId' when calling deleteAlertDefinition";
      }
      

      
      var pathParams = {
        'alertDefinitionId': alertDefinitionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/alertdefinition/{alertDefinitionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Get Alert Items
     * Get &#39;AlertItem&#39; objects\n##### Optional parameters\n`page`, `size`, `sort` allows paging over items
     * @param {Number}  page Paging number (current page number).
     * @param {Number}  size 
     * @param {String}  sort 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: PagedAlertItems
     */
    self.getAlertItems = function(page, size, sort, callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
        'page': page,
        'size': size,
        'sort': sort
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PagedAlertItems;

      return this.apiClient.callApi(
        '/alertitem', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Create Alert Item
     * Create new Alert Item object.\n##### Simple example\nProvided `topicName` is required to exists in `AlertDefinition` collection prior to submit new `AlertItem`.\n\n`deadline` has to be in ISO8601 UTC format.\n```JSON\n{\n  \&quot;topicName\&quot;:\&quot;Emergency Incidents\&quot;,\n  \&quot;deadline\&quot;:\&quot;2016-01-21T14:23:56\&quot;,\n  \&quot;payload\&quot;:{\n    \&quot;incidentId\&quot;:\&quot;f11411f1f1\&quot;,\n    \&quot;title\&quot;:\&quot;This will be summary of AlertItem as well\&quot;,\n    \&quot;priority\&quot;: \&quot;E1\&quot;\n  }\n}\n```\n##### Complex example\nIt is possible to override `AlertDefinition` in `payload` field and this `AlertDefinition` will be used.\n```JSON\n{\n	\&quot;type\&quot;: \&quot;incident\&quot;,\n	\&quot;title\&quot;: \&quot;Phone doesn&#39;t work\&quot;,\n	\&quot;incidentId\&quot;: \&quot;12415324234\&quot;,\n	\&quot;customer\&quot;: \&quot;Coca Cola\&quot;,\n	\&quot;customerUserName\&quot;: \&quot;John Doe\&quot;,\n	\&quot;createdDate\&quot;: \&quot;2016/01/24T17:23:54\&quot;,\n	\&quot;status\&quot;: \&quot;NEW\&quot;,\n	\&quot;priority\&quot;: \&quot;EMERGENCY\&quot;,\n	\&quot;assignedGroup\&quot;: \&quot;Phone Support\&quot;,\n	\&quot;assignedEngineer\&quot;: \&quot;Will Hohne\&quot;,\n	\&quot;images\&quot;: [\n		{\n			\&quot;title\&quot;: \&quot;Phone1\&quot;,\n			\&quot;url\&quot;: \&quot;http://s.tmocache.com/content/dam/tmo/en-g/q1%202016/browse-mq-cpo-samsung.jpg\&quot;\n		},\n		{\n			\&quot;title\&quot;: \&quot;Phone2\&quot;,\n			\&quot;url\&quot;: \&quot;http://ecx.images-amazon.com/images/I/41s3UUuGh8L._SL133_.jpg\&quot;\n		},\n		{\n			\&quot;title\&quot;: \&quot;Phone3\&quot;,\n			\&quot;url\&quot;: \&quot;http://ecx.images-amazon.com/images/I/41uvCd6%2BPVL._SL133_.jpg\&quot;\n		}\n	],\n	\&quot;alertDefinition\&quot;: {\n		\&quot;schedules\&quot;: [\n			{\n				\&quot;alertSubjectTemplate\&quot;: \&quot;This is custom subject for the email {{ payload.incidentId }}\&quot;,\n				\&quot;alertBodyTemplate\&quot;: \&quot;This is &lt;b&gt;custom&lt;/b&gt; body for the email images: {{ payload.images.[0].title }} &lt;img src=\\&quot;{{ payload.images.[0].url }}\\&quot;&gt; sent for Customer: {{ payload.customer }}, createdDate: {{ payload.createdDate }} with status: {{ payload.status }} from assigned Engineer: {{ payload.assignedEngineer }}. &lt;hr /&gt; This: &lt;pre&gt;{{json this }}&lt;/pre&gt;\&quot;,\n				\&quot;sendTo\&quot;: [\n					{\n						\&quot;receiverType\&quot;: \&quot;EMAILS\&quot;,\n						\&quot;receiverValue\&quot;: \&quot;john@example.com\&quot;,\n						\&quot;alertProtocol\&quot;: \&quot;EMAIL\&quot;\n					}\n				]\n			}\n		]\n	}\n}        \n```
     * @param {AlertItem}  alertItem 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AlertItem
     */
    self.createAlertItem = function(alertItem, callback) {
      var postBody = alertItem;
      
      // verify the required parameter 'alertItem' is set
      if (alertItem == null) {
        throw "Missing the required parameter 'alertItem' when calling createAlertItem";
      }
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AlertItem;

      return this.apiClient.callApi(
        '/alertitem', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Get Count of Alert Items
     * Get total count of Alert Items
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: 'Number'
     */
    self.getAlertItemCount = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/alertitem/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Get Alert Item
     * Get single item by Id
     * @param {String}  id 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AlertItem
     */
    self.getAlertItem = function(id, callback) {
      var postBody = null;
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling getAlertItem";
      }
      

      
      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AlertItem;

      return this.apiClient.callApi(
        '/alertitem/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Delete Alert Item
     * Delete single Alert Item
     * @param {String}  id 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: 'String'
     */
    self.deleteAlertItem = function(id, callback) {
      var postBody = null;
      
      // verify the required parameter 'id' is set
      if (id == null) {
        throw "Missing the required parameter 'id' when calling deleteAlertItem";
      }
      

      
      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['headerToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/alertitem/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
      
    }
    
    
  };

  return AlertApi;
}));
