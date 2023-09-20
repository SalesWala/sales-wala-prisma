
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
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
  Serializable: 'Serializable'
});

exports.Prisma.PlanScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  expiresAt: 'expiresAt',
  planType: 'planType',
  isTrial: 'isTrial',
  isAdFree: 'isAdFree',
  maxParticipants: 'maxParticipants'
};

exports.Prisma.PlanPurchaseScalarFieldEnum = {
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

exports.Prisma.OrganisationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  name: 'name',
  address: 'address',
  metadata: 'metadata',
  activePlanId: 'activePlanId'
};

exports.Prisma.SalesWalaAdminScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  password: 'password',
  firstname: 'firstname',
  lastname: 'lastname',
  metadata: 'metadata'
};

exports.Prisma.SalesWalaAppUserScalarFieldEnum = {
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

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  defaultPrice: 'defaultPrice',
  metadata: 'metadata',
  organisationId: 'organisationId',
  isDisabled: 'isDisabled'
};

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  metadata: 'metadata',
  creatorId: 'creatorId',
  organisationId: 'organisationId'
};

exports.Prisma.QuotationParticularsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId',
  metadata: 'metadata',
  quotationId: 'quotationId'
};

exports.Prisma.QuotationScalarFieldEnum = {
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

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  metadata: 'metadata',
  punchInTime: 'punchInTime',
  punchOutTime: 'punchOutTime',
  userID: 'userID',
  attendanceStatus: 'attendanceStatus'
};

exports.Prisma.LocationLogScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  location: 'location',
  attendanceId: 'attendanceId'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  metadata: 'metadata',
  creatorId: 'creatorId',
  assignedToId: 'assignedToId',
  status: 'status'
};

exports.Prisma.ExpenseScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  amount: 'amount',
  metadata: 'metadata',
  paymentStatus: 'paymentStatus',
  creatorId: 'creatorId'
};

exports.Prisma.AnnouncementScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  metadata: 'metadata',
  organisationId: 'organisationId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.PlanType = {
  FREEMIUM: 'FREEMIUM',
  PREMIUM: 'PREMIUM'
};

exports.UserRole = {
  SALES_MANAGER: 'SALES_MANAGER',
  SALES_PERSON: 'SALES_PERSON'
};

exports.OrderStatus = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

exports.AttendanceStatus = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LEAVE: 'LEAVE',
  HOLIDAY: 'HOLIDAY'
};

exports.TaskStatus = {
  PENDING: 'PENDING',
  ONGOING: 'ONGOING',
  FINISHED: 'FINISHED'
};

exports.ExpensePaymentStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
