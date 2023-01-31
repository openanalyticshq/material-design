import OriginButton from './button'
// import Fab from './Fab'
// import ExtendedFab from './ExtendedFab'

export type ButtonProps = typeof OriginButton 
// & {
  // Fab: typeof Fab
  // ExtendedFab: typeof ExtendedFab
// }

export const Button = OriginButton as ButtonProps
// Button.Fab = Fab
// Button.ExtendedFab = ExtendedFab

export default Button
