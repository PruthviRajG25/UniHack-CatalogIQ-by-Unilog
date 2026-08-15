# Agent Briefing — Mural Recreation Project

## Project Tokens
Defined in `app/globals.css`:
- `bg-mural-green` / `text-mural-green` -> `#00c27b`
- `bg-mural-lavender` / `text-mural-lavender` -> `#d1e0ff`
- `bg-mural-dark` / `text-mural-dark` -> `#0c0c0c`
- `bg-mural-beige` / `text-mural-beige` -> `#faf8f5`
- `bg-mural-purple` / `text-mural-purple` -> `#9b51e0`
- `bg-mural-blue` / `text-mural-blue` -> `#56ccf2`
- `bg-mural-orange` / `text-mural-orange` -> `#f2994a`
- `bg-mural-pink` / `text-mural-pink` -> `#ec4899`
- `bg-mural-violet` / `text-mural-violet` -> `#c084fc`
- Fonts: `font-sans` (Plus Jakarta Sans), `font-serif` (Lora)

## Primitives
Import from `@/components/ui/button`:
```tsx
import { Button } from "@/components/ui/button";
// Signature:
<Button 
  variant="primary" | "secondary" | "dark" | "outline" 
  iconBg="bg-mural-orange" 
  iconColor="text-black"
>
  Button Text
</Button>
```

## Rules & Scope
- **Output Path**: `components/sections/<section-name>.tsx`
- **Scope**: Recreate only your assigned section crop layout.
- **Assets**: If you need local icons/assets, code them using clean SVGs. Do not import external image urls except what is provided.
- **Do not define tokens**: Do not define colors/fonts inside your file. Use the tokens.
- **Stop if blocked**: If a token is missing, report to the Orchestrator.
- **Self-verify**: Run Playwright screenshot at `localhost:3000/__preview/<section-name>` to check correctness.
