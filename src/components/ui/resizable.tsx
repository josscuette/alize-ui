"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "../../lib/utils"

/**
 * ResizablePanelGroup component props interface
 * Extends react-resizable-panels PanelGroup props
 */
export interface ResizablePanelGroupProps extends React.ComponentProps<typeof ResizablePrimitive.PanelGroup> {}

/**
 * ResizablePanel component props interface
 * Extends react-resizable-panels Panel props
 */
export interface ResizablePanelProps extends React.ComponentProps<typeof ResizablePrimitive.Panel> {}

/**
 * ResizableHandle component props interface
 * Extends react-resizable-panels PanelResizeHandle props and adds withHandle prop
 */
export interface ResizableHandleProps extends React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> {
  withHandle?: boolean
}

/**
 * ResizablePanelGroup component - A group of resizable panels
 * 
 * Provides a container for resizable panels that can be resized by dragging.
 * Built on react-resizable-panels.
 * 
 * @param props - ResizablePanelGroup props including direction and standard PanelGroup attributes
 * @returns A ResizablePanelGroup component
 * 
 * @example
 * ```tsx
 * <ResizablePanelGroup direction="horizontal">
 *   <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
 *   <ResizableHandle />
 *   <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
 * </ResizablePanelGroup>
 * ```
 */
function ResizablePanelGroup({
  className,
  ...props
}: ResizablePanelGroupProps): React.ReactElement {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

/**
 * ResizablePanel component - An individual resizable panel
 * @param props - ResizablePanel props including defaultSize, minSize, maxSize
 * @returns A ResizablePanel component
 */
function ResizablePanel({
  ...props
}: ResizablePanelProps): React.ReactElement {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

/**
 * ResizableHandle component - A handle for resizing panels
 * @param props - ResizableHandle props including withHandle
 * @returns A ResizableHandle component
 */
function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizableHandleProps): React.ReactElement {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
