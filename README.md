# React Native FlatList Performance Issue

This repository demonstrates a common performance problem encountered when using `FlatList` in React Native with a large dataset. The app becomes slow or unresponsive due to inefficient rendering. The solution focuses on optimizing data handling and rendering techniques.

## Problem

The `FlatList` component, while efficient for smaller datasets, can struggle with thousands of items.  Without optimization, rendering all items simultaneously results in performance issues.

## Solution

The solution involves several key techniques to improve performance:

* **`keyExtractor`:** Using a unique key for each item is crucial for efficient updates and rendering.
* **`ItemSeparatorComponent`:** Adding a separator improves visual separation and can reduce flickering.
* **Data Pagination/Virtualization:** Fetching and rendering data in chunks reduces the initial load time and memory usage.