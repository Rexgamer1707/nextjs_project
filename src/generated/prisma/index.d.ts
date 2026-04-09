
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model console
 * 
 */
export type console = $Result.DefaultSelection<Prisma.$consolePayload>
/**
 * Model Games
 * 
 */
export type Games = $Result.DefaultSelection<Prisma.$GamesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Consoles
 * const consoles = await prisma.console.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Consoles
   * const consoles = await prisma.console.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.console`: Exposes CRUD operations for the **console** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consoles
    * const consoles = await prisma.console.findMany()
    * ```
    */
  get console(): Prisma.consoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.games`: Exposes CRUD operations for the **Games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.games.findMany()
    * ```
    */
  get games(): Prisma.GamesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    console: 'console',
    Games: 'Games'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "console" | "games"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      console: {
        payload: Prisma.$consolePayload<ExtArgs>
        fields: Prisma.consoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.consoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.consoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>
          }
          findFirst: {
            args: Prisma.consoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.consoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>
          }
          findMany: {
            args: Prisma.consoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>[]
          }
          create: {
            args: Prisma.consoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>
          }
          createMany: {
            args: Prisma.consoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.consoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>[]
          }
          delete: {
            args: Prisma.consoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>
          }
          update: {
            args: Prisma.consoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>
          }
          deleteMany: {
            args: Prisma.consoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.consoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.consoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>[]
          }
          upsert: {
            args: Prisma.consoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consolePayload>
          }
          aggregate: {
            args: Prisma.ConsoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsole>
          }
          groupBy: {
            args: Prisma.consoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.consoleCountArgs<ExtArgs>
            result: $Utils.Optional<ConsoleCountAggregateOutputType> | number
          }
        }
      }
      Games: {
        payload: Prisma.$GamesPayload<ExtArgs>
        fields: Prisma.GamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          findFirst: {
            args: Prisma.GamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          findMany: {
            args: Prisma.GamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          create: {
            args: Prisma.GamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          createMany: {
            args: Prisma.GamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          delete: {
            args: Prisma.GamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          update: {
            args: Prisma.GamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          deleteMany: {
            args: Prisma.GamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GamesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          upsert: {
            args: Prisma.GamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          aggregate: {
            args: Prisma.GamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGames>
          }
          groupBy: {
            args: Prisma.GamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.GamesCountArgs<ExtArgs>
            result: $Utils.Optional<GamesCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    console?: consoleOmit
    games?: GamesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ConsoleCountOutputType
   */

  export type ConsoleCountOutputType = {
    games: number
  }

  export type ConsoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | ConsoleCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * ConsoleCountOutputType without action
   */
  export type ConsoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsoleCountOutputType
     */
    select?: ConsoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsoleCountOutputType without action
   */
  export type ConsoleCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model console
   */

  export type AggregateConsole = {
    _count: ConsoleCountAggregateOutputType | null
    _avg: ConsoleAvgAggregateOutputType | null
    _sum: ConsoleSumAggregateOutputType | null
    _min: ConsoleMinAggregateOutputType | null
    _max: ConsoleMaxAggregateOutputType | null
  }

  export type ConsoleAvgAggregateOutputType = {
    id: number | null
  }

  export type ConsoleSumAggregateOutputType = {
    id: number | null
  }

  export type ConsoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    releaseDate: Date | null
    manufacturer: string | null
    description: string | null
  }

  export type ConsoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    releaseDate: Date | null
    manufacturer: string | null
    description: string | null
  }

  export type ConsoleCountAggregateOutputType = {
    id: number
    name: number
    image: number
    releaseDate: number
    manufacturer: number
    description: number
    _all: number
  }


  export type ConsoleAvgAggregateInputType = {
    id?: true
  }

  export type ConsoleSumAggregateInputType = {
    id?: true
  }

  export type ConsoleMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    releaseDate?: true
    manufacturer?: true
    description?: true
  }

  export type ConsoleMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    releaseDate?: true
    manufacturer?: true
    description?: true
  }

  export type ConsoleCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    releaseDate?: true
    manufacturer?: true
    description?: true
    _all?: true
  }

  export type ConsoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which console to aggregate.
     */
    where?: consoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consoles to fetch.
     */
    orderBy?: consoleOrderByWithRelationInput | consoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: consoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned consoles
    **/
    _count?: true | ConsoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsoleMaxAggregateInputType
  }

  export type GetConsoleAggregateType<T extends ConsoleAggregateArgs> = {
        [P in keyof T & keyof AggregateConsole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsole[P]>
      : GetScalarType<T[P], AggregateConsole[P]>
  }




  export type consoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consoleWhereInput
    orderBy?: consoleOrderByWithAggregationInput | consoleOrderByWithAggregationInput[]
    by: ConsoleScalarFieldEnum[] | ConsoleScalarFieldEnum
    having?: consoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsoleCountAggregateInputType | true
    _avg?: ConsoleAvgAggregateInputType
    _sum?: ConsoleSumAggregateInputType
    _min?: ConsoleMinAggregateInputType
    _max?: ConsoleMaxAggregateInputType
  }

  export type ConsoleGroupByOutputType = {
    id: number
    name: string
    image: string
    releaseDate: Date
    manufacturer: string
    description: string
    _count: ConsoleCountAggregateOutputType | null
    _avg: ConsoleAvgAggregateOutputType | null
    _sum: ConsoleSumAggregateOutputType | null
    _min: ConsoleMinAggregateOutputType | null
    _max: ConsoleMaxAggregateOutputType | null
  }

  type GetConsoleGroupByPayload<T extends consoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsoleGroupByOutputType[P]>
            : GetScalarType<T[P], ConsoleGroupByOutputType[P]>
        }
      >
    >


  export type consoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    releaseDate?: boolean
    manufacturer?: boolean
    description?: boolean
    games?: boolean | console$gamesArgs<ExtArgs>
    _count?: boolean | ConsoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["console"]>

  export type consoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    releaseDate?: boolean
    manufacturer?: boolean
    description?: boolean
  }, ExtArgs["result"]["console"]>

  export type consoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    releaseDate?: boolean
    manufacturer?: boolean
    description?: boolean
  }, ExtArgs["result"]["console"]>

  export type consoleSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    releaseDate?: boolean
    manufacturer?: boolean
    description?: boolean
  }

  export type consoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "releaseDate" | "manufacturer" | "description", ExtArgs["result"]["console"]>
  export type consoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | console$gamesArgs<ExtArgs>
    _count?: boolean | ConsoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type consoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type consoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $consolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "console"
    objects: {
      games: Prisma.$GamesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      releaseDate: Date
      manufacturer: string
      description: string
    }, ExtArgs["result"]["console"]>
    composites: {}
  }

  type consoleGetPayload<S extends boolean | null | undefined | consoleDefaultArgs> = $Result.GetResult<Prisma.$consolePayload, S>

  type consoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<consoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsoleCountAggregateInputType | true
    }

  export interface consoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['console'], meta: { name: 'console' } }
    /**
     * Find zero or one Console that matches the filter.
     * @param {consoleFindUniqueArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends consoleFindUniqueArgs>(args: SelectSubset<T, consoleFindUniqueArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Console that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {consoleFindUniqueOrThrowArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends consoleFindUniqueOrThrowArgs>(args: SelectSubset<T, consoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Console that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consoleFindFirstArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends consoleFindFirstArgs>(args?: SelectSubset<T, consoleFindFirstArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Console that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consoleFindFirstOrThrowArgs} args - Arguments to find a Console
     * @example
     * // Get one Console
     * const console = await prisma.console.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends consoleFindFirstOrThrowArgs>(args?: SelectSubset<T, consoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consoles
     * const consoles = await prisma.console.findMany()
     * 
     * // Get first 10 Consoles
     * const consoles = await prisma.console.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consoleWithIdOnly = await prisma.console.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends consoleFindManyArgs>(args?: SelectSubset<T, consoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Console.
     * @param {consoleCreateArgs} args - Arguments to create a Console.
     * @example
     * // Create one Console
     * const Console = await prisma.console.create({
     *   data: {
     *     // ... data to create a Console
     *   }
     * })
     * 
     */
    create<T extends consoleCreateArgs>(args: SelectSubset<T, consoleCreateArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consoles.
     * @param {consoleCreateManyArgs} args - Arguments to create many Consoles.
     * @example
     * // Create many Consoles
     * const console = await prisma.console.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends consoleCreateManyArgs>(args?: SelectSubset<T, consoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consoles and returns the data saved in the database.
     * @param {consoleCreateManyAndReturnArgs} args - Arguments to create many Consoles.
     * @example
     * // Create many Consoles
     * const console = await prisma.console.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consoles and only return the `id`
     * const consoleWithIdOnly = await prisma.console.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends consoleCreateManyAndReturnArgs>(args?: SelectSubset<T, consoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Console.
     * @param {consoleDeleteArgs} args - Arguments to delete one Console.
     * @example
     * // Delete one Console
     * const Console = await prisma.console.delete({
     *   where: {
     *     // ... filter to delete one Console
     *   }
     * })
     * 
     */
    delete<T extends consoleDeleteArgs>(args: SelectSubset<T, consoleDeleteArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Console.
     * @param {consoleUpdateArgs} args - Arguments to update one Console.
     * @example
     * // Update one Console
     * const console = await prisma.console.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends consoleUpdateArgs>(args: SelectSubset<T, consoleUpdateArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consoles.
     * @param {consoleDeleteManyArgs} args - Arguments to filter Consoles to delete.
     * @example
     * // Delete a few Consoles
     * const { count } = await prisma.console.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends consoleDeleteManyArgs>(args?: SelectSubset<T, consoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consoles
     * const console = await prisma.console.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends consoleUpdateManyArgs>(args: SelectSubset<T, consoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consoles and returns the data updated in the database.
     * @param {consoleUpdateManyAndReturnArgs} args - Arguments to update many Consoles.
     * @example
     * // Update many Consoles
     * const console = await prisma.console.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consoles and only return the `id`
     * const consoleWithIdOnly = await prisma.console.updateManyAndReturn({
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
    updateManyAndReturn<T extends consoleUpdateManyAndReturnArgs>(args: SelectSubset<T, consoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Console.
     * @param {consoleUpsertArgs} args - Arguments to update or create a Console.
     * @example
     * // Update or create a Console
     * const console = await prisma.console.upsert({
     *   create: {
     *     // ... data to create a Console
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Console we want to update
     *   }
     * })
     */
    upsert<T extends consoleUpsertArgs>(args: SelectSubset<T, consoleUpsertArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consoleCountArgs} args - Arguments to filter Consoles to count.
     * @example
     * // Count the number of Consoles
     * const count = await prisma.console.count({
     *   where: {
     *     // ... the filter for the Consoles we want to count
     *   }
     * })
    **/
    count<T extends consoleCountArgs>(
      args?: Subset<T, consoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Console.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsoleAggregateArgs>(args: Subset<T, ConsoleAggregateArgs>): Prisma.PrismaPromise<GetConsoleAggregateType<T>>

    /**
     * Group by Console.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consoleGroupByArgs} args - Group by arguments.
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
      T extends consoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: consoleGroupByArgs['orderBy'] }
        : { orderBy?: consoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, consoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the console model
   */
  readonly fields: consoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for console.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__consoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends console$gamesArgs<ExtArgs> = {}>(args?: Subset<T, console$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the console model
   */
  interface consoleFieldRefs {
    readonly id: FieldRef<"console", 'Int'>
    readonly name: FieldRef<"console", 'String'>
    readonly image: FieldRef<"console", 'String'>
    readonly releaseDate: FieldRef<"console", 'DateTime'>
    readonly manufacturer: FieldRef<"console", 'String'>
    readonly description: FieldRef<"console", 'String'>
  }
    

  // Custom InputTypes
  /**
   * console findUnique
   */
  export type consoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * Filter, which console to fetch.
     */
    where: consoleWhereUniqueInput
  }

  /**
   * console findUniqueOrThrow
   */
  export type consoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * Filter, which console to fetch.
     */
    where: consoleWhereUniqueInput
  }

  /**
   * console findFirst
   */
  export type consoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * Filter, which console to fetch.
     */
    where?: consoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consoles to fetch.
     */
    orderBy?: consoleOrderByWithRelationInput | consoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consoles.
     */
    cursor?: consoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consoles.
     */
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }

  /**
   * console findFirstOrThrow
   */
  export type consoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * Filter, which console to fetch.
     */
    where?: consoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consoles to fetch.
     */
    orderBy?: consoleOrderByWithRelationInput | consoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consoles.
     */
    cursor?: consoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consoles.
     */
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }

  /**
   * console findMany
   */
  export type consoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * Filter, which consoles to fetch.
     */
    where?: consoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consoles to fetch.
     */
    orderBy?: consoleOrderByWithRelationInput | consoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing consoles.
     */
    cursor?: consoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consoles.
     */
    distinct?: ConsoleScalarFieldEnum | ConsoleScalarFieldEnum[]
  }

  /**
   * console create
   */
  export type consoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * The data needed to create a console.
     */
    data: XOR<consoleCreateInput, consoleUncheckedCreateInput>
  }

  /**
   * console createMany
   */
  export type consoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many consoles.
     */
    data: consoleCreateManyInput | consoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * console createManyAndReturn
   */
  export type consoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * The data used to create many consoles.
     */
    data: consoleCreateManyInput | consoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * console update
   */
  export type consoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * The data needed to update a console.
     */
    data: XOR<consoleUpdateInput, consoleUncheckedUpdateInput>
    /**
     * Choose, which console to update.
     */
    where: consoleWhereUniqueInput
  }

  /**
   * console updateMany
   */
  export type consoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update consoles.
     */
    data: XOR<consoleUpdateManyMutationInput, consoleUncheckedUpdateManyInput>
    /**
     * Filter which consoles to update
     */
    where?: consoleWhereInput
    /**
     * Limit how many consoles to update.
     */
    limit?: number
  }

  /**
   * console updateManyAndReturn
   */
  export type consoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * The data used to update consoles.
     */
    data: XOR<consoleUpdateManyMutationInput, consoleUncheckedUpdateManyInput>
    /**
     * Filter which consoles to update
     */
    where?: consoleWhereInput
    /**
     * Limit how many consoles to update.
     */
    limit?: number
  }

  /**
   * console upsert
   */
  export type consoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * The filter to search for the console to update in case it exists.
     */
    where: consoleWhereUniqueInput
    /**
     * In case the console found by the `where` argument doesn't exist, create a new console with this data.
     */
    create: XOR<consoleCreateInput, consoleUncheckedCreateInput>
    /**
     * In case the console was found with the provided `where` argument, update it with this data.
     */
    update: XOR<consoleUpdateInput, consoleUncheckedUpdateInput>
  }

  /**
   * console delete
   */
  export type consoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
    /**
     * Filter which console to delete.
     */
    where: consoleWhereUniqueInput
  }

  /**
   * console deleteMany
   */
  export type consoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consoles to delete
     */
    where?: consoleWhereInput
    /**
     * Limit how many consoles to delete.
     */
    limit?: number
  }

  /**
   * console.games
   */
  export type console$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    where?: GamesWhereInput
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    cursor?: GamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * console without action
   */
  export type consoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the console
     */
    select?: consoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the console
     */
    omit?: consoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consoleInclude<ExtArgs> | null
  }


  /**
   * Model Games
   */

  export type AggregateGames = {
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  export type GamesAvgAggregateOutputType = {
    id: number | null
    price: number | null
    console_id: number | null
  }

  export type GamesSumAggregateOutputType = {
    id: number | null
    price: number | null
    console_id: number | null
  }

  export type GamesMinAggregateOutputType = {
    id: number | null
    title: string | null
    cover: string | null
    developer: string | null
    releaseDate: Date | null
    price: number | null
    genre: string | null
    description: string | null
    console_id: number | null
  }

  export type GamesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    cover: string | null
    developer: string | null
    releaseDate: Date | null
    price: number | null
    genre: string | null
    description: string | null
    console_id: number | null
  }

  export type GamesCountAggregateOutputType = {
    id: number
    title: number
    cover: number
    developer: number
    releaseDate: number
    price: number
    genre: number
    description: number
    console_id: number
    _all: number
  }


  export type GamesAvgAggregateInputType = {
    id?: true
    price?: true
    console_id?: true
  }

  export type GamesSumAggregateInputType = {
    id?: true
    price?: true
    console_id?: true
  }

  export type GamesMinAggregateInputType = {
    id?: true
    title?: true
    cover?: true
    developer?: true
    releaseDate?: true
    price?: true
    genre?: true
    description?: true
    console_id?: true
  }

  export type GamesMaxAggregateInputType = {
    id?: true
    title?: true
    cover?: true
    developer?: true
    releaseDate?: true
    price?: true
    genre?: true
    description?: true
    console_id?: true
  }

  export type GamesCountAggregateInputType = {
    id?: true
    title?: true
    cover?: true
    developer?: true
    releaseDate?: true
    price?: true
    genre?: true
    description?: true
    console_id?: true
    _all?: true
  }

  export type GamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to aggregate.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamesMaxAggregateInputType
  }

  export type GetGamesAggregateType<T extends GamesAggregateArgs> = {
        [P in keyof T & keyof AggregateGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGames[P]>
      : GetScalarType<T[P], AggregateGames[P]>
  }




  export type GamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamesWhereInput
    orderBy?: GamesOrderByWithAggregationInput | GamesOrderByWithAggregationInput[]
    by: GamesScalarFieldEnum[] | GamesScalarFieldEnum
    having?: GamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamesCountAggregateInputType | true
    _avg?: GamesAvgAggregateInputType
    _sum?: GamesSumAggregateInputType
    _min?: GamesMinAggregateInputType
    _max?: GamesMaxAggregateInputType
  }

  export type GamesGroupByOutputType = {
    id: number
    title: string
    cover: string
    developer: string
    releaseDate: Date
    price: number
    genre: string
    description: string
    console_id: number
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  type GetGamesGroupByPayload<T extends GamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamesGroupByOutputType[P]>
            : GetScalarType<T[P], GamesGroupByOutputType[P]>
        }
      >
    >


  export type GamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
    developer?: boolean
    releaseDate?: boolean
    price?: boolean
    genre?: boolean
    description?: boolean
    console_id?: boolean
    console?: boolean | consoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>

  export type GamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
    developer?: boolean
    releaseDate?: boolean
    price?: boolean
    genre?: boolean
    description?: boolean
    console_id?: boolean
    console?: boolean | consoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>

  export type GamesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
    developer?: boolean
    releaseDate?: boolean
    price?: boolean
    genre?: boolean
    description?: boolean
    console_id?: boolean
    console?: boolean | consoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>

  export type GamesSelectScalar = {
    id?: boolean
    title?: boolean
    cover?: boolean
    developer?: boolean
    releaseDate?: boolean
    price?: boolean
    genre?: boolean
    description?: boolean
    console_id?: boolean
  }

  export type GamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "cover" | "developer" | "releaseDate" | "price" | "genre" | "description" | "console_id", ExtArgs["result"]["games"]>
  export type GamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    console?: boolean | consoleDefaultArgs<ExtArgs>
  }
  export type GamesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    console?: boolean | consoleDefaultArgs<ExtArgs>
  }
  export type GamesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    console?: boolean | consoleDefaultArgs<ExtArgs>
  }

  export type $GamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Games"
    objects: {
      console: Prisma.$consolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      cover: string
      developer: string
      releaseDate: Date
      price: number
      genre: string
      description: string
      console_id: number
    }, ExtArgs["result"]["games"]>
    composites: {}
  }

  type GamesGetPayload<S extends boolean | null | undefined | GamesDefaultArgs> = $Result.GetResult<Prisma.$GamesPayload, S>

  type GamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamesCountAggregateInputType | true
    }

  export interface GamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Games'], meta: { name: 'Games' } }
    /**
     * Find zero or one Games that matches the filter.
     * @param {GamesFindUniqueArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GamesFindUniqueArgs>(args: SelectSubset<T, GamesFindUniqueArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GamesFindUniqueOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GamesFindUniqueOrThrowArgs>(args: SelectSubset<T, GamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindFirstArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GamesFindFirstArgs>(args?: SelectSubset<T, GamesFindFirstArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindFirstOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GamesFindFirstOrThrowArgs>(args?: SelectSubset<T, GamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.games.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.games.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gamesWithIdOnly = await prisma.games.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GamesFindManyArgs>(args?: SelectSubset<T, GamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Games.
     * @param {GamesCreateArgs} args - Arguments to create a Games.
     * @example
     * // Create one Games
     * const Games = await prisma.games.create({
     *   data: {
     *     // ... data to create a Games
     *   }
     * })
     * 
     */
    create<T extends GamesCreateArgs>(args: SelectSubset<T, GamesCreateArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GamesCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GamesCreateManyArgs>(args?: SelectSubset<T, GamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GamesCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GamesCreateManyAndReturnArgs>(args?: SelectSubset<T, GamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Games.
     * @param {GamesDeleteArgs} args - Arguments to delete one Games.
     * @example
     * // Delete one Games
     * const Games = await prisma.games.delete({
     *   where: {
     *     // ... filter to delete one Games
     *   }
     * })
     * 
     */
    delete<T extends GamesDeleteArgs>(args: SelectSubset<T, GamesDeleteArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Games.
     * @param {GamesUpdateArgs} args - Arguments to update one Games.
     * @example
     * // Update one Games
     * const games = await prisma.games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GamesUpdateArgs>(args: SelectSubset<T, GamesUpdateArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GamesDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GamesDeleteManyArgs>(args?: SelectSubset<T, GamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GamesUpdateManyArgs>(args: SelectSubset<T, GamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GamesUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.updateManyAndReturn({
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
    updateManyAndReturn<T extends GamesUpdateManyAndReturnArgs>(args: SelectSubset<T, GamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Games.
     * @param {GamesUpsertArgs} args - Arguments to update or create a Games.
     * @example
     * // Update or create a Games
     * const games = await prisma.games.upsert({
     *   create: {
     *     // ... data to create a Games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Games we want to update
     *   }
     * })
     */
    upsert<T extends GamesUpsertArgs>(args: SelectSubset<T, GamesUpsertArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.games.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GamesCountArgs>(
      args?: Subset<T, GamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GamesAggregateArgs>(args: Subset<T, GamesAggregateArgs>): Prisma.PrismaPromise<GetGamesAggregateType<T>>

    /**
     * Group by Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesGroupByArgs} args - Group by arguments.
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
      T extends GamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamesGroupByArgs['orderBy'] }
        : { orderBy?: GamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Games model
   */
  readonly fields: GamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    console<T extends consoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, consoleDefaultArgs<ExtArgs>>): Prisma__consoleClient<$Result.GetResult<Prisma.$consolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Games model
   */
  interface GamesFieldRefs {
    readonly id: FieldRef<"Games", 'Int'>
    readonly title: FieldRef<"Games", 'String'>
    readonly cover: FieldRef<"Games", 'String'>
    readonly developer: FieldRef<"Games", 'String'>
    readonly releaseDate: FieldRef<"Games", 'DateTime'>
    readonly price: FieldRef<"Games", 'Float'>
    readonly genre: FieldRef<"Games", 'String'>
    readonly description: FieldRef<"Games", 'String'>
    readonly console_id: FieldRef<"Games", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Games findUnique
   */
  export type GamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games findUniqueOrThrow
   */
  export type GamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games findFirst
   */
  export type GamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games findFirstOrThrow
   */
  export type GamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games findMany
   */
  export type GamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games create
   */
  export type GamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The data needed to create a Games.
     */
    data: XOR<GamesCreateInput, GamesUncheckedCreateInput>
  }

  /**
   * Games createMany
   */
  export type GamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GamesCreateManyInput | GamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Games createManyAndReturn
   */
  export type GamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GamesCreateManyInput | GamesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Games update
   */
  export type GamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The data needed to update a Games.
     */
    data: XOR<GamesUpdateInput, GamesUncheckedUpdateInput>
    /**
     * Choose, which Games to update.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games updateMany
   */
  export type GamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Games updateManyAndReturn
   */
  export type GamesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Games upsert
   */
  export type GamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The filter to search for the Games to update in case it exists.
     */
    where: GamesWhereUniqueInput
    /**
     * In case the Games found by the `where` argument doesn't exist, create a new Games with this data.
     */
    create: XOR<GamesCreateInput, GamesUncheckedCreateInput>
    /**
     * In case the Games was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GamesUpdateInput, GamesUncheckedUpdateInput>
  }

  /**
   * Games delete
   */
  export type GamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter which Games to delete.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games deleteMany
   */
  export type GamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Games without action
   */
  export type GamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
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


  export const ConsoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    releaseDate: 'releaseDate',
    manufacturer: 'manufacturer',
    description: 'description'
  };

  export type ConsoleScalarFieldEnum = (typeof ConsoleScalarFieldEnum)[keyof typeof ConsoleScalarFieldEnum]


  export const GamesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    cover: 'cover',
    developer: 'developer',
    releaseDate: 'releaseDate',
    price: 'price',
    genre: 'genre',
    description: 'description',
    console_id: 'console_id'
  };

  export type GamesScalarFieldEnum = (typeof GamesScalarFieldEnum)[keyof typeof GamesScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type consoleWhereInput = {
    AND?: consoleWhereInput | consoleWhereInput[]
    OR?: consoleWhereInput[]
    NOT?: consoleWhereInput | consoleWhereInput[]
    id?: IntFilter<"console"> | number
    name?: StringFilter<"console"> | string
    image?: StringFilter<"console"> | string
    releaseDate?: DateTimeFilter<"console"> | Date | string
    manufacturer?: StringFilter<"console"> | string
    description?: StringFilter<"console"> | string
    games?: GamesListRelationFilter
  }

  export type consoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    releaseDate?: SortOrder
    manufacturer?: SortOrder
    description?: SortOrder
    games?: GamesOrderByRelationAggregateInput
  }

  export type consoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: consoleWhereInput | consoleWhereInput[]
    OR?: consoleWhereInput[]
    NOT?: consoleWhereInput | consoleWhereInput[]
    image?: StringFilter<"console"> | string
    releaseDate?: DateTimeFilter<"console"> | Date | string
    manufacturer?: StringFilter<"console"> | string
    description?: StringFilter<"console"> | string
    games?: GamesListRelationFilter
  }, "id" | "name">

  export type consoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    releaseDate?: SortOrder
    manufacturer?: SortOrder
    description?: SortOrder
    _count?: consoleCountOrderByAggregateInput
    _avg?: consoleAvgOrderByAggregateInput
    _max?: consoleMaxOrderByAggregateInput
    _min?: consoleMinOrderByAggregateInput
    _sum?: consoleSumOrderByAggregateInput
  }

  export type consoleScalarWhereWithAggregatesInput = {
    AND?: consoleScalarWhereWithAggregatesInput | consoleScalarWhereWithAggregatesInput[]
    OR?: consoleScalarWhereWithAggregatesInput[]
    NOT?: consoleScalarWhereWithAggregatesInput | consoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"console"> | number
    name?: StringWithAggregatesFilter<"console"> | string
    image?: StringWithAggregatesFilter<"console"> | string
    releaseDate?: DateTimeWithAggregatesFilter<"console"> | Date | string
    manufacturer?: StringWithAggregatesFilter<"console"> | string
    description?: StringWithAggregatesFilter<"console"> | string
  }

  export type GamesWhereInput = {
    AND?: GamesWhereInput | GamesWhereInput[]
    OR?: GamesWhereInput[]
    NOT?: GamesWhereInput | GamesWhereInput[]
    id?: IntFilter<"Games"> | number
    title?: StringFilter<"Games"> | string
    cover?: StringFilter<"Games"> | string
    developer?: StringFilter<"Games"> | string
    releaseDate?: DateTimeFilter<"Games"> | Date | string
    price?: FloatFilter<"Games"> | number
    genre?: StringFilter<"Games"> | string
    description?: StringFilter<"Games"> | string
    console_id?: IntFilter<"Games"> | number
    console?: XOR<ConsoleScalarRelationFilter, consoleWhereInput>
  }

  export type GamesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    developer?: SortOrder
    releaseDate?: SortOrder
    price?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    console_id?: SortOrder
    console?: consoleOrderByWithRelationInput
  }

  export type GamesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: GamesWhereInput | GamesWhereInput[]
    OR?: GamesWhereInput[]
    NOT?: GamesWhereInput | GamesWhereInput[]
    cover?: StringFilter<"Games"> | string
    developer?: StringFilter<"Games"> | string
    releaseDate?: DateTimeFilter<"Games"> | Date | string
    price?: FloatFilter<"Games"> | number
    genre?: StringFilter<"Games"> | string
    description?: StringFilter<"Games"> | string
    console_id?: IntFilter<"Games"> | number
    console?: XOR<ConsoleScalarRelationFilter, consoleWhereInput>
  }, "id" | "title">

  export type GamesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    developer?: SortOrder
    releaseDate?: SortOrder
    price?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    console_id?: SortOrder
    _count?: GamesCountOrderByAggregateInput
    _avg?: GamesAvgOrderByAggregateInput
    _max?: GamesMaxOrderByAggregateInput
    _min?: GamesMinOrderByAggregateInput
    _sum?: GamesSumOrderByAggregateInput
  }

  export type GamesScalarWhereWithAggregatesInput = {
    AND?: GamesScalarWhereWithAggregatesInput | GamesScalarWhereWithAggregatesInput[]
    OR?: GamesScalarWhereWithAggregatesInput[]
    NOT?: GamesScalarWhereWithAggregatesInput | GamesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Games"> | number
    title?: StringWithAggregatesFilter<"Games"> | string
    cover?: StringWithAggregatesFilter<"Games"> | string
    developer?: StringWithAggregatesFilter<"Games"> | string
    releaseDate?: DateTimeWithAggregatesFilter<"Games"> | Date | string
    price?: FloatWithAggregatesFilter<"Games"> | number
    genre?: StringWithAggregatesFilter<"Games"> | string
    description?: StringWithAggregatesFilter<"Games"> | string
    console_id?: IntWithAggregatesFilter<"Games"> | number
  }

  export type consoleCreateInput = {
    name: string
    image?: string
    releaseDate: Date | string
    manufacturer: string
    description: string
    games?: GamesCreateNestedManyWithoutConsoleInput
  }

  export type consoleUncheckedCreateInput = {
    id?: number
    name: string
    image?: string
    releaseDate: Date | string
    manufacturer: string
    description: string
    games?: GamesUncheckedCreateNestedManyWithoutConsoleInput
  }

  export type consoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    games?: GamesUpdateManyWithoutConsoleNestedInput
  }

  export type consoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    games?: GamesUncheckedUpdateManyWithoutConsoleNestedInput
  }

  export type consoleCreateManyInput = {
    id?: number
    name: string
    image?: string
    releaseDate: Date | string
    manufacturer: string
    description: string
  }

  export type consoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type consoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GamesCreateInput = {
    title: string
    cover?: string
    developer: string
    releaseDate: Date | string
    price: number
    genre: string
    description: string
    console: consoleCreateNestedOneWithoutGamesInput
  }

  export type GamesUncheckedCreateInput = {
    id?: number
    title: string
    cover?: string
    developer: string
    releaseDate: Date | string
    price: number
    genre: string
    description: string
    console_id: number
  }

  export type GamesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    console?: consoleUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GamesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    console_id?: IntFieldUpdateOperationsInput | number
  }

  export type GamesCreateManyInput = {
    id?: number
    title: string
    cover?: string
    developer: string
    releaseDate: Date | string
    price: number
    genre: string
    description: string
    console_id: number
  }

  export type GamesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GamesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    console_id?: IntFieldUpdateOperationsInput | number
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

  export type GamesListRelationFilter = {
    every?: GamesWhereInput
    some?: GamesWhereInput
    none?: GamesWhereInput
  }

  export type GamesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type consoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    releaseDate?: SortOrder
    manufacturer?: SortOrder
    description?: SortOrder
  }

  export type consoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type consoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    releaseDate?: SortOrder
    manufacturer?: SortOrder
    description?: SortOrder
  }

  export type consoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    releaseDate?: SortOrder
    manufacturer?: SortOrder
    description?: SortOrder
  }

  export type consoleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ConsoleScalarRelationFilter = {
    is?: consoleWhereInput
    isNot?: consoleWhereInput
  }

  export type GamesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    developer?: SortOrder
    releaseDate?: SortOrder
    price?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    console_id?: SortOrder
  }

  export type GamesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    console_id?: SortOrder
  }

  export type GamesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    developer?: SortOrder
    releaseDate?: SortOrder
    price?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    console_id?: SortOrder
  }

  export type GamesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    developer?: SortOrder
    releaseDate?: SortOrder
    price?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    console_id?: SortOrder
  }

  export type GamesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    console_id?: SortOrder
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

  export type GamesCreateNestedManyWithoutConsoleInput = {
    create?: XOR<GamesCreateWithoutConsoleInput, GamesUncheckedCreateWithoutConsoleInput> | GamesCreateWithoutConsoleInput[] | GamesUncheckedCreateWithoutConsoleInput[]
    connectOrCreate?: GamesCreateOrConnectWithoutConsoleInput | GamesCreateOrConnectWithoutConsoleInput[]
    createMany?: GamesCreateManyConsoleInputEnvelope
    connect?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
  }

  export type GamesUncheckedCreateNestedManyWithoutConsoleInput = {
    create?: XOR<GamesCreateWithoutConsoleInput, GamesUncheckedCreateWithoutConsoleInput> | GamesCreateWithoutConsoleInput[] | GamesUncheckedCreateWithoutConsoleInput[]
    connectOrCreate?: GamesCreateOrConnectWithoutConsoleInput | GamesCreateOrConnectWithoutConsoleInput[]
    createMany?: GamesCreateManyConsoleInputEnvelope
    connect?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GamesUpdateManyWithoutConsoleNestedInput = {
    create?: XOR<GamesCreateWithoutConsoleInput, GamesUncheckedCreateWithoutConsoleInput> | GamesCreateWithoutConsoleInput[] | GamesUncheckedCreateWithoutConsoleInput[]
    connectOrCreate?: GamesCreateOrConnectWithoutConsoleInput | GamesCreateOrConnectWithoutConsoleInput[]
    upsert?: GamesUpsertWithWhereUniqueWithoutConsoleInput | GamesUpsertWithWhereUniqueWithoutConsoleInput[]
    createMany?: GamesCreateManyConsoleInputEnvelope
    set?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
    disconnect?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
    delete?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
    connect?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
    update?: GamesUpdateWithWhereUniqueWithoutConsoleInput | GamesUpdateWithWhereUniqueWithoutConsoleInput[]
    updateMany?: GamesUpdateManyWithWhereWithoutConsoleInput | GamesUpdateManyWithWhereWithoutConsoleInput[]
    deleteMany?: GamesScalarWhereInput | GamesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GamesUncheckedUpdateManyWithoutConsoleNestedInput = {
    create?: XOR<GamesCreateWithoutConsoleInput, GamesUncheckedCreateWithoutConsoleInput> | GamesCreateWithoutConsoleInput[] | GamesUncheckedCreateWithoutConsoleInput[]
    connectOrCreate?: GamesCreateOrConnectWithoutConsoleInput | GamesCreateOrConnectWithoutConsoleInput[]
    upsert?: GamesUpsertWithWhereUniqueWithoutConsoleInput | GamesUpsertWithWhereUniqueWithoutConsoleInput[]
    createMany?: GamesCreateManyConsoleInputEnvelope
    set?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
    disconnect?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
    delete?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
    connect?: GamesWhereUniqueInput | GamesWhereUniqueInput[]
    update?: GamesUpdateWithWhereUniqueWithoutConsoleInput | GamesUpdateWithWhereUniqueWithoutConsoleInput[]
    updateMany?: GamesUpdateManyWithWhereWithoutConsoleInput | GamesUpdateManyWithWhereWithoutConsoleInput[]
    deleteMany?: GamesScalarWhereInput | GamesScalarWhereInput[]
  }

  export type consoleCreateNestedOneWithoutGamesInput = {
    create?: XOR<consoleCreateWithoutGamesInput, consoleUncheckedCreateWithoutGamesInput>
    connectOrCreate?: consoleCreateOrConnectWithoutGamesInput
    connect?: consoleWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type consoleUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<consoleCreateWithoutGamesInput, consoleUncheckedCreateWithoutGamesInput>
    connectOrCreate?: consoleCreateOrConnectWithoutGamesInput
    upsert?: consoleUpsertWithoutGamesInput
    connect?: consoleWhereUniqueInput
    update?: XOR<XOR<consoleUpdateToOneWithWhereWithoutGamesInput, consoleUpdateWithoutGamesInput>, consoleUncheckedUpdateWithoutGamesInput>
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

  export type GamesCreateWithoutConsoleInput = {
    title: string
    cover?: string
    developer: string
    releaseDate: Date | string
    price: number
    genre: string
    description: string
  }

  export type GamesUncheckedCreateWithoutConsoleInput = {
    id?: number
    title: string
    cover?: string
    developer: string
    releaseDate: Date | string
    price: number
    genre: string
    description: string
  }

  export type GamesCreateOrConnectWithoutConsoleInput = {
    where: GamesWhereUniqueInput
    create: XOR<GamesCreateWithoutConsoleInput, GamesUncheckedCreateWithoutConsoleInput>
  }

  export type GamesCreateManyConsoleInputEnvelope = {
    data: GamesCreateManyConsoleInput | GamesCreateManyConsoleInput[]
    skipDuplicates?: boolean
  }

  export type GamesUpsertWithWhereUniqueWithoutConsoleInput = {
    where: GamesWhereUniqueInput
    update: XOR<GamesUpdateWithoutConsoleInput, GamesUncheckedUpdateWithoutConsoleInput>
    create: XOR<GamesCreateWithoutConsoleInput, GamesUncheckedCreateWithoutConsoleInput>
  }

  export type GamesUpdateWithWhereUniqueWithoutConsoleInput = {
    where: GamesWhereUniqueInput
    data: XOR<GamesUpdateWithoutConsoleInput, GamesUncheckedUpdateWithoutConsoleInput>
  }

  export type GamesUpdateManyWithWhereWithoutConsoleInput = {
    where: GamesScalarWhereInput
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyWithoutConsoleInput>
  }

  export type GamesScalarWhereInput = {
    AND?: GamesScalarWhereInput | GamesScalarWhereInput[]
    OR?: GamesScalarWhereInput[]
    NOT?: GamesScalarWhereInput | GamesScalarWhereInput[]
    id?: IntFilter<"Games"> | number
    title?: StringFilter<"Games"> | string
    cover?: StringFilter<"Games"> | string
    developer?: StringFilter<"Games"> | string
    releaseDate?: DateTimeFilter<"Games"> | Date | string
    price?: FloatFilter<"Games"> | number
    genre?: StringFilter<"Games"> | string
    description?: StringFilter<"Games"> | string
    console_id?: IntFilter<"Games"> | number
  }

  export type consoleCreateWithoutGamesInput = {
    name: string
    image?: string
    releaseDate: Date | string
    manufacturer: string
    description: string
  }

  export type consoleUncheckedCreateWithoutGamesInput = {
    id?: number
    name: string
    image?: string
    releaseDate: Date | string
    manufacturer: string
    description: string
  }

  export type consoleCreateOrConnectWithoutGamesInput = {
    where: consoleWhereUniqueInput
    create: XOR<consoleCreateWithoutGamesInput, consoleUncheckedCreateWithoutGamesInput>
  }

  export type consoleUpsertWithoutGamesInput = {
    update: XOR<consoleUpdateWithoutGamesInput, consoleUncheckedUpdateWithoutGamesInput>
    create: XOR<consoleCreateWithoutGamesInput, consoleUncheckedCreateWithoutGamesInput>
    where?: consoleWhereInput
  }

  export type consoleUpdateToOneWithWhereWithoutGamesInput = {
    where?: consoleWhereInput
    data: XOR<consoleUpdateWithoutGamesInput, consoleUncheckedUpdateWithoutGamesInput>
  }

  export type consoleUpdateWithoutGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type consoleUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GamesCreateManyConsoleInput = {
    id?: number
    title: string
    cover?: string
    developer: string
    releaseDate: Date | string
    price: number
    genre: string
    description: string
  }

  export type GamesUpdateWithoutConsoleInput = {
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GamesUncheckedUpdateWithoutConsoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GamesUncheckedUpdateManyWithoutConsoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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