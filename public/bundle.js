(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // node_modules/@openai/agents-core/node_modules/ms/index.js
  var require_ms = __commonJS({
    "node_modules/@openai/agents-core/node_modules/ms/index.js"(exports, module) {
      var s = 1e3;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
        );
      };
      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str
        );
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "weeks":
          case "week":
          case "w":
            return n * w;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return void 0;
        }
      }
      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + "h";
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }
      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, "hour");
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, "minute");
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, "second");
        }
        return ms + " ms";
      }
      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
      }
    }
  });

  // node_modules/@openai/agents-core/node_modules/debug/src/common.js
  var require_common = __commonJS({
    "node_modules/@openai/agents-core/node_modules/debug/src/common.js"(exports, module) {
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce2;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = require_ms();
        createDebug.destroy = destroy;
        Object.keys(env).forEach((key) => {
          createDebug[key] = env[key];
        });
        createDebug.names = [];
        createDebug.skips = [];
        createDebug.formatters = {};
        function selectColor(namespace) {
          let hash = 0;
          for (let i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
          }
          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }
        createDebug.selectColor = selectColor;
        function createDebug(namespace) {
          let prevTime;
          let enableOverride = null;
          let namespacesCache;
          let enabledCache;
          function debug3(...args) {
            if (!debug3.enabled) {
              return;
            }
            const self = debug3;
            const curr = Number(/* @__PURE__ */ new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
              args.unshift("%O");
            }
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
              if (match === "%%") {
                return "%";
              }
              index++;
              const formatter = createDebug.formatters[format];
              if (typeof formatter === "function") {
                const val = args[index];
                match = formatter.call(self, val);
                args.splice(index, 1);
                index--;
              }
              return match;
            });
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
          }
          debug3.namespace = namespace;
          debug3.useColors = createDebug.useColors();
          debug3.color = createDebug.selectColor(namespace);
          debug3.extend = extend;
          debug3.destroy = createDebug.destroy;
          Object.defineProperty(debug3, "enabled", {
            enumerable: true,
            configurable: false,
            get: () => {
              if (enableOverride !== null) {
                return enableOverride;
              }
              if (namespacesCache !== createDebug.namespaces) {
                namespacesCache = createDebug.namespaces;
                enabledCache = createDebug.enabled(namespace);
              }
              return enabledCache;
            },
            set: (v) => {
              enableOverride = v;
            }
          });
          if (typeof createDebug.init === "function") {
            createDebug.init(debug3);
          }
          return debug3;
        }
        function extend(namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.namespaces = namespaces;
          createDebug.names = [];
          createDebug.skips = [];
          const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
          for (const ns of split) {
            if (ns[0] === "-") {
              createDebug.skips.push(ns.slice(1));
            } else {
              createDebug.names.push(ns);
            }
          }
        }
        function matchesTemplate(search, template) {
          let searchIndex = 0;
          let templateIndex = 0;
          let starIndex = -1;
          let matchIndex = 0;
          while (searchIndex < search.length) {
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
              if (template[templateIndex] === "*") {
                starIndex = templateIndex;
                matchIndex = searchIndex;
                templateIndex++;
              } else {
                searchIndex++;
                templateIndex++;
              }
            } else if (starIndex !== -1) {
              templateIndex = starIndex + 1;
              matchIndex++;
              searchIndex = matchIndex;
            } else {
              return false;
            }
          }
          while (templateIndex < template.length && template[templateIndex] === "*") {
            templateIndex++;
          }
          return templateIndex === template.length;
        }
        function disable() {
          const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace) => "-" + namespace)
          ].join(",");
          createDebug.enable("");
          return namespaces;
        }
        function enabled(name) {
          for (const skip of createDebug.skips) {
            if (matchesTemplate(name, skip)) {
              return false;
            }
          }
          for (const ns of createDebug.names) {
            if (matchesTemplate(name, ns)) {
              return true;
            }
          }
          return false;
        }
        function coerce2(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }
          return val;
        }
        function destroy() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        createDebug.enable(createDebug.load());
        return createDebug;
      }
      module.exports = setup;
    }
  });

  // node_modules/@openai/agents-core/node_modules/debug/src/browser.js
  var require_browser = __commonJS({
    "node_modules/@openai/agents-core/node_modules/debug/src/browser.js"(exports, module) {
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      exports.destroy = /* @__PURE__ */ (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let m;
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, (match) => {
          if (match === "%%") {
            return;
          }
          index++;
          if (match === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      exports.log = console.debug || console.log || (() => {
      });
      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem("debug", namespaces);
          } else {
            exports.storage.removeItem("debug");
          }
        } catch (error2) {
        }
      }
      function load() {
        let r;
        try {
          r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
        } catch (error2) {
        }
        if (!r && typeof process !== "undefined" && "env" in process) {
          r = process.env.DEBUG;
        }
        return r;
      }
      function localstorage() {
        try {
          return localStorage;
        } catch (error2) {
        }
      }
      module.exports = require_common()(exports);
      var { formatters } = module.exports;
      formatters.j = function(v) {
        try {
          return JSON.stringify(v);
        } catch (error2) {
          return "[UnexpectedJSONParseError]: " + error2.message;
        }
      };
    }
  });

  // node_modules/@openai/agents-realtime/dist/metadata.mjs
  var METADATA = {
    "name": "@openai/agents-realtime",
    "version": "0.3.4",
    "versions": {
      "@openai/agents-realtime": "0.3.4",
      "@openai/agents-core": "workspace:*"
    }
  };
  var metadata_default = METADATA;

  // node_modules/@openai/agents-core/dist/utils/safeExecute.mjs
  async function safeExecute(fn) {
    try {
      return [null, await fn()];
    } catch (error2) {
      return [error2, null];
    }
  }

  // node_modules/zod/v4/core/core.js
  var NEVER = Object.freeze({
    status: "aborted"
  });
  var globalConfig = {};
  function config(newConfig) {
    if (newConfig)
      Object.assign(globalConfig, newConfig);
    return globalConfig;
  }

  // node_modules/zod/v4/core/util.js
  function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v) => typeof v === "number");
    const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
    return values;
  }
  function joinValues(array, separator = "|") {
    return array.map((val) => stringifyPrimitive(val)).join(separator);
  }
  function cached(getter) {
    const set = false;
    return {
      get value() {
        if (!set) {
          const value = getter();
          Object.defineProperty(this, "value", { value });
          return value;
        }
        throw new Error("cached value already set");
      }
    };
  }
  var captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : (..._args) => {
  };
  var allowsEval = cached(() => {
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
      return false;
    }
    try {
      const F = Function;
      new F("");
      return true;
    } catch (_) {
      return false;
    }
  });
  function stringifyPrimitive(value) {
    if (typeof value === "bigint")
      return value.toString() + "n";
    if (typeof value === "string")
      return `"${value}"`;
    return `${value}`;
  }
  var NUMBER_FORMAT_RANGES = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
  };

  // node_modules/zod/v4/locales/en.js
  var parsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  };
  var error = () => {
    const Sizable = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const Nouns = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input"
    };
    return (issue) => {
      switch (issue.code) {
        case "invalid_type":
          return `Invalid input: expected ${issue.expected}, received ${parsedType(issue.input)}`;
        case "invalid_value":
          if (issue.values.length === 1)
            return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
          return `Invalid option: expected one of ${joinValues(issue.values, "|")}`;
        case "too_big": {
          const adj = issue.inclusive ? "<=" : "<";
          const sizing = getSizing(issue.origin);
          if (sizing)
            return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
          return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue.inclusive ? ">=" : ">";
          const sizing = getSizing(issue.origin);
          if (sizing) {
            return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
          }
          return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue;
          if (_issue.format === "starts_with") {
            return `Invalid string: must start with "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `Invalid string: must end with "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Invalid string: must include "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Invalid string: must match pattern ${_issue.pattern}`;
          return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${issue.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${issue.origin}`;
        case "invalid_union":
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${issue.origin}`;
        default:
          return `Invalid input`;
      }
    };
  };
  function en_default() {
    return {
      localeError: error()
    };
  }

  // node_modules/zod/v4/core/registries.js
  var $ZodRegistry = class {
    constructor() {
      this._map = /* @__PURE__ */ new Map();
      this._idmap = /* @__PURE__ */ new Map();
    }
    add(schema, ..._meta) {
      const meta = _meta[0];
      this._map.set(schema, meta);
      if (meta && typeof meta === "object" && "id" in meta) {
        if (this._idmap.has(meta.id)) {
          throw new Error(`ID ${meta.id} already exists in the registry`);
        }
        this._idmap.set(meta.id, schema);
      }
      return this;
    }
    clear() {
      this._map = /* @__PURE__ */ new Map();
      this._idmap = /* @__PURE__ */ new Map();
      return this;
    }
    remove(schema) {
      const meta = this._map.get(schema);
      if (meta && typeof meta === "object" && "id" in meta) {
        this._idmap.delete(meta.id);
      }
      this._map.delete(schema);
      return this;
    }
    get(schema) {
      const p = schema._zod.parent;
      if (p) {
        const pm = { ...this.get(p) ?? {} };
        delete pm.id;
        return { ...pm, ...this._map.get(schema) };
      }
      return this._map.get(schema);
    }
    has(schema) {
      return this._map.has(schema);
    }
  };
  function registry() {
    return new $ZodRegistry();
  }
  var globalRegistry = /* @__PURE__ */ registry();

  // node_modules/zod/v4/core/to-json-schema.js
  var JSONSchemaGenerator = class {
    constructor(params) {
      this.counter = 0;
      this.metadataRegistry = params?.metadata ?? globalRegistry;
      this.target = params?.target ?? "draft-2020-12";
      this.unrepresentable = params?.unrepresentable ?? "throw";
      this.override = params?.override ?? (() => {
      });
      this.io = params?.io ?? "output";
      this.seen = /* @__PURE__ */ new Map();
    }
    process(schema, _params = { path: [], schemaPath: [] }) {
      var _a;
      const def = schema._zod.def;
      const formatMap = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: ""
        // do not set
      };
      const seen = this.seen.get(schema);
      if (seen) {
        seen.count++;
        const isCycle = _params.schemaPath.includes(schema);
        if (isCycle) {
          seen.cycle = _params.path;
        }
        return seen.schema;
      }
      const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
      this.seen.set(schema, result);
      const overrideSchema = schema._zod.toJSONSchema?.();
      if (overrideSchema) {
        result.schema = overrideSchema;
      } else {
        const params = {
          ..._params,
          schemaPath: [..._params.schemaPath, schema],
          path: _params.path
        };
        const parent = schema._zod.parent;
        if (parent) {
          result.ref = parent;
          this.process(parent, params);
          this.seen.get(parent).isParent = true;
        } else {
          const _json = result.schema;
          switch (def.type) {
            case "string": {
              const json = _json;
              json.type = "string";
              const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
              if (typeof minimum === "number")
                json.minLength = minimum;
              if (typeof maximum === "number")
                json.maxLength = maximum;
              if (format) {
                json.format = formatMap[format] ?? format;
                if (json.format === "")
                  delete json.format;
              }
              if (contentEncoding)
                json.contentEncoding = contentEncoding;
              if (patterns && patterns.size > 0) {
                const regexes = [...patterns];
                if (regexes.length === 1)
                  json.pattern = regexes[0].source;
                else if (regexes.length > 1) {
                  result.schema.allOf = [
                    ...regexes.map((regex) => ({
                      ...this.target === "draft-7" ? { type: "string" } : {},
                      pattern: regex.source
                    }))
                  ];
                }
              }
              break;
            }
            case "number": {
              const json = _json;
              const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
              if (typeof format === "string" && format.includes("int"))
                json.type = "integer";
              else
                json.type = "number";
              if (typeof exclusiveMinimum === "number")
                json.exclusiveMinimum = exclusiveMinimum;
              if (typeof minimum === "number") {
                json.minimum = minimum;
                if (typeof exclusiveMinimum === "number") {
                  if (exclusiveMinimum >= minimum)
                    delete json.minimum;
                  else
                    delete json.exclusiveMinimum;
                }
              }
              if (typeof exclusiveMaximum === "number")
                json.exclusiveMaximum = exclusiveMaximum;
              if (typeof maximum === "number") {
                json.maximum = maximum;
                if (typeof exclusiveMaximum === "number") {
                  if (exclusiveMaximum <= maximum)
                    delete json.maximum;
                  else
                    delete json.exclusiveMaximum;
                }
              }
              if (typeof multipleOf === "number")
                json.multipleOf = multipleOf;
              break;
            }
            case "boolean": {
              const json = _json;
              json.type = "boolean";
              break;
            }
            case "bigint": {
              if (this.unrepresentable === "throw") {
                throw new Error("BigInt cannot be represented in JSON Schema");
              }
              break;
            }
            case "symbol": {
              if (this.unrepresentable === "throw") {
                throw new Error("Symbols cannot be represented in JSON Schema");
              }
              break;
            }
            case "null": {
              _json.type = "null";
              break;
            }
            case "any": {
              break;
            }
            case "unknown": {
              break;
            }
            case "undefined": {
              if (this.unrepresentable === "throw") {
                throw new Error("Undefined cannot be represented in JSON Schema");
              }
              break;
            }
            case "void": {
              if (this.unrepresentable === "throw") {
                throw new Error("Void cannot be represented in JSON Schema");
              }
              break;
            }
            case "never": {
              _json.not = {};
              break;
            }
            case "date": {
              if (this.unrepresentable === "throw") {
                throw new Error("Date cannot be represented in JSON Schema");
              }
              break;
            }
            case "array": {
              const json = _json;
              const { minimum, maximum } = schema._zod.bag;
              if (typeof minimum === "number")
                json.minItems = minimum;
              if (typeof maximum === "number")
                json.maxItems = maximum;
              json.type = "array";
              json.items = this.process(def.element, { ...params, path: [...params.path, "items"] });
              break;
            }
            case "object": {
              const json = _json;
              json.type = "object";
              json.properties = {};
              const shape = def.shape;
              for (const key in shape) {
                json.properties[key] = this.process(shape[key], {
                  ...params,
                  path: [...params.path, "properties", key]
                });
              }
              const allKeys = new Set(Object.keys(shape));
              const requiredKeys = new Set([...allKeys].filter((key) => {
                const v = def.shape[key]._zod;
                if (this.io === "input") {
                  return v.optin === void 0;
                } else {
                  return v.optout === void 0;
                }
              }));
              if (requiredKeys.size > 0) {
                json.required = Array.from(requiredKeys);
              }
              if (def.catchall?._zod.def.type === "never") {
                json.additionalProperties = false;
              } else if (!def.catchall) {
                if (this.io === "output")
                  json.additionalProperties = false;
              } else if (def.catchall) {
                json.additionalProperties = this.process(def.catchall, {
                  ...params,
                  path: [...params.path, "additionalProperties"]
                });
              }
              break;
            }
            case "union": {
              const json = _json;
              json.anyOf = def.options.map((x, i) => this.process(x, {
                ...params,
                path: [...params.path, "anyOf", i]
              }));
              break;
            }
            case "intersection": {
              const json = _json;
              const a = this.process(def.left, {
                ...params,
                path: [...params.path, "allOf", 0]
              });
              const b = this.process(def.right, {
                ...params,
                path: [...params.path, "allOf", 1]
              });
              const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
              const allOf = [
                ...isSimpleIntersection(a) ? a.allOf : [a],
                ...isSimpleIntersection(b) ? b.allOf : [b]
              ];
              json.allOf = allOf;
              break;
            }
            case "tuple": {
              const json = _json;
              json.type = "array";
              const prefixItems = def.items.map((x, i) => this.process(x, { ...params, path: [...params.path, "prefixItems", i] }));
              if (this.target === "draft-2020-12") {
                json.prefixItems = prefixItems;
              } else {
                json.items = prefixItems;
              }
              if (def.rest) {
                const rest = this.process(def.rest, {
                  ...params,
                  path: [...params.path, "items"]
                });
                if (this.target === "draft-2020-12") {
                  json.items = rest;
                } else {
                  json.additionalItems = rest;
                }
              }
              if (def.rest) {
                json.items = this.process(def.rest, {
                  ...params,
                  path: [...params.path, "items"]
                });
              }
              const { minimum, maximum } = schema._zod.bag;
              if (typeof minimum === "number")
                json.minItems = minimum;
              if (typeof maximum === "number")
                json.maxItems = maximum;
              break;
            }
            case "record": {
              const json = _json;
              json.type = "object";
              json.propertyNames = this.process(def.keyType, { ...params, path: [...params.path, "propertyNames"] });
              json.additionalProperties = this.process(def.valueType, {
                ...params,
                path: [...params.path, "additionalProperties"]
              });
              break;
            }
            case "map": {
              if (this.unrepresentable === "throw") {
                throw new Error("Map cannot be represented in JSON Schema");
              }
              break;
            }
            case "set": {
              if (this.unrepresentable === "throw") {
                throw new Error("Set cannot be represented in JSON Schema");
              }
              break;
            }
            case "enum": {
              const json = _json;
              const values = getEnumValues(def.entries);
              if (values.every((v) => typeof v === "number"))
                json.type = "number";
              if (values.every((v) => typeof v === "string"))
                json.type = "string";
              json.enum = values;
              break;
            }
            case "literal": {
              const json = _json;
              const vals = [];
              for (const val of def.values) {
                if (val === void 0) {
                  if (this.unrepresentable === "throw") {
                    throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                  } else {
                  }
                } else if (typeof val === "bigint") {
                  if (this.unrepresentable === "throw") {
                    throw new Error("BigInt literals cannot be represented in JSON Schema");
                  } else {
                    vals.push(Number(val));
                  }
                } else {
                  vals.push(val);
                }
              }
              if (vals.length === 0) {
              } else if (vals.length === 1) {
                const val = vals[0];
                json.type = val === null ? "null" : typeof val;
                json.const = val;
              } else {
                if (vals.every((v) => typeof v === "number"))
                  json.type = "number";
                if (vals.every((v) => typeof v === "string"))
                  json.type = "string";
                if (vals.every((v) => typeof v === "boolean"))
                  json.type = "string";
                if (vals.every((v) => v === null))
                  json.type = "null";
                json.enum = vals;
              }
              break;
            }
            case "file": {
              const json = _json;
              const file = {
                type: "string",
                format: "binary",
                contentEncoding: "binary"
              };
              const { minimum, maximum, mime } = schema._zod.bag;
              if (minimum !== void 0)
                file.minLength = minimum;
              if (maximum !== void 0)
                file.maxLength = maximum;
              if (mime) {
                if (mime.length === 1) {
                  file.contentMediaType = mime[0];
                  Object.assign(json, file);
                } else {
                  json.anyOf = mime.map((m) => {
                    const mFile = { ...file, contentMediaType: m };
                    return mFile;
                  });
                }
              } else {
                Object.assign(json, file);
              }
              break;
            }
            case "transform": {
              if (this.unrepresentable === "throw") {
                throw new Error("Transforms cannot be represented in JSON Schema");
              }
              break;
            }
            case "nullable": {
              const inner = this.process(def.innerType, params);
              _json.anyOf = [inner, { type: "null" }];
              break;
            }
            case "nonoptional": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              break;
            }
            case "success": {
              const json = _json;
              json.type = "boolean";
              break;
            }
            case "default": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              _json.default = JSON.parse(JSON.stringify(def.defaultValue));
              break;
            }
            case "prefault": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              if (this.io === "input")
                _json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
              break;
            }
            case "catch": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              let catchValue;
              try {
                catchValue = def.catchValue(void 0);
              } catch {
                throw new Error("Dynamic catch values are not supported in JSON Schema");
              }
              _json.default = catchValue;
              break;
            }
            case "nan": {
              if (this.unrepresentable === "throw") {
                throw new Error("NaN cannot be represented in JSON Schema");
              }
              break;
            }
            case "template_literal": {
              const json = _json;
              const pattern = schema._zod.pattern;
              if (!pattern)
                throw new Error("Pattern not found in template literal");
              json.type = "string";
              json.pattern = pattern.source;
              break;
            }
            case "pipe": {
              const innerType = this.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
              this.process(innerType, params);
              result.ref = innerType;
              break;
            }
            case "readonly": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              _json.readOnly = true;
              break;
            }
            // passthrough types
            case "promise": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              break;
            }
            case "optional": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              break;
            }
            case "lazy": {
              const innerType = schema._zod.innerType;
              this.process(innerType, params);
              result.ref = innerType;
              break;
            }
            case "custom": {
              if (this.unrepresentable === "throw") {
                throw new Error("Custom types cannot be represented in JSON Schema");
              }
              break;
            }
            default: {
              def;
            }
          }
        }
      }
      const meta = this.metadataRegistry.get(schema);
      if (meta)
        Object.assign(result.schema, meta);
      if (this.io === "input" && isTransforming(schema)) {
        delete result.schema.examples;
        delete result.schema.default;
      }
      if (this.io === "input" && result.schema._prefault)
        (_a = result.schema).default ?? (_a.default = result.schema._prefault);
      delete result.schema._prefault;
      const _result = this.seen.get(schema);
      return _result.schema;
    }
    emit(schema, _params) {
      const params = {
        cycles: _params?.cycles ?? "ref",
        reused: _params?.reused ?? "inline",
        // unrepresentable: _params?.unrepresentable ?? "throw",
        // uri: _params?.uri ?? ((id) => `${id}`),
        external: _params?.external ?? void 0
      };
      const root = this.seen.get(schema);
      if (!root)
        throw new Error("Unprocessed schema. This is a bug in Zod.");
      const makeURI = (entry) => {
        const defsSegment = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (params.external) {
          const externalId = params.external.registry.get(entry[0])?.id;
          const uriGenerator = params.external.uri ?? ((id2) => id2);
          if (externalId) {
            return { ref: uriGenerator(externalId) };
          }
          const id = entry[1].defId ?? entry[1].schema.id ?? `schema${this.counter++}`;
          entry[1].defId = id;
          return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
        }
        if (entry[1] === root) {
          return { ref: "#" };
        }
        const uriPrefix = `#`;
        const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
        const defId = entry[1].schema.id ?? `__schema${this.counter++}`;
        return { defId, ref: defUriPrefix + defId };
      };
      const extractToDef = (entry) => {
        if (entry[1].schema.$ref) {
          return;
        }
        const seen = entry[1];
        const { ref, defId } = makeURI(entry);
        seen.def = { ...seen.schema };
        if (defId)
          seen.defId = defId;
        const schema2 = seen.schema;
        for (const key in schema2) {
          delete schema2[key];
        }
        schema2.$ref = ref;
      };
      if (params.cycles === "throw") {
        for (const entry of this.seen.entries()) {
          const seen = entry[1];
          if (seen.cycle) {
            throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        }
      }
      for (const entry of this.seen.entries()) {
        const seen = entry[1];
        if (schema === entry[0]) {
          extractToDef(entry);
          continue;
        }
        if (params.external) {
          const ext = params.external.registry.get(entry[0])?.id;
          if (schema !== entry[0] && ext) {
            extractToDef(entry);
            continue;
          }
        }
        const id = this.metadataRegistry.get(entry[0])?.id;
        if (id) {
          extractToDef(entry);
          continue;
        }
        if (seen.cycle) {
          extractToDef(entry);
          continue;
        }
        if (seen.count > 1) {
          if (params.reused === "ref") {
            extractToDef(entry);
            continue;
          }
        }
      }
      const flattenRef = (zodSchema, params2) => {
        const seen = this.seen.get(zodSchema);
        const schema2 = seen.def ?? seen.schema;
        const _cached = { ...schema2 };
        if (seen.ref === null) {
          return;
        }
        const ref = seen.ref;
        seen.ref = null;
        if (ref) {
          flattenRef(ref, params2);
          const refSchema = this.seen.get(ref).schema;
          if (refSchema.$ref && params2.target === "draft-7") {
            schema2.allOf = schema2.allOf ?? [];
            schema2.allOf.push(refSchema);
          } else {
            Object.assign(schema2, refSchema);
            Object.assign(schema2, _cached);
          }
        }
        if (!seen.isParent)
          this.override({
            zodSchema,
            jsonSchema: schema2,
            path: seen.path ?? []
          });
      };
      for (const entry of [...this.seen.entries()].reverse()) {
        flattenRef(entry[0], { target: this.target });
      }
      const result = {};
      if (this.target === "draft-2020-12") {
        result.$schema = "https://json-schema.org/draft/2020-12/schema";
      } else if (this.target === "draft-7") {
        result.$schema = "http://json-schema.org/draft-07/schema#";
      } else {
        console.warn(`Invalid target: ${this.target}`);
      }
      if (params.external?.uri) {
        const id = params.external.registry.get(schema)?.id;
        if (!id)
          throw new Error("Schema is missing an `id` property");
        result.$id = params.external.uri(id);
      }
      Object.assign(result, root.def);
      const defs = params.external?.defs ?? {};
      for (const entry of this.seen.entries()) {
        const seen = entry[1];
        if (seen.def && seen.defId) {
          defs[seen.defId] = seen.def;
        }
      }
      if (params.external) {
      } else {
        if (Object.keys(defs).length > 0) {
          if (this.target === "draft-2020-12") {
            result.$defs = defs;
          } else {
            result.definitions = defs;
          }
        }
      }
      try {
        return JSON.parse(JSON.stringify(result));
      } catch (_err) {
        throw new Error("Error converting schema to JSON.");
      }
    }
  };
  function toJSONSchema(input, _params) {
    if (input instanceof $ZodRegistry) {
      const gen2 = new JSONSchemaGenerator(_params);
      const defs = {};
      for (const entry of input._idmap.entries()) {
        const [_, schema] = entry;
        gen2.process(schema);
      }
      const schemas = {};
      const external = {
        registry: input,
        uri: _params?.uri,
        defs
      };
      for (const entry of input._idmap.entries()) {
        const [key, schema] = entry;
        schemas[key] = gen2.emit(schema, {
          ..._params,
          external
        });
      }
      if (Object.keys(defs).length > 0) {
        const defsSegment = gen2.target === "draft-2020-12" ? "$defs" : "definitions";
        schemas.__shared = {
          [defsSegment]: defs
        };
      }
      return { schemas };
    }
    const gen = new JSONSchemaGenerator(_params);
    gen.process(input);
    return gen.emit(input, _params);
  }
  function isTransforming(_schema, _ctx) {
    const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
    if (ctx.seen.has(_schema))
      return false;
    ctx.seen.add(_schema);
    const schema = _schema;
    const def = schema._zod.def;
    switch (def.type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "date":
      case "symbol":
      case "undefined":
      case "null":
      case "any":
      case "unknown":
      case "never":
      case "void":
      case "literal":
      case "enum":
      case "nan":
      case "file":
      case "template_literal":
        return false;
      case "array": {
        return isTransforming(def.element, ctx);
      }
      case "object": {
        for (const key in def.shape) {
          if (isTransforming(def.shape[key], ctx))
            return true;
        }
        return false;
      }
      case "union": {
        for (const option of def.options) {
          if (isTransforming(option, ctx))
            return true;
        }
        return false;
      }
      case "intersection": {
        return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
      }
      case "tuple": {
        for (const item of def.items) {
          if (isTransforming(item, ctx))
            return true;
        }
        if (def.rest && isTransforming(def.rest, ctx))
          return true;
        return false;
      }
      case "record": {
        return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
      }
      case "map": {
        return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
      }
      case "set": {
        return isTransforming(def.valueType, ctx);
      }
      // inner types
      case "promise":
      case "optional":
      case "nonoptional":
      case "nullable":
      case "readonly":
        return isTransforming(def.innerType, ctx);
      case "lazy":
        return isTransforming(def.getter(), ctx);
      case "default": {
        return isTransforming(def.innerType, ctx);
      }
      case "prefault": {
        return isTransforming(def.innerType, ctx);
      }
      case "custom": {
        return false;
      }
      case "transform": {
        return true;
      }
      case "pipe": {
        return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
      }
      case "success": {
        return false;
      }
      case "catch": {
        return false;
      }
      default:
        def;
    }
    throw new Error(`Unknown schema type: ${def.type}`);
  }

  // node_modules/zod/v4/classic/external.js
  config(en_default());

  // node_modules/openai/lib/parser.mjs
  function makeParseableTextFormat(response_format, parser) {
    const obj = { ...response_format };
    Object.defineProperties(obj, {
      $brand: {
        value: "auto-parseable-response-format",
        enumerable: false
      },
      $parseRaw: {
        value: parser,
        enumerable: false
      }
    });
    return obj;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/Options.mjs
  var ignoreOverride = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
  var defaultOptions = {
    name: void 0,
    $refStrategy: "root",
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    nullableStrategy: "from-target",
    removeAdditionalStrategy: "passthrough",
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
  };
  var getDefaultOptions = (options) => {
    return typeof options === "string" ? {
      ...defaultOptions,
      basePath: ["#"],
      definitions: {},
      name: options
    } : {
      ...defaultOptions,
      basePath: ["#"],
      definitions: {},
      ...options
    };
  };

  // node_modules/openai/_vendor/zod-to-json-schema/util.mjs
  var zodDef = (zodSchema) => {
    return "_def" in zodSchema ? zodSchema._def : zodSchema;
  };
  function isEmptyObj(obj) {
    if (!obj)
      return true;
    for (const _k in obj)
      return false;
    return true;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/Refs.mjs
  var getRefs = (options) => {
    const _options = getDefaultOptions(options);
    const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
    return {
      ..._options,
      currentPath,
      propertyPath: void 0,
      seenRefs: /* @__PURE__ */ new Set(),
      seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [
        zodDef(def),
        {
          def: zodDef(def),
          path: [..._options.basePath, _options.definitionPath, name],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ]))
    };
  };

  // node_modules/openai/_vendor/zod-to-json-schema/errorMessages.mjs
  function addErrorMessage(res, key, errorMessage, refs) {
    if (!refs?.errorMessages)
      return;
    if (errorMessage) {
      res.errorMessage = {
        ...res.errorMessage,
        [key]: errorMessage
      };
    }
  }
  function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage, refs);
  }

  // node_modules/zod/v3/external.js
  var external_exports = {};
  __export(external_exports, {
    BRAND: () => BRAND,
    DIRTY: () => DIRTY,
    EMPTY_PATH: () => EMPTY_PATH,
    INVALID: () => INVALID,
    NEVER: () => NEVER2,
    OK: () => OK,
    ParseStatus: () => ParseStatus,
    Schema: () => ZodType,
    ZodAny: () => ZodAny,
    ZodArray: () => ZodArray,
    ZodBigInt: () => ZodBigInt,
    ZodBoolean: () => ZodBoolean,
    ZodBranded: () => ZodBranded,
    ZodCatch: () => ZodCatch,
    ZodDate: () => ZodDate,
    ZodDefault: () => ZodDefault,
    ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
    ZodEffects: () => ZodEffects,
    ZodEnum: () => ZodEnum,
    ZodError: () => ZodError,
    ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
    ZodFunction: () => ZodFunction,
    ZodIntersection: () => ZodIntersection,
    ZodIssueCode: () => ZodIssueCode,
    ZodLazy: () => ZodLazy,
    ZodLiteral: () => ZodLiteral,
    ZodMap: () => ZodMap,
    ZodNaN: () => ZodNaN,
    ZodNativeEnum: () => ZodNativeEnum,
    ZodNever: () => ZodNever,
    ZodNull: () => ZodNull,
    ZodNullable: () => ZodNullable,
    ZodNumber: () => ZodNumber,
    ZodObject: () => ZodObject,
    ZodOptional: () => ZodOptional,
    ZodParsedType: () => ZodParsedType,
    ZodPipeline: () => ZodPipeline,
    ZodPromise: () => ZodPromise,
    ZodReadonly: () => ZodReadonly,
    ZodRecord: () => ZodRecord,
    ZodSchema: () => ZodType,
    ZodSet: () => ZodSet,
    ZodString: () => ZodString,
    ZodSymbol: () => ZodSymbol,
    ZodTransformer: () => ZodEffects,
    ZodTuple: () => ZodTuple,
    ZodType: () => ZodType,
    ZodUndefined: () => ZodUndefined,
    ZodUnion: () => ZodUnion,
    ZodUnknown: () => ZodUnknown,
    ZodVoid: () => ZodVoid,
    addIssueToContext: () => addIssueToContext,
    any: () => anyType,
    array: () => arrayType,
    bigint: () => bigIntType,
    boolean: () => booleanType,
    coerce: () => coerce,
    custom: () => custom,
    date: () => dateType,
    datetimeRegex: () => datetimeRegex,
    defaultErrorMap: () => en_default2,
    discriminatedUnion: () => discriminatedUnionType,
    effect: () => effectsType,
    enum: () => enumType,
    function: () => functionType,
    getErrorMap: () => getErrorMap,
    getParsedType: () => getParsedType,
    instanceof: () => instanceOfType,
    intersection: () => intersectionType,
    isAborted: () => isAborted,
    isAsync: () => isAsync,
    isDirty: () => isDirty,
    isValid: () => isValid,
    late: () => late,
    lazy: () => lazyType,
    literal: () => literalType,
    makeIssue: () => makeIssue,
    map: () => mapType,
    nan: () => nanType,
    nativeEnum: () => nativeEnumType,
    never: () => neverType,
    null: () => nullType,
    nullable: () => nullableType,
    number: () => numberType,
    object: () => objectType,
    objectUtil: () => objectUtil,
    oboolean: () => oboolean,
    onumber: () => onumber,
    optional: () => optionalType,
    ostring: () => ostring,
    pipeline: () => pipelineType,
    preprocess: () => preprocessType,
    promise: () => promiseType,
    quotelessJson: () => quotelessJson,
    record: () => recordType,
    set: () => setType,
    setErrorMap: () => setErrorMap,
    strictObject: () => strictObjectType,
    string: () => stringType,
    symbol: () => symbolType,
    transformer: () => effectsType,
    tuple: () => tupleType,
    undefined: () => undefinedType,
    union: () => unionType,
    unknown: () => unknownType,
    util: () => util,
    void: () => voidType
  });

  // node_modules/zod/v3/helpers/util.js
  var util;
  (function(util2) {
    util2.assertEqual = (_) => {
    };
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
      const filtered = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e) {
        return obj[e];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues2(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues2;
    util2.jsonStringifyReplacer = (_, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  var getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };

  // node_modules/zod/v3/ZodError.js
  var ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  var quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  var ZodError = class _ZodError extends Error {
    get errors() {
      return this.issues;
    }
    constructor(issues) {
      super();
      this.issues = [];
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error2) => {
        for (const issue of error2.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i = 0;
            while (i < issue.path.length) {
              const el = issue.path[i];
              const terminal = i === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    static assert(value) {
      if (!(value instanceof _ZodError)) {
        throw new Error(`Not a ZodError: ${value}`);
      }
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          const firstEl = sub.path[0];
          fieldErrors[firstEl] = fieldErrors[firstEl] || [];
          fieldErrors[firstEl].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  };
  ZodError.create = (issues) => {
    const error2 = new ZodError(issues);
    return error2;
  };

  // node_modules/zod/v3/locales/en.js
  var errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "bigint")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  var en_default2 = errorMap;

  // node_modules/zod/v3/errors.js
  var overrideErrorMap = en_default2;
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }

  // node_modules/zod/v3/helpers/parseUtil.js
  var makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    if (issueData.message !== void 0) {
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message
      };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m) => !!m).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: errorMessage
    };
  };
  var EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        overrideMap,
        // then global override map
        overrideMap === en_default2 ? void 0 : en_default2
        // then global default map
      ].filter((x) => !!x)
    });
    ctx.common.issues.push(issue);
  }
  var ParseStatus = class _ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s of results) {
        if (s.status === "aborted")
          return INVALID;
        if (s.status === "dirty")
          status.dirty();
        arrayValue.push(s.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key;
        const value = await pair.value;
        syncPairs.push({
          key,
          value
        });
      }
      return _ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  };
  var INVALID = Object.freeze({
    status: "aborted"
  });
  var DIRTY = (value) => ({ status: "dirty", value });
  var OK = (value) => ({ status: "valid", value });
  var isAborted = (x) => x.status === "aborted";
  var isDirty = (x) => x.status === "dirty";
  var isValid = (x) => x.status === "valid";
  var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

  // node_modules/zod/v3/helpers/errorUtil.js
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
  })(errorUtil || (errorUtil = {}));

  // node_modules/zod/v3/types.js
  var ParseInputLazyPath = class {
    constructor(parent, value, path, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (Array.isArray(this._key)) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  };
  var handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error2 = new ZodError(ctx.common.issues);
          this._error = error2;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      const { message } = params;
      if (iss.code === "invalid_enum_value") {
        return { message: message ?? ctx.defaultError };
      }
      if (typeof ctx.data === "undefined") {
        return { message: message ?? required_error ?? ctx.defaultError };
      }
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      return { message: message ?? invalid_type_error ?? ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  var ZodType = class {
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params) {
      const result = this.safeParse(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params) {
      const ctx = {
        common: {
          issues: [],
          async: params?.async ?? false,
          contextualErrorMap: params?.errorMap
        },
        path: params?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    "~validate"(data) {
      const ctx = {
        common: {
          issues: [],
          async: !!this["~standard"].async
        },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      if (!this["~standard"].async) {
        try {
          const result = this._parseSync({ data, path: [], parent: ctx });
          return isValid(result) ? {
            value: result.value
          } : {
            issues: ctx.common.issues
          };
        } catch (err) {
          if (err?.message?.toLowerCase()?.includes("encountered")) {
            this["~standard"].async = true;
          }
          ctx.common = {
            issues: [],
            async: true
          };
        }
      }
      return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
        value: result.value
      } : {
        issues: ctx.common.issues
      });
    }
    async parseAsync(data, params) {
      const result = await this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params?.errorMap,
          async: true
        },
        path: params?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    constructor(def) {
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
      this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (data) => this["~validate"](data)
      };
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    brand() {
      return new ZodBranded({
        typeName: ZodFirstPartyTypeKind.ZodBranded,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodCatch
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    readonly() {
      return ZodReadonly.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  };
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var cuid2Regex = /^[0-9a-z]+$/;
  var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  var nanoidRegex = /^[a-z0-9_-]{21}$/i;
  var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  var emojiRegex;
  var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  var dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
      secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
      secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
  }
  function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
  }
  function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
      opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
      return false;
    try {
      const [header] = jwt.split(".");
      if (!header)
        return false;
      const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base64));
      if (typeof decoded !== "object" || decoded === null)
        return false;
      if ("typ" in decoded && decoded?.typ !== "JWT")
        return false;
      if (!decoded.alg)
        return false;
      if (alg && decoded.alg !== alg)
        return false;
      return true;
    } catch {
      return false;
    }
  }
  function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
      return true;
    }
    return false;
  }
  var ZodString = class _ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "nanoid") {
          if (!nanoidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "nanoid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "date") {
          const regex = dateRegex;
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "date",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "time") {
          const regex = timeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "time",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "duration") {
          if (!durationRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "duration",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "jwt") {
          if (!isValidJWT(input.data, check.alg)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "jwt",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cidr") {
          if (!isValidCidr(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cidr",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64") {
          if (!base64Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64url") {
          if (!base64urlRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
      return this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
    }
    _addCheck(check) {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
      return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
      return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
      return this._addCheck({
        kind: "base64url",
        ...errorUtil.errToObj(message)
      });
    }
    jwt(options) {
      return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
      return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        offset: options?.offset ?? false,
        local: options?.local ?? false,
        ...errorUtil.errToObj(options?.message)
      });
    }
    date(message) {
      return this._addCheck({ kind: "date", message });
    }
    time(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: options
        });
      }
      return this._addCheck({
        kind: "time",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        ...errorUtil.errToObj(options?.message)
      });
    }
    duration(message) {
      return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options?.position,
        ...errorUtil.errToObj(options?.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
      return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
    }
    toLowerCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
    }
    toUpperCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxLength() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  ZodString.create = (params) => {
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
  }
  var ZodNumber = class _ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max = null;
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        } else if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return Number.isFinite(min) && Number.isFinite(max);
    }
  };
  ZodNumber.create = (params) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  var ZodBigInt = class _ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        try {
          input.data = BigInt(input.data);
        } catch {
          return this._getInvalidInput(input);
        }
      }
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.bigint) {
        return this._getInvalidInput(input);
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  ZodBigInt.create = (params) => {
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  };
  var ZodBoolean = class extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodBoolean.create = (params) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  };
  var ZodDate = class _ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (Number.isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new _ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min != null ? new Date(min) : null;
    }
    get maxDate() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max != null ? new Date(max) : null;
    }
  };
  ZodDate.create = (params) => {
    return new ZodDate({
      checks: [],
      coerce: params?.coerce || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params)
    });
  };
  var ZodSymbol = class extends ZodType {
    _parse(input) {
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodSymbol.create = (params) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params)
    });
  };
  var ZodUndefined = class extends ZodType {
    _parse(input) {
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodUndefined.create = (params) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params)
    });
  };
  var ZodNull = class extends ZodType {
    _parse(input) {
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodNull.create = (params) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params)
    });
  };
  var ZodAny = class extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodAny.create = (params) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params)
    });
  };
  var ZodUnknown = class extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodUnknown.create = (params) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params)
    });
  };
  var ZodNever = class extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  };
  ZodNever.create = (params) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params)
    });
  };
  var ZodVoid = class extends ZodType {
    _parse(input) {
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodVoid.create = (params) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params)
    });
  };
  var ZodArray = class _ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = [...ctx.data].map((item, i) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new _ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new _ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new _ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodArray.create = (schema, params) => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params)
    });
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  var ZodObject = class _ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      this._cached = { shape, keys };
      return this._cached;
    }
    _parse(input) {
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") {
        } else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: errorUtil.errToObj(message).message ?? defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
      return new _ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
      const merged = new _ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
      return new _ZodObject({
        ...this._def,
        catchall: index
      });
    }
    pick(mask) {
      const shape = {};
      for (const key of util.objectKeys(mask)) {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    /**
     * @deprecated
     */
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      }
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      }
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  };
  ZodObject.create = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  var ZodUnion = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  ZodUnion.create = (types, params) => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params)
    });
  };
  var getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return util.objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else if (type instanceof ZodOptional) {
      return [void 0, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodNullable) {
      return [null, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodBranded) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
      return getDiscriminator(type._def.innerType);
    } else {
      return [];
    }
  };
  var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.optionsMap.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
      const optionsMap = /* @__PURE__ */ new Map();
      for (const type of options) {
        const discriminatorValues = getDiscriminator(type.shape[discriminator]);
        if (!discriminatorValues.length) {
          throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
          }
          optionsMap.set(value, type);
        }
      }
      return new _ZodDiscriminatedUnion({
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
        discriminator,
        options,
        optionsMap,
        ...processCreateParams(params)
      });
    }
  };
  function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
      return { valid: true, data: a };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b);
      const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a, ...b };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a.length !== b.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
      return { valid: true, data: a };
    } else {
      return { valid: false };
    }
  }
  var ZodIntersection = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  };
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params)
    });
  };
  var ZodTuple = class _ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x) => !!x);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new _ZodTuple({
        ...this._def,
        rest
      });
    }
  };
  ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params)
    });
  };
  var ZodRecord = class _ZodRecord extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second, third) {
      if (second instanceof ZodType) {
        return new _ZodRecord({
          keyType: first,
          valueType: second,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(third)
        });
      }
      return new _ZodRecord({
        keyType: ZodString.create(),
        valueType: first,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(second)
      });
    }
  };
  var ZodMap = class extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  };
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params)
    });
  };
  var ZodSet = class _ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new _ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new _ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size, message) {
      return this.min(size, message).max(size, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodSet.create = (valueType, params) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params)
    });
  };
  var ZodFunction = class _ZodFunction extends ZodType {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error2) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default2].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error2
          }
        });
      }
      function makeReturnsIssue(returns, error2) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default2].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error2
          }
        });
      }
      const params = { errorMap: ctx.common.contextualErrorMap };
      const fn = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        const me = this;
        return OK(async function(...args) {
          const error2 = new ZodError([]);
          const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
            error2.addIssue(makeArgsIssue(args, e));
            throw error2;
          });
          const result = await Reflect.apply(fn, this, parsedArgs);
          const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
            error2.addIssue(makeReturnsIssue(result, e));
            throw error2;
          });
          return parsedReturns;
        });
      } else {
        const me = this;
        return OK(function(...args) {
          const parsedArgs = me._def.args.safeParse(args, params);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = Reflect.apply(fn, this, parsedArgs.data);
          const parsedReturns = me._def.returns.safeParse(result, params);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new _ZodFunction({
        ...this._def,
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      });
    }
    returns(returnType) {
      return new _ZodFunction({
        ...this._def,
        returns: returnType
      });
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    static create(args, returns, params) {
      return new _ZodFunction({
        args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
        returns: returns || ZodUnknown.create(),
        typeName: ZodFirstPartyTypeKind.ZodFunction,
        ...processCreateParams(params)
      });
    }
  };
  var ZodLazy = class extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  };
  ZodLazy.create = (getter, params) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params)
    });
  };
  var ZodLiteral = class extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  };
  ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params)
    });
  };
  function createZodEnum(values, params) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum,
      ...processCreateParams(params)
    });
  }
  var ZodEnum = class _ZodEnum extends ZodType {
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!this._cache) {
        this._cache = new Set(this._def.values);
      }
      if (!this._cache.has(input.data)) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values, newDef = this._def) {
      return _ZodEnum.create(values, {
        ...this._def,
        ...newDef
      });
    }
    exclude(values, newDef = this._def) {
      return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
        ...this._def,
        ...newDef
      });
    }
  };
  ZodEnum.create = createZodEnum;
  var ZodNativeEnum = class extends ZodType {
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!this._cache) {
        this._cache = new Set(util.getValidEnumValues(this._def.values));
      }
      if (!this._cache.has(input.data)) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params)
    });
  };
  var ZodPromise = class extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  };
  ZodPromise.create = (schema, params) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params)
    });
  };
  var ZodEffects = class extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(processed).then(async (processed2) => {
            if (status.value === "aborted")
              return INVALID;
            const result = await this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          });
        } else {
          if (status.value === "aborted")
            return INVALID;
          const result = this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return INVALID;
          const result = effect.transform(base.value, checkCtx);
          if (result instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return INVALID;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
              status: status.value,
              value: result
            }));
          });
        }
      }
      util.assertNever(effect);
    }
  };
  ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params)
    });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params)
    });
  };
  var ZodOptional = class extends ZodType {
    _parse(input) {
      const parsedType2 = this._getType(input);
      if (parsedType2 === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodOptional.create = (type, params) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params)
    });
  };
  var ZodNullable = class extends ZodType {
    _parse(input) {
      const parsedType2 = this._getType(input);
      if (parsedType2 === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodNullable.create = (type, params) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params)
    });
  };
  var ZodDefault = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  ZodDefault.create = (type, params) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
  var ZodCatch = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result)) {
        return result.then((result2) => {
          return {
            status: "valid",
            value: result2.status === "valid" ? result2.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  ZodCatch.create = (type, params) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
  var ZodNaN = class extends ZodType {
    _parse(input) {
      const parsedType2 = this._getType(input);
      if (parsedType2 !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  };
  ZodNaN.create = (params) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params)
    });
  };
  var BRAND = /* @__PURE__ */ Symbol("zod_brand");
  var ZodBranded = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  };
  var ZodPipeline = class _ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a, b) {
      return new _ZodPipeline({
        in: a,
        out: b,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  };
  var ZodReadonly = class extends ZodType {
    _parse(input) {
      const result = this._def.innerType._parse(input);
      const freeze = (data) => {
        if (isValid(data)) {
          data.value = Object.freeze(data.value);
        }
        return data;
      };
      return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params)
    });
  };
  function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
    const p2 = typeof p === "string" ? { message: p } : p;
    return p2;
  }
  function custom(check, _params = {}, fatal) {
    if (check)
      return ZodAny.create().superRefine((data, ctx) => {
        const r = check(data);
        if (r instanceof Promise) {
          return r.then((r2) => {
            if (!r2) {
              const params = cleanParams(_params, data);
              const _fatal = params.fatal ?? fatal ?? true;
              ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
            }
          });
        }
        if (!r) {
          const params = cleanParams(_params, data);
          const _fatal = params.fatal ?? fatal ?? true;
          ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
        }
        return;
      });
    return ZodAny.create();
  }
  var late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  var instanceOfType = (cls, params = {
    message: `Input not instance of ${cls.name}`
  }) => custom((data) => data instanceof cls, params);
  var stringType = ZodString.create;
  var numberType = ZodNumber.create;
  var nanType = ZodNaN.create;
  var bigIntType = ZodBigInt.create;
  var booleanType = ZodBoolean.create;
  var dateType = ZodDate.create;
  var symbolType = ZodSymbol.create;
  var undefinedType = ZodUndefined.create;
  var nullType = ZodNull.create;
  var anyType = ZodAny.create;
  var unknownType = ZodUnknown.create;
  var neverType = ZodNever.create;
  var voidType = ZodVoid.create;
  var arrayType = ZodArray.create;
  var objectType = ZodObject.create;
  var strictObjectType = ZodObject.strictCreate;
  var unionType = ZodUnion.create;
  var discriminatedUnionType = ZodDiscriminatedUnion.create;
  var intersectionType = ZodIntersection.create;
  var tupleType = ZodTuple.create;
  var recordType = ZodRecord.create;
  var mapType = ZodMap.create;
  var setType = ZodSet.create;
  var functionType = ZodFunction.create;
  var lazyType = ZodLazy.create;
  var literalType = ZodLiteral.create;
  var enumType = ZodEnum.create;
  var nativeEnumType = ZodNativeEnum.create;
  var promiseType = ZodPromise.create;
  var effectsType = ZodEffects.create;
  var optionalType = ZodOptional.create;
  var nullableType = ZodNullable.create;
  var preprocessType = ZodEffects.createWithPreprocess;
  var pipelineType = ZodPipeline.create;
  var ostring = () => stringType().optional();
  var onumber = () => numberType().optional();
  var oboolean = () => booleanType().optional();
  var coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
      ...arg,
      coerce: true
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
  };
  var NEVER2 = INVALID;

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/any.mjs
  function parseAnyDef() {
    return {};
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/array.mjs
  function parseArrayDef(def, refs) {
    const res = {
      type: "array"
    };
    if (def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) {
      res.items = parseDef(def.type._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items"]
      });
    }
    if (def.minLength) {
      setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
    }
    if (def.maxLength) {
      setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
    }
    if (def.exactLength) {
      setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
      setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
    }
    return res;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/bigint.mjs
  function parseBigintDef(def, refs) {
    const res = {
      type: "integer",
      format: "int64"
    };
    if (!def.checks)
      return res;
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMinimum = true;
            }
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          }
          break;
        case "max":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMaximum = true;
            }
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          }
          break;
        case "multipleOf":
          setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
          break;
      }
    }
    return res;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/boolean.mjs
  function parseBooleanDef() {
    return {
      type: "boolean"
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/branded.mjs
  function parseBrandedDef(_def, refs) {
    return parseDef(_def.type._def, refs);
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/catch.mjs
  var parseCatchDef = (def, refs) => {
    return parseDef(def.innerType._def, refs);
  };

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/date.mjs
  function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) {
      return {
        anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
      };
    }
    switch (strategy) {
      case "string":
      case "format:date-time":
        return {
          type: "string",
          format: "date-time"
        };
      case "format:date":
        return {
          type: "string",
          format: "date"
        };
      case "integer":
        return integerDateParser(def, refs);
    }
  }
  var integerDateParser = (def, refs) => {
    const res = {
      type: "integer",
      format: "unix-time"
    };
    if (refs.target === "openApi3") {
      return res;
    }
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          setResponseValueAndErrors(
            res,
            "minimum",
            check.value,
            // This is in milliseconds
            check.message,
            refs
          );
          break;
        case "max":
          setResponseValueAndErrors(
            res,
            "maximum",
            check.value,
            // This is in milliseconds
            check.message,
            refs
          );
          break;
      }
    }
    return res;
  };

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/default.mjs
  function parseDefaultDef(_def, refs) {
    return {
      ...parseDef(_def.innerType._def, refs),
      default: _def.defaultValue()
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/effects.mjs
  function parseEffectsDef(_def, refs, forceResolution) {
    return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs, forceResolution) : {};
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/enum.mjs
  function parseEnumDef(def) {
    return {
      type: "string",
      enum: [...def.values]
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/intersection.mjs
  var isJsonSchema7AllOfType = (type) => {
    if ("type" in type && type.type === "string")
      return false;
    return "allOf" in type;
  };
  function parseIntersectionDef(def, refs) {
    const allOf = [
      parseDef(def.left._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", "0"]
      }),
      parseDef(def.right._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", "1"]
      })
    ].filter((x) => !!x);
    let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
    const mergedAllOf = [];
    allOf.forEach((schema) => {
      if (isJsonSchema7AllOfType(schema)) {
        mergedAllOf.push(...schema.allOf);
        if (schema.unevaluatedProperties === void 0) {
          unevaluatedProperties = void 0;
        }
      } else {
        let nestedSchema = schema;
        if ("additionalProperties" in schema && schema.additionalProperties === false) {
          const { additionalProperties, ...rest } = schema;
          nestedSchema = rest;
        } else {
          unevaluatedProperties = void 0;
        }
        mergedAllOf.push(nestedSchema);
      }
    });
    return mergedAllOf.length ? {
      allOf: mergedAllOf,
      ...unevaluatedProperties
    } : void 0;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/literal.mjs
  function parseLiteralDef(def, refs) {
    const parsedType2 = typeof def.value;
    if (parsedType2 !== "bigint" && parsedType2 !== "number" && parsedType2 !== "boolean" && parsedType2 !== "string") {
      return {
        type: Array.isArray(def.value) ? "array" : "object"
      };
    }
    if (refs.target === "openApi3") {
      return {
        type: parsedType2 === "bigint" ? "integer" : parsedType2,
        enum: [def.value]
      };
    }
    return {
      type: parsedType2 === "bigint" ? "integer" : parsedType2,
      const: def.value
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/string.mjs
  var emojiRegex2;
  var zodPatterns = {
    /**
     * `c` was changed to `[cC]` to replicate /i flag
     */
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    /**
     * `a-z` was added to replicate /i flag
     */
    email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    /**
     * Constructed a valid Unicode RegExp
     *
     * Lazily instantiate since this type of regex isn't supported
     * in all envs (e.g. React Native).
     *
     * See:
     * https://github.com/colinhacks/zod/issues/2433
     * Fix in Zod:
     * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
     */
    emoji: () => {
      if (emojiRegex2 === void 0) {
        emojiRegex2 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
      }
      return emojiRegex2;
    },
    /**
     * Unused
     */
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    /**
     * Unused
     */
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    /**
     * Unused
     */
    ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/
  };
  function parseStringDef(def, refs) {
    const res = {
      type: "string"
    };
    function processPattern(value) {
      return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(value) : value;
    }
    if (def.checks) {
      for (const check of def.checks) {
        switch (check.kind) {
          case "min":
            setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
            break;
          case "max":
            setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
            break;
          case "email":
            switch (refs.emailStrategy) {
              case "format:email":
                addFormat(res, "email", check.message, refs);
                break;
              case "format:idn-email":
                addFormat(res, "idn-email", check.message, refs);
                break;
              case "pattern:zod":
                addPattern(res, zodPatterns.email, check.message, refs);
                break;
            }
            break;
          case "url":
            addFormat(res, "uri", check.message, refs);
            break;
          case "uuid":
            addFormat(res, "uuid", check.message, refs);
            break;
          case "regex":
            addPattern(res, check.regex, check.message, refs);
            break;
          case "cuid":
            addPattern(res, zodPatterns.cuid, check.message, refs);
            break;
          case "cuid2":
            addPattern(res, zodPatterns.cuid2, check.message, refs);
            break;
          case "startsWith":
            addPattern(res, RegExp(`^${processPattern(check.value)}`), check.message, refs);
            break;
          case "endsWith":
            addPattern(res, RegExp(`${processPattern(check.value)}$`), check.message, refs);
            break;
          case "datetime":
            addFormat(res, "date-time", check.message, refs);
            break;
          case "date":
            addFormat(res, "date", check.message, refs);
            break;
          case "time":
            addFormat(res, "time", check.message, refs);
            break;
          case "duration":
            addFormat(res, "duration", check.message, refs);
            break;
          case "length":
            setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
            setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
            break;
          case "includes": {
            addPattern(res, RegExp(processPattern(check.value)), check.message, refs);
            break;
          }
          case "ip": {
            if (check.version !== "v6") {
              addFormat(res, "ipv4", check.message, refs);
            }
            if (check.version !== "v4") {
              addFormat(res, "ipv6", check.message, refs);
            }
            break;
          }
          case "emoji":
            addPattern(res, zodPatterns.emoji, check.message, refs);
            break;
          case "ulid": {
            addPattern(res, zodPatterns.ulid, check.message, refs);
            break;
          }
          case "base64": {
            switch (refs.base64Strategy) {
              case "format:binary": {
                addFormat(res, "binary", check.message, refs);
                break;
              }
              case "contentEncoding:base64": {
                setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
                break;
              }
              case "pattern:zod": {
                addPattern(res, zodPatterns.base64, check.message, refs);
                break;
              }
            }
            break;
          }
          case "nanoid": {
            addPattern(res, zodPatterns.nanoid, check.message, refs);
          }
          case "toLowerCase":
          case "toUpperCase":
          case "trim":
            break;
          default:
            /* @__PURE__ */ ((_) => {
            })(check);
        }
      }
    }
    return res;
  }
  var escapeNonAlphaNumeric = (value) => Array.from(value).map((c) => /[a-zA-Z0-9]/.test(c) ? c : `\\${c}`).join("");
  var addFormat = (schema, value, message, refs) => {
    if (schema.format || schema.anyOf?.some((x) => x.format)) {
      if (!schema.anyOf) {
        schema.anyOf = [];
      }
      if (schema.format) {
        schema.anyOf.push({
          format: schema.format,
          ...schema.errorMessage && refs.errorMessages && {
            errorMessage: { format: schema.errorMessage.format }
          }
        });
        delete schema.format;
        if (schema.errorMessage) {
          delete schema.errorMessage.format;
          if (Object.keys(schema.errorMessage).length === 0) {
            delete schema.errorMessage;
          }
        }
      }
      schema.anyOf.push({
        format: value,
        ...message && refs.errorMessages && { errorMessage: { format: message } }
      });
    } else {
      setResponseValueAndErrors(schema, "format", value, message, refs);
    }
  };
  var addPattern = (schema, regex, message, refs) => {
    if (schema.pattern || schema.allOf?.some((x) => x.pattern)) {
      if (!schema.allOf) {
        schema.allOf = [];
      }
      if (schema.pattern) {
        schema.allOf.push({
          pattern: schema.pattern,
          ...schema.errorMessage && refs.errorMessages && {
            errorMessage: { pattern: schema.errorMessage.pattern }
          }
        });
        delete schema.pattern;
        if (schema.errorMessage) {
          delete schema.errorMessage.pattern;
          if (Object.keys(schema.errorMessage).length === 0) {
            delete schema.errorMessage;
          }
        }
      }
      schema.allOf.push({
        pattern: processRegExp(regex, refs),
        ...message && refs.errorMessages && { errorMessage: { pattern: message } }
      });
    } else {
      setResponseValueAndErrors(schema, "pattern", processRegExp(regex, refs), message, refs);
    }
  };
  var processRegExp = (regexOrFunction, refs) => {
    const regex = typeof regexOrFunction === "function" ? regexOrFunction() : regexOrFunction;
    if (!refs.applyRegexFlags || !regex.flags)
      return regex.source;
    const flags = {
      i: regex.flags.includes("i"),
      // Case-insensitive
      m: regex.flags.includes("m"),
      // `^` and `$` matches adjacent to newline characters
      s: regex.flags.includes("s")
      // `.` matches newlines
    };
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for (let i = 0; i < source.length; i++) {
      if (isEscaped) {
        pattern += source[i];
        isEscaped = false;
        continue;
      }
      if (flags.i) {
        if (inCharGroup) {
          if (source[i].match(/[a-z]/)) {
            if (inCharRange) {
              pattern += source[i];
              pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
              inCharRange = false;
            } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
              pattern += source[i];
              inCharRange = true;
            } else {
              pattern += `${source[i]}${source[i].toUpperCase()}`;
            }
            continue;
          }
        } else if (source[i].match(/[a-z]/)) {
          pattern += `[${source[i]}${source[i].toUpperCase()}]`;
          continue;
        }
      }
      if (flags.m) {
        if (source[i] === "^") {
          pattern += `(^|(?<=[\r
]))`;
          continue;
        } else if (source[i] === "$") {
          pattern += `($|(?=[\r
]))`;
          continue;
        }
      }
      if (flags.s && source[i] === ".") {
        pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
        continue;
      }
      pattern += source[i];
      if (source[i] === "\\") {
        isEscaped = true;
      } else if (inCharGroup && source[i] === "]") {
        inCharGroup = false;
      } else if (!inCharGroup && source[i] === "[") {
        inCharGroup = true;
      }
    }
    try {
      const regexTest = new RegExp(pattern);
    } catch {
      console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
      return regex.source;
    }
    return pattern;
  };

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/record.mjs
  function parseRecordDef(def, refs) {
    if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
      return {
        type: "object",
        required: def.keyType._def.values,
        properties: def.keyType._def.values.reduce((acc, key) => ({
          ...acc,
          [key]: parseDef(def.valueType._def, {
            ...refs,
            currentPath: [...refs.currentPath, "properties", key]
          }) ?? {}
        }), {}),
        additionalProperties: false
      };
    }
    const schema = {
      type: "object",
      additionalProperties: parseDef(def.valueType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalProperties"]
      }) ?? {}
    };
    if (refs.target === "openApi3") {
      return schema;
    }
    if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
      const keyType = Object.entries(parseStringDef(def.keyType._def, refs)).reduce((acc, [key, value]) => key === "type" ? acc : { ...acc, [key]: value }, {});
      return {
        ...schema,
        propertyNames: keyType
      };
    } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
      return {
        ...schema,
        propertyNames: {
          enum: def.keyType._def.values
        }
      };
    }
    return schema;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/map.mjs
  function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
      return parseRecordDef(def, refs);
    }
    const keys = parseDef(def.keyType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", "items", "0"]
    }) || {};
    const values = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", "items", "1"]
    }) || {};
    return {
      type: "array",
      maxItems: 125,
      items: {
        type: "array",
        items: [keys, values],
        minItems: 2,
        maxItems: 2
      }
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/nativeEnum.mjs
  function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key) => {
      return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key) => object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
    return {
      type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
      enum: actualValues
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/never.mjs
  function parseNeverDef() {
    return {
      not: {}
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/null.mjs
  function parseNullDef(refs) {
    return refs.target === "openApi3" ? {
      enum: ["null"],
      nullable: true
    } : {
      type: "null"
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/union.mjs
  var primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
  };
  function parseUnionDef(def, refs) {
    if (refs.target === "openApi3")
      return asAnyOf(def, refs);
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
      const types = options.reduce((types2, x) => {
        const type = primitiveMappings[x._def.typeName];
        return type && !types2.includes(type) ? [...types2, type] : types2;
      }, []);
      return {
        type: types.length > 1 ? types : types[0]
      };
    } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
      const types = options.reduce((acc, x) => {
        const type = typeof x._def.value;
        switch (type) {
          case "string":
          case "number":
          case "boolean":
            return [...acc, type];
          case "bigint":
            return [...acc, "integer"];
          case "object":
            if (x._def.value === null)
              return [...acc, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return acc;
        }
      }, []);
      if (types.length === options.length) {
        const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
        return {
          type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
          enum: options.reduce((acc, x) => {
            return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
          }, [])
        };
      }
    } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
      return {
        type: "string",
        enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x2) => !acc.includes(x2))], [])
      };
    }
    return asAnyOf(def, refs);
  }
  var asAnyOf = (def, refs) => {
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", `${i}`]
    })).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? { anyOf } : void 0;
  };

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/nullable.mjs
  function parseNullableDef(def, refs) {
    if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
      if (refs.target === "openApi3" || refs.nullableStrategy === "property") {
        return {
          type: primitiveMappings[def.innerType._def.typeName],
          nullable: true
        };
      }
      return {
        type: [primitiveMappings[def.innerType._def.typeName], "null"]
      };
    }
    if (refs.target === "openApi3") {
      const base2 = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [...refs.currentPath]
      });
      if (base2 && "$ref" in base2)
        return { allOf: [base2], nullable: true };
      return base2 && { ...base2, nullable: true };
    }
    const base = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", "0"]
    });
    return base && { anyOf: [base, { type: "null" }] };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/number.mjs
  function parseNumberDef(def, refs) {
    const res = {
      type: "number"
    };
    if (!def.checks)
      return res;
    for (const check of def.checks) {
      switch (check.kind) {
        case "int":
          res.type = "integer";
          addErrorMessage(res, "type", check.message, refs);
          break;
        case "min":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMinimum = true;
            }
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          }
          break;
        case "max":
          if (refs.target === "jsonSchema7") {
            if (check.inclusive) {
              setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
            } else {
              setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
            }
          } else {
            if (!check.inclusive) {
              res.exclusiveMaximum = true;
            }
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          }
          break;
        case "multipleOf":
          setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
          break;
      }
    }
    return res;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/object.mjs
  function decideAdditionalProperties(def, refs) {
    if (refs.removeAdditionalStrategy === "strict") {
      return def.catchall._def.typeName === "ZodNever" ? def.unknownKeys !== "strict" : parseDef(def.catchall._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalProperties"]
      }) ?? true;
    } else {
      return def.catchall._def.typeName === "ZodNever" ? def.unknownKeys === "passthrough" : parseDef(def.catchall._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalProperties"]
      }) ?? true;
    }
  }
  function parseObjectDef(def, refs) {
    const result = {
      type: "object",
      ...Object.entries(def.shape()).reduce((acc, [propName, propDef]) => {
        if (propDef === void 0 || propDef._def === void 0)
          return acc;
        const propertyPath = [...refs.currentPath, "properties", propName];
        const parsedDef = parseDef(propDef._def, {
          ...refs,
          currentPath: propertyPath,
          propertyPath
        });
        if (parsedDef === void 0)
          return acc;
        if (refs.openaiStrictMode && propDef.isOptional() && !propDef.isNullable() && typeof propDef._def?.defaultValue === "undefined") {
          throw new Error(`Zod field at \`${propertyPath.join("/")}\` uses \`.optional()\` without \`.nullable()\` which is not supported by the API. See: https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses#all-fields-must-be-required`);
        }
        return {
          properties: {
            ...acc.properties,
            [propName]: parsedDef
          },
          required: propDef.isOptional() && !refs.openaiStrictMode ? acc.required : [...acc.required, propName]
        };
      }, { properties: {}, required: [] }),
      additionalProperties: decideAdditionalProperties(def, refs)
    };
    if (!result.required.length)
      delete result.required;
    return result;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/optional.mjs
  var parseOptionalDef = (def, refs) => {
    if (refs.propertyPath && refs.currentPath.slice(0, refs.propertyPath.length).toString() === refs.propertyPath.toString()) {
      return parseDef(def.innerType._def, { ...refs, currentPath: refs.currentPath });
    }
    const innerSchema = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", "1"]
    });
    return innerSchema ? {
      anyOf: [
        {
          not: {}
        },
        innerSchema
      ]
    } : {};
  };

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/pipeline.mjs
  var parsePipelineDef = (def, refs) => {
    if (refs.pipeStrategy === "input") {
      return parseDef(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
      return parseDef(def.out._def, refs);
    }
    const a = parseDef(def.in._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    });
    const b = parseDef(def.out._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
    });
    return {
      allOf: [a, b].filter((x) => x !== void 0)
    };
  };

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/promise.mjs
  function parsePromiseDef(def, refs) {
    return parseDef(def.type._def, refs);
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/set.mjs
  function parseSetDef(def, refs) {
    const items = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
    const schema = {
      type: "array",
      uniqueItems: true,
      items
    };
    if (def.minSize) {
      setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs);
    }
    if (def.maxSize) {
      setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
    }
    return schema;
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/tuple.mjs
  function parseTupleDef(def, refs) {
    if (def.rest) {
      return {
        type: "array",
        minItems: def.items.length,
        items: def.items.map((x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
        additionalItems: parseDef(def.rest._def, {
          ...refs,
          currentPath: [...refs.currentPath, "additionalItems"]
        })
      };
    } else {
      return {
        type: "array",
        minItems: def.items.length,
        maxItems: def.items.length,
        items: def.items.map((x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
      };
    }
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/undefined.mjs
  function parseUndefinedDef() {
    return {
      not: {}
    };
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/unknown.mjs
  function parseUnknownDef() {
    return {};
  }

  // node_modules/openai/_vendor/zod-to-json-schema/parsers/readonly.mjs
  var parseReadonlyDef = (def, refs) => {
    return parseDef(def.innerType._def, refs);
  };

  // node_modules/openai/_vendor/zod-to-json-schema/parseDef.mjs
  function parseDef(def, refs, forceResolution = false) {
    const seenItem = refs.seen.get(def);
    if (refs.override) {
      const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
      if (overrideResult !== ignoreOverride) {
        return overrideResult;
      }
    }
    if (seenItem && !forceResolution) {
      const seenSchema = get$ref(seenItem, refs);
      if (seenSchema !== void 0) {
        if ("$ref" in seenSchema) {
          refs.seenRefs.add(seenSchema.$ref);
        }
        return seenSchema;
      }
    }
    const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
    refs.seen.set(def, newItem);
    const jsonSchema = selectParser(def, def.typeName, refs, forceResolution);
    if (jsonSchema) {
      addMeta(def, refs, jsonSchema);
    }
    newItem.jsonSchema = jsonSchema;
    return jsonSchema;
  }
  var get$ref = (item, refs) => {
    switch (refs.$refStrategy) {
      case "root":
        return { $ref: item.path.join("/") };
      // this case is needed as OpenAI strict mode doesn't support top-level `$ref`s, i.e.
      // the top-level schema *must* be `{"type": "object", "properties": {...}}` but if we ever
      // need to define a `$ref`, relative `$ref`s aren't supported, so we need to extract
      // the schema to `#/definitions/` and reference that.
      //
      // e.g. if we need to reference a schema at
      // `["#","definitions","contactPerson","properties","person1","properties","name"]`
      // then we'll extract it out to `contactPerson_properties_person1_properties_name`
      case "extract-to-root":
        const name = item.path.slice(refs.basePath.length + 1).join("_");
        if (name !== refs.name && refs.nameStrategy === "duplicate-ref") {
          refs.definitions[name] = item.def;
        }
        return { $ref: [...refs.basePath, refs.definitionPath, name].join("/") };
      case "relative":
        return { $ref: getRelativePath(refs.currentPath, item.path) };
      case "none":
      case "seen": {
        if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
          console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
          return {};
        }
        return refs.$refStrategy === "seen" ? {} : void 0;
      }
    }
  };
  var getRelativePath = (pathA, pathB) => {
    let i = 0;
    for (; i < pathA.length && i < pathB.length; i++) {
      if (pathA[i] !== pathB[i])
        break;
    }
    return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
  };
  var selectParser = (def, typeName, refs, forceResolution) => {
    switch (typeName) {
      case ZodFirstPartyTypeKind.ZodString:
        return parseStringDef(def, refs);
      case ZodFirstPartyTypeKind.ZodNumber:
        return parseNumberDef(def, refs);
      case ZodFirstPartyTypeKind.ZodObject:
        return parseObjectDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBigInt:
        return parseBigintDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBoolean:
        return parseBooleanDef();
      case ZodFirstPartyTypeKind.ZodDate:
        return parseDateDef(def, refs);
      case ZodFirstPartyTypeKind.ZodUndefined:
        return parseUndefinedDef();
      case ZodFirstPartyTypeKind.ZodNull:
        return parseNullDef(refs);
      case ZodFirstPartyTypeKind.ZodArray:
        return parseArrayDef(def, refs);
      case ZodFirstPartyTypeKind.ZodUnion:
      case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
        return parseUnionDef(def, refs);
      case ZodFirstPartyTypeKind.ZodIntersection:
        return parseIntersectionDef(def, refs);
      case ZodFirstPartyTypeKind.ZodTuple:
        return parseTupleDef(def, refs);
      case ZodFirstPartyTypeKind.ZodRecord:
        return parseRecordDef(def, refs);
      case ZodFirstPartyTypeKind.ZodLiteral:
        return parseLiteralDef(def, refs);
      case ZodFirstPartyTypeKind.ZodEnum:
        return parseEnumDef(def);
      case ZodFirstPartyTypeKind.ZodNativeEnum:
        return parseNativeEnumDef(def);
      case ZodFirstPartyTypeKind.ZodNullable:
        return parseNullableDef(def, refs);
      case ZodFirstPartyTypeKind.ZodOptional:
        return parseOptionalDef(def, refs);
      case ZodFirstPartyTypeKind.ZodMap:
        return parseMapDef(def, refs);
      case ZodFirstPartyTypeKind.ZodSet:
        return parseSetDef(def, refs);
      case ZodFirstPartyTypeKind.ZodLazy:
        return parseDef(def.getter()._def, refs);
      case ZodFirstPartyTypeKind.ZodPromise:
        return parsePromiseDef(def, refs);
      case ZodFirstPartyTypeKind.ZodNaN:
      case ZodFirstPartyTypeKind.ZodNever:
        return parseNeverDef();
      case ZodFirstPartyTypeKind.ZodEffects:
        return parseEffectsDef(def, refs, forceResolution);
      case ZodFirstPartyTypeKind.ZodAny:
        return parseAnyDef();
      case ZodFirstPartyTypeKind.ZodUnknown:
        return parseUnknownDef();
      case ZodFirstPartyTypeKind.ZodDefault:
        return parseDefaultDef(def, refs);
      case ZodFirstPartyTypeKind.ZodBranded:
        return parseBrandedDef(def, refs);
      case ZodFirstPartyTypeKind.ZodReadonly:
        return parseReadonlyDef(def, refs);
      case ZodFirstPartyTypeKind.ZodCatch:
        return parseCatchDef(def, refs);
      case ZodFirstPartyTypeKind.ZodPipeline:
        return parsePipelineDef(def, refs);
      case ZodFirstPartyTypeKind.ZodFunction:
      case ZodFirstPartyTypeKind.ZodVoid:
      case ZodFirstPartyTypeKind.ZodSymbol:
        return void 0;
      default:
        return /* @__PURE__ */ ((_) => void 0)(typeName);
    }
  };
  var addMeta = (def, refs, jsonSchema) => {
    if (def.description) {
      jsonSchema.description = def.description;
      if (refs.markdownDescription) {
        jsonSchema.markdownDescription = def.description;
      }
    }
    return jsonSchema;
  };

  // node_modules/openai/_vendor/zod-to-json-schema/zodToJsonSchema.mjs
  var zodToJsonSchema = (schema, options) => {
    const refs = getRefs(options);
    const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
    const main = parseDef(schema._def, name === void 0 ? refs : {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name]
    }, false) ?? {};
    const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
    if (title !== void 0) {
      main.title = title;
    }
    const definitions = (() => {
      if (isEmptyObj(refs.definitions)) {
        return void 0;
      }
      const definitions2 = {};
      const processedDefinitions = /* @__PURE__ */ new Set();
      for (let i = 0; i < 500; i++) {
        const newDefinitions = Object.entries(refs.definitions).filter(([key]) => !processedDefinitions.has(key));
        if (newDefinitions.length === 0)
          break;
        for (const [key, schema2] of newDefinitions) {
          definitions2[key] = parseDef(zodDef(schema2), { ...refs, currentPath: [...refs.basePath, refs.definitionPath, key] }, true) ?? {};
          processedDefinitions.add(key);
        }
      }
      return definitions2;
    })();
    const combined = name === void 0 ? definitions ? {
      ...main,
      [refs.definitionPath]: definitions
    } : main : refs.nameStrategy === "duplicate-ref" ? {
      ...main,
      ...definitions || refs.seenRefs.size ? {
        [refs.definitionPath]: {
          ...definitions,
          // only actually duplicate the schema definition if it was ever referenced
          // otherwise the duplication is completely pointless
          ...refs.seenRefs.size ? { [name]: main } : void 0
        }
      } : void 0
    } : {
      $ref: [...refs.$refStrategy === "relative" ? [] : refs.basePath, refs.definitionPath, name].join("/"),
      [refs.definitionPath]: {
        ...definitions,
        [name]: main
      }
    };
    if (refs.target === "jsonSchema7") {
      combined.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (refs.target === "jsonSchema2019-09") {
      combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
    }
    return combined;
  };

  // node_modules/openai/lib/ResponsesParser.mjs
  function makeParseableResponseTool(tool2, { parser, callback }) {
    const obj = { ...tool2 };
    Object.defineProperties(obj, {
      $brand: {
        value: "auto-parseable-tool",
        enumerable: false
      },
      $parseRaw: {
        value: parser,
        enumerable: false
      },
      $callback: {
        value: callback,
        enumerable: false
      }
    });
    return obj;
  }

  // node_modules/openai/lib/transform.mjs
  function toStrictJsonSchema(schema) {
    if (schema.type !== "object") {
      throw new Error(`Root schema must have type: 'object' but got type: ${schema.type ? `'${schema.type}'` : "undefined"}`);
    }
    const schemaCopy = structuredClone(schema);
    return ensureStrictJsonSchema(schemaCopy, [], schemaCopy);
  }
  function isNullable(schema) {
    if (typeof schema === "boolean") {
      return false;
    }
    if (schema.type === "null") {
      return true;
    }
    for (const oneOfVariant of schema.oneOf ?? []) {
      if (isNullable(oneOfVariant)) {
        return true;
      }
    }
    for (const allOfVariant of schema.anyOf ?? []) {
      if (isNullable(allOfVariant)) {
        return true;
      }
    }
    return false;
  }
  function ensureStrictJsonSchema(jsonSchema, path, root) {
    if (typeof jsonSchema === "boolean") {
      throw new TypeError(`Expected object schema but got boolean; path=${path.join("/")}`);
    }
    if (!isObject(jsonSchema)) {
      throw new TypeError(`Expected ${JSON.stringify(jsonSchema)} to be an object; path=${path.join("/")}`);
    }
    const defs = jsonSchema.$defs;
    if (isObject(defs)) {
      for (const [defName, defSchema] of Object.entries(defs)) {
        ensureStrictJsonSchema(defSchema, [...path, "$defs", defName], root);
      }
    }
    const definitions = jsonSchema.definitions;
    if (isObject(definitions)) {
      for (const [definitionName, definitionSchema] of Object.entries(definitions)) {
        ensureStrictJsonSchema(definitionSchema, [...path, "definitions", definitionName], root);
      }
    }
    const typ = jsonSchema.type;
    if (typ === "object" && !("additionalProperties" in jsonSchema)) {
      jsonSchema.additionalProperties = false;
    }
    const required = jsonSchema.required ?? [];
    const properties = jsonSchema.properties;
    if (isObject(properties)) {
      for (const [key, value] of Object.entries(properties)) {
        if (!isNullable(value) && !required.includes(key)) {
          throw new Error(`Zod field at \`${[...path, "properties", key].join("/")}\` uses \`.optional()\` without \`.nullable()\` which is not supported by the API. See: https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses#all-fields-must-be-required`);
        }
      }
      jsonSchema.required = Object.keys(properties);
      jsonSchema.properties = Object.fromEntries(Object.entries(properties).map(([key, propSchema]) => [
        key,
        ensureStrictJsonSchema(propSchema, [...path, "properties", key], root)
      ]));
    }
    const items = jsonSchema.items;
    if (isObject(items)) {
      jsonSchema.items = ensureStrictJsonSchema(items, [...path, "items"], root);
    }
    const anyOf = jsonSchema.anyOf;
    if (Array.isArray(anyOf)) {
      jsonSchema.anyOf = anyOf.map((variant, i) => ensureStrictJsonSchema(variant, [...path, "anyOf", String(i)], root));
    }
    const allOf = jsonSchema.allOf;
    if (Array.isArray(allOf)) {
      if (allOf.length === 1) {
        const resolved = ensureStrictJsonSchema(allOf[0], [...path, "allOf", "0"], root);
        Object.assign(jsonSchema, resolved);
        delete jsonSchema.allOf;
      } else {
        jsonSchema.allOf = allOf.map((entry, i) => ensureStrictJsonSchema(entry, [...path, "allOf", String(i)], root));
      }
    }
    if (jsonSchema.default === null) {
      delete jsonSchema.default;
    }
    const ref = jsonSchema.$ref;
    if (ref && hasMoreThanNKeys(jsonSchema, 1)) {
      if (typeof ref !== "string") {
        throw new TypeError(`Received non-string $ref - ${ref}; path=${path.join("/")}`);
      }
      const resolved = resolveRef(root, ref);
      if (typeof resolved === "boolean") {
        throw new Error(`Expected \`$ref: ${ref}\` to resolve to an object schema but got boolean`);
      }
      if (!isObject(resolved)) {
        throw new Error(`Expected \`$ref: ${ref}\` to resolve to an object but got ${JSON.stringify(resolved)}`);
      }
      Object.assign(jsonSchema, { ...resolved, ...jsonSchema });
      delete jsonSchema.$ref;
      return ensureStrictJsonSchema(jsonSchema, path, root);
    }
    return jsonSchema;
  }
  function resolveRef(root, ref) {
    if (!ref.startsWith("#/")) {
      throw new Error(`Unexpected $ref format ${JSON.stringify(ref)}; Does not start with #/`);
    }
    const pathParts = ref.slice(2).split("/");
    let resolved = root;
    for (const key of pathParts) {
      if (!isObject(resolved)) {
        throw new Error(`encountered non-object entry while resolving ${ref} - ${JSON.stringify(resolved)}`);
      }
      const value = resolved[key];
      if (value === void 0) {
        throw new Error(`Key ${key} not found while resolving ${ref}`);
      }
      resolved = value;
    }
    return resolved;
  }
  function isObject(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
  }
  function hasMoreThanNKeys(obj, n) {
    let i = 0;
    for (const _ in obj) {
      i++;
      if (i > n) {
        return true;
      }
    }
    return false;
  }

  // node_modules/openai/helpers/zod.mjs
  function zodV3ToJsonSchema(schema, options) {
    return zodToJsonSchema(schema, {
      openaiStrictMode: true,
      name: options.name,
      nameStrategy: "duplicate-ref",
      $refStrategy: "extract-to-root",
      nullableStrategy: "property"
    });
  }
  function zodV4ToJsonSchema(schema) {
    return toStrictJsonSchema(toJSONSchema(schema, {
      target: "draft-7"
    }));
  }
  function isZodV4(zodObject) {
    return "_zod" in zodObject;
  }
  function zodTextFormat(zodObject, name, props) {
    return makeParseableTextFormat({
      type: "json_schema",
      ...props,
      name,
      strict: true,
      schema: isZodV4(zodObject) ? zodV4ToJsonSchema(zodObject) : zodV3ToJsonSchema(zodObject, { name })
    }, (content) => zodObject.parse(JSON.parse(content)));
  }
  function zodResponsesFunction(options) {
    return makeParseableResponseTool({
      type: "function",
      name: options.name,
      parameters: isZodV4(options.parameters) ? zodV4ToJsonSchema(options.parameters) : zodV3ToJsonSchema(options.parameters, { name: options.name }),
      strict: true,
      ...options.description ? { description: options.description } : void 0
    }, {
      callback: options.function,
      parser: (args) => options.parameters.parse(JSON.parse(args))
    });
  }

  // node_modules/@openai/agents-core/dist/errors.mjs
  var AgentsError = class extends Error {
    constructor(message, state) {
      super(message);
      __publicField(this, "state");
      this.state = state;
    }
  };
  var SystemError = class extends AgentsError {
  };
  var MaxTurnsExceededError = class extends AgentsError {
  };
  var ModelBehaviorError = class extends AgentsError {
  };
  var UserError = class extends AgentsError {
  };
  var GuardrailExecutionError = class extends AgentsError {
    constructor(message, error2, state) {
      super(message, state);
      __publicField(this, "error");
      this.error = error2;
    }
  };
  var ToolCallError = class extends AgentsError {
    constructor(message, error2, state) {
      super(message, state);
      __publicField(this, "error");
      this.error = error2;
    }
  };
  var InputGuardrailTripwireTriggered = class extends AgentsError {
    constructor(message, result, state) {
      super(message, state);
      __publicField(this, "result");
      this.result = result;
    }
  };
  var OutputGuardrailTripwireTriggered = class extends AgentsError {
    constructor(message, result, state) {
      super(message, state);
      __publicField(this, "result");
      this.result = result;
    }
  };

  // node_modules/@openai/agents-core/dist/utils/zodCompat.mjs
  function asZodType(schema) {
    return schema;
  }
  function readZodDefinition(input) {
    if (typeof input !== "object" || input === null) {
      return void 0;
    }
    const candidate = input;
    return candidate._zod?.def || candidate._def || candidate.def;
  }
  function readZodType(input) {
    const def = readZodDefinition(input);
    if (!def) {
      return void 0;
    }
    const rawType = typeof def.typeName === "string" && def.typeName || typeof def.type === "string" && def.type;
    if (typeof rawType !== "string") {
      return void 0;
    }
    const lower = rawType.toLowerCase();
    return lower.startsWith("zod") ? lower.slice(3) : lower;
  }

  // node_modules/@openai/agents-core/dist/utils/typeGuards.mjs
  function isZodObject(input) {
    const definition = readZodDefinition(input);
    if (!definition) {
      return false;
    }
    const type = readZodType(input);
    return type === "object";
  }
  function isAgentToolInput(input) {
    return typeof input === "object" && input !== null && "input" in input && typeof input.input === "string";
  }

  // node_modules/@openai/agents-core/dist/utils/zodJsonSchemaCompat.mjs
  var JSON_SCHEMA_DRAFT_07 = "http://json-schema.org/draft-07/schema#";
  var OPTIONAL_WRAPPERS = /* @__PURE__ */ new Set(["optional"]);
  var DECORATOR_WRAPPERS = /* @__PURE__ */ new Set([
    "brand",
    "branded",
    "catch",
    "default",
    "effects",
    "pipeline",
    "pipe",
    "prefault",
    "readonly",
    "refinement",
    "transform"
  ]);
  var SIMPLE_TYPE_MAPPING = {
    string: { type: "string" },
    number: { type: "number" },
    bigint: { type: "integer" },
    boolean: { type: "boolean" },
    date: { type: "string", format: "date-time" }
  };
  function hasJsonSchemaObjectShape(value) {
    return typeof value === "object" && value !== null && value.type === "object" && "properties" in value && "additionalProperties" in value;
  }
  function zodJsonSchemaCompat(input) {
    const schema = buildObjectSchema(input);
    if (!schema) {
      return void 0;
    }
    if (!Array.isArray(schema.required)) {
      schema.required = [];
    }
    if (typeof schema.additionalProperties === "undefined") {
      schema.additionalProperties = false;
    }
    if (typeof schema.$schema !== "string") {
      schema.$schema = JSON_SCHEMA_DRAFT_07;
    }
    return schema;
  }
  function buildObjectSchema(value) {
    const shape = readShape(value);
    if (!shape) {
      return void 0;
    }
    const properties = {};
    const required = [];
    for (const [key, field] of Object.entries(shape)) {
      const { schema, optional } = convertProperty(field);
      if (!schema) {
        return void 0;
      }
      properties[key] = schema;
      if (!optional) {
        required.push(key);
      }
    }
    return { type: "object", properties, required, additionalProperties: false };
  }
  function convertProperty(value) {
    let current = unwrapDecorators(value);
    let optional = false;
    while (OPTIONAL_WRAPPERS.has(readZodType(current) ?? "")) {
      optional = true;
      const def = readZodDefinition(current);
      const next = unwrapDecorators(def?.innerType);
      if (!next || next === current) {
        break;
      }
      current = next;
    }
    return { schema: convertSchema(current), optional };
  }
  function convertSchema(value) {
    if (value === void 0) {
      return void 0;
    }
    const unwrapped = unwrapDecorators(value);
    const type = readZodType(unwrapped);
    const def = readZodDefinition(unwrapped);
    if (!type) {
      return void 0;
    }
    if (type in SIMPLE_TYPE_MAPPING) {
      return SIMPLE_TYPE_MAPPING[type];
    }
    switch (type) {
      case "object":
        return buildObjectSchema(unwrapped);
      case "array":
        return buildArraySchema(def);
      case "tuple":
        return buildTupleSchema(def);
      case "union":
        return buildUnionSchema(def);
      case "intersection":
        return buildIntersectionSchema(def);
      case "literal":
        return buildLiteral(def);
      case "enum":
      case "nativeenum":
        return buildEnum(def);
      case "record":
        return buildRecordSchema(def);
      case "map":
        return buildMapSchema(def);
      case "set":
        return buildSetSchema(def);
      case "nullable":
        return buildNullableSchema(def);
      default:
        return void 0;
    }
  }
  function buildArraySchema(def) {
    const items = convertSchema(extractFirst(def, "element", "items", "type"));
    return items ? { type: "array", items } : void 0;
  }
  function buildTupleSchema(def) {
    const items = coerceArray(def?.items).map((item) => convertSchema(item)).filter(Boolean);
    if (!items.length) {
      return void 0;
    }
    const schema = {
      type: "array",
      items,
      minItems: items.length
    };
    if (!def?.rest) {
      schema.maxItems = items.length;
    }
    return schema;
  }
  function buildUnionSchema(def) {
    const options = coerceArray(def?.options ?? def?.schemas).map((option) => convertSchema(option)).filter(Boolean);
    return options.length ? { anyOf: options } : void 0;
  }
  function buildIntersectionSchema(def) {
    const left = convertSchema(def?.left);
    const right = convertSchema(def?.right);
    return left && right ? { allOf: [left, right] } : void 0;
  }
  function buildRecordSchema(def) {
    const valueSchema = convertSchema(def?.valueType ?? def?.values);
    return valueSchema ? { type: "object", additionalProperties: valueSchema } : void 0;
  }
  function buildMapSchema(def) {
    const valueSchema = convertSchema(def?.valueType ?? def?.values);
    return valueSchema ? { type: "array", items: valueSchema } : void 0;
  }
  function buildSetSchema(def) {
    const valueSchema = convertSchema(def?.valueType);
    return valueSchema ? { type: "array", items: valueSchema, uniqueItems: true } : void 0;
  }
  function buildNullableSchema(def) {
    const inner = convertSchema(def?.innerType ?? def?.type);
    return inner ? { anyOf: [inner, { type: "null" }] } : void 0;
  }
  function unwrapDecorators(value) {
    let current = value;
    while (DECORATOR_WRAPPERS.has(readZodType(current) ?? "")) {
      const def = readZodDefinition(current);
      const next = def?.innerType ?? def?.schema ?? def?.base ?? def?.type ?? def?.wrapped ?? def?.underlying;
      if (!next || next === current) {
        return current;
      }
      current = next;
    }
    return current;
  }
  function extractFirst(def, ...keys) {
    if (!def) {
      return void 0;
    }
    for (const key of keys) {
      if (key in def && def[key] !== void 0) {
        return def[key];
      }
    }
    return void 0;
  }
  function coerceArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    return value === void 0 ? [] : [value];
  }
  function buildLiteral(def) {
    if (!def) {
      return void 0;
    }
    const literal = extractFirst(def, "value", "literal");
    if (literal === void 0) {
      return void 0;
    }
    return {
      const: literal,
      type: literal === null ? "null" : typeof literal
    };
  }
  function buildEnum(def) {
    if (!def) {
      return void 0;
    }
    if (Array.isArray(def.values)) {
      return { enum: def.values };
    }
    if (Array.isArray(def.options)) {
      return { enum: def.options };
    }
    if (def.values && typeof def.values === "object") {
      return { enum: Object.values(def.values) };
    }
    if (def.enum && typeof def.enum === "object") {
      return { enum: Object.values(def.enum) };
    }
    return void 0;
  }
  function readShape(input) {
    if (typeof input !== "object" || input === null) {
      return void 0;
    }
    const candidate = input;
    if (candidate.shape && typeof candidate.shape === "object") {
      return candidate.shape;
    }
    if (typeof candidate.shape === "function") {
      try {
        return candidate.shape();
      } catch (_error3) {
        return void 0;
      }
    }
    const def = readZodDefinition(candidate);
    const shape = def?.shape;
    if (shape && typeof shape === "object") {
      return shape;
    }
    if (typeof shape === "function") {
      try {
        return shape();
      } catch (_error3) {
        return void 0;
      }
    }
    return void 0;
  }

  // node_modules/@openai/agents-core/dist/utils/tools.mjs
  var zodResponsesFunctionCompat = zodResponsesFunction;
  var zodTextFormatCompat = zodTextFormat;
  function buildJsonSchemaFromZod(inputType) {
    return zodJsonSchemaCompat(inputType);
  }
  function toFunctionToolName(name) {
    name = name.replace(/\s/g, "_");
    name = name.replace(/[^a-zA-Z0-9]/g, "_");
    if (name.length === 0) {
      throw new Error("Tool name cannot be empty");
    }
    return name;
  }
  function getSchemaAndParserFromInputType(inputType, name) {
    const parser = (input) => JSON.parse(input);
    if (isZodObject(inputType)) {
      const useFallback = (originalError) => {
        const fallbackSchema = buildJsonSchemaFromZod(inputType);
        if (fallbackSchema) {
          return {
            schema: fallbackSchema,
            parser: (rawInput) => inputType.parse(JSON.parse(rawInput))
          };
        }
        const errorMessage = originalError instanceof Error ? ` Upstream helper error: ${originalError.message}` : "";
        throw new UserError(`Unable to convert the provided Zod schema to JSON Schema. Ensure that the \`zod\` package is available at runtime or provide a JSON schema object instead.${errorMessage}`);
      };
      let formattedFunction;
      try {
        formattedFunction = zodResponsesFunctionCompat({
          name,
          parameters: asZodType(inputType),
          function: () => {
          },
          // empty function here to satisfy the OpenAI helper
          description: ""
        });
      } catch (error2) {
        return useFallback(error2);
      }
      if (hasJsonSchemaObjectShape(formattedFunction.parameters)) {
        return {
          schema: formattedFunction.parameters,
          parser: formattedFunction.$parseRaw
        };
      }
      return useFallback();
    } else if (typeof inputType === "object" && inputType !== null) {
      return {
        schema: inputType,
        parser
      };
    }
    throw new UserError("Input type is not a ZodObject or a valid JSON schema");
  }
  function convertAgentOutputTypeToSerializable(outputType) {
    if (outputType === "text") {
      return "text";
    }
    if (isZodObject(outputType)) {
      const useFallback = (existing, originalError) => {
        const fallbackSchema = buildJsonSchemaFromZod(outputType);
        if (fallbackSchema) {
          return {
            type: existing?.type ?? "json_schema",
            name: existing?.name ?? "output",
            strict: existing?.strict ?? false,
            schema: fallbackSchema
          };
        }
        const errorMessage = originalError instanceof Error ? ` Upstream helper error: ${originalError.message}` : "";
        throw new UserError(`Unable to convert the provided Zod schema to JSON Schema. Ensure that the \`zod\` package is available at runtime or provide a JSON schema object instead.${errorMessage}`);
      };
      let output;
      try {
        output = zodTextFormatCompat(asZodType(outputType), "output");
      } catch (error2) {
        return useFallback(void 0, error2);
      }
      if (hasJsonSchemaObjectShape(output.schema)) {
        return {
          type: output.type,
          name: output.name,
          strict: output.strict || false,
          schema: output.schema
        };
      }
      return useFallback(output);
    }
    return outputType;
  }

  // node_modules/@openai/agents-core/dist/logger.mjs
  var import_debug = __toESM(require_browser(), 1);

  // node_modules/@openai/agents-core/dist/config.mjs
  function loadEnv2() {
    return loadEnv();
  }
  function isEnabled(flagName) {
    const env = loadEnv2();
    return typeof env !== "undefined" && (env[flagName] === "true" || env[flagName] === "1");
  }
  var tracing = {
    get disabled() {
      if (isBrowserEnvironment()) {
        return true;
      } else if (loadEnv2().NODE_ENV === "test") {
        return true;
      }
      return isEnabled("OPENAI_AGENTS_DISABLE_TRACING");
    }
  };
  var logging = {
    get dontLogModelData() {
      return isEnabled("OPENAI_AGENTS_DONT_LOG_MODEL_DATA");
    },
    get dontLogToolData() {
      return isEnabled("OPENAI_AGENTS_DONT_LOG_TOOL_DATA");
    }
  };

  // node_modules/@openai/agents-core/dist/logger.mjs
  var dontLogModelData = logging.dontLogModelData;
  var dontLogToolData = logging.dontLogToolData;
  function getLogger(namespace = "openai-agents") {
    return {
      namespace,
      debug: (0, import_debug.default)(namespace),
      error: console.error,
      warn: console.warn,
      dontLogModelData,
      dontLogToolData
    };
  }
  var logger = getLogger("openai-agents:core");
  var logger_default = logger;

  // node_modules/@openai/agents-core/dist/utils/smartString.mjs
  var BYTE_PREVIEW_LIMIT = 20;
  function toSmartString(value) {
    if (value === null || value === void 0) {
      return String(value);
    }
    if (isArrayBufferLike(value)) {
      return formatByteArray(new Uint8Array(value));
    }
    if (isArrayBufferView(value)) {
      const view = value;
      return formatByteArray(new Uint8Array(view.buffer, view.byteOffset, view.byteLength));
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "object") {
      try {
        return JSON.stringify(value, smartStringReplacer);
      } catch (_e) {
        return "[object with circular references]";
      }
    }
    return String(value);
  }
  function isArrayBufferLike(value) {
    if (value instanceof ArrayBuffer) {
      return true;
    }
    const sharedArrayBufferCtor = globalThis.SharedArrayBuffer;
    return Boolean(sharedArrayBufferCtor && value instanceof sharedArrayBufferCtor);
  }
  function isArrayBufferView(value) {
    return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
  }
  function isSerializedBufferSnapshot(value) {
    return typeof value === "object" && value !== null && value.type === "Buffer" && Array.isArray(value.data);
  }
  function isNodeBuffer(value) {
    const bufferCtor = globalThis.Buffer;
    return Boolean(bufferCtor && typeof bufferCtor.isBuffer === "function" && bufferCtor.isBuffer(value));
  }
  function formatByteArray(bytes) {
    if (bytes.length === 0) {
      return "[byte array (0 bytes)]";
    }
    const previewLength = Math.min(bytes.length, BYTE_PREVIEW_LIMIT);
    const previewParts = [];
    for (let i = 0; i < previewLength; i++) {
      previewParts.push(formatByte(bytes[i]));
    }
    const ellipsis = bytes.length > BYTE_PREVIEW_LIMIT ? " \u2026" : "";
    const preview = previewParts.join(" ");
    return `[byte array ${preview}${ellipsis} (${bytes.length} bytes)]`;
  }
  function formatByte(byte) {
    return `0x${byte.toString(16).padStart(2, "0")}`;
  }
  function smartStringReplacer(_key, nestedValue) {
    if (isArrayBufferLike(nestedValue)) {
      return formatByteArray(new Uint8Array(nestedValue));
    }
    if (isArrayBufferView(nestedValue)) {
      const view = nestedValue;
      return formatByteArray(new Uint8Array(view.buffer, view.byteOffset, view.byteLength));
    }
    if (isSerializedBufferSnapshot(nestedValue)) {
      return formatByteArray(Uint8Array.from(nestedValue.data));
    }
    return nestedValue;
  }

  // node_modules/@openai/agents-core/dist/tool.mjs
  function defaultToolErrorFunction(context, error2) {
    const details = error2 instanceof Error ? error2.toString() : String(error2);
    return `An error occurred while running the tool. Please try again. Error: ${details}`;
  }
  function tool(options) {
    const name = options.name ? toFunctionToolName(options.name) : toFunctionToolName(options.execute.name);
    const toolErrorFunction = typeof options.errorFunction === "undefined" ? defaultToolErrorFunction : options.errorFunction;
    if (!name) {
      throw new Error("Tool name cannot be empty. Either name your function or provide a name in the options.");
    }
    const strictMode = options.strict ?? true;
    if (!strictMode && isZodObject(options.parameters)) {
      throw new UserError("Strict mode is required for Zod parameters");
    }
    const { parser, schema: parameters } = getSchemaAndParserFromInputType(options.parameters, name);
    async function _invoke(runContext, input, details) {
      const [error2, parsed] = await safeExecute(() => parser(input));
      if (error2 !== null) {
        if (logger_default.dontLogToolData) {
          logger_default.debug(`Invalid JSON input for tool ${name}`);
        } else {
          logger_default.debug(`Invalid JSON input for tool ${name}: ${input}`);
        }
        throw new ModelBehaviorError("Invalid JSON input for tool");
      }
      if (logger_default.dontLogToolData) {
        logger_default.debug(`Invoking tool ${name}`);
      } else {
        logger_default.debug(`Invoking tool ${name} with input ${input}`);
      }
      const result = await options.execute(parsed, runContext, details);
      const stringResult = toSmartString(result);
      if (logger_default.dontLogToolData) {
        logger_default.debug(`Tool ${name} completed`);
      } else {
        logger_default.debug(`Tool ${name} returned: ${stringResult}`);
      }
      return result;
    }
    async function invoke(runContext, input, details) {
      return _invoke(runContext, input, details).catch((error2) => {
        if (toolErrorFunction) {
          const currentSpan = getCurrentSpan();
          currentSpan?.setError({
            message: "Error running tool (non-fatal)",
            data: {
              tool_name: name,
              error: error2.toString()
            }
          });
          return toolErrorFunction(runContext, error2);
        }
        throw error2;
      });
    }
    const needsApproval = typeof options.needsApproval === "function" ? options.needsApproval : async () => typeof options.needsApproval === "boolean" ? options.needsApproval : false;
    const isEnabled2 = typeof options.isEnabled === "function" ? async (runContext, agent) => {
      const predicate = options.isEnabled;
      const result = await predicate({ runContext, agent });
      return Boolean(result);
    } : async () => typeof options.isEnabled === "boolean" ? options.isEnabled : true;
    return {
      type: "function",
      name,
      description: options.description,
      parameters,
      strict: strictMode,
      invoke,
      needsApproval,
      isEnabled: isEnabled2
    };
  }

  // node_modules/@openai/agents-core/dist/mcp.mjs
  var import_debug2 = __toESM(require_browser(), 1);
  var MCPTool = external_exports.object({
    name: external_exports.string(),
    description: external_exports.string().optional(),
    inputSchema: external_exports.object({
      type: external_exports.literal("object"),
      properties: external_exports.record(external_exports.string(), external_exports.any()),
      required: external_exports.array(external_exports.string()),
      additionalProperties: external_exports.boolean()
    })
  });
  var _cachedTools = {};
  var _cachedToolKeysByServer = {};
  var defaultMCPToolCacheKey = ({ server, agent }) => {
    if (server.toolFilter && typeof server.toolFilter === "function" && agent) {
      return `${server.name}:${agent.name}`;
    }
    return server.name;
  };
  async function getFunctionToolsFromServer({ server, convertSchemasToStrict, runContext, agent, generateMCPToolCacheKey }) {
    const cacheKey = (generateMCPToolCacheKey || defaultMCPToolCacheKey)({
      server,
      agent,
      runContext
    });
    if (server.cacheToolsList && _cachedTools[cacheKey]) {
      return _cachedTools[cacheKey].map((t) => mcpToFunctionTool(t, server, convertSchemasToStrict));
    }
    const listToolsForServer = async (span) => {
      const fetchedMcpTools = await server.listTools();
      let mcpTools = fetchedMcpTools;
      if (runContext && agent) {
        const context = { runContext, agent, serverName: server.name };
        const filteredTools = [];
        for (const tool2 of fetchedMcpTools) {
          const filter = server.toolFilter;
          if (filter) {
            if (typeof filter === "function") {
              const filtered = await filter(context, tool2);
              if (!filtered) {
                logger.debug(`MCP Tool (server: ${server.name}, tool: ${tool2.name}) is blocked by the callable filter.`);
                continue;
              }
            } else {
              const allowedToolNames = filter.allowedToolNames ?? [];
              const blockedToolNames = filter.blockedToolNames ?? [];
              if (allowedToolNames.length > 0 || blockedToolNames.length > 0) {
                const allowed = allowedToolNames.length > 0 ? allowedToolNames.includes(tool2.name) : true;
                const blocked = blockedToolNames.length > 0 ? blockedToolNames.includes(tool2.name) : false;
                if (!allowed || blocked) {
                  if (blocked) {
                    logger.debug(`MCP Tool (server: ${server.name}, tool: ${tool2.name}) is blocked by the static filter.`);
                  } else if (!allowed) {
                    logger.debug(`MCP Tool (server: ${server.name}, tool: ${tool2.name}) is not allowed by the static filter.`);
                  }
                  continue;
                }
              }
            }
          }
          filteredTools.push(tool2);
        }
        mcpTools = filteredTools;
      }
      if (span) {
        span.spanData.result = mcpTools.map((t) => t.name);
      }
      const tools = mcpTools.map((t) => mcpToFunctionTool(t, server, convertSchemasToStrict));
      if (server.cacheToolsList) {
        _cachedTools[cacheKey] = mcpTools;
        if (!_cachedToolKeysByServer[server.name]) {
          _cachedToolKeysByServer[server.name] = /* @__PURE__ */ new Set();
        }
        _cachedToolKeysByServer[server.name].add(cacheKey);
      }
      return tools;
    };
    if (!getCurrentTrace()) {
      return listToolsForServer();
    }
    return withMCPListToolsSpan(listToolsForServer, {
      data: { server: server.name }
    });
  }
  async function getAllMcpTools(mcpServersOrOpts, runContext, agent, convertSchemasToStrict = false) {
    const opts = Array.isArray(mcpServersOrOpts) ? {
      mcpServers: mcpServersOrOpts,
      runContext,
      agent,
      convertSchemasToStrict
    } : mcpServersOrOpts;
    const { mcpServers, convertSchemasToStrict: convertSchemasToStrictFromOpts = false, runContext: runContextFromOpts, agent: agentFromOpts, generateMCPToolCacheKey } = opts;
    const allTools = [];
    const toolNames = /* @__PURE__ */ new Set();
    for (const server of mcpServers) {
      const serverTools = await getFunctionToolsFromServer({
        server,
        convertSchemasToStrict: convertSchemasToStrictFromOpts,
        runContext: runContextFromOpts,
        agent: agentFromOpts,
        generateMCPToolCacheKey
      });
      const serverToolNames = new Set(serverTools.map((t) => t.name));
      const intersection = [...serverToolNames].filter((n) => toolNames.has(n));
      if (intersection.length > 0) {
        throw new UserError(`Duplicate tool names found across MCP servers: ${intersection.join(", ")}`);
      }
      for (const t of serverTools) {
        toolNames.add(t.name);
        allTools.push(t);
      }
    }
    return allTools;
  }
  function mcpToFunctionTool(mcpTool, server, convertSchemasToStrict) {
    async function invoke(input, _context2) {
      let args = {};
      if (typeof input === "string" && input) {
        args = JSON.parse(input);
      } else if (typeof input === "object" && input != null) {
        args = input;
      }
      const currentSpan = getCurrentSpan();
      if (currentSpan) {
        currentSpan.spanData["mcp_data"] = { server: server.name };
      }
      const content = await server.callTool(mcpTool.name, args);
      return content.length === 1 ? content[0] : content;
    }
    const schema = {
      ...mcpTool.inputSchema,
      type: mcpTool.inputSchema?.type ?? "object",
      properties: mcpTool.inputSchema?.properties ?? {},
      required: mcpTool.inputSchema?.required ?? [],
      additionalProperties: mcpTool.inputSchema?.additionalProperties ?? false
    };
    if (convertSchemasToStrict || schema.additionalProperties === true) {
      try {
        const strictSchema = ensureStrictJsonSchema2(schema);
        return tool({
          name: mcpTool.name,
          description: mcpTool.description || "",
          parameters: strictSchema,
          strict: true,
          execute: invoke
        });
      } catch (e) {
        logger.warn(`Error converting MCP schema to strict mode: ${e}`);
      }
    }
    const nonStrictSchema = {
      ...schema,
      additionalProperties: true
    };
    return tool({
      name: mcpTool.name,
      description: mcpTool.description || "",
      parameters: nonStrictSchema,
      strict: false,
      execute: invoke
    });
  }
  function ensureStrictJsonSchema2(schema) {
    const out = {
      ...schema,
      additionalProperties: false
    };
    if (!out.required)
      out.required = [];
    return out;
  }

  // node_modules/@openai/agents-core/dist/shims/shims-browser.mjs
  function loadEnv() {
    return {};
  }
  var _target, _listenerWrappers;
  var BrowserEventEmitter = class {
    constructor() {
      __privateAdd(this, _target, new EventTarget());
      __privateAdd(this, _listenerWrappers, /* @__PURE__ */ new Map());
    }
    on(type, listener) {
      const eventType = type;
      let listenersForType = __privateGet(this, _listenerWrappers).get(eventType);
      if (!listenersForType) {
        listenersForType = /* @__PURE__ */ new Map();
        __privateGet(this, _listenerWrappers).set(eventType, listenersForType);
      }
      let wrappers = listenersForType.get(listener);
      if (!wrappers) {
        wrappers = /* @__PURE__ */ new Set();
        listenersForType.set(listener, wrappers);
      }
      const wrapper = ((event) => listener(...event.detail ?? []));
      wrappers.add(wrapper);
      __privateGet(this, _target).addEventListener(eventType, wrapper);
      return this;
    }
    off(type, listener) {
      const eventType = type;
      const listenersForType = __privateGet(this, _listenerWrappers).get(eventType);
      const wrappers = listenersForType?.get(listener);
      if (wrappers?.size) {
        for (const wrapper of wrappers) {
          __privateGet(this, _target).removeEventListener(eventType, wrapper);
        }
        listenersForType?.delete(listener);
        if (listenersForType?.size === 0) {
          __privateGet(this, _listenerWrappers).delete(eventType);
        }
      }
      return this;
    }
    emit(type, ...args) {
      const event = new CustomEvent(type, { detail: args });
      return __privateGet(this, _target).dispatchEvent(event);
    }
    once(type, listener) {
      const handler = (...args) => {
        this.off(type, handler);
        listener(...args);
      };
      this.on(type, handler);
      return this;
    }
  };
  _target = new WeakMap();
  _listenerWrappers = new WeakMap();
  var randomUUID = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  };
  var Readable = class Readable2 {
    constructor() {
    }
    pipeTo(_destination, _options) {
    }
    pipeThrough(_transform, _options) {
    }
  };
  var ReadableStream = globalThis.ReadableStream;
  var ReadableStreamController = globalThis.ReadableStreamDefaultController;
  var TransformStream = globalThis.TransformStream;
  var AsyncLocalStorage = class {
    constructor() {
      __publicField(this, "context", null);
    }
    run(context, fn) {
      this.context = context;
      return fn();
    }
    getStore() {
      return this.context;
    }
    enterWith(context) {
      this.context = context;
    }
  };
  function isBrowserEnvironment() {
    return true;
  }
  function isTracingLoopRunningByDefault() {
    return false;
  }
  var BrowserTimer = class {
    constructor() {
    }
    setTimeout(callback, ms) {
      const timeout = setTimeout(callback, ms);
      timeout.ref = typeof timeout.ref === "function" ? timeout.ref : () => timeout;
      timeout.unref = typeof timeout.unref === "function" ? timeout.unref : () => timeout;
      timeout.hasRef = typeof timeout.hasRef === "function" ? timeout.hasRef : () => true;
      timeout.refresh = typeof timeout.refresh === "function" ? timeout.refresh : () => timeout;
      return timeout;
    }
    clearTimeout(timeoutId) {
      window.clearTimeout(timeoutId);
    }
  };
  var timer = new BrowserTimer();

  // node_modules/@openai/agents-core/dist/lifecycle.mjs
  var EventEmitterDelegate = class {
    on(type, listener) {
      this.eventEmitter.on(type, listener);
      return this.eventEmitter;
    }
    off(type, listener) {
      this.eventEmitter.off(type, listener);
      return this.eventEmitter;
    }
    emit(type, ...args) {
      return this.eventEmitter.emit(type, ...args);
    }
    once(type, listener) {
      this.eventEmitter.once(type, listener);
      return this.eventEmitter;
    }
  };
  var AgentHooks = class extends EventEmitterDelegate {
    constructor() {
      super(...arguments);
      __publicField(this, "eventEmitter", new BrowserEventEmitter());
    }
  };
  var RunHooks = class extends EventEmitterDelegate {
    constructor() {
      super(...arguments);
      __publicField(this, "eventEmitter", new BrowserEventEmitter());
    }
  };

  // node_modules/@openai/agents-core/dist/defaultModel.mjs
  var OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME = "OPENAI_DEFAULT_MODEL";
  function gpt5ReasoningSettingsRequired(modelName) {
    if (modelName.startsWith("gpt-5-chat")) {
      return false;
    }
    return modelName.startsWith("gpt-5");
  }
  function isGpt5Default() {
    return gpt5ReasoningSettingsRequired(getDefaultModel());
  }
  function getDefaultModel() {
    const env = loadEnv2();
    return env[OPENAI_DEFAULT_MODEL_ENV_VARIABLE_NAME]?.toLowerCase() ?? "gpt-4.1";
  }
  function getDefaultModelSettings(model) {
    const _model2 = model ?? getDefaultModel();
    if (gpt5ReasoningSettingsRequired(_model2)) {
      return {
        // We chose "low" instead of "minimal" because some of the built-in tools
        // (e.g., file search, image generation, etc.) do not support "minimal"
        // If you want to use "minimal" reasoning effort, you can pass your own model settings
        reasoning: { effort: "low" },
        text: { verbosity: "low" }
      };
    }
    return {};
  }

  // node_modules/@openai/agents-core/dist/handoff.mjs
  function getTransferMessage(agent) {
    return JSON.stringify({ assistant: agent.name });
  }
  function defaultHandoffToolName(agent) {
    return `transfer_to_${toFunctionToolName(agent.name)}`;
  }
  function defaultHandoffToolDescription(agent) {
    return `Handoff to the ${agent.name} agent to handle the request. ${agent.handoffDescription ?? ""}`;
  }
  var Handoff = class {
    constructor(agent, onInvokeHandoff) {
      /**
       * The name of the tool that represents the handoff.
       */
      __publicField(this, "toolName");
      /**
       * The description of the tool that represents the handoff.
       */
      __publicField(this, "toolDescription");
      /**
       * The JSON schema for the handoff input. Can be empty if the handoff does not take an input
       */
      __publicField(this, "inputJsonSchema", {
        type: "object",
        properties: {},
        required: [],
        additionalProperties: false
      });
      /**
       * Whether the input JSON schema is in strict mode. We **strongly** recommend setting this to
       * true, as it increases the likelihood of correct JSON input.
       */
      __publicField(this, "strictJsonSchema", true);
      /**
       * The function that invokes the handoff. The parameters passed are:
       * 1. The handoff run context
       * 2. The arguments from the LLM, as a JSON string. Empty string if inputJsonSchema is empty.
       *
       * Must return an agent
       */
      __publicField(this, "onInvokeHandoff");
      /**
       * The name of the agent that is being handed off to.
       */
      __publicField(this, "agentName");
      /**
       * A function that filters the inputs that are passed to the next agent. By default, the new agent
       * sees the entire conversation history. In some cases, you may want to filter inputs e.g. to
       * remove older inputs, or remove tools from existing inputs.
       *
       * The function will receive the entire conversation hisstory so far, including the input item
       * that triggered the handoff and a tool call output item representing the handoff tool's output.
       *
       * You are free to modify the input history or new items as you see fit. The next agent that runs
       * will receive `handoffInputData.allItems
       */
      __publicField(this, "inputFilter");
      /**
       * The agent that is being handed off to.
       */
      __publicField(this, "agent");
      __publicField(this, "isEnabled", async () => true);
      this.agentName = agent.name;
      this.onInvokeHandoff = onInvokeHandoff;
      this.toolName = defaultHandoffToolName(agent);
      this.toolDescription = defaultHandoffToolDescription(agent);
      this.agent = agent;
    }
    /**
     * Returns a function tool definition that can be used to invoke the handoff.
     */
    getHandoffAsFunctionTool() {
      return {
        type: "function",
        name: this.toolName,
        description: this.toolDescription,
        parameters: this.inputJsonSchema,
        strict: this.strictJsonSchema
      };
    }
  };
  function handoff(agent, config2 = {}) {
    let parser = void 0;
    const hasOnHandoff = !!config2.onHandoff;
    const hasInputType = !!config2.inputType;
    const hasBothOrNeitherHandoffAndInputType = hasOnHandoff === hasInputType;
    if (!hasBothOrNeitherHandoffAndInputType) {
      throw new UserError("You must provide either both `onHandoff` and `inputType` or neither.");
    }
    async function onInvokeHandoff(context, inputJsonString) {
      if (parser) {
        if (!inputJsonString) {
          addErrorToCurrentSpan({
            message: `Handoff function expected non empty input but got: ${inputJsonString}`,
            data: {
              details: `input is empty`
            }
          });
          throw new ModelBehaviorError("Handoff function expected non empty input");
        }
        try {
          const parsed = await parser(inputJsonString);
          if (config2.onHandoff) {
            await config2.onHandoff(context, parsed);
          }
        } catch (error2) {
          addErrorToCurrentSpan({
            message: `Invalid JSON provided`,
            data: {}
          });
          if (!logger_default.dontLogToolData) {
            logger_default.error(`Invalid JSON when parsing: ${inputJsonString}. Error: ${error2}`);
          }
          throw new ModelBehaviorError("Invalid JSON provided");
        }
      } else {
        await config2.onHandoff?.(context);
      }
      return agent;
    }
    const handoff2 = new Handoff(agent, onInvokeHandoff);
    if (typeof config2.isEnabled === "function") {
      const predicate = config2.isEnabled;
      handoff2.isEnabled = async ({ runContext, agent: agent2 }) => {
        const result = await predicate({ runContext, agent: agent2 });
        return Boolean(result);
      };
    } else if (typeof config2.isEnabled === "boolean") {
      handoff2.isEnabled = async () => config2.isEnabled;
    }
    if (config2.inputType) {
      const result = getSchemaAndParserFromInputType(config2.inputType, handoff2.toolName);
      handoff2.inputJsonSchema = result.schema;
      handoff2.strictJsonSchema = true;
      parser = result.parser;
    }
    if (config2.toolNameOverride) {
      handoff2.toolName = config2.toolNameOverride;
    }
    if (config2.toolDescriptionOverride) {
      handoff2.toolDescription = config2.toolDescriptionOverride;
    }
    if (config2.inputFilter) {
      handoff2.inputFilter = config2.inputFilter;
    }
    return handoff2;
  }
  function getHandoff(agent) {
    if (agent instanceof Handoff) {
      return agent;
    }
    return handoff(agent);
  }

  // node_modules/@openai/agents-core/dist/utils/messages.mjs
  function getLastTextFromOutputMessage(outputMessage) {
    if (outputMessage.type !== "message") {
      return void 0;
    }
    if (outputMessage.role !== "assistant") {
      return void 0;
    }
    const lastItem = outputMessage.content[outputMessage.content.length - 1];
    if (lastItem.type !== "output_text") {
      return void 0;
    }
    return lastItem.text;
  }
  function getOutputText(output) {
    if (output.output.length === 0) {
      return "";
    }
    return getLastTextFromOutputMessage(output.output[output.output.length - 1]) || "";
  }

  // node_modules/@openai/agents-core/dist/agent.mjs
  var agentToolRunResults = /* @__PURE__ */ new WeakMap();
  function saveAgentToolRunResult(toolCall, runResult) {
    if (toolCall) {
      agentToolRunResults.set(toolCall, runResult);
    }
  }
  function consumeAgentToolRunResult(toolCall) {
    const runResult = agentToolRunResults.get(toolCall);
    if (runResult) {
      agentToolRunResults.delete(toolCall);
    }
    return runResult;
  }
  var AgentAsToolNeedApprovalSchame = external_exports.object({ input: external_exports.string() });
  var _Agent = class _Agent extends AgentHooks {
    constructor(config2) {
      super();
      __publicField(this, "name");
      __publicField(this, "instructions");
      __publicField(this, "prompt");
      __publicField(this, "handoffDescription");
      __publicField(this, "handoffs");
      __publicField(this, "model");
      __publicField(this, "modelSettings");
      __publicField(this, "tools");
      __publicField(this, "mcpServers");
      __publicField(this, "inputGuardrails");
      __publicField(this, "outputGuardrails");
      __publicField(this, "outputType", "text");
      __publicField(this, "toolUseBehavior");
      __publicField(this, "resetToolChoice");
      __publicField(this, "_toolsExplicitlyConfigured");
      if (typeof config2.name !== "string" || config2.name.trim() === "") {
        throw new UserError("Agent must have a name.");
      }
      this.name = config2.name;
      this.instructions = config2.instructions ?? _Agent.DEFAULT_MODEL_PLACEHOLDER;
      this.prompt = config2.prompt;
      this.handoffDescription = config2.handoffDescription ?? "";
      this.handoffs = config2.handoffs ?? [];
      this.model = config2.model ?? "";
      this.modelSettings = config2.modelSettings ?? getDefaultModelSettings();
      this.tools = config2.tools ?? [];
      this._toolsExplicitlyConfigured = config2.tools !== void 0;
      this.mcpServers = config2.mcpServers ?? [];
      this.inputGuardrails = config2.inputGuardrails ?? [];
      this.outputGuardrails = config2.outputGuardrails ?? [];
      if (config2.outputType) {
        this.outputType = config2.outputType;
      }
      this.toolUseBehavior = config2.toolUseBehavior ?? "run_llm_again";
      this.resetToolChoice = config2.resetToolChoice ?? true;
      if (
        // The user sets a non-default model
        config2.model !== void 0 && // The default model is gpt-5
        isGpt5Default() && // However, the specified model is not a gpt-5 model
        (typeof config2.model !== "string" || !gpt5ReasoningSettingsRequired(config2.model)) && // The model settings are not customized for the specified model
        config2.modelSettings === void 0
      ) {
        this.modelSettings = {};
      }
      if (config2.handoffOutputTypeWarningEnabled === void 0 || config2.handoffOutputTypeWarningEnabled) {
        if (this.handoffs && this.outputType) {
          const outputTypes = /* @__PURE__ */ new Set([JSON.stringify(this.outputType)]);
          for (const h of this.handoffs) {
            if ("outputType" in h && h.outputType) {
              outputTypes.add(JSON.stringify(h.outputType));
            } else if ("agent" in h && h.agent.outputType) {
              outputTypes.add(JSON.stringify(h.agent.outputType));
            }
          }
          if (outputTypes.size > 1) {
            logger_default.warn(`[Agent] Warning: Handoff agents have different output types: ${Array.from(outputTypes).join(", ")}. You can make it type-safe by using Agent.create({ ... }) method instead.`);
          }
        }
      }
    }
    /**
     * Create an Agent with handoffs and automatically infer the union type for TOutput from the handoff agents' output types.
     */
    static create(config2) {
      return new _Agent({
        ...config2,
        handoffs: config2.handoffs,
        outputType: config2.outputType,
        handoffOutputTypeWarningEnabled: false
      });
    }
    /**
     * Output schema name.
     */
    get outputSchemaName() {
      if (this.outputType === "text") {
        return "text";
      } else if (isZodObject(this.outputType)) {
        return "ZodOutput";
      } else if (typeof this.outputType === "object") {
        return this.outputType.name;
      }
      throw new Error(`Unknown output type: ${this.outputType}`);
    }
    /**
     * Makes a copy of the agent, with the given arguments changed. For example, you could do:
     *
     * ```
     * const newAgent = agent.clone({ instructions: 'New instructions' })
     * ```
     *
     * @param config - A partial configuration to change.
     * @returns A new agent with the given changes.
     */
    clone(config2) {
      return new _Agent({
        ...this,
        ...config2
      });
    }
    /**
     * Transform this agent into a tool, callable by other agents.
     *
     * This is different from handoffs in two ways:
     * 1. In handoffs, the new agent receives the conversation history. In this tool, the new agent
     *    receives generated input.
     * 2. In handoffs, the new agent takes over the conversation. In this tool, the new agent is
     *    called as a tool, and the conversation is continued by the original agent.
     *
     * @param options - Options for the tool.
     * @returns A tool that runs the agent and returns the output text.
     */
    asTool(options) {
      const { toolName, toolDescription, customOutputExtractor, needsApproval, runConfig, runOptions, isEnabled: isEnabled2 } = options;
      return tool({
        name: toolName ?? toFunctionToolName(this.name),
        description: toolDescription ?? "",
        parameters: AgentAsToolNeedApprovalSchame,
        strict: true,
        needsApproval,
        isEnabled: isEnabled2,
        execute: async (data, context, details) => {
          if (!isAgentToolInput(data)) {
            throw new ModelBehaviorError("Agent tool called with invalid input");
          }
          const runner = new Runner(runConfig ?? {});
          const result = await runner.run(this, data.input, {
            context,
            ...runOptions ?? {}
          });
          const completedResult = result;
          const usesStopAtToolNames = typeof this.toolUseBehavior === "object" && this.toolUseBehavior !== null && "stopAtToolNames" in this.toolUseBehavior;
          if (typeof customOutputExtractor !== "function" && usesStopAtToolNames) {
            logger_default.debug(`You're passing the agent (name: ${this.name}) with toolUseBehavior.stopAtToolNames configured as a tool to a different agent; this may not work as you expect. You may want to have a wrapper function tool to consistently return the final output.`);
          }
          const outputText = typeof customOutputExtractor === "function" ? await customOutputExtractor(completedResult) : getOutputText(completedResult.rawResponses[completedResult.rawResponses.length - 1]);
          if (details?.toolCall) {
            saveAgentToolRunResult(details.toolCall, completedResult);
          }
          return outputText;
        }
      });
    }
    /**
     * Returns the system prompt for the agent.
     *
     * If the agent has a function as its instructions, this function will be called with the
     * runContext and the agent instance.
     */
    async getSystemPrompt(runContext) {
      if (typeof this.instructions === "function") {
        return await this.instructions(runContext, this);
      }
      return this.instructions;
    }
    /**
     * Returns the prompt template for the agent, if defined.
     *
     * If the agent has a function as its prompt, this function will be called with the
     * runContext and the agent instance.
     */
    async getPrompt(runContext) {
      if (typeof this.prompt === "function") {
        return await this.prompt(runContext, this);
      }
      return this.prompt;
    }
    /**
     * Fetches the available tools from the MCP servers.
     * @returns the MCP powered tools
     */
    async getMcpTools(runContext) {
      if (this.mcpServers.length > 0) {
        return getAllMcpTools({
          mcpServers: this.mcpServers,
          runContext,
          agent: this,
          convertSchemasToStrict: false
        });
      }
      return [];
    }
    /**
     * ALl agent tools, including the MCPl and function tools.
     *
     * @returns all configured tools
     */
    async getAllTools(runContext) {
      const mcpTools = await this.getMcpTools(runContext);
      const enabledTools = [];
      for (const candidate of this.tools) {
        if (candidate.type === "function") {
          const maybeIsEnabled = candidate.isEnabled;
          const enabled = typeof maybeIsEnabled === "function" ? await maybeIsEnabled(runContext, this) : typeof maybeIsEnabled === "boolean" ? maybeIsEnabled : true;
          if (!enabled) {
            continue;
          }
        }
        enabledTools.push(candidate);
      }
      return [...mcpTools, ...enabledTools];
    }
    hasExplicitToolConfig() {
      return this._toolsExplicitlyConfigured;
    }
    /**
     * Returns the handoffs that should be exposed to the model for the current run.
     *
     * Handoffs that provide an `isEnabled` function returning `false` are omitted.
     */
    async getEnabledHandoffs(runContext) {
      const handoffs = this.handoffs?.map((h) => getHandoff(h)) ?? [];
      const enabled = [];
      for (const handoff2 of handoffs) {
        if (await handoff2.isEnabled({ runContext, agent: this })) {
          enabled.push(handoff2);
        }
      }
      return enabled;
    }
    /**
     * Processes the final output of the agent.
     *
     * @param output - The output of the agent.
     * @returns The parsed out.
     */
    processFinalOutput(output) {
      if (this.outputType === "text") {
        return output;
      }
      if (typeof this.outputType === "object") {
        const parsed = JSON.parse(output);
        if (isZodObject(this.outputType)) {
          return this.outputType.parse(parsed);
        }
        return parsed;
      }
      throw new Error(`Unknown output type: ${this.outputType}`);
    }
    /**
     * Returns a JSON representation of the agent, which is serializable.
     *
     * @returns A JSON object containing the agent's name.
     */
    toJSON() {
      return {
        name: this.name
      };
    }
  };
  __publicField(_Agent, "DEFAULT_MODEL_PLACEHOLDER", "");
  var Agent = _Agent;

  // node_modules/@openai/agents-core/dist/guardrail.mjs
  function defineInputGuardrail({ name, execute, runInParallel = true }) {
    return {
      type: "input",
      name,
      runInParallel,
      guardrailFunction: execute,
      async run(args) {
        return {
          guardrail: { type: "input", name },
          output: await execute(args)
        };
      }
    };
  }
  function defineOutputGuardrail({ name, execute }) {
    return {
      type: "output",
      name,
      guardrailFunction: execute,
      async run(args) {
        return {
          guardrail: { type: "output", name },
          agent: args.agent,
          agentOutput: args.agentOutput,
          output: await execute(args)
        };
      }
    };
  }

  // node_modules/@openai/agents-core/dist/providers.mjs
  var DEFAULT_PROVIDER;
  function getDefaultModelProvider() {
    if (typeof DEFAULT_PROVIDER === "undefined") {
      throw new Error("No default model provider set. Make sure to set a provider using setDefaultModelProvider before calling getDefaultModelProvider or pass an explicit provider.");
    }
    return DEFAULT_PROVIDER;
  }

  // node_modules/@openai/agents-core/dist/types/protocol.mjs
  var SharedBase = external_exports.object({
    /**
     * Additional optional provider specific data. Used for custom functionality or model provider
     * specific fields.
     */
    providerData: external_exports.record(external_exports.string(), external_exports.any()).optional()
  });
  var ItemBase = SharedBase.extend({
    /**
     * An ID to identify the item. This is optional by default. If a model provider absolutely
     * requires this field, it will be validated on the model level.
     */
    id: external_exports.string().optional()
  });
  var Refusal = SharedBase.extend({
    type: external_exports.literal("refusal"),
    /**
     * The refusal explanation from the model.
     */
    refusal: external_exports.string()
  });
  var OutputText = SharedBase.extend({
    type: external_exports.literal("output_text"),
    /**
     * The text output from the model.
     */
    text: external_exports.string()
  });
  var InputText = SharedBase.extend({
    type: external_exports.literal("input_text"),
    /**
     * A text input for example a message from a user
     */
    text: external_exports.string()
  });
  var ReasoningText = SharedBase.extend({
    type: external_exports.literal("reasoning_text"),
    /**
     * A text input for example a message from a user
     */
    text: external_exports.string()
  });
  var InputImage = SharedBase.extend({
    type: external_exports.literal("input_image"),
    /**
     * The image input to the model. Could be provided inline (`image`), as a URL, or by reference to a
     * previously uploaded OpenAI file.
     */
    image: external_exports.string().or(external_exports.object({ id: external_exports.string().describe("OpenAI file ID") })).describe("Either base64 encoded image data, a data URL, or an object with a file ID.").optional(),
    /**
     * Controls the level of detail requested for image understanding tasks.
     * Future models may add new values, therefore this accepts any string.
     */
    detail: external_exports.string().optional()
  });
  var InputFile = SharedBase.extend({
    type: external_exports.literal("input_file"),
    /**
     * The file input to the model. Could be raw data, a URL, or an OpenAI file ID.
     */
    file: external_exports.string().describe("Either base64 encoded file data or a publicly accessible file URL").or(external_exports.object({ id: external_exports.string().describe("OpenAI file ID") })).or(external_exports.object({ url: external_exports.string().describe("Publicly accessible file URL") })).describe("Contents of the file or an object with a file ID.").optional(),
    /**
     * Optional filename metadata when uploading file data inline.
     */
    filename: external_exports.string().optional()
  });
  var AudioContent = SharedBase.extend({
    type: external_exports.literal("audio"),
    /**
     * The audio input to the model. Could be base64 encoded audio data or an object with a file ID.
     */
    audio: external_exports.string().or(external_exports.object({
      id: external_exports.string()
    })).describe("Base64 encoded audio data or file id"),
    /**
     * The format of the audio.
     */
    format: external_exports.string().nullable().optional(),
    /**
     * The transcript of the audio.
     */
    transcript: external_exports.string().nullable().optional()
  });
  var ImageContent = SharedBase.extend({
    type: external_exports.literal("image"),
    /**
     * The image input to the model. Could be base64 encoded image data or an object with a file ID.
     */
    image: external_exports.string().describe("Base64 encoded image data")
  });
  var ToolOutputText = SharedBase.extend({
    type: external_exports.literal("text"),
    /**
     * The text output from the model.
     */
    text: external_exports.string()
  });
  var ImageDataObjectSchema = external_exports.object({
    data: external_exports.union([external_exports.string(), external_exports.instanceof(Uint8Array)]).describe("Base64 image data, or raw bytes that will be base64 encoded automatically."),
    mediaType: external_exports.string().optional()
  });
  var ImageUrlObjectSchema = external_exports.object({
    url: external_exports.string().describe("Publicly accessible URL pointing to the image content")
  });
  var ImageFileIdObjectSchema = external_exports.object({
    fileId: external_exports.string().describe("OpenAI file ID referencing uploaded image content")
  });
  var ImageObjectSchema = external_exports.union([ImageDataObjectSchema, ImageUrlObjectSchema, ImageFileIdObjectSchema]).describe("Inline image data or references to uploaded content.");
  var FileDataObjectSchema = external_exports.object({
    data: external_exports.union([external_exports.string(), external_exports.instanceof(Uint8Array)]).describe("Base64 encoded file data, or raw bytes that will be encoded automatically."),
    mediaType: external_exports.string().describe("IANA media type describing the file contents"),
    filename: external_exports.string().describe("Filename associated with the inline data")
  });
  var FileUrlObjectSchema = external_exports.object({
    url: external_exports.string().describe("Publicly accessible URL for the file content"),
    filename: external_exports.string().optional()
  });
  var FileIdObjectSchema = external_exports.object({
    id: external_exports.string().describe("OpenAI file ID referencing uploaded content"),
    filename: external_exports.string().optional()
  });
  var FileReferenceSchema = external_exports.union([
    external_exports.string().describe("Existing data URL or base64 string"),
    FileDataObjectSchema,
    FileUrlObjectSchema,
    FileIdObjectSchema
  ]).describe("Inline data (with metadata) or references pointing to file contents.");
  var zStringWithHints = (..._hints) => external_exports.string();
  var ToolOutputImage = SharedBase.extend({
    type: external_exports.literal("image"),
    /**
     * Inline image content or a reference to an uploaded file. Accepts a URL/data URL string or an
     * object describing the data/url/fileId source.
     */
    image: external_exports.string().or(ImageObjectSchema).optional(),
    /**
     * Controls the requested level of detail for vision models.
     * Use a string to avoid constraining future model capabilities.
     */
    detail: zStringWithHints("low", "high", "auto").optional()
  });
  var ToolOutputFileContent = SharedBase.extend({
    type: external_exports.literal("file"),
    /**
     * File output reference. Provide either a string (data URL / base64), a data object (requires
     * mediaType + filename), or an object pointing to an uploaded file/URL.
     */
    file: FileReferenceSchema
  });
  var ComputerToolOutput = SharedBase.extend({
    type: external_exports.literal("computer_screenshot"),
    /**
     * A base64 encoded image data or a URL representing the screenshot.
     */
    data: external_exports.string().describe("Base64 encoded image data or URL")
  });
  var computerActions = external_exports.discriminatedUnion("type", [
    external_exports.object({ type: external_exports.literal("screenshot") }),
    external_exports.object({
      type: external_exports.literal("click"),
      x: external_exports.number(),
      y: external_exports.number(),
      button: external_exports.enum(["left", "right", "wheel", "back", "forward"])
    }),
    external_exports.object({
      type: external_exports.literal("double_click"),
      x: external_exports.number(),
      y: external_exports.number()
    }),
    external_exports.object({
      type: external_exports.literal("scroll"),
      x: external_exports.number(),
      y: external_exports.number(),
      scroll_x: external_exports.number(),
      scroll_y: external_exports.number()
    }),
    external_exports.object({
      type: external_exports.literal("type"),
      text: external_exports.string()
    }),
    external_exports.object({ type: external_exports.literal("wait") }),
    external_exports.object({
      type: external_exports.literal("move"),
      x: external_exports.number(),
      y: external_exports.number()
    }),
    external_exports.object({
      type: external_exports.literal("keypress"),
      keys: external_exports.array(external_exports.string())
    }),
    external_exports.object({
      type: external_exports.literal("drag"),
      path: external_exports.array(external_exports.object({ x: external_exports.number(), y: external_exports.number() }))
    })
  ]);
  var AssistantContent = external_exports.discriminatedUnion("type", [
    OutputText,
    Refusal,
    AudioContent,
    ImageContent
  ]);
  var MessageBase = ItemBase.extend({
    /**
     * Any item without a type is treated as a message
     */
    type: external_exports.literal("message").optional()
  });
  var AssistantMessageItem = MessageBase.extend({
    /**
     * Representing a message from the assistant (i.e. the model)
     */
    role: external_exports.literal("assistant"),
    /**
     * The status of the message.
     */
    status: external_exports.enum(["in_progress", "completed", "incomplete"]),
    /**
     * The content of the message.
     */
    content: external_exports.array(AssistantContent)
  });
  var UserContent = external_exports.discriminatedUnion("type", [
    InputText,
    InputImage,
    InputFile,
    AudioContent
  ]);
  var UserMessageItem = MessageBase.extend({
    // type: z.literal('message'),
    /**
     * Representing a message from the user
     */
    role: external_exports.literal("user"),
    /**
     * The content of the message.
     */
    content: external_exports.array(UserContent).or(external_exports.string())
  });
  var SystemMessageItem = MessageBase.extend({
    // type: z.literal('message'),
    /**
     * Representing a system message to the user
     */
    role: external_exports.literal("system"),
    /**
     * The content of the message.
     */
    content: external_exports.string()
  });
  var MessageItem = external_exports.discriminatedUnion("role", [
    SystemMessageItem,
    AssistantMessageItem,
    UserMessageItem
  ]);
  var HostedToolCallItem = ItemBase.extend({
    type: external_exports.literal("hosted_tool_call"),
    /**
     * The name of the hosted tool. For example `web_search_call` or `file_search_call`
     */
    name: external_exports.string().describe("The name of the hosted tool"),
    /**
     * The arguments of the hosted tool call.
     */
    arguments: external_exports.string().describe("The arguments of the hosted tool call").optional(),
    /**
     * The status of the tool call.
     */
    status: external_exports.string().optional(),
    /**
     * The primary output of the tool call. Additional output might be in the `providerData` field.
     */
    output: external_exports.string().optional()
  });
  var FunctionCallItem = ItemBase.extend({
    type: external_exports.literal("function_call"),
    /**
     * The ID of the tool call. Required to match up the respective tool call result.
     */
    callId: external_exports.string().describe("The ID of the tool call"),
    /**
     * The name of the function.
     */
    name: external_exports.string().describe("The name of the function"),
    /**
     * The status of the function call.
     */
    status: external_exports.enum(["in_progress", "completed", "incomplete"]).optional(),
    /**
     * The arguments of the function call.
     */
    arguments: external_exports.string()
  });
  var ToolCallOutputContent = external_exports.discriminatedUnion("type", [
    ToolOutputText,
    ToolOutputImage,
    ToolOutputFileContent
  ]);
  var ToolCallStructuredOutput = external_exports.discriminatedUnion("type", [
    InputText,
    InputImage,
    InputFile
  ]);
  var FunctionCallResultItem = ItemBase.extend({
    type: external_exports.literal("function_call_result"),
    /**
     * The name of the tool that was called
     */
    name: external_exports.string().describe("The name of the tool"),
    /**
     * The ID of the tool call. Required to match up the respective tool call result.
     */
    callId: external_exports.string().describe("The ID of the tool call"),
    /**
     * The status of the tool call.
     */
    status: external_exports.enum(["in_progress", "completed", "incomplete"]),
    /**
     * The output of the tool call.
     */
    output: external_exports.union([
      external_exports.string(),
      ToolCallOutputContent,
      external_exports.array(ToolCallStructuredOutput)
    ]).describe("Output returned by the tool call. Supports plain strings, legacy ToolOutput items, or structured input_* items.")
  });
  var ComputerUseCallItem = ItemBase.extend({
    type: external_exports.literal("computer_call"),
    /**
     * The ID of the computer call. Required to match up the respective computer call result.
     */
    callId: external_exports.string().describe("The ID of the computer call"),
    /**
     * The status of the computer call.
     */
    status: external_exports.enum(["in_progress", "completed", "incomplete"]),
    /**
     * The action to be performed by the computer.
     */
    action: computerActions
  });
  var ComputerCallResultItem = ItemBase.extend({
    type: external_exports.literal("computer_call_result"),
    /**
     * The ID of the computer call. Required to match up the respective computer call result.
     */
    callId: external_exports.string().describe("The ID of the computer call"),
    /**
     * The output of the computer call.
     */
    output: ComputerToolOutput
  });
  var ShellAction = external_exports.object({
    commands: external_exports.array(external_exports.string()),
    timeoutMs: external_exports.number().int().min(0).optional(),
    maxOutputLength: external_exports.number().int().min(0).optional()
  });
  var ShellCallItem = ItemBase.extend({
    type: external_exports.literal("shell_call"),
    callId: external_exports.string(),
    status: external_exports.enum(["in_progress", "completed", "incomplete"]).optional(),
    action: ShellAction
  });
  var ShellCallOutcome = external_exports.discriminatedUnion("type", [
    external_exports.object({ type: external_exports.literal("timeout") }),
    external_exports.object({
      type: external_exports.literal("exit"),
      exitCode: external_exports.number().int().nullable()
    })
  ]);
  var ShellCallOutputContent = external_exports.object({
    stdout: external_exports.string(),
    stderr: external_exports.string(),
    outcome: ShellCallOutcome
  }).passthrough();
  var ShellCallResultItem = ItemBase.extend({
    type: external_exports.literal("shell_call_output"),
    callId: external_exports.string(),
    maxOutputLength: external_exports.number().optional(),
    output: external_exports.array(ShellCallOutputContent)
  });
  var ApplyPatchOperationCreateFile = external_exports.object({
    type: external_exports.literal("create_file"),
    path: external_exports.string(),
    diff: external_exports.string()
  });
  var ApplyPatchOperationUpdateFile = external_exports.object({
    type: external_exports.literal("update_file"),
    path: external_exports.string(),
    diff: external_exports.string()
  });
  var ApplyPatchOperationDeleteFile = external_exports.object({
    type: external_exports.literal("delete_file"),
    path: external_exports.string()
  });
  var ApplyPatchOperation = external_exports.discriminatedUnion("type", [
    ApplyPatchOperationCreateFile,
    ApplyPatchOperationUpdateFile,
    ApplyPatchOperationDeleteFile
  ]);
  var ApplyPatchCallItem = ItemBase.extend({
    type: external_exports.literal("apply_patch_call"),
    callId: external_exports.string(),
    status: external_exports.enum(["in_progress", "completed"]),
    operation: ApplyPatchOperation
  });
  var ApplyPatchCallResultItem = ItemBase.extend({
    type: external_exports.literal("apply_patch_call_output"),
    callId: external_exports.string(),
    status: external_exports.enum(["completed", "failed"]),
    output: external_exports.string().optional()
  });
  var ToolCallItem = external_exports.discriminatedUnion("type", [
    ComputerUseCallItem,
    ShellCallItem,
    ApplyPatchCallItem,
    FunctionCallItem,
    HostedToolCallItem
  ]);
  var ReasoningItem = SharedBase.extend({
    id: external_exports.string().optional(),
    type: external_exports.literal("reasoning"),
    /**
     * The user facing representation of the reasoning. Additional information might be in the `providerData` field.
     */
    content: external_exports.array(InputText),
    /**
     * The raw reasoning text from the model.
     */
    rawContent: external_exports.array(ReasoningText).optional()
  });
  var UnknownItem = ItemBase.extend({
    type: external_exports.literal("unknown")
  });
  var OutputModelItem = external_exports.discriminatedUnion("type", [
    AssistantMessageItem,
    HostedToolCallItem,
    FunctionCallItem,
    ComputerUseCallItem,
    ShellCallItem,
    ApplyPatchCallItem,
    FunctionCallResultItem,
    ShellCallResultItem,
    ApplyPatchCallResultItem,
    ReasoningItem,
    UnknownItem
  ]);
  var ModelItem = external_exports.union([
    UserMessageItem,
    AssistantMessageItem,
    SystemMessageItem,
    HostedToolCallItem,
    FunctionCallItem,
    ComputerUseCallItem,
    ShellCallItem,
    ApplyPatchCallItem,
    FunctionCallResultItem,
    ComputerCallResultItem,
    ShellCallResultItem,
    ApplyPatchCallResultItem,
    ReasoningItem,
    UnknownItem
  ]);
  var RequestUsageData = external_exports.object({
    inputTokens: external_exports.number(),
    outputTokens: external_exports.number(),
    totalTokens: external_exports.number(),
    inputTokensDetails: external_exports.record(external_exports.string(), external_exports.number()).optional(),
    outputTokensDetails: external_exports.record(external_exports.string(), external_exports.number()).optional()
  });
  var UsageData = external_exports.object({
    requests: external_exports.number().optional(),
    inputTokens: external_exports.number(),
    outputTokens: external_exports.number(),
    totalTokens: external_exports.number(),
    inputTokensDetails: external_exports.union([
      external_exports.record(external_exports.string(), external_exports.number()),
      external_exports.array(external_exports.record(external_exports.string(), external_exports.number()))
    ]).optional(),
    outputTokensDetails: external_exports.union([
      external_exports.record(external_exports.string(), external_exports.number()),
      external_exports.array(external_exports.record(external_exports.string(), external_exports.number()))
    ]).optional(),
    requestUsageEntries: external_exports.array(RequestUsageData).optional()
  });
  var StreamEventTextStream = SharedBase.extend({
    type: external_exports.literal("output_text_delta"),
    /**
     * The delta text that was streamed by the modelto the user.
     */
    delta: external_exports.string()
  });
  var StreamEventResponseStarted = SharedBase.extend({
    type: external_exports.literal("response_started")
  });
  var StreamEventResponseCompleted = SharedBase.extend({
    type: external_exports.literal("response_done"),
    /**
     * The response from the model.
     */
    response: SharedBase.extend({
      /**
       * The ID of the response.
       */
      id: external_exports.string(),
      /**
       * The usage data for the response.
       */
      usage: UsageData,
      /**
       * The output from the model.
       */
      output: external_exports.array(OutputModelItem)
    })
  });
  var StreamEventGenericItem = SharedBase.extend({
    type: external_exports.literal("model"),
    event: external_exports.any().describe("The event from the model")
  });
  var StreamEvent = external_exports.discriminatedUnion("type", [
    StreamEventTextStream,
    StreamEventResponseCompleted,
    StreamEventResponseStarted,
    StreamEventGenericItem
  ]);

  // node_modules/@openai/agents-core/dist/usage.mjs
  var RequestUsage = class {
    constructor(input) {
      /**
       * The number of input tokens used for this request.
       */
      __publicField(this, "inputTokens");
      /**
       * The number of output tokens used for this request.
       */
      __publicField(this, "outputTokens");
      /**
       * The total number of tokens sent and received for this request.
       */
      __publicField(this, "totalTokens");
      /**
       * Details about the input tokens used for this request.
       */
      __publicField(this, "inputTokensDetails");
      /**
       * Details about the output tokens used for this request.
       */
      __publicField(this, "outputTokensDetails");
      this.inputTokens = input?.inputTokens ?? input?.input_tokens ?? 0;
      this.outputTokens = input?.outputTokens ?? input?.output_tokens ?? 0;
      this.totalTokens = input?.totalTokens ?? input?.total_tokens ?? this.inputTokens + this.outputTokens;
      const inputTokensDetails = input?.inputTokensDetails ?? input?.input_tokens_details;
      this.inputTokensDetails = inputTokensDetails ? inputTokensDetails : {};
      const outputTokensDetails = input?.outputTokensDetails ?? input?.output_tokens_details;
      this.outputTokensDetails = outputTokensDetails ? outputTokensDetails : {};
    }
  };
  var Usage = class {
    constructor(input) {
      /**
       * The number of requests made to the LLM API.
       */
      __publicField(this, "requests");
      /**
       * The number of input tokens used across all requests.
       */
      __publicField(this, "inputTokens");
      /**
       * The number of output tokens used across all requests.
       */
      __publicField(this, "outputTokens");
      /**
       * The total number of tokens sent and received, across all requests.
       */
      __publicField(this, "totalTokens");
      /**
       * Details about the input tokens used across all requests.
       */
      __publicField(this, "inputTokensDetails", []);
      /**
       * Details about the output tokens used across all requests.
       */
      __publicField(this, "outputTokensDetails", []);
      /**
       * List of per-request usage entries for detailed cost calculations.
       */
      __publicField(this, "requestUsageEntries");
      if (typeof input === "undefined") {
        this.requests = 0;
        this.inputTokens = 0;
        this.outputTokens = 0;
        this.totalTokens = 0;
        this.inputTokensDetails = [];
        this.outputTokensDetails = [];
        this.requestUsageEntries = void 0;
      } else {
        this.requests = input?.requests ?? 1;
        this.inputTokens = input?.inputTokens ?? input?.input_tokens ?? 0;
        this.outputTokens = input?.outputTokens ?? input?.output_tokens ?? 0;
        this.totalTokens = input?.totalTokens ?? input?.total_tokens ?? this.inputTokens + this.outputTokens;
        const inputTokensDetails = input?.inputTokensDetails ?? input?.input_tokens_details;
        if (Array.isArray(inputTokensDetails)) {
          this.inputTokensDetails = inputTokensDetails;
        } else {
          this.inputTokensDetails = inputTokensDetails ? [inputTokensDetails] : [];
        }
        const outputTokensDetails = input?.outputTokensDetails ?? input?.output_tokens_details;
        if (Array.isArray(outputTokensDetails)) {
          this.outputTokensDetails = outputTokensDetails;
        } else {
          this.outputTokensDetails = outputTokensDetails ? [outputTokensDetails] : [];
        }
        const requestUsageEntries = input?.requestUsageEntries ?? input?.request_usage_entries;
        const normalizedRequestUsageEntries = Array.isArray(requestUsageEntries) ? requestUsageEntries.map((entry) => entry instanceof RequestUsage ? entry : new RequestUsage(entry)) : void 0;
        this.requestUsageEntries = normalizedRequestUsageEntries && normalizedRequestUsageEntries.length > 0 ? normalizedRequestUsageEntries : void 0;
      }
    }
    add(newUsage) {
      this.requests += newUsage.requests ?? 0;
      this.inputTokens += newUsage.inputTokens ?? 0;
      this.outputTokens += newUsage.outputTokens ?? 0;
      this.totalTokens += newUsage.totalTokens ?? 0;
      if (newUsage.inputTokensDetails) {
        this.inputTokensDetails.push(...newUsage.inputTokensDetails);
      }
      if (newUsage.outputTokensDetails) {
        this.outputTokensDetails.push(...newUsage.outputTokensDetails);
      }
      if (Array.isArray(newUsage.requestUsageEntries) && newUsage.requestUsageEntries.length > 0) {
        this.requestUsageEntries ?? (this.requestUsageEntries = []);
        this.requestUsageEntries.push(...newUsage.requestUsageEntries.map((entry) => entry instanceof RequestUsage ? entry : new RequestUsage(entry)));
      } else if (newUsage.requests === 1 && newUsage.totalTokens > 0) {
        this.requestUsageEntries ?? (this.requestUsageEntries = []);
        this.requestUsageEntries.push(new RequestUsage({
          inputTokens: newUsage.inputTokens,
          outputTokens: newUsage.outputTokens,
          totalTokens: newUsage.totalTokens,
          inputTokensDetails: newUsage.inputTokensDetails?.[0],
          outputTokensDetails: newUsage.outputTokensDetails?.[0]
        }));
      }
    }
  };

  // node_modules/@openai/agents-core/dist/runContext.mjs
  var _approvals;
  var RunContext = class {
    constructor(context = {}) {
      /**
       * The context object you passed to the `Runner.run()` method.
       */
      __publicField(this, "context");
      /**
       * The usage of the agent run so far. For streamed responses, the usage will be stale until the
       * last chunk of the stream is processed.
       */
      __publicField(this, "usage");
      /**
       * A map of tool names to whether they have been approved.
       */
      __privateAdd(this, _approvals);
      this.context = context;
      this.usage = new Usage();
      __privateSet(this, _approvals, /* @__PURE__ */ new Map());
    }
    /**
     * Rebuild the approvals map from a serialized state.
     * @internal
     *
     * @param approvals - The approvals map to rebuild.
     */
    _rebuildApprovals(approvals) {
      __privateSet(this, _approvals, new Map(Object.entries(approvals)));
    }
    /**
     * Check if a tool call has been approved.
     *
     * @param approval - Details about the tool call being evaluated.
     * @returns `true` if the tool call has been approved, `false` if blocked and `undefined` if not yet approved or rejected.
     */
    isToolApproved(approval) {
      const { toolName, callId } = approval;
      const approvalEntry = __privateGet(this, _approvals).get(toolName);
      if (approvalEntry?.approved === true && approvalEntry.rejected === true) {
        logger_default.warn("Tool is permanently approved and rejected at the same time. Approval takes precedence");
        return true;
      }
      if (approvalEntry?.approved === true) {
        return true;
      }
      if (approvalEntry?.rejected === true) {
        return false;
      }
      const individualCallApproval = Array.isArray(approvalEntry?.approved) ? approvalEntry.approved.includes(callId) : false;
      const individualCallRejection = Array.isArray(approvalEntry?.rejected) ? approvalEntry.rejected.includes(callId) : false;
      if (individualCallApproval && individualCallRejection) {
        logger_default.warn(`Tool call ${callId} is both approved and rejected at the same time. Approval takes precedence`);
        return true;
      }
      if (individualCallApproval) {
        return true;
      }
      if (individualCallRejection) {
        return false;
      }
      return void 0;
    }
    /**
     * Approve a tool call.
     *
     * @param approvalItem - The tool approval item to approve.
     * @param options - Additional approval behavior options.
     */
    approveTool(approvalItem, { alwaysApprove = false } = {}) {
      const toolName = approvalItem.toolName ?? approvalItem.rawItem.name;
      if (alwaysApprove) {
        __privateGet(this, _approvals).set(toolName, {
          approved: true,
          rejected: []
        });
        return;
      }
      const approvalEntry = __privateGet(this, _approvals).get(toolName) ?? {
        approved: [],
        rejected: []
      };
      if (Array.isArray(approvalEntry.approved)) {
        const callId = "callId" in approvalItem.rawItem ? approvalItem.rawItem.callId : approvalItem.rawItem.id;
        approvalEntry.approved.push(callId);
      }
      __privateGet(this, _approvals).set(toolName, approvalEntry);
    }
    /**
     * Reject a tool call.
     *
     * @param approvalItem - The tool approval item to reject.
     */
    rejectTool(approvalItem, { alwaysReject = false } = {}) {
      const toolName = approvalItem.toolName ?? approvalItem.rawItem.name;
      if (alwaysReject) {
        __privateGet(this, _approvals).set(toolName, {
          approved: false,
          rejected: true
        });
        return;
      }
      const approvalEntry = __privateGet(this, _approvals).get(toolName) ?? {
        approved: [],
        rejected: []
      };
      if (Array.isArray(approvalEntry.rejected)) {
        const callId = "callId" in approvalItem.rawItem ? approvalItem.rawItem.callId : approvalItem.rawItem.id;
        approvalEntry.rejected.push(callId);
      }
      __privateGet(this, _approvals).set(toolName, approvalEntry);
    }
    toJSON() {
      return {
        context: this.context,
        usage: this.usage,
        approvals: Object.fromEntries(__privateGet(this, _approvals).entries())
      };
    }
  };
  _approvals = new WeakMap();

  // node_modules/@openai/agents-core/dist/utils/serialize.mjs
  function serializeTool(tool2) {
    if (tool2.type === "function") {
      return {
        type: "function",
        name: tool2.name,
        description: tool2.description,
        parameters: tool2.parameters,
        strict: tool2.strict
      };
    }
    if (tool2.type === "computer") {
      return {
        type: "computer",
        name: tool2.name,
        environment: tool2.computer.environment,
        dimensions: tool2.computer.dimensions
      };
    }
    if (tool2.type === "shell") {
      return {
        type: "shell",
        name: tool2.name
      };
    }
    if (tool2.type === "apply_patch") {
      return {
        type: "apply_patch",
        name: tool2.name
      };
    }
    return {
      type: "hosted_tool",
      name: tool2.name,
      providerData: tool2.providerData
    };
  }
  function serializeHandoff(h) {
    return {
      toolName: h.toolName,
      toolDescription: h.toolDescription,
      inputJsonSchema: h.inputJsonSchema,
      strictJsonSchema: h.strictJsonSchema
    };
  }

  // node_modules/@openai/agents-core/dist/items.mjs
  var RunItemBase = class {
    constructor() {
      __publicField(this, "type", "base_item");
      __publicField(this, "rawItem");
    }
    toJSON() {
      return {
        type: this.type,
        rawItem: this.rawItem
      };
    }
  };
  var RunMessageOutputItem = class extends RunItemBase {
    constructor(rawItem, agent) {
      super();
      __publicField(this, "rawItem");
      __publicField(this, "agent");
      __publicField(this, "type", "message_output_item");
      this.rawItem = rawItem;
      this.agent = agent;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        agent: this.agent.toJSON()
      };
    }
    get content() {
      let content = "";
      for (const part of this.rawItem.content) {
        if (part.type === "output_text") {
          content += part.text;
        }
      }
      return content;
    }
  };
  var RunToolCallItem = class extends RunItemBase {
    constructor(rawItem, agent) {
      super();
      __publicField(this, "rawItem");
      __publicField(this, "agent");
      __publicField(this, "type", "tool_call_item");
      this.rawItem = rawItem;
      this.agent = agent;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        agent: this.agent.toJSON()
      };
    }
  };
  var RunToolCallOutputItem = class extends RunItemBase {
    constructor(rawItem, agent, output) {
      super();
      __publicField(this, "rawItem");
      __publicField(this, "agent");
      __publicField(this, "output");
      __publicField(this, "type", "tool_call_output_item");
      this.rawItem = rawItem;
      this.agent = agent;
      this.output = output;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        agent: this.agent.toJSON(),
        output: toSmartString(this.output)
      };
    }
  };
  var RunReasoningItem = class extends RunItemBase {
    constructor(rawItem, agent) {
      super();
      __publicField(this, "rawItem");
      __publicField(this, "agent");
      __publicField(this, "type", "reasoning_item");
      this.rawItem = rawItem;
      this.agent = agent;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        agent: this.agent.toJSON()
      };
    }
  };
  var RunHandoffCallItem = class extends RunItemBase {
    constructor(rawItem, agent) {
      super();
      __publicField(this, "rawItem");
      __publicField(this, "agent");
      __publicField(this, "type", "handoff_call_item");
      this.rawItem = rawItem;
      this.agent = agent;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        agent: this.agent.toJSON()
      };
    }
  };
  var RunHandoffOutputItem = class extends RunItemBase {
    constructor(rawItem, sourceAgent, targetAgent) {
      super();
      __publicField(this, "rawItem");
      __publicField(this, "sourceAgent");
      __publicField(this, "targetAgent");
      __publicField(this, "type", "handoff_output_item");
      this.rawItem = rawItem;
      this.sourceAgent = sourceAgent;
      this.targetAgent = targetAgent;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        sourceAgent: this.sourceAgent.toJSON(),
        targetAgent: this.targetAgent.toJSON()
      };
    }
  };
  var RunToolApprovalItem = class extends RunItemBase {
    constructor(rawItem, agent, toolName) {
      super();
      __publicField(this, "rawItem");
      __publicField(this, "agent");
      __publicField(this, "toolName");
      __publicField(this, "type", "tool_approval_item");
      this.rawItem = rawItem;
      this.agent = agent;
      this.toolName = toolName;
      this.toolName = toolName ?? rawItem.name;
    }
    /**
     * Returns the tool name if available on the raw item or provided explicitly.
     * Kept for backwards compatibility with code that previously relied on `rawItem.name`.
     */
    get name() {
      return this.toolName ?? this.rawItem.name;
    }
    /**
     * Returns the arguments if the raw item has an arguments property otherwise this will be undefined.
     */
    get arguments() {
      return "arguments" in this.rawItem ? this.rawItem.arguments : void 0;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        agent: this.agent.toJSON(),
        toolName: this.toolName
      };
    }
  };

  // node_modules/@openai/agents-core/dist/tracing/createSpans.mjs
  function _withSpanFactory(createSpan) {
    return async (fn, ...args) => {
      return withNewSpanContext(async () => {
        const span = createSpan(...args);
        setCurrentSpan(span);
        try {
          span.start();
          return await fn(span);
        } catch (error2) {
          span.setError({
            message: error2.message,
            data: error2.data
          });
          throw error2;
        } finally {
          span.end();
          resetCurrentSpan();
        }
      });
    };
  }
  function createResponseSpan(options, parent) {
    options = {};
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "response",
        ...options.data
      }
    }, parent);
  }
  var withResponseSpan = _withSpanFactory(createResponseSpan);
  function createAgentSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "agent",
        name: options?.data?.name ?? "Agent",
        ...options?.data
      }
    }, parent);
  }
  var withAgentSpan = _withSpanFactory(createAgentSpan);
  function createFunctionSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "function",
        input: options?.data?.input ?? "",
        output: options?.data?.output ?? "",
        ...options?.data
      }
    }, parent);
  }
  var withFunctionSpan = _withSpanFactory(createFunctionSpan);
  function createHandoffSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: { type: "handoff", ...options?.data }
    }, parent);
  }
  var withHandoffSpan = _withSpanFactory(createHandoffSpan);
  function createGenerationSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "generation",
        ...options?.data
      }
    }, parent);
  }
  var withGenerationSpan = _withSpanFactory(createGenerationSpan);
  function createCustomSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "custom",
        data: {},
        ...options?.data
      }
    }, parent);
  }
  var withCustomSpan = _withSpanFactory(createCustomSpan);
  function createGuardrailSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "guardrail",
        triggered: false,
        ...options?.data
      }
    }, parent);
  }
  var withGuardrailSpan = _withSpanFactory(createGuardrailSpan);
  function createTranscriptionSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "transcription",
        ...options.data
      }
    }, parent);
  }
  var withTranscriptionSpan = _withSpanFactory(createTranscriptionSpan);
  function createSpeechSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "speech",
        ...options.data
      }
    }, parent);
  }
  var withSpeechSpan = _withSpanFactory(createSpeechSpan);
  function createSpeechGroupSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "speech_group",
        ...options?.data
      }
    }, parent);
  }
  var withSpeechGroupSpan = _withSpanFactory(createSpeechGroupSpan);
  function createMCPListToolsSpan(options, parent) {
    return getGlobalTraceProvider().createSpan({
      ...options,
      data: {
        type: "mcp_tools",
        ...options?.data
      }
    }, parent);
  }
  var withMCPListToolsSpan = _withSpanFactory(createMCPListToolsSpan);

  // node_modules/@openai/agents-core/dist/utils/base64.mjs
  function encodeUint8ArrayToBase64(data) {
    if (data.length === 0) {
      return "";
    }
    const globalBuffer = typeof globalThis !== "undefined" && globalThis.Buffer ? globalThis.Buffer : void 0;
    if (globalBuffer) {
      return globalBuffer.from(data).toString("base64");
    }
    let binary = "";
    for (let i2 = 0; i2 < data.length; i2 += 1) {
      binary += String.fromCharCode(data[i2]);
    }
    if (typeof globalThis.btoa === "function") {
      return globalThis.btoa(binary);
    }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let result = "";
    let i = 0;
    while (i < binary.length) {
      const c1 = binary.charCodeAt(i++);
      const c2 = binary.charCodeAt(i++);
      const c3 = binary.charCodeAt(i++);
      const enc1 = c1 >> 2;
      const enc2 = (c1 & 3) << 4 | c2 >> 4;
      const enc3 = isNaN(c2) ? 64 : (c2 & 15) << 2 | c3 >> 6;
      const enc4 = isNaN(c3) ? 64 : c3 & 63;
      result += chars.charAt(enc1) + chars.charAt(enc2) + chars.charAt(enc3) + chars.charAt(enc4);
    }
    return result;
  }

  // node_modules/@openai/agents-core/dist/events.mjs
  var RunRawModelStreamEvent = class {
    /**
     * @param data The raw responses stream events from the LLM.
     */
    constructor(data) {
      __publicField(this, "data");
      /**
       * The type of the event.
       */
      __publicField(this, "type", "raw_model_stream_event");
      this.data = data;
    }
  };
  var RunItemStreamEvent = class {
    /**
     * @param name The name of the event.
     * @param item The item that was created.
     */
    constructor(name, item) {
      __publicField(this, "name");
      __publicField(this, "item");
      __publicField(this, "type", "run_item_stream_event");
      this.name = name;
      this.item = item;
    }
  };
  var RunAgentUpdatedStreamEvent = class {
    /**
     * @param agent The new agent
     */
    constructor(agent) {
      __publicField(this, "agent");
      __publicField(this, "type", "agent_updated_stream_event");
      this.agent = agent;
    }
  };

  // node_modules/@openai/agents-core/dist/runImplementation.mjs
  function isApprovalItemLike(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    if (!("rawItem" in value)) {
      return false;
    }
    const rawItem = value.rawItem;
    if (!rawItem || typeof rawItem !== "object") {
      return false;
    }
    const itemType = rawItem.type;
    return itemType === "function_call" || itemType === "hosted_tool_call";
  }
  function getApprovalIdentity(approval) {
    const rawItem = approval.rawItem;
    if (!rawItem) {
      return void 0;
    }
    if (rawItem.type === "function_call" && rawItem.callId) {
      return `function_call:${rawItem.callId}`;
    }
    if ("callId" in rawItem && rawItem.callId) {
      return `${rawItem.type}:${rawItem.callId}`;
    }
    const id = "id" in rawItem ? rawItem.id : void 0;
    if (id) {
      return `${rawItem.type}:${id}`;
    }
    const providerData = typeof rawItem.providerData === "object" && rawItem.providerData ? rawItem.providerData : void 0;
    if (providerData?.id) {
      return `${rawItem.type}:provider:${providerData.id}`;
    }
    const agentName = "agent" in approval && approval.agent ? approval.agent.name : "";
    try {
      return `${agentName}:${rawItem.type}:${JSON.stringify(rawItem)}`;
    } catch {
      return `${agentName}:${rawItem.type}`;
    }
  }
  function formatFinalOutputTypeError(error2) {
    try {
      if (error2 instanceof external_exports.ZodError) {
        const issue = error2.issues[0];
        if (issue) {
          const issuePathParts = Array.isArray(issue.path) ? issue.path : [];
          const issuePath = issuePathParts.length > 0 ? issuePathParts.map((part) => String(part)).join(".") : "(root)";
          const message = truncateForDeveloper(issue.message ?? "");
          return `Invalid output type: final assistant output failed schema validation at "${issuePath}" (${message}).`;
        }
        return "Invalid output type: final assistant output failed schema validation.";
      }
      if (error2 instanceof Error && error2.message) {
        return `Invalid output type: ${truncateForDeveloper(error2.message)}`;
      }
    } catch {
    }
    return "Invalid output type: final assistant output did not match the expected schema.";
  }
  function truncateForDeveloper(message, maxLength = 160) {
    const trimmed = message.trim();
    if (!trimmed) {
      return "Schema validation failed.";
    }
    if (trimmed.length <= maxLength) {
      return trimmed;
    }
    return `${trimmed.slice(0, maxLength - 3)}...`;
  }
  function processModelResponse(modelResponse, agent, tools, handoffs) {
    const items = [];
    const runHandoffs = [];
    const runFunctions = [];
    const runComputerActions = [];
    const runShellActions = [];
    const runApplyPatchActions = [];
    const runMCPApprovalRequests = [];
    const toolsUsed = [];
    const handoffMap = new Map(handoffs.map((h) => [h.toolName, h]));
    const functionMap = new Map(tools.filter((t) => t.type === "function").map((t) => [t.name, t]));
    const computerTool2 = tools.find((t) => t.type === "computer");
    const shellTool2 = tools.find((t) => t.type === "shell");
    const applyPatchTool2 = tools.find((t) => t.type === "apply_patch");
    const mcpToolMap = new Map(tools.filter((t) => t.type === "hosted_tool" && t.providerData?.type === "mcp").map((t) => t).map((t) => [t.providerData.server_label, t]));
    for (const output of modelResponse.output) {
      if (output.type === "message") {
        if (output.role === "assistant") {
          items.push(new RunMessageOutputItem(output, agent));
        }
      } else if (output.type === "hosted_tool_call") {
        items.push(new RunToolCallItem(output, agent));
        const toolName = output.name;
        toolsUsed.push(toolName);
        if (output.providerData?.type === "mcp_approval_request" || output.name === "mcp_approval_request") {
          const providerData = output.providerData;
          const mcpServerLabel = providerData.server_label;
          const mcpServerTool = mcpToolMap.get(mcpServerLabel);
          if (typeof mcpServerTool === "undefined") {
            const message = `MCP server (${mcpServerLabel}) not found in Agent (${agent.name})`;
            addErrorToCurrentSpan({
              message,
              data: { mcp_server_label: mcpServerLabel }
            });
            throw new ModelBehaviorError(message);
          }
          const approvalItem = new RunToolApprovalItem({
            type: "hosted_tool_call",
            // We must use this name to align with the name sent from the servers
            name: providerData.name,
            id: providerData.id,
            status: "in_progress",
            providerData
          }, agent);
          runMCPApprovalRequests.push({
            requestItem: approvalItem,
            mcpTool: mcpServerTool
          });
          if (!mcpServerTool.providerData.on_approval) {
            items.push(approvalItem);
          }
        }
      } else if (output.type === "reasoning") {
        items.push(new RunReasoningItem(output, agent));
      } else if (output.type === "computer_call") {
        items.push(new RunToolCallItem(output, agent));
        toolsUsed.push("computer_use");
        if (!computerTool2) {
          addErrorToCurrentSpan({
            message: "Model produced computer action without a computer tool.",
            data: {
              agent_name: agent.name
            }
          });
          throw new ModelBehaviorError("Model produced computer action without a computer tool.");
        }
        runComputerActions.push({
          toolCall: output,
          computer: computerTool2
        });
      } else if (output.type === "shell_call") {
        items.push(new RunToolCallItem(output, agent));
        toolsUsed.push("shell");
        if (!shellTool2) {
          addErrorToCurrentSpan({
            message: "Model produced shell action without a shell tool.",
            data: {
              agent_name: agent.name
            }
          });
          throw new ModelBehaviorError("Model produced shell action without a shell tool.");
        }
        runShellActions.push({
          toolCall: output,
          shell: shellTool2
        });
      } else if (output.type === "apply_patch_call") {
        items.push(new RunToolCallItem(output, agent));
        toolsUsed.push("apply_patch");
        if (!applyPatchTool2) {
          addErrorToCurrentSpan({
            message: "Model produced apply_patch action without an apply_patch tool.",
            data: {
              agent_name: agent.name
            }
          });
          throw new ModelBehaviorError("Model produced apply_patch action without an apply_patch tool.");
        }
        runApplyPatchActions.push({
          toolCall: output,
          applyPatch: applyPatchTool2
        });
      }
      if (output.type !== "function_call") {
        continue;
      }
      toolsUsed.push(output.name);
      const handoff2 = handoffMap.get(output.name);
      if (handoff2) {
        items.push(new RunHandoffCallItem(output, agent));
        runHandoffs.push({
          toolCall: output,
          handoff: handoff2
        });
      } else {
        const functionTool = functionMap.get(output.name);
        if (!functionTool) {
          addErrorToCurrentSpan({
            message: `Tool ${output.name} not found in agent ${agent.name}.`,
            data: {
              tool_name: output.name,
              agent_name: agent.name
            }
          });
          throw new ModelBehaviorError(`Tool ${output.name} not found in agent ${agent.name}.`);
        }
        items.push(new RunToolCallItem(output, agent));
        runFunctions.push({
          toolCall: output,
          tool: functionTool
        });
      }
    }
    return {
      newItems: items,
      handoffs: runHandoffs,
      functions: runFunctions,
      computerActions: runComputerActions,
      shellActions: runShellActions,
      applyPatchActions: runApplyPatchActions,
      mcpApprovalRequests: runMCPApprovalRequests,
      toolsUsed,
      hasToolsOrApprovalsToRun() {
        return runHandoffs.length > 0 || runFunctions.length > 0 || runMCPApprovalRequests.length > 0 || runComputerActions.length > 0 || runShellActions.length > 0 || runApplyPatchActions.length > 0;
      }
    };
  }
  var nextStepSchema = external_exports.discriminatedUnion("type", [
    external_exports.object({
      type: external_exports.literal("next_step_handoff"),
      newAgent: external_exports.any()
    }),
    external_exports.object({
      type: external_exports.literal("next_step_final_output"),
      output: external_exports.string()
    }),
    external_exports.object({
      type: external_exports.literal("next_step_run_again")
    }),
    external_exports.object({
      type: external_exports.literal("next_step_interruption"),
      data: external_exports.record(external_exports.string(), external_exports.any())
    })
  ]);
  var SingleStepResult = class {
    constructor(originalInput, modelResponse, preStepItems, newStepItems, nextStep) {
      __publicField(this, "originalInput");
      __publicField(this, "modelResponse");
      __publicField(this, "preStepItems");
      __publicField(this, "newStepItems");
      __publicField(this, "nextStep");
      this.originalInput = originalInput;
      this.modelResponse = modelResponse;
      this.preStepItems = preStepItems;
      this.newStepItems = newStepItems;
      this.nextStep = nextStep;
    }
    /**
     * The items generated during the agent run (i.e. everything generated after originalInput)
     */
    get generatedItems() {
      return this.preStepItems.concat(this.newStepItems);
    }
  };
  function maybeResetToolChoice(agent, toolUseTracker, modelSettings) {
    if (agent.resetToolChoice && toolUseTracker.hasUsedTools(agent)) {
      return { ...modelSettings, toolChoice: void 0 };
    }
    return modelSettings;
  }
  async function resolveInterruptedTurn(agent, originalInput, originalPreStepItems, newResponse, processedResponse, runner, state) {
    const functionCallIds = originalPreStepItems.filter((item) => item instanceof RunToolApprovalItem && "callId" in item.rawItem && item.rawItem.type === "function_call").map((item) => item.rawItem.callId);
    const pendingApprovalItems = state.getInterruptions().filter(isApprovalItemLike);
    if (pendingApprovalItems.length > 0) {
      const pendingApprovalIdentities = /* @__PURE__ */ new Set();
      for (const approval of pendingApprovalItems) {
        const identity = getApprovalIdentity(approval);
        if (identity) {
          pendingApprovalIdentities.add(identity);
        }
      }
      if (pendingApprovalIdentities.size > 0) {
        let rewindCount = 0;
        for (let index = originalPreStepItems.length - 1; index >= 0; index--) {
          const item = originalPreStepItems[index];
          if (!(item instanceof RunToolApprovalItem)) {
            continue;
          }
          const identity = getApprovalIdentity(item);
          if (!identity) {
            continue;
          }
          if (!pendingApprovalIdentities.has(identity)) {
            continue;
          }
          rewindCount++;
          pendingApprovalIdentities.delete(identity);
          if (pendingApprovalIdentities.size === 0) {
            break;
          }
        }
        if (rewindCount > 0) {
          state._currentTurnPersistedItemCount = Math.max(0, state._currentTurnPersistedItemCount - rewindCount);
        }
      }
    }
    const functionToolRuns = processedResponse.functions.filter((run2) => {
      return functionCallIds.includes(run2.toolCall.callId);
    });
    const functionResults = await executeFunctionToolCalls(agent, functionToolRuns, runner, state);
    const computerResults = processedResponse.computerActions.length > 0 ? await executeComputerActions(agent, processedResponse.computerActions, runner, state._context) : [];
    const originalPreStepItemSet = new Set(originalPreStepItems);
    const newItems = [];
    const newItemsSet = /* @__PURE__ */ new Set();
    const appendIfNew = (item) => {
      if (originalPreStepItemSet.has(item) || newItemsSet.has(item)) {
        return;
      }
      newItems.push(item);
      newItemsSet.add(item);
    };
    for (const result of functionResults) {
      appendIfNew(result.runItem);
    }
    for (const result of computerResults) {
      appendIfNew(result);
    }
    const mcpApprovalRuns = processedResponse.mcpApprovalRequests.filter((run2) => {
      return run2.requestItem.type === "tool_approval_item" && run2.requestItem.rawItem.type === "hosted_tool_call" && run2.requestItem.rawItem.providerData?.type === "mcp_approval_request";
    });
    const pendingHostedMCPApprovals = /* @__PURE__ */ new Set();
    const pendingHostedMCPApprovalIds = /* @__PURE__ */ new Set();
    for (const run2 of mcpApprovalRuns) {
      const rawItem = run2.requestItem.rawItem;
      if (rawItem.type !== "hosted_tool_call") {
        continue;
      }
      const approvalRequestId = rawItem.id;
      const approved = state._context.isToolApproved({
        // Since this item name must be the same with the one sent from Responses API server
        toolName: rawItem.name,
        callId: approvalRequestId
      });
      if (typeof approved !== "undefined") {
        const providerData = {
          approve: approved,
          approval_request_id: approvalRequestId,
          reason: void 0
        };
        const responseItem = new RunToolCallItem({
          type: "hosted_tool_call",
          name: "mcp_approval_response",
          providerData
        }, agent);
        appendIfNew(responseItem);
      } else {
        pendingHostedMCPApprovals.add(run2.requestItem);
        pendingHostedMCPApprovalIds.add(approvalRequestId);
        functionResults.push({
          type: "hosted_mcp_tool_approval",
          tool: run2.mcpTool,
          runItem: run2.requestItem
        });
        appendIfNew(run2.requestItem);
      }
    }
    const preStepItems = originalPreStepItems.filter((item) => {
      if (!(item instanceof RunToolApprovalItem)) {
        return true;
      }
      if (item.rawItem.type === "hosted_tool_call" && item.rawItem.providerData?.type === "mcp_approval_request") {
        if (pendingHostedMCPApprovals.has(item)) {
          return true;
        }
        const approvalRequestId = item.rawItem.id;
        if (approvalRequestId) {
          return pendingHostedMCPApprovalIds.has(approvalRequestId);
        }
        return false;
      }
      return false;
    });
    const completedStep = await maybeCompleteTurnFromToolResults({
      agent,
      runner,
      state,
      functionResults,
      originalInput,
      newResponse,
      preStepItems,
      newItems
    });
    if (completedStep) {
      return completedStep;
    }
    return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, { type: "next_step_run_again" });
  }
  async function resolveTurnAfterModelResponse(agent, originalInput, originalPreStepItems, newResponse, processedResponse, runner, state) {
    const preStepItems = originalPreStepItems;
    const seenItems = new Set(originalPreStepItems);
    const newItems = [];
    const appendIfNew = (item) => {
      if (seenItems.has(item)) {
        return;
      }
      newItems.push(item);
      seenItems.add(item);
    };
    for (const item of processedResponse.newItems) {
      appendIfNew(item);
    }
    const [functionResults, computerResults, shellResults, applyPatchResults] = await Promise.all([
      executeFunctionToolCalls(agent, processedResponse.functions, runner, state),
      executeComputerActions(agent, processedResponse.computerActions, runner, state._context),
      executeShellActions(agent, processedResponse.shellActions, runner, state._context),
      executeApplyPatchOperations(agent, processedResponse.applyPatchActions, runner, state._context)
    ]);
    for (const result of functionResults) {
      appendIfNew(result.runItem);
    }
    for (const item of computerResults) {
      appendIfNew(item);
    }
    for (const item of shellResults) {
      appendIfNew(item);
    }
    for (const item of applyPatchResults) {
      appendIfNew(item);
    }
    if (processedResponse.mcpApprovalRequests.length > 0) {
      for (const approvalRequest of processedResponse.mcpApprovalRequests) {
        const toolData = approvalRequest.mcpTool.providerData;
        const requestData = approvalRequest.requestItem.rawItem.providerData;
        if (toolData.on_approval) {
          const approvalResult = await toolData.on_approval(state._context, approvalRequest.requestItem);
          const approvalResponseData = {
            approve: approvalResult.approve,
            approval_request_id: requestData.id,
            reason: approvalResult.reason
          };
          newItems.push(new RunToolCallItem({
            type: "hosted_tool_call",
            name: "mcp_approval_response",
            providerData: approvalResponseData
          }, agent));
        } else {
          newItems.push(approvalRequest.requestItem);
          const approvalItem = {
            type: "hosted_mcp_tool_approval",
            tool: approvalRequest.mcpTool,
            runItem: new RunToolApprovalItem({
              type: "hosted_tool_call",
              name: requestData.name,
              id: requestData.id,
              arguments: requestData.arguments,
              status: "in_progress",
              providerData: requestData
            }, agent)
          };
          functionResults.push(approvalItem);
        }
      }
    }
    if (processedResponse.handoffs.length > 0) {
      return await executeHandoffCalls(agent, originalInput, preStepItems, newItems, newResponse, processedResponse.handoffs, runner, state._context);
    }
    const completedStep = await maybeCompleteTurnFromToolResults({
      agent,
      runner,
      state,
      functionResults,
      originalInput,
      newResponse,
      preStepItems,
      newItems
    });
    if (completedStep) {
      return completedStep;
    }
    const hadToolCallsOrActions = (processedResponse.functions?.length ?? 0) > 0 || (processedResponse.computerActions?.length ?? 0) > 0 || (processedResponse.shellActions?.length ?? 0) > 0 || (processedResponse.applyPatchActions?.length ?? 0) > 0 || (processedResponse.mcpApprovalRequests?.length ?? 0) > 0 || (processedResponse.handoffs?.length ?? 0) > 0;
    if (hadToolCallsOrActions) {
      return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, { type: "next_step_run_again" });
    }
    const messageItems = newItems.filter((item) => item instanceof RunMessageOutputItem);
    const potentialFinalOutput = messageItems.length > 0 ? getLastTextFromOutputMessage(messageItems[messageItems.length - 1].rawItem) : void 0;
    if (typeof potentialFinalOutput === "undefined") {
      return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, { type: "next_step_run_again" });
    }
    const hasPendingToolsOrApprovals = functionResults.some((result) => result.runItem instanceof RunToolApprovalItem);
    if (!hasPendingToolsOrApprovals) {
      if (agent.outputType === "text") {
        return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
          type: "next_step_final_output",
          output: potentialFinalOutput
        });
      }
      if (agent.outputType !== "text" && potentialFinalOutput) {
        const { parser } = getSchemaAndParserFromInputType(agent.outputType, "final_output");
        const [error2] = await safeExecute(() => parser(potentialFinalOutput));
        if (error2) {
          const outputErrorMessage = formatFinalOutputTypeError(error2);
          addErrorToCurrentSpan({
            message: outputErrorMessage,
            data: {
              error: String(error2)
            }
          });
          throw new ModelBehaviorError(outputErrorMessage);
        }
        return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, { type: "next_step_final_output", output: potentialFinalOutput });
      }
    }
    return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, { type: "next_step_run_again" });
  }
  async function maybeCompleteTurnFromToolResults({ agent, runner, state, functionResults, originalInput, newResponse, preStepItems, newItems }) {
    const toolOutcome = await checkForFinalOutputFromTools(agent, functionResults, state);
    if (toolOutcome.isFinalOutput) {
      runner.emit("agent_end", state._context, agent, toolOutcome.finalOutput);
      agent.emit("agent_end", state._context, toolOutcome.finalOutput);
      return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
        type: "next_step_final_output",
        output: toolOutcome.finalOutput
      });
    }
    if (toolOutcome.isInterrupted) {
      return new SingleStepResult(originalInput, newResponse, preStepItems, newItems, {
        type: "next_step_interruption",
        data: {
          interruptions: toolOutcome.interruptions
        }
      });
    }
    return null;
  }
  function getToolCallOutputItem(toolCall, output) {
    const maybeStructuredOutputs = normalizeStructuredToolOutputs(output);
    if (maybeStructuredOutputs) {
      const structuredItems = maybeStructuredOutputs.map(convertStructuredToolOutputToInputItem);
      return {
        type: "function_call_result",
        name: toolCall.name,
        callId: toolCall.callId,
        status: "completed",
        output: structuredItems
      };
    }
    return {
      type: "function_call_result",
      name: toolCall.name,
      callId: toolCall.callId,
      status: "completed",
      output: {
        type: "text",
        text: toSmartString(output)
      }
    };
  }
  function normalizeFileValue(value) {
    const directFile = value.file;
    if (typeof directFile === "string" && directFile.length > 0) {
      return directFile;
    }
    const normalizedObject = normalizeFileObjectCandidate(directFile);
    if (normalizedObject) {
      return normalizedObject;
    }
    const legacyValue = normalizeLegacyFileValue(value);
    if (legacyValue) {
      return legacyValue;
    }
    return null;
  }
  function normalizeFileObjectCandidate(value) {
    if (!isRecord(value)) {
      return null;
    }
    if ("data" in value && value.data !== void 0) {
      const dataValue = value.data;
      const hasStringData = typeof dataValue === "string" && dataValue.length > 0;
      const hasBinaryData = dataValue instanceof Uint8Array && dataValue.length > 0;
      if (!hasStringData && !hasBinaryData) {
        return null;
      }
      if (!isNonEmptyString(value.mediaType) || !isNonEmptyString(value.filename)) {
        return null;
      }
      return {
        data: typeof dataValue === "string" ? dataValue : new Uint8Array(dataValue),
        mediaType: value.mediaType,
        filename: value.filename
      };
    }
    if (isNonEmptyString(value.url)) {
      const result = { url: value.url };
      if (isNonEmptyString(value.filename)) {
        result.filename = value.filename;
      }
      return result;
    }
    const referencedId = isNonEmptyString(value.id) && value.id || isNonEmptyString(value.fileId) && value.fileId;
    if (referencedId) {
      const result = { id: referencedId };
      if (isNonEmptyString(value.filename)) {
        result.filename = value.filename;
      }
      return result;
    }
    return null;
  }
  function normalizeLegacyFileValue(value) {
    const filename = typeof value.filename === "string" && value.filename.length > 0 ? value.filename : void 0;
    const mediaType = typeof value.mediaType === "string" && value.mediaType.length > 0 ? value.mediaType : void 0;
    if (typeof value.fileData === "string" && value.fileData.length > 0) {
      if (!mediaType || !filename) {
        return null;
      }
      return { data: value.fileData, mediaType, filename };
    }
    if (value.fileData instanceof Uint8Array && value.fileData.length > 0) {
      if (!mediaType || !filename) {
        return null;
      }
      return { data: new Uint8Array(value.fileData), mediaType, filename };
    }
    if (typeof value.fileUrl === "string" && value.fileUrl.length > 0) {
      const result = { url: value.fileUrl };
      if (filename) {
        result.filename = filename;
      }
      return result;
    }
    if (typeof value.fileId === "string" && value.fileId.length > 0) {
      const result = { id: value.fileId };
      if (filename) {
        result.filename = filename;
      }
      return result;
    }
    return null;
  }
  function isRecord(value) {
    return typeof value === "object" && value !== null;
  }
  function isNonEmptyString(value) {
    return typeof value === "string" && value.length > 0;
  }
  function toInlineImageString(data, mediaType) {
    if (typeof data === "string") {
      if (mediaType && !data.startsWith("data:")) {
        return asDataUrl(data, mediaType);
      }
      return data;
    }
    const base64 = encodeUint8ArrayToBase64(data);
    return asDataUrl(base64, mediaType);
  }
  function asDataUrl(base64, mediaType) {
    return mediaType ? `data:${mediaType};base64,${base64}` : base64;
  }
  async function executeFunctionToolCalls(agent, toolRuns, runner, state) {
    async function runSingleTool(toolRun) {
      let parsedArgs = toolRun.toolCall.arguments;
      if (toolRun.tool.parameters) {
        if (isZodObject(toolRun.tool.parameters)) {
          parsedArgs = toolRun.tool.parameters.parse(parsedArgs);
        } else {
          parsedArgs = JSON.parse(parsedArgs);
        }
      }
      const needsApproval = await toolRun.tool.needsApproval(state._context, parsedArgs, toolRun.toolCall.callId);
      if (needsApproval) {
        const approval = state._context.isToolApproved({
          toolName: toolRun.tool.name,
          callId: toolRun.toolCall.callId
        });
        if (approval === false) {
          return withFunctionSpan(async (span) => {
            const response = "Tool execution was not approved.";
            span.setError({
              message: response,
              data: {
                tool_name: toolRun.tool.name,
                error: `Tool execution for ${toolRun.toolCall.callId} was manually rejected by user.`
              }
            });
            span.spanData.output = response;
            return {
              type: "function_output",
              tool: toolRun.tool,
              output: response,
              runItem: new RunToolCallOutputItem(getToolCallOutputItem(toolRun.toolCall, response), agent, response)
            };
          }, {
            data: {
              name: toolRun.tool.name
            }
          });
        }
        if (approval !== true) {
          return {
            type: "function_approval",
            tool: toolRun.tool,
            runItem: new RunToolApprovalItem(toolRun.toolCall, agent)
          };
        }
      }
      return withFunctionSpan(async (span) => {
        if (runner.config.traceIncludeSensitiveData) {
          span.spanData.input = toolRun.toolCall.arguments;
        }
        try {
          runner.emit("agent_tool_start", state._context, agent, toolRun.tool, {
            toolCall: toolRun.toolCall
          });
          agent.emit("agent_tool_start", state._context, toolRun.tool, {
            toolCall: toolRun.toolCall
          });
          const toolOutput = await toolRun.tool.invoke(state._context, toolRun.toolCall.arguments, { toolCall: toolRun.toolCall });
          const stringResult = toSmartString(toolOutput);
          runner.emit("agent_tool_end", state._context, agent, toolRun.tool, stringResult, { toolCall: toolRun.toolCall });
          agent.emit("agent_tool_end", state._context, toolRun.tool, stringResult, { toolCall: toolRun.toolCall });
          if (runner.config.traceIncludeSensitiveData) {
            span.spanData.output = stringResult;
          }
          const functionResult = {
            type: "function_output",
            tool: toolRun.tool,
            output: toolOutput,
            runItem: new RunToolCallOutputItem(getToolCallOutputItem(toolRun.toolCall, toolOutput), agent, toolOutput)
          };
          const nestedRunResult = consumeAgentToolRunResult(toolRun.toolCall);
          if (nestedRunResult) {
            functionResult.agentRunResult = nestedRunResult;
            const nestedInterruptions = nestedRunResult.interruptions;
            if (nestedInterruptions.length > 0) {
              functionResult.interruptions = nestedInterruptions;
            }
          }
          return functionResult;
        } catch (error2) {
          span.setError({
            message: "Error running tool",
            data: {
              tool_name: toolRun.tool.name,
              error: String(error2)
            }
          });
          throw error2;
        }
      }, {
        data: {
          name: toolRun.tool.name
        }
      });
    }
    try {
      const results = await Promise.all(toolRuns.map(runSingleTool));
      return results;
    } catch (e) {
      throw new ToolCallError(`Failed to run function tools: ${e}`, e, state);
    }
  }
  async function _runComputerActionAndScreenshot(computer, toolCall) {
    const action = toolCall.action;
    let screenshot;
    switch (action.type) {
      case "click":
        await computer.click(action.x, action.y, action.button);
        break;
      case "double_click":
        await computer.doubleClick(action.x, action.y);
        break;
      case "drag":
        await computer.drag(action.path.map((p) => [p.x, p.y]));
        break;
      case "keypress":
        await computer.keypress(action.keys);
        break;
      case "move":
        await computer.move(action.x, action.y);
        break;
      case "screenshot":
        screenshot = await computer.screenshot();
        break;
      case "scroll":
        await computer.scroll(action.x, action.y, action.scroll_x, action.scroll_y);
        break;
      case "type":
        await computer.type(action.text);
        break;
      case "wait":
        await computer.wait();
        break;
      default:
        action;
        break;
    }
    if (typeof screenshot !== "undefined") {
      return screenshot;
    }
    if (typeof computer.screenshot === "function") {
      screenshot = await computer.screenshot();
      if (typeof screenshot !== "undefined") {
        return screenshot;
      }
    }
    throw new Error("Computer does not implement screenshot()");
  }
  function toErrorMessage(error2) {
    if (error2 instanceof Error) {
      return error2.message || error2.toString();
    }
    try {
      return JSON.stringify(error2);
    } catch {
      return String(error2);
    }
  }
  async function executeShellActions(agent, actions, runner, runContext, customLogger = void 0) {
    const _logger = customLogger ?? logger_default;
    const results = [];
    for (const action of actions) {
      const shellTool2 = action.shell;
      const toolCall = action.toolCall;
      const approvalItem = new RunToolApprovalItem(toolCall, agent, shellTool2.name);
      const requiresApproval = await shellTool2.needsApproval(runContext, toolCall.action, toolCall.callId);
      if (requiresApproval) {
        if (shellTool2.onApproval) {
          const decision = await shellTool2.onApproval(runContext, approvalItem);
          if (decision.approve === true) {
            runContext.approveTool(approvalItem);
          } else if (decision.approve === false) {
            runContext.rejectTool(approvalItem);
          }
        }
        const approval = runContext.isToolApproved({
          toolName: shellTool2.name,
          callId: toolCall.callId
        });
        if (approval === false) {
          const response = "Tool execution was not approved.";
          const rejectionOutput = {
            stdout: "",
            stderr: response,
            outcome: { type: "exit", exitCode: null }
          };
          results.push(new RunToolCallOutputItem({
            type: "shell_call_output",
            callId: toolCall.callId,
            output: [rejectionOutput]
          }, agent, response));
          continue;
        }
        if (approval !== true) {
          results.push(approvalItem);
          continue;
        }
      }
      runner.emit("agent_tool_start", runContext, agent, shellTool2, {
        toolCall
      });
      if (typeof agent.emit === "function") {
        agent.emit("agent_tool_start", runContext, shellTool2, { toolCall });
      }
      let shellOutputs;
      const providerMeta = {};
      let maxOutputLength;
      try {
        const shellResult = await shellTool2.shell.run(toolCall.action);
        shellOutputs = shellResult.output ?? [];
        if (shellResult.providerData) {
          Object.assign(providerMeta, shellResult.providerData);
        }
        if (typeof shellResult.maxOutputLength === "number") {
          maxOutputLength = shellResult.maxOutputLength;
        }
      } catch (err) {
        const errorText = toErrorMessage(err);
        shellOutputs = [
          {
            stdout: "",
            stderr: errorText,
            outcome: { type: "exit", exitCode: null }
          }
        ];
        _logger.error("Failed to execute shell action:", err);
      }
      shellOutputs = shellOutputs ?? [];
      runner.emit("agent_tool_end", runContext, agent, shellTool2, JSON.stringify(shellOutputs), {
        toolCall
      });
      if (typeof agent.emit === "function") {
        agent.emit("agent_tool_end", runContext, shellTool2, JSON.stringify(shellOutputs), {
          toolCall
        });
      }
      const rawItem = {
        type: "shell_call_output",
        callId: toolCall.callId,
        output: shellOutputs ?? []
      };
      if (typeof maxOutputLength === "number") {
        rawItem.maxOutputLength = maxOutputLength;
      }
      if (Object.keys(providerMeta).length > 0) {
        rawItem.providerData = providerMeta;
      }
      results.push(new RunToolCallOutputItem(rawItem, agent, rawItem.output));
    }
    return results;
  }
  async function executeApplyPatchOperations(agent, actions, runner, runContext, customLogger = void 0) {
    const _logger = customLogger ?? logger_default;
    const results = [];
    for (const action of actions) {
      const applyPatchTool2 = action.applyPatch;
      const toolCall = action.toolCall;
      const approvalItem = new RunToolApprovalItem(toolCall, agent, applyPatchTool2.name);
      const requiresApproval = await applyPatchTool2.needsApproval(runContext, toolCall.operation, toolCall.callId);
      if (requiresApproval) {
        if (applyPatchTool2.onApproval) {
          const decision = await applyPatchTool2.onApproval(runContext, approvalItem);
          if (decision.approve === true) {
            runContext.approveTool(approvalItem);
          } else if (decision.approve === false) {
            runContext.rejectTool(approvalItem);
          }
        }
        const approval = runContext.isToolApproved({
          toolName: applyPatchTool2.name,
          callId: toolCall.callId
        });
        if (approval === false) {
          const response = "Tool execution was not approved.";
          results.push(new RunToolCallOutputItem({
            type: "apply_patch_call_output",
            callId: toolCall.callId,
            status: "failed",
            output: response
          }, agent, response));
          continue;
        }
        if (approval !== true) {
          results.push(approvalItem);
          continue;
        }
      }
      runner.emit("agent_tool_start", runContext, agent, applyPatchTool2, {
        toolCall
      });
      if (typeof agent.emit === "function") {
        agent.emit("agent_tool_start", runContext, applyPatchTool2, {
          toolCall
        });
      }
      let status = "completed";
      let output = "";
      try {
        let result;
        switch (toolCall.operation.type) {
          case "create_file":
            result = await applyPatchTool2.editor.createFile(toolCall.operation);
            break;
          case "update_file":
            result = await applyPatchTool2.editor.updateFile(toolCall.operation);
            break;
          case "delete_file":
            result = await applyPatchTool2.editor.deleteFile(toolCall.operation);
            break;
          default:
            throw new Error("Unsupported apply_patch operation");
        }
        if (result && typeof result.status === "string") {
          status = result.status;
        }
        if (result && typeof result.output === "string") {
          output = result.output;
        }
      } catch (err) {
        status = "failed";
        output = toErrorMessage(err);
        _logger.error("Failed to execute apply_patch operation:", err);
      }
      runner.emit("agent_tool_end", runContext, agent, applyPatchTool2, output, {
        toolCall
      });
      if (typeof agent.emit === "function") {
        agent.emit("agent_tool_end", runContext, applyPatchTool2, output, {
          toolCall
        });
      }
      const rawItem = {
        type: "apply_patch_call_output",
        callId: toolCall.callId,
        status
      };
      if (output) {
        rawItem.output = output;
      }
      results.push(new RunToolCallOutputItem(rawItem, agent, output));
    }
    return results;
  }
  async function executeComputerActions(agent, actions, runner, runContext, customLogger = void 0) {
    const _logger = customLogger ?? logger_default;
    const results = [];
    for (const action of actions) {
      const computer = action.computer.computer;
      const toolCall = action.toolCall;
      runner.emit("agent_tool_start", runContext, agent, action.computer, {
        toolCall
      });
      if (typeof agent.emit === "function") {
        agent.emit("agent_tool_start", runContext, action.computer, { toolCall });
      }
      let output;
      try {
        output = await _runComputerActionAndScreenshot(computer, toolCall);
      } catch (err) {
        _logger.error("Failed to execute computer action:", err);
        output = "";
      }
      runner.emit("agent_tool_end", runContext, agent, action.computer, output, {
        toolCall
      });
      if (typeof agent.emit === "function") {
        agent.emit("agent_tool_end", runContext, action.computer, output, {
          toolCall
        });
      }
      const imageUrl = output ? `data:image/png;base64,${output}` : "";
      const rawItem = {
        type: "computer_call_result",
        callId: toolCall.callId,
        output: { type: "computer_screenshot", data: imageUrl }
      };
      results.push(new RunToolCallOutputItem(rawItem, agent, imageUrl));
    }
    return results;
  }
  async function executeHandoffCalls(agent, originalInput, preStepItems, newStepItems, newResponse, runHandoffs, runner, runContext) {
    newStepItems = [...newStepItems];
    if (runHandoffs.length === 0) {
      logger_default.warn("Incorrectly called executeHandoffCalls with no handoffs. This should not happen. Moving on.");
      return new SingleStepResult(originalInput, newResponse, preStepItems, newStepItems, { type: "next_step_run_again" });
    }
    if (runHandoffs.length > 1) {
      const outputMessage = "Multiple handoffs detected, ignoring this one.";
      for (let i = 1; i < runHandoffs.length; i++) {
        newStepItems.push(new RunToolCallOutputItem(getToolCallOutputItem(runHandoffs[i].toolCall, outputMessage), agent, outputMessage));
      }
    }
    const actualHandoff = runHandoffs[0];
    return withHandoffSpan(async (handoffSpan) => {
      const handoff2 = actualHandoff.handoff;
      const newAgent = await handoff2.onInvokeHandoff(runContext, actualHandoff.toolCall.arguments);
      handoffSpan.spanData.to_agent = newAgent.name;
      if (runHandoffs.length > 1) {
        const requestedAgents = runHandoffs.map((h) => h.handoff.agentName);
        handoffSpan.setError({
          message: "Multiple handoffs requested",
          data: {
            requested_agents: requestedAgents
          }
        });
      }
      newStepItems.push(new RunHandoffOutputItem(getToolCallOutputItem(actualHandoff.toolCall, getTransferMessage(newAgent)), agent, newAgent));
      runner.emit("agent_handoff", runContext, agent, newAgent);
      agent.emit("agent_handoff", runContext, newAgent);
      const inputFilter = handoff2.inputFilter ?? runner.config.handoffInputFilter;
      if (inputFilter) {
        logger_default.debug("Filtering inputs for handoff");
        if (typeof inputFilter !== "function") {
          handoffSpan.setError({
            message: "Invalid input filter",
            data: {
              details: "not callable"
            }
          });
        }
        const handoffInputData = {
          inputHistory: Array.isArray(originalInput) ? [...originalInput] : originalInput,
          preHandoffItems: [...preStepItems],
          newItems: [...newStepItems],
          runContext
        };
        const filtered = inputFilter(handoffInputData);
        originalInput = filtered.inputHistory;
        preStepItems = filtered.preHandoffItems;
        newStepItems = filtered.newItems;
      }
      return new SingleStepResult(originalInput, newResponse, preStepItems, newStepItems, { type: "next_step_handoff", newAgent });
    }, {
      data: {
        from_agent: agent.name
      }
    });
  }
  var NOT_FINAL_OUTPUT = {
    isFinalOutput: false,
    isInterrupted: void 0
  };
  async function checkForFinalOutputFromTools(agent, toolResults, state) {
    if (toolResults.length === 0) {
      return NOT_FINAL_OUTPUT;
    }
    const interruptions = [];
    for (const result of toolResults) {
      if (result.runItem instanceof RunToolApprovalItem) {
        interruptions.push(result.runItem);
      }
      if (result.type === "function_output") {
        if (Array.isArray(result.interruptions)) {
          interruptions.push(...result.interruptions);
        } else if (result.agentRunResult) {
          const nestedInterruptions = result.agentRunResult.interruptions;
          if (nestedInterruptions.length > 0) {
            interruptions.push(...nestedInterruptions);
          }
        }
      }
    }
    if (interruptions.length > 0) {
      return {
        isFinalOutput: false,
        isInterrupted: true,
        interruptions
      };
    }
    if (agent.toolUseBehavior === "run_llm_again") {
      return NOT_FINAL_OUTPUT;
    }
    const firstToolResult = toolResults[0];
    if (agent.toolUseBehavior === "stop_on_first_tool") {
      if (firstToolResult?.type === "function_output") {
        const stringOutput = toSmartString(firstToolResult.output);
        return {
          isFinalOutput: true,
          isInterrupted: void 0,
          finalOutput: stringOutput
        };
      }
      return NOT_FINAL_OUTPUT;
    }
    const toolUseBehavior = agent.toolUseBehavior;
    if (typeof toolUseBehavior === "object") {
      const stoppingTool = toolResults.find((r) => toolUseBehavior.stopAtToolNames.includes(r.tool.name));
      if (stoppingTool?.type === "function_output") {
        const stringOutput = toSmartString(stoppingTool.output);
        return {
          isFinalOutput: true,
          isInterrupted: void 0,
          finalOutput: stringOutput
        };
      }
      return NOT_FINAL_OUTPUT;
    }
    if (typeof toolUseBehavior === "function") {
      return toolUseBehavior(state._context, toolResults);
    }
    throw new UserError(`Invalid toolUseBehavior: ${toolUseBehavior}`, state);
  }
  function getRunItemStreamEventName(item) {
    if (item instanceof RunMessageOutputItem) {
      return "message_output_created";
    }
    if (item instanceof RunHandoffCallItem) {
      return "handoff_requested";
    }
    if (item instanceof RunHandoffOutputItem) {
      return "handoff_occurred";
    }
    if (item instanceof RunToolCallItem) {
      return "tool_called";
    }
    if (item instanceof RunToolCallOutputItem) {
      return "tool_output";
    }
    if (item instanceof RunReasoningItem) {
      return "reasoning_item_created";
    }
    if (item instanceof RunToolApprovalItem) {
      return "tool_approval_requested";
    }
    return void 0;
  }
  function enqueueRunItemStreamEvent(result, item) {
    const itemName = getRunItemStreamEventName(item);
    if (!itemName) {
      logger_default.warn("Unknown item type: ", item);
      return;
    }
    result._addItem(new RunItemStreamEvent(itemName, item));
  }
  function streamStepItemsToRunResult(result, items) {
    for (const item of items) {
      enqueueRunItemStreamEvent(result, item);
    }
  }
  function addStepToRunResult(result, step, options) {
    const skippedItems = options?.skipItems;
    for (const item of step.newStepItems) {
      if (skippedItems?.has(item)) {
        continue;
      }
      enqueueRunItemStreamEvent(result, item);
    }
  }
  var _agentToTools;
  var AgentToolUseTracker = class {
    constructor() {
      __privateAdd(this, _agentToTools, /* @__PURE__ */ new Map());
    }
    addToolUse(agent, toolNames) {
      __privateGet(this, _agentToTools).set(agent, toolNames);
    }
    hasUsedTools(agent) {
      return __privateGet(this, _agentToTools).has(agent);
    }
    toJSON() {
      return Object.fromEntries(Array.from(__privateGet(this, _agentToTools).entries()).map(([agent, toolNames]) => {
        return [agent.name, toolNames];
      }));
    }
  };
  _agentToTools = new WeakMap();
  function toInputItemList(input) {
    if (typeof input === "string") {
      return [
        {
          type: "message",
          role: "user",
          content: input
        }
      ];
    }
    return [...input];
  }
  function extractOutputItemsFromRunItems(items) {
    return items.filter((item) => item.type !== "tool_approval_item").map((item) => item.rawItem);
  }
  function normalizeItemsForSessionPersistence(items) {
    return items.map((item) => sanitizeValueForSession(stripTransientCallIds(item)));
  }
  function sanitizeValueForSession(value, context = {}) {
    if (value === null || value === void 0) {
      return value;
    }
    const binary = toUint8ArrayIfBinary(value);
    if (binary) {
      return toDataUrlFromBytes(binary, context.mediaType);
    }
    if (Array.isArray(value)) {
      return value.map((entry) => sanitizeValueForSession(entry, context));
    }
    if (!isPlainObject(value)) {
      return value;
    }
    const record = value;
    const result = {};
    const mediaType = typeof record.mediaType === "string" && record.mediaType.length > 0 ? record.mediaType : context.mediaType;
    for (const [key, entry] of Object.entries(record)) {
      const nextContext = key === "data" || key === "fileData" ? { mediaType } : context;
      result[key] = sanitizeValueForSession(entry, nextContext);
    }
    return result;
  }
  function toUint8ArrayIfBinary(value) {
    if (value instanceof ArrayBuffer) {
      return new Uint8Array(value);
    }
    if (isArrayBufferView(value)) {
      const view = value;
      return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    if (isNodeBuffer(value)) {
      const view = value;
      return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    if (isSerializedBufferSnapshot(value)) {
      const snapshot = value;
      return Uint8Array.from(snapshot.data);
    }
    return void 0;
  }
  function toDataUrlFromBytes(bytes, mediaType) {
    const base64 = encodeUint8ArrayToBase64(bytes);
    const type = mediaType && !mediaType.startsWith("data:") ? mediaType : "text/plain";
    return `data:${type};base64,${base64}`;
  }
  function isPlainObject(value) {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
  }
  function stripTransientCallIds(value) {
    if (value === null || value === void 0) {
      return value;
    }
    if (Array.isArray(value)) {
      return value.map((entry) => stripTransientCallIds(entry));
    }
    if (!isPlainObject(value)) {
      return value;
    }
    const record = value;
    const result = {};
    const isProtocolItem = typeof record.type === "string" && record.type.length > 0;
    const shouldStripId = isProtocolItem && shouldStripIdForType(record.type);
    for (const [key, entry] of Object.entries(record)) {
      if (shouldStripId && key === "id") {
        continue;
      }
      result[key] = stripTransientCallIds(entry);
    }
    return result;
  }
  function shouldStripIdForType(type) {
    switch (type) {
      case "function_call":
      case "function_call_result":
        return true;
      default:
        return false;
    }
  }
  async function saveToSession(session, sessionInputItems, result) {
    if (!session) {
      return;
    }
    const inputItems = sessionInputItems ?? [];
    const state = result.state;
    const alreadyPersisted = state._currentTurnPersistedItemCount ?? 0;
    const newRunItems = result.newItems.slice(alreadyPersisted);
    if (process.env.OPENAI_AGENTS__DEBUG_SAVE_SESSION) {
      console.debug("saveToSession:newRunItems", newRunItems.map((item) => item.type));
    }
    const outputItems = extractOutputItemsFromRunItems(newRunItems);
    const itemsToSave = [...inputItems, ...outputItems];
    if (itemsToSave.length === 0) {
      state._currentTurnPersistedItemCount = alreadyPersisted + newRunItems.length;
      return;
    }
    const sanitizedItems = normalizeItemsForSessionPersistence(itemsToSave);
    await session.addItems(sanitizedItems);
    state._currentTurnPersistedItemCount = alreadyPersisted + newRunItems.length;
  }
  async function saveStreamInputToSession(session, sessionInputItems) {
    if (!session) {
      return;
    }
    if (!sessionInputItems || sessionInputItems.length === 0) {
      return;
    }
    const sanitizedInput = normalizeItemsForSessionPersistence(sessionInputItems);
    await session.addItems(sanitizedInput);
  }
  async function saveStreamResultToSession(session, result) {
    if (!session) {
      return;
    }
    const state = result.state;
    const alreadyPersisted = state._currentTurnPersistedItemCount ?? 0;
    const newRunItems = result.newItems.slice(alreadyPersisted);
    const itemsToSave = extractOutputItemsFromRunItems(newRunItems);
    if (itemsToSave.length === 0) {
      state._currentTurnPersistedItemCount = alreadyPersisted + newRunItems.length;
      return;
    }
    const sanitizedItems = normalizeItemsForSessionPersistence(itemsToSave);
    await session.addItems(sanitizedItems);
    state._currentTurnPersistedItemCount = alreadyPersisted + newRunItems.length;
  }
  async function prepareInputItemsWithSession(input, session, sessionInputCallback, options) {
    if (!session) {
      return {
        preparedInput: input,
        sessionItems: void 0
      };
    }
    const includeHistoryInPreparedInput = options?.includeHistoryInPreparedInput ?? true;
    const preserveDroppedNewItems = options?.preserveDroppedNewItems ?? false;
    const history = await session.getItems();
    const newInputItems = Array.isArray(input) ? [...input] : toInputItemList(input);
    if (!sessionInputCallback) {
      return {
        preparedInput: includeHistoryInPreparedInput ? [...history, ...newInputItems] : newInputItems,
        sessionItems: newInputItems
      };
    }
    const historySnapshot = history.slice();
    const newInputSnapshot = newInputItems.slice();
    const combined = await sessionInputCallback(history, newInputItems);
    if (!Array.isArray(combined)) {
      throw new UserError("Session input callback must return an array of AgentInputItem objects.");
    }
    const historyCounts = buildItemFrequencyMap(historySnapshot);
    const newInputCounts = buildItemFrequencyMap(newInputSnapshot);
    const historyRefs = buildItemReferenceMap(historySnapshot);
    const newInputRefs = buildItemReferenceMap(newInputSnapshot);
    const appended = [];
    for (const item of combined) {
      const key = sessionItemKey(item);
      if (consumeReference(newInputRefs, key, item)) {
        decrementCount(newInputCounts, key);
        appended.push(item);
        continue;
      }
      if (consumeReference(historyRefs, key, item)) {
        decrementCount(historyCounts, key);
        continue;
      }
      const historyRemaining = historyCounts.get(key) ?? 0;
      if (historyRemaining > 0) {
        historyCounts.set(key, historyRemaining - 1);
        continue;
      }
      const newRemaining = newInputCounts.get(key) ?? 0;
      if (newRemaining > 0) {
        newInputCounts.set(key, newRemaining - 1);
        appended.push(item);
        continue;
      }
      appended.push(item);
    }
    const preparedItems = includeHistoryInPreparedInput ? combined : appended.length > 0 ? appended : preserveDroppedNewItems ? newInputSnapshot : [];
    return {
      preparedInput: preparedItems,
      // Respect callbacks that intentionally drop the latest inputs (e.g. to redact sensitive
      // values) by persisting only the items they kept in the combined array.
      sessionItems: appended
    };
  }
  function normalizeStructuredToolOutputs(output) {
    if (Array.isArray(output)) {
      const structured = [];
      for (const item of output) {
        const normalized2 = normalizeStructuredToolOutput(item);
        if (!normalized2) {
          return null;
        }
        structured.push(normalized2);
      }
      return structured;
    }
    const normalized = normalizeStructuredToolOutput(output);
    return normalized ? [normalized] : null;
  }
  function normalizeStructuredToolOutput(value) {
    if (!isRecord(value)) {
      return null;
    }
    const type = value.type;
    if (type === "text" && typeof value.text === "string") {
      const output = { type: "text", text: value.text };
      if (isRecord(value.providerData)) {
        output.providerData = value.providerData;
      }
      return output;
    }
    if (type === "image") {
      const output = { type: "image" };
      let imageString;
      let imageFileId;
      const fallbackImageMediaType = isNonEmptyString(value.mediaType) ? value.mediaType : void 0;
      const imageField = value.image;
      if (typeof imageField === "string" && imageField.length > 0) {
        imageString = imageField;
      } else if (isRecord(imageField)) {
        const imageObj = imageField;
        const inlineMediaType = isNonEmptyString(imageObj.mediaType) ? imageObj.mediaType : fallbackImageMediaType;
        if (isNonEmptyString(imageObj.url)) {
          imageString = imageObj.url;
        } else if (isNonEmptyString(imageObj.data)) {
          imageString = toInlineImageString(imageObj.data, inlineMediaType);
        } else if (imageObj.data instanceof Uint8Array && imageObj.data.length > 0) {
          imageString = toInlineImageString(imageObj.data, inlineMediaType);
        }
        if (!imageString) {
          const candidateId = isNonEmptyString(imageObj.fileId) && imageObj.fileId || isNonEmptyString(imageObj.id) && imageObj.id || void 0;
          if (candidateId) {
            imageFileId = candidateId;
          }
        }
      }
      if (!imageString && typeof value.imageUrl === "string" && value.imageUrl.length > 0) {
        imageString = value.imageUrl;
      }
      if (!imageFileId && typeof value.fileId === "string" && value.fileId.length > 0) {
        imageFileId = value.fileId;
      }
      if (!imageString && typeof value.data === "string" && value.data.length > 0) {
        imageString = fallbackImageMediaType ? toInlineImageString(value.data, fallbackImageMediaType) : value.data;
      } else if (!imageString && value.data instanceof Uint8Array && value.data.length > 0) {
        imageString = toInlineImageString(value.data, fallbackImageMediaType);
      }
      if (typeof value.detail === "string" && value.detail.length > 0) {
        output.detail = value.detail;
      }
      if (imageString) {
        output.image = imageString;
      } else if (imageFileId) {
        output.image = { fileId: imageFileId };
      } else {
        return null;
      }
      if (isRecord(value.providerData)) {
        output.providerData = value.providerData;
      }
      return output;
    }
    if (type === "file") {
      const fileValue = normalizeFileValue(value);
      if (!fileValue) {
        return null;
      }
      const output = { type: "file", file: fileValue };
      if (isRecord(value.providerData)) {
        output.providerData = value.providerData;
      }
      return output;
    }
    return null;
  }
  function convertStructuredToolOutputToInputItem(output) {
    if (output.type === "text") {
      const result = {
        type: "input_text",
        text: output.text
      };
      if (output.providerData) {
        result.providerData = output.providerData;
      }
      return result;
    }
    if (output.type === "image") {
      const result = { type: "input_image" };
      if (typeof output.detail === "string" && output.detail.length > 0) {
        result.detail = output.detail;
      }
      if (typeof output.image === "string" && output.image.length > 0) {
        result.image = output.image;
      } else if (isRecord(output.image)) {
        const imageObj = output.image;
        const inlineMediaType = isNonEmptyString(imageObj.mediaType) ? imageObj.mediaType : void 0;
        if (isNonEmptyString(imageObj.url)) {
          result.image = imageObj.url;
        } else if (isNonEmptyString(imageObj.data)) {
          result.image = inlineMediaType && !imageObj.data.startsWith("data:") ? asDataUrl(imageObj.data, inlineMediaType) : imageObj.data;
        } else if (imageObj.data instanceof Uint8Array && imageObj.data.length > 0) {
          const base64 = encodeUint8ArrayToBase64(imageObj.data);
          result.image = asDataUrl(base64, inlineMediaType);
        } else {
          const referencedId = isNonEmptyString(imageObj.fileId) && imageObj.fileId || isNonEmptyString(imageObj.id) && imageObj.id || void 0;
          if (referencedId) {
            result.image = { id: referencedId };
          }
        }
      }
      if (output.providerData) {
        result.providerData = output.providerData;
      }
      return result;
    }
    if (output.type === "file") {
      const result = { type: "input_file" };
      const fileValue = output.file;
      if (typeof fileValue === "string") {
        result.file = fileValue;
      } else if (fileValue && typeof fileValue === "object") {
        const record = fileValue;
        if ("data" in record && record.data) {
          const mediaType = record.mediaType ?? "text/plain";
          if (typeof record.data === "string") {
            result.file = asDataUrl(record.data, mediaType);
          } else {
            const base64 = encodeUint8ArrayToBase64(record.data);
            result.file = asDataUrl(base64, mediaType);
          }
        } else if (typeof record.url === "string" && record.url.length > 0) {
          result.file = { url: record.url };
        } else {
          const referencedId = typeof record.id === "string" && record.id.length > 0 && record.id || (typeof record.fileId === "string" && record.fileId.length > 0 ? record.fileId : void 0);
          if (referencedId) {
            result.file = { id: referencedId };
          }
        }
        if (typeof record.filename === "string" && record.filename.length > 0) {
          result.filename = record.filename;
        }
      }
      if (output.providerData) {
        result.providerData = output.providerData;
      }
      return result;
    }
    const exhaustiveCheck = output;
    return exhaustiveCheck;
  }
  function buildItemFrequencyMap(items) {
    const counts = /* @__PURE__ */ new Map();
    for (const item of items) {
      const key = sessionItemKey(item);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return counts;
  }
  function buildItemReferenceMap(items) {
    const refs = /* @__PURE__ */ new Map();
    for (const item of items) {
      const key = sessionItemKey(item);
      const list = refs.get(key);
      if (list) {
        list.push(item);
      } else {
        refs.set(key, [item]);
      }
    }
    return refs;
  }
  function consumeReference(refs, key, target) {
    const candidates = refs.get(key);
    if (!candidates || candidates.length === 0) {
      return false;
    }
    const index = candidates.findIndex((candidate) => candidate === target);
    if (index === -1) {
      return false;
    }
    candidates.splice(index, 1);
    if (candidates.length === 0) {
      refs.delete(key);
    }
    return true;
  }
  function decrementCount(map, key) {
    const remaining = (map.get(key) ?? 0) - 1;
    if (remaining <= 0) {
      map.delete(key);
    } else {
      map.set(key, remaining);
    }
  }
  function sessionItemKey(item) {
    return JSON.stringify(item, sessionSerializationReplacer);
  }
  function sessionSerializationReplacer(_key, value) {
    if (value instanceof ArrayBuffer) {
      return {
        __type: "ArrayBuffer",
        data: encodeUint8ArrayToBase64(new Uint8Array(value))
      };
    }
    if (isArrayBufferView(value)) {
      const view = value;
      return {
        __type: view.constructor.name,
        data: encodeUint8ArrayToBase64(new Uint8Array(view.buffer, view.byteOffset, view.byteLength))
      };
    }
    if (isNodeBuffer(value)) {
      const view = value;
      return {
        __type: "Buffer",
        data: encodeUint8ArrayToBase64(new Uint8Array(view.buffer, view.byteOffset, view.byteLength))
      };
    }
    if (isSerializedBufferSnapshot(value)) {
      return {
        __type: "Buffer",
        data: encodeUint8ArrayToBase64(Uint8Array.from(value.data))
      };
    }
    return value;
  }

  // node_modules/@openai/agents-core/dist/runState.mjs
  var CURRENT_SCHEMA_VERSION = "1.0";
  var $schemaVersion = external_exports.literal(CURRENT_SCHEMA_VERSION);
  var serializedAgentSchema = external_exports.object({
    name: external_exports.string()
  });
  var serializedSpanBase = external_exports.object({
    object: external_exports.literal("trace.span"),
    id: external_exports.string(),
    trace_id: external_exports.string(),
    parent_id: external_exports.string().nullable(),
    started_at: external_exports.string().nullable(),
    ended_at: external_exports.string().nullable(),
    error: external_exports.object({
      message: external_exports.string(),
      data: external_exports.record(external_exports.string(), external_exports.any()).optional()
    }).nullable(),
    span_data: external_exports.record(external_exports.string(), external_exports.any())
  });
  var SerializedSpan = serializedSpanBase.extend({
    previous_span: external_exports.lazy(() => SerializedSpan).optional()
  });
  var requestUsageSchema = external_exports.object({
    inputTokens: external_exports.number(),
    outputTokens: external_exports.number(),
    totalTokens: external_exports.number(),
    inputTokensDetails: external_exports.record(external_exports.string(), external_exports.number()).optional(),
    outputTokensDetails: external_exports.record(external_exports.string(), external_exports.number()).optional()
  });
  var usageSchema = external_exports.object({
    requests: external_exports.number(),
    inputTokens: external_exports.number(),
    outputTokens: external_exports.number(),
    totalTokens: external_exports.number(),
    inputTokensDetails: external_exports.array(external_exports.record(external_exports.string(), external_exports.number())).optional(),
    outputTokensDetails: external_exports.array(external_exports.record(external_exports.string(), external_exports.number())).optional(),
    requestUsageEntries: external_exports.array(requestUsageSchema).optional()
  });
  var modelResponseSchema = external_exports.object({
    usage: usageSchema,
    output: external_exports.array(OutputModelItem),
    responseId: external_exports.string().optional(),
    providerData: external_exports.record(external_exports.string(), external_exports.any()).optional()
  });
  var itemSchema = external_exports.discriminatedUnion("type", [
    external_exports.object({
      type: external_exports.literal("message_output_item"),
      rawItem: AssistantMessageItem,
      agent: serializedAgentSchema
    }),
    external_exports.object({
      type: external_exports.literal("tool_call_item"),
      rawItem: ToolCallItem.or(HostedToolCallItem),
      agent: serializedAgentSchema
    }),
    external_exports.object({
      type: external_exports.literal("tool_call_output_item"),
      rawItem: FunctionCallResultItem,
      agent: serializedAgentSchema,
      output: external_exports.string()
    }),
    external_exports.object({
      type: external_exports.literal("reasoning_item"),
      rawItem: ReasoningItem,
      agent: serializedAgentSchema
    }),
    external_exports.object({
      type: external_exports.literal("handoff_call_item"),
      rawItem: FunctionCallItem,
      agent: serializedAgentSchema
    }),
    external_exports.object({
      type: external_exports.literal("handoff_output_item"),
      rawItem: FunctionCallResultItem,
      sourceAgent: serializedAgentSchema,
      targetAgent: serializedAgentSchema
    }),
    external_exports.object({
      type: external_exports.literal("tool_approval_item"),
      rawItem: FunctionCallItem.or(HostedToolCallItem).or(ShellCallItem).or(ApplyPatchCallItem),
      agent: serializedAgentSchema,
      toolName: external_exports.string().optional()
    })
  ]);
  var serializedTraceSchema = external_exports.object({
    object: external_exports.literal("trace"),
    id: external_exports.string(),
    workflow_name: external_exports.string(),
    group_id: external_exports.string().nullable(),
    metadata: external_exports.record(external_exports.string(), external_exports.any())
  });
  var serializedProcessedResponseSchema = external_exports.object({
    newItems: external_exports.array(itemSchema),
    toolsUsed: external_exports.array(external_exports.string()),
    handoffs: external_exports.array(external_exports.object({
      toolCall: external_exports.any(),
      handoff: external_exports.any()
    })),
    functions: external_exports.array(external_exports.object({
      toolCall: external_exports.any(),
      tool: external_exports.any()
    })),
    computerActions: external_exports.array(external_exports.object({
      toolCall: external_exports.any(),
      computer: external_exports.any()
    })),
    shellActions: external_exports.array(external_exports.object({
      toolCall: external_exports.any(),
      shell: external_exports.any()
    })).optional(),
    applyPatchActions: external_exports.array(external_exports.object({
      toolCall: external_exports.any(),
      applyPatch: external_exports.any()
    })).optional(),
    mcpApprovalRequests: external_exports.array(external_exports.object({
      requestItem: external_exports.object({
        // protocol.HostedToolCallItem
        rawItem: external_exports.object({
          type: external_exports.literal("hosted_tool_call"),
          name: external_exports.string(),
          arguments: external_exports.string().optional(),
          status: external_exports.string().optional(),
          output: external_exports.string().optional(),
          // this always exists but marked as optional for early version compatibility; when releasing 1.0, we can remove the nullable and optional
          providerData: external_exports.record(external_exports.string(), external_exports.any()).nullable().optional()
        })
      }),
      // HostedMCPTool
      mcpTool: external_exports.object({
        type: external_exports.literal("hosted_tool"),
        name: external_exports.literal("hosted_mcp"),
        providerData: external_exports.record(external_exports.string(), external_exports.any())
      })
    })).optional()
  });
  var guardrailFunctionOutputSchema = external_exports.object({
    tripwireTriggered: external_exports.boolean(),
    outputInfo: external_exports.any()
  });
  var inputGuardrailResultSchema = external_exports.object({
    guardrail: external_exports.object({
      type: external_exports.literal("input"),
      name: external_exports.string()
    }),
    output: guardrailFunctionOutputSchema
  });
  var outputGuardrailResultSchema = external_exports.object({
    guardrail: external_exports.object({
      type: external_exports.literal("output"),
      name: external_exports.string()
    }),
    agentOutput: external_exports.any(),
    agent: serializedAgentSchema,
    output: guardrailFunctionOutputSchema
  });
  var SerializedRunState = external_exports.object({
    $schemaVersion,
    currentTurn: external_exports.number(),
    currentAgent: serializedAgentSchema,
    originalInput: external_exports.string().or(external_exports.array(ModelItem)),
    modelResponses: external_exports.array(modelResponseSchema),
    context: external_exports.object({
      usage: usageSchema,
      approvals: external_exports.record(external_exports.string(), external_exports.object({
        approved: external_exports.array(external_exports.string()).or(external_exports.boolean()),
        rejected: external_exports.array(external_exports.string()).or(external_exports.boolean())
      })),
      context: external_exports.record(external_exports.string(), external_exports.any())
    }),
    toolUseTracker: external_exports.record(external_exports.string(), external_exports.array(external_exports.string())),
    maxTurns: external_exports.number(),
    currentAgentSpan: SerializedSpan.nullable().optional(),
    noActiveAgentRun: external_exports.boolean(),
    inputGuardrailResults: external_exports.array(inputGuardrailResultSchema),
    outputGuardrailResults: external_exports.array(outputGuardrailResultSchema),
    currentStep: nextStepSchema.optional(),
    lastModelResponse: modelResponseSchema.optional(),
    generatedItems: external_exports.array(itemSchema),
    lastProcessedResponse: serializedProcessedResponseSchema.optional(),
    currentTurnPersistedItemCount: external_exports.number().int().min(0).optional(),
    trace: serializedTraceSchema.nullable()
  });
  var RunState = class _RunState {
    constructor(context, originalInput, startingAgent, maxTurns) {
      /**
       * Current turn number in the conversation.
       */
      __publicField(this, "_currentTurn", 0);
      /**
       * The agent currently handling the conversation.
       */
      __publicField(this, "_currentAgent");
      /**
       * Original user input prior to any processing.
       */
      __publicField(this, "_originalInput");
      /**
       * Responses from the model so far.
       */
      __publicField(this, "_modelResponses");
      /**
       * Active tracing span for the current agent if tracing is enabled.
       */
      __publicField(this, "_currentAgentSpan");
      /**
       * Run context tracking approvals, usage, and other metadata.
       */
      __publicField(this, "_context");
      /**
       * Tracks what tools each agent has used.
       */
      __publicField(this, "_toolUseTracker");
      /**
       * Items generated by the agent during the run.
       */
      __publicField(this, "_generatedItems");
      /**
       * Number of `_generatedItems` already flushed to session storage for the current turn.
       *
       * Persisting the entire turn on every save would duplicate responses and tool outputs.
       * Instead, `saveToSession` appends only the delta since the previous write. This counter
       * tracks how many generated run items from *this turn* were already written so the next
       * save can slice off only the new entries. When a turn is interrupted (e.g., awaiting tool
       * approval) and later resumed, we rewind the counter before continuing so the pending tool
       * output still gets stored.
       */
      __publicField(this, "_currentTurnPersistedItemCount");
      /**
       * Maximum allowed turns before forcing termination.
       */
      __publicField(this, "_maxTurns");
      /**
       * Whether the run has an active agent step in progress.
       */
      __publicField(this, "_noActiveAgentRun", true);
      /**
       * Last model response for the previous turn.
       */
      __publicField(this, "_lastTurnResponse");
      /**
       * Results from input guardrails applied to the run.
       */
      __publicField(this, "_inputGuardrailResults");
      /**
       * Results from output guardrails applied to the run.
       */
      __publicField(this, "_outputGuardrailResults");
      /**
       * Next step computed for the agent to take.
       */
      __publicField(this, "_currentStep");
      /**
       * Parsed model response after applying guardrails and tools.
       */
      __publicField(this, "_lastProcessedResponse");
      /**
       * Trace associated with this run if tracing is enabled.
       */
      __publicField(this, "_trace", null);
      this._context = context;
      this._originalInput = structuredClone(originalInput);
      this._modelResponses = [];
      this._currentAgentSpan = void 0;
      this._currentAgent = startingAgent;
      this._toolUseTracker = new AgentToolUseTracker();
      this._generatedItems = [];
      this._currentTurnPersistedItemCount = 0;
      this._maxTurns = maxTurns;
      this._inputGuardrailResults = [];
      this._outputGuardrailResults = [];
      this._trace = getCurrentTrace();
    }
    /**
     * The usage aggregated for this run. This includes per-request breakdowns when available.
     */
    get usage() {
      return this._context.usage;
    }
    /**
     * The history of the agent run. This includes the input items and the new items generated during the run.
     *
     * This can be used as inputs for the next agent run.
     */
    get history() {
      return getTurnInput(this._originalInput, this._generatedItems);
    }
    /**
     * Returns all interruptions if the current step is an interruption otherwise returns an empty array.
     */
    getInterruptions() {
      if (this._currentStep?.type !== "next_step_interruption") {
        return [];
      }
      return this._currentStep.data.interruptions;
    }
    /**
     * Approves a tool call requested by the agent through an interruption and approval item request.
     *
     * To approve the request use this method and then run the agent again with the same state object
     * to continue the execution.
     *
     * By default it will only approve the current tool call. To allow the tool to be used multiple
     * times throughout the run, set the `alwaysApprove` option to `true`.
     *
     * @param approvalItem - The tool call approval item to approve.
     * @param options - Options for the approval.
     */
    approve(approvalItem, options = { alwaysApprove: false }) {
      this._context.approveTool(approvalItem, options);
    }
    /**
     * Rejects a tool call requested by the agent through an interruption and approval item request.
     *
     * To reject the request use this method and then run the agent again with the same state object
     * to continue the execution.
     *
     * By default it will only reject the current tool call. To allow the tool to be used multiple
     * times throughout the run, set the `alwaysReject` option to `true`.
     *
     * @param approvalItem - The tool call approval item to reject.
     * @param options - Options for the rejection.
     */
    reject(approvalItem, options = { alwaysReject: false }) {
      this._context.rejectTool(approvalItem, options);
    }
    /**
     * Serializes the run state to a JSON object.
     *
     * This method is used to serialize the run state to a JSON object that can be used to
     * resume the run later.
     *
     * @returns The serialized run state.
     */
    toJSON() {
      const output = {
        $schemaVersion: CURRENT_SCHEMA_VERSION,
        currentTurn: this._currentTurn,
        currentAgent: {
          name: this._currentAgent.name
        },
        originalInput: this._originalInput,
        modelResponses: this._modelResponses.map((response) => {
          return {
            usage: {
              requests: response.usage.requests,
              inputTokens: response.usage.inputTokens,
              outputTokens: response.usage.outputTokens,
              totalTokens: response.usage.totalTokens,
              inputTokensDetails: response.usage.inputTokensDetails,
              outputTokensDetails: response.usage.outputTokensDetails,
              ...response.usage.requestUsageEntries && response.usage.requestUsageEntries.length > 0 ? {
                requestUsageEntries: response.usage.requestUsageEntries.map((entry) => ({
                  inputTokens: entry.inputTokens,
                  outputTokens: entry.outputTokens,
                  totalTokens: entry.totalTokens,
                  inputTokensDetails: entry.inputTokensDetails,
                  outputTokensDetails: entry.outputTokensDetails
                }))
              } : {}
            },
            output: response.output,
            responseId: response.responseId,
            providerData: response.providerData
          };
        }),
        context: this._context.toJSON(),
        toolUseTracker: this._toolUseTracker.toJSON(),
        maxTurns: this._maxTurns,
        currentAgentSpan: this._currentAgentSpan?.toJSON(),
        noActiveAgentRun: this._noActiveAgentRun,
        inputGuardrailResults: this._inputGuardrailResults,
        outputGuardrailResults: this._outputGuardrailResults.map((r) => ({
          ...r,
          agent: r.agent.toJSON()
        })),
        currentStep: this._currentStep,
        lastModelResponse: this._lastTurnResponse,
        generatedItems: this._generatedItems.map((item) => item.toJSON()),
        currentTurnPersistedItemCount: this._currentTurnPersistedItemCount,
        lastProcessedResponse: this._lastProcessedResponse,
        trace: this._trace ? this._trace.toJSON() : null
      };
      const parsed = SerializedRunState.safeParse(output);
      if (!parsed.success) {
        throw new SystemError(`Failed to serialize run state. ${parsed.error.message}`);
      }
      return parsed.data;
    }
    /**
     * Serializes the run state to a string.
     *
     * This method is used to serialize the run state to a string that can be used to
     * resume the run later.
     *
     * @returns The serialized run state.
     */
    toString() {
      return JSON.stringify(this.toJSON());
    }
    /**
     * Deserializes a run state from a string.
     *
     * This method is used to deserialize a run state from a string that was serialized using the
     * `toString` method.
     */
    static async fromString(initialAgent, str) {
      const [parsingError, jsonResult] = await safeExecute(() => JSON.parse(str));
      if (parsingError) {
        throw new UserError(`Failed to parse run state. ${parsingError instanceof Error ? parsingError.message : String(parsingError)}`);
      }
      const currentSchemaVersion = jsonResult.$schemaVersion;
      if (!currentSchemaVersion) {
        throw new UserError("Run state is missing schema version");
      }
      if (currentSchemaVersion !== CURRENT_SCHEMA_VERSION) {
        throw new UserError(`Run state schema version ${currentSchemaVersion} is not supported. Please use version ${CURRENT_SCHEMA_VERSION}`);
      }
      const stateJson = SerializedRunState.parse(JSON.parse(str));
      const agentMap = buildAgentMap(initialAgent);
      const context = new RunContext(stateJson.context.context);
      context._rebuildApprovals(stateJson.context.approvals);
      const currentAgent = agentMap.get(stateJson.currentAgent.name);
      if (!currentAgent) {
        throw new UserError(`Agent ${stateJson.currentAgent.name} not found`);
      }
      const state = new _RunState(context, "", currentAgent, stateJson.maxTurns);
      state._currentTurn = stateJson.currentTurn;
      state._toolUseTracker = new AgentToolUseTracker();
      for (const [agentName, toolNames] of Object.entries(stateJson.toolUseTracker)) {
        state._toolUseTracker.addToolUse(agentMap.get(agentName), toolNames);
      }
      if (stateJson.currentAgentSpan) {
        if (!stateJson.trace) {
          logger_default.warn("Trace is not set, skipping tracing setup");
        }
        const trace = getGlobalTraceProvider().createTrace({
          traceId: stateJson.trace?.id,
          name: stateJson.trace?.workflow_name,
          groupId: stateJson.trace?.group_id ?? void 0,
          metadata: stateJson.trace?.metadata
        });
        state._currentAgentSpan = deserializeSpan(trace, stateJson.currentAgentSpan);
        state._trace = trace;
      }
      state._noActiveAgentRun = stateJson.noActiveAgentRun;
      state._inputGuardrailResults = stateJson.inputGuardrailResults;
      state._outputGuardrailResults = stateJson.outputGuardrailResults.map((r) => ({
        ...r,
        agent: agentMap.get(r.agent.name)
      }));
      state._currentStep = stateJson.currentStep;
      state._originalInput = stateJson.originalInput;
      state._modelResponses = stateJson.modelResponses.map(deserializeModelResponse);
      state._lastTurnResponse = stateJson.lastModelResponse ? deserializeModelResponse(stateJson.lastModelResponse) : void 0;
      state._generatedItems = stateJson.generatedItems.map((item) => deserializeItem(item, agentMap));
      state._currentTurnPersistedItemCount = stateJson.currentTurnPersistedItemCount ?? 0;
      state._lastProcessedResponse = stateJson.lastProcessedResponse ? await deserializeProcessedResponse(agentMap, state._currentAgent, state._context, stateJson.lastProcessedResponse) : void 0;
      if (stateJson.currentStep?.type === "next_step_handoff") {
        state._currentStep = {
          type: "next_step_handoff",
          newAgent: agentMap.get(stateJson.currentStep.newAgent.name)
        };
      }
      return state;
    }
  };
  function buildAgentMap(initialAgent) {
    const map = /* @__PURE__ */ new Map();
    const queue = [initialAgent];
    while (queue.length > 0) {
      const currentAgent = queue.shift();
      if (map.has(currentAgent.name)) {
        continue;
      }
      map.set(currentAgent.name, currentAgent);
      for (const handoff2 of currentAgent.handoffs) {
        if (handoff2 instanceof Agent) {
          if (!map.has(handoff2.name)) {
            queue.push(handoff2);
          }
        } else if (handoff2.agent) {
          if (!map.has(handoff2.agent.name)) {
            queue.push(handoff2.agent);
          }
        }
      }
    }
    return map;
  }
  function deserializeSpan(trace, serializedSpan) {
    const spanData = serializedSpan.span_data;
    const previousSpan = serializedSpan.previous_span ? deserializeSpan(trace, serializedSpan.previous_span) : void 0;
    const span = getGlobalTraceProvider().createSpan({
      spanId: serializedSpan.id,
      traceId: serializedSpan.trace_id,
      parentId: serializedSpan.parent_id ?? void 0,
      startedAt: serializedSpan.started_at ?? void 0,
      endedAt: serializedSpan.ended_at ?? void 0,
      data: spanData
    }, trace);
    span.previousSpan = previousSpan;
    return span;
  }
  function deserializeModelResponse(serializedModelResponse) {
    const usage = new Usage(serializedModelResponse.usage);
    return {
      usage,
      output: serializedModelResponse.output.map((item) => OutputModelItem.parse(item)),
      responseId: serializedModelResponse.responseId,
      providerData: serializedModelResponse.providerData
    };
  }
  function deserializeItem(serializedItem, agentMap) {
    switch (serializedItem.type) {
      case "message_output_item":
        return new RunMessageOutputItem(serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
      case "tool_call_item":
        return new RunToolCallItem(serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
      case "tool_call_output_item":
        return new RunToolCallOutputItem(serializedItem.rawItem, agentMap.get(serializedItem.agent.name), serializedItem.output);
      case "reasoning_item":
        return new RunReasoningItem(serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
      case "handoff_call_item":
        return new RunHandoffCallItem(serializedItem.rawItem, agentMap.get(serializedItem.agent.name));
      case "handoff_output_item":
        return new RunHandoffOutputItem(serializedItem.rawItem, agentMap.get(serializedItem.sourceAgent.name), agentMap.get(serializedItem.targetAgent.name));
      case "tool_approval_item":
        return new RunToolApprovalItem(serializedItem.rawItem, agentMap.get(serializedItem.agent.name), serializedItem.toolName);
    }
  }
  async function deserializeProcessedResponse(agentMap, currentAgent, context, serializedProcessedResponse) {
    const allTools = await currentAgent.getAllTools(context);
    const tools = new Map(allTools.filter((tool2) => tool2.type === "function").map((tool2) => [tool2.name, tool2]));
    const computerTools = new Map(allTools.filter((tool2) => tool2.type === "computer").map((tool2) => [tool2.name, tool2]));
    const shellTools = new Map(allTools.filter((tool2) => tool2.type === "shell").map((tool2) => [tool2.name, tool2]));
    const applyPatchTools = new Map(allTools.filter((tool2) => tool2.type === "apply_patch").map((tool2) => [tool2.name, tool2]));
    const handoffs = new Map(currentAgent.handoffs.map((entry) => {
      if (entry instanceof Agent) {
        return [entry.name, handoff(entry)];
      }
      return [entry.toolName, entry];
    }));
    const result = {
      newItems: serializedProcessedResponse.newItems.map((item) => deserializeItem(item, agentMap)),
      toolsUsed: serializedProcessedResponse.toolsUsed,
      handoffs: serializedProcessedResponse.handoffs.map((handoff2) => {
        if (!handoffs.has(handoff2.handoff.toolName)) {
          throw new UserError(`Handoff ${handoff2.handoff.toolName} not found`);
        }
        return {
          toolCall: handoff2.toolCall,
          handoff: handoffs.get(handoff2.handoff.toolName)
        };
      }),
      functions: await Promise.all(serializedProcessedResponse.functions.map(async (functionCall) => {
        if (!tools.has(functionCall.tool.name)) {
          throw new UserError(`Tool ${functionCall.tool.name} not found`);
        }
        return {
          toolCall: functionCall.toolCall,
          tool: tools.get(functionCall.tool.name)
        };
      })),
      computerActions: serializedProcessedResponse.computerActions.map((computerAction) => {
        const toolName = computerAction.computer.name;
        if (!computerTools.has(toolName)) {
          throw new UserError(`Computer tool ${toolName} not found`);
        }
        return {
          toolCall: computerAction.toolCall,
          computer: computerTools.get(toolName)
        };
      }),
      shellActions: (serializedProcessedResponse.shellActions ?? []).map((shellAction) => {
        const toolName = shellAction.shell.name;
        if (!shellTools.has(toolName)) {
          throw new UserError(`Shell tool ${toolName} not found`);
        }
        return {
          toolCall: shellAction.toolCall,
          shell: shellTools.get(toolName)
        };
      }),
      applyPatchActions: (serializedProcessedResponse.applyPatchActions ?? []).map((applyPatchAction) => {
        const toolName = applyPatchAction.applyPatch.name;
        if (!applyPatchTools.has(toolName)) {
          throw new UserError(`Apply patch tool ${toolName} not found`);
        }
        return {
          toolCall: applyPatchAction.toolCall,
          applyPatch: applyPatchTools.get(toolName)
        };
      }),
      mcpApprovalRequests: (serializedProcessedResponse.mcpApprovalRequests ?? []).map((approvalRequest) => ({
        requestItem: new RunToolApprovalItem(approvalRequest.requestItem.rawItem, currentAgent),
        mcpTool: approvalRequest.mcpTool
      }))
    };
    return {
      ...result,
      hasToolsOrApprovalsToRun() {
        return result.handoffs.length > 0 || result.functions.length > 0 || result.mcpApprovalRequests.length > 0 || result.computerActions.length > 0 || result.shellActions.length > 0 || result.applyPatchActions.length > 0;
      }
    };
  }

  // node_modules/@openai/agents-core/dist/run.mjs
  var _Runner_instances, getInputGuardrailDefinitions_fn, splitInputGuardrails_fn, resolveModelForAgent_fn, runIndividualNonStream_fn, runStreamLoop_fn, runIndividualStream_fn, runInputGuardrails_fn, runOutputGuardrails_fn, prepareModelCall_fn;
  var Runner = class extends RunHooks {
    /**
     * Creates a runner with optional defaults that apply to every subsequent run invocation.
     *
     * @param config - Overrides for models, guardrails, tracing, or session behavior.
     */
    constructor(config2 = {}) {
      super();
      __privateAdd(this, _Runner_instances);
      __publicField(this, "config");
      // --------------------------------------------------------------
      //  Internals
      // --------------------------------------------------------------
      __publicField(this, "inputGuardrailDefs");
      __publicField(this, "outputGuardrailDefs");
      this.config = {
        modelProvider: config2.modelProvider ?? getDefaultModelProvider(),
        model: config2.model,
        modelSettings: config2.modelSettings,
        handoffInputFilter: config2.handoffInputFilter,
        inputGuardrails: config2.inputGuardrails,
        outputGuardrails: config2.outputGuardrails,
        tracingDisabled: config2.tracingDisabled ?? false,
        traceIncludeSensitiveData: config2.traceIncludeSensitiveData ?? true,
        workflowName: config2.workflowName ?? "Agent workflow",
        traceId: config2.traceId,
        groupId: config2.groupId,
        traceMetadata: config2.traceMetadata,
        sessionInputCallback: config2.sessionInputCallback,
        callModelInputFilter: config2.callModelInputFilter
      };
      this.inputGuardrailDefs = (config2.inputGuardrails ?? []).map(defineInputGuardrail);
      this.outputGuardrailDefs = (config2.outputGuardrails ?? []).map(defineOutputGuardrail);
    }
    async run(agent, input, options = {
      stream: false,
      context: void 0
    }) {
      const resolvedOptions = options ?? { stream: false, context: void 0 };
      const sessionInputCallback = resolvedOptions.sessionInputCallback ?? this.config.sessionInputCallback;
      const callModelInputFilter = resolvedOptions.callModelInputFilter ?? this.config.callModelInputFilter;
      const hasCallModelInputFilter = Boolean(callModelInputFilter);
      const effectiveOptions = {
        ...resolvedOptions,
        sessionInputCallback,
        callModelInputFilter
      };
      const serverManagesConversation = Boolean(effectiveOptions.conversationId) || Boolean(effectiveOptions.previousResponseId);
      const session = effectiveOptions.session;
      const resumingFromState = input instanceof RunState;
      let sessionInputOriginalSnapshot = session && resumingFromState ? [] : void 0;
      let sessionInputFilteredSnapshot = void 0;
      let sessionInputPendingWriteCounts = session && resumingFromState ? /* @__PURE__ */ new Map() : void 0;
      const recordSessionItemsForPersistence = (sourceItems, filteredItems) => {
        const pendingWriteCounts = sessionInputPendingWriteCounts;
        if (filteredItems !== void 0) {
          if (!pendingWriteCounts) {
            sessionInputFilteredSnapshot = filteredItems.map((item) => structuredClone(item));
            return;
          }
          const persistableItems = [];
          const sourceOccurrenceCounts = /* @__PURE__ */ new WeakMap();
          for (const source of sourceItems) {
            if (!source || typeof source !== "object") {
              continue;
            }
            const nextCount = (sourceOccurrenceCounts.get(source) ?? 0) + 1;
            sourceOccurrenceCounts.set(source, nextCount);
          }
          const consumeAnyPendingWriteSlot = () => {
            for (const [key, remaining] of pendingWriteCounts) {
              if (remaining > 0) {
                pendingWriteCounts.set(key, remaining - 1);
                return true;
              }
            }
            return false;
          };
          for (let i = 0; i < filteredItems.length; i++) {
            const filteredItem = filteredItems[i];
            if (!filteredItem) {
              continue;
            }
            let allocated = false;
            const source = sourceItems[i];
            if (source && typeof source === "object") {
              const pendingOccurrences = (sourceOccurrenceCounts.get(source) ?? 0) - 1;
              sourceOccurrenceCounts.set(source, pendingOccurrences);
              if (pendingOccurrences > 0) {
                continue;
              }
              const sourceKey = getAgentInputItemKey(source);
              const remaining = pendingWriteCounts.get(sourceKey) ?? 0;
              if (remaining > 0) {
                pendingWriteCounts.set(sourceKey, remaining - 1);
                persistableItems.push(structuredClone(filteredItem));
                allocated = true;
                continue;
              }
            }
            const filteredKey = getAgentInputItemKey(filteredItem);
            const filteredRemaining = pendingWriteCounts.get(filteredKey) ?? 0;
            if (filteredRemaining > 0) {
              pendingWriteCounts.set(filteredKey, filteredRemaining - 1);
              persistableItems.push(structuredClone(filteredItem));
              allocated = true;
              continue;
            }
            if (!source && consumeAnyPendingWriteSlot()) {
              persistableItems.push(structuredClone(filteredItem));
              allocated = true;
            }
            if (!allocated && !source && sessionInputFilteredSnapshot === void 0) {
              persistableItems.push(structuredClone(filteredItem));
            }
          }
          if (persistableItems.length > 0 || sessionInputFilteredSnapshot === void 0) {
            sessionInputFilteredSnapshot = persistableItems;
          }
          return;
        }
        const filtered = [];
        if (!pendingWriteCounts) {
          for (const item of sourceItems) {
            if (!item) {
              continue;
            }
            filtered.push(structuredClone(item));
          }
        } else {
          for (const item of sourceItems) {
            if (!item) {
              continue;
            }
            const key = getAgentInputItemKey(item);
            const remaining = pendingWriteCounts.get(key) ?? 0;
            if (remaining <= 0) {
              continue;
            }
            pendingWriteCounts.set(key, remaining - 1);
            filtered.push(structuredClone(item));
          }
        }
        if (filtered.length > 0) {
          sessionInputFilteredSnapshot = filtered;
        } else if (sessionInputFilteredSnapshot === void 0) {
          sessionInputFilteredSnapshot = [];
        }
      };
      const resolveSessionItemsForPersistence = () => {
        if (sessionInputFilteredSnapshot !== void 0) {
          return sessionInputFilteredSnapshot;
        }
        if (hasCallModelInputFilter) {
          return void 0;
        }
        return sessionInputOriginalSnapshot;
      };
      let preparedInput = input;
      if (!(preparedInput instanceof RunState)) {
        if (session && Array.isArray(preparedInput) && !sessionInputCallback) {
          throw new UserError("RunConfig.sessionInputCallback must be provided when using session history with list inputs.");
        }
        const prepared = await prepareInputItemsWithSession(preparedInput, session, sessionInputCallback, {
          // When the server tracks conversation state we only send the new turn inputs;
          // previous messages are recovered via conversationId/previousResponseId.
          includeHistoryInPreparedInput: !serverManagesConversation,
          preserveDroppedNewItems: serverManagesConversation
        });
        if (serverManagesConversation && session) {
          const sessionItems = prepared.sessionItems;
          if (sessionItems && sessionItems.length > 0) {
            preparedInput = sessionItems;
          } else {
            preparedInput = prepared.preparedInput;
          }
        } else {
          preparedInput = prepared.preparedInput;
        }
        if (session) {
          const items = prepared.sessionItems ?? [];
          sessionInputOriginalSnapshot = items.map((item) => structuredClone(item));
          sessionInputPendingWriteCounts = /* @__PURE__ */ new Map();
          for (const item of items) {
            const key = getAgentInputItemKey(item);
            sessionInputPendingWriteCounts.set(key, (sessionInputPendingWriteCounts.get(key) ?? 0) + 1);
          }
        }
      }
      let ensureStreamInputPersisted;
      if (session && !serverManagesConversation) {
        let persisted = false;
        ensureStreamInputPersisted = async () => {
          if (persisted) {
            return;
          }
          const itemsToPersist = resolveSessionItemsForPersistence();
          if (!itemsToPersist || itemsToPersist.length === 0) {
            return;
          }
          persisted = true;
          await saveStreamInputToSession(session, itemsToPersist);
        };
      }
      const executeRun = async () => {
        if (effectiveOptions.stream) {
          const streamResult = await __privateMethod(this, _Runner_instances, runIndividualStream_fn).call(this, agent, preparedInput, effectiveOptions, ensureStreamInputPersisted, recordSessionItemsForPersistence);
          return streamResult;
        }
        const runResult = await __privateMethod(this, _Runner_instances, runIndividualNonStream_fn).call(this, agent, preparedInput, effectiveOptions, recordSessionItemsForPersistence);
        if (session && !serverManagesConversation) {
          await saveToSession(session, resolveSessionItemsForPersistence(), runResult);
        }
        return runResult;
      };
      if (preparedInput instanceof RunState && preparedInput._trace) {
        return withTrace(preparedInput._trace, async () => {
          if (preparedInput._currentAgentSpan) {
            setCurrentSpan(preparedInput._currentAgentSpan);
          }
          return executeRun();
        });
      }
      return getOrCreateTrace(async () => executeRun(), {
        traceId: this.config.traceId,
        name: this.config.workflowName,
        groupId: this.config.groupId,
        metadata: this.config.traceMetadata
      });
    }
  };
  _Runner_instances = new WeakSet();
  getInputGuardrailDefinitions_fn = function(state) {
    return this.inputGuardrailDefs.concat(state._currentAgent.inputGuardrails.map(defineInputGuardrail));
  };
  splitInputGuardrails_fn = function(state) {
    const guardrails = __privateMethod(this, _Runner_instances, getInputGuardrailDefinitions_fn).call(this, state);
    const blocking = [];
    const parallel = [];
    for (const guardrail of guardrails) {
      if (guardrail.runInParallel === false) {
        blocking.push(guardrail);
      } else {
        parallel.push(guardrail);
      }
    }
    return { blocking, parallel };
  };
  resolveModelForAgent_fn = async function(agent) {
    const explictlyModelSet = agent.model !== void 0 && agent.model !== Agent.DEFAULT_MODEL_PLACEHOLDER || this.config.model !== void 0 && this.config.model !== Agent.DEFAULT_MODEL_PLACEHOLDER;
    let resolvedModel = selectModel(agent.model, this.config.model);
    if (typeof resolvedModel === "string") {
      resolvedModel = await this.config.modelProvider.getModel(resolvedModel);
    }
    return { model: resolvedModel, explictlyModelSet };
  };
  runIndividualNonStream_fn = async function(startingAgent, input, options, sessionInputUpdate) {
    return withNewSpanContext(async () => {
      const isResumedState = input instanceof RunState;
      const state = isResumedState ? input : new RunState(options.context instanceof RunContext ? options.context : new RunContext(options.context), input, startingAgent, options.maxTurns ?? DEFAULT_MAX_TURNS);
      const serverConversationTracker = options.conversationId || options.previousResponseId ? new ServerConversationTracker({
        conversationId: options.conversationId,
        previousResponseId: options.previousResponseId
      }) : void 0;
      if (serverConversationTracker && isResumedState) {
        serverConversationTracker.primeFromState({
          originalInput: state._originalInput,
          generatedItems: state._generatedItems,
          modelResponses: state._modelResponses
        });
      }
      try {
        while (true) {
          state._currentStep = state._currentStep ?? {
            type: "next_step_run_again"
          };
          if (state._currentStep.type === "next_step_interruption") {
            logger_default.debug("Continuing from interruption");
            if (!state._lastTurnResponse || !state._lastProcessedResponse) {
              throw new UserError("No model response found in previous state", state);
            }
            const turnResult = await resolveInterruptedTurn(state._currentAgent, state._originalInput, state._generatedItems, state._lastTurnResponse, state._lastProcessedResponse, this, state);
            state._toolUseTracker.addToolUse(state._currentAgent, state._lastProcessedResponse.toolsUsed);
            state._originalInput = turnResult.originalInput;
            state._generatedItems = turnResult.generatedItems;
            if (turnResult.nextStep.type === "next_step_run_again") {
              state._currentTurnPersistedItemCount = 0;
            }
            state._currentStep = turnResult.nextStep;
            if (turnResult.nextStep.type === "next_step_interruption") {
              return new RunResult(state);
            }
            continue;
          }
          if (state._currentStep.type === "next_step_run_again") {
            const artifacts = await prepareAgentArtifacts(state);
            state._currentTurn++;
            state._currentTurnPersistedItemCount = 0;
            if (state._currentTurn > state._maxTurns) {
              state._currentAgentSpan?.setError({
                message: "Max turns exceeded",
                data: { max_turns: state._maxTurns }
              });
              throw new MaxTurnsExceededError(`Max turns (${state._maxTurns}) exceeded`, state);
            }
            logger_default.debug(`Running agent ${state._currentAgent.name} (turn ${state._currentTurn})`);
            let parallelGuardrailPromise;
            if (state._currentTurn === 1) {
              const guardrails = __privateMethod(this, _Runner_instances, splitInputGuardrails_fn).call(this, state);
              if (guardrails.blocking.length > 0) {
                await __privateMethod(this, _Runner_instances, runInputGuardrails_fn).call(this, state, guardrails.blocking);
              }
              if (guardrails.parallel.length > 0) {
                parallelGuardrailPromise = __privateMethod(this, _Runner_instances, runInputGuardrails_fn).call(this, state, guardrails.parallel);
                parallelGuardrailPromise.catch(() => {
                });
              }
            }
            const turnInput = serverConversationTracker ? serverConversationTracker.prepareInput(state._originalInput, state._generatedItems) : getTurnInput(state._originalInput, state._generatedItems);
            if (state._noActiveAgentRun) {
              state._currentAgent.emit("agent_start", state._context, state._currentAgent);
              this.emit("agent_start", state._context, state._currentAgent);
            }
            const preparedCall = await __privateMethod(this, _Runner_instances, prepareModelCall_fn).call(this, state, options, artifacts, turnInput, serverConversationTracker, sessionInputUpdate);
            state._lastTurnResponse = await preparedCall.model.getResponse({
              systemInstructions: preparedCall.modelInput.instructions,
              prompt: preparedCall.prompt,
              // Explicit agent/run config models should take precedence over prompt defaults.
              ...preparedCall.explictlyModelSet ? { overridePromptModel: true } : {},
              input: preparedCall.modelInput.input,
              previousResponseId: preparedCall.previousResponseId,
              conversationId: preparedCall.conversationId,
              modelSettings: preparedCall.modelSettings,
              tools: preparedCall.serializedTools,
              toolsExplicitlyProvided: preparedCall.toolsExplicitlyProvided,
              outputType: convertAgentOutputTypeToSerializable(state._currentAgent.outputType),
              handoffs: preparedCall.serializedHandoffs,
              tracing: getTracing(this.config.tracingDisabled, this.config.traceIncludeSensitiveData),
              signal: options.signal
            });
            state._modelResponses.push(state._lastTurnResponse);
            state._context.usage.add(state._lastTurnResponse.usage);
            state._noActiveAgentRun = false;
            serverConversationTracker?.trackServerItems(state._lastTurnResponse);
            const processedResponse = processModelResponse(state._lastTurnResponse, state._currentAgent, preparedCall.tools, preparedCall.handoffs);
            state._lastProcessedResponse = processedResponse;
            const turnResult = await resolveTurnAfterModelResponse(state._currentAgent, state._originalInput, state._generatedItems, state._lastTurnResponse, state._lastProcessedResponse, this, state);
            state._toolUseTracker.addToolUse(state._currentAgent, state._lastProcessedResponse.toolsUsed);
            state._originalInput = turnResult.originalInput;
            state._generatedItems = turnResult.generatedItems;
            if (turnResult.nextStep.type === "next_step_run_again") {
              state._currentTurnPersistedItemCount = 0;
            }
            state._currentStep = turnResult.nextStep;
            if (parallelGuardrailPromise) {
              await parallelGuardrailPromise;
            }
          }
          if (state._currentStep && state._currentStep.type === "next_step_final_output") {
            await __privateMethod(this, _Runner_instances, runOutputGuardrails_fn).call(this, state, state._currentStep.output);
            this.emit("agent_end", state._context, state._currentAgent, state._currentStep.output);
            state._currentAgent.emit("agent_end", state._context, state._currentStep.output);
            return new RunResult(state);
          } else if (state._currentStep && state._currentStep.type === "next_step_handoff") {
            state._currentAgent = state._currentStep.newAgent;
            if (state._currentAgentSpan) {
              state._currentAgentSpan.end();
              resetCurrentSpan();
              state._currentAgentSpan = void 0;
            }
            state._noActiveAgentRun = true;
            state._currentStep = { type: "next_step_run_again" };
          } else if (state._currentStep && state._currentStep.type === "next_step_interruption") {
            return new RunResult(state);
          } else {
            logger_default.debug("Running next loop");
          }
        }
      } catch (err) {
        if (state._currentAgentSpan) {
          state._currentAgentSpan.setError({
            message: "Error in agent run",
            data: { error: String(err) }
          });
        }
        throw err;
      } finally {
        if (state._currentAgentSpan) {
          if (state._currentStep?.type !== "next_step_interruption") {
            state._currentAgentSpan.end();
          }
          resetCurrentSpan();
        }
      }
    });
  };
  runStreamLoop_fn = async function(result, options, isResumedState, ensureStreamInputPersisted, sessionInputUpdate) {
    const serverManagesConversation = Boolean(options.conversationId) || Boolean(options.previousResponseId);
    const serverConversationTracker = serverManagesConversation ? new ServerConversationTracker({
      conversationId: options.conversationId,
      previousResponseId: options.previousResponseId
    }) : void 0;
    let handedInputToModel = false;
    let streamInputPersisted = false;
    const persistStreamInputIfNeeded = async () => {
      if (streamInputPersisted || !ensureStreamInputPersisted) {
        return;
      }
      await ensureStreamInputPersisted();
      streamInputPersisted = true;
    };
    if (serverConversationTracker && isResumedState) {
      serverConversationTracker.primeFromState({
        originalInput: result.state._originalInput,
        generatedItems: result.state._generatedItems,
        modelResponses: result.state._modelResponses
      });
    }
    try {
      while (true) {
        const currentAgent = result.state._currentAgent;
        result.state._currentStep = result.state._currentStep ?? {
          type: "next_step_run_again"
        };
        if (result.state._currentStep.type === "next_step_interruption") {
          logger_default.debug("Continuing from interruption");
          if (!result.state._lastTurnResponse || !result.state._lastProcessedResponse) {
            throw new UserError("No model response found in previous state", result.state);
          }
          const turnResult = await resolveInterruptedTurn(result.state._currentAgent, result.state._originalInput, result.state._generatedItems, result.state._lastTurnResponse, result.state._lastProcessedResponse, this, result.state);
          addStepToRunResult(result, turnResult);
          result.state._toolUseTracker.addToolUse(result.state._currentAgent, result.state._lastProcessedResponse.toolsUsed);
          result.state._originalInput = turnResult.originalInput;
          result.state._generatedItems = turnResult.generatedItems;
          if (turnResult.nextStep.type === "next_step_run_again") {
            result.state._currentTurnPersistedItemCount = 0;
          }
          result.state._currentStep = turnResult.nextStep;
          if (turnResult.nextStep.type === "next_step_interruption") {
            return;
          }
          continue;
        }
        if (result.state._currentStep.type === "next_step_run_again") {
          const artifacts = await prepareAgentArtifacts(result.state);
          result.state._currentTurn++;
          result.state._currentTurnPersistedItemCount = 0;
          if (result.state._currentTurn > result.state._maxTurns) {
            result.state._currentAgentSpan?.setError({
              message: "Max turns exceeded",
              data: { max_turns: result.state._maxTurns }
            });
            throw new MaxTurnsExceededError(`Max turns (${result.state._maxTurns}) exceeded`, result.state);
          }
          logger_default.debug(`Running agent ${currentAgent.name} (turn ${result.state._currentTurn})`);
          let guardrailError;
          let parallelGuardrailPromise;
          if (result.state._currentTurn === 1) {
            const guardrails = __privateMethod(this, _Runner_instances, splitInputGuardrails_fn).call(this, result.state);
            if (guardrails.blocking.length > 0) {
              await __privateMethod(this, _Runner_instances, runInputGuardrails_fn).call(this, result.state, guardrails.blocking);
            }
            if (guardrails.parallel.length > 0) {
              const promise = __privateMethod(this, _Runner_instances, runInputGuardrails_fn).call(this, result.state, guardrails.parallel);
              parallelGuardrailPromise = promise.catch((err) => {
                guardrailError = err;
                return [];
              });
            }
          }
          const turnInput = serverConversationTracker ? serverConversationTracker.prepareInput(result.input, result.newItems) : getTurnInput(result.input, result.newItems);
          if (result.state._noActiveAgentRun) {
            currentAgent.emit("agent_start", result.state._context, currentAgent);
            this.emit("agent_start", result.state._context, currentAgent);
          }
          let finalResponse = void 0;
          const preparedCall = await __privateMethod(this, _Runner_instances, prepareModelCall_fn).call(this, result.state, options, artifacts, turnInput, serverConversationTracker, sessionInputUpdate);
          if (guardrailError) {
            throw guardrailError;
          }
          handedInputToModel = true;
          await persistStreamInputIfNeeded();
          for await (const event of preparedCall.model.getStreamedResponse({
            systemInstructions: preparedCall.modelInput.instructions,
            prompt: preparedCall.prompt,
            // Streaming requests should also honor explicitly chosen models.
            ...preparedCall.explictlyModelSet ? { overridePromptModel: true } : {},
            input: preparedCall.modelInput.input,
            previousResponseId: preparedCall.previousResponseId,
            conversationId: preparedCall.conversationId,
            modelSettings: preparedCall.modelSettings,
            tools: preparedCall.serializedTools,
            toolsExplicitlyProvided: preparedCall.toolsExplicitlyProvided,
            handoffs: preparedCall.serializedHandoffs,
            outputType: convertAgentOutputTypeToSerializable(currentAgent.outputType),
            tracing: getTracing(this.config.tracingDisabled, this.config.traceIncludeSensitiveData),
            signal: options.signal
          })) {
            if (guardrailError) {
              throw guardrailError;
            }
            if (event.type === "response_done") {
              const parsed = StreamEventResponseCompleted.parse(event);
              finalResponse = {
                usage: new Usage(parsed.response.usage),
                output: parsed.response.output,
                responseId: parsed.response.id
              };
            }
            if (result.cancelled) {
              return;
            }
            result._addItem(new RunRawModelStreamEvent(event));
          }
          if (parallelGuardrailPromise) {
            await parallelGuardrailPromise;
            if (guardrailError) {
              throw guardrailError;
            }
          }
          result.state._noActiveAgentRun = false;
          if (!finalResponse) {
            throw new ModelBehaviorError("Model did not produce a final response!", result.state);
          }
          result.state._lastTurnResponse = finalResponse;
          serverConversationTracker?.trackServerItems(finalResponse);
          result.state._modelResponses.push(result.state._lastTurnResponse);
          const processedResponse = processModelResponse(result.state._lastTurnResponse, currentAgent, preparedCall.tools, preparedCall.handoffs);
          result.state._lastProcessedResponse = processedResponse;
          const preToolItems = new Set(processedResponse.newItems);
          if (preToolItems.size > 0) {
            streamStepItemsToRunResult(result, processedResponse.newItems);
          }
          const turnResult = await resolveTurnAfterModelResponse(currentAgent, result.state._originalInput, result.state._generatedItems, result.state._lastTurnResponse, result.state._lastProcessedResponse, this, result.state);
          addStepToRunResult(result, turnResult, {
            skipItems: preToolItems
          });
          result.state._toolUseTracker.addToolUse(currentAgent, processedResponse.toolsUsed);
          result.state._originalInput = turnResult.originalInput;
          result.state._generatedItems = turnResult.generatedItems;
          if (turnResult.nextStep.type === "next_step_run_again") {
            result.state._currentTurnPersistedItemCount = 0;
          }
          result.state._currentStep = turnResult.nextStep;
        }
        if (result.state._currentStep.type === "next_step_final_output") {
          await __privateMethod(this, _Runner_instances, runOutputGuardrails_fn).call(this, result.state, result.state._currentStep.output);
          await persistStreamInputIfNeeded();
          if (!serverManagesConversation) {
            await saveStreamResultToSession(options.session, result);
          }
          this.emit("agent_end", result.state._context, currentAgent, result.state._currentStep.output);
          currentAgent.emit("agent_end", result.state._context, result.state._currentStep.output);
          return;
        } else if (result.state._currentStep.type === "next_step_interruption") {
          await persistStreamInputIfNeeded();
          if (!serverManagesConversation) {
            await saveStreamResultToSession(options.session, result);
          }
          return;
        } else if (result.state._currentStep.type === "next_step_handoff") {
          result.state._currentAgent = result.state._currentStep?.newAgent;
          if (result.state._currentAgentSpan) {
            result.state._currentAgentSpan.end();
            resetCurrentSpan();
          }
          result.state._currentAgentSpan = void 0;
          result._addItem(new RunAgentUpdatedStreamEvent(result.state._currentAgent));
          result.state._noActiveAgentRun = true;
          result.state._currentStep = {
            type: "next_step_run_again"
          };
        } else {
          logger_default.debug("Running next loop");
        }
      }
    } catch (error2) {
      if (handedInputToModel && !streamInputPersisted) {
        await persistStreamInputIfNeeded();
      }
      if (result.state._currentAgentSpan) {
        result.state._currentAgentSpan.setError({
          message: "Error in agent run",
          data: { error: String(error2) }
        });
      }
      throw error2;
    } finally {
      if (result.state._currentAgentSpan) {
        if (result.state._currentStep?.type !== "next_step_interruption") {
          result.state._currentAgentSpan.end();
        }
        resetCurrentSpan();
      }
    }
  };
  runIndividualStream_fn = async function(agent, input, options, ensureStreamInputPersisted, sessionInputUpdate) {
    options = options ?? {};
    return withNewSpanContext(async () => {
      const isResumedState = input instanceof RunState;
      const state = isResumedState ? input : new RunState(options.context instanceof RunContext ? options.context : new RunContext(options.context), input, agent, options.maxTurns ?? DEFAULT_MAX_TURNS);
      const result = new StreamedRunResult({
        signal: options.signal,
        state
      });
      result.maxTurns = options.maxTurns ?? state._maxTurns;
      const streamLoopPromise = __privateMethod(this, _Runner_instances, runStreamLoop_fn).call(this, result, options, isResumedState, ensureStreamInputPersisted, sessionInputUpdate).then(() => {
        result._done();
      }, (err) => {
        result._raiseError(err);
      });
      result._setStreamLoopPromise(streamLoopPromise);
      return result;
    });
  };
  runInputGuardrails_fn = async function(state, guardrailsOverride) {
    const guardrails = guardrailsOverride ?? __privateMethod(this, _Runner_instances, getInputGuardrailDefinitions_fn).call(this, state);
    if (guardrails.length > 0) {
      const guardrailArgs = {
        agent: state._currentAgent,
        input: state._originalInput,
        context: state._context
      };
      try {
        const results = await Promise.all(guardrails.map(async (guardrail) => {
          return withGuardrailSpan(async (span) => {
            const result = await guardrail.run(guardrailArgs);
            span.spanData.triggered = result.output.tripwireTriggered;
            return result;
          }, { data: { name: guardrail.name } }, state._currentAgentSpan);
        }));
        state._inputGuardrailResults.push(...results);
        for (const result of results) {
          if (result.output.tripwireTriggered) {
            if (state._currentAgentSpan) {
              state._currentAgentSpan.setError({
                message: "Guardrail tripwire triggered",
                data: { guardrail: result.guardrail.name }
              });
            }
            throw new InputGuardrailTripwireTriggered(`Input guardrail triggered: ${JSON.stringify(result.output.outputInfo)}`, result, state);
          }
        }
        return results;
      } catch (e) {
        if (e instanceof InputGuardrailTripwireTriggered) {
          throw e;
        }
        state._currentTurn--;
        throw new GuardrailExecutionError(`Input guardrail failed to complete: ${e}`, e, state);
      }
    }
    return [];
  };
  runOutputGuardrails_fn = async function(state, output) {
    const guardrails = this.outputGuardrailDefs.concat(state._currentAgent.outputGuardrails.map(defineOutputGuardrail));
    if (guardrails.length > 0) {
      const agentOutput = state._currentAgent.processFinalOutput(output);
      const runOutput = getTurnInput([], state._generatedItems);
      const guardrailArgs = {
        agent: state._currentAgent,
        agentOutput,
        context: state._context,
        details: {
          modelResponse: state._lastTurnResponse,
          output: runOutput
        }
      };
      try {
        const results = await Promise.all(guardrails.map(async (guardrail) => {
          return withGuardrailSpan(async (span) => {
            const result = await guardrail.run(guardrailArgs);
            span.spanData.triggered = result.output.tripwireTriggered;
            return result;
          }, { data: { name: guardrail.name } }, state._currentAgentSpan);
        }));
        for (const result of results) {
          if (result.output.tripwireTriggered) {
            if (state._currentAgentSpan) {
              state._currentAgentSpan.setError({
                message: "Guardrail tripwire triggered",
                data: { guardrail: result.guardrail.name }
              });
            }
            throw new OutputGuardrailTripwireTriggered(`Output guardrail triggered: ${JSON.stringify(result.output.outputInfo)}`, result, state);
          }
        }
      } catch (e) {
        if (e instanceof OutputGuardrailTripwireTriggered) {
          throw e;
        }
        throw new GuardrailExecutionError(`Output guardrail failed to complete: ${e}`, e, state);
      }
    }
  };
  prepareModelCall_fn = async function(state, options, artifacts, turnInput, serverConversationTracker, sessionInputUpdate) {
    const { model, explictlyModelSet } = await __privateMethod(this, _Runner_instances, resolveModelForAgent_fn).call(this, state._currentAgent);
    let modelSettings = {
      ...this.config.modelSettings,
      ...state._currentAgent.modelSettings
    };
    modelSettings = adjustModelSettingsForNonGPT5RunnerModel(explictlyModelSet, state._currentAgent.modelSettings, model, modelSettings);
    modelSettings = maybeResetToolChoice(state._currentAgent, state._toolUseTracker, modelSettings);
    const systemInstructions = await state._currentAgent.getSystemPrompt(state._context);
    const prompt = await state._currentAgent.getPrompt(state._context);
    const { modelInput, sourceItems, persistedItems, filterApplied } = await applyCallModelInputFilter(state._currentAgent, options.callModelInputFilter, state._context, turnInput, systemInstructions);
    serverConversationTracker?.markInputAsSent(sourceItems);
    sessionInputUpdate?.(sourceItems, filterApplied ? persistedItems : void 0);
    const previousResponseId = serverConversationTracker?.previousResponseId ?? options.previousResponseId;
    const conversationId = serverConversationTracker?.conversationId ?? options.conversationId;
    return {
      ...artifacts,
      model,
      explictlyModelSet,
      modelSettings,
      modelInput,
      prompt,
      previousResponseId,
      conversationId
    };
  };
  function getTurnInput(originalInput, generatedItems) {
    const rawItems = generatedItems.filter((item) => item.type !== "tool_approval_item").map((item) => item.rawItem);
    return [...toAgentInputList(originalInput), ...rawItems];
  }
  var DEFAULT_MAX_TURNS = 10;
  function selectModel(agentModel, runConfigModel) {
    if (typeof agentModel === "string" && agentModel !== Agent.DEFAULT_MODEL_PLACEHOLDER || agentModel) {
      return agentModel;
    }
    return runConfigModel ?? agentModel ?? Agent.DEFAULT_MODEL_PLACEHOLDER;
  }
  function getTracing(tracingDisabled, traceIncludeSensitiveData) {
    if (tracingDisabled) {
      return false;
    }
    if (traceIncludeSensitiveData) {
      return true;
    }
    return "enabled_without_data";
  }
  async function applyCallModelInputFilter(agent, callModelInputFilter, context, inputItems, systemInstructions) {
    const cloneInputItems = (items, map) => items.map((item) => {
      const cloned = structuredClone(item);
      if (map && cloned && typeof cloned === "object") {
        map.set(cloned, item);
      }
      return cloned;
    });
    const cloneMap = /* @__PURE__ */ new WeakMap();
    const originalPool = buildAgentInputPool(inputItems);
    const fallbackOriginals = [];
    for (const item of inputItems) {
      if (item && typeof item === "object") {
        fallbackOriginals.push(item);
      }
    }
    const removeFromFallback = (candidate) => {
      if (!candidate || typeof candidate !== "object") {
        return;
      }
      const index = fallbackOriginals.findIndex((original) => original === candidate);
      if (index !== -1) {
        fallbackOriginals.splice(index, 1);
      }
    };
    const takeFallbackOriginal = () => {
      const next = fallbackOriginals.shift();
      if (next) {
        removeAgentInputFromPool(originalPool, next);
      }
      return next;
    };
    const clonedBaseInput = cloneInputItems(inputItems, cloneMap);
    const base = {
      input: clonedBaseInput,
      instructions: systemInstructions
    };
    if (!callModelInputFilter) {
      return {
        modelInput: base,
        sourceItems: [...inputItems],
        persistedItems: [],
        filterApplied: false
      };
    }
    try {
      const result = await callModelInputFilter({
        modelData: base,
        agent,
        context: context.context
      });
      if (!result || !Array.isArray(result.input)) {
        throw new UserError("callModelInputFilter must return a ModelInputData object with an input array.");
      }
      const sourceItems = result.input.map((item) => {
        if (!item || typeof item !== "object") {
          return void 0;
        }
        const original = cloneMap.get(item);
        if (original) {
          removeFromFallback(original);
          removeAgentInputFromPool(originalPool, original);
          return original;
        }
        const key = getAgentInputItemKey(item);
        const matchedByContent = takeAgentInputFromPool(originalPool, key);
        if (matchedByContent) {
          removeFromFallback(matchedByContent);
          return matchedByContent;
        }
        const fallback = takeFallbackOriginal();
        if (fallback) {
          return fallback;
        }
        return void 0;
      });
      const clonedFilteredInput = cloneInputItems(result.input);
      return {
        modelInput: {
          input: clonedFilteredInput,
          instructions: typeof result.instructions === "undefined" ? systemInstructions : result.instructions
        },
        sourceItems,
        persistedItems: clonedFilteredInput.map((item) => structuredClone(item)),
        filterApplied: true
      };
    } catch (error2) {
      addErrorToCurrentSpan({
        message: "Error in callModelInputFilter",
        data: { error: String(error2) }
      });
      throw error2;
    }
  }
  var ServerConversationTracker = class {
    constructor({ conversationId, previousResponseId }) {
      // Conversation ID:
      // - https://platform.openai.com/docs/guides/conversation-state?api-mode=responses#using-the-conversations-api
      // - https://platform.openai.com/docs/api-reference/conversations/create
      __publicField(this, "conversationId");
      // Previous Response ID:
      // https://platform.openai.com/docs/guides/conversation-state?api-mode=responses#passing-context-from-the-previous-response
      __publicField(this, "previousResponseId");
      // Using this flag because WeakSet does not provide a way to check its size
      __publicField(this, "sentInitialInput", false);
      // The items already sent to the model; using WeakSet for memory efficiency
      __publicField(this, "sentItems", /* @__PURE__ */ new WeakSet());
      // The items received from the server; using WeakSet for memory efficiency
      __publicField(this, "serverItems", /* @__PURE__ */ new WeakSet());
      // Track initial input items that have not yet been sent so they can be retried on later turns.
      __publicField(this, "remainingInitialInput", null);
      this.conversationId = conversationId ?? void 0;
      this.previousResponseId = previousResponseId ?? void 0;
    }
    /**
     * Pre-populates tracker caches from an existing RunState when resuming server-managed runs.
     */
    primeFromState({ originalInput, generatedItems, modelResponses }) {
      if (this.sentInitialInput) {
        return;
      }
      for (const item of toAgentInputList(originalInput)) {
        if (item && typeof item === "object") {
          this.sentItems.add(item);
        }
      }
      this.sentInitialInput = true;
      this.remainingInitialInput = null;
      const latestResponse = modelResponses[modelResponses.length - 1];
      for (const response of modelResponses) {
        for (const item of response.output) {
          if (item && typeof item === "object") {
            this.serverItems.add(item);
          }
        }
      }
      if (!this.conversationId && latestResponse?.responseId) {
        this.previousResponseId = latestResponse.responseId;
      }
      for (const item of generatedItems) {
        const rawItem = item.rawItem;
        if (!rawItem || typeof rawItem !== "object") {
          continue;
        }
        if (this.serverItems.has(rawItem)) {
          this.sentItems.add(rawItem);
        }
      }
    }
    /**
     * Records the raw items returned by the server so future delta calculations skip them.
     * Also captures the latest response identifier to chain follow-up calls when possible.
     */
    trackServerItems(modelResponse) {
      if (!modelResponse) {
        return;
      }
      for (const item of modelResponse.output) {
        if (item && typeof item === "object") {
          this.serverItems.add(item);
        }
      }
      if (!this.conversationId && modelResponse.responseId) {
        this.previousResponseId = modelResponse.responseId;
      }
    }
    /**
     * Returns the minimum set of items that still need to be delivered to the server for the
     * current turn. This includes the original turn inputs (until acknowledged) plus any
     * newly generated items that have not yet been echoed back by the API.
     */
    prepareInput(originalInput, generatedItems) {
      const inputItems = [];
      if (!this.sentInitialInput) {
        const initialItems = toAgentInputList(originalInput);
        inputItems.push(...initialItems);
        this.remainingInitialInput = initialItems.filter((item) => Boolean(item) && typeof item === "object");
        this.sentInitialInput = true;
      } else if (this.remainingInitialInput && this.remainingInitialInput.length > 0) {
        inputItems.push(...this.remainingInitialInput);
      }
      for (const item of generatedItems) {
        if (item.type === "tool_approval_item") {
          continue;
        }
        const rawItem = item.rawItem;
        if (!rawItem || typeof rawItem !== "object") {
          continue;
        }
        if (this.sentItems.has(rawItem) || this.serverItems.has(rawItem)) {
          continue;
        }
        inputItems.push(rawItem);
      }
      return inputItems;
    }
    /**
     * Marks the provided originals as delivered so future turns do not resend them and any
     * pending initial inputs can be dropped once the server acknowledges receipt.
     */
    markInputAsSent(items) {
      if (!items.length) {
        return;
      }
      const delivered = /* @__PURE__ */ new Set();
      for (const item of items) {
        if (!item || typeof item !== "object" || delivered.has(item)) {
          continue;
        }
        delivered.add(item);
        this.sentItems.add(item);
      }
      if (!this.remainingInitialInput || this.remainingInitialInput.length === 0) {
        return;
      }
      this.remainingInitialInput = this.remainingInitialInput.filter((item) => !delivered.has(item));
      if (this.remainingInitialInput.length === 0) {
        this.remainingInitialInput = null;
      }
    }
  };
  function adjustModelSettingsForNonGPT5RunnerModel(explictlyModelSet, agentModelSettings, runnerModel, modelSettings) {
    if (
      // gpt-5 is enabled for the default model for agents
      isGpt5Default() && // explicitly set model for the agent
      explictlyModelSet && // this runner uses a non-gpt-5 model
      (typeof runnerModel !== "string" || !gpt5ReasoningSettingsRequired(runnerModel)) && (agentModelSettings.providerData?.reasoning || agentModelSettings.providerData?.text?.verbosity || agentModelSettings.providerData?.reasoning_effort)
    ) {
      const copiedModelSettings = { ...modelSettings };
      delete copiedModelSettings.providerData?.reasoning;
      delete copiedModelSettings.providerData?.text?.verbosity;
      delete copiedModelSettings.providerData?.reasoning_effort;
      if (copiedModelSettings.reasoning) {
        delete copiedModelSettings.reasoning.effort;
        delete copiedModelSettings.reasoning.summary;
      }
      if (copiedModelSettings.text) {
        delete copiedModelSettings.text.verbosity;
      }
      return copiedModelSettings;
    }
    return modelSettings;
  }
  async function prepareAgentArtifacts(state) {
    const handoffs = await state._currentAgent.getEnabledHandoffs(state._context);
    const tools = await state._currentAgent.getAllTools(state._context);
    if (!state._currentAgentSpan) {
      const handoffNames = handoffs.map((h) => h.agentName);
      state._currentAgentSpan = createAgentSpan({
        data: {
          name: state._currentAgent.name,
          handoffs: handoffNames,
          tools: tools.map((t) => t.name),
          output_type: state._currentAgent.outputSchemaName
        }
      });
      state._currentAgentSpan.start();
      setCurrentSpan(state._currentAgentSpan);
    } else {
      state._currentAgentSpan.spanData.tools = tools.map((t) => t.name);
    }
    return {
      handoffs,
      tools,
      serializedHandoffs: handoffs.map((handoff2) => serializeHandoff(handoff2)),
      serializedTools: tools.map((tool2) => serializeTool(tool2)),
      toolsExplicitlyProvided: state._currentAgent.hasExplicitToolConfig()
    };
  }
  function getAgentInputItemKey(item) {
    return JSON.stringify(item, agentInputSerializationReplacer);
  }
  function buildAgentInputPool(items) {
    const pool = /* @__PURE__ */ new Map();
    for (const item of items) {
      const key = getAgentInputItemKey(item);
      const existing = pool.get(key);
      if (existing) {
        existing.push(item);
      } else {
        pool.set(key, [item]);
      }
    }
    return pool;
  }
  function takeAgentInputFromPool(pool, key) {
    const candidates = pool.get(key);
    if (!candidates || candidates.length === 0) {
      return void 0;
    }
    const [first] = candidates;
    candidates.shift();
    if (candidates.length === 0) {
      pool.delete(key);
    }
    return first;
  }
  function removeAgentInputFromPool(pool, item) {
    const key = getAgentInputItemKey(item);
    const candidates = pool.get(key);
    if (!candidates || candidates.length === 0) {
      return;
    }
    const index = candidates.findIndex((candidate) => candidate === item);
    if (index === -1) {
      return;
    }
    candidates.splice(index, 1);
    if (candidates.length === 0) {
      pool.delete(key);
    }
  }
  function agentInputSerializationReplacer(_key, value) {
    if (value instanceof ArrayBuffer) {
      return {
        __type: "ArrayBuffer",
        data: encodeUint8ArrayToBase64(new Uint8Array(value))
      };
    }
    if (isArrayBufferView(value)) {
      const view = value;
      return {
        __type: view.constructor.name,
        data: encodeUint8ArrayToBase64(new Uint8Array(view.buffer, view.byteOffset, view.byteLength))
      };
    }
    if (isNodeBuffer(value)) {
      const view = value;
      return {
        __type: "Buffer",
        data: encodeUint8ArrayToBase64(new Uint8Array(view.buffer, view.byteOffset, view.byteLength))
      };
    }
    if (isSerializedBufferSnapshot(value)) {
      return {
        __type: "Buffer",
        data: encodeUint8ArrayToBase64(Uint8Array.from(value.data))
      };
    }
    return value;
  }
  function toAgentInputList(originalInput) {
    if (typeof originalInput === "string") {
      return [{ type: "message", role: "user", content: originalInput }];
    }
    return [...originalInput];
  }

  // node_modules/@openai/agents-core/dist/result.mjs
  var RunResultBase = class {
    constructor(state) {
      __publicField(this, "state");
      this.state = state;
    }
    /**
     * The history of the agent run. This includes the input items and the new items generated during
     * the agent run.
     *
     * This can be used as inputs for the next agent run.
     */
    get history() {
      return getTurnInput(this.input, this.newItems);
    }
    /**
     * The new items generated during the agent run. These include things like new messages, tool
     * calls and their outputs, etc.
     *
     * It does not include information about the agents and instead represents the model data.
     *
     * For the output including the agents, use the `newItems` property.
     */
    get output() {
      return getTurnInput([], this.newItems);
    }
    /**
     * A copy of the original input items.
     */
    get input() {
      return this.state._originalInput;
    }
    /**
     * The run items generated during the agent run. This associates the model data with the agents.
     *
     * For the model data that can be used as inputs for the next agent run, use the `output` property.
     */
    get newItems() {
      return this.state._generatedItems;
    }
    /**
     * The raw LLM responses generated by the model during the agent run.
     */
    get rawResponses() {
      return this.state._modelResponses;
    }
    /**
     * The last response ID generated by the model during the agent run.
     */
    get lastResponseId() {
      const responses = this.rawResponses;
      return responses && responses.length > 0 ? responses[responses.length - 1].responseId : void 0;
    }
    /**
     * The last agent that was run
     */
    get lastAgent() {
      return this.state._currentAgent;
    }
    /**
     * Guardrail results for the input messages.
     */
    get inputGuardrailResults() {
      return this.state._inputGuardrailResults;
    }
    /**
     * Guardrail results for the final output of the agent.
     */
    get outputGuardrailResults() {
      return this.state._outputGuardrailResults;
    }
    /**
     * Any interruptions that occurred during the agent run for example for tool approvals.
     */
    get interruptions() {
      if (this.state._currentStep?.type === "next_step_interruption") {
        return this.state._currentStep.data.interruptions;
      }
      return [];
    }
    /**
     * The final output of the agent. If the output type was set to anything other than `text`,
     * this will be parsed either as JSON or using the Zod schema you provided.
     */
    get finalOutput() {
      if (this.state._currentStep?.type === "next_step_final_output") {
        return this.state._currentAgent.processFinalOutput(this.state._currentStep.output);
      }
      logger_default.warn("Accessed finalOutput before agent run is completed.");
      return void 0;
    }
  };
  var RunResult = class extends RunResultBase {
    constructor(state) {
      super(state);
    }
  };
  var _error, _signal, _readableController, _readableStream, _completedPromise, _completedPromiseResolve, _completedPromiseReject, _cancelled, _streamLoopPromise;
  var StreamedRunResult = class extends RunResultBase {
    constructor(result = {}) {
      super(result.state);
      /**
       * The current turn number
       */
      __publicField(this, "currentTurn", 0);
      /**
       * The maximum number of turns that can be run
       */
      __publicField(this, "maxTurns");
      __privateAdd(this, _error, null);
      __privateAdd(this, _signal);
      __privateAdd(this, _readableController);
      __privateAdd(this, _readableStream);
      __privateAdd(this, _completedPromise);
      __privateAdd(this, _completedPromiseResolve);
      __privateAdd(this, _completedPromiseReject);
      __privateAdd(this, _cancelled, false);
      __privateAdd(this, _streamLoopPromise);
      __privateSet(this, _signal, result.signal);
      __privateSet(this, _readableStream, new ReadableStream({
        start: (controller) => {
          __privateSet(this, _readableController, controller);
        },
        cancel: () => {
          __privateSet(this, _cancelled, true);
        }
      }));
      __privateSet(this, _completedPromise, new Promise((resolve, reject) => {
        __privateSet(this, _completedPromiseResolve, resolve);
        __privateSet(this, _completedPromiseReject, reject);
      }));
      if (__privateGet(this, _signal)) {
        const handleAbort = () => {
          var _a;
          if (__privateGet(this, _cancelled)) {
            return;
          }
          __privateSet(this, _cancelled, true);
          const controller = __privateGet(this, _readableController);
          __privateSet(this, _readableController, void 0);
          if (__privateGet(this, _readableStream).locked) {
            if (controller) {
              try {
                controller.close();
              } catch (err) {
                logger_default.debug(`Failed to close readable stream on abort: ${err}`);
              }
            }
          } else {
            void __privateGet(this, _readableStream).cancel(__privateGet(this, _signal)?.reason).catch((err) => {
              logger_default.debug(`Failed to cancel readable stream on abort: ${err}`);
            });
          }
          (_a = __privateGet(this, _completedPromiseResolve)) == null ? void 0 : _a.call(this);
        };
        if (__privateGet(this, _signal).aborted) {
          handleAbort();
        } else {
          __privateGet(this, _signal).addEventListener("abort", handleAbort, { once: true });
        }
      }
    }
    /**
     * The current agent that is running
     */
    get currentAgent() {
      return this.lastAgent;
    }
    /**
     * @internal
     * Adds an item to the stream of output items
     */
    _addItem(item) {
      if (!this.cancelled) {
        __privateGet(this, _readableController)?.enqueue(item);
      }
    }
    /**
     * @internal
     * Indicates that the stream has been completed
     */
    _done() {
      var _a;
      if (!this.cancelled && __privateGet(this, _readableController)) {
        __privateGet(this, _readableController).close();
        __privateSet(this, _readableController, void 0);
        (_a = __privateGet(this, _completedPromiseResolve)) == null ? void 0 : _a.call(this);
      }
    }
    /**
     * @internal
     * Handles an error in the stream loop.
     */
    _raiseError(err) {
      var _a;
      if (!this.cancelled && __privateGet(this, _readableController)) {
        __privateGet(this, _readableController).error(err);
        __privateSet(this, _readableController, void 0);
      }
      __privateSet(this, _error, err);
      (_a = __privateGet(this, _completedPromiseReject)) == null ? void 0 : _a.call(this, err);
      __privateGet(this, _completedPromise).catch((e) => {
        logger_default.debug(`Resulted in an error: ${e}`);
      });
    }
    /**
     * Returns true if the stream has been cancelled.
     */
    get cancelled() {
      return __privateGet(this, _cancelled);
    }
    /**
     * Returns the underlying readable stream.
     * @returns A readable stream of the agent run.
     */
    toStream() {
      return __privateGet(this, _readableStream);
    }
    /**
     * Await this promise to ensure that the stream has been completed if you are not consuming the
     * stream directly.
     */
    get completed() {
      return __privateGet(this, _completedPromise);
    }
    /**
     * Error thrown during the run, if any.
     */
    get error() {
      return __privateGet(this, _error);
    }
    toTextStream(options = {}) {
      const stream = __privateGet(this, _readableStream).pipeThrough(new TransformStream({
        transform(event, controller) {
          if (event.type === "raw_model_stream_event" && event.data.type === "output_text_delta") {
            const item = StreamEventTextStream.parse(event.data);
            controller.enqueue(item.delta);
          }
        }
      }));
      if (options.compatibleWithNodeStreams) {
        return Readable.fromWeb(stream);
      }
      return stream;
    }
    [Symbol.asyncIterator]() {
      return __privateGet(this, _readableStream)[Symbol.asyncIterator]();
    }
    /**
     * @internal
     * Sets the stream loop promise that completes when the internal stream loop finishes.
     * This is used to defer trace end until all agent work is complete.
     */
    _setStreamLoopPromise(promise) {
      __privateSet(this, _streamLoopPromise, promise);
    }
    /**
     * @internal
     * Returns a promise that resolves when the stream loop completes.
     * This is used by the tracing system to wait for all agent work before ending the trace.
     */
    _getStreamLoopPromise() {
      return __privateGet(this, _streamLoopPromise);
    }
  };
  _error = new WeakMap();
  _signal = new WeakMap();
  _readableController = new WeakMap();
  _readableStream = new WeakMap();
  _completedPromise = new WeakMap();
  _completedPromiseResolve = new WeakMap();
  _completedPromiseReject = new WeakMap();
  _cancelled = new WeakMap();
  _streamLoopPromise = new WeakMap();

  // node_modules/@openai/agents-core/dist/tracing/context.mjs
  var _contextAsyncLocalStorage;
  function getContextAsyncLocalStorage() {
    _contextAsyncLocalStorage ?? (_contextAsyncLocalStorage = new AsyncLocalStorage());
    return _contextAsyncLocalStorage;
  }
  function getCurrentTrace() {
    const currentTrace = getContextAsyncLocalStorage().getStore();
    if (currentTrace?.trace) {
      return currentTrace.trace;
    }
    return null;
  }
  function getCurrentSpan() {
    const currentSpan = getContextAsyncLocalStorage().getStore();
    if (currentSpan?.span) {
      return currentSpan.span;
    }
    return null;
  }
  function _wrapFunctionWithTraceLifecycle(fn) {
    return async () => {
      const trace = getCurrentTrace();
      if (!trace) {
        throw new Error("No trace found");
      }
      await trace.start();
      const result = await fn(trace);
      if (result instanceof StreamedRunResult) {
        const streamLoopPromise = result._getStreamLoopPromise();
        if (streamLoopPromise) {
          streamLoopPromise.finally(() => trace.end());
          return result;
        }
      }
      await trace.end();
      return result;
    };
  }
  async function withTrace(trace, fn, options = {}) {
    const newTrace = typeof trace === "string" ? getGlobalTraceProvider().createTrace({
      ...options,
      name: trace
    }) : trace;
    return getContextAsyncLocalStorage().run({ trace: newTrace }, _wrapFunctionWithTraceLifecycle(fn));
  }
  async function getOrCreateTrace(fn, options = {}) {
    const currentTrace = getCurrentTrace();
    if (currentTrace) {
      return await fn();
    }
    const newTrace = getGlobalTraceProvider().createTrace(options);
    return getContextAsyncLocalStorage().run({ trace: newTrace }, _wrapFunctionWithTraceLifecycle(fn));
  }
  function setCurrentSpan(span) {
    const context = getContextAsyncLocalStorage().getStore();
    if (!context) {
      throw new Error("No existing trace found");
    }
    if (context.span) {
      context.span.previousSpan = context.previousSpan;
      context.previousSpan = context.span;
    }
    context.span = span;
    getContextAsyncLocalStorage().enterWith(context);
  }
  function resetCurrentSpan() {
    const context = getContextAsyncLocalStorage().getStore();
    if (context) {
      context.span = context.previousSpan;
      context.previousSpan = context.previousSpan?.previousSpan;
      getContextAsyncLocalStorage().enterWith(context);
    }
  }
  function addErrorToCurrentSpan(spanError) {
    const currentSpan = getCurrentSpan();
    if (currentSpan) {
      currentSpan.setError(spanError);
    }
  }
  function cloneCurrentContext(context) {
    return {
      trace: context.trace?.clone(),
      span: context.span?.clone(),
      previousSpan: context.previousSpan?.clone()
    };
  }
  function withNewSpanContext(fn) {
    const currentContext = getContextAsyncLocalStorage().getStore();
    if (!currentContext) {
      throw new Error("No existing trace found");
    }
    const copyOfContext = cloneCurrentContext(currentContext);
    return getContextAsyncLocalStorage().run(copyOfContext, fn);
  }

  // node_modules/@openai/agents-core/dist/tracing/processor.mjs
  var ConsoleSpanExporter = class {
    async export(items) {
      if (tracing.disabled) {
        logger_default.debug("Tracing is disabled. Skipping export");
        return;
      }
      for (const item of items) {
        if (item.type === "trace") {
          console.log(`[Exporter] Export trace traceId=${item.traceId} name=${item.name}${item.groupId ? ` groupId=${item.groupId}` : ""}`);
        } else {
          console.log(`[Exporter] Export span: ${JSON.stringify(item)}`);
        }
      }
    }
  };
  var _maxQueueSize, _maxBatchSize, _scheduleDelay, _exportTriggerSize, _exporter, _buffer, _timer, _timeout, _exportInProgress, _timeoutAbortController, _BatchTraceProcessor_instances, safeAddItem_fn, runExportLoop_fn, exportBatches_fn;
  var BatchTraceProcessor = class {
    constructor(exporter, {
      maxQueueSize = 1e3,
      maxBatchSize = 100,
      scheduleDelay = 5e3,
      // 5 seconds
      exportTriggerRatio = 0.8
    } = {}) {
      __privateAdd(this, _BatchTraceProcessor_instances);
      __privateAdd(this, _maxQueueSize);
      __privateAdd(this, _maxBatchSize);
      __privateAdd(this, _scheduleDelay);
      __privateAdd(this, _exportTriggerSize);
      __privateAdd(this, _exporter);
      __privateAdd(this, _buffer, []);
      __privateAdd(this, _timer);
      __privateAdd(this, _timeout, null);
      __privateAdd(this, _exportInProgress, false);
      __privateAdd(this, _timeoutAbortController, null);
      __privateSet(this, _maxQueueSize, maxQueueSize);
      __privateSet(this, _maxBatchSize, maxBatchSize);
      __privateSet(this, _scheduleDelay, scheduleDelay);
      __privateSet(this, _exportTriggerSize, maxQueueSize * exportTriggerRatio);
      __privateSet(this, _exporter, exporter);
      __privateSet(this, _timer, timer);
      if (isTracingLoopRunningByDefault()) {
        this.start();
      } else {
        logger_default.debug("Automatic trace export loop is not supported in this environment. You need to manually call `getGlobalTraceProvider().forceFlush()` to export traces.");
      }
    }
    start() {
      __privateSet(this, _timeoutAbortController, new AbortController());
      __privateMethod(this, _BatchTraceProcessor_instances, runExportLoop_fn).call(this);
    }
    async onTraceStart(trace) {
      await __privateMethod(this, _BatchTraceProcessor_instances, safeAddItem_fn).call(this, trace);
    }
    async onTraceEnd(_trace) {
    }
    async onSpanStart(_span) {
    }
    async onSpanEnd(span) {
      await __privateMethod(this, _BatchTraceProcessor_instances, safeAddItem_fn).call(this, span);
    }
    async shutdown(timeout) {
      if (timeout) {
        __privateGet(this, _timer).setTimeout(() => {
          __privateGet(this, _timeoutAbortController)?.abort();
        }, timeout);
      }
      logger_default.debug("Shutting down gracefully");
      while (__privateGet(this, _buffer).length > 0) {
        logger_default.debug(`Waiting for buffer to empty. Items left: ${__privateGet(this, _buffer).length}`);
        if (!__privateGet(this, _exportInProgress)) {
          await __privateMethod(this, _BatchTraceProcessor_instances, exportBatches_fn).call(this, true);
        }
        if (__privateGet(this, _timeoutAbortController)?.signal.aborted) {
          logger_default.debug("Timeout reached, force flushing");
          await __privateMethod(this, _BatchTraceProcessor_instances, exportBatches_fn).call(this, true);
          break;
        }
        await new Promise((resolve) => __privateGet(this, _timer).setTimeout(resolve, 500));
      }
      logger_default.debug("Buffer empty. Exiting");
      if (__privateGet(this, _timer) && __privateGet(this, _timeout)) {
        __privateGet(this, _timer).clearTimeout(__privateGet(this, _timeout));
      }
    }
    async forceFlush() {
      if (__privateGet(this, _buffer).length > 0) {
        await __privateMethod(this, _BatchTraceProcessor_instances, exportBatches_fn).call(this, true);
      }
    }
  };
  _maxQueueSize = new WeakMap();
  _maxBatchSize = new WeakMap();
  _scheduleDelay = new WeakMap();
  _exportTriggerSize = new WeakMap();
  _exporter = new WeakMap();
  _buffer = new WeakMap();
  _timer = new WeakMap();
  _timeout = new WeakMap();
  _exportInProgress = new WeakMap();
  _timeoutAbortController = new WeakMap();
  _BatchTraceProcessor_instances = new WeakSet();
  safeAddItem_fn = async function(item) {
    if (__privateGet(this, _buffer).length + 1 > __privateGet(this, _maxQueueSize)) {
      logger_default.error("Dropping trace because buffer is full");
      return;
    }
    __privateGet(this, _buffer).push(item);
    if (__privateGet(this, _buffer).length > __privateGet(this, _exportTriggerSize)) {
      await __privateMethod(this, _BatchTraceProcessor_instances, exportBatches_fn).call(this);
    }
  };
  runExportLoop_fn = function() {
    __privateSet(this, _timeout, __privateGet(this, _timer).setTimeout(async () => {
      await __privateMethod(this, _BatchTraceProcessor_instances, exportBatches_fn).call(this);
      __privateMethod(this, _BatchTraceProcessor_instances, runExportLoop_fn).call(this);
    }, __privateGet(this, _scheduleDelay)));
    if (typeof __privateGet(this, _timeout).unref === "function") {
      __privateGet(this, _timeout).unref();
    }
  };
  exportBatches_fn = async function(force = false) {
    if (__privateGet(this, _buffer).length === 0) {
      return;
    }
    logger_default.debug(`Exporting batches. Force: ${force}. Buffer size: ${__privateGet(this, _buffer).length}`);
    if (force || __privateGet(this, _buffer).length < __privateGet(this, _maxBatchSize)) {
      const toExport = [...__privateGet(this, _buffer)];
      __privateSet(this, _buffer, []);
      __privateSet(this, _exportInProgress, true);
      await __privateGet(this, _exporter).export(toExport);
      __privateSet(this, _exportInProgress, false);
    } else if (__privateGet(this, _buffer).length > 0) {
      const batch = __privateGet(this, _buffer).splice(0, __privateGet(this, _maxBatchSize));
      __privateSet(this, _exportInProgress, true);
      await __privateGet(this, _exporter).export(batch);
      __privateSet(this, _exportInProgress, false);
    }
  };
  var _processors;
  var MultiTracingProcessor = class {
    constructor() {
      __privateAdd(this, _processors, []);
    }
    start() {
      for (const processor of __privateGet(this, _processors)) {
        if (processor.start) {
          processor.start();
        }
      }
    }
    addTraceProcessor(processor) {
      __privateGet(this, _processors).push(processor);
    }
    setProcessors(processors) {
      logger_default.debug("Shutting down old processors");
      for (const processor of __privateGet(this, _processors)) {
        processor.shutdown();
      }
      __privateSet(this, _processors, processors);
    }
    async onTraceStart(trace) {
      for (const processor of __privateGet(this, _processors)) {
        await processor.onTraceStart(trace);
      }
    }
    async onTraceEnd(trace) {
      for (const processor of __privateGet(this, _processors)) {
        await processor.onTraceEnd(trace);
      }
    }
    async onSpanStart(span) {
      for (const processor of __privateGet(this, _processors)) {
        await processor.onSpanStart(span);
      }
    }
    async onSpanEnd(span) {
      for (const processor of __privateGet(this, _processors)) {
        await processor.onSpanEnd(span);
      }
    }
    async shutdown(timeout) {
      for (const processor of __privateGet(this, _processors)) {
        await processor.shutdown(timeout);
      }
    }
    async forceFlush() {
      for (const processor of __privateGet(this, _processors)) {
        await processor.forceFlush();
      }
    }
  };
  _processors = new WeakMap();
  var _defaultExporter = null;
  var _defaultProcessor = null;
  function defaultExporter() {
    if (!_defaultExporter) {
      _defaultExporter = new ConsoleSpanExporter();
    }
    return _defaultExporter;
  }
  function defaultProcessor() {
    if (!_defaultProcessor) {
      _defaultProcessor = new BatchTraceProcessor(defaultExporter());
    }
    return _defaultProcessor;
  }

  // node_modules/@openai/agents-core/dist/tracing/utils.mjs
  function timeIso() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
  function generateTraceId() {
    return `trace_${randomUUID().replace(/-/g, "")}`;
  }
  function generateSpanId() {
    return `span_${randomUUID().replace(/-/g, "").slice(0, 24)}`;
  }
  function removePrivateFields(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !key.startsWith("_")));
  }

  // node_modules/@openai/agents-core/dist/tracing/spans.mjs
  var _data, _traceId, _spanId, _parentId, _processor, _startedAt, _endedAt, _error2, _previousSpan;
  var _Span = class _Span {
    constructor(options, processor) {
      __publicField(this, "type", "trace.span");
      __privateAdd(this, _data);
      __privateAdd(this, _traceId);
      __privateAdd(this, _spanId);
      __privateAdd(this, _parentId);
      __privateAdd(this, _processor);
      __privateAdd(this, _startedAt);
      __privateAdd(this, _endedAt);
      __privateAdd(this, _error2);
      __privateAdd(this, _previousSpan);
      __privateSet(this, _traceId, options.traceId);
      __privateSet(this, _spanId, options.spanId ?? generateSpanId());
      __privateSet(this, _data, options.data);
      __privateSet(this, _processor, processor);
      __privateSet(this, _parentId, options.parentId ?? null);
      __privateSet(this, _error2, options.error ?? null);
      __privateSet(this, _startedAt, options.startedAt ?? null);
      __privateSet(this, _endedAt, options.endedAt ?? null);
    }
    get traceId() {
      return __privateGet(this, _traceId);
    }
    get spanData() {
      return __privateGet(this, _data);
    }
    get spanId() {
      return __privateGet(this, _spanId);
    }
    get parentId() {
      return __privateGet(this, _parentId);
    }
    get previousSpan() {
      return __privateGet(this, _previousSpan);
    }
    set previousSpan(span) {
      __privateSet(this, _previousSpan, span);
    }
    start() {
      if (__privateGet(this, _startedAt)) {
        logger_default.warn("Span already started");
        return;
      }
      __privateSet(this, _startedAt, timeIso());
      __privateGet(this, _processor).onSpanStart(this);
    }
    end() {
      if (__privateGet(this, _endedAt)) {
        logger_default.debug("Span already finished", this.spanData);
        return;
      }
      __privateSet(this, _endedAt, timeIso());
      __privateGet(this, _processor).onSpanEnd(this);
    }
    setError(error2) {
      __privateSet(this, _error2, error2);
    }
    get error() {
      return __privateGet(this, _error2);
    }
    get startedAt() {
      return __privateGet(this, _startedAt);
    }
    get endedAt() {
      return __privateGet(this, _endedAt);
    }
    clone() {
      const span = new _Span({
        traceId: this.traceId,
        spanId: this.spanId,
        parentId: this.parentId ?? void 0,
        data: this.spanData,
        startedAt: __privateGet(this, _startedAt) ?? void 0,
        endedAt: __privateGet(this, _endedAt) ?? void 0,
        error: __privateGet(this, _error2) ?? void 0
      }, __privateGet(this, _processor));
      span.previousSpan = this.previousSpan?.clone();
      return span;
    }
    toJSON() {
      return {
        object: this.type,
        id: this.spanId,
        trace_id: this.traceId,
        parent_id: this.parentId,
        started_at: this.startedAt,
        ended_at: this.endedAt,
        span_data: removePrivateFields(this.spanData),
        error: this.error
      };
    }
  };
  _data = new WeakMap();
  _traceId = new WeakMap();
  _spanId = new WeakMap();
  _parentId = new WeakMap();
  _processor = new WeakMap();
  _startedAt = new WeakMap();
  _endedAt = new WeakMap();
  _error2 = new WeakMap();
  _previousSpan = new WeakMap();
  var Span = _Span;
  var NoopSpan = class extends Span {
    constructor(data, processor) {
      super({ traceId: "no-op", spanId: "no-op", data }, processor);
    }
    start() {
      return;
    }
    end() {
      return;
    }
    setError() {
      return;
    }
    toJSON() {
      return null;
    }
  };

  // node_modules/@openai/agents-core/dist/tracing/traces.mjs
  var _processor2, _started;
  var _Trace = class _Trace {
    constructor(options, processor) {
      __publicField(this, "type", "trace");
      __publicField(this, "traceId");
      __publicField(this, "name");
      __publicField(this, "groupId", null);
      __publicField(this, "metadata");
      __privateAdd(this, _processor2);
      __privateAdd(this, _started);
      this.traceId = options.traceId ?? generateTraceId();
      this.name = options.name ?? "Agent workflow";
      this.groupId = options.groupId ?? null;
      this.metadata = options.metadata ?? {};
      __privateSet(this, _processor2, processor ?? defaultProcessor());
      __privateSet(this, _started, options.started ?? false);
    }
    async start() {
      if (__privateGet(this, _started)) {
        return;
      }
      __privateSet(this, _started, true);
      await __privateGet(this, _processor2).onTraceStart(this);
    }
    async end() {
      if (!__privateGet(this, _started)) {
        return;
      }
      __privateSet(this, _started, false);
      await __privateGet(this, _processor2).onTraceEnd(this);
    }
    clone() {
      return new _Trace({
        traceId: this.traceId,
        name: this.name,
        groupId: this.groupId ?? void 0,
        metadata: this.metadata,
        started: __privateGet(this, _started)
      });
    }
    toJSON() {
      return {
        object: this.type,
        id: this.traceId,
        workflow_name: this.name,
        group_id: this.groupId,
        metadata: this.metadata
      };
    }
  };
  _processor2 = new WeakMap();
  _started = new WeakMap();
  var Trace = _Trace;
  var NoopTrace = class extends Trace {
    constructor() {
      super({});
    }
    async start() {
      return;
    }
    async end() {
      return;
    }
    toJSON() {
      return null;
    }
  };

  // node_modules/@openai/agents-core/dist/tracing/provider.mjs
  var _multiProcessor, _disabled, _TraceProvider_instances, addCleanupListeners_fn;
  var TraceProvider = class {
    constructor() {
      __privateAdd(this, _TraceProvider_instances);
      __privateAdd(this, _multiProcessor);
      __privateAdd(this, _disabled);
      __privateSet(this, _multiProcessor, new MultiTracingProcessor());
      __privateSet(this, _disabled, tracing.disabled);
      __privateMethod(this, _TraceProvider_instances, addCleanupListeners_fn).call(this);
    }
    /**
     * Add a processor to the list of processors. Each processor will receive all traces/spans.
     *
     * @param processor - The processor to add.
     */
    registerProcessor(processor) {
      __privateGet(this, _multiProcessor).addTraceProcessor(processor);
    }
    /**
     * Set the list of processors. This will replace any existing processors.
     *
     * @param processors - The list of processors to set.
     */
    setProcessors(processors) {
      __privateGet(this, _multiProcessor).setProcessors(processors);
    }
    /**
     * Get the current trace.
     *
     * @returns The current trace.
     */
    getCurrentTrace() {
      return getCurrentTrace();
    }
    getCurrentSpan() {
      return getCurrentSpan();
    }
    setDisabled(disabled) {
      __privateSet(this, _disabled, disabled);
    }
    startExportLoop() {
      __privateGet(this, _multiProcessor).start();
    }
    createTrace(traceOptions) {
      if (__privateGet(this, _disabled)) {
        logger_default.debug("Tracing is disabled, Not creating trace %o", traceOptions);
        return new NoopTrace();
      }
      const traceId = traceOptions.traceId ?? generateTraceId();
      const name = traceOptions.name ?? "Agent workflow";
      logger_default.debug("Creating trace %s with name %s", traceId, name);
      return new Trace({ ...traceOptions, name, traceId }, __privateGet(this, _multiProcessor));
    }
    createSpan(spanOptions, parent) {
      if (__privateGet(this, _disabled) || spanOptions.disabled) {
        logger_default.debug("Tracing is disabled, Not creating span %o", spanOptions);
        return new NoopSpan(spanOptions.data, __privateGet(this, _multiProcessor));
      }
      let parentId;
      let traceId;
      if (!parent) {
        const currentTrace = getCurrentTrace();
        const currentSpan = getCurrentSpan();
        if (!currentTrace) {
          logger_default.error("No active trace. Make sure to start a trace with `withTrace()` first. Returning NoopSpan.");
          return new NoopSpan(spanOptions.data, __privateGet(this, _multiProcessor));
        }
        if (currentSpan instanceof NoopSpan || currentTrace instanceof NoopTrace) {
          logger_default.debug(`Parent ${currentSpan} or ${currentTrace} is no-op, returning NoopSpan`);
          return new NoopSpan(spanOptions.data, __privateGet(this, _multiProcessor));
        }
        traceId = currentTrace.traceId;
        if (currentSpan) {
          logger_default.debug("Using parent span %s", currentSpan.spanId);
          parentId = currentSpan.spanId;
        } else {
          logger_default.debug("No parent span, using current trace %s", currentTrace.traceId);
        }
      } else if (parent instanceof Trace) {
        if (parent instanceof NoopTrace) {
          logger_default.debug("Parent trace is no-op, returning NoopSpan");
          return new NoopSpan(spanOptions.data, __privateGet(this, _multiProcessor));
        }
        traceId = parent.traceId;
      } else if (parent instanceof Span) {
        if (parent instanceof NoopSpan) {
          logger_default.debug("Parent span is no-op, returning NoopSpan");
          return new NoopSpan(spanOptions.data, __privateGet(this, _multiProcessor));
        }
        parentId = parent.spanId;
        traceId = parent.traceId;
      }
      if (!traceId) {
        logger_default.error("No traceId found. Make sure to start a trace with `withTrace()` first. Returning NoopSpan.");
        return new NoopSpan(spanOptions.data, __privateGet(this, _multiProcessor));
      }
      logger_default.debug(`Creating span ${JSON.stringify(spanOptions.data)} with id ${spanOptions.spanId ?? traceId}`);
      return new Span({
        ...spanOptions,
        traceId,
        parentId
      }, __privateGet(this, _multiProcessor));
    }
    async shutdown(timeout) {
      try {
        logger_default.debug("Shutting down tracing provider");
        await __privateGet(this, _multiProcessor).shutdown(timeout);
      } catch (error2) {
        logger_default.error("Error shutting down tracing provider %o", error2);
      }
    }
    async forceFlush() {
      await __privateGet(this, _multiProcessor).forceFlush();
    }
  };
  _multiProcessor = new WeakMap();
  _disabled = new WeakMap();
  _TraceProvider_instances = new WeakSet();
  /** Adds listeners to `process` to ensure `shutdown` occurs before exit. */
  addCleanupListeners_fn = function() {
    if (typeof process !== "undefined" && typeof process.on === "function") {
      const cleanup = async () => {
        const timeout = setTimeout(() => {
          console.warn("Cleanup timeout, forcing exit");
          process.exit(1);
        }, 5e3);
        try {
          await this.shutdown();
        } finally {
          clearTimeout(timeout);
        }
      };
      process.on("beforeExit", cleanup);
      process.on("SIGINT", async () => {
        await cleanup();
        if (!hasOtherListenersForSignals("SIGINT")) {
          process.exit(130);
        }
      });
      process.on("SIGTERM", async () => {
        await cleanup();
        if (!hasOtherListenersForSignals("SIGTERM")) {
          process.exit(0);
        }
      });
      process.on("unhandledRejection", async (reason, promise) => {
        logger_default.error("Unhandled rejection", reason, promise);
        await cleanup();
        if (!hasOtherListenersForEvents("unhandledRejection")) {
          process.exit(1);
        }
      });
    }
  };
  function hasOtherListenersForSignals(event) {
    return process.listeners(event).length > 1;
  }
  function hasOtherListenersForEvents(event) {
    return process.listeners(event).length > 1;
  }
  var GLOBAL_TRACE_PROVIDER = void 0;
  function getGlobalTraceProvider() {
    if (!GLOBAL_TRACE_PROVIDER) {
      GLOBAL_TRACE_PROVIDER = new TraceProvider();
    }
    return GLOBAL_TRACE_PROVIDER;
  }

  // node_modules/@openai/agents-core/dist/tracing/index.mjs
  function addTraceProcessor(processor) {
    getGlobalTraceProvider().registerProcessor(processor);
  }

  // node_modules/@openai/agents-core/dist/index.mjs
  addTraceProcessor(defaultProcessor());

  // node_modules/@openai/agents-realtime/dist/utils.mjs
  function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
  function arrayBufferToBase64(arrayBuffer) {
    const binaryString = String.fromCharCode(...new Uint8Array(arrayBuffer));
    return btoa(binaryString);
  }
  function getLastTextFromAudioOutputMessage(item) {
    if (typeof item === "undefined" || item === null || typeof item !== "object" || !("type" in item) || typeof item.type !== "string" || !item.type) {
      return void 0;
    }
    if (item.type !== "message") {
      return void 0;
    }
    if (!("content" in item) || !Array.isArray(item.content) || item.content.length < 1) {
      return void 0;
    }
    const lastContentItem = item.content[item.content.length - 1];
    if (!("type" in lastContentItem) || typeof lastContentItem.type !== "string") {
      return void 0;
    }
    if (lastContentItem.type === "output_text") {
      return typeof lastContentItem.text === "string" ? lastContentItem.text : void 0;
    }
    if (lastContentItem.type === "output_audio") {
      return typeof lastContentItem.transcript === "string" ? lastContentItem.transcript : void 0;
    }
    return void 0;
  }
  function diffRealtimeHistory(oldHistory, newHistory) {
    const removals = oldHistory.filter((item) => !newHistory.some((newItem) => newItem.itemId === item.itemId));
    const additions = newHistory.filter((item) => !oldHistory.some((oldItem) => oldItem.itemId === item.itemId));
    const updates = newHistory.filter((item) => oldHistory.some((oldItem) => oldItem.itemId === item.itemId && JSON.stringify(oldItem) !== JSON.stringify(item)));
    return {
      removals,
      additions,
      updates
    };
  }
  function hasWebRTCSupport() {
    if (typeof window === "undefined") {
      return false;
    }
    return typeof window["RTCPeerConnection"] !== "undefined";
  }
  function removeAudioFromContent(item) {
    if (item.role === "system") {
      return item;
    }
    if (item.role === "assistant") {
      return {
        ...item,
        content: item.content.map((entry) => {
          if (entry.type === "output_audio") {
            return {
              ...entry,
              audio: null
            };
          }
          return entry;
        })
      };
    }
    if (item.role === "user") {
      return {
        ...item,
        content: item.content.map((entry) => {
          if (entry.type === "input_audio") {
            return {
              ...entry,
              audio: null
            };
          }
          return entry;
        })
      };
    }
    return item;
  }
  function preserveAssistantAudioTranscripts(existing, incoming) {
    if (existing.role !== "assistant" || incoming.role !== "assistant") {
      return incoming;
    }
    const mergedContent = incoming.content.map((entry, index) => {
      if (entry.type !== "output_audio") {
        return entry;
      }
      const transcriptMissing = typeof entry.transcript !== "string" || entry.transcript.length === 0;
      if (!transcriptMissing) {
        return entry;
      }
      const previousEntry = existing.content[index];
      if (previousEntry && previousEntry.type === "output_audio" && typeof previousEntry.transcript === "string" && previousEntry.transcript.length > 0) {
        return {
          ...entry,
          transcript: previousEntry.transcript
        };
      }
      return entry;
    });
    return {
      ...incoming,
      content: mergedContent
    };
  }
  function updateRealtimeHistory(history, event, shouldIncludeAudioData) {
    if (event.type === "conversation.item.input_audio_transcription.completed") {
      return history.map((item) => {
        if (item.itemId === event.item_id && item.type === "message" && "role" in item && item.role === "user") {
          const updatedContent = item.content.map((entry) => {
            if (entry.type === "input_audio") {
              return {
                ...entry,
                transcript: event.transcript
              };
            }
            return entry;
          });
          return {
            ...item,
            content: updatedContent,
            status: "completed"
          };
        }
        return item;
      });
    }
    const newEvent = !shouldIncludeAudioData && event.type === "message" ? removeAudioFromContent(event) : event;
    const existingIndex = history.findIndex((item) => item.itemId === event.itemId);
    if (existingIndex !== -1) {
      const existingItem = history[existingIndex];
      const mergedEvent = newEvent.type === "message" && existingItem.type === "message" ? preserveAssistantAudioTranscripts(existingItem, newEvent) : newEvent;
      return history.map((item, idx) => {
        if (idx === existingIndex) {
          return mergedEvent;
        }
        if (!shouldIncludeAudioData && item.type === "message") {
          return removeAudioFromContent(item);
        }
        return item;
      });
    } else if (event.previousItemId) {
      const prevIndex = history.findIndex((item) => item.itemId === event.previousItemId);
      if (prevIndex !== -1) {
        return [
          ...history.slice(0, prevIndex + 1),
          newEvent,
          ...history.slice(prevIndex + 1)
        ];
      } else {
        return [...history, newEvent];
      }
    } else {
      return [...history, newEvent];
    }
  }
  var HEADERS = {
    "User-Agent": `Agents/JavaScript ${metadata_default.version}`,
    "X-OpenAI-Agents-SDK": `openai-agents-sdk.${metadata_default.version}`
  };
  var WEBSOCKET_META = `openai-agents-sdk.${metadata_default.version}`;
  function realtimeApprovalItemToApprovalItem(agent, item) {
    const { name, arguments: args, ...rest } = item;
    return new RunToolApprovalItem({
      type: "hosted_tool_call",
      name,
      arguments: JSON.stringify(args),
      status: "in_progress",
      providerData: {
        ...rest
      }
    }, agent);
  }
  function approvalItemToRealtimeApprovalItem(item) {
    if (item.rawItem.type !== "function_call" && item.rawItem.type !== "hosted_tool_call") {
      throw new Error("Invalid approval item type for Realtime MCP approval request");
    }
    const { name, arguments: args, providerData } = item.rawItem;
    const { itemId, serverLabel, ...rest } = providerData ?? {};
    if (!itemId || !serverLabel) {
      throw new Error("Invalid approval item for Realtime MCP approval request");
    }
    return {
      type: "mcp_approval_request",
      itemId,
      serverLabel,
      ...rest,
      name,
      arguments: args ? JSON.parse(args) : {},
      approved: null
    };
  }

  // node_modules/@openai/agents-realtime/dist/realtimeAgent.mjs
  var RealtimeAgent = class extends Agent {
    constructor(config2) {
      super(config2);
      /**
       * The voice intended to be used by the agent. If another agent already spoke during the
       * RealtimeSession, changing the voice during a handoff will fail.
       */
      __publicField(this, "voice");
      this.voice = config2.voice;
    }
  };

  // node_modules/@openai/agents-realtime/dist/guardrail.mjs
  function getRealtimeGuardrailSettings(settings) {
    return {
      debounceTextLength: settings.debounceTextLength ?? 100
    };
  }
  function defineRealtimeOutputGuardrail({ policyHint: policyHintInput, ...options }) {
    const baseGuardrail = defineOutputGuardrail(options);
    const policyHint = policyHintInput ?? baseGuardrail.name;
    return {
      ...baseGuardrail,
      policyHint,
      run: async (args) => {
        const result = await baseGuardrail.run(args);
        return {
          ...result,
          guardrail: { ...result.guardrail, policyHint }
        };
      }
    };
  }
  function getRealtimeGuardrailFeedbackMessage(result) {
    return `
\u26A0\uFE0F Your last answer was blocked. 
Failed Guardrail Reason: ${result.guardrail.policyHint}. 
Failure Details: ${JSON.stringify(result.output.outputInfo ?? {})}. 
Please respond again following policy. Apologize for not being able to answer the question (while avoiding the specific reason) and divert discussion back to an approved topic immediately and not invite more discussion.
`.trim();
  }

  // node_modules/@openai/agents-realtime/dist/clientMessages.mjs
  function isDefined(key, object) {
    return key in object && typeof object[key] !== "undefined";
  }
  function isDeprecatedConfig(config2) {
    return isDefined("modalities", config2) || isDefined("inputAudioFormat", config2) || isDefined("outputAudioFormat", config2) || isDefined("inputAudioTranscription", config2) || isDefined("turnDetection", config2) || isDefined("inputAudioNoiseReduction", config2) || isDefined("speed", config2);
  }
  function toNewSessionConfig(config2) {
    if (!isDeprecatedConfig(config2)) {
      const inputConfig = config2.audio?.input ? {
        format: normalizeAudioFormat(config2.audio.input.format),
        noiseReduction: config2.audio.input.noiseReduction ?? null,
        transcription: config2.audio.input.transcription,
        turnDetection: config2.audio.input.turnDetection
      } : void 0;
      const requestedOutputVoice = config2.audio?.output?.voice ?? config2.voice;
      const outputConfig = config2.audio?.output || typeof requestedOutputVoice !== "undefined" ? {
        format: normalizeAudioFormat(config2.audio?.output?.format),
        voice: requestedOutputVoice,
        speed: config2.audio?.output?.speed
      } : void 0;
      return {
        model: config2.model,
        instructions: config2.instructions,
        toolChoice: config2.toolChoice,
        tools: config2.tools,
        tracing: config2.tracing,
        providerData: config2.providerData,
        prompt: config2.prompt,
        outputModalities: config2.outputModalities,
        audio: inputConfig || outputConfig ? {
          input: inputConfig,
          output: outputConfig
        } : void 0
      };
    }
    return {
      model: config2.model,
      instructions: config2.instructions,
      toolChoice: config2.toolChoice,
      tools: config2.tools,
      tracing: config2.tracing,
      providerData: config2.providerData,
      prompt: config2.prompt,
      outputModalities: config2.modalities,
      audio: {
        input: {
          format: normalizeAudioFormat(config2.inputAudioFormat),
          noiseReduction: config2.inputAudioNoiseReduction ?? null,
          transcription: config2.inputAudioTranscription,
          turnDetection: config2.turnDetection
        },
        output: {
          format: normalizeAudioFormat(config2.outputAudioFormat),
          voice: config2.voice,
          speed: config2.speed
        }
      }
    };
  }
  function normalizeAudioFormat(format) {
    if (!format)
      return void 0;
    if (typeof format === "object")
      return format;
    const f = String(format);
    if (f === "pcm16")
      return { type: "audio/pcm", rate: 24e3 };
    if (f === "g711_ulaw")
      return { type: "audio/pcmu" };
    if (f === "g711_alaw")
      return { type: "audio/pcma" };
    return { type: "audio/pcm", rate: 24e3 };
  }

  // node_modules/@openai/agents-realtime/dist/items.mjs
  var baseItemSchema = external_exports.object({
    itemId: external_exports.string()
  });
  var realtimeMessageItemSchema = external_exports.discriminatedUnion("role", [
    external_exports.object({
      itemId: external_exports.string(),
      previousItemId: external_exports.string().nullable().optional(),
      type: external_exports.literal("message"),
      role: external_exports.literal("system"),
      content: external_exports.array(external_exports.object({ type: external_exports.literal("input_text"), text: external_exports.string() }))
    }),
    external_exports.object({
      itemId: external_exports.string(),
      previousItemId: external_exports.string().nullable().optional(),
      type: external_exports.literal("message"),
      role: external_exports.literal("user"),
      status: external_exports.enum(["in_progress", "completed"]),
      content: external_exports.array(external_exports.object({ type: external_exports.literal("input_text"), text: external_exports.string() }).or(external_exports.object({
        type: external_exports.literal("input_audio"),
        audio: external_exports.string().nullable().optional(),
        transcript: external_exports.string().nullable()
      })))
    }),
    external_exports.object({
      itemId: external_exports.string(),
      previousItemId: external_exports.string().nullable().optional(),
      type: external_exports.literal("message"),
      role: external_exports.literal("assistant"),
      status: external_exports.enum(["in_progress", "completed", "incomplete"]),
      content: external_exports.array(external_exports.object({ type: external_exports.literal("output_text"), text: external_exports.string() }).or(external_exports.object({
        type: external_exports.literal("output_audio"),
        audio: external_exports.string().nullable().optional(),
        transcript: external_exports.string().nullable().optional()
      })))
    })
  ]);
  var realtimeToolCallItem = external_exports.object({
    itemId: external_exports.string(),
    previousItemId: external_exports.string().nullable().optional(),
    type: external_exports.literal("function_call"),
    status: external_exports.enum(["in_progress", "completed", "incomplete"]),
    arguments: external_exports.string(),
    name: external_exports.string(),
    output: external_exports.string().nullable()
  });
  var realtimeMcpCallItem = external_exports.object({
    itemId: external_exports.string(),
    previousItemId: external_exports.string().nullable().optional(),
    type: external_exports.enum(["mcp_call", "mcp_tool_call"]),
    status: external_exports.enum(["in_progress", "completed", "incomplete"]),
    arguments: external_exports.string(),
    name: external_exports.string(),
    output: external_exports.string().nullable()
  });
  var realtimeMcpCallApprovalRequestItem = external_exports.object({
    itemId: external_exports.string(),
    type: external_exports.literal("mcp_approval_request"),
    serverLabel: external_exports.string(),
    name: external_exports.string(),
    arguments: external_exports.record(external_exports.string(), external_exports.any()),
    approved: external_exports.boolean().optional().nullable()
  });

  // node_modules/@openai/agents-realtime/dist/logger.mjs
  var logger2 = getLogger("openai-agents:realtime");
  var logger_default2 = logger2;

  // node_modules/@openai/agents-realtime/dist/openaiRealtimeEvents.mjs
  var realtimeResponse = external_exports.object({
    id: external_exports.string().optional().nullable(),
    conversation_id: external_exports.string().optional().nullable(),
    max_output_tokens: external_exports.number().or(external_exports.literal("inf")).optional().nullable(),
    metadata: external_exports.record(external_exports.string(), external_exports.any()).optional().nullable(),
    // GA rename: modalities -> output_modalities
    output_modalities: external_exports.array(external_exports.string()).optional().nullable(),
    object: external_exports.literal("realtime.response").optional().nullable(),
    output: external_exports.array(external_exports.any()).optional().nullable(),
    // GA grouping: audio.output.{format,voice}
    audio: external_exports.object({
      output: external_exports.object({
        format: external_exports.any().optional().nullable(),
        voice: external_exports.string().optional().nullable()
      }).optional().nullable()
    }).optional().nullable(),
    status: external_exports.enum(["completed", "incomplete", "failed", "cancelled", "in_progress"]).optional().nullable(),
    status_details: external_exports.record(external_exports.string(), external_exports.any()).optional().nullable(),
    usage: external_exports.object({
      input_tokens: external_exports.number().optional(),
      input_token_details: external_exports.record(external_exports.string(), external_exports.any()).optional().nullable(),
      output_tokens: external_exports.number().optional(),
      output_token_details: external_exports.record(external_exports.string(), external_exports.any()).optional().nullable()
    }).optional().nullable()
  });
  var conversationItemContentSchema = external_exports.object({
    id: external_exports.string().optional(),
    audio: external_exports.string().nullable().optional(),
    text: external_exports.string().nullable().optional(),
    transcript: external_exports.string().nullable().optional(),
    type: external_exports.union([
      external_exports.literal("input_text"),
      external_exports.literal("input_audio"),
      external_exports.literal("item_reference"),
      external_exports.literal("output_text"),
      external_exports.literal("output_audio")
    ])
  });
  var conversationItemSchema = external_exports.object({
    id: external_exports.string().optional(),
    arguments: external_exports.string().optional(),
    call_id: external_exports.string().optional(),
    content: external_exports.array(conversationItemContentSchema).optional(),
    name: external_exports.string().optional(),
    output: external_exports.string().nullable().optional(),
    role: external_exports.enum(["user", "assistant", "system"]).optional(),
    status: external_exports.enum(["completed", "incomplete", "in_progress"]).optional(),
    type: external_exports.enum([
      "message",
      "function_call",
      "function_call_output",
      "mcp_list_tools",
      "mcp_tool_call",
      "mcp_call",
      "mcp_approval_request",
      "mcp_approval_response"
    ]).optional(),
    approval_request_id: external_exports.string().nullable().optional(),
    approve: external_exports.boolean().nullable().optional(),
    reason: external_exports.string().nullable().optional(),
    server_label: external_exports.string().optional(),
    error: external_exports.any().nullable().optional(),
    tools: external_exports.array(external_exports.object({
      name: external_exports.string(),
      description: external_exports.string(),
      input_schema: external_exports.record(external_exports.any()).optional()
    }).passthrough()).optional()
  }).passthrough();
  var conversationCreatedEventSchema = external_exports.object({
    type: external_exports.literal("conversation.created"),
    event_id: external_exports.string(),
    conversation: external_exports.object({
      id: external_exports.string().optional(),
      object: external_exports.literal("realtime.conversation").optional()
    })
  });
  var conversationItemAddedEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.added"),
    event_id: external_exports.string(),
    item: conversationItemSchema,
    previous_item_id: external_exports.string().nullable().optional()
  });
  var conversationItemDoneEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.done"),
    event_id: external_exports.string(),
    item: conversationItemSchema,
    previous_item_id: external_exports.string().nullable().optional()
  });
  var conversationItemDeletedEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.deleted"),
    event_id: external_exports.string(),
    item_id: external_exports.string()
  });
  var conversationItemInputAudioTranscriptionCompletedEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.input_audio_transcription.completed"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    transcript: external_exports.string(),
    logprobs: external_exports.array(external_exports.any()).nullable().optional()
  });
  var conversationItemInputAudioTranscriptionDeltaEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.input_audio_transcription.delta"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number().optional(),
    delta: external_exports.string().optional(),
    logprobs: external_exports.array(external_exports.any()).nullable().optional()
  });
  var conversationItemInputAudioTranscriptionFailedEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.input_audio_transcription.failed"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    error: external_exports.object({
      code: external_exports.string().optional(),
      message: external_exports.string().optional(),
      param: external_exports.string().optional(),
      type: external_exports.string().optional()
    })
  });
  var conversationItemRetrievedEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.retrieved"),
    event_id: external_exports.string(),
    item: conversationItemSchema
  });
  var conversationItemTruncatedEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.truncated"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    audio_end_ms: external_exports.number(),
    content_index: external_exports.number()
  });
  var conversationItemCreateEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.create"),
    item: conversationItemSchema,
    event_id: external_exports.string().optional(),
    previous_item_id: external_exports.string().nullable().optional()
  });
  var conversationItemDeleteEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.delete"),
    item_id: external_exports.string(),
    event_id: external_exports.string().optional()
  });
  var conversationItemRetrieveEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.retrieve"),
    item_id: external_exports.string(),
    event_id: external_exports.string().optional()
  });
  var conversationItemTruncateEventSchema = external_exports.object({
    type: external_exports.literal("conversation.item.truncate"),
    item_id: external_exports.string(),
    audio_end_ms: external_exports.number(),
    content_index: external_exports.number(),
    event_id: external_exports.string().optional()
  });
  var errorEventSchema = external_exports.object({
    type: external_exports.literal("error"),
    event_id: external_exports.string().optional(),
    error: external_exports.any().optional()
  });
  var inputAudioBufferClearedEventSchema = external_exports.object({
    type: external_exports.literal("input_audio_buffer.cleared"),
    event_id: external_exports.string()
  });
  var inputAudioBufferAppendEventSchema = external_exports.object({
    type: external_exports.literal("input_audio_buffer.append"),
    audio: external_exports.string(),
    event_id: external_exports.string().optional()
  });
  var inputAudioBufferClearEventSchema = external_exports.object({
    type: external_exports.literal("input_audio_buffer.clear"),
    event_id: external_exports.string().optional()
  });
  var inputAudioBufferCommitEventSchema = external_exports.object({
    type: external_exports.literal("input_audio_buffer.commit"),
    event_id: external_exports.string().optional()
  });
  var inputAudioBufferCommittedEventSchema = external_exports.object({
    type: external_exports.literal("input_audio_buffer.committed"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    previous_item_id: external_exports.string().nullable().optional()
  });
  var inputAudioBufferSpeechStartedEventSchema = external_exports.object({
    type: external_exports.literal("input_audio_buffer.speech_started"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    audio_start_ms: external_exports.number()
  });
  var inputAudioBufferSpeechStoppedEventSchema = external_exports.object({
    type: external_exports.literal("input_audio_buffer.speech_stopped"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    audio_end_ms: external_exports.number()
  });
  var outputAudioBufferStartedEventSchema = external_exports.object({
    type: external_exports.literal("output_audio_buffer.started"),
    event_id: external_exports.string()
  }).passthrough();
  var outputAudioBufferStoppedEventSchema = external_exports.object({
    type: external_exports.literal("output_audio_buffer.stopped"),
    event_id: external_exports.string()
  }).passthrough();
  var outputAudioBufferClearedEventSchema = external_exports.object({
    type: external_exports.literal("output_audio_buffer.cleared"),
    event_id: external_exports.string()
  });
  var rateLimitsUpdatedEventSchema = external_exports.object({
    type: external_exports.literal("rate_limits.updated"),
    event_id: external_exports.string(),
    rate_limits: external_exports.array(external_exports.object({
      limit: external_exports.number().optional(),
      name: external_exports.enum(["requests", "tokens"]).optional(),
      remaining: external_exports.number().optional(),
      reset_seconds: external_exports.number().optional()
    }))
  });
  var responseAudioDeltaEventSchema = external_exports.object({
    type: external_exports.literal("response.output_audio.delta"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    delta: external_exports.string(),
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseAudioDoneEventSchema = external_exports.object({
    type: external_exports.literal("response.output_audio.done"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseAudioTranscriptDeltaEventSchema = external_exports.object({
    type: external_exports.literal("response.output_audio_transcript.delta"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    delta: external_exports.string(),
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseAudioTranscriptDoneEventSchema = external_exports.object({
    //  GA may introduce response.output_audio_transcript.done
    type: external_exports.literal("response.output_audio_transcript.done"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    transcript: external_exports.string(),
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseContentPartAddedEventSchema = external_exports.object({
    type: external_exports.literal("response.content_part.added"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    output_index: external_exports.number(),
    response_id: external_exports.string(),
    part: external_exports.object({
      audio: external_exports.string().optional(),
      text: external_exports.string().optional(),
      transcript: external_exports.string().optional(),
      type: external_exports.enum(["text", "audio"]).optional()
    })
  });
  var responseContentPartDoneEventSchema = external_exports.object({
    type: external_exports.literal("response.content_part.done"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    output_index: external_exports.number(),
    response_id: external_exports.string(),
    part: external_exports.object({
      audio: external_exports.string().optional(),
      text: external_exports.string().optional(),
      transcript: external_exports.string().optional(),
      type: external_exports.enum(["text", "audio"]).optional()
    })
  });
  var responseCreatedEventSchema = external_exports.object({
    type: external_exports.literal("response.created"),
    event_id: external_exports.string(),
    response: realtimeResponse
  });
  var responseDoneEventSchema = external_exports.object({
    type: external_exports.literal("response.done"),
    event_id: external_exports.string(),
    response: realtimeResponse
  });
  var responseFunctionCallArgumentsDeltaEventSchema = external_exports.object({
    type: external_exports.literal("response.function_call_arguments.delta"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    call_id: external_exports.string(),
    delta: external_exports.string(),
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseFunctionCallArgumentsDoneEventSchema = external_exports.object({
    type: external_exports.literal("response.function_call_arguments.done"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    call_id: external_exports.string(),
    arguments: external_exports.string(),
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseOutputItemAddedEventSchema = external_exports.object({
    type: external_exports.literal("response.output_item.added"),
    event_id: external_exports.string(),
    item: conversationItemSchema,
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseOutputItemDoneEventSchema = external_exports.object({
    type: external_exports.literal("response.output_item.done"),
    event_id: external_exports.string(),
    item: conversationItemSchema,
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseTextDeltaEventSchema = external_exports.object({
    type: external_exports.literal("response.output_text.delta"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    delta: external_exports.string(),
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var responseTextDoneEventSchema = external_exports.object({
    // No rename specified for done; keep response.text.done
    type: external_exports.literal("response.output_text.done"),
    event_id: external_exports.string(),
    item_id: external_exports.string(),
    content_index: external_exports.number(),
    text: external_exports.string(),
    output_index: external_exports.number(),
    response_id: external_exports.string()
  });
  var sessionCreatedEventSchema = external_exports.object({
    type: external_exports.literal("session.created"),
    event_id: external_exports.string(),
    session: external_exports.any()
  });
  var sessionUpdatedEventSchema = external_exports.object({
    type: external_exports.literal("session.updated"),
    event_id: external_exports.string(),
    session: external_exports.any()
  });
  var responseCancelEventSchema = external_exports.object({
    type: external_exports.literal("response.cancel"),
    event_id: external_exports.string().optional(),
    response_id: external_exports.string().optional()
  });
  var responseCreateEventSchema = external_exports.object({
    type: external_exports.literal("response.create"),
    event_id: external_exports.string().optional(),
    response: external_exports.any().optional()
  });
  var sessionUpdateEventSchema = external_exports.object({
    type: external_exports.literal("session.update"),
    event_id: external_exports.string().optional(),
    session: external_exports.any()
  });
  var mcpListToolsInProgressEventSchema = external_exports.object({
    type: external_exports.literal("mcp_list_tools.in_progress"),
    event_id: external_exports.string().optional(),
    item_id: external_exports.string().optional()
  });
  var mcpListToolsCompletedEventSchema = external_exports.object({
    type: external_exports.literal("mcp_list_tools.completed"),
    event_id: external_exports.string().optional(),
    item_id: external_exports.string().optional()
  });
  var responseMcpCallArgumentsDeltaEventSchema = external_exports.object({
    type: external_exports.literal("response.mcp_call_arguments.delta"),
    event_id: external_exports.string(),
    response_id: external_exports.string(),
    item_id: external_exports.string(),
    output_index: external_exports.number(),
    delta: external_exports.string(),
    obfuscation: external_exports.string()
  });
  var responseMcpCallArgumentsDoneEventSchema = external_exports.object({
    type: external_exports.literal("response.mcp_call_arguments.done"),
    event_id: external_exports.string(),
    response_id: external_exports.string(),
    item_id: external_exports.string(),
    output_index: external_exports.number(),
    arguments: external_exports.string()
  });
  var responseMcpCallInProgressEventSchema = external_exports.object({
    type: external_exports.literal("response.mcp_call.in_progress"),
    event_id: external_exports.string(),
    output_index: external_exports.number(),
    item_id: external_exports.string()
  });
  var responseMcpCallCompletedEventSchema = external_exports.object({
    type: external_exports.literal("response.mcp_call.completed"),
    event_id: external_exports.string(),
    output_index: external_exports.number(),
    item_id: external_exports.string()
  });
  var mcpListToolsFailedEventSchema = external_exports.object({
    type: external_exports.literal("mcp_list_tools.failed"),
    event_id: external_exports.string().optional(),
    item_id: external_exports.string().optional()
  });
  var genericEventSchema = external_exports.object({
    type: external_exports.string(),
    event_id: external_exports.string().optional().nullable()
  }).passthrough();
  var realtimeServerEventSchema = external_exports.discriminatedUnion("type", [
    conversationCreatedEventSchema,
    conversationItemAddedEventSchema,
    conversationItemDoneEventSchema,
    conversationItemDeletedEventSchema,
    conversationItemInputAudioTranscriptionCompletedEventSchema,
    conversationItemInputAudioTranscriptionDeltaEventSchema,
    conversationItemInputAudioTranscriptionFailedEventSchema,
    conversationItemRetrievedEventSchema,
    conversationItemTruncatedEventSchema,
    errorEventSchema,
    inputAudioBufferClearedEventSchema,
    inputAudioBufferCommittedEventSchema,
    inputAudioBufferSpeechStartedEventSchema,
    inputAudioBufferSpeechStoppedEventSchema,
    outputAudioBufferStartedEventSchema,
    outputAudioBufferStoppedEventSchema,
    outputAudioBufferClearedEventSchema,
    rateLimitsUpdatedEventSchema,
    responseAudioDeltaEventSchema,
    responseAudioDoneEventSchema,
    responseAudioTranscriptDeltaEventSchema,
    responseAudioTranscriptDoneEventSchema,
    responseContentPartAddedEventSchema,
    responseContentPartDoneEventSchema,
    responseCreatedEventSchema,
    responseDoneEventSchema,
    responseFunctionCallArgumentsDeltaEventSchema,
    responseFunctionCallArgumentsDoneEventSchema,
    responseOutputItemAddedEventSchema,
    responseOutputItemDoneEventSchema,
    responseTextDeltaEventSchema,
    responseTextDoneEventSchema,
    sessionCreatedEventSchema,
    sessionUpdatedEventSchema,
    mcpListToolsInProgressEventSchema,
    mcpListToolsCompletedEventSchema,
    mcpListToolsFailedEventSchema,
    responseMcpCallArgumentsDeltaEventSchema,
    responseMcpCallArgumentsDoneEventSchema,
    responseMcpCallInProgressEventSchema,
    responseMcpCallCompletedEventSchema
  ]);
  var realtimeClientEventSchema = external_exports.discriminatedUnion("type", [
    conversationItemCreateEventSchema,
    conversationItemDeleteEventSchema,
    conversationItemRetrieveEventSchema,
    conversationItemTruncateEventSchema,
    inputAudioBufferAppendEventSchema,
    inputAudioBufferClearEventSchema,
    inputAudioBufferCommitEventSchema,
    responseCancelEventSchema,
    responseCreateEventSchema,
    sessionUpdateEventSchema
  ]);
  function parseRealtimeEvent(event) {
    const raw = JSON.parse(event.data.toString());
    const parsed = realtimeServerEventSchema.safeParse(raw);
    if (!parsed.success) {
      const genericParsed = genericEventSchema.safeParse(raw);
      if (genericParsed.success) {
        return { data: genericParsed.data, isGeneric: true };
      }
      return { data: null, isGeneric: true };
    }
    return { data: parsed.data, isGeneric: false };
  }

  // node_modules/@openai/agents-realtime/dist/openaiRealtimeBase.mjs
  var DEFAULT_OPENAI_REALTIME_MODEL = "gpt-realtime";
  var DEFAULT_OPENAI_REALTIME_SESSION_CONFIG = {
    outputModalities: ["audio"],
    audio: {
      input: {
        format: { type: "audio/pcm", rate: 24e3 },
        transcription: { model: "gpt-4o-mini-transcribe" },
        turnDetection: { type: "semantic_vad" },
        noiseReduction: null
      },
      output: {
        format: { type: "audio/pcm", rate: 24e3 },
        speed: 1
      }
    }
  };
  var _model, _apiKey, _tracingConfig, _rawSessionConfig;
  var _OpenAIRealtimeBase = class _OpenAIRealtimeBase extends EventEmitterDelegate {
    constructor(options = {}) {
      super();
      __privateAdd(this, _model);
      __privateAdd(this, _apiKey);
      __privateAdd(this, _tracingConfig, null);
      __privateAdd(this, _rawSessionConfig, null);
      __publicField(this, "eventEmitter", new BrowserEventEmitter());
      __privateSet(this, _model, options.model ?? DEFAULT_OPENAI_REALTIME_MODEL);
      __privateSet(this, _apiKey, options.apiKey);
    }
    /**
     * The current model that is being used by the transport layer.
     */
    get currentModel() {
      return __privateGet(this, _model);
    }
    /**
     * The current model that is being used by the transport layer.
     * **Note**: The model cannot be changed mid conversation.
     */
    set currentModel(model) {
      __privateSet(this, _model, model);
    }
    /**
     * Hook for subclasses to clean up transport-specific state when audio
     * playback finishes. Defaults to a no-op.
     */
    _afterAudioDoneEvent() {
    }
    get _rawSessionConfig() {
      return __privateGet(this, _rawSessionConfig) ?? null;
    }
    async _getApiKey(options) {
      const apiKey = options.apiKey ?? __privateGet(this, _apiKey);
      if (typeof apiKey === "function") {
        return await apiKey();
      }
      return apiKey;
    }
    _onMessage(event) {
      const { data: parsed, isGeneric } = parseRealtimeEvent(event);
      if (parsed === null) {
        return;
      }
      this.emit("*", parsed);
      if (isGeneric) {
        return;
      }
      if (parsed.type === "error") {
        this.emit("error", { type: "error", error: parsed });
      } else {
        this.emit(parsed.type, parsed);
      }
      if (parsed.type === "response.created") {
        this.emit("turn_started", {
          type: "response_started",
          providerData: {
            ...parsed
          }
        });
        return;
      }
      if (parsed.type === "session.updated") {
        __privateSet(this, _rawSessionConfig, parsed.session);
      }
      if (parsed.type === "response.done") {
        const response = responseDoneEventSchema.safeParse(parsed);
        if (!response.success) {
          logger_default2.error("Error parsing response done event", response.error);
          return;
        }
        const inputTokens = response.data.response.usage?.input_tokens ?? 0;
        const outputTokens = response.data.response.usage?.output_tokens ?? 0;
        const totalTokens = inputTokens + outputTokens;
        const usage = new Usage({
          inputTokens,
          inputTokensDetails: response.data.response.usage?.input_token_details ?? {},
          outputTokens,
          outputTokensDetails: response.data.response.usage?.output_token_details ?? {},
          totalTokens
        });
        this.emit("usage_update", usage);
        this.emit("turn_done", {
          type: "response_done",
          response: {
            id: response.data.response.id ?? "",
            output: response.data.response.output ?? [],
            usage: {
              inputTokens,
              inputTokensDetails: response.data.response.usage?.input_token_details ?? {},
              outputTokens,
              outputTokensDetails: response.data.response.usage?.output_token_details ?? {},
              totalTokens
            }
          }
        });
        return;
      }
      if (parsed.type === "response.output_audio.done") {
        this.emit("audio_done");
        this._afterAudioDoneEvent();
        return;
      }
      if (parsed.type === "conversation.item.deleted") {
        this.emit("item_deleted", {
          itemId: parsed.item_id
        });
        return;
      }
      if (parsed.type === "conversation.item.input_audio_transcription.completed" || parsed.type === "conversation.item.truncated") {
        this.sendEvent({
          type: "conversation.item.retrieve",
          item_id: parsed.item_id
        });
        return;
      }
      if (parsed.type === "conversation.item.input_audio_transcription.delta" || parsed.type === "response.output_text.delta" || parsed.type === "response.output_audio_transcript.delta" || parsed.type === "response.function_call_arguments.delta") {
        if (parsed.type === "response.output_audio_transcript.delta") {
          this.emit("audio_transcript_delta", {
            type: "transcript_delta",
            delta: parsed.delta,
            itemId: parsed.item_id,
            responseId: parsed.response_id
          });
        }
        return;
      }
      if (parsed.type === "conversation.item.added" || parsed.type === "conversation.item.done" || parsed.type === "conversation.item.retrieved") {
        if (parsed.item.type === "mcp_list_tools" && parsed.type === "conversation.item.done") {
          const serverLabel = parsed.item.server_label ?? "";
          const tools = parsed.item.tools ?? [];
          try {
            this.emit("mcp_tools_listed", {
              serverLabel,
              tools
            });
          } catch (err) {
            logger_default2.error("Error emitting mcp_tools_listed", err, parsed.item);
          }
          return;
        }
        if (parsed.item.type === "message") {
          const previousItemId = parsed.type === "conversation.item.added" || parsed.type === "conversation.item.done" ? parsed.previous_item_id : null;
          const item = realtimeMessageItemSchema.parse({
            itemId: parsed.item.id,
            previousItemId,
            type: parsed.item.type,
            role: parsed.item.role,
            content: parsed.item.content,
            status: parsed.item.status
          });
          this.emit("item_update", item);
          return;
        }
        if (parsed.item.type === "mcp_approval_request" && parsed.type === "conversation.item.done") {
          const item = parsed.item;
          const mcpApprovalRequest = realtimeMcpCallApprovalRequestItem.parse({
            itemId: item.id,
            type: item.type,
            serverLabel: item.server_label,
            name: item.name,
            arguments: JSON.parse(item.arguments || "{}"),
            approved: item.approved
          });
          this.emit("item_update", mcpApprovalRequest);
          this.emit("mcp_approval_request", mcpApprovalRequest);
          return;
        }
        if (parsed.item.type === "mcp_tool_call" || parsed.item.type === "mcp_call") {
          const status = parsed.type === "conversation.item.done" ? "completed" : "in_progress";
          const mcpCall = realtimeMcpCallItem.parse({
            itemId: parsed.item.id,
            type: parsed.item.type,
            status,
            arguments: parsed.item.arguments,
            name: parsed.item.name,
            output: parsed.item.output
          });
          this.emit("item_update", mcpCall);
          if (parsed.type === "conversation.item.done") {
            this.emit("mcp_tool_call_completed", mcpCall);
          }
          return;
        }
      }
      if (parsed.type === "response.mcp_call.in_progress") {
        const item = parsed;
        this.sendEvent({
          type: "conversation.item.retrieve",
          item_id: item.item_id
        });
        return;
      }
      if (parsed.type === "mcp_list_tools.in_progress") {
        const item = parsed;
        if (item.item_id) {
          this.sendEvent({
            type: "conversation.item.retrieve",
            item_id: item.item_id
          });
        }
        return;
      }
      if (parsed.type === "response.output_item.done" || parsed.type === "response.output_item.added") {
        const item = parsed.item;
        if (item.type === "function_call" && item.status === "completed") {
          const toolCall = realtimeToolCallItem.parse({
            itemId: item.id,
            type: item.type,
            status: "in_progress",
            // we set it to in_progress for the UI as it will only be completed with the output
            arguments: item.arguments,
            name: item.name,
            output: null
          });
          this.emit("item_update", toolCall);
          this.emit("function_call", {
            id: item.id,
            type: "function_call",
            callId: item.call_id ?? "",
            arguments: item.arguments ?? "",
            name: item.name ?? ""
          });
          return;
        }
        if (item.type === "mcp_tool_call" || item.type === "mcp_call") {
          const mcpCall = realtimeMcpCallItem.parse({
            itemId: item.id,
            type: item.type,
            status: parsed.type === "response.output_item.done" ? "completed" : "in_progress",
            // we set it to in_progress for the UI as it will only be completed with the output
            arguments: item.arguments,
            name: item.name,
            output: item.output
          });
          this.emit("item_update", mcpCall);
          return;
        }
        if (item.type === "message") {
          const realtimeItem = realtimeMessageItemSchema.parse({
            itemId: parsed.item.id,
            type: parsed.item.type,
            role: parsed.item.role,
            content: parsed.item.content,
            status: parsed.type === "response.output_item.done" ? item.status ?? "completed" : item.status ?? "in_progress"
          });
          this.emit("item_update", realtimeItem);
          return;
        }
      }
    }
    _onError(error2) {
      this.emit("error", {
        type: "error",
        error: error2
      });
    }
    _onOpen() {
      this.emit("connected");
    }
    _onClose() {
      this.emit("disconnected");
    }
    /**
     * Send a message to the Realtime API. This will create a new item in the conversation and
     * trigger a response.
     *
     * @param message - The message to send.
     * @param otherEventData - Additional event data to send.
     */
    sendMessage(message, otherEventData, { triggerResponse = true } = {}) {
      const content = typeof message === "string" ? [
        {
          type: "input_text",
          text: message
        }
      ] : message.content.map((content2) => {
        if (content2.type === "input_image") {
          return {
            type: "input_image",
            image_url: content2.image,
            ...content2.providerData ?? {}
          };
        }
        return content2;
      });
      this.sendEvent({
        type: "conversation.item.create",
        item: {
          type: "message",
          role: "user",
          content
        },
        ...otherEventData
      });
      if (triggerResponse) {
        this.sendEvent({
          type: "response.create"
        });
      }
    }
    addImage(image, { triggerResponse = true } = {}) {
      this.sendMessage({
        type: "message",
        role: "user",
        content: [{ type: "input_image", image }]
      }, {}, { triggerResponse });
    }
    _getMergedSessionConfig(config2) {
      const newConfig = toNewSessionConfig(config2);
      const sessionData = {
        type: "realtime",
        instructions: newConfig.instructions,
        model: newConfig.model ?? __privateGet(this, _model),
        output_modalities: newConfig.outputModalities ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.outputModalities,
        audio: {
          input: {
            format: newConfig.audio?.input?.format ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.audio?.input?.format,
            noise_reduction: newConfig.audio?.input?.noiseReduction ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.audio?.input?.noiseReduction,
            transcription: newConfig.audio?.input?.transcription ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.audio?.input?.transcription,
            turn_detection: _OpenAIRealtimeBase.buildTurnDetectionConfig(newConfig.audio?.input?.turnDetection) ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.audio?.input?.turnDetection
          },
          output: {
            format: newConfig.audio?.output?.format ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.audio?.output?.format,
            voice: newConfig.audio?.output?.voice ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.audio?.output?.voice,
            speed: newConfig.audio?.output?.speed ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.audio?.output?.speed
          }
        },
        tool_choice: newConfig.toolChoice ?? DEFAULT_OPENAI_REALTIME_SESSION_CONFIG.toolChoice,
        // We don't set tracing here to make sure that we don't try to override it on every
        // session.update as it might lead to errors
        ...newConfig.providerData ?? {}
      };
      if (newConfig.prompt) {
        sessionData.prompt = {
          id: newConfig.prompt.promptId,
          version: newConfig.prompt.version,
          variables: newConfig.prompt.variables
        };
      }
      if (newConfig.tools && newConfig.tools.length > 0) {
        sessionData.tools = newConfig.tools.map((tool2) => ({
          ...tool2,
          strict: void 0
        }));
      }
      return sessionData;
    }
    /**
     * Build the payload object expected by the Realtime API when creating or updating a session.
     *
     * The helper centralises the conversion from camelCase runtime config to the snake_case payload
     * required by the Realtime API so transports that need a one-off payload (for example SIP call
     * acceptance) can reuse the same logic without duplicating private state.
     *
     * @param config - The session config to merge with defaults.
     */
    buildSessionPayload(config2) {
      return this._getMergedSessionConfig(config2);
    }
    static buildTurnDetectionConfig(c) {
      if (typeof c === "undefined") {
        return void 0;
      }
      const { type, createResponse, create_response, eagerness, interruptResponse, interrupt_response, prefixPaddingMs, prefix_padding_ms, silenceDurationMs, silence_duration_ms, threshold, idleTimeoutMs, idle_timeout_ms, ...rest } = c;
      const config2 = {
        type,
        create_response: createResponse ? createResponse : create_response,
        eagerness,
        interrupt_response: interruptResponse ? interruptResponse : interrupt_response,
        prefix_padding_ms: prefixPaddingMs ? prefixPaddingMs : prefix_padding_ms,
        silence_duration_ms: silenceDurationMs ? silenceDurationMs : silence_duration_ms,
        idle_timeout_ms: idleTimeoutMs ? idleTimeoutMs : idle_timeout_ms,
        threshold,
        ...rest
      };
      Object.keys(config2).forEach((key) => {
        if (config2[key] === void 0)
          delete config2[key];
      });
      return Object.keys(config2).length > 0 ? config2 : void 0;
    }
    /**
     * Sets the internal tracing config. This is used to track the tracing config that has been set
     * during the session.create event.
     */
    set _tracingConfig(tracingConfig) {
      __privateSet(this, _tracingConfig, tracingConfig);
    }
    /**
     * Sets the tracing config for the session. This will send the tracing config to the Realtime API.
     *
     * @param tracingConfig - The tracing config to set. We don't support 'auto' here as the SDK will always configure a Workflow Name unless it exists
     */
    _updateTracingConfig(tracingConfig) {
      if (typeof __privateGet(this, _tracingConfig) === "undefined") {
        __privateSet(this, _tracingConfig, null);
      }
      if (tracingConfig === "auto") {
        this.sendEvent({
          type: "session.update",
          session: {
            type: "realtime",
            tracing: "auto"
          }
        });
        return;
      }
      if (__privateGet(this, _tracingConfig) !== null && typeof __privateGet(this, _tracingConfig) !== "string" && typeof tracingConfig !== "string") {
        logger_default2.warn("Tracing config is already set, skipping setting it again. This likely happens when you already set a tracing config on session creation.");
        return;
      }
      if (tracingConfig === null) {
        logger_default2.debug("Disabling tracing for this session. It cannot be turned on for this session from this point on.");
        this.sendEvent({
          type: "session.update",
          session: {
            type: "realtime",
            tracing: null
          }
        });
        return;
      }
      if (__privateGet(this, _tracingConfig) === null || typeof __privateGet(this, _tracingConfig) === "string") {
        this.sendEvent({
          type: "session.update",
          session: {
            type: "realtime",
            tracing: tracingConfig
          }
        });
        return;
      }
      if (tracingConfig?.group_id !== __privateGet(this, _tracingConfig)?.group_id || tracingConfig?.metadata !== __privateGet(this, _tracingConfig)?.metadata || tracingConfig?.workflow_name !== __privateGet(this, _tracingConfig)?.workflow_name) {
        logger_default2.warn("Mismatch in tracing config. Ignoring the new tracing config. This likely happens when you already set a tracing config on session creation. Current tracing config: %s, new tracing config: %s", JSON.stringify(__privateGet(this, _tracingConfig)), JSON.stringify(tracingConfig));
        return;
      }
      this.sendEvent({
        type: "session.update",
        session: {
          type: "realtime",
          tracing: tracingConfig
        }
      });
    }
    /**
     * Updates the session config. This will merge it with the current session config with the default
     * values and send it to the Realtime API.
     *
     * @param config - The session config to update.
     */
    updateSessionConfig(config2) {
      const sessionData = this.buildSessionPayload(config2);
      this.sendEvent({
        type: "session.update",
        session: sessionData
      });
    }
    /**
     * Send the output of a function call to the Realtime API.
     *
     * @param toolCall - The tool call to send the output for.
     * @param output - The output of the function call.
     * @param startResponse - Whether to start a new response after sending the output.
     */
    sendFunctionCallOutput(toolCall, output, startResponse = true) {
      this.sendEvent({
        type: "conversation.item.create",
        item: {
          type: "function_call_output",
          output,
          call_id: toolCall.callId
        }
      });
      try {
        const item = realtimeToolCallItem.parse({
          itemId: toolCall.id,
          previousItemId: toolCall.previousItemId,
          type: "function_call",
          status: "completed",
          arguments: toolCall.arguments,
          name: toolCall.name,
          output
        });
        this.emit("item_update", item);
      } catch (error2) {
        logger_default2.error("Error parsing tool call item", error2, toolCall);
      }
      if (startResponse) {
        this.sendEvent({
          type: "response.create"
        });
      }
    }
    /**
     * Send an audio buffer to the Realtime API. If `{ commit: true }` is passed, the audio buffer
     * will be committed and the model will start processing it. This is necessary if you have
     * disabled turn detection / voice activity detection (VAD).
     *
     * @param audio - The audio buffer to send.
     * @param options - The options for the audio buffer.
     */
    sendAudio(audio, { commit = false } = {}) {
      this.sendEvent({
        type: "input_audio_buffer.append",
        audio: arrayBufferToBase64(audio)
      });
      if (commit) {
        this.sendEvent({
          type: "input_audio_buffer.commit"
        });
      }
    }
    /**
     * Reset the history of the conversation. This will create a diff between the old and new history
     * and send the necessary events to the Realtime API to update the history.
     *
     * @param oldHistory - The old history of the conversation.
     * @param newHistory - The new history of the conversation.
     */
    resetHistory(oldHistory, newHistory) {
      const { removals, additions, updates } = diffRealtimeHistory(oldHistory, newHistory);
      const removalIds = new Set(removals.map((item) => item.itemId));
      for (const update of updates) {
        removalIds.add(update.itemId);
      }
      if (removalIds.size > 0) {
        for (const itemId of removalIds) {
          this.sendEvent({
            type: "conversation.item.delete",
            item_id: itemId
          });
        }
      }
      const additionsAndUpdates = [...additions, ...updates];
      for (const addition of additionsAndUpdates) {
        if (addition.type === "message") {
          const itemEntry = {
            type: "message",
            role: addition.role,
            content: addition.content,
            id: addition.itemId
          };
          if (addition.role !== "system" && addition.status) {
            itemEntry.status = addition.status;
          }
          this.sendEvent({
            type: "conversation.item.create",
            item: itemEntry
          });
        } else if (addition.type === "function_call") {
          logger_default2.warn("Function calls cannot be manually added or updated at the moment. Ignoring.");
        }
      }
    }
    sendMcpResponse(approvalRequest, approved) {
      this.sendEvent({
        type: "conversation.item.create",
        previous_item_id: approvalRequest.itemId,
        item: {
          type: "mcp_approval_response",
          approval_request_id: approvalRequest.itemId,
          approve: approved
        }
      });
    }
  };
  _model = new WeakMap();
  _apiKey = new WeakMap();
  _tracingConfig = new WeakMap();
  _rawSessionConfig = new WeakMap();
  var OpenAIRealtimeBase = _OpenAIRealtimeBase;

  // node_modules/@openai/agents-realtime/dist/openaiRealtimeWebRtc.mjs
  var _url, _state, _useInsecureApiKey, _ongoingResponse, _muted;
  var OpenAIRealtimeWebRTC = class extends OpenAIRealtimeBase {
    constructor(options = {}) {
      if (typeof RTCPeerConnection === "undefined") {
        throw new Error("WebRTC is not supported in this environment");
      }
      super(options);
      __publicField(this, "options");
      __privateAdd(this, _url);
      __privateAdd(this, _state, {
        status: "disconnected",
        peerConnection: void 0,
        dataChannel: void 0,
        callId: void 0
      });
      __privateAdd(this, _useInsecureApiKey);
      __privateAdd(this, _ongoingResponse, false);
      __privateAdd(this, _muted, false);
      this.options = options;
      __privateSet(this, _url, options.baseUrl ?? `https://api.openai.com/v1/realtime/calls`);
      __privateSet(this, _useInsecureApiKey, options.useInsecureApiKey ?? false);
    }
    /**
     * The current call ID of the WebRTC connection.
     */
    get callId() {
      return __privateGet(this, _state).callId;
    }
    /**
     * The current status of the WebRTC connection.
     */
    get status() {
      return __privateGet(this, _state).status;
    }
    /**
     * The current connection state of the WebRTC connection including the peer connection and data
     * channel.
     */
    get connectionState() {
      return __privateGet(this, _state);
    }
    /**
     * Whether the session is muted.
     */
    get muted() {
      return __privateGet(this, _muted);
    }
    /**
     * Connect to the Realtime API. This will establish the connection to the OpenAI Realtime API
     * via WebRTC.
     *
     * If you are using a browser, the transport layer will also automatically configure the
     * microphone and audio output to be used by the session.
     *
     * @param options - The options for the connection.
     */
    async connect(options) {
      if (__privateGet(this, _state).status === "connected") {
        return;
      }
      if (__privateGet(this, _state).status === "connecting") {
        logger_default2.warn("Realtime connection already in progress. Please await original promise");
      }
      const model = options.model ?? this.currentModel;
      this.currentModel = model;
      const baseUrl = options.url ?? __privateGet(this, _url);
      const apiKey = await this._getApiKey(options);
      const isClientKey = typeof apiKey === "string" && apiKey.startsWith("ek_");
      if (isBrowserEnvironment() && !__privateGet(this, _useInsecureApiKey) && !isClientKey) {
        throw new UserError("Using the WebRTC connection in a browser environment requires an ephemeral client key. If you need to use a regular API key, use the WebSocket transport or set the `useInsecureApiKey` option to true.");
      }
      return new Promise(async (resolve, reject) => {
        try {
          const userSessionConfig = {
            ...options.initialSessionConfig || {},
            model: this.currentModel
          };
          const connectionUrl = new URL(baseUrl);
          let peerConnection = new RTCPeerConnection();
          const dataChannel = peerConnection.createDataChannel("oai-events");
          let callId = void 0;
          const attachConnectionStateHandler = (connection) => {
            connection.onconnectionstatechange = () => {
              switch (connection.connectionState) {
                case "disconnected":
                case "failed":
                case "closed":
                  this.close();
                  break;
              }
            };
          };
          attachConnectionStateHandler(peerConnection);
          __privateSet(this, _state, {
            status: "connecting",
            peerConnection,
            dataChannel,
            callId
          });
          this.emit("connection_change", __privateGet(this, _state).status);
          dataChannel.addEventListener("open", () => {
            __privateSet(this, _state, {
              status: "connected",
              peerConnection,
              dataChannel,
              callId
            });
            this.updateSessionConfig(userSessionConfig);
            this.emit("connection_change", __privateGet(this, _state).status);
            this._onOpen();
            resolve();
          });
          dataChannel.addEventListener("error", (event) => {
            this.close();
            this._onError(event);
            reject(event);
          });
          dataChannel.addEventListener("message", (event) => {
            this._onMessage(event);
            const { data: parsed, isGeneric } = parseRealtimeEvent(event);
            if (!parsed || isGeneric) {
              return;
            }
            if (parsed.type === "response.created") {
              __privateSet(this, _ongoingResponse, true);
            } else if (parsed.type === "response.done") {
              __privateSet(this, _ongoingResponse, false);
            }
            if (parsed.type === "session.created") {
              this._tracingConfig = parsed.session.tracing;
              const tracingConfig = typeof userSessionConfig.tracing === "undefined" ? "auto" : userSessionConfig.tracing;
              this._updateTracingConfig(tracingConfig);
            }
          });
          const audioElement = this.options.audioElement ?? document.createElement("audio");
          audioElement.autoplay = true;
          peerConnection.ontrack = (event) => {
            audioElement.srcObject = event.streams[0];
          };
          const stream = this.options.mediaStream ?? await navigator.mediaDevices.getUserMedia({
            audio: true
          });
          peerConnection.addTrack(stream.getAudioTracks()[0]);
          if (this.options.changePeerConnection) {
            const originalPeerConnection = peerConnection;
            peerConnection = await this.options.changePeerConnection(peerConnection);
            if (originalPeerConnection !== peerConnection) {
              originalPeerConnection.onconnectionstatechange = null;
            }
            attachConnectionStateHandler(peerConnection);
            __privateSet(this, _state, { ...__privateGet(this, _state), peerConnection });
          }
          const offer = await peerConnection.createOffer();
          await peerConnection.setLocalDescription(offer);
          if (!offer.sdp) {
            throw new Error("Failed to create offer");
          }
          const sdpResponse = await fetch(connectionUrl, {
            method: "POST",
            body: offer.sdp,
            headers: {
              "Content-Type": "application/sdp",
              Authorization: `Bearer ${apiKey}`,
              "X-OpenAI-Agents-SDK": HEADERS["X-OpenAI-Agents-SDK"]
            }
          });
          callId = sdpResponse.headers?.get("Location")?.split("/").pop();
          __privateSet(this, _state, { ...__privateGet(this, _state), callId });
          const answer = {
            type: "answer",
            sdp: await sdpResponse.text()
          };
          await peerConnection.setRemoteDescription(answer);
        } catch (error2) {
          this.close();
          this._onError(error2);
          reject(error2);
        }
      });
    }
    /**
     * Send an event to the Realtime API. This will stringify the event and send it directly to the
     * API. This can be used if you want to take control over the connection and send events manually.
     *
     * @param event - The event to send.
     */
    sendEvent(event) {
      if (!__privateGet(this, _state).dataChannel || __privateGet(this, _state).dataChannel.readyState !== "open") {
        throw new Error("WebRTC data channel is not connected. Make sure you call `connect()` before sending events.");
      }
      __privateGet(this, _state).dataChannel.send(JSON.stringify(event));
    }
    /**
     * Mute or unmute the session.
     * @param muted - Whether to mute the session.
     */
    mute(muted) {
      __privateSet(this, _muted, muted);
      if (__privateGet(this, _state).peerConnection) {
        const peerConnection = __privateGet(this, _state).peerConnection;
        peerConnection.getSenders().forEach((sender) => {
          if (sender.track) {
            sender.track.enabled = !muted;
          }
        });
      }
    }
    _afterAudioDoneEvent() {
      __privateSet(this, _ongoingResponse, false);
    }
    /**
     * Close the connection to the Realtime API and disconnects the underlying WebRTC connection.
     */
    close() {
      if (__privateGet(this, _state).dataChannel) {
        __privateGet(this, _state).dataChannel.close();
      }
      if (__privateGet(this, _state).peerConnection) {
        const peerConnection = __privateGet(this, _state).peerConnection;
        peerConnection.onconnectionstatechange = null;
        peerConnection.getSenders().forEach((sender) => {
          sender.track?.stop();
        });
        peerConnection.close();
      }
      if (__privateGet(this, _state).status !== "disconnected") {
        __privateSet(this, _state, {
          status: "disconnected",
          peerConnection: void 0,
          dataChannel: void 0,
          callId: void 0
        });
        this.emit("connection_change", __privateGet(this, _state).status);
        this._onClose();
      }
    }
    /**
     * Interrupt the current response if one is ongoing and clear the audio buffer so that the agent
     * stops talking.
     */
    interrupt() {
      if (__privateGet(this, _ongoingResponse)) {
        this.sendEvent({
          type: "response.cancel"
        });
        __privateSet(this, _ongoingResponse, false);
      }
      this.sendEvent({
        type: "output_audio_buffer.clear"
      });
    }
  };
  _url = new WeakMap();
  _state = new WeakMap();
  _useInsecureApiKey = new WeakMap();
  _ongoingResponse = new WeakMap();
  _muted = new WeakMap();

  // node_modules/@openai/agents-realtime/dist/shims/shims-browser.mjs
  var WebSocket = globalThis.WebSocket;
  function isBrowserEnvironment2() {
    return true;
  }
  var useWebSocketProtocols = true;

  // node_modules/@openai/agents-realtime/dist/openaiRealtimeWebsocket.mjs
  var _apiKey2, _url2, _defaultUrl, _state2, _useInsecureApiKey2, _currentItemId, _currentAudioContentIndex, _ongoingResponse2, _createWebSocket, _skipOpenEventListeners, _OpenAIRealtimeWebSocket_instances, resetAudioPlaybackState_fn, setupWebSocket_fn;
  var OpenAIRealtimeWebSocket = class extends OpenAIRealtimeBase {
    constructor(options = {}) {
      super(options);
      __privateAdd(this, _OpenAIRealtimeWebSocket_instances);
      __privateAdd(this, _apiKey2);
      __privateAdd(this, _url2);
      __privateAdd(this, _defaultUrl);
      __privateAdd(this, _state2, {
        status: "disconnected",
        websocket: void 0
      });
      __privateAdd(this, _useInsecureApiKey2);
      __privateAdd(this, _currentItemId);
      __privateAdd(this, _currentAudioContentIndex);
      /**
       * Timestamp maintained by the transport layer to aid with the calculation of the elapsed time
       * since the response started to compute the right interruption time.
       *
       * Mostly internal but might be used by extended transport layers for their interruption
       * calculation.
       */
      __publicField(this, "_firstAudioTimestamp");
      __publicField(this, "_audioLengthMs", 0);
      __privateAdd(this, _ongoingResponse2, false);
      __privateAdd(this, _createWebSocket);
      __privateAdd(this, _skipOpenEventListeners);
      __privateSet(this, _url2, options.url);
      __privateSet(this, _defaultUrl, options.url);
      __privateSet(this, _useInsecureApiKey2, options.useInsecureApiKey ?? false);
      __privateSet(this, _createWebSocket, options.createWebSocket);
      __privateSet(this, _skipOpenEventListeners, options.skipOpenEventListeners ?? false);
    }
    getCommonRequestHeaders() {
      return HEADERS;
    }
    /**
     * The current status of the WebSocket connection.
     */
    get status() {
      return __privateGet(this, _state2).status;
    }
    /**
     * The current connection state of the WebSocket connection.
     */
    get connectionState() {
      return __privateGet(this, _state2);
    }
    /**
     * Always returns `null` as the WebSocket transport layer does not handle muting. Instead,
     * this should be handled by the client by not triggering the `sendAudio` method.
     */
    get muted() {
      return null;
    }
    /**
     * The current item ID of the ongoing response.
     */
    get currentItemId() {
      return __privateGet(this, _currentItemId);
    }
    /**
     * Triggers the `audio` event that a client might listen to to receive the audio buffer.
     * Protected for you to be able to override and disable emitting this event in case your extended
     * transport layer handles audio internally.
     *
     * @param audioEvent - The audio event to emit.
     */
    _onAudio(audioEvent) {
      this.emit("audio", audioEvent);
    }
    _afterAudioDoneEvent() {
      __privateMethod(this, _OpenAIRealtimeWebSocket_instances, resetAudioPlaybackState_fn).call(this);
    }
    async connect(options) {
      const model = options.model ?? this.currentModel;
      this.currentModel = model;
      __privateSet(this, _apiKey2, await this._getApiKey(options));
      const callId = options.callId;
      let url;
      if (options.url) {
        url = options.url;
        __privateSet(this, _defaultUrl, options.url);
      } else if (callId) {
        url = `wss://api.openai.com/v1/realtime?call_id=${callId}`;
      } else if (__privateGet(this, _defaultUrl)) {
        url = __privateGet(this, _defaultUrl);
      } else {
        url = `wss://api.openai.com/v1/realtime?model=${this.currentModel}`;
      }
      __privateSet(this, _url2, url);
      const sessionConfig = {
        ...options.initialSessionConfig || {},
        model: this.currentModel
      };
      await new Promise((resolve, reject) => {
        __privateMethod(this, _OpenAIRealtimeWebSocket_instances, setupWebSocket_fn).call(this, resolve, reject, sessionConfig).catch(reject);
      });
      await this.updateSessionConfig(sessionConfig);
    }
    /**
     * Send an event to the Realtime API. This will stringify the event and send it directly to the
     * API. This can be used if you want to take control over the connection and send events manually.
     *
     * @param event - The event to send.
     */
    sendEvent(event) {
      if (!__privateGet(this, _state2).websocket) {
        throw new Error("WebSocket is not connected. Make sure you call `connect()` before sending events.");
      }
      __privateGet(this, _state2).websocket.send(JSON.stringify(event));
    }
    /**
     * Close the WebSocket connection.
     *
     * This will also reset any internal connection tracking used for interruption handling.
     */
    close() {
      __privateGet(this, _state2).websocket?.close();
      __privateSet(this, _currentItemId, void 0);
      this._firstAudioTimestamp = void 0;
      this._audioLengthMs = 0;
      __privateSet(this, _currentAudioContentIndex, void 0);
    }
    /**
     * Will throw an error as the WebSocket transport layer does not support muting.
     */
    mute(_muted2) {
      throw new Error("Mute is not supported for the WebSocket transport. You have to mute the audio input yourself.");
    }
    /**
     * Send an audio buffer to the Realtime API. This is used for your client to send audio to the
     * model to respond.
     *
     * @param audio - The audio buffer to send.
     * @param options - The options for the audio buffer.
     */
    sendAudio(audio, options = {}) {
      if (__privateGet(this, _state2).status === "connected") {
        super.sendAudio(audio, options);
      }
    }
    /**
     * Send a cancel response event to the Realtime API. This is used to cancel an ongoing
     *  response that the model is currently generating.
     */
    _cancelResponse() {
      if (__privateGet(this, _ongoingResponse2)) {
        this.sendEvent({
          type: "response.cancel"
        });
        __privateSet(this, _ongoingResponse2, false);
      }
    }
    /**
     * Do NOT call this method directly. Call `interrupt()` instead for proper interruption handling.
     *
     * This method is used to send the right events to the API to inform the model that the user has
     * interrupted the response. It might be overridden/extended by an extended transport layer. See
     * the `TwilioRealtimeTransportLayer` for an example.
     *
     * @param elapsedTime - The elapsed time since the response started.
     */
    _interrupt(elapsedTime, cancelOngoingResponse = true) {
      if (elapsedTime < 0) {
        return;
      }
      if (cancelOngoingResponse) {
        this._cancelResponse();
      }
      const length = this._audioLengthMs ?? Number.POSITIVE_INFINITY;
      const audio_end_ms = Math.max(0, Math.floor(Math.min(elapsedTime, length)));
      this.emit("audio_interrupted");
      this.sendEvent({
        type: "conversation.item.truncate",
        item_id: __privateGet(this, _currentItemId),
        content_index: __privateGet(this, _currentAudioContentIndex),
        audio_end_ms
      });
    }
    /**
     * Interrupt the ongoing response. This method is triggered automatically by the client when
     * voice activity detection (VAD) is enabled (default) as well as when an output guardrail got
     * triggered.
     *
     * You can also call this method directly if you want to interrupt the conversation for example
     * based on an event in the client.
     */
    interrupt(cancelOngoingResponse = true) {
      if (!__privateGet(this, _currentItemId) || typeof this._firstAudioTimestamp !== "number") {
        return;
      }
      const elapsedTime = Date.now() - this._firstAudioTimestamp;
      if (elapsedTime >= 0) {
        this._interrupt(elapsedTime, cancelOngoingResponse);
      }
      __privateMethod(this, _OpenAIRealtimeWebSocket_instances, resetAudioPlaybackState_fn).call(this);
    }
  };
  _apiKey2 = new WeakMap();
  _url2 = new WeakMap();
  _defaultUrl = new WeakMap();
  _state2 = new WeakMap();
  _useInsecureApiKey2 = new WeakMap();
  _currentItemId = new WeakMap();
  _currentAudioContentIndex = new WeakMap();
  _ongoingResponse2 = new WeakMap();
  _createWebSocket = new WeakMap();
  _skipOpenEventListeners = new WeakMap();
  _OpenAIRealtimeWebSocket_instances = new WeakSet();
  resetAudioPlaybackState_fn = function() {
    __privateSet(this, _currentItemId, void 0);
    this._firstAudioTimestamp = void 0;
    this._audioLengthMs = 0;
    __privateSet(this, _currentAudioContentIndex, void 0);
  };
  setupWebSocket_fn = async function(resolve, reject, sessionConfig) {
    if (__privateGet(this, _state2).websocket) {
      resolve();
      return;
    }
    if (!__privateGet(this, _apiKey2)) {
      throw new UserError("API key is not set. Please call `connect()` with an API key first.");
    }
    if (isBrowserEnvironment2() && !__privateGet(this, _apiKey2).startsWith("ek_") && !__privateGet(this, _useInsecureApiKey2)) {
      throw new UserError("Using the WebSocket connection in a browser environment requires an ephemeral client key. If you have to use a regular API key, set the `useInsecureApiKey` option to true.");
    }
    let ws = null;
    if (__privateGet(this, _createWebSocket)) {
      ws = await __privateGet(this, _createWebSocket).call(this, {
        url: __privateGet(this, _url2),
        apiKey: __privateGet(this, _apiKey2)
      });
    } else {
      const websocketArguments = useWebSocketProtocols ? [
        "realtime",
        // Auth
        "openai-insecure-api-key." + __privateGet(this, _apiKey2),
        // Version header
        WEBSOCKET_META
      ] : {
        headers: {
          Authorization: `Bearer ${__privateGet(this, _apiKey2)}`,
          ...this.getCommonRequestHeaders()
        }
      };
      ws = new WebSocket(__privateGet(this, _url2), websocketArguments);
    }
    __privateSet(this, _state2, {
      status: "connecting",
      websocket: ws
    });
    this.emit("connection_change", __privateGet(this, _state2).status);
    const onSocketOpenReady = () => {
      __privateSet(this, _state2, {
        status: "connected",
        websocket: ws
      });
      this.emit("connection_change", __privateGet(this, _state2).status);
      this._onOpen();
      resolve();
    };
    if (__privateGet(this, _skipOpenEventListeners) === true) {
      onSocketOpenReady();
    } else {
      ws.addEventListener("open", onSocketOpenReady);
    }
    ws.addEventListener("error", (error2) => {
      this._onError(error2);
      __privateSet(this, _state2, {
        status: "disconnected",
        websocket: void 0
      });
      this.emit("connection_change", __privateGet(this, _state2).status);
      reject(error2);
    });
    ws.addEventListener("message", (message) => {
      this._onMessage(message);
      const { data: parsed, isGeneric } = parseRealtimeEvent(message);
      if (!parsed || isGeneric) {
        return;
      }
      if (parsed.type === "response.output_audio.delta") {
        __privateSet(this, _currentAudioContentIndex, parsed.content_index);
        __privateSet(this, _currentItemId, parsed.item_id);
        if (this._firstAudioTimestamp === void 0) {
          this._firstAudioTimestamp = Date.now();
          this._audioLengthMs = 0;
        }
        const buff = base64ToArrayBuffer(parsed.delta);
        const fmt = this._rawSessionConfig?.audio?.output?.format;
        if (fmt && typeof fmt === "object") {
          const t = fmt.type;
          if (t === "audio/pcmu" || t === "audio/pcma") {
            this._audioLengthMs += buff.byteLength / 8;
          } else if (t === "audio/pcm") {
            const rate = fmt.rate ?? 24e3;
            this._audioLengthMs += buff.byteLength / 2 / rate * 1e3;
          } else {
            this._audioLengthMs += buff.byteLength / 24 / 2;
          }
        } else if (typeof fmt === "string") {
          if (fmt.startsWith("g711_")) {
            this._audioLengthMs += buff.byteLength / 8;
          } else {
            this._audioLengthMs += buff.byteLength / 24 / 2;
          }
        } else {
          this._audioLengthMs += buff.byteLength / 24 / 2;
        }
        const audioEvent = {
          type: "audio",
          data: buff,
          responseId: parsed.response_id
        };
        this._onAudio(audioEvent);
      } else if (parsed.type === "input_audio_buffer.speech_started") {
        const automaticResponseCancellationEnabled = this._rawSessionConfig?.audio?.input?.turn_detection?.interrupt_response ?? false;
        this.interrupt(!automaticResponseCancellationEnabled);
      } else if (parsed.type === "response.created") {
        __privateSet(this, _ongoingResponse2, true);
      } else if (parsed.type === "response.done") {
        __privateSet(this, _ongoingResponse2, false);
      } else if (parsed.type === "session.created") {
        this._tracingConfig = parsed.session.tracing;
        const tracingConfig = typeof sessionConfig.tracing === "undefined" ? "auto" : sessionConfig.tracing;
        this._updateTracingConfig(tracingConfig);
      }
    });
    ws.addEventListener("close", () => {
      __privateSet(this, _state2, {
        status: "disconnected",
        websocket: void 0
      });
      this.emit("connection_change", __privateGet(this, _state2).status);
      this._onClose();
    });
  };

  // node_modules/@openai/agents-realtime/dist/tool.mjs
  var BACKGROUND_RESULT_SYMBOL = /* @__PURE__ */ Symbol("backgroundResult");
  function isBackgroundResult(result) {
    return typeof result === "object" && result !== null && BACKGROUND_RESULT_SYMBOL in result;
  }
  function isValidRealtimeTool(tool2) {
    return tool2.type === "function" || tool2.type === "hosted_tool" && tool2.name === "hosted_mcp";
  }
  function toRealtimeToolDefinition(tool2) {
    if (tool2.type === "function") {
      return tool2;
    }
    if (tool2.type === "hosted_tool" && tool2.name === "hosted_mcp") {
      const serverUrl = tool2.providerData.server_url && tool2.providerData.server_url.length > 0 ? tool2.providerData.server_url : void 0;
      return {
        type: "mcp",
        server_label: tool2.providerData.server_label,
        server_url: serverUrl,
        headers: tool2.providerData.headers,
        allowed_tools: tool2.providerData.allowed_tools,
        require_approval: tool2.providerData.require_approval
      };
    }
    throw new UserError(`Invalid tool type: ${tool2}`);
  }

  // node_modules/@openai/agents-realtime/dist/realtimeSession.mjs
  function cloneDefaultSessionConfig() {
    return JSON.parse(JSON.stringify(DEFAULT_OPENAI_REALTIME_SESSION_CONFIG));
  }
  var _transport, _currentAgent, _currentTools, _context, _outputGuardrails, _outputGuardrailSettings, _transcribedTextDeltas, _history, _shouldIncludeAudioData, _interruptedByGuardrail, _audioStarted, _allMcpToolsByServer, _availableMcpTools, _lastSessionConfig, _automaticallyTriggerResponseForMcpToolCalls, _RealtimeSession_instances, setCurrentAgent_fn, getSessionConfig_fn, handleHandoff_fn, handleFunctionToolCall_fn, handleFunctionCall_fn, runOutputGuardrails_fn2, setEventListeners_fn, updateAvailableMcpTools_fn;
  var _RealtimeSession = class _RealtimeSession extends BrowserEventEmitter {
    constructor(initialAgent, options = {}) {
      super();
      __privateAdd(this, _RealtimeSession_instances);
      __publicField(this, "initialAgent");
      __publicField(this, "options");
      __privateAdd(this, _transport);
      __privateAdd(this, _currentAgent);
      __privateAdd(this, _currentTools);
      __privateAdd(this, _context);
      __privateAdd(this, _outputGuardrails, []);
      __privateAdd(this, _outputGuardrailSettings);
      __privateAdd(this, _transcribedTextDeltas, {});
      __privateAdd(this, _history, []);
      __privateAdd(this, _shouldIncludeAudioData);
      __privateAdd(this, _interruptedByGuardrail, {});
      __privateAdd(this, _audioStarted, false);
      // Tracks all MCP tools fetched per server label (from mcp_list_tools results).
      __privateAdd(this, _allMcpToolsByServer, /* @__PURE__ */ new Map());
      // Tracks currently available MCP tools based on the active agent's configured server_labels.
      __privateAdd(this, _availableMcpTools, []);
      // Keeps track of the last full session config we sent (camelCase keys) so that
      // subsequent updates (e.g. during agent handoffs) preserve properties that are
      // not explicitly recalculated here (such as inputAudioFormat, outputAudioFormat,
      // modalities, speed, toolChoice, turnDetection, etc.). Without this, updating
      // the agent would drop audio format overrides (e.g. g711_ulaw) and revert to
      // transport defaults causing issues for integrations like Twilio.
      __privateAdd(this, _lastSessionConfig, cloneDefaultSessionConfig());
      __privateAdd(this, _automaticallyTriggerResponseForMcpToolCalls, true);
      this.initialAgent = initialAgent;
      this.options = options;
      if (typeof options.transport === "undefined" && hasWebRTCSupport() || options.transport === "webrtc") {
        __privateSet(this, _transport, new OpenAIRealtimeWebRTC());
      } else if (options.transport === "websocket" || typeof options.transport === "undefined") {
        __privateSet(this, _transport, new OpenAIRealtimeWebSocket());
      } else {
        __privateSet(this, _transport, options.transport);
      }
      __privateSet(this, _currentAgent, initialAgent);
      __privateSet(this, _context, new RunContext({
        ...options.context ?? {},
        history: __privateGet(this, _history)
      }));
      __privateSet(this, _outputGuardrails, (options.outputGuardrails ?? []).map(defineRealtimeOutputGuardrail));
      __privateSet(this, _outputGuardrailSettings, getRealtimeGuardrailSettings(options.outputGuardrailSettings ?? {}));
      __privateSet(this, _shouldIncludeAudioData, options.historyStoreAudio ?? false);
      __privateSet(this, _automaticallyTriggerResponseForMcpToolCalls, options.automaticallyTriggerResponseForMcpToolCalls ?? true);
    }
    /**
     * The transport layer used by the session.
     */
    get transport() {
      return __privateGet(this, _transport);
    }
    /**
     * The current agent in the session.
     */
    get currentAgent() {
      return __privateGet(this, _currentAgent);
    }
    /**
     * The current usage of the session.
     */
    get usage() {
      return __privateGet(this, _context).usage;
    }
    /**
     * The current context of the session.
     */
    get context() {
      return __privateGet(this, _context);
    }
    /**
     * Whether the session is muted. Might be `null` if the underlying transport layer does not
     * support muting.
     */
    get muted() {
      return __privateGet(this, _transport).muted;
    }
    /**
     * The history of the session.
     */
    get history() {
      return __privateGet(this, _history);
    }
    get availableMcpTools() {
      return __privateGet(this, _availableMcpTools);
    }
    /**
     * Compute the initial session config that the current session will use when connecting.
     *
     * This mirrors the configuration payload we send during `connect`, including dynamic values
     * such as the upstream agent instructions, tool definitions, and prompt content generated at
     * runtime. Keeping this helper exposed allows transports or orchestration layers to precompute
     * a CallAccept-compatible payload without opening a socket.
     *
     * @param overrides - Additional config overrides applied on top of the session options.
     */
    async getInitialSessionConfig(overrides = {}) {
      await __privateMethod(this, _RealtimeSession_instances, setCurrentAgent_fn).call(this, this.initialAgent);
      return __privateMethod(this, _RealtimeSession_instances, getSessionConfig_fn).call(this, {
        ...this.options.config ?? {},
        ...overrides ?? {}
      });
    }
    /**
     * Convenience helper to compute the initial session config without manually instantiating and connecting a session.
     *
     * This is primarily useful for integrations that must provide the session configuration to a
     * third party (for example the SIP `calls.accept` endpoint) before the actual realtime session
     * is attached. The helper instantiates a throwaway session so all agent-driven dynamic fields
     * resolve in exactly the same way as the live session path.
     *
     * @param agent - The starting agent for the session.
     * @param options - Session options used to seed the config calculation.
     * @param overrides - Additional config overrides applied on top of the provided options.
     */
    static async computeInitialSessionConfig(agent, options = {}, overrides = {}) {
      const session = new _RealtimeSession(agent, options);
      try {
        return await session.getInitialSessionConfig(overrides);
      } finally {
        session.close();
      }
    }
    async updateAgent(newAgent) {
      __privateGet(this, _currentAgent).emit("agent_handoff", __privateGet(this, _context), newAgent);
      this.emit("agent_handoff", __privateGet(this, _context), __privateGet(this, _currentAgent), newAgent);
      await __privateMethod(this, _RealtimeSession_instances, setCurrentAgent_fn).call(this, newAgent);
      await __privateGet(this, _transport).updateSessionConfig(await __privateMethod(this, _RealtimeSession_instances, getSessionConfig_fn).call(this));
      return newAgent;
    }
    /**
     * Connect to the session. This will establish the connection to the underlying transport layer
     * and start the session.
     *
     * After connecting, the session will also emit a `history_updated` event with an empty history.
     *
     * @param options - The options for the connection.
     */
    async connect(options) {
      await __privateMethod(this, _RealtimeSession_instances, setCurrentAgent_fn).call(this, this.initialAgent);
      __privateMethod(this, _RealtimeSession_instances, setEventListeners_fn).call(this);
      await __privateGet(this, _transport).connect({
        apiKey: options.apiKey ?? this.options.apiKey,
        model: this.options.model,
        url: options.url,
        callId: options.callId,
        initialSessionConfig: await __privateMethod(this, _RealtimeSession_instances, getSessionConfig_fn).call(this, this.options.config)
      });
      __privateSet(this, _history, []);
      this.emit("history_updated", __privateGet(this, _history));
    }
    /**
     * Update the history of the session.
     * @param newHistory - The new history to set.
     */
    updateHistory(newHistory) {
      let updatedHistory;
      if (typeof newHistory === "function") {
        updatedHistory = newHistory(__privateGet(this, _history));
      } else {
        updatedHistory = newHistory;
      }
      __privateGet(this, _transport).resetHistory(__privateGet(this, _history), updatedHistory);
    }
    /**
     * Send a message to the session.
     * @param message - The message to send.
     * @param otherEventData - Additional event data to send.
     */
    sendMessage(message, otherEventData = {}) {
      __privateGet(this, _transport).sendMessage(message, otherEventData);
    }
    /**
     * Add image to the session
     * @param image - The image to add.
     */
    addImage(image, { triggerResponse = true } = {}) {
      __privateGet(this, _transport).addImage(image, { triggerResponse });
    }
    /**
     * Mute the session.
     * @param muted - Whether to mute the session.
     */
    mute(muted) {
      __privateGet(this, _transport).mute(muted);
    }
    /**
     * Disconnect from the session.
     */
    close() {
      __privateSet(this, _interruptedByGuardrail, {});
      __privateGet(this, _transport).close();
    }
    /**
     * Send audio to the session.
     * @param audio - The audio to send.
     * @param options - Additional options.
     * @param options.commit - Whether to finish the turn with this audio.
     */
    sendAudio(audio, options = {}) {
      __privateGet(this, _transport).sendAudio(audio, options);
    }
    /**
     * Interrupt the session artificially for example if you want to build a "stop talking"
     * button.
     */
    interrupt() {
      __privateGet(this, _transport).interrupt();
    }
    /**
     * Approve a tool call. This will also trigger the tool call to the agent.
     * @param approvalItem - The approval item to approve.
     * @param options - Additional options.
     * @param options.alwaysApprove - Whether to always approve the tool call.
     */
    async approve(approvalItem, options = { alwaysApprove: false }) {
      __privateGet(this, _context).approveTool(approvalItem, options);
      const toolName = approvalItem.toolName ?? approvalItem.rawItem.name;
      const tool2 = __privateGet(this, _currentAgent).tools.find((tool3) => tool3.name === toolName);
      if (tool2 && tool2.type === "function" && approvalItem.rawItem.type === "function_call") {
        await __privateMethod(this, _RealtimeSession_instances, handleFunctionToolCall_fn).call(this, approvalItem.rawItem, tool2);
      } else if (approvalItem.rawItem.type === "hosted_tool_call") {
        if (options.alwaysApprove) {
          logger_default2.warn("Always approving MCP tools is not supported. Use the allowed tools configuration instead.");
        }
        const mcpApprovalRequest = approvalItemToRealtimeApprovalItem(approvalItem);
        __privateGet(this, _transport).sendMcpResponse(mcpApprovalRequest, true);
      } else {
        throw new ModelBehaviorError(`Tool ${toolName ?? "unknown"} not found`);
      }
    }
    /**
     * Reject a tool call. This will also trigger the tool call to the agent.
     * @param approvalItem - The approval item to reject.
     * @param options - Additional options.
     * @param options.alwaysReject - Whether to always reject the tool call.
     */
    async reject(approvalItem, options = { alwaysReject: false }) {
      __privateGet(this, _context).rejectTool(approvalItem, options);
      const toolName = approvalItem.toolName ?? approvalItem.rawItem.name;
      const tool2 = __privateGet(this, _currentAgent).tools.find((tool3) => tool3.name === toolName);
      if (tool2 && tool2.type === "function" && approvalItem.rawItem.type === "function_call") {
        await __privateMethod(this, _RealtimeSession_instances, handleFunctionToolCall_fn).call(this, approvalItem.rawItem, tool2);
      } else if (approvalItem.rawItem.type === "hosted_tool_call") {
        if (options.alwaysReject) {
          logger_default2.warn("Always rejecting MCP tools is not supported. Use the allowed tools configuration instead.");
        }
        const mcpApprovalRequest = approvalItemToRealtimeApprovalItem(approvalItem);
        __privateGet(this, _transport).sendMcpResponse(mcpApprovalRequest, false);
      } else {
        throw new ModelBehaviorError(`Tool ${toolName ?? "unknown"} not found`);
      }
    }
  };
  _transport = new WeakMap();
  _currentAgent = new WeakMap();
  _currentTools = new WeakMap();
  _context = new WeakMap();
  _outputGuardrails = new WeakMap();
  _outputGuardrailSettings = new WeakMap();
  _transcribedTextDeltas = new WeakMap();
  _history = new WeakMap();
  _shouldIncludeAudioData = new WeakMap();
  _interruptedByGuardrail = new WeakMap();
  _audioStarted = new WeakMap();
  _allMcpToolsByServer = new WeakMap();
  _availableMcpTools = new WeakMap();
  _lastSessionConfig = new WeakMap();
  _automaticallyTriggerResponseForMcpToolCalls = new WeakMap();
  _RealtimeSession_instances = new WeakSet();
  setCurrentAgent_fn = async function(agent) {
    __privateSet(this, _currentAgent, agent);
    const handoffs = await __privateGet(this, _currentAgent).getEnabledHandoffs(__privateGet(this, _context));
    const handoffTools = handoffs.map((handoff2) => handoff2.getHandoffAsFunctionTool());
    const allTools = (await __privateGet(this, _currentAgent).getAllTools(__privateGet(this, _context))).filter(isValidRealtimeTool).map(toRealtimeToolDefinition);
    const hasToolsDefined = typeof __privateGet(this, _currentAgent).tools !== "undefined" || typeof __privateGet(this, _currentAgent).mcpServers !== "undefined";
    const hasHandoffsDefined = handoffs.length > 0;
    __privateSet(this, _currentTools, hasToolsDefined || hasHandoffsDefined ? [...allTools, ...handoffTools] : void 0);
    __privateMethod(this, _RealtimeSession_instances, updateAvailableMcpTools_fn).call(this);
  };
  getSessionConfig_fn = async function(additionalConfig = {}) {
    const overridesConfig = additionalConfig ?? {};
    const optionsConfig = this.options.config ?? {};
    const instructions = await __privateGet(this, _currentAgent).getSystemPrompt(__privateGet(this, _context));
    const getAudioOutputVoiceOverride = (config2) => {
      const audioConfig = config2.audio;
      return audioConfig?.output?.voice;
    };
    const tracingConfig = this.options.tracingDisabled ? null : this.options.workflowName ? {
      workflow_name: this.options.workflowName
    } : "auto";
    if (tracingConfig !== null && tracingConfig !== "auto") {
      if (this.options.groupId) {
        tracingConfig.group_id = this.options.groupId;
      }
      if (this.options.traceMetadata) {
        tracingConfig.metadata = this.options.traceMetadata;
      }
    } else if (this.options.groupId || this.options.traceMetadata) {
      logger_default2.warn("In order to set traceMetadata or a groupId you need to specify a workflowName.");
    }
    const audioOutputVoiceOverride = getAudioOutputVoiceOverride(overridesConfig) ?? getAudioOutputVoiceOverride(optionsConfig);
    const topLevelVoiceOverride = overridesConfig.voice ?? optionsConfig.voice;
    const resolvedVoice = typeof audioOutputVoiceOverride !== "undefined" ? audioOutputVoiceOverride : typeof topLevelVoiceOverride !== "undefined" ? topLevelVoiceOverride : __privateGet(this, _currentAgent).voice;
    const base = {
      ...__privateGet(this, _lastSessionConfig) ?? {},
      ...optionsConfig,
      ...overridesConfig
    };
    const fullConfig = {
      ...base,
      instructions,
      voice: resolvedVoice,
      model: this.options.model,
      tools: __privateGet(this, _currentTools),
      tracing: tracingConfig,
      prompt: typeof __privateGet(this, _currentAgent).prompt === "function" ? await __privateGet(this, _currentAgent).prompt(__privateGet(this, _context), __privateGet(this, _currentAgent)) : __privateGet(this, _currentAgent).prompt
    };
    __privateSet(this, _lastSessionConfig, fullConfig);
    return fullConfig;
  };
  handleHandoff_fn = async function(toolCall, handoff2) {
    const newAgent = await handoff2.onInvokeHandoff(__privateGet(this, _context), toolCall.arguments);
    __privateGet(this, _currentAgent).emit("agent_handoff", __privateGet(this, _context), newAgent);
    this.emit("agent_handoff", __privateGet(this, _context), __privateGet(this, _currentAgent), newAgent);
    await __privateMethod(this, _RealtimeSession_instances, setCurrentAgent_fn).call(this, newAgent);
    await __privateGet(this, _transport).updateSessionConfig(await __privateMethod(this, _RealtimeSession_instances, getSessionConfig_fn).call(this));
    const output = getTransferMessage(newAgent);
    __privateGet(this, _transport).sendFunctionCallOutput(toolCall, output, true);
    return newAgent;
  };
  handleFunctionToolCall_fn = async function(toolCall, tool2) {
    __privateGet(this, _context).context.history = JSON.parse(JSON.stringify(__privateGet(this, _history)));
    let parsedArgs = toolCall.arguments;
    if (tool2.parameters) {
      if (isZodObject(tool2.parameters)) {
        parsedArgs = tool2.parameters.parse(parsedArgs);
      } else {
        parsedArgs = JSON.parse(parsedArgs);
      }
    }
    const needsApproval = await tool2.needsApproval(__privateGet(this, _context), parsedArgs, toolCall.callId);
    if (needsApproval) {
      const approval = this.context.isToolApproved({
        toolName: tool2.name,
        callId: toolCall.callId
      });
      if (approval === false) {
        this.emit("agent_tool_start", __privateGet(this, _context), __privateGet(this, _currentAgent), tool2, {
          toolCall
        });
        __privateGet(this, _currentAgent).emit("agent_tool_start", __privateGet(this, _context), tool2, {
          toolCall
        });
        const result2 = "Tool execution was not approved.";
        __privateGet(this, _transport).sendFunctionCallOutput(toolCall, result2, true);
        this.emit("agent_tool_end", __privateGet(this, _context), __privateGet(this, _currentAgent), tool2, result2, { toolCall });
        __privateGet(this, _currentAgent).emit("agent_tool_end", __privateGet(this, _context), tool2, result2, {
          toolCall
        });
        return;
      } else if (typeof approval === "undefined") {
        this.emit("tool_approval_requested", __privateGet(this, _context), __privateGet(this, _currentAgent), {
          type: "function_approval",
          tool: tool2,
          approvalItem: new RunToolApprovalItem(toolCall, __privateGet(this, _currentAgent))
        });
        return;
      }
    }
    this.emit("agent_tool_start", __privateGet(this, _context), __privateGet(this, _currentAgent), tool2, {
      toolCall
    });
    __privateGet(this, _currentAgent).emit("agent_tool_start", __privateGet(this, _context), tool2, {
      toolCall
    });
    __privateGet(this, _context).context.history = JSON.parse(JSON.stringify(__privateGet(this, _history)));
    const result = await tool2.invoke(__privateGet(this, _context), toolCall.arguments, {
      toolCall
    });
    let stringResult;
    if (isBackgroundResult(result)) {
      stringResult = toSmartString(result.content);
      __privateGet(this, _transport).sendFunctionCallOutput(toolCall, stringResult, false);
    } else {
      stringResult = toSmartString(result);
      __privateGet(this, _transport).sendFunctionCallOutput(toolCall, stringResult, true);
    }
    this.emit("agent_tool_end", __privateGet(this, _context), __privateGet(this, _currentAgent), tool2, stringResult, { toolCall });
    __privateGet(this, _currentAgent).emit("agent_tool_end", __privateGet(this, _context), tool2, stringResult, { toolCall });
  };
  handleFunctionCall_fn = async function(toolCall) {
    const enabledHandoffs = await __privateGet(this, _currentAgent).getEnabledHandoffs(__privateGet(this, _context));
    const handoffMap = new Map(enabledHandoffs.map((handoff2) => [handoff2.toolName, handoff2]));
    const allTools = await __privateGet(this, _currentAgent).getAllTools(__privateGet(this, _context));
    const functionToolMap = new Map(allTools.map((tool2) => [tool2.name, tool2]));
    const possibleHandoff = handoffMap.get(toolCall.name);
    if (possibleHandoff) {
      await __privateMethod(this, _RealtimeSession_instances, handleHandoff_fn).call(this, toolCall, possibleHandoff);
    } else {
      const functionTool = functionToolMap.get(toolCall.name);
      if (functionTool && functionTool.type === "function") {
        await __privateMethod(this, _RealtimeSession_instances, handleFunctionToolCall_fn).call(this, toolCall, functionTool);
      } else {
        throw new ModelBehaviorError(`Tool ${toolCall.name} not found`);
      }
    }
  };
  runOutputGuardrails_fn2 = async function(output, responseId, itemId) {
    if (__privateGet(this, _outputGuardrails).length === 0) {
      return;
    }
    const guardrailArgs = {
      agent: __privateGet(this, _currentAgent),
      agentOutput: output,
      context: __privateGet(this, _context)
    };
    const results = await Promise.all(__privateGet(this, _outputGuardrails).map((guardrail) => guardrail.run(guardrailArgs)));
    const firstTripwireTriggered = results.find((result) => result.output.tripwireTriggered);
    if (firstTripwireTriggered) {
      if (__privateGet(this, _interruptedByGuardrail)[responseId]) {
        return;
      }
      __privateGet(this, _interruptedByGuardrail)[responseId] = true;
      const error2 = new OutputGuardrailTripwireTriggered(`Output guardrail triggered: ${JSON.stringify(firstTripwireTriggered.output.outputInfo)}`, firstTripwireTriggered);
      this.emit("guardrail_tripped", __privateGet(this, _context), __privateGet(this, _currentAgent), error2, {
        itemId
      });
      this.interrupt();
      const feedbackText = getRealtimeGuardrailFeedbackMessage(firstTripwireTriggered);
      this.sendMessage(feedbackText);
      return;
    }
  };
  setEventListeners_fn = function() {
    __privateGet(this, _transport).on("*", (event) => {
      this.emit("transport_event", event);
      if (event.type === "conversation.item.input_audio_transcription.completed") {
        try {
          const completedEvent = event;
          __privateSet(this, _history, updateRealtimeHistory(__privateGet(this, _history), completedEvent, __privateGet(this, _shouldIncludeAudioData)));
          __privateGet(this, _context).context.history = __privateGet(this, _history);
          this.emit("history_updated", __privateGet(this, _history));
        } catch (err) {
          this.emit("error", {
            type: "error",
            error: err
          });
        }
      }
    });
    __privateGet(this, _transport).on("mcp_tools_listed", ({ serverLabel, tools }) => {
      try {
        __privateGet(this, _allMcpToolsByServer).set(serverLabel, tools ?? []);
        __privateMethod(this, _RealtimeSession_instances, updateAvailableMcpTools_fn).call(this);
      } catch (err) {
        this.emit("error", { type: "error", error: err });
      }
    });
    __privateGet(this, _transport).on("audio", (event) => {
      if (!__privateGet(this, _audioStarted)) {
        __privateSet(this, _audioStarted, true);
        this.emit("audio_start", __privateGet(this, _context), __privateGet(this, _currentAgent));
      }
      this.emit("audio", event);
    });
    __privateGet(this, _transport).on("turn_started", () => {
      __privateSet(this, _audioStarted, false);
      this.emit("agent_start", __privateGet(this, _context), __privateGet(this, _currentAgent));
      __privateGet(this, _currentAgent).emit("agent_start", __privateGet(this, _context), __privateGet(this, _currentAgent));
    });
    __privateGet(this, _transport).on("turn_done", (event) => {
      const item = event.response.output[event.response.output.length - 1];
      const textOutput = getLastTextFromAudioOutputMessage(item) ?? "";
      const itemId = item?.id ?? "";
      this.emit("agent_end", __privateGet(this, _context), __privateGet(this, _currentAgent), textOutput);
      __privateGet(this, _currentAgent).emit("agent_end", __privateGet(this, _context), textOutput);
      __privateMethod(this, _RealtimeSession_instances, runOutputGuardrails_fn2).call(this, textOutput, event.response.id, itemId);
    });
    __privateGet(this, _transport).on("audio_done", () => {
      if (__privateGet(this, _audioStarted)) {
        __privateSet(this, _audioStarted, false);
      }
      this.emit("audio_stopped", __privateGet(this, _context), __privateGet(this, _currentAgent));
    });
    let lastRunIndex = 0;
    let lastItemId;
    __privateGet(this, _transport).on("audio_transcript_delta", (event) => {
      try {
        const delta = event.delta;
        const itemId = event.itemId;
        const responseId = event.responseId;
        if (lastItemId !== itemId) {
          lastItemId = itemId;
          lastRunIndex = 0;
        }
        const currentText = __privateGet(this, _transcribedTextDeltas)[itemId] ?? "";
        const newText = currentText + delta;
        __privateGet(this, _transcribedTextDeltas)[itemId] = newText;
        if (__privateGet(this, _outputGuardrailSettings).debounceTextLength < 0) {
          return;
        }
        const newRunIndex = Math.floor(newText.length / __privateGet(this, _outputGuardrailSettings).debounceTextLength);
        if (newRunIndex > lastRunIndex) {
          lastRunIndex = newRunIndex;
          __privateMethod(this, _RealtimeSession_instances, runOutputGuardrails_fn2).call(this, newText, responseId, itemId);
        }
      } catch (err) {
        this.emit("error", {
          type: "error",
          error: err
        });
      }
    });
    __privateGet(this, _transport).on("item_update", (event) => {
      try {
        const isNew = !__privateGet(this, _history).some((item) => item.itemId === event.itemId);
        __privateSet(this, _history, updateRealtimeHistory(__privateGet(this, _history), event, __privateGet(this, _shouldIncludeAudioData)));
        __privateGet(this, _context).context.history = __privateGet(this, _history);
        if (isNew) {
          const addedItem = __privateGet(this, _history).find((item) => item.itemId === event.itemId);
          if (addedItem) {
            this.emit("history_added", addedItem);
          }
        }
        this.emit("history_updated", __privateGet(this, _history));
      } catch (err) {
        this.emit("error", {
          type: "error",
          error: err
        });
      }
    });
    __privateGet(this, _transport).on("item_deleted", (event) => {
      try {
        __privateSet(this, _history, __privateGet(this, _history).filter((item) => item.itemId !== event.itemId));
        __privateGet(this, _context).context.history = __privateGet(this, _history);
        this.emit("history_updated", __privateGet(this, _history));
      } catch (err) {
        this.emit("error", {
          type: "error",
          error: err
        });
      }
    });
    __privateGet(this, _transport).on("function_call", async (event) => {
      try {
        await __privateMethod(this, _RealtimeSession_instances, handleFunctionCall_fn).call(this, event);
      } catch (error2) {
        logger_default2.error("Error handling function call", error2);
        this.emit("error", {
          type: "error",
          error: error2
        });
      }
    });
    __privateGet(this, _transport).on("usage_update", (usage) => {
      __privateGet(this, _context).usage.add(usage);
    });
    __privateGet(this, _transport).on("audio_interrupted", () => {
      if (__privateGet(this, _audioStarted)) {
        __privateSet(this, _audioStarted, false);
      }
      this.emit("audio_interrupted", __privateGet(this, _context), __privateGet(this, _currentAgent));
    });
    __privateGet(this, _transport).on("error", (error2) => {
      this.emit("error", error2);
    });
    __privateGet(this, _transport).on("mcp_tool_call_completed", (toolCall) => {
      this.emit("mcp_tool_call_completed", __privateGet(this, _context), __privateGet(this, _currentAgent), toolCall);
      if (__privateGet(this, _automaticallyTriggerResponseForMcpToolCalls)) {
        __privateGet(this, _transport).sendEvent({
          type: "response.create"
        });
      }
    });
    __privateGet(this, _transport).on("mcp_approval_request", (approvalRequest) => {
      this.emit("tool_approval_requested", __privateGet(this, _context), __privateGet(this, _currentAgent), {
        type: "mcp_approval_request",
        approvalItem: realtimeApprovalItemToApprovalItem(__privateGet(this, _currentAgent), approvalRequest)
      });
    });
  };
  /**
   * Recomputes the currently available MCP tools based on the current agent's active
   * MCP server configurations and the cached per-server tool listings. Emits
   * `mcp_tools_changed` if the set changed.
   */
  updateAvailableMcpTools_fn = function() {
    const activeMcpConfigs = __privateGet(this, _currentTools)?.filter((t) => t.type === "mcp");
    const allowedFromConfig = (cfg) => {
      const allowed = cfg.allowed_tools;
      if (!allowed)
        return void 0;
      if (Array.isArray(allowed))
        return allowed;
      if (allowed && Array.isArray(allowed.tool_names))
        return allowed.tool_names;
      return void 0;
    };
    const dedupByName = /* @__PURE__ */ new Map();
    for (const cfg of activeMcpConfigs) {
      const tools = __privateGet(this, _allMcpToolsByServer).get(cfg.server_label) ?? [];
      const allowed = allowedFromConfig(cfg);
      for (const tool2 of tools) {
        if (allowed && !allowed.includes(tool2.name))
          continue;
        if (!dedupByName.has(tool2.name)) {
          dedupByName.set(tool2.name, tool2);
        }
      }
    }
    const next = Array.from(dedupByName.values());
    const prev = __privateGet(this, _availableMcpTools);
    const changed = prev.length !== next.length || JSON.stringify(prev.map((t) => t.name).sort()) !== JSON.stringify(next.map((t) => t.name).sort());
    if (changed) {
      __privateSet(this, _availableMcpTools, next);
      this.emit("mcp_tools_changed", __privateGet(this, _availableMcpTools));
    }
  };
  var RealtimeSession = _RealtimeSession;

  // src/hotel-config.ts
  function getHotelInfo() {
    return {
      name: "Novotel Auckland Ellerslie",
      location: "Ellerslie, Auckland, New Zealand",
      address: "72-112 Greenlane Road East, Ellerslie, Auckland 1051",
      phone: "+64 9 529 9530",
      email: "H6167@accor.com",
      checkInTime: "2:00 PM",
      checkOutTime: "11:00 AM",
      amenities: [
        "Free WiFi",
        "Outdoor Swimming Pool",
        "Fully-Equipped Fitness Center",
        "Restaurant & Stylish Bar",
        "24/7 Room Service",
        "Concierge Service",
        "Free Parking",
        "Business Center",
        "Conference Facilities",
        "Near Ellerslie Racecourse",
        "Voice AI Assistant by Brantas"
      ],
      description: "A premium 4.5-star Accor hotel in Ellerslie, Auckland. Just 15 minutes from the city center, offering modern amenities, stylish accommodations, and advanced Voice AI technology powered by Brantas."
    };
  }
  function getRoomTypes() {
    return [
      {
        id: "standard",
        name: "Standard Room",
        description: "Comfortable room with city view, queen bed, and modern amenities",
        price: 180,
        capacity: 2,
        inventory: 20,
        features: [
          "Queen bed",
          "City view",
          "Free WiFi",
          "Flat-screen TV",
          "Mini bar",
          "Coffee maker",
          "Private bathroom"
        ]
      },
      {
        id: "deluxe",
        name: "Deluxe Room",
        description: "Spacious room with harbor view, king bed, and premium amenities",
        price: 280,
        capacity: 3,
        inventory: 15,
        features: [
          "King bed",
          "Harbor view",
          "Free WiFi",
          "Flat-screen TV",
          "Mini bar",
          "Coffee maker",
          "Private bathroom",
          "Work desk",
          "Sitting area"
        ]
      },
      {
        id: "suite",
        name: "Executive Suite",
        description: "Luxurious suite with separate living area, panoramic views",
        price: 450,
        capacity: 4,
        inventory: 8,
        features: [
          "King bed",
          "Separate living room",
          "Panoramic views",
          "Free WiFi",
          "Two flat-screen TVs",
          "Premium mini bar",
          "Nespresso machine",
          "Luxury bathroom with spa bath",
          "Work desk",
          "Dining area"
        ]
      },
      {
        id: "penthouse",
        name: "Penthouse Suite",
        description: "Ultimate luxury with 360-degree views, multiple rooms, and exclusive services",
        price: 850,
        capacity: 6,
        inventory: 2,
        features: [
          "Two king bedrooms",
          "Large living room",
          "360-degree city and harbor views",
          "Free WiFi",
          "Multiple flat-screen TVs",
          "Full kitchen",
          "Premium bar",
          "Nespresso machine",
          "Two luxury bathrooms",
          "Private terrace",
          "Butler service",
          "Dining area for 8"
        ]
      }
    ];
  }

  // src/booking-api.ts
  var BookingAPI = class {
    constructor() {
      __publicField(this, "baseUrl", "/api");
    }
    async createBooking(bookingData) {
      try {
        const response = await fetch(`${this.baseUrl}/bookings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData)
        });
        if (!response.ok) {
          const error2 = await response.json();
          return { success: false, error: error2.error || "Failed to create booking" };
        }
        const result = await response.json();
        return result;
      } catch (error2) {
        return { success: false, error: error2.message };
      }
    }
    async getBooking(confirmationNumber) {
      try {
        const response = await fetch(`${this.baseUrl}/bookings/${confirmationNumber}`);
        if (!response.ok) {
          const error2 = await response.json();
          return { success: false, error: error2.error || "Booking not found" };
        }
        const result = await response.json();
        return result;
      } catch (error2) {
        return { success: false, error: error2.message };
      }
    }
    async cancelBooking(confirmationNumber) {
      try {
        const response = await fetch(`${this.baseUrl}/bookings/${confirmationNumber}`, {
          method: "DELETE"
        });
        if (!response.ok) {
          const error2 = await response.json();
          return { success: false, error: error2.error || "Failed to cancel booking" };
        }
        const result = await response.json();
        return result;
      } catch (error2) {
        return { success: false, error: error2.message };
      }
    }
    async checkAvailability(params) {
      try {
        const queryParams = new URLSearchParams({
          check_in_date: params.check_in_date,
          check_out_date: params.check_out_date,
          ...params.room_type && { room_type: params.room_type }
        });
        const response = await fetch(`${this.baseUrl}/availability?${queryParams}`);
        if (!response.ok) {
          const error2 = await response.json();
          return { success: false, error: error2.error || "Failed to check availability" };
        }
        const result = await response.json();
        return result;
      } catch (error2) {
        return { success: false, error: error2.message };
      }
    }
  };
  var bookingAPI = new BookingAPI();

  // src/tools.ts
  var createBookingTool = tool({
    name: "create_booking",
    description: "Creates a new hotel reservation after confirming all details with the guest",
    parameters: external_exports.object({
      guest_name: external_exports.string().min(1, "Guest name is required"),
      guest_email: external_exports.string().email("Valid email address is required"),
      guest_phone: external_exports.string().optional(),
      check_in_date: external_exports.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
      check_out_date: external_exports.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
      room_type: external_exports.enum(["standard", "deluxe", "suite", "penthouse"], {
        errorMap: () => ({ message: "Room type must be: standard, deluxe, suite, or penthouse" })
      }),
      number_of_guests: external_exports.number().int().positive("Number of guests must be a positive integer"),
      special_requests: external_exports.string().optional()
    }),
    execute: async (input) => {
      console.log("\u{1F527} Tool: create_booking", input);
      const result = await bookingAPI.createBooking(input);
      if (result.success && result.data) {
        return {
          success: true,
          confirmation_number: result.data.confirmation_number,
          guest_name: result.data.guest_name,
          room_name: result.data.room_name,
          check_in_date: result.data.check_in_date,
          check_out_date: result.data.check_out_date,
          number_of_nights: result.data.number_of_nights,
          total_price: result.data.total_price,
          message: result.message
        };
      } else {
        return {
          success: false,
          error: result.error || "Failed to create booking"
        };
      }
    }
  });
  var getBookingTool = tool({
    name: "get_booking",
    description: "Retrieves booking details using a confirmation number",
    parameters: external_exports.object({
      confirmation_number: external_exports.string().min(1, "Confirmation number is required")
    }),
    execute: async (input) => {
      console.log("\u{1F527} Tool: get_booking", input);
      const result = await bookingAPI.getBooking(input.confirmation_number);
      if (result.success && result.data) {
        return {
          success: true,
          booking: {
            confirmation_number: result.data.confirmation_number,
            guest_name: result.data.guest_name,
            guest_email: result.data.guest_email,
            guest_phone: result.data.guest_phone,
            check_in_date: result.data.check_in_date,
            check_out_date: result.data.check_out_date,
            room_type: result.data.room_type,
            room_name: result.data.room_name,
            number_of_guests: result.data.number_of_guests,
            number_of_nights: result.data.number_of_nights,
            price_per_night: result.data.price_per_night,
            total_price: result.data.total_price,
            special_requests: result.data.special_requests,
            status: result.data.status
          }
        };
      } else {
        return {
          success: false,
          error: result.error || "Booking not found"
        };
      }
    }
  });
  var cancelBookingTool = tool({
    name: "cancel_booking",
    description: "Cancels an existing booking",
    parameters: external_exports.object({
      confirmation_number: external_exports.string().min(1, "Confirmation number is required")
    }),
    execute: async (input) => {
      console.log("\u{1F527} Tool: cancel_booking", input);
      const result = await bookingAPI.cancelBooking(input.confirmation_number);
      if (result.success) {
        return {
          success: true,
          message: result.message || `Booking ${input.confirmation_number} has been cancelled successfully`
        };
      } else {
        return {
          success: false,
          error: result.error || "Failed to cancel booking"
        };
      }
    }
  });
  var checkAvailabilityTool = tool({
    name: "check_availability",
    description: "Checks room availability for specific dates and provides pricing information",
    parameters: external_exports.object({
      check_in_date: external_exports.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
      check_out_date: external_exports.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
      room_type: external_exports.enum(["standard", "deluxe", "suite", "penthouse"]).optional()
    }),
    execute: async (input) => {
      console.log("\u{1F527} Tool: check_availability", input);
      const result = await bookingAPI.checkAvailability(input);
      if (result.success) {
        return {
          success: true,
          available: result.available,
          rooms: result.rooms,
          nights: result.nights,
          message: result.message
        };
      } else {
        return {
          success: false,
          error: result.error || "Failed to check availability"
        };
      }
    }
  });
  var getHotelInfoTool = tool({
    name: "get_hotel_info",
    description: "Provides detailed information about the hotel including amenities, location, and contact details",
    parameters: external_exports.object({}),
    execute: async () => {
      console.log("\u{1F527} Tool: get_hotel_info");
      const hotelInfo = getHotelInfo();
      const roomTypes = getRoomTypes();
      return {
        success: true,
        hotel: {
          name: hotelInfo.name,
          location: hotelInfo.location,
          address: hotelInfo.address,
          phone: hotelInfo.phone,
          email: hotelInfo.email,
          check_in_time: hotelInfo.checkInTime,
          check_out_time: hotelInfo.checkOutTime,
          amenities: hotelInfo.amenities,
          description: hotelInfo.description
        },
        room_types: roomTypes.map((room) => ({
          id: room.id,
          name: room.name,
          description: room.description,
          price: room.price,
          capacity: room.capacity,
          features: room.features
        }))
      };
    }
  });

  // src/agents.ts
  var ensureHandoff = (obj) => {
    if (!obj) return;
    if (!obj.prototype.getEnabledHandoffs) {
      obj.prototype.getEnabledHandoffs = function() {
        return [];
      };
    }
    if (!obj.prototype.getAllTools) {
      obj.prototype.getAllTools = function() {
        return this.tools || [];
      };
    }
  };
  ensureHandoff(Agent);
  ensureHandoff(RealtimeAgent);
  var PatchedRealtimeAgent = class extends RealtimeAgent {
    getEnabledHandoffs() {
      return [];
    }
    getAllTools() {
      return this.tools || [];
    }
  };
  var PatchedAgent = class extends Agent {
    getEnabledHandoffs() {
      return this.handoffs || [];
    }
    getAllTools() {
      return this.tools || [];
    }
  };
  function getSystemInstructions() {
    const hotelInfo = getHotelInfo();
    const roomTypes = getRoomTypes();
    return `You are an elegant and attentive voice concierge for ${hotelInfo.name}, a distinguished property in ${hotelInfo.location}.

Your mission is to create an exceptional, personalized booking experience that reflects our commitment to premium hospitality.

\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
HOTEL INFORMATION
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
\u{1F3E8} ${hotelInfo.name}
\u{1F4CD} ${hotelInfo.location}
\u{1F4DE} ${hotelInfo.phone}
\u2709\uFE0F ${hotelInfo.email}

\u23F0 Check-in: ${hotelInfo.checkInTime} | Check-out: ${hotelInfo.checkOutTime}

ACCOMMODATIONS:
${roomTypes.map((room) => `\u2022 ${room.name}: ${room.description}
  \u2192 $${room.price} NZD per night | Up to ${room.capacity} guests`).join("\n")}

SIGNATURE AMENITIES:
${hotelInfo.amenities.join(" \u2022 ")}

\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
VOICE & TONE (Premium Hospitality Standard)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
\u2713 Warm yet refined\u2014like a personal concierge, not a robot
\u2713 Proactive: Anticipate needs before guests ask
\u2713 Conversational: Natural pauses, confirmations ("Absolutely," "Wonderful choice")
\u2713 Empathetic: Acknowledge special occasions, preferences, concerns
\u2713 Confident but humble: "I'd be delighted to assist" vs. "I can help"

\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
CONVERSATION FLOW (Guest-Centric Approach)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
1. WELCOME (10-15 seconds)
   "Good [morning/afternoon/evening]! Thank you for contacting ${hotelInfo.name}.
   I'm delighted to assist with your reservation today.
   May I start by asking your name?"

2. DISCOVER NEEDS (Active Listening)
   \u2022 Purpose of visit? (Business/Leisure/Special occasion)
   \u2022 Travel dates & flexibility
   \u2022 Number of guests (adults/children)
   \u2022 Preferences: View, floor, bed type, accessibility

3. PERSONALIZED RECOMMENDATIONS
   \u2717 DON'T: "We have Standard, Deluxe, Suite, Penthouse."
   \u2713 DO: "For a romantic getaway for two, I'd recommend our Deluxe Room with
         harbor views\u2014it's particularly stunning at sunset. Alternatively,
         our Executive Suite offers extra space if you'd like a living area."

4. TRANSPARENT PRICING
   \u2022 Always use check_availability tool BEFORE quoting prices
   \u2022 State: "Your [X]-night stay from [date] to [date] would be $[total] NZD,
     which includes all taxes and fees."
   \u2022 Mention value-adds: "This also includes complimentary WiFi, pool access."

5. SEAMLESS BOOKING
   \u2022 Collect: Full name, email, phone, special requests
   \u2022 Confirm verbally: "Let me confirm: [repeat details]\u2014does that sound perfect?"
   \u2022 Use create_booking tool only after all details are confirmed
   \u2022 After booking: "Wonderful! Your confirmation number is [XXX]. You'll receive
     an email shortly at [email]. Is there anything else I can arrange?"

\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
NAMES & PRONUNCIATION (Accuracy First)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
\u2022 Repeat the name exactly as the guest says it\u2014no guesses, no alterations.
  Example: "Thank you, Jan Strijker. Did I say that correctly?"
\u2022 If uncertain, ask once for a slow repeat, mirror it verbatim, and move on\u2014no extra back-and-forth.
\u2022 Only ask for phonetic or spelling if still unclear after that single repeat; confirm once, then proceed.
\u2022 Keep it confident and concise; avoid over-apologizing.

\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
CRITICAL RULES (Non-Negotiable)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
\u26A0\uFE0F VALIDATION:
  - Dates: Always confirm YYYY-MM-DD format before booking
  - Logic: Check-out > Check-in
  - Capacity: Guest count \u2264 Room capacity
  - Availability: Use check_availability tool BEFORE confirming rates

\u26A0\uFE0F TOOL USAGE:
  - check_availability: ALWAYS use before quoting prices or creating bookings
  - create_booking: Only use after all details are confirmed with guest
  - get_booking: Use when guest provides confirmation number
  - cancel_booking: Use when guest requests cancellation with confirmation number
  - get_hotel_info: Use for questions about amenities, location, policies

\u26A0\uFE0F ERROR HANDLING:
  - If tool returns error: Apologize and offer alternatives
  - If unclear: "I want to make sure I have this correct\u2014could you please repeat [X]?"
  - If unavailable: "I see we're fully booked for [room] those dates. May I suggest
    [alternative dates] or our [alternative room]?"

\u26A0\uFE0F NEVER:
  - Use robotic phrases: "Your call is important to us"
  - Rush the guest: "Anything else?" before they're ready
  - Apologize excessively: One "my apologies" is enough
  - Mention technical limitations or "I'm an AI"
  - Create bookings without checking availability first

\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550

Remember: Every interaction is an opportunity to exceed expectations. You represent
a premium brand\u2014ensure every word reflects that commitment to excellence.`;
  }
  var bookingAgent = new PatchedAgent({
    name: "Booking Specialist",
    instructions: `You are a booking specialist for Novotel Auckland Ellerslie, a premium Accor hotel.

Your role is to:
1. Check room availability for requested dates
2. Provide accurate pricing information
3. Handle complex booking scenarios (multiple rooms, extended stays)
4. Process booking creation with all required details
5. Validate all information before confirming

ALWAYS:
- Use check_availability tool before quoting prices
- Verify dates are in YYYY-MM-DD format
- Confirm guest count doesn't exceed room capacity
- Double-check all details before creating booking
- Provide confirmation number immediately after booking

Be professional, thorough, and detail-oriented.`,
    handoffDescription: "Expert in hotel reservations, availability checks, and booking management. Handles all aspects of creating, modifying, and pricing reservations.",
    tools: [createBookingTool, checkAvailabilityTool, getHotelInfoTool]
  });
  var customerServiceAgent = new PatchedAgent({
    name: "Customer Service",
    instructions: `You are a customer service specialist for Novotel Auckland Ellerslie, a premium Accor hotel.

Your role is to:
1. Look up existing bookings by confirmation number
2. Process cancellation requests
3. Provide booking details and information
4. Handle modifications and special requests

ALWAYS:
- Ask for confirmation number for lookups
- Confirm guest identity before providing booking details
- Explain cancellation policies clearly
- Offer alternatives when appropriate

Be empathetic, helpful, and solution-oriented.`,
    handoffDescription: "Handles existing reservations, booking lookups, cancellations, and customer service inquiries.",
    tools: [getBookingTool, cancelBookingTool]
  });
  function createSimpleConciergeAgent() {
    const agent = new PatchedRealtimeAgent({
      name: "Hotel Concierge",
      instructions: getSystemInstructions(),
      tools: [
        createBookingTool,
        getBookingTool,
        cancelBookingTool,
        checkAvailabilityTool,
        getHotelInfoTool
      ]
    });
    agent.getEnabledHandoffs = () => [];
    agent.getAllTools = () => [
      createBookingTool,
      getBookingTool,
      cancelBookingTool,
      checkAvailabilityTool,
      getHotelInfoTool
    ];
    return agent;
  }

  // src/main.ts
  async function fetchRealtimeToken(model) {
    const payload = model ? { model } : {};
    const res = await fetch("/api/realtime-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Token fetch failed: ${res.status} ${text}`);
    }
    return res.json();
  }
  var VoiceAgent = class {
    constructor() {
      __publicField(this, "session", null);
      __publicField(this, "transport", null);
      __publicField(this, "isConnected", false);
      __publicField(this, "hasSentIntro", false);
      // UI elements
      __publicField(this, "connectBtn", document.getElementById("connectBtn"));
      __publicField(this, "disconnectBtn", document.getElementById("disconnectBtn"));
      __publicField(this, "stopBtn", document.getElementById("stopBtn"));
      __publicField(this, "statusIndicator", document.getElementById("statusIndicator"));
      __publicField(this, "statusText", document.getElementById("statusText"));
      __publicField(this, "transcriptContent", document.getElementById("transcriptContent"));
      this.connectBtn.addEventListener("click", () => this.connect());
      this.disconnectBtn.addEventListener("click", () => this.disconnect());
      this.stopBtn.addEventListener("click", () => this.stopReply());
    }
    async connect() {
      try {
        this.updateStatus("Connecting...", "connecting");
        this.connectBtn.disabled = true;
        this.hasSentIntro = false;
        const token = await fetchRealtimeToken();
        const apiKey = token.client_secret?.value ?? token.client_secret?.secret ?? token.client_secret ?? token.value;
        const model = token.model || "gpt-4o-realtime-preview-2024-12-17";
        this.transport = new OpenAIRealtimeWebRTC({
          apiKey,
          url: token.url
          // optional, SDK defaults to OpenAI endpoint if undefined
        });
        const agent = createSimpleConciergeAgent();
        this.session = new RealtimeSession(agent, {
          transport: this.transport,
          model,
          config: {
            inputAudioFormat: "pcm16",
            outputAudioFormat: "pcm16",
            voice: "alloy",
            speed: 1.08
            // slightly faster, keeps clarity
          }
        });
        this.bindEvents();
        await this.session.connect({});
        this.isConnected = true;
        this.disconnectBtn.disabled = false;
        this.stopBtn.disabled = false;
        this.addTranscript("system", "\u2705 Connected! Speak anytime (barge-in supported).");
        this.updateStatus("Connected - Listening...", "connected");
        this.startIntroduction();
      } catch (err) {
        console.error("Connection error:", err);
        this.addTranscript("system", `\u274C Connection failed: ${err.message || err}`);
        this.updateStatus("Connection failed", "error");
        this.connectBtn.disabled = false;
      }
    }
    bindEvents() {
      if (!this.session) return;
      this.session.on("response.audio_transcript.delta", (event) => {
        this.updateLastTranscript("assistant", event.delta, false);
      });
      this.session.on("response.audio_transcript.done", (event) => {
        this.updateLastTranscript("assistant", event.transcript, true);
      });
      this.session.on("response.output_text.delta", (event) => {
        this.updateLastTranscript("assistant", event.delta, false);
      });
      this.session.on("response.output_text.done", (event) => {
        this.updateLastTranscript("assistant", event.output_text || event.transcript || "", true);
      });
      this.session.on("conversation.item.input_audio_transcription.completed", (event) => {
        this.addTranscript("user", event.transcript);
      });
      this.session.on("response.function_call_arguments.done", (event) => {
        console.log("\u{1F527} Tool call:", event.name, event.arguments);
        this.addTranscript("system", `\u{1F527} Using tool: ${event.name}`);
      });
      this.session.on("response.done", (event) => {
        if (event.response?.status === "completed") {
          console.log("\u2705 Response completed");
        }
      });
      this.session.on("error", (event) => {
        console.error("Realtime error:", event);
        this.addTranscript("system", `\u274C ${event.error?.message || "Realtime error"}`);
        this.updateStatus("Error", "error");
      });
    }
    stopReply() {
      if (this.session) {
        this.session.interrupt();
        this.session.sendMessage({ role: "system", content: "Stop" }, { response: { cancel: true } });
      }
    }
    disconnect() {
      if (this.session) {
        this.session.close();
        this.session = null;
      }
      if (this.transport) {
        this.transport.close();
        this.transport = null;
      }
      this.isConnected = false;
      this.hasSentIntro = false;
      this.disconnectBtn.disabled = true;
      this.stopBtn.disabled = true;
      this.updateStatus("Disconnected", "disconnected");
      this.addTranscript("system", "\u{1F44B} Disconnected.");
    }
    startIntroduction() {
      if (!this.session || this.hasSentIntro) return;
      const introPrompt = "Begin immediately with an energetic but polished welcome from the Novotel Auckland Ellerslie voice concierge. Introduce yourself, note you can quickly handle reservations and stay details, and ask for their name to get started. Keep the pace lively and concise.";
      try {
        this.session.sendMessage(introPrompt);
        this.hasSentIntro = true;
      } catch (err) {
        console.error("Failed to send intro message:", err);
      }
    }
    updateStatus(text, state) {
      this.statusText.textContent = text;
      this.statusIndicator.className = "status-indicator " + state;
    }
    removePlaceholder() {
      const first = this.transcriptContent.firstElementChild;
      if (first && first.textContent?.includes("Conversation will appear here")) {
        this.transcriptContent.removeChild(first);
      }
    }
    addTranscript(role, text) {
      this.removePlaceholder();
      const message = document.createElement("div");
      message.className = `transcript-message ${role}`;
      if (role !== "system") {
        const label = document.createElement("strong");
        label.textContent = role === "user" ? "You" : "Assistant";
        message.appendChild(label);
      }
      const content = document.createElement("span");
      content.textContent = text;
      message.appendChild(content);
      this.transcriptContent.appendChild(message);
      this.transcriptContent.scrollTop = this.transcriptContent.scrollHeight;
    }
    updateLastTranscript(role, text, finalize) {
      const messages = this.transcriptContent.querySelectorAll(`.transcript-message.${role}`);
      const last = messages[messages.length - 1];
      if (!last) {
        this.addTranscript(role, text);
      } else {
        const span = last.querySelector("span");
        if (span) span.textContent = text;
      }
      this.transcriptContent.scrollTop = this.transcriptContent.scrollHeight;
    }
  };
  window.addEventListener("DOMContentLoaded", () => {
    new VoiceAgent();
  });
})();
//# sourceMappingURL=bundle.js.map
