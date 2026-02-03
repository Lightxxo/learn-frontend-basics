/**
 * 1. Parse JWT
 * Decode the payload (2nd part) of a JWT.
 */
function parseJWT(token) {
  // TODO: Implement
  // Split, Decode, Parse
  throw new Error("Not implemented");
}

/**
 * 2. CSRF Manager
 */
class CsrfManager {
  constructor() {
    this.token = "initial-secret";
  }

  refresh() {
    this.token = "new-secret-" + Math.random();
  }

  inject(request) {
    // TODO: Implement
    // request.headers['X-CSRF-Token'] = this.token;
    throw new Error("Not implemented");
  }
}

/**
 * 3. RBAC Logic
 */
const POLICIES = {
  comment: {
    create: ["editor", "admin"],
    delete: ["admin"],
  },
};

function hasPermission(user, resource, action) {
  // TODO: Implement
  // User object has { roles: ['editor'] }
  // Check POLICIES.
  // If Admin -> true.
  throw new Error("Not implemented");
}

module.exports = { parseJWT, CsrfManager, hasPermission, POLICIES };
