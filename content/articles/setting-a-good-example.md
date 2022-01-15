---
type: article
title: Setting a good example for using Markdown
date: 2020-01-01
---

# Paragraph

Nearly all Markdown applications support the basic syntax outlined in John Gruber’s original design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.

To create a line break (`<br>`), end a line with two or more spaces, and then type return.

# Inline

Inline elements can be styled using **bold** and _italic_ inline styles.

## Bold

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

## Italic

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

## Plain text

You can also `inline plain text`.

## Links

To create a link, enclose the link text in brackets and then follow it immediately with the URL in parentheses (e.g., \*\*\*\*My favourite search engine is [Duck Duck Go](http://www.duckduckgo.com)).

# Headings

To create a heading, add number signs (`#`) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., `### My Header`).

Headings come in many sizes:

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

# Block-quotes

To create a blockquote, add a `>` in front of a paragraph

> Dorothy followed her through many of the beautiful rooms in her castle.

# Lists

You can organize items into ordered and unordered lists.

## Ordered lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

1. First item
2. Second item
   1. Child item 1
   2. Child item 2
3. Third item
4. Fourth item

## **Unordered Lists**

To create an unordered list, add dashes (`-`) asterisks (`*`), or plus signs (`+`) in front of line items. Indent one or more items to create a nested list.

- First item
- Second item
- Third item
  - Child item 1
  - Child item 2
- Fourth item

# Tables

To add a table, use three or more hyphens to create each column’s header, and use pipes (`|`) to separate each column. For compatibility, you should also add a pipe on either end of the row.

| Table heading 1 | Table heading 2 | Table heading 3 |
| --------------- | --------------- | --------------- |
| Apples          | Property 1      | Property 1      |
| Oranges         | Property 2      | Property 2      |
| Mango           | Property 3      | Property 3      |

# Images

![https://images.unsplash.com/photo-1637249769470-3c4f4506a263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80](https://images.unsplash.com/photo-1637249769470-3c4f4506a263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)

# Code

Many Markdown processors support syntax highlighting for fenced code blocks. This feature allows you to add colour highlighting for whatever language your code was written in. To add syntax highlighting, specify a language next to the back-ticks before the fenced code block.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

# Emoji

There are two ways to add emoji to Markdown files: copy and paste the emoji into your Markdown-formatted text, or type *emoji short-codes*. For example:

- Gone camping! ⛺ Be back soon.
- That is so funny! 😂
