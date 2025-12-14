import { useEffect } from "react"
import { defineWidgetConfig } from "@medusajs/admin-shared"

const LoginBrandingWidget = () => {
  const brandTitle = "Suno Store"
  const logoSrc =
    typeof window !== "undefined"
      ? localStorage.getItem("adminLogo") || "/static/suno-logo.png"
        : "/static/suno-logo.png"

  useEffect(() => {
    // If the default heading exists, replace its text instead of removing it.
    const headings = document.querySelectorAll("h1, h2")
    headings.forEach((heading) => {
      if (heading.textContent?.includes("Welcome to Medusa")) {
        heading.textContent = brandTitle
      }
    })
  }, [])

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <img src={logoSrc} alt={brandTitle} className="h-12 w-auto" />

      <h1 className="text-2xl font-bold text-gray-900">{brandTitle}</h1>
      <p className="text-sm text-gray-600 text-center max-w-xs">
        Manage your inventory, orders, and products in one place
      </p>
    </div>
  )
}

export const config = defineWidgetConfig({
  zone: "login.before",
})

export default LoginBrandingWidget
