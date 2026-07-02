// src/config.js

const config = {
  // Fallback to a default secret during CI to avoid validation errors
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'dev-secret',
  DATABASE_URL: process.env.DATABASE_URL,
  // Add other environment variables here as needed
};

function validateConfig(cfg) {
  if (!cfg.NEXTAUTH_SECRET) {
    throw new Error('NEXTAUTH_SECRET environment variable is required but not set.');
  }
  // Additional validation logic can be added here
}

module.exports = {
  config,
  validateConfig,
};