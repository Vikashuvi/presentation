# Slide Presentation & Visual Content Rules

These rules govern all slide creation, technical diagrams, and visual illustrations in this repository:

## 1. Strict Slide Canvas Containment
- All visual assets, SVGs, diagrams, labels, and illustrations **must be strictly contained inside the `.slide-container` canvas**.
- No edge bleeding: Illustration elements (wrists, phone edges, server racks, cables, etc.) must never bleed past the slide borders or overlap the vertical dual-color brand bar (`.slide-left-accent`).
- Safe Margin: Maintain at least a 48px to 64px inner clearance from all slide boundaries.
- Extremities must be drawn fully within the artwork artboard/viewBox with ample padding.

## 2. Name Prohibition Policy ("Xiaohei" / "xio...")
- **Strictly forbidden:** NEVER mention or use the name "Xiaohei" or "xio..." anywhere in the slide HTML, text badges, UI containers, subtitles, or documentation.
- Use role-based functional descriptions instead: "System Operator", "Client App", "Data Dispatcher", "User Agent".

## 3. Directional Flow Arrows & Visual Clarity
- No multiple/redundant arrows: Keep diagrams clean and readable.
- Do NOT include arrow symbols (`->`, `<-`, `&rarr;`, `&larr;`) inside text badges or pill labels.
- Flow lines must have exactly one clean, unambiguous arrowhead pointing in the true flow direction.
- Response return lines flowing from server to client must have a clean arrowhead pointing strictly leftwards towards the client.
