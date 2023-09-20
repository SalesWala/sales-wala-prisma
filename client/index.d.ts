
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type PlanPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Plan"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    planType: PlanType
    isTrial: boolean
    isAdFree: boolean
    maxParticipants: number
  }, ExtArgs["result"]["plan"]>
  composites: {}
}

/**
 * Model Plan
 * 
 */
export type Plan = runtime.Types.DefaultSelection<PlanPayload>
export type PlanPurchasePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "PlanPurchase"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    transactionHash: string
    modeOfPayment: string
    amountInINR: string
    amountInPaidCurrency: string
    paymentCurrencyName: string
    isConfirmed: boolean
    planId: string
    organisationId: string
  }, ExtArgs["result"]["planPurchase"]>
  composites: {}
}

/**
 * Model PlanPurchase
 * 
 */
export type PlanPurchase = runtime.Types.DefaultSelection<PlanPurchasePayload>
export type OrganisationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Organisation"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    /**
     * @DtoReadOnly
     */
    createdAt: Date
    /**
     * @DtoReadOnly
     */
    updatedAt: Date
    email: string
    name: string
    address: string | null
    metadata: string | null
    activePlanId: string | null
  }, ExtArgs["result"]["organisation"]>
  composites: {}
}

/**
 * Model Organisation
 * 
 */
export type Organisation = runtime.Types.DefaultSelection<OrganisationPayload>
export type SalesWalaAdminPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SalesWalaAdmin"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    firstname: string | null
    lastname: string | null
    metadata: string | null
  }, ExtArgs["result"]["salesWalaAdmin"]>
  composites: {}
}

/**
 * Model SalesWalaAdmin
 * 
 */
export type SalesWalaAdmin = runtime.Types.DefaultSelection<SalesWalaAdminPayload>
export type SalesWalaAppUserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SalesWalaAppUser"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    firstname: string | null
    lastname: string | null
    role: UserRole
    organisationId: string | null
    metadata: string | null
    isVerified: boolean
    deviceId: string | null
    isEnabled: boolean
  }, ExtArgs["result"]["salesWalaAppUser"]>
  composites: {}
}

/**
 * Model SalesWalaAppUser
 * 
 */
export type SalesWalaAppUser = runtime.Types.DefaultSelection<SalesWalaAppUserPayload>
export type ProductsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Products"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    defaultPrice: string
    metadata: string | null
    organisationId: string | null
    isDisabled: boolean
  }, ExtArgs["result"]["products"]>
  composites: {}
}

/**
 * Model Products
 * 
 */
export type Products = runtime.Types.DefaultSelection<ProductsPayload>
export type VendorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Vendor"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    creatorId: string | null
    organisationId: string | null
  }, ExtArgs["result"]["vendor"]>
  composites: {}
}

/**
 * Model Vendor
 * 
 */
export type Vendor = runtime.Types.DefaultSelection<VendorPayload>
export type QuotationParticularsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "QuotationParticulars"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    productId: string | null
    metadata: string | null
    quotationId: string | null
  }, ExtArgs["result"]["quotationParticulars"]>
  composites: {}
}

/**
 * Model QuotationParticulars
 * 
 */
export type QuotationParticulars = runtime.Types.DefaultSelection<QuotationParticularsPayload>
export type QuotationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Quotation"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    creatorId: string | null
    organisationId: string
    vendorId: string
    hasConvertedToOrder: boolean
    orderState: OrderStatus
  }, ExtArgs["result"]["quotation"]>
  composites: {}
}

/**
 * Model Quotation
 * 
 */
export type Quotation = runtime.Types.DefaultSelection<QuotationPayload>
export type AttendancePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Attendance"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    punchInTime: Date
    punchOutTime: Date | null
    userID: string | null
    attendanceStatus: AttendanceStatus
  }, ExtArgs["result"]["attendance"]>
  composites: {}
}

/**
 * Model Attendance
 * 
 */
export type Attendance = runtime.Types.DefaultSelection<AttendancePayload>
export type LocationLogPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "LocationLog"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    location: string | null
    attendanceId: string
  }, ExtArgs["result"]["locationLog"]>
  composites: {}
}

/**
 * Model LocationLog
 * 
 */
export type LocationLog = runtime.Types.DefaultSelection<LocationLogPayload>
export type TaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Task"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    creatorId: string
    assignedToId: string
    status: TaskStatus
  }, ExtArgs["result"]["task"]>
  composites: {}
}

/**
 * Model Task
 * 
 */
export type Task = runtime.Types.DefaultSelection<TaskPayload>
export type ExpensePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Expense"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    amount: string
    metadata: string | null
    paymentStatus: ExpensePaymentStatus
    creatorId: string | null
  }, ExtArgs["result"]["expense"]>
  composites: {}
}

/**
 * Model Expense
 * 
 */
export type Expense = runtime.Types.DefaultSelection<ExpensePayload>
export type AnnouncementPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Announcement"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    organisationId: string | null
  }, ExtArgs["result"]["announcement"]>
  composites: {}
}

/**
 * Model Announcement
 * 
 */
export type Announcement = runtime.Types.DefaultSelection<AnnouncementPayload>

/**
 * Enums
 */

export const PlanType: {
  FREEMIUM: 'FREEMIUM',
  PREMIUM: 'PREMIUM'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const UserRole: {
  SALES_MANAGER: 'SALES_MANAGER',
  SALES_PERSON: 'SALES_PERSON'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const OrderStatus: {
  NONE: 'NONE',
  PENDING: 'PENDING',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LEAVE: 'LEAVE',
  HOLIDAY: 'HOLIDAY'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const TaskStatus: {
  PENDING: 'PENDING',
  ONGOING: 'ONGOING',
  FINISHED: 'FINISHED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const ExpensePaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

export type ExpensePaymentStatus = (typeof ExpensePaymentStatus)[keyof typeof ExpensePaymentStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Plans
 * const plans = await prisma.plan.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Plans
   * const plans = await prisma.plan.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.planPurchase`: Exposes CRUD operations for the **PlanPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanPurchases
    * const planPurchases = await prisma.planPurchase.findMany()
    * ```
    */
  get planPurchase(): Prisma.PlanPurchaseDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.organisation`: Exposes CRUD operations for the **Organisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisation.findMany()
    * ```
    */
  get organisation(): Prisma.OrganisationDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.salesWalaAdmin`: Exposes CRUD operations for the **SalesWalaAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesWalaAdmins
    * const salesWalaAdmins = await prisma.salesWalaAdmin.findMany()
    * ```
    */
  get salesWalaAdmin(): Prisma.SalesWalaAdminDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.salesWalaAppUser`: Exposes CRUD operations for the **SalesWalaAppUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesWalaAppUsers
    * const salesWalaAppUsers = await prisma.salesWalaAppUser.findMany()
    * ```
    */
  get salesWalaAppUser(): Prisma.SalesWalaAppUserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.quotationParticulars`: Exposes CRUD operations for the **QuotationParticulars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuotationParticulars
    * const quotationParticulars = await prisma.quotationParticulars.findMany()
    * ```
    */
  get quotationParticulars(): Prisma.QuotationParticularsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.quotation`: Exposes CRUD operations for the **Quotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotations
    * const quotations = await prisma.quotation.findMany()
    * ```
    */
  get quotation(): Prisma.QuotationDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.locationLog`: Exposes CRUD operations for the **LocationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationLogs
    * const locationLogs = await prisma.locationLog.findMany()
    * ```
    */
  get locationLog(): Prisma.LocationLogDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Plan: 'Plan',
    PlanPurchase: 'PlanPurchase',
    Organisation: 'Organisation',
    SalesWalaAdmin: 'SalesWalaAdmin',
    SalesWalaAppUser: 'SalesWalaAppUser',
    Products: 'Products',
    Vendor: 'Vendor',
    QuotationParticulars: 'QuotationParticulars',
    Quotation: 'Quotation',
    Attendance: 'Attendance',
    LocationLog: 'LocationLog',
    Task: 'Task',
    Expense: 'Expense',
    Announcement: 'Announcement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'plan' | 'planPurchase' | 'organisation' | 'salesWalaAdmin' | 'salesWalaAppUser' | 'products' | 'vendor' | 'quotationParticulars' | 'quotation' | 'attendance' | 'locationLog' | 'task' | 'expense' | 'announcement'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Plan: {
        payload: PlanPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>,
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      PlanPurchase: {
        payload: PlanPurchasePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PlanPurchaseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanPurchaseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload>
          }
          findFirst: {
            args: Prisma.PlanPurchaseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanPurchaseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload>
          }
          findMany: {
            args: Prisma.PlanPurchaseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload>[]
          }
          create: {
            args: Prisma.PlanPurchaseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload>
          }
          createMany: {
            args: Prisma.PlanPurchaseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlanPurchaseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload>
          }
          update: {
            args: Prisma.PlanPurchaseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload>
          }
          deleteMany: {
            args: Prisma.PlanPurchaseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlanPurchaseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlanPurchaseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PlanPurchasePayload>
          }
          aggregate: {
            args: Prisma.PlanPurchaseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlanPurchase>
          }
          groupBy: {
            args: Prisma.PlanPurchaseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlanPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanPurchaseCountArgs<ExtArgs>,
            result: $Utils.Optional<PlanPurchaseCountAggregateOutputType> | number
          }
        }
      }
      Organisation: {
        payload: OrganisationPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.OrganisationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganisationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload>
          }
          findFirst: {
            args: Prisma.OrganisationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganisationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload>
          }
          findMany: {
            args: Prisma.OrganisationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload>[]
          }
          create: {
            args: Prisma.OrganisationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload>
          }
          createMany: {
            args: Prisma.OrganisationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrganisationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload>
          }
          update: {
            args: Prisma.OrganisationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload>
          }
          deleteMany: {
            args: Prisma.OrganisationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrganisationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrganisationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrganisationPayload>
          }
          aggregate: {
            args: Prisma.OrganisationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrganisation>
          }
          groupBy: {
            args: Prisma.OrganisationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrganisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganisationCountArgs<ExtArgs>,
            result: $Utils.Optional<OrganisationCountAggregateOutputType> | number
          }
        }
      }
      SalesWalaAdmin: {
        payload: SalesWalaAdminPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SalesWalaAdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesWalaAdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload>
          }
          findFirst: {
            args: Prisma.SalesWalaAdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesWalaAdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload>
          }
          findMany: {
            args: Prisma.SalesWalaAdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload>[]
          }
          create: {
            args: Prisma.SalesWalaAdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload>
          }
          createMany: {
            args: Prisma.SalesWalaAdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SalesWalaAdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload>
          }
          update: {
            args: Prisma.SalesWalaAdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload>
          }
          deleteMany: {
            args: Prisma.SalesWalaAdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SalesWalaAdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SalesWalaAdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAdminPayload>
          }
          aggregate: {
            args: Prisma.SalesWalaAdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSalesWalaAdmin>
          }
          groupBy: {
            args: Prisma.SalesWalaAdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SalesWalaAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesWalaAdminCountArgs<ExtArgs>,
            result: $Utils.Optional<SalesWalaAdminCountAggregateOutputType> | number
          }
        }
      }
      SalesWalaAppUser: {
        payload: SalesWalaAppUserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SalesWalaAppUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesWalaAppUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload>
          }
          findFirst: {
            args: Prisma.SalesWalaAppUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesWalaAppUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload>
          }
          findMany: {
            args: Prisma.SalesWalaAppUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload>[]
          }
          create: {
            args: Prisma.SalesWalaAppUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload>
          }
          createMany: {
            args: Prisma.SalesWalaAppUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SalesWalaAppUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload>
          }
          update: {
            args: Prisma.SalesWalaAppUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload>
          }
          deleteMany: {
            args: Prisma.SalesWalaAppUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SalesWalaAppUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SalesWalaAppUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesWalaAppUserPayload>
          }
          aggregate: {
            args: Prisma.SalesWalaAppUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSalesWalaAppUser>
          }
          groupBy: {
            args: Prisma.SalesWalaAppUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SalesWalaAppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesWalaAppUserCountArgs<ExtArgs>,
            result: $Utils.Optional<SalesWalaAppUserCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: ProductsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: VendorPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>,
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      QuotationParticulars: {
        payload: QuotationParticularsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.QuotationParticularsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationParticularsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload>
          }
          findFirst: {
            args: Prisma.QuotationParticularsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationParticularsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload>
          }
          findMany: {
            args: Prisma.QuotationParticularsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload>[]
          }
          create: {
            args: Prisma.QuotationParticularsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload>
          }
          createMany: {
            args: Prisma.QuotationParticularsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuotationParticularsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload>
          }
          update: {
            args: Prisma.QuotationParticularsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload>
          }
          deleteMany: {
            args: Prisma.QuotationParticularsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationParticularsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuotationParticularsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationParticularsPayload>
          }
          aggregate: {
            args: Prisma.QuotationParticularsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuotationParticulars>
          }
          groupBy: {
            args: Prisma.QuotationParticularsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuotationParticularsGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationParticularsCountArgs<ExtArgs>,
            result: $Utils.Optional<QuotationParticularsCountAggregateOutputType> | number
          }
        }
      }
      Quotation: {
        payload: QuotationPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.QuotationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload>
          }
          findFirst: {
            args: Prisma.QuotationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload>
          }
          findMany: {
            args: Prisma.QuotationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload>[]
          }
          create: {
            args: Prisma.QuotationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload>
          }
          createMany: {
            args: Prisma.QuotationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuotationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload>
          }
          update: {
            args: Prisma.QuotationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload>
          }
          deleteMany: {
            args: Prisma.QuotationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuotationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuotationPayload>
          }
          aggregate: {
            args: Prisma.QuotationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuotation>
          }
          groupBy: {
            args: Prisma.QuotationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationCountArgs<ExtArgs>,
            result: $Utils.Optional<QuotationCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: AttendancePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>,
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      LocationLog: {
        payload: LocationLogPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.LocationLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload>
          }
          findFirst: {
            args: Prisma.LocationLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload>
          }
          findMany: {
            args: Prisma.LocationLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload>[]
          }
          create: {
            args: Prisma.LocationLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload>
          }
          createMany: {
            args: Prisma.LocationLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LocationLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload>
          }
          update: {
            args: Prisma.LocationLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload>
          }
          deleteMany: {
            args: Prisma.LocationLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LocationLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LocationLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LocationLogPayload>
          }
          aggregate: {
            args: Prisma.LocationLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocationLog>
          }
          groupBy: {
            args: Prisma.LocationLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationLogCountArgs<ExtArgs>,
            result: $Utils.Optional<LocationLogCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: TaskPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: ExpensePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>,
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: AnnouncementPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>,
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Model Plan
   */


  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    maxParticipants: number | null
  }

  export type PlanSumAggregateOutputType = {
    maxParticipants: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    planType: PlanType | null
    isTrial: boolean | null
    isAdFree: boolean | null
    maxParticipants: number | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    planType: PlanType | null
    isTrial: boolean | null
    isAdFree: boolean | null
    maxParticipants: number | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    planType: number
    isTrial: number
    isAdFree: number
    maxParticipants: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    maxParticipants?: true
  }

  export type PlanSumAggregateInputType = {
    maxParticipants?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    planType?: true
    isTrial?: true
    isAdFree?: true
    maxParticipants?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    planType?: true
    isTrial?: true
    isAdFree?: true
    maxParticipants?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    planType?: true
    isTrial?: true
    isAdFree?: true
    maxParticipants?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: Enumerable<PlanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: Enumerable<PlanOrderByWithAggregationInput>
    by: PlanScalarFieldEnum[]
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }


  export type PlanGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    planType: PlanType
    isTrial: boolean
    isAdFree: boolean
    maxParticipants: number
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    planType?: boolean
    isTrial?: boolean
    isAdFree?: boolean
    maxParticipants?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    planType?: boolean
    isTrial?: boolean
    isAdFree?: boolean
    maxParticipants?: boolean
  }


  type PlanGetPayload<S extends boolean | null | undefined | PlanArgs> = $Types.GetResult<PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlanFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Plan'> extends True ? Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlanFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Plan'> extends True ? Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PlanPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
    **/
    create<T extends PlanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanCreateArgs<ExtArgs>>
    ): Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Plans.
     *     @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     *     @example
     *     // Create many Plans
     *     const plan = await prisma.plan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
    **/
    delete<T extends PlanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>
    ): Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>
    ): Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
    **/
    upsert<T extends PlanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>
    ): Prisma__PlanClient<$Types.GetResult<PlanPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Plan base type for findUnique actions
   */
  export type PlanFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUnique
   */
  export interface PlanFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PlanFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan base type for findFirst actions
   */
  export type PlanFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: Enumerable<PlanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: Enumerable<PlanScalarFieldEnum>
  }

  /**
   * Plan findFirst
   */
  export interface PlanFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PlanFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: Enumerable<PlanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: Enumerable<PlanScalarFieldEnum>
  }


  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: Enumerable<PlanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: Enumerable<PlanScalarFieldEnum>
  }


  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }


  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: Enumerable<PlanCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }


  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }


  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }


  /**
   * Plan without action
   */
  export type PlanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
  }



  /**
   * Model PlanPurchase
   */


  export type AggregatePlanPurchase = {
    _count: PlanPurchaseCountAggregateOutputType | null
    _min: PlanPurchaseMinAggregateOutputType | null
    _max: PlanPurchaseMaxAggregateOutputType | null
  }

  export type PlanPurchaseMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    transactionHash: string | null
    modeOfPayment: string | null
    amountInINR: string | null
    amountInPaidCurrency: string | null
    paymentCurrencyName: string | null
    isConfirmed: boolean | null
    planId: string | null
    organisationId: string | null
  }

  export type PlanPurchaseMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    transactionHash: string | null
    modeOfPayment: string | null
    amountInINR: string | null
    amountInPaidCurrency: string | null
    paymentCurrencyName: string | null
    isConfirmed: boolean | null
    planId: string | null
    organisationId: string | null
  }

  export type PlanPurchaseCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    transactionHash: number
    modeOfPayment: number
    amountInINR: number
    amountInPaidCurrency: number
    paymentCurrencyName: number
    isConfirmed: number
    planId: number
    organisationId: number
    _all: number
  }


  export type PlanPurchaseMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    transactionHash?: true
    modeOfPayment?: true
    amountInINR?: true
    amountInPaidCurrency?: true
    paymentCurrencyName?: true
    isConfirmed?: true
    planId?: true
    organisationId?: true
  }

  export type PlanPurchaseMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    transactionHash?: true
    modeOfPayment?: true
    amountInINR?: true
    amountInPaidCurrency?: true
    paymentCurrencyName?: true
    isConfirmed?: true
    planId?: true
    organisationId?: true
  }

  export type PlanPurchaseCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    transactionHash?: true
    modeOfPayment?: true
    amountInINR?: true
    amountInPaidCurrency?: true
    paymentCurrencyName?: true
    isConfirmed?: true
    planId?: true
    organisationId?: true
    _all?: true
  }

  export type PlanPurchaseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanPurchase to aggregate.
     */
    where?: PlanPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanPurchases to fetch.
     */
    orderBy?: Enumerable<PlanPurchaseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanPurchases
    **/
    _count?: true | PlanPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanPurchaseMaxAggregateInputType
  }

  export type GetPlanPurchaseAggregateType<T extends PlanPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanPurchase[P]>
      : GetScalarType<T[P], AggregatePlanPurchase[P]>
  }




  export type PlanPurchaseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlanPurchaseWhereInput
    orderBy?: Enumerable<PlanPurchaseOrderByWithAggregationInput>
    by: PlanPurchaseScalarFieldEnum[]
    having?: PlanPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanPurchaseCountAggregateInputType | true
    _min?: PlanPurchaseMinAggregateInputType
    _max?: PlanPurchaseMaxAggregateInputType
  }


  export type PlanPurchaseGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    transactionHash: string
    modeOfPayment: string
    amountInINR: string
    amountInPaidCurrency: string
    paymentCurrencyName: string
    isConfirmed: boolean
    planId: string
    organisationId: string
    _count: PlanPurchaseCountAggregateOutputType | null
    _min: PlanPurchaseMinAggregateOutputType | null
    _max: PlanPurchaseMaxAggregateOutputType | null
  }

  type GetPlanPurchaseGroupByPayload<T extends PlanPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PlanPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PlanPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PlanPurchaseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactionHash?: boolean
    modeOfPayment?: boolean
    amountInINR?: boolean
    amountInPaidCurrency?: boolean
    paymentCurrencyName?: boolean
    isConfirmed?: boolean
    planId?: boolean
    organisationId?: boolean
  }, ExtArgs["result"]["planPurchase"]>

  export type PlanPurchaseSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactionHash?: boolean
    modeOfPayment?: boolean
    amountInINR?: boolean
    amountInPaidCurrency?: boolean
    paymentCurrencyName?: boolean
    isConfirmed?: boolean
    planId?: boolean
    organisationId?: boolean
  }


  type PlanPurchaseGetPayload<S extends boolean | null | undefined | PlanPurchaseArgs> = $Types.GetResult<PlanPurchasePayload, S>

  type PlanPurchaseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PlanPurchaseFindManyArgs, 'select' | 'include'> & {
      select?: PlanPurchaseCountAggregateInputType | true
    }

  export interface PlanPurchaseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanPurchase'], meta: { name: 'PlanPurchase' } }
    /**
     * Find zero or one PlanPurchase that matches the filter.
     * @param {PlanPurchaseFindUniqueArgs} args - Arguments to find a PlanPurchase
     * @example
     * // Get one PlanPurchase
     * const planPurchase = await prisma.planPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlanPurchaseFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlanPurchaseFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PlanPurchase'> extends True ? Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PlanPurchase that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlanPurchaseFindUniqueOrThrowArgs} args - Arguments to find a PlanPurchase
     * @example
     * // Get one PlanPurchase
     * const planPurchase = await prisma.planPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlanPurchaseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanPurchaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PlanPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanPurchaseFindFirstArgs} args - Arguments to find a PlanPurchase
     * @example
     * // Get one PlanPurchase
     * const planPurchase = await prisma.planPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlanPurchaseFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlanPurchaseFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PlanPurchase'> extends True ? Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PlanPurchase that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanPurchaseFindFirstOrThrowArgs} args - Arguments to find a PlanPurchase
     * @example
     * // Get one PlanPurchase
     * const planPurchase = await prisma.planPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlanPurchaseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanPurchaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PlanPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanPurchaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanPurchases
     * const planPurchases = await prisma.planPurchase.findMany()
     * 
     * // Get first 10 PlanPurchases
     * const planPurchases = await prisma.planPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planPurchaseWithIdOnly = await prisma.planPurchase.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlanPurchaseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanPurchaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PlanPurchase.
     * @param {PlanPurchaseCreateArgs} args - Arguments to create a PlanPurchase.
     * @example
     * // Create one PlanPurchase
     * const PlanPurchase = await prisma.planPurchase.create({
     *   data: {
     *     // ... data to create a PlanPurchase
     *   }
     * })
     * 
    **/
    create<T extends PlanPurchaseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanPurchaseCreateArgs<ExtArgs>>
    ): Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PlanPurchases.
     *     @param {PlanPurchaseCreateManyArgs} args - Arguments to create many PlanPurchases.
     *     @example
     *     // Create many PlanPurchases
     *     const planPurchase = await prisma.planPurchase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlanPurchaseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanPurchaseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlanPurchase.
     * @param {PlanPurchaseDeleteArgs} args - Arguments to delete one PlanPurchase.
     * @example
     * // Delete one PlanPurchase
     * const PlanPurchase = await prisma.planPurchase.delete({
     *   where: {
     *     // ... filter to delete one PlanPurchase
     *   }
     * })
     * 
    **/
    delete<T extends PlanPurchaseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlanPurchaseDeleteArgs<ExtArgs>>
    ): Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PlanPurchase.
     * @param {PlanPurchaseUpdateArgs} args - Arguments to update one PlanPurchase.
     * @example
     * // Update one PlanPurchase
     * const planPurchase = await prisma.planPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlanPurchaseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanPurchaseUpdateArgs<ExtArgs>>
    ): Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PlanPurchases.
     * @param {PlanPurchaseDeleteManyArgs} args - Arguments to filter PlanPurchases to delete.
     * @example
     * // Delete a few PlanPurchases
     * const { count } = await prisma.planPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlanPurchaseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanPurchaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanPurchases
     * const planPurchase = await prisma.planPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlanPurchaseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlanPurchaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlanPurchase.
     * @param {PlanPurchaseUpsertArgs} args - Arguments to update or create a PlanPurchase.
     * @example
     * // Update or create a PlanPurchase
     * const planPurchase = await prisma.planPurchase.upsert({
     *   create: {
     *     // ... data to create a PlanPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanPurchase we want to update
     *   }
     * })
    **/
    upsert<T extends PlanPurchaseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlanPurchaseUpsertArgs<ExtArgs>>
    ): Prisma__PlanPurchaseClient<$Types.GetResult<PlanPurchasePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PlanPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanPurchaseCountArgs} args - Arguments to filter PlanPurchases to count.
     * @example
     * // Count the number of PlanPurchases
     * const count = await prisma.planPurchase.count({
     *   where: {
     *     // ... the filter for the PlanPurchases we want to count
     *   }
     * })
    **/
    count<T extends PlanPurchaseCountArgs>(
      args?: Subset<T, PlanPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanPurchaseAggregateArgs>(args: Subset<T, PlanPurchaseAggregateArgs>): Prisma.PrismaPromise<GetPlanPurchaseAggregateType<T>>

    /**
     * Group by PlanPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanPurchaseGroupByArgs} args - Group by arguments.
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
      T extends PlanPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PlanPurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlanPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlanPurchaseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PlanPurchase base type for findUnique actions
   */
  export type PlanPurchaseFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which PlanPurchase to fetch.
     */
    where: PlanPurchaseWhereUniqueInput
  }

  /**
   * PlanPurchase findUnique
   */
  export interface PlanPurchaseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PlanPurchaseFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PlanPurchase findUniqueOrThrow
   */
  export type PlanPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which PlanPurchase to fetch.
     */
    where: PlanPurchaseWhereUniqueInput
  }


  /**
   * PlanPurchase base type for findFirst actions
   */
  export type PlanPurchaseFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which PlanPurchase to fetch.
     */
    where?: PlanPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanPurchases to fetch.
     */
    orderBy?: Enumerable<PlanPurchaseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanPurchases.
     */
    cursor?: PlanPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanPurchases.
     */
    distinct?: Enumerable<PlanPurchaseScalarFieldEnum>
  }

  /**
   * PlanPurchase findFirst
   */
  export interface PlanPurchaseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PlanPurchaseFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PlanPurchase findFirstOrThrow
   */
  export type PlanPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which PlanPurchase to fetch.
     */
    where?: PlanPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanPurchases to fetch.
     */
    orderBy?: Enumerable<PlanPurchaseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanPurchases.
     */
    cursor?: PlanPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanPurchases.
     */
    distinct?: Enumerable<PlanPurchaseScalarFieldEnum>
  }


  /**
   * PlanPurchase findMany
   */
  export type PlanPurchaseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which PlanPurchases to fetch.
     */
    where?: PlanPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanPurchases to fetch.
     */
    orderBy?: Enumerable<PlanPurchaseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanPurchases.
     */
    cursor?: PlanPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanPurchases.
     */
    skip?: number
    distinct?: Enumerable<PlanPurchaseScalarFieldEnum>
  }


  /**
   * PlanPurchase create
   */
  export type PlanPurchaseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * The data needed to create a PlanPurchase.
     */
    data: XOR<PlanPurchaseCreateInput, PlanPurchaseUncheckedCreateInput>
  }


  /**
   * PlanPurchase createMany
   */
  export type PlanPurchaseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanPurchases.
     */
    data: Enumerable<PlanPurchaseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PlanPurchase update
   */
  export type PlanPurchaseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * The data needed to update a PlanPurchase.
     */
    data: XOR<PlanPurchaseUpdateInput, PlanPurchaseUncheckedUpdateInput>
    /**
     * Choose, which PlanPurchase to update.
     */
    where: PlanPurchaseWhereUniqueInput
  }


  /**
   * PlanPurchase updateMany
   */
  export type PlanPurchaseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanPurchases.
     */
    data: XOR<PlanPurchaseUpdateManyMutationInput, PlanPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which PlanPurchases to update
     */
    where?: PlanPurchaseWhereInput
  }


  /**
   * PlanPurchase upsert
   */
  export type PlanPurchaseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * The filter to search for the PlanPurchase to update in case it exists.
     */
    where: PlanPurchaseWhereUniqueInput
    /**
     * In case the PlanPurchase found by the `where` argument doesn't exist, create a new PlanPurchase with this data.
     */
    create: XOR<PlanPurchaseCreateInput, PlanPurchaseUncheckedCreateInput>
    /**
     * In case the PlanPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanPurchaseUpdateInput, PlanPurchaseUncheckedUpdateInput>
  }


  /**
   * PlanPurchase delete
   */
  export type PlanPurchaseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
    /**
     * Filter which PlanPurchase to delete.
     */
    where: PlanPurchaseWhereUniqueInput
  }


  /**
   * PlanPurchase deleteMany
   */
  export type PlanPurchaseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanPurchases to delete
     */
    where?: PlanPurchaseWhereInput
  }


  /**
   * PlanPurchase without action
   */
  export type PlanPurchaseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanPurchase
     */
    select?: PlanPurchaseSelect<ExtArgs> | null
  }



  /**
   * Model Organisation
   */


  export type AggregateOrganisation = {
    _count: OrganisationCountAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  export type OrganisationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    address: string | null
    metadata: string | null
    activePlanId: string | null
  }

  export type OrganisationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    address: string | null
    metadata: string | null
    activePlanId: string | null
  }

  export type OrganisationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    address: number
    metadata: number
    activePlanId: number
    _all: number
  }


  export type OrganisationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    address?: true
    metadata?: true
    activePlanId?: true
  }

  export type OrganisationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    address?: true
    metadata?: true
    activePlanId?: true
  }

  export type OrganisationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    address?: true
    metadata?: true
    activePlanId?: true
    _all?: true
  }

  export type OrganisationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisation to aggregate.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: Enumerable<OrganisationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organisations
    **/
    _count?: true | OrganisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationMaxAggregateInputType
  }

  export type GetOrganisationAggregateType<T extends OrganisationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisation[P]>
      : GetScalarType<T[P], AggregateOrganisation[P]>
  }




  export type OrganisationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrganisationWhereInput
    orderBy?: Enumerable<OrganisationOrderByWithAggregationInput>
    by: OrganisationScalarFieldEnum[]
    having?: OrganisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationCountAggregateInputType | true
    _min?: OrganisationMinAggregateInputType
    _max?: OrganisationMaxAggregateInputType
  }


  export type OrganisationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string
    address: string | null
    metadata: string | null
    activePlanId: string | null
    _count: OrganisationCountAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  type GetOrganisationGroupByPayload<T extends OrganisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrganisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
        }
      >
    >


  export type OrganisationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    address?: boolean
    metadata?: boolean
    activePlanId?: boolean
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    address?: boolean
    metadata?: boolean
    activePlanId?: boolean
  }


  type OrganisationGetPayload<S extends boolean | null | undefined | OrganisationArgs> = $Types.GetResult<OrganisationPayload, S>

  type OrganisationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OrganisationFindManyArgs, 'select' | 'include'> & {
      select?: OrganisationCountAggregateInputType | true
    }

  export interface OrganisationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organisation'], meta: { name: 'Organisation' } }
    /**
     * Find zero or one Organisation that matches the filter.
     * @param {OrganisationFindUniqueArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganisationFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrganisationFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Organisation'> extends True ? Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Organisation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrganisationFindUniqueOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrganisationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganisationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Organisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganisationFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrganisationFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Organisation'> extends True ? Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Organisation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrganisationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganisationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisation.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organisationWithIdOnly = await prisma.organisation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganisationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganisationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Organisation.
     * @param {OrganisationCreateArgs} args - Arguments to create a Organisation.
     * @example
     * // Create one Organisation
     * const Organisation = await prisma.organisation.create({
     *   data: {
     *     // ... data to create a Organisation
     *   }
     * })
     * 
    **/
    create<T extends OrganisationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganisationCreateArgs<ExtArgs>>
    ): Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Organisations.
     *     @param {OrganisationCreateManyArgs} args - Arguments to create many Organisations.
     *     @example
     *     // Create many Organisations
     *     const organisation = await prisma.organisation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrganisationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganisationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organisation.
     * @param {OrganisationDeleteArgs} args - Arguments to delete one Organisation.
     * @example
     * // Delete one Organisation
     * const Organisation = await prisma.organisation.delete({
     *   where: {
     *     // ... filter to delete one Organisation
     *   }
     * })
     * 
    **/
    delete<T extends OrganisationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrganisationDeleteArgs<ExtArgs>>
    ): Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Organisation.
     * @param {OrganisationUpdateArgs} args - Arguments to update one Organisation.
     * @example
     * // Update one Organisation
     * const organisation = await prisma.organisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganisationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganisationUpdateArgs<ExtArgs>>
    ): Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Organisations.
     * @param {OrganisationDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganisationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganisationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganisationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrganisationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organisation.
     * @param {OrganisationUpsertArgs} args - Arguments to update or create a Organisation.
     * @example
     * // Update or create a Organisation
     * const organisation = await prisma.organisation.upsert({
     *   create: {
     *     // ... data to create a Organisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisation we want to update
     *   }
     * })
    **/
    upsert<T extends OrganisationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrganisationUpsertArgs<ExtArgs>>
    ): Prisma__OrganisationClient<$Types.GetResult<OrganisationPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisation.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends OrganisationCountArgs>(
      args?: Subset<T, OrganisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganisationAggregateArgs>(args: Subset<T, OrganisationAggregateArgs>): Prisma.PrismaPromise<GetOrganisationAggregateType<T>>

    /**
     * Group by Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationGroupByArgs} args - Group by arguments.
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
      T extends OrganisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganisationGroupByArgs['orderBy'] }
        : { orderBy?: OrganisationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrganisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Organisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrganisationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Organisation base type for findUnique actions
   */
  export type OrganisationFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation findUnique
   */
  export interface OrganisationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrganisationFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Organisation findUniqueOrThrow
   */
  export type OrganisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
  }


  /**
   * Organisation base type for findFirst actions
   */
  export type OrganisationFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: Enumerable<OrganisationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: Enumerable<OrganisationScalarFieldEnum>
  }

  /**
   * Organisation findFirst
   */
  export interface OrganisationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrganisationFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Organisation findFirstOrThrow
   */
  export type OrganisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: Enumerable<OrganisationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: Enumerable<OrganisationScalarFieldEnum>
  }


  /**
   * Organisation findMany
   */
  export type OrganisationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: Enumerable<OrganisationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    distinct?: Enumerable<OrganisationScalarFieldEnum>
  }


  /**
   * Organisation create
   */
  export type OrganisationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * The data needed to create a Organisation.
     */
    data: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
  }


  /**
   * Organisation createMany
   */
  export type OrganisationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organisations.
     */
    data: Enumerable<OrganisationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Organisation update
   */
  export type OrganisationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * The data needed to update a Organisation.
     */
    data: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
    /**
     * Choose, which Organisation to update.
     */
    where: OrganisationWhereUniqueInput
  }


  /**
   * Organisation updateMany
   */
  export type OrganisationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationWhereInput
  }


  /**
   * Organisation upsert
   */
  export type OrganisationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * The filter to search for the Organisation to update in case it exists.
     */
    where: OrganisationWhereUniqueInput
    /**
     * In case the Organisation found by the `where` argument doesn't exist, create a new Organisation with this data.
     */
    create: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
    /**
     * In case the Organisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
  }


  /**
   * Organisation delete
   */
  export type OrganisationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Filter which Organisation to delete.
     */
    where: OrganisationWhereUniqueInput
  }


  /**
   * Organisation deleteMany
   */
  export type OrganisationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisations to delete
     */
    where?: OrganisationWhereInput
  }


  /**
   * Organisation without action
   */
  export type OrganisationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
  }



  /**
   * Model SalesWalaAdmin
   */


  export type AggregateSalesWalaAdmin = {
    _count: SalesWalaAdminCountAggregateOutputType | null
    _min: SalesWalaAdminMinAggregateOutputType | null
    _max: SalesWalaAdminMaxAggregateOutputType | null
  }

  export type SalesWalaAdminMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    metadata: string | null
  }

  export type SalesWalaAdminMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    metadata: string | null
  }

  export type SalesWalaAdminCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    firstname: number
    lastname: number
    metadata: number
    _all: number
  }


  export type SalesWalaAdminMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    metadata?: true
  }

  export type SalesWalaAdminMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    metadata?: true
  }

  export type SalesWalaAdminCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    metadata?: true
    _all?: true
  }

  export type SalesWalaAdminAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesWalaAdmin to aggregate.
     */
    where?: SalesWalaAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWalaAdmins to fetch.
     */
    orderBy?: Enumerable<SalesWalaAdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWalaAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWalaAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWalaAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesWalaAdmins
    **/
    _count?: true | SalesWalaAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesWalaAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesWalaAdminMaxAggregateInputType
  }

  export type GetSalesWalaAdminAggregateType<T extends SalesWalaAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesWalaAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesWalaAdmin[P]>
      : GetScalarType<T[P], AggregateSalesWalaAdmin[P]>
  }




  export type SalesWalaAdminGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SalesWalaAdminWhereInput
    orderBy?: Enumerable<SalesWalaAdminOrderByWithAggregationInput>
    by: SalesWalaAdminScalarFieldEnum[]
    having?: SalesWalaAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesWalaAdminCountAggregateInputType | true
    _min?: SalesWalaAdminMinAggregateInputType
    _max?: SalesWalaAdminMaxAggregateInputType
  }


  export type SalesWalaAdminGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    firstname: string | null
    lastname: string | null
    metadata: string | null
    _count: SalesWalaAdminCountAggregateOutputType | null
    _min: SalesWalaAdminMinAggregateOutputType | null
    _max: SalesWalaAdminMaxAggregateOutputType | null
  }

  type GetSalesWalaAdminGroupByPayload<T extends SalesWalaAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SalesWalaAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesWalaAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesWalaAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SalesWalaAdminGroupByOutputType[P]>
        }
      >
    >


  export type SalesWalaAdminSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["salesWalaAdmin"]>

  export type SalesWalaAdminSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    metadata?: boolean
  }


  type SalesWalaAdminGetPayload<S extends boolean | null | undefined | SalesWalaAdminArgs> = $Types.GetResult<SalesWalaAdminPayload, S>

  type SalesWalaAdminCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SalesWalaAdminFindManyArgs, 'select' | 'include'> & {
      select?: SalesWalaAdminCountAggregateInputType | true
    }

  export interface SalesWalaAdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesWalaAdmin'], meta: { name: 'SalesWalaAdmin' } }
    /**
     * Find zero or one SalesWalaAdmin that matches the filter.
     * @param {SalesWalaAdminFindUniqueArgs} args - Arguments to find a SalesWalaAdmin
     * @example
     * // Get one SalesWalaAdmin
     * const salesWalaAdmin = await prisma.salesWalaAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SalesWalaAdminFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SalesWalaAdminFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SalesWalaAdmin'> extends True ? Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SalesWalaAdmin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SalesWalaAdminFindUniqueOrThrowArgs} args - Arguments to find a SalesWalaAdmin
     * @example
     * // Get one SalesWalaAdmin
     * const salesWalaAdmin = await prisma.salesWalaAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SalesWalaAdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SalesWalaAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAdminFindFirstArgs} args - Arguments to find a SalesWalaAdmin
     * @example
     * // Get one SalesWalaAdmin
     * const salesWalaAdmin = await prisma.salesWalaAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SalesWalaAdminFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SalesWalaAdminFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SalesWalaAdmin'> extends True ? Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SalesWalaAdmin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAdminFindFirstOrThrowArgs} args - Arguments to find a SalesWalaAdmin
     * @example
     * // Get one SalesWalaAdmin
     * const salesWalaAdmin = await prisma.salesWalaAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SalesWalaAdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SalesWalaAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesWalaAdmins
     * const salesWalaAdmins = await prisma.salesWalaAdmin.findMany()
     * 
     * // Get first 10 SalesWalaAdmins
     * const salesWalaAdmins = await prisma.salesWalaAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWalaAdminWithIdOnly = await prisma.salesWalaAdmin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SalesWalaAdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SalesWalaAdmin.
     * @param {SalesWalaAdminCreateArgs} args - Arguments to create a SalesWalaAdmin.
     * @example
     * // Create one SalesWalaAdmin
     * const SalesWalaAdmin = await prisma.salesWalaAdmin.create({
     *   data: {
     *     // ... data to create a SalesWalaAdmin
     *   }
     * })
     * 
    **/
    create<T extends SalesWalaAdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAdminCreateArgs<ExtArgs>>
    ): Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SalesWalaAdmins.
     *     @param {SalesWalaAdminCreateManyArgs} args - Arguments to create many SalesWalaAdmins.
     *     @example
     *     // Create many SalesWalaAdmins
     *     const salesWalaAdmin = await prisma.salesWalaAdmin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SalesWalaAdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalesWalaAdmin.
     * @param {SalesWalaAdminDeleteArgs} args - Arguments to delete one SalesWalaAdmin.
     * @example
     * // Delete one SalesWalaAdmin
     * const SalesWalaAdmin = await prisma.salesWalaAdmin.delete({
     *   where: {
     *     // ... filter to delete one SalesWalaAdmin
     *   }
     * })
     * 
    **/
    delete<T extends SalesWalaAdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAdminDeleteArgs<ExtArgs>>
    ): Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SalesWalaAdmin.
     * @param {SalesWalaAdminUpdateArgs} args - Arguments to update one SalesWalaAdmin.
     * @example
     * // Update one SalesWalaAdmin
     * const salesWalaAdmin = await prisma.salesWalaAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SalesWalaAdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAdminUpdateArgs<ExtArgs>>
    ): Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SalesWalaAdmins.
     * @param {SalesWalaAdminDeleteManyArgs} args - Arguments to filter SalesWalaAdmins to delete.
     * @example
     * // Delete a few SalesWalaAdmins
     * const { count } = await prisma.salesWalaAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SalesWalaAdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesWalaAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesWalaAdmins
     * const salesWalaAdmin = await prisma.salesWalaAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SalesWalaAdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesWalaAdmin.
     * @param {SalesWalaAdminUpsertArgs} args - Arguments to update or create a SalesWalaAdmin.
     * @example
     * // Update or create a SalesWalaAdmin
     * const salesWalaAdmin = await prisma.salesWalaAdmin.upsert({
     *   create: {
     *     // ... data to create a SalesWalaAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesWalaAdmin we want to update
     *   }
     * })
    **/
    upsert<T extends SalesWalaAdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAdminUpsertArgs<ExtArgs>>
    ): Prisma__SalesWalaAdminClient<$Types.GetResult<SalesWalaAdminPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SalesWalaAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAdminCountArgs} args - Arguments to filter SalesWalaAdmins to count.
     * @example
     * // Count the number of SalesWalaAdmins
     * const count = await prisma.salesWalaAdmin.count({
     *   where: {
     *     // ... the filter for the SalesWalaAdmins we want to count
     *   }
     * })
    **/
    count<T extends SalesWalaAdminCountArgs>(
      args?: Subset<T, SalesWalaAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesWalaAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesWalaAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesWalaAdminAggregateArgs>(args: Subset<T, SalesWalaAdminAggregateArgs>): Prisma.PrismaPromise<GetSalesWalaAdminAggregateType<T>>

    /**
     * Group by SalesWalaAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAdminGroupByArgs} args - Group by arguments.
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
      T extends SalesWalaAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesWalaAdminGroupByArgs['orderBy'] }
        : { orderBy?: SalesWalaAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SalesWalaAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesWalaAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesWalaAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SalesWalaAdminClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SalesWalaAdmin base type for findUnique actions
   */
  export type SalesWalaAdminFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAdmin to fetch.
     */
    where: SalesWalaAdminWhereUniqueInput
  }

  /**
   * SalesWalaAdmin findUnique
   */
  export interface SalesWalaAdminFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SalesWalaAdminFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SalesWalaAdmin findUniqueOrThrow
   */
  export type SalesWalaAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAdmin to fetch.
     */
    where: SalesWalaAdminWhereUniqueInput
  }


  /**
   * SalesWalaAdmin base type for findFirst actions
   */
  export type SalesWalaAdminFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAdmin to fetch.
     */
    where?: SalesWalaAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWalaAdmins to fetch.
     */
    orderBy?: Enumerable<SalesWalaAdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesWalaAdmins.
     */
    cursor?: SalesWalaAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWalaAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWalaAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesWalaAdmins.
     */
    distinct?: Enumerable<SalesWalaAdminScalarFieldEnum>
  }

  /**
   * SalesWalaAdmin findFirst
   */
  export interface SalesWalaAdminFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SalesWalaAdminFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SalesWalaAdmin findFirstOrThrow
   */
  export type SalesWalaAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAdmin to fetch.
     */
    where?: SalesWalaAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWalaAdmins to fetch.
     */
    orderBy?: Enumerable<SalesWalaAdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesWalaAdmins.
     */
    cursor?: SalesWalaAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWalaAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWalaAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesWalaAdmins.
     */
    distinct?: Enumerable<SalesWalaAdminScalarFieldEnum>
  }


  /**
   * SalesWalaAdmin findMany
   */
  export type SalesWalaAdminFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAdmins to fetch.
     */
    where?: SalesWalaAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWalaAdmins to fetch.
     */
    orderBy?: Enumerable<SalesWalaAdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesWalaAdmins.
     */
    cursor?: SalesWalaAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWalaAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWalaAdmins.
     */
    skip?: number
    distinct?: Enumerable<SalesWalaAdminScalarFieldEnum>
  }


  /**
   * SalesWalaAdmin create
   */
  export type SalesWalaAdminCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesWalaAdmin.
     */
    data: XOR<SalesWalaAdminCreateInput, SalesWalaAdminUncheckedCreateInput>
  }


  /**
   * SalesWalaAdmin createMany
   */
  export type SalesWalaAdminCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesWalaAdmins.
     */
    data: Enumerable<SalesWalaAdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SalesWalaAdmin update
   */
  export type SalesWalaAdminUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesWalaAdmin.
     */
    data: XOR<SalesWalaAdminUpdateInput, SalesWalaAdminUncheckedUpdateInput>
    /**
     * Choose, which SalesWalaAdmin to update.
     */
    where: SalesWalaAdminWhereUniqueInput
  }


  /**
   * SalesWalaAdmin updateMany
   */
  export type SalesWalaAdminUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesWalaAdmins.
     */
    data: XOR<SalesWalaAdminUpdateManyMutationInput, SalesWalaAdminUncheckedUpdateManyInput>
    /**
     * Filter which SalesWalaAdmins to update
     */
    where?: SalesWalaAdminWhereInput
  }


  /**
   * SalesWalaAdmin upsert
   */
  export type SalesWalaAdminUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesWalaAdmin to update in case it exists.
     */
    where: SalesWalaAdminWhereUniqueInput
    /**
     * In case the SalesWalaAdmin found by the `where` argument doesn't exist, create a new SalesWalaAdmin with this data.
     */
    create: XOR<SalesWalaAdminCreateInput, SalesWalaAdminUncheckedCreateInput>
    /**
     * In case the SalesWalaAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesWalaAdminUpdateInput, SalesWalaAdminUncheckedUpdateInput>
  }


  /**
   * SalesWalaAdmin delete
   */
  export type SalesWalaAdminDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
    /**
     * Filter which SalesWalaAdmin to delete.
     */
    where: SalesWalaAdminWhereUniqueInput
  }


  /**
   * SalesWalaAdmin deleteMany
   */
  export type SalesWalaAdminDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesWalaAdmins to delete
     */
    where?: SalesWalaAdminWhereInput
  }


  /**
   * SalesWalaAdmin without action
   */
  export type SalesWalaAdminArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAdmin
     */
    select?: SalesWalaAdminSelect<ExtArgs> | null
  }



  /**
   * Model SalesWalaAppUser
   */


  export type AggregateSalesWalaAppUser = {
    _count: SalesWalaAppUserCountAggregateOutputType | null
    _min: SalesWalaAppUserMinAggregateOutputType | null
    _max: SalesWalaAppUserMaxAggregateOutputType | null
  }

  export type SalesWalaAppUserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    role: UserRole | null
    organisationId: string | null
    metadata: string | null
    isVerified: boolean | null
    deviceId: string | null
    isEnabled: boolean | null
  }

  export type SalesWalaAppUserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    role: UserRole | null
    organisationId: string | null
    metadata: string | null
    isVerified: boolean | null
    deviceId: string | null
    isEnabled: boolean | null
  }

  export type SalesWalaAppUserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    firstname: number
    lastname: number
    role: number
    organisationId: number
    metadata: number
    isVerified: number
    deviceId: number
    isEnabled: number
    _all: number
  }


  export type SalesWalaAppUserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
    organisationId?: true
    metadata?: true
    isVerified?: true
    deviceId?: true
    isEnabled?: true
  }

  export type SalesWalaAppUserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
    organisationId?: true
    metadata?: true
    isVerified?: true
    deviceId?: true
    isEnabled?: true
  }

  export type SalesWalaAppUserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
    organisationId?: true
    metadata?: true
    isVerified?: true
    deviceId?: true
    isEnabled?: true
    _all?: true
  }

  export type SalesWalaAppUserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesWalaAppUser to aggregate.
     */
    where?: SalesWalaAppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWalaAppUsers to fetch.
     */
    orderBy?: Enumerable<SalesWalaAppUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWalaAppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWalaAppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWalaAppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesWalaAppUsers
    **/
    _count?: true | SalesWalaAppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesWalaAppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesWalaAppUserMaxAggregateInputType
  }

  export type GetSalesWalaAppUserAggregateType<T extends SalesWalaAppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesWalaAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesWalaAppUser[P]>
      : GetScalarType<T[P], AggregateSalesWalaAppUser[P]>
  }




  export type SalesWalaAppUserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SalesWalaAppUserWhereInput
    orderBy?: Enumerable<SalesWalaAppUserOrderByWithAggregationInput>
    by: SalesWalaAppUserScalarFieldEnum[]
    having?: SalesWalaAppUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesWalaAppUserCountAggregateInputType | true
    _min?: SalesWalaAppUserMinAggregateInputType
    _max?: SalesWalaAppUserMaxAggregateInputType
  }


  export type SalesWalaAppUserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    firstname: string | null
    lastname: string | null
    role: UserRole
    organisationId: string | null
    metadata: string | null
    isVerified: boolean
    deviceId: string | null
    isEnabled: boolean
    _count: SalesWalaAppUserCountAggregateOutputType | null
    _min: SalesWalaAppUserMinAggregateOutputType | null
    _max: SalesWalaAppUserMaxAggregateOutputType | null
  }

  type GetSalesWalaAppUserGroupByPayload<T extends SalesWalaAppUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SalesWalaAppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesWalaAppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesWalaAppUserGroupByOutputType[P]>
            : GetScalarType<T[P], SalesWalaAppUserGroupByOutputType[P]>
        }
      >
    >


  export type SalesWalaAppUserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    organisationId?: boolean
    metadata?: boolean
    isVerified?: boolean
    deviceId?: boolean
    isEnabled?: boolean
  }, ExtArgs["result"]["salesWalaAppUser"]>

  export type SalesWalaAppUserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    organisationId?: boolean
    metadata?: boolean
    isVerified?: boolean
    deviceId?: boolean
    isEnabled?: boolean
  }


  type SalesWalaAppUserGetPayload<S extends boolean | null | undefined | SalesWalaAppUserArgs> = $Types.GetResult<SalesWalaAppUserPayload, S>

  type SalesWalaAppUserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SalesWalaAppUserFindManyArgs, 'select' | 'include'> & {
      select?: SalesWalaAppUserCountAggregateInputType | true
    }

  export interface SalesWalaAppUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesWalaAppUser'], meta: { name: 'SalesWalaAppUser' } }
    /**
     * Find zero or one SalesWalaAppUser that matches the filter.
     * @param {SalesWalaAppUserFindUniqueArgs} args - Arguments to find a SalesWalaAppUser
     * @example
     * // Get one SalesWalaAppUser
     * const salesWalaAppUser = await prisma.salesWalaAppUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SalesWalaAppUserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SalesWalaAppUserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SalesWalaAppUser'> extends True ? Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SalesWalaAppUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SalesWalaAppUserFindUniqueOrThrowArgs} args - Arguments to find a SalesWalaAppUser
     * @example
     * // Get one SalesWalaAppUser
     * const salesWalaAppUser = await prisma.salesWalaAppUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SalesWalaAppUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAppUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SalesWalaAppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAppUserFindFirstArgs} args - Arguments to find a SalesWalaAppUser
     * @example
     * // Get one SalesWalaAppUser
     * const salesWalaAppUser = await prisma.salesWalaAppUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SalesWalaAppUserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SalesWalaAppUserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SalesWalaAppUser'> extends True ? Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SalesWalaAppUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAppUserFindFirstOrThrowArgs} args - Arguments to find a SalesWalaAppUser
     * @example
     * // Get one SalesWalaAppUser
     * const salesWalaAppUser = await prisma.salesWalaAppUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SalesWalaAppUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAppUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SalesWalaAppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAppUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesWalaAppUsers
     * const salesWalaAppUsers = await prisma.salesWalaAppUser.findMany()
     * 
     * // Get first 10 SalesWalaAppUsers
     * const salesWalaAppUsers = await prisma.salesWalaAppUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWalaAppUserWithIdOnly = await prisma.salesWalaAppUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SalesWalaAppUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAppUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SalesWalaAppUser.
     * @param {SalesWalaAppUserCreateArgs} args - Arguments to create a SalesWalaAppUser.
     * @example
     * // Create one SalesWalaAppUser
     * const SalesWalaAppUser = await prisma.salesWalaAppUser.create({
     *   data: {
     *     // ... data to create a SalesWalaAppUser
     *   }
     * })
     * 
    **/
    create<T extends SalesWalaAppUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAppUserCreateArgs<ExtArgs>>
    ): Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SalesWalaAppUsers.
     *     @param {SalesWalaAppUserCreateManyArgs} args - Arguments to create many SalesWalaAppUsers.
     *     @example
     *     // Create many SalesWalaAppUsers
     *     const salesWalaAppUser = await prisma.salesWalaAppUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SalesWalaAppUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAppUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalesWalaAppUser.
     * @param {SalesWalaAppUserDeleteArgs} args - Arguments to delete one SalesWalaAppUser.
     * @example
     * // Delete one SalesWalaAppUser
     * const SalesWalaAppUser = await prisma.salesWalaAppUser.delete({
     *   where: {
     *     // ... filter to delete one SalesWalaAppUser
     *   }
     * })
     * 
    **/
    delete<T extends SalesWalaAppUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAppUserDeleteArgs<ExtArgs>>
    ): Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SalesWalaAppUser.
     * @param {SalesWalaAppUserUpdateArgs} args - Arguments to update one SalesWalaAppUser.
     * @example
     * // Update one SalesWalaAppUser
     * const salesWalaAppUser = await prisma.salesWalaAppUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SalesWalaAppUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAppUserUpdateArgs<ExtArgs>>
    ): Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SalesWalaAppUsers.
     * @param {SalesWalaAppUserDeleteManyArgs} args - Arguments to filter SalesWalaAppUsers to delete.
     * @example
     * // Delete a few SalesWalaAppUsers
     * const { count } = await prisma.salesWalaAppUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SalesWalaAppUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesWalaAppUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesWalaAppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAppUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesWalaAppUsers
     * const salesWalaAppUser = await prisma.salesWalaAppUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SalesWalaAppUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAppUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesWalaAppUser.
     * @param {SalesWalaAppUserUpsertArgs} args - Arguments to update or create a SalesWalaAppUser.
     * @example
     * // Update or create a SalesWalaAppUser
     * const salesWalaAppUser = await prisma.salesWalaAppUser.upsert({
     *   create: {
     *     // ... data to create a SalesWalaAppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesWalaAppUser we want to update
     *   }
     * })
    **/
    upsert<T extends SalesWalaAppUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SalesWalaAppUserUpsertArgs<ExtArgs>>
    ): Prisma__SalesWalaAppUserClient<$Types.GetResult<SalesWalaAppUserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SalesWalaAppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAppUserCountArgs} args - Arguments to filter SalesWalaAppUsers to count.
     * @example
     * // Count the number of SalesWalaAppUsers
     * const count = await prisma.salesWalaAppUser.count({
     *   where: {
     *     // ... the filter for the SalesWalaAppUsers we want to count
     *   }
     * })
    **/
    count<T extends SalesWalaAppUserCountArgs>(
      args?: Subset<T, SalesWalaAppUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesWalaAppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesWalaAppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesWalaAppUserAggregateArgs>(args: Subset<T, SalesWalaAppUserAggregateArgs>): Prisma.PrismaPromise<GetSalesWalaAppUserAggregateType<T>>

    /**
     * Group by SalesWalaAppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWalaAppUserGroupByArgs} args - Group by arguments.
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
      T extends SalesWalaAppUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesWalaAppUserGroupByArgs['orderBy'] }
        : { orderBy?: SalesWalaAppUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SalesWalaAppUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesWalaAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesWalaAppUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SalesWalaAppUserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SalesWalaAppUser base type for findUnique actions
   */
  export type SalesWalaAppUserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAppUser to fetch.
     */
    where: SalesWalaAppUserWhereUniqueInput
  }

  /**
   * SalesWalaAppUser findUnique
   */
  export interface SalesWalaAppUserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SalesWalaAppUserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SalesWalaAppUser findUniqueOrThrow
   */
  export type SalesWalaAppUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAppUser to fetch.
     */
    where: SalesWalaAppUserWhereUniqueInput
  }


  /**
   * SalesWalaAppUser base type for findFirst actions
   */
  export type SalesWalaAppUserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAppUser to fetch.
     */
    where?: SalesWalaAppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWalaAppUsers to fetch.
     */
    orderBy?: Enumerable<SalesWalaAppUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesWalaAppUsers.
     */
    cursor?: SalesWalaAppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWalaAppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWalaAppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesWalaAppUsers.
     */
    distinct?: Enumerable<SalesWalaAppUserScalarFieldEnum>
  }

  /**
   * SalesWalaAppUser findFirst
   */
  export interface SalesWalaAppUserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SalesWalaAppUserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SalesWalaAppUser findFirstOrThrow
   */
  export type SalesWalaAppUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAppUser to fetch.
     */
    where?: SalesWalaAppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWalaAppUsers to fetch.
     */
    orderBy?: Enumerable<SalesWalaAppUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesWalaAppUsers.
     */
    cursor?: SalesWalaAppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWalaAppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWalaAppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesWalaAppUsers.
     */
    distinct?: Enumerable<SalesWalaAppUserScalarFieldEnum>
  }


  /**
   * SalesWalaAppUser findMany
   */
  export type SalesWalaAppUserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * Filter, which SalesWalaAppUsers to fetch.
     */
    where?: SalesWalaAppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWalaAppUsers to fetch.
     */
    orderBy?: Enumerable<SalesWalaAppUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesWalaAppUsers.
     */
    cursor?: SalesWalaAppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWalaAppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWalaAppUsers.
     */
    skip?: number
    distinct?: Enumerable<SalesWalaAppUserScalarFieldEnum>
  }


  /**
   * SalesWalaAppUser create
   */
  export type SalesWalaAppUserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesWalaAppUser.
     */
    data: XOR<SalesWalaAppUserCreateInput, SalesWalaAppUserUncheckedCreateInput>
  }


  /**
   * SalesWalaAppUser createMany
   */
  export type SalesWalaAppUserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesWalaAppUsers.
     */
    data: Enumerable<SalesWalaAppUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SalesWalaAppUser update
   */
  export type SalesWalaAppUserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesWalaAppUser.
     */
    data: XOR<SalesWalaAppUserUpdateInput, SalesWalaAppUserUncheckedUpdateInput>
    /**
     * Choose, which SalesWalaAppUser to update.
     */
    where: SalesWalaAppUserWhereUniqueInput
  }


  /**
   * SalesWalaAppUser updateMany
   */
  export type SalesWalaAppUserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesWalaAppUsers.
     */
    data: XOR<SalesWalaAppUserUpdateManyMutationInput, SalesWalaAppUserUncheckedUpdateManyInput>
    /**
     * Filter which SalesWalaAppUsers to update
     */
    where?: SalesWalaAppUserWhereInput
  }


  /**
   * SalesWalaAppUser upsert
   */
  export type SalesWalaAppUserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesWalaAppUser to update in case it exists.
     */
    where: SalesWalaAppUserWhereUniqueInput
    /**
     * In case the SalesWalaAppUser found by the `where` argument doesn't exist, create a new SalesWalaAppUser with this data.
     */
    create: XOR<SalesWalaAppUserCreateInput, SalesWalaAppUserUncheckedCreateInput>
    /**
     * In case the SalesWalaAppUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesWalaAppUserUpdateInput, SalesWalaAppUserUncheckedUpdateInput>
  }


  /**
   * SalesWalaAppUser delete
   */
  export type SalesWalaAppUserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
    /**
     * Filter which SalesWalaAppUser to delete.
     */
    where: SalesWalaAppUserWhereUniqueInput
  }


  /**
   * SalesWalaAppUser deleteMany
   */
  export type SalesWalaAppUserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesWalaAppUsers to delete
     */
    where?: SalesWalaAppUserWhereInput
  }


  /**
   * SalesWalaAppUser without action
   */
  export type SalesWalaAppUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWalaAppUser
     */
    select?: SalesWalaAppUserSelect<ExtArgs> | null
  }



  /**
   * Model Products
   */


  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    defaultPrice: string | null
    metadata: string | null
    organisationId: string | null
    isDisabled: boolean | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    defaultPrice: string | null
    metadata: string | null
    organisationId: string | null
    isDisabled: boolean | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    defaultPrice: number
    metadata: number
    organisationId: number
    isDisabled: number
    _all: number
  }


  export type ProductsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    defaultPrice?: true
    metadata?: true
    organisationId?: true
    isDisabled?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    defaultPrice?: true
    metadata?: true
    organisationId?: true
    isDisabled?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    defaultPrice?: true
    metadata?: true
    organisationId?: true
    isDisabled?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: Enumerable<ProductsOrderByWithAggregationInput>
    by: ProductsScalarFieldEnum[]
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }


  export type ProductsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    defaultPrice: string
    metadata: string | null
    organisationId: string | null
    isDisabled: boolean
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    defaultPrice?: boolean
    metadata?: boolean
    organisationId?: boolean
    isDisabled?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    defaultPrice?: boolean
    metadata?: boolean
    organisationId?: boolean
    isDisabled?: boolean
  }


  type ProductsGetPayload<S extends boolean | null | undefined | ProductsArgs> = $Types.GetResult<ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductsFindManyArgs, 'select' | 'include'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Products'> extends True ? Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Products'> extends True ? Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends ProductsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends ProductsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Types.GetResult<ProductsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Products base type for findUnique actions
   */
  export type ProductsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUnique
   */
  export interface ProductsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProductsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products base type for findFirst actions
   */
  export type ProductsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }

  /**
   * Products findFirst
   */
  export interface ProductsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProductsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }


  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: Enumerable<ProductsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
  }


  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }


  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
  }


  /**
   * Products without action
   */
  export type ProductsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
  }



  /**
   * Model Vendor
   */


  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    creatorId: string | null
    organisationId: string | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    creatorId: string | null
    organisationId: string | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    creatorId: number
    organisationId: number
    _all: number
  }


  export type VendorMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    organisationId?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    organisationId?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    organisationId?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: Enumerable<VendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: Enumerable<VendorOrderByWithAggregationInput>
    by: VendorScalarFieldEnum[]
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }


  export type VendorGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    creatorId: string | null
    organisationId: string | null
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    creatorId?: boolean
    organisationId?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    creatorId?: boolean
    organisationId?: boolean
  }


  type VendorGetPayload<S extends boolean | null | undefined | VendorArgs> = $Types.GetResult<VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<VendorFindManyArgs, 'select' | 'include'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VendorFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Vendor'> extends True ? Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Vendor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VendorFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Vendor'> extends True ? Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Vendor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VendorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<VendorPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
    **/
    create<T extends VendorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VendorCreateArgs<ExtArgs>>
    ): Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Vendors.
     *     @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     *     @example
     *     // Create many Vendors
     *     const vendor = await prisma.vendor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VendorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
    **/
    delete<T extends VendorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>
    ): Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VendorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>
    ): Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VendorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VendorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
    **/
    upsert<T extends VendorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>
    ): Prisma__VendorClient<$Types.GetResult<VendorPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
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
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Vendor base type for findUnique actions
   */
  export type VendorFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUnique
   */
  export interface VendorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends VendorFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor base type for findFirst actions
   */
  export type VendorFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: Enumerable<VendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: Enumerable<VendorScalarFieldEnum>
  }

  /**
   * Vendor findFirst
   */
  export interface VendorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends VendorFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: Enumerable<VendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: Enumerable<VendorScalarFieldEnum>
  }


  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: Enumerable<VendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: Enumerable<VendorScalarFieldEnum>
  }


  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }


  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: Enumerable<VendorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
  }


  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }


  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
  }


  /**
   * Vendor without action
   */
  export type VendorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
  }



  /**
   * Model QuotationParticulars
   */


  export type AggregateQuotationParticulars = {
    _count: QuotationParticularsCountAggregateOutputType | null
    _min: QuotationParticularsMinAggregateOutputType | null
    _max: QuotationParticularsMaxAggregateOutputType | null
  }

  export type QuotationParticularsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: string | null
    metadata: string | null
    quotationId: string | null
  }

  export type QuotationParticularsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: string | null
    metadata: string | null
    quotationId: string | null
  }

  export type QuotationParticularsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    productId: number
    metadata: number
    quotationId: number
    _all: number
  }


  export type QuotationParticularsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    metadata?: true
    quotationId?: true
  }

  export type QuotationParticularsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    metadata?: true
    quotationId?: true
  }

  export type QuotationParticularsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    metadata?: true
    quotationId?: true
    _all?: true
  }

  export type QuotationParticularsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationParticulars to aggregate.
     */
    where?: QuotationParticularsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationParticulars to fetch.
     */
    orderBy?: Enumerable<QuotationParticularsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationParticularsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationParticulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationParticulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuotationParticulars
    **/
    _count?: true | QuotationParticularsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationParticularsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationParticularsMaxAggregateInputType
  }

  export type GetQuotationParticularsAggregateType<T extends QuotationParticularsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotationParticulars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotationParticulars[P]>
      : GetScalarType<T[P], AggregateQuotationParticulars[P]>
  }




  export type QuotationParticularsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuotationParticularsWhereInput
    orderBy?: Enumerable<QuotationParticularsOrderByWithAggregationInput>
    by: QuotationParticularsScalarFieldEnum[]
    having?: QuotationParticularsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationParticularsCountAggregateInputType | true
    _min?: QuotationParticularsMinAggregateInputType
    _max?: QuotationParticularsMaxAggregateInputType
  }


  export type QuotationParticularsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    productId: string | null
    metadata: string | null
    quotationId: string | null
    _count: QuotationParticularsCountAggregateOutputType | null
    _min: QuotationParticularsMinAggregateOutputType | null
    _max: QuotationParticularsMaxAggregateOutputType | null
  }

  type GetQuotationParticularsGroupByPayload<T extends QuotationParticularsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuotationParticularsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationParticularsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationParticularsGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationParticularsGroupByOutputType[P]>
        }
      >
    >


  export type QuotationParticularsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    metadata?: boolean
    quotationId?: boolean
  }, ExtArgs["result"]["quotationParticulars"]>

  export type QuotationParticularsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    metadata?: boolean
    quotationId?: boolean
  }


  type QuotationParticularsGetPayload<S extends boolean | null | undefined | QuotationParticularsArgs> = $Types.GetResult<QuotationParticularsPayload, S>

  type QuotationParticularsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<QuotationParticularsFindManyArgs, 'select' | 'include'> & {
      select?: QuotationParticularsCountAggregateInputType | true
    }

  export interface QuotationParticularsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuotationParticulars'], meta: { name: 'QuotationParticulars' } }
    /**
     * Find zero or one QuotationParticulars that matches the filter.
     * @param {QuotationParticularsFindUniqueArgs} args - Arguments to find a QuotationParticulars
     * @example
     * // Get one QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuotationParticularsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuotationParticularsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'QuotationParticulars'> extends True ? Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one QuotationParticulars that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuotationParticularsFindUniqueOrThrowArgs} args - Arguments to find a QuotationParticulars
     * @example
     * // Get one QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuotationParticularsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationParticularsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first QuotationParticulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationParticularsFindFirstArgs} args - Arguments to find a QuotationParticulars
     * @example
     * // Get one QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuotationParticularsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuotationParticularsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'QuotationParticulars'> extends True ? Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first QuotationParticulars that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationParticularsFindFirstOrThrowArgs} args - Arguments to find a QuotationParticulars
     * @example
     * // Get one QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuotationParticularsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationParticularsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more QuotationParticulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationParticularsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.findMany()
     * 
     * // Get first 10 QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationParticularsWithIdOnly = await prisma.quotationParticulars.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuotationParticularsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationParticularsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a QuotationParticulars.
     * @param {QuotationParticularsCreateArgs} args - Arguments to create a QuotationParticulars.
     * @example
     * // Create one QuotationParticulars
     * const QuotationParticulars = await prisma.quotationParticulars.create({
     *   data: {
     *     // ... data to create a QuotationParticulars
     *   }
     * })
     * 
    **/
    create<T extends QuotationParticularsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationParticularsCreateArgs<ExtArgs>>
    ): Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many QuotationParticulars.
     *     @param {QuotationParticularsCreateManyArgs} args - Arguments to create many QuotationParticulars.
     *     @example
     *     // Create many QuotationParticulars
     *     const quotationParticulars = await prisma.quotationParticulars.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuotationParticularsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationParticularsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuotationParticulars.
     * @param {QuotationParticularsDeleteArgs} args - Arguments to delete one QuotationParticulars.
     * @example
     * // Delete one QuotationParticulars
     * const QuotationParticulars = await prisma.quotationParticulars.delete({
     *   where: {
     *     // ... filter to delete one QuotationParticulars
     *   }
     * })
     * 
    **/
    delete<T extends QuotationParticularsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationParticularsDeleteArgs<ExtArgs>>
    ): Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one QuotationParticulars.
     * @param {QuotationParticularsUpdateArgs} args - Arguments to update one QuotationParticulars.
     * @example
     * // Update one QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuotationParticularsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationParticularsUpdateArgs<ExtArgs>>
    ): Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more QuotationParticulars.
     * @param {QuotationParticularsDeleteManyArgs} args - Arguments to filter QuotationParticulars to delete.
     * @example
     * // Delete a few QuotationParticulars
     * const { count } = await prisma.quotationParticulars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuotationParticularsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationParticularsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationParticulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationParticularsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuotationParticularsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationParticularsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuotationParticulars.
     * @param {QuotationParticularsUpsertArgs} args - Arguments to update or create a QuotationParticulars.
     * @example
     * // Update or create a QuotationParticulars
     * const quotationParticulars = await prisma.quotationParticulars.upsert({
     *   create: {
     *     // ... data to create a QuotationParticulars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuotationParticulars we want to update
     *   }
     * })
    **/
    upsert<T extends QuotationParticularsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationParticularsUpsertArgs<ExtArgs>>
    ): Prisma__QuotationParticularsClient<$Types.GetResult<QuotationParticularsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of QuotationParticulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationParticularsCountArgs} args - Arguments to filter QuotationParticulars to count.
     * @example
     * // Count the number of QuotationParticulars
     * const count = await prisma.quotationParticulars.count({
     *   where: {
     *     // ... the filter for the QuotationParticulars we want to count
     *   }
     * })
    **/
    count<T extends QuotationParticularsCountArgs>(
      args?: Subset<T, QuotationParticularsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationParticularsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuotationParticulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationParticularsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationParticularsAggregateArgs>(args: Subset<T, QuotationParticularsAggregateArgs>): Prisma.PrismaPromise<GetQuotationParticularsAggregateType<T>>

    /**
     * Group by QuotationParticulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationParticularsGroupByArgs} args - Group by arguments.
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
      T extends QuotationParticularsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationParticularsGroupByArgs['orderBy'] }
        : { orderBy?: QuotationParticularsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuotationParticularsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationParticularsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for QuotationParticulars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuotationParticularsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * QuotationParticulars base type for findUnique actions
   */
  export type QuotationParticularsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * Filter, which QuotationParticulars to fetch.
     */
    where: QuotationParticularsWhereUniqueInput
  }

  /**
   * QuotationParticulars findUnique
   */
  export interface QuotationParticularsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends QuotationParticularsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QuotationParticulars findUniqueOrThrow
   */
  export type QuotationParticularsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * Filter, which QuotationParticulars to fetch.
     */
    where: QuotationParticularsWhereUniqueInput
  }


  /**
   * QuotationParticulars base type for findFirst actions
   */
  export type QuotationParticularsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * Filter, which QuotationParticulars to fetch.
     */
    where?: QuotationParticularsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationParticulars to fetch.
     */
    orderBy?: Enumerable<QuotationParticularsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationParticulars.
     */
    cursor?: QuotationParticularsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationParticulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationParticulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationParticulars.
     */
    distinct?: Enumerable<QuotationParticularsScalarFieldEnum>
  }

  /**
   * QuotationParticulars findFirst
   */
  export interface QuotationParticularsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends QuotationParticularsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QuotationParticulars findFirstOrThrow
   */
  export type QuotationParticularsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * Filter, which QuotationParticulars to fetch.
     */
    where?: QuotationParticularsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationParticulars to fetch.
     */
    orderBy?: Enumerable<QuotationParticularsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationParticulars.
     */
    cursor?: QuotationParticularsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationParticulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationParticulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationParticulars.
     */
    distinct?: Enumerable<QuotationParticularsScalarFieldEnum>
  }


  /**
   * QuotationParticulars findMany
   */
  export type QuotationParticularsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * Filter, which QuotationParticulars to fetch.
     */
    where?: QuotationParticularsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationParticulars to fetch.
     */
    orderBy?: Enumerable<QuotationParticularsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuotationParticulars.
     */
    cursor?: QuotationParticularsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationParticulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationParticulars.
     */
    skip?: number
    distinct?: Enumerable<QuotationParticularsScalarFieldEnum>
  }


  /**
   * QuotationParticulars create
   */
  export type QuotationParticularsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * The data needed to create a QuotationParticulars.
     */
    data: XOR<QuotationParticularsCreateInput, QuotationParticularsUncheckedCreateInput>
  }


  /**
   * QuotationParticulars createMany
   */
  export type QuotationParticularsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuotationParticulars.
     */
    data: Enumerable<QuotationParticularsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * QuotationParticulars update
   */
  export type QuotationParticularsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * The data needed to update a QuotationParticulars.
     */
    data: XOR<QuotationParticularsUpdateInput, QuotationParticularsUncheckedUpdateInput>
    /**
     * Choose, which QuotationParticulars to update.
     */
    where: QuotationParticularsWhereUniqueInput
  }


  /**
   * QuotationParticulars updateMany
   */
  export type QuotationParticularsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuotationParticulars.
     */
    data: XOR<QuotationParticularsUpdateManyMutationInput, QuotationParticularsUncheckedUpdateManyInput>
    /**
     * Filter which QuotationParticulars to update
     */
    where?: QuotationParticularsWhereInput
  }


  /**
   * QuotationParticulars upsert
   */
  export type QuotationParticularsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * The filter to search for the QuotationParticulars to update in case it exists.
     */
    where: QuotationParticularsWhereUniqueInput
    /**
     * In case the QuotationParticulars found by the `where` argument doesn't exist, create a new QuotationParticulars with this data.
     */
    create: XOR<QuotationParticularsCreateInput, QuotationParticularsUncheckedCreateInput>
    /**
     * In case the QuotationParticulars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationParticularsUpdateInput, QuotationParticularsUncheckedUpdateInput>
  }


  /**
   * QuotationParticulars delete
   */
  export type QuotationParticularsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
    /**
     * Filter which QuotationParticulars to delete.
     */
    where: QuotationParticularsWhereUniqueInput
  }


  /**
   * QuotationParticulars deleteMany
   */
  export type QuotationParticularsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationParticulars to delete
     */
    where?: QuotationParticularsWhereInput
  }


  /**
   * QuotationParticulars without action
   */
  export type QuotationParticularsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationParticulars
     */
    select?: QuotationParticularsSelect<ExtArgs> | null
  }



  /**
   * Model Quotation
   */


  export type AggregateQuotation = {
    _count: QuotationCountAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  export type QuotationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    creatorId: string | null
    organisationId: string | null
    vendorId: string | null
    hasConvertedToOrder: boolean | null
    orderState: OrderStatus | null
  }

  export type QuotationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    creatorId: string | null
    organisationId: string | null
    vendorId: string | null
    hasConvertedToOrder: boolean | null
    orderState: OrderStatus | null
  }

  export type QuotationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    creatorId: number
    organisationId: number
    vendorId: number
    hasConvertedToOrder: number
    orderState: number
    _all: number
  }


  export type QuotationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    organisationId?: true
    vendorId?: true
    hasConvertedToOrder?: true
    orderState?: true
  }

  export type QuotationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    organisationId?: true
    vendorId?: true
    hasConvertedToOrder?: true
    orderState?: true
  }

  export type QuotationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    organisationId?: true
    vendorId?: true
    hasConvertedToOrder?: true
    orderState?: true
    _all?: true
  }

  export type QuotationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotation to aggregate.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: Enumerable<QuotationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotations
    **/
    _count?: true | QuotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationMaxAggregateInputType
  }

  export type GetQuotationAggregateType<T extends QuotationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotation[P]>
      : GetScalarType<T[P], AggregateQuotation[P]>
  }




  export type QuotationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
    orderBy?: Enumerable<QuotationOrderByWithAggregationInput>
    by: QuotationScalarFieldEnum[]
    having?: QuotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationCountAggregateInputType | true
    _min?: QuotationMinAggregateInputType
    _max?: QuotationMaxAggregateInputType
  }


  export type QuotationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    creatorId: string | null
    organisationId: string
    vendorId: string
    hasConvertedToOrder: boolean
    orderState: OrderStatus
    _count: QuotationCountAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  type GetQuotationGroupByPayload<T extends QuotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationGroupByOutputType[P]>
        }
      >
    >


  export type QuotationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    creatorId?: boolean
    organisationId?: boolean
    vendorId?: boolean
    hasConvertedToOrder?: boolean
    orderState?: boolean
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    creatorId?: boolean
    organisationId?: boolean
    vendorId?: boolean
    hasConvertedToOrder?: boolean
    orderState?: boolean
  }


  type QuotationGetPayload<S extends boolean | null | undefined | QuotationArgs> = $Types.GetResult<QuotationPayload, S>

  type QuotationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<QuotationFindManyArgs, 'select' | 'include'> & {
      select?: QuotationCountAggregateInputType | true
    }

  export interface QuotationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quotation'], meta: { name: 'Quotation' } }
    /**
     * Find zero or one Quotation that matches the filter.
     * @param {QuotationFindUniqueArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuotationFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuotationFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Quotation'> extends True ? Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Quotation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuotationFindUniqueOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuotationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Quotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuotationFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuotationFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Quotation'> extends True ? Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Quotation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuotationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Quotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotations
     * const quotations = await prisma.quotation.findMany()
     * 
     * // Get first 10 Quotations
     * const quotations = await prisma.quotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationWithIdOnly = await prisma.quotation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuotationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Quotation.
     * @param {QuotationCreateArgs} args - Arguments to create a Quotation.
     * @example
     * // Create one Quotation
     * const Quotation = await prisma.quotation.create({
     *   data: {
     *     // ... data to create a Quotation
     *   }
     * })
     * 
    **/
    create<T extends QuotationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationCreateArgs<ExtArgs>>
    ): Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Quotations.
     *     @param {QuotationCreateManyArgs} args - Arguments to create many Quotations.
     *     @example
     *     // Create many Quotations
     *     const quotation = await prisma.quotation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuotationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quotation.
     * @param {QuotationDeleteArgs} args - Arguments to delete one Quotation.
     * @example
     * // Delete one Quotation
     * const Quotation = await prisma.quotation.delete({
     *   where: {
     *     // ... filter to delete one Quotation
     *   }
     * })
     * 
    **/
    delete<T extends QuotationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationDeleteArgs<ExtArgs>>
    ): Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Quotation.
     * @param {QuotationUpdateArgs} args - Arguments to update one Quotation.
     * @example
     * // Update one Quotation
     * const quotation = await prisma.quotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuotationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationUpdateArgs<ExtArgs>>
    ): Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Quotations.
     * @param {QuotationDeleteManyArgs} args - Arguments to filter Quotations to delete.
     * @example
     * // Delete a few Quotations
     * const { count } = await prisma.quotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuotationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuotationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuotationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quotation.
     * @param {QuotationUpsertArgs} args - Arguments to update or create a Quotation.
     * @example
     * // Update or create a Quotation
     * const quotation = await prisma.quotation.upsert({
     *   create: {
     *     // ... data to create a Quotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quotation we want to update
     *   }
     * })
    **/
    upsert<T extends QuotationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuotationUpsertArgs<ExtArgs>>
    ): Prisma__QuotationClient<$Types.GetResult<QuotationPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCountArgs} args - Arguments to filter Quotations to count.
     * @example
     * // Count the number of Quotations
     * const count = await prisma.quotation.count({
     *   where: {
     *     // ... the filter for the Quotations we want to count
     *   }
     * })
    **/
    count<T extends QuotationCountArgs>(
      args?: Subset<T, QuotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationAggregateArgs>(args: Subset<T, QuotationAggregateArgs>): Prisma.PrismaPromise<GetQuotationAggregateType<T>>

    /**
     * Group by Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationGroupByArgs} args - Group by arguments.
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
      T extends QuotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationGroupByArgs['orderBy'] }
        : { orderBy?: QuotationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Quotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuotationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Quotation base type for findUnique actions
   */
  export type QuotationFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findUnique
   */
  export interface QuotationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends QuotationFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Quotation findUniqueOrThrow
   */
  export type QuotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }


  /**
   * Quotation base type for findFirst actions
   */
  export type QuotationFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: Enumerable<QuotationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: Enumerable<QuotationScalarFieldEnum>
  }

  /**
   * Quotation findFirst
   */
  export interface QuotationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends QuotationFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Quotation findFirstOrThrow
   */
  export type QuotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: Enumerable<QuotationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: Enumerable<QuotationScalarFieldEnum>
  }


  /**
   * Quotation findMany
   */
  export type QuotationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Filter, which Quotations to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: Enumerable<QuotationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    distinct?: Enumerable<QuotationScalarFieldEnum>
  }


  /**
   * Quotation create
   */
  export type QuotationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * The data needed to create a Quotation.
     */
    data: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
  }


  /**
   * Quotation createMany
   */
  export type QuotationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotations.
     */
    data: Enumerable<QuotationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Quotation update
   */
  export type QuotationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * The data needed to update a Quotation.
     */
    data: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
    /**
     * Choose, which Quotation to update.
     */
    where: QuotationWhereUniqueInput
  }


  /**
   * Quotation updateMany
   */
  export type QuotationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotations.
     */
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyInput>
    /**
     * Filter which Quotations to update
     */
    where?: QuotationWhereInput
  }


  /**
   * Quotation upsert
   */
  export type QuotationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * The filter to search for the Quotation to update in case it exists.
     */
    where: QuotationWhereUniqueInput
    /**
     * In case the Quotation found by the `where` argument doesn't exist, create a new Quotation with this data.
     */
    create: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
    /**
     * In case the Quotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
  }


  /**
   * Quotation delete
   */
  export type QuotationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Filter which Quotation to delete.
     */
    where: QuotationWhereUniqueInput
  }


  /**
   * Quotation deleteMany
   */
  export type QuotationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotations to delete
     */
    where?: QuotationWhereInput
  }


  /**
   * Quotation without action
   */
  export type QuotationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
  }



  /**
   * Model Attendance
   */


  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    punchInTime: Date | null
    punchOutTime: Date | null
    userID: string | null
    attendanceStatus: AttendanceStatus | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    punchInTime: Date | null
    punchOutTime: Date | null
    userID: string | null
    attendanceStatus: AttendanceStatus | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    punchInTime: number
    punchOutTime: number
    userID: number
    attendanceStatus: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    punchInTime?: true
    punchOutTime?: true
    userID?: true
    attendanceStatus?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    punchInTime?: true
    punchOutTime?: true
    userID?: true
    attendanceStatus?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    punchInTime?: true
    punchOutTime?: true
    userID?: true
    attendanceStatus?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: Enumerable<AttendanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: Enumerable<AttendanceOrderByWithAggregationInput>
    by: AttendanceScalarFieldEnum[]
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }


  export type AttendanceGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    punchInTime: Date
    punchOutTime: Date | null
    userID: string | null
    attendanceStatus: AttendanceStatus
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    punchInTime?: boolean
    punchOutTime?: boolean
    userID?: boolean
    attendanceStatus?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    punchInTime?: boolean
    punchOutTime?: boolean
    userID?: boolean
    attendanceStatus?: boolean
  }


  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceArgs> = $Types.GetResult<AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttendanceFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Attendance'> extends True ? Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttendanceFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Attendance'> extends True ? Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttendanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
    **/
    create<T extends AttendanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Attendances.
     *     @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     *     @example
     *     // Create many Attendances
     *     const attendance = await prisma.attendance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttendanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
    **/
    delete<T extends AttendanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttendanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttendanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttendanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
    **/
    upsert<T extends AttendanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Types.GetResult<AttendancePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Attendance base type for findUnique actions
   */
  export type AttendanceFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUnique
   */
  export interface AttendanceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AttendanceFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance base type for findFirst actions
   */
  export type AttendanceFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: Enumerable<AttendanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: Enumerable<AttendanceScalarFieldEnum>
  }

  /**
   * Attendance findFirst
   */
  export interface AttendanceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AttendanceFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: Enumerable<AttendanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: Enumerable<AttendanceScalarFieldEnum>
  }


  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: Enumerable<AttendanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: Enumerable<AttendanceScalarFieldEnum>
  }


  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }


  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: Enumerable<AttendanceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }


  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }


  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }


  /**
   * Attendance without action
   */
  export type AttendanceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
  }



  /**
   * Model LocationLog
   */


  export type AggregateLocationLog = {
    _count: LocationLogCountAggregateOutputType | null
    _min: LocationLogMinAggregateOutputType | null
    _max: LocationLogMaxAggregateOutputType | null
  }

  export type LocationLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    location: string | null
    attendanceId: string | null
  }

  export type LocationLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    location: string | null
    attendanceId: string | null
  }

  export type LocationLogCountAggregateOutputType = {
    id: number
    createdAt: number
    location: number
    attendanceId: number
    _all: number
  }


  export type LocationLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    location?: true
    attendanceId?: true
  }

  export type LocationLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    location?: true
    attendanceId?: true
  }

  export type LocationLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    location?: true
    attendanceId?: true
    _all?: true
  }

  export type LocationLogAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationLog to aggregate.
     */
    where?: LocationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationLogs to fetch.
     */
    orderBy?: Enumerable<LocationLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationLogs
    **/
    _count?: true | LocationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationLogMaxAggregateInputType
  }

  export type GetLocationLogAggregateType<T extends LocationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationLog[P]>
      : GetScalarType<T[P], AggregateLocationLog[P]>
  }




  export type LocationLogGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LocationLogWhereInput
    orderBy?: Enumerable<LocationLogOrderByWithAggregationInput>
    by: LocationLogScalarFieldEnum[]
    having?: LocationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationLogCountAggregateInputType | true
    _min?: LocationLogMinAggregateInputType
    _max?: LocationLogMaxAggregateInputType
  }


  export type LocationLogGroupByOutputType = {
    id: string
    createdAt: Date
    location: string | null
    attendanceId: string
    _count: LocationLogCountAggregateOutputType | null
    _min: LocationLogMinAggregateOutputType | null
    _max: LocationLogMaxAggregateOutputType | null
  }

  type GetLocationLogGroupByPayload<T extends LocationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LocationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationLogGroupByOutputType[P]>
            : GetScalarType<T[P], LocationLogGroupByOutputType[P]>
        }
      >
    >


  export type LocationLogSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    location?: boolean
    attendanceId?: boolean
  }, ExtArgs["result"]["locationLog"]>

  export type LocationLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    location?: boolean
    attendanceId?: boolean
  }


  type LocationLogGetPayload<S extends boolean | null | undefined | LocationLogArgs> = $Types.GetResult<LocationLogPayload, S>

  type LocationLogCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LocationLogFindManyArgs, 'select' | 'include'> & {
      select?: LocationLogCountAggregateInputType | true
    }

  export interface LocationLogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationLog'], meta: { name: 'LocationLog' } }
    /**
     * Find zero or one LocationLog that matches the filter.
     * @param {LocationLogFindUniqueArgs} args - Arguments to find a LocationLog
     * @example
     * // Get one LocationLog
     * const locationLog = await prisma.locationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationLogFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocationLogFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LocationLog'> extends True ? Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one LocationLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationLogFindUniqueOrThrowArgs} args - Arguments to find a LocationLog
     * @example
     * // Get one LocationLog
     * const locationLog = await prisma.locationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first LocationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationLogFindFirstArgs} args - Arguments to find a LocationLog
     * @example
     * // Get one LocationLog
     * const locationLog = await prisma.locationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationLogFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocationLogFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LocationLog'> extends True ? Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first LocationLog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationLogFindFirstOrThrowArgs} args - Arguments to find a LocationLog
     * @example
     * // Get one LocationLog
     * const locationLog = await prisma.locationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more LocationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationLogs
     * const locationLogs = await prisma.locationLog.findMany()
     * 
     * // Get first 10 LocationLogs
     * const locationLogs = await prisma.locationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationLogWithIdOnly = await prisma.locationLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a LocationLog.
     * @param {LocationLogCreateArgs} args - Arguments to create a LocationLog.
     * @example
     * // Create one LocationLog
     * const LocationLog = await prisma.locationLog.create({
     *   data: {
     *     // ... data to create a LocationLog
     *   }
     * })
     * 
    **/
    create<T extends LocationLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationLogCreateArgs<ExtArgs>>
    ): Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many LocationLogs.
     *     @param {LocationLogCreateManyArgs} args - Arguments to create many LocationLogs.
     *     @example
     *     // Create many LocationLogs
     *     const locationLog = await prisma.locationLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LocationLog.
     * @param {LocationLogDeleteArgs} args - Arguments to delete one LocationLog.
     * @example
     * // Delete one LocationLog
     * const LocationLog = await prisma.locationLog.delete({
     *   where: {
     *     // ... filter to delete one LocationLog
     *   }
     * })
     * 
    **/
    delete<T extends LocationLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocationLogDeleteArgs<ExtArgs>>
    ): Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one LocationLog.
     * @param {LocationLogUpdateArgs} args - Arguments to update one LocationLog.
     * @example
     * // Update one LocationLog
     * const locationLog = await prisma.locationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationLogUpdateArgs<ExtArgs>>
    ): Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more LocationLogs.
     * @param {LocationLogDeleteManyArgs} args - Arguments to filter LocationLogs to delete.
     * @example
     * // Delete a few LocationLogs
     * const { count } = await prisma.locationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationLogs
     * const locationLog = await prisma.locationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocationLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LocationLog.
     * @param {LocationLogUpsertArgs} args - Arguments to update or create a LocationLog.
     * @example
     * // Update or create a LocationLog
     * const locationLog = await prisma.locationLog.upsert({
     *   create: {
     *     // ... data to create a LocationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationLog we want to update
     *   }
     * })
    **/
    upsert<T extends LocationLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocationLogUpsertArgs<ExtArgs>>
    ): Prisma__LocationLogClient<$Types.GetResult<LocationLogPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of LocationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationLogCountArgs} args - Arguments to filter LocationLogs to count.
     * @example
     * // Count the number of LocationLogs
     * const count = await prisma.locationLog.count({
     *   where: {
     *     // ... the filter for the LocationLogs we want to count
     *   }
     * })
    **/
    count<T extends LocationLogCountArgs>(
      args?: Subset<T, LocationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationLogAggregateArgs>(args: Subset<T, LocationLogAggregateArgs>): Prisma.PrismaPromise<GetLocationLogAggregateType<T>>

    /**
     * Group by LocationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationLogGroupByArgs} args - Group by arguments.
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
      T extends LocationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationLogGroupByArgs['orderBy'] }
        : { orderBy?: LocationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LocationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocationLogClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LocationLog base type for findUnique actions
   */
  export type LocationLogFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * Filter, which LocationLog to fetch.
     */
    where: LocationLogWhereUniqueInput
  }

  /**
   * LocationLog findUnique
   */
  export interface LocationLogFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LocationLogFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LocationLog findUniqueOrThrow
   */
  export type LocationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * Filter, which LocationLog to fetch.
     */
    where: LocationLogWhereUniqueInput
  }


  /**
   * LocationLog base type for findFirst actions
   */
  export type LocationLogFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * Filter, which LocationLog to fetch.
     */
    where?: LocationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationLogs to fetch.
     */
    orderBy?: Enumerable<LocationLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationLogs.
     */
    cursor?: LocationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationLogs.
     */
    distinct?: Enumerable<LocationLogScalarFieldEnum>
  }

  /**
   * LocationLog findFirst
   */
  export interface LocationLogFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LocationLogFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LocationLog findFirstOrThrow
   */
  export type LocationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * Filter, which LocationLog to fetch.
     */
    where?: LocationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationLogs to fetch.
     */
    orderBy?: Enumerable<LocationLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationLogs.
     */
    cursor?: LocationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationLogs.
     */
    distinct?: Enumerable<LocationLogScalarFieldEnum>
  }


  /**
   * LocationLog findMany
   */
  export type LocationLogFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * Filter, which LocationLogs to fetch.
     */
    where?: LocationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationLogs to fetch.
     */
    orderBy?: Enumerable<LocationLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationLogs.
     */
    cursor?: LocationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationLogs.
     */
    skip?: number
    distinct?: Enumerable<LocationLogScalarFieldEnum>
  }


  /**
   * LocationLog create
   */
  export type LocationLogCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * The data needed to create a LocationLog.
     */
    data: XOR<LocationLogCreateInput, LocationLogUncheckedCreateInput>
  }


  /**
   * LocationLog createMany
   */
  export type LocationLogCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationLogs.
     */
    data: Enumerable<LocationLogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * LocationLog update
   */
  export type LocationLogUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * The data needed to update a LocationLog.
     */
    data: XOR<LocationLogUpdateInput, LocationLogUncheckedUpdateInput>
    /**
     * Choose, which LocationLog to update.
     */
    where: LocationLogWhereUniqueInput
  }


  /**
   * LocationLog updateMany
   */
  export type LocationLogUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationLogs.
     */
    data: XOR<LocationLogUpdateManyMutationInput, LocationLogUncheckedUpdateManyInput>
    /**
     * Filter which LocationLogs to update
     */
    where?: LocationLogWhereInput
  }


  /**
   * LocationLog upsert
   */
  export type LocationLogUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * The filter to search for the LocationLog to update in case it exists.
     */
    where: LocationLogWhereUniqueInput
    /**
     * In case the LocationLog found by the `where` argument doesn't exist, create a new LocationLog with this data.
     */
    create: XOR<LocationLogCreateInput, LocationLogUncheckedCreateInput>
    /**
     * In case the LocationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationLogUpdateInput, LocationLogUncheckedUpdateInput>
  }


  /**
   * LocationLog delete
   */
  export type LocationLogDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
    /**
     * Filter which LocationLog to delete.
     */
    where: LocationLogWhereUniqueInput
  }


  /**
   * LocationLog deleteMany
   */
  export type LocationLogDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationLogs to delete
     */
    where?: LocationLogWhereInput
  }


  /**
   * LocationLog without action
   */
  export type LocationLogArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationLog
     */
    select?: LocationLogSelect<ExtArgs> | null
  }



  /**
   * Model Task
   */


  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    creatorId: string | null
    assignedToId: string | null
    status: TaskStatus | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    creatorId: string | null
    assignedToId: string | null
    status: TaskStatus | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    creatorId: number
    assignedToId: number
    status: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    assignedToId?: true
    status?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    assignedToId?: true
    status?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    creatorId?: true
    assignedToId?: true
    status?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: Enumerable<TaskOrderByWithAggregationInput>
    by: TaskScalarFieldEnum[]
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }


  export type TaskGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    creatorId: string
    assignedToId: string
    status: TaskStatus
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    creatorId?: boolean
    assignedToId?: boolean
    status?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    creatorId?: boolean
    assignedToId?: boolean
    status?: boolean
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskArgs> = $Types.GetResult<TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Task'> extends True ? Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Task'> extends True ? Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Task base type for findUnique actions
   */
  export type TaskFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUnique
   */
  export interface TaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TaskFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task base type for findFirst actions
   */
  export type TaskFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: Enumerable<TaskScalarFieldEnum>
  }

  /**
   * Task findFirst
   */
  export interface TaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TaskFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: Enumerable<TaskCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }


  /**
   * Task without action
   */
  export type TaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
  }



  /**
   * Model Expense
   */


  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: string | null
    metadata: string | null
    paymentStatus: ExpensePaymentStatus | null
    creatorId: string | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: string | null
    metadata: string | null
    paymentStatus: ExpensePaymentStatus | null
    creatorId: string | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    amount: number
    metadata: number
    paymentStatus: number
    creatorId: number
    _all: number
  }


  export type ExpenseMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    metadata?: true
    paymentStatus?: true
    creatorId?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    metadata?: true
    paymentStatus?: true
    creatorId?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    metadata?: true
    paymentStatus?: true
    creatorId?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Enumerable<ExpenseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: Enumerable<ExpenseOrderByWithAggregationInput>
    by: ExpenseScalarFieldEnum[]
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }


  export type ExpenseGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    amount: string
    metadata: string | null
    paymentStatus: ExpensePaymentStatus
    creatorId: string | null
    _count: ExpenseCountAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    metadata?: boolean
    paymentStatus?: boolean
    creatorId?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    metadata?: boolean
    paymentStatus?: boolean
    creatorId?: boolean
  }


  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseArgs> = $Types.GetResult<ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ExpenseFindManyArgs, 'select' | 'include'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpenseFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Expense'> extends True ? Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Expense that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpenseFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Expense'> extends True ? Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Expense that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExpenseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
    **/
    create<T extends ExpenseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Expenses.
     *     @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     *     @example
     *     // Create many Expenses
     *     const expense = await prisma.expense.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExpenseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
    **/
    delete<T extends ExpenseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpenseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpenseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpenseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
    **/
    upsert<T extends ExpenseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>
    ): Prisma__ExpenseClient<$Types.GetResult<ExpensePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Expense base type for findUnique actions
   */
  export type ExpenseFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUnique
   */
  export interface ExpenseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExpenseFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }


  /**
   * Expense base type for findFirst actions
   */
  export type ExpenseFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Enumerable<ExpenseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: Enumerable<ExpenseScalarFieldEnum>
  }

  /**
   * Expense findFirst
   */
  export interface ExpenseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExpenseFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Enumerable<ExpenseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: Enumerable<ExpenseScalarFieldEnum>
  }


  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Enumerable<ExpenseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: Enumerable<ExpenseScalarFieldEnum>
  }


  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }


  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: Enumerable<ExpenseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }


  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
  }


  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }


  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }


  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
  }


  /**
   * Expense without action
   */
  export type ExpenseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
  }



  /**
   * Model Announcement
   */


  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    organisationId: string | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metadata: string | null
    organisationId: string | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    organisationId: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    organisationId?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    organisationId?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    organisationId?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: Enumerable<AnnouncementOrderByWithAggregationInput>
    by: AnnouncementScalarFieldEnum[]
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }


  export type AnnouncementGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: string | null
    organisationId: string | null
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    organisationId?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    organisationId?: boolean
  }


  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementArgs> = $Types.GetResult<AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AnnouncementFindManyArgs, 'select' | 'include'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnnouncementFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Announcement'> extends True ? Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Announcement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnnouncementFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Announcement'> extends True ? Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Announcement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnnouncementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
    **/
    create<T extends AnnouncementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>
    ): Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Announcements.
     *     @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     *     @example
     *     // Create many Announcements
     *     const announcement = await prisma.announcement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnnouncementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
    **/
    delete<T extends AnnouncementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>
    ): Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnnouncementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>
    ): Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnnouncementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnnouncementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
    **/
    upsert<T extends AnnouncementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>
    ): Prisma__AnnouncementClient<$Types.GetResult<AnnouncementPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Announcement base type for findUnique actions
   */
  export type AnnouncementFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUnique
   */
  export interface AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AnnouncementFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement base type for findFirst actions
   */
  export type AnnouncementFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }

  /**
   * Announcement findFirst
   */
  export interface AnnouncementFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AnnouncementFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }


  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: Enumerable<AnnouncementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: Enumerable<AnnouncementScalarFieldEnum>
  }


  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }


  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: Enumerable<AnnouncementCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
  }


  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }


  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }


  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
  }


  /**
   * Announcement without action
   */
  export type AnnouncementArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    planType: 'planType',
    isTrial: 'isTrial',
    isAdFree: 'isAdFree',
    maxParticipants: 'maxParticipants'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const PlanPurchaseScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    transactionHash: 'transactionHash',
    modeOfPayment: 'modeOfPayment',
    amountInINR: 'amountInINR',
    amountInPaidCurrency: 'amountInPaidCurrency',
    paymentCurrencyName: 'paymentCurrencyName',
    isConfirmed: 'isConfirmed',
    planId: 'planId',
    organisationId: 'organisationId'
  };

  export type PlanPurchaseScalarFieldEnum = (typeof PlanPurchaseScalarFieldEnum)[keyof typeof PlanPurchaseScalarFieldEnum]


  export const OrganisationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name',
    address: 'address',
    metadata: 'metadata',
    activePlanId: 'activePlanId'
  };

  export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum]


  export const SalesWalaAdminScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname',
    metadata: 'metadata'
  };

  export type SalesWalaAdminScalarFieldEnum = (typeof SalesWalaAdminScalarFieldEnum)[keyof typeof SalesWalaAdminScalarFieldEnum]


  export const SalesWalaAppUserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname',
    role: 'role',
    organisationId: 'organisationId',
    metadata: 'metadata',
    isVerified: 'isVerified',
    deviceId: 'deviceId',
    isEnabled: 'isEnabled'
  };

  export type SalesWalaAppUserScalarFieldEnum = (typeof SalesWalaAppUserScalarFieldEnum)[keyof typeof SalesWalaAppUserScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    defaultPrice: 'defaultPrice',
    metadata: 'metadata',
    organisationId: 'organisationId',
    isDisabled: 'isDisabled'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    creatorId: 'creatorId',
    organisationId: 'organisationId'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const QuotationParticularsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    productId: 'productId',
    metadata: 'metadata',
    quotationId: 'quotationId'
  };

  export type QuotationParticularsScalarFieldEnum = (typeof QuotationParticularsScalarFieldEnum)[keyof typeof QuotationParticularsScalarFieldEnum]


  export const QuotationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    creatorId: 'creatorId',
    organisationId: 'organisationId',
    vendorId: 'vendorId',
    hasConvertedToOrder: 'hasConvertedToOrder',
    orderState: 'orderState'
  };

  export type QuotationScalarFieldEnum = (typeof QuotationScalarFieldEnum)[keyof typeof QuotationScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    punchInTime: 'punchInTime',
    punchOutTime: 'punchOutTime',
    userID: 'userID',
    attendanceStatus: 'attendanceStatus'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const LocationLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    location: 'location',
    attendanceId: 'attendanceId'
  };

  export type LocationLogScalarFieldEnum = (typeof LocationLogScalarFieldEnum)[keyof typeof LocationLogScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    creatorId: 'creatorId',
    assignedToId: 'assignedToId',
    status: 'status'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    amount: 'amount',
    metadata: 'metadata',
    paymentStatus: 'paymentStatus',
    creatorId: 'creatorId'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    organisationId: 'organisationId'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


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
   * Deep Input Types
   */


  export type PlanWhereInput = {
    AND?: Enumerable<PlanWhereInput>
    OR?: Enumerable<PlanWhereInput>
    NOT?: Enumerable<PlanWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    expiresAt?: DateTimeFilter | Date | string
    planType?: EnumPlanTypeFilter | PlanType
    isTrial?: BoolFilter | boolean
    isAdFree?: BoolFilter | boolean
    maxParticipants?: IntFilter | number
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    planType?: SortOrder
    isTrial?: SortOrder
    isAdFree?: SortOrder
    maxParticipants?: SortOrder
  }

  export type PlanWhereUniqueInput = {
    id?: string
  }

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    planType?: SortOrder
    isTrial?: SortOrder
    isAdFree?: SortOrder
    maxParticipants?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlanScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlanScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlanScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
    planType?: EnumPlanTypeWithAggregatesFilter | PlanType
    isTrial?: BoolWithAggregatesFilter | boolean
    isAdFree?: BoolWithAggregatesFilter | boolean
    maxParticipants?: IntWithAggregatesFilter | number
  }

  export type PlanPurchaseWhereInput = {
    AND?: Enumerable<PlanPurchaseWhereInput>
    OR?: Enumerable<PlanPurchaseWhereInput>
    NOT?: Enumerable<PlanPurchaseWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    transactionHash?: StringFilter | string
    modeOfPayment?: StringFilter | string
    amountInINR?: StringFilter | string
    amountInPaidCurrency?: StringFilter | string
    paymentCurrencyName?: StringFilter | string
    isConfirmed?: BoolFilter | boolean
    planId?: StringFilter | string
    organisationId?: StringFilter | string
  }

  export type PlanPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionHash?: SortOrder
    modeOfPayment?: SortOrder
    amountInINR?: SortOrder
    amountInPaidCurrency?: SortOrder
    paymentCurrencyName?: SortOrder
    isConfirmed?: SortOrder
    planId?: SortOrder
    organisationId?: SortOrder
  }

  export type PlanPurchaseWhereUniqueInput = {
    id?: string
  }

  export type PlanPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionHash?: SortOrder
    modeOfPayment?: SortOrder
    amountInINR?: SortOrder
    amountInPaidCurrency?: SortOrder
    paymentCurrencyName?: SortOrder
    isConfirmed?: SortOrder
    planId?: SortOrder
    organisationId?: SortOrder
    _count?: PlanPurchaseCountOrderByAggregateInput
    _max?: PlanPurchaseMaxOrderByAggregateInput
    _min?: PlanPurchaseMinOrderByAggregateInput
  }

  export type PlanPurchaseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlanPurchaseScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlanPurchaseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlanPurchaseScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    transactionHash?: StringWithAggregatesFilter | string
    modeOfPayment?: StringWithAggregatesFilter | string
    amountInINR?: StringWithAggregatesFilter | string
    amountInPaidCurrency?: StringWithAggregatesFilter | string
    paymentCurrencyName?: StringWithAggregatesFilter | string
    isConfirmed?: BoolWithAggregatesFilter | boolean
    planId?: StringWithAggregatesFilter | string
    organisationId?: StringWithAggregatesFilter | string
  }

  export type OrganisationWhereInput = {
    AND?: Enumerable<OrganisationWhereInput>
    OR?: Enumerable<OrganisationWhereInput>
    NOT?: Enumerable<OrganisationWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    name?: StringFilter | string
    address?: StringNullableFilter | string | null
    metadata?: StringNullableFilter | string | null
    activePlanId?: StringNullableFilter | string | null
  }

  export type OrganisationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    activePlanId?: SortOrderInput | SortOrder
  }

  export type OrganisationWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type OrganisationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    activePlanId?: SortOrderInput | SortOrder
    _count?: OrganisationCountOrderByAggregateInput
    _max?: OrganisationMaxOrderByAggregateInput
    _min?: OrganisationMinOrderByAggregateInput
  }

  export type OrganisationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrganisationScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrganisationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrganisationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    address?: StringNullableWithAggregatesFilter | string | null
    metadata?: StringNullableWithAggregatesFilter | string | null
    activePlanId?: StringNullableWithAggregatesFilter | string | null
  }

  export type SalesWalaAdminWhereInput = {
    AND?: Enumerable<SalesWalaAdminWhereInput>
    OR?: Enumerable<SalesWalaAdminWhereInput>
    NOT?: Enumerable<SalesWalaAdminWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    firstname?: StringNullableFilter | string | null
    lastname?: StringNullableFilter | string | null
    metadata?: StringNullableFilter | string | null
  }

  export type SalesWalaAdminOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
  }

  export type SalesWalaAdminWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type SalesWalaAdminOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: SalesWalaAdminCountOrderByAggregateInput
    _max?: SalesWalaAdminMaxOrderByAggregateInput
    _min?: SalesWalaAdminMinOrderByAggregateInput
  }

  export type SalesWalaAdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SalesWalaAdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<SalesWalaAdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SalesWalaAdminScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    firstname?: StringNullableWithAggregatesFilter | string | null
    lastname?: StringNullableWithAggregatesFilter | string | null
    metadata?: StringNullableWithAggregatesFilter | string | null
  }

  export type SalesWalaAppUserWhereInput = {
    AND?: Enumerable<SalesWalaAppUserWhereInput>
    OR?: Enumerable<SalesWalaAppUserWhereInput>
    NOT?: Enumerable<SalesWalaAppUserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    firstname?: StringNullableFilter | string | null
    lastname?: StringNullableFilter | string | null
    role?: EnumUserRoleFilter | UserRole
    organisationId?: StringNullableFilter | string | null
    metadata?: StringNullableFilter | string | null
    isVerified?: BoolFilter | boolean
    deviceId?: StringNullableFilter | string | null
    isEnabled?: BoolFilter | boolean
  }

  export type SalesWalaAppUserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    role?: SortOrder
    organisationId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    isEnabled?: SortOrder
  }

  export type SalesWalaAppUserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type SalesWalaAppUserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    role?: SortOrder
    organisationId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    isEnabled?: SortOrder
    _count?: SalesWalaAppUserCountOrderByAggregateInput
    _max?: SalesWalaAppUserMaxOrderByAggregateInput
    _min?: SalesWalaAppUserMinOrderByAggregateInput
  }

  export type SalesWalaAppUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SalesWalaAppUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<SalesWalaAppUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SalesWalaAppUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    firstname?: StringNullableWithAggregatesFilter | string | null
    lastname?: StringNullableWithAggregatesFilter | string | null
    role?: EnumUserRoleWithAggregatesFilter | UserRole
    organisationId?: StringNullableWithAggregatesFilter | string | null
    metadata?: StringNullableWithAggregatesFilter | string | null
    isVerified?: BoolWithAggregatesFilter | boolean
    deviceId?: StringNullableWithAggregatesFilter | string | null
    isEnabled?: BoolWithAggregatesFilter | boolean
  }

  export type ProductsWhereInput = {
    AND?: Enumerable<ProductsWhereInput>
    OR?: Enumerable<ProductsWhereInput>
    NOT?: Enumerable<ProductsWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    defaultPrice?: StringFilter | string
    metadata?: StringNullableFilter | string | null
    organisationId?: StringNullableFilter | string | null
    isDisabled?: BoolFilter | boolean
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    defaultPrice?: SortOrder
    metadata?: SortOrderInput | SortOrder
    organisationId?: SortOrderInput | SortOrder
    isDisabled?: SortOrder
  }

  export type ProductsWhereUniqueInput = {
    id?: string
  }

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    defaultPrice?: SortOrder
    metadata?: SortOrderInput | SortOrder
    organisationId?: SortOrderInput | SortOrder
    isDisabled?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    defaultPrice?: StringWithAggregatesFilter | string
    metadata?: StringNullableWithAggregatesFilter | string | null
    organisationId?: StringNullableWithAggregatesFilter | string | null
    isDisabled?: BoolWithAggregatesFilter | boolean
  }

  export type VendorWhereInput = {
    AND?: Enumerable<VendorWhereInput>
    OR?: Enumerable<VendorWhereInput>
    NOT?: Enumerable<VendorWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    metadata?: StringNullableFilter | string | null
    creatorId?: StringNullableFilter | string | null
    organisationId?: StringNullableFilter | string | null
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    organisationId?: SortOrderInput | SortOrder
  }

  export type VendorWhereUniqueInput = {
    id?: string
  }

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    organisationId?: SortOrderInput | SortOrder
    _count?: VendorCountOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VendorScalarWhereWithAggregatesInput>
    OR?: Enumerable<VendorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VendorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    metadata?: StringNullableWithAggregatesFilter | string | null
    creatorId?: StringNullableWithAggregatesFilter | string | null
    organisationId?: StringNullableWithAggregatesFilter | string | null
  }

  export type QuotationParticularsWhereInput = {
    AND?: Enumerable<QuotationParticularsWhereInput>
    OR?: Enumerable<QuotationParticularsWhereInput>
    NOT?: Enumerable<QuotationParticularsWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    productId?: StringNullableFilter | string | null
    metadata?: StringNullableFilter | string | null
    quotationId?: StringNullableFilter | string | null
  }

  export type QuotationParticularsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    quotationId?: SortOrderInput | SortOrder
  }

  export type QuotationParticularsWhereUniqueInput = {
    id?: string
  }

  export type QuotationParticularsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    quotationId?: SortOrderInput | SortOrder
    _count?: QuotationParticularsCountOrderByAggregateInput
    _max?: QuotationParticularsMaxOrderByAggregateInput
    _min?: QuotationParticularsMinOrderByAggregateInput
  }

  export type QuotationParticularsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuotationParticularsScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuotationParticularsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuotationParticularsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    productId?: StringNullableWithAggregatesFilter | string | null
    metadata?: StringNullableWithAggregatesFilter | string | null
    quotationId?: StringNullableWithAggregatesFilter | string | null
  }

  export type QuotationWhereInput = {
    AND?: Enumerable<QuotationWhereInput>
    OR?: Enumerable<QuotationWhereInput>
    NOT?: Enumerable<QuotationWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    metadata?: StringNullableFilter | string | null
    creatorId?: StringNullableFilter | string | null
    organisationId?: StringFilter | string
    vendorId?: StringFilter | string
    hasConvertedToOrder?: BoolFilter | boolean
    orderState?: EnumOrderStatusFilter | OrderStatus
  }

  export type QuotationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    organisationId?: SortOrder
    vendorId?: SortOrder
    hasConvertedToOrder?: SortOrder
    orderState?: SortOrder
  }

  export type QuotationWhereUniqueInput = {
    id?: string
  }

  export type QuotationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    organisationId?: SortOrder
    vendorId?: SortOrder
    hasConvertedToOrder?: SortOrder
    orderState?: SortOrder
    _count?: QuotationCountOrderByAggregateInput
    _max?: QuotationMaxOrderByAggregateInput
    _min?: QuotationMinOrderByAggregateInput
  }

  export type QuotationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuotationScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuotationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuotationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    metadata?: StringNullableWithAggregatesFilter | string | null
    creatorId?: StringNullableWithAggregatesFilter | string | null
    organisationId?: StringWithAggregatesFilter | string
    vendorId?: StringWithAggregatesFilter | string
    hasConvertedToOrder?: BoolWithAggregatesFilter | boolean
    orderState?: EnumOrderStatusWithAggregatesFilter | OrderStatus
  }

  export type AttendanceWhereInput = {
    AND?: Enumerable<AttendanceWhereInput>
    OR?: Enumerable<AttendanceWhereInput>
    NOT?: Enumerable<AttendanceWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    metadata?: StringNullableFilter | string | null
    punchInTime?: DateTimeFilter | Date | string
    punchOutTime?: DateTimeNullableFilter | Date | string | null
    userID?: StringNullableFilter | string | null
    attendanceStatus?: EnumAttendanceStatusFilter | AttendanceStatus
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    punchInTime?: SortOrder
    punchOutTime?: SortOrderInput | SortOrder
    userID?: SortOrderInput | SortOrder
    attendanceStatus?: SortOrder
  }

  export type AttendanceWhereUniqueInput = {
    id?: string
  }

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    punchInTime?: SortOrder
    punchOutTime?: SortOrderInput | SortOrder
    userID?: SortOrderInput | SortOrder
    attendanceStatus?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AttendanceScalarWhereWithAggregatesInput>
    OR?: Enumerable<AttendanceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AttendanceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    metadata?: StringNullableWithAggregatesFilter | string | null
    punchInTime?: DateTimeWithAggregatesFilter | Date | string
    punchOutTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    userID?: StringNullableWithAggregatesFilter | string | null
    attendanceStatus?: EnumAttendanceStatusWithAggregatesFilter | AttendanceStatus
  }

  export type LocationLogWhereInput = {
    AND?: Enumerable<LocationLogWhereInput>
    OR?: Enumerable<LocationLogWhereInput>
    NOT?: Enumerable<LocationLogWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    location?: StringNullableFilter | string | null
    attendanceId?: StringFilter | string
  }

  export type LocationLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    location?: SortOrderInput | SortOrder
    attendanceId?: SortOrder
  }

  export type LocationLogWhereUniqueInput = {
    id?: string
  }

  export type LocationLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    location?: SortOrderInput | SortOrder
    attendanceId?: SortOrder
    _count?: LocationLogCountOrderByAggregateInput
    _max?: LocationLogMaxOrderByAggregateInput
    _min?: LocationLogMinOrderByAggregateInput
  }

  export type LocationLogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocationLogScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocationLogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocationLogScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    location?: StringNullableWithAggregatesFilter | string | null
    attendanceId?: StringWithAggregatesFilter | string
  }

  export type TaskWhereInput = {
    AND?: Enumerable<TaskWhereInput>
    OR?: Enumerable<TaskWhereInput>
    NOT?: Enumerable<TaskWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    metadata?: StringNullableFilter | string | null
    creatorId?: StringFilter | string
    assignedToId?: StringFilter | string
    status?: EnumTaskStatusFilter | TaskStatus
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
  }

  export type TaskWhereUniqueInput = {
    id?: string
  }

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TaskScalarWhereWithAggregatesInput>
    OR?: Enumerable<TaskScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TaskScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    metadata?: StringNullableWithAggregatesFilter | string | null
    creatorId?: StringWithAggregatesFilter | string
    assignedToId?: StringWithAggregatesFilter | string
    status?: EnumTaskStatusWithAggregatesFilter | TaskStatus
  }

  export type ExpenseWhereInput = {
    AND?: Enumerable<ExpenseWhereInput>
    OR?: Enumerable<ExpenseWhereInput>
    NOT?: Enumerable<ExpenseWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    amount?: StringFilter | string
    metadata?: StringNullableFilter | string | null
    paymentStatus?: EnumExpensePaymentStatusFilter | ExpensePaymentStatus
    creatorId?: StringNullableFilter | string | null
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    metadata?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    creatorId?: SortOrderInput | SortOrder
  }

  export type ExpenseWhereUniqueInput = {
    id?: string
  }

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    metadata?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    creatorId?: SortOrderInput | SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExpenseScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExpenseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExpenseScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    amount?: StringWithAggregatesFilter | string
    metadata?: StringNullableWithAggregatesFilter | string | null
    paymentStatus?: EnumExpensePaymentStatusWithAggregatesFilter | ExpensePaymentStatus
    creatorId?: StringNullableWithAggregatesFilter | string | null
  }

  export type AnnouncementWhereInput = {
    AND?: Enumerable<AnnouncementWhereInput>
    OR?: Enumerable<AnnouncementWhereInput>
    NOT?: Enumerable<AnnouncementWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    metadata?: StringNullableFilter | string | null
    organisationId?: StringNullableFilter | string | null
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    organisationId?: SortOrderInput | SortOrder
  }

  export type AnnouncementWhereUniqueInput = {
    id?: string
  }

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    organisationId?: SortOrderInput | SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnnouncementScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    metadata?: StringNullableWithAggregatesFilter | string | null
    organisationId?: StringNullableWithAggregatesFilter | string | null
  }

  export type PlanCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    planType?: PlanType
    isTrial: boolean
    isAdFree: boolean
    maxParticipants?: number
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    planType?: PlanType
    isTrial: boolean
    isAdFree: boolean
    maxParticipants?: number
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | PlanType
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isAdFree?: BoolFieldUpdateOperationsInput | boolean
    maxParticipants?: IntFieldUpdateOperationsInput | number
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | PlanType
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isAdFree?: BoolFieldUpdateOperationsInput | boolean
    maxParticipants?: IntFieldUpdateOperationsInput | number
  }

  export type PlanCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    planType?: PlanType
    isTrial: boolean
    isAdFree: boolean
    maxParticipants?: number
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | PlanType
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isAdFree?: BoolFieldUpdateOperationsInput | boolean
    maxParticipants?: IntFieldUpdateOperationsInput | number
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | PlanType
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isAdFree?: BoolFieldUpdateOperationsInput | boolean
    maxParticipants?: IntFieldUpdateOperationsInput | number
  }

  export type PlanPurchaseCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionHash: string
    modeOfPayment: string
    amountInINR: string
    amountInPaidCurrency: string
    paymentCurrencyName: string
    isConfirmed: boolean
    planId: string
    organisationId: string
  }

  export type PlanPurchaseUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionHash: string
    modeOfPayment: string
    amountInINR: string
    amountInPaidCurrency: string
    paymentCurrencyName: string
    isConfirmed: boolean
    planId: string
    organisationId: string
  }

  export type PlanPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    modeOfPayment?: StringFieldUpdateOperationsInput | string
    amountInINR?: StringFieldUpdateOperationsInput | string
    amountInPaidCurrency?: StringFieldUpdateOperationsInput | string
    paymentCurrencyName?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    planId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    modeOfPayment?: StringFieldUpdateOperationsInput | string
    amountInINR?: StringFieldUpdateOperationsInput | string
    amountInPaidCurrency?: StringFieldUpdateOperationsInput | string
    paymentCurrencyName?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    planId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanPurchaseCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionHash: string
    modeOfPayment: string
    amountInINR: string
    amountInPaidCurrency: string
    paymentCurrencyName: string
    isConfirmed: boolean
    planId: string
    organisationId: string
  }

  export type PlanPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    modeOfPayment?: StringFieldUpdateOperationsInput | string
    amountInINR?: StringFieldUpdateOperationsInput | string
    amountInPaidCurrency?: StringFieldUpdateOperationsInput | string
    paymentCurrencyName?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    planId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    modeOfPayment?: StringFieldUpdateOperationsInput | string
    amountInINR?: StringFieldUpdateOperationsInput | string
    amountInPaidCurrency?: StringFieldUpdateOperationsInput | string
    paymentCurrencyName?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    planId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
  }

  export type OrganisationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    address?: string | null
    metadata?: string | null
    activePlanId?: string | null
  }

  export type OrganisationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    address?: string | null
    metadata?: string | null
    activePlanId?: string | null
  }

  export type OrganisationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    activePlanId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    activePlanId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    address?: string | null
    metadata?: string | null
    activePlanId?: string | null
  }

  export type OrganisationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    activePlanId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    activePlanId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalesWalaAdminCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    metadata?: string | null
  }

  export type SalesWalaAdminUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    metadata?: string | null
  }

  export type SalesWalaAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalesWalaAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalesWalaAdminCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    metadata?: string | null
  }

  export type SalesWalaAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalesWalaAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalesWalaAppUserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    role: UserRole
    organisationId?: string | null
    metadata?: string | null
    isVerified: boolean
    deviceId?: string | null
    isEnabled?: boolean
  }

  export type SalesWalaAppUserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    role: UserRole
    organisationId?: string | null
    metadata?: string | null
    isVerified: boolean
    deviceId?: string | null
    isEnabled?: boolean
  }

  export type SalesWalaAppUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SalesWalaAppUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SalesWalaAppUserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    role: UserRole
    organisationId?: string | null
    metadata?: string | null
    isVerified: boolean
    deviceId?: string | null
    isEnabled?: boolean
  }

  export type SalesWalaAppUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SalesWalaAppUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultPrice: string
    metadata?: string | null
    organisationId?: string | null
    isDisabled?: boolean
  }

  export type ProductsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultPrice: string
    metadata?: string | null
    organisationId?: string | null
    isDisabled?: boolean
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultPrice?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultPrice?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultPrice: string
    metadata?: string | null
    organisationId?: string | null
    isDisabled?: boolean
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultPrice?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultPrice?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VendorCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId?: string | null
    organisationId?: string | null
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId?: string | null
    organisationId?: string | null
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VendorCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId?: string | null
    organisationId?: string | null
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationParticularsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: string | null
    metadata?: string | null
    quotationId?: string | null
  }

  export type QuotationParticularsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: string | null
    metadata?: string | null
    quotationId?: string | null
  }

  export type QuotationParticularsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    quotationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationParticularsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    quotationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationParticularsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: string | null
    metadata?: string | null
    quotationId?: string | null
  }

  export type QuotationParticularsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    quotationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationParticularsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    quotationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId?: string | null
    organisationId: string
    vendorId: string
    hasConvertedToOrder: boolean
    orderState?: OrderStatus
  }

  export type QuotationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId?: string | null
    organisationId: string
    vendorId: string
    hasConvertedToOrder: boolean
    orderState?: OrderStatus
  }

  export type QuotationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    hasConvertedToOrder?: BoolFieldUpdateOperationsInput | boolean
    orderState?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
  }

  export type QuotationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    hasConvertedToOrder?: BoolFieldUpdateOperationsInput | boolean
    orderState?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
  }

  export type QuotationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId?: string | null
    organisationId: string
    vendorId: string
    hasConvertedToOrder: boolean
    orderState?: OrderStatus
  }

  export type QuotationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    hasConvertedToOrder?: BoolFieldUpdateOperationsInput | boolean
    orderState?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
  }

  export type QuotationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    hasConvertedToOrder?: BoolFieldUpdateOperationsInput | boolean
    orderState?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
  }

  export type AttendanceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    punchInTime?: Date | string
    punchOutTime?: Date | string | null
    userID?: string | null
    attendanceStatus?: AttendanceStatus
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    punchInTime?: Date | string
    punchOutTime?: Date | string | null
    userID?: string | null
    attendanceStatus?: AttendanceStatus
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    punchInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    punchOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | AttendanceStatus
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    punchInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    punchOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | AttendanceStatus
  }

  export type AttendanceCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    punchInTime?: Date | string
    punchOutTime?: Date | string | null
    userID?: string | null
    attendanceStatus?: AttendanceStatus
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    punchInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    punchOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | AttendanceStatus
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    punchInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    punchOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | AttendanceStatus
  }

  export type LocationLogCreateInput = {
    id?: string
    createdAt?: Date | string
    location?: string | null
    attendanceId: string
  }

  export type LocationLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    location?: string | null
    attendanceId: string
  }

  export type LocationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    attendanceId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    attendanceId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    location?: string | null
    attendanceId: string
  }

  export type LocationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    attendanceId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    attendanceId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId: string
    assignedToId: string
    status?: TaskStatus
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId: string
    assignedToId: string
    status?: TaskStatus
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | TaskStatus
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | TaskStatus
  }

  export type TaskCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    creatorId: string
    assignedToId: string
    status?: TaskStatus
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | TaskStatus
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assignedToId?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | TaskStatus
  }

  export type ExpenseCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: string
    metadata?: string | null
    paymentStatus?: ExpensePaymentStatus
    creatorId?: string | null
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: string
    metadata?: string | null
    paymentStatus?: ExpensePaymentStatus
    creatorId?: string | null
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumExpensePaymentStatusFieldUpdateOperationsInput | ExpensePaymentStatus
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumExpensePaymentStatusFieldUpdateOperationsInput | ExpensePaymentStatus
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: string
    metadata?: string | null
    paymentStatus?: ExpensePaymentStatus
    creatorId?: string | null
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumExpensePaymentStatusFieldUpdateOperationsInput | ExpensePaymentStatus
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumExpensePaymentStatusFieldUpdateOperationsInput | ExpensePaymentStatus
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnouncementCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    organisationId?: string | null
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    organisationId?: string | null
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: string | null
    organisationId?: string | null
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnumPlanTypeFilter = {
    equals?: PlanType
    in?: Enumerable<PlanType>
    notIn?: Enumerable<PlanType>
    not?: NestedEnumPlanTypeFilter | PlanType
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    planType?: SortOrder
    isTrial?: SortOrder
    isAdFree?: SortOrder
    maxParticipants?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    maxParticipants?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    planType?: SortOrder
    isTrial?: SortOrder
    isAdFree?: SortOrder
    maxParticipants?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    planType?: SortOrder
    isTrial?: SortOrder
    isAdFree?: SortOrder
    maxParticipants?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    maxParticipants?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumPlanTypeWithAggregatesFilter = {
    equals?: PlanType
    in?: Enumerable<PlanType>
    notIn?: Enumerable<PlanType>
    not?: NestedEnumPlanTypeWithAggregatesFilter | PlanType
    _count?: NestedIntFilter
    _min?: NestedEnumPlanTypeFilter
    _max?: NestedEnumPlanTypeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type PlanPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionHash?: SortOrder
    modeOfPayment?: SortOrder
    amountInINR?: SortOrder
    amountInPaidCurrency?: SortOrder
    paymentCurrencyName?: SortOrder
    isConfirmed?: SortOrder
    planId?: SortOrder
    organisationId?: SortOrder
  }

  export type PlanPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionHash?: SortOrder
    modeOfPayment?: SortOrder
    amountInINR?: SortOrder
    amountInPaidCurrency?: SortOrder
    paymentCurrencyName?: SortOrder
    isConfirmed?: SortOrder
    planId?: SortOrder
    organisationId?: SortOrder
  }

  export type PlanPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionHash?: SortOrder
    modeOfPayment?: SortOrder
    amountInINR?: SortOrder
    amountInPaidCurrency?: SortOrder
    paymentCurrencyName?: SortOrder
    isConfirmed?: SortOrder
    planId?: SortOrder
    organisationId?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrganisationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    address?: SortOrder
    metadata?: SortOrder
    activePlanId?: SortOrder
  }

  export type OrganisationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    address?: SortOrder
    metadata?: SortOrder
    activePlanId?: SortOrder
  }

  export type OrganisationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    address?: SortOrder
    metadata?: SortOrder
    activePlanId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type SalesWalaAdminCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    metadata?: SortOrder
  }

  export type SalesWalaAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    metadata?: SortOrder
  }

  export type SalesWalaAdminMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    metadata?: SortOrder
  }

  export type EnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type SalesWalaAppUserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    organisationId?: SortOrder
    metadata?: SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrder
    isEnabled?: SortOrder
  }

  export type SalesWalaAppUserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    organisationId?: SortOrder
    metadata?: SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrder
    isEnabled?: SortOrder
  }

  export type SalesWalaAppUserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    organisationId?: SortOrder
    metadata?: SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrder
    isEnabled?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    defaultPrice?: SortOrder
    metadata?: SortOrder
    organisationId?: SortOrder
    isDisabled?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    defaultPrice?: SortOrder
    metadata?: SortOrder
    organisationId?: SortOrder
    isDisabled?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    defaultPrice?: SortOrder
    metadata?: SortOrder
    organisationId?: SortOrder
    isDisabled?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    organisationId?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    organisationId?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    organisationId?: SortOrder
  }

  export type QuotationParticularsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    metadata?: SortOrder
    quotationId?: SortOrder
  }

  export type QuotationParticularsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    metadata?: SortOrder
    quotationId?: SortOrder
  }

  export type QuotationParticularsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    metadata?: SortOrder
    quotationId?: SortOrder
  }

  export type EnumOrderStatusFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusFilter | OrderStatus
  }

  export type QuotationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    organisationId?: SortOrder
    vendorId?: SortOrder
    hasConvertedToOrder?: SortOrder
    orderState?: SortOrder
  }

  export type QuotationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    organisationId?: SortOrder
    vendorId?: SortOrder
    hasConvertedToOrder?: SortOrder
    orderState?: SortOrder
  }

  export type QuotationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    organisationId?: SortOrder
    vendorId?: SortOrder
    hasConvertedToOrder?: SortOrder
    orderState?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusWithAggregatesFilter | OrderStatus
    _count?: NestedIntFilter
    _min?: NestedEnumOrderStatusFilter
    _max?: NestedEnumOrderStatusFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type EnumAttendanceStatusFilter = {
    equals?: AttendanceStatus
    in?: Enumerable<AttendanceStatus>
    notIn?: Enumerable<AttendanceStatus>
    not?: NestedEnumAttendanceStatusFilter | AttendanceStatus
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    punchInTime?: SortOrder
    punchOutTime?: SortOrder
    userID?: SortOrder
    attendanceStatus?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    punchInTime?: SortOrder
    punchOutTime?: SortOrder
    userID?: SortOrder
    attendanceStatus?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    punchInTime?: SortOrder
    punchOutTime?: SortOrder
    userID?: SortOrder
    attendanceStatus?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type EnumAttendanceStatusWithAggregatesFilter = {
    equals?: AttendanceStatus
    in?: Enumerable<AttendanceStatus>
    notIn?: Enumerable<AttendanceStatus>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter | AttendanceStatus
    _count?: NestedIntFilter
    _min?: NestedEnumAttendanceStatusFilter
    _max?: NestedEnumAttendanceStatusFilter
  }

  export type LocationLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    location?: SortOrder
    attendanceId?: SortOrder
  }

  export type LocationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    location?: SortOrder
    attendanceId?: SortOrder
  }

  export type LocationLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    location?: SortOrder
    attendanceId?: SortOrder
  }

  export type EnumTaskStatusFilter = {
    equals?: TaskStatus
    in?: Enumerable<TaskStatus>
    notIn?: Enumerable<TaskStatus>
    not?: NestedEnumTaskStatusFilter | TaskStatus
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    creatorId?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter = {
    equals?: TaskStatus
    in?: Enumerable<TaskStatus>
    notIn?: Enumerable<TaskStatus>
    not?: NestedEnumTaskStatusWithAggregatesFilter | TaskStatus
    _count?: NestedIntFilter
    _min?: NestedEnumTaskStatusFilter
    _max?: NestedEnumTaskStatusFilter
  }

  export type EnumExpensePaymentStatusFilter = {
    equals?: ExpensePaymentStatus
    in?: Enumerable<ExpensePaymentStatus>
    notIn?: Enumerable<ExpensePaymentStatus>
    not?: NestedEnumExpensePaymentStatusFilter | ExpensePaymentStatus
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    metadata?: SortOrder
    paymentStatus?: SortOrder
    creatorId?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    metadata?: SortOrder
    paymentStatus?: SortOrder
    creatorId?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    metadata?: SortOrder
    paymentStatus?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumExpensePaymentStatusWithAggregatesFilter = {
    equals?: ExpensePaymentStatus
    in?: Enumerable<ExpensePaymentStatus>
    notIn?: Enumerable<ExpensePaymentStatus>
    not?: NestedEnumExpensePaymentStatusWithAggregatesFilter | ExpensePaymentStatus
    _count?: NestedIntFilter
    _min?: NestedEnumExpensePaymentStatusFilter
    _max?: NestedEnumExpensePaymentStatusFilter
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    organisationId?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    organisationId?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    organisationId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: PlanType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: UserRole
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: OrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: AttendanceStatus
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: TaskStatus
  }

  export type EnumExpensePaymentStatusFieldUpdateOperationsInput = {
    set?: ExpensePaymentStatus
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumPlanTypeFilter = {
    equals?: PlanType
    in?: Enumerable<PlanType>
    notIn?: Enumerable<PlanType>
    not?: NestedEnumPlanTypeFilter | PlanType
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumPlanTypeWithAggregatesFilter = {
    equals?: PlanType
    in?: Enumerable<PlanType>
    notIn?: Enumerable<PlanType>
    not?: NestedEnumPlanTypeWithAggregatesFilter | PlanType
    _count?: NestedIntFilter
    _min?: NestedEnumPlanTypeFilter
    _max?: NestedEnumPlanTypeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type NestedEnumOrderStatusFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusFilter | OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusWithAggregatesFilter | OrderStatus
    _count?: NestedIntFilter
    _min?: NestedEnumOrderStatusFilter
    _max?: NestedEnumOrderStatusFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedEnumAttendanceStatusFilter = {
    equals?: AttendanceStatus
    in?: Enumerable<AttendanceStatus>
    notIn?: Enumerable<AttendanceStatus>
    not?: NestedEnumAttendanceStatusFilter | AttendanceStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter = {
    equals?: AttendanceStatus
    in?: Enumerable<AttendanceStatus>
    notIn?: Enumerable<AttendanceStatus>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter | AttendanceStatus
    _count?: NestedIntFilter
    _min?: NestedEnumAttendanceStatusFilter
    _max?: NestedEnumAttendanceStatusFilter
  }

  export type NestedEnumTaskStatusFilter = {
    equals?: TaskStatus
    in?: Enumerable<TaskStatus>
    notIn?: Enumerable<TaskStatus>
    not?: NestedEnumTaskStatusFilter | TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter = {
    equals?: TaskStatus
    in?: Enumerable<TaskStatus>
    notIn?: Enumerable<TaskStatus>
    not?: NestedEnumTaskStatusWithAggregatesFilter | TaskStatus
    _count?: NestedIntFilter
    _min?: NestedEnumTaskStatusFilter
    _max?: NestedEnumTaskStatusFilter
  }

  export type NestedEnumExpensePaymentStatusFilter = {
    equals?: ExpensePaymentStatus
    in?: Enumerable<ExpensePaymentStatus>
    notIn?: Enumerable<ExpensePaymentStatus>
    not?: NestedEnumExpensePaymentStatusFilter | ExpensePaymentStatus
  }

  export type NestedEnumExpensePaymentStatusWithAggregatesFilter = {
    equals?: ExpensePaymentStatus
    in?: Enumerable<ExpensePaymentStatus>
    notIn?: Enumerable<ExpensePaymentStatus>
    not?: NestedEnumExpensePaymentStatusWithAggregatesFilter | ExpensePaymentStatus
    _count?: NestedIntFilter
    _min?: NestedEnumExpensePaymentStatusFilter
    _max?: NestedEnumExpensePaymentStatusFilter
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