import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { DataTable, type DataTableColumn } from "./data-table"

// Sample data for tests
interface User {
  id: number
  name: string
  email: string
}

const sampleData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
]

const columns: DataTableColumn<User>[] = [
  {
    key: "id",
    header: "ID",
    cell: (row) => row.id,
  },
  {
    key: "name",
    header: "Name",
    cell: (row) => row.name,
  },
  {
    key: "email",
    header: "Email",
    cell: (row) => row.email,
  },
]

describe("DataTable", () => {
  describe("Rendering", () => {
    it("renders table with data", () => {
      render(<DataTable data={sampleData} columns={columns} />)

      expect(screen.getByRole("table")).toBeInTheDocument()
    })

    it("renders column headers", () => {
      render(<DataTable data={sampleData} columns={columns} />)

      expect(screen.getByText("ID")).toBeInTheDocument()
      expect(screen.getByText("Name")).toBeInTheDocument()
      expect(screen.getByText("Email")).toBeInTheDocument()
    })

    it("renders row data", () => {
      render(<DataTable data={sampleData} columns={columns} />)

      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("john@example.com")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
      expect(screen.getByText("jane@example.com")).toBeInTheDocument()
    })

    it("renders correct number of rows", () => {
      render(<DataTable data={sampleData} columns={columns} />)

      // Header row + 3 data rows
      const rows = screen.getAllByRole("row")
      expect(rows).toHaveLength(4)
    })
  })

  describe("Empty state", () => {
    it("renders default empty message when no data", () => {
      render(<DataTable data={[]} columns={columns} />)

      expect(screen.getByText("No data available.")).toBeInTheDocument()
    })

    it("renders custom empty message", () => {
      render(
        <DataTable
          data={[]}
          columns={columns}
          emptyMessage="No users found"
        />
      )

      expect(screen.getByText("No users found")).toBeInTheDocument()
    })

    it("empty row spans all columns", () => {
      const { container } = render(
        <DataTable data={[]} columns={columns} />
      )

      const emptyCell = container.querySelector("td")
      expect(emptyCell).toHaveAttribute("colspan", "3")
    })
  })

  describe("Props", () => {
    it("accepts custom className", () => {
      const { container } = render(
        <DataTable
          data={sampleData}
          columns={columns}
          className="custom-class"
        />
      )

      expect(container.firstChild).toHaveClass("custom-class")
    })
  })

  describe("Column configuration", () => {
    it("applies column className to cells", () => {
      const columnsWithClass: DataTableColumn<User>[] = [
        {
          key: "name",
          header: "Name",
          cell: (row) => row.name,
          className: "font-bold",
        },
      ]

      render(<DataTable data={sampleData} columns={columnsWithClass} />)

      // Check that the header and cells have the class
      const header = screen.getByText("Name")
      expect(header).toHaveClass("font-bold")
    })

    it("supports custom cell rendering", () => {
      const columnsWithCustomCell: DataTableColumn<User>[] = [
        {
          key: "name",
          header: "Name",
          cell: (row) => <strong data-testid="strong">{row.name}</strong>,
        },
      ]

      render(<DataTable data={sampleData} columns={columnsWithCustomCell} />)

      expect(screen.getAllByTestId("strong")).toHaveLength(3)
    })

    it("supports custom header rendering", () => {
      const columnsWithCustomHeader: DataTableColumn<User>[] = [
        {
          key: "name",
          header: <span data-testid="custom-header">Name Column</span>,
          cell: (row) => row.name,
        },
      ]

      render(<DataTable data={sampleData} columns={columnsWithCustomHeader} />)

      expect(screen.getByTestId("custom-header")).toBeInTheDocument()
    })
  })

  describe("Different data types", () => {
    it("handles numeric data", () => {
      interface Product {
        id: number
        price: number
      }

      const products: Product[] = [
        { id: 1, price: 29.99 },
        { id: 2, price: 49.99 },
      ]

      const productColumns: DataTableColumn<Product>[] = [
        { key: "id", header: "ID", cell: (row) => row.id },
        {
          key: "price",
          header: "Price",
          cell: (row) => `$${row.price.toFixed(2)}`,
        },
      ]

      render(<DataTable data={products} columns={productColumns} />)

      expect(screen.getByText("$29.99")).toBeInTheDocument()
      expect(screen.getByText("$49.99")).toBeInTheDocument()
    })

    it("handles boolean data", () => {
      interface Task {
        id: number
        completed: boolean
      }

      const tasks: Task[] = [
        { id: 1, completed: true },
        { id: 2, completed: false },
      ]

      const taskColumns: DataTableColumn<Task>[] = [
        { key: "id", header: "ID", cell: (row) => row.id },
        {
          key: "completed",
          header: "Status",
          cell: (row) => (row.completed ? "✓" : "✗"),
        },
      ]

      render(<DataTable data={tasks} columns={taskColumns} />)

      expect(screen.getByText("✓")).toBeInTheDocument()
      expect(screen.getByText("✗")).toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("has rounded border container", () => {
      const { container } = render(
        <DataTable data={sampleData} columns={columns} />
      )

      expect(container.firstChild).toHaveClass("rounded-md", "border")
    })
  })
})

