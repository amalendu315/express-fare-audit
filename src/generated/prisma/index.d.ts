
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FareAudit
 * 
 */
export type FareAudit = $Result.DefaultSelection<Prisma.$FareAuditPayload>
/**
 * Model Flights
 * 
 */
export type Flights = $Result.DefaultSelection<Prisma.$FlightsPayload>
/**
 * Model sysdiagrams
 * 
 */
export type sysdiagrams = $Result.DefaultSelection<Prisma.$sysdiagramsPayload>
/**
 * Model LogSheet
 * 
 */
export type LogSheet = $Result.DefaultSelection<Prisma.$LogSheetPayload>
/**
 * Model FlightOps
 * 
 */
export type FlightOps = $Result.DefaultSelection<Prisma.$FlightOpsPayload>
/**
 * Model TallyUsers
 * 
 */
export type TallyUsers = $Result.DefaultSelection<Prisma.$TallyUsersPayload>
/**
 * Model TallyVoucherSyncLog
 * 
 */
export type TallyVoucherSyncLog = $Result.DefaultSelection<Prisma.$TallyVoucherSyncLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FareAudits
 * const fareAudits = await prisma.fareAudit.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FareAudits
   * const fareAudits = await prisma.fareAudit.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fareAudit`: Exposes CRUD operations for the **FareAudit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FareAudits
    * const fareAudits = await prisma.fareAudit.findMany()
    * ```
    */
  get fareAudit(): Prisma.FareAuditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flights`: Exposes CRUD operations for the **Flights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flights
    * const flights = await prisma.flights.findMany()
    * ```
    */
  get flights(): Prisma.FlightsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sysdiagrams`: Exposes CRUD operations for the **sysdiagrams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sysdiagrams
    * const sysdiagrams = await prisma.sysdiagrams.findMany()
    * ```
    */
  get sysdiagrams(): Prisma.sysdiagramsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logSheet`: Exposes CRUD operations for the **LogSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogSheets
    * const logSheets = await prisma.logSheet.findMany()
    * ```
    */
  get logSheet(): Prisma.LogSheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flightOps`: Exposes CRUD operations for the **FlightOps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlightOps
    * const flightOps = await prisma.flightOps.findMany()
    * ```
    */
  get flightOps(): Prisma.FlightOpsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tallyUsers`: Exposes CRUD operations for the **TallyUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TallyUsers
    * const tallyUsers = await prisma.tallyUsers.findMany()
    * ```
    */
  get tallyUsers(): Prisma.TallyUsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tallyVoucherSyncLog`: Exposes CRUD operations for the **TallyVoucherSyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TallyVoucherSyncLogs
    * const tallyVoucherSyncLogs = await prisma.tallyVoucherSyncLog.findMany()
    * ```
    */
  get tallyVoucherSyncLog(): Prisma.TallyVoucherSyncLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FareAudit: 'FareAudit',
    Flights: 'Flights',
    sysdiagrams: 'sysdiagrams',
    LogSheet: 'LogSheet',
    FlightOps: 'FlightOps',
    TallyUsers: 'TallyUsers',
    TallyVoucherSyncLog: 'TallyVoucherSyncLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fareAudit" | "flights" | "sysdiagrams" | "logSheet" | "flightOps" | "tallyUsers" | "tallyVoucherSyncLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FareAudit: {
        payload: Prisma.$FareAuditPayload<ExtArgs>
        fields: Prisma.FareAuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FareAuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FareAuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload>
          }
          findFirst: {
            args: Prisma.FareAuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FareAuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload>
          }
          findMany: {
            args: Prisma.FareAuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload>[]
          }
          create: {
            args: Prisma.FareAuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload>
          }
          createMany: {
            args: Prisma.FareAuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FareAuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload>
          }
          update: {
            args: Prisma.FareAuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload>
          }
          deleteMany: {
            args: Prisma.FareAuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FareAuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FareAuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FareAuditPayload>
          }
          aggregate: {
            args: Prisma.FareAuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFareAudit>
          }
          groupBy: {
            args: Prisma.FareAuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<FareAuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.FareAuditCountArgs<ExtArgs>
            result: $Utils.Optional<FareAuditCountAggregateOutputType> | number
          }
        }
      }
      Flights: {
        payload: Prisma.$FlightsPayload<ExtArgs>
        fields: Prisma.FlightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload>
          }
          findFirst: {
            args: Prisma.FlightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload>
          }
          findMany: {
            args: Prisma.FlightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload>[]
          }
          create: {
            args: Prisma.FlightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload>
          }
          createMany: {
            args: Prisma.FlightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload>
          }
          update: {
            args: Prisma.FlightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload>
          }
          deleteMany: {
            args: Prisma.FlightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightsPayload>
          }
          aggregate: {
            args: Prisma.FlightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlights>
          }
          groupBy: {
            args: Prisma.FlightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightsCountArgs<ExtArgs>
            result: $Utils.Optional<FlightsCountAggregateOutputType> | number
          }
        }
      }
      sysdiagrams: {
        payload: Prisma.$sysdiagramsPayload<ExtArgs>
        fields: Prisma.sysdiagramsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sysdiagramsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sysdiagramsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findFirst: {
            args: Prisma.sysdiagramsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sysdiagramsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findMany: {
            args: Prisma.sysdiagramsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>[]
          }
          create: {
            args: Prisma.sysdiagramsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          createMany: {
            args: Prisma.sysdiagramsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sysdiagramsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          update: {
            args: Prisma.sysdiagramsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          deleteMany: {
            args: Prisma.sysdiagramsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sysdiagramsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sysdiagramsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          aggregate: {
            args: Prisma.SysdiagramsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSysdiagrams>
          }
          groupBy: {
            args: Prisma.sysdiagramsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sysdiagramsCountArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsCountAggregateOutputType> | number
          }
        }
      }
      LogSheet: {
        payload: Prisma.$LogSheetPayload<ExtArgs>
        fields: Prisma.LogSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload>
          }
          findFirst: {
            args: Prisma.LogSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload>
          }
          findMany: {
            args: Prisma.LogSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload>[]
          }
          create: {
            args: Prisma.LogSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload>
          }
          createMany: {
            args: Prisma.LogSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload>
          }
          update: {
            args: Prisma.LogSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload>
          }
          deleteMany: {
            args: Prisma.LogSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogSheetPayload>
          }
          aggregate: {
            args: Prisma.LogSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogSheet>
          }
          groupBy: {
            args: Prisma.LogSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogSheetCountArgs<ExtArgs>
            result: $Utils.Optional<LogSheetCountAggregateOutputType> | number
          }
        }
      }
      FlightOps: {
        payload: Prisma.$FlightOpsPayload<ExtArgs>
        fields: Prisma.FlightOpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightOpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightOpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload>
          }
          findFirst: {
            args: Prisma.FlightOpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightOpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload>
          }
          findMany: {
            args: Prisma.FlightOpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload>[]
          }
          create: {
            args: Prisma.FlightOpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload>
          }
          createMany: {
            args: Prisma.FlightOpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlightOpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload>
          }
          update: {
            args: Prisma.FlightOpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload>
          }
          deleteMany: {
            args: Prisma.FlightOpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightOpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlightOpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightOpsPayload>
          }
          aggregate: {
            args: Prisma.FlightOpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlightOps>
          }
          groupBy: {
            args: Prisma.FlightOpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightOpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightOpsCountArgs<ExtArgs>
            result: $Utils.Optional<FlightOpsCountAggregateOutputType> | number
          }
        }
      }
      TallyUsers: {
        payload: Prisma.$TallyUsersPayload<ExtArgs>
        fields: Prisma.TallyUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TallyUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TallyUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload>
          }
          findFirst: {
            args: Prisma.TallyUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TallyUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload>
          }
          findMany: {
            args: Prisma.TallyUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload>[]
          }
          create: {
            args: Prisma.TallyUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload>
          }
          createMany: {
            args: Prisma.TallyUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TallyUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload>
          }
          update: {
            args: Prisma.TallyUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload>
          }
          deleteMany: {
            args: Prisma.TallyUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TallyUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TallyUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyUsersPayload>
          }
          aggregate: {
            args: Prisma.TallyUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTallyUsers>
          }
          groupBy: {
            args: Prisma.TallyUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TallyUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TallyUsersCountArgs<ExtArgs>
            result: $Utils.Optional<TallyUsersCountAggregateOutputType> | number
          }
        }
      }
      TallyVoucherSyncLog: {
        payload: Prisma.$TallyVoucherSyncLogPayload<ExtArgs>
        fields: Prisma.TallyVoucherSyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TallyVoucherSyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TallyVoucherSyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload>
          }
          findFirst: {
            args: Prisma.TallyVoucherSyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TallyVoucherSyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload>
          }
          findMany: {
            args: Prisma.TallyVoucherSyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload>[]
          }
          create: {
            args: Prisma.TallyVoucherSyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload>
          }
          createMany: {
            args: Prisma.TallyVoucherSyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TallyVoucherSyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload>
          }
          update: {
            args: Prisma.TallyVoucherSyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload>
          }
          deleteMany: {
            args: Prisma.TallyVoucherSyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TallyVoucherSyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TallyVoucherSyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallyVoucherSyncLogPayload>
          }
          aggregate: {
            args: Prisma.TallyVoucherSyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTallyVoucherSyncLog>
          }
          groupBy: {
            args: Prisma.TallyVoucherSyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TallyVoucherSyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TallyVoucherSyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<TallyVoucherSyncLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    fareAudit?: FareAuditOmit
    flights?: FlightsOmit
    sysdiagrams?: sysdiagramsOmit
    logSheet?: LogSheetOmit
    flightOps?: FlightOpsOmit
    tallyUsers?: TallyUsersOmit
    tallyVoucherSyncLog?: TallyVoucherSyncLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TallyUsersCountOutputType
   */

  export type TallyUsersCountOutputType = {
    TallyVoucherSyncLog: number
  }

  export type TallyUsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TallyVoucherSyncLog?: boolean | TallyUsersCountOutputTypeCountTallyVoucherSyncLogArgs
  }

  // Custom InputTypes
  /**
   * TallyUsersCountOutputType without action
   */
  export type TallyUsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsersCountOutputType
     */
    select?: TallyUsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TallyUsersCountOutputType without action
   */
  export type TallyUsersCountOutputTypeCountTallyVoucherSyncLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TallyVoucherSyncLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FareAudit
   */

  export type AggregateFareAudit = {
    _count: FareAuditCountAggregateOutputType | null
    _avg: FareAuditAvgAggregateOutputType | null
    _sum: FareAuditSumAggregateOutputType | null
    _min: FareAuditMinAggregateOutputType | null
    _max: FareAuditMaxAggregateOutputType | null
  }

  export type FareAuditAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    ticketId: number | null
    fareLogId: number | null
    fsSameFlightFare: Decimal | null
    fsLowestFlightFare: Decimal | null
    fsAvailableStock: number | null
    fsAverageFare: Decimal | null
    aoSameFlightFare: Decimal | null
    aoLowestFare: Decimal | null
    aoAverageFare: Decimal | null
    flightWiseTotalSeatsPurchased: number | null
    flightWiseTotalSeatsSold: number | null
    flightWiseTotalSeatsLeft: number | null
    flightWiseAverageCost: Decimal | null
    routeWiseSeatsPurchased: number | null
    routeWiseSeatsSold: number | null
    routeWiseSeatsLeft: number | null
    routeWiseAverageCost: Decimal | null
    averageSellFare: Decimal | null
    fsSameFlightStock: number | null
    aoSameFlightStock: number | null
    aoAvailableStock: number | null
    actualManagedFare: Decimal | null
    bookedPaxQty: number | null
    fsWindowedLowestFare: Decimal | null
    aoWindowedLowestFare: Decimal | null
  }

  export type FareAuditSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    ticketId: number | null
    fareLogId: number | null
    fsSameFlightFare: Decimal | null
    fsLowestFlightFare: Decimal | null
    fsAvailableStock: number | null
    fsAverageFare: Decimal | null
    aoSameFlightFare: Decimal | null
    aoLowestFare: Decimal | null
    aoAverageFare: Decimal | null
    flightWiseTotalSeatsPurchased: number | null
    flightWiseTotalSeatsSold: number | null
    flightWiseTotalSeatsLeft: number | null
    flightWiseAverageCost: Decimal | null
    routeWiseSeatsPurchased: number | null
    routeWiseSeatsSold: number | null
    routeWiseSeatsLeft: number | null
    routeWiseAverageCost: Decimal | null
    averageSellFare: Decimal | null
    fsSameFlightStock: number | null
    aoSameFlightStock: number | null
    aoAvailableStock: number | null
    actualManagedFare: Decimal | null
    bookedPaxQty: number | null
    fsWindowedLowestFare: Decimal | null
    aoWindowedLowestFare: Decimal | null
  }

  export type FareAuditMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    ticketId: number | null
    fareLogId: number | null
    logType: string | null
    source: string | null
    requestDateTime: Date | null
    pnr: string | null
    flightSector: string | null
    flightNumber: string | null
    travelDateTime: Date | null
    fsSameFlightFare: Decimal | null
    fsLowestFlightFare: Decimal | null
    fsAvailableStock: number | null
    fsErrorMessage: string | null
    fsAverageFare: Decimal | null
    aoSameFlightFare: Decimal | null
    aoLowestFare: Decimal | null
    aoAverageFare: Decimal | null
    aoErrorMessage: string | null
    flightWiseTotalSeatsPurchased: number | null
    flightWiseTotalSeatsSold: number | null
    flightWiseTotalSeatsLeft: number | null
    flightWiseAverageCost: Decimal | null
    routeWiseSeatsPurchased: number | null
    routeWiseSeatsSold: number | null
    routeWiseSeatsLeft: number | null
    routeWiseAverageCost: Decimal | null
    averageSellFare: Decimal | null
    status: string | null
    remark: string | null
    taskCompletedDateTime: Date | null
    fsSameFlightStock: number | null
    fsLowestFareFlightNumber: string | null
    fsLowestFareFlightDepartureTime: Date | null
    aoLowestFareFlightNumber: string | null
    aoSameFlightStock: number | null
    aoLowestFareFlightDepartureTime: Date | null
    fareAuditRemarks: string | null
    aoAvailableStock: number | null
    actualManagedFare: Decimal | null
    bookedPaxQty: number | null
    fsWindowedLowestFare: Decimal | null
    fsWindowedLowestFareFlightNumber: string | null
    fsWindowedLowestFareDepartureTime: Date | null
    aoWindowedLowestFare: Decimal | null
    aoWindowedLowestFareFlightNumber: string | null
    aoWindowedLowestFareDepartureTime: Date | null
  }

  export type FareAuditMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    ticketId: number | null
    fareLogId: number | null
    logType: string | null
    source: string | null
    requestDateTime: Date | null
    pnr: string | null
    flightSector: string | null
    flightNumber: string | null
    travelDateTime: Date | null
    fsSameFlightFare: Decimal | null
    fsLowestFlightFare: Decimal | null
    fsAvailableStock: number | null
    fsErrorMessage: string | null
    fsAverageFare: Decimal | null
    aoSameFlightFare: Decimal | null
    aoLowestFare: Decimal | null
    aoAverageFare: Decimal | null
    aoErrorMessage: string | null
    flightWiseTotalSeatsPurchased: number | null
    flightWiseTotalSeatsSold: number | null
    flightWiseTotalSeatsLeft: number | null
    flightWiseAverageCost: Decimal | null
    routeWiseSeatsPurchased: number | null
    routeWiseSeatsSold: number | null
    routeWiseSeatsLeft: number | null
    routeWiseAverageCost: Decimal | null
    averageSellFare: Decimal | null
    status: string | null
    remark: string | null
    taskCompletedDateTime: Date | null
    fsSameFlightStock: number | null
    fsLowestFareFlightNumber: string | null
    fsLowestFareFlightDepartureTime: Date | null
    aoLowestFareFlightNumber: string | null
    aoSameFlightStock: number | null
    aoLowestFareFlightDepartureTime: Date | null
    fareAuditRemarks: string | null
    aoAvailableStock: number | null
    actualManagedFare: Decimal | null
    bookedPaxQty: number | null
    fsWindowedLowestFare: Decimal | null
    fsWindowedLowestFareFlightNumber: string | null
    fsWindowedLowestFareDepartureTime: Date | null
    aoWindowedLowestFare: Decimal | null
    aoWindowedLowestFareFlightNumber: string | null
    aoWindowedLowestFareDepartureTime: Date | null
  }

  export type FareAuditCountAggregateOutputType = {
    id: number
    bookingId: number
    ticketId: number
    fareLogId: number
    logType: number
    source: number
    requestDateTime: number
    pnr: number
    flightSector: number
    flightNumber: number
    travelDateTime: number
    fsSameFlightFare: number
    fsLowestFlightFare: number
    fsAvailableStock: number
    fsErrorMessage: number
    fsAverageFare: number
    aoSameFlightFare: number
    aoLowestFare: number
    aoAverageFare: number
    aoErrorMessage: number
    flightWiseTotalSeatsPurchased: number
    flightWiseTotalSeatsSold: number
    flightWiseTotalSeatsLeft: number
    flightWiseAverageCost: number
    routeWiseSeatsPurchased: number
    routeWiseSeatsSold: number
    routeWiseSeatsLeft: number
    routeWiseAverageCost: number
    averageSellFare: number
    status: number
    remark: number
    taskCompletedDateTime: number
    fsSameFlightStock: number
    fsLowestFareFlightNumber: number
    fsLowestFareFlightDepartureTime: number
    aoLowestFareFlightNumber: number
    aoSameFlightStock: number
    aoLowestFareFlightDepartureTime: number
    fareAuditRemarks: number
    aoAvailableStock: number
    actualManagedFare: number
    bookedPaxQty: number
    fsWindowedLowestFare: number
    fsWindowedLowestFareFlightNumber: number
    fsWindowedLowestFareDepartureTime: number
    aoWindowedLowestFare: number
    aoWindowedLowestFareFlightNumber: number
    aoWindowedLowestFareDepartureTime: number
    _all: number
  }


  export type FareAuditAvgAggregateInputType = {
    id?: true
    bookingId?: true
    ticketId?: true
    fareLogId?: true
    fsSameFlightFare?: true
    fsLowestFlightFare?: true
    fsAvailableStock?: true
    fsAverageFare?: true
    aoSameFlightFare?: true
    aoLowestFare?: true
    aoAverageFare?: true
    flightWiseTotalSeatsPurchased?: true
    flightWiseTotalSeatsSold?: true
    flightWiseTotalSeatsLeft?: true
    flightWiseAverageCost?: true
    routeWiseSeatsPurchased?: true
    routeWiseSeatsSold?: true
    routeWiseSeatsLeft?: true
    routeWiseAverageCost?: true
    averageSellFare?: true
    fsSameFlightStock?: true
    aoSameFlightStock?: true
    aoAvailableStock?: true
    actualManagedFare?: true
    bookedPaxQty?: true
    fsWindowedLowestFare?: true
    aoWindowedLowestFare?: true
  }

  export type FareAuditSumAggregateInputType = {
    id?: true
    bookingId?: true
    ticketId?: true
    fareLogId?: true
    fsSameFlightFare?: true
    fsLowestFlightFare?: true
    fsAvailableStock?: true
    fsAverageFare?: true
    aoSameFlightFare?: true
    aoLowestFare?: true
    aoAverageFare?: true
    flightWiseTotalSeatsPurchased?: true
    flightWiseTotalSeatsSold?: true
    flightWiseTotalSeatsLeft?: true
    flightWiseAverageCost?: true
    routeWiseSeatsPurchased?: true
    routeWiseSeatsSold?: true
    routeWiseSeatsLeft?: true
    routeWiseAverageCost?: true
    averageSellFare?: true
    fsSameFlightStock?: true
    aoSameFlightStock?: true
    aoAvailableStock?: true
    actualManagedFare?: true
    bookedPaxQty?: true
    fsWindowedLowestFare?: true
    aoWindowedLowestFare?: true
  }

  export type FareAuditMinAggregateInputType = {
    id?: true
    bookingId?: true
    ticketId?: true
    fareLogId?: true
    logType?: true
    source?: true
    requestDateTime?: true
    pnr?: true
    flightSector?: true
    flightNumber?: true
    travelDateTime?: true
    fsSameFlightFare?: true
    fsLowestFlightFare?: true
    fsAvailableStock?: true
    fsErrorMessage?: true
    fsAverageFare?: true
    aoSameFlightFare?: true
    aoLowestFare?: true
    aoAverageFare?: true
    aoErrorMessage?: true
    flightWiseTotalSeatsPurchased?: true
    flightWiseTotalSeatsSold?: true
    flightWiseTotalSeatsLeft?: true
    flightWiseAverageCost?: true
    routeWiseSeatsPurchased?: true
    routeWiseSeatsSold?: true
    routeWiseSeatsLeft?: true
    routeWiseAverageCost?: true
    averageSellFare?: true
    status?: true
    remark?: true
    taskCompletedDateTime?: true
    fsSameFlightStock?: true
    fsLowestFareFlightNumber?: true
    fsLowestFareFlightDepartureTime?: true
    aoLowestFareFlightNumber?: true
    aoSameFlightStock?: true
    aoLowestFareFlightDepartureTime?: true
    fareAuditRemarks?: true
    aoAvailableStock?: true
    actualManagedFare?: true
    bookedPaxQty?: true
    fsWindowedLowestFare?: true
    fsWindowedLowestFareFlightNumber?: true
    fsWindowedLowestFareDepartureTime?: true
    aoWindowedLowestFare?: true
    aoWindowedLowestFareFlightNumber?: true
    aoWindowedLowestFareDepartureTime?: true
  }

  export type FareAuditMaxAggregateInputType = {
    id?: true
    bookingId?: true
    ticketId?: true
    fareLogId?: true
    logType?: true
    source?: true
    requestDateTime?: true
    pnr?: true
    flightSector?: true
    flightNumber?: true
    travelDateTime?: true
    fsSameFlightFare?: true
    fsLowestFlightFare?: true
    fsAvailableStock?: true
    fsErrorMessage?: true
    fsAverageFare?: true
    aoSameFlightFare?: true
    aoLowestFare?: true
    aoAverageFare?: true
    aoErrorMessage?: true
    flightWiseTotalSeatsPurchased?: true
    flightWiseTotalSeatsSold?: true
    flightWiseTotalSeatsLeft?: true
    flightWiseAverageCost?: true
    routeWiseSeatsPurchased?: true
    routeWiseSeatsSold?: true
    routeWiseSeatsLeft?: true
    routeWiseAverageCost?: true
    averageSellFare?: true
    status?: true
    remark?: true
    taskCompletedDateTime?: true
    fsSameFlightStock?: true
    fsLowestFareFlightNumber?: true
    fsLowestFareFlightDepartureTime?: true
    aoLowestFareFlightNumber?: true
    aoSameFlightStock?: true
    aoLowestFareFlightDepartureTime?: true
    fareAuditRemarks?: true
    aoAvailableStock?: true
    actualManagedFare?: true
    bookedPaxQty?: true
    fsWindowedLowestFare?: true
    fsWindowedLowestFareFlightNumber?: true
    fsWindowedLowestFareDepartureTime?: true
    aoWindowedLowestFare?: true
    aoWindowedLowestFareFlightNumber?: true
    aoWindowedLowestFareDepartureTime?: true
  }

  export type FareAuditCountAggregateInputType = {
    id?: true
    bookingId?: true
    ticketId?: true
    fareLogId?: true
    logType?: true
    source?: true
    requestDateTime?: true
    pnr?: true
    flightSector?: true
    flightNumber?: true
    travelDateTime?: true
    fsSameFlightFare?: true
    fsLowestFlightFare?: true
    fsAvailableStock?: true
    fsErrorMessage?: true
    fsAverageFare?: true
    aoSameFlightFare?: true
    aoLowestFare?: true
    aoAverageFare?: true
    aoErrorMessage?: true
    flightWiseTotalSeatsPurchased?: true
    flightWiseTotalSeatsSold?: true
    flightWiseTotalSeatsLeft?: true
    flightWiseAverageCost?: true
    routeWiseSeatsPurchased?: true
    routeWiseSeatsSold?: true
    routeWiseSeatsLeft?: true
    routeWiseAverageCost?: true
    averageSellFare?: true
    status?: true
    remark?: true
    taskCompletedDateTime?: true
    fsSameFlightStock?: true
    fsLowestFareFlightNumber?: true
    fsLowestFareFlightDepartureTime?: true
    aoLowestFareFlightNumber?: true
    aoSameFlightStock?: true
    aoLowestFareFlightDepartureTime?: true
    fareAuditRemarks?: true
    aoAvailableStock?: true
    actualManagedFare?: true
    bookedPaxQty?: true
    fsWindowedLowestFare?: true
    fsWindowedLowestFareFlightNumber?: true
    fsWindowedLowestFareDepartureTime?: true
    aoWindowedLowestFare?: true
    aoWindowedLowestFareFlightNumber?: true
    aoWindowedLowestFareDepartureTime?: true
    _all?: true
  }

  export type FareAuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FareAudit to aggregate.
     */
    where?: FareAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FareAudits to fetch.
     */
    orderBy?: FareAuditOrderByWithRelationInput | FareAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FareAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FareAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FareAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FareAudits
    **/
    _count?: true | FareAuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FareAuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FareAuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FareAuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FareAuditMaxAggregateInputType
  }

  export type GetFareAuditAggregateType<T extends FareAuditAggregateArgs> = {
        [P in keyof T & keyof AggregateFareAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFareAudit[P]>
      : GetScalarType<T[P], AggregateFareAudit[P]>
  }




  export type FareAuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FareAuditWhereInput
    orderBy?: FareAuditOrderByWithAggregationInput | FareAuditOrderByWithAggregationInput[]
    by: FareAuditScalarFieldEnum[] | FareAuditScalarFieldEnum
    having?: FareAuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FareAuditCountAggregateInputType | true
    _avg?: FareAuditAvgAggregateInputType
    _sum?: FareAuditSumAggregateInputType
    _min?: FareAuditMinAggregateInputType
    _max?: FareAuditMaxAggregateInputType
  }

  export type FareAuditGroupByOutputType = {
    id: number
    bookingId: number | null
    ticketId: number
    fareLogId: number
    logType: string
    source: string
    requestDateTime: Date
    pnr: string | null
    flightSector: string
    flightNumber: string
    travelDateTime: Date
    fsSameFlightFare: Decimal | null
    fsLowestFlightFare: Decimal | null
    fsAvailableStock: number | null
    fsErrorMessage: string | null
    fsAverageFare: Decimal | null
    aoSameFlightFare: Decimal | null
    aoLowestFare: Decimal | null
    aoAverageFare: Decimal | null
    aoErrorMessage: string | null
    flightWiseTotalSeatsPurchased: number | null
    flightWiseTotalSeatsSold: number | null
    flightWiseTotalSeatsLeft: number | null
    flightWiseAverageCost: Decimal | null
    routeWiseSeatsPurchased: number | null
    routeWiseSeatsSold: number | null
    routeWiseSeatsLeft: number | null
    routeWiseAverageCost: Decimal | null
    averageSellFare: Decimal | null
    status: string | null
    remark: string | null
    taskCompletedDateTime: Date
    fsSameFlightStock: number | null
    fsLowestFareFlightNumber: string | null
    fsLowestFareFlightDepartureTime: Date | null
    aoLowestFareFlightNumber: string | null
    aoSameFlightStock: number | null
    aoLowestFareFlightDepartureTime: Date | null
    fareAuditRemarks: string | null
    aoAvailableStock: number | null
    actualManagedFare: Decimal | null
    bookedPaxQty: number | null
    fsWindowedLowestFare: Decimal | null
    fsWindowedLowestFareFlightNumber: string | null
    fsWindowedLowestFareDepartureTime: Date | null
    aoWindowedLowestFare: Decimal | null
    aoWindowedLowestFareFlightNumber: string | null
    aoWindowedLowestFareDepartureTime: Date | null
    _count: FareAuditCountAggregateOutputType | null
    _avg: FareAuditAvgAggregateOutputType | null
    _sum: FareAuditSumAggregateOutputType | null
    _min: FareAuditMinAggregateOutputType | null
    _max: FareAuditMaxAggregateOutputType | null
  }

  type GetFareAuditGroupByPayload<T extends FareAuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FareAuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FareAuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FareAuditGroupByOutputType[P]>
            : GetScalarType<T[P], FareAuditGroupByOutputType[P]>
        }
      >
    >


  export type FareAuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    ticketId?: boolean
    fareLogId?: boolean
    logType?: boolean
    source?: boolean
    requestDateTime?: boolean
    pnr?: boolean
    flightSector?: boolean
    flightNumber?: boolean
    travelDateTime?: boolean
    fsSameFlightFare?: boolean
    fsLowestFlightFare?: boolean
    fsAvailableStock?: boolean
    fsErrorMessage?: boolean
    fsAverageFare?: boolean
    aoSameFlightFare?: boolean
    aoLowestFare?: boolean
    aoAverageFare?: boolean
    aoErrorMessage?: boolean
    flightWiseTotalSeatsPurchased?: boolean
    flightWiseTotalSeatsSold?: boolean
    flightWiseTotalSeatsLeft?: boolean
    flightWiseAverageCost?: boolean
    routeWiseSeatsPurchased?: boolean
    routeWiseSeatsSold?: boolean
    routeWiseSeatsLeft?: boolean
    routeWiseAverageCost?: boolean
    averageSellFare?: boolean
    status?: boolean
    remark?: boolean
    taskCompletedDateTime?: boolean
    fsSameFlightStock?: boolean
    fsLowestFareFlightNumber?: boolean
    fsLowestFareFlightDepartureTime?: boolean
    aoLowestFareFlightNumber?: boolean
    aoSameFlightStock?: boolean
    aoLowestFareFlightDepartureTime?: boolean
    fareAuditRemarks?: boolean
    aoAvailableStock?: boolean
    actualManagedFare?: boolean
    bookedPaxQty?: boolean
    fsWindowedLowestFare?: boolean
    fsWindowedLowestFareFlightNumber?: boolean
    fsWindowedLowestFareDepartureTime?: boolean
    aoWindowedLowestFare?: boolean
    aoWindowedLowestFareFlightNumber?: boolean
    aoWindowedLowestFareDepartureTime?: boolean
  }, ExtArgs["result"]["fareAudit"]>



  export type FareAuditSelectScalar = {
    id?: boolean
    bookingId?: boolean
    ticketId?: boolean
    fareLogId?: boolean
    logType?: boolean
    source?: boolean
    requestDateTime?: boolean
    pnr?: boolean
    flightSector?: boolean
    flightNumber?: boolean
    travelDateTime?: boolean
    fsSameFlightFare?: boolean
    fsLowestFlightFare?: boolean
    fsAvailableStock?: boolean
    fsErrorMessage?: boolean
    fsAverageFare?: boolean
    aoSameFlightFare?: boolean
    aoLowestFare?: boolean
    aoAverageFare?: boolean
    aoErrorMessage?: boolean
    flightWiseTotalSeatsPurchased?: boolean
    flightWiseTotalSeatsSold?: boolean
    flightWiseTotalSeatsLeft?: boolean
    flightWiseAverageCost?: boolean
    routeWiseSeatsPurchased?: boolean
    routeWiseSeatsSold?: boolean
    routeWiseSeatsLeft?: boolean
    routeWiseAverageCost?: boolean
    averageSellFare?: boolean
    status?: boolean
    remark?: boolean
    taskCompletedDateTime?: boolean
    fsSameFlightStock?: boolean
    fsLowestFareFlightNumber?: boolean
    fsLowestFareFlightDepartureTime?: boolean
    aoLowestFareFlightNumber?: boolean
    aoSameFlightStock?: boolean
    aoLowestFareFlightDepartureTime?: boolean
    fareAuditRemarks?: boolean
    aoAvailableStock?: boolean
    actualManagedFare?: boolean
    bookedPaxQty?: boolean
    fsWindowedLowestFare?: boolean
    fsWindowedLowestFareFlightNumber?: boolean
    fsWindowedLowestFareDepartureTime?: boolean
    aoWindowedLowestFare?: boolean
    aoWindowedLowestFareFlightNumber?: boolean
    aoWindowedLowestFareDepartureTime?: boolean
  }

  export type FareAuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "ticketId" | "fareLogId" | "logType" | "source" | "requestDateTime" | "pnr" | "flightSector" | "flightNumber" | "travelDateTime" | "fsSameFlightFare" | "fsLowestFlightFare" | "fsAvailableStock" | "fsErrorMessage" | "fsAverageFare" | "aoSameFlightFare" | "aoLowestFare" | "aoAverageFare" | "aoErrorMessage" | "flightWiseTotalSeatsPurchased" | "flightWiseTotalSeatsSold" | "flightWiseTotalSeatsLeft" | "flightWiseAverageCost" | "routeWiseSeatsPurchased" | "routeWiseSeatsSold" | "routeWiseSeatsLeft" | "routeWiseAverageCost" | "averageSellFare" | "status" | "remark" | "taskCompletedDateTime" | "fsSameFlightStock" | "fsLowestFareFlightNumber" | "fsLowestFareFlightDepartureTime" | "aoLowestFareFlightNumber" | "aoSameFlightStock" | "aoLowestFareFlightDepartureTime" | "fareAuditRemarks" | "aoAvailableStock" | "actualManagedFare" | "bookedPaxQty" | "fsWindowedLowestFare" | "fsWindowedLowestFareFlightNumber" | "fsWindowedLowestFareDepartureTime" | "aoWindowedLowestFare" | "aoWindowedLowestFareFlightNumber" | "aoWindowedLowestFareDepartureTime", ExtArgs["result"]["fareAudit"]>

  export type $FareAuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FareAudit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number | null
      ticketId: number
      fareLogId: number
      logType: string
      source: string
      requestDateTime: Date
      pnr: string | null
      flightSector: string
      flightNumber: string
      travelDateTime: Date
      fsSameFlightFare: Prisma.Decimal | null
      fsLowestFlightFare: Prisma.Decimal | null
      fsAvailableStock: number | null
      fsErrorMessage: string | null
      fsAverageFare: Prisma.Decimal | null
      aoSameFlightFare: Prisma.Decimal | null
      aoLowestFare: Prisma.Decimal | null
      aoAverageFare: Prisma.Decimal | null
      aoErrorMessage: string | null
      flightWiseTotalSeatsPurchased: number | null
      flightWiseTotalSeatsSold: number | null
      flightWiseTotalSeatsLeft: number | null
      flightWiseAverageCost: Prisma.Decimal | null
      routeWiseSeatsPurchased: number | null
      routeWiseSeatsSold: number | null
      routeWiseSeatsLeft: number | null
      routeWiseAverageCost: Prisma.Decimal | null
      averageSellFare: Prisma.Decimal | null
      status: string | null
      remark: string | null
      taskCompletedDateTime: Date
      fsSameFlightStock: number | null
      fsLowestFareFlightNumber: string | null
      fsLowestFareFlightDepartureTime: Date | null
      aoLowestFareFlightNumber: string | null
      aoSameFlightStock: number | null
      aoLowestFareFlightDepartureTime: Date | null
      fareAuditRemarks: string | null
      aoAvailableStock: number | null
      actualManagedFare: Prisma.Decimal | null
      bookedPaxQty: number | null
      fsWindowedLowestFare: Prisma.Decimal | null
      fsWindowedLowestFareFlightNumber: string | null
      fsWindowedLowestFareDepartureTime: Date | null
      aoWindowedLowestFare: Prisma.Decimal | null
      aoWindowedLowestFareFlightNumber: string | null
      aoWindowedLowestFareDepartureTime: Date | null
    }, ExtArgs["result"]["fareAudit"]>
    composites: {}
  }

  type FareAuditGetPayload<S extends boolean | null | undefined | FareAuditDefaultArgs> = $Result.GetResult<Prisma.$FareAuditPayload, S>

  type FareAuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FareAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FareAuditCountAggregateInputType | true
    }

  export interface FareAuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FareAudit'], meta: { name: 'FareAudit' } }
    /**
     * Find zero or one FareAudit that matches the filter.
     * @param {FareAuditFindUniqueArgs} args - Arguments to find a FareAudit
     * @example
     * // Get one FareAudit
     * const fareAudit = await prisma.fareAudit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FareAuditFindUniqueArgs>(args: SelectSubset<T, FareAuditFindUniqueArgs<ExtArgs>>): Prisma__FareAuditClient<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FareAudit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FareAuditFindUniqueOrThrowArgs} args - Arguments to find a FareAudit
     * @example
     * // Get one FareAudit
     * const fareAudit = await prisma.fareAudit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FareAuditFindUniqueOrThrowArgs>(args: SelectSubset<T, FareAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FareAuditClient<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FareAudit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareAuditFindFirstArgs} args - Arguments to find a FareAudit
     * @example
     * // Get one FareAudit
     * const fareAudit = await prisma.fareAudit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FareAuditFindFirstArgs>(args?: SelectSubset<T, FareAuditFindFirstArgs<ExtArgs>>): Prisma__FareAuditClient<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FareAudit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareAuditFindFirstOrThrowArgs} args - Arguments to find a FareAudit
     * @example
     * // Get one FareAudit
     * const fareAudit = await prisma.fareAudit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FareAuditFindFirstOrThrowArgs>(args?: SelectSubset<T, FareAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__FareAuditClient<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FareAudits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareAuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FareAudits
     * const fareAudits = await prisma.fareAudit.findMany()
     * 
     * // Get first 10 FareAudits
     * const fareAudits = await prisma.fareAudit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fareAuditWithIdOnly = await prisma.fareAudit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FareAuditFindManyArgs>(args?: SelectSubset<T, FareAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FareAudit.
     * @param {FareAuditCreateArgs} args - Arguments to create a FareAudit.
     * @example
     * // Create one FareAudit
     * const FareAudit = await prisma.fareAudit.create({
     *   data: {
     *     // ... data to create a FareAudit
     *   }
     * })
     * 
     */
    create<T extends FareAuditCreateArgs>(args: SelectSubset<T, FareAuditCreateArgs<ExtArgs>>): Prisma__FareAuditClient<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FareAudits.
     * @param {FareAuditCreateManyArgs} args - Arguments to create many FareAudits.
     * @example
     * // Create many FareAudits
     * const fareAudit = await prisma.fareAudit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FareAuditCreateManyArgs>(args?: SelectSubset<T, FareAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FareAudit.
     * @param {FareAuditDeleteArgs} args - Arguments to delete one FareAudit.
     * @example
     * // Delete one FareAudit
     * const FareAudit = await prisma.fareAudit.delete({
     *   where: {
     *     // ... filter to delete one FareAudit
     *   }
     * })
     * 
     */
    delete<T extends FareAuditDeleteArgs>(args: SelectSubset<T, FareAuditDeleteArgs<ExtArgs>>): Prisma__FareAuditClient<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FareAudit.
     * @param {FareAuditUpdateArgs} args - Arguments to update one FareAudit.
     * @example
     * // Update one FareAudit
     * const fareAudit = await prisma.fareAudit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FareAuditUpdateArgs>(args: SelectSubset<T, FareAuditUpdateArgs<ExtArgs>>): Prisma__FareAuditClient<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FareAudits.
     * @param {FareAuditDeleteManyArgs} args - Arguments to filter FareAudits to delete.
     * @example
     * // Delete a few FareAudits
     * const { count } = await prisma.fareAudit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FareAuditDeleteManyArgs>(args?: SelectSubset<T, FareAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FareAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareAuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FareAudits
     * const fareAudit = await prisma.fareAudit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FareAuditUpdateManyArgs>(args: SelectSubset<T, FareAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FareAudit.
     * @param {FareAuditUpsertArgs} args - Arguments to update or create a FareAudit.
     * @example
     * // Update or create a FareAudit
     * const fareAudit = await prisma.fareAudit.upsert({
     *   create: {
     *     // ... data to create a FareAudit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FareAudit we want to update
     *   }
     * })
     */
    upsert<T extends FareAuditUpsertArgs>(args: SelectSubset<T, FareAuditUpsertArgs<ExtArgs>>): Prisma__FareAuditClient<$Result.GetResult<Prisma.$FareAuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FareAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareAuditCountArgs} args - Arguments to filter FareAudits to count.
     * @example
     * // Count the number of FareAudits
     * const count = await prisma.fareAudit.count({
     *   where: {
     *     // ... the filter for the FareAudits we want to count
     *   }
     * })
    **/
    count<T extends FareAuditCountArgs>(
      args?: Subset<T, FareAuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FareAuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FareAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareAuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FareAuditAggregateArgs>(args: Subset<T, FareAuditAggregateArgs>): Prisma.PrismaPromise<GetFareAuditAggregateType<T>>

    /**
     * Group by FareAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareAuditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FareAuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FareAuditGroupByArgs['orderBy'] }
        : { orderBy?: FareAuditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FareAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFareAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FareAudit model
   */
  readonly fields: FareAuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FareAudit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FareAuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FareAudit model
   */
  interface FareAuditFieldRefs {
    readonly id: FieldRef<"FareAudit", 'Int'>
    readonly bookingId: FieldRef<"FareAudit", 'Int'>
    readonly ticketId: FieldRef<"FareAudit", 'Int'>
    readonly fareLogId: FieldRef<"FareAudit", 'Int'>
    readonly logType: FieldRef<"FareAudit", 'String'>
    readonly source: FieldRef<"FareAudit", 'String'>
    readonly requestDateTime: FieldRef<"FareAudit", 'DateTime'>
    readonly pnr: FieldRef<"FareAudit", 'String'>
    readonly flightSector: FieldRef<"FareAudit", 'String'>
    readonly flightNumber: FieldRef<"FareAudit", 'String'>
    readonly travelDateTime: FieldRef<"FareAudit", 'DateTime'>
    readonly fsSameFlightFare: FieldRef<"FareAudit", 'Decimal'>
    readonly fsLowestFlightFare: FieldRef<"FareAudit", 'Decimal'>
    readonly fsAvailableStock: FieldRef<"FareAudit", 'Int'>
    readonly fsErrorMessage: FieldRef<"FareAudit", 'String'>
    readonly fsAverageFare: FieldRef<"FareAudit", 'Decimal'>
    readonly aoSameFlightFare: FieldRef<"FareAudit", 'Decimal'>
    readonly aoLowestFare: FieldRef<"FareAudit", 'Decimal'>
    readonly aoAverageFare: FieldRef<"FareAudit", 'Decimal'>
    readonly aoErrorMessage: FieldRef<"FareAudit", 'String'>
    readonly flightWiseTotalSeatsPurchased: FieldRef<"FareAudit", 'Int'>
    readonly flightWiseTotalSeatsSold: FieldRef<"FareAudit", 'Int'>
    readonly flightWiseTotalSeatsLeft: FieldRef<"FareAudit", 'Int'>
    readonly flightWiseAverageCost: FieldRef<"FareAudit", 'Decimal'>
    readonly routeWiseSeatsPurchased: FieldRef<"FareAudit", 'Int'>
    readonly routeWiseSeatsSold: FieldRef<"FareAudit", 'Int'>
    readonly routeWiseSeatsLeft: FieldRef<"FareAudit", 'Int'>
    readonly routeWiseAverageCost: FieldRef<"FareAudit", 'Decimal'>
    readonly averageSellFare: FieldRef<"FareAudit", 'Decimal'>
    readonly status: FieldRef<"FareAudit", 'String'>
    readonly remark: FieldRef<"FareAudit", 'String'>
    readonly taskCompletedDateTime: FieldRef<"FareAudit", 'DateTime'>
    readonly fsSameFlightStock: FieldRef<"FareAudit", 'Int'>
    readonly fsLowestFareFlightNumber: FieldRef<"FareAudit", 'String'>
    readonly fsLowestFareFlightDepartureTime: FieldRef<"FareAudit", 'DateTime'>
    readonly aoLowestFareFlightNumber: FieldRef<"FareAudit", 'String'>
    readonly aoSameFlightStock: FieldRef<"FareAudit", 'Int'>
    readonly aoLowestFareFlightDepartureTime: FieldRef<"FareAudit", 'DateTime'>
    readonly fareAuditRemarks: FieldRef<"FareAudit", 'String'>
    readonly aoAvailableStock: FieldRef<"FareAudit", 'Int'>
    readonly actualManagedFare: FieldRef<"FareAudit", 'Decimal'>
    readonly bookedPaxQty: FieldRef<"FareAudit", 'Int'>
    readonly fsWindowedLowestFare: FieldRef<"FareAudit", 'Decimal'>
    readonly fsWindowedLowestFareFlightNumber: FieldRef<"FareAudit", 'String'>
    readonly fsWindowedLowestFareDepartureTime: FieldRef<"FareAudit", 'DateTime'>
    readonly aoWindowedLowestFare: FieldRef<"FareAudit", 'Decimal'>
    readonly aoWindowedLowestFareFlightNumber: FieldRef<"FareAudit", 'String'>
    readonly aoWindowedLowestFareDepartureTime: FieldRef<"FareAudit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FareAudit findUnique
   */
  export type FareAuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * Filter, which FareAudit to fetch.
     */
    where: FareAuditWhereUniqueInput
  }

  /**
   * FareAudit findUniqueOrThrow
   */
  export type FareAuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * Filter, which FareAudit to fetch.
     */
    where: FareAuditWhereUniqueInput
  }

  /**
   * FareAudit findFirst
   */
  export type FareAuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * Filter, which FareAudit to fetch.
     */
    where?: FareAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FareAudits to fetch.
     */
    orderBy?: FareAuditOrderByWithRelationInput | FareAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FareAudits.
     */
    cursor?: FareAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FareAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FareAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FareAudits.
     */
    distinct?: FareAuditScalarFieldEnum | FareAuditScalarFieldEnum[]
  }

  /**
   * FareAudit findFirstOrThrow
   */
  export type FareAuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * Filter, which FareAudit to fetch.
     */
    where?: FareAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FareAudits to fetch.
     */
    orderBy?: FareAuditOrderByWithRelationInput | FareAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FareAudits.
     */
    cursor?: FareAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FareAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FareAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FareAudits.
     */
    distinct?: FareAuditScalarFieldEnum | FareAuditScalarFieldEnum[]
  }

  /**
   * FareAudit findMany
   */
  export type FareAuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * Filter, which FareAudits to fetch.
     */
    where?: FareAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FareAudits to fetch.
     */
    orderBy?: FareAuditOrderByWithRelationInput | FareAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FareAudits.
     */
    cursor?: FareAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FareAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FareAudits.
     */
    skip?: number
    distinct?: FareAuditScalarFieldEnum | FareAuditScalarFieldEnum[]
  }

  /**
   * FareAudit create
   */
  export type FareAuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * The data needed to create a FareAudit.
     */
    data: XOR<FareAuditCreateInput, FareAuditUncheckedCreateInput>
  }

  /**
   * FareAudit createMany
   */
  export type FareAuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FareAudits.
     */
    data: FareAuditCreateManyInput | FareAuditCreateManyInput[]
  }

  /**
   * FareAudit update
   */
  export type FareAuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * The data needed to update a FareAudit.
     */
    data: XOR<FareAuditUpdateInput, FareAuditUncheckedUpdateInput>
    /**
     * Choose, which FareAudit to update.
     */
    where: FareAuditWhereUniqueInput
  }

  /**
   * FareAudit updateMany
   */
  export type FareAuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FareAudits.
     */
    data: XOR<FareAuditUpdateManyMutationInput, FareAuditUncheckedUpdateManyInput>
    /**
     * Filter which FareAudits to update
     */
    where?: FareAuditWhereInput
    /**
     * Limit how many FareAudits to update.
     */
    limit?: number
  }

  /**
   * FareAudit upsert
   */
  export type FareAuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * The filter to search for the FareAudit to update in case it exists.
     */
    where: FareAuditWhereUniqueInput
    /**
     * In case the FareAudit found by the `where` argument doesn't exist, create a new FareAudit with this data.
     */
    create: XOR<FareAuditCreateInput, FareAuditUncheckedCreateInput>
    /**
     * In case the FareAudit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FareAuditUpdateInput, FareAuditUncheckedUpdateInput>
  }

  /**
   * FareAudit delete
   */
  export type FareAuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
    /**
     * Filter which FareAudit to delete.
     */
    where: FareAuditWhereUniqueInput
  }

  /**
   * FareAudit deleteMany
   */
  export type FareAuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FareAudits to delete
     */
    where?: FareAuditWhereInput
    /**
     * Limit how many FareAudits to delete.
     */
    limit?: number
  }

  /**
   * FareAudit without action
   */
  export type FareAuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FareAudit
     */
    select?: FareAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FareAudit
     */
    omit?: FareAuditOmit<ExtArgs> | null
  }


  /**
   * Model Flights
   */

  export type AggregateFlights = {
    _count: FlightsCountAggregateOutputType | null
    _avg: FlightsAvgAggregateOutputType | null
    _sum: FlightsSumAggregateOutputType | null
    _min: FlightsMinAggregateOutputType | null
    _max: FlightsMaxAggregateOutputType | null
  }

  export type FlightsAvgAggregateOutputType = {
    Id: number | null
    Stops: number | null
    AvailableSeats: number | null
    BaseAmount: Decimal | null
    TotalTaxAmount: Decimal | null
    GrossAmount: Decimal | null
  }

  export type FlightsSumAggregateOutputType = {
    Id: number | null
    Stops: number | null
    AvailableSeats: number | null
    BaseAmount: Decimal | null
    TotalTaxAmount: Decimal | null
    GrossAmount: Decimal | null
  }

  export type FlightsMinAggregateOutputType = {
    Id: number | null
    AirlineCode: string | null
    FlightNumber: string | null
    Origin: string | null
    Destination: string | null
    DepartureTerminal: string | null
    ArrivalTerminal: string | null
    DepartureDateTime: Date | null
    ArrivalDateTime: Date | null
    TravelClass: string | null
    PriceId: string | null
    Stops: number | null
    Via: string | null
    PlatingCarrier: string | null
    AvailableSeats: number | null
    BaseAmount: Decimal | null
    TotalTaxAmount: Decimal | null
    GrossAmount: Decimal | null
    FareType: string | null
    Source: string | null
    EntryDate: Date | null
  }

  export type FlightsMaxAggregateOutputType = {
    Id: number | null
    AirlineCode: string | null
    FlightNumber: string | null
    Origin: string | null
    Destination: string | null
    DepartureTerminal: string | null
    ArrivalTerminal: string | null
    DepartureDateTime: Date | null
    ArrivalDateTime: Date | null
    TravelClass: string | null
    PriceId: string | null
    Stops: number | null
    Via: string | null
    PlatingCarrier: string | null
    AvailableSeats: number | null
    BaseAmount: Decimal | null
    TotalTaxAmount: Decimal | null
    GrossAmount: Decimal | null
    FareType: string | null
    Source: string | null
    EntryDate: Date | null
  }

  export type FlightsCountAggregateOutputType = {
    Id: number
    AirlineCode: number
    FlightNumber: number
    Origin: number
    Destination: number
    DepartureTerminal: number
    ArrivalTerminal: number
    DepartureDateTime: number
    ArrivalDateTime: number
    TravelClass: number
    PriceId: number
    Stops: number
    Via: number
    PlatingCarrier: number
    AvailableSeats: number
    BaseAmount: number
    TotalTaxAmount: number
    GrossAmount: number
    FareType: number
    Source: number
    EntryDate: number
    _all: number
  }


  export type FlightsAvgAggregateInputType = {
    Id?: true
    Stops?: true
    AvailableSeats?: true
    BaseAmount?: true
    TotalTaxAmount?: true
    GrossAmount?: true
  }

  export type FlightsSumAggregateInputType = {
    Id?: true
    Stops?: true
    AvailableSeats?: true
    BaseAmount?: true
    TotalTaxAmount?: true
    GrossAmount?: true
  }

  export type FlightsMinAggregateInputType = {
    Id?: true
    AirlineCode?: true
    FlightNumber?: true
    Origin?: true
    Destination?: true
    DepartureTerminal?: true
    ArrivalTerminal?: true
    DepartureDateTime?: true
    ArrivalDateTime?: true
    TravelClass?: true
    PriceId?: true
    Stops?: true
    Via?: true
    PlatingCarrier?: true
    AvailableSeats?: true
    BaseAmount?: true
    TotalTaxAmount?: true
    GrossAmount?: true
    FareType?: true
    Source?: true
    EntryDate?: true
  }

  export type FlightsMaxAggregateInputType = {
    Id?: true
    AirlineCode?: true
    FlightNumber?: true
    Origin?: true
    Destination?: true
    DepartureTerminal?: true
    ArrivalTerminal?: true
    DepartureDateTime?: true
    ArrivalDateTime?: true
    TravelClass?: true
    PriceId?: true
    Stops?: true
    Via?: true
    PlatingCarrier?: true
    AvailableSeats?: true
    BaseAmount?: true
    TotalTaxAmount?: true
    GrossAmount?: true
    FareType?: true
    Source?: true
    EntryDate?: true
  }

  export type FlightsCountAggregateInputType = {
    Id?: true
    AirlineCode?: true
    FlightNumber?: true
    Origin?: true
    Destination?: true
    DepartureTerminal?: true
    ArrivalTerminal?: true
    DepartureDateTime?: true
    ArrivalDateTime?: true
    TravelClass?: true
    PriceId?: true
    Stops?: true
    Via?: true
    PlatingCarrier?: true
    AvailableSeats?: true
    BaseAmount?: true
    TotalTaxAmount?: true
    GrossAmount?: true
    FareType?: true
    Source?: true
    EntryDate?: true
    _all?: true
  }

  export type FlightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flights to aggregate.
     */
    where?: FlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightsOrderByWithRelationInput | FlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flights
    **/
    _count?: true | FlightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightsMaxAggregateInputType
  }

  export type GetFlightsAggregateType<T extends FlightsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlights[P]>
      : GetScalarType<T[P], AggregateFlights[P]>
  }




  export type FlightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightsWhereInput
    orderBy?: FlightsOrderByWithAggregationInput | FlightsOrderByWithAggregationInput[]
    by: FlightsScalarFieldEnum[] | FlightsScalarFieldEnum
    having?: FlightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightsCountAggregateInputType | true
    _avg?: FlightsAvgAggregateInputType
    _sum?: FlightsSumAggregateInputType
    _min?: FlightsMinAggregateInputType
    _max?: FlightsMaxAggregateInputType
  }

  export type FlightsGroupByOutputType = {
    Id: number
    AirlineCode: string
    FlightNumber: string
    Origin: string
    Destination: string
    DepartureTerminal: string | null
    ArrivalTerminal: string | null
    DepartureDateTime: Date
    ArrivalDateTime: Date
    TravelClass: string | null
    PriceId: string
    Stops: number
    Via: string
    PlatingCarrier: string
    AvailableSeats: number
    BaseAmount: Decimal
    TotalTaxAmount: Decimal
    GrossAmount: Decimal
    FareType: string
    Source: string
    EntryDate: Date | null
    _count: FlightsCountAggregateOutputType | null
    _avg: FlightsAvgAggregateOutputType | null
    _sum: FlightsSumAggregateOutputType | null
    _min: FlightsMinAggregateOutputType | null
    _max: FlightsMaxAggregateOutputType | null
  }

  type GetFlightsGroupByPayload<T extends FlightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightsGroupByOutputType[P]>
            : GetScalarType<T[P], FlightsGroupByOutputType[P]>
        }
      >
    >


  export type FlightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    AirlineCode?: boolean
    FlightNumber?: boolean
    Origin?: boolean
    Destination?: boolean
    DepartureTerminal?: boolean
    ArrivalTerminal?: boolean
    DepartureDateTime?: boolean
    ArrivalDateTime?: boolean
    TravelClass?: boolean
    PriceId?: boolean
    Stops?: boolean
    Via?: boolean
    PlatingCarrier?: boolean
    AvailableSeats?: boolean
    BaseAmount?: boolean
    TotalTaxAmount?: boolean
    GrossAmount?: boolean
    FareType?: boolean
    Source?: boolean
    EntryDate?: boolean
  }, ExtArgs["result"]["flights"]>



  export type FlightsSelectScalar = {
    Id?: boolean
    AirlineCode?: boolean
    FlightNumber?: boolean
    Origin?: boolean
    Destination?: boolean
    DepartureTerminal?: boolean
    ArrivalTerminal?: boolean
    DepartureDateTime?: boolean
    ArrivalDateTime?: boolean
    TravelClass?: boolean
    PriceId?: boolean
    Stops?: boolean
    Via?: boolean
    PlatingCarrier?: boolean
    AvailableSeats?: boolean
    BaseAmount?: boolean
    TotalTaxAmount?: boolean
    GrossAmount?: boolean
    FareType?: boolean
    Source?: boolean
    EntryDate?: boolean
  }

  export type FlightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "AirlineCode" | "FlightNumber" | "Origin" | "Destination" | "DepartureTerminal" | "ArrivalTerminal" | "DepartureDateTime" | "ArrivalDateTime" | "TravelClass" | "PriceId" | "Stops" | "Via" | "PlatingCarrier" | "AvailableSeats" | "BaseAmount" | "TotalTaxAmount" | "GrossAmount" | "FareType" | "Source" | "EntryDate", ExtArgs["result"]["flights"]>

  export type $FlightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flights"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      AirlineCode: string
      FlightNumber: string
      Origin: string
      Destination: string
      DepartureTerminal: string | null
      ArrivalTerminal: string | null
      DepartureDateTime: Date
      ArrivalDateTime: Date
      TravelClass: string | null
      PriceId: string
      Stops: number
      Via: string
      PlatingCarrier: string
      AvailableSeats: number
      BaseAmount: Prisma.Decimal
      TotalTaxAmount: Prisma.Decimal
      GrossAmount: Prisma.Decimal
      FareType: string
      Source: string
      EntryDate: Date | null
    }, ExtArgs["result"]["flights"]>
    composites: {}
  }

  type FlightsGetPayload<S extends boolean | null | undefined | FlightsDefaultArgs> = $Result.GetResult<Prisma.$FlightsPayload, S>

  type FlightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightsCountAggregateInputType | true
    }

  export interface FlightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flights'], meta: { name: 'Flights' } }
    /**
     * Find zero or one Flights that matches the filter.
     * @param {FlightsFindUniqueArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightsFindUniqueArgs>(args: SelectSubset<T, FlightsFindUniqueArgs<ExtArgs>>): Prisma__FlightsClient<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightsFindUniqueOrThrowArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightsFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightsClient<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsFindFirstArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightsFindFirstArgs>(args?: SelectSubset<T, FlightsFindFirstArgs<ExtArgs>>): Prisma__FlightsClient<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsFindFirstOrThrowArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightsFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightsClient<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flights
     * const flights = await prisma.flights.findMany()
     * 
     * // Get first 10 Flights
     * const flights = await prisma.flights.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const flightsWithIdOnly = await prisma.flights.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends FlightsFindManyArgs>(args?: SelectSubset<T, FlightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flights.
     * @param {FlightsCreateArgs} args - Arguments to create a Flights.
     * @example
     * // Create one Flights
     * const Flights = await prisma.flights.create({
     *   data: {
     *     // ... data to create a Flights
     *   }
     * })
     * 
     */
    create<T extends FlightsCreateArgs>(args: SelectSubset<T, FlightsCreateArgs<ExtArgs>>): Prisma__FlightsClient<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flights.
     * @param {FlightsCreateManyArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flights = await prisma.flights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightsCreateManyArgs>(args?: SelectSubset<T, FlightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flights.
     * @param {FlightsDeleteArgs} args - Arguments to delete one Flights.
     * @example
     * // Delete one Flights
     * const Flights = await prisma.flights.delete({
     *   where: {
     *     // ... filter to delete one Flights
     *   }
     * })
     * 
     */
    delete<T extends FlightsDeleteArgs>(args: SelectSubset<T, FlightsDeleteArgs<ExtArgs>>): Prisma__FlightsClient<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flights.
     * @param {FlightsUpdateArgs} args - Arguments to update one Flights.
     * @example
     * // Update one Flights
     * const flights = await prisma.flights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightsUpdateArgs>(args: SelectSubset<T, FlightsUpdateArgs<ExtArgs>>): Prisma__FlightsClient<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flights.
     * @param {FlightsDeleteManyArgs} args - Arguments to filter Flights to delete.
     * @example
     * // Delete a few Flights
     * const { count } = await prisma.flights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightsDeleteManyArgs>(args?: SelectSubset<T, FlightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flights
     * const flights = await prisma.flights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightsUpdateManyArgs>(args: SelectSubset<T, FlightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flights.
     * @param {FlightsUpsertArgs} args - Arguments to update or create a Flights.
     * @example
     * // Update or create a Flights
     * const flights = await prisma.flights.upsert({
     *   create: {
     *     // ... data to create a Flights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flights we want to update
     *   }
     * })
     */
    upsert<T extends FlightsUpsertArgs>(args: SelectSubset<T, FlightsUpsertArgs<ExtArgs>>): Prisma__FlightsClient<$Result.GetResult<Prisma.$FlightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsCountArgs} args - Arguments to filter Flights to count.
     * @example
     * // Count the number of Flights
     * const count = await prisma.flights.count({
     *   where: {
     *     // ... the filter for the Flights we want to count
     *   }
     * })
    **/
    count<T extends FlightsCountArgs>(
      args?: Subset<T, FlightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightsAggregateArgs>(args: Subset<T, FlightsAggregateArgs>): Prisma.PrismaPromise<GetFlightsAggregateType<T>>

    /**
     * Group by Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightsGroupByArgs['orderBy'] }
        : { orderBy?: FlightsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flights model
   */
  readonly fields: FlightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flights model
   */
  interface FlightsFieldRefs {
    readonly Id: FieldRef<"Flights", 'Int'>
    readonly AirlineCode: FieldRef<"Flights", 'String'>
    readonly FlightNumber: FieldRef<"Flights", 'String'>
    readonly Origin: FieldRef<"Flights", 'String'>
    readonly Destination: FieldRef<"Flights", 'String'>
    readonly DepartureTerminal: FieldRef<"Flights", 'String'>
    readonly ArrivalTerminal: FieldRef<"Flights", 'String'>
    readonly DepartureDateTime: FieldRef<"Flights", 'DateTime'>
    readonly ArrivalDateTime: FieldRef<"Flights", 'DateTime'>
    readonly TravelClass: FieldRef<"Flights", 'String'>
    readonly PriceId: FieldRef<"Flights", 'String'>
    readonly Stops: FieldRef<"Flights", 'Int'>
    readonly Via: FieldRef<"Flights", 'String'>
    readonly PlatingCarrier: FieldRef<"Flights", 'String'>
    readonly AvailableSeats: FieldRef<"Flights", 'Int'>
    readonly BaseAmount: FieldRef<"Flights", 'Decimal'>
    readonly TotalTaxAmount: FieldRef<"Flights", 'Decimal'>
    readonly GrossAmount: FieldRef<"Flights", 'Decimal'>
    readonly FareType: FieldRef<"Flights", 'String'>
    readonly Source: FieldRef<"Flights", 'String'>
    readonly EntryDate: FieldRef<"Flights", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flights findUnique
   */
  export type FlightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where: FlightsWhereUniqueInput
  }

  /**
   * Flights findUniqueOrThrow
   */
  export type FlightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where: FlightsWhereUniqueInput
  }

  /**
   * Flights findFirst
   */
  export type FlightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where?: FlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightsOrderByWithRelationInput | FlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * Flights findFirstOrThrow
   */
  export type FlightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where?: FlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightsOrderByWithRelationInput | FlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * Flights findMany
   */
  export type FlightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where?: FlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightsOrderByWithRelationInput | FlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flights.
     */
    cursor?: FlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * Flights create
   */
  export type FlightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * The data needed to create a Flights.
     */
    data: XOR<FlightsCreateInput, FlightsUncheckedCreateInput>
  }

  /**
   * Flights createMany
   */
  export type FlightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flights.
     */
    data: FlightsCreateManyInput | FlightsCreateManyInput[]
  }

  /**
   * Flights update
   */
  export type FlightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * The data needed to update a Flights.
     */
    data: XOR<FlightsUpdateInput, FlightsUncheckedUpdateInput>
    /**
     * Choose, which Flights to update.
     */
    where: FlightsWhereUniqueInput
  }

  /**
   * Flights updateMany
   */
  export type FlightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flights.
     */
    data: XOR<FlightsUpdateManyMutationInput, FlightsUncheckedUpdateManyInput>
    /**
     * Filter which Flights to update
     */
    where?: FlightsWhereInput
    /**
     * Limit how many Flights to update.
     */
    limit?: number
  }

  /**
   * Flights upsert
   */
  export type FlightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * The filter to search for the Flights to update in case it exists.
     */
    where: FlightsWhereUniqueInput
    /**
     * In case the Flights found by the `where` argument doesn't exist, create a new Flights with this data.
     */
    create: XOR<FlightsCreateInput, FlightsUncheckedCreateInput>
    /**
     * In case the Flights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightsUpdateInput, FlightsUncheckedUpdateInput>
  }

  /**
   * Flights delete
   */
  export type FlightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
    /**
     * Filter which Flights to delete.
     */
    where: FlightsWhereUniqueInput
  }

  /**
   * Flights deleteMany
   */
  export type FlightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flights to delete
     */
    where?: FlightsWhereInput
    /**
     * Limit how many Flights to delete.
     */
    limit?: number
  }

  /**
   * Flights without action
   */
  export type FlightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flights
     */
    select?: FlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flights
     */
    omit?: FlightsOmit<ExtArgs> | null
  }


  /**
   * Model sysdiagrams
   */

  export type AggregateSysdiagrams = {
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  export type SysdiagramsAvgAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsSumAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsMinAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Uint8Array | null
  }

  export type SysdiagramsMaxAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Uint8Array | null
  }

  export type SysdiagramsCountAggregateOutputType = {
    name: number
    principal_id: number
    diagram_id: number
    version: number
    definition: number
    _all: number
  }


  export type SysdiagramsAvgAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsSumAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsMinAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsMaxAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsCountAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
    _all?: true
  }

  export type SysdiagramsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to aggregate.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sysdiagrams
    **/
    _count?: true | SysdiagramsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysdiagramsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysdiagramsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysdiagramsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type GetSysdiagramsAggregateType<T extends SysdiagramsAggregateArgs> = {
        [P in keyof T & keyof AggregateSysdiagrams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysdiagrams[P]>
      : GetScalarType<T[P], AggregateSysdiagrams[P]>
  }




  export type sysdiagramsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sysdiagramsWhereInput
    orderBy?: sysdiagramsOrderByWithAggregationInput | sysdiagramsOrderByWithAggregationInput[]
    by: SysdiagramsScalarFieldEnum[] | SysdiagramsScalarFieldEnum
    having?: sysdiagramsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysdiagramsCountAggregateInputType | true
    _avg?: SysdiagramsAvgAggregateInputType
    _sum?: SysdiagramsSumAggregateInputType
    _min?: SysdiagramsMinAggregateInputType
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type SysdiagramsGroupByOutputType = {
    name: string
    principal_id: number
    diagram_id: number
    version: number | null
    definition: Uint8Array | null
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  type GetSysdiagramsGroupByPayload<T extends sysdiagramsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysdiagramsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysdiagramsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
            : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
        }
      >
    >


  export type sysdiagramsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }, ExtArgs["result"]["sysdiagrams"]>



  export type sysdiagramsSelectScalar = {
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }

  export type sysdiagramsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "principal_id" | "diagram_id" | "version" | "definition", ExtArgs["result"]["sysdiagrams"]>

  export type $sysdiagramsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sysdiagrams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
      principal_id: number
      diagram_id: number
      version: number | null
      definition: Uint8Array | null
    }, ExtArgs["result"]["sysdiagrams"]>
    composites: {}
  }

  type sysdiagramsGetPayload<S extends boolean | null | undefined | sysdiagramsDefaultArgs> = $Result.GetResult<Prisma.$sysdiagramsPayload, S>

  type sysdiagramsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sysdiagramsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SysdiagramsCountAggregateInputType | true
    }

  export interface sysdiagramsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sysdiagrams'], meta: { name: 'sysdiagrams' } }
    /**
     * Find zero or one Sysdiagrams that matches the filter.
     * @param {sysdiagramsFindUniqueArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sysdiagramsFindUniqueArgs>(args: SelectSubset<T, sysdiagramsFindUniqueArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sysdiagrams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sysdiagramsFindUniqueOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sysdiagramsFindUniqueOrThrowArgs>(args: SelectSubset<T, sysdiagramsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sysdiagramsFindFirstArgs>(args?: SelectSubset<T, sysdiagramsFindFirstArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sysdiagrams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sysdiagramsFindFirstOrThrowArgs>(args?: SelectSubset<T, sysdiagramsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany()
     * 
     * // Get first 10 Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const sysdiagramsWithNameOnly = await prisma.sysdiagrams.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends sysdiagramsFindManyArgs>(args?: SelectSubset<T, sysdiagramsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sysdiagrams.
     * @param {sysdiagramsCreateArgs} args - Arguments to create a Sysdiagrams.
     * @example
     * // Create one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.create({
     *   data: {
     *     // ... data to create a Sysdiagrams
     *   }
     * })
     * 
     */
    create<T extends sysdiagramsCreateArgs>(args: SelectSubset<T, sysdiagramsCreateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sysdiagrams.
     * @param {sysdiagramsCreateManyArgs} args - Arguments to create many Sysdiagrams.
     * @example
     * // Create many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sysdiagramsCreateManyArgs>(args?: SelectSubset<T, sysdiagramsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sysdiagrams.
     * @param {sysdiagramsDeleteArgs} args - Arguments to delete one Sysdiagrams.
     * @example
     * // Delete one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.delete({
     *   where: {
     *     // ... filter to delete one Sysdiagrams
     *   }
     * })
     * 
     */
    delete<T extends sysdiagramsDeleteArgs>(args: SelectSubset<T, sysdiagramsDeleteArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sysdiagrams.
     * @param {sysdiagramsUpdateArgs} args - Arguments to update one Sysdiagrams.
     * @example
     * // Update one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sysdiagramsUpdateArgs>(args: SelectSubset<T, sysdiagramsUpdateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sysdiagrams.
     * @param {sysdiagramsDeleteManyArgs} args - Arguments to filter Sysdiagrams to delete.
     * @example
     * // Delete a few Sysdiagrams
     * const { count } = await prisma.sysdiagrams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sysdiagramsDeleteManyArgs>(args?: SelectSubset<T, sysdiagramsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sysdiagramsUpdateManyArgs>(args: SelectSubset<T, sysdiagramsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sysdiagrams.
     * @param {sysdiagramsUpsertArgs} args - Arguments to update or create a Sysdiagrams.
     * @example
     * // Update or create a Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.upsert({
     *   create: {
     *     // ... data to create a Sysdiagrams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to update
     *   }
     * })
     */
    upsert<T extends sysdiagramsUpsertArgs>(args: SelectSubset<T, sysdiagramsUpsertArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsCountArgs} args - Arguments to filter Sysdiagrams to count.
     * @example
     * // Count the number of Sysdiagrams
     * const count = await prisma.sysdiagrams.count({
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to count
     *   }
     * })
    **/
    count<T extends sysdiagramsCountArgs>(
      args?: Subset<T, sysdiagramsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysdiagramsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysdiagramsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysdiagramsAggregateArgs>(args: Subset<T, SysdiagramsAggregateArgs>): Prisma.PrismaPromise<GetSysdiagramsAggregateType<T>>

    /**
     * Group by Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sysdiagramsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sysdiagramsGroupByArgs['orderBy'] }
        : { orderBy?: sysdiagramsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sysdiagramsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysdiagramsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sysdiagrams model
   */
  readonly fields: sysdiagramsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sysdiagrams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sysdiagramsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sysdiagrams model
   */
  interface sysdiagramsFieldRefs {
    readonly name: FieldRef<"sysdiagrams", 'String'>
    readonly principal_id: FieldRef<"sysdiagrams", 'Int'>
    readonly diagram_id: FieldRef<"sysdiagrams", 'Int'>
    readonly version: FieldRef<"sysdiagrams", 'Int'>
    readonly definition: FieldRef<"sysdiagrams", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * sysdiagrams findUnique
   */
  export type sysdiagramsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findUniqueOrThrow
   */
  export type sysdiagramsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findFirst
   */
  export type sysdiagramsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findFirstOrThrow
   */
  export type sysdiagramsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findMany
   */
  export type sysdiagramsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams create
   */
  export type sysdiagramsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to create a sysdiagrams.
     */
    data: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
  }

  /**
   * sysdiagrams createMany
   */
  export type sysdiagramsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sysdiagrams.
     */
    data: sysdiagramsCreateManyInput | sysdiagramsCreateManyInput[]
  }

  /**
   * sysdiagrams update
   */
  export type sysdiagramsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to update a sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
    /**
     * Choose, which sysdiagrams to update.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams updateMany
   */
  export type sysdiagramsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateManyMutationInput, sysdiagramsUncheckedUpdateManyInput>
    /**
     * Filter which sysdiagrams to update
     */
    where?: sysdiagramsWhereInput
    /**
     * Limit how many sysdiagrams to update.
     */
    limit?: number
  }

  /**
   * sysdiagrams upsert
   */
  export type sysdiagramsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The filter to search for the sysdiagrams to update in case it exists.
     */
    where: sysdiagramsWhereUniqueInput
    /**
     * In case the sysdiagrams found by the `where` argument doesn't exist, create a new sysdiagrams with this data.
     */
    create: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
    /**
     * In case the sysdiagrams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
  }

  /**
   * sysdiagrams delete
   */
  export type sysdiagramsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter which sysdiagrams to delete.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams deleteMany
   */
  export type sysdiagramsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to delete
     */
    where?: sysdiagramsWhereInput
    /**
     * Limit how many sysdiagrams to delete.
     */
    limit?: number
  }

  /**
   * sysdiagrams without action
   */
  export type sysdiagramsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
  }


  /**
   * Model LogSheet
   */

  export type AggregateLogSheet = {
    _count: LogSheetCountAggregateOutputType | null
    _avg: LogSheetAvgAggregateOutputType | null
    _sum: LogSheetSumAggregateOutputType | null
    _min: LogSheetMinAggregateOutputType | null
    _max: LogSheetMaxAggregateOutputType | null
  }

  export type LogSheetAvgAggregateOutputType = {
    LogSheetID: number | null
    RefID: number | null
    UserID: number | null
  }

  export type LogSheetSumAggregateOutputType = {
    LogSheetID: number | null
    RefID: number | null
    UserID: number | null
  }

  export type LogSheetMinAggregateOutputType = {
    LogSheetID: number | null
    FormName: string | null
    RefID: number | null
    UserID: number | null
    UserName: string | null
    DateTime: Date | null
    Remarks: string | null
  }

  export type LogSheetMaxAggregateOutputType = {
    LogSheetID: number | null
    FormName: string | null
    RefID: number | null
    UserID: number | null
    UserName: string | null
    DateTime: Date | null
    Remarks: string | null
  }

  export type LogSheetCountAggregateOutputType = {
    LogSheetID: number
    FormName: number
    RefID: number
    UserID: number
    UserName: number
    DateTime: number
    Remarks: number
    _all: number
  }


  export type LogSheetAvgAggregateInputType = {
    LogSheetID?: true
    RefID?: true
    UserID?: true
  }

  export type LogSheetSumAggregateInputType = {
    LogSheetID?: true
    RefID?: true
    UserID?: true
  }

  export type LogSheetMinAggregateInputType = {
    LogSheetID?: true
    FormName?: true
    RefID?: true
    UserID?: true
    UserName?: true
    DateTime?: true
    Remarks?: true
  }

  export type LogSheetMaxAggregateInputType = {
    LogSheetID?: true
    FormName?: true
    RefID?: true
    UserID?: true
    UserName?: true
    DateTime?: true
    Remarks?: true
  }

  export type LogSheetCountAggregateInputType = {
    LogSheetID?: true
    FormName?: true
    RefID?: true
    UserID?: true
    UserName?: true
    DateTime?: true
    Remarks?: true
    _all?: true
  }

  export type LogSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogSheet to aggregate.
     */
    where?: LogSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogSheets to fetch.
     */
    orderBy?: LogSheetOrderByWithRelationInput | LogSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogSheets
    **/
    _count?: true | LogSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogSheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogSheetMaxAggregateInputType
  }

  export type GetLogSheetAggregateType<T extends LogSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateLogSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogSheet[P]>
      : GetScalarType<T[P], AggregateLogSheet[P]>
  }




  export type LogSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogSheetWhereInput
    orderBy?: LogSheetOrderByWithAggregationInput | LogSheetOrderByWithAggregationInput[]
    by: LogSheetScalarFieldEnum[] | LogSheetScalarFieldEnum
    having?: LogSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogSheetCountAggregateInputType | true
    _avg?: LogSheetAvgAggregateInputType
    _sum?: LogSheetSumAggregateInputType
    _min?: LogSheetMinAggregateInputType
    _max?: LogSheetMaxAggregateInputType
  }

  export type LogSheetGroupByOutputType = {
    LogSheetID: number
    FormName: string | null
    RefID: number | null
    UserID: number | null
    UserName: string | null
    DateTime: Date | null
    Remarks: string | null
    _count: LogSheetCountAggregateOutputType | null
    _avg: LogSheetAvgAggregateOutputType | null
    _sum: LogSheetSumAggregateOutputType | null
    _min: LogSheetMinAggregateOutputType | null
    _max: LogSheetMaxAggregateOutputType | null
  }

  type GetLogSheetGroupByPayload<T extends LogSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogSheetGroupByOutputType[P]>
            : GetScalarType<T[P], LogSheetGroupByOutputType[P]>
        }
      >
    >


  export type LogSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LogSheetID?: boolean
    FormName?: boolean
    RefID?: boolean
    UserID?: boolean
    UserName?: boolean
    DateTime?: boolean
    Remarks?: boolean
  }, ExtArgs["result"]["logSheet"]>



  export type LogSheetSelectScalar = {
    LogSheetID?: boolean
    FormName?: boolean
    RefID?: boolean
    UserID?: boolean
    UserName?: boolean
    DateTime?: boolean
    Remarks?: boolean
  }

  export type LogSheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"LogSheetID" | "FormName" | "RefID" | "UserID" | "UserName" | "DateTime" | "Remarks", ExtArgs["result"]["logSheet"]>

  export type $LogSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogSheet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      LogSheetID: number
      FormName: string | null
      RefID: number | null
      UserID: number | null
      UserName: string | null
      DateTime: Date | null
      Remarks: string | null
    }, ExtArgs["result"]["logSheet"]>
    composites: {}
  }

  type LogSheetGetPayload<S extends boolean | null | undefined | LogSheetDefaultArgs> = $Result.GetResult<Prisma.$LogSheetPayload, S>

  type LogSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogSheetCountAggregateInputType | true
    }

  export interface LogSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogSheet'], meta: { name: 'LogSheet' } }
    /**
     * Find zero or one LogSheet that matches the filter.
     * @param {LogSheetFindUniqueArgs} args - Arguments to find a LogSheet
     * @example
     * // Get one LogSheet
     * const logSheet = await prisma.logSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogSheetFindUniqueArgs>(args: SelectSubset<T, LogSheetFindUniqueArgs<ExtArgs>>): Prisma__LogSheetClient<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogSheetFindUniqueOrThrowArgs} args - Arguments to find a LogSheet
     * @example
     * // Get one LogSheet
     * const logSheet = await prisma.logSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, LogSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogSheetClient<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogSheetFindFirstArgs} args - Arguments to find a LogSheet
     * @example
     * // Get one LogSheet
     * const logSheet = await prisma.logSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogSheetFindFirstArgs>(args?: SelectSubset<T, LogSheetFindFirstArgs<ExtArgs>>): Prisma__LogSheetClient<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogSheetFindFirstOrThrowArgs} args - Arguments to find a LogSheet
     * @example
     * // Get one LogSheet
     * const logSheet = await prisma.logSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, LogSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogSheetClient<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogSheets
     * const logSheets = await prisma.logSheet.findMany()
     * 
     * // Get first 10 LogSheets
     * const logSheets = await prisma.logSheet.findMany({ take: 10 })
     * 
     * // Only select the `LogSheetID`
     * const logSheetWithLogSheetIDOnly = await prisma.logSheet.findMany({ select: { LogSheetID: true } })
     * 
     */
    findMany<T extends LogSheetFindManyArgs>(args?: SelectSubset<T, LogSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogSheet.
     * @param {LogSheetCreateArgs} args - Arguments to create a LogSheet.
     * @example
     * // Create one LogSheet
     * const LogSheet = await prisma.logSheet.create({
     *   data: {
     *     // ... data to create a LogSheet
     *   }
     * })
     * 
     */
    create<T extends LogSheetCreateArgs>(args: SelectSubset<T, LogSheetCreateArgs<ExtArgs>>): Prisma__LogSheetClient<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogSheets.
     * @param {LogSheetCreateManyArgs} args - Arguments to create many LogSheets.
     * @example
     * // Create many LogSheets
     * const logSheet = await prisma.logSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogSheetCreateManyArgs>(args?: SelectSubset<T, LogSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LogSheet.
     * @param {LogSheetDeleteArgs} args - Arguments to delete one LogSheet.
     * @example
     * // Delete one LogSheet
     * const LogSheet = await prisma.logSheet.delete({
     *   where: {
     *     // ... filter to delete one LogSheet
     *   }
     * })
     * 
     */
    delete<T extends LogSheetDeleteArgs>(args: SelectSubset<T, LogSheetDeleteArgs<ExtArgs>>): Prisma__LogSheetClient<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogSheet.
     * @param {LogSheetUpdateArgs} args - Arguments to update one LogSheet.
     * @example
     * // Update one LogSheet
     * const logSheet = await prisma.logSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogSheetUpdateArgs>(args: SelectSubset<T, LogSheetUpdateArgs<ExtArgs>>): Prisma__LogSheetClient<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogSheets.
     * @param {LogSheetDeleteManyArgs} args - Arguments to filter LogSheets to delete.
     * @example
     * // Delete a few LogSheets
     * const { count } = await prisma.logSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogSheetDeleteManyArgs>(args?: SelectSubset<T, LogSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogSheets
     * const logSheet = await prisma.logSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogSheetUpdateManyArgs>(args: SelectSubset<T, LogSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogSheet.
     * @param {LogSheetUpsertArgs} args - Arguments to update or create a LogSheet.
     * @example
     * // Update or create a LogSheet
     * const logSheet = await prisma.logSheet.upsert({
     *   create: {
     *     // ... data to create a LogSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogSheet we want to update
     *   }
     * })
     */
    upsert<T extends LogSheetUpsertArgs>(args: SelectSubset<T, LogSheetUpsertArgs<ExtArgs>>): Prisma__LogSheetClient<$Result.GetResult<Prisma.$LogSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogSheetCountArgs} args - Arguments to filter LogSheets to count.
     * @example
     * // Count the number of LogSheets
     * const count = await prisma.logSheet.count({
     *   where: {
     *     // ... the filter for the LogSheets we want to count
     *   }
     * })
    **/
    count<T extends LogSheetCountArgs>(
      args?: Subset<T, LogSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogSheetAggregateArgs>(args: Subset<T, LogSheetAggregateArgs>): Prisma.PrismaPromise<GetLogSheetAggregateType<T>>

    /**
     * Group by LogSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogSheetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogSheetGroupByArgs['orderBy'] }
        : { orderBy?: LogSheetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogSheet model
   */
  readonly fields: LogSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogSheet model
   */
  interface LogSheetFieldRefs {
    readonly LogSheetID: FieldRef<"LogSheet", 'Int'>
    readonly FormName: FieldRef<"LogSheet", 'String'>
    readonly RefID: FieldRef<"LogSheet", 'Int'>
    readonly UserID: FieldRef<"LogSheet", 'Int'>
    readonly UserName: FieldRef<"LogSheet", 'String'>
    readonly DateTime: FieldRef<"LogSheet", 'DateTime'>
    readonly Remarks: FieldRef<"LogSheet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LogSheet findUnique
   */
  export type LogSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * Filter, which LogSheet to fetch.
     */
    where: LogSheetWhereUniqueInput
  }

  /**
   * LogSheet findUniqueOrThrow
   */
  export type LogSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * Filter, which LogSheet to fetch.
     */
    where: LogSheetWhereUniqueInput
  }

  /**
   * LogSheet findFirst
   */
  export type LogSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * Filter, which LogSheet to fetch.
     */
    where?: LogSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogSheets to fetch.
     */
    orderBy?: LogSheetOrderByWithRelationInput | LogSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogSheets.
     */
    cursor?: LogSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogSheets.
     */
    distinct?: LogSheetScalarFieldEnum | LogSheetScalarFieldEnum[]
  }

  /**
   * LogSheet findFirstOrThrow
   */
  export type LogSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * Filter, which LogSheet to fetch.
     */
    where?: LogSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogSheets to fetch.
     */
    orderBy?: LogSheetOrderByWithRelationInput | LogSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogSheets.
     */
    cursor?: LogSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogSheets.
     */
    distinct?: LogSheetScalarFieldEnum | LogSheetScalarFieldEnum[]
  }

  /**
   * LogSheet findMany
   */
  export type LogSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * Filter, which LogSheets to fetch.
     */
    where?: LogSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogSheets to fetch.
     */
    orderBy?: LogSheetOrderByWithRelationInput | LogSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogSheets.
     */
    cursor?: LogSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogSheets.
     */
    skip?: number
    distinct?: LogSheetScalarFieldEnum | LogSheetScalarFieldEnum[]
  }

  /**
   * LogSheet create
   */
  export type LogSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * The data needed to create a LogSheet.
     */
    data?: XOR<LogSheetCreateInput, LogSheetUncheckedCreateInput>
  }

  /**
   * LogSheet createMany
   */
  export type LogSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogSheets.
     */
    data: LogSheetCreateManyInput | LogSheetCreateManyInput[]
  }

  /**
   * LogSheet update
   */
  export type LogSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * The data needed to update a LogSheet.
     */
    data: XOR<LogSheetUpdateInput, LogSheetUncheckedUpdateInput>
    /**
     * Choose, which LogSheet to update.
     */
    where: LogSheetWhereUniqueInput
  }

  /**
   * LogSheet updateMany
   */
  export type LogSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogSheets.
     */
    data: XOR<LogSheetUpdateManyMutationInput, LogSheetUncheckedUpdateManyInput>
    /**
     * Filter which LogSheets to update
     */
    where?: LogSheetWhereInput
    /**
     * Limit how many LogSheets to update.
     */
    limit?: number
  }

  /**
   * LogSheet upsert
   */
  export type LogSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * The filter to search for the LogSheet to update in case it exists.
     */
    where: LogSheetWhereUniqueInput
    /**
     * In case the LogSheet found by the `where` argument doesn't exist, create a new LogSheet with this data.
     */
    create: XOR<LogSheetCreateInput, LogSheetUncheckedCreateInput>
    /**
     * In case the LogSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogSheetUpdateInput, LogSheetUncheckedUpdateInput>
  }

  /**
   * LogSheet delete
   */
  export type LogSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
    /**
     * Filter which LogSheet to delete.
     */
    where: LogSheetWhereUniqueInput
  }

  /**
   * LogSheet deleteMany
   */
  export type LogSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogSheets to delete
     */
    where?: LogSheetWhereInput
    /**
     * Limit how many LogSheets to delete.
     */
    limit?: number
  }

  /**
   * LogSheet without action
   */
  export type LogSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogSheet
     */
    select?: LogSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogSheet
     */
    omit?: LogSheetOmit<ExtArgs> | null
  }


  /**
   * Model FlightOps
   */

  export type AggregateFlightOps = {
    _count: FlightOpsCountAggregateOutputType | null
    _avg: FlightOpsAvgAggregateOutputType | null
    _sum: FlightOpsSumAggregateOutputType | null
    _min: FlightOpsMinAggregateOutputType | null
    _max: FlightOpsMaxAggregateOutputType | null
  }

  export type FlightOpsAvgAggregateOutputType = {
    FlightOpsID: number | null
    Keyid: number | null
  }

  export type FlightOpsSumAggregateOutputType = {
    FlightOpsID: number | null
    Keyid: number | null
  }

  export type FlightOpsMinAggregateOutputType = {
    FlightOpsID: number | null
    Keyid: number | null
    Image: string | null
  }

  export type FlightOpsMaxAggregateOutputType = {
    FlightOpsID: number | null
    Keyid: number | null
    Image: string | null
  }

  export type FlightOpsCountAggregateOutputType = {
    FlightOpsID: number
    Keyid: number
    Image: number
    _all: number
  }


  export type FlightOpsAvgAggregateInputType = {
    FlightOpsID?: true
    Keyid?: true
  }

  export type FlightOpsSumAggregateInputType = {
    FlightOpsID?: true
    Keyid?: true
  }

  export type FlightOpsMinAggregateInputType = {
    FlightOpsID?: true
    Keyid?: true
    Image?: true
  }

  export type FlightOpsMaxAggregateInputType = {
    FlightOpsID?: true
    Keyid?: true
    Image?: true
  }

  export type FlightOpsCountAggregateInputType = {
    FlightOpsID?: true
    Keyid?: true
    Image?: true
    _all?: true
  }

  export type FlightOpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightOps to aggregate.
     */
    where?: FlightOpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightOps to fetch.
     */
    orderBy?: FlightOpsOrderByWithRelationInput | FlightOpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightOpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightOps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightOps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlightOps
    **/
    _count?: true | FlightOpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightOpsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightOpsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightOpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightOpsMaxAggregateInputType
  }

  export type GetFlightOpsAggregateType<T extends FlightOpsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlightOps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlightOps[P]>
      : GetScalarType<T[P], AggregateFlightOps[P]>
  }




  export type FlightOpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightOpsWhereInput
    orderBy?: FlightOpsOrderByWithAggregationInput | FlightOpsOrderByWithAggregationInput[]
    by: FlightOpsScalarFieldEnum[] | FlightOpsScalarFieldEnum
    having?: FlightOpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightOpsCountAggregateInputType | true
    _avg?: FlightOpsAvgAggregateInputType
    _sum?: FlightOpsSumAggregateInputType
    _min?: FlightOpsMinAggregateInputType
    _max?: FlightOpsMaxAggregateInputType
  }

  export type FlightOpsGroupByOutputType = {
    FlightOpsID: number
    Keyid: number | null
    Image: string | null
    _count: FlightOpsCountAggregateOutputType | null
    _avg: FlightOpsAvgAggregateOutputType | null
    _sum: FlightOpsSumAggregateOutputType | null
    _min: FlightOpsMinAggregateOutputType | null
    _max: FlightOpsMaxAggregateOutputType | null
  }

  type GetFlightOpsGroupByPayload<T extends FlightOpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightOpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightOpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightOpsGroupByOutputType[P]>
            : GetScalarType<T[P], FlightOpsGroupByOutputType[P]>
        }
      >
    >


  export type FlightOpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FlightOpsID?: boolean
    Keyid?: boolean
    Image?: boolean
  }, ExtArgs["result"]["flightOps"]>



  export type FlightOpsSelectScalar = {
    FlightOpsID?: boolean
    Keyid?: boolean
    Image?: boolean
  }

  export type FlightOpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"FlightOpsID" | "Keyid" | "Image", ExtArgs["result"]["flightOps"]>

  export type $FlightOpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlightOps"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      FlightOpsID: number
      Keyid: number | null
      Image: string | null
    }, ExtArgs["result"]["flightOps"]>
    composites: {}
  }

  type FlightOpsGetPayload<S extends boolean | null | undefined | FlightOpsDefaultArgs> = $Result.GetResult<Prisma.$FlightOpsPayload, S>

  type FlightOpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlightOpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightOpsCountAggregateInputType | true
    }

  export interface FlightOpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlightOps'], meta: { name: 'FlightOps' } }
    /**
     * Find zero or one FlightOps that matches the filter.
     * @param {FlightOpsFindUniqueArgs} args - Arguments to find a FlightOps
     * @example
     * // Get one FlightOps
     * const flightOps = await prisma.flightOps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightOpsFindUniqueArgs>(args: SelectSubset<T, FlightOpsFindUniqueArgs<ExtArgs>>): Prisma__FlightOpsClient<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlightOps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightOpsFindUniqueOrThrowArgs} args - Arguments to find a FlightOps
     * @example
     * // Get one FlightOps
     * const flightOps = await prisma.flightOps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightOpsFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightOpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightOpsClient<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlightOps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightOpsFindFirstArgs} args - Arguments to find a FlightOps
     * @example
     * // Get one FlightOps
     * const flightOps = await prisma.flightOps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightOpsFindFirstArgs>(args?: SelectSubset<T, FlightOpsFindFirstArgs<ExtArgs>>): Prisma__FlightOpsClient<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlightOps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightOpsFindFirstOrThrowArgs} args - Arguments to find a FlightOps
     * @example
     * // Get one FlightOps
     * const flightOps = await prisma.flightOps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightOpsFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightOpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightOpsClient<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlightOps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightOpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlightOps
     * const flightOps = await prisma.flightOps.findMany()
     * 
     * // Get first 10 FlightOps
     * const flightOps = await prisma.flightOps.findMany({ take: 10 })
     * 
     * // Only select the `FlightOpsID`
     * const flightOpsWithFlightOpsIDOnly = await prisma.flightOps.findMany({ select: { FlightOpsID: true } })
     * 
     */
    findMany<T extends FlightOpsFindManyArgs>(args?: SelectSubset<T, FlightOpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlightOps.
     * @param {FlightOpsCreateArgs} args - Arguments to create a FlightOps.
     * @example
     * // Create one FlightOps
     * const FlightOps = await prisma.flightOps.create({
     *   data: {
     *     // ... data to create a FlightOps
     *   }
     * })
     * 
     */
    create<T extends FlightOpsCreateArgs>(args: SelectSubset<T, FlightOpsCreateArgs<ExtArgs>>): Prisma__FlightOpsClient<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlightOps.
     * @param {FlightOpsCreateManyArgs} args - Arguments to create many FlightOps.
     * @example
     * // Create many FlightOps
     * const flightOps = await prisma.flightOps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightOpsCreateManyArgs>(args?: SelectSubset<T, FlightOpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlightOps.
     * @param {FlightOpsDeleteArgs} args - Arguments to delete one FlightOps.
     * @example
     * // Delete one FlightOps
     * const FlightOps = await prisma.flightOps.delete({
     *   where: {
     *     // ... filter to delete one FlightOps
     *   }
     * })
     * 
     */
    delete<T extends FlightOpsDeleteArgs>(args: SelectSubset<T, FlightOpsDeleteArgs<ExtArgs>>): Prisma__FlightOpsClient<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlightOps.
     * @param {FlightOpsUpdateArgs} args - Arguments to update one FlightOps.
     * @example
     * // Update one FlightOps
     * const flightOps = await prisma.flightOps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightOpsUpdateArgs>(args: SelectSubset<T, FlightOpsUpdateArgs<ExtArgs>>): Prisma__FlightOpsClient<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlightOps.
     * @param {FlightOpsDeleteManyArgs} args - Arguments to filter FlightOps to delete.
     * @example
     * // Delete a few FlightOps
     * const { count } = await prisma.flightOps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightOpsDeleteManyArgs>(args?: SelectSubset<T, FlightOpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightOps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightOpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlightOps
     * const flightOps = await prisma.flightOps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightOpsUpdateManyArgs>(args: SelectSubset<T, FlightOpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlightOps.
     * @param {FlightOpsUpsertArgs} args - Arguments to update or create a FlightOps.
     * @example
     * // Update or create a FlightOps
     * const flightOps = await prisma.flightOps.upsert({
     *   create: {
     *     // ... data to create a FlightOps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlightOps we want to update
     *   }
     * })
     */
    upsert<T extends FlightOpsUpsertArgs>(args: SelectSubset<T, FlightOpsUpsertArgs<ExtArgs>>): Prisma__FlightOpsClient<$Result.GetResult<Prisma.$FlightOpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlightOps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightOpsCountArgs} args - Arguments to filter FlightOps to count.
     * @example
     * // Count the number of FlightOps
     * const count = await prisma.flightOps.count({
     *   where: {
     *     // ... the filter for the FlightOps we want to count
     *   }
     * })
    **/
    count<T extends FlightOpsCountArgs>(
      args?: Subset<T, FlightOpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightOpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlightOps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightOpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightOpsAggregateArgs>(args: Subset<T, FlightOpsAggregateArgs>): Prisma.PrismaPromise<GetFlightOpsAggregateType<T>>

    /**
     * Group by FlightOps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightOpsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlightOpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightOpsGroupByArgs['orderBy'] }
        : { orderBy?: FlightOpsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlightOpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightOpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlightOps model
   */
  readonly fields: FlightOpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlightOps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightOpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlightOps model
   */
  interface FlightOpsFieldRefs {
    readonly FlightOpsID: FieldRef<"FlightOps", 'Int'>
    readonly Keyid: FieldRef<"FlightOps", 'Int'>
    readonly Image: FieldRef<"FlightOps", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FlightOps findUnique
   */
  export type FlightOpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * Filter, which FlightOps to fetch.
     */
    where: FlightOpsWhereUniqueInput
  }

  /**
   * FlightOps findUniqueOrThrow
   */
  export type FlightOpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * Filter, which FlightOps to fetch.
     */
    where: FlightOpsWhereUniqueInput
  }

  /**
   * FlightOps findFirst
   */
  export type FlightOpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * Filter, which FlightOps to fetch.
     */
    where?: FlightOpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightOps to fetch.
     */
    orderBy?: FlightOpsOrderByWithRelationInput | FlightOpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightOps.
     */
    cursor?: FlightOpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightOps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightOps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightOps.
     */
    distinct?: FlightOpsScalarFieldEnum | FlightOpsScalarFieldEnum[]
  }

  /**
   * FlightOps findFirstOrThrow
   */
  export type FlightOpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * Filter, which FlightOps to fetch.
     */
    where?: FlightOpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightOps to fetch.
     */
    orderBy?: FlightOpsOrderByWithRelationInput | FlightOpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightOps.
     */
    cursor?: FlightOpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightOps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightOps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightOps.
     */
    distinct?: FlightOpsScalarFieldEnum | FlightOpsScalarFieldEnum[]
  }

  /**
   * FlightOps findMany
   */
  export type FlightOpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * Filter, which FlightOps to fetch.
     */
    where?: FlightOpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightOps to fetch.
     */
    orderBy?: FlightOpsOrderByWithRelationInput | FlightOpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlightOps.
     */
    cursor?: FlightOpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightOps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightOps.
     */
    skip?: number
    distinct?: FlightOpsScalarFieldEnum | FlightOpsScalarFieldEnum[]
  }

  /**
   * FlightOps create
   */
  export type FlightOpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * The data needed to create a FlightOps.
     */
    data?: XOR<FlightOpsCreateInput, FlightOpsUncheckedCreateInput>
  }

  /**
   * FlightOps createMany
   */
  export type FlightOpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlightOps.
     */
    data: FlightOpsCreateManyInput | FlightOpsCreateManyInput[]
  }

  /**
   * FlightOps update
   */
  export type FlightOpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * The data needed to update a FlightOps.
     */
    data: XOR<FlightOpsUpdateInput, FlightOpsUncheckedUpdateInput>
    /**
     * Choose, which FlightOps to update.
     */
    where: FlightOpsWhereUniqueInput
  }

  /**
   * FlightOps updateMany
   */
  export type FlightOpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlightOps.
     */
    data: XOR<FlightOpsUpdateManyMutationInput, FlightOpsUncheckedUpdateManyInput>
    /**
     * Filter which FlightOps to update
     */
    where?: FlightOpsWhereInput
    /**
     * Limit how many FlightOps to update.
     */
    limit?: number
  }

  /**
   * FlightOps upsert
   */
  export type FlightOpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * The filter to search for the FlightOps to update in case it exists.
     */
    where: FlightOpsWhereUniqueInput
    /**
     * In case the FlightOps found by the `where` argument doesn't exist, create a new FlightOps with this data.
     */
    create: XOR<FlightOpsCreateInput, FlightOpsUncheckedCreateInput>
    /**
     * In case the FlightOps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightOpsUpdateInput, FlightOpsUncheckedUpdateInput>
  }

  /**
   * FlightOps delete
   */
  export type FlightOpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
    /**
     * Filter which FlightOps to delete.
     */
    where: FlightOpsWhereUniqueInput
  }

  /**
   * FlightOps deleteMany
   */
  export type FlightOpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightOps to delete
     */
    where?: FlightOpsWhereInput
    /**
     * Limit how many FlightOps to delete.
     */
    limit?: number
  }

  /**
   * FlightOps without action
   */
  export type FlightOpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightOps
     */
    select?: FlightOpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightOps
     */
    omit?: FlightOpsOmit<ExtArgs> | null
  }


  /**
   * Model TallyUsers
   */

  export type AggregateTallyUsers = {
    _count: TallyUsersCountAggregateOutputType | null
    _avg: TallyUsersAvgAggregateOutputType | null
    _sum: TallyUsersSumAggregateOutputType | null
    _min: TallyUsersMinAggregateOutputType | null
    _max: TallyUsersMaxAggregateOutputType | null
  }

  export type TallyUsersAvgAggregateOutputType = {
    id: number | null
  }

  export type TallyUsersSumAggregateOutputType = {
    id: number | null
  }

  export type TallyUsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    region: string | null
    created_at: Date | null
  }

  export type TallyUsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    region: string | null
    created_at: Date | null
  }

  export type TallyUsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    region: number
    created_at: number
    _all: number
  }


  export type TallyUsersAvgAggregateInputType = {
    id?: true
  }

  export type TallyUsersSumAggregateInputType = {
    id?: true
  }

  export type TallyUsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    region?: true
    created_at?: true
  }

  export type TallyUsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    region?: true
    created_at?: true
  }

  export type TallyUsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    region?: true
    created_at?: true
    _all?: true
  }

  export type TallyUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TallyUsers to aggregate.
     */
    where?: TallyUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TallyUsers to fetch.
     */
    orderBy?: TallyUsersOrderByWithRelationInput | TallyUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TallyUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TallyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TallyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TallyUsers
    **/
    _count?: true | TallyUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TallyUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TallyUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TallyUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TallyUsersMaxAggregateInputType
  }

  export type GetTallyUsersAggregateType<T extends TallyUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateTallyUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTallyUsers[P]>
      : GetScalarType<T[P], AggregateTallyUsers[P]>
  }




  export type TallyUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TallyUsersWhereInput
    orderBy?: TallyUsersOrderByWithAggregationInput | TallyUsersOrderByWithAggregationInput[]
    by: TallyUsersScalarFieldEnum[] | TallyUsersScalarFieldEnum
    having?: TallyUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TallyUsersCountAggregateInputType | true
    _avg?: TallyUsersAvgAggregateInputType
    _sum?: TallyUsersSumAggregateInputType
    _min?: TallyUsersMinAggregateInputType
    _max?: TallyUsersMaxAggregateInputType
  }

  export type TallyUsersGroupByOutputType = {
    id: number
    username: string
    password: string
    region: string
    created_at: Date | null
    _count: TallyUsersCountAggregateOutputType | null
    _avg: TallyUsersAvgAggregateOutputType | null
    _sum: TallyUsersSumAggregateOutputType | null
    _min: TallyUsersMinAggregateOutputType | null
    _max: TallyUsersMaxAggregateOutputType | null
  }

  type GetTallyUsersGroupByPayload<T extends TallyUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TallyUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TallyUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TallyUsersGroupByOutputType[P]>
            : GetScalarType<T[P], TallyUsersGroupByOutputType[P]>
        }
      >
    >


  export type TallyUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    region?: boolean
    created_at?: boolean
    TallyVoucherSyncLog?: boolean | TallyUsers$TallyVoucherSyncLogArgs<ExtArgs>
    _count?: boolean | TallyUsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tallyUsers"]>



  export type TallyUsersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    region?: boolean
    created_at?: boolean
  }

  export type TallyUsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "region" | "created_at", ExtArgs["result"]["tallyUsers"]>
  export type TallyUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TallyVoucherSyncLog?: boolean | TallyUsers$TallyVoucherSyncLogArgs<ExtArgs>
    _count?: boolean | TallyUsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TallyUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TallyUsers"
    objects: {
      TallyVoucherSyncLog: Prisma.$TallyVoucherSyncLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      region: string
      created_at: Date | null
    }, ExtArgs["result"]["tallyUsers"]>
    composites: {}
  }

  type TallyUsersGetPayload<S extends boolean | null | undefined | TallyUsersDefaultArgs> = $Result.GetResult<Prisma.$TallyUsersPayload, S>

  type TallyUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TallyUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TallyUsersCountAggregateInputType | true
    }

  export interface TallyUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TallyUsers'], meta: { name: 'TallyUsers' } }
    /**
     * Find zero or one TallyUsers that matches the filter.
     * @param {TallyUsersFindUniqueArgs} args - Arguments to find a TallyUsers
     * @example
     * // Get one TallyUsers
     * const tallyUsers = await prisma.tallyUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TallyUsersFindUniqueArgs>(args: SelectSubset<T, TallyUsersFindUniqueArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TallyUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TallyUsersFindUniqueOrThrowArgs} args - Arguments to find a TallyUsers
     * @example
     * // Get one TallyUsers
     * const tallyUsers = await prisma.tallyUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TallyUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, TallyUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TallyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyUsersFindFirstArgs} args - Arguments to find a TallyUsers
     * @example
     * // Get one TallyUsers
     * const tallyUsers = await prisma.tallyUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TallyUsersFindFirstArgs>(args?: SelectSubset<T, TallyUsersFindFirstArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TallyUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyUsersFindFirstOrThrowArgs} args - Arguments to find a TallyUsers
     * @example
     * // Get one TallyUsers
     * const tallyUsers = await prisma.tallyUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TallyUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, TallyUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TallyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TallyUsers
     * const tallyUsers = await prisma.tallyUsers.findMany()
     * 
     * // Get first 10 TallyUsers
     * const tallyUsers = await prisma.tallyUsers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tallyUsersWithIdOnly = await prisma.tallyUsers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TallyUsersFindManyArgs>(args?: SelectSubset<T, TallyUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TallyUsers.
     * @param {TallyUsersCreateArgs} args - Arguments to create a TallyUsers.
     * @example
     * // Create one TallyUsers
     * const TallyUsers = await prisma.tallyUsers.create({
     *   data: {
     *     // ... data to create a TallyUsers
     *   }
     * })
     * 
     */
    create<T extends TallyUsersCreateArgs>(args: SelectSubset<T, TallyUsersCreateArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TallyUsers.
     * @param {TallyUsersCreateManyArgs} args - Arguments to create many TallyUsers.
     * @example
     * // Create many TallyUsers
     * const tallyUsers = await prisma.tallyUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TallyUsersCreateManyArgs>(args?: SelectSubset<T, TallyUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TallyUsers.
     * @param {TallyUsersDeleteArgs} args - Arguments to delete one TallyUsers.
     * @example
     * // Delete one TallyUsers
     * const TallyUsers = await prisma.tallyUsers.delete({
     *   where: {
     *     // ... filter to delete one TallyUsers
     *   }
     * })
     * 
     */
    delete<T extends TallyUsersDeleteArgs>(args: SelectSubset<T, TallyUsersDeleteArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TallyUsers.
     * @param {TallyUsersUpdateArgs} args - Arguments to update one TallyUsers.
     * @example
     * // Update one TallyUsers
     * const tallyUsers = await prisma.tallyUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TallyUsersUpdateArgs>(args: SelectSubset<T, TallyUsersUpdateArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TallyUsers.
     * @param {TallyUsersDeleteManyArgs} args - Arguments to filter TallyUsers to delete.
     * @example
     * // Delete a few TallyUsers
     * const { count } = await prisma.tallyUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TallyUsersDeleteManyArgs>(args?: SelectSubset<T, TallyUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TallyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TallyUsers
     * const tallyUsers = await prisma.tallyUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TallyUsersUpdateManyArgs>(args: SelectSubset<T, TallyUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TallyUsers.
     * @param {TallyUsersUpsertArgs} args - Arguments to update or create a TallyUsers.
     * @example
     * // Update or create a TallyUsers
     * const tallyUsers = await prisma.tallyUsers.upsert({
     *   create: {
     *     // ... data to create a TallyUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TallyUsers we want to update
     *   }
     * })
     */
    upsert<T extends TallyUsersUpsertArgs>(args: SelectSubset<T, TallyUsersUpsertArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TallyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyUsersCountArgs} args - Arguments to filter TallyUsers to count.
     * @example
     * // Count the number of TallyUsers
     * const count = await prisma.tallyUsers.count({
     *   where: {
     *     // ... the filter for the TallyUsers we want to count
     *   }
     * })
    **/
    count<T extends TallyUsersCountArgs>(
      args?: Subset<T, TallyUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TallyUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TallyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TallyUsersAggregateArgs>(args: Subset<T, TallyUsersAggregateArgs>): Prisma.PrismaPromise<GetTallyUsersAggregateType<T>>

    /**
     * Group by TallyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TallyUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TallyUsersGroupByArgs['orderBy'] }
        : { orderBy?: TallyUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TallyUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTallyUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TallyUsers model
   */
  readonly fields: TallyUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TallyUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TallyUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TallyVoucherSyncLog<T extends TallyUsers$TallyVoucherSyncLogArgs<ExtArgs> = {}>(args?: Subset<T, TallyUsers$TallyVoucherSyncLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TallyUsers model
   */
  interface TallyUsersFieldRefs {
    readonly id: FieldRef<"TallyUsers", 'Int'>
    readonly username: FieldRef<"TallyUsers", 'String'>
    readonly password: FieldRef<"TallyUsers", 'String'>
    readonly region: FieldRef<"TallyUsers", 'String'>
    readonly created_at: FieldRef<"TallyUsers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TallyUsers findUnique
   */
  export type TallyUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * Filter, which TallyUsers to fetch.
     */
    where: TallyUsersWhereUniqueInput
  }

  /**
   * TallyUsers findUniqueOrThrow
   */
  export type TallyUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * Filter, which TallyUsers to fetch.
     */
    where: TallyUsersWhereUniqueInput
  }

  /**
   * TallyUsers findFirst
   */
  export type TallyUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * Filter, which TallyUsers to fetch.
     */
    where?: TallyUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TallyUsers to fetch.
     */
    orderBy?: TallyUsersOrderByWithRelationInput | TallyUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TallyUsers.
     */
    cursor?: TallyUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TallyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TallyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TallyUsers.
     */
    distinct?: TallyUsersScalarFieldEnum | TallyUsersScalarFieldEnum[]
  }

  /**
   * TallyUsers findFirstOrThrow
   */
  export type TallyUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * Filter, which TallyUsers to fetch.
     */
    where?: TallyUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TallyUsers to fetch.
     */
    orderBy?: TallyUsersOrderByWithRelationInput | TallyUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TallyUsers.
     */
    cursor?: TallyUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TallyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TallyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TallyUsers.
     */
    distinct?: TallyUsersScalarFieldEnum | TallyUsersScalarFieldEnum[]
  }

  /**
   * TallyUsers findMany
   */
  export type TallyUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * Filter, which TallyUsers to fetch.
     */
    where?: TallyUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TallyUsers to fetch.
     */
    orderBy?: TallyUsersOrderByWithRelationInput | TallyUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TallyUsers.
     */
    cursor?: TallyUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TallyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TallyUsers.
     */
    skip?: number
    distinct?: TallyUsersScalarFieldEnum | TallyUsersScalarFieldEnum[]
  }

  /**
   * TallyUsers create
   */
  export type TallyUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a TallyUsers.
     */
    data: XOR<TallyUsersCreateInput, TallyUsersUncheckedCreateInput>
  }

  /**
   * TallyUsers createMany
   */
  export type TallyUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TallyUsers.
     */
    data: TallyUsersCreateManyInput | TallyUsersCreateManyInput[]
  }

  /**
   * TallyUsers update
   */
  export type TallyUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a TallyUsers.
     */
    data: XOR<TallyUsersUpdateInput, TallyUsersUncheckedUpdateInput>
    /**
     * Choose, which TallyUsers to update.
     */
    where: TallyUsersWhereUniqueInput
  }

  /**
   * TallyUsers updateMany
   */
  export type TallyUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TallyUsers.
     */
    data: XOR<TallyUsersUpdateManyMutationInput, TallyUsersUncheckedUpdateManyInput>
    /**
     * Filter which TallyUsers to update
     */
    where?: TallyUsersWhereInput
    /**
     * Limit how many TallyUsers to update.
     */
    limit?: number
  }

  /**
   * TallyUsers upsert
   */
  export type TallyUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the TallyUsers to update in case it exists.
     */
    where: TallyUsersWhereUniqueInput
    /**
     * In case the TallyUsers found by the `where` argument doesn't exist, create a new TallyUsers with this data.
     */
    create: XOR<TallyUsersCreateInput, TallyUsersUncheckedCreateInput>
    /**
     * In case the TallyUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TallyUsersUpdateInput, TallyUsersUncheckedUpdateInput>
  }

  /**
   * TallyUsers delete
   */
  export type TallyUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    /**
     * Filter which TallyUsers to delete.
     */
    where: TallyUsersWhereUniqueInput
  }

  /**
   * TallyUsers deleteMany
   */
  export type TallyUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TallyUsers to delete
     */
    where?: TallyUsersWhereInput
    /**
     * Limit how many TallyUsers to delete.
     */
    limit?: number
  }

  /**
   * TallyUsers.TallyVoucherSyncLog
   */
  export type TallyUsers$TallyVoucherSyncLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    where?: TallyVoucherSyncLogWhereInput
    orderBy?: TallyVoucherSyncLogOrderByWithRelationInput | TallyVoucherSyncLogOrderByWithRelationInput[]
    cursor?: TallyVoucherSyncLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TallyVoucherSyncLogScalarFieldEnum | TallyVoucherSyncLogScalarFieldEnum[]
  }

  /**
   * TallyUsers without action
   */
  export type TallyUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
  }


  /**
   * Model TallyVoucherSyncLog
   */

  export type AggregateTallyVoucherSyncLog = {
    _count: TallyVoucherSyncLogCountAggregateOutputType | null
    _avg: TallyVoucherSyncLogAvgAggregateOutputType | null
    _sum: TallyVoucherSyncLogSumAggregateOutputType | null
    _min: TallyVoucherSyncLogMinAggregateOutputType | null
    _max: TallyVoucherSyncLogMaxAggregateOutputType | null
  }

  export type TallyVoucherSyncLogAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    start_voucher: number | null
    end_voucher: number | null
    last_updated_voucher_number: number | null
  }

  export type TallyVoucherSyncLogSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    start_voucher: number | null
    end_voucher: number | null
    last_updated_voucher_number: number | null
  }

  export type TallyVoucherSyncLogMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    region: string | null
    voucher_type: string | null
    submission_date: Date | null
    last_updated_date: Date | null
    start_date: Date | null
    end_date: Date | null
    start_voucher: number | null
    end_voucher: number | null
    created_at: Date | null
    last_updated_voucher_number: number | null
  }

  export type TallyVoucherSyncLogMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    region: string | null
    voucher_type: string | null
    submission_date: Date | null
    last_updated_date: Date | null
    start_date: Date | null
    end_date: Date | null
    start_voucher: number | null
    end_voucher: number | null
    created_at: Date | null
    last_updated_voucher_number: number | null
  }

  export type TallyVoucherSyncLogCountAggregateOutputType = {
    id: number
    user_id: number
    region: number
    voucher_type: number
    submission_date: number
    last_updated_date: number
    start_date: number
    end_date: number
    start_voucher: number
    end_voucher: number
    created_at: number
    last_updated_voucher_number: number
    _all: number
  }


  export type TallyVoucherSyncLogAvgAggregateInputType = {
    id?: true
    user_id?: true
    start_voucher?: true
    end_voucher?: true
    last_updated_voucher_number?: true
  }

  export type TallyVoucherSyncLogSumAggregateInputType = {
    id?: true
    user_id?: true
    start_voucher?: true
    end_voucher?: true
    last_updated_voucher_number?: true
  }

  export type TallyVoucherSyncLogMinAggregateInputType = {
    id?: true
    user_id?: true
    region?: true
    voucher_type?: true
    submission_date?: true
    last_updated_date?: true
    start_date?: true
    end_date?: true
    start_voucher?: true
    end_voucher?: true
    created_at?: true
    last_updated_voucher_number?: true
  }

  export type TallyVoucherSyncLogMaxAggregateInputType = {
    id?: true
    user_id?: true
    region?: true
    voucher_type?: true
    submission_date?: true
    last_updated_date?: true
    start_date?: true
    end_date?: true
    start_voucher?: true
    end_voucher?: true
    created_at?: true
    last_updated_voucher_number?: true
  }

  export type TallyVoucherSyncLogCountAggregateInputType = {
    id?: true
    user_id?: true
    region?: true
    voucher_type?: true
    submission_date?: true
    last_updated_date?: true
    start_date?: true
    end_date?: true
    start_voucher?: true
    end_voucher?: true
    created_at?: true
    last_updated_voucher_number?: true
    _all?: true
  }

  export type TallyVoucherSyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TallyVoucherSyncLog to aggregate.
     */
    where?: TallyVoucherSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TallyVoucherSyncLogs to fetch.
     */
    orderBy?: TallyVoucherSyncLogOrderByWithRelationInput | TallyVoucherSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TallyVoucherSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TallyVoucherSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TallyVoucherSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TallyVoucherSyncLogs
    **/
    _count?: true | TallyVoucherSyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TallyVoucherSyncLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TallyVoucherSyncLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TallyVoucherSyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TallyVoucherSyncLogMaxAggregateInputType
  }

  export type GetTallyVoucherSyncLogAggregateType<T extends TallyVoucherSyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTallyVoucherSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTallyVoucherSyncLog[P]>
      : GetScalarType<T[P], AggregateTallyVoucherSyncLog[P]>
  }




  export type TallyVoucherSyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TallyVoucherSyncLogWhereInput
    orderBy?: TallyVoucherSyncLogOrderByWithAggregationInput | TallyVoucherSyncLogOrderByWithAggregationInput[]
    by: TallyVoucherSyncLogScalarFieldEnum[] | TallyVoucherSyncLogScalarFieldEnum
    having?: TallyVoucherSyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TallyVoucherSyncLogCountAggregateInputType | true
    _avg?: TallyVoucherSyncLogAvgAggregateInputType
    _sum?: TallyVoucherSyncLogSumAggregateInputType
    _min?: TallyVoucherSyncLogMinAggregateInputType
    _max?: TallyVoucherSyncLogMaxAggregateInputType
  }

  export type TallyVoucherSyncLogGroupByOutputType = {
    id: number
    user_id: number | null
    region: string
    voucher_type: string
    submission_date: Date
    last_updated_date: Date | null
    start_date: Date | null
    end_date: Date | null
    start_voucher: number | null
    end_voucher: number | null
    created_at: Date | null
    last_updated_voucher_number: number | null
    _count: TallyVoucherSyncLogCountAggregateOutputType | null
    _avg: TallyVoucherSyncLogAvgAggregateOutputType | null
    _sum: TallyVoucherSyncLogSumAggregateOutputType | null
    _min: TallyVoucherSyncLogMinAggregateOutputType | null
    _max: TallyVoucherSyncLogMaxAggregateOutputType | null
  }

  type GetTallyVoucherSyncLogGroupByPayload<T extends TallyVoucherSyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TallyVoucherSyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TallyVoucherSyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TallyVoucherSyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], TallyVoucherSyncLogGroupByOutputType[P]>
        }
      >
    >


  export type TallyVoucherSyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    region?: boolean
    voucher_type?: boolean
    submission_date?: boolean
    last_updated_date?: boolean
    start_date?: boolean
    end_date?: boolean
    start_voucher?: boolean
    end_voucher?: boolean
    created_at?: boolean
    last_updated_voucher_number?: boolean
    TallyUsers?: boolean | TallyVoucherSyncLog$TallyUsersArgs<ExtArgs>
  }, ExtArgs["result"]["tallyVoucherSyncLog"]>



  export type TallyVoucherSyncLogSelectScalar = {
    id?: boolean
    user_id?: boolean
    region?: boolean
    voucher_type?: boolean
    submission_date?: boolean
    last_updated_date?: boolean
    start_date?: boolean
    end_date?: boolean
    start_voucher?: boolean
    end_voucher?: boolean
    created_at?: boolean
    last_updated_voucher_number?: boolean
  }

  export type TallyVoucherSyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "region" | "voucher_type" | "submission_date" | "last_updated_date" | "start_date" | "end_date" | "start_voucher" | "end_voucher" | "created_at" | "last_updated_voucher_number", ExtArgs["result"]["tallyVoucherSyncLog"]>
  export type TallyVoucherSyncLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TallyUsers?: boolean | TallyVoucherSyncLog$TallyUsersArgs<ExtArgs>
  }

  export type $TallyVoucherSyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TallyVoucherSyncLog"
    objects: {
      TallyUsers: Prisma.$TallyUsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      region: string
      voucher_type: string
      submission_date: Date
      last_updated_date: Date | null
      start_date: Date | null
      end_date: Date | null
      start_voucher: number | null
      end_voucher: number | null
      created_at: Date | null
      last_updated_voucher_number: number | null
    }, ExtArgs["result"]["tallyVoucherSyncLog"]>
    composites: {}
  }

  type TallyVoucherSyncLogGetPayload<S extends boolean | null | undefined | TallyVoucherSyncLogDefaultArgs> = $Result.GetResult<Prisma.$TallyVoucherSyncLogPayload, S>

  type TallyVoucherSyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TallyVoucherSyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TallyVoucherSyncLogCountAggregateInputType | true
    }

  export interface TallyVoucherSyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TallyVoucherSyncLog'], meta: { name: 'TallyVoucherSyncLog' } }
    /**
     * Find zero or one TallyVoucherSyncLog that matches the filter.
     * @param {TallyVoucherSyncLogFindUniqueArgs} args - Arguments to find a TallyVoucherSyncLog
     * @example
     * // Get one TallyVoucherSyncLog
     * const tallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TallyVoucherSyncLogFindUniqueArgs>(args: SelectSubset<T, TallyVoucherSyncLogFindUniqueArgs<ExtArgs>>): Prisma__TallyVoucherSyncLogClient<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TallyVoucherSyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TallyVoucherSyncLogFindUniqueOrThrowArgs} args - Arguments to find a TallyVoucherSyncLog
     * @example
     * // Get one TallyVoucherSyncLog
     * const tallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TallyVoucherSyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TallyVoucherSyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TallyVoucherSyncLogClient<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TallyVoucherSyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyVoucherSyncLogFindFirstArgs} args - Arguments to find a TallyVoucherSyncLog
     * @example
     * // Get one TallyVoucherSyncLog
     * const tallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TallyVoucherSyncLogFindFirstArgs>(args?: SelectSubset<T, TallyVoucherSyncLogFindFirstArgs<ExtArgs>>): Prisma__TallyVoucherSyncLogClient<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TallyVoucherSyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyVoucherSyncLogFindFirstOrThrowArgs} args - Arguments to find a TallyVoucherSyncLog
     * @example
     * // Get one TallyVoucherSyncLog
     * const tallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TallyVoucherSyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TallyVoucherSyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TallyVoucherSyncLogClient<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TallyVoucherSyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyVoucherSyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TallyVoucherSyncLogs
     * const tallyVoucherSyncLogs = await prisma.tallyVoucherSyncLog.findMany()
     * 
     * // Get first 10 TallyVoucherSyncLogs
     * const tallyVoucherSyncLogs = await prisma.tallyVoucherSyncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tallyVoucherSyncLogWithIdOnly = await prisma.tallyVoucherSyncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TallyVoucherSyncLogFindManyArgs>(args?: SelectSubset<T, TallyVoucherSyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TallyVoucherSyncLog.
     * @param {TallyVoucherSyncLogCreateArgs} args - Arguments to create a TallyVoucherSyncLog.
     * @example
     * // Create one TallyVoucherSyncLog
     * const TallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.create({
     *   data: {
     *     // ... data to create a TallyVoucherSyncLog
     *   }
     * })
     * 
     */
    create<T extends TallyVoucherSyncLogCreateArgs>(args: SelectSubset<T, TallyVoucherSyncLogCreateArgs<ExtArgs>>): Prisma__TallyVoucherSyncLogClient<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TallyVoucherSyncLogs.
     * @param {TallyVoucherSyncLogCreateManyArgs} args - Arguments to create many TallyVoucherSyncLogs.
     * @example
     * // Create many TallyVoucherSyncLogs
     * const tallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TallyVoucherSyncLogCreateManyArgs>(args?: SelectSubset<T, TallyVoucherSyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TallyVoucherSyncLog.
     * @param {TallyVoucherSyncLogDeleteArgs} args - Arguments to delete one TallyVoucherSyncLog.
     * @example
     * // Delete one TallyVoucherSyncLog
     * const TallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.delete({
     *   where: {
     *     // ... filter to delete one TallyVoucherSyncLog
     *   }
     * })
     * 
     */
    delete<T extends TallyVoucherSyncLogDeleteArgs>(args: SelectSubset<T, TallyVoucherSyncLogDeleteArgs<ExtArgs>>): Prisma__TallyVoucherSyncLogClient<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TallyVoucherSyncLog.
     * @param {TallyVoucherSyncLogUpdateArgs} args - Arguments to update one TallyVoucherSyncLog.
     * @example
     * // Update one TallyVoucherSyncLog
     * const tallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TallyVoucherSyncLogUpdateArgs>(args: SelectSubset<T, TallyVoucherSyncLogUpdateArgs<ExtArgs>>): Prisma__TallyVoucherSyncLogClient<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TallyVoucherSyncLogs.
     * @param {TallyVoucherSyncLogDeleteManyArgs} args - Arguments to filter TallyVoucherSyncLogs to delete.
     * @example
     * // Delete a few TallyVoucherSyncLogs
     * const { count } = await prisma.tallyVoucherSyncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TallyVoucherSyncLogDeleteManyArgs>(args?: SelectSubset<T, TallyVoucherSyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TallyVoucherSyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyVoucherSyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TallyVoucherSyncLogs
     * const tallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TallyVoucherSyncLogUpdateManyArgs>(args: SelectSubset<T, TallyVoucherSyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TallyVoucherSyncLog.
     * @param {TallyVoucherSyncLogUpsertArgs} args - Arguments to update or create a TallyVoucherSyncLog.
     * @example
     * // Update or create a TallyVoucherSyncLog
     * const tallyVoucherSyncLog = await prisma.tallyVoucherSyncLog.upsert({
     *   create: {
     *     // ... data to create a TallyVoucherSyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TallyVoucherSyncLog we want to update
     *   }
     * })
     */
    upsert<T extends TallyVoucherSyncLogUpsertArgs>(args: SelectSubset<T, TallyVoucherSyncLogUpsertArgs<ExtArgs>>): Prisma__TallyVoucherSyncLogClient<$Result.GetResult<Prisma.$TallyVoucherSyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TallyVoucherSyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyVoucherSyncLogCountArgs} args - Arguments to filter TallyVoucherSyncLogs to count.
     * @example
     * // Count the number of TallyVoucherSyncLogs
     * const count = await prisma.tallyVoucherSyncLog.count({
     *   where: {
     *     // ... the filter for the TallyVoucherSyncLogs we want to count
     *   }
     * })
    **/
    count<T extends TallyVoucherSyncLogCountArgs>(
      args?: Subset<T, TallyVoucherSyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TallyVoucherSyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TallyVoucherSyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyVoucherSyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TallyVoucherSyncLogAggregateArgs>(args: Subset<T, TallyVoucherSyncLogAggregateArgs>): Prisma.PrismaPromise<GetTallyVoucherSyncLogAggregateType<T>>

    /**
     * Group by TallyVoucherSyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TallyVoucherSyncLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TallyVoucherSyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TallyVoucherSyncLogGroupByArgs['orderBy'] }
        : { orderBy?: TallyVoucherSyncLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TallyVoucherSyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTallyVoucherSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TallyVoucherSyncLog model
   */
  readonly fields: TallyVoucherSyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TallyVoucherSyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TallyVoucherSyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TallyUsers<T extends TallyVoucherSyncLog$TallyUsersArgs<ExtArgs> = {}>(args?: Subset<T, TallyVoucherSyncLog$TallyUsersArgs<ExtArgs>>): Prisma__TallyUsersClient<$Result.GetResult<Prisma.$TallyUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TallyVoucherSyncLog model
   */
  interface TallyVoucherSyncLogFieldRefs {
    readonly id: FieldRef<"TallyVoucherSyncLog", 'Int'>
    readonly user_id: FieldRef<"TallyVoucherSyncLog", 'Int'>
    readonly region: FieldRef<"TallyVoucherSyncLog", 'String'>
    readonly voucher_type: FieldRef<"TallyVoucherSyncLog", 'String'>
    readonly submission_date: FieldRef<"TallyVoucherSyncLog", 'DateTime'>
    readonly last_updated_date: FieldRef<"TallyVoucherSyncLog", 'DateTime'>
    readonly start_date: FieldRef<"TallyVoucherSyncLog", 'DateTime'>
    readonly end_date: FieldRef<"TallyVoucherSyncLog", 'DateTime'>
    readonly start_voucher: FieldRef<"TallyVoucherSyncLog", 'Int'>
    readonly end_voucher: FieldRef<"TallyVoucherSyncLog", 'Int'>
    readonly created_at: FieldRef<"TallyVoucherSyncLog", 'DateTime'>
    readonly last_updated_voucher_number: FieldRef<"TallyVoucherSyncLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TallyVoucherSyncLog findUnique
   */
  export type TallyVoucherSyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which TallyVoucherSyncLog to fetch.
     */
    where: TallyVoucherSyncLogWhereUniqueInput
  }

  /**
   * TallyVoucherSyncLog findUniqueOrThrow
   */
  export type TallyVoucherSyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which TallyVoucherSyncLog to fetch.
     */
    where: TallyVoucherSyncLogWhereUniqueInput
  }

  /**
   * TallyVoucherSyncLog findFirst
   */
  export type TallyVoucherSyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which TallyVoucherSyncLog to fetch.
     */
    where?: TallyVoucherSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TallyVoucherSyncLogs to fetch.
     */
    orderBy?: TallyVoucherSyncLogOrderByWithRelationInput | TallyVoucherSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TallyVoucherSyncLogs.
     */
    cursor?: TallyVoucherSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TallyVoucherSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TallyVoucherSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TallyVoucherSyncLogs.
     */
    distinct?: TallyVoucherSyncLogScalarFieldEnum | TallyVoucherSyncLogScalarFieldEnum[]
  }

  /**
   * TallyVoucherSyncLog findFirstOrThrow
   */
  export type TallyVoucherSyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which TallyVoucherSyncLog to fetch.
     */
    where?: TallyVoucherSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TallyVoucherSyncLogs to fetch.
     */
    orderBy?: TallyVoucherSyncLogOrderByWithRelationInput | TallyVoucherSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TallyVoucherSyncLogs.
     */
    cursor?: TallyVoucherSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TallyVoucherSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TallyVoucherSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TallyVoucherSyncLogs.
     */
    distinct?: TallyVoucherSyncLogScalarFieldEnum | TallyVoucherSyncLogScalarFieldEnum[]
  }

  /**
   * TallyVoucherSyncLog findMany
   */
  export type TallyVoucherSyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which TallyVoucherSyncLogs to fetch.
     */
    where?: TallyVoucherSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TallyVoucherSyncLogs to fetch.
     */
    orderBy?: TallyVoucherSyncLogOrderByWithRelationInput | TallyVoucherSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TallyVoucherSyncLogs.
     */
    cursor?: TallyVoucherSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TallyVoucherSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TallyVoucherSyncLogs.
     */
    skip?: number
    distinct?: TallyVoucherSyncLogScalarFieldEnum | TallyVoucherSyncLogScalarFieldEnum[]
  }

  /**
   * TallyVoucherSyncLog create
   */
  export type TallyVoucherSyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TallyVoucherSyncLog.
     */
    data: XOR<TallyVoucherSyncLogCreateInput, TallyVoucherSyncLogUncheckedCreateInput>
  }

  /**
   * TallyVoucherSyncLog createMany
   */
  export type TallyVoucherSyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TallyVoucherSyncLogs.
     */
    data: TallyVoucherSyncLogCreateManyInput | TallyVoucherSyncLogCreateManyInput[]
  }

  /**
   * TallyVoucherSyncLog update
   */
  export type TallyVoucherSyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TallyVoucherSyncLog.
     */
    data: XOR<TallyVoucherSyncLogUpdateInput, TallyVoucherSyncLogUncheckedUpdateInput>
    /**
     * Choose, which TallyVoucherSyncLog to update.
     */
    where: TallyVoucherSyncLogWhereUniqueInput
  }

  /**
   * TallyVoucherSyncLog updateMany
   */
  export type TallyVoucherSyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TallyVoucherSyncLogs.
     */
    data: XOR<TallyVoucherSyncLogUpdateManyMutationInput, TallyVoucherSyncLogUncheckedUpdateManyInput>
    /**
     * Filter which TallyVoucherSyncLogs to update
     */
    where?: TallyVoucherSyncLogWhereInput
    /**
     * Limit how many TallyVoucherSyncLogs to update.
     */
    limit?: number
  }

  /**
   * TallyVoucherSyncLog upsert
   */
  export type TallyVoucherSyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TallyVoucherSyncLog to update in case it exists.
     */
    where: TallyVoucherSyncLogWhereUniqueInput
    /**
     * In case the TallyVoucherSyncLog found by the `where` argument doesn't exist, create a new TallyVoucherSyncLog with this data.
     */
    create: XOR<TallyVoucherSyncLogCreateInput, TallyVoucherSyncLogUncheckedCreateInput>
    /**
     * In case the TallyVoucherSyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TallyVoucherSyncLogUpdateInput, TallyVoucherSyncLogUncheckedUpdateInput>
  }

  /**
   * TallyVoucherSyncLog delete
   */
  export type TallyVoucherSyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
    /**
     * Filter which TallyVoucherSyncLog to delete.
     */
    where: TallyVoucherSyncLogWhereUniqueInput
  }

  /**
   * TallyVoucherSyncLog deleteMany
   */
  export type TallyVoucherSyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TallyVoucherSyncLogs to delete
     */
    where?: TallyVoucherSyncLogWhereInput
    /**
     * Limit how many TallyVoucherSyncLogs to delete.
     */
    limit?: number
  }

  /**
   * TallyVoucherSyncLog.TallyUsers
   */
  export type TallyVoucherSyncLog$TallyUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyUsers
     */
    select?: TallyUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyUsers
     */
    omit?: TallyUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyUsersInclude<ExtArgs> | null
    where?: TallyUsersWhereInput
  }

  /**
   * TallyVoucherSyncLog without action
   */
  export type TallyVoucherSyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TallyVoucherSyncLog
     */
    select?: TallyVoucherSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TallyVoucherSyncLog
     */
    omit?: TallyVoucherSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TallyVoucherSyncLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FareAuditScalarFieldEnum: {
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
    aoAvailableStock: 'aoAvailableStock',
    actualManagedFare: 'actualManagedFare',
    bookedPaxQty: 'bookedPaxQty',
    fsWindowedLowestFare: 'fsWindowedLowestFare',
    fsWindowedLowestFareFlightNumber: 'fsWindowedLowestFareFlightNumber',
    fsWindowedLowestFareDepartureTime: 'fsWindowedLowestFareDepartureTime',
    aoWindowedLowestFare: 'aoWindowedLowestFare',
    aoWindowedLowestFareFlightNumber: 'aoWindowedLowestFareFlightNumber',
    aoWindowedLowestFareDepartureTime: 'aoWindowedLowestFareDepartureTime'
  };

  export type FareAuditScalarFieldEnum = (typeof FareAuditScalarFieldEnum)[keyof typeof FareAuditScalarFieldEnum]


  export const FlightsScalarFieldEnum: {
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

  export type FlightsScalarFieldEnum = (typeof FlightsScalarFieldEnum)[keyof typeof FlightsScalarFieldEnum]


  export const SysdiagramsScalarFieldEnum: {
    name: 'name',
    principal_id: 'principal_id',
    diagram_id: 'diagram_id',
    version: 'version',
    definition: 'definition'
  };

  export type SysdiagramsScalarFieldEnum = (typeof SysdiagramsScalarFieldEnum)[keyof typeof SysdiagramsScalarFieldEnum]


  export const LogSheetScalarFieldEnum: {
    LogSheetID: 'LogSheetID',
    FormName: 'FormName',
    RefID: 'RefID',
    UserID: 'UserID',
    UserName: 'UserName',
    DateTime: 'DateTime',
    Remarks: 'Remarks'
  };

  export type LogSheetScalarFieldEnum = (typeof LogSheetScalarFieldEnum)[keyof typeof LogSheetScalarFieldEnum]


  export const FlightOpsScalarFieldEnum: {
    FlightOpsID: 'FlightOpsID',
    Keyid: 'Keyid',
    Image: 'Image'
  };

  export type FlightOpsScalarFieldEnum = (typeof FlightOpsScalarFieldEnum)[keyof typeof FlightOpsScalarFieldEnum]


  export const TallyUsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    region: 'region',
    created_at: 'created_at'
  };

  export type TallyUsersScalarFieldEnum = (typeof TallyUsersScalarFieldEnum)[keyof typeof TallyUsersScalarFieldEnum]


  export const TallyVoucherSyncLogScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    region: 'region',
    voucher_type: 'voucher_type',
    submission_date: 'submission_date',
    last_updated_date: 'last_updated_date',
    start_date: 'start_date',
    end_date: 'end_date',
    start_voucher: 'start_voucher',
    end_voucher: 'end_voucher',
    created_at: 'created_at',
    last_updated_voucher_number: 'last_updated_voucher_number'
  };

  export type TallyVoucherSyncLogScalarFieldEnum = (typeof TallyVoucherSyncLogScalarFieldEnum)[keyof typeof TallyVoucherSyncLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FareAuditWhereInput = {
    AND?: FareAuditWhereInput | FareAuditWhereInput[]
    OR?: FareAuditWhereInput[]
    NOT?: FareAuditWhereInput | FareAuditWhereInput[]
    id?: IntFilter<"FareAudit"> | number
    bookingId?: IntNullableFilter<"FareAudit"> | number | null
    ticketId?: IntFilter<"FareAudit"> | number
    fareLogId?: IntFilter<"FareAudit"> | number
    logType?: StringFilter<"FareAudit"> | string
    source?: StringFilter<"FareAudit"> | string
    requestDateTime?: DateTimeFilter<"FareAudit"> | Date | string
    pnr?: StringNullableFilter<"FareAudit"> | string | null
    flightSector?: StringFilter<"FareAudit"> | string
    flightNumber?: StringFilter<"FareAudit"> | string
    travelDateTime?: DateTimeFilter<"FareAudit"> | Date | string
    fsSameFlightFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: IntNullableFilter<"FareAudit"> | number | null
    fsErrorMessage?: StringNullableFilter<"FareAudit"> | string | null
    fsAverageFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: StringNullableFilter<"FareAudit"> | string | null
    flightWiseTotalSeatsPurchased?: IntNullableFilter<"FareAudit"> | number | null
    flightWiseTotalSeatsSold?: IntNullableFilter<"FareAudit"> | number | null
    flightWiseTotalSeatsLeft?: IntNullableFilter<"FareAudit"> | number | null
    flightWiseAverageCost?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: IntNullableFilter<"FareAudit"> | number | null
    routeWiseSeatsSold?: IntNullableFilter<"FareAudit"> | number | null
    routeWiseSeatsLeft?: IntNullableFilter<"FareAudit"> | number | null
    routeWiseAverageCost?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    averageSellFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"FareAudit"> | string | null
    remark?: StringNullableFilter<"FareAudit"> | string | null
    taskCompletedDateTime?: DateTimeFilter<"FareAudit"> | Date | string
    fsSameFlightStock?: IntNullableFilter<"FareAudit"> | number | null
    fsLowestFareFlightNumber?: StringNullableFilter<"FareAudit"> | string | null
    fsLowestFareFlightDepartureTime?: DateTimeNullableFilter<"FareAudit"> | Date | string | null
    aoLowestFareFlightNumber?: StringNullableFilter<"FareAudit"> | string | null
    aoSameFlightStock?: IntNullableFilter<"FareAudit"> | number | null
    aoLowestFareFlightDepartureTime?: DateTimeNullableFilter<"FareAudit"> | Date | string | null
    fareAuditRemarks?: StringNullableFilter<"FareAudit"> | string | null
    aoAvailableStock?: IntNullableFilter<"FareAudit"> | number | null
    actualManagedFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: IntNullableFilter<"FareAudit"> | number | null
    fsWindowedLowestFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: StringNullableFilter<"FareAudit"> | string | null
    fsWindowedLowestFareDepartureTime?: DateTimeNullableFilter<"FareAudit"> | Date | string | null
    aoWindowedLowestFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: StringNullableFilter<"FareAudit"> | string | null
    aoWindowedLowestFareDepartureTime?: DateTimeNullableFilter<"FareAudit"> | Date | string | null
  }

  export type FareAuditOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    fareLogId?: SortOrder
    logType?: SortOrder
    source?: SortOrder
    requestDateTime?: SortOrder
    pnr?: SortOrderInput | SortOrder
    flightSector?: SortOrder
    flightNumber?: SortOrder
    travelDateTime?: SortOrder
    fsSameFlightFare?: SortOrderInput | SortOrder
    fsLowestFlightFare?: SortOrderInput | SortOrder
    fsAvailableStock?: SortOrderInput | SortOrder
    fsErrorMessage?: SortOrderInput | SortOrder
    fsAverageFare?: SortOrderInput | SortOrder
    aoSameFlightFare?: SortOrderInput | SortOrder
    aoLowestFare?: SortOrderInput | SortOrder
    aoAverageFare?: SortOrderInput | SortOrder
    aoErrorMessage?: SortOrderInput | SortOrder
    flightWiseTotalSeatsPurchased?: SortOrderInput | SortOrder
    flightWiseTotalSeatsSold?: SortOrderInput | SortOrder
    flightWiseTotalSeatsLeft?: SortOrderInput | SortOrder
    flightWiseAverageCost?: SortOrderInput | SortOrder
    routeWiseSeatsPurchased?: SortOrderInput | SortOrder
    routeWiseSeatsSold?: SortOrderInput | SortOrder
    routeWiseSeatsLeft?: SortOrderInput | SortOrder
    routeWiseAverageCost?: SortOrderInput | SortOrder
    averageSellFare?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    taskCompletedDateTime?: SortOrder
    fsSameFlightStock?: SortOrderInput | SortOrder
    fsLowestFareFlightNumber?: SortOrderInput | SortOrder
    fsLowestFareFlightDepartureTime?: SortOrderInput | SortOrder
    aoLowestFareFlightNumber?: SortOrderInput | SortOrder
    aoSameFlightStock?: SortOrderInput | SortOrder
    aoLowestFareFlightDepartureTime?: SortOrderInput | SortOrder
    fareAuditRemarks?: SortOrderInput | SortOrder
    aoAvailableStock?: SortOrderInput | SortOrder
    actualManagedFare?: SortOrderInput | SortOrder
    bookedPaxQty?: SortOrderInput | SortOrder
    fsWindowedLowestFare?: SortOrderInput | SortOrder
    fsWindowedLowestFareFlightNumber?: SortOrderInput | SortOrder
    fsWindowedLowestFareDepartureTime?: SortOrderInput | SortOrder
    aoWindowedLowestFare?: SortOrderInput | SortOrder
    aoWindowedLowestFareFlightNumber?: SortOrderInput | SortOrder
    aoWindowedLowestFareDepartureTime?: SortOrderInput | SortOrder
  }

  export type FareAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FareAuditWhereInput | FareAuditWhereInput[]
    OR?: FareAuditWhereInput[]
    NOT?: FareAuditWhereInput | FareAuditWhereInput[]
    bookingId?: IntNullableFilter<"FareAudit"> | number | null
    ticketId?: IntFilter<"FareAudit"> | number
    fareLogId?: IntFilter<"FareAudit"> | number
    logType?: StringFilter<"FareAudit"> | string
    source?: StringFilter<"FareAudit"> | string
    requestDateTime?: DateTimeFilter<"FareAudit"> | Date | string
    pnr?: StringNullableFilter<"FareAudit"> | string | null
    flightSector?: StringFilter<"FareAudit"> | string
    flightNumber?: StringFilter<"FareAudit"> | string
    travelDateTime?: DateTimeFilter<"FareAudit"> | Date | string
    fsSameFlightFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: IntNullableFilter<"FareAudit"> | number | null
    fsErrorMessage?: StringNullableFilter<"FareAudit"> | string | null
    fsAverageFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: StringNullableFilter<"FareAudit"> | string | null
    flightWiseTotalSeatsPurchased?: IntNullableFilter<"FareAudit"> | number | null
    flightWiseTotalSeatsSold?: IntNullableFilter<"FareAudit"> | number | null
    flightWiseTotalSeatsLeft?: IntNullableFilter<"FareAudit"> | number | null
    flightWiseAverageCost?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: IntNullableFilter<"FareAudit"> | number | null
    routeWiseSeatsSold?: IntNullableFilter<"FareAudit"> | number | null
    routeWiseSeatsLeft?: IntNullableFilter<"FareAudit"> | number | null
    routeWiseAverageCost?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    averageSellFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"FareAudit"> | string | null
    remark?: StringNullableFilter<"FareAudit"> | string | null
    taskCompletedDateTime?: DateTimeFilter<"FareAudit"> | Date | string
    fsSameFlightStock?: IntNullableFilter<"FareAudit"> | number | null
    fsLowestFareFlightNumber?: StringNullableFilter<"FareAudit"> | string | null
    fsLowestFareFlightDepartureTime?: DateTimeNullableFilter<"FareAudit"> | Date | string | null
    aoLowestFareFlightNumber?: StringNullableFilter<"FareAudit"> | string | null
    aoSameFlightStock?: IntNullableFilter<"FareAudit"> | number | null
    aoLowestFareFlightDepartureTime?: DateTimeNullableFilter<"FareAudit"> | Date | string | null
    fareAuditRemarks?: StringNullableFilter<"FareAudit"> | string | null
    aoAvailableStock?: IntNullableFilter<"FareAudit"> | number | null
    actualManagedFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: IntNullableFilter<"FareAudit"> | number | null
    fsWindowedLowestFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: StringNullableFilter<"FareAudit"> | string | null
    fsWindowedLowestFareDepartureTime?: DateTimeNullableFilter<"FareAudit"> | Date | string | null
    aoWindowedLowestFare?: DecimalNullableFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: StringNullableFilter<"FareAudit"> | string | null
    aoWindowedLowestFareDepartureTime?: DateTimeNullableFilter<"FareAudit"> | Date | string | null
  }, "id">

  export type FareAuditOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    fareLogId?: SortOrder
    logType?: SortOrder
    source?: SortOrder
    requestDateTime?: SortOrder
    pnr?: SortOrderInput | SortOrder
    flightSector?: SortOrder
    flightNumber?: SortOrder
    travelDateTime?: SortOrder
    fsSameFlightFare?: SortOrderInput | SortOrder
    fsLowestFlightFare?: SortOrderInput | SortOrder
    fsAvailableStock?: SortOrderInput | SortOrder
    fsErrorMessage?: SortOrderInput | SortOrder
    fsAverageFare?: SortOrderInput | SortOrder
    aoSameFlightFare?: SortOrderInput | SortOrder
    aoLowestFare?: SortOrderInput | SortOrder
    aoAverageFare?: SortOrderInput | SortOrder
    aoErrorMessage?: SortOrderInput | SortOrder
    flightWiseTotalSeatsPurchased?: SortOrderInput | SortOrder
    flightWiseTotalSeatsSold?: SortOrderInput | SortOrder
    flightWiseTotalSeatsLeft?: SortOrderInput | SortOrder
    flightWiseAverageCost?: SortOrderInput | SortOrder
    routeWiseSeatsPurchased?: SortOrderInput | SortOrder
    routeWiseSeatsSold?: SortOrderInput | SortOrder
    routeWiseSeatsLeft?: SortOrderInput | SortOrder
    routeWiseAverageCost?: SortOrderInput | SortOrder
    averageSellFare?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    taskCompletedDateTime?: SortOrder
    fsSameFlightStock?: SortOrderInput | SortOrder
    fsLowestFareFlightNumber?: SortOrderInput | SortOrder
    fsLowestFareFlightDepartureTime?: SortOrderInput | SortOrder
    aoLowestFareFlightNumber?: SortOrderInput | SortOrder
    aoSameFlightStock?: SortOrderInput | SortOrder
    aoLowestFareFlightDepartureTime?: SortOrderInput | SortOrder
    fareAuditRemarks?: SortOrderInput | SortOrder
    aoAvailableStock?: SortOrderInput | SortOrder
    actualManagedFare?: SortOrderInput | SortOrder
    bookedPaxQty?: SortOrderInput | SortOrder
    fsWindowedLowestFare?: SortOrderInput | SortOrder
    fsWindowedLowestFareFlightNumber?: SortOrderInput | SortOrder
    fsWindowedLowestFareDepartureTime?: SortOrderInput | SortOrder
    aoWindowedLowestFare?: SortOrderInput | SortOrder
    aoWindowedLowestFareFlightNumber?: SortOrderInput | SortOrder
    aoWindowedLowestFareDepartureTime?: SortOrderInput | SortOrder
    _count?: FareAuditCountOrderByAggregateInput
    _avg?: FareAuditAvgOrderByAggregateInput
    _max?: FareAuditMaxOrderByAggregateInput
    _min?: FareAuditMinOrderByAggregateInput
    _sum?: FareAuditSumOrderByAggregateInput
  }

  export type FareAuditScalarWhereWithAggregatesInput = {
    AND?: FareAuditScalarWhereWithAggregatesInput | FareAuditScalarWhereWithAggregatesInput[]
    OR?: FareAuditScalarWhereWithAggregatesInput[]
    NOT?: FareAuditScalarWhereWithAggregatesInput | FareAuditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FareAudit"> | number
    bookingId?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    ticketId?: IntWithAggregatesFilter<"FareAudit"> | number
    fareLogId?: IntWithAggregatesFilter<"FareAudit"> | number
    logType?: StringWithAggregatesFilter<"FareAudit"> | string
    source?: StringWithAggregatesFilter<"FareAudit"> | string
    requestDateTime?: DateTimeWithAggregatesFilter<"FareAudit"> | Date | string
    pnr?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    flightSector?: StringWithAggregatesFilter<"FareAudit"> | string
    flightNumber?: StringWithAggregatesFilter<"FareAudit"> | string
    travelDateTime?: DateTimeWithAggregatesFilter<"FareAudit"> | Date | string
    fsSameFlightFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    fsErrorMessage?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    fsAverageFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    flightWiseTotalSeatsPurchased?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    flightWiseTotalSeatsSold?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    flightWiseTotalSeatsLeft?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    flightWiseAverageCost?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    routeWiseSeatsSold?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    routeWiseSeatsLeft?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    routeWiseAverageCost?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    averageSellFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    remark?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    taskCompletedDateTime?: DateTimeWithAggregatesFilter<"FareAudit"> | Date | string
    fsSameFlightStock?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    fsLowestFareFlightNumber?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    fsLowestFareFlightDepartureTime?: DateTimeNullableWithAggregatesFilter<"FareAudit"> | Date | string | null
    aoLowestFareFlightNumber?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    aoSameFlightStock?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    aoLowestFareFlightDepartureTime?: DateTimeNullableWithAggregatesFilter<"FareAudit"> | Date | string | null
    fareAuditRemarks?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    aoAvailableStock?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    actualManagedFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: IntNullableWithAggregatesFilter<"FareAudit"> | number | null
    fsWindowedLowestFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    fsWindowedLowestFareDepartureTime?: DateTimeNullableWithAggregatesFilter<"FareAudit"> | Date | string | null
    aoWindowedLowestFare?: DecimalNullableWithAggregatesFilter<"FareAudit"> | Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: StringNullableWithAggregatesFilter<"FareAudit"> | string | null
    aoWindowedLowestFareDepartureTime?: DateTimeNullableWithAggregatesFilter<"FareAudit"> | Date | string | null
  }

  export type FlightsWhereInput = {
    AND?: FlightsWhereInput | FlightsWhereInput[]
    OR?: FlightsWhereInput[]
    NOT?: FlightsWhereInput | FlightsWhereInput[]
    Id?: IntFilter<"Flights"> | number
    AirlineCode?: StringFilter<"Flights"> | string
    FlightNumber?: StringFilter<"Flights"> | string
    Origin?: StringFilter<"Flights"> | string
    Destination?: StringFilter<"Flights"> | string
    DepartureTerminal?: StringNullableFilter<"Flights"> | string | null
    ArrivalTerminal?: StringNullableFilter<"Flights"> | string | null
    DepartureDateTime?: DateTimeFilter<"Flights"> | Date | string
    ArrivalDateTime?: DateTimeFilter<"Flights"> | Date | string
    TravelClass?: StringNullableFilter<"Flights"> | string | null
    PriceId?: StringFilter<"Flights"> | string
    Stops?: IntFilter<"Flights"> | number
    Via?: StringFilter<"Flights"> | string
    PlatingCarrier?: StringFilter<"Flights"> | string
    AvailableSeats?: IntFilter<"Flights"> | number
    BaseAmount?: DecimalFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    TotalTaxAmount?: DecimalFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    GrossAmount?: DecimalFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    FareType?: StringFilter<"Flights"> | string
    Source?: StringFilter<"Flights"> | string
    EntryDate?: DateTimeNullableFilter<"Flights"> | Date | string | null
  }

  export type FlightsOrderByWithRelationInput = {
    Id?: SortOrder
    AirlineCode?: SortOrder
    FlightNumber?: SortOrder
    Origin?: SortOrder
    Destination?: SortOrder
    DepartureTerminal?: SortOrderInput | SortOrder
    ArrivalTerminal?: SortOrderInput | SortOrder
    DepartureDateTime?: SortOrder
    ArrivalDateTime?: SortOrder
    TravelClass?: SortOrderInput | SortOrder
    PriceId?: SortOrder
    Stops?: SortOrder
    Via?: SortOrder
    PlatingCarrier?: SortOrder
    AvailableSeats?: SortOrder
    BaseAmount?: SortOrder
    TotalTaxAmount?: SortOrder
    GrossAmount?: SortOrder
    FareType?: SortOrder
    Source?: SortOrder
    EntryDate?: SortOrderInput | SortOrder
  }

  export type FlightsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: FlightsWhereInput | FlightsWhereInput[]
    OR?: FlightsWhereInput[]
    NOT?: FlightsWhereInput | FlightsWhereInput[]
    AirlineCode?: StringFilter<"Flights"> | string
    FlightNumber?: StringFilter<"Flights"> | string
    Origin?: StringFilter<"Flights"> | string
    Destination?: StringFilter<"Flights"> | string
    DepartureTerminal?: StringNullableFilter<"Flights"> | string | null
    ArrivalTerminal?: StringNullableFilter<"Flights"> | string | null
    DepartureDateTime?: DateTimeFilter<"Flights"> | Date | string
    ArrivalDateTime?: DateTimeFilter<"Flights"> | Date | string
    TravelClass?: StringNullableFilter<"Flights"> | string | null
    PriceId?: StringFilter<"Flights"> | string
    Stops?: IntFilter<"Flights"> | number
    Via?: StringFilter<"Flights"> | string
    PlatingCarrier?: StringFilter<"Flights"> | string
    AvailableSeats?: IntFilter<"Flights"> | number
    BaseAmount?: DecimalFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    TotalTaxAmount?: DecimalFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    GrossAmount?: DecimalFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    FareType?: StringFilter<"Flights"> | string
    Source?: StringFilter<"Flights"> | string
    EntryDate?: DateTimeNullableFilter<"Flights"> | Date | string | null
  }, "Id">

  export type FlightsOrderByWithAggregationInput = {
    Id?: SortOrder
    AirlineCode?: SortOrder
    FlightNumber?: SortOrder
    Origin?: SortOrder
    Destination?: SortOrder
    DepartureTerminal?: SortOrderInput | SortOrder
    ArrivalTerminal?: SortOrderInput | SortOrder
    DepartureDateTime?: SortOrder
    ArrivalDateTime?: SortOrder
    TravelClass?: SortOrderInput | SortOrder
    PriceId?: SortOrder
    Stops?: SortOrder
    Via?: SortOrder
    PlatingCarrier?: SortOrder
    AvailableSeats?: SortOrder
    BaseAmount?: SortOrder
    TotalTaxAmount?: SortOrder
    GrossAmount?: SortOrder
    FareType?: SortOrder
    Source?: SortOrder
    EntryDate?: SortOrderInput | SortOrder
    _count?: FlightsCountOrderByAggregateInput
    _avg?: FlightsAvgOrderByAggregateInput
    _max?: FlightsMaxOrderByAggregateInput
    _min?: FlightsMinOrderByAggregateInput
    _sum?: FlightsSumOrderByAggregateInput
  }

  export type FlightsScalarWhereWithAggregatesInput = {
    AND?: FlightsScalarWhereWithAggregatesInput | FlightsScalarWhereWithAggregatesInput[]
    OR?: FlightsScalarWhereWithAggregatesInput[]
    NOT?: FlightsScalarWhereWithAggregatesInput | FlightsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Flights"> | number
    AirlineCode?: StringWithAggregatesFilter<"Flights"> | string
    FlightNumber?: StringWithAggregatesFilter<"Flights"> | string
    Origin?: StringWithAggregatesFilter<"Flights"> | string
    Destination?: StringWithAggregatesFilter<"Flights"> | string
    DepartureTerminal?: StringNullableWithAggregatesFilter<"Flights"> | string | null
    ArrivalTerminal?: StringNullableWithAggregatesFilter<"Flights"> | string | null
    DepartureDateTime?: DateTimeWithAggregatesFilter<"Flights"> | Date | string
    ArrivalDateTime?: DateTimeWithAggregatesFilter<"Flights"> | Date | string
    TravelClass?: StringNullableWithAggregatesFilter<"Flights"> | string | null
    PriceId?: StringWithAggregatesFilter<"Flights"> | string
    Stops?: IntWithAggregatesFilter<"Flights"> | number
    Via?: StringWithAggregatesFilter<"Flights"> | string
    PlatingCarrier?: StringWithAggregatesFilter<"Flights"> | string
    AvailableSeats?: IntWithAggregatesFilter<"Flights"> | number
    BaseAmount?: DecimalWithAggregatesFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    TotalTaxAmount?: DecimalWithAggregatesFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    GrossAmount?: DecimalWithAggregatesFilter<"Flights"> | Decimal | DecimalJsLike | number | string
    FareType?: StringWithAggregatesFilter<"Flights"> | string
    Source?: StringWithAggregatesFilter<"Flights"> | string
    EntryDate?: DateTimeNullableWithAggregatesFilter<"Flights"> | Date | string | null
  }

  export type sysdiagramsWhereInput = {
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    diagram_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Uint8Array | null
  }

  export type sysdiagramsOrderByWithRelationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
  }

  export type sysdiagramsWhereUniqueInput = Prisma.AtLeast<{
    diagram_id?: number
    principal_id_name?: sysdiagramsPrincipal_idNameCompoundUniqueInput
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Uint8Array | null
  }, "diagram_id" | "principal_id_name">

  export type sysdiagramsOrderByWithAggregationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    _count?: sysdiagramsCountOrderByAggregateInput
    _avg?: sysdiagramsAvgOrderByAggregateInput
    _max?: sysdiagramsMaxOrderByAggregateInput
    _min?: sysdiagramsMinOrderByAggregateInput
    _sum?: sysdiagramsSumOrderByAggregateInput
  }

  export type sysdiagramsScalarWhereWithAggregatesInput = {
    AND?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    OR?: sysdiagramsScalarWhereWithAggregatesInput[]
    NOT?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"sysdiagrams"> | string
    principal_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    diagram_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    version?: IntNullableWithAggregatesFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableWithAggregatesFilter<"sysdiagrams"> | Uint8Array | null
  }

  export type LogSheetWhereInput = {
    AND?: LogSheetWhereInput | LogSheetWhereInput[]
    OR?: LogSheetWhereInput[]
    NOT?: LogSheetWhereInput | LogSheetWhereInput[]
    LogSheetID?: IntFilter<"LogSheet"> | number
    FormName?: StringNullableFilter<"LogSheet"> | string | null
    RefID?: IntNullableFilter<"LogSheet"> | number | null
    UserID?: IntNullableFilter<"LogSheet"> | number | null
    UserName?: StringNullableFilter<"LogSheet"> | string | null
    DateTime?: DateTimeNullableFilter<"LogSheet"> | Date | string | null
    Remarks?: StringNullableFilter<"LogSheet"> | string | null
  }

  export type LogSheetOrderByWithRelationInput = {
    LogSheetID?: SortOrder
    FormName?: SortOrderInput | SortOrder
    RefID?: SortOrderInput | SortOrder
    UserID?: SortOrderInput | SortOrder
    UserName?: SortOrderInput | SortOrder
    DateTime?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
  }

  export type LogSheetWhereUniqueInput = Prisma.AtLeast<{
    LogSheetID?: number
    AND?: LogSheetWhereInput | LogSheetWhereInput[]
    OR?: LogSheetWhereInput[]
    NOT?: LogSheetWhereInput | LogSheetWhereInput[]
    FormName?: StringNullableFilter<"LogSheet"> | string | null
    RefID?: IntNullableFilter<"LogSheet"> | number | null
    UserID?: IntNullableFilter<"LogSheet"> | number | null
    UserName?: StringNullableFilter<"LogSheet"> | string | null
    DateTime?: DateTimeNullableFilter<"LogSheet"> | Date | string | null
    Remarks?: StringNullableFilter<"LogSheet"> | string | null
  }, "LogSheetID">

  export type LogSheetOrderByWithAggregationInput = {
    LogSheetID?: SortOrder
    FormName?: SortOrderInput | SortOrder
    RefID?: SortOrderInput | SortOrder
    UserID?: SortOrderInput | SortOrder
    UserName?: SortOrderInput | SortOrder
    DateTime?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    _count?: LogSheetCountOrderByAggregateInput
    _avg?: LogSheetAvgOrderByAggregateInput
    _max?: LogSheetMaxOrderByAggregateInput
    _min?: LogSheetMinOrderByAggregateInput
    _sum?: LogSheetSumOrderByAggregateInput
  }

  export type LogSheetScalarWhereWithAggregatesInput = {
    AND?: LogSheetScalarWhereWithAggregatesInput | LogSheetScalarWhereWithAggregatesInput[]
    OR?: LogSheetScalarWhereWithAggregatesInput[]
    NOT?: LogSheetScalarWhereWithAggregatesInput | LogSheetScalarWhereWithAggregatesInput[]
    LogSheetID?: IntWithAggregatesFilter<"LogSheet"> | number
    FormName?: StringNullableWithAggregatesFilter<"LogSheet"> | string | null
    RefID?: IntNullableWithAggregatesFilter<"LogSheet"> | number | null
    UserID?: IntNullableWithAggregatesFilter<"LogSheet"> | number | null
    UserName?: StringNullableWithAggregatesFilter<"LogSheet"> | string | null
    DateTime?: DateTimeNullableWithAggregatesFilter<"LogSheet"> | Date | string | null
    Remarks?: StringNullableWithAggregatesFilter<"LogSheet"> | string | null
  }

  export type FlightOpsWhereInput = {
    AND?: FlightOpsWhereInput | FlightOpsWhereInput[]
    OR?: FlightOpsWhereInput[]
    NOT?: FlightOpsWhereInput | FlightOpsWhereInput[]
    FlightOpsID?: IntFilter<"FlightOps"> | number
    Keyid?: IntNullableFilter<"FlightOps"> | number | null
    Image?: StringNullableFilter<"FlightOps"> | string | null
  }

  export type FlightOpsOrderByWithRelationInput = {
    FlightOpsID?: SortOrder
    Keyid?: SortOrderInput | SortOrder
    Image?: SortOrderInput | SortOrder
  }

  export type FlightOpsWhereUniqueInput = Prisma.AtLeast<{
    FlightOpsID?: number
    AND?: FlightOpsWhereInput | FlightOpsWhereInput[]
    OR?: FlightOpsWhereInput[]
    NOT?: FlightOpsWhereInput | FlightOpsWhereInput[]
    Keyid?: IntNullableFilter<"FlightOps"> | number | null
    Image?: StringNullableFilter<"FlightOps"> | string | null
  }, "FlightOpsID">

  export type FlightOpsOrderByWithAggregationInput = {
    FlightOpsID?: SortOrder
    Keyid?: SortOrderInput | SortOrder
    Image?: SortOrderInput | SortOrder
    _count?: FlightOpsCountOrderByAggregateInput
    _avg?: FlightOpsAvgOrderByAggregateInput
    _max?: FlightOpsMaxOrderByAggregateInput
    _min?: FlightOpsMinOrderByAggregateInput
    _sum?: FlightOpsSumOrderByAggregateInput
  }

  export type FlightOpsScalarWhereWithAggregatesInput = {
    AND?: FlightOpsScalarWhereWithAggregatesInput | FlightOpsScalarWhereWithAggregatesInput[]
    OR?: FlightOpsScalarWhereWithAggregatesInput[]
    NOT?: FlightOpsScalarWhereWithAggregatesInput | FlightOpsScalarWhereWithAggregatesInput[]
    FlightOpsID?: IntWithAggregatesFilter<"FlightOps"> | number
    Keyid?: IntNullableWithAggregatesFilter<"FlightOps"> | number | null
    Image?: StringNullableWithAggregatesFilter<"FlightOps"> | string | null
  }

  export type TallyUsersWhereInput = {
    AND?: TallyUsersWhereInput | TallyUsersWhereInput[]
    OR?: TallyUsersWhereInput[]
    NOT?: TallyUsersWhereInput | TallyUsersWhereInput[]
    id?: IntFilter<"TallyUsers"> | number
    username?: StringFilter<"TallyUsers"> | string
    password?: StringFilter<"TallyUsers"> | string
    region?: StringFilter<"TallyUsers"> | string
    created_at?: DateTimeNullableFilter<"TallyUsers"> | Date | string | null
    TallyVoucherSyncLog?: TallyVoucherSyncLogListRelationFilter
  }

  export type TallyUsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    region?: SortOrder
    created_at?: SortOrderInput | SortOrder
    TallyVoucherSyncLog?: TallyVoucherSyncLogOrderByRelationAggregateInput
  }

  export type TallyUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: TallyUsersWhereInput | TallyUsersWhereInput[]
    OR?: TallyUsersWhereInput[]
    NOT?: TallyUsersWhereInput | TallyUsersWhereInput[]
    password?: StringFilter<"TallyUsers"> | string
    region?: StringFilter<"TallyUsers"> | string
    created_at?: DateTimeNullableFilter<"TallyUsers"> | Date | string | null
    TallyVoucherSyncLog?: TallyVoucherSyncLogListRelationFilter
  }, "id" | "username">

  export type TallyUsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    region?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: TallyUsersCountOrderByAggregateInput
    _avg?: TallyUsersAvgOrderByAggregateInput
    _max?: TallyUsersMaxOrderByAggregateInput
    _min?: TallyUsersMinOrderByAggregateInput
    _sum?: TallyUsersSumOrderByAggregateInput
  }

  export type TallyUsersScalarWhereWithAggregatesInput = {
    AND?: TallyUsersScalarWhereWithAggregatesInput | TallyUsersScalarWhereWithAggregatesInput[]
    OR?: TallyUsersScalarWhereWithAggregatesInput[]
    NOT?: TallyUsersScalarWhereWithAggregatesInput | TallyUsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TallyUsers"> | number
    username?: StringWithAggregatesFilter<"TallyUsers"> | string
    password?: StringWithAggregatesFilter<"TallyUsers"> | string
    region?: StringWithAggregatesFilter<"TallyUsers"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"TallyUsers"> | Date | string | null
  }

  export type TallyVoucherSyncLogWhereInput = {
    AND?: TallyVoucherSyncLogWhereInput | TallyVoucherSyncLogWhereInput[]
    OR?: TallyVoucherSyncLogWhereInput[]
    NOT?: TallyVoucherSyncLogWhereInput | TallyVoucherSyncLogWhereInput[]
    id?: IntFilter<"TallyVoucherSyncLog"> | number
    user_id?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    region?: StringFilter<"TallyVoucherSyncLog"> | string
    voucher_type?: StringFilter<"TallyVoucherSyncLog"> | string
    submission_date?: DateTimeFilter<"TallyVoucherSyncLog"> | Date | string
    last_updated_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    start_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    end_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    start_voucher?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    end_voucher?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    created_at?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    last_updated_voucher_number?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    TallyUsers?: XOR<TallyUsersNullableScalarRelationFilter, TallyUsersWhereInput> | null
  }

  export type TallyVoucherSyncLogOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    region?: SortOrder
    voucher_type?: SortOrder
    submission_date?: SortOrder
    last_updated_date?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    start_voucher?: SortOrderInput | SortOrder
    end_voucher?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_updated_voucher_number?: SortOrderInput | SortOrder
    TallyUsers?: TallyUsersOrderByWithRelationInput
  }

  export type TallyVoucherSyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TallyVoucherSyncLogWhereInput | TallyVoucherSyncLogWhereInput[]
    OR?: TallyVoucherSyncLogWhereInput[]
    NOT?: TallyVoucherSyncLogWhereInput | TallyVoucherSyncLogWhereInput[]
    user_id?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    region?: StringFilter<"TallyVoucherSyncLog"> | string
    voucher_type?: StringFilter<"TallyVoucherSyncLog"> | string
    submission_date?: DateTimeFilter<"TallyVoucherSyncLog"> | Date | string
    last_updated_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    start_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    end_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    start_voucher?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    end_voucher?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    created_at?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    last_updated_voucher_number?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    TallyUsers?: XOR<TallyUsersNullableScalarRelationFilter, TallyUsersWhereInput> | null
  }, "id">

  export type TallyVoucherSyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    region?: SortOrder
    voucher_type?: SortOrder
    submission_date?: SortOrder
    last_updated_date?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    start_voucher?: SortOrderInput | SortOrder
    end_voucher?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_updated_voucher_number?: SortOrderInput | SortOrder
    _count?: TallyVoucherSyncLogCountOrderByAggregateInput
    _avg?: TallyVoucherSyncLogAvgOrderByAggregateInput
    _max?: TallyVoucherSyncLogMaxOrderByAggregateInput
    _min?: TallyVoucherSyncLogMinOrderByAggregateInput
    _sum?: TallyVoucherSyncLogSumOrderByAggregateInput
  }

  export type TallyVoucherSyncLogScalarWhereWithAggregatesInput = {
    AND?: TallyVoucherSyncLogScalarWhereWithAggregatesInput | TallyVoucherSyncLogScalarWhereWithAggregatesInput[]
    OR?: TallyVoucherSyncLogScalarWhereWithAggregatesInput[]
    NOT?: TallyVoucherSyncLogScalarWhereWithAggregatesInput | TallyVoucherSyncLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TallyVoucherSyncLog"> | number
    user_id?: IntNullableWithAggregatesFilter<"TallyVoucherSyncLog"> | number | null
    region?: StringWithAggregatesFilter<"TallyVoucherSyncLog"> | string
    voucher_type?: StringWithAggregatesFilter<"TallyVoucherSyncLog"> | string
    submission_date?: DateTimeWithAggregatesFilter<"TallyVoucherSyncLog"> | Date | string
    last_updated_date?: DateTimeNullableWithAggregatesFilter<"TallyVoucherSyncLog"> | Date | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"TallyVoucherSyncLog"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"TallyVoucherSyncLog"> | Date | string | null
    start_voucher?: IntNullableWithAggregatesFilter<"TallyVoucherSyncLog"> | number | null
    end_voucher?: IntNullableWithAggregatesFilter<"TallyVoucherSyncLog"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"TallyVoucherSyncLog"> | Date | string | null
    last_updated_voucher_number?: IntNullableWithAggregatesFilter<"TallyVoucherSyncLog"> | number | null
  }

  export type FareAuditCreateInput = {
    bookingId?: number | null
    ticketId: number
    fareLogId: number
    logType: string
    source: string
    requestDateTime: Date | string
    pnr?: string | null
    flightSector: string
    flightNumber: string
    travelDateTime: Date | string
    fsSameFlightFare?: Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: number | null
    fsErrorMessage?: string | null
    fsAverageFare?: Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: string | null
    flightWiseTotalSeatsPurchased?: number | null
    flightWiseTotalSeatsSold?: number | null
    flightWiseTotalSeatsLeft?: number | null
    flightWiseAverageCost?: Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: number | null
    routeWiseSeatsSold?: number | null
    routeWiseSeatsLeft?: number | null
    routeWiseAverageCost?: Decimal | DecimalJsLike | number | string | null
    averageSellFare?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    remark?: string | null
    taskCompletedDateTime: Date | string
    fsSameFlightStock?: number | null
    fsLowestFareFlightNumber?: string | null
    fsLowestFareFlightDepartureTime?: Date | string | null
    aoLowestFareFlightNumber?: string | null
    aoSameFlightStock?: number | null
    aoLowestFareFlightDepartureTime?: Date | string | null
    fareAuditRemarks?: string | null
    aoAvailableStock?: number | null
    actualManagedFare?: Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: number | null
    fsWindowedLowestFare?: Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: string | null
    fsWindowedLowestFareDepartureTime?: Date | string | null
    aoWindowedLowestFare?: Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: string | null
    aoWindowedLowestFareDepartureTime?: Date | string | null
  }

  export type FareAuditUncheckedCreateInput = {
    id?: number
    bookingId?: number | null
    ticketId: number
    fareLogId: number
    logType: string
    source: string
    requestDateTime: Date | string
    pnr?: string | null
    flightSector: string
    flightNumber: string
    travelDateTime: Date | string
    fsSameFlightFare?: Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: number | null
    fsErrorMessage?: string | null
    fsAverageFare?: Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: string | null
    flightWiseTotalSeatsPurchased?: number | null
    flightWiseTotalSeatsSold?: number | null
    flightWiseTotalSeatsLeft?: number | null
    flightWiseAverageCost?: Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: number | null
    routeWiseSeatsSold?: number | null
    routeWiseSeatsLeft?: number | null
    routeWiseAverageCost?: Decimal | DecimalJsLike | number | string | null
    averageSellFare?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    remark?: string | null
    taskCompletedDateTime: Date | string
    fsSameFlightStock?: number | null
    fsLowestFareFlightNumber?: string | null
    fsLowestFareFlightDepartureTime?: Date | string | null
    aoLowestFareFlightNumber?: string | null
    aoSameFlightStock?: number | null
    aoLowestFareFlightDepartureTime?: Date | string | null
    fareAuditRemarks?: string | null
    aoAvailableStock?: number | null
    actualManagedFare?: Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: number | null
    fsWindowedLowestFare?: Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: string | null
    fsWindowedLowestFareDepartureTime?: Date | string | null
    aoWindowedLowestFare?: Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: string | null
    aoWindowedLowestFareDepartureTime?: Date | string | null
  }

  export type FareAuditUpdateInput = {
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    fareLogId?: IntFieldUpdateOperationsInput | number
    logType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    requestDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pnr?: NullableStringFieldUpdateOperationsInput | string | null
    flightSector?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    travelDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    fsSameFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: NullableIntFieldUpdateOperationsInput | number | null
    fsErrorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    fsAverageFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    flightWiseTotalSeatsPurchased?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseTotalSeatsSold?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseTotalSeatsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseAverageCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseSeatsSold?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseSeatsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseAverageCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageSellFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    taskCompletedDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    fsSameFlightStock?: NullableIntFieldUpdateOperationsInput | number | null
    fsLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fsLowestFareFlightDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aoLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aoSameFlightStock?: NullableIntFieldUpdateOperationsInput | number | null
    aoLowestFareFlightDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fareAuditRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    aoAvailableStock?: NullableIntFieldUpdateOperationsInput | number | null
    actualManagedFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: NullableIntFieldUpdateOperationsInput | number | null
    fsWindowedLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fsWindowedLowestFareDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aoWindowedLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aoWindowedLowestFareDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FareAuditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    fareLogId?: IntFieldUpdateOperationsInput | number
    logType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    requestDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pnr?: NullableStringFieldUpdateOperationsInput | string | null
    flightSector?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    travelDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    fsSameFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: NullableIntFieldUpdateOperationsInput | number | null
    fsErrorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    fsAverageFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    flightWiseTotalSeatsPurchased?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseTotalSeatsSold?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseTotalSeatsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseAverageCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseSeatsSold?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseSeatsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseAverageCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageSellFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    taskCompletedDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    fsSameFlightStock?: NullableIntFieldUpdateOperationsInput | number | null
    fsLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fsLowestFareFlightDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aoLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aoSameFlightStock?: NullableIntFieldUpdateOperationsInput | number | null
    aoLowestFareFlightDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fareAuditRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    aoAvailableStock?: NullableIntFieldUpdateOperationsInput | number | null
    actualManagedFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: NullableIntFieldUpdateOperationsInput | number | null
    fsWindowedLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fsWindowedLowestFareDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aoWindowedLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aoWindowedLowestFareDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FareAuditCreateManyInput = {
    bookingId?: number | null
    ticketId: number
    fareLogId: number
    logType: string
    source: string
    requestDateTime: Date | string
    pnr?: string | null
    flightSector: string
    flightNumber: string
    travelDateTime: Date | string
    fsSameFlightFare?: Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: number | null
    fsErrorMessage?: string | null
    fsAverageFare?: Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: string | null
    flightWiseTotalSeatsPurchased?: number | null
    flightWiseTotalSeatsSold?: number | null
    flightWiseTotalSeatsLeft?: number | null
    flightWiseAverageCost?: Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: number | null
    routeWiseSeatsSold?: number | null
    routeWiseSeatsLeft?: number | null
    routeWiseAverageCost?: Decimal | DecimalJsLike | number | string | null
    averageSellFare?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    remark?: string | null
    taskCompletedDateTime: Date | string
    fsSameFlightStock?: number | null
    fsLowestFareFlightNumber?: string | null
    fsLowestFareFlightDepartureTime?: Date | string | null
    aoLowestFareFlightNumber?: string | null
    aoSameFlightStock?: number | null
    aoLowestFareFlightDepartureTime?: Date | string | null
    fareAuditRemarks?: string | null
    aoAvailableStock?: number | null
    actualManagedFare?: Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: number | null
    fsWindowedLowestFare?: Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: string | null
    fsWindowedLowestFareDepartureTime?: Date | string | null
    aoWindowedLowestFare?: Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: string | null
    aoWindowedLowestFareDepartureTime?: Date | string | null
  }

  export type FareAuditUpdateManyMutationInput = {
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    fareLogId?: IntFieldUpdateOperationsInput | number
    logType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    requestDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pnr?: NullableStringFieldUpdateOperationsInput | string | null
    flightSector?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    travelDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    fsSameFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: NullableIntFieldUpdateOperationsInput | number | null
    fsErrorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    fsAverageFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    flightWiseTotalSeatsPurchased?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseTotalSeatsSold?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseTotalSeatsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseAverageCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseSeatsSold?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseSeatsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseAverageCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageSellFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    taskCompletedDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    fsSameFlightStock?: NullableIntFieldUpdateOperationsInput | number | null
    fsLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fsLowestFareFlightDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aoLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aoSameFlightStock?: NullableIntFieldUpdateOperationsInput | number | null
    aoLowestFareFlightDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fareAuditRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    aoAvailableStock?: NullableIntFieldUpdateOperationsInput | number | null
    actualManagedFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: NullableIntFieldUpdateOperationsInput | number | null
    fsWindowedLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fsWindowedLowestFareDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aoWindowedLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aoWindowedLowestFareDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FareAuditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketId?: IntFieldUpdateOperationsInput | number
    fareLogId?: IntFieldUpdateOperationsInput | number
    logType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    requestDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pnr?: NullableStringFieldUpdateOperationsInput | string | null
    flightSector?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    travelDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    fsSameFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsLowestFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsAvailableStock?: NullableIntFieldUpdateOperationsInput | number | null
    fsErrorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    fsAverageFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoSameFlightFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoAverageFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoErrorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    flightWiseTotalSeatsPurchased?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseTotalSeatsSold?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseTotalSeatsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    flightWiseAverageCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    routeWiseSeatsPurchased?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseSeatsSold?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseSeatsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    routeWiseAverageCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageSellFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    taskCompletedDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    fsSameFlightStock?: NullableIntFieldUpdateOperationsInput | number | null
    fsLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fsLowestFareFlightDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aoLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aoSameFlightStock?: NullableIntFieldUpdateOperationsInput | number | null
    aoLowestFareFlightDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fareAuditRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    aoAvailableStock?: NullableIntFieldUpdateOperationsInput | number | null
    actualManagedFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bookedPaxQty?: NullableIntFieldUpdateOperationsInput | number | null
    fsWindowedLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fsWindowedLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fsWindowedLowestFareDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aoWindowedLowestFare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aoWindowedLowestFareFlightNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aoWindowedLowestFareDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FlightsCreateInput = {
    AirlineCode: string
    FlightNumber: string
    Origin: string
    Destination: string
    DepartureTerminal?: string | null
    ArrivalTerminal?: string | null
    DepartureDateTime: Date | string
    ArrivalDateTime: Date | string
    TravelClass?: string | null
    PriceId: string
    Stops: number
    Via: string
    PlatingCarrier: string
    AvailableSeats: number
    BaseAmount: Decimal | DecimalJsLike | number | string
    TotalTaxAmount: Decimal | DecimalJsLike | number | string
    GrossAmount: Decimal | DecimalJsLike | number | string
    FareType: string
    Source: string
    EntryDate?: Date | string | null
  }

  export type FlightsUncheckedCreateInput = {
    Id?: number
    AirlineCode: string
    FlightNumber: string
    Origin: string
    Destination: string
    DepartureTerminal?: string | null
    ArrivalTerminal?: string | null
    DepartureDateTime: Date | string
    ArrivalDateTime: Date | string
    TravelClass?: string | null
    PriceId: string
    Stops: number
    Via: string
    PlatingCarrier: string
    AvailableSeats: number
    BaseAmount: Decimal | DecimalJsLike | number | string
    TotalTaxAmount: Decimal | DecimalJsLike | number | string
    GrossAmount: Decimal | DecimalJsLike | number | string
    FareType: string
    Source: string
    EntryDate?: Date | string | null
  }

  export type FlightsUpdateInput = {
    AirlineCode?: StringFieldUpdateOperationsInput | string
    FlightNumber?: StringFieldUpdateOperationsInput | string
    Origin?: StringFieldUpdateOperationsInput | string
    Destination?: StringFieldUpdateOperationsInput | string
    DepartureTerminal?: NullableStringFieldUpdateOperationsInput | string | null
    ArrivalTerminal?: NullableStringFieldUpdateOperationsInput | string | null
    DepartureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ArrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    TravelClass?: NullableStringFieldUpdateOperationsInput | string | null
    PriceId?: StringFieldUpdateOperationsInput | string
    Stops?: IntFieldUpdateOperationsInput | number
    Via?: StringFieldUpdateOperationsInput | string
    PlatingCarrier?: StringFieldUpdateOperationsInput | string
    AvailableSeats?: IntFieldUpdateOperationsInput | number
    BaseAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalTaxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    GrossAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FareType?: StringFieldUpdateOperationsInput | string
    Source?: StringFieldUpdateOperationsInput | string
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FlightsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    AirlineCode?: StringFieldUpdateOperationsInput | string
    FlightNumber?: StringFieldUpdateOperationsInput | string
    Origin?: StringFieldUpdateOperationsInput | string
    Destination?: StringFieldUpdateOperationsInput | string
    DepartureTerminal?: NullableStringFieldUpdateOperationsInput | string | null
    ArrivalTerminal?: NullableStringFieldUpdateOperationsInput | string | null
    DepartureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ArrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    TravelClass?: NullableStringFieldUpdateOperationsInput | string | null
    PriceId?: StringFieldUpdateOperationsInput | string
    Stops?: IntFieldUpdateOperationsInput | number
    Via?: StringFieldUpdateOperationsInput | string
    PlatingCarrier?: StringFieldUpdateOperationsInput | string
    AvailableSeats?: IntFieldUpdateOperationsInput | number
    BaseAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalTaxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    GrossAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FareType?: StringFieldUpdateOperationsInput | string
    Source?: StringFieldUpdateOperationsInput | string
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FlightsCreateManyInput = {
    AirlineCode: string
    FlightNumber: string
    Origin: string
    Destination: string
    DepartureTerminal?: string | null
    ArrivalTerminal?: string | null
    DepartureDateTime: Date | string
    ArrivalDateTime: Date | string
    TravelClass?: string | null
    PriceId: string
    Stops: number
    Via: string
    PlatingCarrier: string
    AvailableSeats: number
    BaseAmount: Decimal | DecimalJsLike | number | string
    TotalTaxAmount: Decimal | DecimalJsLike | number | string
    GrossAmount: Decimal | DecimalJsLike | number | string
    FareType: string
    Source: string
    EntryDate?: Date | string | null
  }

  export type FlightsUpdateManyMutationInput = {
    AirlineCode?: StringFieldUpdateOperationsInput | string
    FlightNumber?: StringFieldUpdateOperationsInput | string
    Origin?: StringFieldUpdateOperationsInput | string
    Destination?: StringFieldUpdateOperationsInput | string
    DepartureTerminal?: NullableStringFieldUpdateOperationsInput | string | null
    ArrivalTerminal?: NullableStringFieldUpdateOperationsInput | string | null
    DepartureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ArrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    TravelClass?: NullableStringFieldUpdateOperationsInput | string | null
    PriceId?: StringFieldUpdateOperationsInput | string
    Stops?: IntFieldUpdateOperationsInput | number
    Via?: StringFieldUpdateOperationsInput | string
    PlatingCarrier?: StringFieldUpdateOperationsInput | string
    AvailableSeats?: IntFieldUpdateOperationsInput | number
    BaseAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalTaxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    GrossAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FareType?: StringFieldUpdateOperationsInput | string
    Source?: StringFieldUpdateOperationsInput | string
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FlightsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    AirlineCode?: StringFieldUpdateOperationsInput | string
    FlightNumber?: StringFieldUpdateOperationsInput | string
    Origin?: StringFieldUpdateOperationsInput | string
    Destination?: StringFieldUpdateOperationsInput | string
    DepartureTerminal?: NullableStringFieldUpdateOperationsInput | string | null
    ArrivalTerminal?: NullableStringFieldUpdateOperationsInput | string | null
    DepartureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ArrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    TravelClass?: NullableStringFieldUpdateOperationsInput | string | null
    PriceId?: StringFieldUpdateOperationsInput | string
    Stops?: IntFieldUpdateOperationsInput | number
    Via?: StringFieldUpdateOperationsInput | string
    PlatingCarrier?: StringFieldUpdateOperationsInput | string
    AvailableSeats?: IntFieldUpdateOperationsInput | number
    BaseAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalTaxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    GrossAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    FareType?: StringFieldUpdateOperationsInput | string
    Source?: StringFieldUpdateOperationsInput | string
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sysdiagramsCreateInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUncheckedCreateInput = {
    name: string
    principal_id: number
    diagram_id?: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsCreateManyInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type LogSheetCreateInput = {
    FormName?: string | null
    RefID?: number | null
    UserID?: number | null
    UserName?: string | null
    DateTime?: Date | string | null
    Remarks?: string | null
  }

  export type LogSheetUncheckedCreateInput = {
    LogSheetID?: number
    FormName?: string | null
    RefID?: number | null
    UserID?: number | null
    UserName?: string | null
    DateTime?: Date | string | null
    Remarks?: string | null
  }

  export type LogSheetUpdateInput = {
    FormName?: NullableStringFieldUpdateOperationsInput | string | null
    RefID?: NullableIntFieldUpdateOperationsInput | number | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    DateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogSheetUncheckedUpdateInput = {
    LogSheetID?: IntFieldUpdateOperationsInput | number
    FormName?: NullableStringFieldUpdateOperationsInput | string | null
    RefID?: NullableIntFieldUpdateOperationsInput | number | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    DateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogSheetCreateManyInput = {
    FormName?: string | null
    RefID?: number | null
    UserID?: number | null
    UserName?: string | null
    DateTime?: Date | string | null
    Remarks?: string | null
  }

  export type LogSheetUpdateManyMutationInput = {
    FormName?: NullableStringFieldUpdateOperationsInput | string | null
    RefID?: NullableIntFieldUpdateOperationsInput | number | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    DateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogSheetUncheckedUpdateManyInput = {
    LogSheetID?: IntFieldUpdateOperationsInput | number
    FormName?: NullableStringFieldUpdateOperationsInput | string | null
    RefID?: NullableIntFieldUpdateOperationsInput | number | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    DateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlightOpsCreateInput = {
    Keyid?: number | null
    Image?: string | null
  }

  export type FlightOpsUncheckedCreateInput = {
    FlightOpsID?: number
    Keyid?: number | null
    Image?: string | null
  }

  export type FlightOpsUpdateInput = {
    Keyid?: NullableIntFieldUpdateOperationsInput | number | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlightOpsUncheckedUpdateInput = {
    FlightOpsID?: IntFieldUpdateOperationsInput | number
    Keyid?: NullableIntFieldUpdateOperationsInput | number | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlightOpsCreateManyInput = {
    Keyid?: number | null
    Image?: string | null
  }

  export type FlightOpsUpdateManyMutationInput = {
    Keyid?: NullableIntFieldUpdateOperationsInput | number | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlightOpsUncheckedUpdateManyInput = {
    FlightOpsID?: IntFieldUpdateOperationsInput | number
    Keyid?: NullableIntFieldUpdateOperationsInput | number | null
    Image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TallyUsersCreateInput = {
    username: string
    password: string
    region: string
    created_at?: Date | string | null
    TallyVoucherSyncLog?: TallyVoucherSyncLogCreateNestedManyWithoutTallyUsersInput
  }

  export type TallyUsersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    region: string
    created_at?: Date | string | null
    TallyVoucherSyncLog?: TallyVoucherSyncLogUncheckedCreateNestedManyWithoutTallyUsersInput
  }

  export type TallyUsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TallyVoucherSyncLog?: TallyVoucherSyncLogUpdateManyWithoutTallyUsersNestedInput
  }

  export type TallyUsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TallyVoucherSyncLog?: TallyVoucherSyncLogUncheckedUpdateManyWithoutTallyUsersNestedInput
  }

  export type TallyUsersCreateManyInput = {
    username: string
    password: string
    region: string
    created_at?: Date | string | null
  }

  export type TallyUsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TallyUsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TallyVoucherSyncLogCreateInput = {
    region: string
    voucher_type: string
    submission_date: Date | string
    last_updated_date?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    start_voucher?: number | null
    end_voucher?: number | null
    created_at?: Date | string | null
    last_updated_voucher_number?: number | null
    TallyUsers?: TallyUsersCreateNestedOneWithoutTallyVoucherSyncLogInput
  }

  export type TallyVoucherSyncLogUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    region: string
    voucher_type: string
    submission_date: Date | string
    last_updated_date?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    start_voucher?: number | null
    end_voucher?: number | null
    created_at?: Date | string | null
    last_updated_voucher_number?: number | null
  }

  export type TallyVoucherSyncLogUpdateInput = {
    region?: StringFieldUpdateOperationsInput | string
    voucher_type?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    end_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_voucher_number?: NullableIntFieldUpdateOperationsInput | number | null
    TallyUsers?: TallyUsersUpdateOneWithoutTallyVoucherSyncLogNestedInput
  }

  export type TallyVoucherSyncLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    region?: StringFieldUpdateOperationsInput | string
    voucher_type?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    end_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_voucher_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TallyVoucherSyncLogCreateManyInput = {
    user_id?: number | null
    region: string
    voucher_type: string
    submission_date: Date | string
    last_updated_date?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    start_voucher?: number | null
    end_voucher?: number | null
    created_at?: Date | string | null
    last_updated_voucher_number?: number | null
  }

  export type TallyVoucherSyncLogUpdateManyMutationInput = {
    region?: StringFieldUpdateOperationsInput | string
    voucher_type?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    end_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_voucher_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TallyVoucherSyncLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    region?: StringFieldUpdateOperationsInput | string
    voucher_type?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    end_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_voucher_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FareAuditCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    ticketId?: SortOrder
    fareLogId?: SortOrder
    logType?: SortOrder
    source?: SortOrder
    requestDateTime?: SortOrder
    pnr?: SortOrder
    flightSector?: SortOrder
    flightNumber?: SortOrder
    travelDateTime?: SortOrder
    fsSameFlightFare?: SortOrder
    fsLowestFlightFare?: SortOrder
    fsAvailableStock?: SortOrder
    fsErrorMessage?: SortOrder
    fsAverageFare?: SortOrder
    aoSameFlightFare?: SortOrder
    aoLowestFare?: SortOrder
    aoAverageFare?: SortOrder
    aoErrorMessage?: SortOrder
    flightWiseTotalSeatsPurchased?: SortOrder
    flightWiseTotalSeatsSold?: SortOrder
    flightWiseTotalSeatsLeft?: SortOrder
    flightWiseAverageCost?: SortOrder
    routeWiseSeatsPurchased?: SortOrder
    routeWiseSeatsSold?: SortOrder
    routeWiseSeatsLeft?: SortOrder
    routeWiseAverageCost?: SortOrder
    averageSellFare?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    taskCompletedDateTime?: SortOrder
    fsSameFlightStock?: SortOrder
    fsLowestFareFlightNumber?: SortOrder
    fsLowestFareFlightDepartureTime?: SortOrder
    aoLowestFareFlightNumber?: SortOrder
    aoSameFlightStock?: SortOrder
    aoLowestFareFlightDepartureTime?: SortOrder
    fareAuditRemarks?: SortOrder
    aoAvailableStock?: SortOrder
    actualManagedFare?: SortOrder
    bookedPaxQty?: SortOrder
    fsWindowedLowestFare?: SortOrder
    fsWindowedLowestFareFlightNumber?: SortOrder
    fsWindowedLowestFareDepartureTime?: SortOrder
    aoWindowedLowestFare?: SortOrder
    aoWindowedLowestFareFlightNumber?: SortOrder
    aoWindowedLowestFareDepartureTime?: SortOrder
  }

  export type FareAuditAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    ticketId?: SortOrder
    fareLogId?: SortOrder
    fsSameFlightFare?: SortOrder
    fsLowestFlightFare?: SortOrder
    fsAvailableStock?: SortOrder
    fsAverageFare?: SortOrder
    aoSameFlightFare?: SortOrder
    aoLowestFare?: SortOrder
    aoAverageFare?: SortOrder
    flightWiseTotalSeatsPurchased?: SortOrder
    flightWiseTotalSeatsSold?: SortOrder
    flightWiseTotalSeatsLeft?: SortOrder
    flightWiseAverageCost?: SortOrder
    routeWiseSeatsPurchased?: SortOrder
    routeWiseSeatsSold?: SortOrder
    routeWiseSeatsLeft?: SortOrder
    routeWiseAverageCost?: SortOrder
    averageSellFare?: SortOrder
    fsSameFlightStock?: SortOrder
    aoSameFlightStock?: SortOrder
    aoAvailableStock?: SortOrder
    actualManagedFare?: SortOrder
    bookedPaxQty?: SortOrder
    fsWindowedLowestFare?: SortOrder
    aoWindowedLowestFare?: SortOrder
  }

  export type FareAuditMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    ticketId?: SortOrder
    fareLogId?: SortOrder
    logType?: SortOrder
    source?: SortOrder
    requestDateTime?: SortOrder
    pnr?: SortOrder
    flightSector?: SortOrder
    flightNumber?: SortOrder
    travelDateTime?: SortOrder
    fsSameFlightFare?: SortOrder
    fsLowestFlightFare?: SortOrder
    fsAvailableStock?: SortOrder
    fsErrorMessage?: SortOrder
    fsAverageFare?: SortOrder
    aoSameFlightFare?: SortOrder
    aoLowestFare?: SortOrder
    aoAverageFare?: SortOrder
    aoErrorMessage?: SortOrder
    flightWiseTotalSeatsPurchased?: SortOrder
    flightWiseTotalSeatsSold?: SortOrder
    flightWiseTotalSeatsLeft?: SortOrder
    flightWiseAverageCost?: SortOrder
    routeWiseSeatsPurchased?: SortOrder
    routeWiseSeatsSold?: SortOrder
    routeWiseSeatsLeft?: SortOrder
    routeWiseAverageCost?: SortOrder
    averageSellFare?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    taskCompletedDateTime?: SortOrder
    fsSameFlightStock?: SortOrder
    fsLowestFareFlightNumber?: SortOrder
    fsLowestFareFlightDepartureTime?: SortOrder
    aoLowestFareFlightNumber?: SortOrder
    aoSameFlightStock?: SortOrder
    aoLowestFareFlightDepartureTime?: SortOrder
    fareAuditRemarks?: SortOrder
    aoAvailableStock?: SortOrder
    actualManagedFare?: SortOrder
    bookedPaxQty?: SortOrder
    fsWindowedLowestFare?: SortOrder
    fsWindowedLowestFareFlightNumber?: SortOrder
    fsWindowedLowestFareDepartureTime?: SortOrder
    aoWindowedLowestFare?: SortOrder
    aoWindowedLowestFareFlightNumber?: SortOrder
    aoWindowedLowestFareDepartureTime?: SortOrder
  }

  export type FareAuditMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    ticketId?: SortOrder
    fareLogId?: SortOrder
    logType?: SortOrder
    source?: SortOrder
    requestDateTime?: SortOrder
    pnr?: SortOrder
    flightSector?: SortOrder
    flightNumber?: SortOrder
    travelDateTime?: SortOrder
    fsSameFlightFare?: SortOrder
    fsLowestFlightFare?: SortOrder
    fsAvailableStock?: SortOrder
    fsErrorMessage?: SortOrder
    fsAverageFare?: SortOrder
    aoSameFlightFare?: SortOrder
    aoLowestFare?: SortOrder
    aoAverageFare?: SortOrder
    aoErrorMessage?: SortOrder
    flightWiseTotalSeatsPurchased?: SortOrder
    flightWiseTotalSeatsSold?: SortOrder
    flightWiseTotalSeatsLeft?: SortOrder
    flightWiseAverageCost?: SortOrder
    routeWiseSeatsPurchased?: SortOrder
    routeWiseSeatsSold?: SortOrder
    routeWiseSeatsLeft?: SortOrder
    routeWiseAverageCost?: SortOrder
    averageSellFare?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    taskCompletedDateTime?: SortOrder
    fsSameFlightStock?: SortOrder
    fsLowestFareFlightNumber?: SortOrder
    fsLowestFareFlightDepartureTime?: SortOrder
    aoLowestFareFlightNumber?: SortOrder
    aoSameFlightStock?: SortOrder
    aoLowestFareFlightDepartureTime?: SortOrder
    fareAuditRemarks?: SortOrder
    aoAvailableStock?: SortOrder
    actualManagedFare?: SortOrder
    bookedPaxQty?: SortOrder
    fsWindowedLowestFare?: SortOrder
    fsWindowedLowestFareFlightNumber?: SortOrder
    fsWindowedLowestFareDepartureTime?: SortOrder
    aoWindowedLowestFare?: SortOrder
    aoWindowedLowestFareFlightNumber?: SortOrder
    aoWindowedLowestFareDepartureTime?: SortOrder
  }

  export type FareAuditSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    ticketId?: SortOrder
    fareLogId?: SortOrder
    fsSameFlightFare?: SortOrder
    fsLowestFlightFare?: SortOrder
    fsAvailableStock?: SortOrder
    fsAverageFare?: SortOrder
    aoSameFlightFare?: SortOrder
    aoLowestFare?: SortOrder
    aoAverageFare?: SortOrder
    flightWiseTotalSeatsPurchased?: SortOrder
    flightWiseTotalSeatsSold?: SortOrder
    flightWiseTotalSeatsLeft?: SortOrder
    flightWiseAverageCost?: SortOrder
    routeWiseSeatsPurchased?: SortOrder
    routeWiseSeatsSold?: SortOrder
    routeWiseSeatsLeft?: SortOrder
    routeWiseAverageCost?: SortOrder
    averageSellFare?: SortOrder
    fsSameFlightStock?: SortOrder
    aoSameFlightStock?: SortOrder
    aoAvailableStock?: SortOrder
    actualManagedFare?: SortOrder
    bookedPaxQty?: SortOrder
    fsWindowedLowestFare?: SortOrder
    aoWindowedLowestFare?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FlightsCountOrderByAggregateInput = {
    Id?: SortOrder
    AirlineCode?: SortOrder
    FlightNumber?: SortOrder
    Origin?: SortOrder
    Destination?: SortOrder
    DepartureTerminal?: SortOrder
    ArrivalTerminal?: SortOrder
    DepartureDateTime?: SortOrder
    ArrivalDateTime?: SortOrder
    TravelClass?: SortOrder
    PriceId?: SortOrder
    Stops?: SortOrder
    Via?: SortOrder
    PlatingCarrier?: SortOrder
    AvailableSeats?: SortOrder
    BaseAmount?: SortOrder
    TotalTaxAmount?: SortOrder
    GrossAmount?: SortOrder
    FareType?: SortOrder
    Source?: SortOrder
    EntryDate?: SortOrder
  }

  export type FlightsAvgOrderByAggregateInput = {
    Id?: SortOrder
    Stops?: SortOrder
    AvailableSeats?: SortOrder
    BaseAmount?: SortOrder
    TotalTaxAmount?: SortOrder
    GrossAmount?: SortOrder
  }

  export type FlightsMaxOrderByAggregateInput = {
    Id?: SortOrder
    AirlineCode?: SortOrder
    FlightNumber?: SortOrder
    Origin?: SortOrder
    Destination?: SortOrder
    DepartureTerminal?: SortOrder
    ArrivalTerminal?: SortOrder
    DepartureDateTime?: SortOrder
    ArrivalDateTime?: SortOrder
    TravelClass?: SortOrder
    PriceId?: SortOrder
    Stops?: SortOrder
    Via?: SortOrder
    PlatingCarrier?: SortOrder
    AvailableSeats?: SortOrder
    BaseAmount?: SortOrder
    TotalTaxAmount?: SortOrder
    GrossAmount?: SortOrder
    FareType?: SortOrder
    Source?: SortOrder
    EntryDate?: SortOrder
  }

  export type FlightsMinOrderByAggregateInput = {
    Id?: SortOrder
    AirlineCode?: SortOrder
    FlightNumber?: SortOrder
    Origin?: SortOrder
    Destination?: SortOrder
    DepartureTerminal?: SortOrder
    ArrivalTerminal?: SortOrder
    DepartureDateTime?: SortOrder
    ArrivalDateTime?: SortOrder
    TravelClass?: SortOrder
    PriceId?: SortOrder
    Stops?: SortOrder
    Via?: SortOrder
    PlatingCarrier?: SortOrder
    AvailableSeats?: SortOrder
    BaseAmount?: SortOrder
    TotalTaxAmount?: SortOrder
    GrossAmount?: SortOrder
    FareType?: SortOrder
    Source?: SortOrder
    EntryDate?: SortOrder
  }

  export type FlightsSumOrderByAggregateInput = {
    Id?: SortOrder
    Stops?: SortOrder
    AvailableSeats?: SortOrder
    BaseAmount?: SortOrder
    TotalTaxAmount?: SortOrder
    GrossAmount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type sysdiagramsPrincipal_idNameCompoundUniqueInput = {
    principal_id: number
    name: string
  }

  export type sysdiagramsCountOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsAvgOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type sysdiagramsMaxOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsMinOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsSumOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type LogSheetCountOrderByAggregateInput = {
    LogSheetID?: SortOrder
    FormName?: SortOrder
    RefID?: SortOrder
    UserID?: SortOrder
    UserName?: SortOrder
    DateTime?: SortOrder
    Remarks?: SortOrder
  }

  export type LogSheetAvgOrderByAggregateInput = {
    LogSheetID?: SortOrder
    RefID?: SortOrder
    UserID?: SortOrder
  }

  export type LogSheetMaxOrderByAggregateInput = {
    LogSheetID?: SortOrder
    FormName?: SortOrder
    RefID?: SortOrder
    UserID?: SortOrder
    UserName?: SortOrder
    DateTime?: SortOrder
    Remarks?: SortOrder
  }

  export type LogSheetMinOrderByAggregateInput = {
    LogSheetID?: SortOrder
    FormName?: SortOrder
    RefID?: SortOrder
    UserID?: SortOrder
    UserName?: SortOrder
    DateTime?: SortOrder
    Remarks?: SortOrder
  }

  export type LogSheetSumOrderByAggregateInput = {
    LogSheetID?: SortOrder
    RefID?: SortOrder
    UserID?: SortOrder
  }

  export type FlightOpsCountOrderByAggregateInput = {
    FlightOpsID?: SortOrder
    Keyid?: SortOrder
    Image?: SortOrder
  }

  export type FlightOpsAvgOrderByAggregateInput = {
    FlightOpsID?: SortOrder
    Keyid?: SortOrder
  }

  export type FlightOpsMaxOrderByAggregateInput = {
    FlightOpsID?: SortOrder
    Keyid?: SortOrder
    Image?: SortOrder
  }

  export type FlightOpsMinOrderByAggregateInput = {
    FlightOpsID?: SortOrder
    Keyid?: SortOrder
    Image?: SortOrder
  }

  export type FlightOpsSumOrderByAggregateInput = {
    FlightOpsID?: SortOrder
    Keyid?: SortOrder
  }

  export type TallyVoucherSyncLogListRelationFilter = {
    every?: TallyVoucherSyncLogWhereInput
    some?: TallyVoucherSyncLogWhereInput
    none?: TallyVoucherSyncLogWhereInput
  }

  export type TallyVoucherSyncLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TallyUsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
  }

  export type TallyUsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TallyUsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
  }

  export type TallyUsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
  }

  export type TallyUsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TallyUsersNullableScalarRelationFilter = {
    is?: TallyUsersWhereInput | null
    isNot?: TallyUsersWhereInput | null
  }

  export type TallyVoucherSyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    region?: SortOrder
    voucher_type?: SortOrder
    submission_date?: SortOrder
    last_updated_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    start_voucher?: SortOrder
    end_voucher?: SortOrder
    created_at?: SortOrder
    last_updated_voucher_number?: SortOrder
  }

  export type TallyVoucherSyncLogAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    start_voucher?: SortOrder
    end_voucher?: SortOrder
    last_updated_voucher_number?: SortOrder
  }

  export type TallyVoucherSyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    region?: SortOrder
    voucher_type?: SortOrder
    submission_date?: SortOrder
    last_updated_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    start_voucher?: SortOrder
    end_voucher?: SortOrder
    created_at?: SortOrder
    last_updated_voucher_number?: SortOrder
  }

  export type TallyVoucherSyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    region?: SortOrder
    voucher_type?: SortOrder
    submission_date?: SortOrder
    last_updated_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    start_voucher?: SortOrder
    end_voucher?: SortOrder
    created_at?: SortOrder
    last_updated_voucher_number?: SortOrder
  }

  export type TallyVoucherSyncLogSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    start_voucher?: SortOrder
    end_voucher?: SortOrder
    last_updated_voucher_number?: SortOrder
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type TallyVoucherSyncLogCreateNestedManyWithoutTallyUsersInput = {
    create?: XOR<TallyVoucherSyncLogCreateWithoutTallyUsersInput, TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput> | TallyVoucherSyncLogCreateWithoutTallyUsersInput[] | TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput[]
    connectOrCreate?: TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput | TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput[]
    createMany?: TallyVoucherSyncLogCreateManyTallyUsersInputEnvelope
    connect?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
  }

  export type TallyVoucherSyncLogUncheckedCreateNestedManyWithoutTallyUsersInput = {
    create?: XOR<TallyVoucherSyncLogCreateWithoutTallyUsersInput, TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput> | TallyVoucherSyncLogCreateWithoutTallyUsersInput[] | TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput[]
    connectOrCreate?: TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput | TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput[]
    createMany?: TallyVoucherSyncLogCreateManyTallyUsersInputEnvelope
    connect?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
  }

  export type TallyVoucherSyncLogUpdateManyWithoutTallyUsersNestedInput = {
    create?: XOR<TallyVoucherSyncLogCreateWithoutTallyUsersInput, TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput> | TallyVoucherSyncLogCreateWithoutTallyUsersInput[] | TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput[]
    connectOrCreate?: TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput | TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput[]
    upsert?: TallyVoucherSyncLogUpsertWithWhereUniqueWithoutTallyUsersInput | TallyVoucherSyncLogUpsertWithWhereUniqueWithoutTallyUsersInput[]
    createMany?: TallyVoucherSyncLogCreateManyTallyUsersInputEnvelope
    set?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
    disconnect?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
    delete?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
    connect?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
    update?: TallyVoucherSyncLogUpdateWithWhereUniqueWithoutTallyUsersInput | TallyVoucherSyncLogUpdateWithWhereUniqueWithoutTallyUsersInput[]
    updateMany?: TallyVoucherSyncLogUpdateManyWithWhereWithoutTallyUsersInput | TallyVoucherSyncLogUpdateManyWithWhereWithoutTallyUsersInput[]
    deleteMany?: TallyVoucherSyncLogScalarWhereInput | TallyVoucherSyncLogScalarWhereInput[]
  }

  export type TallyVoucherSyncLogUncheckedUpdateManyWithoutTallyUsersNestedInput = {
    create?: XOR<TallyVoucherSyncLogCreateWithoutTallyUsersInput, TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput> | TallyVoucherSyncLogCreateWithoutTallyUsersInput[] | TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput[]
    connectOrCreate?: TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput | TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput[]
    upsert?: TallyVoucherSyncLogUpsertWithWhereUniqueWithoutTallyUsersInput | TallyVoucherSyncLogUpsertWithWhereUniqueWithoutTallyUsersInput[]
    createMany?: TallyVoucherSyncLogCreateManyTallyUsersInputEnvelope
    set?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
    disconnect?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
    delete?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
    connect?: TallyVoucherSyncLogWhereUniqueInput | TallyVoucherSyncLogWhereUniqueInput[]
    update?: TallyVoucherSyncLogUpdateWithWhereUniqueWithoutTallyUsersInput | TallyVoucherSyncLogUpdateWithWhereUniqueWithoutTallyUsersInput[]
    updateMany?: TallyVoucherSyncLogUpdateManyWithWhereWithoutTallyUsersInput | TallyVoucherSyncLogUpdateManyWithWhereWithoutTallyUsersInput[]
    deleteMany?: TallyVoucherSyncLogScalarWhereInput | TallyVoucherSyncLogScalarWhereInput[]
  }

  export type TallyUsersCreateNestedOneWithoutTallyVoucherSyncLogInput = {
    create?: XOR<TallyUsersCreateWithoutTallyVoucherSyncLogInput, TallyUsersUncheckedCreateWithoutTallyVoucherSyncLogInput>
    connectOrCreate?: TallyUsersCreateOrConnectWithoutTallyVoucherSyncLogInput
    connect?: TallyUsersWhereUniqueInput
  }

  export type TallyUsersUpdateOneWithoutTallyVoucherSyncLogNestedInput = {
    create?: XOR<TallyUsersCreateWithoutTallyVoucherSyncLogInput, TallyUsersUncheckedCreateWithoutTallyVoucherSyncLogInput>
    connectOrCreate?: TallyUsersCreateOrConnectWithoutTallyVoucherSyncLogInput
    upsert?: TallyUsersUpsertWithoutTallyVoucherSyncLogInput
    disconnect?: TallyUsersWhereInput | boolean
    delete?: TallyUsersWhereInput | boolean
    connect?: TallyUsersWhereUniqueInput
    update?: XOR<XOR<TallyUsersUpdateToOneWithWhereWithoutTallyVoucherSyncLogInput, TallyUsersUpdateWithoutTallyVoucherSyncLogInput>, TallyUsersUncheckedUpdateWithoutTallyVoucherSyncLogInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type TallyVoucherSyncLogCreateWithoutTallyUsersInput = {
    region: string
    voucher_type: string
    submission_date: Date | string
    last_updated_date?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    start_voucher?: number | null
    end_voucher?: number | null
    created_at?: Date | string | null
    last_updated_voucher_number?: number | null
  }

  export type TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput = {
    id?: number
    region: string
    voucher_type: string
    submission_date: Date | string
    last_updated_date?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    start_voucher?: number | null
    end_voucher?: number | null
    created_at?: Date | string | null
    last_updated_voucher_number?: number | null
  }

  export type TallyVoucherSyncLogCreateOrConnectWithoutTallyUsersInput = {
    where: TallyVoucherSyncLogWhereUniqueInput
    create: XOR<TallyVoucherSyncLogCreateWithoutTallyUsersInput, TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput>
  }

  export type TallyVoucherSyncLogCreateManyTallyUsersInputEnvelope = {
    data: TallyVoucherSyncLogCreateManyTallyUsersInput | TallyVoucherSyncLogCreateManyTallyUsersInput[]
  }

  export type TallyVoucherSyncLogUpsertWithWhereUniqueWithoutTallyUsersInput = {
    where: TallyVoucherSyncLogWhereUniqueInput
    update: XOR<TallyVoucherSyncLogUpdateWithoutTallyUsersInput, TallyVoucherSyncLogUncheckedUpdateWithoutTallyUsersInput>
    create: XOR<TallyVoucherSyncLogCreateWithoutTallyUsersInput, TallyVoucherSyncLogUncheckedCreateWithoutTallyUsersInput>
  }

  export type TallyVoucherSyncLogUpdateWithWhereUniqueWithoutTallyUsersInput = {
    where: TallyVoucherSyncLogWhereUniqueInput
    data: XOR<TallyVoucherSyncLogUpdateWithoutTallyUsersInput, TallyVoucherSyncLogUncheckedUpdateWithoutTallyUsersInput>
  }

  export type TallyVoucherSyncLogUpdateManyWithWhereWithoutTallyUsersInput = {
    where: TallyVoucherSyncLogScalarWhereInput
    data: XOR<TallyVoucherSyncLogUpdateManyMutationInput, TallyVoucherSyncLogUncheckedUpdateManyWithoutTallyUsersInput>
  }

  export type TallyVoucherSyncLogScalarWhereInput = {
    AND?: TallyVoucherSyncLogScalarWhereInput | TallyVoucherSyncLogScalarWhereInput[]
    OR?: TallyVoucherSyncLogScalarWhereInput[]
    NOT?: TallyVoucherSyncLogScalarWhereInput | TallyVoucherSyncLogScalarWhereInput[]
    id?: IntFilter<"TallyVoucherSyncLog"> | number
    user_id?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    region?: StringFilter<"TallyVoucherSyncLog"> | string
    voucher_type?: StringFilter<"TallyVoucherSyncLog"> | string
    submission_date?: DateTimeFilter<"TallyVoucherSyncLog"> | Date | string
    last_updated_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    start_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    end_date?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    start_voucher?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    end_voucher?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
    created_at?: DateTimeNullableFilter<"TallyVoucherSyncLog"> | Date | string | null
    last_updated_voucher_number?: IntNullableFilter<"TallyVoucherSyncLog"> | number | null
  }

  export type TallyUsersCreateWithoutTallyVoucherSyncLogInput = {
    username: string
    password: string
    region: string
    created_at?: Date | string | null
  }

  export type TallyUsersUncheckedCreateWithoutTallyVoucherSyncLogInput = {
    id?: number
    username: string
    password: string
    region: string
    created_at?: Date | string | null
  }

  export type TallyUsersCreateOrConnectWithoutTallyVoucherSyncLogInput = {
    where: TallyUsersWhereUniqueInput
    create: XOR<TallyUsersCreateWithoutTallyVoucherSyncLogInput, TallyUsersUncheckedCreateWithoutTallyVoucherSyncLogInput>
  }

  export type TallyUsersUpsertWithoutTallyVoucherSyncLogInput = {
    update: XOR<TallyUsersUpdateWithoutTallyVoucherSyncLogInput, TallyUsersUncheckedUpdateWithoutTallyVoucherSyncLogInput>
    create: XOR<TallyUsersCreateWithoutTallyVoucherSyncLogInput, TallyUsersUncheckedCreateWithoutTallyVoucherSyncLogInput>
    where?: TallyUsersWhereInput
  }

  export type TallyUsersUpdateToOneWithWhereWithoutTallyVoucherSyncLogInput = {
    where?: TallyUsersWhereInput
    data: XOR<TallyUsersUpdateWithoutTallyVoucherSyncLogInput, TallyUsersUncheckedUpdateWithoutTallyVoucherSyncLogInput>
  }

  export type TallyUsersUpdateWithoutTallyVoucherSyncLogInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TallyUsersUncheckedUpdateWithoutTallyVoucherSyncLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TallyVoucherSyncLogCreateManyTallyUsersInput = {
    region: string
    voucher_type: string
    submission_date: Date | string
    last_updated_date?: Date | string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    start_voucher?: number | null
    end_voucher?: number | null
    created_at?: Date | string | null
    last_updated_voucher_number?: number | null
  }

  export type TallyVoucherSyncLogUpdateWithoutTallyUsersInput = {
    region?: StringFieldUpdateOperationsInput | string
    voucher_type?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    end_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_voucher_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TallyVoucherSyncLogUncheckedUpdateWithoutTallyUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    voucher_type?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    end_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_voucher_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TallyVoucherSyncLogUncheckedUpdateManyWithoutTallyUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    voucher_type?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    end_voucher?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_voucher_number?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}