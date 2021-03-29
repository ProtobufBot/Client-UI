/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.dto = (function() {

    /**
     * Namespace dto.
     * @exports dto
     * @namespace
     */
    var dto = {};

    dto.Bot = (function() {

        /**
         * Properties of a Bot.
         * @memberof dto
         * @interface IBot
         * @property {Long|null} [botId] Bot botId
         * @property {boolean|null} [isOnline] Bot isOnline
         */

        /**
         * Constructs a new Bot.
         * @memberof dto
         * @classdesc Represents a Bot.
         * @implements IBot
         * @constructor
         * @param {dto.IBot=} [properties] Properties to set
         */
        function Bot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bot botId.
         * @member {Long} botId
         * @memberof dto.Bot
         * @instance
         */
        Bot.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Bot isOnline.
         * @member {boolean} isOnline
         * @memberof dto.Bot
         * @instance
         */
        Bot.prototype.isOnline = false;

        /**
         * Creates a new Bot instance using the specified properties.
         * @function create
         * @memberof dto.Bot
         * @static
         * @param {dto.IBot=} [properties] Properties to set
         * @returns {dto.Bot} Bot instance
         */
        Bot.create = function create(properties) {
            return new Bot(properties);
        };

        /**
         * Encodes the specified Bot message. Does not implicitly {@link dto.Bot.verify|verify} messages.
         * @function encode
         * @memberof dto.Bot
         * @static
         * @param {dto.IBot} message Bot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            if (message.isOnline != null && Object.hasOwnProperty.call(message, "isOnline"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isOnline);
            return writer;
        };

        /**
         * Encodes the specified Bot message, length delimited. Does not implicitly {@link dto.Bot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Bot
         * @static
         * @param {dto.IBot} message Bot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bot message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Bot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Bot} Bot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Bot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                case 2:
                    message.isOnline = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Bot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Bot} Bot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bot message.
         * @function verify
         * @memberof dto.Bot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                if (typeof message.isOnline !== "boolean")
                    return "isOnline: boolean expected";
            return null;
        };

        /**
         * Creates a Bot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Bot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Bot} Bot
         */
        Bot.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Bot)
                return object;
            var message = new $root.dto.Bot();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            if (object.isOnline != null)
                message.isOnline = Boolean(object.isOnline);
            return message;
        };

        /**
         * Creates a plain object from a Bot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Bot
         * @static
         * @param {dto.Bot} message Bot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
                object.isOnline = false;
            }
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                object.isOnline = message.isOnline;
            return object;
        };

        /**
         * Converts this Bot to JSON.
         * @function toJSON
         * @memberof dto.Bot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bot;
    })();

    dto.CreateBotReq = (function() {

        /**
         * Properties of a CreateBotReq.
         * @memberof dto
         * @interface ICreateBotReq
         * @property {Long|null} [botId] CreateBotReq botId
         * @property {string|null} [password] CreateBotReq password
         */

        /**
         * Constructs a new CreateBotReq.
         * @memberof dto
         * @classdesc Represents a CreateBotReq.
         * @implements ICreateBotReq
         * @constructor
         * @param {dto.ICreateBotReq=} [properties] Properties to set
         */
        function CreateBotReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateBotReq botId.
         * @member {Long} botId
         * @memberof dto.CreateBotReq
         * @instance
         */
        CreateBotReq.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateBotReq password.
         * @member {string} password
         * @memberof dto.CreateBotReq
         * @instance
         */
        CreateBotReq.prototype.password = "";

        /**
         * Creates a new CreateBotReq instance using the specified properties.
         * @function create
         * @memberof dto.CreateBotReq
         * @static
         * @param {dto.ICreateBotReq=} [properties] Properties to set
         * @returns {dto.CreateBotReq} CreateBotReq instance
         */
        CreateBotReq.create = function create(properties) {
            return new CreateBotReq(properties);
        };

        /**
         * Encodes the specified CreateBotReq message. Does not implicitly {@link dto.CreateBotReq.verify|verify} messages.
         * @function encode
         * @memberof dto.CreateBotReq
         * @static
         * @param {dto.ICreateBotReq} message CreateBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified CreateBotReq message, length delimited. Does not implicitly {@link dto.CreateBotReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.CreateBotReq
         * @static
         * @param {dto.ICreateBotReq} message CreateBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateBotReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.CreateBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.CreateBotReq} CreateBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.CreateBotReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateBotReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.CreateBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.CreateBotReq} CreateBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateBotReq message.
         * @function verify
         * @memberof dto.CreateBotReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateBotReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a CreateBotReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.CreateBotReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.CreateBotReq} CreateBotReq
         */
        CreateBotReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.CreateBotReq)
                return object;
            var message = new $root.dto.CreateBotReq();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a CreateBotReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.CreateBotReq
         * @static
         * @param {dto.CreateBotReq} message CreateBotReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateBotReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
                object.password = "";
            }
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this CreateBotReq to JSON.
         * @function toJSON
         * @memberof dto.CreateBotReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateBotReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateBotReq;
    })();

    dto.CreateBotResp = (function() {

        /**
         * Properties of a CreateBotResp.
         * @memberof dto
         * @interface ICreateBotResp
         */

        /**
         * Constructs a new CreateBotResp.
         * @memberof dto
         * @classdesc Represents a CreateBotResp.
         * @implements ICreateBotResp
         * @constructor
         * @param {dto.ICreateBotResp=} [properties] Properties to set
         */
        function CreateBotResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CreateBotResp instance using the specified properties.
         * @function create
         * @memberof dto.CreateBotResp
         * @static
         * @param {dto.ICreateBotResp=} [properties] Properties to set
         * @returns {dto.CreateBotResp} CreateBotResp instance
         */
        CreateBotResp.create = function create(properties) {
            return new CreateBotResp(properties);
        };

        /**
         * Encodes the specified CreateBotResp message. Does not implicitly {@link dto.CreateBotResp.verify|verify} messages.
         * @function encode
         * @memberof dto.CreateBotResp
         * @static
         * @param {dto.ICreateBotResp} message CreateBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CreateBotResp message, length delimited. Does not implicitly {@link dto.CreateBotResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.CreateBotResp
         * @static
         * @param {dto.ICreateBotResp} message CreateBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateBotResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.CreateBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.CreateBotResp} CreateBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.CreateBotResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateBotResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.CreateBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.CreateBotResp} CreateBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateBotResp message.
         * @function verify
         * @memberof dto.CreateBotResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateBotResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CreateBotResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.CreateBotResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.CreateBotResp} CreateBotResp
         */
        CreateBotResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.CreateBotResp)
                return object;
            return new $root.dto.CreateBotResp();
        };

        /**
         * Creates a plain object from a CreateBotResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.CreateBotResp
         * @static
         * @param {dto.CreateBotResp} message CreateBotResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateBotResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CreateBotResp to JSON.
         * @function toJSON
         * @memberof dto.CreateBotResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateBotResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateBotResp;
    })();

    dto.ListBotReq = (function() {

        /**
         * Properties of a ListBotReq.
         * @memberof dto
         * @interface IListBotReq
         */

        /**
         * Constructs a new ListBotReq.
         * @memberof dto
         * @classdesc Represents a ListBotReq.
         * @implements IListBotReq
         * @constructor
         * @param {dto.IListBotReq=} [properties] Properties to set
         */
        function ListBotReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListBotReq instance using the specified properties.
         * @function create
         * @memberof dto.ListBotReq
         * @static
         * @param {dto.IListBotReq=} [properties] Properties to set
         * @returns {dto.ListBotReq} ListBotReq instance
         */
        ListBotReq.create = function create(properties) {
            return new ListBotReq(properties);
        };

        /**
         * Encodes the specified ListBotReq message. Does not implicitly {@link dto.ListBotReq.verify|verify} messages.
         * @function encode
         * @memberof dto.ListBotReq
         * @static
         * @param {dto.IListBotReq} message ListBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBotReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListBotReq message, length delimited. Does not implicitly {@link dto.ListBotReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListBotReq
         * @static
         * @param {dto.IListBotReq} message ListBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBotReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListBotReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListBotReq} ListBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBotReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListBotReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListBotReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListBotReq} ListBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBotReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListBotReq message.
         * @function verify
         * @memberof dto.ListBotReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListBotReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListBotReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListBotReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListBotReq} ListBotReq
         */
        ListBotReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListBotReq)
                return object;
            return new $root.dto.ListBotReq();
        };

        /**
         * Creates a plain object from a ListBotReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListBotReq
         * @static
         * @param {dto.ListBotReq} message ListBotReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListBotReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListBotReq to JSON.
         * @function toJSON
         * @memberof dto.ListBotReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListBotReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListBotReq;
    })();

    dto.ListBotResp = (function() {

        /**
         * Properties of a ListBotResp.
         * @memberof dto
         * @interface IListBotResp
         * @property {Array.<dto.IBot>|null} [botList] ListBotResp botList
         */

        /**
         * Constructs a new ListBotResp.
         * @memberof dto
         * @classdesc Represents a ListBotResp.
         * @implements IListBotResp
         * @constructor
         * @param {dto.IListBotResp=} [properties] Properties to set
         */
        function ListBotResp(properties) {
            this.botList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListBotResp botList.
         * @member {Array.<dto.IBot>} botList
         * @memberof dto.ListBotResp
         * @instance
         */
        ListBotResp.prototype.botList = $util.emptyArray;

        /**
         * Creates a new ListBotResp instance using the specified properties.
         * @function create
         * @memberof dto.ListBotResp
         * @static
         * @param {dto.IListBotResp=} [properties] Properties to set
         * @returns {dto.ListBotResp} ListBotResp instance
         */
        ListBotResp.create = function create(properties) {
            return new ListBotResp(properties);
        };

        /**
         * Encodes the specified ListBotResp message. Does not implicitly {@link dto.ListBotResp.verify|verify} messages.
         * @function encode
         * @memberof dto.ListBotResp
         * @static
         * @param {dto.IListBotResp} message ListBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBotResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botList != null && message.botList.length)
                for (var i = 0; i < message.botList.length; ++i)
                    $root.dto.Bot.encode(message.botList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListBotResp message, length delimited. Does not implicitly {@link dto.ListBotResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListBotResp
         * @static
         * @param {dto.IListBotResp} message ListBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBotResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListBotResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListBotResp} ListBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBotResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListBotResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.botList && message.botList.length))
                        message.botList = [];
                    message.botList.push($root.dto.Bot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListBotResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListBotResp} ListBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBotResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListBotResp message.
         * @function verify
         * @memberof dto.ListBotResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListBotResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botList != null && message.hasOwnProperty("botList")) {
                if (!Array.isArray(message.botList))
                    return "botList: array expected";
                for (var i = 0; i < message.botList.length; ++i) {
                    var error = $root.dto.Bot.verify(message.botList[i]);
                    if (error)
                        return "botList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListBotResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListBotResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListBotResp} ListBotResp
         */
        ListBotResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListBotResp)
                return object;
            var message = new $root.dto.ListBotResp();
            if (object.botList) {
                if (!Array.isArray(object.botList))
                    throw TypeError(".dto.ListBotResp.botList: array expected");
                message.botList = [];
                for (var i = 0; i < object.botList.length; ++i) {
                    if (typeof object.botList[i] !== "object")
                        throw TypeError(".dto.ListBotResp.botList: object expected");
                    message.botList[i] = $root.dto.Bot.fromObject(object.botList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListBotResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListBotResp
         * @static
         * @param {dto.ListBotResp} message ListBotResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListBotResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.botList = [];
            if (message.botList && message.botList.length) {
                object.botList = [];
                for (var j = 0; j < message.botList.length; ++j)
                    object.botList[j] = $root.dto.Bot.toObject(message.botList[j], options);
            }
            return object;
        };

        /**
         * Converts this ListBotResp to JSON.
         * @function toJSON
         * @memberof dto.ListBotResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListBotResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListBotResp;
    })();

    dto.BotLoginAsyncReq = (function() {

        /**
         * Properties of a BotLoginAsyncReq.
         * @memberof dto
         * @interface IBotLoginAsyncReq
         * @property {Long|null} [botId] BotLoginAsyncReq botId
         */

        /**
         * Constructs a new BotLoginAsyncReq.
         * @memberof dto
         * @classdesc Represents a BotLoginAsyncReq.
         * @implements IBotLoginAsyncReq
         * @constructor
         * @param {dto.IBotLoginAsyncReq=} [properties] Properties to set
         */
        function BotLoginAsyncReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotLoginAsyncReq botId.
         * @member {Long} botId
         * @memberof dto.BotLoginAsyncReq
         * @instance
         */
        BotLoginAsyncReq.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BotLoginAsyncReq instance using the specified properties.
         * @function create
         * @memberof dto.BotLoginAsyncReq
         * @static
         * @param {dto.IBotLoginAsyncReq=} [properties] Properties to set
         * @returns {dto.BotLoginAsyncReq} BotLoginAsyncReq instance
         */
        BotLoginAsyncReq.create = function create(properties) {
            return new BotLoginAsyncReq(properties);
        };

        /**
         * Encodes the specified BotLoginAsyncReq message. Does not implicitly {@link dto.BotLoginAsyncReq.verify|verify} messages.
         * @function encode
         * @memberof dto.BotLoginAsyncReq
         * @static
         * @param {dto.IBotLoginAsyncReq} message BotLoginAsyncReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotLoginAsyncReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            return writer;
        };

        /**
         * Encodes the specified BotLoginAsyncReq message, length delimited. Does not implicitly {@link dto.BotLoginAsyncReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.BotLoginAsyncReq
         * @static
         * @param {dto.IBotLoginAsyncReq} message BotLoginAsyncReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotLoginAsyncReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotLoginAsyncReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.BotLoginAsyncReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.BotLoginAsyncReq} BotLoginAsyncReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotLoginAsyncReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.BotLoginAsyncReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BotLoginAsyncReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.BotLoginAsyncReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.BotLoginAsyncReq} BotLoginAsyncReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotLoginAsyncReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotLoginAsyncReq message.
         * @function verify
         * @memberof dto.BotLoginAsyncReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotLoginAsyncReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BotLoginAsyncReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.BotLoginAsyncReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.BotLoginAsyncReq} BotLoginAsyncReq
         */
        BotLoginAsyncReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.BotLoginAsyncReq)
                return object;
            var message = new $root.dto.BotLoginAsyncReq();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BotLoginAsyncReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.BotLoginAsyncReq
         * @static
         * @param {dto.BotLoginAsyncReq} message BotLoginAsyncReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotLoginAsyncReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            return object;
        };

        /**
         * Converts this BotLoginAsyncReq to JSON.
         * @function toJSON
         * @memberof dto.BotLoginAsyncReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotLoginAsyncReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotLoginAsyncReq;
    })();

    dto.BotLoginAsyncResp = (function() {

        /**
         * Properties of a BotLoginAsyncResp.
         * @memberof dto
         * @interface IBotLoginAsyncResp
         */

        /**
         * Constructs a new BotLoginAsyncResp.
         * @memberof dto
         * @classdesc Represents a BotLoginAsyncResp.
         * @implements IBotLoginAsyncResp
         * @constructor
         * @param {dto.IBotLoginAsyncResp=} [properties] Properties to set
         */
        function BotLoginAsyncResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BotLoginAsyncResp instance using the specified properties.
         * @function create
         * @memberof dto.BotLoginAsyncResp
         * @static
         * @param {dto.IBotLoginAsyncResp=} [properties] Properties to set
         * @returns {dto.BotLoginAsyncResp} BotLoginAsyncResp instance
         */
        BotLoginAsyncResp.create = function create(properties) {
            return new BotLoginAsyncResp(properties);
        };

        /**
         * Encodes the specified BotLoginAsyncResp message. Does not implicitly {@link dto.BotLoginAsyncResp.verify|verify} messages.
         * @function encode
         * @memberof dto.BotLoginAsyncResp
         * @static
         * @param {dto.IBotLoginAsyncResp} message BotLoginAsyncResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotLoginAsyncResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BotLoginAsyncResp message, length delimited. Does not implicitly {@link dto.BotLoginAsyncResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.BotLoginAsyncResp
         * @static
         * @param {dto.IBotLoginAsyncResp} message BotLoginAsyncResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotLoginAsyncResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotLoginAsyncResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.BotLoginAsyncResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.BotLoginAsyncResp} BotLoginAsyncResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotLoginAsyncResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.BotLoginAsyncResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BotLoginAsyncResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.BotLoginAsyncResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.BotLoginAsyncResp} BotLoginAsyncResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotLoginAsyncResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotLoginAsyncResp message.
         * @function verify
         * @memberof dto.BotLoginAsyncResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotLoginAsyncResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BotLoginAsyncResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.BotLoginAsyncResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.BotLoginAsyncResp} BotLoginAsyncResp
         */
        BotLoginAsyncResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.BotLoginAsyncResp)
                return object;
            return new $root.dto.BotLoginAsyncResp();
        };

        /**
         * Creates a plain object from a BotLoginAsyncResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.BotLoginAsyncResp
         * @static
         * @param {dto.BotLoginAsyncResp} message BotLoginAsyncResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotLoginAsyncResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BotLoginAsyncResp to JSON.
         * @function toJSON
         * @memberof dto.BotLoginAsyncResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotLoginAsyncResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BotLoginAsyncResp;
    })();

    dto.Captcha = (function() {

        /**
         * Properties of a Captcha.
         * @memberof dto
         * @interface ICaptcha
         * @property {Long|null} [botId] Captcha botId
         * @property {dto.Captcha.CaptchaType|null} [captchaType] Captcha captchaType
         * @property {string|null} [url] Captcha url
         * @property {Uint8Array|null} [image] Captcha image
         */

        /**
         * Constructs a new Captcha.
         * @memberof dto
         * @classdesc Represents a Captcha.
         * @implements ICaptcha
         * @constructor
         * @param {dto.ICaptcha=} [properties] Properties to set
         */
        function Captcha(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Captcha botId.
         * @member {Long} botId
         * @memberof dto.Captcha
         * @instance
         */
        Captcha.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Captcha captchaType.
         * @member {dto.Captcha.CaptchaType} captchaType
         * @memberof dto.Captcha
         * @instance
         */
        Captcha.prototype.captchaType = 0;

        /**
         * Captcha url.
         * @member {string} url
         * @memberof dto.Captcha
         * @instance
         */
        Captcha.prototype.url = "";

        /**
         * Captcha image.
         * @member {Uint8Array} image
         * @memberof dto.Captcha
         * @instance
         */
        Captcha.prototype.image = $util.newBuffer([]);

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Captcha data.
         * @member {"url"|"image"|undefined} data
         * @memberof dto.Captcha
         * @instance
         */
        Object.defineProperty(Captcha.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["url", "image"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Captcha instance using the specified properties.
         * @function create
         * @memberof dto.Captcha
         * @static
         * @param {dto.ICaptcha=} [properties] Properties to set
         * @returns {dto.Captcha} Captcha instance
         */
        Captcha.create = function create(properties) {
            return new Captcha(properties);
        };

        /**
         * Encodes the specified Captcha message. Does not implicitly {@link dto.Captcha.verify|verify} messages.
         * @function encode
         * @memberof dto.Captcha
         * @static
         * @param {dto.ICaptcha} message Captcha message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Captcha.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            if (message.captchaType != null && Object.hasOwnProperty.call(message, "captchaType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.captchaType);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.image);
            return writer;
        };

        /**
         * Encodes the specified Captcha message, length delimited. Does not implicitly {@link dto.Captcha.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Captcha
         * @static
         * @param {dto.ICaptcha} message Captcha message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Captcha.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Captcha message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Captcha
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Captcha} Captcha
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Captcha.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Captcha();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                case 2:
                    message.captchaType = reader.int32();
                    break;
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.image = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Captcha message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Captcha
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Captcha} Captcha
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Captcha.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Captcha message.
         * @function verify
         * @memberof dto.Captcha
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Captcha.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            if (message.captchaType != null && message.hasOwnProperty("captchaType"))
                switch (message.captchaType) {
                default:
                    return "captchaType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                    break;
                }
            if (message.url != null && message.hasOwnProperty("url")) {
                properties.data = 1;
                if (!$util.isString(message.url))
                    return "url: string expected";
            }
            if (message.image != null && message.hasOwnProperty("image")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                if (!(message.image && typeof message.image.length === "number" || $util.isString(message.image)))
                    return "image: buffer expected";
            }
            return null;
        };

        /**
         * Creates a Captcha message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Captcha
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Captcha} Captcha
         */
        Captcha.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Captcha)
                return object;
            var message = new $root.dto.Captcha();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            switch (object.captchaType) {
            case "PIC_CAPTCHA":
            case 0:
                message.captchaType = 0;
                break;
            case "SLIDER_CAPTCHA":
            case 1:
                message.captchaType = 1;
                break;
            case "UNSAFE_DEVICE_LOGIN_VERIFY":
            case 2:
                message.captchaType = 2;
                break;
            case "SMS":
            case 4:
                message.captchaType = 4;
                break;
            }
            if (object.url != null)
                message.url = String(object.url);
            if (object.image != null)
                if (typeof object.image === "string")
                    $util.base64.decode(object.image, message.image = $util.newBuffer($util.base64.length(object.image)), 0);
                else if (object.image.length)
                    message.image = object.image;
            return message;
        };

        /**
         * Creates a plain object from a Captcha message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Captcha
         * @static
         * @param {dto.Captcha} message Captcha
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Captcha.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
                object.captchaType = options.enums === String ? "PIC_CAPTCHA" : 0;
            }
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            if (message.captchaType != null && message.hasOwnProperty("captchaType"))
                object.captchaType = options.enums === String ? $root.dto.Captcha.CaptchaType[message.captchaType] : message.captchaType;
            if (message.url != null && message.hasOwnProperty("url")) {
                object.url = message.url;
                if (options.oneofs)
                    object.data = "url";
            }
            if (message.image != null && message.hasOwnProperty("image")) {
                object.image = options.bytes === String ? $util.base64.encode(message.image, 0, message.image.length) : options.bytes === Array ? Array.prototype.slice.call(message.image) : message.image;
                if (options.oneofs)
                    object.data = "image";
            }
            return object;
        };

        /**
         * Converts this Captcha to JSON.
         * @function toJSON
         * @memberof dto.Captcha
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Captcha.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CaptchaType enum.
         * @name dto.Captcha.CaptchaType
         * @enum {number}
         * @property {number} PIC_CAPTCHA=0 PIC_CAPTCHA value
         * @property {number} SLIDER_CAPTCHA=1 SLIDER_CAPTCHA value
         * @property {number} UNSAFE_DEVICE_LOGIN_VERIFY=2 UNSAFE_DEVICE_LOGIN_VERIFY value
         * @property {number} SMS=4 SMS value
         */
        Captcha.CaptchaType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PIC_CAPTCHA"] = 0;
            values[valuesById[1] = "SLIDER_CAPTCHA"] = 1;
            values[valuesById[2] = "UNSAFE_DEVICE_LOGIN_VERIFY"] = 2;
            values[valuesById[4] = "SMS"] = 4;
            return values;
        })();

        return Captcha;
    })();

    dto.ListCaptchaReq = (function() {

        /**
         * Properties of a ListCaptchaReq.
         * @memberof dto
         * @interface IListCaptchaReq
         */

        /**
         * Constructs a new ListCaptchaReq.
         * @memberof dto
         * @classdesc Represents a ListCaptchaReq.
         * @implements IListCaptchaReq
         * @constructor
         * @param {dto.IListCaptchaReq=} [properties] Properties to set
         */
        function ListCaptchaReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListCaptchaReq instance using the specified properties.
         * @function create
         * @memberof dto.ListCaptchaReq
         * @static
         * @param {dto.IListCaptchaReq=} [properties] Properties to set
         * @returns {dto.ListCaptchaReq} ListCaptchaReq instance
         */
        ListCaptchaReq.create = function create(properties) {
            return new ListCaptchaReq(properties);
        };

        /**
         * Encodes the specified ListCaptchaReq message. Does not implicitly {@link dto.ListCaptchaReq.verify|verify} messages.
         * @function encode
         * @memberof dto.ListCaptchaReq
         * @static
         * @param {dto.IListCaptchaReq} message ListCaptchaReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListCaptchaReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListCaptchaReq message, length delimited. Does not implicitly {@link dto.ListCaptchaReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListCaptchaReq
         * @static
         * @param {dto.IListCaptchaReq} message ListCaptchaReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListCaptchaReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListCaptchaReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListCaptchaReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListCaptchaReq} ListCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListCaptchaReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListCaptchaReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListCaptchaReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListCaptchaReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListCaptchaReq} ListCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListCaptchaReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListCaptchaReq message.
         * @function verify
         * @memberof dto.ListCaptchaReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListCaptchaReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListCaptchaReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListCaptchaReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListCaptchaReq} ListCaptchaReq
         */
        ListCaptchaReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListCaptchaReq)
                return object;
            return new $root.dto.ListCaptchaReq();
        };

        /**
         * Creates a plain object from a ListCaptchaReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListCaptchaReq
         * @static
         * @param {dto.ListCaptchaReq} message ListCaptchaReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListCaptchaReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListCaptchaReq to JSON.
         * @function toJSON
         * @memberof dto.ListCaptchaReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListCaptchaReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListCaptchaReq;
    })();

    dto.ListCaptchaResp = (function() {

        /**
         * Properties of a ListCaptchaResp.
         * @memberof dto
         * @interface IListCaptchaResp
         * @property {Array.<dto.ICaptcha>|null} [captchaList] ListCaptchaResp captchaList
         */

        /**
         * Constructs a new ListCaptchaResp.
         * @memberof dto
         * @classdesc Represents a ListCaptchaResp.
         * @implements IListCaptchaResp
         * @constructor
         * @param {dto.IListCaptchaResp=} [properties] Properties to set
         */
        function ListCaptchaResp(properties) {
            this.captchaList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListCaptchaResp captchaList.
         * @member {Array.<dto.ICaptcha>} captchaList
         * @memberof dto.ListCaptchaResp
         * @instance
         */
        ListCaptchaResp.prototype.captchaList = $util.emptyArray;

        /**
         * Creates a new ListCaptchaResp instance using the specified properties.
         * @function create
         * @memberof dto.ListCaptchaResp
         * @static
         * @param {dto.IListCaptchaResp=} [properties] Properties to set
         * @returns {dto.ListCaptchaResp} ListCaptchaResp instance
         */
        ListCaptchaResp.create = function create(properties) {
            return new ListCaptchaResp(properties);
        };

        /**
         * Encodes the specified ListCaptchaResp message. Does not implicitly {@link dto.ListCaptchaResp.verify|verify} messages.
         * @function encode
         * @memberof dto.ListCaptchaResp
         * @static
         * @param {dto.IListCaptchaResp} message ListCaptchaResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListCaptchaResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.captchaList != null && message.captchaList.length)
                for (var i = 0; i < message.captchaList.length; ++i)
                    $root.dto.Captcha.encode(message.captchaList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListCaptchaResp message, length delimited. Does not implicitly {@link dto.ListCaptchaResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListCaptchaResp
         * @static
         * @param {dto.IListCaptchaResp} message ListCaptchaResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListCaptchaResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListCaptchaResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListCaptchaResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListCaptchaResp} ListCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListCaptchaResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListCaptchaResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.captchaList && message.captchaList.length))
                        message.captchaList = [];
                    message.captchaList.push($root.dto.Captcha.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListCaptchaResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListCaptchaResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListCaptchaResp} ListCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListCaptchaResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListCaptchaResp message.
         * @function verify
         * @memberof dto.ListCaptchaResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListCaptchaResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.captchaList != null && message.hasOwnProperty("captchaList")) {
                if (!Array.isArray(message.captchaList))
                    return "captchaList: array expected";
                for (var i = 0; i < message.captchaList.length; ++i) {
                    var error = $root.dto.Captcha.verify(message.captchaList[i]);
                    if (error)
                        return "captchaList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListCaptchaResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListCaptchaResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListCaptchaResp} ListCaptchaResp
         */
        ListCaptchaResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListCaptchaResp)
                return object;
            var message = new $root.dto.ListCaptchaResp();
            if (object.captchaList) {
                if (!Array.isArray(object.captchaList))
                    throw TypeError(".dto.ListCaptchaResp.captchaList: array expected");
                message.captchaList = [];
                for (var i = 0; i < object.captchaList.length; ++i) {
                    if (typeof object.captchaList[i] !== "object")
                        throw TypeError(".dto.ListCaptchaResp.captchaList: object expected");
                    message.captchaList[i] = $root.dto.Captcha.fromObject(object.captchaList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListCaptchaResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListCaptchaResp
         * @static
         * @param {dto.ListCaptchaResp} message ListCaptchaResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListCaptchaResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.captchaList = [];
            if (message.captchaList && message.captchaList.length) {
                object.captchaList = [];
                for (var j = 0; j < message.captchaList.length; ++j)
                    object.captchaList[j] = $root.dto.Captcha.toObject(message.captchaList[j], options);
            }
            return object;
        };

        /**
         * Converts this ListCaptchaResp to JSON.
         * @function toJSON
         * @memberof dto.ListCaptchaResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListCaptchaResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListCaptchaResp;
    })();

    dto.SolveCaptchaReq = (function() {

        /**
         * Properties of a SolveCaptchaReq.
         * @memberof dto
         * @interface ISolveCaptchaReq
         * @property {Long|null} [botId] SolveCaptchaReq botId
         * @property {string|null} [result] SolveCaptchaReq result
         */

        /**
         * Constructs a new SolveCaptchaReq.
         * @memberof dto
         * @classdesc Represents a SolveCaptchaReq.
         * @implements ISolveCaptchaReq
         * @constructor
         * @param {dto.ISolveCaptchaReq=} [properties] Properties to set
         */
        function SolveCaptchaReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SolveCaptchaReq botId.
         * @member {Long} botId
         * @memberof dto.SolveCaptchaReq
         * @instance
         */
        SolveCaptchaReq.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SolveCaptchaReq result.
         * @member {string} result
         * @memberof dto.SolveCaptchaReq
         * @instance
         */
        SolveCaptchaReq.prototype.result = "";

        /**
         * Creates a new SolveCaptchaReq instance using the specified properties.
         * @function create
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {dto.ISolveCaptchaReq=} [properties] Properties to set
         * @returns {dto.SolveCaptchaReq} SolveCaptchaReq instance
         */
        SolveCaptchaReq.create = function create(properties) {
            return new SolveCaptchaReq(properties);
        };

        /**
         * Encodes the specified SolveCaptchaReq message. Does not implicitly {@link dto.SolveCaptchaReq.verify|verify} messages.
         * @function encode
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {dto.ISolveCaptchaReq} message SolveCaptchaReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SolveCaptchaReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.result);
            return writer;
        };

        /**
         * Encodes the specified SolveCaptchaReq message, length delimited. Does not implicitly {@link dto.SolveCaptchaReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {dto.ISolveCaptchaReq} message SolveCaptchaReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SolveCaptchaReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SolveCaptchaReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SolveCaptchaReq} SolveCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SolveCaptchaReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SolveCaptchaReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                case 2:
                    message.result = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SolveCaptchaReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SolveCaptchaReq} SolveCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SolveCaptchaReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SolveCaptchaReq message.
         * @function verify
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SolveCaptchaReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            return null;
        };

        /**
         * Creates a SolveCaptchaReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SolveCaptchaReq} SolveCaptchaReq
         */
        SolveCaptchaReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SolveCaptchaReq)
                return object;
            var message = new $root.dto.SolveCaptchaReq();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            if (object.result != null)
                message.result = String(object.result);
            return message;
        };

        /**
         * Creates a plain object from a SolveCaptchaReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {dto.SolveCaptchaReq} message SolveCaptchaReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SolveCaptchaReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
                object.result = "";
            }
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this SolveCaptchaReq to JSON.
         * @function toJSON
         * @memberof dto.SolveCaptchaReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SolveCaptchaReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SolveCaptchaReq;
    })();

    dto.SolveCaptchaResp = (function() {

        /**
         * Properties of a SolveCaptchaResp.
         * @memberof dto
         * @interface ISolveCaptchaResp
         */

        /**
         * Constructs a new SolveCaptchaResp.
         * @memberof dto
         * @classdesc Represents a SolveCaptchaResp.
         * @implements ISolveCaptchaResp
         * @constructor
         * @param {dto.ISolveCaptchaResp=} [properties] Properties to set
         */
        function SolveCaptchaResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SolveCaptchaResp instance using the specified properties.
         * @function create
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {dto.ISolveCaptchaResp=} [properties] Properties to set
         * @returns {dto.SolveCaptchaResp} SolveCaptchaResp instance
         */
        SolveCaptchaResp.create = function create(properties) {
            return new SolveCaptchaResp(properties);
        };

        /**
         * Encodes the specified SolveCaptchaResp message. Does not implicitly {@link dto.SolveCaptchaResp.verify|verify} messages.
         * @function encode
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {dto.ISolveCaptchaResp} message SolveCaptchaResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SolveCaptchaResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SolveCaptchaResp message, length delimited. Does not implicitly {@link dto.SolveCaptchaResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {dto.ISolveCaptchaResp} message SolveCaptchaResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SolveCaptchaResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SolveCaptchaResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SolveCaptchaResp} SolveCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SolveCaptchaResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SolveCaptchaResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SolveCaptchaResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SolveCaptchaResp} SolveCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SolveCaptchaResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SolveCaptchaResp message.
         * @function verify
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SolveCaptchaResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SolveCaptchaResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SolveCaptchaResp} SolveCaptchaResp
         */
        SolveCaptchaResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SolveCaptchaResp)
                return object;
            return new $root.dto.SolveCaptchaResp();
        };

        /**
         * Creates a plain object from a SolveCaptchaResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {dto.SolveCaptchaResp} message SolveCaptchaResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SolveCaptchaResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SolveCaptchaResp to JSON.
         * @function toJSON
         * @memberof dto.SolveCaptchaResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SolveCaptchaResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SolveCaptchaResp;
    })();

    dto.FetchQRCodeReq = (function() {

        /**
         * Properties of a FetchQRCodeReq.
         * @memberof dto
         * @interface IFetchQRCodeReq
         */

        /**
         * Constructs a new FetchQRCodeReq.
         * @memberof dto
         * @classdesc Represents a FetchQRCodeReq.
         * @implements IFetchQRCodeReq
         * @constructor
         * @param {dto.IFetchQRCodeReq=} [properties] Properties to set
         */
        function FetchQRCodeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FetchQRCodeReq instance using the specified properties.
         * @function create
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {dto.IFetchQRCodeReq=} [properties] Properties to set
         * @returns {dto.FetchQRCodeReq} FetchQRCodeReq instance
         */
        FetchQRCodeReq.create = function create(properties) {
            return new FetchQRCodeReq(properties);
        };

        /**
         * Encodes the specified FetchQRCodeReq message. Does not implicitly {@link dto.FetchQRCodeReq.verify|verify} messages.
         * @function encode
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {dto.IFetchQRCodeReq} message FetchQRCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchQRCodeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FetchQRCodeReq message, length delimited. Does not implicitly {@link dto.FetchQRCodeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {dto.IFetchQRCodeReq} message FetchQRCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchQRCodeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchQRCodeReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.FetchQRCodeReq} FetchQRCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchQRCodeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.FetchQRCodeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchQRCodeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.FetchQRCodeReq} FetchQRCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchQRCodeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchQRCodeReq message.
         * @function verify
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchQRCodeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a FetchQRCodeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.FetchQRCodeReq} FetchQRCodeReq
         */
        FetchQRCodeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.FetchQRCodeReq)
                return object;
            return new $root.dto.FetchQRCodeReq();
        };

        /**
         * Creates a plain object from a FetchQRCodeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {dto.FetchQRCodeReq} message FetchQRCodeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchQRCodeReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FetchQRCodeReq to JSON.
         * @function toJSON
         * @memberof dto.FetchQRCodeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchQRCodeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchQRCodeReq;
    })();

    dto.QueryQRCodeStatusReq = (function() {

        /**
         * Properties of a QueryQRCodeStatusReq.
         * @memberof dto
         * @interface IQueryQRCodeStatusReq
         * @property {Uint8Array|null} [sig] QueryQRCodeStatusReq sig
         */

        /**
         * Constructs a new QueryQRCodeStatusReq.
         * @memberof dto
         * @classdesc Represents a QueryQRCodeStatusReq.
         * @implements IQueryQRCodeStatusReq
         * @constructor
         * @param {dto.IQueryQRCodeStatusReq=} [properties] Properties to set
         */
        function QueryQRCodeStatusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryQRCodeStatusReq sig.
         * @member {Uint8Array} sig
         * @memberof dto.QueryQRCodeStatusReq
         * @instance
         */
        QueryQRCodeStatusReq.prototype.sig = $util.newBuffer([]);

        /**
         * Creates a new QueryQRCodeStatusReq instance using the specified properties.
         * @function create
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {dto.IQueryQRCodeStatusReq=} [properties] Properties to set
         * @returns {dto.QueryQRCodeStatusReq} QueryQRCodeStatusReq instance
         */
        QueryQRCodeStatusReq.create = function create(properties) {
            return new QueryQRCodeStatusReq(properties);
        };

        /**
         * Encodes the specified QueryQRCodeStatusReq message. Does not implicitly {@link dto.QueryQRCodeStatusReq.verify|verify} messages.
         * @function encode
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {dto.IQueryQRCodeStatusReq} message QueryQRCodeStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryQRCodeStatusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sig != null && Object.hasOwnProperty.call(message, "sig"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sig);
            return writer;
        };

        /**
         * Encodes the specified QueryQRCodeStatusReq message, length delimited. Does not implicitly {@link dto.QueryQRCodeStatusReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {dto.IQueryQRCodeStatusReq} message QueryQRCodeStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryQRCodeStatusReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryQRCodeStatusReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.QueryQRCodeStatusReq} QueryQRCodeStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryQRCodeStatusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.QueryQRCodeStatusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryQRCodeStatusReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.QueryQRCodeStatusReq} QueryQRCodeStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryQRCodeStatusReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryQRCodeStatusReq message.
         * @function verify
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryQRCodeStatusReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sig != null && message.hasOwnProperty("sig"))
                if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                    return "sig: buffer expected";
            return null;
        };

        /**
         * Creates a QueryQRCodeStatusReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.QueryQRCodeStatusReq} QueryQRCodeStatusReq
         */
        QueryQRCodeStatusReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.QueryQRCodeStatusReq)
                return object;
            var message = new $root.dto.QueryQRCodeStatusReq();
            if (object.sig != null)
                if (typeof object.sig === "string")
                    $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                else if (object.sig.length)
                    message.sig = object.sig;
            return message;
        };

        /**
         * Creates a plain object from a QueryQRCodeStatusReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {dto.QueryQRCodeStatusReq} message QueryQRCodeStatusReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryQRCodeStatusReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.sig = "";
                else {
                    object.sig = [];
                    if (options.bytes !== Array)
                        object.sig = $util.newBuffer(object.sig);
                }
            if (message.sig != null && message.hasOwnProperty("sig"))
                object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
            return object;
        };

        /**
         * Converts this QueryQRCodeStatusReq to JSON.
         * @function toJSON
         * @memberof dto.QueryQRCodeStatusReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryQRCodeStatusReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryQRCodeStatusReq;
    })();

    dto.QRCodeLoginResp = (function() {

        /**
         * Properties of a QRCodeLoginResp.
         * @memberof dto
         * @interface IQRCodeLoginResp
         * @property {dto.QRCodeLoginResp.QRCodeLoginState|null} [state] QRCodeLoginResp state
         * @property {Uint8Array|null} [imageData] QRCodeLoginResp imageData
         * @property {Uint8Array|null} [sig] QRCodeLoginResp sig
         */

        /**
         * Constructs a new QRCodeLoginResp.
         * @memberof dto
         * @classdesc Represents a QRCodeLoginResp.
         * @implements IQRCodeLoginResp
         * @constructor
         * @param {dto.IQRCodeLoginResp=} [properties] Properties to set
         */
        function QRCodeLoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QRCodeLoginResp state.
         * @member {dto.QRCodeLoginResp.QRCodeLoginState} state
         * @memberof dto.QRCodeLoginResp
         * @instance
         */
        QRCodeLoginResp.prototype.state = 0;

        /**
         * QRCodeLoginResp imageData.
         * @member {Uint8Array} imageData
         * @memberof dto.QRCodeLoginResp
         * @instance
         */
        QRCodeLoginResp.prototype.imageData = $util.newBuffer([]);

        /**
         * QRCodeLoginResp sig.
         * @member {Uint8Array} sig
         * @memberof dto.QRCodeLoginResp
         * @instance
         */
        QRCodeLoginResp.prototype.sig = $util.newBuffer([]);

        /**
         * Creates a new QRCodeLoginResp instance using the specified properties.
         * @function create
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {dto.IQRCodeLoginResp=} [properties] Properties to set
         * @returns {dto.QRCodeLoginResp} QRCodeLoginResp instance
         */
        QRCodeLoginResp.create = function create(properties) {
            return new QRCodeLoginResp(properties);
        };

        /**
         * Encodes the specified QRCodeLoginResp message. Does not implicitly {@link dto.QRCodeLoginResp.verify|verify} messages.
         * @function encode
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {dto.IQRCodeLoginResp} message QRCodeLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QRCodeLoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.imageData != null && Object.hasOwnProperty.call(message, "imageData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.imageData);
            if (message.sig != null && Object.hasOwnProperty.call(message, "sig"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.sig);
            return writer;
        };

        /**
         * Encodes the specified QRCodeLoginResp message, length delimited. Does not implicitly {@link dto.QRCodeLoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {dto.IQRCodeLoginResp} message QRCodeLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QRCodeLoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QRCodeLoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.QRCodeLoginResp} QRCodeLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QRCodeLoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.QRCodeLoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.imageData = reader.bytes();
                    break;
                case 3:
                    message.sig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QRCodeLoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.QRCodeLoginResp} QRCodeLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QRCodeLoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QRCodeLoginResp message.
         * @function verify
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QRCodeLoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.imageData != null && message.hasOwnProperty("imageData"))
                if (!(message.imageData && typeof message.imageData.length === "number" || $util.isString(message.imageData)))
                    return "imageData: buffer expected";
            if (message.sig != null && message.hasOwnProperty("sig"))
                if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                    return "sig: buffer expected";
            return null;
        };

        /**
         * Creates a QRCodeLoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.QRCodeLoginResp} QRCodeLoginResp
         */
        QRCodeLoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.QRCodeLoginResp)
                return object;
            var message = new $root.dto.QRCodeLoginResp();
            switch (object.state) {
            case "Unknown":
            case 0:
                message.state = 0;
                break;
            case "QRCodeImageFetch":
            case 1:
                message.state = 1;
                break;
            case "QRCodeWaitingForScan":
            case 2:
                message.state = 2;
                break;
            case "QRCodeWaitingForConfirm":
            case 3:
                message.state = 3;
                break;
            case "QRCodeTimeout":
            case 4:
                message.state = 4;
                break;
            case "QRCodeConfirmed":
            case 5:
                message.state = 5;
                break;
            case "QRCodeCanceled":
            case 6:
                message.state = 6;
                break;
            }
            if (object.imageData != null)
                if (typeof object.imageData === "string")
                    $util.base64.decode(object.imageData, message.imageData = $util.newBuffer($util.base64.length(object.imageData)), 0);
                else if (object.imageData.length)
                    message.imageData = object.imageData;
            if (object.sig != null)
                if (typeof object.sig === "string")
                    $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                else if (object.sig.length)
                    message.sig = object.sig;
            return message;
        };

        /**
         * Creates a plain object from a QRCodeLoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {dto.QRCodeLoginResp} message QRCodeLoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QRCodeLoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.state = options.enums === String ? "Unknown" : 0;
                if (options.bytes === String)
                    object.imageData = "";
                else {
                    object.imageData = [];
                    if (options.bytes !== Array)
                        object.imageData = $util.newBuffer(object.imageData);
                }
                if (options.bytes === String)
                    object.sig = "";
                else {
                    object.sig = [];
                    if (options.bytes !== Array)
                        object.sig = $util.newBuffer(object.sig);
                }
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.dto.QRCodeLoginResp.QRCodeLoginState[message.state] : message.state;
            if (message.imageData != null && message.hasOwnProperty("imageData"))
                object.imageData = options.bytes === String ? $util.base64.encode(message.imageData, 0, message.imageData.length) : options.bytes === Array ? Array.prototype.slice.call(message.imageData) : message.imageData;
            if (message.sig != null && message.hasOwnProperty("sig"))
                object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
            return object;
        };

        /**
         * Converts this QRCodeLoginResp to JSON.
         * @function toJSON
         * @memberof dto.QRCodeLoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QRCodeLoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * QRCodeLoginState enum.
         * @name dto.QRCodeLoginResp.QRCodeLoginState
         * @enum {number}
         * @property {number} Unknown=0 Unknown value
         * @property {number} QRCodeImageFetch=1 QRCodeImageFetch value
         * @property {number} QRCodeWaitingForScan=2 QRCodeWaitingForScan value
         * @property {number} QRCodeWaitingForConfirm=3 QRCodeWaitingForConfirm value
         * @property {number} QRCodeTimeout=4 QRCodeTimeout value
         * @property {number} QRCodeConfirmed=5 QRCodeConfirmed value
         * @property {number} QRCodeCanceled=6 QRCodeCanceled value
         */
        QRCodeLoginResp.QRCodeLoginState = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknown"] = 0;
            values[valuesById[1] = "QRCodeImageFetch"] = 1;
            values[valuesById[2] = "QRCodeWaitingForScan"] = 2;
            values[valuesById[3] = "QRCodeWaitingForConfirm"] = 3;
            values[valuesById[4] = "QRCodeTimeout"] = 4;
            values[valuesById[5] = "QRCodeConfirmed"] = 5;
            values[valuesById[6] = "QRCodeCanceled"] = 6;
            return values;
        })();

        return QRCodeLoginResp;
    })();

    dto.HttpService = (function() {

        /**
         * Constructs a new HttpService service.
         * @memberof dto
         * @classdesc Represents a HttpService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function HttpService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (HttpService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = HttpService;

        /**
         * Creates new HttpService service using the specified rpc implementation.
         * @function create
         * @memberof dto.HttpService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {HttpService} RPC service. Useful where requests and/or responses are streamed.
         */
        HttpService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link dto.HttpService#createBot}.
         * @memberof dto.HttpService
         * @typedef CreateBotCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.CreateBotResp} [response] CreateBotResp
         */

        /**
         * Calls CreateBot.
         * @function createBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ICreateBotReq} request CreateBotReq message or plain object
         * @param {dto.HttpService.CreateBotCallback} callback Node-style callback called with the error, if any, and CreateBotResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.createBot = function createBot(request, callback) {
            return this.rpcCall(createBot, $root.dto.CreateBotReq, $root.dto.CreateBotResp, request, callback);
        }, "name", { value: "CreateBot" });

        /**
         * Calls CreateBot.
         * @function createBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ICreateBotReq} request CreateBotReq message or plain object
         * @returns {Promise<dto.CreateBotResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#listBot}.
         * @memberof dto.HttpService
         * @typedef ListBotCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.ListBotResp} [response] ListBotResp
         */

        /**
         * Calls ListBot.
         * @function listBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IListBotReq} request ListBotReq message or plain object
         * @param {dto.HttpService.ListBotCallback} callback Node-style callback called with the error, if any, and ListBotResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.listBot = function listBot(request, callback) {
            return this.rpcCall(listBot, $root.dto.ListBotReq, $root.dto.ListBotResp, request, callback);
        }, "name", { value: "ListBot" });

        /**
         * Calls ListBot.
         * @function listBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IListBotReq} request ListBotReq message or plain object
         * @returns {Promise<dto.ListBotResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#botLoginAsync}.
         * @memberof dto.HttpService
         * @typedef BotLoginAsyncCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.BotLoginAsyncResp} [response] BotLoginAsyncResp
         */

        /**
         * Calls BotLoginAsync.
         * @function botLoginAsync
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IBotLoginAsyncReq} request BotLoginAsyncReq message or plain object
         * @param {dto.HttpService.BotLoginAsyncCallback} callback Node-style callback called with the error, if any, and BotLoginAsyncResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.botLoginAsync = function botLoginAsync(request, callback) {
            return this.rpcCall(botLoginAsync, $root.dto.BotLoginAsyncReq, $root.dto.BotLoginAsyncResp, request, callback);
        }, "name", { value: "BotLoginAsync" });

        /**
         * Calls BotLoginAsync.
         * @function botLoginAsync
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IBotLoginAsyncReq} request BotLoginAsyncReq message or plain object
         * @returns {Promise<dto.BotLoginAsyncResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#listCaptcha}.
         * @memberof dto.HttpService
         * @typedef ListCaptchaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.ListCaptchaResp} [response] ListCaptchaResp
         */

        /**
         * Calls ListCaptcha.
         * @function listCaptcha
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IListCaptchaReq} request ListCaptchaReq message or plain object
         * @param {dto.HttpService.ListCaptchaCallback} callback Node-style callback called with the error, if any, and ListCaptchaResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.listCaptcha = function listCaptcha(request, callback) {
            return this.rpcCall(listCaptcha, $root.dto.ListCaptchaReq, $root.dto.ListCaptchaResp, request, callback);
        }, "name", { value: "ListCaptcha" });

        /**
         * Calls ListCaptcha.
         * @function listCaptcha
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IListCaptchaReq} request ListCaptchaReq message or plain object
         * @returns {Promise<dto.ListCaptchaResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#solveCaptcha}.
         * @memberof dto.HttpService
         * @typedef SolveCaptchaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.SolveCaptchaResp} [response] SolveCaptchaResp
         */

        /**
         * Calls SolveCaptcha.
         * @function solveCaptcha
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ISolveCaptchaReq} request SolveCaptchaReq message or plain object
         * @param {dto.HttpService.SolveCaptchaCallback} callback Node-style callback called with the error, if any, and SolveCaptchaResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.solveCaptcha = function solveCaptcha(request, callback) {
            return this.rpcCall(solveCaptcha, $root.dto.SolveCaptchaReq, $root.dto.SolveCaptchaResp, request, callback);
        }, "name", { value: "SolveCaptcha" });

        /**
         * Calls SolveCaptcha.
         * @function solveCaptcha
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ISolveCaptchaReq} request SolveCaptchaReq message or plain object
         * @returns {Promise<dto.SolveCaptchaResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#fetchQRCode}.
         * @memberof dto.HttpService
         * @typedef FetchQRCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.QRCodeLoginResp} [response] QRCodeLoginResp
         */

        /**
         * Calls FetchQRCode.
         * @function fetchQRCode
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IFetchQRCodeReq} request FetchQRCodeReq message or plain object
         * @param {dto.HttpService.FetchQRCodeCallback} callback Node-style callback called with the error, if any, and QRCodeLoginResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.fetchQRCode = function fetchQRCode(request, callback) {
            return this.rpcCall(fetchQRCode, $root.dto.FetchQRCodeReq, $root.dto.QRCodeLoginResp, request, callback);
        }, "name", { value: "FetchQRCode" });

        /**
         * Calls FetchQRCode.
         * @function fetchQRCode
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IFetchQRCodeReq} request FetchQRCodeReq message or plain object
         * @returns {Promise<dto.QRCodeLoginResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#queryQRCodeStatus}.
         * @memberof dto.HttpService
         * @typedef QueryQRCodeStatusCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.QRCodeLoginResp} [response] QRCodeLoginResp
         */

        /**
         * Calls QueryQRCodeStatus.
         * @function queryQRCodeStatus
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IQueryQRCodeStatusReq} request QueryQRCodeStatusReq message or plain object
         * @param {dto.HttpService.QueryQRCodeStatusCallback} callback Node-style callback called with the error, if any, and QRCodeLoginResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.queryQRCodeStatus = function queryQRCodeStatus(request, callback) {
            return this.rpcCall(queryQRCodeStatus, $root.dto.QueryQRCodeStatusReq, $root.dto.QRCodeLoginResp, request, callback);
        }, "name", { value: "QueryQRCodeStatus" });

        /**
         * Calls QueryQRCodeStatus.
         * @function queryQRCodeStatus
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IQueryQRCodeStatusReq} request QueryQRCodeStatusReq message or plain object
         * @returns {Promise<dto.QRCodeLoginResp>} Promise
         * @variation 2
         */

        return HttpService;
    })();

    return dto;
})();

module.exports = $root;
