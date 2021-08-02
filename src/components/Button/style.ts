import styled, { css } from 'styled-components'
import { Button as ButtonStr } from 'reactstrap'

const limitedChar = limit => {
  return `
	    max-width: ${limit}ch;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap !important;
      display: block !important;
	  `
}

export const StyledButton = styled(ButtonStr)`
  ${({ theme, color }) =>
    color &&
    css`
      background-color: ${theme.colors[color]};
      border-color: ${theme.colors[color]};
    `}
  align-items: center !important;
  ${props => props.limitedchar && limitedChar(props.limitedchar)};
`
