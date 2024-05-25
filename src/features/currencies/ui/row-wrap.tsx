import { FC, ReactNode } from 'react'

interface RowWrapProps {
  children: ReactNode
}

const RowWrap: FC<RowWrapProps> = ({ children }) => {
  return (
    <div className="flex w-full border-[1px] border-gray-300 justify-between py-2 px-3 mb-2 rounded shadow-md">
      {children}
    </div>
  )
}

export default RowWrap
