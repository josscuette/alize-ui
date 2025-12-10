"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import {
  DataTable,
  createSelectionColumn,
  SortableHeader,
} from "@/components/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Sparkline, Sparkbar } from "@/components/ui/sparkline"
import { MaterialSymbol } from "@/components/material-symbol"

// Helper to generate trend data
function generateTrend(count: number, start: number, volatility: number): number[] {
  const data: number[] = [start]
  for (let i = 1; i < count; i++) {
    data.push(Math.max(0, Math.min(100, data[i - 1] + (Math.random() - 0.45) * volatility)))
  }
  return data
}

// ============================================================================
// USE CASE 1: EMPLOYEES (HR)
// ============================================================================

// Rich sample data type
interface Employee {
  id: string
  name: string
  email: string
  department: string
  role: string
  status: "Active" | "Inactive" | "On Leave"
  salary: number
  startDate: string
  location: string
  performance: number[] // Last 12 months performance trend
  phone: string
  team: string
  manager: string
  projects: number
}

// Sample data with many columns including performance trend
const sampleData: Employee[] = [
  { id: "EMP001", name: "John Doe", email: "john.doe@company.com", department: "Engineering", role: "Senior Developer", status: "Active", salary: 95000, startDate: "2021-03-15", location: "New York", performance: generateTrend(12, 75, 10), phone: "+1 212-555-0101", team: "Platform", manager: "Bob Johnson", projects: 5 },
  { id: "EMP002", name: "Jane Smith", email: "jane.smith@company.com", department: "Design", role: "UX Lead", status: "Active", salary: 88000, startDate: "2020-07-22", location: "San Francisco", performance: generateTrend(12, 82, 8), phone: "+1 415-555-0102", team: "Design Systems", manager: "Julia Chen", projects: 3 },
  { id: "EMP003", name: "Bob Johnson", email: "bob.johnson@company.com", department: "Engineering", role: "Tech Lead", status: "Active", salary: 120000, startDate: "2019-01-10", location: "Seattle", performance: generateTrend(12, 90, 5), phone: "+1 206-555-0103", team: "Platform", manager: "Julia Chen", projects: 8 },
  { id: "EMP004", name: "Alice Brown", email: "alice.brown@company.com", department: "Marketing", role: "Marketing Manager", status: "On Leave", salary: 75000, startDate: "2022-05-01", location: "Chicago", performance: generateTrend(12, 68, 12), phone: "+1 312-555-0104", team: "Growth", manager: "Diana Miller", projects: 2 },
  { id: "EMP005", name: "Charlie Wilson", email: "charlie.wilson@company.com", department: "Sales", role: "Sales Rep", status: "Active", salary: 65000, startDate: "2023-02-14", location: "Boston", performance: generateTrend(12, 55, 15), phone: "+1 617-555-0105", team: "Enterprise", manager: "Diana Miller", projects: 12 },
  { id: "EMP006", name: "Diana Miller", email: "diana.miller@company.com", department: "HR", role: "HR Director", status: "Active", salary: 98000, startDate: "2018-11-30", location: "Austin", performance: generateTrend(12, 88, 6), phone: "+1 512-555-0106", team: "People Ops", manager: "Julia Chen", projects: 4 },
  { id: "EMP007", name: "Edward Davis", email: "edward.davis@company.com", department: "Engineering", role: "Junior Developer", status: "Active", salary: 55000, startDate: "2024-01-08", location: "Denver", performance: generateTrend(12, 60, 18), phone: "+1 303-555-0107", team: "Mobile", manager: "Bob Johnson", projects: 1 },
  { id: "EMP008", name: "Fiona Garcia", email: "fiona.garcia@company.com", department: "Finance", role: "Financial Analyst", status: "Active", salary: 72000, startDate: "2021-09-20", location: "Miami", performance: generateTrend(12, 78, 8), phone: "+1 305-555-0108", team: "FP&A", manager: "Diana Miller", projects: 6 },
  { id: "EMP009", name: "George Martinez", email: "george.martinez@company.com", department: "Engineering", role: "DevOps Engineer", status: "Inactive", salary: 105000, startDate: "2020-04-05", location: "Portland", performance: generateTrend(12, 45, 20), phone: "+1 503-555-0109", team: "Infrastructure", manager: "Bob Johnson", projects: 3 },
  { id: "EMP010", name: "Hannah Lee", email: "hannah.lee@company.com", department: "Design", role: "UI Designer", status: "Active", salary: 78000, startDate: "2022-08-12", location: "Los Angeles", performance: generateTrend(12, 85, 7), phone: "+1 213-555-0110", team: "Design Systems", manager: "Jane Smith", projects: 4 },
  { id: "EMP011", name: "Ivan Petrov", email: "ivan.petrov@company.com", department: "Engineering", role: "Backend Developer", status: "Active", salary: 92000, startDate: "2021-06-18", location: "Remote", performance: generateTrend(12, 80, 9), phone: "+1 555-555-0111", team: "Platform", manager: "Bob Johnson", projects: 7 },
  { id: "EMP012", name: "Julia Chen", email: "julia.chen@company.com", department: "Product", role: "Product Manager", status: "Active", salary: 110000, startDate: "2019-12-01", location: "San Francisco", performance: generateTrend(12, 92, 4), phone: "+1 415-555-0112", team: "Core Product", manager: "—", projects: 10 },
]

// Status badge component
function StatusBadge({ status }: { status: Employee["status"] }) {
  const variant = status === "Active" ? "default" : status === "On Leave" ? "secondary" : "outline"
  return <Badge variant={variant}>{status}</Badge>
}

// Format currency
function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)
}

// Basic columns (simple) with sparkline
const basicColumns: ColumnDef<Employee>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "department", header: "Department" },
  { accessorKey: "role", header: "Role" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    accessorKey: "performance",
    header: "Performance",
    cell: ({ row }) => {
      const data = row.getValue("performance") as number[]
      const current = data[data.length - 1]
      return (
        <Sparkline
          data={data}
          type="line"
          width={80}
          height={24}
          color={current >= 75 ? "var(--semantic-dataviz-rag-successmedium)" : current >= 50 ? "var(--semantic-dataviz-rag-warningmedium)" : "var(--semantic-dataviz-rag-dangermedium)"}
        />
      )
    },
  },
]

// Full columns with sorting
const fullColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <SortableHeader column={column}>ID</SortableHeader>,
    size: 100,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableHeader column={column}>Name</SortableHeader>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortableHeader column={column}>Email</SortableHeader>,
  },
  {
    accessorKey: "department",
    header: ({ column }) => <SortableHeader column={column}>Department</SortableHeader>,
  },
  {
    accessorKey: "role",
    header: ({ column }) => <SortableHeader column={column}>Role</SortableHeader>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortableHeader column={column}>Status</SortableHeader>,
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    accessorKey: "salary",
    header: ({ column }) => <SortableHeader column={column}>Salary</SortableHeader>,
    cell: ({ row }) => formatCurrency(row.getValue("salary")),
  },
  {
    accessorKey: "location",
    header: ({ column }) => <SortableHeader column={column}>Location</SortableHeader>,
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => <SortableHeader column={column}>Start Date</SortableHeader>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "team",
    header: ({ column }) => <SortableHeader column={column}>Team</SortableHeader>,
  },
  {
    accessorKey: "manager",
    header: "Manager",
  },
  {
    accessorKey: "projects",
    header: ({ column }) => <SortableHeader column={column}>Projects</SortableHeader>,
    cell: ({ row }) => <span className="font-medium">{row.getValue("projects")}</span>,
  },
  {
    accessorKey: "performance",
    header: "Performance",
    cell: ({ row }) => {
      const data = row.getValue("performance") as number[]
      const current = data[data.length - 1]
      return (
        <Sparkline
          data={data}
          type="line"
          width={80}
          height={24}
          color={current >= 75 ? "var(--semantic-dataviz-rag-successmedium)" : current >= 50 ? "var(--semantic-dataviz-rag-warningmedium)" : "var(--semantic-dataviz-rag-dangermedium)"}
        />
      )
    },
  },
]

// Columns with selection
const selectionColumns: ColumnDef<Employee>[] = [
  createSelectionColumn<Employee>(),
  ...fullColumns.slice(0, 5),
]

// Server monitoring data for sparklines example
interface ServerMetrics {
  name: string
  status: "healthy" | "warning" | "critical"
  cpuHistory: number[]
  memoryHistory: number[]
  requests: number
  requestsHistory: number[]
  uptime: number
}

const serverData: ServerMetrics[] = [
  { name: "web-prod-01", status: "healthy", cpuHistory: generateTrend(15, 35, 12), memoryHistory: generateTrend(12, 45, 15), requests: 12500, requestsHistory: generateTrend(15, 10000, 2000), uptime: 99.9 },
  { name: "api-prod-01", status: "warning", cpuHistory: generateTrend(15, 65, 15), memoryHistory: generateTrend(12, 72, 10), requests: 8200, requestsHistory: generateTrend(15, 9000, 1500), uptime: 98.5 },
  { name: "db-prod-01", status: "healthy", cpuHistory: generateTrend(15, 25, 8), memoryHistory: generateTrend(12, 55, 12), requests: 25000, requestsHistory: generateTrend(15, 22000, 3000), uptime: 99.99 },
  { name: "cache-prod-01", status: "critical", cpuHistory: generateTrend(15, 88, 8), memoryHistory: generateTrend(12, 92, 5), requests: 45000, requestsHistory: generateTrend(15, 40000, 5000), uptime: 95.2 },
]

const serverColumns: ColumnDef<ServerMetrics>[] = [
  { accessorKey: "name", header: "Server" },
  {
    accessorKey: "cpuHistory",
    header: "CPU",
    cell: ({ row }) => {
      const data = row.getValue("cpuHistory") as number[]
      const current = data[data.length - 1]
      return (
        <Sparkline
          data={data}
          type="area"
          width={90}
          height={28}
          color={current > 80 ? "var(--semantic-dataviz-rag-dangermedium)" : current > 60 ? "var(--semantic-dataviz-rag-warningmedium)" : "var(--semantic-dataviz-rag-successmedium)"}
        />
      )
    },
  },
  {
    accessorKey: "memoryHistory",
    header: "Memory",
    cell: ({ row }) => (
      <Sparkbar
        data={row.getValue("memoryHistory") as number[]}
        thresholds={{ warning: 70, danger: 85 }}
        width={90}
        height={28}
      />
    ),
  },
  {
    accessorKey: "uptime",
    header: "Uptime",
    cell: ({ row }) => {
      const uptime = row.getValue("uptime") as number
      return (
        <span className={uptime < 99 ? "text-[var(--semantic-text-danger)]" : ""}>
          {uptime}%
        </span>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as ServerMetrics["status"]
      const variants = { healthy: "default", warning: "secondary", critical: "destructive" } as const
      return <Badge variant={variants[status]}>{status}</Badge>
    },
  },
]

// ============================================================================
// USE CASE 3: PRODUCTS (E-commerce)
// ============================================================================

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  rating: number
  sales: number
  salesHistory: number[]
  status: "In Stock" | "Low Stock" | "Out of Stock"
}

const productData: Product[] = [
  { id: "PRD001", name: "Wireless Headphones Pro", category: "Electronics", price: 299.99, stock: 145, rating: 4.8, sales: 1250, salesHistory: generateTrend(12, 100, 20), status: "In Stock" },
  { id: "PRD002", name: "Ergonomic Office Chair", category: "Furniture", price: 549.00, stock: 32, rating: 4.5, sales: 420, salesHistory: generateTrend(12, 35, 10), status: "In Stock" },
  { id: "PRD003", name: "Mechanical Keyboard RGB", category: "Electronics", price: 159.99, stock: 0, rating: 4.9, sales: 2100, salesHistory: generateTrend(12, 180, 25), status: "Out of Stock" },
  { id: "PRD004", name: "4K Monitor 27\"", category: "Electronics", price: 449.99, stock: 8, rating: 4.7, sales: 890, salesHistory: generateTrend(12, 70, 15), status: "Low Stock" },
  { id: "PRD005", name: "Standing Desk Electric", category: "Furniture", price: 699.00, stock: 56, rating: 4.6, sales: 340, salesHistory: generateTrend(12, 28, 8), status: "In Stock" },
  { id: "PRD006", name: "USB-C Hub 10-in-1", category: "Accessories", price: 79.99, stock: 234, rating: 4.4, sales: 3200, salesHistory: generateTrend(12, 260, 35), status: "In Stock" },
]

const productColumns: ColumnDef<Product>[] = [
  { 
    accessorKey: "id", 
    header: ({ column }) => <SortableHeader column={column}>SKU</SortableHeader>,
    size: 100,
  },
  { 
    accessorKey: "name", 
    header: ({ column }) => <SortableHeader column={column}>Product</SortableHeader>,
  },
  { accessorKey: "category", header: "Category" },
  { 
    accessorKey: "price", 
    header: ({ column }) => <SortableHeader column={column}>Price</SortableHeader>,
    cell: ({ row }) => `$${(row.getValue("price") as number).toFixed(2)}`,
  },
  { 
    accessorKey: "stock", 
    header: ({ column }) => <SortableHeader column={column}>Stock</SortableHeader>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Product["status"]
      const variants = { "In Stock": "default", "Low Stock": "secondary", "Out of Stock": "destructive" } as const
      return <Badge variant={variants[status]}>{status}</Badge>
    },
  },
  {
    accessorKey: "salesHistory",
    header: "Sales Trend",
    cell: ({ row }) => (
      <Sparkline
        data={row.getValue("salesHistory") as number[]}
        type="line"
        width={80}
        height={24}
      />
    ),
  },
  { 
    accessorKey: "rating", 
    header: "Rating",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <MaterialSymbol name="star" size={14} weight={400} className="text-amber-500" />
        <span>{row.getValue("rating")}</span>
      </div>
    ),
  },
]

// ============================================================================
// USE CASE 4: ORDERS (E-commerce)
// ============================================================================

interface Order {
  id: string
  customer: string
  email: string
  items: number
  total: number
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled"
  date: string
  paymentMethod: string
}

const orderData: Order[] = [
  { id: "ORD-2024-001", customer: "John Smith", email: "john@example.com", items: 3, total: 459.97, status: "Delivered", date: "2024-12-08", paymentMethod: "Credit Card" },
  { id: "ORD-2024-002", customer: "Sarah Johnson", email: "sarah@example.com", items: 1, total: 299.99, status: "Shipped", date: "2024-12-09", paymentMethod: "PayPal" },
  { id: "ORD-2024-003", customer: "Mike Brown", email: "mike@example.com", items: 5, total: 892.45, status: "Processing", date: "2024-12-10", paymentMethod: "Credit Card" },
  { id: "ORD-2024-004", customer: "Emily Davis", email: "emily@example.com", items: 2, total: 189.98, status: "Pending", date: "2024-12-10", paymentMethod: "Apple Pay" },
  { id: "ORD-2024-005", customer: "Chris Wilson", email: "chris@example.com", items: 1, total: 549.00, status: "Cancelled", date: "2024-12-07", paymentMethod: "Credit Card" },
  { id: "ORD-2024-006", customer: "Amanda Lee", email: "amanda@example.com", items: 4, total: 1247.96, status: "Shipped", date: "2024-12-09", paymentMethod: "PayPal" },
]

const orderColumns: ColumnDef<Order>[] = [
  { 
    accessorKey: "id", 
    header: ({ column }) => <SortableHeader column={column}>Order ID</SortableHeader>,
    size: 140,
  },
  { 
    accessorKey: "customer", 
    header: ({ column }) => <SortableHeader column={column}>Customer</SortableHeader>,
  },
  { accessorKey: "email", header: "Email" },
  { 
    accessorKey: "items", 
    header: "Items",
    cell: ({ row }) => `${row.getValue("items")} items`,
  },
  { 
    accessorKey: "total", 
    header: ({ column }) => <SortableHeader column={column}>Total</SortableHeader>,
    cell: ({ row }) => `$${(row.getValue("total") as number).toFixed(2)}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Order["status"]
      const variants: Record<Order["status"], "default" | "secondary" | "outline" | "destructive"> = { 
        Pending: "secondary", 
        Processing: "secondary", 
        Shipped: "default", 
        Delivered: "default", 
        Cancelled: "destructive" 
      }
      return <Badge variant={variants[status]}>{status}</Badge>
    },
  },
  { 
    accessorKey: "date", 
    header: ({ column }) => <SortableHeader column={column}>Date</SortableHeader>,
  },
  { accessorKey: "paymentMethod", header: "Payment" },
]

// ============================================================================
// USE CASE 5: TRANSACTIONS (Finance)
// ============================================================================

interface Transaction {
  id: string
  description: string
  category: string
  amount: number
  type: "income" | "expense"
  date: string
  account: string
  status: "Completed" | "Pending" | "Failed"
}

const transactionData: Transaction[] = [
  { id: "TXN001", description: "Client Payment - Acme Corp", category: "Revenue", amount: 15000, type: "income", date: "2024-12-10", account: "Business Checking", status: "Completed" },
  { id: "TXN002", description: "AWS Cloud Services", category: "Infrastructure", amount: 2450.80, type: "expense", date: "2024-12-09", account: "Business Checking", status: "Completed" },
  { id: "TXN003", description: "Employee Payroll", category: "Salaries", amount: 45000, type: "expense", date: "2024-12-08", account: "Payroll Account", status: "Completed" },
  { id: "TXN004", description: "Software License - Figma", category: "Software", amount: 540, type: "expense", date: "2024-12-07", account: "Business Credit", status: "Completed" },
  { id: "TXN005", description: "Consulting Fee - Project X", category: "Revenue", amount: 8500, type: "income", date: "2024-12-06", account: "Business Checking", status: "Pending" },
  { id: "TXN006", description: "Office Supplies", category: "Operations", amount: 234.56, type: "expense", date: "2024-12-05", account: "Business Credit", status: "Completed" },
]

const transactionColumns: ColumnDef<Transaction>[] = [
  { 
    accessorKey: "id", 
    header: "ID",
    size: 80,
  },
  { 
    accessorKey: "date", 
    header: ({ column }) => <SortableHeader column={column}>Date</SortableHeader>,
  },
  { 
    accessorKey: "description", 
    header: "Description",
  },
  { accessorKey: "category", header: "Category" },
  { 
    accessorKey: "amount", 
    header: ({ column }) => <SortableHeader column={column}>Amount</SortableHeader>,
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number
      const type = row.original.type
      return (
        <span className={type === "income" ? "text-[var(--semantic-text-success)]" : "text-[var(--semantic-text-danger)]"}>
          {type === "income" ? "+" : "-"}${amount.toLocaleString()}
        </span>
      )
    },
  },
  { accessorKey: "account", header: "Account" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Transaction["status"]
      const variants: Record<Transaction["status"], "default" | "secondary" | "destructive"> = { 
        Completed: "default", 
        Pending: "secondary", 
        Failed: "destructive" 
      }
      return <Badge variant={variants[status]}>{status}</Badge>
    },
  },
]

/**
 * Preview component for TanStack DataTable examples
 */
export function DataTablePreview({ title }: { title: string }): ReactNode {
  const [selectedRows, setSelectedRows] = useState<Employee[]>([])

  switch (title) {
    case "Basic Table":
      return (
        <DataTable<Employee, unknown>
          columns={basicColumns}
          data={sampleData.slice(0, 5)}
        />
      )

    case "With Sorting":
      return (
        <DataTable<Employee, unknown>
          columns={fullColumns}
          data={sampleData.slice(0, 6)}
        />
      )

    case "With Pagination":
      return (
        <DataTable<Employee, unknown>
          columns={fullColumns.slice(0, 5)}
          data={sampleData}
          enablePagination
          pageSize={5}
          pageSizeOptions={[5, 10, 20]}
        />
      )

    case "With Filtering":
      return (
        <DataTable<Employee, unknown>
          columns={fullColumns.slice(0, 5)}
          data={sampleData}
          enableGlobalFilter
        />
      )

    case "Row Selection":
      return (
        <div className="space-y-4">
          <DataTable<Employee, unknown>
            columns={selectionColumns}
            data={sampleData.slice(0, 6)}
            enableRowSelection
            onRowSelectionChange={setSelectedRows}
          />
          {selectedRows.length > 0 && (
            <div className="text-sm text-[var(--semantic-text-subdued)]">
              Selected: {selectedRows.map((r: Employee) => r.name).join(", ")}
            </div>
          )}
        </div>
      )

    case "Column Visibility":
      return (
        <DataTable<Employee, unknown>
          columns={fullColumns}
          data={sampleData.slice(0, 6)}
          enableColumnVisibility
          showToolbar
        />
      )

    case "Column Reordering":
      return (
        <div className="space-y-2">
          <p className="text-sm text-[var(--semantic-text-subdued)]">
            Drag column headers to reorder
          </p>
          <DataTable<Employee, unknown>
            columns={fullColumns.slice(0, 5)}
            data={sampleData.slice(0, 5)}
            enableColumnReordering
          />
        </div>
      )

    case "With Sparklines":
      return (
        <DataTable<ServerMetrics, unknown>
          columns={serverColumns}
          data={serverData}
        />
      )

    case "Full Featured":
      return (
        <DataTable<Employee, unknown>
          columns={[createSelectionColumn<Employee>(), ...fullColumns]}
          data={sampleData}
          enableRowSelection
          enableGlobalFilter
          enablePagination
          enableColumnVisibility
          enableColumnReordering
          pageSize={5}
          pageSizeOptions={[5, 10, 20]}
        />
      )

    default:
      return (
        <DataTable<Employee, unknown>
          columns={basicColumns}
          data={sampleData.slice(0, 5)}
        />
      )
  }
}

/**
 * Interactive preview for the playground
 */
export function DataTableInteractivePreview(
  props: Record<string, string>
): ReactNode {
  const { pagination, rowSelection, filtering, sorting, columnVisibility, columnReordering, columnPinning, variant, density } = props

  const hasSorting = sorting === "true"
  const hasSelection = rowSelection === "true"
  const hasFiltering = filtering === "true"
  const hasPagination = pagination === "true"
  const hasColumnVisibility = columnVisibility === "true"
  const hasColumnReordering = columnReordering === "true"
  const hasColumnPinning = columnPinning === "true"
  const tableVariant = (variant as "bordered" | "plain") || "bordered"
  const tableDensity = (density as "default" | "comfortable") || "default"

  // Selection column always at the beginning - use all columns
  const baseCols = hasSorting ? fullColumns : basicColumns
  const cols: ColumnDef<Employee>[] = hasSelection 
    ? [createSelectionColumn<Employee>(), ...baseCols]
    : baseCols

  // Pin select and first column by default when pinning is enabled
  const pinnedCols = hasSelection ? ["select", "id", "name"] : ["id", "name"]

  return (
    <DataTable<Employee, unknown>
      columns={cols}
      data={sampleData}
      enableRowSelection={hasSelection}
      enableGlobalFilter={hasFiltering}
      enablePagination={hasPagination}
      enableColumnVisibility={hasColumnVisibility}
      enableColumnReordering={hasColumnReordering}
      enableColumnPinning={hasColumnPinning}
      pinnedColumns={hasColumnPinning ? pinnedCols : []}
      variant={tableVariant}
      density={tableDensity}
      pageSize={5}
      pageSizeOptions={[5, 10, 20]}
    />
  )
}
