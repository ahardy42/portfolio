---
title: 'Local RAG Documentation Search for Claude'
description: 'An MCP server that gives Claude semantic search over any documentation corpus — starting with Samsung Smart TV developer docs.'
date: 2026-03-07
tags: ['Python', 'ChromaDB', 'FastMCP', 'RAG', 'MCP']
status: 'in-progress'
link: 'https://github.com/ahardy42/devdocs-rag-mcp'
linkText: 'Check it out'
---

## What is this?

A local MCP (Model Context Protocol) server that lets Claude Code search documentation using RAG (Retrieval-Augmented Generation). Documentation is ingested into ChromaDB as vector embeddings, and Claude can query it using five MCP tools:

- `search_docs`
- `list_collections`
- `collection_stats`
- `get_doc_context`
- `ingest_docs`

The first documentation corpus is the Samsung Smart TV developer portal. The architecture supports any documentation set via named collections.

## Why I wanted to do it

I'm currently working on a Tizen project, it's looking like there are more in the pipeline, and the hallucination rate for Tizen docs is pretty high... Plus, I thought it would be fun to create my own MCP server for really focused reference information.

The rapid pace of development for newer models, better skills and tooling may render this obsolete immediately... It may actually already be less effective than just using a newer agentic model. That's not really the point. The point is I'm learning a bit more about how these work and I'm polishing up my Python skills.

## What I'm learning

- How to set up a simple MCP server locally that Claude can use to help me pair code with my beep-boop buddy.
- How FastMCP can be used to quickly set up some tooling
- Some fun ways to ingest huge amounts of data with BeautifulSoup and a recursive crawler given some start page.
