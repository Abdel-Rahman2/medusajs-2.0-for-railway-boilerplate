import { useEffect } from "react"
import type { WidgetConfig } from "@medusajs/admin"

const LoginBrandingWidget = () => {
  useEffect(() => {
    // Find and remove the default "Welcome to Medusa" heading
    const headings = document.querySelectorAll("h1, h2")
    headings.forEach((heading) => {
      if (heading.textContent?.includes("Welcome to Medusa")) {
        heading.remove()
      }
    })
  }, [])

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      {/* Replace the src below with your actual Suno Store logo URL */}
      <img
        src="/static/suno-logo.svg"
        alt="Suno Store"
        className="h-12 w-auto"
      />

      <h1 className="text-2xl font-bold text-gray-900">
        Welcome to Suno Store
      </h1>
      <p className="text-sm text-gray-600 text-center max-w-xs">
        Manage your inventory, orders, and products in one place
      </p>
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "login.before",
}

export default LoginBrandingWidget
