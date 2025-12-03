/**
 * Integration tests for data display components
 * Tests Table with sorting/filtering, DataTable with pagination
 */
import { describe, it, expect, vi } from "vitest"
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface User {
  id: number
  name: string
  email: string
  status: "active" | "inactive"
}

const mockUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", status: "active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", status: "inactive" },
]

// Test component: Table with filtering
function FilterableTable() {
  const [filter, setFilter] = React.useState("")
  
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <Input
        placeholder="Filter users..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        data-testid="filter-input"
      />
      <Table>
        <TableCaption>A list of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No users found
              </TableCell>
            </TableRow>
          ) : (
            filteredUsers.map((user) => (
              <TableRow key={user.id} data-testid={`row-${user.id}`}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "secondary"}>
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

// Test component: Paginated Table
function PaginatedTable() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 2
  const totalPages = Math.ceil(mockUsers.length / itemsPerPage)
  
  const paginatedUsers = mockUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user.id} data-testid={`row-${user.id}`}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage > 1) setCurrentPage(currentPage - 1)
              }}
              aria-disabled={currentPage === 1}
            />
          </PaginationItem>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage(page)
                }}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage < totalPages) setCurrentPage(currentPage + 1)
              }}
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      
      <div data-testid="page-info">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  )
}

// Test component: Sortable Table
function SortableTable() {
  const [sortField, setSortField] = React.useState<"name" | "email">("name")
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")

  const sortedUsers = [...mockUsers].sort((a, b) => {
    const aValue = a[sortField]
    const bValue = b[sortField]
    const direction = sortDirection === "asc" ? 1 : -1
    return aValue.localeCompare(bValue) * direction
  })

  const handleSort = (field: "name" | "email") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Button
              variant="ghost"
              onClick={() => handleSort("name")}
              data-testid="sort-name"
            >
              Name {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
            </Button>
          </TableHead>
          <TableHead>
            <Button
              variant="ghost"
              onClick={() => handleSort("email")}
              data-testid="sort-email"
            >
              Email {sortField === "email" && (sortDirection === "asc" ? "↑" : "↓")}
            </Button>
          </TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedUsers.map((user, index) => (
          <TableRow key={user.id} data-testid={`sorted-row-${index}`}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

describe("Data Display Integration", () => {
  describe("Filterable Table", () => {
    it("renders all users initially", () => {
      render(<FilterableTable />)

      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
      expect(screen.getByText("Bob Johnson")).toBeInTheDocument()
      expect(screen.getAllByRole("row")).toHaveLength(6) // header + 5 data rows
    })

    it("filters users by name", async () => {
      const user = userEvent.setup()
      render(<FilterableTable />)

      await user.type(screen.getByTestId("filter-input"), "john")

      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Bob Johnson")).toBeInTheDocument()
      expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument()
    })

    it("filters users by email", async () => {
      const user = userEvent.setup()
      render(<FilterableTable />)

      await user.type(screen.getByTestId("filter-input"), "jane@")

      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
      expect(screen.queryByText("John Doe")).not.toBeInTheDocument()
    })

    it("shows empty state when no matches", async () => {
      const user = userEvent.setup()
      render(<FilterableTable />)

      await user.type(screen.getByTestId("filter-input"), "nonexistent")

      expect(screen.getByText("No users found")).toBeInTheDocument()
    })

    it("displays status badges correctly", () => {
      render(<FilterableTable />)

      const activeUserRow = screen.getByTestId("row-1")
      expect(within(activeUserRow).getByText("active")).toBeInTheDocument()

      const inactiveUserRow = screen.getByTestId("row-3")
      expect(within(inactiveUserRow).getByText("inactive")).toBeInTheDocument()
    })
  })

  describe("Paginated Table", () => {
    it("shows first page initially", () => {
      render(<PaginatedTable />)

      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
      expect(screen.queryByText("Bob Johnson")).not.toBeInTheDocument()
      expect(screen.getByTestId("page-info")).toHaveTextContent("Page 1 of 3")
    })

    it("navigates to next page", async () => {
      const user = userEvent.setup()
      render(<PaginatedTable />)

      await user.click(screen.getByLabelText(/go to next page/i))

      expect(screen.queryByText("John Doe")).not.toBeInTheDocument()
      expect(screen.getByText("Bob Johnson")).toBeInTheDocument()
      expect(screen.getByText("Alice Brown")).toBeInTheDocument()
      expect(screen.getByTestId("page-info")).toHaveTextContent("Page 2 of 3")
    })

    it("navigates to previous page", async () => {
      const user = userEvent.setup()
      render(<PaginatedTable />)

      // Go to page 2
      await user.click(screen.getByLabelText(/go to next page/i))
      expect(screen.getByTestId("page-info")).toHaveTextContent("Page 2 of 3")

      // Go back to page 1
      await user.click(screen.getByLabelText(/go to previous page/i))
      expect(screen.getByTestId("page-info")).toHaveTextContent("Page 1 of 3")
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    it("navigates to specific page", async () => {
      const user = userEvent.setup()
      render(<PaginatedTable />)

      await user.click(screen.getByRole("link", { name: "3" }))

      expect(screen.getByText("Charlie Wilson")).toBeInTheDocument()
      expect(screen.getByTestId("page-info")).toHaveTextContent("Page 3 of 3")
    })

    it("highlights active page", () => {
      render(<PaginatedTable />)

      const page1Link = screen.getByRole("link", { name: "1" })
      expect(page1Link).toHaveAttribute("aria-current", "page")
    })
  })

  describe("Sortable Table", () => {
    it("sorts by name ascending by default", () => {
      render(<SortableTable />)

      const rows = screen.getAllByTestId(/sorted-row-/)
      expect(within(rows[0]).getByText("Alice Brown")).toBeInTheDocument()
      expect(within(rows[1]).getByText("Bob Johnson")).toBeInTheDocument()
    })

    it("toggles sort direction on same column", async () => {
      const user = userEvent.setup()
      render(<SortableTable />)

      // Click to sort descending
      await user.click(screen.getByTestId("sort-name"))

      const rows = screen.getAllByTestId(/sorted-row-/)
      expect(within(rows[0]).getByText("John Doe")).toBeInTheDocument()
    })

    it("sorts by different column", async () => {
      const user = userEvent.setup()
      render(<SortableTable />)

      await user.click(screen.getByTestId("sort-email"))

      const rows = screen.getAllByTestId(/sorted-row-/)
      expect(within(rows[0]).getByText("alice@example.com")).toBeInTheDocument()
    })

    it("shows sort indicator", async () => {
      render(<SortableTable />)

      expect(screen.getByTestId("sort-name")).toHaveTextContent("Name ↑")
    })
  })
})

