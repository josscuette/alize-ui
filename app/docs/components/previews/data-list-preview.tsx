"use client"

import { ReactNode, useState } from "react"
import {
  DataList,
  DataListGroup,
  DataListItem,
  DataListEmpty,
  DataListSkeleton,
  DataListAction,
} from "@/components/ui/data-list"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MaterialSymbol } from "@/components/material-symbol"
import { cn } from "@/lib/utils"

// ============================================================================
// FILES USE CASE - File Manager
// ============================================================================

interface FileItem {
  id: string
  name: string
  type: "folder" | "document" | "image" | "video" | "spreadsheet" | "presentation"
  size?: string
  modified: string
  shared?: boolean
}

const files: FileItem[] = [
  { id: "1", name: "Q4 Financial Report", type: "spreadsheet", size: "2.4 MB", modified: "2 hours ago", shared: true },
  { id: "2", name: "Brand Guidelines 2024", type: "document", size: "8.1 MB", modified: "Yesterday" },
  { id: "3", name: "Product Screenshots", type: "folder", modified: "3 days ago", shared: true },
  { id: "4", name: "Team Offsite Video", type: "video", size: "156 MB", modified: "Last week" },
  { id: "5", name: "Marketing Deck", type: "presentation", size: "12.3 MB", modified: "2 weeks ago" },
]

const fileIcons: Record<FileItem["type"], { icon: string; color: string }> = {
  folder: { icon: "folder", color: "text-amber-500" },
  document: { icon: "description", color: "text-blue-500" },
  image: { icon: "image", color: "text-green-500" },
  video: { icon: "movie", color: "text-purple-500" },
  spreadsheet: { icon: "table_chart", color: "text-emerald-500" },
  presentation: { icon: "slideshow", color: "text-orange-500" },
}

function FileIcon({ type }: { type: FileItem["type"] }) {
  const { icon, color } = fileIcons[type]
  return (
    <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--muted)]", color)}>
      <MaterialSymbol name={icon} size={24} weight={300} />
    </div>
  )
}

export function DataListFilesPreview(): ReactNode {
  return (
    <DataList bordered>
      {files.map((file) => (
        <DataListItem
          key={file.id}
          id={file.id}
          title={file.name}
          subtitle={file.size ? `${file.size} • ${file.modified}` : file.modified}
          thumbnail={<FileIcon type={file.type} />}
          metadata={
            file.shared && (
              <MaterialSymbol 
                name="group" 
                size={16} 
                weight={300} 
                className="text-[var(--semantic-icon-subdued)]" 
              />
            )
          }
          actions={[
            { label: "Download", icon: "download", onClick: () => {} },
            { label: "Share", icon: "share", onClick: () => {} },
            { label: "Rename", icon: "edit", onClick: () => {} },
            { label: "Delete", icon: "delete", onClick: () => {}, destructive: true },
          ]}
        />
      ))}
    </DataList>
  )
}

// ============================================================================
// NOTIFICATIONS USE CASE - Notification Center
// ============================================================================

interface Notification {
  id: string
  title: string
  message: string
  avatar: string
  time: string
  read: boolean
  type: "mention" | "comment" | "invite" | "alert"
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Sarah mentioned you",
    message: "Hey, can you review the latest designs?",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    time: "2m ago",
    read: false,
    type: "mention",
  },
  {
    id: "2",
    title: "New comment on Project X",
    message: "Michael: Looks great! Just one small change...",
    avatar: "https://i.pravatar.cc/150?u=michael",
    time: "1h ago",
    read: false,
    type: "comment",
  },
  {
    id: "3",
    title: "Team invite",
    message: "You've been invited to join Design Team",
    avatar: "https://i.pravatar.cc/150?u=team",
    time: "3h ago",
    read: true,
    type: "invite",
  },
  {
    id: "4",
    title: "Security alert",
    message: "New login from San Francisco, CA",
    avatar: "",
    time: "Yesterday",
    read: true,
    type: "alert",
  },
]

function NotificationAvatar({ notification }: { notification: Notification }) {
  if (notification.type === "alert") {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--semantic-surface-danger-subtle)]">
        <MaterialSymbol name="shield" size={20} weight={300} className="text-[var(--semantic-text-danger)]" />
      </div>
    )
  }
  return (
    <img src={notification.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
  )
}

export function DataListNotificationsPreview(): ReactNode {
  return (
    <DataList>
      {notifications.map((notif) => (
        <DataListItem
          key={notif.id}
          id={notif.id}
          title={notif.title}
          subtitle={notif.message}
          thumbnail={<NotificationAvatar notification={notif} />}
          className={cn(!notif.read && "bg-[var(--semantic-surface-info-subtle)]")}
          metadata={
            <div className="flex items-center gap-2">
              <span className="text-xs">{notif.time}</span>
              {!notif.read && (
                <div className="h-2 w-2 rounded-full bg-[var(--semantic-surface-info-default)]" />
              )}
            </div>
          }
          actions={[
            { label: "Mark as read", icon: "check", onClick: () => {} },
            { label: "Mute", icon: "notifications_off", onClick: () => {} },
            { label: "Delete", icon: "delete", onClick: () => {}, destructive: true },
          ]}
        />
      ))}
    </DataList>
  )
}

// ============================================================================
// PRODUCTS USE CASE - E-commerce
// ============================================================================

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  rating: number
  image: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 349.99,
    stock: 24,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 599.00,
    stock: 8,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Mechanical Keyboard RGB",
    category: "Electronics",
    price: 159.99,
    stock: 0,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    name: "Minimalist Desk Lamp",
    category: "Lighting",
    price: 89.00,
    stock: 42,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=100&h=100&fit=crop",
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
}

function StockBadge({ stock }: { stock: number }) {
  if (stock === 0) return <Badge variant="destructive">Out of stock</Badge>
  if (stock < 10) return <Badge variant="secondary">{stock} left</Badge>
  return <Badge variant="outline">In stock</Badge>
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <MaterialSymbol name="star" size={14} weight={400} className="text-amber-500" />
      <span className="text-xs font-medium">{rating}</span>
    </div>
  )
}

export function DataListProductsPreview(): ReactNode {
  return (
    <DataList bordered density="comfortable">
      {products.map((product) => (
        <DataListItem
          key={product.id}
          id={product.id}
          title={product.name}
          thumbnail={product.image}
          actions={[
            { label: "Edit", icon: "edit", onClick: () => {} },
            { label: "Duplicate", icon: "content_copy", onClick: () => {} },
            { label: "Archive", icon: "archive", onClick: () => {}, destructive: true },
          ]}
        >
          <div className="space-y-1">
            <div className="font-medium">{product.name}</div>
            <div className="flex items-center gap-3 text-sm">
              <span className="font-semibold text-[var(--foreground)]">{formatPrice(product.price)}</span>
              <span className="text-[var(--semantic-text-subdued)]">{product.category}</span>
              <RatingStars rating={product.rating} />
            </div>
            <div className="pt-1">
              <StockBadge stock={product.stock} />
            </div>
          </div>
        </DataListItem>
      ))}
    </DataList>
  )
}

// ============================================================================
// TASKS USE CASE - Todo List
// ============================================================================

interface Task {
  id: string
  title: string
  project: string
  priority: "low" | "medium" | "high" | "urgent"
  dueDate: string
  assignee: { name: string; avatar: string }
  completed: boolean
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Review Q4 marketing strategy",
    project: "Marketing",
    priority: "high",
    dueDate: "Today",
    assignee: { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah" },
    completed: false,
  },
  {
    id: "2",
    title: "Update API documentation",
    project: "Engineering",
    priority: "medium",
    dueDate: "Tomorrow",
    assignee: { name: "Michael", avatar: "https://i.pravatar.cc/150?u=michael" },
    completed: false,
  },
  {
    id: "3",
    title: "Design new onboarding flow",
    project: "Design",
    priority: "urgent",
    dueDate: "Overdue",
    assignee: { name: "Emily", avatar: "https://i.pravatar.cc/150?u=emily" },
    completed: false,
  },
  {
    id: "4",
    title: "Fix login page bug",
    project: "Engineering",
    priority: "low",
    dueDate: "Next week",
    assignee: { name: "James", avatar: "https://i.pravatar.cc/150?u=james" },
    completed: true,
  },
]

const priorityConfig = {
  low: { color: "bg-slate-500", label: "Low" },
  medium: { color: "bg-blue-500", label: "Medium" },
  high: { color: "bg-amber-500", label: "High" },
  urgent: { color: "bg-red-500", label: "Urgent" },
}

function PriorityIndicator({ priority }: { priority: Task["priority"] }) {
  const { color } = priorityConfig[priority]
  return <div className={cn("h-full w-1 rounded-full", color)} />
}

export function DataListTasksPreview(): ReactNode {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(
    new Set(tasks.filter(t => t.completed).map(t => t.id))
  )

  const toggleTask = (id: string, completed: boolean) => {
    setCompletedTasks(prev => {
      const next = new Set(prev)
      completed ? next.add(id) : next.delete(id)
      return next
    })
  }

  return (
    <DataList bordered>
      {tasks.map((task) => {
        const isCompleted = completedTasks.has(task.id)
        return (
          <DataListItem
            key={task.id}
            id={task.id}
            title={task.title}
            selectable
            selected={isCompleted}
            onSelectChange={(checked) => toggleTask(task.id, checked)}
            thumbnail={<PriorityIndicator priority={task.priority} />}
            actions={[
              { label: "Edit", icon: "edit", onClick: () => {} },
              { label: "Set due date", icon: "event", onClick: () => {} },
              { label: "Delete", icon: "delete", onClick: () => {}, destructive: true },
            ]}
          >
            <div className={cn("space-y-1", isCompleted && "opacity-50")}>
              <div className={cn("font-medium", isCompleted && "line-through")}>
                {task.title}
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--semantic-text-subdued)]">
                <span>{task.project}</span>
                <span className={cn(
                  task.dueDate === "Overdue" && "text-[var(--semantic-text-danger)] font-medium"
                )}>
                  {task.dueDate}
                </span>
                <div className="flex items-center gap-1">
                  <img src={task.assignee.avatar} alt="" className="h-4 w-4 rounded-full" />
                  <span>{task.assignee.name}</span>
                </div>
              </div>
            </div>
          </DataListItem>
        )
      })}
    </DataList>
  )
}

// ============================================================================
// MESSAGES USE CASE - Inbox
// ============================================================================

interface Message {
  id: string
  from: string
  subject: string
  preview: string
  avatar: string
  time: string
  unread: boolean
  starred: boolean
  hasAttachment: boolean
}

const messages: Message[] = [
  {
    id: "1",
    from: "Design Team",
    subject: "New brand assets ready for review",
    preview: "Hi team, the new brand assets are ready. Please review and provide feedback by EOD...",
    avatar: "https://i.pravatar.cc/150?u=design",
    time: "10:42 AM",
    unread: true,
    starred: true,
    hasAttachment: true,
  },
  {
    id: "2",
    from: "Alex Thompson",
    subject: "Re: Project timeline update",
    preview: "Thanks for the update! I think we can push the deadline by a week if needed...",
    avatar: "https://i.pravatar.cc/150?u=alex",
    time: "9:15 AM",
    unread: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "3",
    from: "HR Department",
    subject: "Holiday schedule 2025",
    preview: "Please find attached the company holiday schedule for the upcoming year...",
    avatar: "https://i.pravatar.cc/150?u=hr",
    time: "Yesterday",
    unread: false,
    starred: false,
    hasAttachment: true,
  },
  {
    id: "4",
    from: "Newsletter",
    subject: "Your weekly digest",
    preview: "Here's what happened this week: 5 new features shipped, 12 bugs fixed...",
    avatar: "https://i.pravatar.cc/150?u=news",
    time: "2 days ago",
    unread: false,
    starred: false,
    hasAttachment: false,
  },
]

export function DataListMessagesPreview(): ReactNode {
  return (
    <DataList>
      {messages.map((msg) => (
        <DataListItem
          key={msg.id}
          id={msg.id}
          title={msg.from}
          thumbnail={msg.avatar}
          className={cn(msg.unread && "bg-[var(--semantic-surface-info-subtle)]")}
          actions={[
            { label: msg.starred ? "Unstar" : "Star", icon: msg.starred ? "star" : "star_outline", onClick: () => {} },
            { label: "Archive", icon: "archive", onClick: () => {} },
            { label: "Mark as spam", icon: "report", onClick: () => {} },
            { label: "Delete", icon: "delete", onClick: () => {}, destructive: true },
          ]}
        >
          <div className="space-y-0.5 min-w-0">
            <div className="flex items-center gap-2">
              <span className={cn("font-medium truncate", msg.unread && "font-semibold")}>
                {msg.from}
              </span>
              {msg.starred && (
                <MaterialSymbol name="star" size={14} weight={400} className="text-amber-500 shrink-0" />
              )}
              {msg.hasAttachment && (
                <MaterialSymbol name="attach_file" size={14} weight={300} className="text-[var(--semantic-icon-subdued)] shrink-0" />
              )}
              <span className="text-xs text-[var(--semantic-text-subdued)] ml-auto shrink-0">{msg.time}</span>
            </div>
            <div className={cn("text-sm truncate", msg.unread ? "text-[var(--foreground)]" : "text-[var(--semantic-text-subdued)]")}>
              {msg.subject}
            </div>
            <div className="text-xs text-[var(--semantic-text-subdued)] truncate">
              {msg.preview}
            </div>
          </div>
        </DataListItem>
      ))}
    </DataList>
  )
}

// ============================================================================
// MEDIA USE CASE - Media Gallery
// ============================================================================

interface MediaItem {
  id: string
  name: string
  type: "image" | "video"
  thumbnail: string
  duration?: string
  resolution: string
  size: string
  date: string
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    name: "Product Launch Keynote",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=120&fit=crop",
    duration: "45:32",
    resolution: "4K",
    size: "2.4 GB",
    date: "Dec 5, 2024",
  },
  {
    id: "2",
    name: "Office Tour 2024",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=120&fit=crop",
    duration: "12:08",
    resolution: "1080p",
    size: "890 MB",
    date: "Nov 28, 2024",
  },
  {
    id: "3",
    name: "Team Photo - All Hands",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=120&fit=crop",
    resolution: "6000x4000",
    size: "8.2 MB",
    date: "Nov 15, 2024",
  },
  {
    id: "4",
    name: "Conference Booth Setup",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=200&h=120&fit=crop",
    resolution: "4500x3000",
    size: "5.1 MB",
    date: "Oct 22, 2024",
  },
]

function MediaThumbnail({ item }: { item: MediaItem }) {
  return (
    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-[var(--muted)]">
      <img src={item.thumbnail} alt="" className="h-full w-full object-cover" />
      {item.type === "video" && (
        <>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/30">
            <MaterialSymbol name="play_circle" size={28} weight={400} className="text-white" />
          </div>
          <div className="absolute bottom-1 right-1 rounded bg-black/70 px-1 text-[10px] text-white">
            {item.duration}
          </div>
        </>
      )}
    </div>
  )
}

export function DataListMediaPreview(): ReactNode {
  return (
    <DataList bordered density="comfortable">
      {mediaItems.map((item) => (
        <DataListItem
          key={item.id}
          id={item.id}
          title={item.name}
          thumbnail={<MediaThumbnail item={item} />}
          actions={[
            { label: "Download", icon: "download", onClick: () => {} },
            { label: "Share", icon: "share", onClick: () => {} },
            { label: "Edit", icon: "edit", onClick: () => {} },
            { label: "Delete", icon: "delete", onClick: () => {}, destructive: true },
          ]}
        >
          <div className="space-y-1">
            <div className="font-medium">{item.name}</div>
            <div className="flex items-center gap-3 text-xs text-[var(--semantic-text-subdued)]">
              <span className="flex items-center gap-1">
                <MaterialSymbol name={item.type === "video" ? "movie" : "image"} size={12} weight={300} />
                {item.resolution}
              </span>
              <span>{item.size}</span>
              <span>{item.date}</span>
            </div>
          </div>
        </DataListItem>
      ))}
    </DataList>
  )
}

// ============================================================================
// PROPERTIES USE CASE - Real Estate (Original)
// ============================================================================

interface Property {
  id: string
  name: string
  landlord: string
  image: string
  status: "active" | "pending" | "inactive"
  units: number
  address: string
}

const properties: Property[] = [
  {
    id: "1",
    name: "Emerald Heights Tower",
    landlord: "Vertex Solutions Inc.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop",
    status: "active",
    units: 24,
    address: "123 Business Park, Suite 100",
  },
  {
    id: "2",
    name: "Sapphire Summit Plaza",
    landlord: "Apple",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=200&fit=crop",
    status: "active",
    units: 18,
    address: "456 Innovation Drive",
  },
  {
    id: "3",
    name: "Crystal Bay Office Complex",
    landlord: "TechCorp Industries",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=200&h=200&fit=crop",
    status: "pending",
    units: 32,
    address: "789 Waterfront Blvd",
  },
]

function getStatusBadge(status: Property["status"]) {
  const variants = {
    active: "default" as const,
    pending: "secondary" as const,
    inactive: "outline" as const,
  }
  return <Badge variant={variants[status]}>{status}</Badge>
}

// ============================================================================
// DEFAULT PREVIEW - Shows Files (most universal)
// ============================================================================

export function DataListDefaultPreview(props: { title: string }): ReactNode {
  // Map example titles to specific previews
  const title = props.title?.toLowerCase() || ""
  
  if (title.includes("file")) return <DataListFilesPreview />
  if (title.includes("notification")) return <DataListNotificationsPreview />
  if (title.includes("product") || title.includes("catalog")) return <DataListProductsPreview />
  if (title.includes("task")) return <DataListTasksPreview />
  if (title.includes("email") || title.includes("inbox") || title.includes("message")) return <DataListMessagesPreview />
  if (title.includes("media") || title.includes("gallery")) return <DataListMediaPreview />
  if (title.includes("group")) return <DataListGroupedPreview />
  if (title.includes("expand")) return <DataListExpandablePreview />
  if (title.includes("select") || title.includes("task")) return <DataListSelectablePreview />
  if (title.includes("empty")) return <DataListEmptyPreview />
  if (title.includes("loading") || title.includes("skeleton")) return <DataListLoadingPreview />
  
  // Default: Files
  return <DataListFilesPreview />
}

// ============================================================================
// GROUPED PREVIEW - Properties with status groups
// ============================================================================

export function DataListGroupedPreview(): ReactNode {
  return (
    <DataList bordered>
      <DataListGroup title="Active Properties" icon="check_circle" collapsible>
        {properties.filter(p => p.status === "active").map((property) => (
          <DataListItem
            key={property.id}
            id={property.id}
            title={property.name}
            subtitle={property.landlord}
            thumbnail={property.image}
            metadata={getStatusBadge(property.status)}
            actions={[
              { label: "View", icon: "visibility", onClick: () => {} },
              { label: "Edit", icon: "edit", onClick: () => {} },
            ]}
          />
        ))}
      </DataListGroup>
      <DataListGroup title="Pending Review" icon="pending" collapsible>
        {properties.filter(p => p.status === "pending").map((property) => (
          <DataListItem
            key={property.id}
            id={property.id}
            title={property.name}
            subtitle={property.landlord}
            thumbnail={property.image}
            metadata={getStatusBadge(property.status)}
            actions={[
              { label: "Approve", icon: "check", onClick: () => {} },
              { label: "Reject", icon: "close", onClick: () => {} },
            ]}
          />
        ))}
      </DataListGroup>
    </DataList>
  )
}

// ============================================================================
// EXPANDABLE PREVIEW - Products with details
// ============================================================================

export function DataListExpandablePreview(): ReactNode {
  return (
    <DataList bordered density="comfortable">
      {products.slice(0, 3).map((product) => (
        <DataListItem
          key={product.id}
          id={product.id}
          title={product.name}
          subtitle={`${formatPrice(product.price)} • ${product.category}`}
          thumbnail={product.image}
          expandable
          expandedContent={
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-[var(--semantic-text-subdued)]">Stock</div>
                  <div className="font-medium">{product.stock} units</div>
                </div>
                <div>
                  <div className="text-[var(--semantic-text-subdued)]">Rating</div>
                  <div className="flex items-center gap-1">
                    <MaterialSymbol name="star" size={14} weight={400} className="text-amber-500" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Edit Product</Button>
                <Button size="sm" variant="outline">View Analytics</Button>
              </div>
            </div>
          }
          actions={[
            { label: "Quick edit", icon: "edit", onClick: () => {} },
            { label: "Duplicate", icon: "content_copy", onClick: () => {} },
          ]}
        />
      ))}
    </DataList>
  )
}

// ============================================================================
// SELECTABLE PREVIEW - Tasks
// ============================================================================

export function DataListSelectablePreview(): ReactNode {
  return <DataListTasksPreview />
}

// ============================================================================
// DENSITY PREVIEW - Compare all three densities
// ============================================================================

export function DataListDensityPreview(): ReactNode {
  const sampleItems = files.slice(0, 2)
  
  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-medium mb-2 px-1">Compact</div>
        <DataList bordered density="compact">
          {sampleItems.map((file) => (
            <DataListItem
              key={file.id}
              id={file.id}
              title={file.name}
              subtitle={file.modified}
              thumbnail={<FileIcon type={file.type} />}
            />
          ))}
        </DataList>
      </div>
      <div>
        <div className="text-sm font-medium mb-2 px-1">Default</div>
        <DataList bordered density="default">
          {sampleItems.map((file) => (
            <DataListItem
              key={file.id}
              id={file.id}
              title={file.name}
              subtitle={file.modified}
              thumbnail={<FileIcon type={file.type} />}
            />
          ))}
        </DataList>
      </div>
      <div>
        <div className="text-sm font-medium mb-2 px-1">Comfortable</div>
        <DataList bordered density="comfortable">
          {sampleItems.map((file) => (
            <DataListItem
              key={file.id}
              id={file.id}
              title={file.name}
              subtitle={file.modified}
              thumbnail={<FileIcon type={file.type} />}
            />
          ))}
        </DataList>
      </div>
    </div>
  )
}

// ============================================================================
// EMPTY STATE PREVIEW
// ============================================================================

export function DataListEmptyPreview(): ReactNode {
  return (
    <DataList bordered>
      <DataListEmpty
        icon="folder_open"
        title="No files here yet"
        description="Upload your first file or create a new folder to get started."
        action={
          <div className="inline-flex items-center gap-2">
            <Button className="gap-2">
              <MaterialSymbol name="upload" size={16} weight={300} />
              Upload File
            </Button>
            <Button variant="outline" className="gap-2">
              <MaterialSymbol name="create_new_folder" size={16} weight={300} />
              New Folder
            </Button>
          </div>
        }
      />
    </DataList>
  )
}

// ============================================================================
// LOADING STATE PREVIEW
// ============================================================================

export function DataListLoadingPreview(): ReactNode {
  return (
    <DataList bordered>
      <DataListSkeleton count={4} showThumbnail />
    </DataList>
  )
}

// ============================================================================
// CUSTOM CONTENT PREVIEW - Messages
// ============================================================================

export function DataListCustomPreview(): ReactNode {
  return <DataListMessagesPreview />
}

// ============================================================================
// PLAIN (NO BORDER) PREVIEW - Notifications
// ============================================================================

export function DataListPlainPreview(): ReactNode {
  return <DataListNotificationsPreview />
}

// ============================================================================
// INTERACTIVE PREVIEW FOR PLAYGROUND
// ============================================================================

export function DataListInteractivePreview(
  props: Record<string, string>
): ReactNode {
  const { useCase } = props
  const selectedUseCase = useCase || "files"

  // Choose preview based on use case
  switch (selectedUseCase) {
    case "notifications":
      return <DataListNotificationsPreview />
    case "products":
      return <DataListProductsPreview />
    case "tasks":
      return <DataListTasksPreview />
    case "messages":
      return <DataListMessagesPreview />
    case "media":
      return <DataListMediaPreview />
    case "files":
    default:
      return <DataListFilesPreview />
  }
}
