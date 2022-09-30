const { success } = require("../utils")
const { updateDockerComposeService } = require("./utils")
const randomString = require("randomstring")

exports.generateUser = async () => {
  const email = "admin@admin.com"
  const password = randomString.generate({ length: 6 })
  updateDockerComposeService(service => {
    service.environment["BB_ADMIN_USER_EMAIL"] = email
    service.environment["BB_ADMIN_USER_PASSWORD"] = password
  })
  console.log(
    success(
      `User admin credentials configured, access with email: ${email} - password: ${password}`
    )
  )
}