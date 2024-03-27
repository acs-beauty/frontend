export interface IRangeSliderProps {
    min: number; 
    max: number; 
    step?: number; 
    // defaultValue: number
    // onChange: (values: [number, number]) => void; 
    initialValues?: [number, number]; 
    disabled?: boolean; 
  }