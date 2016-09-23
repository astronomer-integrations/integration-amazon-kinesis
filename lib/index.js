/**
 * Module dependencies.
 */

var integration = require('segmentio-integration');
var AWS = require('aws-sdk');
var kinesis = new AWS.Kinesis({ region: 'us-east-1' });

/**
 * Expose `AmazonKinesis`
 */

var AmazonKinesis = module.exports = integration('Amazon Kinesis')
.channels(['server'])
.ensure('settings.streamName');

AmazonKinesis.prototype.invoke = function(payload, fn) {
    var appId = payload.field('appId');
    if (!appId) {
        return;
    }

    return kinesis.putRecord({
        StreamName: this.settings.streamName,
        PartitionKey: appId,
        Data: JSON.stringify(payload.json())
    }, fn);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 * @param {Function} fn
 * @api private
 */

AmazonKinesis.prototype.identify = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Track.
 *
 * @apram {Track} track
 * @param {Function} fn
 * @api private
 */

AmazonKinesis.prototype.track = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Page.
 *
 * @apram {Page} page
 * @param {Function} fn
 * @api private
 */

AmazonKinesis.prototype.page = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Screen.
 *
 * @param {Screen} screen
 * @param {Function} fn
 * @api private
 */

AmazonKinesis.prototype.screen = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Group.
 *
 * @param {Group} group
 * @param {Function} fn
 * @api private
 */

AmazonKinesis.prototype.group = function(payload, fn){
    return this.invoke(payload, fn);
};

/**
 * Alias.
 *
 * @param {Alias} alias
 * @param {Function} fn
 * @api private
 */

AmazonKinesis.prototype.alias = function(payload, fn){
    return this.invoke(payload, fn);
};
