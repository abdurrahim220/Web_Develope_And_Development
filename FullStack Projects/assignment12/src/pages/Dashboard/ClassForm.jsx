import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { addClasses } from '../../hooks/Classes';



const ClassForm = () => {
    const [className, setClassName] = useState('');
    const [classImage, setClassImage] = useState('');
    const [availableSeats, setAvailableSeats] = useState(0);
    const [price, setPrice] = useState(0);
    const {user}=useContext(AuthContext);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const category =form.className.value;
        const image = form.image.value;
        const available_seats=form.availableSeats.value;
        const price = form.price.value;
        const instructor_name=user?.displayName;
        const instructor_email=user?.email;
        const SaveData = {category,image,available_seats,price,instructor_email,instructor_name};
        // console.log(SaveData);

        addClasses(SaveData)
        .then(data => {
            console.log(data)
          })
          .catch(err => console.log(err))


        setClassName('');
        setClassImage('');
        setAvailableSeats(0);
        setPrice(0);
    };    
    

    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="className" className="w-32 font-medium">
                        Class Name:
                    </label>
                    <select
                        name="className"
                        className="form-select"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                    >
                        <option value="">Select a class</option>
                        <option value="StillLife">Still Life</option>
                        <option value="FigureDrawing">Figure Drawing</option>
                        <option value="Portraiture">Portraiture</option>
                        <option value="Landscape">Landscape</option>
                        <option value="AnimalsandWildlife">Animals and Wildlife</option>
                    </select>
                </div>

                <div className="flex items-center">
                    <label htmlFor="classImage" className="w-32 font-medium">
                        Class Image:
                    </label>
                    <input
                        type="url"
                        name="image"
                        className="form-input"
                        value={classImage}
                        onChange={(e) => setClassImage(e.target.value)}
                    />
                </div>

                <div className="flex items-center">
                    <label className="w-32 font-medium">Instructor Name:</label>
                    <input
                        type="text"
                        className="form-input"
                       name={user?.displayName}
                       value={user?.displayName}
                        
                    />
                </div>

                <div className="flex items-center">
                    <label className="w-32 font-medium">Instructor Email:</label>
                    <input
                        type="text"
                        className="form-input"
                        name={user?.email}
                        value={user?.email}
                 
                    />
                </div>

                <div className="flex items-center">
                    
                    <label htmlFor="availableSeats" className="w-32 font-medium">
                        Available Seats:
                    </label>

                    <input
                        type="number"
                        name="availableSeats"
                        className="form-input"
                        value={availableSeats}
                        onChange={(e) => setAvailableSeats(Number(e.target.value))}
                    />
                </div>

                <div className="flex items-center">
                    <label htmlFor="price" className="w-32 font-medium">
                        Price:
                    </label>

                    <input
                        type="number"
                        name="price"
                        className="form-input"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </div>
        </form>
        </div>
    );
};

export default ClassForm;
