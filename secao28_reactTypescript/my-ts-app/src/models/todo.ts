import React from "react"

interface Todo {
  id: number
  txt: string
}

interface ctx {
  items: Todo[],
  addToDoHandler: (txt: string) => void,
  deleteToDo: (id: number) => void
}

interface Props {
  children: React.ReactNode
}

export type {Todo, ctx, Props}