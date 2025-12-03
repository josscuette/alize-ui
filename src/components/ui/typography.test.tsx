import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyCode,
} from "./typography"

describe("TypographyH1", () => {
  it("renders as h1 element", () => {
    render(<TypographyH1 data-testid="h1">Heading 1</TypographyH1>)

    expect(screen.getByTestId("h1").tagName).toBe("H1")
  })

  it("renders content", () => {
    render(<TypographyH1>Main Title</TypographyH1>)

    expect(screen.getByText("Main Title")).toBeInTheDocument()
  })

  it("has correct styling", () => {
    render(<TypographyH1 data-testid="h1">Heading</TypographyH1>)

    expect(screen.getByTestId("h1")).toHaveClass("text-4xl", "font-normal")
  })

  it("accepts custom className", () => {
    render(<TypographyH1 className="custom-class" data-testid="h1">Title</TypographyH1>)

    expect(screen.getByTestId("h1")).toHaveClass("custom-class")
  })

  it("forwards ref", () => {
    const ref = { current: null }
    render(<TypographyH1 ref={ref}>Title</TypographyH1>)

    expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
  })
})

describe("TypographyH2", () => {
  it("renders as h2 element", () => {
    render(<TypographyH2 data-testid="h2">Heading 2</TypographyH2>)

    expect(screen.getByTestId("h2").tagName).toBe("H2")
  })

  it("renders content", () => {
    render(<TypographyH2>Section Title</TypographyH2>)

    expect(screen.getByText("Section Title")).toBeInTheDocument()
  })

  it("has correct styling", () => {
    render(<TypographyH2 data-testid="h2">Heading</TypographyH2>)

    expect(screen.getByTestId("h2")).toHaveClass("text-3xl", "font-normal")
  })

  it("accepts custom className", () => {
    render(<TypographyH2 className="custom-class" data-testid="h2">Title</TypographyH2>)

    expect(screen.getByTestId("h2")).toHaveClass("custom-class")
  })
})

describe("TypographyH3", () => {
  it("renders as h3 element", () => {
    render(<TypographyH3 data-testid="h3">Heading 3</TypographyH3>)

    expect(screen.getByTestId("h3").tagName).toBe("H3")
  })

  it("renders content", () => {
    render(<TypographyH3>Subsection Title</TypographyH3>)

    expect(screen.getByText("Subsection Title")).toBeInTheDocument()
  })

  it("has correct styling", () => {
    render(<TypographyH3 data-testid="h3">Heading</TypographyH3>)

    expect(screen.getByTestId("h3")).toHaveClass("text-2xl", "font-normal")
  })

  it("accepts custom className", () => {
    render(<TypographyH3 className="custom-class" data-testid="h3">Title</TypographyH3>)

    expect(screen.getByTestId("h3")).toHaveClass("custom-class")
  })
})

describe("TypographyH4", () => {
  it("renders as h4 element", () => {
    render(<TypographyH4 data-testid="h4">Heading 4</TypographyH4>)

    expect(screen.getByTestId("h4").tagName).toBe("H4")
  })

  it("renders content", () => {
    render(<TypographyH4>Small Title</TypographyH4>)

    expect(screen.getByText("Small Title")).toBeInTheDocument()
  })

  it("has correct styling", () => {
    render(<TypographyH4 data-testid="h4">Heading</TypographyH4>)

    expect(screen.getByTestId("h4")).toHaveClass("text-xl", "font-normal")
  })

  it("accepts custom className", () => {
    render(<TypographyH4 className="custom-class" data-testid="h4">Title</TypographyH4>)

    expect(screen.getByTestId("h4")).toHaveClass("custom-class")
  })
})

describe("TypographyP", () => {
  it("renders as p element", () => {
    render(<TypographyP data-testid="p">Paragraph</TypographyP>)

    expect(screen.getByTestId("p").tagName).toBe("P")
  })

  it("renders content", () => {
    render(<TypographyP>This is a paragraph of text.</TypographyP>)

    expect(screen.getByText("This is a paragraph of text.")).toBeInTheDocument()
  })

  it("has correct styling", () => {
    render(<TypographyP data-testid="p">Text</TypographyP>)

    expect(screen.getByTestId("p")).toHaveClass("leading-7")
  })

  it("accepts custom className", () => {
    render(<TypographyP className="custom-class" data-testid="p">Text</TypographyP>)

    expect(screen.getByTestId("p")).toHaveClass("custom-class")
  })

  it("forwards ref", () => {
    const ref = { current: null }
    render(<TypographyP ref={ref}>Text</TypographyP>)

    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })
})

describe("TypographyBlockquote", () => {
  it("renders as blockquote element", () => {
    render(
      <TypographyBlockquote data-testid="blockquote">Quote</TypographyBlockquote>
    )

    expect(screen.getByTestId("blockquote").tagName).toBe("BLOCKQUOTE")
  })

  it("renders content", () => {
    render(
      <TypographyBlockquote>A famous quote here.</TypographyBlockquote>
    )

    expect(screen.getByText("A famous quote here.")).toBeInTheDocument()
  })

  it("has correct styling", () => {
    render(
      <TypographyBlockquote data-testid="blockquote">Quote</TypographyBlockquote>
    )

    expect(screen.getByTestId("blockquote")).toHaveClass(
      "border-l-2",
      "pl-6",
      "italic"
    )
  })

  it("accepts custom className", () => {
    render(
      <TypographyBlockquote className="custom-class" data-testid="blockquote">
        Quote
      </TypographyBlockquote>
    )

    expect(screen.getByTestId("blockquote")).toHaveClass("custom-class")
  })
})

describe("TypographyCode", () => {
  it("renders as code element", () => {
    render(<TypographyCode data-testid="code">code</TypographyCode>)

    expect(screen.getByTestId("code").tagName).toBe("CODE")
  })

  it("renders content", () => {
    render(<TypographyCode>const x = 1</TypographyCode>)

    expect(screen.getByText("const x = 1")).toBeInTheDocument()
  })

  it("has correct styling", () => {
    render(<TypographyCode data-testid="code">code</TypographyCode>)

    expect(screen.getByTestId("code")).toHaveClass(
      "rounded",
      "bg-muted",
      "font-mono",
      "text-sm"
    )
  })

  it("accepts custom className", () => {
    render(
      <TypographyCode className="custom-class" data-testid="code">
        code
      </TypographyCode>
    )

    expect(screen.getByTestId("code")).toHaveClass("custom-class")
  })
})

describe("Typography composition", () => {
  it("renders multiple typography elements together", () => {
    render(
      <article>
        <TypographyH1>Article Title</TypographyH1>
        <TypographyP>Introduction paragraph.</TypographyP>
        <TypographyH2>Section One</TypographyH2>
        <TypographyP>Section content with <TypographyCode>inline code</TypographyCode>.</TypographyP>
        <TypographyBlockquote>A notable quote.</TypographyBlockquote>
      </article>
    )

    expect(screen.getByText("Article Title")).toBeInTheDocument()
    expect(screen.getByText("Introduction paragraph.")).toBeInTheDocument()
    expect(screen.getByText("Section One")).toBeInTheDocument()
    expect(screen.getByText("inline code")).toBeInTheDocument()
    expect(screen.getByText("A notable quote.")).toBeInTheDocument()
  })
})

