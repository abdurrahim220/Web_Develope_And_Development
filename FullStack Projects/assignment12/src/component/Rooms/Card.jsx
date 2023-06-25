
import HeartButton from '../Button/HeartButton'


const Card = ({ item }) => {




    return (
        <div className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
                >
                    <img
                        className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
                        src={item.image}
                        alt='item'
                    />
                    <div
                        className='
            absolute
            top-3
            right-3
          '
                    >
                        <HeartButton />
                    </div>
                </div>
                <div className='font-semibold text-lg'>Class Name:{item.category}</div>
                <div className='font-light text-neutral-500'>
                    Instructor name:{item.instructor_name}
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <div className='font-semibold'>Available seats:{item.available_seats}</div>
                    <br />
                    <div className='font-semibold text-lg'>Price:{item.price}</div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Card