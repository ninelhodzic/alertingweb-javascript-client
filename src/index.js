(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AlertUser', './model/SendMetadata', './model/PagedAlertItems', './model/PagedAlertUsers', './model/ExtendTokenDefinition', './model/PagedAlertDefinitions', './model/Error', './model/TokenTransfer', './model/AlertSchedule', './model/AlertItem', './model/AlertDefinition', './api/UserApi', './api/AlertApi', './api/ApplicationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
   // module.exports = factory(require('./ApiClient'), require('./model/AlertUser'), require('./model/SendMetadata'), require('./model/PagedAlertItems'), require('./model/PagedAlertUsers'), require('./model/ExtendTokenDefinition'), require('./model/PagedAlertDefinitions'), require('./model/Error'), require('./model/TokenTransfer'), require('./model/AlertSchedule'), require('./model/AlertItem'), require('./model/AlertDefinition'), require('./api/UserApi'), require('./api/AlertApi'), require('./api/ApplicationApi'));
        module.exports = factory(require('./ApiClient'), require('./model/AlertUser'), require('./model/SendMetadata'), require('./model/PagedAlertItems'), require('./model/PagedAlertUsers'), require('./model/ExtendTokenDefinition'), require('./model/PagedAlertDefinitions'), require('./model/Error'), require('./model/TokenTransfer'), require('./model/AlertSchedule'), require('./model/AlertItem'), require('./model/AlertDefinition'), require('./api/UserApi'), require('./api/AlertApi'), require('./api/ApplicationApi'));
  }
}(function(ApiClient, AlertUser, SendMetadata, PagedAlertItems, PagedAlertUsers, ExtendTokenDefinition, PagedAlertDefinitions, Error, TokenTransfer, AlertSchedule, AlertItem, AlertDefinition, UserApi, AlertApi, ApplicationApi) {
  'use strict';

  return {
    ApiClient: ApiClient,
    AlertUser: AlertUser,
    SendMetadata: SendMetadata,
    PagedAlertItems: PagedAlertItems,
    PagedAlertUsers: PagedAlertUsers,
    ExtendTokenDefinition: ExtendTokenDefinition,
    PagedAlertDefinitions: PagedAlertDefinitions,
    Error: Error,
    TokenTransfer: TokenTransfer,
    AlertSchedule: AlertSchedule,
    AlertItem: AlertItem,
    AlertDefinition: AlertDefinition,
    UserApi: UserApi,
    AlertApi: AlertApi,
    ApplicationApi: ApplicationApi
  };
}));
