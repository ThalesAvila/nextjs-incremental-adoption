import React, { useRef, useEffect } from 'react'
import {
  Input as InputRCT,
  Label,
  FormGroup,
  InputGroup,
  InputGroupAddon
} from 'reactstrap'

import cls from 'classnames'
import Icon from '@/components/Icon'

// TODO
// type InputProps = {
//   textLabel: string
//   type: string
//   id: string
//   placeholder: string
//   valid: boolean
//   value: string
//   isRequired: boolean
//   disabled: boolean
//   size,
//   style,
//   addonTypeLeft,
//   groupAddonLeft,
//   addonTypeRight,
//   groupAddonRight,
//   formGroupClass,
//   feedback,
//   icon,
//   colorIcon,
//   iconTop,
//   name,
//   mask,
//   maskChar,
//   tag,
//   className,
//   min,
//   max,
//   formGroupStyle,
//   inputStyle,
//   autoFocus?: boolean
//   onFocus?: Function
//   onKeyDown?: Function
//   onClickIcon?: Function
//   onBlur?: Function
//   onChange?: Function
// }

const Input = ({
  textLabel,
  type,
  id,
  placeholder,
  valid,
  invalid,
  value,
  isRequired,
  disabled,
  onBlur,
  onChange,
  size,
  style,
  addonTypeLeft,
  groupAddonLeft,
  addonTypeRight,
  groupAddonRight,
  formGroupClass,
  feedback,
  icon,
  colorIcon,
  iconTop,
  name,
  onFocus,
  mask,
  maskChar,
  tag,
  className,
  min,
  max,
  formGroupStyle,
  inputStyle,
  onClickIcon,
  onKeyDown,
  autoFocus,
  ...props
}) => {
  const ref = useRef()

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus()
    }
  }, [autoFocus, ref])

  const input = () => (
    <>
      <InputRCT
        {...props}
        tag={tag}
        mask={mask}
        maskchar={maskChar}
        min={min}
        max={max}
        onFocus={onFocus}
        name={name}
        className={cls(
          {
            [`form-control-${style}-${size}`]: style && size
          },
          'input-component',
          className
        )}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        required={isRequired}
        disabled={disabled}
        type={type}
        id={id || name}
        valid={valid}
        invalid={invalid}
        style={inputStyle}
        onKeyDown={onKeyDown}
        innerRef={ref}
      />
      <div
        data-cy="input-login-label"
        className={cls({
          'valid-feedback': valid,
          'invalid-feedback': !valid
        })}
      >
        {feedback}
      </div>
    </>
  )

  return (
    <FormGroup
      style={{ position: 'relative', ...formGroupStyle }}
      className={formGroupClass}
    >
      {textLabel && type !== 'hidden' && (
        <Label className="form-control-label" htmlFor={id}>
          {textLabel}
        </Label>
      )}
      {groupAddonLeft || groupAddonRight ? (
        <InputGroup className={`input-group-${size}`}>
          {groupAddonLeft && (
            <InputGroupAddon addonType={addonTypeLeft}>
              {groupAddonLeft}
            </InputGroupAddon>
          )}
          {input()}
          {groupAddonRight && (
            <InputGroupAddon addonType={addonTypeRight}>
              {groupAddonRight}
            </InputGroupAddon>
          )}
        </InputGroup>
      ) : (
        input()
      )}
      {valid && (
        <span style={{ top: iconTop }} className="icon-input-feedback">
          <Icon color="success" icon="check-circle" />
        </span>
      )}
      {invalid && (
        <span style={{ top: iconTop }} className="icon-input-feedback">
          <Icon color="danger" icon="times-circle" />
        </span>
      )}
      {!valid && !invalid && icon && (
        <span
          style={{ top: iconTop }}
          className={textLabel ? 'label-icon-input' : 'just-icon-input'}
        >
          <Icon color={colorIcon} icon={icon} onClick={onClickIcon} />
        </span>
      )}
    </FormGroup>
  )
}

export default Input
