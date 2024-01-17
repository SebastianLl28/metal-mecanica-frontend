import { styled } from 'styled-components'
import ResponsivePagination from 'react-responsive-pagination'

const Pagination = ({ total, current, onChange }) => {
  return (
    <PaginationStyle total={total} current={current} onPageChange={onChange} />
  )
}

export default Pagination

const PaginationStyle = styled(ResponsivePagination)`
  display: flex;
  gap: 1rem;

  .page-link {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 2em;
    font-weight: bold;
    box-shadow: 0px 0px 10px 0px #00000028;
  }

  .page-item.active .page-link {
    background-color: #6366f1;
    color: #fff;
  }

  .page-item.disabled .page-link {
    background-color: #f1f1f1;
  }
`
