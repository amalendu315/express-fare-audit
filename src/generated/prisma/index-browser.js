
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.FareAuditScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  ticketId: 'ticketId',
  fareLogId: 'fareLogId',
  logType: 'logType',
  source: 'source',
  requestDateTime: 'requestDateTime',
  pnr: 'pnr',
  flightSector: 'flightSector',
  flightNumber: 'flightNumber',
  travelDateTime: 'travelDateTime',
  fsSameFlightFare: 'fsSameFlightFare',
  fsLowestFlightFare: 'fsLowestFlightFare',
  fsAvailableStock: 'fsAvailableStock',
  fsErrorMessage: 'fsErrorMessage',
  fsAverageFare: 'fsAverageFare',
  aoSameFlightFare: 'aoSameFlightFare',
  aoLowestFare: 'aoLowestFare',
  aoAverageFare: 'aoAverageFare',
  aoErrorMessage: 'aoErrorMessage',
  flightWiseTotalSeatsPurchased: 'flightWiseTotalSeatsPurchased',
  flightWiseTotalSeatsSold: 'flightWiseTotalSeatsSold',
  flightWiseTotalSeatsLeft: 'flightWiseTotalSeatsLeft',
  flightWiseAverageCost: 'flightWiseAverageCost',
  routeWiseSeatsPurchased: 'routeWiseSeatsPurchased',
  routeWiseSeatsSold: 'routeWiseSeatsSold',
  routeWiseSeatsLeft: 'routeWiseSeatsLeft',
  routeWiseAverageCost: 'routeWiseAverageCost',
  averageSellFare: 'averageSellFare',
  status: 'status',
  remark: 'remark',
  taskCompletedDateTime: 'taskCompletedDateTime',
  fsSameFlightStock: 'fsSameFlightStock',
  fsLowestFareFlightNumber: 'fsLowestFareFlightNumber',
  fsLowestFareFlightDepartureTime: 'fsLowestFareFlightDepartureTime',
  aoLowestFareFlightNumber: 'aoLowestFareFlightNumber',
  aoSameFlightStock: 'aoSameFlightStock',
  aoLowestFareFlightDepartureTime: 'aoLowestFareFlightDepartureTime',
  fareAuditRemarks: 'fareAuditRemarks',
  aoAvailableStock: 'aoAvailableStock'
};

exports.Prisma.EFMigrationsHistoryScalarFieldEnum = {
  MigrationId: 'MigrationId',
  ProductVersion: 'ProductVersion'
};

exports.Prisma.FlightsScalarFieldEnum = {
  Id: 'Id',
  AirlineCode: 'AirlineCode',
  FlightNumber: 'FlightNumber',
  Origin: 'Origin',
  Destination: 'Destination',
  DepartureTerminal: 'DepartureTerminal',
  ArrivalTerminal: 'ArrivalTerminal',
  DepartureDateTime: 'DepartureDateTime',
  ArrivalDateTime: 'ArrivalDateTime',
  TravelClass: 'TravelClass',
  PriceId: 'PriceId',
  Stops: 'Stops',
  Via: 'Via',
  PlatingCarrier: 'PlatingCarrier',
  AvailableSeats: 'AvailableSeats',
  BaseAmount: 'BaseAmount',
  TotalTaxAmount: 'TotalTaxAmount',
  GrossAmount: 'GrossAmount',
  FareType: 'FareType',
  Source: 'Source',
  EntryDate: 'EntryDate'
};

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
};

exports.Prisma.LogSheetScalarFieldEnum = {
  LogSheetID: 'LogSheetID',
  FormName: 'FormName',
  RefID: 'RefID',
  UserID: 'UserID',
  UserName: 'UserName',
  DateTime: 'DateTime',
  Remarks: 'Remarks'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  FareAudit: 'FareAudit',
  EFMigrationsHistory: 'EFMigrationsHistory',
  Flights: 'Flights',
  sysdiagrams: 'sysdiagrams',
  LogSheet: 'LogSheet'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
