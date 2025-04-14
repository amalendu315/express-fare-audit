
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
 * Model EFMigrationsHistory
 * 
 */
export type EFMigrationsHistory = $Result.DefaultSelection<Prisma.$EFMigrationsHistoryPayload>
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
   * `prisma.eFMigrationsHistory`: Exposes CRUD operations for the **EFMigrationsHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EFMigrationsHistories
    * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany()
    * ```
    */
  get eFMigrationsHistory(): Prisma.EFMigrationsHistoryDelegate<ExtArgs, ClientOptions>;

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
    EFMigrationsHistory: 'EFMigrationsHistory',
    Flights: 'Flights',
    sysdiagrams: 'sysdiagrams'
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
      modelProps: "fareAudit" | "eFMigrationsHistory" | "flights" | "sysdiagrams"
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
      EFMigrationsHistory: {
        payload: Prisma.$EFMigrationsHistoryPayload<ExtArgs>
        fields: Prisma.EFMigrationsHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EFMigrationsHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          findFirst: {
            args: Prisma.EFMigrationsHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          findMany: {
            args: Prisma.EFMigrationsHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[]
          }
          create: {
            args: Prisma.EFMigrationsHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          createMany: {
            args: Prisma.EFMigrationsHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EFMigrationsHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          update: {
            args: Prisma.EFMigrationsHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          deleteMany: {
            args: Prisma.EFMigrationsHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EFMigrationsHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EFMigrationsHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          aggregate: {
            args: Prisma.EFMigrationsHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEFMigrationsHistory>
          }
          groupBy: {
            args: Prisma.EFMigrationsHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EFMigrationsHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EFMigrationsHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<EFMigrationsHistoryCountAggregateOutputType> | number
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
    eFMigrationsHistory?: EFMigrationsHistoryOmit
    flights?: FlightsOmit
    sysdiagrams?: sysdiagramsOmit
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
  }

  export type FareAuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "ticketId" | "fareLogId" | "logType" | "source" | "requestDateTime" | "pnr" | "flightSector" | "flightNumber" | "travelDateTime" | "fsSameFlightFare" | "fsLowestFlightFare" | "fsAvailableStock" | "fsErrorMessage" | "fsAverageFare" | "aoSameFlightFare" | "aoLowestFare" | "aoAverageFare" | "aoErrorMessage" | "flightWiseTotalSeatsPurchased" | "flightWiseTotalSeatsSold" | "flightWiseTotalSeatsLeft" | "flightWiseAverageCost" | "routeWiseSeatsPurchased" | "routeWiseSeatsSold" | "routeWiseSeatsLeft" | "routeWiseAverageCost" | "averageSellFare" | "status" | "remark" | "taskCompletedDateTime", ExtArgs["result"]["fareAudit"]>

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
   * Model EFMigrationsHistory
   */

  export type AggregateEFMigrationsHistory = {
    _count: EFMigrationsHistoryCountAggregateOutputType | null
    _min: EFMigrationsHistoryMinAggregateOutputType | null
    _max: EFMigrationsHistoryMaxAggregateOutputType | null
  }

  export type EFMigrationsHistoryMinAggregateOutputType = {
    MigrationId: string | null
    ProductVersion: string | null
  }

  export type EFMigrationsHistoryMaxAggregateOutputType = {
    MigrationId: string | null
    ProductVersion: string | null
  }

  export type EFMigrationsHistoryCountAggregateOutputType = {
    MigrationId: number
    ProductVersion: number
    _all: number
  }


  export type EFMigrationsHistoryMinAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
  }

  export type EFMigrationsHistoryMaxAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
  }

  export type EFMigrationsHistoryCountAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
    _all?: true
  }

  export type EFMigrationsHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EFMigrationsHistory to aggregate.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EFMigrationsHistories
    **/
    _count?: true | EFMigrationsHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EFMigrationsHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EFMigrationsHistoryMaxAggregateInputType
  }

  export type GetEFMigrationsHistoryAggregateType<T extends EFMigrationsHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEFMigrationsHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEFMigrationsHistory[P]>
      : GetScalarType<T[P], AggregateEFMigrationsHistory[P]>
  }




  export type EFMigrationsHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EFMigrationsHistoryWhereInput
    orderBy?: EFMigrationsHistoryOrderByWithAggregationInput | EFMigrationsHistoryOrderByWithAggregationInput[]
    by: EFMigrationsHistoryScalarFieldEnum[] | EFMigrationsHistoryScalarFieldEnum
    having?: EFMigrationsHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EFMigrationsHistoryCountAggregateInputType | true
    _min?: EFMigrationsHistoryMinAggregateInputType
    _max?: EFMigrationsHistoryMaxAggregateInputType
  }

  export type EFMigrationsHistoryGroupByOutputType = {
    MigrationId: string
    ProductVersion: string
    _count: EFMigrationsHistoryCountAggregateOutputType | null
    _min: EFMigrationsHistoryMinAggregateOutputType | null
    _max: EFMigrationsHistoryMaxAggregateOutputType | null
  }

  type GetEFMigrationsHistoryGroupByPayload<T extends EFMigrationsHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EFMigrationsHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EFMigrationsHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EFMigrationsHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], EFMigrationsHistoryGroupByOutputType[P]>
        }
      >
    >


  export type EFMigrationsHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MigrationId?: boolean
    ProductVersion?: boolean
  }, ExtArgs["result"]["eFMigrationsHistory"]>



  export type EFMigrationsHistorySelectScalar = {
    MigrationId?: boolean
    ProductVersion?: boolean
  }

  export type EFMigrationsHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MigrationId" | "ProductVersion", ExtArgs["result"]["eFMigrationsHistory"]>

  export type $EFMigrationsHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EFMigrationsHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      MigrationId: string
      ProductVersion: string
    }, ExtArgs["result"]["eFMigrationsHistory"]>
    composites: {}
  }

  type EFMigrationsHistoryGetPayload<S extends boolean | null | undefined | EFMigrationsHistoryDefaultArgs> = $Result.GetResult<Prisma.$EFMigrationsHistoryPayload, S>

  type EFMigrationsHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EFMigrationsHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EFMigrationsHistoryCountAggregateInputType | true
    }

  export interface EFMigrationsHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EFMigrationsHistory'], meta: { name: 'EFMigrationsHistory' } }
    /**
     * Find zero or one EFMigrationsHistory that matches the filter.
     * @param {EFMigrationsHistoryFindUniqueArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EFMigrationsHistoryFindUniqueArgs>(args: SelectSubset<T, EFMigrationsHistoryFindUniqueArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EFMigrationsHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EFMigrationsHistoryFindUniqueOrThrowArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EFMigrationsHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EFMigrationsHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindFirstArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EFMigrationsHistoryFindFirstArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindFirstArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EFMigrationsHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindFirstOrThrowArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EFMigrationsHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EFMigrationsHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EFMigrationsHistories
     * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany()
     * 
     * // Get first 10 EFMigrationsHistories
     * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany({ take: 10 })
     * 
     * // Only select the `MigrationId`
     * const eFMigrationsHistoryWithMigrationIdOnly = await prisma.eFMigrationsHistory.findMany({ select: { MigrationId: true } })
     * 
     */
    findMany<T extends EFMigrationsHistoryFindManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EFMigrationsHistory.
     * @param {EFMigrationsHistoryCreateArgs} args - Arguments to create a EFMigrationsHistory.
     * @example
     * // Create one EFMigrationsHistory
     * const EFMigrationsHistory = await prisma.eFMigrationsHistory.create({
     *   data: {
     *     // ... data to create a EFMigrationsHistory
     *   }
     * })
     * 
     */
    create<T extends EFMigrationsHistoryCreateArgs>(args: SelectSubset<T, EFMigrationsHistoryCreateArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EFMigrationsHistories.
     * @param {EFMigrationsHistoryCreateManyArgs} args - Arguments to create many EFMigrationsHistories.
     * @example
     * // Create many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EFMigrationsHistoryCreateManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EFMigrationsHistory.
     * @param {EFMigrationsHistoryDeleteArgs} args - Arguments to delete one EFMigrationsHistory.
     * @example
     * // Delete one EFMigrationsHistory
     * const EFMigrationsHistory = await prisma.eFMigrationsHistory.delete({
     *   where: {
     *     // ... filter to delete one EFMigrationsHistory
     *   }
     * })
     * 
     */
    delete<T extends EFMigrationsHistoryDeleteArgs>(args: SelectSubset<T, EFMigrationsHistoryDeleteArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EFMigrationsHistory.
     * @param {EFMigrationsHistoryUpdateArgs} args - Arguments to update one EFMigrationsHistory.
     * @example
     * // Update one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EFMigrationsHistoryUpdateArgs>(args: SelectSubset<T, EFMigrationsHistoryUpdateArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EFMigrationsHistories.
     * @param {EFMigrationsHistoryDeleteManyArgs} args - Arguments to filter EFMigrationsHistories to delete.
     * @example
     * // Delete a few EFMigrationsHistories
     * const { count } = await prisma.eFMigrationsHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EFMigrationsHistoryDeleteManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EFMigrationsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EFMigrationsHistoryUpdateManyArgs>(args: SelectSubset<T, EFMigrationsHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EFMigrationsHistory.
     * @param {EFMigrationsHistoryUpsertArgs} args - Arguments to update or create a EFMigrationsHistory.
     * @example
     * // Update or create a EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.upsert({
     *   create: {
     *     // ... data to create a EFMigrationsHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EFMigrationsHistory we want to update
     *   }
     * })
     */
    upsert<T extends EFMigrationsHistoryUpsertArgs>(args: SelectSubset<T, EFMigrationsHistoryUpsertArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EFMigrationsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryCountArgs} args - Arguments to filter EFMigrationsHistories to count.
     * @example
     * // Count the number of EFMigrationsHistories
     * const count = await prisma.eFMigrationsHistory.count({
     *   where: {
     *     // ... the filter for the EFMigrationsHistories we want to count
     *   }
     * })
    **/
    count<T extends EFMigrationsHistoryCountArgs>(
      args?: Subset<T, EFMigrationsHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EFMigrationsHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EFMigrationsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EFMigrationsHistoryAggregateArgs>(args: Subset<T, EFMigrationsHistoryAggregateArgs>): Prisma.PrismaPromise<GetEFMigrationsHistoryAggregateType<T>>

    /**
     * Group by EFMigrationsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryGroupByArgs} args - Group by arguments.
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
      T extends EFMigrationsHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EFMigrationsHistoryGroupByArgs['orderBy'] }
        : { orderBy?: EFMigrationsHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EFMigrationsHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEFMigrationsHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EFMigrationsHistory model
   */
  readonly fields: EFMigrationsHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EFMigrationsHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EFMigrationsHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EFMigrationsHistory model
   */
  interface EFMigrationsHistoryFieldRefs {
    readonly MigrationId: FieldRef<"EFMigrationsHistory", 'String'>
    readonly ProductVersion: FieldRef<"EFMigrationsHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EFMigrationsHistory findUnique
   */
  export type EFMigrationsHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory findUniqueOrThrow
   */
  export type EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory findFirst
   */
  export type EFMigrationsHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EFMigrationsHistories.
     */
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory findFirstOrThrow
   */
  export type EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EFMigrationsHistories.
     */
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory findMany
   */
  export type EFMigrationsHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistories to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory create
   */
  export type EFMigrationsHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a EFMigrationsHistory.
     */
    data: XOR<EFMigrationsHistoryCreateInput, EFMigrationsHistoryUncheckedCreateInput>
  }

  /**
   * EFMigrationsHistory createMany
   */
  export type EFMigrationsHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EFMigrationsHistories.
     */
    data: EFMigrationsHistoryCreateManyInput | EFMigrationsHistoryCreateManyInput[]
  }

  /**
   * EFMigrationsHistory update
   */
  export type EFMigrationsHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a EFMigrationsHistory.
     */
    data: XOR<EFMigrationsHistoryUpdateInput, EFMigrationsHistoryUncheckedUpdateInput>
    /**
     * Choose, which EFMigrationsHistory to update.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory updateMany
   */
  export type EFMigrationsHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EFMigrationsHistories.
     */
    data: XOR<EFMigrationsHistoryUpdateManyMutationInput, EFMigrationsHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EFMigrationsHistories to update
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * Limit how many EFMigrationsHistories to update.
     */
    limit?: number
  }

  /**
   * EFMigrationsHistory upsert
   */
  export type EFMigrationsHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the EFMigrationsHistory to update in case it exists.
     */
    where: EFMigrationsHistoryWhereUniqueInput
    /**
     * In case the EFMigrationsHistory found by the `where` argument doesn't exist, create a new EFMigrationsHistory with this data.
     */
    create: XOR<EFMigrationsHistoryCreateInput, EFMigrationsHistoryUncheckedCreateInput>
    /**
     * In case the EFMigrationsHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EFMigrationsHistoryUpdateInput, EFMigrationsHistoryUncheckedUpdateInput>
  }

  /**
   * EFMigrationsHistory delete
   */
  export type EFMigrationsHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
    /**
     * Filter which EFMigrationsHistory to delete.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory deleteMany
   */
  export type EFMigrationsHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EFMigrationsHistories to delete
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * Limit how many EFMigrationsHistories to delete.
     */
    limit?: number
  }

  /**
   * EFMigrationsHistory without action
   */
  export type EFMigrationsHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EFMigrationsHistory
     */
    omit?: EFMigrationsHistoryOmit<ExtArgs> | null
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
    taskCompletedDateTime: 'taskCompletedDateTime'
  };

  export type FareAuditScalarFieldEnum = (typeof FareAuditScalarFieldEnum)[keyof typeof FareAuditScalarFieldEnum]


  export const EFMigrationsHistoryScalarFieldEnum: {
    MigrationId: 'MigrationId',
    ProductVersion: 'ProductVersion'
  };

  export type EFMigrationsHistoryScalarFieldEnum = (typeof EFMigrationsHistoryScalarFieldEnum)[keyof typeof EFMigrationsHistoryScalarFieldEnum]


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
  }

  export type EFMigrationsHistoryWhereInput = {
    AND?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    OR?: EFMigrationsHistoryWhereInput[]
    NOT?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    MigrationId?: StringFilter<"EFMigrationsHistory"> | string
    ProductVersion?: StringFilter<"EFMigrationsHistory"> | string
  }

  export type EFMigrationsHistoryOrderByWithRelationInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryWhereUniqueInput = Prisma.AtLeast<{
    MigrationId?: string
    AND?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    OR?: EFMigrationsHistoryWhereInput[]
    NOT?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    ProductVersion?: StringFilter<"EFMigrationsHistory"> | string
  }, "MigrationId">

  export type EFMigrationsHistoryOrderByWithAggregationInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
    _count?: EFMigrationsHistoryCountOrderByAggregateInput
    _max?: EFMigrationsHistoryMaxOrderByAggregateInput
    _min?: EFMigrationsHistoryMinOrderByAggregateInput
  }

  export type EFMigrationsHistoryScalarWhereWithAggregatesInput = {
    AND?: EFMigrationsHistoryScalarWhereWithAggregatesInput | EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    OR?: EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    NOT?: EFMigrationsHistoryScalarWhereWithAggregatesInput | EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    MigrationId?: StringWithAggregatesFilter<"EFMigrationsHistory"> | string
    ProductVersion?: StringWithAggregatesFilter<"EFMigrationsHistory"> | string
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
  }

  export type EFMigrationsHistoryCreateInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUncheckedCreateInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUpdateInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryUncheckedUpdateInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryCreateManyInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUpdateManyMutationInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryUncheckedUpdateManyInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
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

  export type EFMigrationsHistoryCountOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryMaxOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryMinOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
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

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
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