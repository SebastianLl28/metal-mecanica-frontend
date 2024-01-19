import styled from 'styled-components'

const LoaderIcon = () => {
  return <Loader></Loader>
}

export default LoaderIcon

const Loader = styled.div`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #686868;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`

/* HTML: <div class="loader"></div> */
// .loader {
//   width: 50px;
//   padding: 8px;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: #25b09b;
//   --_m:
//     conic-gradient(#0000 10%,#000),
//     linear-gradient(#000 0 0) content-box;
//   -webkit-mask: var(--_m);
//           mask: var(--_m);
//   -webkit-mask-composite: source-out;
//           mask-composite: subtract;
//   animation: l3 1s infinite linear;
// }
// @keyframes l3 {to{transform: rotate(1turn)}}
