import React from 'react'
import cls from 'classnames'
import styled from 'styled-components'

const IconBackground = styled.div`
  width: 52px;
  height: 52px;
  opacity: 10%;
  border-radius: 4px;

  & + i {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Icon = ({
  id,
  icon,
  size,
  color,
  only,
  onClick,
  colorName,
  type,
  spacing,
  disabled,
  className,
  iconWeight,
  style,
  styleIcon,
  withBox,
  title
}) => {
  const bgClass = colorName || color ? `bg-${colorName || color}` : ''
  const textClass = colorName || color ? `text-${colorName || color}` : ''
  const spacingClass = spacing || ''
  const classNameVariable = !onClick ? className || '' : ''

  const iconComponent = () => (
    <i
      id={id}
      style={{
        ...(styleIcon || {}),
        fontSize: size,
        fontWeight: type !== 'r' ? iconWeight : 'none'
      }}
      className={cls(
        {
          [`fa${type}`]: type,
          [`fa-${icon}`]: icon,
          [`${textClass}`]: textClass,
          [`${spacingClass}`]: spacingClass,
          [`${classNameVariable}`]: classNameVariable
        },
        className
      )}
    />
  )

  const renderIcon = () => {
    if (withBox) {
      return (
        <>
          <IconBackground className={bgClass} />
          {iconComponent()}
        </>
      )
    }
    return iconComponent()
  }

  if (only) {
    return renderIcon()
  }
  if (onClick) {
    return (
      <button
        id={id}
        disabled={disabled}
        className={`btn-icon-link ${className}`}
        type="button"
        style={style}
        title={title}
        onClick={onClick}
      >
        {renderIcon()}
      </button>
    )
  }
  return (
    <span
      className="btn-inner--icon"
      title={title}
      style={withBox ? { ...style, position: 'relative' } : style}
    >
      {renderIcon()}
    </span>
  )
}

export default Icon
