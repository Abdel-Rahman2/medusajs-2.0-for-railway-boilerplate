import { useEffect } from "react"

const LoginBrandingWidget = () => {
  const brandTitle = "Suno Store"
  const logoSrc =
    typeof window !== "undefined"
      ? localStorage.getItem("adminLogo") || "/static/suno-logo.png"
        : "/static/suno-logo.png"

  useEffect(() => {
    // Remove or replace all Medusa branding
    const removeMedusaBranding = () => {
      // Replace headings
      const headings = document.querySelectorAll("h1, h2, h3")
      headings.forEach((heading) => {
        const text = heading.textContent || ""
        if (text.includes("Medusa") || text.includes("Welcome to Medusa")) {
          heading.textContent = text.replace(/Medusa/gi, "").replace(/Welcome to\s*/gi, "").trim() || brandTitle
        }
      })

      // Replace any text content with Medusa
      const allElements = document.querySelectorAll("*")
      allElements.forEach((el) => {
        if (el.children.length === 0 && el.textContent) {
          if (el.textContent.includes("Medusa") && !el.textContent.includes(brandTitle)) {
            el.textContent = el.textContent.replace(/Medusa/gi, brandTitle)
          }
        }
      })

      // Remove Medusa logo if present
      const medusaLogos = document.querySelectorAll('img[alt*="Medusa"], img[src*="medusa"]')
      medusaLogos.forEach((logo) => {
        if (logo instanceof HTMLImageElement) {
          logo.style.display = "none"
        }
      })
    }

    // Run immediately and after a short delay to catch dynamically loaded content
    removeMedusaBranding()
    const timeout = setTimeout(removeMedusaBranding, 100)
    const interval = setInterval(removeMedusaBranding, 500)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
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

export const config = {
  zone: "login.before",
}

export default LoginBrandingWidget
