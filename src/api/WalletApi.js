/**
 * Minergate API
 * *MinerGate is a mining pool created by a group of cryptocoin enthusiasts.*  It is the first pool which provides service for merged mining. This means that while mining on our pool you can mine different coins simultaniously without decrease of hashrate for major coin.  **If you are interested in cooperation drop a message to janikakouki@minergate.com.**  | Currency Name | Currency Code (cc) | | --- | --- | | Bitcoin | btc | | Litecoin | ltc | | Bytecoin | bcn | | Monero | xmr | | FantomCoin | fcn | | QuazarCoin | qcn | | DigitalNote | xdn | | MonetaVerde | mcn | | Dashcoin | dsh | | Aeon coin | aeon | | Infinium-8 | inf8 | 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MinergateApi) {
      root.MinergateApi = {};
    }
    root.MinergateApi.WalletApi = factory(root.MinergateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Wallet service.
   * @module api/WalletApi
   * @version 1.0
   */

  /**
   * Constructs a new WalletApi. 
   * @alias module:api/WalletApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBalance operation.
     * @callback module:api/WalletApi~getBalanceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Balance
     * Returns the user’s balance. **Requires authorization.** 
     * @param {module:api/WalletApi~getBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getBalance = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/balance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransfers operation.
     * @callback module:api/WalletApi~getTransfersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfers
     * Returns the list of user’s transfers. **Requires authorization.** 
     * @param {String} cc Shorthand name for crypto currency. e.g. Bitcoin &#x3D; btc 
     * @param {module:api/WalletApi~getTransfersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getTransfers = function(cc, callback) {
      var postBody = null;

      // verify the required parameter 'cc' is set
      if (cc == undefined || cc == null) {
        throw new Error("Missing the required parameter 'cc' when calling getTransfers");
      }


      var pathParams = {
        'cc': cc
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/transfers/{cc}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWithdrawals operation.
     * @callback module:api/WalletApi~getWithdrawalsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdrawals by Blockchain
     * Returns the list of user’s withdrawals for  all the currencies or a specific currency  if such parameter is set.  **Requires authorization.** 
     * @param {String} cc Shorthand name for crypto currency. e.g. Bitcoin &#x3D; btc 
     * @param {module:api/WalletApi~getWithdrawalsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWithdrawals = function(cc, callback) {
      var postBody = null;

      // verify the required parameter 'cc' is set
      if (cc == undefined || cc == null) {
        throw new Error("Missing the required parameter 'cc' when calling getWithdrawals");
      }


      var pathParams = {
        'cc': cc
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/withdrawals/{cc}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));