# Slide Presentation Template Design Rules & Standards

> **Governing Standards:** Corporate ECC Brand Guidelines & Handdrawn Technical Architecture  
> **Target Deliverable:** Self-Contained, Shareable `index.html` Presentation Deck

---

## 1. Canvas & Template Geometry

* **Aspect Ratio:** Strict `16:9` widescreen canvas (`min(94vw, calc(90vh * 16 / 9))`).
* **Left-Edge Dual-Color Brand Stripe:** Every slide must include the vertical brand accent bar along the far left edge:
  * **Top 65%:** ECC Brand Teal (`#388EA3`)
  * **Bottom 35%:** Deep Corporate Navy (`#0E253A`)
* **Brand Header:**
  * Clean vector SVG `> ecc` logo positioned in the top-left margin of every slide.
  * No extra clutter or secondary taglines unless explicitly requested.

---

## 2. White Theme Standard

* **Pure White Background:** Every slide canvas must use pure `#FFFFFF` background.
* **No Heavy Dark Cards:** Avoid enclosing slide content in massive dark panels or heavy boxes unless creating a specific divider slide.
* **Stage Canvas:** Outer presentation stage must use a clean, subtle off-white (`#F8FAFC`), giving the slide a crisp boardroom look.

---

## 3. Pure SVG Vector Assets Standard

* **Strict SVG Requirement:** All visual assets, logos, and illustrations placed inside `index.html` **must be in pure vector SVG format**.
* **Zero External Raster Dependencies:** No `.jpg` or `.png` files may be directly linked inside `index.html`, ensuring the presentation is 100% self-contained and renders razor-sharp on all screen resolutions.
* **Asset Backup Policy:** Original raster image files (PNG/JPG) must be archived in the `assets/` folder for backup and reference.
* **Illustration Style:** All technical explanatory diagrams must follow the professional architectural hand-drawn technical style ([helloianneo/ian-handdrawn-ppt](https://github.com/helloianneo/ian-handdrawn-ppt)):
  * Pure white paper `#FFFFFF`
  * Fine ink linework and delicate pencil hatching
  * Minimalist drafting tick marks in corners
  * Subtle pastel teal (`#388EA3`) and sage green accents
  * Generous whitespace (>40% open space)

---

## 4. Typography & Legibility Rules

* **Font Stack:** Modern corporate sans-serif (`Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`, sans-serif). Monospace (`JetBrains Mono`) for section numbers and technical tags.
* **Font Scale Standards:**
  * **Main Slide Title:** `36px` to `48px`, font-weight `800`, color `#0F172A`.
  * **Section Numbers:** `20px` to `24px`, font-weight `700`, color `#388EA3`.
  * **Item Headings:** `20px` to `22px`, font-weight `700`, color `#0F172A`.
  * **Item Descriptions:** `14px` to `16px`, font-weight `500`, color `#475569`.
* **Legibility Guarantee:** Text must never be squeezed into tiny fonts (minimum `14px` for any body or subtitle content). Content must gracefully fill the slide area with balanced breathing room.

---

## 5. Index / Agenda Slide Format

* **Title:** Clean, simple, and prominent: **Index** (or **Agenda**).
* **Content:** Direct 2-column or clean grid containing only the agenda topics and subtopics.
* **No Redundant Clutter:** Do not add redundant badges, secondary roadmap titles, or flow footers unless explicitly requested.

---

## 6. Minimalist Controls & Navigation

* **Bottom Bar:** Minimal Prev (`<`) and Next (`>`) arrow buttons only.
* **No Bulky Pills:** Do not show large slide title pills in the navigation bar.
* **Keyboard Shortcuts:**
  * <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd>: Next slide
  * <kbd>←</kbd> / <kbd>Backspace</kbd> / <kbd>PageUp</kbd>: Previous slide
  * <kbd>F</kbd>: Fullscreen toggle
* **Print / Export:** Optimized `@media print` CSS for 16:9 PDF export.
