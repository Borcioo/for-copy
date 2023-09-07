// 'use strict';
//
// /**
//  * blog-article controller
//  */
//
// const { createCoreController } = require('@strapi/strapi').factories;
//
// module.exports = createCoreController('api::blog-article.blog-article');

"use strict";

/**
 *  blog-article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::blog-article.blog-article",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const blog = await strapi.entityService.findMany(
        "api::blog-article.blog-article",
        query,
      );

      const sanitizedEntity = await this.sanitizeOutput(blog);

      return this.transformResponse(sanitizedEntity[0]);
    },
  }),
);
