process.env.SELF_HOSTED = "0"
process.env.NODE_ENV = "jest"
process.env.JWT_SECRET = "test-jwtsecret"
process.env.LOG_LEVEL = process.env.LOG_LEVEL || "error"
process.env.MULTI_TENANCY = "1"
process.env.MINIO_URL = "http://localhost"
process.env.MINIO_ACCESS_KEY = "test"
process.env.MINIO_SECRET_KEY = "test"
process.env.PLATFORM_URL = "http://localhost:10000"
process.env.INTERNAL_API_KEY = "tet"
process.env.DISABLE_ACCOUNT_PORTAL = "0"
process.env.MOCK_REDIS = "1"
process.env.BUDIBASE_VERSION = "0.0.0+jest"
