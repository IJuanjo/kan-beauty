# AGENTS.md

## Project

This project is a static product catalog landing page.

The product data comes exclusively from:

src/data/products.json

## Technology

- Astro
- TypeScript
- Tailwind CSS
- pnpm

## Architecture

- Use Astro SSG.
- Do not use SSR.
- Do not use React Router.
- Do not create a backend.
- Do not create an API.
- Do not create a database.
- Keep client-side JavaScript minimal.

## Data

products.json is the single source of truth.

Do not modify its structure.

Create TypeScript types for the product structure.

Do not hardcode products.

Do not hardcode brands.

## Main functionality

The application contains one landing page.

It must provide:

- Product listing
- Brand/category filters
- Product search
- Product detail modal
- Unavailable products

## Brand filters

Generate the brand/category buttons dynamically from:

product.categoria

Include:

- Todos
- Each unique category

## Search

Search products by:

- titulo
- categoria
- descripcion

Search and category filtering must work together.

## Product availability

A product with:

detalles: {}

is considered unavailable.

Unavailable products:

- remain visible
- display an unavailable state
- cannot open the detail modal

Available products:

- display a detail action
- can open the detail modal

## Product modal

The modal must display information from:

product.detalles

Do not duplicate product data manually.

## Components

Prefer small reusable Astro components.

Suggested components:

- Header
- Search
- BrandFilters
- ProductGrid
- ProductCard
- ProductModal
- Footer

## Performance

- Prefer static HTML.
- Avoid unnecessary JavaScript.
- Avoid unnecessary dependencies.
- Lazy-load images where appropriate.
- Do not hydrate components unless interaction requires it.

## Design

Use this website as visual and structural reference:

https://oneseulmayorista.shop/catalogo_publico.php

Use its general catalog structure and interaction model as inspiration.

Do not copy its source code.

Create an original implementation.

## Validation

After every significant implementation:

- run type checking
- run pnpm build
- verify products render
- verify filters
- verify search
- verify modal
- verify unavailable products
- verify responsive layout

Do not modify unrelated files.