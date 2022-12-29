import React from "react";

export const TextInput = React.forwardRef(({
  type="",
  placeholder="",
  ...rest
}, ref) => {
  return (
    <input
      className="inputs"
      type={type}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  )
})