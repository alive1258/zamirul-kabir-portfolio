// "use client";

// import { useForm } from "react-hook-form";
// import { BsSend, BsCheckCircle, BsTelephone } from "react-icons/bs";
// import { useState } from "react";

// interface ContactFormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// const ContactForm = () => {
//   const [isSuccess, setIsSuccess] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting, isValid, touchedFields },
//     reset,
//     watch,
//   } = useForm<ContactFormData>({
//     mode: "onChange",
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     },
//   });

//   const characterCount = watch("message", "").length;
//   const maxCharacters = 1000;

//   const onSubmit = async (data: ContactFormData) => {
//     try {
//       // Simulate API call - replace with your actual email service
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       setIsSuccess(true);
//       reset();

//       // Reset success message after 5 seconds
//       setTimeout(() => setIsSuccess(false), 5000);
//     } catch (error) {
//       console.error("Contact form error:", error);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   // Phone number validation regex
//   const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

//   return (
//     <div className="relative">
//       {isSuccess && (
//         <div className="absolute -top-4 left-0 right-0 animate-fade-in">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#34a578]/20 to-cyan-400/20 border border-[#34a578]/30 rounded-full text-[#34a578] text-sm">
//             <BsCheckCircle className="text-lg" />
//             <span>Message sent successfully! Ill get back to you soon.</span>
//           </div>
//         </div>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
//         {/* Three column layout for name, email, phone */}
//         <div className="grid md:grid-cols-2  gap-4">
//           {/* Name Field */}
//           <div className="relative group/input">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <label className="block text-sm text-gray-400">
//                   Your Name *
//                 </label>
//                 {touchedFields.name && !errors.name && (
//                   <span className="text-xs text-[#34a578] flex items-center gap-1">
//                     <BsCheckCircle className="text-xs" />
//                     Valid
//                   </span>
//                 )}
//               </div>
//               <input
//                 type="text"
//                 {...register("name", {
//                   required: "Name is required",
//                   minLength: {
//                     value: 2,
//                     message: "Name must be at least 2 characters",
//                   },
//                   maxLength: {
//                     value: 50,
//                     message: "Name must be less than 50 characters",
//                   },
//                 })}
//                 className={`w-full px-5 py-4 bg-white/5 backdrop-blur-sm border ${
//                   errors.name
//                     ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
//                     : touchedFields.name && !errors.name
//                     ? "border-[#34a578]/50 focus:border-[#34a578] focus:ring-2 focus:ring-[#34a578]/20"
//                     : "border-gray-600/30 focus:border-[#34a578]/50 focus:ring-2 focus:ring-[#34a578]/20"
//                 } rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10`}
//                 placeholder="John Doe"
//               />
//               {errors.name && (
//                 <p className="mt-2 text-sm text-red-400 flex items-center gap-1 animate-shake">
//                   <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
//                   {errors.name.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Email Field */}
//           <div className="relative group/input">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-transparent to-[#34a578]/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <label className="block text-sm text-gray-400">
//                   Email Address *
//                 </label>
//                 {touchedFields.email && !errors.email && (
//                   <span className="text-xs text-cyan-400 flex items-center gap-1">
//                     <BsCheckCircle className="text-xs" />
//                     Valid
//                   </span>
//                 )}
//               </div>
//               <input
//                 type="email"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Please enter a valid email address",
//                   },
//                 })}
//                 className={`w-full px-5 py-4 bg-white/5 backdrop-blur-sm border ${
//                   errors.email
//                     ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
//                     : touchedFields.email && !errors.email
//                     ? "border-cyan-400/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
//                     : "border-gray-600/30 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
//                 } rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10`}
//                 placeholder="john@example.com"
//               />
//               {errors.email && (
//                 <p className="mt-2 text-sm text-red-400 flex items-center gap-1 animate-shake">
//                   <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Phone Field */}
//         </div>

//         {/* Message Field */}
//         <div className="relative group/input">
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-[#34a578]/20 via-cyan-500/20 to-[#45d19c]/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
//           <div>
//             <div className="flex items-center justify-between mb-2">
//               <label className="block text-sm text-gray-400">
//                 Your Message *
//               </label>
//               <div className="text-xs text-gray-500">
//                 <span
//                   className={
//                     characterCount > maxCharacters ? "text-red-400" : ""
//                   }
//                 >
//                   {characterCount}
//                 </span>
//                 /{maxCharacters}
//               </div>
//             </div>
//             <textarea
//               {...register("message", {
//                 required: "Message is required",
//                 minLength: {
//                   value: 10,
//                   message: "Message must be at least 10 characters",
//                 },
//                 maxLength: {
//                   value: maxCharacters,
//                   message: `Message must be less than ${maxCharacters} characters`,
//                 },
//               })}
//               rows={5}
//               className={`w-full px-5 py-4 bg-white/5 backdrop-blur-sm border ${
//                 errors.message
//                   ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
//                   : touchedFields.message && !errors.message
//                   ? "border-[#34a578]/50 focus:border-[#34a578] focus:ring-2 focus:ring-[#34a578]/20"
//                   : "border-gray-600/30 focus:border-[#34a578]/50 focus:ring-2 focus:ring-[#34a578]/20"
//               } rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none relative z-10`}
//               placeholder="Tell me about your project, timeline, and requirements..."
//             ></textarea>
//             {errors.message && (
//               <p className="mt-2 text-sm text-red-400 flex items-center gap-1 animate-shake">
//                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
//                 {errors.message.message}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Submit button with enhanced design */}
//         <div className="relative group/btn pt-4">
//           <div className="absolute -inset-2 bg-gradient-to-r from-[#34a578] via-cyan-500 to-[#45d19c] rounded-xl blur opacity-0 group-hover/btn:opacity-30 transition duration-500"></div>
//           <button
//             type="submit"
//             disabled={isSubmitting || !isValid}
//             className="relative w-full py-4 px-6 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3 group"
//           >
//             {isSubmitting ? (
//               <>
//                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                 <span>Sending Message...</span>
//               </>
//             ) : (
//               <>
//                 <BsSend className="text-xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
//                 <span>Send Message</span>
//                 <svg
//                   className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </>
//             )}
//           </button>

//           {/* Form status hint */}
//           <div className="mt-4 text-center">
//             <p className="text-xs text-gray-500">
//               {!isValid ? (
//                 <span className="text-gray-400">
//                   Please fill all required fields (*) correctly
//                 </span>
//               ) : (
//                 <span className="text-[#34a578]">
//                   ✓ All required fields are valid. Ready to send!
//                 </span>
//               )}
//             </p>
//             <p className="text-xs text-gray-400 mt-1">
//               I typically respond within 24 hours
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

"use client";

import { useForm } from "react-hook-form";
import { BsSend, BsCheckCircle, BsTelephone } from "react-icons/bs";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, touchedFields },
    reset,
    watch,
  } = useForm<ContactFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const characterCount = watch("message", "").length;
  const maxCharacters = 1000;

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call - replace with your actual email service
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  // Phone number validation regex
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

  return (
    <div className="relative">
      {isSuccess && (
        <div className="absolute -top-4 left-0 right-0 animate-fade-in z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#34a578]/20 to-cyan-400/20 border border-[#34a578]/30 rounded-full text-[#34a578] text-sm md:text-base w-full md:w-auto">
            <BsCheckCircle className="text-lg" />
            <span className="text-xs md:text-sm">
              Message sent successfully! Ill get back to you soon.
            </span>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 pt-8 md:pt-4"
      >
        {/* Three column layout for name, email, phone - Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {/* Name Field */}
          <div className="relative group/input md:col-span-1">
            <div className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
            <div>
              <div className="flex items-center justify-between mb-1 md:mb-2">
                <label className="block text-xs md:text-sm text-gray-400">
                  Your Name *
                </label>
                {touchedFields.name && !errors.name && (
                  <span className="text-[10px] md:text-xs text-[#34a578] flex items-center gap-1">
                    <BsCheckCircle className="text-[10px] md:text-xs" />
                    <span className="hidden md:inline">Valid</span>
                  </span>
                )}
              </div>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must be less than 50 characters",
                  },
                })}
                className={`w-full px-3 md:px-5 py-3 md:py-4 bg-white/5 backdrop-blur-sm border text-sm md:text-base ${
                  errors.name
                    ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : touchedFields.name && !errors.name
                    ? "border-[#34a578]/50 focus:border-[#34a578] focus:ring-2 focus:ring-[#34a578]/20"
                    : "border-gray-600/30 focus:border-[#34a578]/50 focus:ring-2 focus:ring-[#34a578]/20"
                } rounded-lg md:rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 md:mt-2 text-xs md:text-sm text-red-400 flex items-center gap-1 animate-shake">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="relative group/input md:col-span-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-transparent to-[#34a578]/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
            <div>
              <div className="flex items-center justify-between mb-1 md:mb-2">
                <label className="block text-xs md:text-sm text-gray-400">
                  Email Address *
                </label>
                {touchedFields.email && !errors.email && (
                  <span className="text-[10px] md:text-xs text-cyan-400 flex items-center gap-1">
                    <BsCheckCircle className="text-[10px] md:text-xs" />
                    <span className="hidden md:inline">Valid</span>
                  </span>
                )}
              </div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`w-full px-3 md:px-5 py-3 md:py-4 bg-white/5 backdrop-blur-sm border text-sm md:text-base ${
                  errors.email
                    ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : touchedFields.email && !errors.email
                    ? "border-cyan-400/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    : "border-gray-600/30 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                } rounded-lg md:rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 md:mt-2 text-xs md:text-sm text-red-400 flex items-center gap-1 animate-shake">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div className="relative group/input md:col-span-1 lg:col-span-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#45d19c]/20 via-transparent to-cyan-400/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
            <div>
              <div className="flex items-center justify-between mb-1 md:mb-2">
                <label className="text-xs md:text-sm text-gray-400 flex items-center gap-1">
                  <BsTelephone className="text-xs md:text-sm" />
                  Phone Number *
                </label>
                {touchedFields.phone && !errors.phone && (
                  <span className="text-[10px] md:text-xs text-[#45d19c] flex items-center gap-1">
                    <BsCheckCircle className="text-[10px] md:text-xs" />
                    <span className="hidden md:inline">Valid</span>
                  </span>
                )}
              </div>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: phoneRegex,
                    message: "Please enter a valid phone number",
                  },
                })}
                className={`w-full px-3 md:px-5 py-3 md:py-4 bg-white/5 backdrop-blur-sm border text-sm md:text-base ${
                  errors.phone
                    ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : touchedFields.phone && !errors.phone
                    ? ""
                    : ""
                } rounded-lg md:rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10`}
                placeholder="+1234567890"
              />
              {errors.phone && (
                <p className="mt-1 md:mt-2 text-xs md:text-sm text-red-400 flex items-center gap-1 animate-shake">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="relative group/input">
          <div className="absolute -inset-0.5  rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
          <div>
            <div className="flex items-center justify-between mb-1 md:mb-2">
              <label className="block text-xs md:text-sm text-gray-400">
                Your Message *
              </label>
              <div className="text-[10px] md:text-xs text-gray-500">
                <span
                  className={
                    characterCount > maxCharacters ? "text-red-400" : ""
                  }
                >
                  {characterCount}
                </span>
                /{maxCharacters}
              </div>
            </div>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                maxLength: {
                  value: maxCharacters,
                  message: `Message must be less than ${maxCharacters} characters`,
                },
              })}
              rows={4}
              className={`w-full px-3 md:px-5 py-3 md:py-4 bg-white/5 backdrop-blur-sm border text-sm md:text-base ${
                errors.message
                  ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  : touchedFields.message && !errors.message
                  ? ""
                  : ""
              } rounded-lg md:rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none relative z-10`}
              placeholder="Tell me about your project, timeline, and requirements..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 md:mt-2 text-xs md:text-sm text-red-400 flex items-center gap-1 animate-shake">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit button with enhanced design */}
        <div className="relative group/btn pt-2 md:pt-4">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#34a578] via-cyan-500 to-[#45d19c] rounded-lg md:rounded-xl blur opacity-0 group-hover/btn:opacity-30 transition duration-500"></div>
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="relative w-full py-3 md:py-4 px-4 md:px-6 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-bold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-2xl hover:shadow-[#34a578]/40 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2 md:gap-3 group text-sm md:text-base"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <BsSend className="text-lg md:text-xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
                <span>Send Message</span>
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </>
            )}
          </button>

          {/* Form status hint */}
          <div className="mt-3 md:mt-4 text-center">
            <p className="text-[10px] md:text-xs text-gray-500">
              {!isValid ? (
                <span className="text-gray-400">
                  Please fill all required fields (*) correctly
                </span>
              ) : (
                <span className="text-[#34a578]">
                  ✓ All required fields are valid. Ready to send!
                </span>
              )}
            </p>
            <p className="text-[10px] md:text-xs text-gray-400 mt-1">
              I typically respond within 24 hours
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
