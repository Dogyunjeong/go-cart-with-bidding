/**
 * @fileoverview gRPC-Web generated client stub for greet
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.greet = require('./greet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.greet.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.greet.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.HelloReply>}
 */
const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/greet.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.greet.HelloRequest,
  proto.greet.HelloReply,
  /** @param {!proto.greet.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.HelloReply>}
 */
const methodInfo_Greeter_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.greet.HelloReply,
  /** @param {!proto.greet.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);


/**
 * @param {!proto.greet.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.greet.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.greet.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.HelloReply>}
 *     A native promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.HelloReply>}
 */
const methodDescriptor_Greeter_SayHelloAgain = new grpc.web.MethodDescriptor(
  '/greet.Greeter/SayHelloAgain',
  grpc.web.MethodType.UNARY,
  proto.greet.HelloRequest,
  proto.greet.HelloReply,
  /** @param {!proto.greet.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.greet.HelloRequest,
 *   !proto.greet.HelloReply>}
 */
const methodInfo_Greeter_SayHelloAgain = new grpc.web.AbstractClientBase.MethodInfo(
  proto.greet.HelloReply,
  /** @param {!proto.greet.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.HelloReply.deserializeBinary
);


/**
 * @param {!proto.greet.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.greet.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreeterClient.prototype.sayHelloAgain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.Greeter/SayHelloAgain',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloAgain,
      callback);
};


/**
 * @param {!proto.greet.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.HelloReply>}
 *     A native promise that resolves to the response
 */
proto.greet.GreeterPromiseClient.prototype.sayHelloAgain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.Greeter/SayHelloAgain',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloAgain);
};


module.exports = proto.greet;

