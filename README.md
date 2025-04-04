# Timeline Assignment

This project is an implementation of a timeline component, developed as part of a technical challenge. The goal was to organize events into compact horizontal lanes, using minimal external libraries.

## What was implemented

- Visualization of events in horizontal lanes
- Automatic lane assignment based on start and end dates
- Horizontal zoom control, with the value persisted in localStorage
- Cards with varied colors for better visual distinction
- Display of event name and dates, with hover expansion for short events
- Date axis at the top, vertically centered
- Responsive layout with horizontal scroll

## What I liked about the implementation

I enjoyed how the lane compaction logic worked well, and how small UX details like hover expansion and color variety made the interface clearer. The zoom system was also simple to implement and added flexibility.

## What I would do differently next time

I initially tried adding drag & drop using `react-draggable`, but faced some issues with visual updates and conflicts with React’s StrictMode. I ended up removing it to keep the experience stable and clean.

With more time, I’d explore a more controlled drag system, allowing real-time date updates and position adjustments.

## Design decisions

I looked at some well-known tools for visual inspiration but decided to keep everything as simple and straightforward as possible. I avoided using libraries that would solve the entire problem, and instead focused on implementing the logic manually.

## How I would test it with more time

- Unit tests for the `assignLanes` function and positioning logic
- Rendering tests with different zoom levels
- Behavior tests with overlapping or simultaneous events
- Accessibility and visual responsiveness testing

## How to run the project

```bash
npm install
npm start
