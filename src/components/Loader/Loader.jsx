import { ThreeDots } from 'react-loader-spinner'

import { Wrapper } from './Loader.styled'

const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#00D8FF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Wrapper>
  )
}
export default Loader
