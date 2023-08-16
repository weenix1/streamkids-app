import DoubleViewPanel from "./DoubleViewPanel";


const Registration = () => {
  return (
    <DoubleViewPanel leftContent={
      <div className="flex flex-col items-center justify-center h-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s" alt="registration" className="w-1/2" />
        <p className="text-xl">Register to create your account</p>
      </div>
    } rightContent={
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Registration</h1>
        <p className="text-xl">Register to create your account</p>
      </div>

    } />
  )
}

export default Registration;