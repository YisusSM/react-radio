import styled from 'styled-components'

export const Sliderbar = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 2px;
  border-radius: 40px;
  background: ${(props) =>
        `linear-gradient(to right, #fff 0%, #fff ${props.value}%, #292828 ${props.value}%, #292828 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;
