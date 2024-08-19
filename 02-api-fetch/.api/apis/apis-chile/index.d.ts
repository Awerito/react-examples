import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Información del último sismo registrado
     *
     * @summary Último sismo
     */
    earthquake(): Promise<FetchResponse<200, types.EarthquakeResponse200>>;
    /**
     * Últimos 15 sismos registrados.
     *
     * @summary Sismos recientes
     * @throws FetchError<400, types.EarthquakesResponse400> 400
     */
    earthquakes(): Promise<FetchResponse<200, types.EarthquakesResponse200>>;
    /**
     * Feriados anteriores
     *
     */
    holidaysYear(metadata: types.HolidaysYearMetadataParam): Promise<FetchResponse<200, types.HolidaysYearResponse200>>;
    /**
     * Feriados
     *
     */
    holidays(): Promise<FetchResponse<200, types.HolidaysResponse200>>;
    /**
     * Listado de radios chilenas con señal online.
     *
     * @summary 🎧 Radios online
     */
    radios(): Promise<FetchResponse<200, types.RadiosResponse200>>;
    /**
     * Todas las estaciones
     *
     */
    weather(): Promise<FetchResponse<200, types.WeatherResponse200>>;
    /**
     * Estación específica
     *
     */
    weatherCode(metadata: types.WeatherCodeMetadataParam): Promise<FetchResponse<200, types.WeatherCodeResponse200>>;
    /**
     * Santoral del año
     *
     * @throws FetchError<400, types.SaintsResponse400> 400
     */
    saints(): Promise<FetchResponse<200, types.SaintsResponse200>>;
    /**
     * Santoral específico
     *
     * @throws FetchError<400, types.SaintsYesterdayTodayOrTomorrowResponse400> 400
     */
    saintsYesterdayTodayOrTomorrow(metadata: types.SaintsYesterdayTodayOrTomorrowMetadataParam): Promise<FetchResponse<200, types.SaintsYesterdayTodayOrTomorrowResponse200>>;
    /**
     * Dólar hoy
     *
     */
    economyDolarToday(): Promise<FetchResponse<200, types.EconomyDolarTodayResponse200>>;
    /**
     * Dólar anual
     *
     */
    economyDolarYear(metadata: types.EconomyDolarYearMetadataParam): Promise<FetchResponse<200, types.EconomyDolarYearResponse200>>;
    /**
     * Euro hoy
     *
     */
    economyEuroToday(): Promise<FetchResponse<200, types.EconomyEuroTodayResponse200>>;
    /**
     * UF hoy
     *
     */
    economyUfToday(): Promise<FetchResponse<200, types.EconomyUfTodayResponse200>>;
    /**
     * UTM hoy
     *
     */
    economyUtmToday(): Promise<FetchResponse<200, types.EconomyUtmTodayResponse200>>;
    /**
     * IPC hoy
     *
     */
    economyIpcToday(): Promise<FetchResponse<200, types.EconomyIpcTodayResponse200>>;
    /**
     * Euro anual
     *
     */
    economyEuroYear(metadata: types.EconomyEuroYearMetadataParam): Promise<FetchResponse<200, types.EconomyEuroYearResponse200>>;
    /**
     * UF anual
     *
     */
    economyUfYear(metadata: types.EconomyUfYearMetadataParam): Promise<FetchResponse<200, types.EconomyUfYearResponse200>>;
    /**
     * UTM anual
     *
     */
    economyUtmYear(metadata: types.EconomyUtmYearMetadataParam): Promise<FetchResponse<200, types.EconomyUtmYearResponse200>>;
    /**
     * IPC anual
     *
     */
    economyIpcYear(metadata: types.EconomyIpcYearMetadataParam): Promise<FetchResponse<200, types.EconomyIpcYearResponse200>>;
    /**
     * Valor actual para todos los indicadores económicos
     *
     * @summary Todos los indicadores
     */
    economyAllToday(): Promise<FetchResponse<200, types.EconomyAllTodayResponse200>>;
    /**
     * Todos los indicadores por año
     *
     */
    economyAllYear(metadata: types.EconomyAllYearMetadataParam): Promise<FetchResponse<200, types.EconomyAllYearResponse200>>;
    /**
     * Valor actual para todas las criptomonedas
     *
     * @summary Todas las criptomendas
     */
    economyCryptos(): Promise<FetchResponse<200, types.EconomyCryptosResponse200>>;
    /**
     * Todas las farmacias
     *
     */
    pharmacies(): Promise<FetchResponse<200, types.PharmaciesResponse200>>;
    /**
     * Farmacias de turno
     *
     */
    pharmacies24h(): Promise<FetchResponse<200, types.Pharmacies24HResponse200>>;
    /**
     * Información de una IP
     *
     */
    ip(metadata: types.IpMetadataParam): Promise<FetchResponse<200, types.IpResponse200>>;
    /**
     * Mi IP
     *
     */
    showMyIp(): Promise<FetchResponse<200, types.ShowMyIpResponse200>>;
    /**
     * Listado de bancos chilenos
     *
     * @summary 🏦 Bancos
     */
    banks(): Promise<FetchResponse<200, types.BanksResponse200>>;
    /**
     * Permite leer una página web en formato HTML o JSON
     *
     * @summary Web Scraper
     */
    utilsProxy(body?: types.UtilsProxyBodyParam, metadata?: types.UtilsProxyMetadataParam): Promise<FetchResponse<200, types.UtilsProxyResponse200>>;
    /**
     * Consulta información de un vehículo sólo con su patente.
     *
     * @summary Patentes
     */
    carPlate(metadata: types.CarPlateMetadataParam): Promise<FetchResponse<200, types.CarPlateResponse200>>;
    /**
     * Genera 10 RUT al azar, todos válidos.
     *
     * @summary Generador de RUT
     */
    rutGenerate(metadata?: types.RutGenerateMetadataParam): Promise<FetchResponse<200, types.RutGenerateResponse200>>;
    /**
     * Útil para validar si un RUT es correcto
     *
     * @summary Generador de digito verificador
     */
    rutGeneraDv(metadata: types.RutGeneraDvMetadataParam): Promise<FetchResponse<200, types.RutGeneraDvResponse200>>;
    /**
     * Permite generar contraseñas
     *
     * @summary Generador de contraseñas
     */
    passwordGenerate(metadata?: types.PasswordGenerateMetadataParam): Promise<FetchResponse<200, types.PasswordGenerateResponse200>>;
    /**
     * Permite que tan fuerte es una contraseña ante ataques
     *
     * @summary Validar fuerza de una contraseña
     */
    passwordStrength(body?: types.PasswordStrengthBodyParam): Promise<FetchResponse<200, types.PasswordStrengthResponse200>>;
    /**
     * Permite obtener el código postal de una dirección.
     *
     * @summary 📍 Código Postal
     */
    postalcode(metadata?: types.PostalcodeMetadataParam): Promise<FetchResponse<200, types.PostalcodeResponse200>>;
    /**
     * Listado de Isapres chilenas
     *
     * @summary 🏥 Isapres
     */
    isapres(): Promise<FetchResponse<200, types.IsapresResponse200>>;
    /**
     * Busca el nombre de la persona en sii.cl
     *
     * @summary Obtener el nombre
     * @throws FetchError<429, types.RutGetNameResponse429> 429
     */
    rutGetName(metadata: types.RutGetNameMetadataParam): Promise<FetchResponse<200, types.RutGetNameResponse200>>;
    /**
     * Permite saber si una patente tiene multas de tránsito.
     *
     * @summary 🔐 Multas de tránsito
     */
    carTrafficTickets(metadata: types.CarTrafficTicketsMetadataParam): Promise<FetchResponse<200, types.CarTrafficTicketsResponse200>>;
    /**
     * Permite conocer si está al día con la revisión técnica
     *
     * @summary 🔐 Revisión técnica
     */
    carInspection(metadata: types.CarInspectionMetadataParam): Promise<FetchResponse<200, types.CarInspectionResponse200>>;
    /**
     * Permite saber si una patente pertenece a una transporte público o bus escolar.
     *
     * @summary 🔐 Transporte público y escolar
     */
    carPublic_transportation(metadata: types.CarPublicTransportationMetadataParam): Promise<FetchResponse<200, types.CarPublicTransportationResponse200>>;
    /**
     * Información sobre el SOAP asociado a la patente.
     *
     * @summary 🔐 SOAP
     */
    carSoap(metadata: types.CarSoapMetadataParam): Promise<FetchResponse<200, types.CarSoapResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
