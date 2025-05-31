# GitHub Copilot Instructions

## Project Context
This is a Vue 3 + Nuxt 3 portfolio frontend application with TypeScript.

## Tech Stack
- Vue 3 with Composition API
- Nuxt 3
- TypeScript
- Tailwind CSS (implied from class usage)
- Pinia stores

## Coding Preferences
- Use `<script lang="ts" setup>` for Vue components
- Follow Vue 3 Composition API patterns
- Use Pinia stores for state management
- Prefer functional programming approaches
- Use TypeScript types and interfaces
- Follow Nuxt 3 conventions for auto-imports

## Code Style
- No unnecessary comments unless complex logic requires explanation
- Use concise, readable variable names
- Prefer arrow functions
- Use async/await over promises
- Use template literals for string interpolation

## Component Structure
- Keep components focused and single-responsibility
- Use props/emits for component communication
- Leverage Nuxt auto-imports for composables and utilities
- Store global state in Pinia stores

## File Organization
- Components in `/components` with logical subdirectories
- Pages in `/pages` following Nuxt routing
- Stores in `/stores` with clear naming
- Assets and styles in respective folders

## AI Assistant Instructions
- Provide actual code implementations, not high-level explanations
- Be direct and concise
- Suggest modern Vue/Nuxt patterns
- Consider performance and best practices
- Anticipate additional needs beyond the immediate request
