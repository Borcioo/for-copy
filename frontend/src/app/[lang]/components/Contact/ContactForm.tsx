"use client"

import Link from "next/link"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Textarea} from "@/components/ui/textarea"
import {Checkbox} from "@/components/ui/checkbox"


import {Input} from "@/components/ui/input"
import {useForm} from "react-hook-form";
import {useState} from "react";

interface ContactFormProps {
    data: {
        nameLabel: string;
        emailLabel: string;
        phoneLabel: string;
        messageLabel: string;
        fileLabel: string;
        termsText: string;
        buttonText: string;
    }
}

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Enter name and last name",
    }),
    email: z.string().email({message: "Enter email in valid format"}),
    phone: z.string().regex(phoneRegex, 'Invalid Number!'),
    message: z
        .string()
        .min(0, {})
        .max(160, {
            message: "Message must not be shorter than 160 characters.",
        }),
    terms: z.boolean(),
})

export function ContactForm({data}: ContactFormProps) {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            terms: false,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        form.reset()
        console.log(values)

    }

    const [fileName, setFileName] = useState<string>('')


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className=" flex flex-col justify-end max-w-[552px] w-4/5 h-[730px] mt-16 lg:mt-0">
                <div className="flex flex-col gap-3">

                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel
                                    className="text-[#737373] font-normal text-base pl-6">{data.nameLabel}</FormLabel>
                                <FormControl>
                                    <Input className="rounded-none h-14" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel
                                    className="text-[#737373] font-normal text-base pl-6">{data.emailLabel}</FormLabel>
                                <FormControl>
                                    <Input className="rounded-none h-14" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel
                                    className="text-[#737373] font-normal text-base pl-6">{data.phoneLabel}</FormLabel>
                                <FormControl>
                                    <Input className="rounded-none h-14" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel
                                    className="text-[#737373] font-normal text-base pl-6">{data.messageLabel}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="h-44 resize-none rounded-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <button type="button"
                            className="rounded-none border-2 border-[#DFDFDF] border-dashed flex items-center h-14 w-full "
                            onClick={() => {
                                const input = document.getElementById('fileUpload')
                                input?.click()
                            }}>
                        <div className="w-full flex items-center px-7">
                            <svg className="mt-[2px]" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.57143 3.55556V14.4444H4V3.55556H5.57143ZM13.4286 3.55556H5.57143V2H13.4286V3.55556ZM15 14.4444V3.55556H13.4286V14.4444H8.71429V6.66667H10.2857V12.8889H11.8571V6.66667H10.2857V5.11111H8.71429V6.66667H7.14286V14.4444H8.71429V16H13.4286V14.4444H15Z"
                                      fill="#737373"/>
                                <path d="M7.14286 5.11111V6.66667H8.71429V5.11111H7.14286Z" fill="#737373"/>
                                <path d="M11.8571 5.11111H10.2857V6.66667H11.8571V5.11111Z" fill="#737373"/>
                            </svg>
                            <p className="text-[#737373] text-base">{fileName !== '' ? fileName : data.fileLabel}</p>
                        </div>
                        <Input type='file' id='fileUpload' onChange={(e) => {
                            if (e.target.files) {
                                setFileName(e.target.files[0].name)
                            }
                        }}
                               className="hidden"/>
                    </button>
                </div>
                <FormField
                    control={form.control}
                    name="terms"
                    render={({field}) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-10">
                            <FormControl>
                                <Checkbox required className='border-[#F00000] rounded-none' id="terms"
                                          checked={field.value}
                                          onCheckedChange={field.onChange}/>
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>{data.termsText}</FormLabel>
                            </div>
                        </FormItem>
                    )}
                />
                <Button className="min-h-[54px] mt-8 flex gap-4 bg-[#F00000] rounded-none " type="submit">
                    <p className="font-bold">{data.buttonText}</p>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H4V4H0V0Z" fill="white"/>
                        <path d="M4 4H8V8H4V4Z" fill="white"/>
                        <path d="M8 8H12V12H8V8Z" fill="white"/>
                        <path d="M4 12H8V16H4V12Z" fill="white"/>
                        <path d="M0 16H4V20H0V16Z" fill="white"/>
                    </svg>
                </Button>
            </form>
        </Form>
    )
}
