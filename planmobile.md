# Mobile Responsiveness Enhancements for Ubiquiti Security Visualizer

This document outlines changes to improve the mobile responsiveness of the project. The goal is to ensure a seamless and user-friendly experience on smaller screens.

## General Principles & Checks:

1.  **Viewport Meta Tag**: Ensure `app/layout.tsx` has the standard viewport meta tag for responsiveness (Next.js usually includes this by default in the `<head>`):
    `<meta name="viewport" content="width=device-width, initial-scale=1" />`
2.  **Test Across Devices**: Use browser developer tools to simulate various mobile screen sizes (e.g., iPhone SE, iPhone 12, common Android sizes) and test in both portrait and landscape orientations.
3.  **Touch Targets**: Ensure all buttons, links, and interactive elements have adequate tap target sizes.
4.  **Readability**: Verify font sizes are legible and text doesn't get too cramped.
5.  **Avoid Horizontal Overflow**: Eliminate unintended horizontal scrolling.

## File-Specific Changes:

### 1. `app/globals.css`

*   **Review Camera Dot/Coverage Sizes:**
    *   The `camera-dot` (`width: 12px; height: 12px;`) might be okay, but if floor plans scale down significantly on mobile, these dots might appear relatively large or small.
    *   The `coverage-area` size is dynamic. Ensure its visual representation is appropriate on mobile within `SecurityVisualizer.tsx`.
    *   **Recommendation:** For now, these are likely fine, but keep an eye on them during testing. If they look off, consider using `rem` or responsive Tailwind classes for their sizes.

### 2. `components/pages/HouseDetail.tsx`

This page is content-rich and a primary candidate for mobile tweaks.

*   **Floor Plan Visualizers (`CasaArmandoBad/Good`, `CasaMedioBad/Good`, `CasaNidoBad/Good`):**
    *   The current `className="w-[60%] mx-auto"` for these components inside cards might make them too small on mobile or leave too little space around them.
    *   **Action:** Modify the class to be responsive.
        ```diff
        - <CasaArmandoBad className="w-[60%] mx-auto" />
        + <CasaArmandoBad className="w-full sm:w-3/4 md:w-[60%] mx-auto" />
        ```
        (Apply this pattern to `CasaArmandoGood`, `CasaMedioBad/Good`, `CasaNidoBad/Good` where they are used with similar sizing).

*   **`SecurityVisualizer` Component Usage:**
    *   The `SecurityVisualizer` component itself (defined in `SecurityVisualizer.tsx`) has a fixed height of `h-[600px]`. This will be too tall for most mobile viewports.
    *   **Action:** Modify `SecurityVisualizer.tsx` (see section for that file).

*   **`CameraTable.tsx` Usage:**
    *   When `CameraTable` is used in a two-column layout (e.g., next to a visualizer), it will stack on mobile. The table itself needs to be responsive.
    *   **Action:** Modify `CameraTable.tsx` (see section for that file).

*   **Comparison Sections (`chapter === 3` and `chapter === 4`):**
    *   The `md:grid-cols-2` layout for comparisons will stack on mobile. This is good.
    *   Ensure the content within each card (e.g., coverage stats, improvement lists in `chapter === 4`) is readable and well-spaced.
    *   For `SecurityMapComparison*.tsx` components, ensure the interactive slider is easily usable on touch.

*   **Installation Steps (`chapter === 6`):**
    *   `SecurityCameraInstallationSteps` uses `FeatureSteps`, which handles stacking.
    *   The "Notas" and "Cronograma de Instalación" cards use `md:grid-cols-2` which will stack.
    *   **Action for Cronograma:** In the timeline section, the text and badges might get cramped.
        ```diff
        // In components/pages/HouseDetail.tsx, within case 6 for "Cronograma de Instalación":
        // For each timeline item like:
        - <div className="flex justify-between items-center">
        + <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <div>
              <h4 className="font-medium">Cableado e instalacion en el rack</h4>
              <p className="text-sm text-muted-foreground">Se cableará lo que haga falta y se instalarán los equipos en el rack.</p>
            </div>
        -   <Badge variant="outline" className="text-sm font-medium">Día 1</Badge>
        +   <Badge variant="outline" className="text-sm font-medium mt-1 sm:mt-0 self-start sm:self-center">Día 1</Badge>
          </div>
        ```
        (Apply similar adjustments to other timeline items if they appear cramped).

### 3. `components/pages/Index.tsx`

*   **`SpotlightNewDemo` & `HouseCard` Grid:** The existing responsive classes (`md:grid-cols-2 lg:grid-cols-3` for houses) should ensure good stacking on mobile.
*   **Footer:** `flex-col md:flex-row` is appropriate.
*   **`HouseCard.tsx` image:** The `grayscale` effect on hover is desktop-centric. On mobile, hover isn't a primary interaction.
    *   **Action (Optional Refinement):** In `components/HouseCard.tsx`, you might want the image to always be in color on mobile or adjust the interaction. For now, it's not critical for responsiveness.
        ```diff
        // In components/HouseCard.tsx
        - isHovered ? "filter-none" : "grayscale"
        + isHovered || typeof window !== 'undefined' && window.innerWidth < 768 ? "filter-none" : "grayscale" // Example: always color on mobile
        ```
        (This requires checking `window.innerWidth`, which might need a `useEffect` and state to avoid SSR issues, or simply `filter-none sm:grayscale group-hover/card:filter-none` if using a parent group class). A simpler approach is to just ensure it looks good without hover too.

### 4. `components/pages/Inversion.tsx`

*   **`ExpandableEquipmentCard.tsx`:** This component contains a table and a modal, both needing attention.
    *   **Action:** Modify `ExpandableEquipmentCard.tsx` (see section for that file).
*   **Total Investment Card:** The text layout should be fine.

### 5. `components/ui/expandable-equipment-card.tsx`

This component is crucial for mobile usability due to its table and modal.

*   **Modal Responsiveness:**
    *   The modal uses `max-w-2xl` and `max-h-[85vh]`. This is a good base.
    *   The `Image` inside the modal uses `width={300} height={200}`. While `object-contain` helps, ensure the image itself scales down gracefully if the modal content area becomes very narrow.
    *   **Action:** Inside the modal's image container, adjust the `max-h` property for smaller screens if needed.
        ```diff
        // Inside the modal in ExpandableEquipmentCard.tsx
        - <div className="relative w-full h-full max-h-40 md:max-h-48">
        + <div className="relative w-full h-full max-h-32 sm:max-h-40 md:max-h-48">
        ```

*   **Table Responsiveness:**
    *   The primary issue will be the table layout on small screens.
    *   **Action:** Wrap the `<table>` element with a `div` that allows horizontal scrolling.
        ```diff
        // At the start of the table:
        + <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* ... thead, tbody ... */}
            </table>
        + </div>
        ```
    *   **Consideration for better UX (more involved):** For very small screens, transform table rows into a card-like display. This typically involves CSS changes to make `<td>` elements `display: block;` and use `::before` pseudo-elements for labels. For now, horizontal scrolling is the quickest win.

*   **Filter Buttons:**
    *   `flex-wrap` is used, which is good. Ensure the buttons don't become too small to tap or too crowded on narrow screens. If they do, consider a dropdown for filters on mobile or slightly smaller padding/font for the buttons on mobile.
        ```diff
        // For each filter button:
        - className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors ${...}`}
        + className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-1.5 transition-colors ${...}`}
        // And adjust icon size too:
        - <Home className="h-4 w-4" />
        + <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        ```

### 6. `components/SecurityVisualizer.tsx`

This component displays floor plans and camera dots.

*   **Card Height:** The `Card` has `h-[600px]`. This is too tall for mobile.
    *   **Action:** Make the height responsive.
        ```diff
        - <Card className="relative overflow-hidden w-full h-[600px] flex justify-center items-center">
        + <Card className="relative overflow-hidden w-full h-auto aspect-[4/3] sm:aspect-video md:h-[500px] lg:h-[600px] flex justify-center items-center">
        ```
        (Adjust `aspect-[4/3]` or `md:h-[500px]` etc. based on visual testing). A common approach is `h-auto aspect-video`.

*   **Floor Plan Image Container:** The inner `div` has `w-3/4` and `maxHeight: "75%"`.
    *   **Action:** On mobile, `w-3/4` might make the floor plan too small to be useful.
        ```diff
        - <div className="relative w-3/4 h-auto" style={{ maxHeight: "75%" }}>
        + <div className="relative w-full sm:w-3/4 h-auto" style={{ maxHeight: "90%" }}> {/* Increased maxHeight slightly for better use of space */}
        ```

*   **Coverage Area Sizing:** The `camera.coverage * 2}px` might result in very small or very large circles depending on the base `camera.coverage` value relative to the scaled floor plan.
    *   **Action:** If visual issues arise, consider scaling `camera.coverage` based on viewport width or using relative units if possible (though `px` is common for this absolute positioning). This is a more complex adjustment and might not be needed if the visualizer scales reasonably.

### 7. `components/CameraTable.tsx`

*   **Action:** As with other tables, enable horizontal scrolling for mobile.
    ```diff
    // In CameraTable.tsx, wrap the Table component
    - <Table>
    + <div className="overflow-x-auto">
    +   <Table>
          {/* ... TableHeader, TableBody ... */}
    +   </Table>
    + </div>
    ```
    *   Optionally, reduce padding in `TableCell` and `TableHead` for mobile if columns are still too wide.
        ```diff
        // In components/ui/table.tsx (if you want to change the base component, or apply locally)
        // For TableCell:
        - className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
        + className={cn("p-2 md:p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
        // For TableHead:
        - className={cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)}
        + className={cn("h-10 px-2 md:h-12 md:px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)}
        ```

### 8. `components/SecurityMapComparison*.tsx` (Armando, Medio, Nido)

*   These components use `DotPlacementComponent` which should scale. The main concern is the slider usability.
*   The `GripVertical` button for the slider has fixed `w-6 h-12`. This should be fine for touch.
*   Ensure the labels "Cobertura Actual" and "Cobertura Propuesta" do not overlap or become unreadable on small screens. Their current absolute positioning with `bg-black/60` should provide contrast.

### 9. `components/SecurityNavbar.tsx` and `components/ui/resizable-navbar.tsx`

These components already have significant mobile logic (`MobileNav`, `MobileNavMenu`, `MobileNavToggle`).

*   **`NavBody` `minWidth: "800px"`:** This is for desktop and is hidden on `lg` and below, so it's fine.
*   **`MobileNav` `max-w-[calc(100vw-2rem)]`:** This is good, prevents it from touching screen edges.
*   **`MobileNavMenu` content:**
    *   Ensure the list of navigation items and buttons inside `MobileNavMenu` are easily tappable and scrollable if the list is long. The current implementation using `<a>` tags and `NavbarButton`s should be okay.
*   **`behavior` prop in `SecurityNavbar.tsx`:** The `scroll-away` behavior used on `HouseDetail` pages means the navbar will be full-width.
    *   **Action:** In `components/ui/resizable-navbar.tsx`, for `NavBody` (desktop) and `MobileNav` (mobile), when `visible` is `false` (i.e., at the top or when `scroll-away` is active), they take `width: "100%"`. Ensure the padding within `MobileNavHeader` (`px-0` in `MobileNav` then `px-4` in `NavBody`) provides adequate spacing from screen edges. The current `max-w-[calc(100vw-2rem)]` on `MobileNav` itself should handle this.
    *   Test `SecurityNavbar` on `HouseDetail` pages specifically to see if the full-width mobile navbar content (logo, items, toggle) looks good and is not cramped.

### 10. `components/ui/spotlight-new-demo.tsx`

*   The `GlowingStarsBackgroundCard` is used. Ensure its content is responsive.
    *   **Action:** Check `GlowingStarsTitle` and `GlowingStarsDescription`. They use `text-3xl` and `text-base` respectively. Consider responsive font sizes if they appear too large on small screens.
        ```diff
        // In components/ui/glowing-stars.tsx
        // For GlowingStarsTitle:
        - <h2 className={cn("text-3xl mb-2 font-medium tracking-tight", ...)}>
        + <h2 className={cn("text-2xl sm:text-3xl mb-2 font-medium tracking-tight", ...)}>
        // For GlowingStarsDescription:
        - <p className={cn("text-base max-w-[20rem] font-normal leading-tight", ...)}>
        + <p className={cn("text-sm sm:text-base max-w-[20rem] font-normal leading-tight", ...)}>
        ```

### 11. `components/SecurityVideoChapter.tsx`

*   `AutoplayVideo` component uses `w-full h-auto` for the video element, which is good for responsiveness.
*   The grid layout (`md:grid-cols-2`) will stack on mobile.
*   The text overlays on videos: `text-sm` and `text-xl font-semibold`. Check if these are readable on mobile and don't overflow their `bg-black/30` backdrop. Adjust font sizes if needed.
    *   **Action (if needed):**
        ```diff
        // Inside SecurityVideoChapter.tsx, for text overlays:
        - <div className="text-sm">Impressive</div>
        - <div className="text-xl font-semibold">Streaming Responsiveness</div>
        + <div className="text-xs sm:text-sm">Impressive</div>
        + <div className="text-lg sm:text-xl font-semibold">Streaming Responsiveness</div>
        ```
        (Apply to other overlays similarly).

### 12. `components/ui/feature-steps.tsx`

*   Image container: `h-[250px] md:h-[400px] lg:h-[500px]`. This is responsive.
*   Text column for features: `max-h-[400px] overflow-y-auto`. This is good for handling content overflow.
*   Individual feature items: Font sizes (`text-base`, `text-sm`) should be fine. The layout with icon and text should stack well.

### 13. `components/ui/bento-grid.tsx`, `components/ui/glowing-bento-grid.tsx`, `components/ui/gradient-bento-grid.tsx`

*   These grids use `md:grid-cols-3` or `md:grid-cols-12`. They will stack to a single column on mobile by default, which is usually desired for bento grids.
*   Ensure content within each `BentoGridItem` (title, description, image, features) is well-formatted and readable when items are stacked.
*   Images within items use `object-contain` and often `h-40` or similar. This should be fine.