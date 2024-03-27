export const sortOptions: { label: string,  value: "popularity" | "cheaper" | "expensive" | "name"}[]=[
   
   { label: "за популярністю", value: "popularity"},
 { label: "спочатку дешевше", value: "cheaper"},
 {label: "спочатку дорожче", value: "expensive"},
 { label: "за назвою", value: "name"}
]

export const countOptions: { label: "9" | "18" | "32" | "64" | "99",  value: string}[]=[
  { value: "one", label: "9"},
  { value: "two", label: "18"},
{ value: "three", label: "32"},
{value: "four", label: "64"},
{ value: "five", label: "99"}
]