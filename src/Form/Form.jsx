import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const Form = ()=>{

    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full name is required "),
        email: yup.string().email("Your Email is required").required(),
        age: yup.number("Type in a number").positive().integer().min(18). required(),
        password: yup.string().min(4).max(8).required("your password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password Don't Match").required()

    });
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver:yupResolver(schema),
    })


    const onSubmit =(data)=>{
        console.log(data)
    }
    return <div className="ml-[110px] mt-[150px] md:ml-[500px]">
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)} action="form">
        <input className="border-2 rounded-md py-1 px-2  hover:bg-slate-500 hover:text-gray-200" type="text" placeholder="Full Name " {...register("fullName")}/>
        <p className="text-red-600 text-5">{errors.fullName?.message}</p>
        <input className="border-2 rounded-md py-1 px-2 mt-3 hover:bg-slate-500 hover:text-gray-200" type="text" placeholder="Email" {...register("email")}/>
        <p className="text-red-600 text-5">{errors.email?.message}</p>
        <input className="border-2 rounded-md py-1 px-2 mt-3 hover:bg-slate-500 hover:text-gray-200" type="number" placeholder="Age" {...register("age")}/>
        <p className="text-red-600 text-5">{errors.age?.message}</p>
        <input className="border-2 rounded-md py-1 px-2 mt-3 hover:bg-slate-500 hover:text-gray-200" type="password" placeholder="Password" {...register("password")}/>
        <p className="text-red-600 text-5">{errors.password?.message}</p>
        <input className="border-2 rounded-md py-1 px-2 mt-3 hover:bg-slate-500 hover:text-gray-200" type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
        <p className="text-red-600 text-5">{errors.confirmPassword?.message}</p>
        <input className="py-1 px-2 border-2 bg-white hover:bg-green-700 shadow-lxx rounded-lg mt-3" type="submit" />
    </form>
    </div>
}