"use client";
import React, { useState } from "react";


import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { SparklesCore } from "./ui/sparkles";




export function Contact() {
    const [loadingMessage, setLoadingMessage] = useState({
        loading: false,
        message:"",
        succes:false,
    })
    const [formData, setFormData] = useState({
        fullname:'',
        email:'',
        message:'',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]:value}));
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if(!formData?.fullname || !formData?.email || !formData?.message){
            setLoadingMessage({
                loading: false,
                message: "Please fill all fields!",
                sucess:false,
            })
            return;
        }
        setLoadingMessage({
            loading: true,
            message: "",
            sucess:false,
        })

        const formatData = {
            fullname: formData?.fullname,
            email: formData?.email,
            message: formData?.message,
        }

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formatData),
      });

        if(!response.ok){
            throw new Error("Network res was not ok")
        }

        const res = await response.json()

        if(res?.message){
            setFormData({
                fullname: '',
                email: '',
                message: '',
            })

            setLoadingMessage({
                loading: false,
                message: res?.message,
                succes:true,
            })
        }else{
            setLoadingMessage({
                loading: false,
                message: "Failed to send message!",
                succes:false,
            })
        }
    } catch (error) {
        setLoadingMessage({
            loading: false,
            message: "Failed to send message!",
            succes:false,
        })

        console.log("Contact from error:",error)
    }
    
  };
  return (
    (<div id="Contact"
      className=" border-t border-[#1d1d1d] max-w-[800px] back-drop-blur-[18px] bg-[#11121617] z-[20] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
        Write me a message ...
      </h2>
      {loadingMessage?.message && (
        <p
            className={`mt-[20px] text-[0.9rem] ${
            loadingMessage?.success ? "text-green-400" : "text-red-400"
            }`}
        >
            {loadingMessage?.message}
        </p>
        )}

      <form className="my-8" onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Full name</Label>
            <Input id="firstname" placeholder="Alice Bob" name="fullname" value={formData?.fullname} onChange={handleChange} type="text"/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Email Adress</Label>
            <Input id="lastname" placeholder="exemple@gmail.com" name="email" value={formData?.email} onChange={handleChange} type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Message</Label>
          <textarea id="message" placeholder="Say something" name="message" value={formData?.message} onChange={handleChange} className="p-[10px] rounded-[4px] outline-none border-none resize-none h-[140px] bg-[#27272A] text-black dark:text-white shadow-input file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 "/>
        </LabelInputContainer>


        <button
            className="relative group/btn block w-full bg-[#4E69E0] text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#4E69E0_inset,0px_-1px_0px_0px_#4E69E0_inset]"
            type="submit"
        >
        {!loadingMessage?.loading ?"Send Message →" : "...."}
        <BottomGradient />
        </button>

      </form>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};

export default Contact;