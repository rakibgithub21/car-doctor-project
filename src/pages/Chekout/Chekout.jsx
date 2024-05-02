import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from 'sweetalert2'


const Chekout = () => {
    const service = useLoaderData()
    const { _id,title, price,img } = service;
    const { user } = useContext(AuthContext)

    const handleBookedService = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const booking = {
            name,email,date,price,img:img,service_id:_id,service:title
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added in Database',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                }
                console.log(data);
            })

    }
    return (
        <div className="my-10 min-h-[533px]">
            <h3 className="text-5xl font-semibold text-center">{title}</h3>
            <form onSubmit={handleBookedService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" defaultValue={user?.displayName} type="text" placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">date</span>
                        </label>
                        <input name="date" type="date" placeholder="date" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" readOnly defaultValue={user?.email} type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input name="price" type="text" defaultValue={'$ '+price} className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-outline" type="submit" value={'Order Confirmed'} />
                </div>

            </form>
        </div>
    );
};

export default Chekout;