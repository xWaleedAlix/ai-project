import React from 'react'

const page = () => {
  return (
    <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-14 h-14 rounded-full mx-auto" src="/1.jpeg" alt="" width="100" height="100"></img>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hi,I’m Waleed Ali. I am truly grateful for the opportunity to enroll in this AI session. Thank you, Sir”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Waleed Ali
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          AI Student, Rahim Yar Khan
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}
export default page