# System Operator Character Design System & Consistency Rules
> **Reference Style:** Clean Hand-Drawn Technical Architecture & Doodle Operator Style  
> **Workshop Story:** Building, Hosting & Securing Application Architecture
> **Naming Constraint:** NEVER use or mention the name "Xiaohei" or "xio..." in presentations or slide text.

---

## 1. Core Identity & Philosophy

The **System Operator** is not a mascot, not a decorative sticker, and not a cute cartoon animal.  
He is an **earnest, deadpan backstage system operator**.

* **Role:** He actively performs the operational task in each scene (pinning the blueprint, pulling the theater curtain, carrying packets, locking doors, ringing alarm bells).
* **Personality:** Focused, quiet, low-key, calm in the middle of complexity, serious about absurdly concrete tasks.
* **Golden Rule:** *If you remove the operator from the scene and the visual still explains the concept fully, he was used as mere decoration.* The operator must always be hands-on with the primary object.

---

## 2. Anatomical Blueprint (The Base Model)

The base character model **never changes across any slide**:

```
           .-""""-.          <-- Smooth, wobbly hand-drawn top
         .'        '.
        /   (o)  (o) \       <-- Two tiny solid white circular dots (eyes)
       |              |
       |  SOLID BLACK |      <-- Solid fill #18181B (no gradients, no shading)
       |   BEAN BODY  |
        \            /       <-- Asymmetrical bean / oblong silhouette
         '.________.'
           ||    ||          <-- Thin, slightly wobbly stick legs
           ''    ''          <-- Minimalist flat feet
```

| Feature | Exact Specification | What to Avoid |
| :--- | :--- | :--- |
| **Body Shape** | Solid black rounded bean, oblong cylinder, or peanut shape. Smooth but hand-drawn contour. | Perfect geometric ovals, 3D spheres, furry textures, animal ears/tails. |
| **Color Fill** | Solid `#18181B` (or `#111111`). Zero gradients, zero inner highlights. | Glossy reflections, drop shadows, color gradients. |
| **Eyes** | Exactly 2 tiny solid pure-white (`#FFFFFF`) circles or dots. Spaced apart, looking toward the active tool or object. | Detailed pupils, eyelashes, anime sparkles, blinking eyelids. |
| **Mouth / Face** | **No mouth**, no nose, no eyebrows. Deadpan expression. | Big smile, angry teeth, open mouth shouting, blushing cheeks. |
| **Limbs** | Thin black ink stick arms and legs (1.5px – 2.5px width). Ends in simple rounded hands or single-loop grip when holding tools. | Muscular limbs, 5-finger detailed hands, shoes, sneakers. |

---

## 3. Modular Add-On Accessories System

In future workshop scenes, the operator needs to wear or wield props to reflect specific infrastructure and security responsibilities. **Follow these strict guidelines when adding accessories:**

### Rules for Accessories
1. **Maximum 1–2 items per scene:** Never overburden the character. The solid black bean body must always dominate.
2. **Hand-drawn doodle style:** Accessories must match the thin wobbly pen linework.
3. **Color restraint:** Accessories should be primarily black line art with at most **one** accent color (orange `#EA580C`, red `#DC2626`, or blue `#2563EB`).
4. **Never alter the base body:** The operator does not get pants, shirts, or full costumes. Only hats, handheld tools, or wearable badges.

---

### Approved Accessory Catalog by Scene / Domain

#### A. Build, Packaging & Containers (Docker / CI/CD)
* **Yellow/Orange Builder Hard Hat:** Simple curved shell resting on top of his head.
* **Wrench / Hammer:** Thin stick tool held in hand to assemble container boxes.
* **Clipboard & Checklist:** Holding a paper board checking off base image layers.
* **Shipping Hook / Crane Pulley:** Guiding Docker containers into place.

#### B. Network & Transit (APIs, Routers, DNS)
* **Messenger Bag / Satchel:** Single strap across chest carrying request packets.
* **Binoculars / Periscope:** Looking ahead down the fiber optic highway.
* **Directing Baton / Traffic Light Wand:** Orange glowing baton routing requests.

#### C. Compute & Server Management (VMs, EC2, Kernels)
* **Operator Stool / Ladder:** Standing on a wooden stool or stepping up a stepladder to reach cloud server racks.
* **Oil Can / Grease Gun:** Servicing and maintaining heavy server engine boxes.
* **Thermal Gauge / Patch Tool:** Applying an adhesive bandage or patch onto a cracked machine part.

#### D. Identity & Access Management (IAM, Keys, Secrets)
* **Giant Keyring / Brass Key:** Carrying an oversized key (`#EA580C` or gold ink) to unlock doors.
* **Security Lanyard & ID Badge:** A simple string necklace with a white badge card labeled "IAM / ROOT".
* **Keyhole Shield:** Holding a hand-drawn shield to block unauthorized tokens.

#### E. Vulnerabilities & Code Scanners (SAST, DAST, Pen-Testing)
* **Handheld Magnifying Glass:** Operator peering through a glass circle inspecting lines of code.
* **Flashlight / Torch:** Shining a narrow beam into dark backend crevices to uncover hidden bugs.
* **Safety Goggles:** Resting above his white dot eyes while inspecting hot pipes.

#### F. Monitoring, Alerting & Observability (Metrics, Logs, Alarms)
* **Communication Headset / Earmuffs:** Single curved band with ear cushions over head.
* **Alarm Mallet:** Striking a brass alert bell or gong.
* **Megaphone / Horn:** Announcing an unexpected anomaly.

---

## 4. Canvas & Composition Standard

Every generated slide illustration must follow these framing constraints:

* **Aspect Ratio:** `16:9` horizontal orientation.
* **Canvas Background:** Pure `#FFFFFF` white. **No** beige tones, **no** vintage paper grain, **no** wall textures.
* **Subject Scale:** The central action (Operator + main equipment) occupies **40% to 55%** of the canvas.
* **Whitespace Rule:** At least **40% of the canvas must remain completely blank** to allow interactive HTML cards, buttons, badges, and tooltips to overlay without visual crowding.
* **No Raster Text in Image:** Never generate paragraphs, titles, or English/Chinese sentences inside the artwork. Leave labels to HTML/CSS for responsive, crisp rendering and multi-language support.

---

## 5. Master Prompt Template for Future Slides

When generating new keyframe illustrations using the `generate_image` tool, copy and adapt this standard prompt:

```text
Create a 16:9 horizontal explanatory illustration in clean pure white background hand-drawn doodle style, matching the exact reference style and character.

Pure white background #FFFFFF with no gradients, no paper texture, no shadows.
Thin black slightly wobbly ink linework, generous whitespace (over 40% empty space).

Recurring Character:
System Operator, a solid-black bean-shaped doodle character with two tiny white circular dot eyes, thin stick limbs, and an earnest deadpan expression.

Accessory / Prop:
[Specify 1-2 accessories, e.g.: "Operator is wearing a simple yellow safety hard hat and holding a thin hand-drawn wrench."]

Scene Action & Composition:
[Describe the core action, e.g.: "Operator is standing on a small wooden platform on the left, bolting together three stacked container blocks labeled with simple doodle icons. A cloud outline sits above."]

Color Accents:
Restrained orange (#EA580C) for paths/flow and red (#DC2626) for highlights. Black ink for main line art.

Strict Negative Constraints:
NO written text or letters, NO realistic 3D rendering, NO complex gradients, NO commercial vector corporate look, NO children's cartoon backgrounds. Pure clean white paper aesthetic.
```

---

## 6. Slide-by-Slide Reference Log

| Scene # | Scene Title | Operator Action | Accessories Used | Status |
| :---: | :--- | :--- | :--- | :---: |
| **01** | Start with an app, not a scanner | Standing on stool, pinning Selma app blueprint card onto drafting easel | Wooden stool, drafting easel, tape badge | **Implemented** |
| **02** | What is IT infrastructure? | Pulling theatre curtain rope to unveil the 6 stage actors | Dangling stage rope, platform stage | **Implemented** |
| **03** | Build Selma: screen, backend, data | Connecting front-end wire to backend box and database cylinder | Hand-drawn patch cables, connector plug | *Planned* |
| **04** | Follow one request across the network | Riding / escorting an HTTP request packet token through the line | Messenger bag, safety helmet | *Planned* |
| **05** | Server architecture: give the app a home | Moving the app box into a cloud outline containing a VM | Small moving dolly / hand truck | *Planned* |
| **06** | Docker: image, container & host | Operating a lever to stamp template image into running containers | Stamp press lever, builder hard hat | *Planned* |
| **07** | Base image: the first layer matters | Stacking layer blocks (Base OS, Packages, App Code) like bricks | Masonry trowel, block stack | *Planned* |
| **08** | Server responsibilities: doors, keys | Shutting exposed red open port and holding key to authorized door | Padlock, oversized key | *Planned* |
| **09** | Serverless: run code when needed | Dropping a coin/trigger into an API gateway slot | Coin token, light switch | *Planned* |
| **10** | Server vs. Serverless trade-offs | Balancing two balance pans on a mechanical scale | Weight scale, balance beam | *Planned* |
