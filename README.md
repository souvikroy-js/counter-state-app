## Title:

Counter State App

## Description:

A React Counter App built with Next.js, TailwindCSS, Shadcn UI buttons, and Lucide icons.
It lets users increase/decrease the counter by +1, -1, +10, -10, while keeping the value between 0 and 99.
Includes button disabling logic to prevent invalid actions.

## Tech Stack:

React (Next.js) → UI framework
useState → Counter state management
TailwindCSS → Styling
Shadcn/UI → Button component
Lucide-react → Icons (CirclePlus, CircleMinus)

## Features:

Easy Navigation 
Clean UI & UX
Dark mode & Light mode 

## Project Flow/Details:

*State*

const [count, setCount] = useState(0);
Manages the counter value (range: 0–99).

*Functions*

  plusOne() → Adds 1 if count < 99.
  minusOne() → Subtracts 1 if count >= 1.
  plusTen() → Adds 10 if count <= 89.
  minusTen() → Subtracts 10 if count >= 10.
