import { describe, it, expect } from "vitest"
import { render, screen } from "@/lib/test-utils"
import { axe, toHaveNoViolations } from "jest-axe"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table"

expect.extend(toHaveNoViolations)

describe("Table", () => {
  describe("Rendering", () => {
    it("renders with data-slot attribute", () => {
      render(<Table data-testid="table" />)
      const container = screen.getByTestId("table").parentElement
      expect(container).toHaveAttribute("data-slot", "table-container")
    })

    it("renders as table element", () => {
      render(<Table />)
      expect(screen.getByRole("table")).toBeInTheDocument()
    })

    it("renders with container wrapper", () => {
      render(<Table data-testid="table" />)
      const table = screen.getByTestId("table")
      expect(table.parentElement).toHaveClass("relative", "w-full", "overflow-x-auto")
    })

    it("renders complete table structure", () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Footer</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )
      
      expect(screen.getByText("Name")).toBeInTheDocument()
      expect(screen.getByText("Email")).toBeInTheDocument()
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("john@example.com")).toBeInTheDocument()
      expect(screen.getByText("Footer")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("applies base classes to Table", () => {
      render(<Table data-testid="table" />)
      const table = screen.getByTestId("table")
      expect(table).toHaveClass("w-full", "caption-bottom", "text-sm")
    })

    it("applies custom className to Table", () => {
      render(<Table className="custom-table" data-testid="table" />)
      expect(screen.getByTestId("table")).toHaveClass("custom-table")
    })

    it("applies custom className to TableHeader", () => {
      render(
        <Table>
          <TableHeader className="custom-header" data-testid="header">
            <TableRow>
              <TableHead>Test</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )
      expect(screen.getByTestId("header")).toHaveClass("custom-header")
    })

    it("applies custom className to TableBody", () => {
      render(
        <Table>
          <TableBody className="custom-body" data-testid="body">
            <TableRow>
              <TableCell>Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByTestId("body")).toHaveClass("custom-body")
    })

    it("applies custom className to TableRow", () => {
      render(
        <Table>
          <TableBody>
            <TableRow className="custom-row" data-testid="row">
              <TableCell>Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByTestId("row")).toHaveClass("custom-row")
    })

    it("applies custom className to TableHead", () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="custom-head">Test</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )
      expect(screen.getByRole("columnheader")).toHaveClass("custom-head")
    })

    it("applies custom className to TableCell", () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="custom-cell">Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByRole("cell")).toHaveClass("custom-cell")
    })

    it("applies custom className to TableFooter", () => {
      render(
        <Table>
          <TableFooter className="custom-footer" data-testid="footer">
            <TableRow>
              <TableCell>Test</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )
      expect(screen.getByTestId("footer")).toHaveClass("custom-footer")
    })
  })

  describe("Data slots", () => {
    it("has data-slot on TableHeader", () => {
      render(
        <Table>
          <TableHeader data-testid="header">
            <TableRow>
              <TableHead>Test</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )
      expect(screen.getByTestId("header")).toHaveAttribute("data-slot", "table-header")
    })

    it("has data-slot on TableBody", () => {
      render(
        <Table>
          <TableBody data-testid="body">
            <TableRow>
              <TableCell>Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByTestId("body")).toHaveAttribute("data-slot", "table-body")
    })

    it("has data-slot on TableRow", () => {
      render(
        <Table>
          <TableBody>
            <TableRow data-testid="row">
              <TableCell>Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByTestId("row")).toHaveAttribute("data-slot", "table-row")
    })

    it("has data-slot on TableHead", () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead data-testid="head">Test</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )
      expect(screen.getByTestId("head")).toHaveAttribute("data-slot", "table-head")
    })

    it("has data-slot on TableCell", () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell data-testid="cell">Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByTestId("cell")).toHaveAttribute("data-slot", "table-cell")
    })

    it("has data-slot on TableFooter", () => {
      render(
        <Table>
          <TableFooter data-testid="footer">
            <TableRow>
              <TableCell>Test</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )
      expect(screen.getByTestId("footer")).toHaveAttribute("data-slot", "table-footer")
    })
  })

  describe("TableCaption", () => {
    it("renders caption", () => {
      render(
        <Table>
          <TableCaption>A list of users</TableCaption>
          <TableBody>
            <TableRow>
              <TableCell>Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByText("A list of users")).toBeInTheDocument()
    })

    it("has data-slot attribute", () => {
      render(
        <Table>
          <TableCaption data-testid="caption">Caption</TableCaption>
        </Table>
      )
      expect(screen.getByTestId("caption")).toHaveAttribute("data-slot", "table-caption")
    })

    it("applies custom className", () => {
      render(
        <Table>
          <TableCaption className="custom-caption" data-testid="caption">Caption</TableCaption>
        </Table>
      )
      expect(screen.getByTestId("caption")).toHaveClass("custom-caption")
    })
  })

  describe("Accessibility", () => {
    it("has no accessibility violations for simple table", async () => {
      const { container } = render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for table with caption", async () => {
      const { container } = render(
        <Table>
          <TableCaption>A list of users in the system</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it("has no accessibility violations for complete table", async () => {
      const { container } = render(
        <Table>
          <TableCaption>User data</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>john@test.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane</TableCell>
              <TableCell>jane@test.com</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total: 2 users</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe("Props forwarding", () => {
    it("forwards additional props to Table", () => {
      render(<Table data-testid="table-test" />)
      expect(screen.getByTestId("table-test")).toBeInTheDocument()
    })

    it("forwards id prop to TableRow", () => {
      render(
        <Table>
          <TableBody>
            <TableRow id="row-1" data-testid="row">
              <TableCell>Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByTestId("row")).toHaveAttribute("id", "row-1")
    })

    it("forwards colSpan to TableCell", () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={3}>Spanning cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )
      expect(screen.getByRole("cell")).toHaveAttribute("colspan", "3")
    })

    it("forwards scope to TableHead", () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Column Header</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      )
      expect(screen.getByRole("columnheader")).toHaveAttribute("scope", "col")
    })
  })
})

