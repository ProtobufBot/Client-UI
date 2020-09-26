import * as $protobuf from "protobufjs";
import Long from "long";
/** Namespace dto. */
export namespace dto {

    /** Properties of a Bot. */
    interface IBot {

        /** Bot botId */
        botId?: (Long|null);

        /** Bot isOnline */
        isOnline?: (boolean|null);
    }

    /** Represents a Bot. */
    class Bot implements IBot {

        /**
         * Constructs a new Bot.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IBot);

        /** Bot botId. */
        public botId: Long;

        /** Bot isOnline. */
        public isOnline: boolean;

        /**
         * Creates a new Bot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bot instance
         */
        public static create(properties?: dto.IBot): dto.Bot;

        /**
         * Encodes the specified Bot message. Does not implicitly {@link dto.Bot.verify|verify} messages.
         * @param message Bot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IBot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bot message, length delimited. Does not implicitly {@link dto.Bot.verify|verify} messages.
         * @param message Bot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IBot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Bot;

        /**
         * Decodes a Bot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Bot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Bot;

        /**
         * Verifies a Bot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Bot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Bot
         */
        public static fromObject(object: { [k: string]: any }): dto.Bot;

        /**
         * Creates a plain object from a Bot message. Also converts values to other types if specified.
         * @param message Bot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Bot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Bot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateBotReq. */
    interface ICreateBotReq {

        /** CreateBotReq botId */
        botId?: (Long|null);

        /** CreateBotReq password */
        password?: (string|null);
    }

    /** Represents a CreateBotReq. */
    class CreateBotReq implements ICreateBotReq {

        /**
         * Constructs a new CreateBotReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ICreateBotReq);

        /** CreateBotReq botId. */
        public botId: Long;

        /** CreateBotReq password. */
        public password: string;

        /**
         * Creates a new CreateBotReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateBotReq instance
         */
        public static create(properties?: dto.ICreateBotReq): dto.CreateBotReq;

        /**
         * Encodes the specified CreateBotReq message. Does not implicitly {@link dto.CreateBotReq.verify|verify} messages.
         * @param message CreateBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ICreateBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateBotReq message, length delimited. Does not implicitly {@link dto.CreateBotReq.verify|verify} messages.
         * @param message CreateBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ICreateBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateBotReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.CreateBotReq;

        /**
         * Decodes a CreateBotReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.CreateBotReq;

        /**
         * Verifies a CreateBotReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateBotReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateBotReq
         */
        public static fromObject(object: { [k: string]: any }): dto.CreateBotReq;

        /**
         * Creates a plain object from a CreateBotReq message. Also converts values to other types if specified.
         * @param message CreateBotReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.CreateBotReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateBotReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateBotResp. */
    interface ICreateBotResp {
    }

    /** Represents a CreateBotResp. */
    class CreateBotResp implements ICreateBotResp {

        /**
         * Constructs a new CreateBotResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ICreateBotResp);

        /**
         * Creates a new CreateBotResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateBotResp instance
         */
        public static create(properties?: dto.ICreateBotResp): dto.CreateBotResp;

        /**
         * Encodes the specified CreateBotResp message. Does not implicitly {@link dto.CreateBotResp.verify|verify} messages.
         * @param message CreateBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ICreateBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateBotResp message, length delimited. Does not implicitly {@link dto.CreateBotResp.verify|verify} messages.
         * @param message CreateBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ICreateBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateBotResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.CreateBotResp;

        /**
         * Decodes a CreateBotResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.CreateBotResp;

        /**
         * Verifies a CreateBotResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateBotResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateBotResp
         */
        public static fromObject(object: { [k: string]: any }): dto.CreateBotResp;

        /**
         * Creates a plain object from a CreateBotResp message. Also converts values to other types if specified.
         * @param message CreateBotResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.CreateBotResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateBotResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListBotReq. */
    interface IListBotReq {
    }

    /** Represents a ListBotReq. */
    class ListBotReq implements IListBotReq {

        /**
         * Constructs a new ListBotReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListBotReq);

        /**
         * Creates a new ListBotReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListBotReq instance
         */
        public static create(properties?: dto.IListBotReq): dto.ListBotReq;

        /**
         * Encodes the specified ListBotReq message. Does not implicitly {@link dto.ListBotReq.verify|verify} messages.
         * @param message ListBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListBotReq message, length delimited. Does not implicitly {@link dto.ListBotReq.verify|verify} messages.
         * @param message ListBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListBotReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListBotReq;

        /**
         * Decodes a ListBotReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListBotReq;

        /**
         * Verifies a ListBotReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListBotReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListBotReq
         */
        public static fromObject(object: { [k: string]: any }): dto.ListBotReq;

        /**
         * Creates a plain object from a ListBotReq message. Also converts values to other types if specified.
         * @param message ListBotReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListBotReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListBotReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListBotResp. */
    interface IListBotResp {

        /** ListBotResp botList */
        botList?: (dto.IBot[]|null);
    }

    /** Represents a ListBotResp. */
    class ListBotResp implements IListBotResp {

        /**
         * Constructs a new ListBotResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListBotResp);

        /** ListBotResp botList. */
        public botList: dto.IBot[];

        /**
         * Creates a new ListBotResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListBotResp instance
         */
        public static create(properties?: dto.IListBotResp): dto.ListBotResp;

        /**
         * Encodes the specified ListBotResp message. Does not implicitly {@link dto.ListBotResp.verify|verify} messages.
         * @param message ListBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListBotResp message, length delimited. Does not implicitly {@link dto.ListBotResp.verify|verify} messages.
         * @param message ListBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListBotResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListBotResp;

        /**
         * Decodes a ListBotResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListBotResp;

        /**
         * Verifies a ListBotResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListBotResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListBotResp
         */
        public static fromObject(object: { [k: string]: any }): dto.ListBotResp;

        /**
         * Creates a plain object from a ListBotResp message. Also converts values to other types if specified.
         * @param message ListBotResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListBotResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListBotResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BotLoginAsyncReq. */
    interface IBotLoginAsyncReq {

        /** BotLoginAsyncReq botId */
        botId?: (Long|null);
    }

    /** Represents a BotLoginAsyncReq. */
    class BotLoginAsyncReq implements IBotLoginAsyncReq {

        /**
         * Constructs a new BotLoginAsyncReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IBotLoginAsyncReq);

        /** BotLoginAsyncReq botId. */
        public botId: Long;

        /**
         * Creates a new BotLoginAsyncReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotLoginAsyncReq instance
         */
        public static create(properties?: dto.IBotLoginAsyncReq): dto.BotLoginAsyncReq;

        /**
         * Encodes the specified BotLoginAsyncReq message. Does not implicitly {@link dto.BotLoginAsyncReq.verify|verify} messages.
         * @param message BotLoginAsyncReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IBotLoginAsyncReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotLoginAsyncReq message, length delimited. Does not implicitly {@link dto.BotLoginAsyncReq.verify|verify} messages.
         * @param message BotLoginAsyncReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IBotLoginAsyncReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotLoginAsyncReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotLoginAsyncReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.BotLoginAsyncReq;

        /**
         * Decodes a BotLoginAsyncReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotLoginAsyncReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.BotLoginAsyncReq;

        /**
         * Verifies a BotLoginAsyncReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotLoginAsyncReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotLoginAsyncReq
         */
        public static fromObject(object: { [k: string]: any }): dto.BotLoginAsyncReq;

        /**
         * Creates a plain object from a BotLoginAsyncReq message. Also converts values to other types if specified.
         * @param message BotLoginAsyncReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.BotLoginAsyncReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotLoginAsyncReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BotLoginAsyncResp. */
    interface IBotLoginAsyncResp {
    }

    /** Represents a BotLoginAsyncResp. */
    class BotLoginAsyncResp implements IBotLoginAsyncResp {

        /**
         * Constructs a new BotLoginAsyncResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IBotLoginAsyncResp);

        /**
         * Creates a new BotLoginAsyncResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotLoginAsyncResp instance
         */
        public static create(properties?: dto.IBotLoginAsyncResp): dto.BotLoginAsyncResp;

        /**
         * Encodes the specified BotLoginAsyncResp message. Does not implicitly {@link dto.BotLoginAsyncResp.verify|verify} messages.
         * @param message BotLoginAsyncResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IBotLoginAsyncResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotLoginAsyncResp message, length delimited. Does not implicitly {@link dto.BotLoginAsyncResp.verify|verify} messages.
         * @param message BotLoginAsyncResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IBotLoginAsyncResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotLoginAsyncResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotLoginAsyncResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.BotLoginAsyncResp;

        /**
         * Decodes a BotLoginAsyncResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotLoginAsyncResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.BotLoginAsyncResp;

        /**
         * Verifies a BotLoginAsyncResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotLoginAsyncResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotLoginAsyncResp
         */
        public static fromObject(object: { [k: string]: any }): dto.BotLoginAsyncResp;

        /**
         * Creates a plain object from a BotLoginAsyncResp message. Also converts values to other types if specified.
         * @param message BotLoginAsyncResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.BotLoginAsyncResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotLoginAsyncResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Captcha. */
    interface ICaptcha {

        /** Captcha botId */
        botId?: (Long|null);

        /** Captcha captchaType */
        captchaType?: (dto.Captcha.CaptchaType|null);

        /** Captcha url */
        url?: (string|null);

        /** Captcha image */
        image?: (Uint8Array|null);
    }

    /** Represents a Captcha. */
    class Captcha implements ICaptcha {

        /**
         * Constructs a new Captcha.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ICaptcha);

        /** Captcha botId. */
        public botId: Long;

        /** Captcha captchaType. */
        public captchaType: dto.Captcha.CaptchaType;

        /** Captcha url. */
        public url: string;

        /** Captcha image. */
        public image: Uint8Array;

        /** Captcha data. */
        public data?: ("url"|"image");

        /**
         * Creates a new Captcha instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Captcha instance
         */
        public static create(properties?: dto.ICaptcha): dto.Captcha;

        /**
         * Encodes the specified Captcha message. Does not implicitly {@link dto.Captcha.verify|verify} messages.
         * @param message Captcha message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ICaptcha, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Captcha message, length delimited. Does not implicitly {@link dto.Captcha.verify|verify} messages.
         * @param message Captcha message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ICaptcha, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Captcha message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Captcha
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Captcha;

        /**
         * Decodes a Captcha message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Captcha
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Captcha;

        /**
         * Verifies a Captcha message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Captcha message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Captcha
         */
        public static fromObject(object: { [k: string]: any }): dto.Captcha;

        /**
         * Creates a plain object from a Captcha message. Also converts values to other types if specified.
         * @param message Captcha
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Captcha, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Captcha to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Captcha {

        /** CaptchaType enum. */
        enum CaptchaType {
            PIC_CAPTCHA = 0,
            SLIDER_CAPTCHA = 1,
            UNSAFE_DEVICE_LOGIN_VERIFY = 2
        }
    }

    /** Properties of a ListCaptchaReq. */
    interface IListCaptchaReq {
    }

    /** Represents a ListCaptchaReq. */
    class ListCaptchaReq implements IListCaptchaReq {

        /**
         * Constructs a new ListCaptchaReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListCaptchaReq);

        /**
         * Creates a new ListCaptchaReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListCaptchaReq instance
         */
        public static create(properties?: dto.IListCaptchaReq): dto.ListCaptchaReq;

        /**
         * Encodes the specified ListCaptchaReq message. Does not implicitly {@link dto.ListCaptchaReq.verify|verify} messages.
         * @param message ListCaptchaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListCaptchaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListCaptchaReq message, length delimited. Does not implicitly {@link dto.ListCaptchaReq.verify|verify} messages.
         * @param message ListCaptchaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListCaptchaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListCaptchaReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListCaptchaReq;

        /**
         * Decodes a ListCaptchaReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListCaptchaReq;

        /**
         * Verifies a ListCaptchaReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListCaptchaReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListCaptchaReq
         */
        public static fromObject(object: { [k: string]: any }): dto.ListCaptchaReq;

        /**
         * Creates a plain object from a ListCaptchaReq message. Also converts values to other types if specified.
         * @param message ListCaptchaReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListCaptchaReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListCaptchaReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListCaptchaResp. */
    interface IListCaptchaResp {

        /** ListCaptchaResp captchaList */
        captchaList?: (dto.ICaptcha[]|null);
    }

    /** Represents a ListCaptchaResp. */
    class ListCaptchaResp implements IListCaptchaResp {

        /**
         * Constructs a new ListCaptchaResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListCaptchaResp);

        /** ListCaptchaResp captchaList. */
        public captchaList: dto.ICaptcha[];

        /**
         * Creates a new ListCaptchaResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListCaptchaResp instance
         */
        public static create(properties?: dto.IListCaptchaResp): dto.ListCaptchaResp;

        /**
         * Encodes the specified ListCaptchaResp message. Does not implicitly {@link dto.ListCaptchaResp.verify|verify} messages.
         * @param message ListCaptchaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListCaptchaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListCaptchaResp message, length delimited. Does not implicitly {@link dto.ListCaptchaResp.verify|verify} messages.
         * @param message ListCaptchaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListCaptchaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListCaptchaResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListCaptchaResp;

        /**
         * Decodes a ListCaptchaResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListCaptchaResp;

        /**
         * Verifies a ListCaptchaResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListCaptchaResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListCaptchaResp
         */
        public static fromObject(object: { [k: string]: any }): dto.ListCaptchaResp;

        /**
         * Creates a plain object from a ListCaptchaResp message. Also converts values to other types if specified.
         * @param message ListCaptchaResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListCaptchaResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListCaptchaResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SolveCaptchaReq. */
    interface ISolveCaptchaReq {

        /** SolveCaptchaReq botId */
        botId?: (Long|null);

        /** SolveCaptchaReq result */
        result?: (string|null);
    }

    /** Represents a SolveCaptchaReq. */
    class SolveCaptchaReq implements ISolveCaptchaReq {

        /**
         * Constructs a new SolveCaptchaReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISolveCaptchaReq);

        /** SolveCaptchaReq botId. */
        public botId: Long;

        /** SolveCaptchaReq result. */
        public result: string;

        /**
         * Creates a new SolveCaptchaReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SolveCaptchaReq instance
         */
        public static create(properties?: dto.ISolveCaptchaReq): dto.SolveCaptchaReq;

        /**
         * Encodes the specified SolveCaptchaReq message. Does not implicitly {@link dto.SolveCaptchaReq.verify|verify} messages.
         * @param message SolveCaptchaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISolveCaptchaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SolveCaptchaReq message, length delimited. Does not implicitly {@link dto.SolveCaptchaReq.verify|verify} messages.
         * @param message SolveCaptchaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISolveCaptchaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SolveCaptchaReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SolveCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SolveCaptchaReq;

        /**
         * Decodes a SolveCaptchaReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SolveCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SolveCaptchaReq;

        /**
         * Verifies a SolveCaptchaReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SolveCaptchaReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SolveCaptchaReq
         */
        public static fromObject(object: { [k: string]: any }): dto.SolveCaptchaReq;

        /**
         * Creates a plain object from a SolveCaptchaReq message. Also converts values to other types if specified.
         * @param message SolveCaptchaReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SolveCaptchaReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SolveCaptchaReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SolveCaptchaResp. */
    interface ISolveCaptchaResp {
    }

    /** Represents a SolveCaptchaResp. */
    class SolveCaptchaResp implements ISolveCaptchaResp {

        /**
         * Constructs a new SolveCaptchaResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISolveCaptchaResp);

        /**
         * Creates a new SolveCaptchaResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SolveCaptchaResp instance
         */
        public static create(properties?: dto.ISolveCaptchaResp): dto.SolveCaptchaResp;

        /**
         * Encodes the specified SolveCaptchaResp message. Does not implicitly {@link dto.SolveCaptchaResp.verify|verify} messages.
         * @param message SolveCaptchaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISolveCaptchaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SolveCaptchaResp message, length delimited. Does not implicitly {@link dto.SolveCaptchaResp.verify|verify} messages.
         * @param message SolveCaptchaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISolveCaptchaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SolveCaptchaResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SolveCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SolveCaptchaResp;

        /**
         * Decodes a SolveCaptchaResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SolveCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SolveCaptchaResp;

        /**
         * Verifies a SolveCaptchaResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SolveCaptchaResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SolveCaptchaResp
         */
        public static fromObject(object: { [k: string]: any }): dto.SolveCaptchaResp;

        /**
         * Creates a plain object from a SolveCaptchaResp message. Also converts values to other types if specified.
         * @param message SolveCaptchaResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SolveCaptchaResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SolveCaptchaResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a HttpService */
    class HttpService extends $protobuf.rpc.Service {

        /**
         * Constructs a new HttpService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new HttpService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HttpService;

        /**
         * Calls CreateBot.
         * @param request CreateBotReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateBotResp
         */
        public createBot(request: dto.ICreateBotReq, callback: dto.HttpService.CreateBotCallback): void;

        /**
         * Calls CreateBot.
         * @param request CreateBotReq message or plain object
         * @returns Promise
         */
        public createBot(request: dto.ICreateBotReq): Promise<dto.CreateBotResp>;

        /**
         * Calls ListBot.
         * @param request ListBotReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListBotResp
         */
        public listBot(request: dto.IListBotReq, callback: dto.HttpService.ListBotCallback): void;

        /**
         * Calls ListBot.
         * @param request ListBotReq message or plain object
         * @returns Promise
         */
        public listBot(request: dto.IListBotReq): Promise<dto.ListBotResp>;

        /**
         * Calls BotLoginAsync.
         * @param request BotLoginAsyncReq message or plain object
         * @param callback Node-style callback called with the error, if any, and BotLoginAsyncResp
         */
        public botLoginAsync(request: dto.IBotLoginAsyncReq, callback: dto.HttpService.BotLoginAsyncCallback): void;

        /**
         * Calls BotLoginAsync.
         * @param request BotLoginAsyncReq message or plain object
         * @returns Promise
         */
        public botLoginAsync(request: dto.IBotLoginAsyncReq): Promise<dto.BotLoginAsyncResp>;

        /**
         * Calls ListCaptcha.
         * @param request ListCaptchaReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListCaptchaResp
         */
        public listCaptcha(request: dto.IListCaptchaReq, callback: dto.HttpService.ListCaptchaCallback): void;

        /**
         * Calls ListCaptcha.
         * @param request ListCaptchaReq message or plain object
         * @returns Promise
         */
        public listCaptcha(request: dto.IListCaptchaReq): Promise<dto.ListCaptchaResp>;

        /**
         * Calls SolveCaptcha.
         * @param request SolveCaptchaReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SolveCaptchaResp
         */
        public solveCaptcha(request: dto.ISolveCaptchaReq, callback: dto.HttpService.SolveCaptchaCallback): void;

        /**
         * Calls SolveCaptcha.
         * @param request SolveCaptchaReq message or plain object
         * @returns Promise
         */
        public solveCaptcha(request: dto.ISolveCaptchaReq): Promise<dto.SolveCaptchaResp>;
    }

    namespace HttpService {

        /**
         * Callback as used by {@link dto.HttpService#createBot}.
         * @param error Error, if any
         * @param [response] CreateBotResp
         */
        type CreateBotCallback = (error: (Error|null), response?: dto.CreateBotResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#listBot}.
         * @param error Error, if any
         * @param [response] ListBotResp
         */
        type ListBotCallback = (error: (Error|null), response?: dto.ListBotResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#botLoginAsync}.
         * @param error Error, if any
         * @param [response] BotLoginAsyncResp
         */
        type BotLoginAsyncCallback = (error: (Error|null), response?: dto.BotLoginAsyncResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#listCaptcha}.
         * @param error Error, if any
         * @param [response] ListCaptchaResp
         */
        type ListCaptchaCallback = (error: (Error|null), response?: dto.ListCaptchaResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#solveCaptcha}.
         * @param error Error, if any
         * @param [response] SolveCaptchaResp
         */
        type SolveCaptchaCallback = (error: (Error|null), response?: dto.SolveCaptchaResp) => void;
    }
}
