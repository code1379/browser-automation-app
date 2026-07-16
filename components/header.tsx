"use client"

import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export function Header() {
  const { isSignedIn } = useAuth()

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <span className="font-medium">Browser Automation</span>
      <div className="flex items-center gap-2">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <>
            <SignInButton>
              <Button variant="outline" size="sm">Sign in</Button>
            </SignInButton>
            <SignUpButton>
              <Button size="sm">Sign up</Button>
            </SignUpButton>
          </>
        )}
      </div>
    </header>
  )
}
