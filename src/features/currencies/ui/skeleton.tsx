import RowWrap from '@/features/currencies/ui/row-wrap.tsx'

const Skeleton = () => {
  const elementsCount = Array.from({ length: 10 }, (_, i) => i)

  return (
    <>
      {elementsCount.map((el) => (
        <RowWrap key={el}>
          <div>
            <div className="w-[30px] h-[24px] bg-gray-300 mb-2 rounded" />
            <div className="w-[100px] h-[12px] bg-gray-300 rounded" />
          </div>
          <div>
            <div className="w-[90px] h-[12px] bg-gray-300 mb-2 rounded" />
            <div className="w-[80px] h-[12px] bg-gray-300 rounded" />
          </div>
        </RowWrap>
      ))}
    </>
  )
}

export default Skeleton
