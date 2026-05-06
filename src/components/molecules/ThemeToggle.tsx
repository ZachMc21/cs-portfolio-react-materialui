import { Button } from "@mui/material"

export default function ThemeToggle({ themeSwitch }: any ) {
  return (
    <Button 
      className="themeToggle"
      type="button"
      onClick={themeSwitch}
      aria-label="change theme color"
    />
  )
}