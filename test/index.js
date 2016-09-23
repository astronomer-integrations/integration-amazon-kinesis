var Test = require('segmentio-integration-tester');
var assert = require('assert');
var AmazonKinesis = require('../lib');

describe('Amazon Kinesis', function() {
    var kinesis;
    var settings;
    var test;

    beforeEach(function(){
        settings = {
        };
        kinesis = new AmazonKinesis(settings);
        test = Test(kinesis, __dirname);
    });

    it('should have correct settings', function(){
        test
        .name('Amazon Kinesis')
        .channels(['server'])
        .ensure('settings.streamName');
    });

    describe('.track()', function(){
        it('should send track correctly', function(done){
            var json = test.fixture('track-basic');
            test
            .set(settings)
            .track(json.input)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
        });
    });
});
