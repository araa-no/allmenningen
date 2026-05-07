# Shortcodes tutorial

This guide explains how to use shortcodes for creating modular content blocks in your markdown files.
---

## Available shortcodes

### 2. **Highlight Block** - Colored background sections

```markdown
{{< highlight background="cream" border="true" title="Optional Title" >}}
**Important information** with colored background.

Supports markdown: **bold**, *italic*, [links](/path).
{{< /highlight >}}
```

**Parameters:**
- `background`: `cream`, `grove`, `rust`, or `bay` (default: `cream`)
- `border`: `true` or `false` (default: `false`)
- `title` (optional): Section heading

---

### 3. **Links Block** - Grid of link cards

```markdown
{{< links title="Useful Links" columns="3" >}}
[Redaksjonell linje](/redaksjonell-linje) | Våre journalistiske prinsipper
[Personvern](/personvern) | Hvordan vi håndterer dine data
[Statutter](/statutter) | Organisasjon og styring
[Kontakt](/kontakt) | Send oss en henvendelse
{{< /links >}}
```

**Parameters:**
- `title` (optional): Section heading
- `columns`: `2` or `3` (default: `2`)

**Format:** `[Link Text](URL) | Description`

---

### 4. **People Block** - Team/member listings

```markdown
{{< people title="Redaksjonen" background="cream" border="true" >}}
Maria Olsen | Redaktør | Tidligere fagforeningsleder og journalist
Erik Hansen | Nestleder | Forfatter og politisk aktivist
Aisha Abdullah | Kulturjournalist | Dekker litteratur, film og musikk
Jon Berg | Teknologisk korrespondent | Skriver om teknopolitikk
{{< /people >}}
```

**Parameters:**
- `title` (optional): Section heading
- `background`: `white`, `cream`, or `ink` (default: `white`)
- `border`: `true` or `false` (default: `false`)

**Format:** `Name | Role | Bio`

---

### 5. **Quote Block** - Highlighted quotations

```markdown
{{< quote author="Grace Lee Boggs" icon="optional-svg" >}}
En bedre verden er ikke bare mulig — den bygges stille og rolig på tusenvis av steder samtidig.
{{< /quote >}}
```

**Parameters:**
- `author` (optional): Attribution line
- `icon` (optional): SVG graphic

---

### 6. **Divider** - Decorative section separator

```markdown
{{< divider >}}
```

No parameters needed. Just place it between sections.

---

### 7. **Call to Action (CTA)** - Prominent action buttons

```markdown
{{< cta title="Bli med!" background="ink" button-text="Kontakt oss" button-url="/kontakt" >}}
Vi trenger flere stemmer. Bli en del av Allmenningen i dag.
{{< /cta >}}
```

**Parameters:**
- `title` (optional): Heading text
- `background`: `ink`, `rust`, or `grove` (default: `ink`)
- `button-text`: Button label
- `button-url`: Button link

---

### 8. **Stats Block** - Statistics display

```markdown
{{< stats title="Allmenningen i tall" background="cream" border="true" >}}
2019 | Grunnlagt | rust
12 | Faste skribenter | grove
50 000+ | Månedlige lesere | bay
200+ | Artikler publisert | ink
{{< /stats >}}
```

**Parameters:**
- `title` (optional): Section heading
- `background`: `white` or `cream` (default: `white`)
- `border`: `true` or `false` (default: `false`)

**Format:** `Value | Label | Color`

**Colors:** `rust`, `grove`, `bay`, or `ink`
