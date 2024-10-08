'use client';
import { useForm, Form } from "react-hook-form"
import Button from "./Button";

type Inputs = {
  name: string
  email: string
  phone?: string
  message: string
}

export default function ContactForm() {
  const { register, control, formState: { errors, isSubmitSuccessful, submitCount }, } = useForm<Inputs>();
  const disableSubmit = submitCount > 3 || Object.keys(errors).filter(a => a !== 'root').length > 0;
  
  return <>
    {isSubmitSuccessful ? (
      <p className="bg-green-50 text-green-500 p-1 rounded-sm mb-4" role="alert">✅ Your message has been sent!</p>
    ) : (
      <Form action="/api/email" control={control}  headers={{ 'Content-Type':  'application/json'  }}>
        <div className="md:flex md:gap-4">
          <label className="block mb-4 md:flex-1">
            <span className={errors.name ? 'text-red-500' : ''}>Name</span>
            <input
              type="text"
              required
              {...register("name", { required: "Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
              className={`block w-full mt-1 p-4 bg-white bg-opacity-10 rounded-md border-gray-200 border-solid  border-2 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name ? <p className="text-red-500 text-sm" role="alert">{errors.name.message}</p> : null}
          </label>

          <label className="block mb-4 md:flex-1">
            <span className={errors.email ? 'text-red-500' : ''}>Email</span>
            <input
              type="email"
              required
              {...register("email", { required: "Email is required" })}
              aria-invalid={errors.email ? "true" : "false"}
              className={`block w-full mt-1 p-4 bg-white bg-opacity-10 rounded-md border-gray-200 border-solid  border-2 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email ? <p className="text-red-500 text-sm" role="alert">{errors.email.message}</p> : null}
          </label>
        </div>

        <label className="block mb-4">
          <span className={errors.message ? 'text-red-500' : ''}>Message</span>
          <textarea
            required
            rows={4}
            {...register("message", { required: "Message is required" })}
            aria-invalid={errors.message ? "true" : "false"}
            className={`block w-full mt-1 p-4 bg-white bg-opacity-10 rounded-md border-gray-200 border-solid  border-2 ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message ? <p className="text-red-500 text-sm" role="alert">{errors.message.message}</p> : null}
        </label>

        {errors.root?.server ? (
          <p className="bg-red-50 text-red-500 p-1 rounded-sm mb-4" role="alert">⚠️ There was an error sending your message. Please try again later.</p>
        ) : null}

        <Button type="submit" disabled={disableSubmit}>Submit</Button>
      </Form>
    )}
  </>;
}