// 'use strict';
//
// /**
//  * service-article router
//  */
//
// const { createCoreRouter } = require('@strapi/strapi').factories;
//
// module.exports = createCoreRouter('api::service-article.service-article');

"use strict";

/**
 * case router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::service-article.service-article");

// function to add to or override default router methods
const customRouter = (innerRouter, routeOveride = [], extraRoutes = []) => {
  let routes;

  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes;

      const newRoutes = routes.map((route) => {
        let found = false;

        routeOveride.forEach((overide) => {
          if (
            route.handler === overide.handler &&
            route.method === overide.method
          ) {
            found = overide;
          }
        });

        return found || route;
      });

      return newRoutes.concat(extraRoutes);
    },
  };
};

// Overide the default router with the custom router to use slug.
const myOverideRoutes = [
  {
    method: "GET",
    path: "/service-article/:slug",
    handler: "api::service-article.service-article.findOne",
  },
];

const myExtraRoutes = [];

module.exports = customRouter(defaultRouter, myOverideRoutes, myExtraRoutes);
