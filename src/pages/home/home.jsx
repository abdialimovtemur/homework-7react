import React from 'react'
import { useForm } from 'react-hook-form'
import style from './style.module.scss'
import { Input } from '../../components/ui/input/input'
import { Button } from '../../components/ui/button'

export const Home = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data); // Konsolga ma'lumot chiqariladi
    };

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.form__info}>
                    <h1>Learn to code by watching others</h1>
                    <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </div>
                <div className={style.form__right}>
                    <Button variant="primary">Try it free 7 days then $20/mo. thereafter</Button>
                    <form className={style.form__right__inputs} onSubmit={handleSubmit(submit)}>
                        
                        {/* First Name */}
                        <Input 
                            {...register('firstName', { required: "First Name is required" })} 
                            placeholder="First Name" 
                        />
                        {errors.firstName && <p className={style.errorMessage}>{errors.firstName.message}</p>}
                        
                        {/* Last Name */}
                        <Input 
                            {...register('lastName', { required: "Last Name is required" })} 
                            placeholder="Last Name" 
                        />
                        {errors.lastName && <p className={style.errorMessage}>{errors.lastName.message}</p>}

                        {/* Email */}
                        <Input 
                            {...register('email', { 
                                required: "Email is required", 
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                            })} 
                            placeholder="Email Address" 
                        />
                        {errors.email && <p className={style.errorMessage}>{errors.email.message}</p>}

                        {/* Password */}
                        <Input 
                            {...register('password', { 
                                required: "Password is required", 
                                minLength: { value: 8, message: "Password must be at least 8 characters" } 
                            })} 
                            placeholder="Password" 
                            type="password" 
                        />
                        {errors.password && <p className={style.errorMessage}>{errors.password.message}</p>}

                        <Button type="submit" variant="success">CLAIM YOUR FREE TRIAL</Button>
                        <p>By clicking the button, you are agreeing to our Terms and Services</p>
                    </form>
                </div>
            </div>
        </div>
    );
};
