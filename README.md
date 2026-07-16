# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## add all components

```bash
pnpm dlx shadcn@4.12.0 add --all
```

## agent cnnversation

```bash
create a symbolic "CLAUDE.md" file that references @AGENTS.md
```

```bash
setup components/ui/sonner.tsx in app/layout.tsx and alter the existing app/page.tsx so that when we click
  on the button, we use toast API.

i see the Toaster component wasn't added within the ThemeProvider - is that necessary, i can see that regardless of this, the theme theme switching still works on the toast component.it is because we are using css classname for theme change?

```

## add clerk

https://clerk.com/docs/nextjs/getting-started/quickstart

```bash
clerk auth login
clerk link
clerk env pull
clerk doctor
```

```bash
add a dummy page under "test" name which will be protected (do not make it public in the proxy.ts) - to test if redirect works, do not run the server, i will be testing manually
```

## organization setup

```bash
 clear my layout.tsx file and make sure that there isn't any logic inside besides the clerk provider, meaning that i don't want any header components which use clerk's show componets or sign in and signup buttons, all of that will be triggered from other pages not the root layout

 now go ahead and clean up my page.tsx The only thing I want rendered inside is the user button component from clerk

 go ahead and organize my sign-in and sign up routes to all be under a singular next.js route group meaning you will have to use parentheses in the folder name
  and call that route group auth
```

### add clerk skills

```bash
npx skills add clerk/skills
```
