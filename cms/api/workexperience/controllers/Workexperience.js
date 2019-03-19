'use strict';

/**
 * Workexperience.js controller
 *
 * @description: A set of functions called "actions" for managing `Workexperience`.
 */

module.exports = {

  /**
   * Retrieve workexperience records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.workexperience.search(ctx.query);
    } else {
      return strapi.services.workexperience.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a workexperience record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.workexperience.fetch(ctx.params);
  },

  /**
   * Count workexperience records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.workexperience.count(ctx.query);
  },

  /**
   * Create a/an workexperience record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.workexperience.add(ctx.request.body);
  },

  /**
   * Update a/an workexperience record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.workexperience.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an workexperience record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.workexperience.remove(ctx.params);
  }
};
