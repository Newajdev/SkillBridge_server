
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model TutorProfile
 * 
 */
export type TutorProfile = $Result.DefaultSelection<Prisma.$TutorProfilePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model TutorCategory
 * 
 */
export type TutorCategory = $Result.DefaultSelection<Prisma.$TutorCategoryPayload>
/**
 * Model AvailabilitySlot
 * 
 */
export type AvailabilitySlot = $Result.DefaultSelection<Prisma.$AvailabilitySlotPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ROLE: {
  STUDENT: 'STUDENT',
  TUTOR: 'TUTOR',
  ADMIN: 'ADMIN'
};

export type ROLE = (typeof ROLE)[keyof typeof ROLE]


export const STATUS: {
  ACTIVE: 'ACTIVE',
  BANNED: 'BANNED',
  HOLD: 'HOLD'
};

export type STATUS = (typeof STATUS)[keyof typeof STATUS]


export const BOOKINGSTATUS: {
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BOOKINGSTATUS = (typeof BOOKINGSTATUS)[keyof typeof BOOKINGSTATUS]


export const TUTORTYPE: {
  ELITE: 'ELITE',
  PRO: 'PRO',
  MASTER: 'MASTER',
  STARTER: 'STARTER'
};

export type TUTORTYPE = (typeof TUTORTYPE)[keyof typeof TUTORTYPE]


export const AVAILABILITYSTATUS: {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED',
  BLOCKED: 'BLOCKED'
};

export type AVAILABILITYSTATUS = (typeof AVAILABILITYSTATUS)[keyof typeof AVAILABILITYSTATUS]


export const PAYMENTSTATUS: {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  REFUNDED: 'REFUNDED'
};

export type PAYMENTSTATUS = (typeof PAYMENTSTATUS)[keyof typeof PAYMENTSTATUS]

}

export type ROLE = $Enums.ROLE

export const ROLE: typeof $Enums.ROLE

export type STATUS = $Enums.STATUS

export const STATUS: typeof $Enums.STATUS

export type BOOKINGSTATUS = $Enums.BOOKINGSTATUS

export const BOOKINGSTATUS: typeof $Enums.BOOKINGSTATUS

export type TUTORTYPE = $Enums.TUTORTYPE

export const TUTORTYPE: typeof $Enums.TUTORTYPE

export type AVAILABILITYSTATUS = $Enums.AVAILABILITYSTATUS

export const AVAILABILITYSTATUS: typeof $Enums.AVAILABILITYSTATUS

export type PAYMENTSTATUS = $Enums.PAYMENTSTATUS

export const PAYMENTSTATUS: typeof $Enums.PAYMENTSTATUS

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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorProfile`: Exposes CRUD operations for the **TutorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorProfiles
    * const tutorProfiles = await prisma.tutorProfile.findMany()
    * ```
    */
  get tutorProfile(): Prisma.TutorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorCategory`: Exposes CRUD operations for the **TutorCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorCategories
    * const tutorCategories = await prisma.tutorCategory.findMany()
    * ```
    */
  get tutorCategory(): Prisma.TutorCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilitySlot`: Exposes CRUD operations for the **AvailabilitySlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilitySlots
    * const availabilitySlots = await prisma.availabilitySlot.findMany()
    * ```
    */
  get availabilitySlot(): Prisma.AvailabilitySlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
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
    User: 'User',
    StudentProfile: 'StudentProfile',
    TutorProfile: 'TutorProfile',
    Category: 'Category',
    TutorCategory: 'TutorCategory',
    AvailabilitySlot: 'AvailabilitySlot',
    Booking: 'Booking',
    Review: 'Review',
    Notification: 'Notification'
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
      modelProps: "user" | "studentProfile" | "tutorProfile" | "category" | "tutorCategory" | "availabilitySlot" | "booking" | "review" | "notification"
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
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      TutorProfile: {
        payload: Prisma.$TutorProfilePayload<ExtArgs>
        fields: Prisma.TutorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          findFirst: {
            args: Prisma.TutorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          findMany: {
            args: Prisma.TutorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          create: {
            args: Prisma.TutorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          createMany: {
            args: Prisma.TutorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          delete: {
            args: Prisma.TutorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          update: {
            args: Prisma.TutorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          deleteMany: {
            args: Prisma.TutorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          upsert: {
            args: Prisma.TutorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          aggregate: {
            args: Prisma.TutorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorProfile>
          }
          groupBy: {
            args: Prisma.TutorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TutorProfileCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      TutorCategory: {
        payload: Prisma.$TutorCategoryPayload<ExtArgs>
        fields: Prisma.TutorCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>
          }
          findFirst: {
            args: Prisma.TutorCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>
          }
          findMany: {
            args: Prisma.TutorCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>[]
          }
          create: {
            args: Prisma.TutorCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>
          }
          createMany: {
            args: Prisma.TutorCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>[]
          }
          delete: {
            args: Prisma.TutorCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>
          }
          update: {
            args: Prisma.TutorCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TutorCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>[]
          }
          upsert: {
            args: Prisma.TutorCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorCategoryPayload>
          }
          aggregate: {
            args: Prisma.TutorCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorCategory>
          }
          groupBy: {
            args: Prisma.TutorCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TutorCategoryCountAggregateOutputType> | number
          }
        }
      }
      AvailabilitySlot: {
        payload: Prisma.$AvailabilitySlotPayload<ExtArgs>
        fields: Prisma.AvailabilitySlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilitySlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          findFirst: {
            args: Prisma.AvailabilitySlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilitySlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          findMany: {
            args: Prisma.AvailabilitySlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          create: {
            args: Prisma.AvailabilitySlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          createMany: {
            args: Prisma.AvailabilitySlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilitySlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          delete: {
            args: Prisma.AvailabilitySlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          update: {
            args: Prisma.AvailabilitySlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilitySlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilitySlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilitySlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          aggregate: {
            args: Prisma.AvailabilitySlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilitySlot>
          }
          groupBy: {
            args: Prisma.AvailabilitySlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilitySlotCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySlotCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    user?: UserOmit
    studentProfile?: StudentProfileOmit
    tutorProfile?: TutorProfileOmit
    category?: CategoryOmit
    tutorCategory?: TutorCategoryOmit
    availabilitySlot?: AvailabilitySlotOmit
    booking?: BookingOmit
    review?: ReviewOmit
    notification?: NotificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    verifiedTutors: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifiedTutors?: boolean | UserCountOutputTypeCountVerifiedTutorsArgs
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
  export type UserCountOutputTypeCountVerifiedTutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorProfileWhereInput
  }


  /**
   * Count Type StudentProfileCountOutputType
   */

  export type StudentProfileCountOutputType = {
    bookings: number
    reviews: number
  }

  export type StudentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | StudentProfileCountOutputTypeCountBookingsArgs
    reviews?: boolean | StudentProfileCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfileCountOutputType
     */
    select?: StudentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TutorProfileCountOutputType
   */

  export type TutorProfileCountOutputType = {
    categories: number
    availability: number
    bookings: number
    reviews: number
  }

  export type TutorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TutorProfileCountOutputTypeCountCategoriesArgs
    availability?: boolean | TutorProfileCountOutputTypeCountAvailabilityArgs
    bookings?: boolean | TutorProfileCountOutputTypeCountBookingsArgs
    reviews?: boolean | TutorProfileCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfileCountOutputType
     */
    select?: TutorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorCategoryWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    tutors: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | CategoryCountOutputTypeCountTutorsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorCategoryWhereInput
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
    role: $Enums.ROLE | null
    status: $Enums.STATUS | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.ROLE | null
    status: $Enums.STATUS | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
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
    role: $Enums.ROLE
    status: $Enums.STATUS
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
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
    status?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutorProfile?: boolean | User$tutorProfileArgs<ExtArgs>
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    verifiedTutors?: boolean | User$verifiedTutorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | User$tutorProfileArgs<ExtArgs>
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    verifiedTutors?: boolean | User$verifiedTutorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs> | null
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null
      verifiedTutors: Prisma.$TutorProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.ROLE
      status: $Enums.STATUS
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
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
    tutorProfile<T extends User$tutorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$tutorProfileArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    studentProfile<T extends User$studentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$studentProfileArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verifiedTutors<T extends User$verifiedTutorsArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedTutorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly role: FieldRef<"User", 'ROLE'>
    readonly status: FieldRef<"User", 'STATUS'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.tutorProfile
   */
  export type User$tutorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    where?: TutorProfileWhereInput
  }

  /**
   * User.studentProfile
   */
  export type User$studentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
  }

  /**
   * User.verifiedTutors
   */
  export type User$verifiedTutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    where?: TutorProfileWhereInput
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    cursor?: TutorProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
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
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    profilePicture: string | null
    bio: string | null
    phone: string | null
    schoolOrCollege: string | null
    createdAt: Date | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    profilePicture: string | null
    bio: string | null
    phone: string | null
    schoolOrCollege: string | null
    createdAt: Date | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    userId: number
    profilePicture: number
    bio: number
    phone: number
    schoolOrCollege: number
    createdAt: number
    _all: number
  }


  export type StudentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    bio?: true
    phone?: true
    schoolOrCollege?: true
    createdAt?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    bio?: true
    phone?: true
    schoolOrCollege?: true
    createdAt?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    bio?: true
    phone?: true
    schoolOrCollege?: true
    createdAt?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: string
    userId: string
    profilePicture: string | null
    bio: string | null
    phone: string | null
    schoolOrCollege: string | null
    createdAt: Date
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    bio?: boolean
    phone?: boolean
    schoolOrCollege?: boolean
    createdAt?: boolean
    bookings?: boolean | StudentProfile$bookingsArgs<ExtArgs>
    reviews?: boolean | StudentProfile$reviewsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    bio?: boolean
    phone?: boolean
    schoolOrCollege?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    bio?: boolean
    phone?: boolean
    schoolOrCollege?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    bio?: boolean
    phone?: boolean
    schoolOrCollege?: boolean
    createdAt?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "profilePicture" | "bio" | "phone" | "schoolOrCollege" | "createdAt", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | StudentProfile$bookingsArgs<ExtArgs>
    reviews?: boolean | StudentProfile$reviewsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      profilePicture: string | null
      bio: string | null
      phone: string | null
      schoolOrCollege: string | null
      createdAt: Date
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
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
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends StudentProfile$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends StudentProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'String'>
    readonly userId: FieldRef<"StudentProfile", 'String'>
    readonly profilePicture: FieldRef<"StudentProfile", 'String'>
    readonly bio: FieldRef<"StudentProfile", 'String'>
    readonly phone: FieldRef<"StudentProfile", 'String'>
    readonly schoolOrCollege: FieldRef<"StudentProfile", 'String'>
    readonly createdAt: FieldRef<"StudentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile.bookings
   */
  export type StudentProfile$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * StudentProfile.reviews
   */
  export type StudentProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model TutorProfile
   */

  export type AggregateTutorProfile = {
    _count: TutorProfileCountAggregateOutputType | null
    _avg: TutorProfileAvgAggregateOutputType | null
    _sum: TutorProfileSumAggregateOutputType | null
    _min: TutorProfileMinAggregateOutputType | null
    _max: TutorProfileMaxAggregateOutputType | null
  }

  export type TutorProfileAvgAggregateOutputType = {
    hourlyRate: number | null
    experience: number | null
  }

  export type TutorProfileSumAggregateOutputType = {
    hourlyRate: number | null
    experience: number | null
  }

  export type TutorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    profilePicture: string | null
    bio: string | null
    phone: string | null
    hourlyRate: number | null
    experience: number | null
    isVerified: boolean | null
    verifiedAt: Date | null
    verifiedBy: string | null
    createdAt: Date | null
  }

  export type TutorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    profilePicture: string | null
    bio: string | null
    phone: string | null
    hourlyRate: number | null
    experience: number | null
    isVerified: boolean | null
    verifiedAt: Date | null
    verifiedBy: string | null
    createdAt: Date | null
  }

  export type TutorProfileCountAggregateOutputType = {
    id: number
    userId: number
    profilePicture: number
    bio: number
    phone: number
    hourlyRate: number
    experience: number
    isVerified: number
    verifiedAt: number
    verifiedBy: number
    createdAt: number
    _all: number
  }


  export type TutorProfileAvgAggregateInputType = {
    hourlyRate?: true
    experience?: true
  }

  export type TutorProfileSumAggregateInputType = {
    hourlyRate?: true
    experience?: true
  }

  export type TutorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    bio?: true
    phone?: true
    hourlyRate?: true
    experience?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    createdAt?: true
  }

  export type TutorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    bio?: true
    phone?: true
    hourlyRate?: true
    experience?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    createdAt?: true
  }

  export type TutorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    profilePicture?: true
    bio?: true
    phone?: true
    hourlyRate?: true
    experience?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    createdAt?: true
    _all?: true
  }

  export type TutorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorProfile to aggregate.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorProfiles
    **/
    _count?: true | TutorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorProfileMaxAggregateInputType
  }

  export type GetTutorProfileAggregateType<T extends TutorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorProfile[P]>
      : GetScalarType<T[P], AggregateTutorProfile[P]>
  }




  export type TutorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorProfileWhereInput
    orderBy?: TutorProfileOrderByWithAggregationInput | TutorProfileOrderByWithAggregationInput[]
    by: TutorProfileScalarFieldEnum[] | TutorProfileScalarFieldEnum
    having?: TutorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorProfileCountAggregateInputType | true
    _avg?: TutorProfileAvgAggregateInputType
    _sum?: TutorProfileSumAggregateInputType
    _min?: TutorProfileMinAggregateInputType
    _max?: TutorProfileMaxAggregateInputType
  }

  export type TutorProfileGroupByOutputType = {
    id: string
    userId: string
    profilePicture: string | null
    bio: string | null
    phone: string | null
    hourlyRate: number
    experience: number
    isVerified: boolean
    verifiedAt: Date | null
    verifiedBy: string | null
    createdAt: Date
    _count: TutorProfileCountAggregateOutputType | null
    _avg: TutorProfileAvgAggregateOutputType | null
    _sum: TutorProfileSumAggregateOutputType | null
    _min: TutorProfileMinAggregateOutputType | null
    _max: TutorProfileMaxAggregateOutputType | null
  }

  type GetTutorProfileGroupByPayload<T extends TutorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TutorProfileGroupByOutputType[P]>
        }
      >
    >


  export type TutorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    bio?: boolean
    phone?: boolean
    hourlyRate?: boolean
    experience?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    admin?: boolean | TutorProfile$adminArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | TutorProfile$categoriesArgs<ExtArgs>
    availability?: boolean | TutorProfile$availabilityArgs<ExtArgs>
    bookings?: boolean | TutorProfile$bookingsArgs<ExtArgs>
    reviews?: boolean | TutorProfile$reviewsArgs<ExtArgs>
    _count?: boolean | TutorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    bio?: boolean
    phone?: boolean
    hourlyRate?: boolean
    experience?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    admin?: boolean | TutorProfile$adminArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    bio?: boolean
    phone?: boolean
    hourlyRate?: boolean
    experience?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    admin?: boolean | TutorProfile$adminArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    profilePicture?: boolean
    bio?: boolean
    phone?: boolean
    hourlyRate?: boolean
    experience?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
  }

  export type TutorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "profilePicture" | "bio" | "phone" | "hourlyRate" | "experience" | "isVerified" | "verifiedAt" | "verifiedBy" | "createdAt", ExtArgs["result"]["tutorProfile"]>
  export type TutorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | TutorProfile$adminArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | TutorProfile$categoriesArgs<ExtArgs>
    availability?: boolean | TutorProfile$availabilityArgs<ExtArgs>
    bookings?: boolean | TutorProfile$bookingsArgs<ExtArgs>
    reviews?: boolean | TutorProfile$reviewsArgs<ExtArgs>
    _count?: boolean | TutorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | TutorProfile$adminArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TutorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | TutorProfile$adminArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TutorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorProfile"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$TutorCategoryPayload<ExtArgs>[]
      availability: Prisma.$AvailabilitySlotPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      profilePicture: string | null
      bio: string | null
      phone: string | null
      hourlyRate: number
      experience: number
      isVerified: boolean
      verifiedAt: Date | null
      verifiedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["tutorProfile"]>
    composites: {}
  }

  type TutorProfileGetPayload<S extends boolean | null | undefined | TutorProfileDefaultArgs> = $Result.GetResult<Prisma.$TutorProfilePayload, S>

  type TutorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorProfileCountAggregateInputType | true
    }

  export interface TutorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorProfile'], meta: { name: 'TutorProfile' } }
    /**
     * Find zero or one TutorProfile that matches the filter.
     * @param {TutorProfileFindUniqueArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorProfileFindUniqueArgs>(args: SelectSubset<T, TutorProfileFindUniqueArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorProfileFindUniqueOrThrowArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindFirstArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorProfileFindFirstArgs>(args?: SelectSubset<T, TutorProfileFindFirstArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindFirstOrThrowArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorProfiles
     * const tutorProfiles = await prisma.tutorProfile.findMany()
     * 
     * // Get first 10 TutorProfiles
     * const tutorProfiles = await prisma.tutorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorProfileFindManyArgs>(args?: SelectSubset<T, TutorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorProfile.
     * @param {TutorProfileCreateArgs} args - Arguments to create a TutorProfile.
     * @example
     * // Create one TutorProfile
     * const TutorProfile = await prisma.tutorProfile.create({
     *   data: {
     *     // ... data to create a TutorProfile
     *   }
     * })
     * 
     */
    create<T extends TutorProfileCreateArgs>(args: SelectSubset<T, TutorProfileCreateArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorProfiles.
     * @param {TutorProfileCreateManyArgs} args - Arguments to create many TutorProfiles.
     * @example
     * // Create many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorProfileCreateManyArgs>(args?: SelectSubset<T, TutorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorProfiles and returns the data saved in the database.
     * @param {TutorProfileCreateManyAndReturnArgs} args - Arguments to create many TutorProfiles.
     * @example
     * // Create many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorProfiles and only return the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorProfile.
     * @param {TutorProfileDeleteArgs} args - Arguments to delete one TutorProfile.
     * @example
     * // Delete one TutorProfile
     * const TutorProfile = await prisma.tutorProfile.delete({
     *   where: {
     *     // ... filter to delete one TutorProfile
     *   }
     * })
     * 
     */
    delete<T extends TutorProfileDeleteArgs>(args: SelectSubset<T, TutorProfileDeleteArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorProfile.
     * @param {TutorProfileUpdateArgs} args - Arguments to update one TutorProfile.
     * @example
     * // Update one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorProfileUpdateArgs>(args: SelectSubset<T, TutorProfileUpdateArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorProfiles.
     * @param {TutorProfileDeleteManyArgs} args - Arguments to filter TutorProfiles to delete.
     * @example
     * // Delete a few TutorProfiles
     * const { count } = await prisma.tutorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorProfileDeleteManyArgs>(args?: SelectSubset<T, TutorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorProfileUpdateManyArgs>(args: SelectSubset<T, TutorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorProfiles and returns the data updated in the database.
     * @param {TutorProfileUpdateManyAndReturnArgs} args - Arguments to update many TutorProfiles.
     * @example
     * // Update many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorProfiles and only return the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends TutorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorProfile.
     * @param {TutorProfileUpsertArgs} args - Arguments to update or create a TutorProfile.
     * @example
     * // Update or create a TutorProfile
     * const tutorProfile = await prisma.tutorProfile.upsert({
     *   create: {
     *     // ... data to create a TutorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorProfile we want to update
     *   }
     * })
     */
    upsert<T extends TutorProfileUpsertArgs>(args: SelectSubset<T, TutorProfileUpsertArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileCountArgs} args - Arguments to filter TutorProfiles to count.
     * @example
     * // Count the number of TutorProfiles
     * const count = await prisma.tutorProfile.count({
     *   where: {
     *     // ... the filter for the TutorProfiles we want to count
     *   }
     * })
    **/
    count<T extends TutorProfileCountArgs>(
      args?: Subset<T, TutorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorProfileAggregateArgs>(args: Subset<T, TutorProfileAggregateArgs>): Prisma.PrismaPromise<GetTutorProfileAggregateType<T>>

    /**
     * Group by TutorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileGroupByArgs} args - Group by arguments.
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
      T extends TutorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorProfileGroupByArgs['orderBy'] }
        : { orderBy?: TutorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorProfile model
   */
  readonly fields: TutorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends TutorProfile$adminArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$adminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends TutorProfile$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends TutorProfile$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends TutorProfile$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends TutorProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TutorProfile model
   */
  interface TutorProfileFieldRefs {
    readonly id: FieldRef<"TutorProfile", 'String'>
    readonly userId: FieldRef<"TutorProfile", 'String'>
    readonly profilePicture: FieldRef<"TutorProfile", 'String'>
    readonly bio: FieldRef<"TutorProfile", 'String'>
    readonly phone: FieldRef<"TutorProfile", 'String'>
    readonly hourlyRate: FieldRef<"TutorProfile", 'Float'>
    readonly experience: FieldRef<"TutorProfile", 'Int'>
    readonly isVerified: FieldRef<"TutorProfile", 'Boolean'>
    readonly verifiedAt: FieldRef<"TutorProfile", 'DateTime'>
    readonly verifiedBy: FieldRef<"TutorProfile", 'String'>
    readonly createdAt: FieldRef<"TutorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TutorProfile findUnique
   */
  export type TutorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile findUniqueOrThrow
   */
  export type TutorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile findFirst
   */
  export type TutorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorProfiles.
     */
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile findFirstOrThrow
   */
  export type TutorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorProfiles.
     */
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile findMany
   */
  export type TutorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfiles to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile create
   */
  export type TutorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorProfile.
     */
    data: XOR<TutorProfileCreateInput, TutorProfileUncheckedCreateInput>
  }

  /**
   * TutorProfile createMany
   */
  export type TutorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorProfiles.
     */
    data: TutorProfileCreateManyInput | TutorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorProfile createManyAndReturn
   */
  export type TutorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TutorProfiles.
     */
    data: TutorProfileCreateManyInput | TutorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorProfile update
   */
  export type TutorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorProfile.
     */
    data: XOR<TutorProfileUpdateInput, TutorProfileUncheckedUpdateInput>
    /**
     * Choose, which TutorProfile to update.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile updateMany
   */
  export type TutorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorProfiles.
     */
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyInput>
    /**
     * Filter which TutorProfiles to update
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to update.
     */
    limit?: number
  }

  /**
   * TutorProfile updateManyAndReturn
   */
  export type TutorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * The data used to update TutorProfiles.
     */
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyInput>
    /**
     * Filter which TutorProfiles to update
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorProfile upsert
   */
  export type TutorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorProfile to update in case it exists.
     */
    where: TutorProfileWhereUniqueInput
    /**
     * In case the TutorProfile found by the `where` argument doesn't exist, create a new TutorProfile with this data.
     */
    create: XOR<TutorProfileCreateInput, TutorProfileUncheckedCreateInput>
    /**
     * In case the TutorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorProfileUpdateInput, TutorProfileUncheckedUpdateInput>
  }

  /**
   * TutorProfile delete
   */
  export type TutorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter which TutorProfile to delete.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile deleteMany
   */
  export type TutorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorProfiles to delete
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to delete.
     */
    limit?: number
  }

  /**
   * TutorProfile.admin
   */
  export type TutorProfile$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * TutorProfile.categories
   */
  export type TutorProfile$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    where?: TutorCategoryWhereInput
    orderBy?: TutorCategoryOrderByWithRelationInput | TutorCategoryOrderByWithRelationInput[]
    cursor?: TutorCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorCategoryScalarFieldEnum | TutorCategoryScalarFieldEnum[]
  }

  /**
   * TutorProfile.availability
   */
  export type TutorProfile$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    cursor?: AvailabilitySlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * TutorProfile.bookings
   */
  export type TutorProfile$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * TutorProfile.reviews
   */
  export type TutorProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * TutorProfile without action
   */
  export type TutorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    tutors?: boolean | Category$tutorsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | Category$tutorsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      tutors: Prisma.$TutorCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutors<T extends Category$tutorsArgs<ExtArgs> = {}>(args?: Subset<T, Category$tutorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.tutors
   */
  export type Category$tutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    where?: TutorCategoryWhereInput
    orderBy?: TutorCategoryOrderByWithRelationInput | TutorCategoryOrderByWithRelationInput[]
    cursor?: TutorCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorCategoryScalarFieldEnum | TutorCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model TutorCategory
   */

  export type AggregateTutorCategory = {
    _count: TutorCategoryCountAggregateOutputType | null
    _min: TutorCategoryMinAggregateOutputType | null
    _max: TutorCategoryMaxAggregateOutputType | null
  }

  export type TutorCategoryMinAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    categoryId: string | null
    tutorType: $Enums.TUTORTYPE | null
  }

  export type TutorCategoryMaxAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    categoryId: string | null
    tutorType: $Enums.TUTORTYPE | null
  }

  export type TutorCategoryCountAggregateOutputType = {
    id: number
    tutorProfileId: number
    categoryId: number
    tutorType: number
    _all: number
  }


  export type TutorCategoryMinAggregateInputType = {
    id?: true
    tutorProfileId?: true
    categoryId?: true
    tutorType?: true
  }

  export type TutorCategoryMaxAggregateInputType = {
    id?: true
    tutorProfileId?: true
    categoryId?: true
    tutorType?: true
  }

  export type TutorCategoryCountAggregateInputType = {
    id?: true
    tutorProfileId?: true
    categoryId?: true
    tutorType?: true
    _all?: true
  }

  export type TutorCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorCategory to aggregate.
     */
    where?: TutorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorCategories to fetch.
     */
    orderBy?: TutorCategoryOrderByWithRelationInput | TutorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorCategories
    **/
    _count?: true | TutorCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorCategoryMaxAggregateInputType
  }

  export type GetTutorCategoryAggregateType<T extends TutorCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorCategory[P]>
      : GetScalarType<T[P], AggregateTutorCategory[P]>
  }




  export type TutorCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorCategoryWhereInput
    orderBy?: TutorCategoryOrderByWithAggregationInput | TutorCategoryOrderByWithAggregationInput[]
    by: TutorCategoryScalarFieldEnum[] | TutorCategoryScalarFieldEnum
    having?: TutorCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorCategoryCountAggregateInputType | true
    _min?: TutorCategoryMinAggregateInputType
    _max?: TutorCategoryMaxAggregateInputType
  }

  export type TutorCategoryGroupByOutputType = {
    id: string
    tutorProfileId: string
    categoryId: string
    tutorType: $Enums.TUTORTYPE
    _count: TutorCategoryCountAggregateOutputType | null
    _min: TutorCategoryMinAggregateOutputType | null
    _max: TutorCategoryMaxAggregateOutputType | null
  }

  type GetTutorCategoryGroupByPayload<T extends TutorCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TutorCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TutorCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    categoryId?: boolean
    tutorType?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorCategory"]>

  export type TutorCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    categoryId?: boolean
    tutorType?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorCategory"]>

  export type TutorCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    categoryId?: boolean
    tutorType?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorCategory"]>

  export type TutorCategorySelectScalar = {
    id?: boolean
    tutorProfileId?: boolean
    categoryId?: boolean
    tutorType?: boolean
  }

  export type TutorCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorProfileId" | "categoryId" | "tutorType", ExtArgs["result"]["tutorCategory"]>
  export type TutorCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type TutorCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type TutorCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $TutorCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorCategory"
    objects: {
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tutorProfileId: string
      categoryId: string
      tutorType: $Enums.TUTORTYPE
    }, ExtArgs["result"]["tutorCategory"]>
    composites: {}
  }

  type TutorCategoryGetPayload<S extends boolean | null | undefined | TutorCategoryDefaultArgs> = $Result.GetResult<Prisma.$TutorCategoryPayload, S>

  type TutorCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorCategoryCountAggregateInputType | true
    }

  export interface TutorCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorCategory'], meta: { name: 'TutorCategory' } }
    /**
     * Find zero or one TutorCategory that matches the filter.
     * @param {TutorCategoryFindUniqueArgs} args - Arguments to find a TutorCategory
     * @example
     * // Get one TutorCategory
     * const tutorCategory = await prisma.tutorCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorCategoryFindUniqueArgs>(args: SelectSubset<T, TutorCategoryFindUniqueArgs<ExtArgs>>): Prisma__TutorCategoryClient<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorCategoryFindUniqueOrThrowArgs} args - Arguments to find a TutorCategory
     * @example
     * // Get one TutorCategory
     * const tutorCategory = await prisma.tutorCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorCategoryClient<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCategoryFindFirstArgs} args - Arguments to find a TutorCategory
     * @example
     * // Get one TutorCategory
     * const tutorCategory = await prisma.tutorCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorCategoryFindFirstArgs>(args?: SelectSubset<T, TutorCategoryFindFirstArgs<ExtArgs>>): Prisma__TutorCategoryClient<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCategoryFindFirstOrThrowArgs} args - Arguments to find a TutorCategory
     * @example
     * // Get one TutorCategory
     * const tutorCategory = await prisma.tutorCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorCategoryClient<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorCategories
     * const tutorCategories = await prisma.tutorCategory.findMany()
     * 
     * // Get first 10 TutorCategories
     * const tutorCategories = await prisma.tutorCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorCategoryWithIdOnly = await prisma.tutorCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorCategoryFindManyArgs>(args?: SelectSubset<T, TutorCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorCategory.
     * @param {TutorCategoryCreateArgs} args - Arguments to create a TutorCategory.
     * @example
     * // Create one TutorCategory
     * const TutorCategory = await prisma.tutorCategory.create({
     *   data: {
     *     // ... data to create a TutorCategory
     *   }
     * })
     * 
     */
    create<T extends TutorCategoryCreateArgs>(args: SelectSubset<T, TutorCategoryCreateArgs<ExtArgs>>): Prisma__TutorCategoryClient<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorCategories.
     * @param {TutorCategoryCreateManyArgs} args - Arguments to create many TutorCategories.
     * @example
     * // Create many TutorCategories
     * const tutorCategory = await prisma.tutorCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorCategoryCreateManyArgs>(args?: SelectSubset<T, TutorCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorCategories and returns the data saved in the database.
     * @param {TutorCategoryCreateManyAndReturnArgs} args - Arguments to create many TutorCategories.
     * @example
     * // Create many TutorCategories
     * const tutorCategory = await prisma.tutorCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorCategories and only return the `id`
     * const tutorCategoryWithIdOnly = await prisma.tutorCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorCategory.
     * @param {TutorCategoryDeleteArgs} args - Arguments to delete one TutorCategory.
     * @example
     * // Delete one TutorCategory
     * const TutorCategory = await prisma.tutorCategory.delete({
     *   where: {
     *     // ... filter to delete one TutorCategory
     *   }
     * })
     * 
     */
    delete<T extends TutorCategoryDeleteArgs>(args: SelectSubset<T, TutorCategoryDeleteArgs<ExtArgs>>): Prisma__TutorCategoryClient<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorCategory.
     * @param {TutorCategoryUpdateArgs} args - Arguments to update one TutorCategory.
     * @example
     * // Update one TutorCategory
     * const tutorCategory = await prisma.tutorCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorCategoryUpdateArgs>(args: SelectSubset<T, TutorCategoryUpdateArgs<ExtArgs>>): Prisma__TutorCategoryClient<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorCategories.
     * @param {TutorCategoryDeleteManyArgs} args - Arguments to filter TutorCategories to delete.
     * @example
     * // Delete a few TutorCategories
     * const { count } = await prisma.tutorCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorCategoryDeleteManyArgs>(args?: SelectSubset<T, TutorCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorCategories
     * const tutorCategory = await prisma.tutorCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorCategoryUpdateManyArgs>(args: SelectSubset<T, TutorCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorCategories and returns the data updated in the database.
     * @param {TutorCategoryUpdateManyAndReturnArgs} args - Arguments to update many TutorCategories.
     * @example
     * // Update many TutorCategories
     * const tutorCategory = await prisma.tutorCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorCategories and only return the `id`
     * const tutorCategoryWithIdOnly = await prisma.tutorCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends TutorCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorCategory.
     * @param {TutorCategoryUpsertArgs} args - Arguments to update or create a TutorCategory.
     * @example
     * // Update or create a TutorCategory
     * const tutorCategory = await prisma.tutorCategory.upsert({
     *   create: {
     *     // ... data to create a TutorCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorCategory we want to update
     *   }
     * })
     */
    upsert<T extends TutorCategoryUpsertArgs>(args: SelectSubset<T, TutorCategoryUpsertArgs<ExtArgs>>): Prisma__TutorCategoryClient<$Result.GetResult<Prisma.$TutorCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCategoryCountArgs} args - Arguments to filter TutorCategories to count.
     * @example
     * // Count the number of TutorCategories
     * const count = await prisma.tutorCategory.count({
     *   where: {
     *     // ... the filter for the TutorCategories we want to count
     *   }
     * })
    **/
    count<T extends TutorCategoryCountArgs>(
      args?: Subset<T, TutorCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorCategoryAggregateArgs>(args: Subset<T, TutorCategoryAggregateArgs>): Prisma.PrismaPromise<GetTutorCategoryAggregateType<T>>

    /**
     * Group by TutorCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCategoryGroupByArgs} args - Group by arguments.
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
      T extends TutorCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TutorCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorCategory model
   */
  readonly fields: TutorCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorProfile<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TutorCategory model
   */
  interface TutorCategoryFieldRefs {
    readonly id: FieldRef<"TutorCategory", 'String'>
    readonly tutorProfileId: FieldRef<"TutorCategory", 'String'>
    readonly categoryId: FieldRef<"TutorCategory", 'String'>
    readonly tutorType: FieldRef<"TutorCategory", 'TUTORTYPE'>
  }
    

  // Custom InputTypes
  /**
   * TutorCategory findUnique
   */
  export type TutorCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TutorCategory to fetch.
     */
    where: TutorCategoryWhereUniqueInput
  }

  /**
   * TutorCategory findUniqueOrThrow
   */
  export type TutorCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TutorCategory to fetch.
     */
    where: TutorCategoryWhereUniqueInput
  }

  /**
   * TutorCategory findFirst
   */
  export type TutorCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TutorCategory to fetch.
     */
    where?: TutorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorCategories to fetch.
     */
    orderBy?: TutorCategoryOrderByWithRelationInput | TutorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorCategories.
     */
    cursor?: TutorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorCategories.
     */
    distinct?: TutorCategoryScalarFieldEnum | TutorCategoryScalarFieldEnum[]
  }

  /**
   * TutorCategory findFirstOrThrow
   */
  export type TutorCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TutorCategory to fetch.
     */
    where?: TutorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorCategories to fetch.
     */
    orderBy?: TutorCategoryOrderByWithRelationInput | TutorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorCategories.
     */
    cursor?: TutorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorCategories.
     */
    distinct?: TutorCategoryScalarFieldEnum | TutorCategoryScalarFieldEnum[]
  }

  /**
   * TutorCategory findMany
   */
  export type TutorCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TutorCategories to fetch.
     */
    where?: TutorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorCategories to fetch.
     */
    orderBy?: TutorCategoryOrderByWithRelationInput | TutorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorCategories.
     */
    cursor?: TutorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorCategories.
     */
    skip?: number
    distinct?: TutorCategoryScalarFieldEnum | TutorCategoryScalarFieldEnum[]
  }

  /**
   * TutorCategory create
   */
  export type TutorCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorCategory.
     */
    data: XOR<TutorCategoryCreateInput, TutorCategoryUncheckedCreateInput>
  }

  /**
   * TutorCategory createMany
   */
  export type TutorCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorCategories.
     */
    data: TutorCategoryCreateManyInput | TutorCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorCategory createManyAndReturn
   */
  export type TutorCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many TutorCategories.
     */
    data: TutorCategoryCreateManyInput | TutorCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorCategory update
   */
  export type TutorCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorCategory.
     */
    data: XOR<TutorCategoryUpdateInput, TutorCategoryUncheckedUpdateInput>
    /**
     * Choose, which TutorCategory to update.
     */
    where: TutorCategoryWhereUniqueInput
  }

  /**
   * TutorCategory updateMany
   */
  export type TutorCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorCategories.
     */
    data: XOR<TutorCategoryUpdateManyMutationInput, TutorCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TutorCategories to update
     */
    where?: TutorCategoryWhereInput
    /**
     * Limit how many TutorCategories to update.
     */
    limit?: number
  }

  /**
   * TutorCategory updateManyAndReturn
   */
  export type TutorCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * The data used to update TutorCategories.
     */
    data: XOR<TutorCategoryUpdateManyMutationInput, TutorCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TutorCategories to update
     */
    where?: TutorCategoryWhereInput
    /**
     * Limit how many TutorCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorCategory upsert
   */
  export type TutorCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorCategory to update in case it exists.
     */
    where: TutorCategoryWhereUniqueInput
    /**
     * In case the TutorCategory found by the `where` argument doesn't exist, create a new TutorCategory with this data.
     */
    create: XOR<TutorCategoryCreateInput, TutorCategoryUncheckedCreateInput>
    /**
     * In case the TutorCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorCategoryUpdateInput, TutorCategoryUncheckedUpdateInput>
  }

  /**
   * TutorCategory delete
   */
  export type TutorCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
    /**
     * Filter which TutorCategory to delete.
     */
    where: TutorCategoryWhereUniqueInput
  }

  /**
   * TutorCategory deleteMany
   */
  export type TutorCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorCategories to delete
     */
    where?: TutorCategoryWhereInput
    /**
     * Limit how many TutorCategories to delete.
     */
    limit?: number
  }

  /**
   * TutorCategory without action
   */
  export type TutorCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCategory
     */
    select?: TutorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorCategory
     */
    omit?: TutorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorCategoryInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilitySlot
   */

  export type AggregateAvailabilitySlot = {
    _count: AvailabilitySlotCountAggregateOutputType | null
    _min: AvailabilitySlotMinAggregateOutputType | null
    _max: AvailabilitySlotMaxAggregateOutputType | null
  }

  export type AvailabilitySlotMinAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    dayOfWeek: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AVAILABILITYSTATUS | null
    createdAt: Date | null
  }

  export type AvailabilitySlotMaxAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    dayOfWeek: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AVAILABILITYSTATUS | null
    createdAt: Date | null
  }

  export type AvailabilitySlotCountAggregateOutputType = {
    id: number
    tutorProfileId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    status: number
    createdAt: number
    _all: number
  }


  export type AvailabilitySlotMinAggregateInputType = {
    id?: true
    tutorProfileId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
  }

  export type AvailabilitySlotMaxAggregateInputType = {
    id?: true
    tutorProfileId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
  }

  export type AvailabilitySlotCountAggregateInputType = {
    id?: true
    tutorProfileId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AvailabilitySlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySlot to aggregate.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilitySlots
    **/
    _count?: true | AvailabilitySlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilitySlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilitySlotMaxAggregateInputType
  }

  export type GetAvailabilitySlotAggregateType<T extends AvailabilitySlotAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilitySlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilitySlot[P]>
      : GetScalarType<T[P], AggregateAvailabilitySlot[P]>
  }




  export type AvailabilitySlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithAggregationInput | AvailabilitySlotOrderByWithAggregationInput[]
    by: AvailabilitySlotScalarFieldEnum[] | AvailabilitySlotScalarFieldEnum
    having?: AvailabilitySlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilitySlotCountAggregateInputType | true
    _min?: AvailabilitySlotMinAggregateInputType
    _max?: AvailabilitySlotMaxAggregateInputType
  }

  export type AvailabilitySlotGroupByOutputType = {
    id: string
    tutorProfileId: string
    dayOfWeek: string
    startTime: Date
    endTime: Date
    status: $Enums.AVAILABILITYSTATUS
    createdAt: Date
    _count: AvailabilitySlotCountAggregateOutputType | null
    _min: AvailabilitySlotMinAggregateOutputType | null
    _max: AvailabilitySlotMaxAggregateOutputType | null
  }

  type GetAvailabilitySlotGroupByPayload<T extends AvailabilitySlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilitySlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilitySlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilitySlotGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilitySlotGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    booking?: boolean | AvailabilitySlot$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectScalar = {
    id?: boolean
    tutorProfileId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AvailabilitySlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorProfileId" | "dayOfWeek" | "startTime" | "endTime" | "status" | "createdAt", ExtArgs["result"]["availabilitySlot"]>
  export type AvailabilitySlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    booking?: boolean | AvailabilitySlot$bookingArgs<ExtArgs>
  }
  export type AvailabilitySlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type AvailabilitySlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }

  export type $AvailabilitySlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilitySlot"
    objects: {
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tutorProfileId: string
      dayOfWeek: string
      startTime: Date
      endTime: Date
      status: $Enums.AVAILABILITYSTATUS
      createdAt: Date
    }, ExtArgs["result"]["availabilitySlot"]>
    composites: {}
  }

  type AvailabilitySlotGetPayload<S extends boolean | null | undefined | AvailabilitySlotDefaultArgs> = $Result.GetResult<Prisma.$AvailabilitySlotPayload, S>

  type AvailabilitySlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilitySlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilitySlotCountAggregateInputType | true
    }

  export interface AvailabilitySlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilitySlot'], meta: { name: 'AvailabilitySlot' } }
    /**
     * Find zero or one AvailabilitySlot that matches the filter.
     * @param {AvailabilitySlotFindUniqueArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilitySlotFindUniqueArgs>(args: SelectSubset<T, AvailabilitySlotFindUniqueArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilitySlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilitySlotFindUniqueOrThrowArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilitySlotFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindFirstArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilitySlotFindFirstArgs>(args?: SelectSubset<T, AvailabilitySlotFindFirstArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindFirstOrThrowArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilitySlotFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilitySlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilitySlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilitySlots
     * const availabilitySlots = await prisma.availabilitySlot.findMany()
     * 
     * // Get first 10 AvailabilitySlots
     * const availabilitySlots = await prisma.availabilitySlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilitySlotFindManyArgs>(args?: SelectSubset<T, AvailabilitySlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilitySlot.
     * @param {AvailabilitySlotCreateArgs} args - Arguments to create a AvailabilitySlot.
     * @example
     * // Create one AvailabilitySlot
     * const AvailabilitySlot = await prisma.availabilitySlot.create({
     *   data: {
     *     // ... data to create a AvailabilitySlot
     *   }
     * })
     * 
     */
    create<T extends AvailabilitySlotCreateArgs>(args: SelectSubset<T, AvailabilitySlotCreateArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilitySlots.
     * @param {AvailabilitySlotCreateManyArgs} args - Arguments to create many AvailabilitySlots.
     * @example
     * // Create many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilitySlotCreateManyArgs>(args?: SelectSubset<T, AvailabilitySlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilitySlots and returns the data saved in the database.
     * @param {AvailabilitySlotCreateManyAndReturnArgs} args - Arguments to create many AvailabilitySlots.
     * @example
     * // Create many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilitySlots and only return the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilitySlotCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilitySlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilitySlot.
     * @param {AvailabilitySlotDeleteArgs} args - Arguments to delete one AvailabilitySlot.
     * @example
     * // Delete one AvailabilitySlot
     * const AvailabilitySlot = await prisma.availabilitySlot.delete({
     *   where: {
     *     // ... filter to delete one AvailabilitySlot
     *   }
     * })
     * 
     */
    delete<T extends AvailabilitySlotDeleteArgs>(args: SelectSubset<T, AvailabilitySlotDeleteArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilitySlot.
     * @param {AvailabilitySlotUpdateArgs} args - Arguments to update one AvailabilitySlot.
     * @example
     * // Update one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilitySlotUpdateArgs>(args: SelectSubset<T, AvailabilitySlotUpdateArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilitySlots.
     * @param {AvailabilitySlotDeleteManyArgs} args - Arguments to filter AvailabilitySlots to delete.
     * @example
     * // Delete a few AvailabilitySlots
     * const { count } = await prisma.availabilitySlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilitySlotDeleteManyArgs>(args?: SelectSubset<T, AvailabilitySlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilitySlotUpdateManyArgs>(args: SelectSubset<T, AvailabilitySlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySlots and returns the data updated in the database.
     * @param {AvailabilitySlotUpdateManyAndReturnArgs} args - Arguments to update many AvailabilitySlots.
     * @example
     * // Update many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilitySlots and only return the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilitySlotUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilitySlot.
     * @param {AvailabilitySlotUpsertArgs} args - Arguments to update or create a AvailabilitySlot.
     * @example
     * // Update or create a AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.upsert({
     *   create: {
     *     // ... data to create a AvailabilitySlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilitySlot we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilitySlotUpsertArgs>(args: SelectSubset<T, AvailabilitySlotUpsertArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotCountArgs} args - Arguments to filter AvailabilitySlots to count.
     * @example
     * // Count the number of AvailabilitySlots
     * const count = await prisma.availabilitySlot.count({
     *   where: {
     *     // ... the filter for the AvailabilitySlots we want to count
     *   }
     * })
    **/
    count<T extends AvailabilitySlotCountArgs>(
      args?: Subset<T, AvailabilitySlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilitySlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilitySlotAggregateArgs>(args: Subset<T, AvailabilitySlotAggregateArgs>): Prisma.PrismaPromise<GetAvailabilitySlotAggregateType<T>>

    /**
     * Group by AvailabilitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotGroupByArgs} args - Group by arguments.
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
      T extends AvailabilitySlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilitySlotGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilitySlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilitySlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilitySlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilitySlot model
   */
  readonly fields: AvailabilitySlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilitySlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilitySlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorProfile<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends AvailabilitySlot$bookingArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilitySlot$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AvailabilitySlot model
   */
  interface AvailabilitySlotFieldRefs {
    readonly id: FieldRef<"AvailabilitySlot", 'String'>
    readonly tutorProfileId: FieldRef<"AvailabilitySlot", 'String'>
    readonly dayOfWeek: FieldRef<"AvailabilitySlot", 'String'>
    readonly startTime: FieldRef<"AvailabilitySlot", 'DateTime'>
    readonly endTime: FieldRef<"AvailabilitySlot", 'DateTime'>
    readonly status: FieldRef<"AvailabilitySlot", 'AVAILABILITYSTATUS'>
    readonly createdAt: FieldRef<"AvailabilitySlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilitySlot findUnique
   */
  export type AvailabilitySlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot findUniqueOrThrow
   */
  export type AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot findFirst
   */
  export type AvailabilitySlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot findFirstOrThrow
   */
  export type AvailabilitySlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot findMany
   */
  export type AvailabilitySlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlots to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot create
   */
  export type AvailabilitySlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilitySlot.
     */
    data: XOR<AvailabilitySlotCreateInput, AvailabilitySlotUncheckedCreateInput>
  }

  /**
   * AvailabilitySlot createMany
   */
  export type AvailabilitySlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilitySlots.
     */
    data: AvailabilitySlotCreateManyInput | AvailabilitySlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilitySlot createManyAndReturn
   */
  export type AvailabilitySlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilitySlots.
     */
    data: AvailabilitySlotCreateManyInput | AvailabilitySlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySlot update
   */
  export type AvailabilitySlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilitySlot.
     */
    data: XOR<AvailabilitySlotUpdateInput, AvailabilitySlotUncheckedUpdateInput>
    /**
     * Choose, which AvailabilitySlot to update.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot updateMany
   */
  export type AvailabilitySlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilitySlots.
     */
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySlots to update
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to update.
     */
    limit?: number
  }

  /**
   * AvailabilitySlot updateManyAndReturn
   */
  export type AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilitySlots.
     */
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySlots to update
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySlot upsert
   */
  export type AvailabilitySlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilitySlot to update in case it exists.
     */
    where: AvailabilitySlotWhereUniqueInput
    /**
     * In case the AvailabilitySlot found by the `where` argument doesn't exist, create a new AvailabilitySlot with this data.
     */
    create: XOR<AvailabilitySlotCreateInput, AvailabilitySlotUncheckedCreateInput>
    /**
     * In case the AvailabilitySlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilitySlotUpdateInput, AvailabilitySlotUncheckedUpdateInput>
  }

  /**
   * AvailabilitySlot delete
   */
  export type AvailabilitySlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter which AvailabilitySlot to delete.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot deleteMany
   */
  export type AvailabilitySlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySlots to delete
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to delete.
     */
    limit?: number
  }

  /**
   * AvailabilitySlot.booking
   */
  export type AvailabilitySlot$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * AvailabilitySlot without action
   */
  export type AvailabilitySlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    paymentAmount: number | null
  }

  export type BookingSumAggregateOutputType = {
    paymentAmount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    studentProfileId: string | null
    availabilitySlotId: string | null
    paymentAmount: number | null
    paymentStatus: $Enums.PAYMENTSTATUS | null
    paymentMethod: string | null
    transactionId: string | null
    status: $Enums.BOOKINGSTATUS | null
    bookedAt: Date | null
    completedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    tutorProfileId: string | null
    studentProfileId: string | null
    availabilitySlotId: string | null
    paymentAmount: number | null
    paymentStatus: $Enums.PAYMENTSTATUS | null
    paymentMethod: string | null
    transactionId: string | null
    status: $Enums.BOOKINGSTATUS | null
    bookedAt: Date | null
    completedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    tutorProfileId: number
    studentProfileId: number
    availabilitySlotId: number
    paymentAmount: number
    paymentStatus: number
    paymentMethod: number
    transactionId: number
    status: number
    bookedAt: number
    completedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    paymentAmount?: true
  }

  export type BookingSumAggregateInputType = {
    paymentAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    tutorProfileId?: true
    studentProfileId?: true
    availabilitySlotId?: true
    paymentAmount?: true
    paymentStatus?: true
    paymentMethod?: true
    transactionId?: true
    status?: true
    bookedAt?: true
    completedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    tutorProfileId?: true
    studentProfileId?: true
    availabilitySlotId?: true
    paymentAmount?: true
    paymentStatus?: true
    paymentMethod?: true
    transactionId?: true
    status?: true
    bookedAt?: true
    completedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    tutorProfileId?: true
    studentProfileId?: true
    availabilitySlotId?: true
    paymentAmount?: true
    paymentStatus?: true
    paymentMethod?: true
    transactionId?: true
    status?: true
    bookedAt?: true
    completedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    tutorProfileId: string
    studentProfileId: string
    availabilitySlotId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod: string | null
    transactionId: string | null
    status: $Enums.BOOKINGSTATUS
    bookedAt: Date
    completedAt: Date | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    studentProfileId?: boolean
    availabilitySlotId?: boolean
    paymentAmount?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    status?: boolean
    bookedAt?: boolean
    completedAt?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    studentProfileId?: boolean
    availabilitySlotId?: boolean
    paymentAmount?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    status?: boolean
    bookedAt?: boolean
    completedAt?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    studentProfileId?: boolean
    availabilitySlotId?: boolean
    paymentAmount?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    status?: boolean
    bookedAt?: boolean
    completedAt?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    tutorProfileId?: boolean
    studentProfileId?: boolean
    availabilitySlotId?: boolean
    paymentAmount?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    transactionId?: boolean
    status?: boolean
    bookedAt?: boolean
    completedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorProfileId" | "studentProfileId" | "availabilitySlotId" | "paymentAmount" | "paymentStatus" | "paymentMethod" | "transactionId" | "status" | "bookedAt" | "completedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs>
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs>
      availabilitySlot: Prisma.$AvailabilitySlotPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tutorProfileId: string
      studentProfileId: string
      availabilitySlotId: string
      paymentAmount: number
      paymentStatus: $Enums.PAYMENTSTATUS
      paymentMethod: string | null
      transactionId: string | null
      status: $Enums.BOOKINGSTATUS
      bookedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorProfile<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentProfile<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availabilitySlot<T extends AvailabilitySlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilitySlotDefaultArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends Booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly tutorProfileId: FieldRef<"Booking", 'String'>
    readonly studentProfileId: FieldRef<"Booking", 'String'>
    readonly availabilitySlotId: FieldRef<"Booking", 'String'>
    readonly paymentAmount: FieldRef<"Booking", 'Float'>
    readonly paymentStatus: FieldRef<"Booking", 'PAYMENTSTATUS'>
    readonly paymentMethod: FieldRef<"Booking", 'String'>
    readonly transactionId: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BOOKINGSTATUS'>
    readonly bookedAt: FieldRef<"Booking", 'DateTime'>
    readonly completedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.review
   */
  export type Booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    studentId: string | null
    tutorProfileId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    studentId: string | null
    tutorProfileId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    bookingId: number
    studentId: number
    tutorProfileId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    bookingId?: true
    studentId?: true
    tutorProfileId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    bookingId?: true
    studentId?: true
    tutorProfileId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    bookingId?: true
    studentId?: true
    tutorProfileId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    bookingId: string
    studentId: string
    tutorProfileId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    studentId?: boolean
    tutorProfileId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    studentId?: boolean
    tutorProfileId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    studentId?: boolean
    tutorProfileId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    bookingId?: boolean
    studentId?: boolean
    tutorProfileId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "studentId" | "tutorProfileId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      student: Prisma.$StudentProfilePayload<ExtArgs>
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      studentId: string
      tutorProfileId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutorProfile<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly bookingId: FieldRef<"Review", 'String'>
    readonly studentId: FieldRef<"Review", 'String'>
    readonly tutorProfileId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
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
    status: 'status',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    profilePicture: 'profilePicture',
    bio: 'bio',
    phone: 'phone',
    schoolOrCollege: 'schoolOrCollege',
    createdAt: 'createdAt'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const TutorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    profilePicture: 'profilePicture',
    bio: 'bio',
    phone: 'phone',
    hourlyRate: 'hourlyRate',
    experience: 'experience',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    verifiedBy: 'verifiedBy',
    createdAt: 'createdAt'
  };

  export type TutorProfileScalarFieldEnum = (typeof TutorProfileScalarFieldEnum)[keyof typeof TutorProfileScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TutorCategoryScalarFieldEnum: {
    id: 'id',
    tutorProfileId: 'tutorProfileId',
    categoryId: 'categoryId',
    tutorType: 'tutorType'
  };

  export type TutorCategoryScalarFieldEnum = (typeof TutorCategoryScalarFieldEnum)[keyof typeof TutorCategoryScalarFieldEnum]


  export const AvailabilitySlotScalarFieldEnum: {
    id: 'id',
    tutorProfileId: 'tutorProfileId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AvailabilitySlotScalarFieldEnum = (typeof AvailabilitySlotScalarFieldEnum)[keyof typeof AvailabilitySlotScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    tutorProfileId: 'tutorProfileId',
    studentProfileId: 'studentProfileId',
    availabilitySlotId: 'availabilitySlotId',
    paymentAmount: 'paymentAmount',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    transactionId: 'transactionId',
    status: 'status',
    bookedAt: 'bookedAt',
    completedAt: 'completedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    studentId: 'studentId',
    tutorProfileId: 'tutorProfileId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>
    


  /**
   * Reference to a field of type 'ROLE[]'
   */
  export type ListEnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE[]'>
    


  /**
   * Reference to a field of type 'STATUS'
   */
  export type EnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS'>
    


  /**
   * Reference to a field of type 'STATUS[]'
   */
  export type ListEnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TUTORTYPE'
   */
  export type EnumTUTORTYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TUTORTYPE'>
    


  /**
   * Reference to a field of type 'TUTORTYPE[]'
   */
  export type ListEnumTUTORTYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TUTORTYPE[]'>
    


  /**
   * Reference to a field of type 'AVAILABILITYSTATUS'
   */
  export type EnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AVAILABILITYSTATUS'>
    


  /**
   * Reference to a field of type 'AVAILABILITYSTATUS[]'
   */
  export type ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AVAILABILITYSTATUS[]'>
    


  /**
   * Reference to a field of type 'PAYMENTSTATUS'
   */
  export type EnumPAYMENTSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENTSTATUS'>
    


  /**
   * Reference to a field of type 'PAYMENTSTATUS[]'
   */
  export type ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENTSTATUS[]'>
    


  /**
   * Reference to a field of type 'BOOKINGSTATUS'
   */
  export type EnumBOOKINGSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BOOKINGSTATUS'>
    


  /**
   * Reference to a field of type 'BOOKINGSTATUS[]'
   */
  export type ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BOOKINGSTATUS[]'>
    
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
    role?: EnumROLEFilter<"User"> | $Enums.ROLE
    status?: EnumSTATUSFilter<"User"> | $Enums.STATUS
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tutorProfile?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    verifiedTutors?: TutorProfileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tutorProfile?: TutorProfileOrderByWithRelationInput
    studentProfile?: StudentProfileOrderByWithRelationInput
    verifiedTutors?: TutorProfileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumROLEFilter<"User"> | $Enums.ROLE
    status?: EnumSTATUSFilter<"User"> | $Enums.STATUS
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tutorProfile?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    verifiedTutors?: TutorProfileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    role?: EnumROLEWithAggregatesFilter<"User"> | $Enums.ROLE
    status?: EnumSTATUSWithAggregatesFilter<"User"> | $Enums.STATUS
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    userId?: StringFilter<"StudentProfile"> | string
    profilePicture?: StringNullableFilter<"StudentProfile"> | string | null
    bio?: StringNullableFilter<"StudentProfile"> | string | null
    phone?: StringNullableFilter<"StudentProfile"> | string | null
    schoolOrCollege?: StringNullableFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    schoolOrCollege?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    profilePicture?: StringNullableFilter<"StudentProfile"> | string | null
    bio?: StringNullableFilter<"StudentProfile"> | string | null
    phone?: StringNullableFilter<"StudentProfile"> | string | null
    schoolOrCollege?: StringNullableFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    schoolOrCollege?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProfile"> | string
    userId?: StringWithAggregatesFilter<"StudentProfile"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    schoolOrCollege?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
  }

  export type TutorProfileWhereInput = {
    AND?: TutorProfileWhereInput | TutorProfileWhereInput[]
    OR?: TutorProfileWhereInput[]
    NOT?: TutorProfileWhereInput | TutorProfileWhereInput[]
    id?: StringFilter<"TutorProfile"> | string
    userId?: StringFilter<"TutorProfile"> | string
    profilePicture?: StringNullableFilter<"TutorProfile"> | string | null
    bio?: StringNullableFilter<"TutorProfile"> | string | null
    phone?: StringNullableFilter<"TutorProfile"> | string | null
    hourlyRate?: FloatFilter<"TutorProfile"> | number
    experience?: IntFilter<"TutorProfile"> | number
    isVerified?: BoolFilter<"TutorProfile"> | boolean
    verifiedAt?: DateTimeNullableFilter<"TutorProfile"> | Date | string | null
    verifiedBy?: StringNullableFilter<"TutorProfile"> | string | null
    createdAt?: DateTimeFilter<"TutorProfile"> | Date | string
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: TutorCategoryListRelationFilter
    availability?: AvailabilitySlotListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type TutorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hourlyRate?: SortOrder
    experience?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    categories?: TutorCategoryOrderByRelationAggregateInput
    availability?: AvailabilitySlotOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type TutorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TutorProfileWhereInput | TutorProfileWhereInput[]
    OR?: TutorProfileWhereInput[]
    NOT?: TutorProfileWhereInput | TutorProfileWhereInput[]
    profilePicture?: StringNullableFilter<"TutorProfile"> | string | null
    bio?: StringNullableFilter<"TutorProfile"> | string | null
    phone?: StringNullableFilter<"TutorProfile"> | string | null
    hourlyRate?: FloatFilter<"TutorProfile"> | number
    experience?: IntFilter<"TutorProfile"> | number
    isVerified?: BoolFilter<"TutorProfile"> | boolean
    verifiedAt?: DateTimeNullableFilter<"TutorProfile"> | Date | string | null
    verifiedBy?: StringNullableFilter<"TutorProfile"> | string | null
    createdAt?: DateTimeFilter<"TutorProfile"> | Date | string
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: TutorCategoryListRelationFilter
    availability?: AvailabilitySlotListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "userId">

  export type TutorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hourlyRate?: SortOrder
    experience?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TutorProfileCountOrderByAggregateInput
    _avg?: TutorProfileAvgOrderByAggregateInput
    _max?: TutorProfileMaxOrderByAggregateInput
    _min?: TutorProfileMinOrderByAggregateInput
    _sum?: TutorProfileSumOrderByAggregateInput
  }

  export type TutorProfileScalarWhereWithAggregatesInput = {
    AND?: TutorProfileScalarWhereWithAggregatesInput | TutorProfileScalarWhereWithAggregatesInput[]
    OR?: TutorProfileScalarWhereWithAggregatesInput[]
    NOT?: TutorProfileScalarWhereWithAggregatesInput | TutorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TutorProfile"> | string
    userId?: StringWithAggregatesFilter<"TutorProfile"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"TutorProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"TutorProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"TutorProfile"> | string | null
    hourlyRate?: FloatWithAggregatesFilter<"TutorProfile"> | number
    experience?: IntWithAggregatesFilter<"TutorProfile"> | number
    isVerified?: BoolWithAggregatesFilter<"TutorProfile"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"TutorProfile"> | Date | string | null
    verifiedBy?: StringNullableWithAggregatesFilter<"TutorProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TutorProfile"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    tutors?: TutorCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    tutors?: TutorCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    tutors?: TutorCategoryListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TutorCategoryWhereInput = {
    AND?: TutorCategoryWhereInput | TutorCategoryWhereInput[]
    OR?: TutorCategoryWhereInput[]
    NOT?: TutorCategoryWhereInput | TutorCategoryWhereInput[]
    id?: StringFilter<"TutorCategory"> | string
    tutorProfileId?: StringFilter<"TutorCategory"> | string
    categoryId?: StringFilter<"TutorCategory"> | string
    tutorType?: EnumTUTORTYPEFilter<"TutorCategory"> | $Enums.TUTORTYPE
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type TutorCategoryOrderByWithRelationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    categoryId?: SortOrder
    tutorType?: SortOrder
    tutorProfile?: TutorProfileOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type TutorCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TutorCategoryWhereInput | TutorCategoryWhereInput[]
    OR?: TutorCategoryWhereInput[]
    NOT?: TutorCategoryWhereInput | TutorCategoryWhereInput[]
    tutorProfileId?: StringFilter<"TutorCategory"> | string
    categoryId?: StringFilter<"TutorCategory"> | string
    tutorType?: EnumTUTORTYPEFilter<"TutorCategory"> | $Enums.TUTORTYPE
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type TutorCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    categoryId?: SortOrder
    tutorType?: SortOrder
    _count?: TutorCategoryCountOrderByAggregateInput
    _max?: TutorCategoryMaxOrderByAggregateInput
    _min?: TutorCategoryMinOrderByAggregateInput
  }

  export type TutorCategoryScalarWhereWithAggregatesInput = {
    AND?: TutorCategoryScalarWhereWithAggregatesInput | TutorCategoryScalarWhereWithAggregatesInput[]
    OR?: TutorCategoryScalarWhereWithAggregatesInput[]
    NOT?: TutorCategoryScalarWhereWithAggregatesInput | TutorCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TutorCategory"> | string
    tutorProfileId?: StringWithAggregatesFilter<"TutorCategory"> | string
    categoryId?: StringWithAggregatesFilter<"TutorCategory"> | string
    tutorType?: EnumTUTORTYPEWithAggregatesFilter<"TutorCategory"> | $Enums.TUTORTYPE
  }

  export type AvailabilitySlotWhereInput = {
    AND?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    OR?: AvailabilitySlotWhereInput[]
    NOT?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    id?: StringFilter<"AvailabilitySlot"> | string
    tutorProfileId?: StringFilter<"AvailabilitySlot"> | string
    dayOfWeek?: StringFilter<"AvailabilitySlot"> | string
    startTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    endTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    status?: EnumAVAILABILITYSTATUSFilter<"AvailabilitySlot"> | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }

  export type AvailabilitySlotOrderByWithRelationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    tutorProfile?: TutorProfileOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type AvailabilitySlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    OR?: AvailabilitySlotWhereInput[]
    NOT?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    tutorProfileId?: StringFilter<"AvailabilitySlot"> | string
    dayOfWeek?: StringFilter<"AvailabilitySlot"> | string
    startTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    endTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    status?: EnumAVAILABILITYSTATUSFilter<"AvailabilitySlot"> | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }, "id">

  export type AvailabilitySlotOrderByWithAggregationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AvailabilitySlotCountOrderByAggregateInput
    _max?: AvailabilitySlotMaxOrderByAggregateInput
    _min?: AvailabilitySlotMinOrderByAggregateInput
  }

  export type AvailabilitySlotScalarWhereWithAggregatesInput = {
    AND?: AvailabilitySlotScalarWhereWithAggregatesInput | AvailabilitySlotScalarWhereWithAggregatesInput[]
    OR?: AvailabilitySlotScalarWhereWithAggregatesInput[]
    NOT?: AvailabilitySlotScalarWhereWithAggregatesInput | AvailabilitySlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilitySlot"> | string
    tutorProfileId?: StringWithAggregatesFilter<"AvailabilitySlot"> | string
    dayOfWeek?: StringWithAggregatesFilter<"AvailabilitySlot"> | string
    startTime?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
    status?: EnumAVAILABILITYSTATUSWithAggregatesFilter<"AvailabilitySlot"> | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    tutorProfileId?: StringFilter<"Booking"> | string
    studentProfileId?: StringFilter<"Booking"> | string
    availabilitySlotId?: StringFilter<"Booking"> | string
    paymentAmount?: FloatFilter<"Booking"> | number
    paymentStatus?: EnumPAYMENTSTATUSFilter<"Booking"> | $Enums.PAYMENTSTATUS
    paymentMethod?: StringNullableFilter<"Booking"> | string | null
    transactionId?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBOOKINGSTATUSFilter<"Booking"> | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    completedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    studentProfile?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    availabilitySlot?: XOR<AvailabilitySlotScalarRelationFilter, AvailabilitySlotWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    studentProfileId?: SortOrder
    availabilitySlotId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    tutorProfile?: TutorProfileOrderByWithRelationInput
    studentProfile?: StudentProfileOrderByWithRelationInput
    availabilitySlot?: AvailabilitySlotOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    availabilitySlotId?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    tutorProfileId?: StringFilter<"Booking"> | string
    studentProfileId?: StringFilter<"Booking"> | string
    paymentAmount?: FloatFilter<"Booking"> | number
    paymentStatus?: EnumPAYMENTSTATUSFilter<"Booking"> | $Enums.PAYMENTSTATUS
    paymentMethod?: StringNullableFilter<"Booking"> | string | null
    transactionId?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBOOKINGSTATUSFilter<"Booking"> | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    completedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    studentProfile?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    availabilitySlot?: XOR<AvailabilitySlotScalarRelationFilter, AvailabilitySlotWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }, "id" | "availabilitySlotId">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    studentProfileId?: SortOrder
    availabilitySlotId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    tutorProfileId?: StringWithAggregatesFilter<"Booking"> | string
    studentProfileId?: StringWithAggregatesFilter<"Booking"> | string
    availabilitySlotId?: StringWithAggregatesFilter<"Booking"> | string
    paymentAmount?: FloatWithAggregatesFilter<"Booking"> | number
    paymentStatus?: EnumPAYMENTSTATUSWithAggregatesFilter<"Booking"> | $Enums.PAYMENTSTATUS
    paymentMethod?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: EnumBOOKINGSTATUSWithAggregatesFilter<"Booking"> | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    bookingId?: StringFilter<"Review"> | string
    studentId?: StringFilter<"Review"> | string
    tutorProfileId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    student?: StudentProfileOrderByWithRelationInput
    tutorProfile?: TutorProfileOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    studentId?: StringFilter<"Review"> | string
    tutorProfileId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
  }, "id" | "bookingId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    bookingId?: StringWithAggregatesFilter<"Review"> | string
    studentId?: StringWithAggregatesFilter<"Review"> | string
    tutorProfileId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    verifiedTutors?: TutorProfileCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    verifiedTutors?: TutorProfileUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    verifiedTutors?: TutorProfileUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    verifiedTutors?: TutorProfileUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutStudentProfileInput
    reviews?: ReviewCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutStudentProfileInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutStudentProfileNestedInput
    reviews?: ReviewUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutStudentProfileNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateManyInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorProfileCreateInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    admin?: UserCreateNestedOneWithoutVerifiedTutorsInput
    user: UserCreateNestedOneWithoutTutorProfileInput
    categories?: TutorCategoryCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    createdAt?: Date | string
    categories?: TutorCategoryUncheckedCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotUncheckedCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneWithoutVerifiedTutorsNestedInput
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    categories?: TutorCategoryUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TutorCategoryUncheckedUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileCreateManyInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    createdAt?: Date | string
  }

  export type TutorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    tutors?: TutorCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    tutors?: TutorCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutors?: TutorCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutors?: TutorCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorCategoryCreateInput = {
    id?: string
    tutorType: $Enums.TUTORTYPE
    tutorProfile: TutorProfileCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutTutorsInput
  }

  export type TutorCategoryUncheckedCreateInput = {
    id?: string
    tutorProfileId: string
    categoryId: string
    tutorType: $Enums.TUTORTYPE
  }

  export type TutorCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type TutorCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
  }

  export type TutorCategoryCreateManyInput = {
    id?: string
    tutorProfileId: string
    categoryId: string
    tutorType: $Enums.TUTORTYPE
  }

  export type TutorCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
  }

  export type TutorCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
  }

  export type AvailabilitySlotCreateInput = {
    id?: string
    dayOfWeek: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AVAILABILITYSTATUS
    createdAt?: Date | string
    tutorProfile: TutorProfileCreateNestedOneWithoutAvailabilityInput
    booking?: BookingCreateNestedOneWithoutAvailabilitySlotInput
  }

  export type AvailabilitySlotUncheckedCreateInput = {
    id?: string
    tutorProfileId: string
    dayOfWeek: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AVAILABILITYSTATUS
    createdAt?: Date | string
    booking?: BookingUncheckedCreateNestedOneWithoutAvailabilitySlotInput
  }

  export type AvailabilitySlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutAvailabilityNestedInput
    booking?: BookingUpdateOneWithoutAvailabilitySlotNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateOneWithoutAvailabilitySlotNestedInput
  }

  export type AvailabilitySlotCreateManyInput = {
    id?: string
    tutorProfileId: string
    dayOfWeek: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AVAILABILITYSTATUS
    createdAt?: Date | string
  }

  export type AvailabilitySlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    tutorProfile: TutorProfileCreateNestedOneWithoutBookingsInput
    studentProfile: StudentProfileCreateNestedOneWithoutBookingsInput
    availabilitySlot: AvailabilitySlotCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    tutorProfileId: string
    studentProfileId: string
    availabilitySlotId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutBookingsNestedInput
    studentProfile?: StudentProfileUpdateOneRequiredWithoutBookingsNestedInput
    availabilitySlot?: AvailabilitySlotUpdateOneRequiredWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    tutorProfileId: string
    studentProfileId: string
    availabilitySlotId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    student: StudentProfileCreateNestedOneWithoutReviewsInput
    tutorProfile: TutorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    bookingId: string
    studentId: string
    tutorProfileId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    student?: StudentProfileUpdateOneRequiredWithoutReviewsNestedInput
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    bookingId: string
    studentId: string
    tutorProfileId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type EnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TutorProfileNullableScalarRelationFilter = {
    is?: TutorProfileWhereInput | null
    isNot?: TutorProfileWhereInput | null
  }

  export type StudentProfileNullableScalarRelationFilter = {
    is?: StudentProfileWhereInput | null
    isNot?: StudentProfileWhereInput | null
  }

  export type TutorProfileListRelationFilter = {
    every?: TutorProfileWhereInput
    some?: TutorProfileWhereInput
    none?: TutorProfileWhereInput
  }

  export type TutorProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type EnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    schoolOrCollege?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    schoolOrCollege?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    schoolOrCollege?: SortOrder
    createdAt?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TutorCategoryListRelationFilter = {
    every?: TutorCategoryWhereInput
    some?: TutorCategoryWhereInput
    none?: TutorCategoryWhereInput
  }

  export type AvailabilitySlotListRelationFilter = {
    every?: AvailabilitySlotWhereInput
    some?: AvailabilitySlotWhereInput
    none?: AvailabilitySlotWhereInput
  }

  export type TutorCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilitySlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    hourlyRate?: SortOrder
    experience?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TutorProfileAvgOrderByAggregateInput = {
    hourlyRate?: SortOrder
    experience?: SortOrder
  }

  export type TutorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    hourlyRate?: SortOrder
    experience?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TutorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    hourlyRate?: SortOrder
    experience?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TutorProfileSumOrderByAggregateInput = {
    hourlyRate?: SortOrder
    experience?: SortOrder
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTUTORTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.TUTORTYPE | EnumTUTORTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TUTORTYPE[] | ListEnumTUTORTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TUTORTYPE[] | ListEnumTUTORTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTUTORTYPEFilter<$PrismaModel> | $Enums.TUTORTYPE
  }

  export type TutorProfileScalarRelationFilter = {
    is?: TutorProfileWhereInput
    isNot?: TutorProfileWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type TutorCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    categoryId?: SortOrder
    tutorType?: SortOrder
  }

  export type TutorCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    categoryId?: SortOrder
    tutorType?: SortOrder
  }

  export type TutorCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    categoryId?: SortOrder
    tutorType?: SortOrder
  }

  export type EnumTUTORTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TUTORTYPE | EnumTUTORTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TUTORTYPE[] | ListEnumTUTORTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TUTORTYPE[] | ListEnumTUTORTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTUTORTYPEWithAggregatesFilter<$PrismaModel> | $Enums.TUTORTYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTUTORTYPEFilter<$PrismaModel>
    _max?: NestedEnumTUTORTYPEFilter<$PrismaModel>
  }

  export type EnumAVAILABILITYSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.AVAILABILITYSTATUS | EnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.AVAILABILITYSTATUS[] | ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.AVAILABILITYSTATUS[] | ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAVAILABILITYSTATUSFilter<$PrismaModel> | $Enums.AVAILABILITYSTATUS
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type AvailabilitySlotCountOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailabilitySlotMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailabilitySlotMinOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAVAILABILITYSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AVAILABILITYSTATUS | EnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.AVAILABILITYSTATUS[] | ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.AVAILABILITYSTATUS[] | ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAVAILABILITYSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.AVAILABILITYSTATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAVAILABILITYSTATUSFilter<$PrismaModel>
    _max?: NestedEnumAVAILABILITYSTATUSFilter<$PrismaModel>
  }

  export type EnumPAYMENTSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENTSTATUS | EnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENTSTATUS[] | ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENTSTATUS[] | ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENTSTATUSFilter<$PrismaModel> | $Enums.PAYMENTSTATUS
  }

  export type EnumBOOKINGSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.BOOKINGSTATUS | EnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.BOOKINGSTATUS[] | ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.BOOKINGSTATUS[] | ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumBOOKINGSTATUSFilter<$PrismaModel> | $Enums.BOOKINGSTATUS
  }

  export type StudentProfileScalarRelationFilter = {
    is?: StudentProfileWhereInput
    isNot?: StudentProfileWhereInput
  }

  export type AvailabilitySlotScalarRelationFilter = {
    is?: AvailabilitySlotWhereInput
    isNot?: AvailabilitySlotWhereInput
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    studentProfileId?: SortOrder
    availabilitySlotId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    paymentAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    studentProfileId?: SortOrder
    availabilitySlotId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    studentProfileId?: SortOrder
    availabilitySlotId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    paymentAmount?: SortOrder
  }

  export type EnumPAYMENTSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENTSTATUS | EnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENTSTATUS[] | ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENTSTATUS[] | ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENTSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENTSTATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENTSTATUSFilter<$PrismaModel>
    _max?: NestedEnumPAYMENTSTATUSFilter<$PrismaModel>
  }

  export type EnumBOOKINGSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BOOKINGSTATUS | EnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.BOOKINGSTATUS[] | ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.BOOKINGSTATUS[] | ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumBOOKINGSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.BOOKINGSTATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBOOKINGSTATUSFilter<$PrismaModel>
    _max?: NestedEnumBOOKINGSTATUSFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    studentId?: SortOrder
    tutorProfileId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type TutorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type TutorProfileCreateNestedManyWithoutAdminInput = {
    create?: XOR<TutorProfileCreateWithoutAdminInput, TutorProfileUncheckedCreateWithoutAdminInput> | TutorProfileCreateWithoutAdminInput[] | TutorProfileUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TutorProfileCreateOrConnectWithoutAdminInput | TutorProfileCreateOrConnectWithoutAdminInput[]
    createMany?: TutorProfileCreateManyAdminInputEnvelope
    connect?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
  }

  export type TutorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type TutorProfileUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<TutorProfileCreateWithoutAdminInput, TutorProfileUncheckedCreateWithoutAdminInput> | TutorProfileCreateWithoutAdminInput[] | TutorProfileUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TutorProfileCreateOrConnectWithoutAdminInput | TutorProfileCreateOrConnectWithoutAdminInput[]
    createMany?: TutorProfileCreateManyAdminInputEnvelope
    connect?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumROLEFieldUpdateOperationsInput = {
    set?: $Enums.ROLE
  }

  export type EnumSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.STATUS
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TutorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    upsert?: TutorProfileUpsertWithoutUserInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutUserInput, TutorProfileUpdateWithoutUserInput>, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type TutorProfileUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TutorProfileCreateWithoutAdminInput, TutorProfileUncheckedCreateWithoutAdminInput> | TutorProfileCreateWithoutAdminInput[] | TutorProfileUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TutorProfileCreateOrConnectWithoutAdminInput | TutorProfileCreateOrConnectWithoutAdminInput[]
    upsert?: TutorProfileUpsertWithWhereUniqueWithoutAdminInput | TutorProfileUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TutorProfileCreateManyAdminInputEnvelope
    set?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
    disconnect?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
    delete?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
    connect?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
    update?: TutorProfileUpdateWithWhereUniqueWithoutAdminInput | TutorProfileUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TutorProfileUpdateManyWithWhereWithoutAdminInput | TutorProfileUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TutorProfileScalarWhereInput | TutorProfileScalarWhereInput[]
  }

  export type TutorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    upsert?: TutorProfileUpsertWithoutUserInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutUserInput, TutorProfileUpdateWithoutUserInput>, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type TutorProfileUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TutorProfileCreateWithoutAdminInput, TutorProfileUncheckedCreateWithoutAdminInput> | TutorProfileCreateWithoutAdminInput[] | TutorProfileUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TutorProfileCreateOrConnectWithoutAdminInput | TutorProfileCreateOrConnectWithoutAdminInput[]
    upsert?: TutorProfileUpsertWithWhereUniqueWithoutAdminInput | TutorProfileUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TutorProfileCreateManyAdminInputEnvelope
    set?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
    disconnect?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
    delete?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
    connect?: TutorProfileWhereUniqueInput | TutorProfileWhereUniqueInput[]
    update?: TutorProfileUpdateWithWhereUniqueWithoutAdminInput | TutorProfileUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TutorProfileUpdateManyWithWhereWithoutAdminInput | TutorProfileUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TutorProfileScalarWhereInput | TutorProfileScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutStudentProfileInput = {
    create?: XOR<BookingCreateWithoutStudentProfileInput, BookingUncheckedCreateWithoutStudentProfileInput> | BookingCreateWithoutStudentProfileInput[] | BookingUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutStudentProfileInput | BookingCreateOrConnectWithoutStudentProfileInput[]
    createMany?: BookingCreateManyStudentProfileInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutStudentInput = {
    create?: XOR<ReviewCreateWithoutStudentInput, ReviewUncheckedCreateWithoutStudentInput> | ReviewCreateWithoutStudentInput[] | ReviewUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStudentInput | ReviewCreateOrConnectWithoutStudentInput[]
    createMany?: ReviewCreateManyStudentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutStudentProfileInput = {
    create?: XOR<BookingCreateWithoutStudentProfileInput, BookingUncheckedCreateWithoutStudentProfileInput> | BookingCreateWithoutStudentProfileInput[] | BookingUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutStudentProfileInput | BookingCreateOrConnectWithoutStudentProfileInput[]
    createMany?: BookingCreateManyStudentProfileInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ReviewCreateWithoutStudentInput, ReviewUncheckedCreateWithoutStudentInput> | ReviewCreateWithoutStudentInput[] | ReviewUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStudentInput | ReviewCreateOrConnectWithoutStudentInput[]
    createMany?: ReviewCreateManyStudentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookingUpdateManyWithoutStudentProfileNestedInput = {
    create?: XOR<BookingCreateWithoutStudentProfileInput, BookingUncheckedCreateWithoutStudentProfileInput> | BookingCreateWithoutStudentProfileInput[] | BookingUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutStudentProfileInput | BookingCreateOrConnectWithoutStudentProfileInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutStudentProfileInput | BookingUpsertWithWhereUniqueWithoutStudentProfileInput[]
    createMany?: BookingCreateManyStudentProfileInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutStudentProfileInput | BookingUpdateWithWhereUniqueWithoutStudentProfileInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutStudentProfileInput | BookingUpdateManyWithWhereWithoutStudentProfileInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ReviewCreateWithoutStudentInput, ReviewUncheckedCreateWithoutStudentInput> | ReviewCreateWithoutStudentInput[] | ReviewUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStudentInput | ReviewCreateOrConnectWithoutStudentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStudentInput | ReviewUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ReviewCreateManyStudentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStudentInput | ReviewUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStudentInput | ReviewUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    upsert?: UserUpsertWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentProfileInput, UserUpdateWithoutStudentProfileInput>, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type BookingUncheckedUpdateManyWithoutStudentProfileNestedInput = {
    create?: XOR<BookingCreateWithoutStudentProfileInput, BookingUncheckedCreateWithoutStudentProfileInput> | BookingCreateWithoutStudentProfileInput[] | BookingUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutStudentProfileInput | BookingCreateOrConnectWithoutStudentProfileInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutStudentProfileInput | BookingUpsertWithWhereUniqueWithoutStudentProfileInput[]
    createMany?: BookingCreateManyStudentProfileInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutStudentProfileInput | BookingUpdateWithWhereUniqueWithoutStudentProfileInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutStudentProfileInput | BookingUpdateManyWithWhereWithoutStudentProfileInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ReviewCreateWithoutStudentInput, ReviewUncheckedCreateWithoutStudentInput> | ReviewCreateWithoutStudentInput[] | ReviewUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStudentInput | ReviewCreateOrConnectWithoutStudentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStudentInput | ReviewUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ReviewCreateManyStudentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStudentInput | ReviewUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStudentInput | ReviewUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVerifiedTutorsInput = {
    create?: XOR<UserCreateWithoutVerifiedTutorsInput, UserUncheckedCreateWithoutVerifiedTutorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedTutorsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTutorProfileInput = {
    create?: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type TutorCategoryCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<TutorCategoryCreateWithoutTutorProfileInput, TutorCategoryUncheckedCreateWithoutTutorProfileInput> | TutorCategoryCreateWithoutTutorProfileInput[] | TutorCategoryUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: TutorCategoryCreateOrConnectWithoutTutorProfileInput | TutorCategoryCreateOrConnectWithoutTutorProfileInput[]
    createMany?: TutorCategoryCreateManyTutorProfileInputEnvelope
    connect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
  }

  export type AvailabilitySlotCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<AvailabilitySlotCreateWithoutTutorProfileInput, AvailabilitySlotUncheckedCreateWithoutTutorProfileInput> | AvailabilitySlotCreateWithoutTutorProfileInput[] | AvailabilitySlotUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutTutorProfileInput | AvailabilitySlotCreateOrConnectWithoutTutorProfileInput[]
    createMany?: AvailabilitySlotCreateManyTutorProfileInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<BookingCreateWithoutTutorProfileInput, BookingUncheckedCreateWithoutTutorProfileInput> | BookingCreateWithoutTutorProfileInput[] | BookingUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTutorProfileInput | BookingCreateOrConnectWithoutTutorProfileInput[]
    createMany?: BookingCreateManyTutorProfileInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<ReviewCreateWithoutTutorProfileInput, ReviewUncheckedCreateWithoutTutorProfileInput> | ReviewCreateWithoutTutorProfileInput[] | ReviewUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorProfileInput | ReviewCreateOrConnectWithoutTutorProfileInput[]
    createMany?: ReviewCreateManyTutorProfileInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TutorCategoryUncheckedCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<TutorCategoryCreateWithoutTutorProfileInput, TutorCategoryUncheckedCreateWithoutTutorProfileInput> | TutorCategoryCreateWithoutTutorProfileInput[] | TutorCategoryUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: TutorCategoryCreateOrConnectWithoutTutorProfileInput | TutorCategoryCreateOrConnectWithoutTutorProfileInput[]
    createMany?: TutorCategoryCreateManyTutorProfileInputEnvelope
    connect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
  }

  export type AvailabilitySlotUncheckedCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<AvailabilitySlotCreateWithoutTutorProfileInput, AvailabilitySlotUncheckedCreateWithoutTutorProfileInput> | AvailabilitySlotCreateWithoutTutorProfileInput[] | AvailabilitySlotUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutTutorProfileInput | AvailabilitySlotCreateOrConnectWithoutTutorProfileInput[]
    createMany?: AvailabilitySlotCreateManyTutorProfileInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<BookingCreateWithoutTutorProfileInput, BookingUncheckedCreateWithoutTutorProfileInput> | BookingCreateWithoutTutorProfileInput[] | BookingUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTutorProfileInput | BookingCreateOrConnectWithoutTutorProfileInput[]
    createMany?: BookingCreateManyTutorProfileInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<ReviewCreateWithoutTutorProfileInput, ReviewUncheckedCreateWithoutTutorProfileInput> | ReviewCreateWithoutTutorProfileInput[] | ReviewUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorProfileInput | ReviewCreateOrConnectWithoutTutorProfileInput[]
    createMany?: ReviewCreateManyTutorProfileInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutVerifiedTutorsNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedTutorsInput, UserUncheckedCreateWithoutVerifiedTutorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedTutorsInput
    upsert?: UserUpsertWithoutVerifiedTutorsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedTutorsInput, UserUpdateWithoutVerifiedTutorsInput>, UserUncheckedUpdateWithoutVerifiedTutorsInput>
  }

  export type UserUpdateOneRequiredWithoutTutorProfileNestedInput = {
    create?: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProfileInput
    upsert?: UserUpsertWithoutTutorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutorProfileInput, UserUpdateWithoutTutorProfileInput>, UserUncheckedUpdateWithoutTutorProfileInput>
  }

  export type TutorCategoryUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<TutorCategoryCreateWithoutTutorProfileInput, TutorCategoryUncheckedCreateWithoutTutorProfileInput> | TutorCategoryCreateWithoutTutorProfileInput[] | TutorCategoryUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: TutorCategoryCreateOrConnectWithoutTutorProfileInput | TutorCategoryCreateOrConnectWithoutTutorProfileInput[]
    upsert?: TutorCategoryUpsertWithWhereUniqueWithoutTutorProfileInput | TutorCategoryUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: TutorCategoryCreateManyTutorProfileInputEnvelope
    set?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    disconnect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    delete?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    connect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    update?: TutorCategoryUpdateWithWhereUniqueWithoutTutorProfileInput | TutorCategoryUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: TutorCategoryUpdateManyWithWhereWithoutTutorProfileInput | TutorCategoryUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: TutorCategoryScalarWhereInput | TutorCategoryScalarWhereInput[]
  }

  export type AvailabilitySlotUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutTutorProfileInput, AvailabilitySlotUncheckedCreateWithoutTutorProfileInput> | AvailabilitySlotCreateWithoutTutorProfileInput[] | AvailabilitySlotUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutTutorProfileInput | AvailabilitySlotCreateOrConnectWithoutTutorProfileInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutTutorProfileInput | AvailabilitySlotUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: AvailabilitySlotCreateManyTutorProfileInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutTutorProfileInput | AvailabilitySlotUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutTutorProfileInput | AvailabilitySlotUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<BookingCreateWithoutTutorProfileInput, BookingUncheckedCreateWithoutTutorProfileInput> | BookingCreateWithoutTutorProfileInput[] | BookingUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTutorProfileInput | BookingCreateOrConnectWithoutTutorProfileInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTutorProfileInput | BookingUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: BookingCreateManyTutorProfileInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTutorProfileInput | BookingUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTutorProfileInput | BookingUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<ReviewCreateWithoutTutorProfileInput, ReviewUncheckedCreateWithoutTutorProfileInput> | ReviewCreateWithoutTutorProfileInput[] | ReviewUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorProfileInput | ReviewCreateOrConnectWithoutTutorProfileInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTutorProfileInput | ReviewUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: ReviewCreateManyTutorProfileInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTutorProfileInput | ReviewUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTutorProfileInput | ReviewUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TutorCategoryUncheckedUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<TutorCategoryCreateWithoutTutorProfileInput, TutorCategoryUncheckedCreateWithoutTutorProfileInput> | TutorCategoryCreateWithoutTutorProfileInput[] | TutorCategoryUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: TutorCategoryCreateOrConnectWithoutTutorProfileInput | TutorCategoryCreateOrConnectWithoutTutorProfileInput[]
    upsert?: TutorCategoryUpsertWithWhereUniqueWithoutTutorProfileInput | TutorCategoryUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: TutorCategoryCreateManyTutorProfileInputEnvelope
    set?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    disconnect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    delete?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    connect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    update?: TutorCategoryUpdateWithWhereUniqueWithoutTutorProfileInput | TutorCategoryUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: TutorCategoryUpdateManyWithWhereWithoutTutorProfileInput | TutorCategoryUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: TutorCategoryScalarWhereInput | TutorCategoryScalarWhereInput[]
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutTutorProfileInput, AvailabilitySlotUncheckedCreateWithoutTutorProfileInput> | AvailabilitySlotCreateWithoutTutorProfileInput[] | AvailabilitySlotUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutTutorProfileInput | AvailabilitySlotCreateOrConnectWithoutTutorProfileInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutTutorProfileInput | AvailabilitySlotUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: AvailabilitySlotCreateManyTutorProfileInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutTutorProfileInput | AvailabilitySlotUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutTutorProfileInput | AvailabilitySlotUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<BookingCreateWithoutTutorProfileInput, BookingUncheckedCreateWithoutTutorProfileInput> | BookingCreateWithoutTutorProfileInput[] | BookingUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTutorProfileInput | BookingCreateOrConnectWithoutTutorProfileInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTutorProfileInput | BookingUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: BookingCreateManyTutorProfileInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTutorProfileInput | BookingUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTutorProfileInput | BookingUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<ReviewCreateWithoutTutorProfileInput, ReviewUncheckedCreateWithoutTutorProfileInput> | ReviewCreateWithoutTutorProfileInput[] | ReviewUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorProfileInput | ReviewCreateOrConnectWithoutTutorProfileInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTutorProfileInput | ReviewUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: ReviewCreateManyTutorProfileInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTutorProfileInput | ReviewUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTutorProfileInput | ReviewUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TutorCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TutorCategoryCreateWithoutCategoryInput, TutorCategoryUncheckedCreateWithoutCategoryInput> | TutorCategoryCreateWithoutCategoryInput[] | TutorCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorCategoryCreateOrConnectWithoutCategoryInput | TutorCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: TutorCategoryCreateManyCategoryInputEnvelope
    connect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
  }

  export type TutorCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TutorCategoryCreateWithoutCategoryInput, TutorCategoryUncheckedCreateWithoutCategoryInput> | TutorCategoryCreateWithoutCategoryInput[] | TutorCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorCategoryCreateOrConnectWithoutCategoryInput | TutorCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: TutorCategoryCreateManyCategoryInputEnvelope
    connect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
  }

  export type TutorCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TutorCategoryCreateWithoutCategoryInput, TutorCategoryUncheckedCreateWithoutCategoryInput> | TutorCategoryCreateWithoutCategoryInput[] | TutorCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorCategoryCreateOrConnectWithoutCategoryInput | TutorCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: TutorCategoryUpsertWithWhereUniqueWithoutCategoryInput | TutorCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TutorCategoryCreateManyCategoryInputEnvelope
    set?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    disconnect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    delete?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    connect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    update?: TutorCategoryUpdateWithWhereUniqueWithoutCategoryInput | TutorCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TutorCategoryUpdateManyWithWhereWithoutCategoryInput | TutorCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TutorCategoryScalarWhereInput | TutorCategoryScalarWhereInput[]
  }

  export type TutorCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TutorCategoryCreateWithoutCategoryInput, TutorCategoryUncheckedCreateWithoutCategoryInput> | TutorCategoryCreateWithoutCategoryInput[] | TutorCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorCategoryCreateOrConnectWithoutCategoryInput | TutorCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: TutorCategoryUpsertWithWhereUniqueWithoutCategoryInput | TutorCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TutorCategoryCreateManyCategoryInputEnvelope
    set?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    disconnect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    delete?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    connect?: TutorCategoryWhereUniqueInput | TutorCategoryWhereUniqueInput[]
    update?: TutorCategoryUpdateWithWhereUniqueWithoutCategoryInput | TutorCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TutorCategoryUpdateManyWithWhereWithoutCategoryInput | TutorCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TutorCategoryScalarWhereInput | TutorCategoryScalarWhereInput[]
  }

  export type TutorProfileCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TutorProfileCreateWithoutCategoriesInput, TutorProfileUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutCategoriesInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTutorsInput = {
    create?: XOR<CategoryCreateWithoutTutorsInput, CategoryUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTutorsInput
    connect?: CategoryWhereUniqueInput
  }

  export type EnumTUTORTYPEFieldUpdateOperationsInput = {
    set?: $Enums.TUTORTYPE
  }

  export type TutorProfileUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TutorProfileCreateWithoutCategoriesInput, TutorProfileUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutCategoriesInput
    upsert?: TutorProfileUpsertWithoutCategoriesInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutCategoriesInput, TutorProfileUpdateWithoutCategoriesInput>, TutorProfileUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutTutorsNestedInput = {
    create?: XOR<CategoryCreateWithoutTutorsInput, CategoryUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTutorsInput
    upsert?: CategoryUpsertWithoutTutorsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTutorsInput, CategoryUpdateWithoutTutorsInput>, CategoryUncheckedUpdateWithoutTutorsInput>
  }

  export type TutorProfileCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<TutorProfileCreateWithoutAvailabilityInput, TutorProfileUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutAvailabilityInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutAvailabilitySlotInput = {
    create?: XOR<BookingCreateWithoutAvailabilitySlotInput, BookingUncheckedCreateWithoutAvailabilitySlotInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAvailabilitySlotInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedOneWithoutAvailabilitySlotInput = {
    create?: XOR<BookingCreateWithoutAvailabilitySlotInput, BookingUncheckedCreateWithoutAvailabilitySlotInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAvailabilitySlotInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumAVAILABILITYSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.AVAILABILITYSTATUS
  }

  export type TutorProfileUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<TutorProfileCreateWithoutAvailabilityInput, TutorProfileUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutAvailabilityInput
    upsert?: TutorProfileUpsertWithoutAvailabilityInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutAvailabilityInput, TutorProfileUpdateWithoutAvailabilityInput>, TutorProfileUncheckedUpdateWithoutAvailabilityInput>
  }

  export type BookingUpdateOneWithoutAvailabilitySlotNestedInput = {
    create?: XOR<BookingCreateWithoutAvailabilitySlotInput, BookingUncheckedCreateWithoutAvailabilitySlotInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAvailabilitySlotInput
    upsert?: BookingUpsertWithoutAvailabilitySlotInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutAvailabilitySlotInput, BookingUpdateWithoutAvailabilitySlotInput>, BookingUncheckedUpdateWithoutAvailabilitySlotInput>
  }

  export type BookingUncheckedUpdateOneWithoutAvailabilitySlotNestedInput = {
    create?: XOR<BookingCreateWithoutAvailabilitySlotInput, BookingUncheckedCreateWithoutAvailabilitySlotInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAvailabilitySlotInput
    upsert?: BookingUpsertWithoutAvailabilitySlotInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutAvailabilitySlotInput, BookingUpdateWithoutAvailabilitySlotInput>, BookingUncheckedUpdateWithoutAvailabilitySlotInput>
  }

  export type TutorProfileCreateNestedOneWithoutBookingsInput = {
    create?: XOR<TutorProfileCreateWithoutBookingsInput, TutorProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutBookingsInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type StudentProfileCreateNestedOneWithoutBookingsInput = {
    create?: XOR<StudentProfileCreateWithoutBookingsInput, StudentProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutBookingsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type AvailabilitySlotCreateNestedOneWithoutBookingInput = {
    create?: XOR<AvailabilitySlotCreateWithoutBookingInput, AvailabilitySlotUncheckedCreateWithoutBookingInput>
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutBookingInput
    connect?: AvailabilitySlotWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumPAYMENTSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.PAYMENTSTATUS
  }

  export type EnumBOOKINGSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.BOOKINGSTATUS
  }

  export type TutorProfileUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<TutorProfileCreateWithoutBookingsInput, TutorProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutBookingsInput
    upsert?: TutorProfileUpsertWithoutBookingsInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutBookingsInput, TutorProfileUpdateWithoutBookingsInput>, TutorProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type StudentProfileUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutBookingsInput, StudentProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutBookingsInput
    upsert?: StudentProfileUpsertWithoutBookingsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutBookingsInput, StudentProfileUpdateWithoutBookingsInput>, StudentProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type AvailabilitySlotUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutBookingInput, AvailabilitySlotUncheckedCreateWithoutBookingInput>
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutBookingInput
    upsert?: AvailabilitySlotUpsertWithoutBookingInput
    connect?: AvailabilitySlotWhereUniqueInput
    update?: XOR<XOR<AvailabilitySlotUpdateToOneWithWhereWithoutBookingInput, AvailabilitySlotUpdateWithoutBookingInput>, AvailabilitySlotUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type StudentProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<StudentProfileCreateWithoutReviewsInput, StudentProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutReviewsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type TutorProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutReviewsInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type StudentProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutReviewsInput, StudentProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutReviewsInput
    upsert?: StudentProfileUpsertWithoutReviewsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutReviewsInput, StudentProfileUpdateWithoutReviewsInput>, StudentProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type TutorProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutReviewsInput
    upsert?: TutorProfileUpsertWithoutReviewsInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutReviewsInput, TutorProfileUpdateWithoutReviewsInput>, TutorProfileUncheckedUpdateWithoutReviewsInput>
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

  export type NestedEnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type NestedEnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type NestedEnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTUTORTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.TUTORTYPE | EnumTUTORTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TUTORTYPE[] | ListEnumTUTORTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TUTORTYPE[] | ListEnumTUTORTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTUTORTYPEFilter<$PrismaModel> | $Enums.TUTORTYPE
  }

  export type NestedEnumTUTORTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TUTORTYPE | EnumTUTORTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TUTORTYPE[] | ListEnumTUTORTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TUTORTYPE[] | ListEnumTUTORTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTUTORTYPEWithAggregatesFilter<$PrismaModel> | $Enums.TUTORTYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTUTORTYPEFilter<$PrismaModel>
    _max?: NestedEnumTUTORTYPEFilter<$PrismaModel>
  }

  export type NestedEnumAVAILABILITYSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.AVAILABILITYSTATUS | EnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.AVAILABILITYSTATUS[] | ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.AVAILABILITYSTATUS[] | ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAVAILABILITYSTATUSFilter<$PrismaModel> | $Enums.AVAILABILITYSTATUS
  }

  export type NestedEnumAVAILABILITYSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AVAILABILITYSTATUS | EnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.AVAILABILITYSTATUS[] | ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.AVAILABILITYSTATUS[] | ListEnumAVAILABILITYSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAVAILABILITYSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.AVAILABILITYSTATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAVAILABILITYSTATUSFilter<$PrismaModel>
    _max?: NestedEnumAVAILABILITYSTATUSFilter<$PrismaModel>
  }

  export type NestedEnumPAYMENTSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENTSTATUS | EnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENTSTATUS[] | ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENTSTATUS[] | ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENTSTATUSFilter<$PrismaModel> | $Enums.PAYMENTSTATUS
  }

  export type NestedEnumBOOKINGSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.BOOKINGSTATUS | EnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.BOOKINGSTATUS[] | ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.BOOKINGSTATUS[] | ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumBOOKINGSTATUSFilter<$PrismaModel> | $Enums.BOOKINGSTATUS
  }

  export type NestedEnumPAYMENTSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENTSTATUS | EnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENTSTATUS[] | ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENTSTATUS[] | ListEnumPAYMENTSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENTSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENTSTATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENTSTATUSFilter<$PrismaModel>
    _max?: NestedEnumPAYMENTSTATUSFilter<$PrismaModel>
  }

  export type NestedEnumBOOKINGSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BOOKINGSTATUS | EnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.BOOKINGSTATUS[] | ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.BOOKINGSTATUS[] | ListEnumBOOKINGSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumBOOKINGSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.BOOKINGSTATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBOOKINGSTATUSFilter<$PrismaModel>
    _max?: NestedEnumBOOKINGSTATUSFilter<$PrismaModel>
  }

  export type TutorProfileCreateWithoutUserInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    admin?: UserCreateNestedOneWithoutVerifiedTutorsInput
    categories?: TutorCategoryCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    createdAt?: Date | string
    categories?: TutorCategoryUncheckedCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotUncheckedCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileCreateOrConnectWithoutUserInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
  }

  export type StudentProfileCreateWithoutUserInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutStudentProfileInput
    reviews?: ReviewCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutStudentProfileInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
  }

  export type TutorProfileCreateWithoutAdminInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTutorProfileInput
    categories?: TutorCategoryCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateWithoutAdminInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    categories?: TutorCategoryUncheckedCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotUncheckedCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileCreateOrConnectWithoutAdminInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutAdminInput, TutorProfileUncheckedCreateWithoutAdminInput>
  }

  export type TutorProfileCreateManyAdminInputEnvelope = {
    data: TutorProfileCreateManyAdminInput | TutorProfileCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type TutorProfileUpsertWithoutUserInput = {
    update: XOR<TutorProfileUpdateWithoutUserInput, TutorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutUserInput, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type TutorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneWithoutVerifiedTutorsNestedInput
    categories?: TutorCategoryUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TutorCategoryUncheckedUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorProfileNestedInput
  }

  export type StudentProfileUpsertWithoutUserInput = {
    update: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutStudentProfileNestedInput
    reviews?: ReviewUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutStudentProfileNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TutorProfileUpsertWithWhereUniqueWithoutAdminInput = {
    where: TutorProfileWhereUniqueInput
    update: XOR<TutorProfileUpdateWithoutAdminInput, TutorProfileUncheckedUpdateWithoutAdminInput>
    create: XOR<TutorProfileCreateWithoutAdminInput, TutorProfileUncheckedCreateWithoutAdminInput>
  }

  export type TutorProfileUpdateWithWhereUniqueWithoutAdminInput = {
    where: TutorProfileWhereUniqueInput
    data: XOR<TutorProfileUpdateWithoutAdminInput, TutorProfileUncheckedUpdateWithoutAdminInput>
  }

  export type TutorProfileUpdateManyWithWhereWithoutAdminInput = {
    where: TutorProfileScalarWhereInput
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyWithoutAdminInput>
  }

  export type TutorProfileScalarWhereInput = {
    AND?: TutorProfileScalarWhereInput | TutorProfileScalarWhereInput[]
    OR?: TutorProfileScalarWhereInput[]
    NOT?: TutorProfileScalarWhereInput | TutorProfileScalarWhereInput[]
    id?: StringFilter<"TutorProfile"> | string
    userId?: StringFilter<"TutorProfile"> | string
    profilePicture?: StringNullableFilter<"TutorProfile"> | string | null
    bio?: StringNullableFilter<"TutorProfile"> | string | null
    phone?: StringNullableFilter<"TutorProfile"> | string | null
    hourlyRate?: FloatFilter<"TutorProfile"> | number
    experience?: IntFilter<"TutorProfile"> | number
    isVerified?: BoolFilter<"TutorProfile"> | boolean
    verifiedAt?: DateTimeNullableFilter<"TutorProfile"> | Date | string | null
    verifiedBy?: StringNullableFilter<"TutorProfile"> | string | null
    createdAt?: DateTimeFilter<"TutorProfile"> | Date | string
  }

  export type BookingCreateWithoutStudentProfileInput = {
    id?: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    tutorProfile: TutorProfileCreateNestedOneWithoutBookingsInput
    availabilitySlot: AvailabilitySlotCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    tutorProfileId: string
    availabilitySlotId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutStudentProfileInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutStudentProfileInput, BookingUncheckedCreateWithoutStudentProfileInput>
  }

  export type BookingCreateManyStudentProfileInputEnvelope = {
    data: BookingCreateManyStudentProfileInput | BookingCreateManyStudentProfileInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutStudentInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    tutorProfile: TutorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutStudentInput = {
    id?: string
    bookingId: string
    tutorProfileId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutStudentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutStudentInput, ReviewUncheckedCreateWithoutStudentInput>
  }

  export type ReviewCreateManyStudentInputEnvelope = {
    data: ReviewCreateManyStudentInput | ReviewCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStudentProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    verifiedTutors?: TutorProfileCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    verifiedTutors?: TutorProfileUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutStudentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutStudentProfileInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutStudentProfileInput, BookingUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<BookingCreateWithoutStudentProfileInput, BookingUncheckedCreateWithoutStudentProfileInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutStudentProfileInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutStudentProfileInput, BookingUncheckedUpdateWithoutStudentProfileInput>
  }

  export type BookingUpdateManyWithWhereWithoutStudentProfileInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutStudentProfileInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    tutorProfileId?: StringFilter<"Booking"> | string
    studentProfileId?: StringFilter<"Booking"> | string
    availabilitySlotId?: StringFilter<"Booking"> | string
    paymentAmount?: FloatFilter<"Booking"> | number
    paymentStatus?: EnumPAYMENTSTATUSFilter<"Booking"> | $Enums.PAYMENTSTATUS
    paymentMethod?: StringNullableFilter<"Booking"> | string | null
    transactionId?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBOOKINGSTATUSFilter<"Booking"> | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    completedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutStudentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutStudentInput, ReviewUncheckedUpdateWithoutStudentInput>
    create: XOR<ReviewCreateWithoutStudentInput, ReviewUncheckedCreateWithoutStudentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutStudentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutStudentInput, ReviewUncheckedUpdateWithoutStudentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutStudentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutStudentInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    bookingId?: StringFilter<"Review"> | string
    studentId?: StringFilter<"Review"> | string
    tutorProfileId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserUpsertWithoutStudentProfileInput = {
    update: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type UserUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    verifiedTutors?: TutorProfileUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    verifiedTutors?: TutorProfileUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutVerifiedTutorsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerifiedTutorsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerifiedTutorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedTutorsInput, UserUncheckedCreateWithoutVerifiedTutorsInput>
  }

  export type UserCreateWithoutTutorProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    verifiedTutors?: TutorProfileCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutTutorProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.ROLE
    status?: $Enums.STATUS
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    verifiedTutors?: TutorProfileUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutTutorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
  }

  export type TutorCategoryCreateWithoutTutorProfileInput = {
    id?: string
    tutorType: $Enums.TUTORTYPE
    category: CategoryCreateNestedOneWithoutTutorsInput
  }

  export type TutorCategoryUncheckedCreateWithoutTutorProfileInput = {
    id?: string
    categoryId: string
    tutorType: $Enums.TUTORTYPE
  }

  export type TutorCategoryCreateOrConnectWithoutTutorProfileInput = {
    where: TutorCategoryWhereUniqueInput
    create: XOR<TutorCategoryCreateWithoutTutorProfileInput, TutorCategoryUncheckedCreateWithoutTutorProfileInput>
  }

  export type TutorCategoryCreateManyTutorProfileInputEnvelope = {
    data: TutorCategoryCreateManyTutorProfileInput | TutorCategoryCreateManyTutorProfileInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilitySlotCreateWithoutTutorProfileInput = {
    id?: string
    dayOfWeek: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AVAILABILITYSTATUS
    createdAt?: Date | string
    booking?: BookingCreateNestedOneWithoutAvailabilitySlotInput
  }

  export type AvailabilitySlotUncheckedCreateWithoutTutorProfileInput = {
    id?: string
    dayOfWeek: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AVAILABILITYSTATUS
    createdAt?: Date | string
    booking?: BookingUncheckedCreateNestedOneWithoutAvailabilitySlotInput
  }

  export type AvailabilitySlotCreateOrConnectWithoutTutorProfileInput = {
    where: AvailabilitySlotWhereUniqueInput
    create: XOR<AvailabilitySlotCreateWithoutTutorProfileInput, AvailabilitySlotUncheckedCreateWithoutTutorProfileInput>
  }

  export type AvailabilitySlotCreateManyTutorProfileInputEnvelope = {
    data: AvailabilitySlotCreateManyTutorProfileInput | AvailabilitySlotCreateManyTutorProfileInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutTutorProfileInput = {
    id?: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    studentProfile: StudentProfileCreateNestedOneWithoutBookingsInput
    availabilitySlot: AvailabilitySlotCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutTutorProfileInput = {
    id?: string
    studentProfileId: string
    availabilitySlotId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutTutorProfileInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTutorProfileInput, BookingUncheckedCreateWithoutTutorProfileInput>
  }

  export type BookingCreateManyTutorProfileInputEnvelope = {
    data: BookingCreateManyTutorProfileInput | BookingCreateManyTutorProfileInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTutorProfileInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    student: StudentProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTutorProfileInput = {
    id?: string
    bookingId: string
    studentId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTutorProfileInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTutorProfileInput, ReviewUncheckedCreateWithoutTutorProfileInput>
  }

  export type ReviewCreateManyTutorProfileInputEnvelope = {
    data: ReviewCreateManyTutorProfileInput | ReviewCreateManyTutorProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVerifiedTutorsInput = {
    update: XOR<UserUpdateWithoutVerifiedTutorsInput, UserUncheckedUpdateWithoutVerifiedTutorsInput>
    create: XOR<UserCreateWithoutVerifiedTutorsInput, UserUncheckedCreateWithoutVerifiedTutorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedTutorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedTutorsInput, UserUncheckedUpdateWithoutVerifiedTutorsInput>
  }

  export type UserUpdateWithoutVerifiedTutorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedTutorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutTutorProfileInput = {
    update: XOR<UserUpdateWithoutTutorProfileInput, UserUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutorProfileInput, UserUncheckedUpdateWithoutTutorProfileInput>
  }

  export type UserUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    verifiedTutors?: TutorProfileUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    verifiedTutors?: TutorProfileUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type TutorCategoryUpsertWithWhereUniqueWithoutTutorProfileInput = {
    where: TutorCategoryWhereUniqueInput
    update: XOR<TutorCategoryUpdateWithoutTutorProfileInput, TutorCategoryUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<TutorCategoryCreateWithoutTutorProfileInput, TutorCategoryUncheckedCreateWithoutTutorProfileInput>
  }

  export type TutorCategoryUpdateWithWhereUniqueWithoutTutorProfileInput = {
    where: TutorCategoryWhereUniqueInput
    data: XOR<TutorCategoryUpdateWithoutTutorProfileInput, TutorCategoryUncheckedUpdateWithoutTutorProfileInput>
  }

  export type TutorCategoryUpdateManyWithWhereWithoutTutorProfileInput = {
    where: TutorCategoryScalarWhereInput
    data: XOR<TutorCategoryUpdateManyMutationInput, TutorCategoryUncheckedUpdateManyWithoutTutorProfileInput>
  }

  export type TutorCategoryScalarWhereInput = {
    AND?: TutorCategoryScalarWhereInput | TutorCategoryScalarWhereInput[]
    OR?: TutorCategoryScalarWhereInput[]
    NOT?: TutorCategoryScalarWhereInput | TutorCategoryScalarWhereInput[]
    id?: StringFilter<"TutorCategory"> | string
    tutorProfileId?: StringFilter<"TutorCategory"> | string
    categoryId?: StringFilter<"TutorCategory"> | string
    tutorType?: EnumTUTORTYPEFilter<"TutorCategory"> | $Enums.TUTORTYPE
  }

  export type AvailabilitySlotUpsertWithWhereUniqueWithoutTutorProfileInput = {
    where: AvailabilitySlotWhereUniqueInput
    update: XOR<AvailabilitySlotUpdateWithoutTutorProfileInput, AvailabilitySlotUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<AvailabilitySlotCreateWithoutTutorProfileInput, AvailabilitySlotUncheckedCreateWithoutTutorProfileInput>
  }

  export type AvailabilitySlotUpdateWithWhereUniqueWithoutTutorProfileInput = {
    where: AvailabilitySlotWhereUniqueInput
    data: XOR<AvailabilitySlotUpdateWithoutTutorProfileInput, AvailabilitySlotUncheckedUpdateWithoutTutorProfileInput>
  }

  export type AvailabilitySlotUpdateManyWithWhereWithoutTutorProfileInput = {
    where: AvailabilitySlotScalarWhereInput
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileInput>
  }

  export type AvailabilitySlotScalarWhereInput = {
    AND?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
    OR?: AvailabilitySlotScalarWhereInput[]
    NOT?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
    id?: StringFilter<"AvailabilitySlot"> | string
    tutorProfileId?: StringFilter<"AvailabilitySlot"> | string
    dayOfWeek?: StringFilter<"AvailabilitySlot"> | string
    startTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    endTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    status?: EnumAVAILABILITYSTATUSFilter<"AvailabilitySlot"> | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutTutorProfileInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTutorProfileInput, BookingUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<BookingCreateWithoutTutorProfileInput, BookingUncheckedCreateWithoutTutorProfileInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTutorProfileInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTutorProfileInput, BookingUncheckedUpdateWithoutTutorProfileInput>
  }

  export type BookingUpdateManyWithWhereWithoutTutorProfileInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTutorProfileInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutTutorProfileInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTutorProfileInput, ReviewUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<ReviewCreateWithoutTutorProfileInput, ReviewUncheckedCreateWithoutTutorProfileInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTutorProfileInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTutorProfileInput, ReviewUncheckedUpdateWithoutTutorProfileInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTutorProfileInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTutorProfileInput>
  }

  export type TutorCategoryCreateWithoutCategoryInput = {
    id?: string
    tutorType: $Enums.TUTORTYPE
    tutorProfile: TutorProfileCreateNestedOneWithoutCategoriesInput
  }

  export type TutorCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    tutorProfileId: string
    tutorType: $Enums.TUTORTYPE
  }

  export type TutorCategoryCreateOrConnectWithoutCategoryInput = {
    where: TutorCategoryWhereUniqueInput
    create: XOR<TutorCategoryCreateWithoutCategoryInput, TutorCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type TutorCategoryCreateManyCategoryInputEnvelope = {
    data: TutorCategoryCreateManyCategoryInput | TutorCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TutorCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TutorCategoryWhereUniqueInput
    update: XOR<TutorCategoryUpdateWithoutCategoryInput, TutorCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<TutorCategoryCreateWithoutCategoryInput, TutorCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type TutorCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TutorCategoryWhereUniqueInput
    data: XOR<TutorCategoryUpdateWithoutCategoryInput, TutorCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type TutorCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: TutorCategoryScalarWhereInput
    data: XOR<TutorCategoryUpdateManyMutationInput, TutorCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TutorProfileCreateWithoutCategoriesInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    admin?: UserCreateNestedOneWithoutVerifiedTutorsInput
    user: UserCreateNestedOneWithoutTutorProfileInput
    availability?: AvailabilitySlotCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateWithoutCategoriesInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    createdAt?: Date | string
    availability?: AvailabilitySlotUncheckedCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileCreateOrConnectWithoutCategoriesInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutCategoriesInput, TutorProfileUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutTutorsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutTutorsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutTutorsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTutorsInput, CategoryUncheckedCreateWithoutTutorsInput>
  }

  export type TutorProfileUpsertWithoutCategoriesInput = {
    update: XOR<TutorProfileUpdateWithoutCategoriesInput, TutorProfileUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TutorProfileCreateWithoutCategoriesInput, TutorProfileUncheckedCreateWithoutCategoriesInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutCategoriesInput, TutorProfileUncheckedUpdateWithoutCategoriesInput>
  }

  export type TutorProfileUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneWithoutVerifiedTutorsNestedInput
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorProfileNestedInput
  }

  export type CategoryUpsertWithoutTutorsInput = {
    update: XOR<CategoryUpdateWithoutTutorsInput, CategoryUncheckedUpdateWithoutTutorsInput>
    create: XOR<CategoryCreateWithoutTutorsInput, CategoryUncheckedCreateWithoutTutorsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTutorsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTutorsInput, CategoryUncheckedUpdateWithoutTutorsInput>
  }

  export type CategoryUpdateWithoutTutorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutTutorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorProfileCreateWithoutAvailabilityInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    admin?: UserCreateNestedOneWithoutVerifiedTutorsInput
    user: UserCreateNestedOneWithoutTutorProfileInput
    categories?: TutorCategoryCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    createdAt?: Date | string
    categories?: TutorCategoryUncheckedCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileCreateOrConnectWithoutAvailabilityInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutAvailabilityInput, TutorProfileUncheckedCreateWithoutAvailabilityInput>
  }

  export type BookingCreateWithoutAvailabilitySlotInput = {
    id?: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    tutorProfile: TutorProfileCreateNestedOneWithoutBookingsInput
    studentProfile: StudentProfileCreateNestedOneWithoutBookingsInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutAvailabilitySlotInput = {
    id?: string
    tutorProfileId: string
    studentProfileId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutAvailabilitySlotInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAvailabilitySlotInput, BookingUncheckedCreateWithoutAvailabilitySlotInput>
  }

  export type TutorProfileUpsertWithoutAvailabilityInput = {
    update: XOR<TutorProfileUpdateWithoutAvailabilityInput, TutorProfileUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<TutorProfileCreateWithoutAvailabilityInput, TutorProfileUncheckedCreateWithoutAvailabilityInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutAvailabilityInput, TutorProfileUncheckedUpdateWithoutAvailabilityInput>
  }

  export type TutorProfileUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneWithoutVerifiedTutorsNestedInput
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    categories?: TutorCategoryUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TutorCategoryUncheckedUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorProfileNestedInput
  }

  export type BookingUpsertWithoutAvailabilitySlotInput = {
    update: XOR<BookingUpdateWithoutAvailabilitySlotInput, BookingUncheckedUpdateWithoutAvailabilitySlotInput>
    create: XOR<BookingCreateWithoutAvailabilitySlotInput, BookingUncheckedCreateWithoutAvailabilitySlotInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutAvailabilitySlotInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutAvailabilitySlotInput, BookingUncheckedUpdateWithoutAvailabilitySlotInput>
  }

  export type BookingUpdateWithoutAvailabilitySlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutBookingsNestedInput
    studentProfile?: StudentProfileUpdateOneRequiredWithoutBookingsNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutAvailabilitySlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type TutorProfileCreateWithoutBookingsInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    admin?: UserCreateNestedOneWithoutVerifiedTutorsInput
    user: UserCreateNestedOneWithoutTutorProfileInput
    categories?: TutorCategoryCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    createdAt?: Date | string
    categories?: TutorCategoryUncheckedCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotUncheckedCreateNestedManyWithoutTutorProfileInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileCreateOrConnectWithoutBookingsInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutBookingsInput, TutorProfileUncheckedCreateWithoutBookingsInput>
  }

  export type StudentProfileCreateWithoutBookingsInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutBookingsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutBookingsInput, StudentProfileUncheckedCreateWithoutBookingsInput>
  }

  export type AvailabilitySlotCreateWithoutBookingInput = {
    id?: string
    dayOfWeek: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AVAILABILITYSTATUS
    createdAt?: Date | string
    tutorProfile: TutorProfileCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilitySlotUncheckedCreateWithoutBookingInput = {
    id?: string
    tutorProfileId: string
    dayOfWeek: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AVAILABILITYSTATUS
    createdAt?: Date | string
  }

  export type AvailabilitySlotCreateOrConnectWithoutBookingInput = {
    where: AvailabilitySlotWhereUniqueInput
    create: XOR<AvailabilitySlotCreateWithoutBookingInput, AvailabilitySlotUncheckedCreateWithoutBookingInput>
  }

  export type ReviewCreateWithoutBookingInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    student: StudentProfileCreateNestedOneWithoutReviewsInput
    tutorProfile: TutorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    id?: string
    studentId: string
    tutorProfileId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type TutorProfileUpsertWithoutBookingsInput = {
    update: XOR<TutorProfileUpdateWithoutBookingsInput, TutorProfileUncheckedUpdateWithoutBookingsInput>
    create: XOR<TutorProfileCreateWithoutBookingsInput, TutorProfileUncheckedCreateWithoutBookingsInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutBookingsInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutBookingsInput, TutorProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type TutorProfileUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneWithoutVerifiedTutorsNestedInput
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    categories?: TutorCategoryUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TutorCategoryUncheckedUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorProfileNestedInput
  }

  export type StudentProfileUpsertWithoutBookingsInput = {
    update: XOR<StudentProfileUpdateWithoutBookingsInput, StudentProfileUncheckedUpdateWithoutBookingsInput>
    create: XOR<StudentProfileCreateWithoutBookingsInput, StudentProfileUncheckedCreateWithoutBookingsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutBookingsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutBookingsInput, StudentProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type StudentProfileUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AvailabilitySlotUpsertWithoutBookingInput = {
    update: XOR<AvailabilitySlotUpdateWithoutBookingInput, AvailabilitySlotUncheckedUpdateWithoutBookingInput>
    create: XOR<AvailabilitySlotCreateWithoutBookingInput, AvailabilitySlotUncheckedCreateWithoutBookingInput>
    where?: AvailabilitySlotWhereInput
  }

  export type AvailabilitySlotUpdateToOneWithWhereWithoutBookingInput = {
    where?: AvailabilitySlotWhereInput
    data: XOR<AvailabilitySlotUpdateWithoutBookingInput, AvailabilitySlotUncheckedUpdateWithoutBookingInput>
  }

  export type AvailabilitySlotUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithoutBookingInput = {
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutBookingInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentProfileUpdateOneRequiredWithoutReviewsNestedInput
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutReviewInput = {
    id?: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
    tutorProfile: TutorProfileCreateNestedOneWithoutBookingsInput
    studentProfile: StudentProfileCreateNestedOneWithoutBookingsInput
    availabilitySlot: AvailabilitySlotCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    id?: string
    tutorProfileId: string
    studentProfileId: string
    availabilitySlotId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type StudentProfileCreateWithoutReviewsInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutStudentProfileInput
    user: UserCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    schoolOrCollege?: string | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileCreateOrConnectWithoutReviewsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutReviewsInput, StudentProfileUncheckedCreateWithoutReviewsInput>
  }

  export type TutorProfileCreateWithoutReviewsInput = {
    id?: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    admin?: UserCreateNestedOneWithoutVerifiedTutorsInput
    user: UserCreateNestedOneWithoutTutorProfileInput
    categories?: TutorCategoryCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    createdAt?: Date | string
    categories?: TutorCategoryUncheckedCreateNestedManyWithoutTutorProfileInput
    availability?: AvailabilitySlotUncheckedCreateNestedManyWithoutTutorProfileInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileCreateOrConnectWithoutReviewsInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutBookingsNestedInput
    studentProfile?: StudentProfileUpdateOneRequiredWithoutBookingsNestedInput
    availabilitySlot?: AvailabilitySlotUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProfileUpsertWithoutReviewsInput = {
    update: XOR<StudentProfileUpdateWithoutReviewsInput, StudentProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<StudentProfileCreateWithoutReviewsInput, StudentProfileUncheckedCreateWithoutReviewsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutReviewsInput, StudentProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type StudentProfileUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutStudentProfileNestedInput
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolOrCollege?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type TutorProfileUpsertWithoutReviewsInput = {
    update: XOR<TutorProfileUpdateWithoutReviewsInput, TutorProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutReviewsInput, TutorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type TutorProfileUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneWithoutVerifiedTutorsNestedInput
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    categories?: TutorCategoryUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TutorCategoryUncheckedUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileCreateManyAdminInput = {
    id?: string
    userId: string
    profilePicture?: string | null
    bio?: string | null
    phone?: string | null
    hourlyRate: number
    experience: number
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TutorProfileUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    categories?: TutorCategoryUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TutorCategoryUncheckedUpdateManyWithoutTutorProfileNestedInput
    availability?: AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTutorProfileNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyStudentProfileInput = {
    id?: string
    tutorProfileId: string
    availabilitySlotId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReviewCreateManyStudentInput = {
    id?: string
    bookingId: string
    tutorProfileId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutBookingsNestedInput
    availabilitySlot?: AvailabilitySlotUpdateOneRequiredWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorCategoryCreateManyTutorProfileInput = {
    id?: string
    categoryId: string
    tutorType: $Enums.TUTORTYPE
  }

  export type AvailabilitySlotCreateManyTutorProfileInput = {
    id?: string
    dayOfWeek: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AVAILABILITYSTATUS
    createdAt?: Date | string
  }

  export type BookingCreateManyTutorProfileInput = {
    id?: string
    studentProfileId: string
    availabilitySlotId: string
    paymentAmount: number
    paymentStatus: $Enums.PAYMENTSTATUS
    paymentMethod?: string | null
    transactionId?: string | null
    status?: $Enums.BOOKINGSTATUS
    bookedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReviewCreateManyTutorProfileInput = {
    id?: string
    bookingId: string
    studentId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type TutorCategoryUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
    category?: CategoryUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type TutorCategoryUncheckedUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
  }

  export type TutorCategoryUncheckedUpdateManyWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
  }

  export type AvailabilitySlotUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutAvailabilitySlotNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateOneWithoutAvailabilitySlotNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAVAILABILITYSTATUSFieldUpdateOperationsInput | $Enums.AVAILABILITYSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentProfile?: StudentProfileUpdateOneRequiredWithoutBookingsNestedInput
    availabilitySlot?: AvailabilitySlotUpdateOneRequiredWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPAYMENTSTATUSFieldUpdateOperationsInput | $Enums.PAYMENTSTATUS
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBOOKINGSTATUSFieldUpdateOperationsInput | $Enums.BOOKINGSTATUS
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    student?: StudentProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorCategoryCreateManyCategoryInput = {
    id?: string
    tutorProfileId: string
    tutorType: $Enums.TUTORTYPE
  }

  export type TutorCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type TutorCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
  }

  export type TutorCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutorProfileId?: StringFieldUpdateOperationsInput | string
    tutorType?: EnumTUTORTYPEFieldUpdateOperationsInput | $Enums.TUTORTYPE
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