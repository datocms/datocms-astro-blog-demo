<!--datocms-autoinclude-header start--><a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---

<!--datocms-autoinclude-header end-->

# A Blog example using Astro and DatoCMS

This example showcases an Astro Blog using [DatoCMS](https://www.datocms.com/) as the data source.
The purpose of this repo is to have a quick start reference that can be set up with the "one-click" button below.

## Demo

Have a look at the end result live:

### [https://blog-astro-no-clientside-js.vercel.app/](https://blog-astro-no-clientside-js.vercel.app/)

## How to use

### Quick start

1. [Create an account on DatoCMS](https://datocms.com).

2. Make sure that you have set up the [Github integration on Vercel](https://vercel.com/docs/git/vercel-for-github).

3. Let DatoCMS set everything up for you clicking this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/projects/clone?repo=/marcelofinamorvieira/blog-astro-no-clientside-js)

### Local setup

Once the setup of the project and repo is done, clone the repo locally.

#### Set up environment variables

In your DatoCMS' project, go to the **Settings** menu at the top and click **API tokens**.

Then click **Read-only API token** and copy the token.

Next, create the `.env` with your API token (which will be ignored by Git):

```bash
echo ASTRO_EXAMPLE_CMS_DATOCMS_API_TOKEN=<YOUR_API_TOKEN> >> .env
```

#### Run your project locally

```bash
npm install
npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!

## `client:visible` directive

Astro is ["Zero JS, by default: No JavaScript runtime overhead to slow you down"](https://docs.astro.build/en/getting-started/). That means that by default Astro generates static files server-side and no JS is sent to the client, unless strictly needed.

When using the `<Image />` component, or any other component that requires some client-side orchestration, you must instruct Astro to send the component bundle to the client, so that the interactive features can be made available to the user. Astro uses [_directives_](https://docs.astro.build/en/reference/directives-reference/#client-directives): `client:visible` loads and hydrates the component once the component has entered the user’s viewport.

In this demo, we use the `client:visible` directive to enable the lazy load of images, that are actually loaded only when they enter the viewport.

<!--datocms-autoinclude-footer start-->

---

# What is DatoCMS?
<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

[DatoCMS](https://www.datocms.com/) is the REST & GraphQL Headless CMS for the modern web.

Trusted by over 25,000 enterprise businesses, agency partners, and individuals across the world, DatoCMS users create online content at scale from a central hub and distribute it via API. We ❤️ our [developers](https://www.datocms.com/team/best-cms-for-developers), [content editors](https://www.datocms.com/team/content-creators) and [marketers](https://www.datocms.com/team/cms-digital-marketing)!

**Quick links:**

- ⚡️ Get started with a [free DatoCMS account](https://dashboard.datocms.com/signup)
- 🔖 Go through the [docs](https://www.datocms.com/docs)
- ⚙️ Get [support from us and the community](https://community.datocms.com/)
- 🆕 Stay up to date on new features and fixes on the [changelog](https://www.datocms.com/product-updates)

**Our featured repos:**
- [datocms/react-datocms](https://github.com/datocms/react-datocms): React helper components for images, Structured Text rendering, and more
- [datocms/js-rest-api-clients](https://github.com/datocms/js-rest-api-clients): Node and browser JavaScript clients for updating and administering your content. For frontend fetches, we recommend using our [GraphQL Content Delivery API](https://www.datocms.com/docs/content-delivery-api) instead.
- [datocms/cli](https://github.com/datocms/cli): Command-line interface that includes our [Contentful importer](https://github.com/datocms/cli/tree/main/packages/cli-plugin-contentful) and [Wordpress importer](https://github.com/datocms/cli/tree/main/packages/cli-plugin-wordpress)
- [datocms/plugins](https://github.com/datocms/plugins): Example plugins we've made that extend the editor/admin dashboard
- [DatoCMS Starters](https://www.datocms.com/marketplace/starters) has examples for various Javascript frontend frameworks

Or see [all our public repos](https://github.com/orgs/datocms/repositories?q=&type=public&language=&sort=stargazers)<!--datocms-autoinclude-footer end-->
