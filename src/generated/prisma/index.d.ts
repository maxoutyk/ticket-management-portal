
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model ContactPerson
 * 
 */
export type ContactPerson = $Result.DefaultSelection<Prisma.$ContactPersonPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model AppSetting
 * 
 */
export type AppSetting = $Result.DefaultSelection<Prisma.$AppSettingPayload>
/**
 * Model TicketCounter
 * 
 */
export type TicketCounter = $Result.DefaultSelection<Prisma.$TicketCounterPayload>
/**
 * Model SlaPolicy
 * 
 */
export type SlaPolicy = $Result.DefaultSelection<Prisma.$SlaPolicyPayload>
/**
 * Model SlaPriorityMultiplier
 * 
 */
export type SlaPriorityMultiplier = $Result.DefaultSelection<Prisma.$SlaPriorityMultiplierPayload>
/**
 * Model SlaBusinessHours
 * 
 */
export type SlaBusinessHours = $Result.DefaultSelection<Prisma.$SlaBusinessHoursPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactPerson`: Exposes CRUD operations for the **ContactPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactPeople
    * const contactPeople = await prisma.contactPerson.findMany()
    * ```
    */
  get contactPerson(): Prisma.ContactPersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appSetting`: Exposes CRUD operations for the **AppSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSettings
    * const appSettings = await prisma.appSetting.findMany()
    * ```
    */
  get appSetting(): Prisma.AppSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketCounter`: Exposes CRUD operations for the **TicketCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketCounters
    * const ticketCounters = await prisma.ticketCounter.findMany()
    * ```
    */
  get ticketCounter(): Prisma.TicketCounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slaPolicy`: Exposes CRUD operations for the **SlaPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlaPolicies
    * const slaPolicies = await prisma.slaPolicy.findMany()
    * ```
    */
  get slaPolicy(): Prisma.SlaPolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slaPriorityMultiplier`: Exposes CRUD operations for the **SlaPriorityMultiplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlaPriorityMultipliers
    * const slaPriorityMultipliers = await prisma.slaPriorityMultiplier.findMany()
    * ```
    */
  get slaPriorityMultiplier(): Prisma.SlaPriorityMultiplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slaBusinessHours`: Exposes CRUD operations for the **SlaBusinessHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlaBusinessHours
    * const slaBusinessHours = await prisma.slaBusinessHours.findMany()
    * ```
    */
  get slaBusinessHours(): Prisma.SlaBusinessHoursDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Organization: 'Organization',
    ContactPerson: 'ContactPerson',
    Ticket: 'Ticket',
    Comment: 'Comment',
    Document: 'Document',
    AppSetting: 'AppSetting',
    TicketCounter: 'TicketCounter',
    SlaPolicy: 'SlaPolicy',
    SlaPriorityMultiplier: 'SlaPriorityMultiplier',
    SlaBusinessHours: 'SlaBusinessHours'
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
      modelProps: "user" | "organization" | "contactPerson" | "ticket" | "comment" | "document" | "appSetting" | "ticketCounter" | "slaPolicy" | "slaPriorityMultiplier" | "slaBusinessHours"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      ContactPerson: {
        payload: Prisma.$ContactPersonPayload<ExtArgs>
        fields: Prisma.ContactPersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactPersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactPersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          findFirst: {
            args: Prisma.ContactPersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactPersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          findMany: {
            args: Prisma.ContactPersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          create: {
            args: Prisma.ContactPersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          createMany: {
            args: Prisma.ContactPersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactPersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          delete: {
            args: Prisma.ContactPersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          update: {
            args: Prisma.ContactPersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          deleteMany: {
            args: Prisma.ContactPersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactPersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactPersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          upsert: {
            args: Prisma.ContactPersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          aggregate: {
            args: Prisma.ContactPersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactPerson>
          }
          groupBy: {
            args: Prisma.ContactPersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactPersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactPersonCountArgs<ExtArgs>
            result: $Utils.Optional<ContactPersonCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      AppSetting: {
        payload: Prisma.$AppSettingPayload<ExtArgs>
        fields: Prisma.AppSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findFirst: {
            args: Prisma.AppSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findMany: {
            args: Prisma.AppSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          create: {
            args: Prisma.AppSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          createMany: {
            args: Prisma.AppSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          delete: {
            args: Prisma.AppSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          update: {
            args: Prisma.AppSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          deleteMany: {
            args: Prisma.AppSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          upsert: {
            args: Prisma.AppSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          aggregate: {
            args: Prisma.AppSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSetting>
          }
          groupBy: {
            args: Prisma.AppSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSettingCountArgs<ExtArgs>
            result: $Utils.Optional<AppSettingCountAggregateOutputType> | number
          }
        }
      }
      TicketCounter: {
        payload: Prisma.$TicketCounterPayload<ExtArgs>
        fields: Prisma.TicketCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>
          }
          findFirst: {
            args: Prisma.TicketCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>
          }
          findMany: {
            args: Prisma.TicketCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>[]
          }
          create: {
            args: Prisma.TicketCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>
          }
          createMany: {
            args: Prisma.TicketCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>[]
          }
          delete: {
            args: Prisma.TicketCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>
          }
          update: {
            args: Prisma.TicketCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>
          }
          deleteMany: {
            args: Prisma.TicketCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketCounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>[]
          }
          upsert: {
            args: Prisma.TicketCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCounterPayload>
          }
          aggregate: {
            args: Prisma.TicketCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketCounter>
          }
          groupBy: {
            args: Prisma.TicketCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCounterCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCounterCountAggregateOutputType> | number
          }
        }
      }
      SlaPolicy: {
        payload: Prisma.$SlaPolicyPayload<ExtArgs>
        fields: Prisma.SlaPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlaPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlaPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          findFirst: {
            args: Prisma.SlaPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlaPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          findMany: {
            args: Prisma.SlaPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>[]
          }
          create: {
            args: Prisma.SlaPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          createMany: {
            args: Prisma.SlaPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlaPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>[]
          }
          delete: {
            args: Prisma.SlaPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          update: {
            args: Prisma.SlaPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          deleteMany: {
            args: Prisma.SlaPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlaPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlaPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>[]
          }
          upsert: {
            args: Prisma.SlaPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPolicyPayload>
          }
          aggregate: {
            args: Prisma.SlaPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlaPolicy>
          }
          groupBy: {
            args: Prisma.SlaPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlaPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlaPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<SlaPolicyCountAggregateOutputType> | number
          }
        }
      }
      SlaPriorityMultiplier: {
        payload: Prisma.$SlaPriorityMultiplierPayload<ExtArgs>
        fields: Prisma.SlaPriorityMultiplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlaPriorityMultiplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlaPriorityMultiplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>
          }
          findFirst: {
            args: Prisma.SlaPriorityMultiplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlaPriorityMultiplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>
          }
          findMany: {
            args: Prisma.SlaPriorityMultiplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>[]
          }
          create: {
            args: Prisma.SlaPriorityMultiplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>
          }
          createMany: {
            args: Prisma.SlaPriorityMultiplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlaPriorityMultiplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>[]
          }
          delete: {
            args: Prisma.SlaPriorityMultiplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>
          }
          update: {
            args: Prisma.SlaPriorityMultiplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>
          }
          deleteMany: {
            args: Prisma.SlaPriorityMultiplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlaPriorityMultiplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlaPriorityMultiplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>[]
          }
          upsert: {
            args: Prisma.SlaPriorityMultiplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaPriorityMultiplierPayload>
          }
          aggregate: {
            args: Prisma.SlaPriorityMultiplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlaPriorityMultiplier>
          }
          groupBy: {
            args: Prisma.SlaPriorityMultiplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlaPriorityMultiplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlaPriorityMultiplierCountArgs<ExtArgs>
            result: $Utils.Optional<SlaPriorityMultiplierCountAggregateOutputType> | number
          }
        }
      }
      SlaBusinessHours: {
        payload: Prisma.$SlaBusinessHoursPayload<ExtArgs>
        fields: Prisma.SlaBusinessHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlaBusinessHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlaBusinessHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>
          }
          findFirst: {
            args: Prisma.SlaBusinessHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlaBusinessHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>
          }
          findMany: {
            args: Prisma.SlaBusinessHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>[]
          }
          create: {
            args: Prisma.SlaBusinessHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>
          }
          createMany: {
            args: Prisma.SlaBusinessHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlaBusinessHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>[]
          }
          delete: {
            args: Prisma.SlaBusinessHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>
          }
          update: {
            args: Prisma.SlaBusinessHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>
          }
          deleteMany: {
            args: Prisma.SlaBusinessHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlaBusinessHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlaBusinessHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>[]
          }
          upsert: {
            args: Prisma.SlaBusinessHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlaBusinessHoursPayload>
          }
          aggregate: {
            args: Prisma.SlaBusinessHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlaBusinessHours>
          }
          groupBy: {
            args: Prisma.SlaBusinessHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlaBusinessHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlaBusinessHoursCountArgs<ExtArgs>
            result: $Utils.Optional<SlaBusinessHoursCountAggregateOutputType> | number
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
    user?: UserOmit
    organization?: OrganizationOmit
    contactPerson?: ContactPersonOmit
    ticket?: TicketOmit
    comment?: CommentOmit
    document?: DocumentOmit
    appSetting?: AppSettingOmit
    ticketCounter?: TicketCounterOmit
    slaPolicy?: SlaPolicyOmit
    slaPriorityMultiplier?: SlaPriorityMultiplierOmit
    slaBusinessHours?: SlaBusinessHoursOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    approvedUsers: number
    comments: number
    assignedTickets: number
    tickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedUsers?: boolean | UserCountOutputTypeCountApprovedUsersArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    assignedTickets?: boolean | UserCountOutputTypeCountAssignedTicketsArgs
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    contactPersons: number
    users: number
    slaPolicies: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPersons?: boolean | OrganizationCountOutputTypeCountContactPersonsArgs
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    slaPolicies?: boolean | OrganizationCountOutputTypeCountSlaPoliciesArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountContactPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPersonWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSlaPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlaPolicyWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    comments: number
    attachments: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TicketCountOutputTypeCountCommentsArgs
    attachments?: boolean | TicketCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    attachments: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | CommentCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type SlaPolicyCountOutputType
   */

  export type SlaPolicyCountOutputType = {
    tickets: number
  }

  export type SlaPolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | SlaPolicyCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * SlaPolicyCountOutputType without action
   */
  export type SlaPolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicyCountOutputType
     */
    select?: SlaPolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SlaPolicyCountOutputType without action
   */
  export type SlaPolicyCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
    otp: string | null
    otpExpiry: Date | null
    otpVerifiedAt: Date | null
    twoFactorEnabled: boolean | null
    isApproved: boolean | null
    approvedAt: Date | null
    approvedBy: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
    otp: string | null
    otpExpiry: Date | null
    otpVerifiedAt: Date | null
    twoFactorEnabled: boolean | null
    isApproved: boolean | null
    approvedAt: Date | null
    approvedBy: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    organizationId: number
    otp: number
    otpExpiry: number
    otpVerifiedAt: number
    twoFactorEnabled: number
    isApproved: number
    approvedAt: number
    approvedBy: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    otp?: true
    otpExpiry?: true
    otpVerifiedAt?: true
    twoFactorEnabled?: true
    isApproved?: true
    approvedAt?: true
    approvedBy?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    otp?: true
    otpExpiry?: true
    otpVerifiedAt?: true
    twoFactorEnabled?: true
    isApproved?: true
    approvedAt?: true
    approvedBy?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    otp?: true
    otpExpiry?: true
    otpVerifiedAt?: true
    twoFactorEnabled?: true
    isApproved?: true
    approvedAt?: true
    approvedBy?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    organizationId: string | null
    otp: string | null
    otpExpiry: Date | null
    otpVerifiedAt: Date | null
    twoFactorEnabled: boolean
    isApproved: boolean
    approvedAt: Date | null
    approvedBy: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    otp?: boolean
    otpExpiry?: boolean
    otpVerifiedAt?: boolean
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
    approvedUsers?: boolean | User$approvedUsersArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    assignedTickets?: boolean | User$assignedTicketsArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    organization?: boolean | User$organizationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    otp?: boolean
    otpExpiry?: boolean
    otpVerifiedAt?: boolean
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
    organization?: boolean | User$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    otp?: boolean
    otpExpiry?: boolean
    otpVerifiedAt?: boolean
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
    organization?: boolean | User$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    otp?: boolean
    otpExpiry?: boolean
    otpVerifiedAt?: boolean
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "organizationId" | "otp" | "otpExpiry" | "otpVerifiedAt" | "twoFactorEnabled" | "isApproved" | "approvedAt" | "approvedBy", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
    approvedUsers?: boolean | User$approvedUsersArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    assignedTickets?: boolean | User$assignedTicketsArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    organization?: boolean | User$organizationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
    organization?: boolean | User$organizationArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedByUser?: boolean | User$approvedByUserArgs<ExtArgs>
    organization?: boolean | User$organizationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      approvedByUser: Prisma.$UserPayload<ExtArgs> | null
      approvedUsers: Prisma.$UserPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      assignedTickets: Prisma.$TicketPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      organizationId: string | null
      otp: string | null
      otpExpiry: Date | null
      otpVerifiedAt: Date | null
      twoFactorEnabled: boolean
      isApproved: boolean
      approvedAt: Date | null
      approvedBy: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    approvedByUser<T extends User$approvedByUserArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvedUsers<T extends User$approvedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTickets<T extends User$assignedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organization<T extends User$organizationArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiry: FieldRef<"User", 'DateTime'>
    readonly otpVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly isApproved: FieldRef<"User", 'Boolean'>
    readonly approvedAt: FieldRef<"User", 'DateTime'>
    readonly approvedBy: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.approvedByUser
   */
  export type User$approvedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.approvedUsers
   */
  export type User$approvedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.assignedTickets
   */
  export type User$assignedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.organization
   */
  export type User$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactPersons?: boolean | Organization$contactPersonsArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    slaPolicies?: boolean | Organization$slaPoliciesArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPersons?: boolean | Organization$contactPersonsArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    slaPolicies?: boolean | Organization$slaPoliciesArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      contactPersons: Prisma.$ContactPersonPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      slaPolicies: Prisma.$SlaPolicyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactPersons<T extends Organization$contactPersonsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$contactPersonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slaPolicies<T extends Organization$slaPoliciesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$slaPoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly logo: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.contactPersons
   */
  export type Organization$contactPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    where?: ContactPersonWhereInput
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    cursor?: ContactPersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.slaPolicies
   */
  export type Organization$slaPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    where?: SlaPolicyWhereInput
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    cursor?: SlaPolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlaPolicyScalarFieldEnum | SlaPolicyScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model ContactPerson
   */

  export type AggregateContactPerson = {
    _count: ContactPersonCountAggregateOutputType | null
    _min: ContactPersonMinAggregateOutputType | null
    _max: ContactPersonMaxAggregateOutputType | null
  }

  export type ContactPersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type ContactPersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type ContactPersonCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type ContactPersonMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type ContactPersonMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type ContactPersonCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type ContactPersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPerson to aggregate.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactPeople
    **/
    _count?: true | ContactPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactPersonMaxAggregateInputType
  }

  export type GetContactPersonAggregateType<T extends ContactPersonAggregateArgs> = {
        [P in keyof T & keyof AggregateContactPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactPerson[P]>
      : GetScalarType<T[P], AggregateContactPerson[P]>
  }




  export type ContactPersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPersonWhereInput
    orderBy?: ContactPersonOrderByWithAggregationInput | ContactPersonOrderByWithAggregationInput[]
    by: ContactPersonScalarFieldEnum[] | ContactPersonScalarFieldEnum
    having?: ContactPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactPersonCountAggregateInputType | true
    _min?: ContactPersonMinAggregateInputType
    _max?: ContactPersonMaxAggregateInputType
  }

  export type ContactPersonGroupByOutputType = {
    id: string
    name: string
    email: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    organizationId: string
    _count: ContactPersonCountAggregateOutputType | null
    _min: ContactPersonMinAggregateOutputType | null
    _max: ContactPersonMaxAggregateOutputType | null
  }

  type GetContactPersonGroupByPayload<T extends ContactPersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactPersonGroupByOutputType[P]>
            : GetScalarType<T[P], ContactPersonGroupByOutputType[P]>
        }
      >
    >


  export type ContactPersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type ContactPersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["contactPerson"]>
  export type ContactPersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ContactPersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ContactPersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ContactPersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactPerson"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
      organizationId: string
    }, ExtArgs["result"]["contactPerson"]>
    composites: {}
  }

  type ContactPersonGetPayload<S extends boolean | null | undefined | ContactPersonDefaultArgs> = $Result.GetResult<Prisma.$ContactPersonPayload, S>

  type ContactPersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactPersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactPersonCountAggregateInputType | true
    }

  export interface ContactPersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactPerson'], meta: { name: 'ContactPerson' } }
    /**
     * Find zero or one ContactPerson that matches the filter.
     * @param {ContactPersonFindUniqueArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactPersonFindUniqueArgs>(args: SelectSubset<T, ContactPersonFindUniqueArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactPerson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactPersonFindUniqueOrThrowArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactPersonFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactPersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindFirstArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactPersonFindFirstArgs>(args?: SelectSubset<T, ContactPersonFindFirstArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPerson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindFirstOrThrowArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactPersonFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactPersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactPeople
     * const contactPeople = await prisma.contactPerson.findMany()
     * 
     * // Get first 10 ContactPeople
     * const contactPeople = await prisma.contactPerson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactPersonFindManyArgs>(args?: SelectSubset<T, ContactPersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactPerson.
     * @param {ContactPersonCreateArgs} args - Arguments to create a ContactPerson.
     * @example
     * // Create one ContactPerson
     * const ContactPerson = await prisma.contactPerson.create({
     *   data: {
     *     // ... data to create a ContactPerson
     *   }
     * })
     * 
     */
    create<T extends ContactPersonCreateArgs>(args: SelectSubset<T, ContactPersonCreateArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactPeople.
     * @param {ContactPersonCreateManyArgs} args - Arguments to create many ContactPeople.
     * @example
     * // Create many ContactPeople
     * const contactPerson = await prisma.contactPerson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactPersonCreateManyArgs>(args?: SelectSubset<T, ContactPersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactPeople and returns the data saved in the database.
     * @param {ContactPersonCreateManyAndReturnArgs} args - Arguments to create many ContactPeople.
     * @example
     * // Create many ContactPeople
     * const contactPerson = await prisma.contactPerson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactPeople and only return the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactPersonCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactPersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactPerson.
     * @param {ContactPersonDeleteArgs} args - Arguments to delete one ContactPerson.
     * @example
     * // Delete one ContactPerson
     * const ContactPerson = await prisma.contactPerson.delete({
     *   where: {
     *     // ... filter to delete one ContactPerson
     *   }
     * })
     * 
     */
    delete<T extends ContactPersonDeleteArgs>(args: SelectSubset<T, ContactPersonDeleteArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactPerson.
     * @param {ContactPersonUpdateArgs} args - Arguments to update one ContactPerson.
     * @example
     * // Update one ContactPerson
     * const contactPerson = await prisma.contactPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactPersonUpdateArgs>(args: SelectSubset<T, ContactPersonUpdateArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactPeople.
     * @param {ContactPersonDeleteManyArgs} args - Arguments to filter ContactPeople to delete.
     * @example
     * // Delete a few ContactPeople
     * const { count } = await prisma.contactPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactPersonDeleteManyArgs>(args?: SelectSubset<T, ContactPersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactPeople
     * const contactPerson = await prisma.contactPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactPersonUpdateManyArgs>(args: SelectSubset<T, ContactPersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPeople and returns the data updated in the database.
     * @param {ContactPersonUpdateManyAndReturnArgs} args - Arguments to update many ContactPeople.
     * @example
     * // Update many ContactPeople
     * const contactPerson = await prisma.contactPerson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactPeople and only return the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactPersonUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactPersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactPerson.
     * @param {ContactPersonUpsertArgs} args - Arguments to update or create a ContactPerson.
     * @example
     * // Update or create a ContactPerson
     * const contactPerson = await prisma.contactPerson.upsert({
     *   create: {
     *     // ... data to create a ContactPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactPerson we want to update
     *   }
     * })
     */
    upsert<T extends ContactPersonUpsertArgs>(args: SelectSubset<T, ContactPersonUpsertArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonCountArgs} args - Arguments to filter ContactPeople to count.
     * @example
     * // Count the number of ContactPeople
     * const count = await prisma.contactPerson.count({
     *   where: {
     *     // ... the filter for the ContactPeople we want to count
     *   }
     * })
    **/
    count<T extends ContactPersonCountArgs>(
      args?: Subset<T, ContactPersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactPersonAggregateArgs>(args: Subset<T, ContactPersonAggregateArgs>): Prisma.PrismaPromise<GetContactPersonAggregateType<T>>

    /**
     * Group by ContactPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonGroupByArgs} args - Group by arguments.
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
      T extends ContactPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactPersonGroupByArgs['orderBy'] }
        : { orderBy?: ContactPersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactPerson model
   */
  readonly fields: ContactPersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactPersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContactPerson model
   */
  interface ContactPersonFieldRefs {
    readonly id: FieldRef<"ContactPerson", 'String'>
    readonly name: FieldRef<"ContactPerson", 'String'>
    readonly email: FieldRef<"ContactPerson", 'String'>
    readonly phoneNumber: FieldRef<"ContactPerson", 'String'>
    readonly createdAt: FieldRef<"ContactPerson", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactPerson", 'DateTime'>
    readonly organizationId: FieldRef<"ContactPerson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactPerson findUnique
   */
  export type ContactPersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson findUniqueOrThrow
   */
  export type ContactPersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson findFirst
   */
  export type ContactPersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPeople.
     */
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson findFirstOrThrow
   */
  export type ContactPersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPeople.
     */
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson findMany
   */
  export type ContactPersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPeople to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson create
   */
  export type ContactPersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactPerson.
     */
    data: XOR<ContactPersonCreateInput, ContactPersonUncheckedCreateInput>
  }

  /**
   * ContactPerson createMany
   */
  export type ContactPersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactPeople.
     */
    data: ContactPersonCreateManyInput | ContactPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPerson createManyAndReturn
   */
  export type ContactPersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * The data used to create many ContactPeople.
     */
    data: ContactPersonCreateManyInput | ContactPersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactPerson update
   */
  export type ContactPersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactPerson.
     */
    data: XOR<ContactPersonUpdateInput, ContactPersonUncheckedUpdateInput>
    /**
     * Choose, which ContactPerson to update.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson updateMany
   */
  export type ContactPersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactPeople.
     */
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyInput>
    /**
     * Filter which ContactPeople to update
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to update.
     */
    limit?: number
  }

  /**
   * ContactPerson updateManyAndReturn
   */
  export type ContactPersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * The data used to update ContactPeople.
     */
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyInput>
    /**
     * Filter which ContactPeople to update
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactPerson upsert
   */
  export type ContactPersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactPerson to update in case it exists.
     */
    where: ContactPersonWhereUniqueInput
    /**
     * In case the ContactPerson found by the `where` argument doesn't exist, create a new ContactPerson with this data.
     */
    create: XOR<ContactPersonCreateInput, ContactPersonUncheckedCreateInput>
    /**
     * In case the ContactPerson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactPersonUpdateInput, ContactPersonUncheckedUpdateInput>
  }

  /**
   * ContactPerson delete
   */
  export type ContactPersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter which ContactPerson to delete.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson deleteMany
   */
  export type ContactPersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPeople to delete
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to delete.
     */
    limit?: number
  }

  /**
   * ContactPerson without action
   */
  export type ContactPersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
    assigneeId: string | null
    ticketNumber: string | null
    slaId: string | null
    responseDeadline: Date | null
    resolutionDeadline: Date | null
    respondedAt: Date | null
    resolvedAt: Date | null
    slaBreached: boolean | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
    assigneeId: string | null
    ticketNumber: string | null
    slaId: string | null
    responseDeadline: Date | null
    resolutionDeadline: Date | null
    respondedAt: Date | null
    resolvedAt: Date | null
    slaBreached: boolean | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    createdAt: number
    updatedAt: number
    creatorId: number
    assigneeId: number
    ticketNumber: number
    slaId: number
    responseDeadline: number
    resolutionDeadline: number
    respondedAt: number
    resolvedAt: number
    slaBreached: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    assigneeId?: true
    ticketNumber?: true
    slaId?: true
    responseDeadline?: true
    resolutionDeadline?: true
    respondedAt?: true
    resolvedAt?: true
    slaBreached?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    assigneeId?: true
    ticketNumber?: true
    slaId?: true
    responseDeadline?: true
    resolutionDeadline?: true
    respondedAt?: true
    resolvedAt?: true
    slaBreached?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    assigneeId?: true
    ticketNumber?: true
    slaId?: true
    responseDeadline?: true
    resolutionDeadline?: true
    respondedAt?: true
    resolvedAt?: true
    slaBreached?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    createdAt: Date
    updatedAt: Date
    creatorId: string
    assigneeId: string | null
    ticketNumber: string | null
    slaId: string | null
    responseDeadline: Date | null
    resolutionDeadline: Date | null
    respondedAt: Date | null
    resolvedAt: Date | null
    slaBreached: boolean
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    assigneeId?: boolean
    ticketNumber?: boolean
    slaId?: boolean
    responseDeadline?: boolean
    resolutionDeadline?: boolean
    respondedAt?: boolean
    resolvedAt?: boolean
    slaBreached?: boolean
    comments?: boolean | Ticket$commentsArgs<ExtArgs>
    attachments?: boolean | Ticket$attachmentsArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    slaPolicy?: boolean | Ticket$slaPolicyArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    assigneeId?: boolean
    ticketNumber?: boolean
    slaId?: boolean
    responseDeadline?: boolean
    resolutionDeadline?: boolean
    respondedAt?: boolean
    resolvedAt?: boolean
    slaBreached?: boolean
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    slaPolicy?: boolean | Ticket$slaPolicyArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    assigneeId?: boolean
    ticketNumber?: boolean
    slaId?: boolean
    responseDeadline?: boolean
    resolutionDeadline?: boolean
    respondedAt?: boolean
    resolvedAt?: boolean
    slaBreached?: boolean
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    slaPolicy?: boolean | Ticket$slaPolicyArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    assigneeId?: boolean
    ticketNumber?: boolean
    slaId?: boolean
    responseDeadline?: boolean
    resolutionDeadline?: boolean
    respondedAt?: boolean
    resolvedAt?: boolean
    slaBreached?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "createdAt" | "updatedAt" | "creatorId" | "assigneeId" | "ticketNumber" | "slaId" | "responseDeadline" | "resolutionDeadline" | "respondedAt" | "resolvedAt" | "slaBreached", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Ticket$commentsArgs<ExtArgs>
    attachments?: boolean | Ticket$attachmentsArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    slaPolicy?: boolean | Ticket$slaPolicyArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    slaPolicy?: boolean | Ticket$slaPolicyArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    slaPolicy?: boolean | Ticket$slaPolicyArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$DocumentPayload<ExtArgs>[]
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs>
      slaPolicy: Prisma.$SlaPolicyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.Status
      priority: $Enums.Priority
      createdAt: Date
      updatedAt: Date
      creatorId: string
      assigneeId: string | null
      ticketNumber: string | null
      slaId: string | null
      responseDeadline: Date | null
      resolutionDeadline: Date | null
      respondedAt: Date | null
      resolvedAt: Date | null
      slaBreached: boolean
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Ticket$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Ticket$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTo<T extends Ticket$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slaPolicy<T extends Ticket$slaPolicyArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$slaPolicyArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly title: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'Status'>
    readonly priority: FieldRef<"Ticket", 'Priority'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly creatorId: FieldRef<"Ticket", 'String'>
    readonly assigneeId: FieldRef<"Ticket", 'String'>
    readonly ticketNumber: FieldRef<"Ticket", 'String'>
    readonly slaId: FieldRef<"Ticket", 'String'>
    readonly responseDeadline: FieldRef<"Ticket", 'DateTime'>
    readonly resolutionDeadline: FieldRef<"Ticket", 'DateTime'>
    readonly respondedAt: FieldRef<"Ticket", 'DateTime'>
    readonly resolvedAt: FieldRef<"Ticket", 'DateTime'>
    readonly slaBreached: FieldRef<"Ticket", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.comments
   */
  export type Ticket$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Ticket.attachments
   */
  export type Ticket$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Ticket.assignedTo
   */
  export type Ticket$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ticket.slaPolicy
   */
  export type Ticket$slaPolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    where?: SlaPolicyWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    ticketId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    ticketId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    userId: number
    ticketId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    ticketId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    ticketId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    ticketId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    userId: string
    ticketId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    ticketId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    attachments?: boolean | Comment$attachmentsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    ticketId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    ticketId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    ticketId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "userId" | "ticketId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    attachments?: boolean | Comment$attachmentsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      attachments: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
      userId: string
      ticketId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachments<T extends Comment$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly ticketId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.attachments
   */
  export type Comment$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    size: number | null
  }

  export type DocumentSumAggregateOutputType = {
    size: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    filename: string | null
    path: string | null
    mimeType: string | null
    size: number | null
    createdAt: Date | null
    ticketId: string | null
    commentId: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    path: string | null
    mimeType: string | null
    size: number | null
    createdAt: Date | null
    ticketId: string | null
    commentId: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    filename: number
    path: number
    mimeType: number
    size: number
    createdAt: number
    ticketId: number
    commentId: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    size?: true
  }

  export type DocumentSumAggregateInputType = {
    size?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    mimeType?: true
    size?: true
    createdAt?: true
    ticketId?: true
    commentId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    mimeType?: true
    size?: true
    createdAt?: true
    ticketId?: true
    commentId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    mimeType?: true
    size?: true
    createdAt?: true
    ticketId?: true
    commentId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt: Date
    ticketId: string | null
    commentId: string | null
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
    ticketId?: boolean
    commentId?: boolean
    comment?: boolean | Document$commentArgs<ExtArgs>
    ticket?: boolean | Document$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
    ticketId?: boolean
    commentId?: boolean
    comment?: boolean | Document$commentArgs<ExtArgs>
    ticket?: boolean | Document$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
    ticketId?: boolean
    commentId?: boolean
    comment?: boolean | Document$commentArgs<ExtArgs>
    ticket?: boolean | Document$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    filename?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
    ticketId?: boolean
    commentId?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "path" | "mimeType" | "size" | "createdAt" | "ticketId" | "commentId", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | Document$commentArgs<ExtArgs>
    ticket?: boolean | Document$ticketArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | Document$commentArgs<ExtArgs>
    ticket?: boolean | Document$ticketArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | Document$commentArgs<ExtArgs>
    ticket?: boolean | Document$ticketArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      comment: Prisma.$CommentPayload<ExtArgs> | null
      ticket: Prisma.$TicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      path: string
      mimeType: string
      size: number
      createdAt: Date
      ticketId: string | null
      commentId: string | null
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends Document$commentArgs<ExtArgs> = {}>(args?: Subset<T, Document$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticket<T extends Document$ticketArgs<ExtArgs> = {}>(args?: Subset<T, Document$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly filename: FieldRef<"Document", 'String'>
    readonly path: FieldRef<"Document", 'String'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly size: FieldRef<"Document", 'Int'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly ticketId: FieldRef<"Document", 'String'>
    readonly commentId: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.comment
   */
  export type Document$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Document.ticket
   */
  export type Document$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model AppSetting
   */

  export type AggregateAppSetting = {
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  export type AppSettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppSettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSetting to aggregate.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSettings
    **/
    _count?: true | AppSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSettingMaxAggregateInputType
  }

  export type GetAppSettingAggregateType<T extends AppSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSetting[P]>
      : GetScalarType<T[P], AggregateAppSetting[P]>
  }




  export type AppSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSettingWhereInput
    orderBy?: AppSettingOrderByWithAggregationInput | AppSettingOrderByWithAggregationInput[]
    by: AppSettingScalarFieldEnum[] | AppSettingScalarFieldEnum
    having?: AppSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSettingCountAggregateInputType | true
    _min?: AppSettingMinAggregateInputType
    _max?: AppSettingMaxAggregateInputType
  }

  export type AppSettingGroupByOutputType = {
    id: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  type GetAppSettingGroupByPayload<T extends AppSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
            : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
        }
      >
    >


  export type AppSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["appSetting"]>

  export type $AppSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appSetting"]>
    composites: {}
  }

  type AppSettingGetPayload<S extends boolean | null | undefined | AppSettingDefaultArgs> = $Result.GetResult<Prisma.$AppSettingPayload, S>

  type AppSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppSettingCountAggregateInputType | true
    }

  export interface AppSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSetting'], meta: { name: 'AppSetting' } }
    /**
     * Find zero or one AppSetting that matches the filter.
     * @param {AppSettingFindUniqueArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSettingFindUniqueArgs>(args: SelectSubset<T, AppSettingFindUniqueArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppSettingFindUniqueOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSettingFindFirstArgs>(args?: SelectSubset<T, AppSettingFindFirstArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSettings
     * const appSettings = await prisma.appSetting.findMany()
     * 
     * // Get first 10 AppSettings
     * const appSettings = await prisma.appSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSettingWithIdOnly = await prisma.appSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppSettingFindManyArgs>(args?: SelectSubset<T, AppSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppSetting.
     * @param {AppSettingCreateArgs} args - Arguments to create a AppSetting.
     * @example
     * // Create one AppSetting
     * const AppSetting = await prisma.appSetting.create({
     *   data: {
     *     // ... data to create a AppSetting
     *   }
     * })
     * 
     */
    create<T extends AppSettingCreateArgs>(args: SelectSubset<T, AppSettingCreateArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppSettings.
     * @param {AppSettingCreateManyArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSettingCreateManyArgs>(args?: SelectSubset<T, AppSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSettings and returns the data saved in the database.
     * @param {AppSettingCreateManyAndReturnArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSettings and only return the `id`
     * const appSettingWithIdOnly = await prisma.appSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppSetting.
     * @param {AppSettingDeleteArgs} args - Arguments to delete one AppSetting.
     * @example
     * // Delete one AppSetting
     * const AppSetting = await prisma.appSetting.delete({
     *   where: {
     *     // ... filter to delete one AppSetting
     *   }
     * })
     * 
     */
    delete<T extends AppSettingDeleteArgs>(args: SelectSubset<T, AppSettingDeleteArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppSetting.
     * @param {AppSettingUpdateArgs} args - Arguments to update one AppSetting.
     * @example
     * // Update one AppSetting
     * const appSetting = await prisma.appSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSettingUpdateArgs>(args: SelectSubset<T, AppSettingUpdateArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppSettings.
     * @param {AppSettingDeleteManyArgs} args - Arguments to filter AppSettings to delete.
     * @example
     * // Delete a few AppSettings
     * const { count } = await prisma.appSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSettingDeleteManyArgs>(args?: SelectSubset<T, AppSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSettings
     * const appSetting = await prisma.appSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSettingUpdateManyArgs>(args: SelectSubset<T, AppSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings and returns the data updated in the database.
     * @param {AppSettingUpdateManyAndReturnArgs} args - Arguments to update many AppSettings.
     * @example
     * // Update many AppSettings
     * const appSetting = await prisma.appSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppSettings and only return the `id`
     * const appSettingWithIdOnly = await prisma.appSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, AppSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppSetting.
     * @param {AppSettingUpsertArgs} args - Arguments to update or create a AppSetting.
     * @example
     * // Update or create a AppSetting
     * const appSetting = await prisma.appSetting.upsert({
     *   create: {
     *     // ... data to create a AppSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSetting we want to update
     *   }
     * })
     */
    upsert<T extends AppSettingUpsertArgs>(args: SelectSubset<T, AppSettingUpsertArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingCountArgs} args - Arguments to filter AppSettings to count.
     * @example
     * // Count the number of AppSettings
     * const count = await prisma.appSetting.count({
     *   where: {
     *     // ... the filter for the AppSettings we want to count
     *   }
     * })
    **/
    count<T extends AppSettingCountArgs>(
      args?: Subset<T, AppSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppSettingAggregateArgs>(args: Subset<T, AppSettingAggregateArgs>): Prisma.PrismaPromise<GetAppSettingAggregateType<T>>

    /**
     * Group by AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingGroupByArgs} args - Group by arguments.
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
      T extends AppSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSettingGroupByArgs['orderBy'] }
        : { orderBy?: AppSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSetting model
   */
  readonly fields: AppSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AppSetting model
   */
  interface AppSettingFieldRefs {
    readonly id: FieldRef<"AppSetting", 'String'>
    readonly key: FieldRef<"AppSetting", 'String'>
    readonly value: FieldRef<"AppSetting", 'String'>
    readonly createdAt: FieldRef<"AppSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"AppSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSetting findUnique
   */
  export type AppSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findUniqueOrThrow
   */
  export type AppSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findFirst
   */
  export type AppSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findFirstOrThrow
   */
  export type AppSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findMany
   */
  export type AppSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting create
   */
  export type AppSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a AppSetting.
     */
    data: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
  }

  /**
   * AppSetting createMany
   */
  export type AppSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSetting createManyAndReturn
   */
  export type AppSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSetting update
   */
  export type AppSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a AppSetting.
     */
    data: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
    /**
     * Choose, which AppSetting to update.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting updateMany
   */
  export type AppSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingUpdateManyMutationInput, AppSettingUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to update.
     */
    limit?: number
  }

  /**
   * AppSetting updateManyAndReturn
   */
  export type AppSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingUpdateManyMutationInput, AppSettingUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to update.
     */
    limit?: number
  }

  /**
   * AppSetting upsert
   */
  export type AppSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the AppSetting to update in case it exists.
     */
    where: AppSettingWhereUniqueInput
    /**
     * In case the AppSetting found by the `where` argument doesn't exist, create a new AppSetting with this data.
     */
    create: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
    /**
     * In case the AppSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
  }

  /**
   * AppSetting delete
   */
  export type AppSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter which AppSetting to delete.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting deleteMany
   */
  export type AppSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to delete
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to delete.
     */
    limit?: number
  }

  /**
   * AppSetting without action
   */
  export type AppSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
  }


  /**
   * Model TicketCounter
   */

  export type AggregateTicketCounter = {
    _count: TicketCounterCountAggregateOutputType | null
    _avg: TicketCounterAvgAggregateOutputType | null
    _sum: TicketCounterSumAggregateOutputType | null
    _min: TicketCounterMinAggregateOutputType | null
    _max: TicketCounterMaxAggregateOutputType | null
  }

  export type TicketCounterAvgAggregateOutputType = {
    counter: number | null
  }

  export type TicketCounterSumAggregateOutputType = {
    counter: number | null
  }

  export type TicketCounterMinAggregateOutputType = {
    id: string | null
    date: string | null
    counter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCounterMaxAggregateOutputType = {
    id: string | null
    date: string | null
    counter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCounterCountAggregateOutputType = {
    id: number
    date: number
    counter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketCounterAvgAggregateInputType = {
    counter?: true
  }

  export type TicketCounterSumAggregateInputType = {
    counter?: true
  }

  export type TicketCounterMinAggregateInputType = {
    id?: true
    date?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCounterMaxAggregateInputType = {
    id?: true
    date?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCounterCountAggregateInputType = {
    id?: true
    date?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCounter to aggregate.
     */
    where?: TicketCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCounters to fetch.
     */
    orderBy?: TicketCounterOrderByWithRelationInput | TicketCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketCounters
    **/
    _count?: true | TicketCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketCounterMaxAggregateInputType
  }

  export type GetTicketCounterAggregateType<T extends TicketCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketCounter[P]>
      : GetScalarType<T[P], AggregateTicketCounter[P]>
  }




  export type TicketCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCounterWhereInput
    orderBy?: TicketCounterOrderByWithAggregationInput | TicketCounterOrderByWithAggregationInput[]
    by: TicketCounterScalarFieldEnum[] | TicketCounterScalarFieldEnum
    having?: TicketCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCounterCountAggregateInputType | true
    _avg?: TicketCounterAvgAggregateInputType
    _sum?: TicketCounterSumAggregateInputType
    _min?: TicketCounterMinAggregateInputType
    _max?: TicketCounterMaxAggregateInputType
  }

  export type TicketCounterGroupByOutputType = {
    id: string
    date: string
    counter: number
    createdAt: Date
    updatedAt: Date
    _count: TicketCounterCountAggregateOutputType | null
    _avg: TicketCounterAvgAggregateOutputType | null
    _sum: TicketCounterSumAggregateOutputType | null
    _min: TicketCounterMinAggregateOutputType | null
    _max: TicketCounterMaxAggregateOutputType | null
  }

  type GetTicketCounterGroupByPayload<T extends TicketCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketCounterGroupByOutputType[P]>
            : GetScalarType<T[P], TicketCounterGroupByOutputType[P]>
        }
      >
    >


  export type TicketCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticketCounter"]>

  export type TicketCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticketCounter"]>

  export type TicketCounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticketCounter"]>

  export type TicketCounterSelectScalar = {
    id?: boolean
    date?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketCounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "counter" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketCounter"]>

  export type $TicketCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketCounter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: string
      counter: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketCounter"]>
    composites: {}
  }

  type TicketCounterGetPayload<S extends boolean | null | undefined | TicketCounterDefaultArgs> = $Result.GetResult<Prisma.$TicketCounterPayload, S>

  type TicketCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCounterCountAggregateInputType | true
    }

  export interface TicketCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketCounter'], meta: { name: 'TicketCounter' } }
    /**
     * Find zero or one TicketCounter that matches the filter.
     * @param {TicketCounterFindUniqueArgs} args - Arguments to find a TicketCounter
     * @example
     * // Get one TicketCounter
     * const ticketCounter = await prisma.ticketCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketCounterFindUniqueArgs>(args: SelectSubset<T, TicketCounterFindUniqueArgs<ExtArgs>>): Prisma__TicketCounterClient<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketCounterFindUniqueOrThrowArgs} args - Arguments to find a TicketCounter
     * @example
     * // Get one TicketCounter
     * const ticketCounter = await prisma.ticketCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketCounterClient<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCounterFindFirstArgs} args - Arguments to find a TicketCounter
     * @example
     * // Get one TicketCounter
     * const ticketCounter = await prisma.ticketCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketCounterFindFirstArgs>(args?: SelectSubset<T, TicketCounterFindFirstArgs<ExtArgs>>): Prisma__TicketCounterClient<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCounterFindFirstOrThrowArgs} args - Arguments to find a TicketCounter
     * @example
     * // Get one TicketCounter
     * const ticketCounter = await prisma.ticketCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketCounterClient<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketCounters
     * const ticketCounters = await prisma.ticketCounter.findMany()
     * 
     * // Get first 10 TicketCounters
     * const ticketCounters = await prisma.ticketCounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketCounterWithIdOnly = await prisma.ticketCounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketCounterFindManyArgs>(args?: SelectSubset<T, TicketCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketCounter.
     * @param {TicketCounterCreateArgs} args - Arguments to create a TicketCounter.
     * @example
     * // Create one TicketCounter
     * const TicketCounter = await prisma.ticketCounter.create({
     *   data: {
     *     // ... data to create a TicketCounter
     *   }
     * })
     * 
     */
    create<T extends TicketCounterCreateArgs>(args: SelectSubset<T, TicketCounterCreateArgs<ExtArgs>>): Prisma__TicketCounterClient<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketCounters.
     * @param {TicketCounterCreateManyArgs} args - Arguments to create many TicketCounters.
     * @example
     * // Create many TicketCounters
     * const ticketCounter = await prisma.ticketCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCounterCreateManyArgs>(args?: SelectSubset<T, TicketCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketCounters and returns the data saved in the database.
     * @param {TicketCounterCreateManyAndReturnArgs} args - Arguments to create many TicketCounters.
     * @example
     * // Create many TicketCounters
     * const ticketCounter = await prisma.ticketCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketCounters and only return the `id`
     * const ticketCounterWithIdOnly = await prisma.ticketCounter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketCounter.
     * @param {TicketCounterDeleteArgs} args - Arguments to delete one TicketCounter.
     * @example
     * // Delete one TicketCounter
     * const TicketCounter = await prisma.ticketCounter.delete({
     *   where: {
     *     // ... filter to delete one TicketCounter
     *   }
     * })
     * 
     */
    delete<T extends TicketCounterDeleteArgs>(args: SelectSubset<T, TicketCounterDeleteArgs<ExtArgs>>): Prisma__TicketCounterClient<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketCounter.
     * @param {TicketCounterUpdateArgs} args - Arguments to update one TicketCounter.
     * @example
     * // Update one TicketCounter
     * const ticketCounter = await prisma.ticketCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketCounterUpdateArgs>(args: SelectSubset<T, TicketCounterUpdateArgs<ExtArgs>>): Prisma__TicketCounterClient<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketCounters.
     * @param {TicketCounterDeleteManyArgs} args - Arguments to filter TicketCounters to delete.
     * @example
     * // Delete a few TicketCounters
     * const { count } = await prisma.ticketCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketCounterDeleteManyArgs>(args?: SelectSubset<T, TicketCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketCounters
     * const ticketCounter = await prisma.ticketCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketCounterUpdateManyArgs>(args: SelectSubset<T, TicketCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCounters and returns the data updated in the database.
     * @param {TicketCounterUpdateManyAndReturnArgs} args - Arguments to update many TicketCounters.
     * @example
     * // Update many TicketCounters
     * const ticketCounter = await prisma.ticketCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketCounters and only return the `id`
     * const ticketCounterWithIdOnly = await prisma.ticketCounter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketCounterUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketCounter.
     * @param {TicketCounterUpsertArgs} args - Arguments to update or create a TicketCounter.
     * @example
     * // Update or create a TicketCounter
     * const ticketCounter = await prisma.ticketCounter.upsert({
     *   create: {
     *     // ... data to create a TicketCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketCounter we want to update
     *   }
     * })
     */
    upsert<T extends TicketCounterUpsertArgs>(args: SelectSubset<T, TicketCounterUpsertArgs<ExtArgs>>): Prisma__TicketCounterClient<$Result.GetResult<Prisma.$TicketCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCounterCountArgs} args - Arguments to filter TicketCounters to count.
     * @example
     * // Count the number of TicketCounters
     * const count = await prisma.ticketCounter.count({
     *   where: {
     *     // ... the filter for the TicketCounters we want to count
     *   }
     * })
    **/
    count<T extends TicketCounterCountArgs>(
      args?: Subset<T, TicketCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketCounterAggregateArgs>(args: Subset<T, TicketCounterAggregateArgs>): Prisma.PrismaPromise<GetTicketCounterAggregateType<T>>

    /**
     * Group by TicketCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCounterGroupByArgs} args - Group by arguments.
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
      T extends TicketCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketCounterGroupByArgs['orderBy'] }
        : { orderBy?: TicketCounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketCounter model
   */
  readonly fields: TicketCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TicketCounter model
   */
  interface TicketCounterFieldRefs {
    readonly id: FieldRef<"TicketCounter", 'String'>
    readonly date: FieldRef<"TicketCounter", 'String'>
    readonly counter: FieldRef<"TicketCounter", 'Int'>
    readonly createdAt: FieldRef<"TicketCounter", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketCounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketCounter findUnique
   */
  export type TicketCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * Filter, which TicketCounter to fetch.
     */
    where: TicketCounterWhereUniqueInput
  }

  /**
   * TicketCounter findUniqueOrThrow
   */
  export type TicketCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * Filter, which TicketCounter to fetch.
     */
    where: TicketCounterWhereUniqueInput
  }

  /**
   * TicketCounter findFirst
   */
  export type TicketCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * Filter, which TicketCounter to fetch.
     */
    where?: TicketCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCounters to fetch.
     */
    orderBy?: TicketCounterOrderByWithRelationInput | TicketCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCounters.
     */
    cursor?: TicketCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCounters.
     */
    distinct?: TicketCounterScalarFieldEnum | TicketCounterScalarFieldEnum[]
  }

  /**
   * TicketCounter findFirstOrThrow
   */
  export type TicketCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * Filter, which TicketCounter to fetch.
     */
    where?: TicketCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCounters to fetch.
     */
    orderBy?: TicketCounterOrderByWithRelationInput | TicketCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCounters.
     */
    cursor?: TicketCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCounters.
     */
    distinct?: TicketCounterScalarFieldEnum | TicketCounterScalarFieldEnum[]
  }

  /**
   * TicketCounter findMany
   */
  export type TicketCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * Filter, which TicketCounters to fetch.
     */
    where?: TicketCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCounters to fetch.
     */
    orderBy?: TicketCounterOrderByWithRelationInput | TicketCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketCounters.
     */
    cursor?: TicketCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCounters.
     */
    skip?: number
    distinct?: TicketCounterScalarFieldEnum | TicketCounterScalarFieldEnum[]
  }

  /**
   * TicketCounter create
   */
  export type TicketCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * The data needed to create a TicketCounter.
     */
    data: XOR<TicketCounterCreateInput, TicketCounterUncheckedCreateInput>
  }

  /**
   * TicketCounter createMany
   */
  export type TicketCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketCounters.
     */
    data: TicketCounterCreateManyInput | TicketCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketCounter createManyAndReturn
   */
  export type TicketCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * The data used to create many TicketCounters.
     */
    data: TicketCounterCreateManyInput | TicketCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketCounter update
   */
  export type TicketCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * The data needed to update a TicketCounter.
     */
    data: XOR<TicketCounterUpdateInput, TicketCounterUncheckedUpdateInput>
    /**
     * Choose, which TicketCounter to update.
     */
    where: TicketCounterWhereUniqueInput
  }

  /**
   * TicketCounter updateMany
   */
  export type TicketCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketCounters.
     */
    data: XOR<TicketCounterUpdateManyMutationInput, TicketCounterUncheckedUpdateManyInput>
    /**
     * Filter which TicketCounters to update
     */
    where?: TicketCounterWhereInput
    /**
     * Limit how many TicketCounters to update.
     */
    limit?: number
  }

  /**
   * TicketCounter updateManyAndReturn
   */
  export type TicketCounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * The data used to update TicketCounters.
     */
    data: XOR<TicketCounterUpdateManyMutationInput, TicketCounterUncheckedUpdateManyInput>
    /**
     * Filter which TicketCounters to update
     */
    where?: TicketCounterWhereInput
    /**
     * Limit how many TicketCounters to update.
     */
    limit?: number
  }

  /**
   * TicketCounter upsert
   */
  export type TicketCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * The filter to search for the TicketCounter to update in case it exists.
     */
    where: TicketCounterWhereUniqueInput
    /**
     * In case the TicketCounter found by the `where` argument doesn't exist, create a new TicketCounter with this data.
     */
    create: XOR<TicketCounterCreateInput, TicketCounterUncheckedCreateInput>
    /**
     * In case the TicketCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketCounterUpdateInput, TicketCounterUncheckedUpdateInput>
  }

  /**
   * TicketCounter delete
   */
  export type TicketCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
    /**
     * Filter which TicketCounter to delete.
     */
    where: TicketCounterWhereUniqueInput
  }

  /**
   * TicketCounter deleteMany
   */
  export type TicketCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCounters to delete
     */
    where?: TicketCounterWhereInput
    /**
     * Limit how many TicketCounters to delete.
     */
    limit?: number
  }

  /**
   * TicketCounter without action
   */
  export type TicketCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCounter
     */
    select?: TicketCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCounter
     */
    omit?: TicketCounterOmit<ExtArgs> | null
  }


  /**
   * Model SlaPolicy
   */

  export type AggregateSlaPolicy = {
    _count: SlaPolicyCountAggregateOutputType | null
    _avg: SlaPolicyAvgAggregateOutputType | null
    _sum: SlaPolicySumAggregateOutputType | null
    _min: SlaPolicyMinAggregateOutputType | null
    _max: SlaPolicyMaxAggregateOutputType | null
  }

  export type SlaPolicyAvgAggregateOutputType = {
    responseTimeHours: number | null
    resolutionTimeHours: number | null
  }

  export type SlaPolicySumAggregateOutputType = {
    responseTimeHours: number | null
    resolutionTimeHours: number | null
  }

  export type SlaPolicyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    responseTimeHours: number | null
    resolutionTimeHours: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    priorityLevel: $Enums.Priority | null
    organizationId: string | null
  }

  export type SlaPolicyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    responseTimeHours: number | null
    resolutionTimeHours: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    priorityLevel: $Enums.Priority | null
    organizationId: string | null
  }

  export type SlaPolicyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    responseTimeHours: number
    resolutionTimeHours: number
    active: number
    createdAt: number
    updatedAt: number
    priorityLevel: number
    organizationId: number
    _all: number
  }


  export type SlaPolicyAvgAggregateInputType = {
    responseTimeHours?: true
    resolutionTimeHours?: true
  }

  export type SlaPolicySumAggregateInputType = {
    responseTimeHours?: true
    resolutionTimeHours?: true
  }

  export type SlaPolicyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    responseTimeHours?: true
    resolutionTimeHours?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    priorityLevel?: true
    organizationId?: true
  }

  export type SlaPolicyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    responseTimeHours?: true
    resolutionTimeHours?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    priorityLevel?: true
    organizationId?: true
  }

  export type SlaPolicyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    responseTimeHours?: true
    resolutionTimeHours?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    priorityLevel?: true
    organizationId?: true
    _all?: true
  }

  export type SlaPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlaPolicy to aggregate.
     */
    where?: SlaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPolicies to fetch.
     */
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlaPolicies
    **/
    _count?: true | SlaPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlaPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlaPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlaPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlaPolicyMaxAggregateInputType
  }

  export type GetSlaPolicyAggregateType<T extends SlaPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateSlaPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlaPolicy[P]>
      : GetScalarType<T[P], AggregateSlaPolicy[P]>
  }




  export type SlaPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlaPolicyWhereInput
    orderBy?: SlaPolicyOrderByWithAggregationInput | SlaPolicyOrderByWithAggregationInput[]
    by: SlaPolicyScalarFieldEnum[] | SlaPolicyScalarFieldEnum
    having?: SlaPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlaPolicyCountAggregateInputType | true
    _avg?: SlaPolicyAvgAggregateInputType
    _sum?: SlaPolicySumAggregateInputType
    _min?: SlaPolicyMinAggregateInputType
    _max?: SlaPolicyMaxAggregateInputType
  }

  export type SlaPolicyGroupByOutputType = {
    id: string
    name: string
    description: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    priorityLevel: $Enums.Priority
    organizationId: string | null
    _count: SlaPolicyCountAggregateOutputType | null
    _avg: SlaPolicyAvgAggregateOutputType | null
    _sum: SlaPolicySumAggregateOutputType | null
    _min: SlaPolicyMinAggregateOutputType | null
    _max: SlaPolicyMaxAggregateOutputType | null
  }

  type GetSlaPolicyGroupByPayload<T extends SlaPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlaPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlaPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlaPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], SlaPolicyGroupByOutputType[P]>
        }
      >
    >


  export type SlaPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    responseTimeHours?: boolean
    resolutionTimeHours?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priorityLevel?: boolean
    organizationId?: boolean
    organization?: boolean | SlaPolicy$organizationArgs<ExtArgs>
    tickets?: boolean | SlaPolicy$ticketsArgs<ExtArgs>
    _count?: boolean | SlaPolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slaPolicy"]>

  export type SlaPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    responseTimeHours?: boolean
    resolutionTimeHours?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priorityLevel?: boolean
    organizationId?: boolean
    organization?: boolean | SlaPolicy$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["slaPolicy"]>

  export type SlaPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    responseTimeHours?: boolean
    resolutionTimeHours?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priorityLevel?: boolean
    organizationId?: boolean
    organization?: boolean | SlaPolicy$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["slaPolicy"]>

  export type SlaPolicySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    responseTimeHours?: boolean
    resolutionTimeHours?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priorityLevel?: boolean
    organizationId?: boolean
  }

  export type SlaPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "responseTimeHours" | "resolutionTimeHours" | "active" | "createdAt" | "updatedAt" | "priorityLevel" | "organizationId", ExtArgs["result"]["slaPolicy"]>
  export type SlaPolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | SlaPolicy$organizationArgs<ExtArgs>
    tickets?: boolean | SlaPolicy$ticketsArgs<ExtArgs>
    _count?: boolean | SlaPolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SlaPolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | SlaPolicy$organizationArgs<ExtArgs>
  }
  export type SlaPolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | SlaPolicy$organizationArgs<ExtArgs>
  }

  export type $SlaPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlaPolicy"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      responseTimeHours: number
      resolutionTimeHours: number
      active: boolean
      createdAt: Date
      updatedAt: Date
      priorityLevel: $Enums.Priority
      organizationId: string | null
    }, ExtArgs["result"]["slaPolicy"]>
    composites: {}
  }

  type SlaPolicyGetPayload<S extends boolean | null | undefined | SlaPolicyDefaultArgs> = $Result.GetResult<Prisma.$SlaPolicyPayload, S>

  type SlaPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlaPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlaPolicyCountAggregateInputType | true
    }

  export interface SlaPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlaPolicy'], meta: { name: 'SlaPolicy' } }
    /**
     * Find zero or one SlaPolicy that matches the filter.
     * @param {SlaPolicyFindUniqueArgs} args - Arguments to find a SlaPolicy
     * @example
     * // Get one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlaPolicyFindUniqueArgs>(args: SelectSubset<T, SlaPolicyFindUniqueArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlaPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlaPolicyFindUniqueOrThrowArgs} args - Arguments to find a SlaPolicy
     * @example
     * // Get one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlaPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, SlaPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlaPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyFindFirstArgs} args - Arguments to find a SlaPolicy
     * @example
     * // Get one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlaPolicyFindFirstArgs>(args?: SelectSubset<T, SlaPolicyFindFirstArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlaPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyFindFirstOrThrowArgs} args - Arguments to find a SlaPolicy
     * @example
     * // Get one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlaPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, SlaPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlaPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlaPolicies
     * const slaPolicies = await prisma.slaPolicy.findMany()
     * 
     * // Get first 10 SlaPolicies
     * const slaPolicies = await prisma.slaPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slaPolicyWithIdOnly = await prisma.slaPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlaPolicyFindManyArgs>(args?: SelectSubset<T, SlaPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlaPolicy.
     * @param {SlaPolicyCreateArgs} args - Arguments to create a SlaPolicy.
     * @example
     * // Create one SlaPolicy
     * const SlaPolicy = await prisma.slaPolicy.create({
     *   data: {
     *     // ... data to create a SlaPolicy
     *   }
     * })
     * 
     */
    create<T extends SlaPolicyCreateArgs>(args: SelectSubset<T, SlaPolicyCreateArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlaPolicies.
     * @param {SlaPolicyCreateManyArgs} args - Arguments to create many SlaPolicies.
     * @example
     * // Create many SlaPolicies
     * const slaPolicy = await prisma.slaPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlaPolicyCreateManyArgs>(args?: SelectSubset<T, SlaPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlaPolicies and returns the data saved in the database.
     * @param {SlaPolicyCreateManyAndReturnArgs} args - Arguments to create many SlaPolicies.
     * @example
     * // Create many SlaPolicies
     * const slaPolicy = await prisma.slaPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlaPolicies and only return the `id`
     * const slaPolicyWithIdOnly = await prisma.slaPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlaPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, SlaPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlaPolicy.
     * @param {SlaPolicyDeleteArgs} args - Arguments to delete one SlaPolicy.
     * @example
     * // Delete one SlaPolicy
     * const SlaPolicy = await prisma.slaPolicy.delete({
     *   where: {
     *     // ... filter to delete one SlaPolicy
     *   }
     * })
     * 
     */
    delete<T extends SlaPolicyDeleteArgs>(args: SelectSubset<T, SlaPolicyDeleteArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlaPolicy.
     * @param {SlaPolicyUpdateArgs} args - Arguments to update one SlaPolicy.
     * @example
     * // Update one SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlaPolicyUpdateArgs>(args: SelectSubset<T, SlaPolicyUpdateArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlaPolicies.
     * @param {SlaPolicyDeleteManyArgs} args - Arguments to filter SlaPolicies to delete.
     * @example
     * // Delete a few SlaPolicies
     * const { count } = await prisma.slaPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlaPolicyDeleteManyArgs>(args?: SelectSubset<T, SlaPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlaPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlaPolicies
     * const slaPolicy = await prisma.slaPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlaPolicyUpdateManyArgs>(args: SelectSubset<T, SlaPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlaPolicies and returns the data updated in the database.
     * @param {SlaPolicyUpdateManyAndReturnArgs} args - Arguments to update many SlaPolicies.
     * @example
     * // Update many SlaPolicies
     * const slaPolicy = await prisma.slaPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlaPolicies and only return the `id`
     * const slaPolicyWithIdOnly = await prisma.slaPolicy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlaPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, SlaPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlaPolicy.
     * @param {SlaPolicyUpsertArgs} args - Arguments to update or create a SlaPolicy.
     * @example
     * // Update or create a SlaPolicy
     * const slaPolicy = await prisma.slaPolicy.upsert({
     *   create: {
     *     // ... data to create a SlaPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlaPolicy we want to update
     *   }
     * })
     */
    upsert<T extends SlaPolicyUpsertArgs>(args: SelectSubset<T, SlaPolicyUpsertArgs<ExtArgs>>): Prisma__SlaPolicyClient<$Result.GetResult<Prisma.$SlaPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlaPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyCountArgs} args - Arguments to filter SlaPolicies to count.
     * @example
     * // Count the number of SlaPolicies
     * const count = await prisma.slaPolicy.count({
     *   where: {
     *     // ... the filter for the SlaPolicies we want to count
     *   }
     * })
    **/
    count<T extends SlaPolicyCountArgs>(
      args?: Subset<T, SlaPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlaPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlaPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlaPolicyAggregateArgs>(args: Subset<T, SlaPolicyAggregateArgs>): Prisma.PrismaPromise<GetSlaPolicyAggregateType<T>>

    /**
     * Group by SlaPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPolicyGroupByArgs} args - Group by arguments.
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
      T extends SlaPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlaPolicyGroupByArgs['orderBy'] }
        : { orderBy?: SlaPolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlaPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlaPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlaPolicy model
   */
  readonly fields: SlaPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlaPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlaPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends SlaPolicy$organizationArgs<ExtArgs> = {}>(args?: Subset<T, SlaPolicy$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends SlaPolicy$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, SlaPolicy$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SlaPolicy model
   */
  interface SlaPolicyFieldRefs {
    readonly id: FieldRef<"SlaPolicy", 'String'>
    readonly name: FieldRef<"SlaPolicy", 'String'>
    readonly description: FieldRef<"SlaPolicy", 'String'>
    readonly responseTimeHours: FieldRef<"SlaPolicy", 'Int'>
    readonly resolutionTimeHours: FieldRef<"SlaPolicy", 'Int'>
    readonly active: FieldRef<"SlaPolicy", 'Boolean'>
    readonly createdAt: FieldRef<"SlaPolicy", 'DateTime'>
    readonly updatedAt: FieldRef<"SlaPolicy", 'DateTime'>
    readonly priorityLevel: FieldRef<"SlaPolicy", 'Priority'>
    readonly organizationId: FieldRef<"SlaPolicy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SlaPolicy findUnique
   */
  export type SlaPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which SlaPolicy to fetch.
     */
    where: SlaPolicyWhereUniqueInput
  }

  /**
   * SlaPolicy findUniqueOrThrow
   */
  export type SlaPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which SlaPolicy to fetch.
     */
    where: SlaPolicyWhereUniqueInput
  }

  /**
   * SlaPolicy findFirst
   */
  export type SlaPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which SlaPolicy to fetch.
     */
    where?: SlaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPolicies to fetch.
     */
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlaPolicies.
     */
    cursor?: SlaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlaPolicies.
     */
    distinct?: SlaPolicyScalarFieldEnum | SlaPolicyScalarFieldEnum[]
  }

  /**
   * SlaPolicy findFirstOrThrow
   */
  export type SlaPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which SlaPolicy to fetch.
     */
    where?: SlaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPolicies to fetch.
     */
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlaPolicies.
     */
    cursor?: SlaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlaPolicies.
     */
    distinct?: SlaPolicyScalarFieldEnum | SlaPolicyScalarFieldEnum[]
  }

  /**
   * SlaPolicy findMany
   */
  export type SlaPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * Filter, which SlaPolicies to fetch.
     */
    where?: SlaPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPolicies to fetch.
     */
    orderBy?: SlaPolicyOrderByWithRelationInput | SlaPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlaPolicies.
     */
    cursor?: SlaPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPolicies.
     */
    skip?: number
    distinct?: SlaPolicyScalarFieldEnum | SlaPolicyScalarFieldEnum[]
  }

  /**
   * SlaPolicy create
   */
  export type SlaPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a SlaPolicy.
     */
    data: XOR<SlaPolicyCreateInput, SlaPolicyUncheckedCreateInput>
  }

  /**
   * SlaPolicy createMany
   */
  export type SlaPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlaPolicies.
     */
    data: SlaPolicyCreateManyInput | SlaPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlaPolicy createManyAndReturn
   */
  export type SlaPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many SlaPolicies.
     */
    data: SlaPolicyCreateManyInput | SlaPolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlaPolicy update
   */
  export type SlaPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a SlaPolicy.
     */
    data: XOR<SlaPolicyUpdateInput, SlaPolicyUncheckedUpdateInput>
    /**
     * Choose, which SlaPolicy to update.
     */
    where: SlaPolicyWhereUniqueInput
  }

  /**
   * SlaPolicy updateMany
   */
  export type SlaPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlaPolicies.
     */
    data: XOR<SlaPolicyUpdateManyMutationInput, SlaPolicyUncheckedUpdateManyInput>
    /**
     * Filter which SlaPolicies to update
     */
    where?: SlaPolicyWhereInput
    /**
     * Limit how many SlaPolicies to update.
     */
    limit?: number
  }

  /**
   * SlaPolicy updateManyAndReturn
   */
  export type SlaPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * The data used to update SlaPolicies.
     */
    data: XOR<SlaPolicyUpdateManyMutationInput, SlaPolicyUncheckedUpdateManyInput>
    /**
     * Filter which SlaPolicies to update
     */
    where?: SlaPolicyWhereInput
    /**
     * Limit how many SlaPolicies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlaPolicy upsert
   */
  export type SlaPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the SlaPolicy to update in case it exists.
     */
    where: SlaPolicyWhereUniqueInput
    /**
     * In case the SlaPolicy found by the `where` argument doesn't exist, create a new SlaPolicy with this data.
     */
    create: XOR<SlaPolicyCreateInput, SlaPolicyUncheckedCreateInput>
    /**
     * In case the SlaPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlaPolicyUpdateInput, SlaPolicyUncheckedUpdateInput>
  }

  /**
   * SlaPolicy delete
   */
  export type SlaPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
    /**
     * Filter which SlaPolicy to delete.
     */
    where: SlaPolicyWhereUniqueInput
  }

  /**
   * SlaPolicy deleteMany
   */
  export type SlaPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlaPolicies to delete
     */
    where?: SlaPolicyWhereInput
    /**
     * Limit how many SlaPolicies to delete.
     */
    limit?: number
  }

  /**
   * SlaPolicy.organization
   */
  export type SlaPolicy$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * SlaPolicy.tickets
   */
  export type SlaPolicy$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * SlaPolicy without action
   */
  export type SlaPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPolicy
     */
    select?: SlaPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPolicy
     */
    omit?: SlaPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlaPolicyInclude<ExtArgs> | null
  }


  /**
   * Model SlaPriorityMultiplier
   */

  export type AggregateSlaPriorityMultiplier = {
    _count: SlaPriorityMultiplierCountAggregateOutputType | null
    _avg: SlaPriorityMultiplierAvgAggregateOutputType | null
    _sum: SlaPriorityMultiplierSumAggregateOutputType | null
    _min: SlaPriorityMultiplierMinAggregateOutputType | null
    _max: SlaPriorityMultiplierMaxAggregateOutputType | null
  }

  export type SlaPriorityMultiplierAvgAggregateOutputType = {
    multiplier: number | null
  }

  export type SlaPriorityMultiplierSumAggregateOutputType = {
    multiplier: number | null
  }

  export type SlaPriorityMultiplierMinAggregateOutputType = {
    id: string | null
    priority: $Enums.Priority | null
    multiplier: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlaPriorityMultiplierMaxAggregateOutputType = {
    id: string | null
    priority: $Enums.Priority | null
    multiplier: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlaPriorityMultiplierCountAggregateOutputType = {
    id: number
    priority: number
    multiplier: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SlaPriorityMultiplierAvgAggregateInputType = {
    multiplier?: true
  }

  export type SlaPriorityMultiplierSumAggregateInputType = {
    multiplier?: true
  }

  export type SlaPriorityMultiplierMinAggregateInputType = {
    id?: true
    priority?: true
    multiplier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlaPriorityMultiplierMaxAggregateInputType = {
    id?: true
    priority?: true
    multiplier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlaPriorityMultiplierCountAggregateInputType = {
    id?: true
    priority?: true
    multiplier?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SlaPriorityMultiplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlaPriorityMultiplier to aggregate.
     */
    where?: SlaPriorityMultiplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPriorityMultipliers to fetch.
     */
    orderBy?: SlaPriorityMultiplierOrderByWithRelationInput | SlaPriorityMultiplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlaPriorityMultiplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPriorityMultipliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPriorityMultipliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlaPriorityMultipliers
    **/
    _count?: true | SlaPriorityMultiplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlaPriorityMultiplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlaPriorityMultiplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlaPriorityMultiplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlaPriorityMultiplierMaxAggregateInputType
  }

  export type GetSlaPriorityMultiplierAggregateType<T extends SlaPriorityMultiplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSlaPriorityMultiplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlaPriorityMultiplier[P]>
      : GetScalarType<T[P], AggregateSlaPriorityMultiplier[P]>
  }




  export type SlaPriorityMultiplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlaPriorityMultiplierWhereInput
    orderBy?: SlaPriorityMultiplierOrderByWithAggregationInput | SlaPriorityMultiplierOrderByWithAggregationInput[]
    by: SlaPriorityMultiplierScalarFieldEnum[] | SlaPriorityMultiplierScalarFieldEnum
    having?: SlaPriorityMultiplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlaPriorityMultiplierCountAggregateInputType | true
    _avg?: SlaPriorityMultiplierAvgAggregateInputType
    _sum?: SlaPriorityMultiplierSumAggregateInputType
    _min?: SlaPriorityMultiplierMinAggregateInputType
    _max?: SlaPriorityMultiplierMaxAggregateInputType
  }

  export type SlaPriorityMultiplierGroupByOutputType = {
    id: string
    priority: $Enums.Priority
    multiplier: number
    createdAt: Date
    updatedAt: Date
    _count: SlaPriorityMultiplierCountAggregateOutputType | null
    _avg: SlaPriorityMultiplierAvgAggregateOutputType | null
    _sum: SlaPriorityMultiplierSumAggregateOutputType | null
    _min: SlaPriorityMultiplierMinAggregateOutputType | null
    _max: SlaPriorityMultiplierMaxAggregateOutputType | null
  }

  type GetSlaPriorityMultiplierGroupByPayload<T extends SlaPriorityMultiplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlaPriorityMultiplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlaPriorityMultiplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlaPriorityMultiplierGroupByOutputType[P]>
            : GetScalarType<T[P], SlaPriorityMultiplierGroupByOutputType[P]>
        }
      >
    >


  export type SlaPriorityMultiplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority?: boolean
    multiplier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slaPriorityMultiplier"]>

  export type SlaPriorityMultiplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority?: boolean
    multiplier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slaPriorityMultiplier"]>

  export type SlaPriorityMultiplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority?: boolean
    multiplier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slaPriorityMultiplier"]>

  export type SlaPriorityMultiplierSelectScalar = {
    id?: boolean
    priority?: boolean
    multiplier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SlaPriorityMultiplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "priority" | "multiplier" | "createdAt" | "updatedAt", ExtArgs["result"]["slaPriorityMultiplier"]>

  export type $SlaPriorityMultiplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlaPriorityMultiplier"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      priority: $Enums.Priority
      multiplier: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["slaPriorityMultiplier"]>
    composites: {}
  }

  type SlaPriorityMultiplierGetPayload<S extends boolean | null | undefined | SlaPriorityMultiplierDefaultArgs> = $Result.GetResult<Prisma.$SlaPriorityMultiplierPayload, S>

  type SlaPriorityMultiplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlaPriorityMultiplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlaPriorityMultiplierCountAggregateInputType | true
    }

  export interface SlaPriorityMultiplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlaPriorityMultiplier'], meta: { name: 'SlaPriorityMultiplier' } }
    /**
     * Find zero or one SlaPriorityMultiplier that matches the filter.
     * @param {SlaPriorityMultiplierFindUniqueArgs} args - Arguments to find a SlaPriorityMultiplier
     * @example
     * // Get one SlaPriorityMultiplier
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlaPriorityMultiplierFindUniqueArgs>(args: SelectSubset<T, SlaPriorityMultiplierFindUniqueArgs<ExtArgs>>): Prisma__SlaPriorityMultiplierClient<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlaPriorityMultiplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlaPriorityMultiplierFindUniqueOrThrowArgs} args - Arguments to find a SlaPriorityMultiplier
     * @example
     * // Get one SlaPriorityMultiplier
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlaPriorityMultiplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SlaPriorityMultiplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlaPriorityMultiplierClient<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlaPriorityMultiplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPriorityMultiplierFindFirstArgs} args - Arguments to find a SlaPriorityMultiplier
     * @example
     * // Get one SlaPriorityMultiplier
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlaPriorityMultiplierFindFirstArgs>(args?: SelectSubset<T, SlaPriorityMultiplierFindFirstArgs<ExtArgs>>): Prisma__SlaPriorityMultiplierClient<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlaPriorityMultiplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPriorityMultiplierFindFirstOrThrowArgs} args - Arguments to find a SlaPriorityMultiplier
     * @example
     * // Get one SlaPriorityMultiplier
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlaPriorityMultiplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SlaPriorityMultiplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlaPriorityMultiplierClient<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlaPriorityMultipliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPriorityMultiplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlaPriorityMultipliers
     * const slaPriorityMultipliers = await prisma.slaPriorityMultiplier.findMany()
     * 
     * // Get first 10 SlaPriorityMultipliers
     * const slaPriorityMultipliers = await prisma.slaPriorityMultiplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slaPriorityMultiplierWithIdOnly = await prisma.slaPriorityMultiplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlaPriorityMultiplierFindManyArgs>(args?: SelectSubset<T, SlaPriorityMultiplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlaPriorityMultiplier.
     * @param {SlaPriorityMultiplierCreateArgs} args - Arguments to create a SlaPriorityMultiplier.
     * @example
     * // Create one SlaPriorityMultiplier
     * const SlaPriorityMultiplier = await prisma.slaPriorityMultiplier.create({
     *   data: {
     *     // ... data to create a SlaPriorityMultiplier
     *   }
     * })
     * 
     */
    create<T extends SlaPriorityMultiplierCreateArgs>(args: SelectSubset<T, SlaPriorityMultiplierCreateArgs<ExtArgs>>): Prisma__SlaPriorityMultiplierClient<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlaPriorityMultipliers.
     * @param {SlaPriorityMultiplierCreateManyArgs} args - Arguments to create many SlaPriorityMultipliers.
     * @example
     * // Create many SlaPriorityMultipliers
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlaPriorityMultiplierCreateManyArgs>(args?: SelectSubset<T, SlaPriorityMultiplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlaPriorityMultipliers and returns the data saved in the database.
     * @param {SlaPriorityMultiplierCreateManyAndReturnArgs} args - Arguments to create many SlaPriorityMultipliers.
     * @example
     * // Create many SlaPriorityMultipliers
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlaPriorityMultipliers and only return the `id`
     * const slaPriorityMultiplierWithIdOnly = await prisma.slaPriorityMultiplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlaPriorityMultiplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SlaPriorityMultiplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlaPriorityMultiplier.
     * @param {SlaPriorityMultiplierDeleteArgs} args - Arguments to delete one SlaPriorityMultiplier.
     * @example
     * // Delete one SlaPriorityMultiplier
     * const SlaPriorityMultiplier = await prisma.slaPriorityMultiplier.delete({
     *   where: {
     *     // ... filter to delete one SlaPriorityMultiplier
     *   }
     * })
     * 
     */
    delete<T extends SlaPriorityMultiplierDeleteArgs>(args: SelectSubset<T, SlaPriorityMultiplierDeleteArgs<ExtArgs>>): Prisma__SlaPriorityMultiplierClient<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlaPriorityMultiplier.
     * @param {SlaPriorityMultiplierUpdateArgs} args - Arguments to update one SlaPriorityMultiplier.
     * @example
     * // Update one SlaPriorityMultiplier
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlaPriorityMultiplierUpdateArgs>(args: SelectSubset<T, SlaPriorityMultiplierUpdateArgs<ExtArgs>>): Prisma__SlaPriorityMultiplierClient<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlaPriorityMultipliers.
     * @param {SlaPriorityMultiplierDeleteManyArgs} args - Arguments to filter SlaPriorityMultipliers to delete.
     * @example
     * // Delete a few SlaPriorityMultipliers
     * const { count } = await prisma.slaPriorityMultiplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlaPriorityMultiplierDeleteManyArgs>(args?: SelectSubset<T, SlaPriorityMultiplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlaPriorityMultipliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPriorityMultiplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlaPriorityMultipliers
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlaPriorityMultiplierUpdateManyArgs>(args: SelectSubset<T, SlaPriorityMultiplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlaPriorityMultipliers and returns the data updated in the database.
     * @param {SlaPriorityMultiplierUpdateManyAndReturnArgs} args - Arguments to update many SlaPriorityMultipliers.
     * @example
     * // Update many SlaPriorityMultipliers
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlaPriorityMultipliers and only return the `id`
     * const slaPriorityMultiplierWithIdOnly = await prisma.slaPriorityMultiplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlaPriorityMultiplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SlaPriorityMultiplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlaPriorityMultiplier.
     * @param {SlaPriorityMultiplierUpsertArgs} args - Arguments to update or create a SlaPriorityMultiplier.
     * @example
     * // Update or create a SlaPriorityMultiplier
     * const slaPriorityMultiplier = await prisma.slaPriorityMultiplier.upsert({
     *   create: {
     *     // ... data to create a SlaPriorityMultiplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlaPriorityMultiplier we want to update
     *   }
     * })
     */
    upsert<T extends SlaPriorityMultiplierUpsertArgs>(args: SelectSubset<T, SlaPriorityMultiplierUpsertArgs<ExtArgs>>): Prisma__SlaPriorityMultiplierClient<$Result.GetResult<Prisma.$SlaPriorityMultiplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlaPriorityMultipliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPriorityMultiplierCountArgs} args - Arguments to filter SlaPriorityMultipliers to count.
     * @example
     * // Count the number of SlaPriorityMultipliers
     * const count = await prisma.slaPriorityMultiplier.count({
     *   where: {
     *     // ... the filter for the SlaPriorityMultipliers we want to count
     *   }
     * })
    **/
    count<T extends SlaPriorityMultiplierCountArgs>(
      args?: Subset<T, SlaPriorityMultiplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlaPriorityMultiplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlaPriorityMultiplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPriorityMultiplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlaPriorityMultiplierAggregateArgs>(args: Subset<T, SlaPriorityMultiplierAggregateArgs>): Prisma.PrismaPromise<GetSlaPriorityMultiplierAggregateType<T>>

    /**
     * Group by SlaPriorityMultiplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaPriorityMultiplierGroupByArgs} args - Group by arguments.
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
      T extends SlaPriorityMultiplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlaPriorityMultiplierGroupByArgs['orderBy'] }
        : { orderBy?: SlaPriorityMultiplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlaPriorityMultiplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlaPriorityMultiplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlaPriorityMultiplier model
   */
  readonly fields: SlaPriorityMultiplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlaPriorityMultiplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlaPriorityMultiplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SlaPriorityMultiplier model
   */
  interface SlaPriorityMultiplierFieldRefs {
    readonly id: FieldRef<"SlaPriorityMultiplier", 'String'>
    readonly priority: FieldRef<"SlaPriorityMultiplier", 'Priority'>
    readonly multiplier: FieldRef<"SlaPriorityMultiplier", 'Float'>
    readonly createdAt: FieldRef<"SlaPriorityMultiplier", 'DateTime'>
    readonly updatedAt: FieldRef<"SlaPriorityMultiplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlaPriorityMultiplier findUnique
   */
  export type SlaPriorityMultiplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * Filter, which SlaPriorityMultiplier to fetch.
     */
    where: SlaPriorityMultiplierWhereUniqueInput
  }

  /**
   * SlaPriorityMultiplier findUniqueOrThrow
   */
  export type SlaPriorityMultiplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * Filter, which SlaPriorityMultiplier to fetch.
     */
    where: SlaPriorityMultiplierWhereUniqueInput
  }

  /**
   * SlaPriorityMultiplier findFirst
   */
  export type SlaPriorityMultiplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * Filter, which SlaPriorityMultiplier to fetch.
     */
    where?: SlaPriorityMultiplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPriorityMultipliers to fetch.
     */
    orderBy?: SlaPriorityMultiplierOrderByWithRelationInput | SlaPriorityMultiplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlaPriorityMultipliers.
     */
    cursor?: SlaPriorityMultiplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPriorityMultipliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPriorityMultipliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlaPriorityMultipliers.
     */
    distinct?: SlaPriorityMultiplierScalarFieldEnum | SlaPriorityMultiplierScalarFieldEnum[]
  }

  /**
   * SlaPriorityMultiplier findFirstOrThrow
   */
  export type SlaPriorityMultiplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * Filter, which SlaPriorityMultiplier to fetch.
     */
    where?: SlaPriorityMultiplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPriorityMultipliers to fetch.
     */
    orderBy?: SlaPriorityMultiplierOrderByWithRelationInput | SlaPriorityMultiplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlaPriorityMultipliers.
     */
    cursor?: SlaPriorityMultiplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPriorityMultipliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPriorityMultipliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlaPriorityMultipliers.
     */
    distinct?: SlaPriorityMultiplierScalarFieldEnum | SlaPriorityMultiplierScalarFieldEnum[]
  }

  /**
   * SlaPriorityMultiplier findMany
   */
  export type SlaPriorityMultiplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * Filter, which SlaPriorityMultipliers to fetch.
     */
    where?: SlaPriorityMultiplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaPriorityMultipliers to fetch.
     */
    orderBy?: SlaPriorityMultiplierOrderByWithRelationInput | SlaPriorityMultiplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlaPriorityMultipliers.
     */
    cursor?: SlaPriorityMultiplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaPriorityMultipliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaPriorityMultipliers.
     */
    skip?: number
    distinct?: SlaPriorityMultiplierScalarFieldEnum | SlaPriorityMultiplierScalarFieldEnum[]
  }

  /**
   * SlaPriorityMultiplier create
   */
  export type SlaPriorityMultiplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * The data needed to create a SlaPriorityMultiplier.
     */
    data: XOR<SlaPriorityMultiplierCreateInput, SlaPriorityMultiplierUncheckedCreateInput>
  }

  /**
   * SlaPriorityMultiplier createMany
   */
  export type SlaPriorityMultiplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlaPriorityMultipliers.
     */
    data: SlaPriorityMultiplierCreateManyInput | SlaPriorityMultiplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlaPriorityMultiplier createManyAndReturn
   */
  export type SlaPriorityMultiplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * The data used to create many SlaPriorityMultipliers.
     */
    data: SlaPriorityMultiplierCreateManyInput | SlaPriorityMultiplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlaPriorityMultiplier update
   */
  export type SlaPriorityMultiplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * The data needed to update a SlaPriorityMultiplier.
     */
    data: XOR<SlaPriorityMultiplierUpdateInput, SlaPriorityMultiplierUncheckedUpdateInput>
    /**
     * Choose, which SlaPriorityMultiplier to update.
     */
    where: SlaPriorityMultiplierWhereUniqueInput
  }

  /**
   * SlaPriorityMultiplier updateMany
   */
  export type SlaPriorityMultiplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlaPriorityMultipliers.
     */
    data: XOR<SlaPriorityMultiplierUpdateManyMutationInput, SlaPriorityMultiplierUncheckedUpdateManyInput>
    /**
     * Filter which SlaPriorityMultipliers to update
     */
    where?: SlaPriorityMultiplierWhereInput
    /**
     * Limit how many SlaPriorityMultipliers to update.
     */
    limit?: number
  }

  /**
   * SlaPriorityMultiplier updateManyAndReturn
   */
  export type SlaPriorityMultiplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * The data used to update SlaPriorityMultipliers.
     */
    data: XOR<SlaPriorityMultiplierUpdateManyMutationInput, SlaPriorityMultiplierUncheckedUpdateManyInput>
    /**
     * Filter which SlaPriorityMultipliers to update
     */
    where?: SlaPriorityMultiplierWhereInput
    /**
     * Limit how many SlaPriorityMultipliers to update.
     */
    limit?: number
  }

  /**
   * SlaPriorityMultiplier upsert
   */
  export type SlaPriorityMultiplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * The filter to search for the SlaPriorityMultiplier to update in case it exists.
     */
    where: SlaPriorityMultiplierWhereUniqueInput
    /**
     * In case the SlaPriorityMultiplier found by the `where` argument doesn't exist, create a new SlaPriorityMultiplier with this data.
     */
    create: XOR<SlaPriorityMultiplierCreateInput, SlaPriorityMultiplierUncheckedCreateInput>
    /**
     * In case the SlaPriorityMultiplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlaPriorityMultiplierUpdateInput, SlaPriorityMultiplierUncheckedUpdateInput>
  }

  /**
   * SlaPriorityMultiplier delete
   */
  export type SlaPriorityMultiplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
    /**
     * Filter which SlaPriorityMultiplier to delete.
     */
    where: SlaPriorityMultiplierWhereUniqueInput
  }

  /**
   * SlaPriorityMultiplier deleteMany
   */
  export type SlaPriorityMultiplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlaPriorityMultipliers to delete
     */
    where?: SlaPriorityMultiplierWhereInput
    /**
     * Limit how many SlaPriorityMultipliers to delete.
     */
    limit?: number
  }

  /**
   * SlaPriorityMultiplier without action
   */
  export type SlaPriorityMultiplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaPriorityMultiplier
     */
    select?: SlaPriorityMultiplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaPriorityMultiplier
     */
    omit?: SlaPriorityMultiplierOmit<ExtArgs> | null
  }


  /**
   * Model SlaBusinessHours
   */

  export type AggregateSlaBusinessHours = {
    _count: SlaBusinessHoursCountAggregateOutputType | null
    _avg: SlaBusinessHoursAvgAggregateOutputType | null
    _sum: SlaBusinessHoursSumAggregateOutputType | null
    _min: SlaBusinessHoursMinAggregateOutputType | null
    _max: SlaBusinessHoursMaxAggregateOutputType | null
  }

  export type SlaBusinessHoursAvgAggregateOutputType = {
    dayOfWeek: number | null
    startHour: number | null
    startMinute: number | null
    endHour: number | null
    endMinute: number | null
  }

  export type SlaBusinessHoursSumAggregateOutputType = {
    dayOfWeek: number | null
    startHour: number | null
    startMinute: number | null
    endHour: number | null
    endMinute: number | null
  }

  export type SlaBusinessHoursMinAggregateOutputType = {
    id: string | null
    dayOfWeek: number | null
    startHour: number | null
    startMinute: number | null
    endHour: number | null
    endMinute: number | null
    isWorkDay: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlaBusinessHoursMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: number | null
    startHour: number | null
    startMinute: number | null
    endHour: number | null
    endMinute: number | null
    isWorkDay: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlaBusinessHoursCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    isWorkDay: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SlaBusinessHoursAvgAggregateInputType = {
    dayOfWeek?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
  }

  export type SlaBusinessHoursSumAggregateInputType = {
    dayOfWeek?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
  }

  export type SlaBusinessHoursMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
    isWorkDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlaBusinessHoursMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
    isWorkDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlaBusinessHoursCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
    isWorkDay?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SlaBusinessHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlaBusinessHours to aggregate.
     */
    where?: SlaBusinessHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaBusinessHours to fetch.
     */
    orderBy?: SlaBusinessHoursOrderByWithRelationInput | SlaBusinessHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlaBusinessHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaBusinessHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaBusinessHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlaBusinessHours
    **/
    _count?: true | SlaBusinessHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlaBusinessHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlaBusinessHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlaBusinessHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlaBusinessHoursMaxAggregateInputType
  }

  export type GetSlaBusinessHoursAggregateType<T extends SlaBusinessHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateSlaBusinessHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlaBusinessHours[P]>
      : GetScalarType<T[P], AggregateSlaBusinessHours[P]>
  }




  export type SlaBusinessHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlaBusinessHoursWhereInput
    orderBy?: SlaBusinessHoursOrderByWithAggregationInput | SlaBusinessHoursOrderByWithAggregationInput[]
    by: SlaBusinessHoursScalarFieldEnum[] | SlaBusinessHoursScalarFieldEnum
    having?: SlaBusinessHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlaBusinessHoursCountAggregateInputType | true
    _avg?: SlaBusinessHoursAvgAggregateInputType
    _sum?: SlaBusinessHoursSumAggregateInputType
    _min?: SlaBusinessHoursMinAggregateInputType
    _max?: SlaBusinessHoursMaxAggregateInputType
  }

  export type SlaBusinessHoursGroupByOutputType = {
    id: string
    dayOfWeek: number
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    isWorkDay: boolean
    createdAt: Date
    updatedAt: Date
    _count: SlaBusinessHoursCountAggregateOutputType | null
    _avg: SlaBusinessHoursAvgAggregateOutputType | null
    _sum: SlaBusinessHoursSumAggregateOutputType | null
    _min: SlaBusinessHoursMinAggregateOutputType | null
    _max: SlaBusinessHoursMaxAggregateOutputType | null
  }

  type GetSlaBusinessHoursGroupByPayload<T extends SlaBusinessHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlaBusinessHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlaBusinessHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlaBusinessHoursGroupByOutputType[P]>
            : GetScalarType<T[P], SlaBusinessHoursGroupByOutputType[P]>
        }
      >
    >


  export type SlaBusinessHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    startMinute?: boolean
    endHour?: boolean
    endMinute?: boolean
    isWorkDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slaBusinessHours"]>

  export type SlaBusinessHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    startMinute?: boolean
    endHour?: boolean
    endMinute?: boolean
    isWorkDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slaBusinessHours"]>

  export type SlaBusinessHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    startMinute?: boolean
    endHour?: boolean
    endMinute?: boolean
    isWorkDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slaBusinessHours"]>

  export type SlaBusinessHoursSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    startMinute?: boolean
    endHour?: boolean
    endMinute?: boolean
    isWorkDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SlaBusinessHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startHour" | "startMinute" | "endHour" | "endMinute" | "isWorkDay" | "createdAt" | "updatedAt", ExtArgs["result"]["slaBusinessHours"]>

  export type $SlaBusinessHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlaBusinessHours"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: number
      startHour: number
      startMinute: number
      endHour: number
      endMinute: number
      isWorkDay: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["slaBusinessHours"]>
    composites: {}
  }

  type SlaBusinessHoursGetPayload<S extends boolean | null | undefined | SlaBusinessHoursDefaultArgs> = $Result.GetResult<Prisma.$SlaBusinessHoursPayload, S>

  type SlaBusinessHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlaBusinessHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlaBusinessHoursCountAggregateInputType | true
    }

  export interface SlaBusinessHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlaBusinessHours'], meta: { name: 'SlaBusinessHours' } }
    /**
     * Find zero or one SlaBusinessHours that matches the filter.
     * @param {SlaBusinessHoursFindUniqueArgs} args - Arguments to find a SlaBusinessHours
     * @example
     * // Get one SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlaBusinessHoursFindUniqueArgs>(args: SelectSubset<T, SlaBusinessHoursFindUniqueArgs<ExtArgs>>): Prisma__SlaBusinessHoursClient<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlaBusinessHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlaBusinessHoursFindUniqueOrThrowArgs} args - Arguments to find a SlaBusinessHours
     * @example
     * // Get one SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlaBusinessHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, SlaBusinessHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlaBusinessHoursClient<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlaBusinessHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaBusinessHoursFindFirstArgs} args - Arguments to find a SlaBusinessHours
     * @example
     * // Get one SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlaBusinessHoursFindFirstArgs>(args?: SelectSubset<T, SlaBusinessHoursFindFirstArgs<ExtArgs>>): Prisma__SlaBusinessHoursClient<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlaBusinessHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaBusinessHoursFindFirstOrThrowArgs} args - Arguments to find a SlaBusinessHours
     * @example
     * // Get one SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlaBusinessHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, SlaBusinessHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlaBusinessHoursClient<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlaBusinessHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaBusinessHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.findMany()
     * 
     * // Get first 10 SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slaBusinessHoursWithIdOnly = await prisma.slaBusinessHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlaBusinessHoursFindManyArgs>(args?: SelectSubset<T, SlaBusinessHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlaBusinessHours.
     * @param {SlaBusinessHoursCreateArgs} args - Arguments to create a SlaBusinessHours.
     * @example
     * // Create one SlaBusinessHours
     * const SlaBusinessHours = await prisma.slaBusinessHours.create({
     *   data: {
     *     // ... data to create a SlaBusinessHours
     *   }
     * })
     * 
     */
    create<T extends SlaBusinessHoursCreateArgs>(args: SelectSubset<T, SlaBusinessHoursCreateArgs<ExtArgs>>): Prisma__SlaBusinessHoursClient<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlaBusinessHours.
     * @param {SlaBusinessHoursCreateManyArgs} args - Arguments to create many SlaBusinessHours.
     * @example
     * // Create many SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlaBusinessHoursCreateManyArgs>(args?: SelectSubset<T, SlaBusinessHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlaBusinessHours and returns the data saved in the database.
     * @param {SlaBusinessHoursCreateManyAndReturnArgs} args - Arguments to create many SlaBusinessHours.
     * @example
     * // Create many SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlaBusinessHours and only return the `id`
     * const slaBusinessHoursWithIdOnly = await prisma.slaBusinessHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlaBusinessHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, SlaBusinessHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlaBusinessHours.
     * @param {SlaBusinessHoursDeleteArgs} args - Arguments to delete one SlaBusinessHours.
     * @example
     * // Delete one SlaBusinessHours
     * const SlaBusinessHours = await prisma.slaBusinessHours.delete({
     *   where: {
     *     // ... filter to delete one SlaBusinessHours
     *   }
     * })
     * 
     */
    delete<T extends SlaBusinessHoursDeleteArgs>(args: SelectSubset<T, SlaBusinessHoursDeleteArgs<ExtArgs>>): Prisma__SlaBusinessHoursClient<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlaBusinessHours.
     * @param {SlaBusinessHoursUpdateArgs} args - Arguments to update one SlaBusinessHours.
     * @example
     * // Update one SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlaBusinessHoursUpdateArgs>(args: SelectSubset<T, SlaBusinessHoursUpdateArgs<ExtArgs>>): Prisma__SlaBusinessHoursClient<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlaBusinessHours.
     * @param {SlaBusinessHoursDeleteManyArgs} args - Arguments to filter SlaBusinessHours to delete.
     * @example
     * // Delete a few SlaBusinessHours
     * const { count } = await prisma.slaBusinessHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlaBusinessHoursDeleteManyArgs>(args?: SelectSubset<T, SlaBusinessHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlaBusinessHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaBusinessHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlaBusinessHoursUpdateManyArgs>(args: SelectSubset<T, SlaBusinessHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlaBusinessHours and returns the data updated in the database.
     * @param {SlaBusinessHoursUpdateManyAndReturnArgs} args - Arguments to update many SlaBusinessHours.
     * @example
     * // Update many SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlaBusinessHours and only return the `id`
     * const slaBusinessHoursWithIdOnly = await prisma.slaBusinessHours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlaBusinessHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, SlaBusinessHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlaBusinessHours.
     * @param {SlaBusinessHoursUpsertArgs} args - Arguments to update or create a SlaBusinessHours.
     * @example
     * // Update or create a SlaBusinessHours
     * const slaBusinessHours = await prisma.slaBusinessHours.upsert({
     *   create: {
     *     // ... data to create a SlaBusinessHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlaBusinessHours we want to update
     *   }
     * })
     */
    upsert<T extends SlaBusinessHoursUpsertArgs>(args: SelectSubset<T, SlaBusinessHoursUpsertArgs<ExtArgs>>): Prisma__SlaBusinessHoursClient<$Result.GetResult<Prisma.$SlaBusinessHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlaBusinessHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaBusinessHoursCountArgs} args - Arguments to filter SlaBusinessHours to count.
     * @example
     * // Count the number of SlaBusinessHours
     * const count = await prisma.slaBusinessHours.count({
     *   where: {
     *     // ... the filter for the SlaBusinessHours we want to count
     *   }
     * })
    **/
    count<T extends SlaBusinessHoursCountArgs>(
      args?: Subset<T, SlaBusinessHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlaBusinessHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlaBusinessHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaBusinessHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlaBusinessHoursAggregateArgs>(args: Subset<T, SlaBusinessHoursAggregateArgs>): Prisma.PrismaPromise<GetSlaBusinessHoursAggregateType<T>>

    /**
     * Group by SlaBusinessHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlaBusinessHoursGroupByArgs} args - Group by arguments.
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
      T extends SlaBusinessHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlaBusinessHoursGroupByArgs['orderBy'] }
        : { orderBy?: SlaBusinessHoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlaBusinessHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlaBusinessHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlaBusinessHours model
   */
  readonly fields: SlaBusinessHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlaBusinessHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlaBusinessHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SlaBusinessHours model
   */
  interface SlaBusinessHoursFieldRefs {
    readonly id: FieldRef<"SlaBusinessHours", 'String'>
    readonly dayOfWeek: FieldRef<"SlaBusinessHours", 'Int'>
    readonly startHour: FieldRef<"SlaBusinessHours", 'Int'>
    readonly startMinute: FieldRef<"SlaBusinessHours", 'Int'>
    readonly endHour: FieldRef<"SlaBusinessHours", 'Int'>
    readonly endMinute: FieldRef<"SlaBusinessHours", 'Int'>
    readonly isWorkDay: FieldRef<"SlaBusinessHours", 'Boolean'>
    readonly createdAt: FieldRef<"SlaBusinessHours", 'DateTime'>
    readonly updatedAt: FieldRef<"SlaBusinessHours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlaBusinessHours findUnique
   */
  export type SlaBusinessHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which SlaBusinessHours to fetch.
     */
    where: SlaBusinessHoursWhereUniqueInput
  }

  /**
   * SlaBusinessHours findUniqueOrThrow
   */
  export type SlaBusinessHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which SlaBusinessHours to fetch.
     */
    where: SlaBusinessHoursWhereUniqueInput
  }

  /**
   * SlaBusinessHours findFirst
   */
  export type SlaBusinessHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which SlaBusinessHours to fetch.
     */
    where?: SlaBusinessHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaBusinessHours to fetch.
     */
    orderBy?: SlaBusinessHoursOrderByWithRelationInput | SlaBusinessHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlaBusinessHours.
     */
    cursor?: SlaBusinessHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaBusinessHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaBusinessHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlaBusinessHours.
     */
    distinct?: SlaBusinessHoursScalarFieldEnum | SlaBusinessHoursScalarFieldEnum[]
  }

  /**
   * SlaBusinessHours findFirstOrThrow
   */
  export type SlaBusinessHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which SlaBusinessHours to fetch.
     */
    where?: SlaBusinessHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaBusinessHours to fetch.
     */
    orderBy?: SlaBusinessHoursOrderByWithRelationInput | SlaBusinessHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlaBusinessHours.
     */
    cursor?: SlaBusinessHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaBusinessHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaBusinessHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlaBusinessHours.
     */
    distinct?: SlaBusinessHoursScalarFieldEnum | SlaBusinessHoursScalarFieldEnum[]
  }

  /**
   * SlaBusinessHours findMany
   */
  export type SlaBusinessHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which SlaBusinessHours to fetch.
     */
    where?: SlaBusinessHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlaBusinessHours to fetch.
     */
    orderBy?: SlaBusinessHoursOrderByWithRelationInput | SlaBusinessHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlaBusinessHours.
     */
    cursor?: SlaBusinessHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlaBusinessHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlaBusinessHours.
     */
    skip?: number
    distinct?: SlaBusinessHoursScalarFieldEnum | SlaBusinessHoursScalarFieldEnum[]
  }

  /**
   * SlaBusinessHours create
   */
  export type SlaBusinessHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * The data needed to create a SlaBusinessHours.
     */
    data: XOR<SlaBusinessHoursCreateInput, SlaBusinessHoursUncheckedCreateInput>
  }

  /**
   * SlaBusinessHours createMany
   */
  export type SlaBusinessHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlaBusinessHours.
     */
    data: SlaBusinessHoursCreateManyInput | SlaBusinessHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlaBusinessHours createManyAndReturn
   */
  export type SlaBusinessHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * The data used to create many SlaBusinessHours.
     */
    data: SlaBusinessHoursCreateManyInput | SlaBusinessHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlaBusinessHours update
   */
  export type SlaBusinessHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * The data needed to update a SlaBusinessHours.
     */
    data: XOR<SlaBusinessHoursUpdateInput, SlaBusinessHoursUncheckedUpdateInput>
    /**
     * Choose, which SlaBusinessHours to update.
     */
    where: SlaBusinessHoursWhereUniqueInput
  }

  /**
   * SlaBusinessHours updateMany
   */
  export type SlaBusinessHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlaBusinessHours.
     */
    data: XOR<SlaBusinessHoursUpdateManyMutationInput, SlaBusinessHoursUncheckedUpdateManyInput>
    /**
     * Filter which SlaBusinessHours to update
     */
    where?: SlaBusinessHoursWhereInput
    /**
     * Limit how many SlaBusinessHours to update.
     */
    limit?: number
  }

  /**
   * SlaBusinessHours updateManyAndReturn
   */
  export type SlaBusinessHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * The data used to update SlaBusinessHours.
     */
    data: XOR<SlaBusinessHoursUpdateManyMutationInput, SlaBusinessHoursUncheckedUpdateManyInput>
    /**
     * Filter which SlaBusinessHours to update
     */
    where?: SlaBusinessHoursWhereInput
    /**
     * Limit how many SlaBusinessHours to update.
     */
    limit?: number
  }

  /**
   * SlaBusinessHours upsert
   */
  export type SlaBusinessHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * The filter to search for the SlaBusinessHours to update in case it exists.
     */
    where: SlaBusinessHoursWhereUniqueInput
    /**
     * In case the SlaBusinessHours found by the `where` argument doesn't exist, create a new SlaBusinessHours with this data.
     */
    create: XOR<SlaBusinessHoursCreateInput, SlaBusinessHoursUncheckedCreateInput>
    /**
     * In case the SlaBusinessHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlaBusinessHoursUpdateInput, SlaBusinessHoursUncheckedUpdateInput>
  }

  /**
   * SlaBusinessHours delete
   */
  export type SlaBusinessHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
    /**
     * Filter which SlaBusinessHours to delete.
     */
    where: SlaBusinessHoursWhereUniqueInput
  }

  /**
   * SlaBusinessHours deleteMany
   */
  export type SlaBusinessHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlaBusinessHours to delete
     */
    where?: SlaBusinessHoursWhereInput
    /**
     * Limit how many SlaBusinessHours to delete.
     */
    limit?: number
  }

  /**
   * SlaBusinessHours without action
   */
  export type SlaBusinessHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlaBusinessHours
     */
    select?: SlaBusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlaBusinessHours
     */
    omit?: SlaBusinessHoursOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    otpVerifiedAt: 'otpVerifiedAt',
    twoFactorEnabled: 'twoFactorEnabled',
    isApproved: 'isApproved',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ContactPersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type ContactPersonScalarFieldEnum = (typeof ContactPersonScalarFieldEnum)[keyof typeof ContactPersonScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId',
    assigneeId: 'assigneeId',
    ticketNumber: 'ticketNumber',
    slaId: 'slaId',
    responseDeadline: 'responseDeadline',
    resolutionDeadline: 'resolutionDeadline',
    respondedAt: 'respondedAt',
    resolvedAt: 'resolvedAt',
    slaBreached: 'slaBreached'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    ticketId: 'ticketId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    path: 'path',
    mimeType: 'mimeType',
    size: 'size',
    createdAt: 'createdAt',
    ticketId: 'ticketId',
    commentId: 'commentId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const AppSettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppSettingScalarFieldEnum = (typeof AppSettingScalarFieldEnum)[keyof typeof AppSettingScalarFieldEnum]


  export const TicketCounterScalarFieldEnum: {
    id: 'id',
    date: 'date',
    counter: 'counter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketCounterScalarFieldEnum = (typeof TicketCounterScalarFieldEnum)[keyof typeof TicketCounterScalarFieldEnum]


  export const SlaPolicyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    responseTimeHours: 'responseTimeHours',
    resolutionTimeHours: 'resolutionTimeHours',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    priorityLevel: 'priorityLevel',
    organizationId: 'organizationId'
  };

  export type SlaPolicyScalarFieldEnum = (typeof SlaPolicyScalarFieldEnum)[keyof typeof SlaPolicyScalarFieldEnum]


  export const SlaPriorityMultiplierScalarFieldEnum: {
    id: 'id',
    priority: 'priority',
    multiplier: 'multiplier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SlaPriorityMultiplierScalarFieldEnum = (typeof SlaPriorityMultiplierScalarFieldEnum)[keyof typeof SlaPriorityMultiplierScalarFieldEnum]


  export const SlaBusinessHoursScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startHour: 'startHour',
    startMinute: 'startMinute',
    endHour: 'endHour',
    endMinute: 'endMinute',
    isWorkDay: 'isWorkDay',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SlaBusinessHoursScalarFieldEnum = (typeof SlaBusinessHoursScalarFieldEnum)[keyof typeof SlaBusinessHoursScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    otpVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    isApproved?: BoolFilter<"User"> | boolean
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    approvedBy?: StringNullableFilter<"User"> | string | null
    approvedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvedUsers?: UserListRelationFilter
    comments?: CommentListRelationFilter
    assignedTickets?: TicketListRelationFilter
    tickets?: TicketListRelationFilter
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    otpVerifiedAt?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedByUser?: UserOrderByWithRelationInput
    approvedUsers?: UserOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    assignedTickets?: TicketOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    otpVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    isApproved?: BoolFilter<"User"> | boolean
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    approvedBy?: StringNullableFilter<"User"> | string | null
    approvedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvedUsers?: UserListRelationFilter
    comments?: CommentListRelationFilter
    assignedTickets?: TicketListRelationFilter
    tickets?: TicketListRelationFilter
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    otpVerifiedAt?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    organizationId?: StringNullableWithAggregatesFilter<"User"> | string | null
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    otpVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    isApproved?: BoolWithAggregatesFilter<"User"> | boolean
    approvedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    logo?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    contactPersons?: ContactPersonListRelationFilter
    users?: UserListRelationFilter
    slaPolicies?: SlaPolicyListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactPersons?: ContactPersonOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    slaPolicies?: SlaPolicyOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    logo?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    contactPersons?: ContactPersonListRelationFilter
    users?: UserListRelationFilter
    slaPolicies?: SlaPolicyListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    logo?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type ContactPersonWhereInput = {
    AND?: ContactPersonWhereInput | ContactPersonWhereInput[]
    OR?: ContactPersonWhereInput[]
    NOT?: ContactPersonWhereInput | ContactPersonWhereInput[]
    id?: StringFilter<"ContactPerson"> | string
    name?: StringFilter<"ContactPerson"> | string
    email?: StringFilter<"ContactPerson"> | string
    phoneNumber?: StringFilter<"ContactPerson"> | string
    createdAt?: DateTimeFilter<"ContactPerson"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPerson"> | Date | string
    organizationId?: StringFilter<"ContactPerson"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type ContactPersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type ContactPersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactPersonWhereInput | ContactPersonWhereInput[]
    OR?: ContactPersonWhereInput[]
    NOT?: ContactPersonWhereInput | ContactPersonWhereInput[]
    name?: StringFilter<"ContactPerson"> | string
    email?: StringFilter<"ContactPerson"> | string
    phoneNumber?: StringFilter<"ContactPerson"> | string
    createdAt?: DateTimeFilter<"ContactPerson"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPerson"> | Date | string
    organizationId?: StringFilter<"ContactPerson"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type ContactPersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    _count?: ContactPersonCountOrderByAggregateInput
    _max?: ContactPersonMaxOrderByAggregateInput
    _min?: ContactPersonMinOrderByAggregateInput
  }

  export type ContactPersonScalarWhereWithAggregatesInput = {
    AND?: ContactPersonScalarWhereWithAggregatesInput | ContactPersonScalarWhereWithAggregatesInput[]
    OR?: ContactPersonScalarWhereWithAggregatesInput[]
    NOT?: ContactPersonScalarWhereWithAggregatesInput | ContactPersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactPerson"> | string
    name?: StringWithAggregatesFilter<"ContactPerson"> | string
    email?: StringWithAggregatesFilter<"ContactPerson"> | string
    phoneNumber?: StringWithAggregatesFilter<"ContactPerson"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactPerson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactPerson"> | Date | string
    organizationId?: StringWithAggregatesFilter<"ContactPerson"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumStatusFilter<"Ticket"> | $Enums.Status
    priority?: EnumPriorityFilter<"Ticket"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    creatorId?: StringFilter<"Ticket"> | string
    assigneeId?: StringNullableFilter<"Ticket"> | string | null
    ticketNumber?: StringNullableFilter<"Ticket"> | string | null
    slaId?: StringNullableFilter<"Ticket"> | string | null
    responseDeadline?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    resolutionDeadline?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    respondedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaBreached?: BoolFilter<"Ticket"> | boolean
    comments?: CommentListRelationFilter
    attachments?: DocumentListRelationFilter
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    slaPolicy?: XOR<SlaPolicyNullableScalarRelationFilter, SlaPolicyWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    ticketNumber?: SortOrderInput | SortOrder
    slaId?: SortOrderInput | SortOrder
    responseDeadline?: SortOrderInput | SortOrder
    resolutionDeadline?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    slaBreached?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    attachments?: DocumentOrderByRelationAggregateInput
    assignedTo?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    slaPolicy?: SlaPolicyOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketNumber?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumStatusFilter<"Ticket"> | $Enums.Status
    priority?: EnumPriorityFilter<"Ticket"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    creatorId?: StringFilter<"Ticket"> | string
    assigneeId?: StringNullableFilter<"Ticket"> | string | null
    slaId?: StringNullableFilter<"Ticket"> | string | null
    responseDeadline?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    resolutionDeadline?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    respondedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaBreached?: BoolFilter<"Ticket"> | boolean
    comments?: CommentListRelationFilter
    attachments?: DocumentListRelationFilter
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    slaPolicy?: XOR<SlaPolicyNullableScalarRelationFilter, SlaPolicyWhereInput> | null
  }, "id" | "ticketNumber">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    ticketNumber?: SortOrderInput | SortOrder
    slaId?: SortOrderInput | SortOrder
    responseDeadline?: SortOrderInput | SortOrder
    resolutionDeadline?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    slaBreached?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    title?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringWithAggregatesFilter<"Ticket"> | string
    status?: EnumStatusWithAggregatesFilter<"Ticket"> | $Enums.Status
    priority?: EnumPriorityWithAggregatesFilter<"Ticket"> | $Enums.Priority
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Ticket"> | string
    assigneeId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    ticketNumber?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    slaId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    responseDeadline?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    resolutionDeadline?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    respondedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    slaBreached?: BoolWithAggregatesFilter<"Ticket"> | boolean
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    ticketId?: StringFilter<"Comment"> | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attachments?: DocumentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    attachments?: DocumentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    ticketId?: StringFilter<"Comment"> | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attachments?: DocumentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    ticketId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    filename?: StringFilter<"Document"> | string
    path?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    size?: IntFilter<"Document"> | number
    createdAt?: DateTimeFilter<"Document"> | Date | string
    ticketId?: StringNullableFilter<"Document"> | string | null
    commentId?: StringNullableFilter<"Document"> | string | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    comment?: CommentOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    filename?: StringFilter<"Document"> | string
    path?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    size?: IntFilter<"Document"> | number
    createdAt?: DateTimeFilter<"Document"> | Date | string
    ticketId?: StringNullableFilter<"Document"> | string | null
    commentId?: StringNullableFilter<"Document"> | string | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    filename?: StringWithAggregatesFilter<"Document"> | string
    path?: StringWithAggregatesFilter<"Document"> | string
    mimeType?: StringWithAggregatesFilter<"Document"> | string
    size?: IntWithAggregatesFilter<"Document"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    ticketId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    commentId?: StringNullableWithAggregatesFilter<"Document"> | string | null
  }

  export type AppSettingWhereInput = {
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    id?: StringFilter<"AppSetting"> | string
    key?: StringFilter<"AppSetting"> | string
    value?: StringFilter<"AppSetting"> | string
    createdAt?: DateTimeFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }

  export type AppSettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    value?: StringFilter<"AppSetting"> | string
    createdAt?: DateTimeFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }, "id" | "key">

  export type AppSettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppSettingCountOrderByAggregateInput
    _max?: AppSettingMaxOrderByAggregateInput
    _min?: AppSettingMinOrderByAggregateInput
  }

  export type AppSettingScalarWhereWithAggregatesInput = {
    AND?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    OR?: AppSettingScalarWhereWithAggregatesInput[]
    NOT?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppSetting"> | string
    key?: StringWithAggregatesFilter<"AppSetting"> | string
    value?: StringWithAggregatesFilter<"AppSetting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppSetting"> | Date | string
  }

  export type TicketCounterWhereInput = {
    AND?: TicketCounterWhereInput | TicketCounterWhereInput[]
    OR?: TicketCounterWhereInput[]
    NOT?: TicketCounterWhereInput | TicketCounterWhereInput[]
    id?: StringFilter<"TicketCounter"> | string
    date?: StringFilter<"TicketCounter"> | string
    counter?: IntFilter<"TicketCounter"> | number
    createdAt?: DateTimeFilter<"TicketCounter"> | Date | string
    updatedAt?: DateTimeFilter<"TicketCounter"> | Date | string
  }

  export type TicketCounterOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: string
    AND?: TicketCounterWhereInput | TicketCounterWhereInput[]
    OR?: TicketCounterWhereInput[]
    NOT?: TicketCounterWhereInput | TicketCounterWhereInput[]
    counter?: IntFilter<"TicketCounter"> | number
    createdAt?: DateTimeFilter<"TicketCounter"> | Date | string
    updatedAt?: DateTimeFilter<"TicketCounter"> | Date | string
  }, "id" | "date">

  export type TicketCounterOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCounterCountOrderByAggregateInput
    _avg?: TicketCounterAvgOrderByAggregateInput
    _max?: TicketCounterMaxOrderByAggregateInput
    _min?: TicketCounterMinOrderByAggregateInput
    _sum?: TicketCounterSumOrderByAggregateInput
  }

  export type TicketCounterScalarWhereWithAggregatesInput = {
    AND?: TicketCounterScalarWhereWithAggregatesInput | TicketCounterScalarWhereWithAggregatesInput[]
    OR?: TicketCounterScalarWhereWithAggregatesInput[]
    NOT?: TicketCounterScalarWhereWithAggregatesInput | TicketCounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketCounter"> | string
    date?: StringWithAggregatesFilter<"TicketCounter"> | string
    counter?: IntWithAggregatesFilter<"TicketCounter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TicketCounter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketCounter"> | Date | string
  }

  export type SlaPolicyWhereInput = {
    AND?: SlaPolicyWhereInput | SlaPolicyWhereInput[]
    OR?: SlaPolicyWhereInput[]
    NOT?: SlaPolicyWhereInput | SlaPolicyWhereInput[]
    id?: StringFilter<"SlaPolicy"> | string
    name?: StringFilter<"SlaPolicy"> | string
    description?: StringNullableFilter<"SlaPolicy"> | string | null
    responseTimeHours?: IntFilter<"SlaPolicy"> | number
    resolutionTimeHours?: IntFilter<"SlaPolicy"> | number
    active?: BoolFilter<"SlaPolicy"> | boolean
    createdAt?: DateTimeFilter<"SlaPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"SlaPolicy"> | Date | string
    priorityLevel?: EnumPriorityFilter<"SlaPolicy"> | $Enums.Priority
    organizationId?: StringNullableFilter<"SlaPolicy"> | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    tickets?: TicketListRelationFilter
  }

  export type SlaPolicyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    responseTimeHours?: SortOrder
    resolutionTimeHours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priorityLevel?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    organization?: OrganizationOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type SlaPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SlaPolicyWhereInput | SlaPolicyWhereInput[]
    OR?: SlaPolicyWhereInput[]
    NOT?: SlaPolicyWhereInput | SlaPolicyWhereInput[]
    name?: StringFilter<"SlaPolicy"> | string
    description?: StringNullableFilter<"SlaPolicy"> | string | null
    responseTimeHours?: IntFilter<"SlaPolicy"> | number
    resolutionTimeHours?: IntFilter<"SlaPolicy"> | number
    active?: BoolFilter<"SlaPolicy"> | boolean
    createdAt?: DateTimeFilter<"SlaPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"SlaPolicy"> | Date | string
    priorityLevel?: EnumPriorityFilter<"SlaPolicy"> | $Enums.Priority
    organizationId?: StringNullableFilter<"SlaPolicy"> | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    tickets?: TicketListRelationFilter
  }, "id">

  export type SlaPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    responseTimeHours?: SortOrder
    resolutionTimeHours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priorityLevel?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: SlaPolicyCountOrderByAggregateInput
    _avg?: SlaPolicyAvgOrderByAggregateInput
    _max?: SlaPolicyMaxOrderByAggregateInput
    _min?: SlaPolicyMinOrderByAggregateInput
    _sum?: SlaPolicySumOrderByAggregateInput
  }

  export type SlaPolicyScalarWhereWithAggregatesInput = {
    AND?: SlaPolicyScalarWhereWithAggregatesInput | SlaPolicyScalarWhereWithAggregatesInput[]
    OR?: SlaPolicyScalarWhereWithAggregatesInput[]
    NOT?: SlaPolicyScalarWhereWithAggregatesInput | SlaPolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlaPolicy"> | string
    name?: StringWithAggregatesFilter<"SlaPolicy"> | string
    description?: StringNullableWithAggregatesFilter<"SlaPolicy"> | string | null
    responseTimeHours?: IntWithAggregatesFilter<"SlaPolicy"> | number
    resolutionTimeHours?: IntWithAggregatesFilter<"SlaPolicy"> | number
    active?: BoolWithAggregatesFilter<"SlaPolicy"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SlaPolicy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SlaPolicy"> | Date | string
    priorityLevel?: EnumPriorityWithAggregatesFilter<"SlaPolicy"> | $Enums.Priority
    organizationId?: StringNullableWithAggregatesFilter<"SlaPolicy"> | string | null
  }

  export type SlaPriorityMultiplierWhereInput = {
    AND?: SlaPriorityMultiplierWhereInput | SlaPriorityMultiplierWhereInput[]
    OR?: SlaPriorityMultiplierWhereInput[]
    NOT?: SlaPriorityMultiplierWhereInput | SlaPriorityMultiplierWhereInput[]
    id?: StringFilter<"SlaPriorityMultiplier"> | string
    priority?: EnumPriorityFilter<"SlaPriorityMultiplier"> | $Enums.Priority
    multiplier?: FloatFilter<"SlaPriorityMultiplier"> | number
    createdAt?: DateTimeFilter<"SlaPriorityMultiplier"> | Date | string
    updatedAt?: DateTimeFilter<"SlaPriorityMultiplier"> | Date | string
  }

  export type SlaPriorityMultiplierOrderByWithRelationInput = {
    id?: SortOrder
    priority?: SortOrder
    multiplier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlaPriorityMultiplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    priority?: $Enums.Priority
    AND?: SlaPriorityMultiplierWhereInput | SlaPriorityMultiplierWhereInput[]
    OR?: SlaPriorityMultiplierWhereInput[]
    NOT?: SlaPriorityMultiplierWhereInput | SlaPriorityMultiplierWhereInput[]
    multiplier?: FloatFilter<"SlaPriorityMultiplier"> | number
    createdAt?: DateTimeFilter<"SlaPriorityMultiplier"> | Date | string
    updatedAt?: DateTimeFilter<"SlaPriorityMultiplier"> | Date | string
  }, "id" | "priority">

  export type SlaPriorityMultiplierOrderByWithAggregationInput = {
    id?: SortOrder
    priority?: SortOrder
    multiplier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SlaPriorityMultiplierCountOrderByAggregateInput
    _avg?: SlaPriorityMultiplierAvgOrderByAggregateInput
    _max?: SlaPriorityMultiplierMaxOrderByAggregateInput
    _min?: SlaPriorityMultiplierMinOrderByAggregateInput
    _sum?: SlaPriorityMultiplierSumOrderByAggregateInput
  }

  export type SlaPriorityMultiplierScalarWhereWithAggregatesInput = {
    AND?: SlaPriorityMultiplierScalarWhereWithAggregatesInput | SlaPriorityMultiplierScalarWhereWithAggregatesInput[]
    OR?: SlaPriorityMultiplierScalarWhereWithAggregatesInput[]
    NOT?: SlaPriorityMultiplierScalarWhereWithAggregatesInput | SlaPriorityMultiplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlaPriorityMultiplier"> | string
    priority?: EnumPriorityWithAggregatesFilter<"SlaPriorityMultiplier"> | $Enums.Priority
    multiplier?: FloatWithAggregatesFilter<"SlaPriorityMultiplier"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SlaPriorityMultiplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SlaPriorityMultiplier"> | Date | string
  }

  export type SlaBusinessHoursWhereInput = {
    AND?: SlaBusinessHoursWhereInput | SlaBusinessHoursWhereInput[]
    OR?: SlaBusinessHoursWhereInput[]
    NOT?: SlaBusinessHoursWhereInput | SlaBusinessHoursWhereInput[]
    id?: StringFilter<"SlaBusinessHours"> | string
    dayOfWeek?: IntFilter<"SlaBusinessHours"> | number
    startHour?: IntFilter<"SlaBusinessHours"> | number
    startMinute?: IntFilter<"SlaBusinessHours"> | number
    endHour?: IntFilter<"SlaBusinessHours"> | number
    endMinute?: IntFilter<"SlaBusinessHours"> | number
    isWorkDay?: BoolFilter<"SlaBusinessHours"> | boolean
    createdAt?: DateTimeFilter<"SlaBusinessHours"> | Date | string
    updatedAt?: DateTimeFilter<"SlaBusinessHours"> | Date | string
  }

  export type SlaBusinessHoursOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    isWorkDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlaBusinessHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SlaBusinessHoursWhereInput | SlaBusinessHoursWhereInput[]
    OR?: SlaBusinessHoursWhereInput[]
    NOT?: SlaBusinessHoursWhereInput | SlaBusinessHoursWhereInput[]
    dayOfWeek?: IntFilter<"SlaBusinessHours"> | number
    startHour?: IntFilter<"SlaBusinessHours"> | number
    startMinute?: IntFilter<"SlaBusinessHours"> | number
    endHour?: IntFilter<"SlaBusinessHours"> | number
    endMinute?: IntFilter<"SlaBusinessHours"> | number
    isWorkDay?: BoolFilter<"SlaBusinessHours"> | boolean
    createdAt?: DateTimeFilter<"SlaBusinessHours"> | Date | string
    updatedAt?: DateTimeFilter<"SlaBusinessHours"> | Date | string
  }, "id">

  export type SlaBusinessHoursOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    isWorkDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SlaBusinessHoursCountOrderByAggregateInput
    _avg?: SlaBusinessHoursAvgOrderByAggregateInput
    _max?: SlaBusinessHoursMaxOrderByAggregateInput
    _min?: SlaBusinessHoursMinOrderByAggregateInput
    _sum?: SlaBusinessHoursSumOrderByAggregateInput
  }

  export type SlaBusinessHoursScalarWhereWithAggregatesInput = {
    AND?: SlaBusinessHoursScalarWhereWithAggregatesInput | SlaBusinessHoursScalarWhereWithAggregatesInput[]
    OR?: SlaBusinessHoursScalarWhereWithAggregatesInput[]
    NOT?: SlaBusinessHoursScalarWhereWithAggregatesInput | SlaBusinessHoursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlaBusinessHours"> | string
    dayOfWeek?: IntWithAggregatesFilter<"SlaBusinessHours"> | number
    startHour?: IntWithAggregatesFilter<"SlaBusinessHours"> | number
    startMinute?: IntWithAggregatesFilter<"SlaBusinessHours"> | number
    endHour?: IntWithAggregatesFilter<"SlaBusinessHours"> | number
    endMinute?: IntWithAggregatesFilter<"SlaBusinessHours"> | number
    isWorkDay?: BoolWithAggregatesFilter<"SlaBusinessHours"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SlaBusinessHours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SlaBusinessHours"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactPersons?: ContactPersonCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    slaPolicies?: SlaPolicyCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactPersons?: ContactPersonUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    slaPolicies?: SlaPolicyUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPersons?: ContactPersonUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    slaPolicies?: SlaPolicyUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPersons?: ContactPersonUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    slaPolicies?: SlaPolicyUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPersonCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContactPersonsInput
  }

  export type ContactPersonUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
  }

  export type ContactPersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContactPersonsNestedInput
  }

  export type ContactPersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactPersonCreateManyInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
  }

  export type ContactPersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketNumber?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentCreateNestedManyWithoutTicketInput
    attachments?: DocumentCreateNestedManyWithoutTicketInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    createdBy: UserCreateNestedOneWithoutTicketsInput
    slaPolicy?: SlaPolicyCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    assigneeId?: string | null
    ticketNumber?: string | null
    slaId?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: DocumentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutTicketNestedInput
    attachments?: DocumentUpdateManyWithoutTicketNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTicketsNestedInput
    slaPolicy?: SlaPolicyUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: DocumentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    assigneeId?: string | null
    ticketNumber?: string | null
    slaId?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    attachments?: DocumentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    ticketId: string
    attachments?: DocumentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    attachments?: DocumentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    attachments?: DocumentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    ticketId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    comment?: CommentCreateNestedOneWithoutAttachmentsInput
    ticket?: TicketCreateNestedOneWithoutAttachmentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    ticketId?: string | null
    commentId?: string | null
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateOneWithoutAttachmentsNestedInput
    ticket?: TicketUpdateOneWithoutAttachmentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateManyInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    ticketId?: string | null
    commentId?: string | null
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppSettingCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingCreateManyInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCounterCreateInput = {
    id?: string
    date: string
    counter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCounterUncheckedCreateInput = {
    id?: string
    date: string
    counter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCounterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCounterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCounterCreateManyInput = {
    id?: string
    date: string
    counter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCounterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCounterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaPolicyCreateInput = {
    id?: string
    name: string
    description?: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    priorityLevel?: $Enums.Priority
    organization?: OrganizationCreateNestedOneWithoutSlaPoliciesInput
    tickets?: TicketCreateNestedManyWithoutSlaPolicyInput
  }

  export type SlaPolicyUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    priorityLevel?: $Enums.Priority
    organizationId?: string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutSlaPolicyInput
  }

  export type SlaPolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    organization?: OrganizationUpdateOneWithoutSlaPoliciesNestedInput
    tickets?: TicketUpdateManyWithoutSlaPolicyNestedInput
  }

  export type SlaPolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUncheckedUpdateManyWithoutSlaPolicyNestedInput
  }

  export type SlaPolicyCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    priorityLevel?: $Enums.Priority
    organizationId?: string | null
  }

  export type SlaPolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
  }

  export type SlaPolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SlaPriorityMultiplierCreateInput = {
    id?: string
    priority: $Enums.Priority
    multiplier: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlaPriorityMultiplierUncheckedCreateInput = {
    id?: string
    priority: $Enums.Priority
    multiplier: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlaPriorityMultiplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    multiplier?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaPriorityMultiplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    multiplier?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaPriorityMultiplierCreateManyInput = {
    id?: string
    priority: $Enums.Priority
    multiplier: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlaPriorityMultiplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    multiplier?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaPriorityMultiplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    multiplier?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaBusinessHoursCreateInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    isWorkDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlaBusinessHoursUncheckedCreateInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    isWorkDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlaBusinessHoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    isWorkDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaBusinessHoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    isWorkDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaBusinessHoursCreateManyInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    isWorkDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlaBusinessHoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    isWorkDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlaBusinessHoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    isWorkDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    otpVerifiedAt?: SortOrder
    twoFactorEnabled?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    otpVerifiedAt?: SortOrder
    twoFactorEnabled?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    otpVerifiedAt?: SortOrder
    twoFactorEnabled?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactPersonListRelationFilter = {
    every?: ContactPersonWhereInput
    some?: ContactPersonWhereInput
    none?: ContactPersonWhereInput
  }

  export type SlaPolicyListRelationFilter = {
    every?: SlaPolicyWhereInput
    some?: SlaPolicyWhereInput
    none?: SlaPolicyWhereInput
  }

  export type ContactPersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlaPolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type ContactPersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type ContactPersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type ContactPersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SlaPolicyNullableScalarRelationFilter = {
    is?: SlaPolicyWhereInput | null
    isNot?: SlaPolicyWhereInput | null
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrder
    ticketNumber?: SortOrder
    slaId?: SortOrder
    responseDeadline?: SortOrder
    resolutionDeadline?: SortOrder
    respondedAt?: SortOrder
    resolvedAt?: SortOrder
    slaBreached?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrder
    ticketNumber?: SortOrder
    slaId?: SortOrder
    responseDeadline?: SortOrder
    resolutionDeadline?: SortOrder
    respondedAt?: SortOrder
    resolvedAt?: SortOrder
    slaBreached?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrder
    ticketNumber?: SortOrder
    slaId?: SortOrder
    responseDeadline?: SortOrder
    resolutionDeadline?: SortOrder
    respondedAt?: SortOrder
    resolvedAt?: SortOrder
    slaBreached?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type TicketNullableScalarRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrder
    commentId?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrder
    commentId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrder
    commentId?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type AppSettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCounterCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCounterAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type TicketCounterMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCounterMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCounterSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type SlaPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    responseTimeHours?: SortOrder
    resolutionTimeHours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priorityLevel?: SortOrder
    organizationId?: SortOrder
  }

  export type SlaPolicyAvgOrderByAggregateInput = {
    responseTimeHours?: SortOrder
    resolutionTimeHours?: SortOrder
  }

  export type SlaPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    responseTimeHours?: SortOrder
    resolutionTimeHours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priorityLevel?: SortOrder
    organizationId?: SortOrder
  }

  export type SlaPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    responseTimeHours?: SortOrder
    resolutionTimeHours?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priorityLevel?: SortOrder
    organizationId?: SortOrder
  }

  export type SlaPolicySumOrderByAggregateInput = {
    responseTimeHours?: SortOrder
    resolutionTimeHours?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SlaPriorityMultiplierCountOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    multiplier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlaPriorityMultiplierAvgOrderByAggregateInput = {
    multiplier?: SortOrder
  }

  export type SlaPriorityMultiplierMaxOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    multiplier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlaPriorityMultiplierMinOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    multiplier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlaPriorityMultiplierSumOrderByAggregateInput = {
    multiplier?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SlaBusinessHoursCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    isWorkDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlaBusinessHoursAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
  }

  export type SlaBusinessHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    isWorkDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlaBusinessHoursMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    isWorkDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlaBusinessHoursSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
  }

  export type UserCreateNestedOneWithoutApprovedUsersInput = {
    create?: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutApprovedByUserInput = {
    create?: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput> | UserCreateWithoutApprovedByUserInput[] | UserUncheckedCreateWithoutApprovedByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApprovedByUserInput | UserCreateOrConnectWithoutApprovedByUserInput[]
    createMany?: UserCreateManyApprovedByUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutApprovedByUserInput = {
    create?: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput> | UserCreateWithoutApprovedByUserInput[] | UserUncheckedCreateWithoutApprovedByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApprovedByUserInput | UserCreateOrConnectWithoutApprovedByUserInput[]
    createMany?: UserCreateManyApprovedByUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutApprovedUsersNestedInput = {
    create?: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedUsersInput
    upsert?: UserUpsertWithoutApprovedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedUsersInput, UserUpdateWithoutApprovedUsersInput>, UserUncheckedUpdateWithoutApprovedUsersInput>
  }

  export type UserUpdateManyWithoutApprovedByUserNestedInput = {
    create?: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput> | UserCreateWithoutApprovedByUserInput[] | UserUncheckedCreateWithoutApprovedByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApprovedByUserInput | UserCreateOrConnectWithoutApprovedByUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutApprovedByUserInput | UserUpsertWithWhereUniqueWithoutApprovedByUserInput[]
    createMany?: UserCreateManyApprovedByUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutApprovedByUserInput | UserUpdateWithWhereUniqueWithoutApprovedByUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutApprovedByUserInput | UserUpdateManyWithWhereWithoutApprovedByUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput | TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput | TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput | TicketUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput | TicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput | TicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput | TicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrganizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type UserUncheckedUpdateManyWithoutApprovedByUserNestedInput = {
    create?: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput> | UserCreateWithoutApprovedByUserInput[] | UserUncheckedCreateWithoutApprovedByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApprovedByUserInput | UserCreateOrConnectWithoutApprovedByUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutApprovedByUserInput | UserUpsertWithWhereUniqueWithoutApprovedByUserInput[]
    createMany?: UserCreateManyApprovedByUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutApprovedByUserInput | UserUpdateWithWhereUniqueWithoutApprovedByUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutApprovedByUserInput | UserUpdateManyWithWhereWithoutApprovedByUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput | TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput | TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput | TicketUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput | TicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput | TicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput | TicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ContactPersonCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ContactPersonCreateWithoutOrganizationInput, ContactPersonUncheckedCreateWithoutOrganizationInput> | ContactPersonCreateWithoutOrganizationInput[] | ContactPersonUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactPersonCreateOrConnectWithoutOrganizationInput | ContactPersonCreateOrConnectWithoutOrganizationInput[]
    createMany?: ContactPersonCreateManyOrganizationInputEnvelope
    connect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SlaPolicyCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SlaPolicyCreateWithoutOrganizationInput, SlaPolicyUncheckedCreateWithoutOrganizationInput> | SlaPolicyCreateWithoutOrganizationInput[] | SlaPolicyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SlaPolicyCreateOrConnectWithoutOrganizationInput | SlaPolicyCreateOrConnectWithoutOrganizationInput[]
    createMany?: SlaPolicyCreateManyOrganizationInputEnvelope
    connect?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
  }

  export type ContactPersonUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ContactPersonCreateWithoutOrganizationInput, ContactPersonUncheckedCreateWithoutOrganizationInput> | ContactPersonCreateWithoutOrganizationInput[] | ContactPersonUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactPersonCreateOrConnectWithoutOrganizationInput | ContactPersonCreateOrConnectWithoutOrganizationInput[]
    createMany?: ContactPersonCreateManyOrganizationInputEnvelope
    connect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SlaPolicyUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SlaPolicyCreateWithoutOrganizationInput, SlaPolicyUncheckedCreateWithoutOrganizationInput> | SlaPolicyCreateWithoutOrganizationInput[] | SlaPolicyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SlaPolicyCreateOrConnectWithoutOrganizationInput | SlaPolicyCreateOrConnectWithoutOrganizationInput[]
    createMany?: SlaPolicyCreateManyOrganizationInputEnvelope
    connect?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
  }

  export type ContactPersonUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ContactPersonCreateWithoutOrganizationInput, ContactPersonUncheckedCreateWithoutOrganizationInput> | ContactPersonCreateWithoutOrganizationInput[] | ContactPersonUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactPersonCreateOrConnectWithoutOrganizationInput | ContactPersonCreateOrConnectWithoutOrganizationInput[]
    upsert?: ContactPersonUpsertWithWhereUniqueWithoutOrganizationInput | ContactPersonUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ContactPersonCreateManyOrganizationInputEnvelope
    set?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    disconnect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    delete?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    connect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    update?: ContactPersonUpdateWithWhereUniqueWithoutOrganizationInput | ContactPersonUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ContactPersonUpdateManyWithWhereWithoutOrganizationInput | ContactPersonUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ContactPersonScalarWhereInput | ContactPersonScalarWhereInput[]
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SlaPolicyUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SlaPolicyCreateWithoutOrganizationInput, SlaPolicyUncheckedCreateWithoutOrganizationInput> | SlaPolicyCreateWithoutOrganizationInput[] | SlaPolicyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SlaPolicyCreateOrConnectWithoutOrganizationInput | SlaPolicyCreateOrConnectWithoutOrganizationInput[]
    upsert?: SlaPolicyUpsertWithWhereUniqueWithoutOrganizationInput | SlaPolicyUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SlaPolicyCreateManyOrganizationInputEnvelope
    set?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
    disconnect?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
    delete?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
    connect?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
    update?: SlaPolicyUpdateWithWhereUniqueWithoutOrganizationInput | SlaPolicyUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SlaPolicyUpdateManyWithWhereWithoutOrganizationInput | SlaPolicyUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SlaPolicyScalarWhereInput | SlaPolicyScalarWhereInput[]
  }

  export type ContactPersonUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ContactPersonCreateWithoutOrganizationInput, ContactPersonUncheckedCreateWithoutOrganizationInput> | ContactPersonCreateWithoutOrganizationInput[] | ContactPersonUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactPersonCreateOrConnectWithoutOrganizationInput | ContactPersonCreateOrConnectWithoutOrganizationInput[]
    upsert?: ContactPersonUpsertWithWhereUniqueWithoutOrganizationInput | ContactPersonUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ContactPersonCreateManyOrganizationInputEnvelope
    set?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    disconnect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    delete?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    connect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    update?: ContactPersonUpdateWithWhereUniqueWithoutOrganizationInput | ContactPersonUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ContactPersonUpdateManyWithWhereWithoutOrganizationInput | ContactPersonUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ContactPersonScalarWhereInput | ContactPersonScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SlaPolicyUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SlaPolicyCreateWithoutOrganizationInput, SlaPolicyUncheckedCreateWithoutOrganizationInput> | SlaPolicyCreateWithoutOrganizationInput[] | SlaPolicyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SlaPolicyCreateOrConnectWithoutOrganizationInput | SlaPolicyCreateOrConnectWithoutOrganizationInput[]
    upsert?: SlaPolicyUpsertWithWhereUniqueWithoutOrganizationInput | SlaPolicyUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SlaPolicyCreateManyOrganizationInputEnvelope
    set?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
    disconnect?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
    delete?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
    connect?: SlaPolicyWhereUniqueInput | SlaPolicyWhereUniqueInput[]
    update?: SlaPolicyUpdateWithWhereUniqueWithoutOrganizationInput | SlaPolicyUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SlaPolicyUpdateManyWithWhereWithoutOrganizationInput | SlaPolicyUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SlaPolicyScalarWhereInput | SlaPolicyScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutContactPersonsInput = {
    create?: XOR<OrganizationCreateWithoutContactPersonsInput, OrganizationUncheckedCreateWithoutContactPersonsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContactPersonsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutContactPersonsNestedInput = {
    create?: XOR<OrganizationCreateWithoutContactPersonsInput, OrganizationUncheckedCreateWithoutContactPersonsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContactPersonsInput
    upsert?: OrganizationUpsertWithoutContactPersonsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutContactPersonsInput, OrganizationUpdateWithoutContactPersonsInput>, OrganizationUncheckedUpdateWithoutContactPersonsInput>
  }

  export type CommentCreateNestedManyWithoutTicketInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutTicketInput = {
    create?: XOR<DocumentCreateWithoutTicketInput, DocumentUncheckedCreateWithoutTicketInput> | DocumentCreateWithoutTicketInput[] | DocumentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTicketInput | DocumentCreateOrConnectWithoutTicketInput[]
    createMany?: DocumentCreateManyTicketInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAssignedTicketsInput = {
    create?: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type SlaPolicyCreateNestedOneWithoutTicketsInput = {
    create?: XOR<SlaPolicyCreateWithoutTicketsInput, SlaPolicyUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: SlaPolicyCreateOrConnectWithoutTicketsInput
    connect?: SlaPolicyWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<DocumentCreateWithoutTicketInput, DocumentUncheckedCreateWithoutTicketInput> | DocumentCreateWithoutTicketInput[] | DocumentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTicketInput | DocumentCreateOrConnectWithoutTicketInput[]
    createMany?: DocumentCreateManyTicketInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type CommentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTicketInput | CommentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTicketInput | CommentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTicketInput | CommentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<DocumentCreateWithoutTicketInput, DocumentUncheckedCreateWithoutTicketInput> | DocumentCreateWithoutTicketInput[] | DocumentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTicketInput | DocumentCreateOrConnectWithoutTicketInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutTicketInput | DocumentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: DocumentCreateManyTicketInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutTicketInput | DocumentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutTicketInput | DocumentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAssignedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTicketsInput
    upsert?: UserUpsertWithoutAssignedTicketsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTicketsInput, UserUpdateWithoutAssignedTicketsInput>, UserUncheckedUpdateWithoutAssignedTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type SlaPolicyUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<SlaPolicyCreateWithoutTicketsInput, SlaPolicyUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: SlaPolicyCreateOrConnectWithoutTicketsInput
    upsert?: SlaPolicyUpsertWithoutTicketsInput
    disconnect?: SlaPolicyWhereInput | boolean
    delete?: SlaPolicyWhereInput | boolean
    connect?: SlaPolicyWhereUniqueInput
    update?: XOR<XOR<SlaPolicyUpdateToOneWithWhereWithoutTicketsInput, SlaPolicyUpdateWithoutTicketsInput>, SlaPolicyUncheckedUpdateWithoutTicketsInput>
  }

  export type CommentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTicketInput | CommentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTicketInput | CommentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTicketInput | CommentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<DocumentCreateWithoutTicketInput, DocumentUncheckedCreateWithoutTicketInput> | DocumentCreateWithoutTicketInput[] | DocumentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTicketInput | DocumentCreateOrConnectWithoutTicketInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutTicketInput | DocumentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: DocumentCreateManyTicketInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutTicketInput | DocumentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutTicketInput | DocumentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutCommentInput = {
    create?: XOR<DocumentCreateWithoutCommentInput, DocumentUncheckedCreateWithoutCommentInput> | DocumentCreateWithoutCommentInput[] | DocumentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentInput | DocumentCreateOrConnectWithoutCommentInput[]
    createMany?: DocumentCreateManyCommentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<DocumentCreateWithoutCommentInput, DocumentUncheckedCreateWithoutCommentInput> | DocumentCreateWithoutCommentInput[] | DocumentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentInput | DocumentCreateOrConnectWithoutCommentInput[]
    createMany?: DocumentCreateManyCommentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type TicketUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentsInput
    upsert?: TicketUpsertWithoutCommentsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutCommentsInput, TicketUpdateWithoutCommentsInput>, TicketUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type DocumentUpdateManyWithoutCommentNestedInput = {
    create?: XOR<DocumentCreateWithoutCommentInput, DocumentUncheckedCreateWithoutCommentInput> | DocumentCreateWithoutCommentInput[] | DocumentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentInput | DocumentCreateOrConnectWithoutCommentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCommentInput | DocumentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: DocumentCreateManyCommentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCommentInput | DocumentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCommentInput | DocumentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<DocumentCreateWithoutCommentInput, DocumentUncheckedCreateWithoutCommentInput> | DocumentCreateWithoutCommentInput[] | DocumentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentInput | DocumentCreateOrConnectWithoutCommentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCommentInput | DocumentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: DocumentCreateManyCommentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCommentInput | DocumentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCommentInput | DocumentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CommentCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<CommentCreateWithoutAttachmentsInput, CommentUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutAttachmentsInput
    connect?: CommentWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAttachmentsInput
    connect?: TicketWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUpdateOneWithoutAttachmentsNestedInput = {
    create?: XOR<CommentCreateWithoutAttachmentsInput, CommentUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutAttachmentsInput
    upsert?: CommentUpsertWithoutAttachmentsInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutAttachmentsInput, CommentUpdateWithoutAttachmentsInput>, CommentUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TicketUpdateOneWithoutAttachmentsNestedInput = {
    create?: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAttachmentsInput
    upsert?: TicketUpsertWithoutAttachmentsInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutAttachmentsInput, TicketUpdateWithoutAttachmentsInput>, TicketUncheckedUpdateWithoutAttachmentsInput>
  }

  export type OrganizationCreateNestedOneWithoutSlaPoliciesInput = {
    create?: XOR<OrganizationCreateWithoutSlaPoliciesInput, OrganizationUncheckedCreateWithoutSlaPoliciesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSlaPoliciesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutSlaPolicyInput = {
    create?: XOR<TicketCreateWithoutSlaPolicyInput, TicketUncheckedCreateWithoutSlaPolicyInput> | TicketCreateWithoutSlaPolicyInput[] | TicketUncheckedCreateWithoutSlaPolicyInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSlaPolicyInput | TicketCreateOrConnectWithoutSlaPolicyInput[]
    createMany?: TicketCreateManySlaPolicyInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutSlaPolicyInput = {
    create?: XOR<TicketCreateWithoutSlaPolicyInput, TicketUncheckedCreateWithoutSlaPolicyInput> | TicketCreateWithoutSlaPolicyInput[] | TicketUncheckedCreateWithoutSlaPolicyInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSlaPolicyInput | TicketCreateOrConnectWithoutSlaPolicyInput[]
    createMany?: TicketCreateManySlaPolicyInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrganizationUpdateOneWithoutSlaPoliciesNestedInput = {
    create?: XOR<OrganizationCreateWithoutSlaPoliciesInput, OrganizationUncheckedCreateWithoutSlaPoliciesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSlaPoliciesInput
    upsert?: OrganizationUpsertWithoutSlaPoliciesInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSlaPoliciesInput, OrganizationUpdateWithoutSlaPoliciesInput>, OrganizationUncheckedUpdateWithoutSlaPoliciesInput>
  }

  export type TicketUpdateManyWithoutSlaPolicyNestedInput = {
    create?: XOR<TicketCreateWithoutSlaPolicyInput, TicketUncheckedCreateWithoutSlaPolicyInput> | TicketCreateWithoutSlaPolicyInput[] | TicketUncheckedCreateWithoutSlaPolicyInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSlaPolicyInput | TicketCreateOrConnectWithoutSlaPolicyInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSlaPolicyInput | TicketUpsertWithWhereUniqueWithoutSlaPolicyInput[]
    createMany?: TicketCreateManySlaPolicyInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSlaPolicyInput | TicketUpdateWithWhereUniqueWithoutSlaPolicyInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSlaPolicyInput | TicketUpdateManyWithWhereWithoutSlaPolicyInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutSlaPolicyNestedInput = {
    create?: XOR<TicketCreateWithoutSlaPolicyInput, TicketUncheckedCreateWithoutSlaPolicyInput> | TicketCreateWithoutSlaPolicyInput[] | TicketUncheckedCreateWithoutSlaPolicyInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSlaPolicyInput | TicketCreateOrConnectWithoutSlaPolicyInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSlaPolicyInput | TicketUpsertWithWhereUniqueWithoutSlaPolicyInput[]
    createMany?: TicketCreateManySlaPolicyInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSlaPolicyInput | TicketUpdateWithWhereUniqueWithoutSlaPolicyInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSlaPolicyInput | TicketUpdateManyWithWhereWithoutSlaPolicyInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutApprovedUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    comments?: CommentCreateNestedManyWithoutUserInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutApprovedUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutApprovedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
  }

  export type UserCreateWithoutApprovedByUserInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutApprovedByUserInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutApprovedByUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput>
  }

  export type UserCreateManyApprovedByUserInputEnvelope = {
    data: UserCreateManyApprovedByUserInput | UserCreateManyApprovedByUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutCommentsInput
    attachments?: DocumentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketId: string
    attachments?: DocumentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketNumber?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentCreateNestedManyWithoutTicketInput
    attachments?: DocumentCreateNestedManyWithoutTicketInput
    createdBy: UserCreateNestedOneWithoutTicketsInput
    slaPolicy?: SlaPolicyCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    ticketNumber?: string | null
    slaId?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: DocumentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput>
  }

  export type TicketCreateManyAssignedToInputEnvelope = {
    data: TicketCreateManyAssignedToInput | TicketCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketNumber?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentCreateNestedManyWithoutTicketInput
    attachments?: DocumentCreateNestedManyWithoutTicketInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    slaPolicy?: SlaPolicyCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    ticketNumber?: string | null
    slaId?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: DocumentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput>
  }

  export type TicketCreateManyCreatedByInputEnvelope = {
    data: TicketCreateManyCreatedByInput | TicketCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactPersons?: ContactPersonCreateNestedManyWithoutOrganizationInput
    slaPolicies?: SlaPolicyCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactPersons?: ContactPersonUncheckedCreateNestedManyWithoutOrganizationInput
    slaPolicies?: SlaPolicyUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutApprovedUsersInput = {
    update: XOR<UserUpdateWithoutApprovedUsersInput, UserUncheckedUpdateWithoutApprovedUsersInput>
    create: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedUsersInput, UserUncheckedUpdateWithoutApprovedUsersInput>
  }

  export type UserUpdateWithoutApprovedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutApprovedByUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutApprovedByUserInput, UserUncheckedUpdateWithoutApprovedByUserInput>
    create: XOR<UserCreateWithoutApprovedByUserInput, UserUncheckedCreateWithoutApprovedByUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutApprovedByUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutApprovedByUserInput, UserUncheckedUpdateWithoutApprovedByUserInput>
  }

  export type UserUpdateManyWithWhereWithoutApprovedByUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutApprovedByUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    otpVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    isApproved?: BoolFilter<"User"> | boolean
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    approvedBy?: StringNullableFilter<"User"> | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    ticketId?: StringFilter<"Comment"> | string
  }

  export type TicketUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutAssignedToInput, TicketUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutAssignedToInput, TicketUncheckedUpdateWithoutAssignedToInput>
  }

  export type TicketUpdateManyWithWhereWithoutAssignedToInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumStatusFilter<"Ticket"> | $Enums.Status
    priority?: EnumPriorityFilter<"Ticket"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    creatorId?: StringFilter<"Ticket"> | string
    assigneeId?: StringNullableFilter<"Ticket"> | string | null
    ticketNumber?: StringNullableFilter<"Ticket"> | string | null
    slaId?: StringNullableFilter<"Ticket"> | string | null
    responseDeadline?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    resolutionDeadline?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    respondedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaBreached?: BoolFilter<"Ticket"> | boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCreatedByInput, TicketUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCreatedByInput, TicketUncheckedUpdateWithoutCreatedByInput>
  }

  export type TicketUpdateManyWithWhereWithoutCreatedByInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPersons?: ContactPersonUpdateManyWithoutOrganizationNestedInput
    slaPolicies?: SlaPolicyUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPersons?: ContactPersonUncheckedUpdateManyWithoutOrganizationNestedInput
    slaPolicies?: SlaPolicyUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ContactPersonCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPersonUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPersonCreateOrConnectWithoutOrganizationInput = {
    where: ContactPersonWhereUniqueInput
    create: XOR<ContactPersonCreateWithoutOrganizationInput, ContactPersonUncheckedCreateWithoutOrganizationInput>
  }

  export type ContactPersonCreateManyOrganizationInputEnvelope = {
    data: ContactPersonCreateManyOrganizationInput | ContactPersonCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type SlaPolicyCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    priorityLevel?: $Enums.Priority
    tickets?: TicketCreateNestedManyWithoutSlaPolicyInput
  }

  export type SlaPolicyUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    priorityLevel?: $Enums.Priority
    tickets?: TicketUncheckedCreateNestedManyWithoutSlaPolicyInput
  }

  export type SlaPolicyCreateOrConnectWithoutOrganizationInput = {
    where: SlaPolicyWhereUniqueInput
    create: XOR<SlaPolicyCreateWithoutOrganizationInput, SlaPolicyUncheckedCreateWithoutOrganizationInput>
  }

  export type SlaPolicyCreateManyOrganizationInputEnvelope = {
    data: SlaPolicyCreateManyOrganizationInput | SlaPolicyCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ContactPersonUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ContactPersonWhereUniqueInput
    update: XOR<ContactPersonUpdateWithoutOrganizationInput, ContactPersonUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ContactPersonCreateWithoutOrganizationInput, ContactPersonUncheckedCreateWithoutOrganizationInput>
  }

  export type ContactPersonUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ContactPersonWhereUniqueInput
    data: XOR<ContactPersonUpdateWithoutOrganizationInput, ContactPersonUncheckedUpdateWithoutOrganizationInput>
  }

  export type ContactPersonUpdateManyWithWhereWithoutOrganizationInput = {
    where: ContactPersonScalarWhereInput
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ContactPersonScalarWhereInput = {
    AND?: ContactPersonScalarWhereInput | ContactPersonScalarWhereInput[]
    OR?: ContactPersonScalarWhereInput[]
    NOT?: ContactPersonScalarWhereInput | ContactPersonScalarWhereInput[]
    id?: StringFilter<"ContactPerson"> | string
    name?: StringFilter<"ContactPerson"> | string
    email?: StringFilter<"ContactPerson"> | string
    phoneNumber?: StringFilter<"ContactPerson"> | string
    createdAt?: DateTimeFilter<"ContactPerson"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPerson"> | Date | string
    organizationId?: StringFilter<"ContactPerson"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SlaPolicyUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: SlaPolicyWhereUniqueInput
    update: XOR<SlaPolicyUpdateWithoutOrganizationInput, SlaPolicyUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SlaPolicyCreateWithoutOrganizationInput, SlaPolicyUncheckedCreateWithoutOrganizationInput>
  }

  export type SlaPolicyUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: SlaPolicyWhereUniqueInput
    data: XOR<SlaPolicyUpdateWithoutOrganizationInput, SlaPolicyUncheckedUpdateWithoutOrganizationInput>
  }

  export type SlaPolicyUpdateManyWithWhereWithoutOrganizationInput = {
    where: SlaPolicyScalarWhereInput
    data: XOR<SlaPolicyUpdateManyMutationInput, SlaPolicyUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SlaPolicyScalarWhereInput = {
    AND?: SlaPolicyScalarWhereInput | SlaPolicyScalarWhereInput[]
    OR?: SlaPolicyScalarWhereInput[]
    NOT?: SlaPolicyScalarWhereInput | SlaPolicyScalarWhereInput[]
    id?: StringFilter<"SlaPolicy"> | string
    name?: StringFilter<"SlaPolicy"> | string
    description?: StringNullableFilter<"SlaPolicy"> | string | null
    responseTimeHours?: IntFilter<"SlaPolicy"> | number
    resolutionTimeHours?: IntFilter<"SlaPolicy"> | number
    active?: BoolFilter<"SlaPolicy"> | boolean
    createdAt?: DateTimeFilter<"SlaPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"SlaPolicy"> | Date | string
    priorityLevel?: EnumPriorityFilter<"SlaPolicy"> | $Enums.Priority
    organizationId?: StringNullableFilter<"SlaPolicy"> | string | null
  }

  export type OrganizationCreateWithoutContactPersonsInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    slaPolicies?: SlaPolicyCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutContactPersonsInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    slaPolicies?: SlaPolicyUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutContactPersonsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutContactPersonsInput, OrganizationUncheckedCreateWithoutContactPersonsInput>
  }

  export type OrganizationUpsertWithoutContactPersonsInput = {
    update: XOR<OrganizationUpdateWithoutContactPersonsInput, OrganizationUncheckedUpdateWithoutContactPersonsInput>
    create: XOR<OrganizationCreateWithoutContactPersonsInput, OrganizationUncheckedCreateWithoutContactPersonsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutContactPersonsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutContactPersonsInput, OrganizationUncheckedUpdateWithoutContactPersonsInput>
  }

  export type OrganizationUpdateWithoutContactPersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    slaPolicies?: SlaPolicyUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutContactPersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    slaPolicies?: SlaPolicyUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type CommentCreateWithoutTicketInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    attachments?: DocumentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutTicketInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    attachments?: DocumentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutTicketInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput>
  }

  export type CommentCreateManyTicketInputEnvelope = {
    data: CommentCreateManyTicketInput | CommentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutTicketInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    comment?: CommentCreateNestedOneWithoutAttachmentsInput
  }

  export type DocumentUncheckedCreateWithoutTicketInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    commentId?: string | null
  }

  export type DocumentCreateOrConnectWithoutTicketInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutTicketInput, DocumentUncheckedCreateWithoutTicketInput>
  }

  export type DocumentCreateManyTicketInputEnvelope = {
    data: DocumentCreateManyTicketInput | DocumentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAssignedTicketsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAssignedTicketsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAssignedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
  }

  export type UserCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type SlaPolicyCreateWithoutTicketsInput = {
    id?: string
    name: string
    description?: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    priorityLevel?: $Enums.Priority
    organization?: OrganizationCreateNestedOneWithoutSlaPoliciesInput
  }

  export type SlaPolicyUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    description?: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    priorityLevel?: $Enums.Priority
    organizationId?: string | null
  }

  export type SlaPolicyCreateOrConnectWithoutTicketsInput = {
    where: SlaPolicyWhereUniqueInput
    create: XOR<SlaPolicyCreateWithoutTicketsInput, SlaPolicyUncheckedCreateWithoutTicketsInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutTicketInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTicketInput, CommentUncheckedUpdateWithoutTicketInput>
    create: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTicketInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTicketInput, CommentUncheckedUpdateWithoutTicketInput>
  }

  export type CommentUpdateManyWithWhereWithoutTicketInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTicketInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutTicketInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutTicketInput, DocumentUncheckedUpdateWithoutTicketInput>
    create: XOR<DocumentCreateWithoutTicketInput, DocumentUncheckedCreateWithoutTicketInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutTicketInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutTicketInput, DocumentUncheckedUpdateWithoutTicketInput>
  }

  export type DocumentUpdateManyWithWhereWithoutTicketInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutTicketInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    filename?: StringFilter<"Document"> | string
    path?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    size?: IntFilter<"Document"> | number
    createdAt?: DateTimeFilter<"Document"> | Date | string
    ticketId?: StringNullableFilter<"Document"> | string | null
    commentId?: StringNullableFilter<"Document"> | string | null
  }

  export type UserUpsertWithoutAssignedTicketsInput = {
    update: XOR<UserUpdateWithoutAssignedTicketsInput, UserUncheckedUpdateWithoutAssignedTicketsInput>
    create: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTicketsInput, UserUncheckedUpdateWithoutAssignedTicketsInput>
  }

  export type UserUpdateWithoutAssignedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type SlaPolicyUpsertWithoutTicketsInput = {
    update: XOR<SlaPolicyUpdateWithoutTicketsInput, SlaPolicyUncheckedUpdateWithoutTicketsInput>
    create: XOR<SlaPolicyCreateWithoutTicketsInput, SlaPolicyUncheckedCreateWithoutTicketsInput>
    where?: SlaPolicyWhereInput
  }

  export type SlaPolicyUpdateToOneWithWhereWithoutTicketsInput = {
    where?: SlaPolicyWhereInput
    data: XOR<SlaPolicyUpdateWithoutTicketsInput, SlaPolicyUncheckedUpdateWithoutTicketsInput>
  }

  export type SlaPolicyUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    organization?: OrganizationUpdateOneWithoutSlaPoliciesNestedInput
  }

  export type SlaPolicyUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketNumber?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    attachments?: DocumentCreateNestedManyWithoutTicketInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    createdBy: UserCreateNestedOneWithoutTicketsInput
    slaPolicy?: SlaPolicyCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    assigneeId?: string | null
    ticketNumber?: string | null
    slaId?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    attachments?: DocumentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCommentsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedByUser?: UserCreateNestedOneWithoutApprovedUsersInput
    approvedUsers?: UserCreateNestedManyWithoutApprovedByUserInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApprovedByUserInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type DocumentCreateWithoutCommentInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    ticket?: TicketCreateNestedOneWithoutAttachmentsInput
  }

  export type DocumentUncheckedCreateWithoutCommentInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    ticketId?: string | null
  }

  export type DocumentCreateOrConnectWithoutCommentInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCommentInput, DocumentUncheckedCreateWithoutCommentInput>
  }

  export type DocumentCreateManyCommentInputEnvelope = {
    data: DocumentCreateManyCommentInput | DocumentCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithoutCommentsInput = {
    update: XOR<TicketUpdateWithoutCommentsInput, TicketUncheckedUpdateWithoutCommentsInput>
    create: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutCommentsInput, TicketUncheckedUpdateWithoutCommentsInput>
  }

  export type TicketUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    attachments?: DocumentUpdateManyWithoutTicketNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTicketsNestedInput
    slaPolicy?: SlaPolicyUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    attachments?: DocumentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutCommentInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutCommentInput, DocumentUncheckedUpdateWithoutCommentInput>
    create: XOR<DocumentCreateWithoutCommentInput, DocumentUncheckedCreateWithoutCommentInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutCommentInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutCommentInput, DocumentUncheckedUpdateWithoutCommentInput>
  }

  export type DocumentUpdateManyWithWhereWithoutCommentInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutCommentInput>
  }

  export type CommentCreateWithoutAttachmentsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    ticketId: string
  }

  export type CommentCreateOrConnectWithoutAttachmentsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAttachmentsInput, CommentUncheckedCreateWithoutAttachmentsInput>
  }

  export type TicketCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketNumber?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentCreateNestedManyWithoutTicketInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    createdBy: UserCreateNestedOneWithoutTicketsInput
    slaPolicy?: SlaPolicyCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    assigneeId?: string | null
    ticketNumber?: string | null
    slaId?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAttachmentsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
  }

  export type CommentUpsertWithoutAttachmentsInput = {
    update: XOR<CommentUpdateWithoutAttachmentsInput, CommentUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<CommentCreateWithoutAttachmentsInput, CommentUncheckedCreateWithoutAttachmentsInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutAttachmentsInput, CommentUncheckedUpdateWithoutAttachmentsInput>
  }

  export type CommentUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUpsertWithoutAttachmentsInput = {
    update: XOR<TicketUpdateWithoutAttachmentsInput, TicketUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutAttachmentsInput, TicketUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TicketUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutTicketNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTicketsNestedInput
    slaPolicy?: SlaPolicyUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type OrganizationCreateWithoutSlaPoliciesInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactPersons?: ContactPersonCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSlaPoliciesInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactPersons?: ContactPersonUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSlaPoliciesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSlaPoliciesInput, OrganizationUncheckedCreateWithoutSlaPoliciesInput>
  }

  export type TicketCreateWithoutSlaPolicyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketNumber?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentCreateNestedManyWithoutTicketInput
    attachments?: DocumentCreateNestedManyWithoutTicketInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    createdBy: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutSlaPolicyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    assigneeId?: string | null
    ticketNumber?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: DocumentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutSlaPolicyInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSlaPolicyInput, TicketUncheckedCreateWithoutSlaPolicyInput>
  }

  export type TicketCreateManySlaPolicyInputEnvelope = {
    data: TicketCreateManySlaPolicyInput | TicketCreateManySlaPolicyInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutSlaPoliciesInput = {
    update: XOR<OrganizationUpdateWithoutSlaPoliciesInput, OrganizationUncheckedUpdateWithoutSlaPoliciesInput>
    create: XOR<OrganizationCreateWithoutSlaPoliciesInput, OrganizationUncheckedCreateWithoutSlaPoliciesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSlaPoliciesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSlaPoliciesInput, OrganizationUncheckedUpdateWithoutSlaPoliciesInput>
  }

  export type OrganizationUpdateWithoutSlaPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPersons?: ContactPersonUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSlaPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactPersons?: ContactPersonUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutSlaPolicyInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutSlaPolicyInput, TicketUncheckedUpdateWithoutSlaPolicyInput>
    create: XOR<TicketCreateWithoutSlaPolicyInput, TicketUncheckedCreateWithoutSlaPolicyInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutSlaPolicyInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutSlaPolicyInput, TicketUncheckedUpdateWithoutSlaPolicyInput>
  }

  export type TicketUpdateManyWithWhereWithoutSlaPolicyInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutSlaPolicyInput>
  }

  export type UserCreateManyApprovedByUserInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketId: string
  }

  export type TicketCreateManyAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    ticketNumber?: string | null
    slaId?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
  }

  export type TicketCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    ticketNumber?: string | null
    slaId?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
  }

  export type UserUpdateWithoutApprovedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutApprovedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
    attachments?: DocumentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
    attachments?: DocumentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutTicketNestedInput
    attachments?: DocumentUpdateManyWithoutTicketNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTicketsNestedInput
    slaPolicy?: SlaPolicyUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: DocumentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TicketUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutTicketNestedInput
    attachments?: DocumentUpdateManyWithoutTicketNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    slaPolicy?: SlaPolicyUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: DocumentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactPersonCreateManyOrganizationInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: string | null
    otpExpiry?: Date | string | null
    otpVerifiedAt?: Date | string | null
    twoFactorEnabled?: boolean
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
  }

  export type SlaPolicyCreateManyOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    responseTimeHours: number
    resolutionTimeHours: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    priorityLevel?: $Enums.Priority
  }

  export type ContactPersonUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPersonUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPersonUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByUser?: UserUpdateOneWithoutApprovedUsersNestedInput
    approvedUsers?: UserUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedUsers?: UserUncheckedUpdateManyWithoutApprovedByUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SlaPolicyUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    tickets?: TicketUpdateManyWithoutSlaPolicyNestedInput
  }

  export type SlaPolicyUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    tickets?: TicketUncheckedUpdateManyWithoutSlaPolicyNestedInput
  }

  export type SlaPolicyUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    responseTimeHours?: IntFieldUpdateOperationsInput | number
    resolutionTimeHours?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priorityLevel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
  }

  export type CommentCreateManyTicketInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type DocumentCreateManyTicketInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    commentId?: string | null
  }

  export type CommentUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    attachments?: DocumentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    attachments?: DocumentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateOneWithoutAttachmentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateManyCommentInput = {
    id?: string
    filename: string
    path: string
    mimeType: string
    size: number
    createdAt?: Date | string
    ticketId?: string | null
  }

  export type DocumentUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneWithoutAttachmentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateManySlaPolicyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    assigneeId?: string | null
    ticketNumber?: string | null
    responseDeadline?: Date | string | null
    resolutionDeadline?: Date | string | null
    respondedAt?: Date | string | null
    resolvedAt?: Date | string | null
    slaBreached?: boolean
  }

  export type TicketUpdateWithoutSlaPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutTicketNestedInput
    attachments?: DocumentUpdateManyWithoutTicketNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutSlaPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: DocumentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutSlaPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableStringFieldUpdateOperationsInput | string | null
    responseDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaBreached?: BoolFieldUpdateOperationsInput | boolean
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