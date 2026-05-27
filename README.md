<!--datocms-autoinclude-header start-->

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---

<!--datocms-autoinclude-header end-->

# A Blog example using Astro and DatoCMS

This example showcases an Astro Blog using [DatoCMS](https://www.datocms.com/) as the data source.
The purpose of this repo is to have a quick start reference that can be set up with the "one-click" button below.

## Demo

Have a look at the end result live:

### [https://bucolic-naiad-aa13d8.netlify.app/](https://bucolic-naiad-aa13d8.netlify.app/)

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

Create two DatoCMS API tokens: `CDA Only (Published)` for published content and `CDA Only (Draft)` for preview content.

Next, copy the `.env.example` file in this directory to `.env` (which will be ignored by Git):

```bash
cp .env.example .env
```

Then set `DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN` and `DATOCMS_DRAFT_CONTENT_CDA_TOKEN` in `.env`.

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

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60" alt="DatoCMS - The Headless CMS for the Modern Web"></a>

[DatoCMS](https://www.datocms.com/) is Headless CMS for the modern web. Trusted by 25,000+ businesses, agencies, and individuals, it gives your team one place to manage content and ship it to any website, app, or device via API.

**New here?** Start with [Create free account](https://dashboard.datocms.com/signup) and the [Documentation](https://www.datocms.com/docs). Stuck? Ask the [Community](https://community.datocms.com/). Curious what's new? [Product Updates](https://www.datocms.com/product-updates).

**Building with AI:** [Agent Skills](https://www.datocms.com/docs/agent-skills) turn coding assistants (Claude Code, Cursor) into expert DatoCMS developers, with full read/write via the auto-installed CLI. No local terminal? Use the [MCP Server](https://www.datocms.com/docs/mcp-server) instead.

**Talking to DatoCMS from code:**
- [Content Delivery API](https://www.datocms.com/docs/content-delivery-api) (CDA) — the fast, read-only GraphQL API your website/app uses to **fetch** published content.
- [Content Management API](https://www.datocms.com/docs/content-management-api) (CMA) — the REST API for **creating and updating** content, models, and project settings (think scripts, migrations, integrations).
- [CLI](https://www.datocms.com/docs/scripting-migrations/installing-the-cli) — terminal tool for schema migrations and importing from Contentful/WordPress.

**Framework guides:** end-to-end recipes for fetching content, rendering Structured Text, optimizing images/video, handling SEO, and setting up live preview with visual editing in [Next.js](https://www.datocms.com/docs/next-js), [Nuxt](https://www.datocms.com/docs/nuxt), [Svelte](https://www.datocms.com/docs/svelte), and [Astro](https://www.datocms.com/docs/astro).

**Want a head start?** Browse our [starter projects](https://www.datocms.com/marketplace/starters) — ready-to-deploy example sites for popular frameworks.


<!--datocms-autoinclude-footer end-->
