// 'use strict';
//
// /**
//  * case-study-article controller
//  */
//
// const { createCoreController } = require('@strapi/strapi').factories;
//
// module.exports = createCoreController('api::case-study-article.case-study-article');

"use strict";

/**
 *  case controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::case-study-article.case-study-article",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const post = await strapi.entityService.findMany(
        "api::case-study-article.case-study-article",
        query,
      );

      const sanitizedEntity = await this.sanitizeOutput(post);

      return this.transformResponse(sanitizedEntity[0]);
    },
  }),
);
