// 'use strict';
//
// /**
//  * service-article controller
//  */
//
// const { createCoreController } = require('@strapi/strapi').factories;
//
// module.exports = createCoreController('api::service-article.service-article');

"use strict";

/**
 *  service-article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::service-article.service-article",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const post = await strapi.entityService.findMany(
        "api::service-article.service-article",
        query,
      );

      const sanitizedEntity = await this.sanitizeOutput(post);

      return this.transformResponse(sanitizedEntity[0]);
    },
  }),
);
