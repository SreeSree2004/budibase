import { object } from "./utils"
import Resource from "./utils/Resource"

const user = {
  _id: "us_693a73206518477283a8d5ae31103252",
  email: "test@test.com",
  roles: {
    app_957b12f943d348faa61db7e18e088d0f: "BASIC",
  },
  builder: {
    global: false,
  },
  admin: {
    global: true,
  },
  tenantId: "default",
  status: "active",
  budibaseAccess: true,
  csrfToken: "9c70291d-7137-48f9-9166-99ab5473a3d4",
  userId: "us_693a73206518477283a8d5ae31103252",
  roleId: "ADMIN",
  role: {
    _id: "ADMIN",
    name: "Admin",
    permissionId: "admin",
    inherits: "POWER",
  },
}

const userSchema = object(
  {
    email: {
      description: "The email address of the user, this must be unique.",
      type: "string",
    },
    password: {
      description:
        "The password of the user if using password based login - this will never be returned. This can be" +
        " left out of subsequent requests (updates) and will be enriched back into the user structure.",
      type: "string",
    },
    status: {
      description: "The status of the user, if they are active.",
      type: "string",
      enum: ["active"],
    },
    firstName: {
      description: "The first name of the user",
      type: "string",
    },
    lastName: {
      description: "The last name of the user",
      type: "string",
    },
    forceResetPassword: {
      description:
        "If set to true forces the user to reset their password on first login.",
      type: "boolean",
    },
  },
  { required: ["email", "roles"] }
)

const userOutputSchema = {
  ...userSchema,
  properties: {
    ...userSchema.properties,
    _id: {
      description: "The ID of the user.",
      type: "string",
    },
  },
  required: [...userSchema.required, "_id"],
}

export default new Resource()
  .setExamples({
    user: {
      value: {
        data: user,
      },
    },
    users: {
      value: {
        data: [user],
      },
    },
  })
  .setSchemas({
    user: userSchema,
    userOutput: object({
      data: userOutputSchema,
    }),
    userSearch: object({
      data: {
        type: "array",
        items: userOutputSchema,
      },
    }),
  })
