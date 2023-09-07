"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      contacts: {
        populate: {
          fields: ["name", "role", "phoneNumber", "email"],
          avatar: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      homeButtons: {
        populate: {
          fields: ["text", "url", "hexColor", "textHecColor"],
        },
      },
      clients: {
        populate: {
          clientImage: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      services: {
        populate: {
          fields: ["serviceTitle"],
          serviceImage: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          list: {
            fields: ["item"],
          },
        },
      },
      serviceTiles: {
        populate: {
          fields: ["title", "description", "slug"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          buttons: {
            fields: ["text", "url", "hexColor", "textHexColor"],
          },
        },
      },
      technologies: {
        populate: {
          fields: ["techName"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      references: {
        populate: {
          fields: ["name", "jobPosition", "description"],
          avatar: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      places: {
        populate: {
          fields: [
            "placeName",
            "placeAddress",
            "openDays",
            "openHours",
            "email",
            "phoneNumber",
          ],
        },
      },
      values: {
        populate: {
          fields: ["contentText"],
          contentImage: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      aboutValues: {
        populate: {
          fields: ["title", "description"],
          icon: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      logo: {
        populate: {
          fields: ["url", "alternativeText", "caption", "width", "height"],
        },
      },
      searchTypes: {
        populate: {
          fields: ["text"],
        },
      },
      points: {
        populate: {
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          buttons: {
            fields: ["text", "url", "hexColor", "textHexColor"],
          },
          projectDetails: {
            fields: ["title", "description"],
          },
          descriptionList: {
            fields: ["text"],
          },
          descriptionListSecond: {
            fields: ["text"],
          },
          chapters: {
            fields: ["title", "subTitle", "description"],
          },
          casePerson: {
            populate: {
              casePerson: {
                fields: ["name", "description", "position"],
              },
              image: {
                fields: [
                  "url",
                  "alternativeText",
                  "caption",
                  "width",
                  "height",
                ],
              },
            },
          },
          casePoints: {
            populate: {
              fields: ["title", "subTitle", "description"],
              image: {
                fields: [
                  "url",
                  "alternativeText",
                  "caption",
                  "width",
                  "height",
                ],
              },
              caseList: {
                populate: {
                  fields: ["text"],
                  image: {
                    fields: [
                      "url",
                      "alternativeText",
                      "caption",
                      "width",
                      "height",
                    ],
                  },
                },
              },
            },
          },
        },
      },
      blogs: {
        populate: {
          fields: ["title", "description", "date", "slug"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          buttons: {
            fields: ["text", "url", "hexColor", "textHexColor"],
          },
        },
      },
      caseList: {
        populate: {
          fields: ["text"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      foretoDescriptionItem: {
        populate: {
          fields: ["begin", "end"],
        },
      },
      characters: {
        populate: {
          fields: ["characterText"],
          icon: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      tiles: {
        populate: {
          fields: ["name", "values", "buttonText", "description"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      pointItem: {
        populate: {
          fields: ["title"],
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      list: {
        populate: {
          fields: ["text"],
        },
      },
      companyList: {
        populate: {
          fields: ["title"],
          textList: {
            populate: {
              textList: { fields: ["text"] },
            },
          },
        },
      },
      timelineItems: {
        populate: {
          fields: ["year", "month", "title", "content"],
        },
      },
      workflowList: {
        populate: {
          fields: ["title", "subtitle", "description"],
        },
      },
      case_study_articles: {
        populate: {
          caseList: {
            populate: {
              fields: ["text"],
            },
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
      jobs: {
        populate: {
          fields: [
            "title",
            "subTitle",
            "description",
            "footerNotes",
            "additionalText",
          ],
          requirements: {
            populate: {
              fields: ["title"],
              textList: {
                populate: {
                  fields: ["text"],
                },
              },
            },
          },
        },
      },
      image: {
        populate: {
          fields: ["url", "alternativeText", "caption", "width", "height"],
        },
      },
      job_positions: {
        populate: { requirements: true },
      },
      requirements: {
        populate: {
          fields: ["requirements"],
        },
      },
    },
  },
  job_positions: {
    populate: { requirements: true },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const slug = ctx.query.filters.slug;
    const localeSlug = ctx.query.filters.localeSlug;
    const locale = ctx.query.locale;

    ctx.query = {
      populate,
      // filters: { slug: ctx.query.filters.slug },
      filters: slug ? { slug: slug } : { localeSlug: localeSlug },
      locale: ctx.query.locale,
    };

    // console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
