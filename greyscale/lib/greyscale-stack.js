const { Stack, Duration } = require('aws-cdk-lib');
const greyScale_service = require('../lib/greyscale_service');
// const sqs = require('aws-cdk-lib/aws-sqs');

class GreyscaleStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new greyScale_service.GreyScaleService(this, 'GreyScalePic');
  }
}

module.exports = { GreyscaleStack }
