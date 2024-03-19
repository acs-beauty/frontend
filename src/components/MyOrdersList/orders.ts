export interface IOrder {
  id: number
  date: string
  status: string
  count: number
  total: number
}

export const orders: IOrder[] = [
  {
    id: 1245,
    date: "08.08.2023",
    status: "Виконано",
    count: 3,
    total: 1161,
  },
  {
    id: 1245,
    date: "08.08.2023",
    status: "Виконано",
    count: 3,
    total: 1161,
  },
  {
    id: 1245,
    date: "08.08.2023",
    status: "Повернення",
    count: 3,
    total: 1161,
  },
  {
    id: 1245,
    date: "08.08.2023",
    status: "Виконано",
    count: 3,
    total: 1161,
  },
]
