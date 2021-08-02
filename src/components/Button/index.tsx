import React from 'react'
import cls from 'classnames'
import Icon from '../Icon'
// import Loading from '../Loading
import { StyledButton } from './style'

const Button = ({
  children,
  disabled,
  icon,
  iconPosition,
  iconType,
  pull,
  rounded,
  className,
  loading,
  onClick,
  size,
  iconSize,
  type,
  style,
  iconColor,
  iconWeight,
  limitedChar,
  ...props
}) => (
  <StyledButton
    {...props}
    limitedchar={limitedChar}
    type={type}
    size={size}
    style={style}
    onClick={onClick}
    disabled={disabled || loading}
    className={cls(
      {
        [`${iconPosition}`]: iconPosition,
        rounded,
        [`pull-${pull}`]: pull,
        'just-icon-size': !children && icon
      },
      className
    )}
  >
    {(icon || loading) &&
      (loading ? (
        'Carregando'
      ) : (
        <Icon
          icon={icon}
          size={iconSize}
          iconWeight={iconWeight}
          color={iconColor}
          type={iconType}
        />
      ))}
    {!loading && children}
  </StyledButton>
)

export default Button
