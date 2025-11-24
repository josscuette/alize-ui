/**
 * Content sanitization utilities
 * 
 * Provides utilities for sanitizing user input and dynamic content.
 * Helps prevent XSS attacks and ensure safe content rendering.
 * 
 * @example
 * ```tsx
 * import { sanitizeHtml, sanitizeUrl } from 'alize/lib/sanitization'
 * 
 * const safeHtml = sanitizeHtml(userInput)
 * const safeUrl = sanitizeUrl(userUrl)
 * ```
 */

/**
 * Sanitize HTML content
 * Removes potentially dangerous HTML tags and attributes
 * 
 * @param html - HTML string to sanitize
 * @param allowedTags - Array of allowed HTML tags (default: safe tags only)
 * @returns Sanitized HTML string
 * 
 * @example
 * ```tsx
 * const safeHtml = sanitizeHtml('<script>alert("xss")</script><p>Safe content</p>')
 * // Returns: '<p>Safe content</p>'
 * ```
 */
export function sanitizeHtml(
  html: string,
  allowedTags: string[] = [
    "p",
    "br",
    "strong",
    "em",
    "u",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "a",
    "blockquote",
    "code",
    "pre",
  ]
): string {
  if (!html) return ""

  // Remove script tags and event handlers
  let sanitized = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/on\w+='[^']*'/gi, "")
    .replace(/javascript:/gi, "")

  // Remove disallowed tags but keep their content
  const tagPattern = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
  sanitized = sanitized.replace(tagPattern, (match, tagName) => {
    const lowerTag = tagName.toLowerCase()
    if (allowedTags.includes(lowerTag)) {
      return match
    }
    return ""
  })

  return sanitized
}

/**
 * Sanitize URL
 * Validates and sanitizes URLs to prevent XSS and protocol-based attacks
 * 
 * @param url - URL string to sanitize
 * @param allowedProtocols - Array of allowed URL protocols (default: ['http', 'https', 'mailto'])
 * @returns Sanitized URL or empty string if invalid
 * 
 * @example
 * ```tsx
 * const safeUrl = sanitizeUrl('javascript:alert("xss")')
 * // Returns: ''
 * 
 * const safeUrl = sanitizeUrl('https://example.com')
 * // Returns: 'https://example.com'
 * ```
 */
export function sanitizeUrl(
  url: string,
  allowedProtocols: string[] = ["http", "https", "mailto"]
): string {
  if (!url) return ""

  try {
    const urlObj = new URL(url)
    const protocol = urlObj.protocol.replace(":", "").toLowerCase()

    if (!allowedProtocols.includes(protocol)) {
      return ""
    }

    return urlObj.toString()
  } catch {
    // If URL parsing fails, try to sanitize manually
    const lowerUrl = url.toLowerCase().trim()
    const hasAllowedProtocol = allowedProtocols.some((protocol) =>
      lowerUrl.startsWith(`${protocol}:`)
    )

    if (!hasAllowedProtocol) {
      return ""
    }

    // Remove javascript: and data: protocols
    if (lowerUrl.startsWith("javascript:") || lowerUrl.startsWith("data:")) {
      return ""
    }

    return url
  }
}

/**
 * Sanitize text content
 * Escapes HTML entities to prevent XSS
 * 
 * @param text - Text string to sanitize
 * @returns Escaped HTML string
 * 
 * @example
 * ```tsx
 * const safeText = sanitizeText('<script>alert("xss")</script>')
 * // Returns: '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
 * ```
 */
export function sanitizeText(text: string): string {
  if (!text) return ""

  const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  }

  return text.replace(/[&<>"'/]/g, (char) => htmlEscapes[char] || char)
}

/**
 * Sanitize object keys
 * Removes potentially dangerous keys from objects
 * 
 * @param obj - Object to sanitize
 * @param dangerousKeys - Array of keys to remove (default: common dangerous keys)
 * @returns New object with dangerous keys removed
 * 
 * @example
 * ```tsx
 * const safeObj = sanitizeObjectKeys({ __proto__: {}, normalKey: 'value' })
 * // Returns: { normalKey: 'value' }
 * ```
 */
export function sanitizeObjectKeys<T extends Record<string, unknown>>(
  obj: T,
  dangerousKeys: string[] = ["__proto__", "constructor", "prototype"]
): Partial<T> {
  const sanitized = { ...obj }

  dangerousKeys.forEach((key) => {
    delete sanitized[key as keyof T]
  })

  return sanitized
}

/**
 * Sanitize file name
 * Removes potentially dangerous characters from file names
 * 
 * @param fileName - File name to sanitize
 * @returns Sanitized file name
 * 
 * @example
 * ```tsx
 * const safeName = sanitizeFileName('../../../etc/passwd')
 * // Returns: 'etc_passwd'
 * ```
 */
export function sanitizeFileName(fileName: string): string {
  if (!fileName) return ""

  return fileName
    .replace(/\.\./g, "") // Remove parent directory references
    .replace(/[\/\\]/g, "_") // Replace slashes with underscores
    .replace(/[<>:"|?*]/g, "") // Remove invalid characters
    .trim()
}

/**
 * Validate and sanitize email
 * Validates email format and sanitizes input
 * 
 * @param email - Email string to validate and sanitize
 * @returns Sanitized email or null if invalid
 * 
 * @example
 * ```tsx
 * const safeEmail = sanitizeEmail('  user@example.com  ')
 * // Returns: 'user@example.com'
 * ```
 */
export function sanitizeEmail(email: string): string | null {
  if (!email) return null

  const trimmed = email.trim().toLowerCase()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(trimmed)) {
    return null
  }

  return trimmed
}

