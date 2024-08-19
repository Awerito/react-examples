"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'apis-chile/unknown (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Información del último sismo registrado
     *
     * @summary Último sismo
     */
    SDK.prototype.earthquake = function () {
        return this.core.fetch('/earthquake.json', 'get');
    };
    /**
     * Últimos 15 sismos registrados.
     *
     * @summary Sismos recientes
     * @throws FetchError<400, types.EarthquakesResponse400> 400
     */
    SDK.prototype.earthquakes = function () {
        return this.core.fetch('/earthquakes/recent.json', 'get');
    };
    /**
     * Feriados anteriores
     *
     */
    SDK.prototype.holidaysYear = function (metadata) {
        return this.core.fetch('/holidays/{year}.json', 'get', metadata);
    };
    /**
     * Feriados
     *
     */
    SDK.prototype.holidays = function () {
        return this.core.fetch('/holidays.json', 'get');
    };
    /**
     * Listado de radios chilenas con señal online.
     *
     * @summary 🎧 Radios online
     */
    SDK.prototype.radios = function () {
        return this.core.fetch('/radios.json', 'get');
    };
    /**
     * Todas las estaciones
     *
     */
    SDK.prototype.weather = function () {
        return this.core.fetch('/weather.json', 'get');
    };
    /**
     * Estación específica
     *
     */
    SDK.prototype.weatherCode = function (metadata) {
        return this.core.fetch('/weather/{code}.json', 'get', metadata);
    };
    /**
     * Santoral del año
     *
     * @throws FetchError<400, types.SaintsResponse400> 400
     */
    SDK.prototype.saints = function () {
        return this.core.fetch('/santorales.json', 'get');
    };
    /**
     * Santoral específico
     *
     * @throws FetchError<400, types.SaintsYesterdayTodayOrTomorrowResponse400> 400
     */
    SDK.prototype.saintsYesterdayTodayOrTomorrow = function (metadata) {
        return this.core.fetch('/santorales/{when}.json', 'get', metadata);
    };
    /**
     * Dólar hoy
     *
     */
    SDK.prototype.economyDolarToday = function () {
        return this.core.fetch('/economy/indicator/dolar.json', 'get');
    };
    /**
     * Dólar anual
     *
     */
    SDK.prototype.economyDolarYear = function (metadata) {
        return this.core.fetch('/economy/indicator/dolar/{year}.json', 'get', metadata);
    };
    /**
     * Euro hoy
     *
     */
    SDK.prototype.economyEuroToday = function () {
        return this.core.fetch('/economy/indicator/euro.json', 'get');
    };
    /**
     * UF hoy
     *
     */
    SDK.prototype.economyUfToday = function () {
        return this.core.fetch('/economy/indicator/uf.json', 'get');
    };
    /**
     * UTM hoy
     *
     */
    SDK.prototype.economyUtmToday = function () {
        return this.core.fetch('/economy/indicator/utm.json', 'get');
    };
    /**
     * IPC hoy
     *
     */
    SDK.prototype.economyIpcToday = function () {
        return this.core.fetch('/economy/indicator/ipc.json', 'get');
    };
    /**
     * Euro anual
     *
     */
    SDK.prototype.economyEuroYear = function (metadata) {
        return this.core.fetch('/economy/indicator/euro/{year}.json', 'get', metadata);
    };
    /**
     * UF anual
     *
     */
    SDK.prototype.economyUfYear = function (metadata) {
        return this.core.fetch('/economy/indicator/uf/{year}.json', 'get', metadata);
    };
    /**
     * UTM anual
     *
     */
    SDK.prototype.economyUtmYear = function (metadata) {
        return this.core.fetch('/economy/indicator/utm/{year}.json', 'get', metadata);
    };
    /**
     * IPC anual
     *
     */
    SDK.prototype.economyIpcYear = function (metadata) {
        return this.core.fetch('/economy/indicator/ipc/{year}.json', 'get', metadata);
    };
    /**
     * Valor actual para todos los indicadores económicos
     *
     * @summary Todos los indicadores
     */
    SDK.prototype.economyAllToday = function () {
        return this.core.fetch('/economy/indicators.json', 'get');
    };
    /**
     * Todos los indicadores por año
     *
     */
    SDK.prototype.economyAllYear = function (metadata) {
        return this.core.fetch('/economy/indicators/{year}.json', 'get', metadata);
    };
    /**
     * Valor actual para todas las criptomonedas
     *
     * @summary Todas las criptomendas
     */
    SDK.prototype.economyCryptos = function () {
        return this.core.fetch('/economy/cryptos.json', 'get');
    };
    /**
     * Todas las farmacias
     *
     */
    SDK.prototype.pharmacies = function () {
        return this.core.fetch('/pharmacies.json', 'get');
    };
    /**
     * Farmacias de turno
     *
     */
    SDK.prototype.pharmacies24h = function () {
        return this.core.fetch('/pharmacies/24h.json', 'get');
    };
    /**
     * Información de una IP
     *
     */
    SDK.prototype.ip = function (metadata) {
        return this.core.fetch('/ip/{ip}.json', 'get', metadata);
    };
    /**
     * Mi IP
     *
     */
    SDK.prototype.showMyIp = function () {
        return this.core.fetch('/ip.json', 'get');
    };
    /**
     * Listado de bancos chilenos
     *
     * @summary 🏦 Bancos
     */
    SDK.prototype.banks = function () {
        return this.core.fetch('/banks.json', 'get');
    };
    /**
     * Permite leer una página web en formato HTML o JSON
     *
     * @summary Web Scraper
     */
    SDK.prototype.utilsProxy = function (body, metadata) {
        return this.core.fetch('/proxy', 'post', body, metadata);
    };
    /**
     * Consulta información de un vehículo sólo con su patente.
     *
     * @summary Patentes
     */
    SDK.prototype.carPlate = function (metadata) {
        return this.core.fetch('/vehicle/{plate}.json', 'get', metadata);
    };
    /**
     * Genera 10 RUT al azar, todos válidos.
     *
     * @summary Generador de RUT
     */
    SDK.prototype.rutGenerate = function (metadata) {
        return this.core.fetch('/rut/generate.json', 'get', metadata);
    };
    /**
     * Útil para validar si un RUT es correcto
     *
     * @summary Generador de digito verificador
     */
    SDK.prototype.rutGeneraDv = function (metadata) {
        return this.core.fetch('/rut/dv/{rut}.json', 'get', metadata);
    };
    /**
     * Permite generar contraseñas
     *
     * @summary Generador de contraseñas
     */
    SDK.prototype.passwordGenerate = function (metadata) {
        return this.core.fetch('/passwords/generate.json', 'get', metadata);
    };
    /**
     * Permite que tan fuerte es una contraseña ante ataques
     *
     * @summary Validar fuerza de una contraseña
     */
    SDK.prototype.passwordStrength = function (body) {
        return this.core.fetch('/passwords/strength.json', 'post', body);
    };
    /**
     * Permite obtener el código postal de una dirección.
     *
     * @summary 📍 Código Postal
     */
    SDK.prototype.postalcode = function (metadata) {
        return this.core.fetch('/postalcode.json', 'get', metadata);
    };
    /**
     * Listado de Isapres chilenas
     *
     * @summary 🏥 Isapres
     */
    SDK.prototype.isapres = function () {
        return this.core.fetch('/isapres.json', 'get');
    };
    /**
     * Busca el nombre de la persona en sii.cl
     *
     * @summary Obtener el nombre
     * @throws FetchError<429, types.RutGetNameResponse429> 429
     */
    SDK.prototype.rutGetName = function (metadata) {
        return this.core.fetch('/rut/name/{rut}.json', 'get', metadata);
    };
    /**
     * Permite saber si una patente tiene multas de tránsito.
     *
     * @summary 🔐 Multas de tránsito
     */
    SDK.prototype.carTrafficTickets = function (metadata) {
        return this.core.fetch('/vehicle/traffic_tickets/{plate}.json', 'get', metadata);
    };
    /**
     * Permite conocer si está al día con la revisión técnica
     *
     * @summary 🔐 Revisión técnica
     */
    SDK.prototype.carInspection = function (metadata) {
        return this.core.fetch('/vehicle/inspection/{plate}.json', 'get', metadata);
    };
    /**
     * Permite saber si una patente pertenece a una transporte público o bus escolar.
     *
     * @summary 🔐 Transporte público y escolar
     */
    SDK.prototype.carPublic_transportation = function (metadata) {
        return this.core.fetch('/vehicle/public_transportation/{plate}.json', 'get', metadata);
    };
    /**
     * Información sobre el SOAP asociado a la patente.
     *
     * @summary 🔐 SOAP
     */
    SDK.prototype.carSoap = function (metadata) {
        return this.core.fetch('/vehicle/soap/{plate}.json', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
