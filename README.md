# React Drag and Drop Experiments [![Publish](https://github.com/mishamyrt/react-dnd-experiments/actions/workflows/publish.yaml/badge.svg)](https://github.com/mishamyrt/react-dnd-experiments/actions/workflows/publish.yaml)

This repository contains a React application with various libraries for implementing drag and drop.

It was created to compare the usability of different libraries for the same task.

## Task

Implement a kanban board where user cards are separated by status. Cards can be dragged and dropped between statuses, but not re-sorted within a single status.

When a card is grabbed, the statuses to which it can be dragged should be highlighted. If the card has been dragged to a status to which migration is allowed, a confirmation modal window should be displayed. If the status is not allowed, then nothing is displayed and the card is returned to its original position.

### Available transitions

- New → Potential, Active
- Potential → New, Active
- Active → Canceled
- Canceled → Potential

## Libraries

<!-- prettier-ignore-start -->
| Library | Size (minified + gzipped) |
|---|---|
| [react-beautiful-dnd](https://bundlephobia.com/package/react-beautiful-dnd@13.1.1) | 30.2 kB |
| [react-dnd](https://bundlephobia.com/package/react-dnd@16.0.1) with [react-dnd-html5-backend](https://bundlephobia.com/package/react-dnd-html5-backend@16.0.1) | 9.1 + 4.5 kB |
| [@dnd-kit/core](https://bundlephobia.com/package/@dnd-kit/core@6.0.8) | 13.9 kB |
<!-- prettier-ignore-end -->
